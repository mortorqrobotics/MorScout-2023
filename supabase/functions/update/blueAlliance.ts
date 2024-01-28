import { MatchDatabase, MatchScout } from "../types/matchTypes.ts";
import { Match } from "../types/types.ts";

const TBA_KEY: string = Deno.env.get("BLUE_ALLIANCE_KEY") as string;
const EVENT: string = Deno.env.get("EVENT") as string;

let matchData: Match[];

async function updateMatchData() {
  matchData = await getMatchData();
}

async function fillMatchData(currentData: MatchDatabase, matchNumber: string, teamNumber: string) {
  if (!matchData) {
    await updateMatchData();
  }
  if (currentData.mobility_points) return;
  let extraData = getBlueAllianceData(matchData, matchNumber, fixTeamNumber(teamNumber));
  if (!extraData) return;

  let autoPoints =
    extraData.autoChargeStationPoints +
    (currentData.auto_community_points as number) +
    extraData.autoMobilityPoints;
  let teleopPoints = extraData.endGamePoints + (currentData.teleop_community_points as number);

  return {
    id: currentData.id,
    auto_charge_station: extraData.autoChargeStation,
    auto_charge_station_points: extraData.autoChargeStationPoints,
    auto_points: autoPoints,
    end_game: extraData.endGame,
    end_game_points: extraData.endGamePoints,
    mobility_points: extraData.autoMobilityPoints,
    teleop_points: teleopPoints,
    total_points: autoPoints + teleopPoints,
  };
}

async function getMatchData(): Promise<Match[]> {
  const response = await fetch(`https://www.thebluealliance.com/api/v3/event/${EVENT}/matches`, {
    headers: {
      "X-TBA-Auth-Key": TBA_KEY,
    },
  });
  let data: Match[] = await response.json();
  data = data.filter((data) => data.comp_level === "qm");
  return data;
}

type allianceOption = "red" | "blue";
type robotNumberOptions = "1" | "2" | "3";
let allianceOptions: allianceOption[] = ["red", "blue"];

let autoChargeStationMap = { Docked: 8, None: 0 };
let endGameMap = { Docked: 6, Park: 2, None: 0 };
let autoMobilityMap = { Yes: 3, No: 0 };
type autoMobility = "Yes" | "No";
type autoChargeStation = keyof typeof autoChargeStationMap;
type endGameChargeStation = keyof typeof endGameMap;
type bridgeState = "Level" | "NotLevel";

function getBlueAllianceData(matchData: Match[], matchNumber: string, teamNumber: string) {
  let match = matchData.find((match) => match.match_number.toString() == matchNumber);
  if (!match) return;

  let alliance: allianceOption | undefined;
  let robotNumber: robotNumberOptions | undefined;
  try {
    for (let allianceOption of allianceOptions) {
      if (!match.alliances) return;
      if (!(allianceOption in match.alliances)) return;
      let teamKeys = match.alliances[allianceOption].team_keys;
      if (teamKeys.includes(fixTeamNumber(teamNumber))) {
        alliance = allianceOption;
        console.log(matchNumber, teamNumber);
        robotNumber = (
          teamKeys.indexOf(fixTeamNumber(teamNumber)) + 1
        ).toString() as robotNumberOptions;
        break;
      }
    }
  } catch (e) {
    console.log(e);
    return;
  }
  if (!alliance || !robotNumber) return;

  let autoChargeStationPre = match.score_breakdown[alliance][
    `autoChargeStationRobot${robotNumber}`
  ] as autoChargeStation;
  let autoChargeStationPoints = autoChargeStationMap[autoChargeStationPre];
  let autoChargeStation: string = autoChargeStationPre;
  let autoBalanced = match.score_breakdown[alliance].autoBridgeState as bridgeState;
  if (autoChargeStationPre === "Docked" && autoBalanced === "Level") {
    autoChargeStation = "Engaged";
    autoChargeStationPoints += 4;
  }
  let autoMobility = match.score_breakdown[alliance][`mobilityRobot${robotNumber}`] as autoMobility;
  let autoMobilityPoints = autoMobilityMap[autoMobility];
  let endGamePre = match.score_breakdown[alliance][
    `endGameChargeStationRobot${robotNumber}`
  ] as endGameChargeStation;
  let endGame: string = endGamePre;
  let endGamePoints = endGameMap[endGamePre];
  let endGameBalanced = match.score_breakdown[alliance].endGameBridgeState as bridgeState;
  if (endGamePre === "Docked" && endGameBalanced === "Level") {
    endGame = "Engaged";
    endGamePoints += 4;
  }

  return { autoChargeStation, autoChargeStationPoints, autoMobilityPoints, endGame, endGamePoints };
}

function fixTeamNumber(teamNumber: string) {
  if (teamNumber.startsWith("frc")) return teamNumber;
  return `frc${teamNumber}`;
}

export { fillMatchData, updateMatchData, matchData };

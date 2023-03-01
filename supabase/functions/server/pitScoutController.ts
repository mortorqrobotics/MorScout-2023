import { CommunityState } from "../types/matchTypes.ts";
import { PitDatabase, PitScout } from "../types/pitTypes.ts";
import {
  autoMultiplier,
  calculateGamePieceCount,
  calculateGamePiecePoints,
  teleopMultiplier,
} from "./util.ts";

function getScoringPositionIndex(data: PitScout) {
  if (data.scoring_position === "Bottom") return 0;
  if (data.scoring_position === "Middle") return 1;
  if (data.scoring_position === "Top") return 2;
  return 2;
}

function calculateAutoPoints(data: PitScout) {
  let score = 0;
  if (data.auto_charge_station === "Docked") score += 8;
  if (data.auto_charge_station === "Engaged") score += 12;
  score += data.auto_community * autoMultiplier[getScoringPositionIndex(data)];
  return score;
}

function calculateTeleopPoints(data: PitScout) {
  let score = 0;
  score += calculateGamePiecePoints(data.ideal_community, teleopMultiplier);
  if (data.end_game === "Docked") score += 6;
  if (data.end_game === "Engaged") score += 10;
  return score;
}

function createPitDatabase(data: PitScout): PitDatabase {
  let teleopPoints = calculateTeleopPoints(data);
  let autoPoints = calculateAutoPoints(data);

  const pitData: PitDatabase = {
    auto_charge_station: data.auto_charge_station,
    auto_community: data.auto_community,
    auto_points: autoPoints,
    comments: data.comments,
    defense: data.defense,
    drivetrain: data.drivetrain,
    end_game: data.end_game,
    ideal_community: JSON.stringify(data.ideal_community),
    intake: data.intake,
    knocked_over_cones: data.knocked_over_cones,
    preferred_game_piece: data.preferred_game_piece,
    preferred_pickup_area: data.preferred_pickup_area,
    preferred_substation: data.preferred_substation,
    scoring_position: data.scoring_position,
    scouter: data.scouter,
    team_number: data.team_number,
    teleop_points: teleopPoints,
    total_points: autoPoints + teleopPoints,
    weight: data.weight,
  };

  return pitData;
}

export { createPitDatabase };

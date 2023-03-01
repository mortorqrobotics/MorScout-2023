import { MatchDatabase, MatchScout } from "../types/matchTypes.ts";
import { autoMultiplier, calculateGamePieceCount, calculateGamePiecePoints } from "./util.ts";

function getAutoData(data: MatchScout) {
  return {
    auto_charge_station: null,
    auto_charge_station_points: null,
    auto_community: JSON.stringify(data.auto_community),
    auto_community_points: calculateGamePiecePoints(data.auto_community, autoMultiplier),
    auto_game_piece_count: calculateGamePieceCount(data.auto_community),
    auto_points: null,
  };
}

function getTeleopData(data: MatchScout) {
  return {
    teleop_community: JSON.stringify(data.teleop_community),
    teleop_community_points: calculateGamePiecePoints(data.teleop_community, autoMultiplier),
    teleop_game_piece_count: calculateGamePieceCount(data.teleop_community),
    teleop_points: null,
  };
}

function createMatchDatabase(data: MatchScout): MatchDatabase {
  const matchData: MatchDatabase = {
    ...getAutoData(data),
    team_number: data.team_number,
    scouter: null,
    comment: data.comment,
    defense: data.defense,
    end_game: null,
    end_game_points: null,
    match_number: data.match_number,
    mobility_points: null,
    ...getTeleopData(data),
    total_points: null,
  };

  return matchData;
}

export { createMatchDatabase };

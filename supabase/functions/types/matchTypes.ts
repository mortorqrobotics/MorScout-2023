type CurrentPiece = "Cone" | "Cube" | "None";
type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

type CommunityRow = [
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece,
  CurrentPiece
];

interface CommunityState {
  B: CommunityRow;
  M: CommunityRow;
  T: CommunityRow;
}

interface MatchScout {
  team_number: string;
  match_number: string;
  scouter: string;
  auto_community: CommunityState;
  teleop_community: CommunityState;
  defense: number;
  comment: string;
}

interface MatchDatabase {
  auto_charge_station: string | null;
  auto_charge_station_points: number | null;
  auto_community: Json | null;
  auto_community_points: number | null;
  auto_game_piece_count: number | null;
  auto_points: number | null;
  comment: string | null;
  created_at?: string | null;
  defense: number | null;
  end_game: string | null;
  end_game_points: number | null;
  id?: number;
  match_number: string | null;
  mobility_points: number | null;
  scouter: string | null;
  team_number: string | null;
  teleop_community: Json | null;
  teleop_community_points: number | null;
  teleop_game_piece_count: number | null;
  teleop_points: number | null;
  total_points: number | null;
}

export type { MatchScout, MatchDatabase, CommunityState, CommunityRow };

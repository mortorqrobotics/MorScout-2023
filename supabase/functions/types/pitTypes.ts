import { CommunityState } from "./matchTypes.ts";
type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

interface PitScout {
  team_number: string;
  scouter: string;
  weight: string;
  drivetrain: string;
  scoring_position: string;
  preferred_game_piece: string;
  intake: boolean;
  knocked_over_cones: string;
  preferred_pickup_area: string;
  preferred_substation: string;
  auto_community: number;
  auto_charge_station: string;
  ideal_community: CommunityState;
  end_game: string;
  defense: number;
  comments: string;
}

interface PitDatabase {
  auto_charge_station: string | null;
  auto_community: number | null;
  auto_points: number | null;
  comments: string | null;
  created_at?: string | null;
  defense: number | null;
  drivetrain: string | null;
  end_game: string | null;
  id?: number;
  ideal_community: Json | null;
  intake: boolean | null;
  knocked_over_cones: string | null;
  preferred_game_piece: string | null;
  preferred_pickup_area: string | null;
  preferred_substation: string | null;
  scoring_position: string | null;
  scouter: string | null;
  team_number: string | null;
  teleop_points: number | null;
  total_points: number | null;
  weight: string | null;
}

export type { PitDatabase, PitScout };

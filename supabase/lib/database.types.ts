export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      MatchScout: {
        Row: {
          auto_charge_station: string | null
          auto_charge_station_points: number | null
          auto_community: Json | null
          auto_community_points: number | null
          auto_game_piece_count: number | null
          auto_points: number | null
          comment: string | null
          created_at: string | null
          defense: number | null
          end_game: string | null
          end_game_points: number | null
          id: number
          match_number: string | null
          mobility_points: number | null
          scouter: string | null
          team_number: string | null
          teleop_community: Json | null
          teleop_community_points: number | null
          teleop_game_piece_count: number | null
          teleop_points: number | null
          total_points: number | null
        }
        Insert: {
          auto_charge_station?: string | null
          auto_charge_station_points?: number | null
          auto_community?: Json | null
          auto_community_points?: number | null
          auto_game_piece_count?: number | null
          auto_points?: number | null
          comment?: string | null
          created_at?: string | null
          defense?: number | null
          end_game?: string | null
          end_game_points?: number | null
          id?: number
          match_number?: string | null
          mobility_points?: number | null
          scouter?: string | null
          team_number?: string | null
          teleop_community?: Json | null
          teleop_community_points?: number | null
          teleop_game_piece_count?: number | null
          teleop_points?: number | null
          total_points?: number | null
        }
        Update: {
          auto_charge_station?: string | null
          auto_charge_station_points?: number | null
          auto_community?: Json | null
          auto_community_points?: number | null
          auto_game_piece_count?: number | null
          auto_points?: number | null
          comment?: string | null
          created_at?: string | null
          defense?: number | null
          end_game?: string | null
          end_game_points?: number | null
          id?: number
          match_number?: string | null
          mobility_points?: number | null
          scouter?: string | null
          team_number?: string | null
          teleop_community?: Json | null
          teleop_community_points?: number | null
          teleop_game_piece_count?: number | null
          teleop_points?: number | null
          total_points?: number | null
        }
      }
      PitScout: {
        Row: {
          auto_charge_station: string | null
          auto_community: number | null
          auto_points: number | null
          comments: string | null
          created_at: string | null
          defense: number | null
          drivetrain: string | null
          end_game: string | null
          id: number
          ideal_community: Json | null
          intake: boolean | null
          knocked_over_cones: string | null
          preferred_game_piece: string | null
          preferred_pickup_area: string | null
          preferred_substation: string | null
          scoring_position: string | null
          scouter: string | null
          team_number: string | null
          teleop_points: number | null
          total_points: number | null
          weight: string | null
        }
        Insert: {
          auto_charge_station?: string | null
          auto_community?: number | null
          auto_points?: number | null
          comments?: string | null
          created_at?: string | null
          defense?: number | null
          drivetrain?: string | null
          end_game?: string | null
          id?: number
          ideal_community?: Json | null
          intake?: boolean | null
          knocked_over_cones?: string | null
          preferred_game_piece?: string | null
          preferred_pickup_area?: string | null
          preferred_substation?: string | null
          scoring_position?: string | null
          scouter?: string | null
          team_number?: string | null
          teleop_points?: number | null
          total_points?: number | null
          weight?: string | null
        }
        Update: {
          auto_charge_station?: string | null
          auto_community?: number | null
          auto_points?: number | null
          comments?: string | null
          created_at?: string | null
          defense?: number | null
          drivetrain?: string | null
          end_game?: string | null
          id?: number
          ideal_community?: Json | null
          intake?: boolean | null
          knocked_over_cones?: string | null
          preferred_game_piece?: string | null
          preferred_pickup_area?: string | null
          preferred_substation?: string | null
          scoring_position?: string | null
          scouter?: string | null
          team_number?: string | null
          teleop_points?: number | null
          total_points?: number | null
          weight?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

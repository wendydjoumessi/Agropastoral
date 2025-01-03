export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      localities: {
        Row: {
          id: string
          name: string
          latitude: number
          longitude: number
          has_green_pastures: boolean
          has_roads: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          latitude: number
          longitude: number
          has_green_pastures?: boolean
          has_roads?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          latitude?: number
          longitude?: number
          has_green_pastures?: boolean
          has_roads?: boolean
          created_at?: string
        }
      }
      water_points: {
        Row: {
          id: string
          locality_id: string
          name: string
          type: string
          latitude: number
          longitude: number
          created_at: string
        }
        Insert: {
          id?: string
          locality_id: string
          name: string
          type: string
          latitude: number
          longitude: number
          created_at?: string
        }
        Update: {
          id?: string
          locality_id?: string
          name?: string
          type?: string
          latitude?: number
          longitude?: number
          created_at?: string
        }
      }
    }
  }
}
export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string;
          university: string | null;
          program: string | null;
          study_level: string | null;
          subscription_tier: 'free' | 'premium';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          display_name?: string;
          university?: string | null;
          program?: string | null;
          study_level?: string | null;
          subscription_tier?: 'free' | 'premium';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          display_name?: string;
          university?: string | null;
          program?: string | null;
          study_level?: string | null;
          subscription_tier?: 'free' | 'premium';
          updated_at?: string;
        };
        Relationships: [];
      };
      study_progress: {
        Row: {
          id: string;
          user_id: string;
          course_code: string;
          course_name: string;
          mastery_pct: number;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_code: string;
          course_name: string;
          mastery_pct?: number;
          updated_at?: string;
        };
        Update: {
          course_code?: string;
          course_name?: string;
          mastery_pct?: number;
          updated_at?: string;
        };
        Relationships: [];
      };
      student_activities: {
        Row: {
          id: string;
          user_id: string;
          activity_type: 'mentor' | 'correction' | 'exam';
          title: string;
          detail: string;
          score: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          activity_type: 'mentor' | 'correction' | 'exam';
          title: string;
          detail?: string;
          score?: number | null;
          created_at?: string;
        };
        Update: {
          title?: string;
          detail?: string;
          score?: number | null;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
type RoutineResponse = {
  type: "routine";
  goal: string;
  level: "principiante" | "intermedio" | "avanzado";
  daysPerWeek: number;
  routine: Array<{
    day: string;
    exercises: Array<{
      name: string;
      sets: number;
      reps: string;
      restSeconds: number;
    }>;
  }>;
  note?: string;
};

export type GymInfoResponse = {
  type: "gym_info";
  name: string;
  schedule: {
    days: string;
    hours: string;
  };
  socialMedia: {
    owner?: {
      platform: "instagram";
      handle: string;
    };
    gym: Array<{
      platform: "instagram" | "tiktok";
      handle: string;
    }>;
  };
};
export type LLMResponse = RoutineResponse | GymInfoResponse;

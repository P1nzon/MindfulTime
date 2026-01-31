export interface ScheduleItem {
  title: string;
  startTime: string;
  endTime: string;
  type: "meeting" | "focus" | "personal";
}

export interface Break {
  startTime: string;
  endTime: string;
  duration: number;
}

export interface MindfulActivity {
  title: string;
  description: string;
  duration: number;
  icon: string;
}

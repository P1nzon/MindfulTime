import { ScheduleItem, Break } from "./types";

// Demo schedule data
export const demoSchedule: ScheduleItem[] = [
  {
    title: "Morning Standup",
    startTime: "09:00",
    endTime: "09:30",
    type: "meeting",
  },
  {
    title: "Deep Work Session",
    startTime: "09:45",
    endTime: "11:30",
    type: "focus",
  },
  {
    title: "Team Sync",
    startTime: "11:30",
    endTime: "12:00",
    type: "meeting",
  },
  {
    title: "Lunch Break",
    startTime: "12:00",
    endTime: "13:00",
    type: "personal",
  },
  {
    title: "Client Presentation",
    startTime: "13:30",
    endTime: "14:30",
    type: "meeting",
  },
  {
    title: "Project Planning",
    startTime: "15:00",
    endTime: "16:00",
    type: "focus",
  },
  {
    title: "1:1 with Manager",
    startTime: "16:30",
    endTime: "17:00",
    type: "meeting",
  },
];

function timeToMinutes(time: string): number {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
}

function minutesToTime(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}`;
}

export function detectBreaks(schedule: ScheduleItem[]): Break[] {
  const breaks: Break[] = [];
  const sortedSchedule = [...schedule].sort(
    (a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
  );

  for (let i = 0; i < sortedSchedule.length - 1; i++) {
    const currentEnd = timeToMinutes(sortedSchedule[i].endTime);
    const nextStart = timeToMinutes(sortedSchedule[i + 1].startTime);
    const gapMinutes = nextStart - currentEnd;

    // Only consider gaps of 10 minutes or more as breaks
    if (gapMinutes >= 10) {
      breaks.push({
        startTime: minutesToTime(currentEnd),
        endTime: minutesToTime(nextStart),
        duration: gapMinutes,
      });
    }
  }

  return breaks;
}

import { ScheduleItem } from "@/lib/types";

interface ScheduleSectionProps {
  schedule: ScheduleItem[];
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground mb-4">
        {"Today's Schedule"}
      </h2>
      <div className="space-y-2">
        {schedule.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors"
          >
            <div className="flex-shrink-0 w-20 text-sm font-medium text-muted-foreground">
              {item.startTime}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground truncate">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {item.startTime} - {item.endTime}
              </p>
            </div>
            <div className="flex-shrink-0">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  item.type === "meeting"
                    ? "bg-accent text-accent-foreground"
                    : item.type === "focus"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary text-secondary-foreground"
                }`}
              >
                {item.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

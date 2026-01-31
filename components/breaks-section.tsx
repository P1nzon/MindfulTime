"use client";

import { useState } from "react";
import { Break } from "@/lib/types";
import { mindfulActivities } from "@/lib/activities";

interface BreaksSectionProps {
  breaks: Break[];
}

export function BreaksSection({ breaks }: BreaksSectionProps) {
  const [expandedBreak, setExpandedBreak] = useState<number | null>(null);

  const getRandomActivity = (duration: number) => {
    const suitable = mindfulActivities.filter((a) => a.duration <= duration);
    return suitable[Math.floor(Math.random() * suitable.length)];
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-foreground">
          Detected Breaks
        </h2>
        <span className="text-sm text-muted-foreground">
          {breaks.length} break{breaks.length !== 1 ? "s" : ""} found
        </span>
      </div>

      {breaks.length === 0 ? (
        <div className="p-8 rounded-lg bg-card border border-border text-center">
          <p className="text-muted-foreground">
            No breaks detected in your schedule. Consider adding some buffer
            time between meetings.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {breaks.map((breakItem, index) => {
            const activity = getRandomActivity(breakItem.duration);
            const isExpanded = expandedBreak === index;

            return (
              <div
                key={index}
                className="rounded-lg bg-card border border-border overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedBreak(isExpanded ? null : index)
                  }
                  className="w-full p-4 flex items-center justify-between hover:bg-secondary/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {breakItem.startTime} - {breakItem.endTime}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {breakItem.duration} min break
                      </p>
                    </div>
                  </div>
                  <svg
                    className={`w-5 h-5 text-muted-foreground transition-transform ${
                      isExpanded ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {isExpanded && activity && (
                  <div className="px-4 pb-4 border-t border-border pt-4">
                    <div className="rounded-lg bg-secondary/50 p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-foreground text-sm">
                            {activity.icon}
                          </span>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {activity.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">
                            {activity.description}
                          </p>
                          <p className="text-xs text-primary mt-2 font-medium">
                            {activity.duration} min activity
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

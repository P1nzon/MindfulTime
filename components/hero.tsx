import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Wellness</span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
              Find moments of calm in your busy schedule
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-pretty">
              MindfulTime analyzes your calendar to discover hidden breaks and
              suggests personalized mindful activities to help you recharge
              throughout the day.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-secondary"
              >
                See How It Works
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              No credit card required. 14-day free trial.
            </p>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
              <div className="relative bg-card rounded-2xl border border-border p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Today&apos;s Schedule</p>
                    <p className="text-sm text-muted-foreground">3 mindful moments found</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <ScheduleItem
                    time="9:00 AM"
                    title="Team Standup"
                    type="meeting"
                  />
                  <MindfulBreak
                    time="10:30 AM"
                    duration="15 min"
                    activity="Deep breathing exercise"
                  />
                  <ScheduleItem
                    time="11:00 AM"
                    title="Client Call"
                    type="meeting"
                  />
                  <MindfulBreak
                    time="12:00 PM"
                    duration="20 min"
                    activity="Mindful walking break"
                  />
                  <ScheduleItem
                    time="2:00 PM"
                    title="Project Review"
                    type="meeting"
                  />
                  <MindfulBreak
                    time="3:30 PM"
                    duration="10 min"
                    activity="Desk stretches"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ScheduleItem({
  time,
  title,
  type,
}: {
  time: string
  title: string
  type: string
}) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
      <span className="text-sm font-medium text-muted-foreground w-20">
        {time}
      </span>
      <div className="flex-1">
        <p className="text-sm font-medium text-foreground">{title}</p>
        <p className="text-xs text-muted-foreground capitalize">{type}</p>
      </div>
    </div>
  )
}

function MindfulBreak({
  time,
  duration,
  activity,
}: {
  time: string
  duration: string
  activity: string
}) {
  return (
    <div className="flex items-center gap-4 p-3 rounded-lg bg-primary/10 border border-primary/20">
      <span className="text-sm font-medium text-primary w-20">{time}</span>
      <div className="flex-1">
        <p className="text-sm font-medium text-primary">{activity}</p>
        <p className="text-xs text-primary/70">{duration} break</p>
      </div>
      <Sparkles className="h-4 w-4 text-primary" />
    </div>
  )
}

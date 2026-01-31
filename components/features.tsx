import { Brain, Calendar, Clock, Heart, Sparkles, Target } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Smart Schedule Analysis",
    description:
      "Automatically scans your calendar to identify gaps and opportunities for mindful breaks throughout your day.",
  },
  {
    icon: Brain,
    title: "AI-Powered Suggestions",
    description:
      "Personalized activity recommendations based on your preferences, energy levels, and available time.",
  },
  {
    icon: Clock,
    title: "Flexible Break Durations",
    description:
      "Whether you have 5 minutes or 30, get activities perfectly tailored to fit your available time.",
  },
  {
    icon: Heart,
    title: "Holistic Wellness",
    description:
      "Activities spanning meditation, stretching, breathing exercises, and mindful movement.",
  },
  {
    icon: Target,
    title: "Progress Tracking",
    description:
      "Monitor your wellness journey with insights on your mindful minutes and consistency streaks.",
  },
  {
    icon: Sparkles,
    title: "Gentle Reminders",
    description:
      "Timely notifications that respect your focus while encouraging healthy breaks.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">Features</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Everything you need for mindful breaks
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            MindfulTime combines intelligent scheduling with personalized
            wellness activities to help you stay balanced and energized.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

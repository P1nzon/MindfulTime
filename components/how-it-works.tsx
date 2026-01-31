const steps = [
  {
    step: "01",
    title: "Connect Your Calendar",
    description:
      "Securely link your Google, Outlook, or Apple calendar. We analyze your schedule while keeping your data private.",
  },
  {
    step: "02",
    title: "Set Your Preferences",
    description:
      "Tell us about your wellness goals, preferred activities, and ideal break durations. Customize notifications to your liking.",
  },
  {
    step: "03",
    title: "Discover Mindful Moments",
    description:
      "Our AI identifies the perfect times for breaks and suggests activities tailored to your schedule and energy needs.",
  },
  {
    step: "04",
    title: "Recharge & Thrive",
    description:
      "Follow guided activities, track your progress, and feel the difference as you build a sustainable wellness routine.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary mb-3">How It Works</p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground text-balance">
            Start your mindful journey in minutes
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-pretty">
            Getting started with MindfulTime is simple. Follow these four steps
            to transform your daily routine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
              )}
              <div className="text-5xl font-serif font-bold text-primary/20 mb-4">
                {item.step}
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

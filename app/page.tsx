import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScheduleSection } from "@/components/schedule-section";
import { BreaksSection } from "@/components/breaks-section";
import { demoSchedule, detectBreaks } from "@/lib/schedule";

export default function HomePage() {
  const schedule = demoSchedule;
  const breaks = detectBreaks(schedule);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8">
        <div className="space-y-8">
          <ScheduleSection schedule={schedule} />
          <BreaksSection breaks={breaks} />
        </div>
      </main>

      <Footer />
    </div>
  );
}

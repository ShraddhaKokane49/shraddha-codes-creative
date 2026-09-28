import { Target } from "lucide-react";

const goals = [
  "Develop strong expertise in frontend development and UI/UX design",
  "Build scalable and user-friendly digital applications",
  "Continuously learn emerging web technologies",
  "Contribute to impactful projects that improve user experiences",
  "My short-term goal is to gain practical experience through internships and real-world projects", 
  "My long-term goal is to become a skilled software developer specializing in AI and web technologies",
];

const CareerGoals = () => (
  <section id="career" className="bg-background py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-foreground mb-10 text-center">Career Goals</h2>

      <div className="max-w-xl mx-auto space-y-4">
        {goals.map((g, i) => (
          <div
            key={i}
            className="flex items-start gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors"
          >
            <Target className="text-primary flex-shrink-0 mt-0.5" size={18} />
            <p className="font-body text-sm text-muted-foreground">{g}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CareerGoals;

import {
  Code2, Database, Palette, Eye, Users, Lightbulb, Layout,
} from "lucide-react";

const technicalSkills = [
  {
    category: "Frontend Development",
    icon: <Layout size={20} />,
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Programming Languages",
    icon: <Code2 size={20} />,
    items: ["C", "C++", "Java", "Python"],
  },
  {
    category: "Databases",
    icon: <Database size={20} />,
    items: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Design Tools",
    icon: <Palette size={20} />,
    items: ["Figma", "UI Prototyping"],
  },
];

const strengths = [
  { icon: <Eye size={20} />, label: "Strong attention to detail in interface design" },
  { icon: <Lightbulb size={20} />, label: "Creative problem solving" },
  { icon: <Layout size={20} />, label: "Focus on improving user experience" },
  { icon: <Users size={20} />, label: "Good collaboration and communication in team projects" },
];

const Skills = () => (
  <section id="skills" className="bg-card py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-foreground mb-10 text-center">Expertise and Strengths</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
        {technicalSkills.map((s) => (
          <div
            key={s.category}
            className="rounded-xl border border-border bg-background p-6 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary">{s.icon}</span>
              <h3 className="text-base text-foreground font-heading">{s.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {s.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xl text-foreground mb-6 text-center">Strengths</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        {strengths.map((s) => (
          <div key={s.label} className="flex items-start gap-3 p-4 rounded-lg bg-background border border-border">
            <span className="text-primary mt-0.5">{s.icon}</span>
            <p className="font-body text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

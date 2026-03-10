const projects = [
  {
    title: "SmartCare – Healthcare Application",
    description:
      "Designed a mobile healthcare application to simplify doctor appointment booking.",
    features: [
      "Clean and accessible UI",
      "Readable typography",
      "Easy navigation",
      "Improved usability",
    ],
  },
  {
    title: "TaskFlow – Smart To-Do and Productivity App",
    description:
      "Designed a task management application interface for efficient task tracking.",
    features: [
      "Minimal interface",
      "Structured layout",
      "Reduced cognitive load",
      "Improved productivity",
    ],
  },
];

const Projects = () => (
  <section id="projects" className="bg-background py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-foreground mb-10 text-center">Selected Projects</h2>

      <div className="focus-shift-container grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="focus-shift-item rounded-xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
          >
            <h3 className="text-lg text-foreground mb-2">{p.title}</h3>
            <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
              {p.description}
            </p>
            <ul className="space-y-1">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="font-body text-xs text-muted-foreground flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;

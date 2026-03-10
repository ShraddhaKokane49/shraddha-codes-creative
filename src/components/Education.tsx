import { GraduationCap } from "lucide-react";

const Education = () => (
  <section id="education" className="bg-background py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-foreground mb-10 text-center">Education</h2>

      <div className="max-w-xl mx-auto rounded-xl border border-border bg-card p-8">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
            <GraduationCap className="text-accent-foreground" size={24} />
          </div>
          <div>
            <h3 className="text-lg text-foreground">B.Tech in Computer Science</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">
              Vidyalankar Institute of Technology, Mumbai
            </p>
            <p className="font-body text-sm text-muted-foreground mt-1">2024 – 2028</p>
            <p className="font-body font-medium text-primary text-sm mt-2">CGPA: 9.3</p>
            <p className="font-body text-muted-foreground text-sm mt-3 leading-relaxed">
              Actively involved in building projects that apply theoretical knowledge into
              practical applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;

import { Briefcase, Award } from "lucide-react";

const Experience = () => (
  <section id="experience" className="bg-card py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl text-foreground mb-10 text-center">
        Experience & Achievements
      </h2>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* Role */}
        <div className="rounded-xl border border-border bg-background p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Briefcase className="text-accent-foreground" size={20} />
            </div>
            <div>
              <h3 className="text-base text-foreground">
                Frontend Developer & Graphic Designer
              </h3>
              <p className="font-body text-sm text-muted-foreground mt-1">
                Startup Collaboration
              </p>
              <ul className="mt-3 space-y-1">
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Contributed to branding and digital presence of the startup
                </li>
                <li className="font-body text-sm text-muted-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                  Designed ad creatives for digital marketing and promotions
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="rounded-xl border border-border bg-background p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
              <Award className="text-accent-foreground" size={20} />
            </div>
            <div>
              <h3 className="text-base text-foreground">Certifications</h3>
              <ul className="mt-3 space-y-2">
                <li className="font-body text-sm text-muted-foreground">
                  NPTEL Java Certification – IIT Kharagpur (Elite Gold)
                </li>
                <li className="font-body text-sm text-muted-foreground">
                  NPTEL Data Analysis Certification – IIT Kharagpur
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;

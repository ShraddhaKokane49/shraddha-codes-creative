import shraddhaPhoto from "@/assets/shraddha-photo.jpg";

const Hero = () => (
  <section id="home" className="bg-background py-20 md:py-28">
    <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Text */}
      <div className="flex-1 text-center md:text-left animate-fade-up">
        <h1 className="text-4xl md:text-5xl text-foreground mb-3">
          Shraddha Kokane
        </h1>
        <p className="font-body font-medium text-primary text-lg mb-4">
          Frontend Developer | UI/UX Design Enthusiast
        </p>
        <p className="font-body text-muted-foreground max-w-lg mb-8 leading-relaxed">
          Turning ideas into engaging digital experiences through clean design
          and intuitive interfaces.
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-body font-medium text-sm text-primary-foreground hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-primary px-6 py-3 font-body font-medium text-sm text-primary hover:bg-accent transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Photo */}
      <div className="flex-shrink-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border-4 border-accent shadow-lg">
          <img
            src={shraddhaPhoto}
            alt="Shraddha Kokane"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

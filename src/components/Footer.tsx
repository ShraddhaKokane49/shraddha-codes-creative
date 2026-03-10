const Footer = () => (
  <footer className="bg-background border-t border-border py-8">
    <div className="container mx-auto text-center">
      <p className="font-body text-sm text-muted-foreground">
        © {new Date().getFullYear()} Shraddha Kokane. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;

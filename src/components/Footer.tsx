const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground">
          <p>© {new Date().getFullYear()} Osama Orabi. All rights reserved.</p>
          <p>Built with passion & purpose</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

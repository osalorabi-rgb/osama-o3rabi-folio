const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Osama Alorabi. All rights reserved.
          </p>
          <p className="text-muted-foreground">
            Built with passion & purpose
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

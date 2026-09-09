import { useLocation } from "react-router-dom";
import PageSeo from "@/components/PageSeo";
import { SITE_URL } from "@/lib/seo";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <PageSeo
        title="Page Not Found | Osama Orabi"
        description="The requested page could not be found."
        canonical={`${SITE_URL}${location.pathname}`}
        robots="noindex, follow"
      />
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;


import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="text-center px-4 animate-fade-in">
        <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="hover-scale">
            <Link to="/">
              <ArrowUp className="mr-2 h-4 w-4 rotate-180" />
              Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-scale">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

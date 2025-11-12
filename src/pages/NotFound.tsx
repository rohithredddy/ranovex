import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background pt-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="mb-4 text-6xl md:text-8xl font-bold text-gradient">404</h1>
        <p className="mb-2 text-2xl md:text-3xl font-semibold">You've Gone Beyond Excellence</p>
        <p className="mb-8 text-lg text-muted-foreground">But this page doesn't exist</p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors shadow-glow"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

const Terms = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center text-center px-4">
      <div className="max-w-2xl space-y-6 py-20">
        <h1 className="text-4xl font-bold text-foreground">Terms of Use</h1>
        <p className="text-sm text-muted-foreground">Last updated: November 2025</p>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Our Terms of Use are currently being updated to serve you better.  
          Please check back soon for the latest version.  
          <br />
          If you have any questions, feel free to reach out to us at{" "}
          <a
            href="mailto:info@ranovex.com"
            className="text-primary hover:underline"
          >
            info@ranovex.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Terms;

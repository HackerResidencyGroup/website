import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
      {/* Hero Section */}
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl tracking-tight">
          The residency for ambitious hackers.
        </h1>
        
        <p className="text-lg opacity-60">
          November 2025 • Da Nang, Vietnam
        </p>
        
        <Link
          href="/apply"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground text-sm hover:opacity-90 transition-opacity"
        >
          Apply
        </Link>
      </div>
      
      {/* Key Information */}
      <div className="absolute bottom-32 left-0 right-0 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm opacity-60">
          <span>10 Founders</span>
          <span className="hidden sm:inline">•</span>
          <span>1 Month</span>
          <span className="hidden sm:inline">•</span>
          <span>100% Free</span>
        </div>
      </div>
    </div>
  );
}
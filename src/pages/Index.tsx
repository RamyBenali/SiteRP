import { useState, useCallback } from "react";
import Countdown from "@/components/Countdown";
import WaitingMessage from "@/components/WaitingMessage";
import Revelation from "@/components/Revelation";

const Index = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Target: today at 22:30 French time (Europe/Paris)
  const getTargetDate = () => {
    const now = new Date();
    
    // Get current time in Paris timezone
    const parisTime = new Date(now.toLocaleString("en-US", { timeZone: "Europe/Paris" }));
    
    // Create target date for 22:30 Paris time today
    const targetParis = new Date(parisTime);
    targetParis.setHours(22, 30, 0, 0);
    
    // Calculate the offset between local time and Paris time
    const offset = now.getTime() - parisTime.getTime();
    
    // Convert target Paris time to local time
    const targetLocal = new Date(targetParis.getTime() + offset);
    
    if (now >= targetLocal) {
      return null;
    }
    
    return targetLocal;
  };

  const targetDate = getTargetDate();
  const alreadyRevealed = targetDate === null;

  const handleCountdownComplete = useCallback(() => {
    // Start transition: fade out countdown
    setIsTransitioning(true);
    
    // After fade out, show revelation
    setTimeout(() => {
      setIsRevealed(true);
    }, 1500);
  }, []);

  const showRevelation = isRevealed || alreadyRevealed;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      {/* Subtle background noise texture */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')]" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(0_0%_0%/0.4)_100%)] pointer-events-none" />

      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      {/* Main content */}
      <main className="relative z-10 w-full py-16">
        {!showRevelation ? (
          <div 
            className={`flex flex-col items-center gap-16 transition-all duration-1500 ease-out ${
              isTransitioning ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
            }`}
          >
            {targetDate && (
              <Countdown 
                targetDate={targetDate} 
                onComplete={handleCountdownComplete} 
              />
            )}
            <WaitingMessage />
          </div>
        ) : (
          <Revelation />
        )}
      </main>

      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </div>
  );
};

export default Index;

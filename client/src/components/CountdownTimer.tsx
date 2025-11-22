import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export function CountdownTimer() {
  // 2 hours in seconds
  const TWO_HOURS = 2 * 60 * 60;
  
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem("wifi_timer");
    const savedTime = saved ? parseInt(saved, 10) : null;
    const now = Math.floor(Date.now() / 1000);
    
    if (savedTime && savedTime > now) {
      return savedTime - now;
    }
    
    // Set expire time 2 hours from now
    const expireTime = now + TWO_HOURS;
    localStorage.setItem("wifi_timer", expireTime.toString());
    return TWO_HOURS;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
      <div className="relative px-8 py-6 bg-card/80 backdrop-blur-xl rounded-lg border border-white/10 flex flex-col items-center justify-center">
        <div className="flex items-center gap-3 text-primary mb-2">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-mono tracking-widest uppercase text-muted-foreground">Session Time Remaining</span>
        </div>
        <div className="text-5xl md:text-6xl font-mono font-bold text-foreground tabular-nums tracking-wider">
          {formatTime(timeLeft)}
        </div>
        <div className="w-full h-1 bg-muted mt-4 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary shadow-[0_0_10px_var(--color-primary)]"
            initial={{ width: "100%" }}
            animate={{ width: `${(timeLeft / TWO_HOURS) * 100}%` }}
            transition={{ ease: "linear", duration: 1 }}
          />
        </div>
      </div>
    </motion.div>
  );
}

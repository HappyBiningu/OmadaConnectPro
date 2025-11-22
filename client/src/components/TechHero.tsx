import { motion } from "framer-motion";
import { CountdownTimer } from "./CountdownTimer";
import generatedHeroImage from "@assets/generated_images/abstract_tech_background_with_glowing_nodes_and_connections.png";

export function TechHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={generatedHeroImage} 
          alt="Digital Network Background" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-6 tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Connection Established
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">
            ACCESS <br/><span className="text-primary">GRANTED</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Welcome to the network. Your high-speed session is active. Explore our premium digital and hardware services below.
          </p>
        </motion.div>

        <div className="w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-500">
          <CountdownTimer />
        </div>
      </div>
    </section>
  );
}

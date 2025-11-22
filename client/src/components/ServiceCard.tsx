import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  accentColor?: "primary" | "secondary";
}

export function ServiceCard({ title, description, icon: Icon, delay = 0, accentColor = "primary" }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-white/5 hover:border-white/10 transition-colors overflow-hidden relative group">
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${accentColor === 'primary' ? 'from-primary/50 to-transparent' : 'from-secondary/50 to-transparent'} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
        
        <CardHeader className="pb-2">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${accentColor === 'primary' ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} group-hover:scale-110 transition-transform duration-300`}>
            <Icon className="w-6 h-6" />
          </div>
          <CardTitle className="text-xl font-heading tracking-wide group-hover:text-primary transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

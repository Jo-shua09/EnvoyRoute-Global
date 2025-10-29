import { Package } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const Loader = ({ size = "md", className }: LoaderProps) => {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        {/* Outer rotating ring */}
        {/* <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-spin"></div> */}

        {/* Inner rotating ring */}
        {/* <div
          className="absolute inset-1 rounded-full border-2 border-transparent border-t-accent animate-spin"
          style={{ animationDuration: "0.8s", animationDirection: "reverse" }}
        ></div> */}

        {/* Package icon with bounce animation */}
        <Package
          className={cn(sizeClasses[size], "text-accent animate-bounce relative z-10", "drop-shadow-xl")}
          style={{
            animationDuration: "1.5s",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.1))",
          }}
        />

        {/* Pulsing background */}
        <div className="absolute inset-0 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: "2s" }}></div>
      </div>
    </div>
  );
};

export default Loader;

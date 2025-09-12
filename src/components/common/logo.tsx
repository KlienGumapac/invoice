import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** The destination URL when the logo is clicked */
  href?: string;
  /** Additional CSS classes to apply to the container */
  className?: string;
  /** Size variant of the logo */
  size?: "sm" | "md" | "lg";
  /** Whether the logo should be clickable */
  clickable?: boolean;
  /** Callback function when logo is clicked (if not using href) */
  onClick?: () => void;
  /** Priority for Next.js Image optimization */
  priority?: boolean;
}

const sizeConfig = {
  sm: {
    container: "h-8",
    image: { width: 120, height: 32 }
  },
  md: {
    container: "h-10",
    image: { width: 150, height: 40 }
  },
  lg: {
    container: "h-12",
    image: { width: 180, height: 48 }
  }
} as const;

/**
 * Professional logo component that displays the QuickBill logo
 * Supports different sizes, clickable variants, and proper accessibility
 */
export function Logo({ 
  href = "/", 
  className, 
  size = "md", 
  clickable = true,
  onClick,
  priority = false 
}: LogoProps) {
  const config = sizeConfig[size];
  
  const logoImage = (
    <Image
      src="/assets/images/logo.png"
      alt="QuickBill - Professional Invoice Management"
      width={config.image.width}
      height={config.image.height}
      priority={priority}
      className="object-contain"
    />
  );

  const containerClasses = cn(
    "flex items-center transition-opacity duration-200",
    config.container,
    clickable && "hover:opacity-80 cursor-pointer",
    className
  );

  if (!clickable) {
    return (
      <div className={containerClasses}>
        {logoImage}
      </div>
    );
  }

  if (onClick) {
    return (
      <button 
        onClick={onClick}
        className={containerClasses}
        aria-label="QuickBill Home"
      >
        {logoImage}
      </button>
    );
  }

  return (
    <Link 
      href={href} 
      className={containerClasses}
      aria-label="QuickBill Home"
    >
      {logoImage}
    </Link>
  );
}

import { cn } from "@/lib/utils";

interface SectionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ 
  children, 
  className,
  ...props 
}: SectionBadgeProps) {
  return (
    <div 
      className={cn(
        "inline-flex items-center justify-center rounded-full border border-[#800000] bg-[#FDECEC] px-3 py-1 text-sm font-medium text-[#800000] mb-3 sm:mb-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

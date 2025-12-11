import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: React.ReactElement;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  disabled?: boolean;
  className?: string;
}

export default function IconButton({
  icon,
  onClick,
  disabled,
  className,
}: IconButtonProps) {
  return (
    <Button
      size={"icon"}
      className={cn(
        "flex items-center justify-center rounded-full border p-2 shadow-md transition-all hover:scale-110",
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Button>
  );
}

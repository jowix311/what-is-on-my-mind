import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type CommonProps = PropsWithChildren & {
  className?: string;
};

export const SectionHeader = ({ className, children }: CommonProps) => {
  return (
    <h1 className={cn(`text-2xl font-bold underline`, className)}>
      {children}
    </h1>
  );
};

export const SectionDescription = ({ className, children }: CommonProps) => {
  return (
    <p className={cn(`text-sm text-muted-foreground`, className)}>{children}</p>
  );
};

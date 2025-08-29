import type { LucideProps } from "lucide-react";
import type React from "react";

export type SidebarLinkType = {
  id: string;
  label: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  route?: string;
    children?: SidebarLinkType[];
  disabled?: boolean;
  external?: boolean;
  badgeCount?: number;
  collapsible?: boolean;
  expanded?: boolean;
  onClick?: () => void;
  className?: string;
  hidden?: boolean;
}
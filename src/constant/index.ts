import { ChartNoAxesColumnDecreasing, LayoutGrid, Locate, Star, Tag } from "lucide-react";
import type { SidebarLinkType } from "../types/constant-types";

export const SidebarLinks: SidebarLinkType[] = [
    {
        id: "1",
        label: "Dashboard",
        icon: LayoutGrid,
        route: "/"
    },
    {
        id: '2',
        label: "Users",
        icon: Locate,
        route: "/users"
    },
    {
        id: "3",
        label: "Vouchers",
        icon: Tag,
        route: "/vouchers"
    },
    {
        id: "4",
        label: "Analytics",
        icon: ChartNoAxesColumnDecreasing,
        route: "/analytics"
    },
    {
        id: "5",
        label: "Spotlight",
        icon: Star,
        route: "/spotlight"
    }
]
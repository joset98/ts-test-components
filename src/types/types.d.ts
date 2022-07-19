import { IconType } from "react-icons/lib";

export interface SidebarMenuItem {
    id: string;
    label: string;
    icon: IconType;
    url: string;
}

export interface SidebarMenuCard {
    id: string;
    displayName: string;
    photoUrl: string;
    title: string;
    url: string;
}
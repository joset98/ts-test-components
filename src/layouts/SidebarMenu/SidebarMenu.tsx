import { useState } from "react";
import { VscMenu } from "react-icons/vsc";

import { SidebarMenuCard, SidebarMenuItem } from "../../types/types";
import { classNames } from "../../utils/classes";
import SidebarMenuItemView from "../../components/SidebarMenuItemView/SidebarMenuItemView";
import SidebarMenuCardView from "../../components/SidebarMenuCardView/SidebarMenuCardView";
import './SidebarMenu.scss';

interface SidebarMenuProps {
    items: SidebarMenuItem[];
    card: SidebarMenuCard;
}

const SidebarMenu = ({ items, card }: SidebarMenuProps) => {

    const [isOpen, setIsOpen] = useState<Boolean>(true);

    const handleClick = () => {
        setIsOpen( prev => !prev)
    } 

    return (
        <div className={classNames("sidebarMenu", isOpen ? 'expanded' : 'collapsed')}>
            <div className="menuButton">
                <button className="hamburgerButton" onClick={handleClick}>
                    <VscMenu/>
                </button>
            </div>
            
            <SidebarMenuCardView card={card} isOpen={isOpen}/>
            {
                items.map( item => 
                    <SidebarMenuItemView key={item.id} item={item} isOpen={isOpen}/>

                )
            }
        </div>
    )
};

export default SidebarMenu;
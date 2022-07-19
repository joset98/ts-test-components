import { SidebarMenuItem } from "../../types/types";
import { classNames } from "../../utils/classes";
import "./SidebarMenuItemView.scss";

interface SidebarMenuItemViewProps {
    item: SidebarMenuItem;
    isOpen: Boolean;
};

const SidebarMenuItemView = ({ item, isOpen }: SidebarMenuItemViewProps) => {

    return (
        <div className="sidebarMenuItem">
            <a href={item.url}>
                <div className={classNames('itemContent', isOpen ? '' : 'collapsed')}>
                    <div className="icon">
                        <item.icon size="32"/>
                    </div>
                    <span className="label">{item.label}</span>
                </div>
            </a>
            {
                !isOpen && <div className="tooltip">{item.label}</div>
            }
        </div>
    );

}

export default SidebarMenuItemView;
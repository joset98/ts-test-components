import { SidebarMenuCard } from "../../types/types";
import { classNames } from "../../utils/classes";

import './SidebarMenuCardView.scss';

interface SidebarMenuCardViewProps {
    card: SidebarMenuCard;
    isOpen: Boolean;
}

const SidebarMenuCardView = ({ card, isOpen }: SidebarMenuCardViewProps) => {

    return (
        <div className="sidebarMenuCardView">
            <img className="profile" src={card.photoUrl} width="100%"/>
            <div className={classNames('profileInfo', isOpen ? '':'collapsed')}>
                <div className="name">{card.displayName}</div>
                <div className="title">{card.title}</div>
                <div className="url"><a href={card.url}>ir a perfil</a></div>
            </div>
        </div>
    );

}

export default SidebarMenuCardView;
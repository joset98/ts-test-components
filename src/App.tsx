import React from 'react';
import './App.css';
import SidebarMenu from './layouts/SidebarMenu/SidebarMenu';
import { SidebarMenuCard, SidebarMenuItem } from './types/types';
import { FcAdvertising } from "react-icons/fc";
import profileImage from "./assets/female_profile.jpeg";

function App() {
  const item : SidebarMenuItem [] = [
    {
      id: "1",
      label: 'hila',
      icon: FcAdvertising,
      url: '/',
    },
    {
      id: "2",
      label: 'hench',
      icon: FcAdvertising,
      url: '/',
    },
    {
      id: "3",
      label: 'helio',
      icon: FcAdvertising,
      url: '/',
    }
  ]; 

  const cardTest: SidebarMenuCard = {
    id: "card-1",
    displayName: 'card #1',
    photoUrl: profileImage,
    title: 'title card',
    url: '/',
  }

  return (
    <div className="App">
      <SidebarMenu items={item} card={cardTest}/>
    </div>
  );
}

export default App;

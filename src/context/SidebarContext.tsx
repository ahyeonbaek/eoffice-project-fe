import React, {createContext, useState, ReactNode, useContext} from 'react';

interface SidebarContextType {
    selectedMenu: string;
    setSelectedMenu: (menu: string) => void;
}

const SidebarContext = createContext<SidebarContextType>
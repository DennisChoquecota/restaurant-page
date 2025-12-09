'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type DrawerMode = 'toggle' | 'always-visible' | 'mini-hover';

interface DrawerModeContextType {
    drawerMode: DrawerMode;
    setDrawerMode: (mode: DrawerMode) => void;
}

const DrawerModeContext = createContext<DrawerModeContextType | undefined>(undefined);

export const DrawerModeProvider = ({ children }: { children: ReactNode }) => {
    const [drawerMode, setDrawerModeState] = useState<DrawerMode>('toggle');

    // Load from localStorage on mount
    useEffect(() => {
        const savedMode = localStorage.getItem('drawerMode') as DrawerMode;
        if (savedMode && ['toggle', 'always-visible', 'mini-hover'].includes(savedMode)) {
            setDrawerModeState(savedMode);
        }
    }, []);

    // Save to localStorage when mode changes
    const setDrawerMode = (mode: DrawerMode) => {
        setDrawerModeState(mode);
        localStorage.setItem('drawerMode', mode);
    };

    return (
        <DrawerModeContext.Provider value={{ drawerMode, setDrawerMode }}>
            {children}
        </DrawerModeContext.Provider>
    );
};

export const useDrawerMode = () => {
    const context = useContext(DrawerModeContext);
    if (context === undefined) {
        throw new Error('useDrawerMode must be used within a DrawerModeProvider');
    }
    return context;
};

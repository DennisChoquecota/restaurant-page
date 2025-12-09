'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

// 1. Definir el tipo del contexto
interface ThemeContextType {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

// 2. Crear el contexto con tipo o undefined
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 3. Definir props del provider
interface ThemeProviderProps {
    children: ReactNode;
}

// 4. Crear el provider
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem("darkMode", String(newMode));
            return newMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

// 5. Hook para usar el contexto
export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme debe usarse dentro de un ThemeProvider");
    }
    return context;
};

"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/src/context/ThemeContext";
import { useDrawerMode } from "@/src/context/DrawerModeContext";
import { colors } from "@/src/db/dbColors";

// Definición de tipos para la estructura de color (necesaria para TypeScript)
type ThemeColors = typeof colors.light;

// Definición de enlaces
const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Servicios", href: "#servicios" },
  { name: "Portafolio", href: "#portafolio" },
  { name: "Contacto", href: "#contacto" },
];

interface NavbarProps {
  drawerOpen: boolean;
  setDrawerOpen: () => void;
  isMobile: boolean;
  isDrawerExpanded: boolean;
  setDrawerExpanded: (value: boolean) => void;
}

// ----------------------------------------------------
// Componente Navbar
// ----------------------------------------------------

export const Navbar = ({
  drawerOpen,
  setDrawerOpen,
  isMobile,
  isDrawerExpanded,
  setDrawerExpanded,
}: NavbarProps) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { drawerMode } = useDrawerMode();

  const themeColors: ThemeColors = useMemo(() => 
    darkMode ? colors.dark : colors.light, [darkMode]);
  
  const accentColor = themeColors.textAccent; 

  // ESTADO DE OPACIDAD BASE (0 a 1)
  const [opacity, setOpacity] = useState(0); 
  const [mounted, setMounted] = useState(false);

  const SCROLL_THRESHOLD = 300; 
  // 💥 NUEVA BASE DE OPACIDAD: Comenzará en 0.3 y aumentará hasta 1.0
  const MIN_OPACITY = 0.3;

  // EFECTO DE SCROLL
  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Calcula un factor de scroll (0 a 1)
      const scrollFactor = Math.min(1, scrollY / SCROLL_THRESHOLD);
      
      // Calcula la nueva opacidad: empieza en MIN_OPACITY y aumenta hasta 1.0
      // Formula: Opacidad Base + (Factor de Scroll * Opacidad Adicional Máxima)
      const newOpacity = MIN_OPACITY + scrollFactor * (1 - MIN_OPACITY);

      if (newOpacity !== opacity) {
        setOpacity(newOpacity);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [opacity]);


  // CLASES BASE DEL NAVBAR (fijas y dinámicas)
  // Se considera "sólido" cuando la opacidad alcanza o supera el 90%
  const isSolid = opacity > 0.9; 
  const textColor = isSolid 
    ? themeColors.text 
    : (darkMode ? 'white' : themeColors.textAccent); 

  // Función para obtener los componentes RGB del color HEX (necesario para RGBA)
  const getRGB = (hex: string): { r: number, g: number, b: number } => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  };

  const { r, g, b } = getRGB(themeColors.background);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50 
        flex justify-between items-center 
        px-6 py-3 border-b transition-all duration-500 ease-in-out
        ${isSolid ? 'shadow-md' : 'shadow-none'}
      `}
      style={{
        // 1. Fondo dinámico con opacidad base de 0.3
        backgroundColor: `rgba(${r}, ${g}, ${b}, ${opacity})`, 
        // 2. Transición y color de texto dinámico
        color: textColor,
        // El borde aparece solo cuando está "sólido"
        borderColor: isSolid ? themeColors.border : 'transparent',
      }}
    >
      {/* 1. Left Section (Logo and Mobile Menu) */}
      <div className="flex items-center gap-4">
        
        {/* Mobile Menu Button - Solo visible en móvil */}
        {mounted && isMobile && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={drawerMode === "toggle" ? (isDrawerExpanded ? "expanded" : "collapsed") : (drawerOpen ? "open" : "closed")}
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => {
                if (drawerMode === "toggle") {
                  setDrawerExpanded(!isDrawerExpanded);
                } else {
                  setDrawerOpen();
                }
              }}
              className="p-2 rounded-lg border-none cursor-pointer flex items-center justify-center"
              style={{
                backgroundColor: 'transparent',
                color: 'inherit', // Hereda el color dinámico
              }}
              whileHover={{ backgroundColor: themeColors.secondary }}
            >
              {drawerMode === "mini-hover" ? (
                isDrawerExpanded ? <X size={24} /> : <Menu size={24} />
              ) : drawerOpen ? (
                <X size={24} />
              ) : (
                <Menu size={24} />
              )}
            </motion.button>
          </AnimatePresence>
        )}

        {/* Logo (40x40 Púrpura) */}
        <div 
          className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl text-white"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          P
        </div>
      </div>

      {/* 2. Middle Section (Navigation Links) - Solo en Desktop */}
      {!isMobile && (
        <div className="flex gap-5"> 
          {links.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-base font-medium relative pt-1 pb-1 transition-colors duration-200"
              style={{
                color: 'inherit', // Hereda el color dinámico del Navbar
                textDecoration: "none",
              }}
              whileHover={{ color: accentColor }}
              initial={{ opacity: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
              
              {/* Indicador Underline/Subrayado al pasar el mouse */}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-full"
                style={{
                  backgroundColor: accentColor,
                }}
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.a>
          ))}
        </div>
      )}

      {/* 3. Right Section (Dark Mode Toggle) */}
      <div className="flex items-center gap-2">
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="p-2 rounded-lg border-none cursor-pointer flex items-center justify-center transition-colors duration-200"
          style={{
            backgroundColor: "transparent",
            color: 'inherit', // Hereda el color dinámico del Navbar
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = themeColors.secondary)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "transparent")
          }
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </motion.button>
      </div>
    </nav>
  );
};
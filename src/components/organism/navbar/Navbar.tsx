"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";
import { useDrawerMode } from "@/src/context/DrawerModeContext";
import { colors } from "@/src/db/dbColors";
import { Menu, X, Sun, Moon } from "lucide-react";

interface NavbarProps {
  drawerOpen: boolean;
  setDrawerOpen: () => void;
  isMobile: boolean;
  isDrawerExpanded: boolean;
  setDrawerExpanded: (value: boolean) => void;
}

export const Navbar = ({
  drawerOpen,
  setDrawerOpen,
  isMobile,
  isDrawerExpanded,
  setDrawerExpanded,
}: NavbarProps) => {
  const { darkMode, toggleDarkMode } = useTheme();
  const { drawerMode } = useDrawerMode();
  const themeColors = darkMode ? colors.dark : colors.light;

  // ⛔ evita el parpadeo al esperar la hidratación
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.75rem 1.5rem",
        backgroundColor: themeColors.background,
        color: themeColors.text,
        borderBottom: `1px solid ${themeColors.border}`,
        // position: "fixed",
        // top: 0,
        // left: 0,
        // right: 0,
        zIndex: 50,
        transition: "background-transparent 0.3s, color 0.3s",
        boxShadow: darkMode
          ? "0 1px 3px rgba(0,0,0,0.3)"
          : "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        
        {/* 🔥 Ahora solo se renderiza si mounted && isMobile (NO parpadeo) */}
        {mounted && isMobile && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={
                drawerMode === "toggle"
                  ? isDrawerExpanded
                    ? "expanded"
                    : "collapsed"
                  : drawerOpen
                  ? "open"
                  : "closed"
              }
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
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: themeColors.text,
                padding: "0.5rem",
                borderRadius: "0.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "white",
              fontSize: "1.25rem",
            }}
          >
            P
          </div>

          {!isMobile && (
            <div>
              <h1
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                Aqui el logo
              </h1>
              <p
                style={{
                  fontSize: "0.75rem",
                  margin: 0,
                  opacity: 0.6,
                  lineHeight: 1,
                }}
              >
                Dashboard
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <motion.button
          onClick={toggleDarkMode}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "none",
            backgroundColor: "transparent",
            color: themeColors.text,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s",
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

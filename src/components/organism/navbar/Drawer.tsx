"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";
import { useDrawerMode } from "@/src/context/DrawerModeContext";
import { colors } from "@/src/db/dbColors";
import { TreeMenu } from "@/src/components/organism/navbar/TreeMenu";
import { menuItems } from "@/src/db/db";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";
import { X } from "lucide-react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isExpanded: boolean;
  setIsExpanded: (value: boolean) => void;
}

const NAVBAR_HEIGHT = "64px";
const DRAWER_WIDTH_EXPANDED = 250;
const DRAWER_WIDTH_MINI = 60;

export const Drawer = ({
  isOpen,
  onClose,
  isExpanded,
  setIsExpanded,
}: DrawerProps) => {
  const { darkMode } = useTheme();
  const { drawerMode } = useDrawerMode();
  const themeColors = darkMode ? colors.dark : colors.light;
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isHovered, setIsHovered] = useState(false);

  // On mobile, always use toggle mode
  const effectiveMode = isDesktop ? drawerMode : "toggle";

  const getDrawerWidth = () => {
    if (effectiveMode === "mini-hover") {
      return isExpanded || isHovered
        ? DRAWER_WIDTH_EXPANDED
        : DRAWER_WIDTH_MINI;
    }
    return DRAWER_WIDTH_EXPANDED;
  };

  if (!isDesktop || effectiveMode === "toggle") {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            {!isDesktop && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "#000",
                  zIndex: 40,
                }}
              />
            )}

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              style={{
                position: "fixed",
                top: isDesktop ? NAVBAR_HEIGHT : 0,
                left: 0,
                width: `${DRAWER_WIDTH_EXPANDED}px`,
                height: isDesktop ? `calc(100% - ${NAVBAR_HEIGHT})` : "100%",
                backgroundColor: isDesktop
                  ? themeColors.background
                  : themeColors.sidebar,
                color: themeColors.text,
                zIndex: isDesktop ? 40 : 50,
                boxShadow: isDesktop ? "none" : "2px 0 8px rgba(0,0,0,0.1)",
                padding: "1rem",
                borderRight: `1px solid ${themeColors.border}`,
                overflowY: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "2rem",
                }}
              >
                <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>
                  Menu
                </h2>
                <button
                  onClick={onClose}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: themeColors.text,
                    padding: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "0.25rem",
                    transition: "background-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor =
                      themeColors.secondary)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <X size={24} />
                </button>
              </div>

              <nav>
                <TreeMenu items={menuItems} collapsed={false} />
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  // For always-visible and mini-hover modes (desktop only)
  return (
    <motion.div
      animate={{
        width: getDrawerWidth(),
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      onMouseEnter={() => effectiveMode === "mini-hover" && setIsHovered(true)}
      onMouseLeave={() => effectiveMode === "mini-hover" && setIsHovered(false)}
      style={{
        position: "fixed",
        top: NAVBAR_HEIGHT,
        left: 0,
        height: `calc(100% - ${NAVBAR_HEIGHT})`,
        backgroundColor: themeColors.background,
        color: themeColors.text,
        zIndex: 40,
        padding:
          effectiveMode === "mini-hover" && !(isExpanded || isHovered)
            ? "1rem 0.5rem"
            : "1rem",
        borderRight: `1px solid ${themeColors.border}`,
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {/* Header - only show when expanded or always-visible */}
      {(effectiveMode === "always-visible" ||
        (effectiveMode === "mini-hover" && (isExpanded || isHovered))) && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Menu</h2>
        </div>
      )}

      <nav>
        <TreeMenu
          items={menuItems}
          collapsed={
            effectiveMode === "mini-hover" && !(isExpanded || isHovered)
          }
        />
      </nav>
    </motion.div>
  );
};

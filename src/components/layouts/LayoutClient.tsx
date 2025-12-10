"use client";

import { useState, useEffect, ReactNode } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/src/components/organism/navbar/Navbar";
import { Drawer } from "@/src/components/organism/navbar/Drawer";
import { useTheme } from "@/src/context/ThemeContext";
import { useDrawerMode } from "@/src/context/DrawerModeContext";
import { colors } from "@/src/db/dbColors";
import { useMediaQuery } from "@/src/hooks/useMediaQuery";

const DRAWER_WIDTH_EXPANDED = 250;
const DRAWER_WIDTH_MINI = 60;

interface LayoutClientProps {
  children: ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const { darkMode } = useTheme();
  const { drawerMode } = useDrawerMode();
  const themeColors = darkMode ? colors.dark : colors.light;
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(false);

  // Load drawer expanded state from localStorage
  useEffect(() => {
    const savedExpanded = localStorage.getItem("drawerExpanded");
    if (savedExpanded !== null) {
      setIsDrawerExpanded(savedExpanded === "true");
    }
  }, []);

  // Save drawer expanded state to localStorage
  const handleSetDrawerExpanded = (value: boolean) => {
    setIsDrawerExpanded(value);
    localStorage.setItem("drawerExpanded", value.toString());
  };

  return (
    <>
      <Navbar
        drawerOpen={isDrawerOpen}
        setDrawerOpen={() => setIsDrawerOpen((prev) => !prev)}
        isMobile={!isDesktop}
        isDrawerExpanded={isDrawerExpanded}
        setDrawerExpanded={handleSetDrawerExpanded}
      />

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        isExpanded={isDrawerExpanded}
        setIsExpanded={handleSetDrawerExpanded}
      />

      <motion.div
        animate={{ marginLeft: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          minHeight: "100vh",
          backgroundColor: themeColors.background,
          color: themeColors.textPrimary,
          transition: "background-color 0.3s, color 0.3s",
          paddingTop: "64px",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

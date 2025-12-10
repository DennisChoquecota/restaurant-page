"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";
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
const DRAWER_WIDTH = 250;

export const Drawer = ({
  isOpen,
  onClose,
}: DrawerProps) => {
  const { darkMode } = useTheme();
  const themeColors = darkMode ? colors.dark : colors.light;
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay only on mobile */}
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

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: isDesktop ? NAVBAR_HEIGHT : 0,
              left: 0,
              width: `${DRAWER_WIDTH}px`,
              height: isDesktop
                ? `calc(100% - ${NAVBAR_HEIGHT})`
                : "100%",
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
                }}
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
};

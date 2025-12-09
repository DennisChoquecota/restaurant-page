"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/src/context/ThemeContext";
import { useDrawerMode, DrawerMode } from "@/src/context/DrawerModeContext";
import { colors } from "@/src/db/dbColors";
import {
  Menu,
  X,
  Sun,
  Moon,
  Bell,
  User,
  Settings as SettingsIcon,
  HelpCircle,
  LogOut,
  Search,
  LayoutGrid,
  Pin,
  PinOff,
} from "lucide-react";

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
  const { drawerMode, setDrawerMode } = useDrawerMode();
  const themeColors = darkMode ? colors.dark : colors.light;
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showDrawerModeMenu, setShowDrawerModeMenu] = useState(false);

//   const drawerModeOptions: { value: DrawerMode; label: string; icon: any }[] = [
//     { value: "toggle", label: "Toggle", icon: LayoutGrid },
//     { value: "always-visible", label: "Always Visible", icon: Pin },
//     { value: "mini-hover", label: "Mini with Icons", icon: PinOff },
//   ];

  // Hide toggle button in always-visible mode on desktop
  const showToggleButton = isMobile;

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
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.3s, color 0.3s",
        boxShadow: darkMode
          ? "0 1px 3px rgba(0,0,0,0.3)"
          : "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left Section - Menu + Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {showToggleButton && (
          <AnimatePresence mode="wait" initial={false}>
            <motion.button
              key={
                drawerMode === "mini-hover"
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
                if (drawerMode === "mini-hover") {
                  // In mini-hover mode, toggle expansion
                  setDrawerExpanded(!isDrawerExpanded);
                } else {
                  // In toggle mode, open/close drawer
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
                isDrawerExpanded ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )
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

      {/* Center Section - Search (Desktop only) */}
      {/* {!isMobile && (
        <div style={{ flex: 1, maxWidth: "500px", margin: "0 2rem" }}>
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "1rem",
                opacity: 0.5,
              }}
            />
            <input
              type="text"
              placeholder="Buscar..."
              style={{
                width: "100%",
                padding: "0.65rem 1rem 0.65rem 2.75rem",
                borderRadius: "0.75rem",
                border: `1px solid ${themeColors.border}`,
                backgroundColor: themeColors.secondary,
                color: themeColors.text,
                fontSize: "0.95rem",
                outline: "none",
                transition: "all 0.2s",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "#667eea";
                e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = themeColors.border;
                e.target.style.boxShadow = "none";
              }}
            />
          </div>
        </div>
      )} */}

      {/* Right Section - Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {/* Drawer Mode Selector (Desktop only) */}
        {/* {!isMobile && (
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setShowDrawerModeMenu(true)}
            onMouseLeave={() => setShowDrawerModeMenu(false)}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: "0.5rem",
                borderRadius: "0.5rem",
                border: "none",
                backgroundColor: showDrawerModeMenu
                  ? themeColors.secondary
                  : "transparent",
                color: themeColors.text,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background-color 0.2s",
              }}
            >
              <LayoutGrid size={20} />
            </motion.button>

            <AnimatePresence>
              {showDrawerModeMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.5rem)",
                    right: 0,
                    width: "220px",
                    backgroundColor: themeColors.background,
                    border: `1px solid ${themeColors.border}`,
                    borderRadius: "0.75rem",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      padding: "0.75rem 1rem",
                      borderBottom: `1px solid ${themeColors.border}`,
                    }}
                  >
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "0.875rem",
                        fontWeight: "600",
                      }}
                    >
                      Drawer Mode
                    </h3>
                  </div>
                  {drawerModeOptions.map((option) => {
                    const IconComp = option.icon;
                    return (
                      <div
                        key={option.value}
                        onClick={() => {
                          setDrawerMode(option.value);
                          setShowDrawerModeMenu(false);
                        }}
                        style={{
                          padding: "0.75rem 1rem",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                          fontSize: "0.875rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          backgroundColor:
                            drawerMode === option.value
                              ? themeColors.secondary
                              : "transparent",
                          fontWeight:
                            drawerMode === option.value ? "600" : "normal",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.backgroundColor =
                            themeColors.secondary)
                        }
                        onMouseLeave={(e) => {
                          if (drawerMode !== option.value) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }
                        }}
                      >
                        <IconComp size={16} />
                        <span>{option.label}</span>
                        {drawerMode === option.value && (
                          <span style={{ marginLeft: "auto" }}>✓</span>
                        )}
                      </div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )} */}

        {/* Theme Toggle */}
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

        {/* Notifications */}
        {/* <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowNotifications(true)}
          onMouseLeave={() => setShowNotifications(false)}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.5rem",
              borderRadius: "0.5rem",
              border: "none",
              backgroundColor: showNotifications
                ? themeColors.secondary
                : "transparent",
              color: themeColors.text,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              transition: "background-color 0.2s",
            }}
          >
            <Bell size={20} />
            <span
              style={{
                position: "absolute",
                top: "6px",
                right: "6px",
                width: "8px",
                height: "8px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
                border: `2px solid ${themeColors.background}`,
              }}
            />
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.5rem)",
                  right: 0,
                  width: "320px",
                  backgroundColor: themeColors.background,
                  border: `1px solid ${themeColors.border}`,
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "1rem",
                    borderBottom: `1px solid ${themeColors.border}`,
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "0.95rem",
                      fontWeight: "600",
                    }}
                  >
                    Notificaciones
                  </h3>
                </div>
                <div style={{ maxHeight: "300px", overflowY: "auto" }}>
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      style={{
                        padding: "0.75rem 1rem",
                        borderBottom: `1px solid ${themeColors.border}`,
                        cursor: "pointer",
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
                      <p
                        style={{
                          margin: 0,
                          fontSize: "0.875rem",
                          fontWeight: "500",
                        }}
                      >
                        Nueva actualización disponible
                      </p>
                      <p
                        style={{
                          margin: "0.25rem 0 0 0",
                          fontSize: "0.75rem",
                          opacity: 0.6,
                        }}
                      >
                        Hace {i} hora{i > 1 ? "s" : ""}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}

        {/* User Profile */}
        {/* <div
          style={{ position: "relative" }}
          onMouseEnter={() => setShowProfile(true)}
          onMouseLeave={() => setShowProfile(false)}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.35rem",
              borderRadius: "0.75rem",
              border: "none",
              backgroundColor: showProfile
                ? themeColors.secondary
                : "transparent",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "0.5rem",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "bold",
                color: "white",
                fontSize: "0.95rem",
              }}
            >
              P
            </div>
            {!isMobile && (
              <div style={{ textAlign: "left", marginRight: "0.5rem" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.875rem",
                    fontWeight: "600",
                    lineHeight: 1.2,
                  }}
                >
                  Primal
                </p>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.75rem",
                    opacity: 0.6,
                    lineHeight: 1.2,
                  }}
                >
                  Admin
                </p>
              </div>
            )}
          </motion.button>

          <AnimatePresence>
            {showProfile && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                style={{
                  position: "absolute",
                  top: "calc(100% + 0.5rem)",
                  right: 0,
                  width: "220px",
                  backgroundColor: themeColors.background,
                  border: `1px solid ${themeColors.border}`,
                  borderRadius: "0.75rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                  overflow: "hidden",
                }}
              >
                {[
                  { label: "Mi Perfil", icon: User },
                  { label: "Configuración", icon: SettingsIcon },
                  { label: "Ayuda", icon: HelpCircle },
                  { label: "Cerrar Sesión", icon: LogOut },
                ].map((item, i) => {
                  const IconComp = item.icon;
                  return (
                    <div
                      key={i}
                      style={{
                        padding: "0.75rem 1rem",
                        cursor: "pointer",
                        transition: "background-color 0.2s",
                        fontSize: "0.875rem",
                        borderBottom:
                          i < 3 ? `1px solid ${themeColors.border}` : "none",
                        color: i === 3 ? "#ef4444" : themeColors.text,
                        fontWeight: i === 3 ? "500" : "normal",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          themeColors.secondary)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <IconComp size={16} />
                      {item.label}
                    </div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div> */}
      </div>
    </nav>
  );
};

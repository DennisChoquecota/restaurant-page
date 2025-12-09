"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuItem } from "@/src/db/db";
import { useTheme } from "@/src/context/ThemeContext";
import { colors } from "@/src/db/dbColors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Icons from "lucide-react";
import { ChevronRight } from "lucide-react";

interface TreeMenuProps {
  items: MenuItem[];
  level?: number;
  collapsed?: boolean;
}

export const TreeMenu = ({
  items,
  level = 0,
  collapsed = false,
}: TreeMenuProps) => {
  const { darkMode } = useTheme();
  const themeColors = darkMode ? colors.dark : colors.light;

  return (
    <ul
      style={{
        paddingLeft: level ? "1rem" : "0",
        listStyle: "none",
        margin: 0,
      }}
    >
      {items.map((item) => (
        <TreeMenuItem
          key={item.id}
          item={item}
          level={level}
          themeColors={themeColors}
          collapsed={collapsed}
        />
      ))}
    </ul>
  );
};

const TreeMenuItem = ({
  item,
  level,
  themeColors,
  collapsed,
}: {
  item: MenuItem;
  level: number;
  themeColors: any;
  collapsed: boolean;
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const hasChildren = item.children && item.children.length > 0;
  const isActive = item.href && pathname === item.href;

  // Check if any child (or nested child) is active
  const hasActiveChild = (items: MenuItem[] | undefined): boolean => {
    if (!items) return false;
    return items.some((child) => {
      if (child.href === pathname) return true;
      if (child.children) return hasActiveChild(child.children);
      return false;
    });
  };

  const isParentOfActive = hasChildren && hasActiveChild(item.children);

  // Auto-expand parent when a child is active
  useEffect(() => {
    if (isParentOfActive && !collapsed) {
      setIsOpen(true);
    }
  }, [isParentOfActive, collapsed]);

  const toggleOpen = () => {
    if (hasChildren && !collapsed) {
      setIsOpen(!isOpen);
    }
  };

  // Get the Lucide icon component
  const IconComponent = item.icon ? (Icons as any)[item.icon] : null;

  const content = (
    <div
      onClick={toggleOpen}
      onMouseEnter={() => collapsed && setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{
        cursor:
          hasChildren && !collapsed
            ? "pointer"
            : item.href
            ? "pointer"
            : "default",
        display: "flex",
        alignItems: "center",
        padding: collapsed ? "0.75rem" : "0.5rem",
        borderRadius: "0.375rem",
        color: isActive
          ? "#3b82f6"
          : isParentOfActive
          ? "#2563eb"
          : themeColors.text,
        backgroundColor: isActive
          ? themeColors === colors.dark
            ? "rgba(59, 130, 246, 0.1)"
            : "rgba(59, 130, 246, 0.05)"
          : isParentOfActive
          ? themeColors === colors.dark
            ? "rgba(37, 99, 235, 0.15)"
            : "rgba(37, 99, 235, 0.08)"
          : isOpen
          ? themeColors.secondary
          : "transparent",
        transition: "background-color 0.2s, color 0.2s",
        position: "relative",
        justifyContent: collapsed ? "center" : "flex-start",
        fontWeight: isActive ? "600" : isParentOfActive ? "500" : "normal",
      }}
    >
      {/* Icon */}
      {IconComponent && (
        <IconComponent
          size={collapsed ? 20 : 18}
          style={{
            marginRight: collapsed ? "0" : "0.5rem",
            flexShrink: 0,
          }}
        />
      )}

      {/* Expand arrow (only when not collapsed and has children) */}
      {!collapsed && hasChildren && (
        <ChevronRight
          size={14}
          style={{
            marginRight: "0.5rem",
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.2s",
          }}
        />
      )}

      {/* Label (hidden when collapsed) */}
      {!collapsed &&
        (item.href ? (
          <Link
            href={item.href}
            style={{ color: "inherit", textDecoration: "none", flex: 1 }}
          >
            {item.label}
          </Link>
        ) : (
          <span style={{ flex: 1 }}>{item.label}</span>
        ))}

      {/* Tooltip for collapsed mode */}
      {collapsed && showTooltip && (
        <div
          style={{
            position: "absolute",
            left: "100%",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: "0.5rem",
            padding: "0.5rem 0.75rem",
            backgroundColor: themeColors.background,
            border: `1px solid ${themeColors.border}`,
            borderRadius: "0.375rem",
            whiteSpace: "nowrap",
            fontSize: "0.875rem",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        >
          {item.label}
        </div>
      )}
    </div>
  );

  return (
    <li style={{ marginBottom: collapsed ? "0.25rem" : "0.5rem" }}>
      {item.href && collapsed ? (
        <Link href={item.href} style={{ textDecoration: "none" }}>
          {content}
        </Link>
      ) : (
        content
      )}

      {/* Children (only show when not collapsed and is open) */}
      <AnimatePresence>
        {!collapsed && isOpen && hasChildren && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: "hidden" }}
          >
            <TreeMenu
              items={item.children!}
              level={level + 1}
              collapsed={collapsed}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
};

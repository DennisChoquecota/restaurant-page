"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { colors } from "@/src/db/dbColors";

import {
  Code2,
  Palette,
  Zap,
  Layers,
  Sparkles,
  Component,
  FileCode,
  Boxes,
  Rocket,
  Github,
  ExternalLink,
} from "lucide-react";
import Hero from "../components/sections/Hero";

export default function Home() {
  const { darkMode } = useTheme();
  const themeColors = darkMode ? colors.dark : colors.light;

  const techStack = [
    {
      category: "Frontend Framework",
      icon: <Rocket size={28} />,
      variant: "primary" as const,
      items: [
        { name: "Next.js 16", description: "React framework with App Router" },
        { name: "React 19", description: "Latest React features" },
      ],
    },
    {
      category: "Language & Types",
      icon: <Code2 size={28} />,
      variant: "info" as const,
      items: [{ name: "TypeScript 5", description: "Type-safe development" }],
    },
    {
      category: "Styling",
      icon: <Palette size={28} />,
      variant: "secondary" as const,
      items: [
        { name: "Tailwind CSS 4", description: "Utility-first CSS" },
        { name: "CVA", description: "Variant management" },
      ],
    },
    {
      category: "State & Data",
      icon: <Layers size={28} />,
      variant: "success" as const,
      items: [
        { name: "Zustand", description: "State management" },
        { name: "React Query", description: "Server state" },
        { name: "Axios", description: "HTTP client" },
      ],
    },
    {
      category: "UI & Animation",
      icon: <Sparkles size={28} />,
      variant: "warning" as const,
      items: [
        { name: "Framer Motion", description: "Animations" },
        { name: "Lucide React", description: "Icon library" },
        { name: "React Toastify", description: "Notifications" },
      ],
    },
    {
      category: "Design System",
      icon: <Component size={28} />,
      variant: "dark" as const,
      items: [
        { name: "Atomic Design", description: "Atoms, molecules, organisms" },
        { name: "Custom Components", description: "Reusable UI library" },
      ],
    },
  ];

  const features = [
    {
      icon: <Palette size={32} />,
      title: "Dark/Light Mode",
      description: "Seamless theme switching",
    },
    {
      icon: <Component size={32} />,
      title: "Component Library",
      description: "Atomic design system",
    },
    {
      icon: <Zap size={32} />,
      title: "Smooth Animations",
      description: "Framer Motion powered",
    },
    {
      icon: <Boxes size={32} />,
      title: "Type Safe",
      description: "Full TypeScript support",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingBottom: "4rem" }}>
      {/* Hero Section */}
    <Hero />
    </div>
  );
}

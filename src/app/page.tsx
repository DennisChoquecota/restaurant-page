"use client";

import { useTheme } from "@/src/context/ThemeContext";
import { colors } from "@/src/db/dbColors";
// import Card from "@/components/atoms/card/Card";
// import Button from "@/components/atoms/button/Button";
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
      <section
        style={{
          padding: "4rem 2rem",
          background: darkMode
            ? "linear-gradient(135deg, #1a202c 0%, #2d3748 100%)"
            : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          color: "white",
          textAlign: "center",
          marginBottom: "4rem",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: "bold",
              marginBottom: "1.5rem",
              background: "linear-gradient(to right, #fff, #e0e7ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Component Library
          </h1>
          <p
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              lineHeight: "1.6",
              opacity: 0.95,
              maxWidth: "700px",
              margin: "0 auto 2rem",
            }}
          >
            A modern, type-safe component library built with Next.js, React, and
            TypeScript
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {/* <Button variant="primary" size="lg" border="rounded" onClick={() => window.open("https://github.com/DennisChoquecota", "_blank")}>
              <Github size={20} style={{ marginRight: "0.5rem" }} />
              View on GitHub
            </Button>
            <Button light="primary" size="lg" border="rounded">
              <ExternalLink size={20} style={{ marginRight: "0.5rem" }} />
              Documentation
            </Button> */}
          </div>
        </div>
      </section>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
        {/* Tech Stack Section */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: themeColors.textPrimary,
              }}
            >
              Tech Stack
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: themeColors.textSecondary,
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Built with modern tools and best practices
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* {techStack.map((tech, idx) => (
              <Card
                key={idx}
                light={tech.variant}
                padding="md"
                hover={true}
                shadow={true}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {tech.icon}
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {tech.category}
                  </h3>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {tech.items.map((item, itemIdx) => (
                    <div key={itemIdx}>
                      <div
                        style={{
                          fontWeight: "500",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {item.name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.875rem",
                          opacity: 0.8,
                        }}
                      >
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))} */}
          </div>
        </section>

        {/* Features Section */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: themeColors.textPrimary,
              }}
            >
              Key Features
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {/* {features.map((feature, idx) => (
              <Card key={idx} padding="md" hover={true} shadow={true}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      color: darkMode ? "#63b3ed" : "#667eea",
                      marginBottom: "1rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: "600",
                      marginBottom: "0.75rem",
                      color: themeColors.textPrimary,
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.95rem",
                      color: themeColors.textSecondary,
                      lineHeight: "1.6",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))} */}
          </div>
        </section>

        {/* Design System Section */}
        <section style={{ marginBottom: "3rem" }}>
          {/* <Card padding="lg" shadow={true}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  color: darkMode ? "#63b3ed" : "#667eea",
                  marginBottom: "1.5rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <FileCode size={48} />
              </div>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                  color: themeColors.textPrimary,
                }}
              >
                Atomic Design System
              </h2>
              <p
                style={{
                  fontSize: "1.1rem",
                  color: themeColors.textSecondary,
                  lineHeight: "1.8",
                  maxWidth: "700px",
                  margin: "0 auto 2rem",
                }}
              >
                Our component library follows atomic design principles,
                organizing UI elements into atoms, molecules, and organisms for
                maximum reusability and maintainability.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button light="primary" size="md" border="rounded">
                  Atoms
                </Button>
                <Button light="secondary" size="md" border="rounded">
                  Molecules
                </Button>
                <Button light="info" size="md" border="rounded">
                  Organisms
                </Button>
              </div>
            </div>
          </Card> */}
        </section>
      </div>
    </div>
  );
}

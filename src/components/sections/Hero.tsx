    import { useTheme } from "@/src/context/ThemeContext";
    import { colors } from "@/src/db/dbColors";

    export default function Hero() {
  const { darkMode } = useTheme();
  const themeColors = darkMode ? colors.dark : colors.light;
  return (
    <section
      style={{
        padding: "4rem 2rem",
        background: themeColors.background,
        color: themeColors.textPrimary,
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

        </div>
      </div>
    </section>
  );
}
export const colors = {
    light: {
        // Fondos generales
        background: '#ffffff',
        surface: '#f7fafc',       // Cards, contenedores
        sidebar: '#f7fafc',
        secondary: '#e2e8f0',     // Hover states, elementos secundarios

        // Textos
        text: '#1a202c',          // Alias de textPrimary para compatibilidad
        textPrimary: '#1a202c',
        textSecondary: '#4a5568',
        textAccent: '#ed8936',

        // Bordes
        border: '#e2e8f0',
        divider: '#e2e8f0',

        // Botones
        button: {
            primary: '#3182ce',
            primaryText: '#ffffff',
            // secondary: '#e2e8f0',
            // secondaryText: '#1a202c',
            // ghostBg: '#ffffff',
            // ghostBorder: '#1a202c',
            // ghostText: '#1a202c',
        },

        // Inputs
        input: {
            background: '#ffffff',
            border: '#e2e8f0',
            text: '#1a202c',
            placeholder: '#a0aec0',
        },
    },
    dark: {
        background: '#1a202c',
        surface: '#2d3748',
        sidebar: '#2d3748',
        secondary: '#4a5568',     // Hover states, elementos secundarios

        text: '#f7fafc',          // Alias de textPrimary para compatibilidad
        textPrimary: '#f7fafc',
        textSecondary: '#a0aec0',
        textAccent: '#f6ad55',

        border: '#4a5568',
        divider: '#4a5568',

        button: {
            primary: '#63b3ed',
            primaryText: '#1a202c',
            secondary: '#2d3748',
            secondaryText: '#f7fafc',
            ghostBg: '#1a202c',
            ghostBorder: '#f7fafc',
            ghostText: '#f7fafc',
        },

        input: {
            background: '#2d3748',
            border: '#4a5568',
            text: '#f7fafc',
            placeholder: '#a0aec0',
        },
    },
};

// Card Colors Database
export const cardColors = {
    variant: {
        primary: { bg: "#1b85ff", border: "#1b85ff", text: "white", hoverBg: "#1570d9" },
        secondary: { bg: "#43cdd7", border: "#43cdd7", text: "white", hoverBg: "#3ab8c1" },
        success: { bg: "#2dd07f", border: "#2dd07f", text: "white", hoverBg: "#27b96f" },
        info: { bg: "#2cabe2", border: "#2cabe2", text: "white", hoverBg: "#2698ca" },
        danger: { bg: "#f8285a", border: "#f8285a", text: "white", hoverBg: "#e0234f" },
        warning: { bg: "#f6bf00", border: "#f6bf00", text: "#1a202c", hoverBg: "#ddab00" },
        dark: { bg: "#3a4652", border: "#3a4652", text: "white", hoverBg: "#2f3945" },
    },
    light: {
        primary: { bg: "#edf6fd", border: "#487ed6", text: "#487ed6", hoverBg: "#d9ecfc", hoverBorder: "#3d6fc2" },
        secondary: { bg: "#e2f4f6", border: "#5cc3ca", text: "#5cc3ca", hoverBg: "#ceedf0", hoverBorder: "#4fb0b7" },
        success: { bg: "#d1f4e0", border: "#48c58b", text: "#48c58b", hoverBg: "#bdefd1", hoverBorder: "#3db07a" },
        info: { bg: "#e4f5ff", border: "#58a2c9", text: "#58a2c9", hoverBg: "#d0ebff", hoverBorder: "#4d8fb5" },
        danger: { bg: "#f8d7da", border: "#f0578f", text: "#f0578f", hoverBg: "#f5c2c7", hoverBorder: "#d94d7e" },
        warning: { bg: "#fff3cd", border: "#e3b953", text: "#e3b953", hoverBg: "#ffecb3", hoverBorder: "#cca647" },
        dark: { bg: "#d3d3d4", border: "#141619", text: "#141619", hoverBg: "#c0c0c1", hoverBorder: "#0a0b0d" },
    },
};

// Button Colors Database
export const buttonColors = {
    variant: {
        primary: { bg: "#1b85ff", text: "white", hoverBg: "#1570d9", activeBg: "#0f60c4" },
        secondary: { bg: "#43cdd7", text: "white", hoverBg: "#3ab8c1", activeBg: "#2ea0a8" },
        success: { bg: "#2dd07f", text: "white", hoverBg: "#27b96f", activeBg: "#209e5f" },
        info: { bg: "#2cabe2", text: "white", hoverBg: "#2698ca", activeBg: "#1f80aa" },
        danger: { bg: "#f8285a", text: "white", hoverBg: "#e0234f", activeBg: "#c41e44" },
        warning: { bg: "#f6bf00", text: "black", hoverBg: "#ddab00", activeBg: "#b38b00" },
        dark: { bg: "#3a4652", text: "white", hoverBg: "#2f3945", activeBg: "#242c36" },
        outline: { bg: "transparent", text: "currentColor", hoverBg: "rgba(0,0,0,0.05)", activeBg: "rgba(0,0,0,0.1)" },
    },
    light: {
        primary: { bg: "#edf6fd", text: "#487ed6", hoverBg: "#1b85ff", hoverText: "white", activeBg: "#1b85ff", activeText: "white" },
        secondary: { bg: "#e2f4f6", text: "#5cc3ca", hoverBg: "#43cdd7", hoverText: "white", activeBg: "#43cdd7", activeText: "white" },
        success: { bg: "#d1f4e0", text: "#48c58b", hoverBg: "#2dd07f", hoverText: "white", activeBg: "#2dd07f", activeText: "white" },
        info: { bg: "#e4f5ff", text: "#58a2c9", hoverBg: "#2cabe2", hoverText: "white", activeBg: "#2cabe2", activeText: "white" },
        danger: { bg: "#f8d7da", text: "#f0578f", hoverBg: "#f8285a", hoverText: "white", activeBg: "#f8285a", activeText: "white" },
        warning: { bg: "#fff3cd", text: "#e3b953", hoverBg: "#f6bf00", hoverText: "white", activeBg: "#f6bf00", activeText: "white" },
        dark: { bg: "#d3d3d4", text: "#141619", hoverBg: "#3a4652", hoverText: "white", activeBg: "#3a4652", activeText: "white" },
    },
};
// Tooltip Colors Database
export const tooltipColors = {
    variant: {
        primary: { bg: "#1b85ff", text: "white" },
        secondary: { bg: "#43cdd7", text: "white" },
        success: { bg: "#2dd07f", text: "white" },
        info: { bg: "#2cabe2", text: "white" },
        danger: { bg: "#f8285a", text: "white" },
        warning: { bg: "#f6bf00", text: "#1a202c" },
        dark: { bg: "#3a4652", text: "white" },
    },
    light: {
        primary: { bg: "#edf6fd", text: "#487ed6" },
        secondary: { bg: "#e2f4f6", text: "#5cc3ca" },
        success: { bg: "#d1f4e0", text: "#48c58b" },
        info: { bg: "#e4f5ff", text: "#58a2c9" },
        danger: { bg: "#f8d7da", text: "#f0578f" },
        warning: { bg: "#fff3cd", text: "#e3b953" },
        dark: { bg: "#d3d3d4", text: "#141619" },
    },
};

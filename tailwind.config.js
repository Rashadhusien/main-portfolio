/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        focus: "#2dd4bf",
        orange: "#00b0b9",
        crimson: "#dc143c",
        blue: "#00b0b9",
        bluelight: "#00b0b9",
        headerlink: "rgb(2 141 148)",
        "icon-hover": "#d4d4d8",
        "icon-hover-light": "#333",
        opacityorange: "#00b0b9",

        // Dark theme
        primary: "black",
        box: "#0c0c0d",
        border: "rgba(63, 63, 70, 0.4)",
        title: "rgb(244 244 245)",
        subtitle: "rgb(161 161 170)",

        // Light theme
        primarylight: "rgb(250, 250, 250)",
        boxlight: "rgb(255, 255, 255)",
        borderlight: "rgba(202, 202, 202, 0.518)",
        titlelight: "rgb(39 39 42)",
        "sub-title-light": "rgb(82 82 91)",
        bgHeaderlight: "rgb(253 253 253)",

        // UI elements
        popupMenu: "rgba(40, 40, 48, 0.91)",
        btnproject: "rgba(36, 37, 46, 1)",
        bordercard: "rgba(93, 188, 252, 0.3)",
        fromgrad: "rgba(255, 255, 255, 0.05)",
        tograd: "rgba(255, 255, 255, 0.05)",
        cardlight: "rgb(246, 246, 246)",

        // Form inputs
        bginput: "rgba(63, 63, 70, 0.15)",
        bginputlight: "rgba(255, 255, 255, 0.162)",
        borderinput: "rgb(63, 63, 70)",
        borderinputlight: "rgba(128, 128, 128, 0.451)",
        inputtext: "#232324",
        focushoverinput: "rgb(45, 212, 191)",
        focushoverinputlight: "rgb(78, 80, 80)",

        // Submit buttons
        bgsubmit: "rgba(36, 37, 46, 1)",
        bordersubmit: "rgb(63, 63, 70)",

        // Footer & Scroll
        textfooter: "rgb(113, 113, 122)",
        scrolltop: "rgba(25, 118, 210, 0.85)",
        scrolltopborder: "rgba(255, 255, 255, 0.2)",
        scrollhover: "rgba(25, 118, 210)",

        // CSS variable-based theming
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },

      height: {
        100: "100",
        350: "350",
      },
      width: {
        80: "80",
        98: "98",
        200: "200",
      },
      maxWidth: {
        266: "266",
        580: "580",
      },
      fontSize: {
        0.88: "0.88rem",
        0.9: "0.9rem",
      },
      ringWidth: {
        2: 2,
      },
      scale: {
        1.01: "1.01",
        0.99: "0.99",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      boxShadow: {
        "3xl": "1px 1px 40px rgba(35, 35, 36, 0.165)",
        "4xl": "0 1px 1px rgba(0, 0, 0, 0.15), 0 1px 1px rgba(0, 0, 0, 0.16)",
      },
      animation: {
        menuscale: "menuscale 0.5s ease",
        marquee: "marquee 20s linear infinite",
        "marquee-vertical": "marquee-vertical 20s linear infinite",
      },
      keyframes: {
        menuscale: {
          "0%": { transform: "scale(0.5)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

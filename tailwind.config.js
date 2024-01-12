/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "200px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        aliceblue: "#ddf5ff",
        dodgerblue: "#0071ce",
        coral: "#ff8541",
        green: "#208837",
        Vivid_Tangelo: "#FF8541",
        denim_Blue: "#156BA9",
        oceanEmerald: "#0FA90C",
        boulder: "#747474",
        silver: "#DEDEDE",
        darkGray: "#808080",
        dustyBlue: "#B0BFD6",
        azureDream: "#F2F8FF",
        indigo: "#332C60",
        stoneGray: "#C3C3C3",
        bone: "#F1F1F1",
        lightPink:"#F6F0FF",
        indigoLight:"#422C60",
        gold:"#fcd966",
        lightGreen:"#87DB85"
      },
      fontFamily: {
        "open-sans": "'Open Sans'",
      },
      fontSize: {
        inherit: "inherit",
      },
    },
  },
  plugins: [],
};

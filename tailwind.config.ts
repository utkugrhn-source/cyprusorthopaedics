import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        turq: "#00ADB5",     // seal colour, taken from the clinic's own logo file
        deep: "#06363B",     // text and dark fields
        tide: "#007A80",     // small text / links on white (5:1)
        mist: "#EAF5F5",
        line: "#C5DDDE",
        slate: "#4A6769",
      },
      fontFamily: {
        sans: ["Geologica", "system-ui", "sans-serif"],
        seal: ["Cormorant Garamond", "Georgia", "serif"],
      },
      maxWidth: { page: "84rem" },
    },
  },
  plugins: [],
};
export default config;

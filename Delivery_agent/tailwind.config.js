/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}","./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        // Google Sans
        GoogleSans: ["GoogleSans", "Google-sans"],
        "google-sans": ["Google-sans", "GoogleSans"],

        // Poppins (default / regular)
        poppins: ["Poppins-Regular"],

        // Poppins kebab-case utilities
        "poppins-thin": ["Poppins-Thin"],
        "poppins-thin-italic": ["Poppins-ThinItalic"],
        "poppins-extralight": ["Poppins-ExtraLight"],
        "poppins-extralight-italic": ["Poppins-ExtraLightItalic"],
        "poppins-light": ["Poppins-Light"],
        "poppins-light-italic": ["Poppins-LightItalic"],
        "poppins-regular": ["Poppins-Regular"],
        "poppins-italic": ["Poppins-Italic"],
        "poppins-medium": ["Poppins-Medium"],
        "poppins-medium-italic": ["Poppins-MediumItalic"],
        "poppins-semibold": ["Poppins-SemiBold"],
        "poppins-semibold-italic": ["Poppins-SemiBoldItalic"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-bold-italic": ["Poppins-BoldItalic"],
        "poppins-extrabold": ["Poppins-ExtraBold"],
        "poppins-extrabold-italic": ["Poppins-ExtraBoldItalic"],
        "poppins-black": ["Poppins-Black"],
        "poppins-black-italic": ["Poppins-BlackItalic"],

        // Direct font-name mappings
        "Poppins-Thin": ["Poppins-Thin"],
        "Poppins-ThinItalic": ["Poppins-ThinItalic"],
        "Poppins-ExtraLight": ["Poppins-ExtraLight"],
        "Poppins-ExtraLightItalic": ["Poppins-ExtraLightItalic"],
        "Poppins-Light": ["Poppins-Light"],
        "Poppins-LightItalic": ["Poppins-LightItalic"],
        "Poppins-Regular": ["Poppins-Regular"],
        "Poppins-Italic": ["Poppins-Italic"],
        "Poppins-Medium": ["Poppins-Medium"],
        "Poppins-MediumItalic": ["Poppins-MediumItalic"],
        "Poppins-SemiBold": ["Poppins-SemiBold"],
        "Poppins-SemiBoldItalic": ["Poppins-SemiBoldItalic"],
        "Poppins-Bold": ["Poppins-Bold"],
        "Poppins-BoldItalic": ["Poppins-BoldItalic"],
        "Poppins-ExtraBold": ["Poppins-ExtraBold"],
        "Poppins-ExtraBoldItalic": ["Poppins-ExtraBoldItalic"],
        "Poppins-Black": ["Poppins-Black"],
        "Poppins-BlackItalic": ["Poppins-BlackItalic"],
      },
  },
  plugins: [],
}}
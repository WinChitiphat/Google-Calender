/** @type {import('tailwindcss').Config} */
//module.exports = {
//  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//  theme: {
//    extend: {},
//  },
//  plugins: [],
//}

const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  //Because we made a dynamic class with the label we need to add those clases
  // to the safe list so the purge does not remove that
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`)
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
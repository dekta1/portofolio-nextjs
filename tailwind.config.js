module.exports = {
  content: [
    "./src**/*.{js,jsx,ts,tsx}",
            "./app/**/*.{js,ts,jsx,tsx}",
            "./pages/**/*.{js,ts,jsx,tsx}",
            "./src/components/**/*.{js,ts,jsx,tsx}",
          ],
  theme: {
    extend: {
      fontFamily: {
        signature: ["Great Vibes"]
      },
      backgroundImage: {
        hero:"url(src/assets/img1/tree.jpg)",
      },
    },
  },
  Plugins:[],
};

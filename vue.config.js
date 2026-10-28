module.exports = {
  transpileDependencies: ["vuetify"],
  pwa: {
    workboxOptions: {
      // Activate a new deployment right away instead of waiting for every tab to close.
      skipWaiting: true,
      clientsClaim: true,
    },
  },
};

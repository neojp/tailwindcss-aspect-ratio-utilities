module.exports = function addAspectRatioUtilities({ addUtilities, variants }) {
  addUtilities({
    '.aspect-ratio-square': { paddingTop: '100%' },
    '.aspect-ratio-3\\/2': { paddingTop: '66.66666666666667%' },
    '.aspect-ratio-2\\/3': { paddingTop: '150%' },
    '.aspect-ratio-4\\/3': { paddingTop: '75%' },
    '.aspect-ratio-5\\/6': { paddingTop: '120%' },
    '.aspect-ratio-16\\/9': { paddingTop: '56.25%' },
    '.aspect-ratio-21\\/9': { paddingTop: '42.86%' },
  }, variants('aspectRatio'));
};
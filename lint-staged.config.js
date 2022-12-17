module.exports = {
  // Lint then format TypeScript and JavaScript files
  '**/*.(jsx|js)': (filenames) => [`yarn run lint:fix ${filenames.join(' ')}`],
}

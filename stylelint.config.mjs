export default {
  extends: ['stylelint-config-obsidianmd'],
  rules: {
    // Validate against the declared minimum, not only today's Electron.
    'plugin/no-unsupported-browser-features': [true, {
      severity: 'warning', browsers: ['electron >= 31'],
      ignore: ['css-nesting', 'css-cascade-layers'],
    }],
  },
};

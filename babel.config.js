const presets = [
  [
    '@babel/env',
    {
      targets: '> 0.25%, not dead',
      useBuiltIns: 'usage',
      corejs: '3.21.1',
    }
  ],
];

module.exports = { presets }; 
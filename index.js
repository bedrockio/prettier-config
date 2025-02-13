export default {
  singleQuote: true,
  bracketSameLine: true,
  proseWrap: 'always',
  overrides: [
    {
      files: '*.json',
      options: {
        parser: 'json-stringify',
      },
    },
  ],
};

// TODO: This is only needed for older versions of node
// (currenly the node running prettier inside VSCode) as
// it cannot require from index.js. It can go away eventually.
module.exports = {
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

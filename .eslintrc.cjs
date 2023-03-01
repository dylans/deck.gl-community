module.exports = {
  "plugins": [
    "import"
  ],
  "extends": [
    "prettier", "plugin:import/errors"
  ],
  "overrides": [
    {
      "files": [
        "*.spec.js", "webpack.config.js"
      ],
      "rules": {
        "import/no-extraneous-dependencies": 0
      }
    }
  ],
  "settings": {},
  "rules": {
    "guard-for-in": 0,
    "no-inline-comments": 0,
    "import/no-unresolved": [
      "error", {
        "ignore": [
          "test"
        ]}],
    "import/no-extraneous-dependencies": [
      "error", {
        "devDependencies": true, "peerDependencies": true}]
  },
  "env" : {
    "browser" : true,
    "node" : true,
    "es6" : true
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 2022,
    "ecmaFeatures": {
      "jsx": true
    },
    babelOptions: {
      rootMode: "upward"
    },
  }
};

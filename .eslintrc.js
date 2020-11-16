module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint", "react-native", "prettier"],
  parserOptions: {
    sourceType: "module"
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors.
    "prettier/react",
    "prettier/@typescript-eslint"
  ],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"]
      }
    }
  },
  rules: {
    "no-use-before-define": "off",
    "no-unused-vars": 2,
    "@typescript-eslint/no-unused-vars": 2,
    "@typescript-eslint/no-use-before-define": ["error", { variables: false }],
    "@typescript-eslint/explicit-member-accessibility": "off",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 0,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 0,
    "prettier/prettier": 2,
    // custom rules
    "import/extensions": "off",
    "import/no-unresolved": [2, { ignore: ['react-native'] }]
  }
};

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ["airbnb", "airbnb-typescript", "plugin:react/jsx-runtime", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["packages/ui/tsconfig.eslint.json", "apps/*/tsconfig.json"]
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function"
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "no-restricted-exports": "off"
  },
  ignorePatterns: [".eslintrc.js", "commitlint.config.js", "dist"]
};

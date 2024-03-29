/** @type {import("eslint/lib/shared/types").ConfigData} */
module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  globals: {
    flushPromises: true
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module",
    warnOnUnsupportedTypeScriptVersion: true
  },
  plugins: ["import", "jsx-a11y", "jest", "@typescript-eslint/eslint-plugin"],
  rules: {
    "array-callback-return": "off",
    "arrow-body-style": ["off"],
    "arrow-parens": ["warn", "always"],
    "class-method-use-this": "off",
    "comma-dangle": ["error", "never"],
    "consistent-return": "off",
    "constructor-super": "error",
    "dot-notation": "warn",
    "for-direction": "error",
    "generator-star-spacing": ["off"],
    "getter-return": "error",
    "jsx-no-target-blank": "off",
    "jsx-quotes": ["off"],
    "linebreak-style": ["error", "unix"],
    "max-len": ["off"],
    "new-cap": ["error", { capIsNew: false }],
    "no-alert": "off",
    "no-array-constructor": "off",
    "no-case-declarations": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "warn",
    "no-console": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": "warn",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-empty": "error",
    "no-ex-assign": "error",
    "no-extra-boolean-cast": "warn",
    "no-fallthrough": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-lonely-if": "warn",
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["&&", "||"]
        ],
        allowSamePrecedence: true
      }
    ],
    "no-nested-ternary": "off",
    "no-new-symbol": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-redeclare": "off",
    "no-regex-spaces": "error",
    "no-self-assign": "error",
    "no-shadow": "off",
    "no-sparse-arrays": "error",
    "no-this-before-super": "error",
    "no-undef": "error",
    "no-underscore-dangle": ["off"],
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "no-useless-escape": "off",
    "object-shorthand": "warn",
    "prefer-const": "warn",
    "prefer-template": "warn",
    "quote-props": ["warn", "as-needed"],
    "require-yield": "error",
    "space-before-function-paren": [
      "warn",
      { anonymous: "always", asyncArrow: "always", named: "never" }
    ],
    "use-isnan": "error",
    "valid-typeof": "error",
    indent: "off",
    quotes: ["off"],
    semi: "off",

    // @typescript-eslint
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/explicit-function-return-type": ["off"],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        overrides: {
          constructors: "no-public",
          parameterProperties: "no-public",
          accessors: "no-public"
        }
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/func-call-spacing": ["error", "never"],
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/no-floating-promises": "error",
    "@typescript-eslint/no-redeclare": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "^_",
        argsIgnorePattern: "^_",
        ignoreRestSiblings: true
      }
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-useless-constructor": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/semi": ["error", "always"],

    // import
    "import/extensions": "off",
    "import/first": "warn",
    "import/named": "off",
    "import/no-extraneous-dependencies": ["off"],
    "import/no-unresolved": ["off"],
    "import/order": "warn",
    "import/prefer-default-export": "off",

    // jsx-a11y
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "jsx-a11y/no-static-element-interactions": "off"
  }
};

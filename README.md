# @tknf/frontend-linters

TKNF's lint and format tools for TypeScript(or JavaScript) project.

## Packages
- `@tknf/eslint-config-typescript`
- `@tknf/prettier-config`

## ESLint

### Installation

#### Install package
```bash
$ yarn add -D @tknf/eslint-config-typescript
# or
$ npm install --save-dev @tknf/eslint-config-typescript
```

#### Dependencies
- `@typescript-eslint/parser`
- `@typescript-eslint/eslint-plugin`
- `eslint`
- `eslint-config-prettier`
- `eslint-plugin-import`
- `eslint-plugin-jest`
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

### Configuration
```json:.eslintrc
{
  "extends": ["@tknf/eslint-config-typescript"],
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```

## Prettier

### Installation
```bash
$ yarn add -D @tknf/prettier-config`
# or
$ npm install --save-dev @tknf/prettier-config
```

### Configuration
```json:package.json
{
  "prettier": "@tknf/prettier-config"
}
```

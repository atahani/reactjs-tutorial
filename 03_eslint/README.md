## Instruction

1. install eslint and related modules

```
yarn add eslint eslint-config-eslint babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-airbnb --dev
```

2. add .eslintrc file

```
{
  "extends": ["airbnb","eslint", "eslint:recommended", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "ecmaFeatures": {
    "classes": true,
    "jsx": true
  },
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "arrow-body-style": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "eqeqeq": "error",
    "generator-star-spacing": "error",
    "no-duplicate-imports": "error",
    "no-eq-null": "error",
    "no-undefined": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-rename": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "rest-spread-spacing": "error",
    "semi": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error"
  }
}
```

3. you can run it

```
./node_modules/.bin/eslint client/index.js
```

4. install ESLint extensions on VS Code

Launch VS Code Quick Open (⌘+P), paste the following command, and press enter

```
ext install vscode-eslint
```

5. add this config to user settings

```
"eslint.run": "onType",
```

6. open keyboard shortcuts and add this to keybindings.json

```
{
    "key": "cmd+shift+f",
    "command": "eslint.executeAutofix"
},
```

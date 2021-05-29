process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const path = require('path');

module.exports = {
  "parser": "babel-eslint",
  "plugins": ["lodash"],
  "extends": ["eslint:recommended", "airbnb", "react-app"],
  "env": {
    "browser": true,
  },
  "rules": {
    "newline-per-chained-call": ["error", { "ignoreChainWithDepth": 1 }],
    "eol-last": ["error", "always"],
    "no-unused-vars": "error",
    "indent": [
      "error",
      2,
      {
        "FunctionDeclaration": { "body": 1, "parameters": 1 },
        "FunctionExpression": { "body": 1, "parameters": 1 },
        "SwitchCase": 1
      }
    ],
    "max-len": ["error", 120],
    "multiline-ternary": ["error", "always-multiline"],
    "no-case-declarations": "error",
    "no-console": "error",
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": "return" },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      { "blankLine": "any",    "prev": ["const", "let", "var"], "next": ["const", "let", "var"]}
    ],
    "no-mixed-operators": "error",
    "no-plusplus": "warn",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 0
      }
    ],
    "no-shadow": "warn",
    "operator-linebreak": ["error", "before"],
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "linebreak-style": "off",
    "object-curly-spacing": ["error", "always"],
    "react/jsx-filename-extension": "off",
    "react/prefer-es6-class": ["error", "always"],
    "react/forbid-prop-types": "warn",
    'react/jsx-curly-spacing': ["error", {
      'when': 'never',
      "children": true,
      'spacing': {
        'objectLiterals': 'never'
      }
    }],
    "react/jsx-sort-props": ["error", {
      "ignoreCase": true,
    }],
    "react/jsx-sort-default-props": ["error", {
      "ignoreCase": true,
    }],
    "react/jsx-closing-bracket-location": [
      "warn",
      {
        "nonEmpty": "line-aligned",
        "selfClosing": "line-aligned"
      }
    ],
    "react/jsx-closing-tag-location": "warn",
    "react/jsx-first-prop-new-line": [
      "error",
      "multiline-multiprop"
    ],
    "react/jsx-pascal-case": "error",
    "react/jsx-tag-spacing": ["error", { "beforeSelfClosing": "always" }],
    "react/prefer-stateless-function": "error",
    "react/no-unused-prop-types": "error",
    "react/no-array-index-key": "error",
    "react/no-string-refs": "error",
    "react/prop-types": "error",
    "react/jsx-wrap-multilines": ["error", { "return": "parens-new-line" }],
    "react/self-closing-comp": "warn",
    "react/jsx-no-bind": "error",
    "jsx-a11y/alt-text": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/aria-role": ["error", {
      "ignoreNonDOM": true
    }],
    "import/no-unresolved": "off",
    "import/no-named-as-default": "off",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": "error",
    "import/extensions": ["error", "always", {
      "js": "never",
      "svg": "never"
    }],
    "no-restricted-imports": [
      "warn", {
        "patterns": ["../../../*"]
      }
    ],
    "import/no-restricted-paths": [
      "warn", {
      "zones": [
        {
          "target": "src/components/CAP/MyPerformance",
          "from": "src/components/CAP/Company"
        },
        {
          "target": "src/components/CAP/Subsidiary",
          "from": "src/components/CAP/Company"
        },
        {
          "target": "src/components/CAP/Subsidiary",
          "from": "src/components/CAP/MyPerformance"
        }
      ]
    }],
    "lodash/import-scope": [2, "method"],
    "lodash/prefer-includes": "error",
    "lodash/prefer-is-nil": "error",
  },
  "globals": {
    "NODE_ENV": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": path.resolve(__dirname, 'config/webpack/webpack.config.base.js')
      }
    }
  },
  "overrides": [
    {
      "files": ["src/**/*.test.js", "src/intl/parse.js", "src/intl/parseForPdf.js"],
      "env": {
        "node": true
      },
      "rules": {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
        "react/jsx/no-bind": "off"
      },
      "settings": {
        "import/resolver": {
          "node": {
            "moduleDirectory": ["node_modules", "src"]
          }
        }
      },
    },
    {
      "files": ["src/**/*.test.js"],
      "env": {
        "jest": true
      },
      "globals": {
        "context": true
      },
      "rules": {
        "no-unused-expressions": "error"
      },
    },
    {
      "files": ["src/**/*.story.js"],
      "rules": {
        "import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
      },
      "settings": {
        "import/resolver": {
          "webpack": {
            "config": path.resolve(__dirname, '.storybook/webpack.config.js')
          }
        }
      }
    }
  ]
}

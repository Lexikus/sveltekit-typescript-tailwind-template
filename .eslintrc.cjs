const onlyTypeScriptRules = {
    "@typescript-eslint/array-type": [
        "error",
        {
            default: "array"
        }
    ],
    "@typescript-eslint/await-thenable": ["error"],
    "@typescript-eslint/ban-types": ["error"],
    "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "allow-as-parameter"
        }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/explicit-function-return-type": [
        "error",
        {
            allowExpressions: true,
            allowTypedFunctionExpressions: true,
            allowHigherOrderFunctions: true,
            allowDirectConstAssertionInArrowFunctions: true,
            allowConciseArrowFunctionExpressionsStartingWithVoid: false
        }
    ],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "@typescript-eslint/member-delimiter-style": ["error"],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/naming-convention": [
        "error",
        {
            selector: "enumMember",
            format: ["PascalCase"]
        }
    ],
    "@typescript-eslint/no-confusing-void-expression": ["off"],
    "@typescript-eslint/no-dynamic-delete": ["error"],
    "@typescript-eslint/no-empty-interface": ["error"],
    "@typescript-eslint/no-explicit-any": ["error"],
    "@typescript-eslint/no-extra-non-null-assertion": ["error"],
    "@typescript-eslint/no-extraneous-class": [
        "error",
        {
            allowConstructorOnly: false,
            allowEmpty: false,
            allowStaticOnly: true,
            allowWithDecorator: true
        }
    ],
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-for-in-array": ["error"],
    "@typescript-eslint/no-inferrable-types": ["error"],
    "@typescript-eslint/no-invalid-void-type": ["error"],
    "@typescript-eslint/no-meaningless-void-operator": ["error"],
    "@typescript-eslint/no-misused-promises": ["error"],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": ["error"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": ["error"],
    "@typescript-eslint/no-require-imports": ["error"],
    "@typescript-eslint/no-this-alias": ["error"],
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": ["error"],
    "@typescript-eslint/no-unnecessary-type-arguments": ["error"],
    "@typescript-eslint/no-unnecessary-type-assertion": ["error"],
    "@typescript-eslint/no-unnecessary-type-constraint": ["error"],
    "@typescript-eslint/no-unsafe-argument": ["error"],
    "@typescript-eslint/no-unsafe-assignment": ["error"],
    "@typescript-eslint/no-unsafe-call": ["error"],
    "@typescript-eslint/no-unsafe-return": ["error"],
    "@typescript-eslint/non-nullable-type-assertion-style": ["error"],
    "@typescript-eslint/prefer-for-of": ["error"],
    "@typescript-eslint/prefer-literal-enum-member": ["error"],
    "@typescript-eslint/prefer-nullish-coalescing": ["error"],
    "@typescript-eslint/prefer-optional-chain": ["error"],
    "@typescript-eslint/prefer-return-this-type": ["error"],
    "@typescript-eslint/promise-function-async": ["error"],
    "@typescript-eslint/restrict-plus-operands": ["error"],
    "@typescript-eslint/restrict-template-expressions": ["error"],
    "@typescript-eslint/switch-exhaustiveness-check": ["error"],
    "@typescript-eslint/type-annotation-spacing": ["error"],
    "@typescript-eslint/unbound-method": ["error"],
    "@typescript-eslint/dot-notation": ["error"],
    "@typescript-eslint/no-throw-literal": ["error"],
    "@typescript-eslint/require-await": ["error"],
    "@typescript-eslint/return-await": ["error"],
    "@typescript-eslint/no-non-null-assertion": "off"
};

const commonRules = {
    "linebreak-style": ["error", "unix"],
    "key-spacing": ["error"],
    "no-self-compare": ["error"],
    eqeqeq: ["error", "always"],
    "no-alert": ["error"],
    "no-console": ["warn"],
    "no-else-return": [
        "error",
        {
            allowElseIf: false
        }
    ],
    "no-eq-null": ["error"],
    "no-return-assign": ["error"],
    "no-useless-rename": ["error"],
    "no-useless-return": ["error"],
    "no-var": ["error"],
    "no-void": ["error"],
    "no-with": ["error"],
    "prefer-const": ["warn"],
    "prefer-object-spread": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    radix: ["error", "as-needed"],
    "spaced-comment": ["warn", "always"],
    yoda: ["error"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error"],
    "block-spacing": ["error"],
    "comma-style": ["error"],
    "computed-property-spacing": ["error"],
    "dot-location": ["error", "property"],
    "eol-last": ["error"],
    "new-parens": ["error"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error"],
    "no-trailing-spaces": ["error"],
    "no-whitespace-before-property": ["error"],
    "rest-spread-spacing": ["error", "never"],
    "semi-spacing": ["error"],
    "semi-style": ["error"],
    "space-before-blocks": ["error", "always"],
    "space-in-parens": ["error"],
    "space-unary-ops": [
        "error",
        {
            words: true,
            nonwords: false
        }
    ],
    "switch-colon-spacing": ["error"],
    "template-tag-spacing": ["error"],
    "template-curly-spacing": ["off"],
    "brace-style": "off",
    "@typescript-eslint/brace-style": ["error"],
    "comma-dangle": "off",
    "@typescript-eslint/comma-dangle": ["error"],
    "comma-spacing": "off",
    "@typescript-eslint/comma-spacing": ["error"],
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": ["error"],
    "dot-notation": ["error"],
    "func-call-spacing": "off",
    "@typescript-eslint/func-call-spacing": ["error"],
    "keyword-spacing": "off",
    "@typescript-eslint/keyword-spacing": ["error"],
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": ["error"],
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": ["error"],
    "no-extra-semi": "off",
    "@typescript-eslint/no-extra-semi": ["error"],
    "no-invalid-this": "off",
    "@typescript-eslint/no-invalid-this": ["error"],
    "no-loop-func": "off",
    "@typescript-eslint/no-loop-func": ["error"],
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": ["error"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": [
        "warn",
        {
            allow: ["_"]
        }
    ],
    "no-throw-literal": ["error"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
        "error",
        {
            functions: false,
            classes: false
        }
    ],
    "object-curly-spacing": "off",
    "@typescript-eslint/object-curly-spacing": ["error", "always"],
    quotes: "off",
    "@typescript-eslint/quotes": [
        "error",
        "double",
        {
            allowTemplateLiterals: true
        }
    ],
    "require-await": ["error"],
    "no-return-await": "off",
    semi: "off",
    "@typescript-eslint/semi": ["error", "always"],
    "space-before-function-paren": "off",
    "@typescript-eslint/space-before-function-paren": [
        "error",
        {
            anonymous: "never",
            named: "never",
            asyncArrow: "always"
        }
    ],
    "space-infix-ops": "off",
    "@typescript-eslint/space-infix-ops": [
        "error",
        {
            int32Hint: false
        }
    ],
    indent: "off",
    "@typescript-eslint/indent": [
        "error",
        4,
        {
            ignoredNodes: ["PropertyDefinition", "TSTypeParameterInstantiation", "TSUnionType", "TSIntersectionType"],
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            MemberExpression: 1,
            StaticBlock: {
                body: 1
            },
            CallExpression: {
                arguments: "off"
            },
            ArrayExpression: 1,
            ObjectExpression: 1,
            ImportDeclaration: 1,
            flatTernaryExpressions: false,
            offsetTernaryExpressions: false,
            FunctionDeclaration: {
                body: 1,
                parameters: 1
            },
            FunctionExpression: {
                body: 1,
                parameters: 1
            }
        }
    ],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
        "error",
        {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_"
        }
    ]
};

module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:svelte/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: ["@typescript-eslint"],
    overrides: [
        {
            files: ["**/*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: "@typescript-eslint/parser",
                project: "./tsconfig.json"
            },
            rules: { ...commonRules, ...onlyTypeScriptRules }
        },
        {
            files: ["**/*.cts", "**/*.mts", "**/*.ts"],
            parserOptions: {
                project: "./tsconfig.json"
            },
            rules: { ...commonRules, ...onlyTypeScriptRules }
        }
    ],
    parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
        extraFileExtensions: [".svelte"]
    },
    env: {
        browser: true,
        es2017: true,
        node: true
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".cjs", ".mjs", ".js", ".ts"]
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true
            }
        }
    },
    rules: commonRules
};

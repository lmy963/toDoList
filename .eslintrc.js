module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ["plugin:vue/essential", "@vue/typescript"],
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-extra-semi": 2 //禁止多余的冒号
    },
    parserOptions: {
        parser: "@typescript-eslint/parser"
    },
    overrides: [
        {
            files: [
                "**/__tests__/*.{j,t}s?(x)",
                "**/tests/unit/**/*.spec.{j,t}s?(x)"
            ],
            env: {
                jest: true
            }
        }
    ]
}


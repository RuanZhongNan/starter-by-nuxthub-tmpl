// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

import antfu from "@antfu/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default withNuxt(
	// Your custom configs here
	antfu(
		{
			// Or customize the stylistic rules
			stylistic: {
				indent: 2, // 4, or 'tab'
				quotes: "double", // or 'double'
				semi: true, // or 'always'
			},

			// TypeScript and Vue are auto-detected, you can also explicitly enable them:
			/**
			 * @see https://stackoverflow.com/questions/65137939/typescript-eslint-throws-cannot-read-file-tsconfig-json-in-every-project-i-s
			 */
			// 展示不使用 因为mjs没有 __dirname 的配置；
			// typescript: {
			// 	tsconfigPath: "./tsconfig.json",
			// 	parserOptions: {
			// 		project: "tsconfig.json",
			// 		sourceType: "module",
			// 		tsconfigRootDir: __dirname,
			// 	},
			// },

			vue: true,

			javascript: {
				/**
				 * @see https://eslint.org/docs/latest/use/configure/migration-guide#importing-plugins-and-custom-parsers
				 */
				overrides: {
					"jsdoc/require-description": "error",
					"jsdoc/check-values": "error",
				},
			},

			// Disable jsonc and yaml support
			jsonc: false,
			yaml: false,

			// `.eslintignore` is no longer supported in Flat config, use `ignores` instead
			ignores: [
				"**/fixtures",
				// ...globs
			],

			/**
			 * @see https://juejin.cn/post/7338074027281104936
			 */
			formatters: {
				/**
				 * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
				 * By default uses Prettier
				 */
				css: true,
				/**
				 * Format HTML files
				 * By default uses Prettier
				 */
				html: true,
				/**
				 * Format Markdown files
				 * Supports Prettier and dprint
				 * By default uses Prettier
				 */
				markdown: "prettier",
			},
		},

		{
			rules: {
				"no-console": "off",
				// 设置为总是警告
				// "style/semi": ["warn", "always"],
			},
		},

		{
			rules: {
				"prettier/prettier": [
					"error",
					{
						usePrettierrc: true,
						singleQuote: false,
						printWidth: 120,
						semi: true,
						jsxSingleQuote: true,
						useTabs: true,
						tabWidth: 2,
						endOfLine: "auto",
					},
				],
			},
		},

		eslintConfigPrettier,
		// @ts-ignore 不明白为什么会报错 这里忽略类型检查
		eslintPluginPrettierRecommended,
	),
);

# Welcome to Typescript design patterns

It's a project with pattern implementation in Typescript

# Create project
<kbd>npm</kbd> also includes a tool called <kbd>npx</kbd>, which will run executable packages. npx allows us to run packages without having to install them globally.
```
npm init --y
npm i typescript --save-dev
npx tsc --init
```
The <kbd>tsc</kbd> command is used here because it is the built-in TypeScript compiler. When you write code in TypeScript, running tsc will transform or compile your code into JavaScript.

Using the <kbd>--init</kbd> flag in the above command will initialize your project by creating a <kbd>tsconfig.json</kbd> file in your typescript-project project directory. This tsconfig.json file will allow you to configure further and customize how TypeScript and the tsc compiler interact.

Giving <kbd>outDir</kbd> the value of "dist" will create a folder or directory called dist. When you run npx tsc to compile your TypeScript file, the compiled JavaScript file will be placed in the dist file.

A <kbd>sourcemap</kbd> will also be created when you compile your TypeScript file. A sourcemap is a file that maps the new compiled JavaScript file to the original TypeScript file. When there are errors in your code or if there are changes that need to be made, it is best to debug the original source code rather than the compiled code. This is why sourcemaps are helpful. Setting "sourceMap" to true will allow you to quickly solve errors in the original TypeScript file.

Use this to compile file
```
npx tsc your-file.ts
```

# Lint
> ⚠ <span style="color:orange"> **TSLint is deprecated, use ESLint instead**</span>
```
npm i tslint --save-dev
npx tslint --init
```
Use this and follow the guide 😁
```
npm i eslint --save-dev
npx eslint --init
```
It will create <kbd>.eslintrc.json</kbd> file extended whatever guide you wanted to extend or stating your rules.

Read more [here](https://codeburst.io/eslint-everything-you-need-to-know-about-enforcing-a-style-guide-with-eslint-d4520c732dcb).

You can also use:
```
npx gts init
npx gts fix
npx gts check
```

# Run the examples
Find the example you want and simply run main.ts.
```
npx ts-node .\src\factory\main.ts
```
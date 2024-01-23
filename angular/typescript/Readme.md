# Starting

## by Pedrobolfute

### First, start git on root repository/directory

git init

### Install typescript

npm install typescript -D

- "-D means User Dependency only. It means that this version of typescript will work only in this directorie and will not go to deploy too."

### Convert ts to js (transpilation/transpilação)

npx tsc ARCHIVE.ts

- npx menas node packege execute

### better typescript config

npx tsc --init

- // Will create a tsconfig.json

[site](https://www.typescriptlang.org/tsconfig) to see configs that I can do

1.**Principals**

"target": "es2016"

- To work with node: Which version of node you are using...

"rootDir": "./src",

- Specify the root folder within your source files.

"outDir": "./build",

- Specify an output folder for all emitted files.

2.**Execute typescript**

npx tsc

- Acording with this config above, tsc will read the tsconfig.json and follow the instructions to compile ts and output it in build directory.

3.**To better yet**

"start": "npx tsc && node build/index.js"

- Create a script in packege.json to execute tsc and the node js file

4.**Better yet yet**

npm install ts-node-dev -D

- Servidor de desenvolvimento ts. Como o Live Server
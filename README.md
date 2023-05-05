# Major Reference

The Net Ninja
TypeScript Tutorial
https://www.youtube.com/watch?v=2pZmKW9-I_k&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=1

0. To run the project, install VS code live-server extension and click Go Live

1. Install typescript compiler via npm

```
npm install -g typescript
```

2. Install live-server extensions in VS code

3. When want to compiles sandbox.ts to sandbox.js, type

```
tsc sandbox.ts
```

or (-w stands for watch)

```
tsc sandbox.ts -w
```

4. When work in a complex folder structure where js files are placed in different folder from ts files

```
tsc --init
```

- A tsconfig.json file is created, edit outDir and rootDir variables
- Add `"include": ["src"]` in tsconfig.json to avoid files outside src folder being compiled
- To compile all the files in src folder, we do not need to cd to the src folder, just type `tsc -w` in project folder, then all the ts files will be watched and compiled

### Some other good reference

1. https://medium.com/@eshagarg1996/best-practices-for-typescript-coding-8b1ea98d02f8
2. https://medium.com/@martin_hotell/interface-vs-type-alias-in-typescript-2-7-2a8f1777af4c

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/app/controllers",
          "@services": "./src/app/services",
          "@config": "./src/app/config",
          "@infra": "./src/app/infra",
          "@routes": "./src/app/routes",
          "@utils": "./src/app/utils",
          "@modelTypes": "./src/app/types",
          "@middlewares": "./src/app/middlewares",
          "@database": "./src/database",
        },
      },
    ],
  ],
};

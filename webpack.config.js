const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
module.exports = {
  output: {
    uniqueName: "angular_timeline_mfe",
    publicPath: "auto",
    scriptType: "module", // 👈 Ensures the script is a module
  },
  experiments: { outputModule: true }, // 👈 Essential for import.meta
  optimization: { runtimeChunk: false },
  plugins: [
    new ModuleFederationPlugin({
      name: "angular_timeline_mfe",
      filename: "remoteEntry.js",
      exposes: {
        "./Component": "./src/app/app.component.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
      },
    }),
  ],
};

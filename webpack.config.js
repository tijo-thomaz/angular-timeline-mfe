const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  output: {
    uniqueName: "angular_timeline_mfe",
    publicPath: "auto",
    scriptType: "module", // <-- Key fix here!
  },
  optimization: { runtimeChunk: false },
  experiments: { outputModule: true }, // <-- Critical for ESM support!
  plugins: [
    new ModuleFederationPlugin({
      name: "angular_timeline_mfe",
      library: { type: "module" }, // <-- Critical change!
      filename: "remoteEntry.js",
      exposes: {
        "./Module": "./src/app/app.module.ts",
        "./bootstrap": "./src/bootstrap.ts",
      },
      shared: {
        "@angular/core": { singleton: true, strictVersion: true },
        "@angular/common": { singleton: true, strictVersion: true },
        "@angular/router": { singleton: true, strictVersion: true },
      },
    }),
  ],
};

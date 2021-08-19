module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["@babel/preset-react", {
        "runtime": "automatic"
      }],
      [
        '@babel/preset-env',
        {
          targets: "> 0.25%, not dead",
          //modules: "commonjs"
          modules: false,  // Web pack handles modules also
          useBuiltIns: "usage",
          corejs: 2.6
        },
      ],
    ],
    plugins: [
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-modules-commonjs',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-transform-runtime',
      '@babel/plugin-proposal-optional-chaining',
      "babel-plugin-add-module-exports",
      ["module-resolver", {
        //"root": ["./src/**", "./src/components/**"],
        "root": ["./src"],
        "alias": {
          "common/*":  "./src/common/*",
          "layouts/*":  "./src/layouts/*",
          "svg/*":  "./src/svg/*",
          "img/*":  "./src/img/*",
          "views/*":  "./src/views/*",
          "theme/*":  "./src/theme/*",
          "scss/*": "./src/scss/*"
        }
      }]
    ],
    "env": {
      "development" : {
        "compact": false  // Hides warnings from babel output
      }
    },
  }
}

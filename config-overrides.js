// config-overrides.js
module.exports = function override(config, env) {
    // New config, e.g. config.plugins.push...

    console.log(config)

    config.resolve = {
        ...config.resolve,
        // add '.mjs' (make sure to include your other file types)
        extensions: [...config.resolve.extensions, '.mjs'],
      }
     config.module = {
        ...config.module,
        rules: [
            ...config.module.rules,
          {
            test: /\.m?js/,
            resolve: {
              fullySpecified: false,
            },
          }
        ]
      }
    return config
}
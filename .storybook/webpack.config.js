const path = require("path");
const projectConfig = require("../webpack.config");
module.exports = ({ config }) => {
  return {
    ...config,
    module: { ...config.module, rules: projectConfig.module.rules },
    resolve: {
      ...config.resolve,
      alias: {
        ...(config.resolve && config.resolve.alias),
        ...(projectConfig.resolve && projectConfig.resolve.alias),
        angular: require.resolve("angular")
      }
    }
  };
};

const path = require("path");

module.exports = (storybookBaseConfig, configType) => {
  storybookBaseConfig.module.rules.push({
    test: /\.(less|css)$/,
    loaders: ["style-loader", "css-loader", "less-loader"],
    include: path.resolve(__dirname, "../")
  });
  
  storybookBaseConfig.module.rules.push({
    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
    loader: require.resolve('url-loader')
  },{
    test: /\.svg$/,
    loader:require.resolve('svg-inline-loader')
  });

  // Return the altered config
  return storybookBaseConfig;
};
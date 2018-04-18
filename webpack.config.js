var path = require("path");
var config = {
    entry: ["./App.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, 'src')
    // },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};

module.exports = config;
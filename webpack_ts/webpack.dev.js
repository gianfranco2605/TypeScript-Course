const path = require("path");

module.exports = {
    mode: "development",
    // where to start
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
        // basic rules
        rules: [
            {
                // regular expresion
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist",
    }

}
/**
 * Created by Aaron on 12/21/2015.
 */

module.exports = {
    entry:     "./demo/src/main.jsx",
    output:    {
        path:     __dirname + "/demo/dist/",
        filename: "demo.js"
    },
    module:    {
        loaders: [
            {
                test:    /\.jsx$/,
                exclude: /node_modules/,
                loader:  "babel-loader",
                query:   require( './babel.config.js' )
            }
        ]
    },
    externals: {
        "react":     "React",
        "react-dom": "ReactDOM"
    }
};

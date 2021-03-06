const webpack = require('webpack');

module.exports = {
    entry: {
        bundle: './src/Index.tsx',
        vendor: [ 
            'react', 
            'react-dom', 
        ]
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { 
                test: /\.tsx?$/, 
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { 
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.s?css$/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader', options: {
                        sourceMap: true
                    },
                }, {
                    loader: 'sass-loader', options: {
                        sourceMap: true
                    }
                }]
            }]
        }
    };

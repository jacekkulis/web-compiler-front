var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-3']
                }
            },
			{
			  // Preprocess our own .css files
			  // This is the place to add your own loaders (e.g. sass/less etc.)
			  // for a list of loaders, see https://webpack.js.org/loaders/#styling
			  test: /\.css$/,
			  exclude: /node_modules/,
			  use: ['style-loader', 'css-loader'],
			},
			{
			  // Preprocess 3rd party .css files located in node_modules
			  test: /\.css$/,
			  include: /node_modules/,
			  use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			}
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html',
        inject: 'body'
    })],
    devServer: {
        historyApiFallback: true,
	disableHostCheck: true
    }
}

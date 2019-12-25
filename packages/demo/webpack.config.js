const path = require('path')
const argv = require('yargs').argv
// const webpack = require('webpack')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//     .BundleAnalyzerPlugin
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
// const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const { StylableWebpackPlugin } = require('@stylable/webpack-plugin')

const monorepoRoot = path.join(__dirname, '..', '..')
// const browserTestPath = path.join(__dirname, 'test', 'browser')
const isDev = argv.mode !== `production` //!process.argv.some(c => c === 'production')

module.exports = {
    mode: isDev ? 'development' : 'production',
    devtool: isDev ? 'inline-source-map' : 'source-map',
    entry: {
        main: ['./src/main.tsx'],
        // browserTests: [`mocha-loader!${path.join(browserTestPath, 'setup')}`],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: '@ts-tools/webpack-loader',
                options: {
                    warnOnly: isDev,
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: !isDev },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.mjs', '.js', '.json', '.st.css'],
        plugins: [
            new TsconfigPathsPlugin({
                configFile: path.join(monorepoRoot, 'tsconfig.json'),
            }),
        ],
    },
    performance: {
        // hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
        assetFilter: function (assetFilename) {
            return (
                !assetFilename.startsWith('browserTests.') &&
                !assetFilename.endsWith('.js.map')
            )
        },
    },
    optimization: {
        minimize: !isDev,
    },
    plugins: [
        new StylableWebpackPlugin({
            resolveNamespace: isDev ? ns => ns : undefined,
        }),
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            chunks: ['main'],
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('production'),
        // }),
        // new FilterWarningsPlugin({
        //     exclude: [],
        // }),
    ],
}
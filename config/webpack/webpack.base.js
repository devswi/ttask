const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { dynamicWebpackConfig } = require('../scripts/webpack-tools');
const { APP_PATH } = require('./constants');

const generateConfigs = async () => {
    const { entry, templates } = await dynamicWebpackConfig(process.cwd());
    const isDevelopment = process.env.NODE_ENV === 'development';
    return {
        entry,
        output: {
            path: path.join(APP_PATH, './dist'),
            clean: true,
        },
        plugins: [
            ...templates,
            new MiniCssExtractPlugin({
                filename: `static/styles/[name]${isDevelopment ? '' : '.[contenthash:8]'}.css`,
            }),
            new ForkTsCheckerWebpackPlugin(),
        ],
        resolve: {
            modules: [APP_PATH, 'node_modules'],
            extensions: ['.js', '.ts', '.tsx'],
            plugins: [new TsconfigPathsPlugin()],
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    style: {
                        name: 'style',
                        test: /\.css$/,
                        chunks: 'all',
                        enforce: true,
                    },
                    vendor: {
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/,
                        chunks: 'all',
                        minChunks: 3,
                        reuseExistingChunk: true,
                    },
                },
            },
            runtimeChunk: {
                name: 'runtime',
            },
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    loader: require.resolve('babel-loader'),
                    options: {
                        cacheDirectory: true,
                        rootMode: 'upward',
                    },
                },
                {
                    test: /\.css/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        require.resolve('css-loader'),
                        require.resolve('postcss-loader'),
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/,
                    type: 'asset',
                    generator: {
                        filename: `static/images/[name]${
                            isDevelopment ? '' : '.[contenthash:8]'
                        }[ext]`,
                    },
                    parser: {
                        dataUrlCondition: {
                            maxSize: 4 * 1024, // 4kb
                        },
                    },
                },
                {
                    test: /\.(eot|ttf|otf|woff2?)$/i,
                    type: 'asset',
                    generator: {
                        filename: 'static/fonts/[name].[hash:8][ext]',
                    },
                },
            ],
        },
    };
};

module.exports = generateConfigs;

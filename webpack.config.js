const path = require('path')
const { ModuleFederationPlugin } = require('webpack').container

const outputPath = path.join(__dirname, 'dist')

module.exports = {
    entry: {}, // Error! But works with './src/empty-entry'
    output: {
        path: outputPath,
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'modules',
            library: { type: 'var', name: 'modules' },
            filename: 'remoteEntry.js',
            exposes: {
                Main: './src/main.js',
            },
        }),
    ],
    devServer: {
        static: outputPath,
    }
}

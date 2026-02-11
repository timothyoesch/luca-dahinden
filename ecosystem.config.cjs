module.exports = {
    apps: [
        {
            name: 'LucaDahinden',
            port: '7456',
            exec_mode: 'cluster',
            instances: '2',
            script: './.output/server/index.mjs',
        },
    ],
}

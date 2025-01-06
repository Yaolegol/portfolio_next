// eslint-disable-next-line no-undef
module.exports = {
    apps: [
        {
            args: '-p 80',
            env: {
                NODE_ENV: 'production',
            },
            name: 'portfolio',
            script: 'npm start',
        },
    ],
};

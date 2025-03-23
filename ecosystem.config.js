const { cwd } = require("process");

module.exports = {
    apps: [
        {
            name: 'backend',
            script: 'npm',
            args: 'start',
            cwd: './backend',
            watch: true,
            env: {
                PORT: 4000,
                DB_URI_LOCAL: 'mongodb://localhost:27017/edgeBio',
                UPLOAD_PATH: 'filesystem/',
                NODE_ENV: 'development',
            },
        },
        {
            name: 'frontend',
            script: 'npm',
            args: 'run dev',
            cwd: './frontend',
            watch: true,
        }
    ],
};

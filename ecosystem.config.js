const { cwd, env } = require("process");

module.exports = {
    apps: [
        {
            name: 'backend',
            script: 'npm',
            args: 'start',
            cwd: './backend',
            watch: true,
            env: {
                HOST: '192.168.1.109',
                PORT: 4000,
                pyTEST_HOST: '192.168.1.109',
                pyTEST_PORT: 5000,
                DB_URI_LOCAL: 'mongodb://localhost:27017/edgeBio',
                UPLOAD_PATH: 'filesystem/',
                NODE_ENV: 'development',
            },
            output: "../logs/backend.log",
            error_file: "../logs/backend-error.log"
        },
        {
            name: 'frontend',
            script: 'npm',
            args: 'run dev',
            cwd: './frontend',
            watch: true,
            env: {
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
            },
            output: "../logs/frontend.log",
            error_file: "../logs/frontend-error.log"
        },
        {
            name: 'test_pipeline',
            script: 'python3',
            interpeter_args: '-u',
            args: 'main.py',
            cwd: './pipelines/pyTEST/app',
            watch: true,
            env: {
                HOST: '192.168.1.109',
                PORT: 5000,
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
            },
            output: "../../../logs/pipelines.log",
            error_file: "../../../logs/pipelines-error.log"
        }
    ],
};

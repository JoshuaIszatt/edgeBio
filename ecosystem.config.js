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
            output: "../logs/backend.log",
            error_file: "../logs/backend-error.log"
        },
        {
            name: 'frontend',
            script: 'npm',
            args: 'run dev',
            cwd: './frontend',
            watch: true,
            output: "../logs/frontend.log",
            error_file: "../logs/frontend-error.log"
        },
        {
            name: 'test_pipeline',
            script: 'python3',
            interpeter_args: '-u',
            args: 'main.py',
            cwd: './pipelines/test/app',
            watch: true,
            output: "../../../logs/pipelines.log",
            error_file: "../../../logs/pipelines-error.log"
        }
    ],
};

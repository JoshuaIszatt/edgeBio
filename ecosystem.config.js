const { cwd, env } = require("process");

module.exports = {
    apps: [
        {
            // Basic configuration
            name: 'backend',
            script: 'npm',
            args: 'start',
            cwd: './backend',
            watch: true,
            // Application runtime
            max_memory_restart: '1G',
            max_restarts: 3,
            // Environment
            env: {
                // Backend specific
                DB_URI_LOCAL: 'mongodb://localhost:27017/edgeBio',
                UPLOAD_PATH: 'filesystem/',
                // Shared
                HOST: '192.168.1.109',
                PORT: 4000,
                test_plugin_HOST: '192.168.1.109',
                test_plugin_PORT: 5000,
                // NODE_ENV: 'development',
            },
            // Log files
            output: "../logs/backend.log",
            error_file: "../logs/backend-error.log",
        },
        {
            // Basic configuration
            name: 'frontend',
            script: 'npm',
            args: 'run dev',
            cwd: './frontend',
            watch: true,
            // Application runtime
            max_memory_restart: '1G',
            max_restarts: 3,
            // Environment
            env: {
                // Frontend specific

                // Shared
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
            },
            // Log files
            output: "../logs/frontend.log",
            error_file: "../logs/frontend-error.log",
        },
        {
            // Basic configuration
            name: 'test_plugin',
            script: '/home/hermes/.mini/bin/python3', // Path to conda python
            interpeter_args: '-u',
            args: 'main.py',
            cwd: './pipelines/test_plugin/app',
            watch: true,
            // Application runtime
            max_memory_restart: '1G',
            max_restarts: 3,
            // Environment
            env: {
                // Pipeline specific

                // Shared
                HOST: '192.168.1.109',
                PORT: 5000,
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
            },
            // Log files
            output: "../../../logs/pipelines.log",
            error_file: "../../../logs/pipelines-error.log",
        }
    ],
};

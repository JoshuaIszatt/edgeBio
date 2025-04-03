const { debug } = require("console");
const { cwd, env } = require("process");

module.exports = {
    apps: [
        {
            // Enable application
            enabled: true,
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
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
            },
            // Log files
            output: "../logs/frontend.log",
            error_file: "../logs/frontend-error.log",
        },
        {
            // Enable application
            enabled: true,
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
                DB_URI_LOCAL: 'mongodb://localhost:27017/edgeBio',
                UPLOAD_PATH: 'filesystem/',
                HOST: '192.168.1.109',
                PORT: 4000,
                // Plugin configuration
                test_plugin_HOST: '192.168.1.109',
                test_plugin_PORT: 5000,
            },
            // Log files
            output: "../logs/backend.log",
            error_file: "../logs/backend-error.log",
        },
        {
            // Enable application
            enabled: true,
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
                PLUGIN_HOST: '192.168.1.109',
                PLUGIN_PORT: 5000,
                API_HOST: '192.168.1.109',
                API_PORT: 4000,
                DEBUG: true
            },
            // Log files
            output: "../../../logs/pipelines.log",
            error_file: "../../../logs/pipelines-error.log",
        }
    ],
};

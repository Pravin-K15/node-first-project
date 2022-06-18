module.exports = {
    apps: [{
        name: "TCS MEAN",
        script: "./application.js",
        instances: 8,
        exec_mode: "cluster",
        max_memory_restart: "40M"
    }]
}
module.exports = {
    openapi: "3.0.0",
    info: {
        title: "Assignment API",
        description: "A simple assignment API",
        version: "0.0.1"
    },
    servers: [
        {
            url: "http://localhost:3000",
            description: "Local development server",
        },
    ],
};
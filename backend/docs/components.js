module.exports = {
    components: {
        schemas: {
            id: {
                type: "number",
                description: "An id of user",
                example: 1
            },
            User: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "An id of user",
                        example: 1
                    },
                    name: {
                        type: "string",
                        description: "Name of user",
                        example: "vivek"
                    },
                    email: {
                        type: "string",
                        description: "Email of user",
                        example: "vivek@vivek.com"
                    },
                    password: {
                        type: "string",
                        description: "Hashed password",
                        example: "$2b$10$dKxOeKxeN/stcynP9bI.5.XpOJzkNlPRZIvb/5M0EYmS1LgrL4v7m"
                    },
                    role: {
                        type: "string",
                        description: "Role name",
                        example: "EMPLOYEE"
                    },
                }
            },
            UserObject: {
                type: "object",
                properties: {
                    id: {
                        type: "number",
                        description: "An id of user",
                        example: 1
                    },
                    name: {
                        type: "string",
                        description: "Name of user",
                        example: "vivek"
                    },
                    email: {
                        type: "string",
                        description: "Email of user",
                        example: "vivek@vivek.com"
                    },
                    role: {
                        type: "string",
                        description: "Role name",
                        example: "EMPLOYEE"
                    },
                }
            },
            UserLogin: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "Email of user",
                        example: "vivek@vivek.com"
                    },
                    password: {
                        type: "string",
                        description: "Password of user",
                        example: "testpass"
                    },
                }
            },
            ServerError: {
                type: "object",
                properties: {
                    error: {
                        type: "string",
                        description: "Error message",
                        example: "Internal Server Error"
                    },
                }
            },
            NoUserError: {
                type: "object",
                properties: {
                    error: {
                        type: "string",
                        description: "Error message",
                        example: "No user found for given id"
                    },
                }
            },
            BadRequestError: {
                type: "object",
                properties: {
                    error: {
                        type: "string",
                        description: "Error message",
                        example: "Missing required fields"
                    },
                }
            },
            UnAuthorizedError: {
                type: "object",
                properties: {
                    error: {
                        type: "string",
                        description: "Error message",
                        example: "Invalid login credentials"
                    },
                }
            }
        }
    }
}
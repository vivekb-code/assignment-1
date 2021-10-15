module.exports = {
  paths: {
    '/api/v1/users': {
      get: {
        tags: ["Users CRUD operations"],
        description: "Get all users with name order",
        operationId: "getAllUsers",
        parameters: [],
        responses: {
          200: {
            description: "List of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/UserObject" },
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServerError",
                },
              },
            },
          },
        },
      },
    },
    '/api/v1/users/{id}': {
      get: {
        tags: ["Users CRUD operations"],
        description: "Get a user based on id",
        operationId: "getAUser",
        parameters: [
          {
            name: "id",
            in: 'path',
            description: "id of user to return",
            required: true,
            type: "integer"
          }
        ],
        responses: {
          200: {
            description: "User Object",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserObject",
                },
              },
            },
          },
          404: {
            description: "No user found with given id",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/NoUserError",
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServerError",
                },
              },
            },
          },
        },
      },
    },
    '/api/v1/users/login': {
      post: {
        tags: ["Users CRUD operations"],
        description: "Login with user credentials",
        operationId: "loginUser",
        consumes: ["application/json"],
        produces: ["application/xml"],
        parameters: [],
        requestBody: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UserLogin",
              },
            },
          }
        },
        responses: {
          200: {
            description: "User object, when login credentials are correct",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UserObject",
                },
              },
            },
          },
          400: {
            description: "Bad Request when email or password is missed",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/BadRequestError",
                },
              },
            },
          },
          401: {
            description: "Invalid credentials, when email or password is wrong",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/UnAuthorizedError",
                },
              },
            },
          },
          500: {
            description: "Internal server error",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/ServerError",
                },
              },
            },
          },
        },
      },
    },
  }
}
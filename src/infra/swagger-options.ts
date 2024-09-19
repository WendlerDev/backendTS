import { version } from "os";
import { title } from "process";
import { SwaggerOptions } from "swagger-ui-express";

const swaggerConfig: SwaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User API backend course",
      version: "1.0.0",
      description: "Documentation",
    },
    tags: [
      {
        name: "users",
        descrition: "User operations",
      },
    ],
    servers: [
      {
        url: "/url",
        description: "URL base to API",
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "api-key",
        },
      },
    },
    security: [
      {
        ApiKeyAuth: [],
      },
    ],
  },
  apis: ["./src/**/*.ts"],
};

export default swaggerConfig;

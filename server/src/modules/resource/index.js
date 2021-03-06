const routes = require("./controller");
const {
  authenticateRequest,
  authorizeRequest,
} = require("../../common/middlewares");

const init = async (app) => {
  app.use("/api/resources", authenticateRequest, authorizeRequest, routes);
  return app;
};

module.exports = { init };

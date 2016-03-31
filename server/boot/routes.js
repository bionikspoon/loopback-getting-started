module.exports = function (server) {
  var router = server.loopback.Router();
  router.get('/status', server.loopback.status());

  router.get('/ping', function (req, res) {
    res.send('pong');
  });
  server.use(router);
};

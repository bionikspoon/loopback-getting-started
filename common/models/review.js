module.exports = function (Review) {
  Review.beforeRemote('create', beforeCreate);

  function beforeCreate(context, user, next) {
    var req = context.req;
    req.body.date = Date.now();
    req.body.publisherId = req.accessToken.userId;

    next();
  }
};

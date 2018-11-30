var appRouter = function (app) {
  app.get("/api/base", function(req, res) {
    var result = [];
    result.push({type: 'PA', name: 'Pale'});
    result.push({type: 'EPA', name: 'Extra Pale'});
    result.push({type: 'DE', name: 'Deep'});
    result.push({type: 'EDE', name: 'Extra Deep'});
    res.status(200).send(result);
  });
};

module.exports = appRouter;

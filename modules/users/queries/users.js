module.exports = async (root, args, context) => {
  return models.User.findAll({}, context);
};

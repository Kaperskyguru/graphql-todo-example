module.exports = async (root, { id }, context) => {
  return models.User.findById(id, context);
};

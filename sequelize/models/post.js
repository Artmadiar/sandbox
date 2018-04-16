'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.belongsToMany(models.Tag, {
      through: {
        model: models.ItemTag,
        unique: false,
        scope: {
          taggable: 'post'
        }
      },
      foreignKey: 'taggableId',
      otherKey: 'tagId',
      scope: {
        status: 'pending'
      },
      as: 'pendingTags',
      constraints: false
    });
  };
  return Post;
};
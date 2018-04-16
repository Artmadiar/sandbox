'use strict';
module.exports = (sequelize, DataTypes) => {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING
  }, {});
  Post.associate = function(models) {
    Post.hasMany(models.Tag, {
      through: {
        model: models.ItemTag,
        unique: false,
        scope: {
          taggable: 'post'
        }
      },
      scope: {
        status: 'pending'
      },
      as: 'pendingTags',
      foreignKey: 'taggable_id',
      constraints: false
    });
  };
  return Post;
};
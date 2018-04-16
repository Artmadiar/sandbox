'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemTag = sequelize.define('ItemTag', {
    tagId: DataTypes.INTEGER,
    taggable: DataTypes.STRING,
    taggableId: DataTypes.INTEGER
  }, {});
  ItemTag.associate = function(models) {
    // associations can be defined here
  };
  return ItemTag;
};
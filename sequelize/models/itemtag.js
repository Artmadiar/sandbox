'use strict';
module.exports = (sequelize, DataTypes) => {
  var ItemTag = sequelize.define('ItemTag', {
    tag_id: DataTypes.INTEGER,
    taggable: DataTypes.STRING,
    taggable_id: DataTypes.INTEGER
  }, {});
  ItemTag.associate = function(models) {
    // associations can be defined here
  };
  return ItemTag;
};
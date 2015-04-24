"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("articles", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      redditId: {
        type: DataTypes.STRING
      },
      subreddit: {
        type: DataTypes.STRING
      },
      title: {
        type: DataTypes.STRING
      },
      url: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("articles").done(done);
  }
};
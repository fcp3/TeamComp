Heroes = new Mongo.Collection("heroes");
EnemyTeam = new Mongo.Collection("enemyTeam");
UserTeam = new Mongo.Collection("userTeam");

Meteor.methods({

  resetEnemy() {
    EnemyTeam.remove({});
  },

});
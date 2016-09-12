Meteor.methods({

  resetEnemy() {
    
    EnemyTeam.remove({});
    return;
    
  },

  setEnemyTeam(enemyArray) {
    var teamID = new Mongo.ObjectID();

    EnemyTeam.insert({
      _id: new Mongo.ObjectID(),
      teamID: teamID._str,
      enemyTeam: enemyArray,
    });

    // for( i = 0; i < enemyArray.length; i++) {
    //
    //   var enemyHero = enemyArray[i];
    //   EnemyTeam.update({teamID: teamID._str},
    //     {$push:
    //       {enemyTeam: {
    //         _id: new Mongo.ObjectID(),
    //         enemyPlayer: enemyHero,
    //       }}
    //   });
    //
    // }

    Meteor.call('returnEnemyTeam', teamID);

    return teamID;

  },

  returnEnemyTeam(enemyID) {
    console.log('testing returnEnemyTeam');
    console.log(EnemyTeam.find({teamID: enemyID}).enemyTeam);
  },

  resetHeroes() {

    Heroes.remove({});
    return;

  },

  addMainHero(heroName, role, ) {
    
    if(Heroes.find({name: heroName}) == null) {

      return;

    } else {
      Heroes.insert({
        _id: new Mongo.ObjectID(),
        name: heroName,
        role: role,
      });

    }

  },

  addCounter(mainHero, counterName) {
    Heroes.update({name: mainHero},
      {$push:
        {counters: {
          _id: new Mongo.ObjectID(),
          name: counterName
        }}
      }
    );
  },

  populateHeroDB() {

    Meteor.call('addMainHero', 'Genji', 'Flanker');
      Meteor.call('addCounter', 'Genji', 'Winston');
      Meteor.call('addCounter', 'Genji', 'Mei');
      Meteor.call('addCounter', 'Genji', 'Zarya');

    Meteor.call('addMainHero', 'McCree', 'DPS');
      Meteor.call('addCounter', 'McCree', 'Widowmaker');
      Meteor.call('addCounter', 'McCree', 'Hanzo');
      Meteor.call('addCounter', 'McCree', 'McCree');

    Meteor.call('addMainHero', 'Pharah', 'DPS');
      Meteor.call('addCounter', 'Pharah', 'McCree');
      Meteor.call('addCounter', 'Pharah', 'Soldier: 76');
      Meteor.call('addCounter', 'Pharah', 'Widowmaker');
      Meteor.call('addCounter', 'Pharah', 'Roadhog');
    
    Meteor.call('addMainHero', 'Reaper', 'Flanker');
      Meteor.call('addCounter', 'Reaper', 'Pharah');
      Meteor.call('addCounter', 'Reaper', 'Junkrat');
      Meteor.call('addCounter', 'Reaper', 'McCree');

    Meteor.call('addMainHero', 'Soldier: 76', 'DPS');
      Meteor.call('addCounter', 'Soldier: 76', 'Mei');
      Meteor.call('addCounter', 'Soldier: 76', 'Roadhog');
      Meteor.call('addCounter', 'Soldier: 76', 'Tracer');

    Meteor.call('addMainHero', 'Tracer', 'Flanker');
      Meteor.call('addCounter', 'Tracer', 'McCree');
      Meteor.call('addCounter', 'Tracer', 'Roadhog');
      Meteor.call('addCounter', 'Tracer', 'Mei');

    Meteor.call('addMainHero', 'Bastion', 'Defense');
      Meteor.call('addCounter', 'Bastion', 'Genji');
      Meteor.call('addCounter', 'Bastion', 'Hanzo');
      Meteor.call('addCounter', 'Bastion', 'Widowmaker');
      Meteor.call('addCounter', 'Bastion', 'Junkrat');

    Meteor.call('addMainHero', 'Hanzo', 'DPS');
      Meteor.call('addCounter', 'Hanzo', 'Widowmaker');
      Meteor.call('addCounter', 'Hanzo', 'Tracer');
      Meteor.call('addCounter', 'Hanzo', 'D. Va');

    Meteor.call('addMainHero', 'Junkrat', 'Defense');
      Meteor.call('addCounter', 'Junkrat', 'Tracer');
      Meteor.call('addCounter', 'Junkrat', 'Pharah');
      Meteor.call('addCounter', 'Junkrat', 'Winston');

    Meteor.call('addMainHero', 'Mei', 'Defense');
      Meteor.call('addCounter', 'Mei', 'McCree');
      Meteor.call('addCounter', 'Mei', 'Pharah');
      Meteor.call('addCounter', 'Mei', 'Widowmaker');

    Meteor.call('addMainHero', 'Torbjorn', 'Defense');
      Meteor.call('addCounter', 'Torbjorn', 'Junkrat');
      Meteor.call('addCounter', 'Torbjorn', 'Widowmaker');
      Meteor.call('addCounter', 'Torbjorn', 'Winston');

    Meteor.call('addMainHero', 'Widowmaker', 'DPS');
      Meteor.call('addCounter', 'Widowmaker', 'Genji');
      Meteor.call('addCounter', 'Widowmaker', 'D. Va');
      Meteor.call('addCounter', 'Widowmaker', 'Winston');

    Meteor.call('addMainHero', 'D. Va', 'Offensive Tank');
      Meteor.call('addCounter', 'D. Va', 'Mei');
      Meteor.call('addCounter', 'D. Va', 'Symmetra');
      Meteor.call('addCounter', 'D. Va', 'Zenyatta');

    Meteor.call('addMainHero', 'Reinhardt', 'Defensive Tank');
      Meteor.call('addCounter', 'Reinhardt', 'Reaper');
      Meteor.call('addCounter', 'Reinhardt', 'Roadhog');
      Meteor.call('addCounter', 'Reinhardt', 'Symmetra');

    Meteor.call('addMainHero', 'Roadhog', 'Offensive Tank');
      Meteor.call('addCounter', 'Roadhog', 'Mei');
      Meteor.call('addCounter', 'Roadhog', 'Reaper');
      Meteor.call('addCounter', 'Roadhog', 'D. Va');

    Meteor.call('addMainHero', 'Winston', 'Defensive Tank');
      Meteor.call('addCounter', 'Winston', 'Reaper');
      Meteor.call('addCounter', 'Winston', 'McCree');
      Meteor.call('addCounter', 'Winston', 'Bastion');

    Meteor.call('addMainHero', 'Zarya', 'Offensive Tank');
      Meteor.call('addCounter', 'Zarya', 'Junkrat');
      Meteor.call('addCounter', 'Zarya', 'Pharah');
      Meteor.call('addCounter', 'Zarya', 'Reaper');

    Meteor.call('addMainHero', 'Lucio', 'Primary Support');
      Meteor.call('addCounter', 'Lucio', 'Mei');
      Meteor.call('addCounter', 'Lucio', 'McCree');
      Meteor.call('addCounter', 'Lucio', 'Widowmaker');

    Meteor.call('addMainHero', 'Mercy', 'Primary Support');
      Meteor.call('addCounter', 'Mercy', 'Soldier: 76');
      Meteor.call('addCounter', 'Mercy', 'Genji');
      Meteor.call('addCounter', 'Mercy', 'Tracer');

    Meteor.call('addMainHero', 'Symmetra', 'Secondary Support');
      Meteor.call('addCounter', 'Symmetra', 'Roadhog');
      Meteor.call('addCounter', 'Symmetra', 'McCree');
      Meteor.call('addCounter', 'Symmetra', 'Widowmaker');

    Meteor.call('addMainHero', 'Zenyatta', 'Secondary Support');
      Meteor.call('addCounter', 'Zenyatta', 'McCree');
      Meteor.call('addCounter', 'Zenyatta', 'Tracer');
      Meteor.call('addCounter', 'Zenyatta', 'Reaper');

    Meteor.call('addMainHero', 'Ana', 'Secondary Support');
      Meteor.call('addCounter', 'Ana', 'Genji');
      Meteor.call('addCounter', 'Ana', 'Reaper');
      Meteor.call('addCounter', 'Ana', 'Tracer');

  },

});
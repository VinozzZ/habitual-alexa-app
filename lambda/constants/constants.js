//the freeze method makes sure that the constants never changes
var constants = Object.freeze({

  // App-ID. TODO: Set Your App ID
  appId : '',

  //  DynamoDB Table Name
  dynamoDBTableName : 'Habits',

  // Skill States
  states : {
    ONBOARDING : '',
    STARTNEWHABIT : '_STARTNEWHABIT',
    CHECKINHABIT:'_CHECKINHABIT'
  },
  //api address
  habitsAPI = 'http://www.yingrongzhao.com:4000',

});

module.exports = constants;
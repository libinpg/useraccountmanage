// sqlmap.js
var sqlMap = {
    // home
    home: {
      search: 'select * from profile',
      add: 'insert into profile(id,username,userpassword) values (?)',
      updatepassword: 'UPDATE `profile` SET `userpassword`= ? WHERE `username`= ? ',
      updatebasicinfo: 'UPDATE `userdata` SET `firstname`= ? ,`lastname`= ? ,`email`= ?  WHERE `username`= ?',
      searchidprogress: 'select * from progress where `id`= ?',
      searchprogress: 'select * from progress',
      searchidfeature: 'select * from features where `id`= ?'
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap
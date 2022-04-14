// sqlmap.js
var sqlMap = {
    // home
    home: {
      search: 'select * from profile',
      add: 'insert into profile(id,username,userpassword) values (?)',
      update: 'UPDATE `profile` SET `userpassword`= ? WHERE `username`= ? '
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap
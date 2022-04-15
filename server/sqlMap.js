// sqlmap.js
var sqlMap = {
    // home
    home: {
      search: 'select * from profile',
      add: 'insert into profile(id,username,userpassword) values (?)',
      updatepassword: 'UPDATE `profile` SET `userpassword`= ? WHERE `username`= ? ',
      updatebasicinfo: 'UPDATE `userdata` SET `firstname`= ? ,`lastname`= ? ,`email`= ?  WHERE `username`= ?'
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap
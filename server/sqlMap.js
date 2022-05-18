// sqlmap.js
var sqlMap = {
    // home
    home: {
      search: 'select * from profile',
      gettasks: 'select * from task',
      insertpolygoncollection: 'INSERT INTO `polygoncollection` (`id`, `username`, `polygonarray`) VALUES (NULL,?, ?);',
      getpolygoncollection: 'select * from polygoncollection where `username` = ?',
      insertpolygoncollection: 'INSERT INTO `polygoncollection`(`username`, `polygonarray`) VALUES ( ? , ?)',
      add: 'insert into profile(id,username,userpassword) values (?)',
      updateusername: 'UPDATE `user` SET `username`= ? WHERE `username`= ? ',
      updateuserpassword: 'UPDATE `user` SET `userpassword`= ? WHERE `username`= ? ',
      updateuseremail: 'UPDATE `user` SET `useremail`= ? WHERE `username`= ? ',
      updateuserwechatid: 'UPDATE `user` SET `userwechatid`= ? WHERE `username`= ? ',
      updatebasicinfo: 'UPDATE `userdata` SET `firstname`= ? ,`lastname`= ? ,`email`= ?  WHERE `username`= ?',
      searchidprogress: 'select * from progress where `id`= ?',
      searchprogress: 'select * from progress',
      searchidfeature: 'select * from features where `id`= ?',
      //需要添加加密
      adduser: 'INSERT INTO `user` (`id`, `username`, `userpassword`, `useremail`, `userwechatid`) VALUES (NULL,?,?,NULL, NULL)',
      authenticate: 'select * from user where `username`= ? and `userpassword`= ?'
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap
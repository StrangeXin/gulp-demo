var weburl = "../img/facebook.png";
var imgarr = [weburl,'../img/github.png','../img/github.png','../img/github.png','https://csfullspeed.com/manage/public/uploads/images/20210125/4274484b3e20d566699fee4c62bbdc66.jpeg'];
var apiUrl = '/api/'; //接口地址，上线前替换
$.ajax({
  url: apiUrl + 'nocdn/apitest/index.php',
  type:'get',
  success: function(e){
      console.log(e)
  }
})
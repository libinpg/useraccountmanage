<template>
	<div>
		<easy-login 
			:word=true 
			:icon=true 
			:error-info="errors" 
			:btn-text="btnText" 
			:code-flag="codeFlag" 
			:img-path="imgPath" 
			@check-code="check" 
			@submit="toSubmit" 
			@get-img="getImg">
		</easy-login>
	</div>
</template>

<script>
	import easyLogin from '../components/easyUtil.loginUi.1.0.vue';
    import store from '../store'

	export default {
		components: {
			easyLogin
		},
		data(){
			return{
				errors: {
					user: "用户名绝对不能为空",
					pwd: "密码不能绝对为空",
					code: "验证码绝对不能为空"
				},
				codeFlag: !1,
				btnText: "登录",
				imgPath: ""
			}
		},
		mounted() {
			this.$nextTick(function() {});
		},
		methods: {
			check(t) {
				var e = this;
				setTimeout(function() {
					e.codeFlag = ("1234" === t);
				}, 100);
			},
			toSubmit(t) {
				let status= ""
				this.$http.post('/api/home/authenticate',"username="+t.user+"&"+"userpassword="+t.pwd).then((response) => {
				  status = response.data.status;
				  console.log(response.data);
				  localStorage.userName = t.user;
                  localStorage.token = response.data.token;
				  console.log("login",localStorage)
				  "success" == status ? alert("左侧功能区已激活,点击使用系统") : alert("登录失败")
				  this.$router.push({path:'/'})
				  location.reload();
                  
                });
				// if (status == "success"){
				//   alert("登录成功");	
				// }
				// else{
				//   alert("登录失败");
				// }
				//"success" == status ? alert("登录成功") : alert("登录失败")
				//"1234" == t.pwd ? alert("ok") : alert("no!");
			},
			getImg() {
				this.imgPath = require("../../src/assets/img/loading.png");
			}
		}
	}
</script>

<style>

</style>
<template>
	<div>
		<easy-register 
			:word=true 
			:icon=true 
			:error-info="errors" 
			:btn-text="btnText" 
			:code-flag="codeFlag" 
			:img-path="imgPath" 
			@check-code="check" 
			@submit="toSubmit" 
			@get-img="getImg">
		</easy-register>
	</div>
</template>

<script>
	import easyRegister from '../components/easyUtil.RegisterUi.1.0.vue';

	export default {
		components: {
			easyRegister
		},
		data(){
			return{
				errors: {
					user: "用户名绝对不能为空",
					pwd: "密码不能绝对为空",
					code: "验证码绝对不能为空"
				},
				codeFlag: !1,
				btnText: "注册",
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
				// 注册
				this.$http.post('/api/home/adduser',"username="+t.user+"&"+"userpassword="+t.pwd).then((response) => {
                console.log(response);
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
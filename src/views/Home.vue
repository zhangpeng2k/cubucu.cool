<template>
  <div  class="home">
		<h1 class="hello">Hello World</h1>
		<h4>
			<span class="type1" ></span>
		</h4>
		<div id="clickBackgroud" ref="clickBackgroud" @click="initMouseEvent">

		</div>
			<div id="stars"></div>
  </div>
</template>

<script>
// import axios from 'axios'
import Typed from 'typed.js';

var options = {
  strings: ['Hi......', '你好，世界'],
  typeSpeed: 40,
	startDelay: 1000,
	backDelay: 700,
	showCursor: true,
	loop: true,
};

const hitokotoApi = 'https://v1.hitokoto.cn/'

export default {
  name: 'Home',
	data(){
		return{
			count:1,
			onceFlag:false
		}
	},
  components: {
  },
	mounted() {
		new Typed('.type1', options);
	},
	methods:{
		initMouseEvent(event){
			event.preventDefault();
			event.stopPropagation();
			console.log('initMouseEvent',event.clientX,event.clientY);

			let x = event.clientX;
			let y = event.clientY;

			this.count ++;
			if(this.count > 999){
				this.once()
				
				return false;
			}
			let textNode = document.createElement('div')
			
			let tNode = document.createElement('span')
			tNode.className = 'textNode'+this.count
			textNode.className = 'textNode'
			
			textNode.style = `left:${x}px;top:${y}px;position: absolute;`
			this.$refs.clickBackgroud.appendChild(textNode)
			textNode.appendChild(tNode)
			var options = {
				strings: [],
				typeSpeed: 40,
				startDelay: 1000,
				backDelay: 700,
			};

			fetch(hitokotoApi)
				.then(res => res.json())
				.then(data => {
					console.log(data)
					options.strings = [data.hitokoto]
					new Typed('.textNode'+this.count, options);
				})
				.catch(err => {
					console.log(err)
				})
		},
		once(){
			if(this.onceFlag){
				return false;
			}else{
				this.onceFlag = true
			}
			
			setTimeout(() => {
				
			}, 1000);
			this.$router.push({path:'/about'});
		},
		
		fullScreen(){
			document.getElementById("app").requestFullscreen()
		},
		// 防抖函数
		debounce(func, wait, immediate) {
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		},
	}
}
</script>

<style lang="scss" scoped>

.textNode{
	position: absolute;
}
.home{
	width: 100%;
	height: 100vh;
	position: relative;
	// display: flex;
	// justify-content: center;
	// align-items: center;
	>h1{
		position: absolute;
		text-align: center;
		position: inherit;
		top: 40%;
		// padding-bottom: 50px;
		// display: block;
	}
	>h4{
		position: absolute;
		text-align: center;
		position: inherit;
		top: 40%;
		// padding-top: 50px;
		
	}

	#clickBackgroud{
		display: block;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}

</style>

<template>
	<div id="container">
		
		<div id="view" >
			<transition name="fade">
			<router-view />
			</transition>
		</div>
	</div>
  
</template>
<script>
export default {
	
	setup() {
		
	},
	
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#container{
	display: block;
	position: relative;
	width: 100vw;
	height: 100vh;
}
#view{
	display: block;
	position: relative;
	width: 100vw;
	height: 100vh;

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

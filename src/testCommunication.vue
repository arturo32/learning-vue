<template>
	<div>
		<label for="color">
			Type the new background color:
		</label>
		<input v-model="bgColorChild" type="text" id="color"></input>
		<button @click="$emit('change-bg-color', bgColorChild)" title="Change the color of the background!">Change!</button>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue';

	export default {
		data: function () {
			return {
				bgColorChild: ''
			}
		}
	}
</script>
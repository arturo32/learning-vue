<template>
	<div class="color-block">
		<h2>{{ title }}</h2>
		<slot></slot>
	</div>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	export default {
		props: ['title']
	}
</script>

<style>
	.color-block {
		background-color: var(--pallete-1-yellow);
		color: var(--pallete-4-dark-blue);
		border-radius: 11px;
		padding: 8px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-content: center;
		border: 3px solid var(--vue-logo-dark-green);
	/*	box-shadow: 0px 0px 5px 1px #329569;*/
	}

	.color-block.warning {
		animation: blinking-animation 1s steps(1, start) infinite;
	}

	@keyframes blinking-animation {
		50% {
			border-color: red;
		}
	}

	.color-block.warning p {
		visibility: hidden;
		position: relative;
	}

	.color-block.warning p:after {
		visibility: visible;
		color: red;
		font-size: 2rem;
		content: "EMERGENCY!";
		position: absolute;
		top: -50%;
		left: 50%;
		transform: translateX(-50%);
	}
</style>
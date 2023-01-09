<template>
	
	<main>
		<!-- Note the syntax for binding inline styles to elements -->
		<div id="main" :style="{backgroundColor: bgColorParent}">
			<color-block title="Reactive Data">
				Look at this beautiful piece of reactive data: 
				<p :title="reactiveAttribute">
					{{firstReactiveData}}
				</p>
			</color-block>

			<color-block title="Conditional Rendering">
				<div v-if="showTitle">I may or may not appear! This is called conditional rendering!</div>
				<button @click="toggleAppeareance" 
						:title="buttonTitle">
					Click me!
				</button>
			</color-block>

			<color-block title="v-for">
				<ol style="text-align: left;">
					<li v-for="text in textList">
						{{ text }}
					</li>
				</ol>
				<button @click="textList.push(textList[textList.length%3]);" 
						title="Add elements to the list!">
					Click me!
				</button>
			</color-block>

			<div>
				<color-block title="Data Binding">
					<div>{{ dataBidingVariable }}</div>
					<input v-model="dataBidingVariable" type="text"/>
				</color-block>
				
				<color-block title="Computed Property">
					<div>{{ computedDataBidingVariable }}</div>
					<input v-model="computedDataBidingVariable" type="text"/>
				</color-block>
			</div>
			
			<color-block title="Binding Classes"
						:class="{warning: isEmergency}">
				<p>
					Just a normal message.
				</p>
				<button @click="isEmergency = !isEmergency" 
						:title="isEmergency? 'Let\'s calm down' : 'EMERGENCY!'">
					Click me!
				</button>
			</color-block>

			<color-block title="Form Fields">
				<p>
					<b>The one</b>
				</p>
				<template v-if="theOne != ''">
					<p>Name: {{ theOne.name }}</p>
					<p>Age: {{ theOne.age }}</p>	
				</template>
				
				<!-- Here, v-model and v-bind:value are being used to bind objects to the value of the select tag -->
				<select v-model="theOne">
					<option disabled value="">Who is the one?</option>
					<option v-for="person in people" :value="person">{{ person.name }}</option>
				</select>
			</color-block>

			<color-block title="Event from child to parent">
				<test-communication v-on:change-bg-color="bgColorParent=$event"></test-communication>
			</color-block>
		</div>
	</main>
</template>

<script type="text/javascript">
	import Vue from 'vue';
	import colorBlock from './colorBlock.vue';
	import testCommunication from './testCommunication.vue';


	export default {
		components: {
			'color-block': colorBlock,
			'test-communication': testCommunication
		},
		data: function() {
			return {
				firstReactiveData: 'OMG this is really a reactive data. Try changing me at the console with "vueInstance.firstReactiveData".',
				
				reactiveAttribute: 'Hello! This title attribute is controlled by a Vue directive (v-bind).',
				
				showTitle: false,
				buttonTitle: 'If you click me, a message will appear above me.',
				
				textList: [
					'I',
					'am',
					'an array!'
				],
				
				dataBidingVariable: "Hello world!",

				isEmergency: false,

				theOne: '',
				people: [
					{
						name: 'Neo',
						age: '37'
					},
					{
						name: 'Me',
						age: 'unknown'
					}
				],

				bgColorParent: ''
			};
		},
		methods: {
			toggleAppeareance: function() {
				this.showTitle = !this.showTitle;
				if(this.showTitle) {
					this.buttonTitle = 'If you click me, the message above will vanish!'
				}
				else {
					this.buttonTitle = 'If you click me, a message will appear above me.'
				}
			}
		},
		computed: {
			/*computedDataBidingVariable: function() {
				return this.dataBidingVariable.split('').reverse().join('');
			}*/

			computedDataBidingVariable: {
				get: function() {
					return this.dataBidingVariable.split('').reverse().join('');	

				},

				// A setter can define what happens when you change the computed property directly
				set: function(newValue) {
					this.dataBidingVariable = newValue.split('').reverse().join('');
				}
			}

		}
	}
</script>

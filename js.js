var test1id = document.getElementById("test1");

test1id.innerHTML = "Vue.version: " + Vue.version;

var list = ['ananas','date','anaba','mango'];

var nesttest = function nesttest() {

	console.log('some');
};

var someaction = function someaction() {

	methods: {

	     console.log(list.push('some'));
	     
	};
};

var data = function data() {





			return {

				name: "SALAMOON ALAIKOOM",

				name2: "SALAMOON SALAMOON",

				name3: "h1 text-warning",

				list,

				list2: [{'cake':'vanila'}],

				list3: [

				{

					'cake':[

					'chocolate',
					'ananas',
					'strawbery'

					]
				}

				],

				thisistrue: true,

				limegreen: 'color: #1defc3',

				whiterose: 'background-color: #fce3f2',

				whiteroselight: 'background-color: #ea40a6;border: none',

				deepwhiterose: 'background-color: #c1167d;border: none',

				logs: true,

				keyname: 'key',

				box: 'btn btn-primary',

				someaction

					
				
			};

			


		};

var sets = { data, someaction };

	Vue.createApp(sets).mount('#maindiv');

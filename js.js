var test1id = document.getElementById("test1");
test1id.innerHTML = "Vue.version: " + Vue.version;

var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON",
				name3: "h1 text-warning",
				list: ['ananas','date','anaba','mango'],
				list2:[{'cake':'vanila'}],
				list3: [{

					'cake':[
					'chocolate',
					'ananas',
					'strawbery'
					]
				}],

				thisistrue: true,
				limegreen: 'color: #1defc3',
				whiterose: 'background-color: #fce3f2'
			};


		};

var sets = { data };

	Vue.createApp(sets).mount('#maindiv');
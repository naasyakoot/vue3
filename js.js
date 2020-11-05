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
				}]
			};


		};

var sets = { data };

	Vue.createApp(sets).mount('#maindiv');
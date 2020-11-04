var test1id = document.getElementById("test1");
test1id.innerHTML = "Vue.version: " + Vue.version;

var data = function data() {

			return {

				name: "SALAMOON ALAIKOOM",
				name2: "SALAMOON SALAMOON",
				name3: "h1 text-warning"
			};


		};

var sets = { data };

	Vue.createApp(sets).mount('#test2');
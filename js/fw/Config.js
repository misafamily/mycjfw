// namespace:
this.jokerteam = this.jokerteam||{};

(function() {
	"use strict";

	function Config(){};
	//default params
	Config.data = {
		"screen" : {
			"fps": 80, 
			"width": 960,
			"height": 640
		},
		"main": {
			"menu": {"src": "menu/main.html", "id":"menu-main"}, //id of menu
		},
		"flow2": {
			"menu": {"src": "menu/menudropdown.html", "id":"menu-dropdown"}, //id of menu
		}
	};

	/**
	* Expose class.
	*/
	jokerteam.Config = Config;

})();

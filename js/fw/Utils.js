// namespace:
this.jokerteam = this.jokerteam||{};

(function($) {
	"use strict";
	
	function Utils(){};
	
	Utils.getFolderFromUrl = function(url) {
		var a = url.split("/");
		a.splice(a.length-1, 1);
		return a.join("/");
	}
	
	Utils.log = function() {
		if (jokerteam.Main.main.debug) {
			console.log(arguments);
		}
	}
	
	Utils.fixContentLoadFromMain = function(contentdata, contenturl) {
		var content = $('<div/>').append(contentdata);
		//this.log("*** updateContentData", content);
		//change path to load data in assets/
		var links = content.find("link");
		//this.log("*** updateContentData", links);
		if (links.length > 0) {
			for (var i = 0; i < links.length; i++) {
				var link = links[i];
				for (var j = 0; j < link.attributes.length; j++) {
					var att = link.attributes[j];
					if (att.localName == "href") {
						var assetsFolder = jokerteam.Utils.getFolderFromUrl(contenturl);
						att.value = assetsFolder + '/' + att.value;
						//$("head").append('  <link href="' + assetsFolder + '/' + att.value + '" rel="stylesheet" />');
					}
				}
			}
		}
		var scripts = content.find("script");
		//this.log("*** updateContentData", scripts);
		if (scripts.length > 0) {
			for (var i = 0; i < scripts.length; i++) {
				var link = scripts[i];
				for (var j = 0; j < link.attributes.length; j++) {
					var att = link.attributes[j];
					if (att.localName == "src") {
						var assetsFolder = jokerteam.Utils.getFolderFromUrl(contenturl);
						att.value = assetsFolder + '/' + att.value;
					}
				}
			}
		}
		
		var imgs = content.find("img");
		//this.log("*** updateContentData", scripts);
		if (imgs.length > 0) {
			for (var i = 0; i < imgs.length; i++) {
				var link = imgs[i];
				for (var j = 0; j < link.attributes.length; j++) {
					var att = link.attributes[j];
					if (att.localName == "src") {
						var assetsFolder = jokerteam.Utils.getFolderFromUrl(contenturl);
						att.value = assetsFolder + '/' + att.value;
					}
				}
			}
		}
		
		return content;
	}
	
	//listen to events from jokerteam.Main.main
	Utils.listen = function(eventtype, callbackfunc) {
		var func = function(event) {
			callbackfunc(event);
			
			jokerteam.Main.main.removeEventListener(eventtype, func);
		}
		jokerteam.Main.main.addEventListener(eventtype, func);
	}
		
	Utils.on = function(eventtype, callbackfunc) {		
		jokerteam.Main.main.addEventListener(eventtype, callbackfunc);
	}
	
	Utils.off = function(eventtype, callbackfunc) {		
		jokerteam.Main.main.removeEventListener(eventtype, callbackfunc);
	}
	
	Utils.enableSwipe = function() {		
		jokerteam.Main.main.canSwipe = true;
	}
	Utils.disableSwipe = function() {		
		jokerteam.Main.main.canSwipe = false;
	}
	Utils.fireEvent = function(event) {		
		jokerteam.Main.main.dispatchEvent(event);
	}

	/**
	* Expose class.
	*/
	jokerteam.Utils = Utils;
	
})(jQuery);
/** @define {string} */
var BUILD = "debug";

// namespace:
this.jokerteam = this.jokerteam||{};

(function($){

	"use strict";
/**
* Main class of the app.

Events:
	menu_added

	page_removed
	page_added

	goto_page
	goto_flow
	reload_page

	goto_next_page
	goto_prev_page

	swipeleft
	swiperight

	sound_mute
	pause_app

*/
function Main(){
}

/**
* Entry point of the app.
*/
Main.main = null;
Main.start = function(debug)
{
	Main.main = new Main();
	Main.main.initialize(debug);
	// entry point
}

Main.prototype.log = function() {
	jokerteam.Utils.log.apply(null, arguments);
}

/**
* Initializes the basics of the app.
*/
Main.prototype.initialize = function(debug)
{
	var thisObj = this;

	//properties
	this.pageInfo = {};
	this.debug = debug || false;
	this.canSwipe = true;
	this.currentPageFPS = 0;
	this.soundIsMuted = false;
	this.appIsPaused = false;
	this.appCurrentFramerate = 0;
	/**
	* mainCanvas
	*/
	this.mainCanvas = document.getElementById("mainCanvas");
	/**
	* mainStage
	*/
	this.mainStage = new createjs.Stage(this.mainCanvas);
	this.mainStage.snapToPixelsEnabled = true;
	/*
	* createjs
	*/
	//createjs.Ticker.timingMode = createjs.Ticker.RAF;
	//createjs.Ticker.setFPS(60);
	//createjs.Ticker.addEventListener("tick", function(event){
		//thisObj.handleTick(event);
	//});


	//itself events
	this.addEventListener("goto_page", function(event){
		thisObj.gotoPage(event.data);
	});
	this.addEventListener("goto_flow", function(event){
		thisObj.renderFlow(event.data);
	});
	this.addEventListener("goto_next_page", function(event){
		thisObj.gotoNextPage();
	});
	this.addEventListener("goto_prev_page", function(event){
		thisObj.gotoPrevPage();
	});
	this.addEventListener("reload_page", function(event){
		thisObj.reloadPage();
	});
	this.addEventListener("sound_mute", function(event){
		thisObj.soundMuteToggle();
	});
	this.addEventListener("pause_app", function(event){
		thisObj.pauseAppToggle();
	});
	//construct navigation
	this.navigation = new jokerteam.Navigation();
	this.navigation.addEventListener("change", function(event){
		thisObj.onNavigationEventHandler(event);
	});

	this.preload = new createjs.LoadQueue(false);
	this.preload.on("fileload", this.handleFileLoad, this);
	//this.preload.on("complete", this.handleComplete, this);

	//add mainContainer
	this.initMainContainer(jokerteam.Config.data.screen.width, jokerteam.Config.data.screen.height);
	//add contentContainer
	this.initContentContainer();
	//add navContainer
	this.initNavContainer();

	//render flow: main
	this.renderFlow("main");
}

Main.prototype.handleTick = function(event) {
	//this.log("Paused:", event.paused, event.delta);
	this.mainStage.update();
}

Main.prototype.initMainContainer = function(w, h) {
	this.mainContainer = document.createElement('div');
	this.mainContainer.id = 'main-container';
	this.mainContainer.style.height = h + 'px';
	this.mainContainer.style.width = w + 'px';
	this.mainContainer.style.position = "absolute";
	this.mainContainer.style.top = 0;
	this.mainContainer.style.left = 0;
	//this.mainContainer.style.border = "1px solid red";
	//this.mainContainer.innerHTML = "this is content-container div";
	document.body.appendChild(this.mainContainer);
}

Main.prototype.initContentContainer = function() {

	this.contentContainer = document.createElement('div');
	this.contentContainer.id = 'content-container';
	this.contentContainer.style.height = '100%';
	this.contentContainer.style.width = '100%';
	//this.contentContainer.style.border = "1px solid green";
	//this.contentContainer.innerHTML = "this is content-container div";
	this.mainContainer.appendChild(this.contentContainer);
	var thisObj = this;
	$("#content-container").on("swipeleft",function(){
		if (thisObj.canSwipe) {
			thisObj.gotoNextPage();
		}
		thisObj.dispatchEvent(new createjs.Event("page_swipeleft"));
	});
	$("#content-container").on("swiperight",function(){
		if (thisObj.canSwipe) {
			thisObj.gotoPrevPage();
		}
		thisObj.dispatchEvent(new createjs.Event("page_swiperight"));
	});
}

Main.prototype.initNavContainer = function() {

	this.navContainer = document.createElement('div');
	this.navContainer.id = 'nav-container';
	this.navContainer.style.height = 'auto';
	this.navContainer.style.width = '100%';
	this.navContainer.style.position = "absolute";
	this.navContainer.style.bottom = 0;
	//this.navContainer.style.left = 0;
	//this.navContainer.style.border = "1px solid blue";
	//this.navContainer.innerHTML = "this is nav-container div";
	this.mainContainer.appendChild(this.navContainer);
	//var gg = new createjs.DOMElement(this.navContainer);
	//gg.x = 0;
	//gg.y = 728;
	//this.mainContainerDOM.addChild(gg);
}

Main.prototype.renderFlow = function(flow) {
	if (jokerteam.Config.data[flow]) {
		this.log("== renderFlow: ", flow);
		this.log("== flow data: ", jokerteam.Config.data[flow]);
		var flowData = jokerteam.Config.data[flow];
		var menuUrl = flowData["menu"];
		this.pageInfo.currentFlow = {"name": flow, "data": flowData};
		this.pageInfo.menuData = menuUrl;
		this.preload.loadFile(menuUrl);
	} else {
		this.log("== NOT CONFIG FLOW DATA ", flow);
	}
}

Main.prototype.handleFileLoad = function(event) {
    var item = event.item; // A reference to the item that was passed in to the LoadQueue
    var type = item.type;
	this.log("handleFileLoad event: ", event);
    if (type == createjs.LoadQueue.TEXT) {
			if (item.id.indexOf("menu") > -1) {
				//IS MENU
				this.updateMenuData(event.result);
				//init Navigation
				this.navigation.init(this.navContainer.id, item.id);

			} else { // IS ASSETS
				this.updateContentData(event.result);
			}
    }
 }

Main.prototype.updateMenuData = function(menudata) {
	$("#nav-container").empty();
	var content = jokerteam.Utils.fixContentLoadFromMain(menudata, this.pageInfo.menuData['src']);
	$("#nav-container").append(content);
	var aEvent = new createjs.Event("menu_added");
	aEvent.data = this.pageInfo.menuData;
	this.dispatchEvent(aEvent);
}

Main.prototype.updateContentData = function(contentdata) {
	$("#content-container").empty();
	//clear all
	createjs.Ticker.removeAllEventListeners();
	createjs.Sound.stop();
	createjs.Sound.removeAllSounds();
	//clear unuse js
	contentdata = contentdata.replace('<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>', "");
	//
	var content = jokerteam.Utils.fixContentLoadFromMain(contentdata, this.pageInfo.currentPageData['src']);
	$("#content-container").append(content);
	var aEvent = new createjs.Event("page_added");
	aEvent.data = this.pageInfo.currentPageData;
	this.dispatchEvent(aEvent);
	if (typeof init === "function") {
		if (lib.properties.manifest) {
			for (var i = 0; i < lib.properties.manifest.length; i++) {
				if (lib.properties.manifest[i].src)
					lib.properties.manifest[i].src = 'assets/' + lib.properties.manifest[i].src;
			}
		}
		if (lib.properties) {
			lib.properties.fps = jokerteam.Config.data.screen.fps;
			if (this.currentPageFPS > 0) {
				lib.properties.fps = this.currentPageFPS;
			}
			lib.properties.width = jokerteam.Config.data.screen.width;
			lib.properties.height = jokerteam.Config.data.screen.height;
		}
		this.log("Content is ready");
    // safe to use the function
		init();
	} else {
		this.log("Content is NOT ready");
	}
}

 //NAVIGATION EVENT HANDLER
Main.prototype.onNavigationEventHandler = function(event) {
	var type = event.type;
	//this.log("*** onNavigationEventHandler");
	if (type == "change") {
		if (this.pageInfo.currentPageData != null) {
			var aEvent = new createjs.Event("page_removed");
			aEvent.data = this.pageInfo.currentPageData;
			this.dispatchEvent(aEvent);
		}
		if (typeof init === "function") {
			init = undefined;
			//this.log("CLEAR INIT");
		}
		var page = event.data;
		this.currentPageFPS = 0;
		if (page.fps) {
			this.currentPageFPS = page.fps;
		}
		this.log("is NAV CHANGE", page);
		var pagejson = JSON.parse(page);
		this.pageInfo.currentPageData = pagejson;
		this.preload.loadFile(pagejson);
	}
}
 //END NAVIGATION EVENT HANDLER

//GOTO PAGE
Main.prototype.gotoPage = function(pagedata) {
	//this.log("gotoPage", pagedata);
	if (pagedata.pageId)
		this.navigation.gotoPage(pagedata.pageId);
}
Main.prototype.gotoNextPage = function() {
	this.log("gotoNextPage", window.canGoNextPage);
	if ($.isFunction(window.canGoNextPage)) {
	} else {
		this.navigation.gotoNextPage();
	}
}
Main.prototype.gotoPrevPage = function() {
	//this.log("gotoPage", pagedata);
	if ($.isFunction(window.canGoPrevPage)) {
	} else {
		this.navigation.gotoPrevPage();
	}
}
Main.prototype.reloadPage = function() {
	//this.log("gotoPage", pagedata);
	this.navigation.reloadPage();
}
Main.prototype.soundMuteToggle = function() {
	//this.log("soundMuteToggle", this.soundIsMuted);
	this.soundIsMuted = !this.soundIsMuted;
	createjs.Sound.muted = this.soundIsMuted;
}
Main.prototype.pauseAppToggle = function() {
	//IS COMING SOON
	// this.log("pauseAppToggle", this.appIsPaused);
	// this.appIsPaused = !this.soundIsMuted;
	// createjs.Ticker.paused  = this.appIsPaused;
	//  if (this.appIsPaused) {
	//  		createjs.Ticker.removeAllEventListeners();
	// 		createjs.Sound.stop();
	//  } else {
	// // 	createjs.Ticker.setFPS(this.appCurrentFramerate);
	// 	createjs.Sound.play();
	//  }
}


/**
* Expose class.
*/
createjs.EventDispatcher.initialize(Main.prototype);
jokerteam.Main = Main;

})(jQuery);

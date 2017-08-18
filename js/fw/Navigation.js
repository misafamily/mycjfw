/**
 * ...
 * @author binhdocco
 */
// namespace:
this.jokerteam = this.jokerteam||{};

(function($) {
	"use strict";

	function Navigation(){
		//console.log("[Navigation construct]");
	}


	Navigation.prototype.init = function(containerid, menuid) {
		//jokerteam.Utils.log('NAV INIT', containerid, menuid);
		this.currentActiveItemIndex = 0;
		this.currentActiveItem = null;

		this.containerDiv = $("#" + containerid);
		this.menuDiv = $("#" + menuid);
		var thisObj = this;

		$("a", this.menuDiv).bind("click", function(event) {
			//jokerteam.Utils.log("A TAPONE: ", event);
			event.preventDefault();
			var li = event.target.parentNode;
			var liIndex = $(li).index();

			var li_all = $("li", thisObj.menuDiv);
			for (var i = 0; i < li_all.length; i++) {
				if ($(li_all[i]).is($(li))) {
					liIndex = i;
					break;
				}
			}
			thisObj.gotoPageAtIndex(liIndex);

			//thisObj.currentActiveItemIndex = $(li).index();
			// thisObj.activeItem(li);
			// var attributes = event.target.attributes;
			// if (attributes.length > 0) {
			// 	var href = attributes[0].value;
			// 	thisObj.loadAsset(href);
			// }
		});

		//manage controller
		this.menuControllerDiv = $("#" + menuid + '-controller');
		//jokerteam.Utils.log('NAV INIT CONTROLLER', this.menuControllerDiv);
		if (this.menuControllerDiv.length > 0) {
			$("a", this.menuControllerDiv).bind("click", function(event) {
				event.preventDefault();
				 var attributes = event.target.attributes;
				 if (attributes.length > 0) {
				 	var href = attributes['href'].value;
					href = JSON.parse(href);
					if (href.toggle == true) {
						var li = event.target.parentNode;
						$(li).toggleClass('active');
					}
				 	thisObj.loadEvent(href);
				 }
			});
		}

		//load 1st asset
		var li = $("li", this.menuDiv);
		//console.log("li: ", li);
		if (li.length > 0) {
			// var item = li[0];
			// this.activeItem(item);
			// var a = item.firstElementChild;
			// var attributes = a.attributes;
			// if (attributes.length > 0) {
			// 	var href = attributes[0].value;
			// 	thisObj.loadAsset(href);
			// }
			this.gotoPageAtIndex(0);
		}

		this.MAX_PAGE_NUM = li.length;
		//jokerteam.Utils.log('MAX_PAGE_NUM', this.MAX_PAGE_NUM);
	}

	Navigation.prototype.loadEvent = function(eventdata) {
		//console.log("Navigation loadEvent: ", eventdata.event);
		var navEvent = new createjs.Event(eventdata.event);
		jokerteam.Main.main.dispatchEvent(navEvent);
	}

	Navigation.prototype.loadAsset = function(url) {
		//console.log("Navigation loadAsset: ", url);
		var navEvent = new createjs.Event("change");
		navEvent.data = url;
		this.dispatchEvent(navEvent);
	}

	Navigation.prototype.activeItem = function(item) { //item: li


		if (this.currentActiveItem) {
			if ($(this.currentActiveItem).is(item)) return;//RELOAD PAGE CASE

			var parentClassName = this.currentActiveItem.parentNode.className;
			if (parentClassName.indexOf("menu-main-sub") > -1) {
				$(this.currentActiveItem.parentNode).addClass("hidden");
				$(this.currentActiveItem.parentNode.parentNode).removeClass("active");
			} else {
				var childUl = $('ul', this.currentActiveItem);
				if (childUl.length > 0) {
					if (!$(childUl[0]).hasClass("hidden")) $(childUl[0]).addClass("hidden");
				}
			}
			$(this.currentActiveItem).removeClass("active");
		}
		this.currentActiveItem = item;
		var parentClassName = item.parentNode.className;
		if (parentClassName.indexOf("menu-main-sub") > -1) {
			$(this.currentActiveItem.parentNode).removeClass("hidden");
			$(item.parentNode.parentNode).addClass("active");
		} else {
			var childUl = $('ul', this.currentActiveItem);
			if (childUl.length > 0) {
				$(childUl[0]).removeClass("hidden");
			}
		}
		$(this.currentActiveItem).addClass("active");
	}

	//GOTO PAGE
	Navigation.prototype.gotoPageAtIndex = function(pageIndex) {
		jokerteam.Utils.log("gotoPageAtIndex: pageIndex: ", pageIndex);
		//load 1st asset
		var li = $("li", this.menuDiv);

		//check begin or END
		var canGoPrev = true;
		var canGoNext = true;
		if (li.length > 1) {
			if (pageIndex == 0) {
				canGoPrev = false;
			} else if (pageIndex == (li.length - 1)) {
				canGoNext = false;
			}
		} else {
			canGoPrev = false;
			canGoNext = false;
		}
		//console.log('canGoPrev: ', canGoPrev);
		//console.log('canGoNext: ', canGoNext);
		var pre_a = $("#goto_prev_page");
		if (pre_a.length > 0) {
			pre_a = $(pre_a[0].parentNode);
			if (!canGoPrev) {
				if (!pre_a.hasClass("deactive"))
					pre_a.addClass("deactive");
			} else {
				if (pre_a.hasClass("deactive"))
					pre_a.removeClass("deactive");
			}
		}

		var pre_n = $("#goto_next_page");
		if (pre_n.length > 0) {
			pre_n = $(pre_n[0].parentNode);
			if (!canGoNext) {
				if (!pre_n.hasClass("deactive"))
					pre_n.addClass("deactive");
			} else {
				if (pre_n.hasClass("deactive"))
					pre_n.removeClass("deactive");
			}
		}
		//end check

		if (pageIndex < li.length) {
			this.currentActiveItemIndex = pageIndex;
			var item = li[pageIndex];
			this.activeItem(item);
			var a = item.firstElementChild;
			var attributes = a.attributes;
			if (attributes.length > 0) {
				var href = attributes['href'].value;
				this.loadAsset(href);
			}
			return true;
		}
		return false;
	}

	//GOTO PAGE
	Navigation.prototype.gotoPage = function(pageId) {
		var li = $("li", this.menuDiv);
		//console.log("gotoPage ", li);
		var foundpage = false;
		if (li.length > 0) {
			for (var i = 0; i < li.length; i++) {
				var item = li[i];
				var a = item.firstElementChild;
				var attributes = a.attributes;
				if (attributes.length > 0) {
					var href = attributes['href'].value;
					var hrefjson = JSON.parse(href);
					if (hrefjson.id == pageId) {
						this.currentActiveItemIndex = i;
						foundpage = true;
						//this.activeItem(item);
						//this.loadAsset(href);
						this.gotoPageAtIndex(this.currentActiveItemIndex);
						break;
					}
				}
			}
		}

		if (!foundpage) {
			window.alert("NO FOUND PageID '" + pageId + "' IN FLOW '" + jokerteam.Main.main.pageInfo.currentFlow.name + "'");
		}
	}
	//GOTO NEXT PAGE
	Navigation.prototype.gotoNextPage = function() {
		var nextIndex = this.currentActiveItemIndex + 1;
		if (nextIndex < this.MAX_PAGE_NUM) {
			if (this.gotoPageAtIndex(nextIndex)) {
			} else {
				window.alert("OUT OF BOUND");
			}
		} else {
			jokerteam.Utils.log("gotoNext OUT OF BOUND");
		}
	}
	//GOTO PREV PAGE
	Navigation.prototype.gotoPrevPage = function() {
		var prevIndex = this.currentActiveItemIndex - 1;
		if (prevIndex > -1) {
			if (this.gotoPageAtIndex(prevIndex)) {
			} else {
				window.alert("OUT OF BOUND");
			}
		} else {
			jokerteam.Utils.log("gotoPrev OUT OF BOUND");
		}
	}
	//RELOAD CURRENT PAGE
	Navigation.prototype.reloadPage = function() {
		this.gotoPageAtIndex(this.currentActiveItemIndex);
	}
	/**
	* Expose class.
	*/
	createjs.EventDispatcher.initialize(Navigation.prototype);
	jokerteam.Navigation = Navigation;

})(jQuery);

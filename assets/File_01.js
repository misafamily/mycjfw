(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"File_01_atlas_", frames: [[602,516,190,104],[829,204,175,175],[842,381,173,150],[602,0,280,202],[0,0,600,520],[602,204,225,184],[602,390,238,124],[0,522,154,118],[156,522,150,108]]}
];


// symbols:



(lib._4 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.b4 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.chemical_drums2 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.phi2 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Picture2 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Picture3 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Picture4 = function() {
	this.spriteSheet = ss["File_01_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._6();
	this.instance.parent = this;
	this.instance.setTransform(-43.5,-37.7,0.503,0.503);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(-43.5,-37.7,87,75.4), null);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgMA1QgFgBgGgDQgEgDgFgFQgEgFgCgFIARAAQAEAFAFADQAGADAGgBQAGABAFgCQAFgCADgEQAEgDACgFQACgFAAgHIgBAAIgFAGIgGADIgHACIgIABIgIgBIgHgCQgKgFgDgEIgJgMIgDgHIgBgIIACgJIADgJQACgFAEgFIAJgHQAFgDAFgBQAGgCAFAAQAHAAAIADIAGADIAGAFIAAgJIAPAAIAABCIgBAJIgDAJIgDAHIgFAFIgGAFIgHADQgLADgGAAQgGAAgGgCgAgKgnQgFACgDAFQgEADgCAFQgCAFAAAGQAAAFACAFQACAEAEAEQADAEAFACQAFACAFAAIAIgBQADgBAEgDIAFgEIAEgHQADgFAAgFQAAgFgBgDIgDgIIgGgFIgHgFQgGgCgEAAQgFAAgFACg");
	this.shape.setTransform(33.4,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgDgCgGAAQgFAAgDACQgEACgDAEIgEAHIgBAKIAAApIgOAAIAAhNIANAAIAAAIQAFgFAFgCQAGgDAHAAIAIABIAHACIAGAFIAGAGQACAEABAFIABALIAAAtg");
	this.shape_1.setTransform(24.3,8.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_2.setTransform(18.3,7.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgMA1QgGgBgEgDQgGgDgDgFQgFgFgCgFIARAAQADAFAGADQAGADAGgBQAGABAFgCQAGgCADgEQADgDACgFQACgFAAgHIgBAAIgFAGIgGADIgIACIgHABIgIgBIgHgCQgKgFgEgEIgJgMIgCgHIAAgIIABgJIACgJQADgFAEgFIAJgHQAEgDAGgBQAGgCAFAAQAHAAAIADIAGADIAGAFIAAgJIAPAAIAABCIgBAJIgCAJIgEAHIgFAFIgGAFIgHADQgLADgGAAQgGAAgGgCgAgKgnQgEACgFAFQgDADgCAFQgCAFAAAGQAAAFACAFQACAEADAEQAFAEAEACQAFACAFAAIAHgBQAFgBADgDIAFgEIAEgHQADgFAAgFQAAgFgCgDIgCgIIgGgFIgHgFQgFgCgFAAQgFAAgFACg");
	this.shape_3.setTransform(11.6,9.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAFgFIAHgEIAIgCIAIgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgFACgEAEQgEADgCAFQgCAGAAAEQAAAGACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_4.setTransform(1.9,8.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AANA0IgdgoIAaglIASAAIgcAkIAgApgAgfA0IAAhnIAPAAIAAA/IAAAogAgQAMg");
	this.shape_5.setTransform(-6.1,7.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgEgEgEgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAHgBQAHAAAGACQAGACAGAEIAJAJQADAFACAGIgQAAIgEgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgCAFAAAFQAAAFACAFIAFAJQADAEAFACQAFACAEAAIAHgBIAHgCIAFgFIAEgGIAQAAIgGALQgEAGgFADQgFAEgFACQgHACgHAAIgHgBg");
	this.shape_6.setTransform(-14.7,8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAHABIAIACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAGAAAFgCQAEgCAEgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgFgDgEgCQgFgDgGAAQgEAAgGADg");
	this.shape_7.setTransform(-24.2,8.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgoA1IAAhnIAOAAIAAAMIAAAAIAFgGIAHgEQAEgCADgBIAIgBIAIABIAIACIAHAEIAFAFQAHAJACAFQACAKAAAGIAAAIIgDAGQgCAIgGAFQgFAGgHADQgKADgGAAQgJgBgFgCIgGgFIgGgFIAAAlgAgKgkQgFACgDAEQgEADgCAFQgBAFAAAGQAAAFABAFQACAEAEAEQADAEAGACQAFACAEAAQAGAAAEgCQAFgCAEgEQAEgDABgEQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_8.setTransform(-33.4,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_9.setTransform(44.1,-6.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgEgIIgCgHIgBgIQABgFACgKQACgFAHgIIAGgFIAHgEIAHgCIAHgBQAFAAAKADQAIADAFAGQAFAFADAIQAEAKAAAFIAAAGIhAAAQABAFACAEIAGAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgEAFgFADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_10.setTransform(35,-5.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_11.setTransform(28.6,-6.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAHgFIAHgEIAIgCIAHgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAFAAAGgCQAFgCADgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgGADg");
	this.shape_12.setTransform(21.6,-5.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgDgCgGAAQgFAAgDACQgEACgDAEIgEAHIgBAKIAAApIgOAAIAAhNIANAAIAAAIQAFgFAFgCQAGgDAHAAIAIABIAHACIAGAFIAGAGQACAEABAFIABALIAAAtg");
	this.shape_13.setTransform(12.6,-5.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_14.setTransform(6.6,-6.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AAsAoIAAgqIgBgJIgCgIIgHgFQgDgCgFAAQgGAAgEACQgDACgCADIgDAIIgBAIIAAArIgNAAIAAgqIAAgJIgEgHQgCgEgDgCQgEgCgFAAQgGAAgDACQgEACgCADIgDAHIgBAJIAAArIgPAAIAAhNIAOAAIAAAJQAFgGAFgCQAFgDAHAAIAIABIAHACIAFAEQACADACADIAEgGIAHgEIAGgCIAIgBQAIAAAGACQAFADAEAEQAEAEADAGQABAGAAAIIAAAug");
	this.shape_15.setTransform(-1.8,-5.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgHAoIgJgCIgMgJIgGgGIgDgHIgDgHIAAgJIAAgHIADgIQACgFAHgIIAFgFIAHgEIAJgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgEADgCAFQgBAGAAAEQAAAGABAFQACAEAEAEQADAEAGACQAFACAEAAQAGAAAEgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_16.setTransform(-13.6,-5.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_17.setTransform(-20.2,-6.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgGAAQgEAAgEACQgDACgDAEIgEAHIAAAKIAAApIgQAAIAAhNIAPAAIAAAIQADgFAHgCQAFgDAGAAIAIABIAIACIAHAFIAEAGQAEAEABAFIABALIAAAtg");
	this.shape_18.setTransform(-26.5,-5.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_19.setTransform(-35.6,-5.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgDgEgFgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAHgBQAHAAAGACQAGACAGAEIAJAJQADAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgEACgEADIgFAJQgBAFgBAFQABAFABAFIAFAJQAEAEAEACQAFACAEAAIAIgBIAFgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgHAAIgHgBg");
	this.shape_20.setTransform(-44.6,-5.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_21.setTransform(31.9,-20.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAHgFIAHgEIAIgCIAHgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAFAAAGgCQAFgCADgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgGADg");
	this.shape_22.setTransform(25.2,-19.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgEgEgEgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAHgBQAHAAAGACQAGACAGAEIAJAJQADAFACAGIgQAAIgEgGIgFgFIgGgDIgHgBQgFAAgFADQgEACgEADIgFAJQgCAFAAAFQAAAFACAFIAFAJQAEAEAEACQAFACAEAAIAIgBIAGgCIAFgFIAEgGIAQAAIgGALQgEAGgFADQgFAEgFACQgHACgHAAIgHgBg");
	this.shape_23.setTransform(16.3,-19.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_24.setTransform(10.2,-20.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383A38").s().p("AAsAoIAAgqIAAgJQgBgFgDgDIgFgFQgEgCgFAAQgFAAgEACQgEACgCADIgDAIIAAAIIAAArIgOAAIAAgqIgBgJIgCgHQgDgEgEgCQgDgCgFAAQgGAAgDACQgEACgCADIgDAHIgBAJIAAArIgPAAIAAhNIAOAAIAAAJQAFgGAFgCQAFgDAHAAIAHABIAHACIAGAEQACADABADIAGgGIAFgEIAHgCIAIgBQAIAAAFACQAGADAFAEQAEAEABAGQACAGAAAIIAAAug");
	this.shape_25.setTransform(1.8,-19.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgFgFgDgIIgDgHIAAgIQAAgFADgKQACgFAGgIIAFgFIAHgEIAIgCIAHgBQAGAAAKADQAGADAGAGQAGAFACAIQADAKAAAFIAAAGIg/AAQABAFADAEIAFAGQAEADADACIAIABIAHAAIAGgDIAFgEIAEgGIAPAAQgCAGgEAFQgDAFgGADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgBgEgEgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgDADgDAEQgBAEgBAFIAxAAIAAAAg");
	this.shape_26.setTransform(-9.5,-19.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#383A38").s().p("AAUA0IAAgqIgBgKIgDgGQgCgEgEgCQgEgCgFAAQgFAAgDACQgEACgDAEIgDAGIgCAKIAAAqIgOAAIAAhnIAOAAIAAAiIAFgEIAFgEQAFgCAHAAIAIABIAHACIAGAFIAGAGQACAEABAFIABAKIAAAug");
	this.shape_27.setTransform(-18.3,-20.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383A38").s().p("AgHA1IgKgEIgJgFIgIgGIgGgIIgFgKIgDgKIgBgKIABgKIADgKIAFgJIAGgIIAIgHIAJgFIAKgDIAKgBQAIAAAJADQAIACAHAFIAJAJQADAEADAGIgSAAQgIgIgFgDIgHgDIgJgBIgHABIgHACQgHADgFAGQgFAFgDAHQgDAKAAAFQABAKACAFQADAHAFAGQAFAFAHAEIAHACIAHABIAIgBIAHgDIAHgEIAGgGIATAAQgEAHgFAFQgFAFgGADIgNAGQgHACgHAAIgKgBg");
	this.shape_28.setTransform(-28,-20.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol21, new cjs.Rectangle(-53.2,-28,106.4,46), null);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Picture3();
	this.instance.parent = this;
	this.instance.setTransform(-37.7,-28.9,0.49,0.49);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol20, new cjs.Rectangle(-37.7,-28.9,75.5,57.8), null);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape.setTransform(66,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_1.setTransform(61.2,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAGgEIAIgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQADAKABAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_2.setTransform(54.2,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_3.setTransform(47.8,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_4.setTransform(44.2,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_5.setTransform(40.9,-3.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgJA0IAAhAIgIAAIAAgNIAIAAIAAgEQAAgGABgEQADgFAFgDQADgDAFAAIAJgBIAAANQgFAAgDACIgEADIgBAEIAAAEIANAAIAAANIgNAAIAABAg");
	this.shape_6.setTransform(37.4,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_7.setTransform(26.3,-3.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgDgIIgDgHIgBgIQAAgFAEgKQACgFAGgIIAFgFIAIgEIAHgCIAHgBQAGAAAJADQAIADAFAGQAFAFAEAIQADAKgBAFIAAAGIg/AAQABAFACAEIAGAGQAEADAEACQAEABAEAAIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgEAFgFADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgEADgCAEQgCAEAAAFIAxAAIAAAAg");
	this.shape_8.setTransform(17.2,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_9.setTransform(10.8,-3.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAGACQAFACAEAAQAGAAAFgCQAEgCAEgEQAEgDABgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_10.setTransform(3.8,-2.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgFAAQgFAAgDACQgFACgCAEIgDAHIgBAKIAAApIgPAAIAAhNIANAAIAAAIQAFgFAGgCQAFgDAGAAIAJABIAHACIAGAFIAFAGQADAEABAFIACALIAAAtg");
	this.shape_11.setTransform(-5.2,-2.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_12.setTransform(-11.2,-3.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AAsAoIAAgqIAAgJIgEgIIgFgFQgEgCgFAAQgFAAgEACQgEACgCADIgDAIIAAAIIAAArIgOAAIAAgqIAAgJIgDgHQgDgEgDgCQgEgCgFAAQgFAAgEACQgEACgCADIgDAHIgBAJIAAArIgPAAIAAhNIAOAAIAAAJQAFgGAFgCQAFgDAHAAIAHABIAIACIAFAEQACADACADIAEgGIAGgEIAHgCIAIgBQAIAAAFACQAHADADAEQAFAEABAGQACAGAAAIIAAAug");
	this.shape_13.setTransform(-19.6,-2.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAFgFIAHgEIAIgCIAIgBIAIABIAHACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgFAGIgGAEIgHADIgIABgAgJgYQgFACgEAEQgEADgCAFQgCAGAAAEQAAAGACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_14.setTransform(-31.4,-2.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_15.setTransform(-38,-3.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgDgCgHAAQgDAAgFACQgEACgCAEIgEAHIgBAKIAAApIgPAAIAAhNIAOAAIAAAIQAFgFAFgCQAHgDAGAAIAHABIAIACIAGAFIAGAGQADAEAAAFIABALIAAAtg");
	this.shape_16.setTransform(-44.3,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_17.setTransform(-53.4,-2.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AgHA1IgKgEIgJgFIgIgGIgGgIIgFgKIgDgKIgBgKIABgKIADgKIAFgJIAGgIIAIgHIAJgFIAKgDIAKgBQAIAAAJADQAIACAHAFIAJAJQADAEADAGIgSAAQgIgIgFgDIgHgDIgJgBIgHABIgHACQgHADgFAGQgFAFgDAHQgDAKAAAFQABAKACAFQADAHAFAGQAFAFAHAEIAHACIAHABIAIgBIAHgDIAHgEIAGgGIATAAQgEAHgFAFQgFAFgGADIgNAGQgHACgHAAIgKgBg");
	this.shape_18.setTransform(-63.4,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol19, new cjs.Rectangle(-71,-10.6,142.1,18), null);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Picture4();
	this.instance.parent = this;
	this.instance.setTransform(-35.2,-25.3,0.47,0.47);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-35.2,-25.3,70.5,50.8), null);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape.setTransform(32.5,-2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgJgFgDgEQgFgFgDgIIgDgHIgBgIQABgFADgKQACgFAGgIIAFgFIAHgEIAIgCIAHgBQAGAAAKADQAGADAGAGQAGAFADAIQACAKAAAFIAAAGIg/AAQABAFACAEIAGAGQAEADAEACQAEABAEAAIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgDAFgGADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgEADgCAEQgBAEgBAFIAxAAIAAAAg");
	this.shape_1.setTransform(25.1,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgMA1QgGgBgFgDQgFgDgEgFQgDgEgDgGIAQAAQAFAFAFADQAFACAHABQAGgBAFgBQAGgCADgDQADgEACgFQACgFAAgHIAAAAIgGAGIgHAEIgGABIgIABIgHgBIgIgCQgJgFgFgDIgJgOIgCgHIgBgHIABgJIAEgJQACgGAEgEIAIgHQAFgDAGgCIALgBQAIAAAGACIAHAEIAGAFIAAgJIAOAAIAABCIgBAKIgBAIIgEAGIgFAGIgGAFIgHAEQgLACgGAAQgGAAgGgCgAgKgmQgEABgEAEQgEAEgCAFQgCAFAAAGQAAAFACAFQACAEAEAEQAEAEAEACQAFACAFAAIAIgBQADgBADgDIAGgEIAEgGQADgGAAgFQAAgEgBgEIgEgIIgEgGIgIgEQgFgCgFAAQgFAAgFADg");
	this.shape_2.setTransform(15.5,-0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_3.setTransform(5.8,-3.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_4.setTransform(-0.4,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_5.setTransform(-3.9,-2.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_6.setTransform(-8.4,-3.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_7.setTransform(-12.2,-2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgIAoIgHgCQgKgFgEgEIgEgGIgEgHIgCgHIgBgJIABgHIACgIQACgFAGgIIAHgFIAHgEIAHgCIAIgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgEACgEAEQgDADgCAFQgCAGgBAEQABAGACAFQACAEADAEQAEAEAEACQAFACAFAAQAFAAAGgCQAFgCADgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgFgDgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_8.setTransform(-19.9,-2.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgHA1IgKgEIgJgFIgIgGIgGgIIgFgKIgDgKIgBgKIABgKIADgKIAFgJIAGgIIAIgHIAJgFIAKgDIAKgBQAIAAAJADQAIACAHAFIAJAJQADAEADAGIgSAAQgIgIgFgDIgHgDIgJgBIgHABIgHACQgHADgFAGQgFAFgDAHQgDAKAAAFQABAKACAFQADAHAFAGQAFAFAHAEIAHACIAHABIAIgBIAHgDIAHgEIAGgGIATAAQgEAHgFAFQgFAFgGADIgNAGQgHACgHAAIgKgBg");
	this.shape_9.setTransform(-29.9,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-37.5,-10.6,75,18), null);


(lib.Symbol16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.phi2();
	this.instance.parent = this;
	this.instance.setTransform(-56.2,-46,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-56.2,-46,112.5,92), null);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape.setTransform(30.9,1.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgHAoIgIgCIgNgJIgGgGIgDgHIgDgHIAAgJIAAgHIADgIQACgFAHgIIAFgFIAIgEIAIgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgEADgCAFQgBAGAAAEQAAAGABAFQACAEAEAEQADAEAGACQAFACAEAAQAGAAAEgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_1.setTransform(24.2,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgHAoIgHgCIgHgEIgGgFQgDgEgFgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAGgBQAHAAAGACQAGACAFAEIAJAJQAEAFACAGIgQAAIgEgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgBAFAAAFQAAAFABAFIAFAJQADAEAFACQAFACAEAAIAHgBIAHgCIAFgFIAEgGIAQAAIgGALQgEAGgFADQgFAEgFACQgHACgHAAIgHgBg");
	this.shape_2.setTransform(15.2,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_3.setTransform(9.1,1.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AAsAoIAAgqIgBgJIgCgIIgHgFQgDgCgFAAQgGAAgEACQgDACgCADIgDAIIgBAIIAAArIgNAAIAAgqIgBgJIgDgHQgCgEgEgCQgDgCgFAAQgFAAgEACQgEACgCADIgDAHIgBAJIAAArIgOAAIAAhNIANAAIAAAJQAFgGAFgCQAFgDAIAAIAHABIAGACIAGAEQACADABADIAGgGIAGgEIAGgCIAIgBQAHAAAHACQAGADAEAEQADAEADAGQACAGAAAIIAAAug");
	this.shape_4.setTransform(0.7,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAHgEIAHgCIAHgBQAFAAAKADQAHADAGAGQAFAFADAIQAEAKAAAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_5.setTransform(-10.5,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AAUA0IAAgqIgBgKIgDgGQgCgEgEgCQgEgCgGAAQgDAAgFACQgDACgDAEIgDAGIgBAKIAAAqIgQAAIAAhnIAQAAIAAAiIAEgEIAFgEQAGgCAFAAIAIABIAIACIAHAFIAEAGQADAEACAFIABAKIAAAug");
	this.shape_6.setTransform(-19.4,1.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgDgEgFgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAIgBQAGAAAGACQAGACAGAEIAJAJQADAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgEACgEADIgFAJQgBAFgBAFQABAFABAFIAFAJQAEAEAEACQAFACAFAAIAHgBIAFgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_7.setTransform(-28,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_8.setTransform(55.2,-12.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAHgEIAHgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQAEAKAAAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_9.setTransform(46.2,-10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_10.setTransform(39.8,-11);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_11.setTransform(35.6,-12.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgnA1IAAhnIAMAAIAAAMIABAAIAGgGIAGgEQADgCAEgBIAHgBIAJABIAIACIAHAEIAFAFQAHAJACAFQADAKAAAGIgBAIIgDAGQgCAIgGAFQgFAGgHADQgKADgGAAQgJgBgFgCIgGgFIgGgFIAAAlgAgKgkQgEACgEAEQgEADgCAFQgCAFAAAGQAAAFACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_12.setTransform(29.3,-9.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AATAnIgTgcIgTAcIgQAAIAagnIgZgmIASAAIAQAaIAQgaIASAAIgaAmIAcAng");
	this.shape_13.setTransform(20.7,-10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgIIgCgHIgBgIQAAgFADgKQADgFAGgIIAFgFIAIgEIAHgCIAHgBQAFAAAKADQAIADAFAGQAGAFADAIQADAKAAAFIAAAGIhAAAQABAFACAEIAGAGQADADAFACIAIABIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgEAFgFADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgDAEQgCAEAAAFIAxAAIAAAAg");
	this.shape_14.setTransform(12.6,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgbA7IAnh1IAQAAIgnB1g");
	this.shape_15.setTransform(0.4,-11.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_16.setTransform(-4.8,-11);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgJgFgDgEQgFgFgDgIIgDgHIgBgIQABgFADgKQACgFAGgIIAFgFIAHgEIAIgCIAHgBQAGAAAKADQAGADAGAGQAGAFADAIQACAKAAAFIAAAGIg/AAQABAFACAEIAGAGQAEADAEACIAIABIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgDAFgGADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgEADgCAEQgBAEgBAFIAxAAIAAAAg");
	this.shape_17.setTransform(-11.8,-10.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AgEAnIgfhNIAQAAIATA3IAAAAIAUg3IAQAAIgfBNg");
	this.shape_18.setTransform(-20.1,-10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_19.setTransform(-28.6,-10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_20.setTransform(-39.3,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383A38").s().p("AgKA0IAAhAIgHAAIAAgNIAHAAIAAgEQAAgGACgEQADgFAEgDQAEgDAEAAIAKgBIAAANQgFAAgEACIgDADIgBAEIAAAEIANAAIAAANIgNAAIAABAg");
	this.shape_21.setTransform(-43,-12.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgFgFgDgIIgDgHIAAgIQAAgFADgKQACgFAGgIIAFgFIAHgEIAIgCIAHgBQAGAAAKADQAGADAGAGQAGAFACAIQADAKAAAFIAAAGIg/AAQABAFADAEIAFAGQAEADADACIAIABIAHAAIAGgDIAFgEIAEgGIAPAAQgCAGgEAFQgDAFgGADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgBgEgEgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgDADgDAEQgBAEgBAFIAxAAIAAAAg");
	this.shape_22.setTransform(-49.5,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#383A38").s().p("AgYA0IAAhnIAOAAIAABZIAjAAIAAAOg");
	this.shape_23.setTransform(-56.6,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-64.3,-19.3,128.7,32), null);


(lib.Symbol14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._5();
	this.instance.parent = this;
	this.instance.setTransform(-32.3,-32.3,0.37,0.37);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-32.3,-32.3,64.8,64.8), null);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape.setTransform(30.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_1.setTransform(25.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgFAAQgFAAgDACQgEACgDAEIgDAHIgCAKIAAApIgOAAIAAhNIANAAIAAAIQAFgFAFgCQAGgDAHAAIAIABIAHACIAGAFIAGAGQACAEABAFIABALIAAAtg");
	this.shape_2.setTransform(19,3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAGgFIAGgEIAIgCIAIgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgJgYQgFACgEAEQgDADgDAFQgCAGAAAEQAAAGACAFQADAEADAEQAEAEAFACQAEACAFAAQAFAAAFgCQAGgCADgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(9.6,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgDgEgFgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAHgBQAGAAAGACQAGACAFAEIAJAJQAEAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgBAFgBAFQABAFABAFIAFAJQADAEAFACQAFACAFAAIAHgBIAFgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_4.setTransform(0.7,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_5.setTransform(-5.4,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_6.setTransform(-8.9,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgGA0IgHgDIgHgEIgFgFIAAALIgPAAIAAhnIAPAAIAAAlIAFgGIAHgEIAHgCIAHgBIAIABIAHACQAFACAIAHQAHAIACAFQADAJAAAGIgBAIIgCAIQgFAJgEAEIgMAJIgIACIgIABIgHgBgAgKgMQgEACgEAEQgEADgCAEQgCAFAAAGQAAAFACAFQACAFAEAEQADAEAFACQAFACAFAAQAFAAAFgCQAFgCAEgEQADgEACgFQACgFAAgFQAAgFgCgGQgCgDgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_7.setTransform(-16.1,1.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgMAmQgHgCgEgEIgFgGIgDgIQgDgGAAgKIAAgpIAPAAIAAApIABAKQABAEACADQADAEADACQAEABAFAAQAFAAAEgCQAEgBADgEIADgIIABgJIAAgpIAOAAIAABNIgNAAIAAgJQgCADgDACIgFADQgGADgGAAQgGAAgFgCg");
	this.shape_8.setTransform(-25.5,3.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_9.setTransform(-31.5,1.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_10.setTransform(40.8,-12.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgDgCgHAAQgDAAgFACQgEACgCAEIgEAHIgBAKIAAApIgOAAIAAhNIANAAIAAAIQAEgFAGgCQAHgDAGAAIAIABIAHACIAGAFIAGAGQADAEAAAFIABALIAAAtg");
	this.shape_11.setTransform(31.9,-11);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgHAoIgJgCIgMgJIgGgGIgDgHIgDgHIAAgJIAAgHIADgIQACgFAHgIIAFgFIAHgEIAJgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgFACgEAEQgEADgCAFQgCAGAAAEQAAAGACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgEADg");
	this.shape_12.setTransform(22.5,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBQAEgCAEAAQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_13.setTransform(10.8,-10.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_14.setTransform(6.2,-12.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_15.setTransform(2.9,-12.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_16.setTransform(-3.5,-10.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_17.setTransform(-17.3,-12.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAGgEIAIgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQADAKABAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_18.setTransform(-26.4,-10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBQAEgCAEAAQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_19.setTransform(-33.8,-10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383A38").s().p("AgMAyQgHgCgEgEIgFgGIgEgGQgBgHAAgIIAAhFIAOAAIAABFIACAJQABAEACACQADAEAEABQADACAEAAQAEAAAFgCQADgBACgEQADgCACgEIABgJIAAhFIAOAAIAABFQAAAIgCAHIgDAGIgFAGQgFAEgGACQgGADgHAAQgGAAgGgDg");
	this.shape_20.setTransform(-41.3,-12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-49.9,-19.3,99.9,32), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.b4();
	this.instance.parent = this;
	this.instance.setTransform(-43.4,-31.3,0.31,0.31);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-43.4,-31.3,86.9,62.6), null);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgIIgCgHIgBgIQAAgFADgKQADgFAGgIIAGgFIAHgEIAHgCIAHgBQAFAAAKADQAIADAFAGQAGAFADAIQADAKAAAFIAAAGIhAAAQABAFACAEIAGAGQADADAFACIAIABIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgEAFgFADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgEACgEADQgDADgCAEQgDAEAAAFIAxAAIAAAAg");
	this.shape.setTransform(15.3,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_1.setTransform(8.9,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_2.setTransform(4,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAFgFIAHgEIAIgCIAIgBIAIABIAHACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgFAGIgGAEIgHADIgIABgAgJgYQgFACgEAEQgEADgCAFQgCAGAAAEQAAAGACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_3.setTransform(-4,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AARAnIgRgzIAAAAIgQAzIgIAAIgdhNIAQAAIARAyIAAAAIAQgyIAJAAIAQAyIAAAAIARgyIAQAAIgdBNg");
	this.shape_4.setTransform(-14.2,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgFAAQgFAAgDACQgFACgCAEIgDAHIgBAKIAAApIgPAAIAAhNIANAAIAAAIQAFgFAGgCQAFgDAGAAIAJABIAHACIAGAFIAGAGQACAEABAFIACALIAAAtg");
	this.shape_5.setTransform(55.6,-11);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_6.setTransform(46.5,-10.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgGA0IgHgDIgHgEIgFgFIAAALIgPAAIAAhnIAPAAIAAAlIAFgGIAHgEIAHgCIAHgBIAIABIAHACQAFACAIAHQAHAIACAFQADAJAAAGIgBAIIgCAIQgFAJgEAEIgMAJIgIACIgIABIgHgBgAgKgMQgEACgEAEQgEADgCAEQgCAFAAAGQAAAFACAFQACAFAEAEQADAEAFACQAFACAFAAQAFAAAFgCQAFgCAEgEQADgEACgFQACgFAAgFQAAgFgCgGQgCgDgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_7.setTransform(37.2,-12.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_8.setTransform(30.3,-11);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAGgFIAGgEIAIgCIAIgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgJgYQgFACgEAEQgDADgDAFQgCAGAAAEQAAAGACAFQADAEADAEQAEAEAFACQAEACAFAAQAFAAAFgCQAGgCADgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgEADg");
	this.shape_9.setTransform(22.7,-10.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgDgEgFgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAHgBQAGAAAGACQAGACAFAEIAJAJQAEAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgBAFgBAFQABAFABAFIAFAJQADAEAFACQAFACAFAAIAHgBIAFgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_10.setTransform(13.7,-10.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_11.setTransform(0.2,-12.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgDgIIgDgHIgBgIQAAgFAEgKQACgFAGgIIAFgFIAIgEIAHgCIAHgBQAGAAAJADQAIADAFAGQAFAFAEAIQACAKAAAFIAAAGIg/AAQABAFACAEIAGAGQAEADAEACIAIABIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgEAFgFADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgEADgCAEQgCAEAAAFIAxAAIAAAAg");
	this.shape_12.setTransform(-8.9,-10.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_13.setTransform(-15.3,-12.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgDADgDAFQgBAGAAAEQAAAGABAFQADAEADAEQADAEAGACQAFACAEAAQAGAAAFgCQAEgCAEgEQAEgDABgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_14.setTransform(-22.3,-10.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgEAnIgfhNIAQAAIATA3IAAAAIAUg3IAQAAIgfBNg");
	this.shape_15.setTransform(-30.7,-10.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_16.setTransform(-36.1,-12.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_17.setTransform(-39.6,-12.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AgHAoIgHgCIgHgEIgGgFQgEgEgEgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAHgBQAGAAAGACQAGACAFAEIAJAJQAEAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgEACgEADIgFAJQgCAFABAFQgBAFACAFIAFAJQAEAEAEACQAFACAFAAIAGgBIAGgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_18.setTransform(-45.9,-10.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AAeA0IgMgfIgkAAIgLAfIgQAAIAnhnIANAAIAnBngAAOAHIgOgmIgMAmIAaAAg");
	this.shape_19.setTransform(-55.1,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-64,-19.3,128.1,32), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.chemical_drums2();
	this.instance.parent = this;
	this.instance.setTransform(-30,-26,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-30,-26,60,52), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgTA1IALgLIAIgMIAEgOQACgHAAgIQAAgIgCgIIgEgOQgDgGgGgGQgEgFgHgGIAAgSIAJAGIAIAHQAJALAEAGQAGANACAHQADAOAAAGQgBAPgCAGQgFAOgDAGQgIAMgEAFIgIAHIgJAGg");
	this.shape.setTransform(76.6,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_1.setTransform(70.8,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgGA0IAAhnIANAAIAABng");
	this.shape_2.setTransform(66.2,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAHABIAIACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAGAAAFgCQAEgCAEgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgFgDgEgCQgFgDgGAAQgEAAgGADg");
	this.shape_3.setTransform(59.5,3.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgEgEgEgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAHgBQAHAAAGACQAGACAGAEIAJAJQADAFACAGIgQAAIgEgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgCAFAAAFQAAAFACAFIAFAJQADAEAFACQAFACAEAAIAHgBIAHgCIAFgFIAEgGIAQAAIgGALQgEAGgFADQgFAEgFACQgHACgHAAIgHgBg");
	this.shape_4.setTransform(50.6,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_5.setTransform(44.5,1.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AAsAoIAAgqIAAgJIgDgIIgGgFQgEgCgFAAQgGAAgDACQgEACgCADIgDAIIAAAIIAAArIgOAAIAAgqIgBgJIgCgHQgDgEgEgCQgDgCgFAAQgGAAgDACQgEACgCADIgDAHIgBAJIAAArIgOAAIAAhNIANAAIAAAJQAFgGAFgCQAFgDAIAAIAGABIAHACIAGAEQACADABADIAGgGIAFgEIAHgCIAIgBQAHAAAHACQAFADAFAEQADAEACAGQACAGABAIIAAAug");
	this.shape_6.setTransform(36.1,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQADgFAGgIIAGgFIAGgEIAIgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQADAKAAAFIAAAGIg/AAQABAFADAEIAFAGQAEADADACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgDgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgEADgBAEQgDAEAAAFIAxAAIAAAAg");
	this.shape_7.setTransform(24.8,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AAUA0IAAgqIgBgKIgDgGQgCgEgEgCQgEgCgFAAQgFAAgDACQgFACgCAEIgDAGIgBAKIAAAqIgPAAIAAhnIAPAAIAAAiIAEgEIAFgEQAGgCAFAAIAJABIAHACIAGAFIAFAGQADAEABAFIACAKIAAAug");
	this.shape_8.setTransform(16,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgHAoIgHgCIgHgEIgGgFQgEgEgEgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAHgBQAGAAAGACQAGACAFAEIAJAJQAEAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgCAFABAFQgBAFACAFIAFAJQADAEAFACQAFACAFAAIAGgBIAGgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_9.setTransform(7.3,3.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_10.setTransform(-4.2,3.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgNAmQgFgCgFgEIgFgGIgEgIQgBgGAAgKIAAgpIAPAAIAAApIAAAKQABAEACADQADAEADACQAEABAFAAQAFAAAEgCQAEgBACgEIAEgIIABgJIAAgpIAPAAIAABNIgOAAIAAgJQgCADgCACIgGADQgGADgGAAQgGAAgGgCg");
	this.shape_11.setTransform(-11.5,3.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_12.setTransform(-20.6,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_13.setTransform(-30.3,1.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_14.setTransform(-36.7,3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgIAoIgIgCIgMgJIgGgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAHgIIAGgFIAGgEIAIgCIAIgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgEACgEAEQgDADgDAFQgCAGAAAEQAAAGACAFQADAEADAEQAEAEAEACQAFACAFAAQAFAAAFgCQAGgCADgEQAEgDACgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_15.setTransform(-44.4,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgbAnIAAgMIAkg0IggAAIAAgNIAwAAIAAAOIgiAxIAlAAIAAAOg");
	this.shape_16.setTransform(-51.8,3.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAHABIAIACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAGAAAFgCQAEgCAEgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgFgDgEgCQgFgDgGAAQgEAAgGADg");
	this.shape_17.setTransform(-59.7,3.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AAWA0IAAgtIgqAAIAAAtIgQAAIAAhnIAQAAIAAAtIAqAAIAAgtIAOAAIAABng");
	this.shape_18.setTransform(-69,1.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AAFA7QgFgFgFgHQgFgHgDgIQgEgIgBgIQgCgIAAgIQAAgHADgOQACgHAGgMQAEgHAIgKIAIgHIAJgGIAAASIgLALQgFAGgDAGIgEANQgCAIAAAIQAAAIACAHQACAIACAGQADAHAGAGQAEAFAHAGIAAASIgQgMg");
	this.shape_19.setTransform(-76.5,3.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_20.setTransform(56.1,-10.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_21.setTransform(51.3,-11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAGgEIAIgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQADAKABAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_22.setTransform(44.3,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgFAAQgEAAgEACQgEACgDAEIgDAHIgBAKIAAApIgPAAIAAhNIAOAAIAAAIQADgFAHgCQAGgDAFAAIAJABIAHACIAHAFIAEAGQADAEACAFIABALIAAAtg");
	this.shape_23.setTransform(35.4,-11);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_24.setTransform(29.4,-12.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgDADgDAFQgBAGAAAEQAAAGABAFQADAEADAEQADAEAGACQAFACAEAAQAGAAAFgCQAEgCAEgEQAEgDABgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_25.setTransform(22.7,-10.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_26.setTransform(16.2,-12.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgGAAQgDAAgFACQgDACgDAEIgDAHIgBAKIAAApIgQAAIAAhNIAPAAIAAAIQADgFAHgCQAGgDAFAAIAIABIAIACIAHAFIAEAGQADAEACAFIABALIAAAtg");
	this.shape_27.setTransform(9.9,-11);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_28.setTransform(0.8,-10.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#383A38").s().p("AgHAoIgIgCIgGgEIgGgFQgDgEgFgJIgCgIIgBgIQAAgFADgKIAIgNIAGgFIAHgEIAHgCIAIgBQAGAAAGACQAGACAGAEIAJAJQADAFACAGIgRAAIgDgGIgFgFIgGgDIgHgBQgFAAgFADQgEACgEADIgFAJQgBAFgBAFQABAFABAFIAFAJQAEAEAEACQAFACAFAAIAHgBIAFgCIAGgFIADgGIARAAIgGALQgEAGgFADQgFAEgGACQgGACgGAAIgIgBg");
	this.shape_29.setTransform(-8.2,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#383A38").s().p("AgSA0IALgcIgfhLIAQAAIAWA7IAXg7IAQAAIgqBng");
	this.shape_30.setTransform(-20.8,-9.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_31.setTransform(-26.7,-12.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#383A38").s().p("AgnA1IAAhnIAMAAIAAAMIABAAIAGgGIAGgEQADgCAEgBIAHgBIAJABIAIACIAHAEIAFAFQAHAJACAFQADAKAAAGIgBAIIgDAGQgCAIgGAFQgFAGgHADQgKADgGAAQgJgBgFgCIgGgFIgGgFIAAAlgAgKgkQgEACgEAEQgEADgCAFQgCAFAAAGQAAAFACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_32.setTransform(-33.2,-9.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#383A38").s().p("AAsAoIAAgqIgBgJIgDgIIgGgFQgDgCgFAAQgGAAgEACQgDACgCADIgDAIIgBAIIAAArIgNAAIAAgqIAAgJIgEgHQgCgEgDgCQgEgCgFAAQgGAAgDACQgEACgCADIgDAHIgBAJIAAArIgPAAIAAhNIAOAAIAAAJQAFgGAFgCQAFgDAHAAIAIABIAHACIAFAEQACADACADIAEgGIAHgEIAGgCIAIgBQAIAAAFACQAGADAEAEQAEAEADAGQABAGAAAIIAAAug");
	this.shape_33.setTransform(-45,-11);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#383A38").s().p("AgbA0IAAhnIA3AAIAAAOIgoAAIAAAfIAoAAIAAAMIgoAAIAAAgIAoAAIAAAOg");
	this.shape_34.setTransform(-55.3,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-81.5,-19.3,163,32), null);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._4();
	this.instance.parent = this;
	this.instance.setTransform(-40.8,-22.3,0.43,0.43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-40.8,-22.3,81.7,44.7), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgTA1IALgLIAIgMIAEgOQACgHAAgIQAAgIgCgIIgEgOQgDgGgGgGQgEgFgHgGIAAgSIAJAGIAIAHQAJALAEAGQAGANACAHQADAOAAAGQgBAPgCAGQgFAOgDAGQgIAMgEAFIgIAHIgJAGg");
	this.shape.setTransform(73.2,3.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_1.setTransform(65.4,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgHAoQgEgBgEgCQgIgFgEgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQADgFAGgIIAGgFIAGgEIAIgCIAHgBQAFAAALADQAGADAGAGQAFAFADAIQADAKAAAFIAAAGIg/AAQABAFADAEIAFAGQAEADADACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgDgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgEADgBAEQgDAEAAAFIAxAAIAAAAg");
	this.shape_2.setTransform(56.3,3.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_3.setTransform(46.8,1.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_4.setTransform(40.4,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgHAoIgJgCIgMgJIgGgGIgDgHIgDgHIAAgJIAAgHIADgIQACgFAHgIIAFgFIAHgEIAJgCIAHgBIAIABIAHACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgJgYQgGACgDAEQgEADgCAFQgBAGAAAEQAAAGABAFQACAEAEAEQADAEAGACQAFACAEAAQAGAAAEgCQAFgCAEgEQADgDADgFQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_5.setTransform(32.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgHAoIgHgCIgHgEIgGgFQgDgEgFgJIgDgIIAAgIQAAgFADgKIAIgNIAGgFIAHgEIAIgCIAGgBQAHAAAGACQAGACAFAEIAJAJQAEAFACAGIgQAAIgEgGIgFgFIgGgDIgHgBQgFAAgFADQgFACgDADIgFAJQgBAFAAAFQAAAFABAFIAFAJQADAEAFACQAFACAEAAIAHgBIAHgCIAFgFIAEgGIAQAAIgGALQgEAGgFADQgFAEgFACQgHACgHAAIgHgBg");
	this.shape_6.setTransform(23.8,3.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_7.setTransform(16.4,3.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgGA0IAAhNIANAAIAABNgAgGgiIAAgRIANAAIAAARg");
	this.shape_8.setTransform(11.8,1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_9.setTransform(5.1,1.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_10.setTransform(-5.4,3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_11.setTransform(-12.8,3.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKQgBgEgCgDQgCgEgEgCQgDgCgHAAQgDAAgFACQgEACgCAEIgEAHIgBAKIAAApIgPAAIAAhNIAPAAIAAAIQAEgFAFgCQAGgDAGAAIAIABIAIACIAHAFIAEAGQAEAEABAFIAAALIAAAtg");
	this.shape_12.setTransform(-25.9,3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgEgIIgCgHIgBgIQAAgFADgKQACgFAHgIIAGgFIAHgEIAHgCIAHgBQAFAAAKADQAIADAFAGQAFAFADAIQAEAKAAAFIAAAGIhAAAQABAFACAEIAGAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgEAFgFADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgDgDgFgCQgEgCgFAAQgDAAgFACQgEACgEADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_13.setTransform(-34.7,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#383A38").s().p("AANA0IgdgoIAaglIASAAIgcAkIAgApgAgfA0IAAhnIAPAAIAAA/IAAAogAgQAMg");
	this.shape_14.setTransform(-42.5,1.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_15.setTransform(-51.6,3.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_16.setTransform(-58.1,3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#383A38").s().p("AgGA0IgHgDIgHgEIgFgFIAAALIgPAAIAAhnIAPAAIAAAlIAFgGIAHgEIAHgCIAHgBIAIABIAHACQAFACAIAHQAHAIACAFQADAJAAAGIgBAIIgCAIQgFAJgEAEIgMAJIgIACIgIABIgHgBgAgKgMQgEACgEAEQgEADgCAEQgCAFAAAGQAAAFACAFQACAFAEAEQADAEAFACQAFACAFAAQAFAAAFgCQAFgCAEgEQADgEACgFQACgFAAgFQAAgFgCgGQgCgDgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_17.setTransform(-65.3,1.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#383A38").s().p("AAFA7QgFgFgFgHQgFgHgDgIQgEgIgBgIQgCgIAAgIQAAgHADgOQACgHAGgMQAEgHAIgKIAIgHIAJgGIAAASIgLALQgFAGgDAGIgEANQgCAIAAAIQAAAIACAHQACAIACAGQADAHAGAGQAEAFAHAGIAAASIgQgMg");
	this.shape_18.setTransform(-73.1,3.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBIAIgCQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_19.setTransform(75.5,-10.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#383A38").s().p("AgHA0IAAhAIgLAAIAAgNIALAAIAAgaIANAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_20.setTransform(70.6,-12.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_21.setTransform(66.8,-11);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgFgGIgEgHIgCgIIgBgIIABgIIACgHQADgFAHgIQADgEAKgFIAIgCIAHgBQAGAAAKADQAFACAIAHQAHAIACAFQACADABAEIABAIIgBAIIgCAHQgGAKgDADQgJAHgFACQgDACgFABIgIABIgHgBgAgKgYQgFACgDADQgEAEgCAFQgCAFAAAFQAAAFACAGQACAEAEAEQADAEAFACQAFACAFAAQAGAAAFgCQAFgCADgEQAEgEACgFQACgFAAgFQAAgFgCgFQgCgFgEgEQgDgDgFgCQgFgDgGAAQgFAAgFADg");
	this.shape_22.setTransform(59.5,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#383A38").s().p("AgoA1IAAhnIAOAAIAAAMIAAAAIAFgGIAHgEQAEgCAEgBIAHgBIAIABIAIACIAHAEIAFAFQAHAJACAFQADAKgBAGIAAAIIgCAGQgDAIgGAFQgFAGgHADQgKADgFAAQgKgBgFgCIgHgFIgFgFIAAAlgAgKgkQgFACgDAEQgDADgCAFQgCAFAAAGQAAAFACAFQACAEADAEQADAEAGACQAFACAEAAQAGAAAFgCQAEgCAEgEQAEgDABgEQACgFAAgGQAAgFgCgFQgCgFgDgEQgEgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_23.setTransform(50.2,-9.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#383A38").s().p("AgnA1IAAhnIAMAAIAAAMIABAAIAGgGIAGgEQADgCAEgBIAHgBIAJABIAIACIAHAEIAFAFQAHAJACAFQADAKAAAGIgBAIIgDAGQgCAIgGAFQgFAGgHADQgKADgGAAQgJgBgFgCIgGgFIgGgFIAAAlgAgKgkQgEACgEAEQgEADgCAFQgCAFAAAGQAAAFACAFQACAEAEAEQAEAEAFACQAEACAFAAQAGAAAEgCQAFgCAEgEQADgDACgEQACgFAAgGQAAgFgCgFQgCgFgEgEQgDgEgFgCQgFgDgFAAQgFAAgFADg");
	this.shape_24.setTransform(40.6,-9.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#383A38").s().p("AgMAmQgHgCgEgEIgFgGIgDgIQgDgGAAgKIAAgpIAQAAIAAApIAAAKQABAEACADQADAEADACQAEABAFAAQAFAAAEgCQAEgBADgEIADgIIABgJIAAgpIAOAAIAABNIgNAAIAAgJQgCADgDACIgFADQgGADgGAAQgGAAgFgCg");
	this.shape_25.setTransform(31.2,-10.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBQAEgCAEAAQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_26.setTransform(23.9,-10.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#383A38").s().p("AgIA0IgIgCIgHgEIgGgFQgDgDgFgKIgCgHIgBgJQAAgGADgJIAIgNIAGgFIAHgEIAIgCIAIgBQAHAAAHADIAGAEIAGAFIAAAAIAAgkIAPAAIAABnIgOAAIAAgLIAAAAIgGAFIgGAFIgIACIgHABgAgJgMQgFACgEAEQgDADgCAEQgCAGAAAFQAAAGACAFQACAEADAEQAEAEAFACQAFACAEAAQAGAAAFgCQAFgCADgEQAEgDACgFQACgFAAgGQAAgGgCgFQgCgEgDgEQgEgDgFgCQgFgDgGAAQgEAAgFADg");
	this.shape_27.setTransform(11.9,-12.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#383A38").s().p("AAUAoIAAgpIgBgKIgDgHQgCgEgEgCQgEgCgFAAQgFAAgDACQgFACgCAEIgDAHIgBAKIAAApIgPAAIAAhNIANAAIAAAIQAFgFAGgCQAFgDAGAAIAJABIAHACIAGAFIAFAGQADAEABAFIACALIAAAtg");
	this.shape_28.setTransform(2.9,-11);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#383A38").s().p("AgIAoIgIgCIgNgJIgFgGIgDgHIgCgHIgBgJIABgHIACgIQACgFAGgIIAHgFIAGgEIAIgCIAIgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgEACgEAEQgEADgBAFQgDAGAAAEQAAAGADAFQABAEAEAEQAEAEAEACQAFACAFAAQAFAAAFgCQAGgCADgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgEgEQgEgDgEgCQgFgDgGAAQgFAAgFADg");
	this.shape_29.setTransform(-6.5,-10.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#383A38").s().p("AgIAnIgIgEIgGgGIgDgHIgBgJIAPAAQAAAHADADIAEADIAFABQAFAAADgCQADgDAAgFQAAgIgRgGIgGgDQgEAAgCgDQgDgCgBgEQgBgEAAgFQAAgEACgFIAFgHQADgDAFgBQAEgCAEAAQAFAAAEACQAEABAEADQADADACAFQACAEAAAFIgPAAQAAgFgDgCQgDgDgEAAQgDAAgCADQgDACAAAEQAAAEAEADIAHADIAJADQAFACADADIAFAGQACAFAAAFQAAAGgCAEQgCAFgEADQgDADgFACQgFACgGAAQgDAAgFgCg");
	this.shape_30.setTransform(-18.2,-10.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#383A38").s().p("AgSA0IALgcIgfhLIAQAAIAWA7IAXg7IAQAAIgqBng");
	this.shape_31.setTransform(-25.1,-9.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAHgFIAHgEIAIgCIAHgBIAHABIAIACIAGAEIAFAGIAAgLIAPAAIAABNIgPAAIAAgMIgEAGIgHAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAFAAAGgCQAFgCADgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgEgDgFgCQgFgDgGAAQgEAAgGADg");
	this.shape_32.setTransform(-34.2,-10.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_33.setTransform(-40.7,-11);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_34.setTransform(-45.2,-12.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgFgFgDgIIgDgHIgBgIQAAgFAEgKQACgFAGgIIAFgFIAIgEIAHgCIAHgBQAGAAAJADQAIADAFAGQAFAFAEAIQACAKAAAFIAAAGIg/AAQABAFACAEIAGAGQAEADAEACIAIABIAGAAIAGgDIAGgEIADgGIAPAAQgCAGgEAFQgEAFgFADQgEAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgDgEQgCgEgDgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgEADgCAEQgCAEAAAFIAxAAIAAAAg");
	this.shape_35.setTransform(-55.7,-10.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#383A38").s().p("AgSA0IALgcIgfhLIAQAAIAWA7IAXg7IAQAAIgqBng");
	this.shape_36.setTransform(-64.2,-9.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#383A38").s().p("AgqA0IAAhnIAhAAIAMABIALADIAKAGQAFAEAEAFQAGAKACAGQACALAAAFQgBANgCAHIgEAJIgGAIIgJAHQgEADgFABQgFACgGABIgKABgAgbAmIASAAQAJAAAGgDQAHgCAFgFQAFgFADgHQABgEABgMQAAgEgDgLQgCgFgEgEQgDgFgFgCQgEgDgFgCQgFgBgGAAIgSAAg");
	this.shape_37.setTransform(-73.2,-12.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-82.5,-19.3,165.1,32), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Picture2();
	this.instance.parent = this;
	this.instance.setTransform(-46.4,-24.1,0.39,0.39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-46.4,-24.1,92.8,48.3), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgSA0IALgcIgfhLIAQAAIAWA7IAXg7IAQAAIgqBng");
	this.shape.setTransform(19.5,-0.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgQAoIAAhNIAOAAIAAAHQACgFAGgCQAEgCAHAAIAAAPQgGAAgFADIgEADIgCAFQgBAFAAAGIAAAqg");
	this.shape_1.setTransform(13.6,-2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgHAoQgEgBgDgCQgKgFgDgEQgGgFgDgIIgCgHIAAgIQAAgFACgKQACgFAHgIIAGgFIAHgEIAHgCIAHgBQAFAAAKADQAHADAGAGQAFAFADAIQAEAKAAAFIAAAGIhAAAQABAFADAEIAFAGQADADAEACIAIABIAHAAIAHgDIAEgEIAFgGIAOAAQgCAGgDAFQgFAFgEADQgFAEgGACQgGACgGAAIgHgBgAAZgEQAAgFgCgEQgCgEgEgDQgEgDgEgCQgEgCgFAAQgEAAgEACQgFACgDADQgDADgCAEQgCAEgBAFIAxAAIAAAAg");
	this.shape_2.setTransform(6.6,-2.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_3.setTransform(0.2,-3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgIA0IAAhAIgKAAIAAgNIAKAAIAAgaIAOAAIAAAaIANAAIAAANIgNAAIAABAg");
	this.shape_4.setTransform(-3.7,-3.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgHAoIgIgCIgOgJIgEgGIgEgHIgDgHIAAgJIAAgHIADgIQACgFAGgIIAGgFIAIgEIAIgCIAHgBIAHABIAIACIAGAEIAGAGIAAgLIAOAAIAABNIgOAAIAAgMIgGAGIgGAEIgHADIgIABgAgKgYQgFACgDAEQgDADgCAFQgCAGAAAEQAAAGACAFQACAEADAEQADAEAFACQAGACAEAAQAGAAAFgCQAEgCAEgEQADgDACgFQADgFAAgGQAAgFgCgFQgCgFgDgEQgFgDgEgCQgFgDgGAAQgEAAgGADg");
	this.shape_5.setTransform(-10.7,-2.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AggA0IAAhnIAbAAIAJABIAIADIAHAFQAEAEABAEQACAGAAAGQAAAGgCAFQgCAEgFAEIAHAEIAFAGIADAHIABAIQAAAGgDAGQgCAFgDADQgEAEgEACIgJADIgJABgAgRAmIARAAIAGgBIAGgDQADgCABgDQACgDAAgEQAAgGgEgFQgDgDgFgCIgIgBIgPAAgAgRgIIANAAIAFgBQAEAAACgCIADgFIABgGIgBgHQgBgDgDgCIgFgCIgGgBIgMAAg");
	this.shape_6.setTransform(-19.1,-3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-25.5,-10.6,51.1,18), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383A38").s().p("AgkBIIAAiKIAmAAIAAAPIAAAAQAGgLAIgEQAJgFAMAAIAAAqQgRABgGAEQgFADgCAFQgCAFAAAHIAABMg");
	this.shape.setTransform(81.5,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383A38").s().p("AgOBIIgPgEIgMgHIgLgIIgJgLIgHgNIgEgOQgCgHAAgIQAAgHACgIIAEgOIAHgMIAJgLIALgJIAMgGIAPgFIAOgBQALAAATAGIAMAGIALAJIAJALIAHAMIAEAOQACAIAAAHQAAAIgCAHIgEAOIgHANIgJALIgLAIIgMAHQgTAGgLAAQgHAAgHgCgAgMgfQgGACgFAFQgEAFgDAGQgCAHAAAGQAAAHACAGQADAGAEAFQAFAFAGADQAGADAGAAQAHAAAGgDQAGgDAFgFQAEgFADgGQACgGAAgHQAAgGgCgHQgDgGgEgFQgFgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_1.setTransform(67.9,-6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#383A38").s().p("AgUBcIAAhqIgUAAIAAgfIAUAAIAAguIApAAIAAAuIAUAAIAAAfIgUAAIAABqg");
	this.shape_2.setTransform(55.2,-9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383A38").s().p("AgNBJIgPgFIgMgHIgLgJIgJgLIgHgMIgEgOIgCgPQAAgKAGgSQAEgJAMgOIAKgJIAMgHIAPgFIAOgBQAMAAANAEQAMAEAKAIQAKAHAHALQAGALADAOIgqAAQgFgLgHgFQgIgEgLAAQgHAAgGADQgFACgEAGQgEAEgDAGQgCAHAAAGQAAAHACAGQACAHAFAFQAFAFAFACQAHADAGAAQALAAAHgEQAIgFAEgJIArAAQgEANgGAKQgHALgKAHQgJAHgNAFQgMAEgMAAIgOgBg");
	this.shape_3.setTransform(42.8,-6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383A38").s().p("AgNBJIgOgFQgQgJgHgHQgHgGgJgRIgFgOIgBgOQAAgKAGgSQADgJAMgPIALgJIAMgHIAOgFIAOgBQAIAAAHABQAIACAGADIANAHIAKAJQAMAQAEAIQAFATAAAKIgBALIhnAAQABAGADAFQACAEAFAEQAEAEAGACQAFABAFAAQAIAAAHgEQAGgDAEgGIArAAQgEAKgHAJQgHAJgIAGQgJAHgKADQgLAEgMAAIgNgBgAAggOQgBgFgEgFIgHgIQgJgGgLAAQgLAAgIAGIgIAIQgDAFAAAFIA+AAIAAAAg");
	this.shape_4.setTransform(26.5,-6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383A38").s().p("AgTBHQgKgDgIgGQgHgFgGgJQgEgJgBgLIAoAAQABAGAFAEQAEADAFAAQAGAAAEgDQAFgDAAgFQAAgKgSgGIgRgGIgNgGIgLgGQgEgFgDgFQgDgGAAgIQAAgKAFgJQAEgIAIgGQAIgGAKgDQAJgDAKAAQAJAAAJACQAKADAHAGQAIAFADAIQAGAJAAALIgpAAQAAgGgDgDQgEgCgEAAQgFAAgEACQgDADAAAEQAAAEADADIAIAFIAWAHIAOAFQAGAEAEADQAGAFACAGQADAHAAAJQAAALgEAJQgFAJgIAGQgIAGgKADQgLADgKAAQgKAAgJgDg");
	this.shape_5.setTransform(12.2,-6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#383A38").s().p("AgOBJIgNgFQgQgJgIgHQgGgGgJgRIgFgOIgBgOQAAgKAGgSQADgJAMgPIALgJIAMgHIAOgFIAOgBQAIAAAHABQAHACAHADIANAHIALAJQALAQAEAIQAFATAAAKIgBALIhnAAQABAGADAFQADAEAEAEQAFAEAFACQAGABAEAAQAJAAAGgEQAGgDAFgGIArAAQgGAKgGAJQgHAJgIAGQgJAHgKADQgLAEgMAAIgOgBgAAggOQgCgFgDgFIgHgIQgJgGgLAAQgKAAgJAGIgIAIQgCAFgBAFIA+AAIAAAAg");
	this.shape_6.setTransform(-9.8,-6.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#383A38").s().p("AgUBcIAAi3IApAAIAAC3g");
	this.shape_7.setTransform(-21.5,-9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383A38").s().p("AgUBcIAAiJIApAAIAACJgAgUg8IAAgfIApAAIAAAfg");
	this.shape_8.setTransform(-28.6,-9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383A38").s().p("AgUBcIAAhqIgUAAIAAgfIAUAAIAAguIApAAIAAAuIAUAAIAAAfIgUAAIAABqg");
	this.shape_9.setTransform(-36.6,-9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#383A38").s().p("AAcBFIgcgrIgbArIgzAAIA2hJIgvhAIAxAAIAWAkIAWgkIAyAAIgvBAIA1BJg");
	this.shape_10.setTransform(-48.8,-6.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383A38").s().p("AgNBJIgOgFQgRgJgGgHQgHgGgJgRIgEgOQgCgHAAgHQAAgKAFgSQAEgJAMgPIALgJIAMgHIAOgFIAOgBQAHAAAIABQAHACAHADIAMAHIALAJQAMAQADAIQAGATAAAKIgBALIhnAAQABAGADAFQACAEAFAEQAEAEAGACQAFABAGAAQAHAAAHgEQAFgDAFgGIArAAQgEAKgHAJQgHAJgJAGQgIAHgLADQgKAEgLAAIgOgBgAAfgOQAAgFgDgFIgIgIQgIgGgMAAQgLAAgIAGIgIAIQgDAFgBAFIA+AAIAAAAg");
	this.shape_11.setTransform(-64.8,-6.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#383A38").s().p("AgWBcIAAiOIglAAIAAgpIB3AAIAAApIgkAAIAACOg");
	this.shape_12.setTransform(-79,-9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-87.4,-20.3,174.8,29), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EE1A30").s().p("AggA7IAAh1IBBAAIAAAaIgkAAIAAATIAjAAIAAAZIgjAAIAAAVIAkAAIAAAag");
	this.shape.setTransform(75.2,-4.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EE1A30").s().p("AgOA7IAAhbIgXAAIAAgaIBLAAIAAAaIgXAAIAABbg");
	this.shape_1.setTransform(66.9,-4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE1A30").s().p("AgPA7QgIgCgFgFQgHgFgCgHIgDgHIgBgJIAAgEIAeAAQAAAGADAFIAEADQACACADAAQAEAAAEgDQADgDAAgFQAAgFgEgEIgIgFIgKgEIgLgGQgGgCgEgDQgEgEgCgFQgCgGAAgHQAAgFAEgJQADgHAGgFQAGgEAHgCQAHgDAHAAQAGAAAMAEIAIAEQAEADACADQAEAFACAGQACAEAAAIIgeAAQgBgGgCgCQgDgDgEgBQgEABgDACQgDADAAAEIABAFQACADAIAFIAMAFIAMAGIAIAGQAEAEACAFQACAFAAAHQAAAJgDAHQgDAHgGAEQgGAFgHACQgHACgJAAQgJAAgHgCg");
	this.shape_2.setTransform(58.4,-4.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EE1A30").s().p("AAaA7IgFgRIgpAAIgGARIggAAIAvh1IAXAAIAvB1gAANASIgNgnIAAAAIgLAnIAYAAg");
	this.shape_3.setTransform(47.7,-4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EE1A30").s().p("AASA7IgShLIAAAAIgRBLIgbAAIgfh1IAfAAIAQBMIAAAAIAShMIAWAAIARBMIAAAAIAQhMIAfAAIgfB1g");
	this.shape_4.setTransform(33.8,-4.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EE1A30").s().p("AgPA7QgIgCgGgFQgFgFgEgHIgCgHIgBgJIAAgEIAeAAQAAAGADAFIAEADQACACACAAQAFAAADgDQAEgDAAgFQAAgFgEgEIgIgFIgLgEIgKgGQgGgCgDgDQgEgEgDgFQgCgGAAgHQAAgFADgJQAEgHAGgFQAGgEAHgCQAHgDAHAAQAGAAALAEIAIAEQAEADADADQAFAFACAGQABAEAAAIIgeAAQgBgGgCgCQgCgDgGgBQgDABgDACQgDADAAAEIABAFQACADAIAFIAMAFIALAGIAJAGQAEAEACAFQACAFAAAHQAAAJgDAHQgDAHgGAEQgGAFgHACQgIACgJAAQgHAAgIgCg");
	this.shape_5.setTransform(16.6,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EE1A30").s().p("AgRA6IgIgFIgHgFIgHgIQgDgFAAgEQgCgGAAgOIAAhGIAeAAIAABGQAAALACAEQACAEADACQADABAEAAQAFAAAEgBQACgCACgEQACgDAAgMIAAhGIAfAAIAABGQgBANgCAHQgBAEgDAFIgGAIIgGAFIgIAFQgNACgFAAQgMAAgGgCg");
	this.shape_6.setTransform(6.4,-4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EE1A30").s().p("AgMA8QgGgBgFgDIgLgEIgJgIIgIgJIgGgKQgCgGgBgFQgCgHABgGIAAgLIAEgNQACgGAGgIQAEgFAGgFQAFgFAHgDQAHgCAGgCQAIgCAGAAIAMABIANAEIAKAFIAKAIIAHAJQADAFACAFIAFAMIABAMIgBANIgFALQgCAGgDAEIgIAKQgEAEgFADQgFAEgFABIgNAEQgFABgHAAQgFAAgHgBgAgMgfQgGACgEAFQgFAFgCAHQgCAGAAAGQAAAHACAGQACAHAFAEQAEAFAGADQAGACAHAAQAGAAAGgCQAGgDAEgFQAEgFADgGQACgGAAgHQAAgGgCgGQgDgHgEgFQgEgFgGgCQgGgDgHAAQgGAAgGADg");
	this.shape_7.setTransform(-6,-4.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EE1A30").s().p("AgyA7IAAh1IAnAAIAOABIAOADQAHACAGAFQAGAEAEAHIAFAIIAEAJQACAJAAAKIgBANIgDAMIgFALIgHAIIgIAHQgFADgGABIgMADIgNABgAgUAhIANAAQAHAAAFgDQAGgCADgEQAEgFABgGQACgFAAgIQAAgGgCgGQgBgGgEgEQgDgFgGgCQgFgDgHAAIgNAAg");
	this.shape_8.setTransform(-18.6,-4.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EE1A30").s().p("AALA7IgagmIgBAAIAAAmIgdAAIAAh1IAmAAQALAAAHABQAFABAEACQAFABADADIAHAHIAEAIIADAJIABAJIgCANIgGAKQgEAFgFADQgGAEgGABIAgAogAgQAAIALAAIAHAAIAGgDQADgCACgDIABgIQAAgEgCgDIgEgFQgCgCgEgBIgHgBIgLAAg");
	this.shape_9.setTransform(-29.4,-4.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EE1A30").s().p("AAaA7IgFgRIgpAAIgGARIggAAIAvh1IAXAAIAvB1gAANASIgNgnIAAAAIgLAnIAYAAg");
	this.shape_10.setTransform(-41.1,-4.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EE1A30").s().p("AgkA7IAAgUIAnhHIgnAAIAAgaIBKAAIAAAYIgmBDIAmAAIAAAag");
	this.shape_11.setTransform(-51.1,-4.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EE1A30").s().p("AAaA7IgFgRIgpAAIgGARIggAAIAvh1IAXAAIAvB1gAANASIgNgnIAAAAIgLAnIAYAAg");
	this.shape_12.setTransform(-61.1,-4.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EE1A30").s().p("AATA7IAAgvIglAAIAAAvIgfAAIAAh1IAfAAIAAAsIAlAAIAAgsIAfAAIAAB1g");
	this.shape_13.setTransform(-73.2,-4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-81.3,-12.3,162.7,20), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhDMIBSiEIAAA1IB2gBQAYgBASgKQAUgJANgMQAOgMAGgIIAJgNQgGASgFAJIgmBIIgYAyQgIARgMASQgMASgMAJQgMALgMAAIhQAAIAAA4gAjKERQgKgJgJgPIgQgcIhOiPQAKAPAWAKQAcAMAggBIDWgCIACCpIiwACQgJAAgKgKgAB2g0ICKhUIA+ByIAQAcQADAFAAAKQAAAPgFAOIgJANQgJALgLAKQgPANgSAIQgTAKgXABgAkYBZQgagPgHgSQgEgLAAgFQgCgHAAgLQAAgQAEgOQAEgMAGgMQAHgLAEgEIAGgGIgwgdICdgFIBICIIgtgaIgbAeIgIALQgEAIAAAHQAAAKAIAGQAJAHADABIgwAAQgjAAgagOgAjzihIBWiOQAFgIAJgFQAJgEARgDIASABQAMACAQAGQASAHAQANQARAOAMAWIAIANIhqCggAAKiNIAtgaIg5hhQgMgXgSgOQgRgPgQgGQgQgGgMgCIgQgBQAOgCAXgBIBXgBQBBgBAfAEQAeADAJAOIAoBFIAwgcIhCCTg");
	this.shape.setTransform(0.6,11.9,0.757,0.757,0,0,0,-0.3,-0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.102)").s().p("AgNCxQgGAAgFgFQgFgFgBgHIgYkaIgVAAIAAgQQAAgFAEgDQADgDAFAAIBbAAQgBgLAOgIQAOgIAUAAIAAAAIAAFhg");
	this.shape_1.setTransform(197.3,-21.3,3.442,3.441,0,0,0,64.8,-6.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EE1A30").s().p("AhXCWQgHAAgFgFQgFgFAAgHIgZkaIEDAAIgZEaQAAAHgFAFQgFAFgHAAg");
	this.shape_2.setTransform(72.3,69.5,3.442,3.441,0,0,0,21,17.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BE0E20").s().p("AiVAbIAAgQQAAgEADgDQADgEAFAAIBcAAQAAgKAOgIQAOgIASAAQATAAAOAIQAOAIAAAKIBcAAQAFAAADAEQADADAAAEIAAAQg");
	this.shape_3.setTransform(132.7,27.2,3.442,3.441,0,0,0,38.6,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFBBBB").s().p("AAhDMIBSiEIAAA1IB2gBQAYgBASgKQAUgJANgMQAOgMAGgIIAJgNQgGASgFAJIgmBIIgYAyQgIARgMASQgMASgMAJQgMALgMAAIhQAAIAAA4gAjKERQgKgJgJgPIgQgcIhOiPQAKAPAWAKQAcAMAggBIDWgCIACCpIiwACQgJAAgKgKgAB2g0ICKhUIA+ByIAQAcQADAFAAAKQAAAPgFAOIgJANQgJALgLAKQgPANgSAIQgTAKgXABgAkYBZQgagPgHgSQgEgLAAgFQgCgHAAgLQAAgQAEgOQAEgMAGgMQAHgLAEgEIAGgGIgwgdICdgFIBICIIgtgaIgbAeIgIALQgEAIAAAHQAAAKAIAGQAJAHADABIgwAAQgjAAgagOgAjzihIBWiOQAFgIAJgFQAJgEARgDIASABQAMACAQAGQASAHAQANQARAOAMAWIAIANIhqCggAAKiNIAtgaIg5hhQgMgXgSgOQgRgPgQgGQgQgGgMgCIgQgBQAOgCAXgBIBXgBQBBgBAfAEQAeADAJAOIAoBFIAwgcIhCCTg");
	this.shape_4.setTransform(-57.5,23.3,0.588,0.587,0,0,0,-2.5,-1.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.149)").s().p("AgNCxQgGAAgFgFQgFgFgBgHIgYkaIgVAAIAAgQQAAgFAEgDQADgDAFAAIBbAAQgBgLAOgIQAOgIAUAAIAAAAIAAFhg");
	this.shape_5.setTransform(99.4,-3,2.731,2.73,0,0,0,64.4,-5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0333A").s().p("AhXCWQgHAAgFgFQgFgFAAgHIgZkaIEDAAIgZEaQAAAHgFAFQgFAFgHAAg");
	this.shape_6.setTransform(-0.1,68.6,2.731,2.73,0,0,0,20.5,17.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D2333A").s().p("AiVAbIAAgQQAAgEADgDQADgEAFAAIBcAAQAAgKAOgIQAOgIASAAQATAAAOAIQAOAIAAAKIBcAAQAFAAADAEQADADAAAEIAAAQg");
	this.shape_7.setTransform(49.3,35.2,2.731,2.73,0,0,0,38.6,23.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFBBBB").s().p("AAhDMIBSiEIAAA1IB2gBQAYgBASgKQAUgJANgMQAOgMAGgIIAJgNQgGASgFAJIgmBIIgYAyQgIARgMASQgMASgMAJQgMALgMAAIhQAAIAAA4gAjKERQgKgJgJgPIgQgcIhOiPQAKAPAWAKQAcAMAggBIDWgCIACCpIiwACQgJAAgKgKgAB2g0ICKhUIA+ByIAQAcQADAFAAAKQAAAPgFAOIgJANQgJALgLAKQgPANgSAIQgTAKgXABgAkYBZQgagPgHgSQgEgLAAgFQgCgHAAgLQAAgQAEgOQAEgMAGgMQAHgLAEgEIAGgGIgwgdICdgFIBICIIgtgaIgbAeIgIALQgEAIAAAHQAAAKAIAGQAJAHADABIgwAAQgjAAgagOgAjzihIBWiOQAFgIAJgFQAJgEARgDIASABQAMACAQAGQASAHAQANQARAOAMAWIAIANIhqCggAAKiNIAtgaIg5hhQgMgXgSgOQgRgPgQgGQgQgGgMgCIgQgBQAOgCAXgBIBXgBQBBgBAfAEQAeADAJAOIAoBFIAwgcIhCCTg");
	this.shape_8.setTransform(54.9,23.3,0.588,0.587,0,0,0,-2.5,-1.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.149)").s().p("AgNCxQgGAAgFgFQgFgFgBgHIgYkaIgVAAIAAgQQAAgFAEgDQADgDAFAAIBbAAQgBgLAOgIQAOgIAUAAIAAAAIAAFhg");
	this.shape_9.setTransform(211.8,-3,2.731,2.73,0,0,0,64.4,-5.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FB2030").s().p("AhXCWQgHAAgFgFQgFgFAAgHIgZkaIEDAAIgZEaQAAAHgFAFQgFAFgHAAg");
	this.shape_10.setTransform(112.3,68.6,2.731,2.73,0,0,0,20.5,17.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D92030").s().p("AiVAbIAAgQQAAgEADgDQADgEAFAAIBcAAQAAgKAOgIQAOgIASAAQATAAAOAIQAOAIAAAKIBcAAQAFAAADAEQADADAAAEIAAAQg");
	this.shape_11.setTransform(161.7,35.2,2.731,2.73,0,0,0,38.6,23.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-97.2,-60.9,194.4,122), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCFAF5").s().p("A0vUxQonomABsKQgBsKInomQImonMKABQMKgBImInQImImgBMKQABMKomImQomImsKgBQsKABomomg");
	this.shape.setTransform(-0.1,-0.1,1,1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-187.8,-187.8,375.7,375.7), null);


(lib.WasSlide_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{gogo01:210});

	// timeline functions:
	this.frame_1 = function() {
		playSound("W01");
	}
	this.frame_865 = function() {
		/* stop();*/
	}
	this.frame_871 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(864).call(this.frame_865).wait(6).call(this.frame_871).wait(1));

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAeBKIg4hZIAAAAIABBZIgkAAIAAiTIAgAAIA4BcIABgBIgChbIAkAAIAACTg");
	this.shape.setTransform(292.3,41.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgPBMQgHgCgHgDQgHgDgGgEQgHgDgEgGIgKgLQgFgGgCgGIgGgPIgBgPQAAgIABgHQACgJADgHQADgHAGgKQAGgHAHgFQAHgHAIgDQAIgEAJgCQAJgCAIAAIAQACQAIABAGADIAOAHQAGAEAFAFIAKALIAHAOQADAGABAIQACAIAAAHQAAAIgCAIQgBAHgDAIIgHAMIgKAMQgFAFgGAEIgOAHIgOAFQgIABgIAAQgHAAgIgBgAgQgnQgGADgGAHQgFAFgDAIQgDAIAAAIQAAAJADAHQADAJAFAGQAGAFAHAEQAHADAIAAQAJAAAIgDQAHgEAFgFQAGgGACgJQADgHAAgJQAAgIgDgIQgCgHgGgGQgFgGgHgEQgIgEgJAAQgHAAgJAEg");
	this.shape_1.setTransform(276.3,41.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgSBKIAAiTIAlAAIAACTg");
	this.shape_2.setTransform(264.5,41.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgSBKIAAhyIgdAAIAAghIBfAAIAAAhIgdAAIAAByg");
	this.shape_3.setTransform(256.4,41.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhBKIgIgWIgyAAIgHAWIgpAAIA7iTIAdAAIA7CTgAAPAXIgPgyIAAAAIgOAyIAdAAg");
	this.shape_4.setTransform(243.8,41.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAOBKIgigwIAAAAIAAAwIgkAAIAAiTIAuAAQAPAAAJABIALAEQAGACAEADQAFAEADAFIAGAJIADALIABAMQABAJgDAIQgDAGgEAGQgFAHgGAEQgIAEgJACIApAygAgUAAIANAAQAGAAAEAAQAEgBADgCQAEgDACgEQABgFAAgFQAAgFgBgEQgDgEgDgDIgIgDIgIgBIgOAAg");
	this.shape_5.setTransform(230.2,41.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIAsAAIAAAhIgsAAIAAAZIAtAAIAAAhg");
	this.shape_6.setTransform(218.1,41.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAeBKIg4hZIAAAAIABBZIgkAAIAAiTIAgAAIA4BcIABgBIgChbIAkAAIAACTg");
	this.shape_7.setTransform(205,41.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIArAAIAAAhIgrAAIAAAZIAtAAIAAAhg");
	this.shape_8.setTransform(192.4,41.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgPBMQgIgCgHgDIgNgHIgMgKQgFgFgEgGQgFgGgDgHQgDgHgBgHIgCgQQAAgIACgIQABgHAEgHIAHgOIAKgLQAFgFAGgEQAHgDAHgDQAHgDAIgBQAHgCAHAAQAMAAAMAEQAMAEAKAGQAHAFALAMQAIAOACAIIgqAAIgGgIIgIgHIgJgDIgJgCQgIAAgIAEQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAJADAHQADAJAFAGQAFAGAIAEQAHADAJAAQAGAAAFgCQAGgBAFgDQAFgDADgEQADgFACgGIgrAAIAAgdIBXAAIAAAHQAAAIgCAIQgBAIgDAHQgDAIgEAFQgEAHgGAFIgLAKIgOAHQgHADgIACQgIABgIAAIgPgBg");
	this.shape_9.setTransform(178.4,41.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIArAAIAAAhIgrAAIAAAZIAtAAIAAAhg");
	this.shape_10.setTransform(158.6,41.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSBKIAAhyIgdAAIAAghIBfAAIAAAhIgdAAIAAByg");
	this.shape_11.setTransform(148.2,41.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgHgGQgIgGgDgIIgDgKIgCgLIAAgFIAmAAQAAAIADAGQACADAEABQADACACAAQAHAAADgEQAFgEAAgGQAAgGgFgEIgKgGIgNgGIgOgGQgHgEgEgEQgFgGgEgGQgCgHAAgIQgBgHAFgLQAEgJAIgGQAIgFAIgDQAKgDAIAAQAIAAAPAEIAJAGIAJAHQAFAHACAHQACAGAAAJIglAAQgBgHgDgDQgDgEgHAAQgEAAgEADQgDADAAAGIAAAFQADAFALAFIAPAHIAOAHIALAIQAEAFADAGQADAHgBAJQAAALgDAIQgFAJgHAGQgGAGgJACQgKADgLAAQgLAAgJgDg");
	this.shape_12.setTransform(137.5,41.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAhBKIgIgWIgyAAIgHAWIgpAAIA7iTIAdAAIA7CTgAAPAXIgOgyIgBAAIgOAyIAdAAg");
	this.shape_13.setTransform(124.2,41.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAXBKIgXhfIgVBfIgiAAIgniTIAnAAIATBfIABAAIAWhfIAcAAIAVBgIAAAAIAUhgIAnAAIgoCTg");
	this.shape_14.setTransform(106.8,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(872));

	// Battery
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(850.1,492.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(838).to({_off:false},0).to({x:822.8,alpha:1},9).wait(25));

	// Picture2.png
	this.instance_1 = new lib.Symbol6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(501.1,491.1,0.084,0.084);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(831).to({_off:false},0).to({scaleX:1,scaleY:1,x:733.5,y:492.3,alpha:1},16).wait(25));

	// Dye trays and supports  (broken or discarded)
	this.instance_2 = new lib.Symbol7();
	this.instance_2.parent = this;
	this.instance_2.setTransform(874.1,420);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(757).to({_off:false},0).to({x:846.8,alpha:1},8).wait(107));

	// 4.png
	this.instance_3 = new lib.Symbol8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(498.7,485.6,0.084,0.084);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(749).to({_off:false},0).to({scaleX:1,scaleY:1,x:704,y:426.5,alpha:1},16).wait(107));

	// Empty containers  (Hazardous chemicals)
	this.instance_4 = new lib.Symbol9();
	this.instance_4.parent = this;
	this.instance_4.setTransform(826.4,353.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(690).to({_off:false},0).to({x:799.1,alpha:1},9).wait(173));

	// chemical_drums2.png
	this.instance_5 = new lib.Symbol10();
	this.instance_5.parent = this;
	this.instance_5.setTransform(495.9,479.6,0.084,0.084);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(683).to({_off:false},0).to({scaleX:1,scaleY:1,x:670.5,y:354.6,alpha:1},16).wait(173));

	// Activated carbon  waste
	this.instance_6 = new lib.Symbol11();
	this.instance_6.parent = this;
	this.instance_6.setTransform(698.9,264.2);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(643).to({_off:false},0).to({x:671.6,alpha:1},9).wait(220));

	// b4.png
	this.instance_7 = new lib.Symbol12();
	this.instance_7.parent = this;
	this.instance_7.setTransform(488.7,474.9,0.084,0.084);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(636).to({_off:false},0).to({scaleX:1,scaleY:1,x:584.5,y:298.8,alpha:1},16).wait(220));

	// Used oils and  lubricants
	this.instance_8 = new lib.Symbol13();
	this.instance_8.parent = this;
	this.instance_8.setTransform(477,191.8);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(594).to({_off:false},0).to({y:211.3,alpha:1},9).wait(269));

	// 5.png
	this.instance_9 = new lib.Symbol14();
	this.instance_9.parent = this;
	this.instance_9.setTransform(479.7,472.8,0.084,0.084);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(587).to({_off:false},0).to({scaleX:1,scaleY:1,x:477.2,y:273.9,alpha:1},16).wait(269));

	// Left over/ expired  chemical 
	this.instance_10 = new lib.Symbol15();
	this.instance_10.parent = this;
	this.instance_10.setTransform(273,255.1);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(537).to({_off:false},0).to({x:300.3,alpha:1},9).wait(326));

	// phi2.png
	this.instance_11 = new lib.Symbol16();
	this.instance_11.parent = this;
	this.instance_11.setTransform(472.5,475.4,0.084,0.084);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(530).to({_off:false},0).to({scaleX:1,scaleY:1,x:390.6,y:305.1,alpha:1},16).wait(326));

	// Cartridges
	this.instance_12 = new lib.Symbol17();
	this.instance_12.parent = this;
	this.instance_12.setTransform(183,328.6);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(509).to({_off:false},0).to({x:210.3,alpha:1},8).wait(355));

	// Picture4.png
	this.instance_13 = new lib.Symbol18();
	this.instance_13.parent = this;
	this.instance_13.setTransform(465,478.1,0.084,0.084);
	this.instance_13.alpha = 0;
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(501).to({_off:false},0).to({scaleX:1,scaleY:1,x:301.8,y:336.7,alpha:1},16).wait(355));

	// Contaminated filters
	this.instance_14 = new lib.Symbol19();
	this.instance_14.parent = this;
	this.instance_14.setTransform(111.4,405.7);
	this.instance_14.alpha = 0;
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(455).to({_off:false},0).to({x:138.7,alpha:1},9).wait(408));

	// Picture3.png
	this.instance_15 = new lib.Symbol20();
	this.instance_15.parent = this;
	this.instance_15.setTransform(461.7,483.9,0.084,0.084);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(448).to({_off:false},0).to({scaleX:1,scaleY:1,x:261.9,y:406.7,alpha:1},16).wait(408));

	// Chemical  contaminated  packaging
	this.instance_16 = new lib.Symbol21();
	this.instance_16.parent = this;
	this.instance_16.setTransform(91.8,481.1);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(407).to({_off:false},0).to({x:119.1,alpha:1},9).wait(456));

	// 6.png
	this.instance_17 = new lib.Symbol22();
	this.instance_17.parent = this;
	this.instance_17.setTransform(458.5,490.9,0.084,0.084);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(400).to({_off:false},0).to({scaleX:1,scaleY:1,x:223.4,y:489.9,alpha:1},16).wait(456));

	// Layer 7
	this.instance_18 = new lib.Symbol4();
	this.instance_18.parent = this;
	this.instance_18.setTransform(481.2,138.7);
	this.instance_18.alpha = 0;
	this.instance_18._off = true;
	this.instance_18.filters = [new cjs.BlurFilter(40, 5, 1)];
	this.instance_18.cache(-89,-22,179,33);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(55).to({_off:false},0).to({alpha:1},10).wait(807));

	// Layer 6
	this.instance_19 = new lib.Symbol3();
	this.instance_19.parent = this;
	this.instance_19.setTransform(481.2,542.2);
	this.instance_19.alpha = 0;
	this.instance_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(36).to({_off:false},0).to({y:561.7,alpha:1},11).wait(825));

	// Layer 5
	this.instance_20 = new lib.Symbol2();
	this.instance_20.parent = this;
	this.instance_20.setTransform(539.3,476.3,1,1,0,0,0,57.4,4.2);
	this.instance_20.alpha = 0;
	this.instance_20._off = true;
	this.instance_20.filters = [new cjs.BlurFilter(40, 5, 1)];
	this.instance_20.cache(-99,-63,198,126);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(23).to({_off:false},0).to({alpha:1},10).wait(839));

	// Symbol 8
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#6F4C24").s().p("AgMCaIAJi3Igug/IAvAzIAChwIAFBkIAtg7IgtBIIAHDCg");
	this.shape_15.setTransform(41,519.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B5C719").s().p("AgMBDQgXgcAAgnQAAgmAXgcQATgaAdgCIAAC9QgdgCgTgag");
	this.shape_16.setTransform(37.3,509.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#95AA0F").s().p("AgoBfIAAi9IAFAAQAgAAAVAcQAXAcAAAmQAAAngXAcQgVAcggAAIgFAAg");
	this.shape_17.setTransform(45,509.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#6F4C24").s().p("AgVEKIAPk9IhPhtIBRBZIAEjBIAJCrIBNhlIhNB8IALFQg");
	this.shape_18.setTransform(16.4,508.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#95AA0F").s().p("AhGCkIAAlHIAJAAQA3AAAmAwQAnAwAABDQAABEgnAwQgmAwg3AAIgJAAg");
	this.shape_19.setTransform(23.2,491.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B5C719").s().p("AgWB0QgngwAAhEQAAhDAngwQAjgtAxgDIAAFHQgxgEgjgsg");
	this.shape_20.setTransform(9.9,491.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#6F4C24").s().p("AgLCaIAHjCIgthIIAtA7IAFhkIACBwIAvgzIguA/IAJC3g");
	this.shape_21.setTransform(911.8,519.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B5C719").s().p("AgjheQAcACAVAaQAWAcAAAmQAAAngWAcQgVAagcACg");
	this.shape_22.setTransform(915.6,509.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#95AA0F").s().p("AAkBfQggAAgVgcQgXgcAAgnQAAgmAXgcQAVgcAgAAIAFAAIAAC9IgFAAg");
	this.shape_23.setTransform(907.9,509.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6F4C24").s().p("AgTEKIALlQIhNh8IBNBlIAJirIAEDBIBRhZIhPBtIAPE9g");
	this.shape_24.setTransform(936.4,508.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#B5C719").s().p("Ag9ijQAxADAjAtQAnAwAABDQAABEgnAwQgjAsgxAEg");
	this.shape_25.setTransform(942.9,491.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#95AA0F").s().p("AA+CkQg3AAgmgwQgngwAAhEQAAhDAngwQAmgwA3AAIAJAAIAAFHIgJAAg");
	this.shape_26.setTransform(929.6,491.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CFAD7E").s().p("AxTAZIgFAAMg7VAAAIAAgxMCZbAAAIAAAxg");
	this.shape_27.setTransform(474.1,535.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).wait(872));

	// a3
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E7D6BE").s().p("AnHOBIAA8BIOPAAIAAcBg");
	this.shape_28.setTransform(-1547.5,806.1,10.601,0.985,0,0,0,-191.4,185.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(872));

	// Layer 2
	this.instance_21 = new lib.Symbol1();
	this.instance_21.parent = this;
	this.instance_21.setTransform(477.4,534.1,0.05,0.05);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1},12).wait(854));

	// Layer 4
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(208,186,138,0.2)").s().p("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ANANQAOAOABATQAAATgOAOQgNANgSABQAHAOAAAPQgBAWgOARQgOAQgWAEQgCAVgQAPQgRAPgVAAQgXAAgRgRgEgnrgX7QgJgKAAgOQAAgLAIgJQAGgJAMgDIAAgIQgEgIAAgIQAAgNAJgJQAJgJANAAQAFAAAGACQADgIAJgFQAFgMANgFQAMgFANAEQANAFAGANQAGANgEAOQgFALgKAGQACAKgDAHQgDAHgFAFQAGANgFAOQgFANgNAGQgNAGgNgFQgGgCgFgFQgEAIgIAFQgIAFgJAAQgNAAgLgJgAim4XQgLgLAAgQQAAgOAIgKQAJgKANgDQgBgFACgEQgGgJAAgKQAAgOAIgKQAJgJANgDQgIgPAGgQQAGgQAPgGQAPgHAPAFIAKAGQgBgKADgIQAEgOAOgGQANgGAOAFQAGACAGAEQAGgHAIgCQAKgCAJADQAMAFAFAMQAGALgEANQgFAMgLAFQgMAGgMgEQACAKgEAJQgFAQgPAHQAJARgGARQgGAPgPAHQgPAHgQgGIgFgCQAAAOgKALQgKAKgNACQgCAPgKAKQgMAKgOAAQgQAAgLgLgAEK4tQgKgLAAgOQAAgNAIgKQAHgKANgCIABgJQgGgIAAgKQABgOAJgKQAKgKAOAAQAGAAAGACQAEgIAIgFQAHgFAJAAQANAAAIAJQAJAJAAAMQAAAMgIAJQgJAIgLABQAEAJAAAJQAAAOgKAKQgJALgNACQgBAOgLAJQgKAJgNAAQgPAAgLgKgEAxTgaHQgOgNAAgTQAAgPAKgMQAKgNAPgDQAAgGABgFQgGgKAAgMQAAgQAKgLQAJgMAPgDQgIgSAGgSQAIgTARgIQASgIASAHQAGACAFAEQgCgMAEgJQAHgQAQgIQAPgHAQAGQAHACAHAGQAHgIALgDQALgCALAEQAOAFAHAOQAGAOgFAOQgGAOgMAHQgOAGgOgEQABAMgEALQgHASgSAIQAMAUgJAUQgGASgSAIQgSAIgSgHIgGgCQgBARgLAMQgMAMgQADQgBARgNALQgNAMgRAAQgTAAgMgNgAtI6bQgJgJAAgLQAAgKAGgIQAHgHAIgCIACgHQgEgGAAgIQAAgLAIgIQAHgHALAAQAFAAAFACQACgIAIgEQAEgKALgEQAKgFALAEQALAEAGAMQAFALgFALQgEAKgHAFQABAIgDAHQgBAFgFAFQAFALgEALQgFAMgLAFQgKAFgMgEQgFgCgEgEQgEAHgGAEQgIAEgHAAQgLAAgIgIgEA5PgahQgMgMAAgRQAAgPAKgMQAIgLAPgDIACgKQgHgKAAgMQAAgQAMgMQAMgMAQAAQAHAAAHADQAEgJAJgGQAJgGALAAQAOAAAKAKQALAKAAAPQAAAOgKAKQgKAKgNABQAEAKAAALQABARgLAMQgLAMgQADQgBAQgMALQgNALgQAAQgRAAgNgNgA3c66QgUgTAAgcQAAgXAPgSQAPgTAWgFQABgJABgGQgJgRgBgRQABgaARgTQAUgSAZAAQAMAAALAEQAGgPAOgJQAOgJARAAQAXAAARAQQAQAQAAAXQgBAWgPAQQgPAQgWABQAIAQAAASQAAAagQATQgRAUgbAEQgCAZgTARQgTASgZAAQgcAAgTgUgEg1/gcjQgNgNAAgTQAAgPAKgMQAKgNAPgDQAAgGABgFQgGgKgBgMQAAgQAKgLQAKgMAPgDQgJgSAHgSQAHgTARgIQATgIARAHQAGACAGAEQgCgMAEgJQAGgQAQgIQAPgHARAGQAGACAHAGQAIgIAKgDQALgCAMAEQANAFAHAOQAGAOgFAOQgFAOgNAHQgNAGgPgEQABAMgDALQgHASgTAIQAMAUgJAUQgGASgRAIQgSAIgSgHIgHgCQAAARgLAMQgMAMgQADQgCARgNALQgMAMgRAAQgTAAgNgNgEAk5gciQgKgKABgNQgBgMAIgJQAHgJALgCIACgIQgGgIABgJQgBgNAJgJQAKgJAMAAQAGAAAGADQADgJAIgFQAGgMANgFQAMgFANAFQAMAFAHANQAFANgEANQgEAMgLAGQADAJgEAIQgCAHgGAFQAHANgFANQgGAOgMAGQgNAFgOgEQgGgDgFgEQgEAIgIAFQgIAEgJAAQgNAAgKgJgEguCgc9QgNgMAAgRQAAgPAKgMQAJgLAOgDIACgKQgHgKABgMQAAgQAMgMQALgMAQAAQAIAAAHADQADgJAJgGQAKgGAKAAQAPAAAKAKQAKAKAAAPQABAOgLAKQgKAKgNABQAFAKAAALQAAARgKAMQgLAMgQADQgCAQgMALQgMALgRAAQgRAAgMgNgEhCZge+QgJgKAAgNQAAgMAIgJQAGgJAMgCIABgIQgFgIAAgJQAAgNAJgJQAJgJANAAQAFAAAGADQADgJAJgFQAFgMANgFQAMgFANAFQANAFAGANQAGANgFANQgEAMgKAGQACAJgDAIQgDAHgFAFQAHANgGANQgFAOgNAGQgNAFgOgEQgFgDgFgEQgEAIgIAFQgIAEgJAAQgOAAgKgJg");
	this.shape_29.setTransform(231.8,213.7,1,1,0,0,0,-248.6,-189.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(872));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,32.3,997.5,679.3);


// stage content:
(lib.File_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("W01");
	}
	this.frame_559 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(558).call(this.frame_559).wait(1));

	// Title
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AAeBKIg4hZIAAAAIABBZIgkAAIAAiTIAgAAIA4BcIABgBIgChbIAkAAIAACTg");
	this.shape_30.setTransform(292.3,41.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgPBMQgHgCgHgDQgHgDgGgEQgHgDgEgGIgKgLQgFgGgCgGIgGgPIgBgPQAAgIABgHQACgJADgHQADgHAGgKQAGgHAHgFQAHgHAIgDQAIgEAJgCQAJgCAIAAIAQACQAIABAGADIAOAHQAGAEAFAFIAKALIAHAOQADAGABAIQACAIAAAHQAAAIgCAIQgBAHgDAIIgHAMIgKAMQgFAFgGAEIgOAHIgOAFQgIABgIAAQgHAAgIgBgAgQgnQgGADgGAHQgFAFgDAIQgDAIAAAIQAAAJADAHQADAJAFAGQAGAFAHAEQAHADAIAAQAJAAAIgDQAHgEAFgFQAGgGACgJQADgHAAgJQAAgIgDgIQgCgHgGgGQgFgGgHgEQgIgEgJAAQgHAAgJAEg");
	this.shape_31.setTransform(276.3,41.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgSBKIAAiTIAlAAIAACTg");
	this.shape_32.setTransform(264.5,41.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgSBKIAAhyIgdAAIAAghIBfAAIAAAhIgdAAIAAByg");
	this.shape_33.setTransform(256.4,41.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AAhBKIgIgWIgyAAIgHAWIgpAAIA7iTIAdAAIA7CTgAAPAXIgPgyIAAAAIgOAyIAdAAg");
	this.shape_34.setTransform(243.8,41.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAOBKIgigwIAAAAIAAAwIgkAAIAAiTIAuAAQAPAAAJABIALAEQAGACAEADQAFAEADAFIAGAJIADALIABAMQABAJgDAIQgDAGgEAGQgFAHgGAEQgIAEgJACIApAygAgUAAIANAAQAGAAAEAAQAEgBADgCQAEgDACgEQABgFAAgFQAAgFgBgEQgDgEgDgDIgIgDIgIgBIgOAAg");
	this.shape_35.setTransform(230.2,41.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIAsAAIAAAhIgsAAIAAAZIAtAAIAAAhg");
	this.shape_36.setTransform(218.1,41.7);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAeBKIg4hZIAAAAIABBZIgkAAIAAiTIAgAAIA4BcIABgBIgChbIAkAAIAACTg");
	this.shape_37.setTransform(205,41.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIArAAIAAAhIgrAAIAAAZIAtAAIAAAhg");
	this.shape_38.setTransform(192.4,41.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgPBMQgIgCgHgDIgNgHIgMgKQgFgFgEgGQgFgGgDgHQgDgHgBgHIgCgQQAAgIACgIQABgHAEgHIAHgOIAKgLQAFgFAGgEQAHgDAHgDQAHgDAIgBQAHgCAHAAQAMAAAMAEQAMAEAKAGQAHAFALAMQAIAOACAIIgqAAIgGgIIgIgHIgJgDIgJgCQgIAAgIAEQgHADgGAGQgFAGgDAIQgDAIAAAIQAAAJADAHQADAJAFAGQAFAGAIAEQAHADAJAAQAGAAAFgCQAGgBAFgDQAFgDADgEQADgFACgGIgrAAIAAgdIBXAAIAAAHQAAAIgCAIQgBAIgDAHQgDAIgEAFQgEAHgGAFIgLAKIgOAHQgHADgIACQgIABgIAAIgPgBg");
	this.shape_39.setTransform(178.4,41.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgoBKIAAiTIBRAAIAAAhIgtAAIAAAXIArAAIAAAhIgrAAIAAAZIAtAAIAAAhg");
	this.shape_40.setTransform(158.6,41.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgSBKIAAhyIgdAAIAAghIBfAAIAAAhIgdAAIAAByg");
	this.shape_41.setTransform(148.2,41.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgTBKQgKgDgHgGQgIgGgDgIIgDgKIgCgLIAAgFIAmAAQAAAIADAGQACADAEABQADACACAAQAHAAADgEQAFgEAAgGQAAgGgFgEIgKgGIgNgGIgOgGQgHgEgEgEQgFgGgEgGQgCgHAAgIQgBgHAFgLQAEgJAIgGQAIgFAIgDQAKgDAIAAQAIAAAPAEIAJAGIAJAHQAFAHACAHQACAGAAAJIglAAQgBgHgDgDQgDgEgHAAQgEAAgEADQgDADAAAGIAAAFQADAFALAFIAPAHIAOAHIALAIQAEAFADAGQADAHgBAJQAAALgDAIQgFAJgHAGQgGAGgJACQgKADgLAAQgLAAgJgDg");
	this.shape_42.setTransform(137.5,41.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AAhBKIgIgWIgyAAIgHAWIgpAAIA7iTIAdAAIA7CTgAAPAXIgOgyIgBAAIgOAyIAdAAg");
	this.shape_43.setTransform(124.2,41.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAXBKIgXhfIgVBfIgiAAIgniTIAnAAIATBfIABAAIAWhfIAcAAIAVBgIAAAAIAUhgIAnAAIgoCTg");
	this.shape_44.setTransform(106.8,41.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]}).wait(560));

	// Battery
	this.instance_22 = new lib.Symbol5();
	this.instance_22.parent = this;
	this.instance_22.setTransform(850.1,492.5);
	this.instance_22.alpha = 0;
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(526).to({_off:false},0).to({x:822.8,alpha:1},9).wait(25));

	// Picture2.png
	this.instance_23 = new lib.Symbol6();
	this.instance_23.parent = this;
	this.instance_23.setTransform(501.1,491.1,0.084,0.084);
	this.instance_23.alpha = 0;
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(519).to({_off:false},0).to({scaleX:1,scaleY:1,x:733.5,y:492.3,alpha:1},16).wait(25));

	// Dye trays and supports  (broken or discarded)
	this.instance_24 = new lib.Symbol7();
	this.instance_24.parent = this;
	this.instance_24.setTransform(874.1,420);
	this.instance_24.alpha = 0;
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(445).to({_off:false},0).to({x:846.8,alpha:1},8).wait(107));

	// 4.png
	this.instance_25 = new lib.Symbol8();
	this.instance_25.parent = this;
	this.instance_25.setTransform(498.7,485.6,0.084,0.084);
	this.instance_25.alpha = 0;
	this.instance_25._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(437).to({_off:false},0).to({scaleX:1,scaleY:1,x:704,y:426.5,alpha:1},16).wait(107));

	// Empty containers  (Hazardous chemicals)
	this.instance_26 = new lib.Symbol9();
	this.instance_26.parent = this;
	this.instance_26.setTransform(826.4,353.2);
	this.instance_26.alpha = 0;
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(378).to({_off:false},0).to({x:799.1,alpha:1},9).wait(173));

	// chemical_drums2.png
	this.instance_27 = new lib.Symbol10();
	this.instance_27.parent = this;
	this.instance_27.setTransform(495.9,479.6,0.084,0.084);
	this.instance_27.alpha = 0;
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(371).to({_off:false},0).to({scaleX:1,scaleY:1,x:670.5,y:354.6,alpha:1},16).wait(173));

	// Activated carbon  waste
	this.instance_28 = new lib.Symbol11();
	this.instance_28.parent = this;
	this.instance_28.setTransform(698.9,264.2);
	this.instance_28.alpha = 0;
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(331).to({_off:false},0).to({x:671.6,alpha:1},9).wait(220));

	// b4.png
	this.instance_29 = new lib.Symbol12();
	this.instance_29.parent = this;
	this.instance_29.setTransform(488.7,474.9,0.084,0.084);
	this.instance_29.alpha = 0;
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(324).to({_off:false},0).to({scaleX:1,scaleY:1,x:584.5,y:298.8,alpha:1},16).wait(220));

	// Used oils and  lubricants
	this.instance_30 = new lib.Symbol13();
	this.instance_30.parent = this;
	this.instance_30.setTransform(477,191.8);
	this.instance_30.alpha = 0;
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(282).to({_off:false},0).to({y:211.3,alpha:1},9).wait(269));

	// 5.png
	this.instance_31 = new lib.Symbol14();
	this.instance_31.parent = this;
	this.instance_31.setTransform(479.7,472.8,0.084,0.084);
	this.instance_31.alpha = 0;
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(275).to({_off:false},0).to({scaleX:1,scaleY:1,x:477.2,y:273.9,alpha:1},16).wait(269));

	// Left over/ expired  chemical 
	this.instance_32 = new lib.Symbol15();
	this.instance_32.parent = this;
	this.instance_32.setTransform(273,255.1);
	this.instance_32.alpha = 0;
	this.instance_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(225).to({_off:false},0).to({x:300.3,alpha:1},9).wait(326));

	// phi2.png
	this.instance_33 = new lib.Symbol16();
	this.instance_33.parent = this;
	this.instance_33.setTransform(472.5,475.4,0.084,0.084);
	this.instance_33.alpha = 0;
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(218).to({_off:false},0).to({scaleX:1,scaleY:1,x:390.6,y:305.1,alpha:1},16).wait(326));

	// Cartridges
	this.instance_34 = new lib.Symbol17();
	this.instance_34.parent = this;
	this.instance_34.setTransform(183,328.6);
	this.instance_34.alpha = 0;
	this.instance_34._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(197).to({_off:false},0).to({x:210.3,alpha:1},8).wait(355));

	// Picture4.png
	this.instance_35 = new lib.Symbol18();
	this.instance_35.parent = this;
	this.instance_35.setTransform(465,478.1,0.084,0.084);
	this.instance_35.alpha = 0;
	this.instance_35._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(189).to({_off:false},0).to({scaleX:1,scaleY:1,x:301.8,y:336.7,alpha:1},16).wait(355));

	// Contaminated filters
	this.instance_36 = new lib.Symbol19();
	this.instance_36.parent = this;
	this.instance_36.setTransform(111.4,405.7);
	this.instance_36.alpha = 0;
	this.instance_36._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(143).to({_off:false},0).to({x:138.7,alpha:1},9).wait(408));

	// Picture3.png
	this.instance_37 = new lib.Symbol20();
	this.instance_37.parent = this;
	this.instance_37.setTransform(461.7,483.9,0.084,0.084);
	this.instance_37.alpha = 0;
	this.instance_37._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(136).to({_off:false},0).to({scaleX:1,scaleY:1,x:261.9,y:406.7,alpha:1},16).wait(408));

	// Chemical  contaminated  packaging
	this.instance_38 = new lib.Symbol21();
	this.instance_38.parent = this;
	this.instance_38.setTransform(91.8,481.1);
	this.instance_38.alpha = 0;
	this.instance_38._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(95).to({_off:false},0).to({x:119.1,alpha:1},9).wait(456));

	// 6.png
	this.instance_39 = new lib.Symbol22();
	this.instance_39.parent = this;
	this.instance_39.setTransform(458.5,490.9,0.084,0.084);
	this.instance_39.alpha = 0;
	this.instance_39._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(88).to({_off:false},0).to({scaleX:1,scaleY:1,x:223.4,y:489.9,alpha:1},16).wait(456));

	// Layer 7
	this.instance_40 = new lib.Symbol4();
	this.instance_40.parent = this;
	this.instance_40.setTransform(481.2,138.7);
	this.instance_40.alpha = 0;
	this.instance_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(55).to({_off:false},0).to({y:98.7,alpha:1},10).wait(495));

	// Layer 6
	this.instance_41 = new lib.Symbol3();
	this.instance_41.parent = this;
	this.instance_41.setTransform(481.2,542.2);
	this.instance_41.alpha = 0;
	this.instance_41._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(36).to({_off:false},0).to({y:561.7,alpha:1},11).wait(513));

	// Layer 5
	this.instance_42 = new lib.Symbol2();
	this.instance_42.parent = this;
	this.instance_42.setTransform(539.3,476.3,1,1,0,0,0,57.4,4.2);
	this.instance_42.alpha = 0;
	this.instance_42._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(23).to({_off:false},0).to({alpha:1},10).wait(527));

	// Symbol 8
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#6F4C24").s().p("AgMCaIAJi3Igug/IAvAzIAChwIAFBkIAtg7IgtBIIAHDCg");
	this.shape_45.setTransform(41,519.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B5C719").s().p("AgMBDQgXgcAAgnQAAgmAXgcQATgaAdgCIAAC9QgdgCgTgag");
	this.shape_46.setTransform(37.3,509.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#95AA0F").s().p("AgoBfIAAi9IAFAAQAgAAAVAcQAXAcAAAmQAAAngXAcQgVAcggAAIgFAAg");
	this.shape_47.setTransform(45,509.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6F4C24").s().p("AgVEKIAPk9IhPhtIBRBZIAEjBIAJCrIBNhlIhNB8IALFQg");
	this.shape_48.setTransform(16.4,508.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#95AA0F").s().p("AhGCkIAAlHIAJAAQA3AAAmAwQAnAwAABDQAABEgnAwQgmAwg3AAIgJAAg");
	this.shape_49.setTransform(23.2,491.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#B5C719").s().p("AgWB0QgngwAAhEQAAhDAngwQAjgtAxgDIAAFHQgxgEgjgsg");
	this.shape_50.setTransform(9.9,491.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#6F4C24").s().p("AgLCaIAHjCIgthIIAtA7IAFhkIACBwIAvgzIguA/IAJC3g");
	this.shape_51.setTransform(911.8,519.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#95AA0F").s().p("AAkBfQggAAgVgcQgXgcAAgnQAAgmAXgcQAVgcAgAAIAFAAIAAC9IgFAAg");
	this.shape_52.setTransform(907.9,509.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B5C719").s().p("AgjheQAcACAVAaQAWAcAAAmQAAAngWAcQgVAagcACg");
	this.shape_53.setTransform(915.6,509.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#6F4C24").s().p("AgTEKIALlQIhNh8IBNBlIAJirIAEDBIBRhZIhPBtIAPE9g");
	this.shape_54.setTransform(936.4,508.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B5C719").s().p("Ag9ijQAxADAjAtQAnAwAABDQAABEgnAwQgjAsgxAEg");
	this.shape_55.setTransform(942.9,491.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#95AA0F").s().p("AA+CkQg3AAgmgwQgngwAAhEQAAhDAngwQAmgwA3AAIAJAAIAAFHIgJAAg");
	this.shape_56.setTransform(929.6,491.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#CFAD7E").s().p("AxTAZIgFAAMg7VAAAIAAgxMCZbAAAIAAAxg");
	this.shape_57.setTransform(474.1,535.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).wait(560));

	// a3
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E7D6BE").s().p("AnHOBIAA8BIOPAAIAAcBg");
	this.shape_58.setTransform(-1547.5,806.1,10.601,0.985,0,0,0,-191.4,185.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_58).wait(560));

	// Layer 2
	this.instance_43 = new lib.Symbol1();
	this.instance_43.parent = this;
	this.instance_43.setTransform(477.4,534.1,0.05,0.05);
	this.instance_43._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(6).to({_off:false},0).to({scaleX:1,scaleY:1},12).wait(542));

	// Layer 4
	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(208,186,138,0.2)").s().p("EhN7AhMMAAAgzGIDDAAIAAiAIBeAAIAAkOIDahjIAABeIDOheIAABeIAbgMIAHlvQgFAAgEgEQgDgEAAgFQAAgGAEgEQAFgEAFAAIAyAAQAFAAAEAEQAEAEAAAGQAAAHgGAEIAFFRIBtgyIAAEEIACAAIAOiFIAMAAIAImcQgEgBgDgEQgDgEAAgEQAAgGAFgEQAEgEAFAAIAxAAQAGAAAEAEQAEAEABAGQAAAIgJAEIAGGdIATAAIAKCFIBcAAIAAB+IA6AAIAAjDICFAAIAAhGIBEAAQANgeAbgWQAbgVAigJIAEiZIgGAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgBgCgBgDQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAABgBQAAAAABAAQAAAAABgBQAAAAABAAIBcAAQADAAADACQAAABAAAAQAAABABAAQAAABAAABQAAAAAAABQAAAGgHAAIgFAAIADCcQAfAKAYAUQAYAVANAcIA0AAIAABGIAUAAIAAjnIA6AAIAAjFIgEAAQgDAAgDgCQgCgDAAgEQAAgDACgDQADgDADAAICAAAQAFAAACADQADADgBADQAAAIgHABIAADFIBHAAIAAh5IgDAAQgDAAgDgCQgCgDgBgDQABgEACgDQADgDADAAICAAAQAEAAADADQACADAAAEQAAADgCADQgCACgFAAIAAB5IDkAAIAADtIBDAAIAAAcIACg9IA9AAIAHEsIA4AAIAJksIA8AAIAHEsIBpAAIAAinIBgAAQAHgdAEgbIAAgGIABgBQAKgzAEg5QAHhLADkDIgEAAIAAgWIAEAAIABgQIgFAAIAAgWIAFAAIAAgNIgOAAIAAgnIDUAAIAAAnIgKAAIAAANIAFAAIAAAWIgGAAIgBAQIAHAAIAAAWIgHAAQgGDtAEBWQADAqAFAuIBWgnIAABDICUhDIAABDIBvgyIAGg3IABgNIgDAAIAAgWIAEAAIABgQIgFAAIAAgWIAGAAIABgOIgNAAIAAgmIDUAAIAAAmIgKAAIAAAOIAFAAIAAAWIgFAAIABAQIAEAAIAAAWIgDAAIAAACQACA2AIAyIB4g3IAACFIBUAAIAAABIB/g5IAABPICwhPIAABPIAXgLIAGk3QgFgBgCgDQgDgDgBgEQAAgFAEgEQAEgDAEAAIAqAAQAFAAADADQAEAEAAAFQAAAGgGADIAFEeIBdgpIAADcIABAAIAMhxIALAAIAGleQgDgBgDgDQgCgEAAgDQAAgFAEgEQACgDAGAAIApAAQAFAAADADQAEAEAAAFQAAAHgGADIAEFfIAQAAIAJBxIBPAAIAABrIAxAAIAAilIBxAAIAAg8IA5AAQAMgaAXgSQAWgTAegHIADiCIgFAAIgEgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAIACgEIAEgBIBOAAIAFABIABAEQAAAFgGAAIgEAAIACCFQAbAIAUASQAVARALAYIArAAIAAA8IARAAIAAjFIAxAAIAAinIgCAAQgEAAgCgCQgCgDAAgDQAAgDACgCQADgCADAAIBsAAQADAAADACQACACAAADQAAAHgHABIAACnIA9AAIAAhmIgCAAQgDAAgDgDQgCgCAAgDQAAgDACgDQADgCADAAIBtAAQADAAACACQACADAAADQAAADgCACQgCADgDAAIAABmIDBAAIAADKIA6AAIAAAYIABg0IAzAAIAGD/IAwAAIAHj/IA0AAIAGD/IBaAAIAAiPIBRAAIAKgvIAAgFIABgBQAHgrAEgwQAGhAACjdIgCAAIAAgSIACAAIABgOIgDAAIAAgTIADAAIAAgLIgLAAIAAghIC0AAIAAAhIgJAAIAAALIAFAAIAAATIgFAAIgBAOIAGAAIAAASIgGAAQgGDKAFBJQABAjAFAoIBJghIAAA5IB+g5IAAA5IBfgrIAEguIACgMIgEAAIAAgSIAFAAIAAgOIgFAAIAAgTIAGAAIAAgLIgKAAIAAghIC0AAIAAAhIgJAAIAAALIAFAAIAAATIgEAAIAAAOIAEAAIAAASIgDAAIAAACQACAuAHAqIBmguIAABwIBGAAIAACPIAlAAIAAhuIBfAAIAAkOIDahjIAABeIDOheIAABeIAbgMIAHlvQgGAAgDgEQgDgEgBgFQABgGAEgEQAEgEAGAAIAxAAQAFAAAEAEQAFAEAAAGQAAAHgHAEIAGFRIBtgyIAAEEIABAAIAOiFIANAAIAImcQgFgBgDgEQgCgEAAgEQgBgGAFgEQAEgEAFAAIAyAAQAFAAAFAEQAEAEAAAGQAAAIgJAEIAHGdIASAAIAKCFIBdAAIAAB+IA6AAIAAjDICFAAIAAhGIBDAAQAOgeAbgWQAagVAjgJIAEiZIgHAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQgBAAAAAAQgCgCAAgDQAAgBAAAAQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABgBQABAAAAAAQABAAAAgBQABAAAAAAIBdAAQADAAACACQAAABABAAQAAABAAAAQAAABAAABQAAAAAAABQAAAGgGAAIgFAAIACCcQAgAKAXAUQAZAVANAcIAzAAIAABGIAUAAIAAjnIA7AAIAAjFIgEAAQgEAAgCgCQgCgDAAgEQAAgDACgDQACgDAEAAICAAAQAEAAACADQADADAAADQAAAIgHABIAADFIBHAAIAAh5IgDAAQgDAAgDgCQgDgDAAgDQAAgEADgDQADgDADAAICAAAQADAAADADQADADAAAEQAAADgDADQgCACgEAAIAAB5IDjAAIAADtIBDAAIAAAcIADg9IA8AAIAHEsIA4AAIAJksIA8AAIAIEsIBpAAIAAinIBfAAQAHgdAEgbIAAgGIACgBQAJgzAEg5QAHhLADkDIgDAAIAAgWIADAAIABgQIgEAAIAAgWIAEAAIAAgNIgNAAIAAgnIDTAAIAAAnIgKAAIAAANIAGAAIAAAWIgHAAIgBAQIAIAAIAAAWIgIAAQgFDtAEBWQADAqAFAuIBVgnIAABDICVhDIAABDIBFggMAAAA1UgAJk0cQgHgIgBgMQAAgKAHgHQAGgIAKgCIAAgHQgEgHAAgHQAAgLAIgHQAIgIAKAAQAGAAAEACQADgHAIgFQAEgKAKgEQALgEALAEQALAEAFALQAFALgEALQgDAKgJAFQABAIgCAHQgDAGgEAEQAGALgEALQgFAMgLAFQgLAFgMgEQgFgCgEgEQgEAHgGAEQgHAEgHAAQgMAAgJgIgEA/ngVfQgKgKABgOQgBgLAIgJQAHgJALgDIABgIQgEgIAAgIQgBgNAJgJQAKgJAMAAQAGAAAGACQADgIAIgFQAGgMANgFQAMgFANAEQAMAFAHANQAFANgEAOQgEALgLAGQACAKgDAHQgCAHgGAFQAHANgFAOQgGANgMAGQgNAGgNgFQgHgCgFgFQgEAIgIAFQgIAFgJAAQgNAAgKgJgAXY2+QgRgQAAgXQAAgVANgPQAMgQATgEIADgNQgJgOAAgPQAAgWAQgQQAPgQAXAAQAJAAAKAEQAFgNAMgHQAMgIAOAAQAUAAANANQAOAOABATQAAATgOAOQgNANgSABQAHAOAAAPQgBAWgOARQgOAQgWAEQgCAVgQAPQgRAPgVAAQgXAAgRgRgEgnrgX7QgJgKAAgOQAAgLAIgJQAGgJAMgDIAAgIQgEgIAAgIQAAgNAJgJQAJgJANAAQAFAAAGACQADgIAJgFQAFgMANgFQAMgFANAEQANAFAGANQAGANgEAOQgFALgKAGQACAKgDAHQgDAHgFAFQAGANgFAOQgFANgNAGQgNAGgNgFQgGgCgFgFQgEAIgIAFQgIAFgJAAQgNAAgLgJgAim4XQgLgLAAgQQAAgOAIgKQAJgKANgDQgBgFACgEQgGgJAAgKQAAgOAIgKQAJgJANgDQgIgPAGgQQAGgQAPgGQAPgHAPAFIAKAGQgBgKADgIQAEgOAOgGQANgGAOAFQAGACAGAEQAGgHAIgCQAKgCAJADQAMAFAFAMQAGALgEANQgFAMgLAFQgMAGgMgEQACAKgEAJQgFAQgPAHQAJARgGARQgGAPgPAHQgPAHgQgGIgFgCQAAAOgKALQgKAKgNACQgCAPgKAKQgMAKgOAAQgQAAgLgLgAEK4tQgKgLAAgOQAAgNAIgKQAHgKANgCIABgJQgGgIAAgKQABgOAJgKQAKgKAOAAQAGAAAGACQAEgIAIgFQAHgFAJAAQANAAAIAJQAJAJAAAMQAAAMgIAJQgJAIgLABQAEAJAAAJQAAAOgKAKQgJALgNACQgBAOgLAJQgKAJgNAAQgPAAgLgKgEAxTgaHQgOgNAAgTQAAgPAKgMQAKgNAPgDQAAgGABgFQgGgKAAgMQAAgQAKgLQAJgMAPgDQgIgSAGgSQAIgTARgIQASgIASAHQAGACAFAEQgCgMAEgJQAHgQAQgIQAPgHAQAGQAHACAHAGQAHgIALgDQALgCALAEQAOAFAHAOQAGAOgFAOQgGAOgMAHQgOAGgOgEQABAMgEALQgHASgSAIQAMAUgJAUQgGASgSAIQgSAIgSgHIgGgCQgBARgLAMQgMAMgQADQgBARgNALQgNAMgRAAQgTAAgMgNgAtI6bQgJgJAAgLQAAgKAGgIQAHgHAIgCIACgHQgEgGAAgIQAAgLAIgIQAHgHALAAQAFAAAFACQACgIAIgEQAEgKALgEQAKgFALAEQALAEAGAMQAFALgFALQgEAKgHAFQABAIgDAHQgBAFgFAFQAFALgEALQgFAMgLAFQgKAFgMgEQgFgCgEgEQgEAHgGAEQgIAEgHAAQgLAAgIgIgEA5PgahQgMgMAAgRQAAgPAKgMQAIgLAPgDIACgKQgHgKAAgMQAAgQAMgMQAMgMAQAAQAHAAAHADQAEgJAJgGQAJgGALAAQAOAAAKAKQALAKAAAPQAAAOgKAKQgKAKgNABQAEAKAAALQABARgLAMQgLAMgQADQgBAQgMALQgNALgQAAQgRAAgNgNgA3c66QgUgTAAgcQAAgXAPgSQAPgTAWgFQABgJABgGQgJgRgBgRQABgaARgTQAUgSAZAAQAMAAALAEQAGgPAOgJQAOgJARAAQAXAAARAQQAQAQAAAXQgBAWgPAQQgPAQgWABQAIAQAAASQAAAagQATQgRAUgbAEQgCAZgTARQgTASgZAAQgcAAgTgUgEg1/gcjQgNgNAAgTQAAgPAKgMQAKgNAPgDQAAgGABgFQgGgKgBgMQAAgQAKgLQAKgMAPgDQgJgSAHgSQAHgTARgIQATgIARAHQAGACAGAEQgCgMAEgJQAGgQAQgIQAPgHARAGQAGACAHAGQAIgIAKgDQALgCAMAEQANAFAHAOQAGAOgFAOQgFAOgNAHQgNAGgPgEQABAMgDALQgHASgTAIQAMAUgJAUQgGASgRAIQgSAIgSgHIgHgCQAAARgLAMQgMAMgQADQgCARgNALQgMAMgRAAQgTAAgNgNgEAk5gciQgKgKABgNQgBgMAIgJQAHgJALgCIACgIQgGgIABgJQgBgNAJgJQAKgJAMAAQAGAAAGADQADgJAIgFQAGgMANgFQAMgFANAFQAMAFAHANQAFANgEANQgEAMgLAGQADAJgEAIQgCAHgGAFQAHANgFANQgGAOgMAGQgNAFgOgEQgGgDgFgEQgEAIgIAFQgIAEgJAAQgNAAgKgJgEguCgc9QgNgMAAgRQAAgPAKgMQAJgLAOgDIACgKQgHgKABgMQAAgQAMgMQALgMAQAAQAIAAAHADQADgJAJgGQAKgGAKAAQAPAAAKAKQAKAKAAAPQABAOgLAKQgKAKgNABQAFAKAAALQAAARgKAMQgLAMgQADQgCAQgMALQgMALgRAAQgRAAgMgNgEhCZge+QgJgKAAgNQAAgMAIgJQAGgJAMgCIABgIQgFgIAAgJQAAgNAJgJQAJgJANAAQAFAAAGADQADgJAJgFQAFgMANgFQAMgFANAFQANAFAGANQAGANgFANQgEAMgKAGQACAJgDAIQgDAHgFAFQAHANgGANQgFAOgNAGQgNAFgOgEQgFgDgFgEQgEAIgIAFQgIAEgJAAQgOAAgKgJg");
	this.shape_59.setTransform(231.8,213.7,1,1,0,0,0,-248.6,-189.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_59).wait(560));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(461.7,352.3,997.5,679.3);
// library properties:
lib.properties = {
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/File_01_atlas_.png?1501054114422", id:"File_01_atlas_"},
		{src:"sounds/W01.mp3?1501054114527", id:"W01"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
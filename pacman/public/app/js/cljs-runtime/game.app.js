goog.provide('game.app');
game.app.canvas = document.querySelector("canvas");
game.app.c = game.app.canvas.getContext("2d");
(game.app.canvas.width = window.innerWidth);
(game.app.canvas.height = window.innerHeight);
game.app.boundary_consts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40)], null);
game.app.boundary_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),(function() { 
var G__23237__delegate = function (p__23216){
var map__23217 = p__23216;
var map__23217__$1 = cljs.core.__destructure_map(map__23217);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23217__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"width","width",-384071477),(game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"width","width",-384071477))),new cljs.core.Keyword(null,"height","height",1025178622),(game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"height","height",1025178622)))], null);
};
var G__23237 = function (var_args){
var p__23216 = null;
if (arguments.length > 0) {
var G__23238__i = 0, G__23238__a = new Array(arguments.length -  0);
while (G__23238__i < G__23238__a.length) {G__23238__a[G__23238__i] = arguments[G__23238__i + 0]; ++G__23238__i;}
  p__23216 = new cljs.core.IndexedSeq(G__23238__a,0,null);
} 
return G__23237__delegate.call(this,p__23216);};
G__23237.cljs$lang$maxFixedArity = 0;
G__23237.cljs$lang$applyTo = (function (arglist__23239){
var p__23216 = cljs.core.seq(arglist__23239);
return G__23237__delegate(p__23216);
});
G__23237.cljs$core$IFn$_invoke$arity$variadic = G__23237__delegate;
return G__23237;
})()
,new cljs.core.Keyword(null,"draw","draw",1358331674),(function() { 
var G__23240__delegate = function (p__23218){
var map__23219 = p__23218;
var map__23219__$1 = cljs.core.__destructure_map(map__23219);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23219__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23219__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23219__$1,new cljs.core.Keyword(null,"width","width",-384071477));
(game.app.c.fillStyle = "blue");

return game.app.c.fillRect((position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : position.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),(position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),width,height);
};
var G__23240 = function (var_args){
var p__23218 = null;
if (arguments.length > 0) {
var G__23241__i = 0, G__23241__a = new Array(arguments.length -  0);
while (G__23241__i < G__23241__a.length) {G__23241__a[G__23241__i] = arguments[G__23241__i + 0]; ++G__23241__i;}
  p__23218 = new cljs.core.IndexedSeq(G__23241__a,0,null);
} 
return G__23240__delegate.call(this,p__23218);};
G__23240.cljs$lang$maxFixedArity = 0;
G__23240.cljs$lang$applyTo = (function (arglist__23242){
var p__23218 = cljs.core.seq(arglist__23242);
return G__23240__delegate(p__23218);
});
G__23240.cljs$core$IFn$_invoke$arity$variadic = G__23240__delegate;
return G__23240;
})()
], null);
game.app.player_fns = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"create","create",-1301499256),(function() { 
var G__23243__delegate = function (p__23220){
var map__23221 = p__23220;
var map__23221__$1 = cljs.core.__destructure_map(map__23221);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23221__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var velocity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23221__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"velocity","velocity",-581524355),velocity,new cljs.core.Keyword(null,"radius","radius",-2073122258),(15)], null);
};
var G__23243 = function (var_args){
var p__23220 = null;
if (arguments.length > 0) {
var G__23244__i = 0, G__23244__a = new Array(arguments.length -  0);
while (G__23244__i < G__23244__a.length) {G__23244__a[G__23244__i] = arguments[G__23244__i + 0]; ++G__23244__i;}
  p__23220 = new cljs.core.IndexedSeq(G__23244__a,0,null);
} 
return G__23243__delegate.call(this,p__23220);};
G__23243.cljs$lang$maxFixedArity = 0;
G__23243.cljs$lang$applyTo = (function (arglist__23245){
var p__23220 = cljs.core.seq(arglist__23245);
return G__23243__delegate(p__23220);
});
G__23243.cljs$core$IFn$_invoke$arity$variadic = G__23243__delegate;
return G__23243;
})()
,new cljs.core.Keyword(null,"draw","draw",1358331674),(function() { 
var G__23246__delegate = function (p__23222){
var map__23223 = p__23222;
var map__23223__$1 = cljs.core.__destructure_map(map__23223);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var radius = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23223__$1,new cljs.core.Keyword(null,"radius","radius",-2073122258));
game.app.c.beginPath();

game.app.c.arc((position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185)) : position.call(null,new cljs.core.Keyword(null,"x","x",2099068185))),(position.cljs$core$IFn$_invoke$arity$1 ? position.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776)) : position.call(null,new cljs.core.Keyword(null,"y","y",-1757859776))),radius,(0),((2) * Math.PI));

(game.app.c.fillStyle = "yellow");

game.app.c.fill();

return game.app.c.closePath();
};
var G__23246 = function (var_args){
var p__23222 = null;
if (arguments.length > 0) {
var G__23247__i = 0, G__23247__a = new Array(arguments.length -  0);
while (G__23247__i < G__23247__a.length) {G__23247__a[G__23247__i] = arguments[G__23247__i + 0]; ++G__23247__i;}
  p__23222 = new cljs.core.IndexedSeq(G__23247__a,0,null);
} 
return G__23246__delegate.call(this,p__23222);};
G__23246.cljs$lang$maxFixedArity = 0;
G__23246.cljs$lang$applyTo = (function (arglist__23248){
var p__23222 = cljs.core.seq(arglist__23248);
return G__23246__delegate(p__23222);
});
G__23246.cljs$core$IFn$_invoke$arity$variadic = G__23246__delegate;
return G__23246;
})()
], null);
game.app.map_to_boundaries = (function game$app$map_to_boundaries(game_map){
var iter__5523__auto__ = (function game$app$map_to_boundaries_$_iter__23224(s__23225){
return (new cljs.core.LazySeq(null,(function (){
var s__23225__$1 = s__23225;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23225__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var i = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__23225__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function game$app$map_to_boundaries_$_iter__23224_$_iter__23226(s__23227){
return (new cljs.core.LazySeq(null,((function (s__23225__$1,i,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__23227__$1 = s__23227;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23227__$1);
if(temp__5804__auto____$1){
var s__23227__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23227__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23227__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23229 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23228 = (0);
while(true){
if((i__23228 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__23228);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
cljs.core.chunk_append(b__23229,(function (){var G__23231 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"width","width",-384071477))) * j),new cljs.core.Keyword(null,"y","y",-1757859776),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"height","height",1025178622))) * i)], null)], null);
var fexpr__23230 = (game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"create","create",-1301499256)) : game.app.boundary_fns.call(null,new cljs.core.Keyword(null,"create","create",-1301499256)));
return (fexpr__23230.cljs$core$IFn$_invoke$arity$1 ? fexpr__23230.cljs$core$IFn$_invoke$arity$1(G__23231) : fexpr__23230.call(null,G__23231));
})());

var G__23249 = (i__23228 + (1));
i__23228 = G__23249;
continue;
} else {
var G__23250 = (i__23228 + (1));
i__23228 = G__23250;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23229),game$app$map_to_boundaries_$_iter__23224_$_iter__23226(cljs.core.chunk_rest(s__23227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23229),null);
}
} else {
var j = cljs.core.first(s__23227__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("-",cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))){
return cljs.core.cons((function (){var G__23233 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"width","width",-384071477))) * j),new cljs.core.Keyword(null,"y","y",-1757859776),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"height","height",1025178622))) * i)], null)], null);
var fexpr__23232 = (game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"create","create",-1301499256)) : game.app.boundary_fns.call(null,new cljs.core.Keyword(null,"create","create",-1301499256)));
return (fexpr__23232.cljs$core$IFn$_invoke$arity$1 ? fexpr__23232.cljs$core$IFn$_invoke$arity$1(G__23233) : fexpr__23232.call(null,G__23233));
})(),game$app$map_to_boundaries_$_iter__23224_$_iter__23226(cljs.core.rest(s__23227__$2)));
} else {
var G__23251 = cljs.core.rest(s__23227__$2);
s__23227__$1 = G__23251;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__23225__$1,i,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__23225__$1,i,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(game_map,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null))))));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,game$app$map_to_boundaries_$_iter__23224(cljs.core.rest(s__23225__$1)));
} else {
var G__23252 = cljs.core.rest(s__23225__$1);
s__23225__$1 = G__23252;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(game_map)));
});
game.app.game_map = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-","-","-","-","-"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"," "," "," "," ","-"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"," ","-","-"," ","-"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-"," "," "," "," ","-"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-","-","-","-","-","-"], null)], null);
game.app.boundaries = game.app.map_to_boundaries(game.app.game_map);
cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"draw","draw",1358331674)) : game.app.boundary_fns.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674))),game.app.boundaries);
game.app.player = (function (){var G__23235 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"width","width",-384071477))) + ((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"width","width",-384071477))) / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"height","height",1025178622))) + ((game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1 ? game.app.boundary_consts.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622)) : game.app.boundary_consts.call(null,new cljs.core.Keyword(null,"height","height",1025178622))) / (2)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0)], null)], null);
var fexpr__23234 = (game.app.player_fns.cljs$core$IFn$_invoke$arity$1 ? game.app.player_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"create","create",-1301499256)) : game.app.player_fns.call(null,new cljs.core.Keyword(null,"create","create",-1301499256)));
return (fexpr__23234.cljs$core$IFn$_invoke$arity$1 ? fexpr__23234.cljs$core$IFn$_invoke$arity$1(G__23235) : fexpr__23234.call(null,G__23235));
})();
var fexpr__23236_23253 = (game.app.player_fns.cljs$core$IFn$_invoke$arity$1 ? game.app.player_fns.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"draw","draw",1358331674)) : game.app.player_fns.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674)));
(fexpr__23236_23253.cljs$core$IFn$_invoke$arity$1 ? fexpr__23236_23253.cljs$core$IFn$_invoke$arity$1(game.app.player) : fexpr__23236_23253.call(null,game.app.player));
window.addEventListener("keydown",(function (event){
return null;
}));
game.app.init = (function game$app$init(){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["game has started"], 0));
});

//# sourceMappingURL=game.app.js.map

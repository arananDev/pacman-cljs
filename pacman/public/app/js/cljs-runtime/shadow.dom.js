goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18045 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18045(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18047 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18047(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__16891 = coll;
var G__16892 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__16891,G__16892) : shadow.dom.lazy_native_coll_seq.call(null,G__16891,G__16892));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__16952 = arguments.length;
switch (G__16952) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__16960 = arguments.length;
switch (G__16960) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__16969 = arguments.length;
switch (G__16969) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__16998 = arguments.length;
switch (G__16998) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17029 = arguments.length;
switch (G__17029) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17038){if((e17038 instanceof Object)){
var e = e17038;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17038;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17057 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17058 = null;
var count__17059 = (0);
var i__17060 = (0);
while(true){
if((i__17060 < count__17059)){
var el = chunk__17058.cljs$core$IIndexed$_nth$arity$2(null,i__17060);
var handler_18062__$1 = ((function (seq__17057,chunk__17058,count__17059,i__17060,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17057,chunk__17058,count__17059,i__17060,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18062__$1);


var G__18063 = seq__17057;
var G__18064 = chunk__17058;
var G__18065 = count__17059;
var G__18066 = (i__17060 + (1));
seq__17057 = G__18063;
chunk__17058 = G__18064;
count__17059 = G__18065;
i__17060 = G__18066;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17057);
if(temp__5804__auto__){
var seq__17057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17057__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17057__$1);
var G__18067 = cljs.core.chunk_rest(seq__17057__$1);
var G__18068 = c__5568__auto__;
var G__18069 = cljs.core.count(c__5568__auto__);
var G__18070 = (0);
seq__17057 = G__18067;
chunk__17058 = G__18068;
count__17059 = G__18069;
i__17060 = G__18070;
continue;
} else {
var el = cljs.core.first(seq__17057__$1);
var handler_18073__$1 = ((function (seq__17057,chunk__17058,count__17059,i__17060,el,seq__17057__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17057,chunk__17058,count__17059,i__17060,el,seq__17057__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18073__$1);


var G__18074 = cljs.core.next(seq__17057__$1);
var G__18075 = null;
var G__18076 = (0);
var G__18077 = (0);
seq__17057 = G__18074;
chunk__17058 = G__18075;
count__17059 = G__18076;
i__17060 = G__18077;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17087 = arguments.length;
switch (G__17087) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17100 = cljs.core.seq(events);
var chunk__17101 = null;
var count__17102 = (0);
var i__17103 = (0);
while(true){
if((i__17103 < count__17102)){
var vec__17115 = chunk__17101.cljs$core$IIndexed$_nth$arity$2(null,i__17103);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17115,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18079 = seq__17100;
var G__18080 = chunk__17101;
var G__18081 = count__17102;
var G__18082 = (i__17103 + (1));
seq__17100 = G__18079;
chunk__17101 = G__18080;
count__17102 = G__18081;
i__17103 = G__18082;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17100);
if(temp__5804__auto__){
var seq__17100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17100__$1);
var G__18083 = cljs.core.chunk_rest(seq__17100__$1);
var G__18084 = c__5568__auto__;
var G__18085 = cljs.core.count(c__5568__auto__);
var G__18086 = (0);
seq__17100 = G__18083;
chunk__17101 = G__18084;
count__17102 = G__18085;
i__17103 = G__18086;
continue;
} else {
var vec__17136 = cljs.core.first(seq__17100__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17136,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18087 = cljs.core.next(seq__17100__$1);
var G__18088 = null;
var G__18089 = (0);
var G__18090 = (0);
seq__17100 = G__18087;
chunk__17101 = G__18088;
count__17102 = G__18089;
i__17103 = G__18090;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17139 = cljs.core.seq(styles);
var chunk__17140 = null;
var count__17141 = (0);
var i__17142 = (0);
while(true){
if((i__17142 < count__17141)){
var vec__17153 = chunk__17140.cljs$core$IIndexed$_nth$arity$2(null,i__17142);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17153,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18091 = seq__17139;
var G__18092 = chunk__17140;
var G__18093 = count__17141;
var G__18094 = (i__17142 + (1));
seq__17139 = G__18091;
chunk__17140 = G__18092;
count__17141 = G__18093;
i__17142 = G__18094;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17139);
if(temp__5804__auto__){
var seq__17139__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17139__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17139__$1);
var G__18095 = cljs.core.chunk_rest(seq__17139__$1);
var G__18096 = c__5568__auto__;
var G__18097 = cljs.core.count(c__5568__auto__);
var G__18098 = (0);
seq__17139 = G__18095;
chunk__17140 = G__18096;
count__17141 = G__18097;
i__17142 = G__18098;
continue;
} else {
var vec__17160 = cljs.core.first(seq__17139__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17160,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18101 = cljs.core.next(seq__17139__$1);
var G__18102 = null;
var G__18103 = (0);
var G__18104 = (0);
seq__17139 = G__18101;
chunk__17140 = G__18102;
count__17141 = G__18103;
i__17142 = G__18104;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17164_18105 = key;
var G__17164_18106__$1 = (((G__17164_18105 instanceof cljs.core.Keyword))?G__17164_18105.fqn:null);
switch (G__17164_18106__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18108 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18108,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18108,"aria-");
}
})())){
el.setAttribute(ks_18108,value);
} else {
(el[ks_18108] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17200){
var map__17201 = p__17200;
var map__17201__$1 = cljs.core.__destructure_map(map__17201);
var props = map__17201__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17201__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17208 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17208,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17216 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17216,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17216;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17224 = arguments.length;
switch (G__17224) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17240){
var vec__17242 = p__17240;
var seq__17243 = cljs.core.seq(vec__17242);
var first__17244 = cljs.core.first(seq__17243);
var seq__17243__$1 = cljs.core.next(seq__17243);
var nn = first__17244;
var first__17244__$1 = cljs.core.first(seq__17243__$1);
var seq__17243__$2 = cljs.core.next(seq__17243__$1);
var np = first__17244__$1;
var nc = seq__17243__$2;
var node = vec__17242;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17252 = nn;
var G__17253 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17252,G__17253) : create_fn.call(null,G__17252,G__17253));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17256 = nn;
var G__17257 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17256,G__17257) : create_fn.call(null,G__17256,G__17257));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17262 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17262,(1),null);
var seq__17269_18112 = cljs.core.seq(node_children);
var chunk__17270_18113 = null;
var count__17271_18114 = (0);
var i__17272_18115 = (0);
while(true){
if((i__17272_18115 < count__17271_18114)){
var child_struct_18116 = chunk__17270_18113.cljs$core$IIndexed$_nth$arity$2(null,i__17272_18115);
var children_18117 = shadow.dom.dom_node(child_struct_18116);
if(cljs.core.seq_QMARK_(children_18117)){
var seq__17298_18118 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18117));
var chunk__17300_18119 = null;
var count__17301_18120 = (0);
var i__17302_18121 = (0);
while(true){
if((i__17302_18121 < count__17301_18120)){
var child_18122 = chunk__17300_18119.cljs$core$IIndexed$_nth$arity$2(null,i__17302_18121);
if(cljs.core.truth_(child_18122)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18122);


var G__18123 = seq__17298_18118;
var G__18124 = chunk__17300_18119;
var G__18125 = count__17301_18120;
var G__18126 = (i__17302_18121 + (1));
seq__17298_18118 = G__18123;
chunk__17300_18119 = G__18124;
count__17301_18120 = G__18125;
i__17302_18121 = G__18126;
continue;
} else {
var G__18127 = seq__17298_18118;
var G__18128 = chunk__17300_18119;
var G__18129 = count__17301_18120;
var G__18130 = (i__17302_18121 + (1));
seq__17298_18118 = G__18127;
chunk__17300_18119 = G__18128;
count__17301_18120 = G__18129;
i__17302_18121 = G__18130;
continue;
}
} else {
var temp__5804__auto___18131 = cljs.core.seq(seq__17298_18118);
if(temp__5804__auto___18131){
var seq__17298_18132__$1 = temp__5804__auto___18131;
if(cljs.core.chunked_seq_QMARK_(seq__17298_18132__$1)){
var c__5568__auto___18133 = cljs.core.chunk_first(seq__17298_18132__$1);
var G__18134 = cljs.core.chunk_rest(seq__17298_18132__$1);
var G__18135 = c__5568__auto___18133;
var G__18136 = cljs.core.count(c__5568__auto___18133);
var G__18137 = (0);
seq__17298_18118 = G__18134;
chunk__17300_18119 = G__18135;
count__17301_18120 = G__18136;
i__17302_18121 = G__18137;
continue;
} else {
var child_18138 = cljs.core.first(seq__17298_18132__$1);
if(cljs.core.truth_(child_18138)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18138);


var G__18139 = cljs.core.next(seq__17298_18132__$1);
var G__18140 = null;
var G__18141 = (0);
var G__18142 = (0);
seq__17298_18118 = G__18139;
chunk__17300_18119 = G__18140;
count__17301_18120 = G__18141;
i__17302_18121 = G__18142;
continue;
} else {
var G__18143 = cljs.core.next(seq__17298_18132__$1);
var G__18144 = null;
var G__18145 = (0);
var G__18146 = (0);
seq__17298_18118 = G__18143;
chunk__17300_18119 = G__18144;
count__17301_18120 = G__18145;
i__17302_18121 = G__18146;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18117);
}


var G__18147 = seq__17269_18112;
var G__18148 = chunk__17270_18113;
var G__18149 = count__17271_18114;
var G__18150 = (i__17272_18115 + (1));
seq__17269_18112 = G__18147;
chunk__17270_18113 = G__18148;
count__17271_18114 = G__18149;
i__17272_18115 = G__18150;
continue;
} else {
var temp__5804__auto___18151 = cljs.core.seq(seq__17269_18112);
if(temp__5804__auto___18151){
var seq__17269_18152__$1 = temp__5804__auto___18151;
if(cljs.core.chunked_seq_QMARK_(seq__17269_18152__$1)){
var c__5568__auto___18153 = cljs.core.chunk_first(seq__17269_18152__$1);
var G__18154 = cljs.core.chunk_rest(seq__17269_18152__$1);
var G__18155 = c__5568__auto___18153;
var G__18156 = cljs.core.count(c__5568__auto___18153);
var G__18157 = (0);
seq__17269_18112 = G__18154;
chunk__17270_18113 = G__18155;
count__17271_18114 = G__18156;
i__17272_18115 = G__18157;
continue;
} else {
var child_struct_18158 = cljs.core.first(seq__17269_18152__$1);
var children_18159 = shadow.dom.dom_node(child_struct_18158);
if(cljs.core.seq_QMARK_(children_18159)){
var seq__17325_18160 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18159));
var chunk__17327_18161 = null;
var count__17328_18162 = (0);
var i__17329_18163 = (0);
while(true){
if((i__17329_18163 < count__17328_18162)){
var child_18164 = chunk__17327_18161.cljs$core$IIndexed$_nth$arity$2(null,i__17329_18163);
if(cljs.core.truth_(child_18164)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18164);


var G__18165 = seq__17325_18160;
var G__18166 = chunk__17327_18161;
var G__18167 = count__17328_18162;
var G__18168 = (i__17329_18163 + (1));
seq__17325_18160 = G__18165;
chunk__17327_18161 = G__18166;
count__17328_18162 = G__18167;
i__17329_18163 = G__18168;
continue;
} else {
var G__18169 = seq__17325_18160;
var G__18170 = chunk__17327_18161;
var G__18171 = count__17328_18162;
var G__18172 = (i__17329_18163 + (1));
seq__17325_18160 = G__18169;
chunk__17327_18161 = G__18170;
count__17328_18162 = G__18171;
i__17329_18163 = G__18172;
continue;
}
} else {
var temp__5804__auto___18173__$1 = cljs.core.seq(seq__17325_18160);
if(temp__5804__auto___18173__$1){
var seq__17325_18174__$1 = temp__5804__auto___18173__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17325_18174__$1)){
var c__5568__auto___18175 = cljs.core.chunk_first(seq__17325_18174__$1);
var G__18176 = cljs.core.chunk_rest(seq__17325_18174__$1);
var G__18177 = c__5568__auto___18175;
var G__18178 = cljs.core.count(c__5568__auto___18175);
var G__18179 = (0);
seq__17325_18160 = G__18176;
chunk__17327_18161 = G__18177;
count__17328_18162 = G__18178;
i__17329_18163 = G__18179;
continue;
} else {
var child_18180 = cljs.core.first(seq__17325_18174__$1);
if(cljs.core.truth_(child_18180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18180);


var G__18181 = cljs.core.next(seq__17325_18174__$1);
var G__18182 = null;
var G__18183 = (0);
var G__18184 = (0);
seq__17325_18160 = G__18181;
chunk__17327_18161 = G__18182;
count__17328_18162 = G__18183;
i__17329_18163 = G__18184;
continue;
} else {
var G__18185 = cljs.core.next(seq__17325_18174__$1);
var G__18186 = null;
var G__18187 = (0);
var G__18188 = (0);
seq__17325_18160 = G__18185;
chunk__17327_18161 = G__18186;
count__17328_18162 = G__18187;
i__17329_18163 = G__18188;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18159);
}


var G__18189 = cljs.core.next(seq__17269_18152__$1);
var G__18190 = null;
var G__18191 = (0);
var G__18192 = (0);
seq__17269_18112 = G__18189;
chunk__17270_18113 = G__18190;
count__17271_18114 = G__18191;
i__17272_18115 = G__18192;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17351 = cljs.core.seq(node);
var chunk__17352 = null;
var count__17354 = (0);
var i__17355 = (0);
while(true){
if((i__17355 < count__17354)){
var n = chunk__17352.cljs$core$IIndexed$_nth$arity$2(null,i__17355);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18195 = seq__17351;
var G__18196 = chunk__17352;
var G__18197 = count__17354;
var G__18198 = (i__17355 + (1));
seq__17351 = G__18195;
chunk__17352 = G__18196;
count__17354 = G__18197;
i__17355 = G__18198;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17351);
if(temp__5804__auto__){
var seq__17351__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17351__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17351__$1);
var G__18199 = cljs.core.chunk_rest(seq__17351__$1);
var G__18200 = c__5568__auto__;
var G__18201 = cljs.core.count(c__5568__auto__);
var G__18202 = (0);
seq__17351 = G__18199;
chunk__17352 = G__18200;
count__17354 = G__18201;
i__17355 = G__18202;
continue;
} else {
var n = cljs.core.first(seq__17351__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18203 = cljs.core.next(seq__17351__$1);
var G__18204 = null;
var G__18205 = (0);
var G__18206 = (0);
seq__17351 = G__18203;
chunk__17352 = G__18204;
count__17354 = G__18205;
i__17355 = G__18206;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17389 = arguments.length;
switch (G__17389) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17409 = arguments.length;
switch (G__17409) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17422 = arguments.length;
switch (G__17422) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18215 = arguments.length;
var i__5770__auto___18216 = (0);
while(true){
if((i__5770__auto___18216 < len__5769__auto___18215)){
args__5775__auto__.push((arguments[i__5770__auto___18216]));

var G__18217 = (i__5770__auto___18216 + (1));
i__5770__auto___18216 = G__18217;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17443_18218 = cljs.core.seq(nodes);
var chunk__17444_18219 = null;
var count__17445_18220 = (0);
var i__17446_18221 = (0);
while(true){
if((i__17446_18221 < count__17445_18220)){
var node_18222 = chunk__17444_18219.cljs$core$IIndexed$_nth$arity$2(null,i__17446_18221);
fragment.appendChild(shadow.dom._to_dom(node_18222));


var G__18223 = seq__17443_18218;
var G__18224 = chunk__17444_18219;
var G__18225 = count__17445_18220;
var G__18226 = (i__17446_18221 + (1));
seq__17443_18218 = G__18223;
chunk__17444_18219 = G__18224;
count__17445_18220 = G__18225;
i__17446_18221 = G__18226;
continue;
} else {
var temp__5804__auto___18227 = cljs.core.seq(seq__17443_18218);
if(temp__5804__auto___18227){
var seq__17443_18228__$1 = temp__5804__auto___18227;
if(cljs.core.chunked_seq_QMARK_(seq__17443_18228__$1)){
var c__5568__auto___18229 = cljs.core.chunk_first(seq__17443_18228__$1);
var G__18230 = cljs.core.chunk_rest(seq__17443_18228__$1);
var G__18231 = c__5568__auto___18229;
var G__18232 = cljs.core.count(c__5568__auto___18229);
var G__18233 = (0);
seq__17443_18218 = G__18230;
chunk__17444_18219 = G__18231;
count__17445_18220 = G__18232;
i__17446_18221 = G__18233;
continue;
} else {
var node_18234 = cljs.core.first(seq__17443_18228__$1);
fragment.appendChild(shadow.dom._to_dom(node_18234));


var G__18235 = cljs.core.next(seq__17443_18228__$1);
var G__18236 = null;
var G__18237 = (0);
var G__18238 = (0);
seq__17443_18218 = G__18235;
chunk__17444_18219 = G__18236;
count__17445_18220 = G__18237;
i__17446_18221 = G__18238;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17435){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17435));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17480_18240 = cljs.core.seq(scripts);
var chunk__17481_18241 = null;
var count__17482_18242 = (0);
var i__17483_18243 = (0);
while(true){
if((i__17483_18243 < count__17482_18242)){
var vec__17518_18244 = chunk__17481_18241.cljs$core$IIndexed$_nth$arity$2(null,i__17483_18243);
var script_tag_18245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518_18244,(0),null);
var script_body_18246 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17518_18244,(1),null);
eval(script_body_18246);


var G__18247 = seq__17480_18240;
var G__18248 = chunk__17481_18241;
var G__18249 = count__17482_18242;
var G__18250 = (i__17483_18243 + (1));
seq__17480_18240 = G__18247;
chunk__17481_18241 = G__18248;
count__17482_18242 = G__18249;
i__17483_18243 = G__18250;
continue;
} else {
var temp__5804__auto___18251 = cljs.core.seq(seq__17480_18240);
if(temp__5804__auto___18251){
var seq__17480_18255__$1 = temp__5804__auto___18251;
if(cljs.core.chunked_seq_QMARK_(seq__17480_18255__$1)){
var c__5568__auto___18256 = cljs.core.chunk_first(seq__17480_18255__$1);
var G__18257 = cljs.core.chunk_rest(seq__17480_18255__$1);
var G__18258 = c__5568__auto___18256;
var G__18259 = cljs.core.count(c__5568__auto___18256);
var G__18260 = (0);
seq__17480_18240 = G__18257;
chunk__17481_18241 = G__18258;
count__17482_18242 = G__18259;
i__17483_18243 = G__18260;
continue;
} else {
var vec__17524_18261 = cljs.core.first(seq__17480_18255__$1);
var script_tag_18262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17524_18261,(0),null);
var script_body_18263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17524_18261,(1),null);
eval(script_body_18263);


var G__18264 = cljs.core.next(seq__17480_18255__$1);
var G__18265 = null;
var G__18266 = (0);
var G__18267 = (0);
seq__17480_18240 = G__18264;
chunk__17481_18241 = G__18265;
count__17482_18242 = G__18266;
i__17483_18243 = G__18267;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17528){
var vec__17529 = p__17528;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17529,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17529,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17567 = arguments.length;
switch (G__17567) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17589 = cljs.core.seq(style_keys);
var chunk__17590 = null;
var count__17591 = (0);
var i__17592 = (0);
while(true){
if((i__17592 < count__17591)){
var it = chunk__17590.cljs$core$IIndexed$_nth$arity$2(null,i__17592);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18280 = seq__17589;
var G__18281 = chunk__17590;
var G__18282 = count__17591;
var G__18283 = (i__17592 + (1));
seq__17589 = G__18280;
chunk__17590 = G__18281;
count__17591 = G__18282;
i__17592 = G__18283;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17589);
if(temp__5804__auto__){
var seq__17589__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17589__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17589__$1);
var G__18284 = cljs.core.chunk_rest(seq__17589__$1);
var G__18285 = c__5568__auto__;
var G__18286 = cljs.core.count(c__5568__auto__);
var G__18287 = (0);
seq__17589 = G__18284;
chunk__17590 = G__18285;
count__17591 = G__18286;
i__17592 = G__18287;
continue;
} else {
var it = cljs.core.first(seq__17589__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__18289 = cljs.core.next(seq__17589__$1);
var G__18290 = null;
var G__18291 = (0);
var G__18292 = (0);
seq__17589 = G__18289;
chunk__17590 = G__18290;
count__17591 = G__18291;
i__17592 = G__18292;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17605,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17612 = k17605;
var G__17612__$1 = (((G__17612 instanceof cljs.core.Keyword))?G__17612.fqn:null);
switch (G__17612__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17605,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17616){
var vec__17618 = p__17616;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17618,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17618,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17604){
var self__ = this;
var G__17604__$1 = this;
return (new cljs.core.RecordIter((0),G__17604__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17606,other17607){
var self__ = this;
var this17606__$1 = this;
return (((!((other17607 == null)))) && ((((this17606__$1.constructor === other17607.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17606__$1.x,other17607.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17606__$1.y,other17607.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17606__$1.__extmap,other17607.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17605){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17652 = k17605;
var G__17652__$1 = (((G__17652 instanceof cljs.core.Keyword))?G__17652.fqn:null);
switch (G__17652__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17605);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17604){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17659 = cljs.core.keyword_identical_QMARK_;
var expr__17660 = k__5352__auto__;
if(cljs.core.truth_((pred__17659.cljs$core$IFn$_invoke$arity$2 ? pred__17659.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__17660) : pred__17659.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__17660)))){
return (new shadow.dom.Coordinate(G__17604,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17659.cljs$core$IFn$_invoke$arity$2 ? pred__17659.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__17660) : pred__17659.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__17660)))){
return (new shadow.dom.Coordinate(self__.x,G__17604,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17604),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17604){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17604,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17611){
var extmap__5385__auto__ = (function (){var G__17672 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17611,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17611)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17672);
} else {
return G__17672;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17611),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17611),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17688,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__17701 = k17688;
var G__17701__$1 = (((G__17701 instanceof cljs.core.Keyword))?G__17701.fqn:null);
switch (G__17701__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17688,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__17708){
var vec__17710 = p__17708;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17710,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17687){
var self__ = this;
var G__17687__$1 = this;
return (new cljs.core.RecordIter((0),G__17687__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17690,other17691){
var self__ = this;
var this17690__$1 = this;
return (((!((other17691 == null)))) && ((((this17690__$1.constructor === other17691.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17690__$1.w,other17691.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17690__$1.h,other17691.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17690__$1.__extmap,other17691.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17688){
var self__ = this;
var this__5350__auto____$1 = this;
var G__17740 = k17688;
var G__17740__$1 = (((G__17740 instanceof cljs.core.Keyword))?G__17740.fqn:null);
switch (G__17740__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17688);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17687){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__17741 = cljs.core.keyword_identical_QMARK_;
var expr__17742 = k__5352__auto__;
if(cljs.core.truth_((pred__17741.cljs$core$IFn$_invoke$arity$2 ? pred__17741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__17742) : pred__17741.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__17742)))){
return (new shadow.dom.Size(G__17687,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__17741.cljs$core$IFn$_invoke$arity$2 ? pred__17741.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__17742) : pred__17741.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__17742)))){
return (new shadow.dom.Size(self__.w,G__17687,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17687),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17687){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__17687,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__17693){
var extmap__5385__auto__ = (function (){var G__17807 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17693,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__17693)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__17807);
} else {
return G__17807;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__17693),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__17693),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__18340 = (i + (1));
var G__18341 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__18340;
ret = G__18341;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__17827){
var vec__17828 = p__17827;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17828,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17828,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__17832 = arguments.length;
switch (G__17832) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__18345 = ps;
var G__18346 = (i + (1));
el__$1 = G__18345;
i = G__18346;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__17865 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17865,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17865,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17865,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__17869_18359 = cljs.core.seq(props);
var chunk__17870_18360 = null;
var count__17871_18361 = (0);
var i__17872_18362 = (0);
while(true){
if((i__17872_18362 < count__17871_18361)){
var vec__17879_18363 = chunk__17870_18360.cljs$core$IIndexed$_nth$arity$2(null,i__17872_18362);
var k_18364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879_18363,(0),null);
var v_18365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17879_18363,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_18364);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18364),v_18365);


var G__18366 = seq__17869_18359;
var G__18367 = chunk__17870_18360;
var G__18368 = count__17871_18361;
var G__18369 = (i__17872_18362 + (1));
seq__17869_18359 = G__18366;
chunk__17870_18360 = G__18367;
count__17871_18361 = G__18368;
i__17872_18362 = G__18369;
continue;
} else {
var temp__5804__auto___18373 = cljs.core.seq(seq__17869_18359);
if(temp__5804__auto___18373){
var seq__17869_18374__$1 = temp__5804__auto___18373;
if(cljs.core.chunked_seq_QMARK_(seq__17869_18374__$1)){
var c__5568__auto___18375 = cljs.core.chunk_first(seq__17869_18374__$1);
var G__18376 = cljs.core.chunk_rest(seq__17869_18374__$1);
var G__18377 = c__5568__auto___18375;
var G__18378 = cljs.core.count(c__5568__auto___18375);
var G__18379 = (0);
seq__17869_18359 = G__18376;
chunk__17870_18360 = G__18377;
count__17871_18361 = G__18378;
i__17872_18362 = G__18379;
continue;
} else {
var vec__17882_18380 = cljs.core.first(seq__17869_18374__$1);
var k_18381 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882_18380,(0),null);
var v_18382 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17882_18380,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_18381);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_18381),v_18382);


var G__18383 = cljs.core.next(seq__17869_18374__$1);
var G__18384 = null;
var G__18385 = (0);
var G__18386 = (0);
seq__17869_18359 = G__18383;
chunk__17870_18360 = G__18384;
count__17871_18361 = G__18385;
i__17872_18362 = G__18386;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__17904 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17904,(1),null);
var seq__17907_18387 = cljs.core.seq(node_children);
var chunk__17909_18388 = null;
var count__17910_18389 = (0);
var i__17911_18390 = (0);
while(true){
if((i__17911_18390 < count__17910_18389)){
var child_struct_18391 = chunk__17909_18388.cljs$core$IIndexed$_nth$arity$2(null,i__17911_18390);
if((!((child_struct_18391 == null)))){
if(typeof child_struct_18391 === 'string'){
var text_18392 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18392),child_struct_18391].join(''));
} else {
var children_18393 = shadow.dom.svg_node(child_struct_18391);
if(cljs.core.seq_QMARK_(children_18393)){
var seq__17941_18394 = cljs.core.seq(children_18393);
var chunk__17943_18395 = null;
var count__17944_18396 = (0);
var i__17945_18397 = (0);
while(true){
if((i__17945_18397 < count__17944_18396)){
var child_18398 = chunk__17943_18395.cljs$core$IIndexed$_nth$arity$2(null,i__17945_18397);
if(cljs.core.truth_(child_18398)){
node.appendChild(child_18398);


var G__18399 = seq__17941_18394;
var G__18400 = chunk__17943_18395;
var G__18401 = count__17944_18396;
var G__18402 = (i__17945_18397 + (1));
seq__17941_18394 = G__18399;
chunk__17943_18395 = G__18400;
count__17944_18396 = G__18401;
i__17945_18397 = G__18402;
continue;
} else {
var G__18403 = seq__17941_18394;
var G__18404 = chunk__17943_18395;
var G__18405 = count__17944_18396;
var G__18406 = (i__17945_18397 + (1));
seq__17941_18394 = G__18403;
chunk__17943_18395 = G__18404;
count__17944_18396 = G__18405;
i__17945_18397 = G__18406;
continue;
}
} else {
var temp__5804__auto___18407 = cljs.core.seq(seq__17941_18394);
if(temp__5804__auto___18407){
var seq__17941_18408__$1 = temp__5804__auto___18407;
if(cljs.core.chunked_seq_QMARK_(seq__17941_18408__$1)){
var c__5568__auto___18410 = cljs.core.chunk_first(seq__17941_18408__$1);
var G__18414 = cljs.core.chunk_rest(seq__17941_18408__$1);
var G__18415 = c__5568__auto___18410;
var G__18416 = cljs.core.count(c__5568__auto___18410);
var G__18417 = (0);
seq__17941_18394 = G__18414;
chunk__17943_18395 = G__18415;
count__17944_18396 = G__18416;
i__17945_18397 = G__18417;
continue;
} else {
var child_18418 = cljs.core.first(seq__17941_18408__$1);
if(cljs.core.truth_(child_18418)){
node.appendChild(child_18418);


var G__18419 = cljs.core.next(seq__17941_18408__$1);
var G__18420 = null;
var G__18421 = (0);
var G__18422 = (0);
seq__17941_18394 = G__18419;
chunk__17943_18395 = G__18420;
count__17944_18396 = G__18421;
i__17945_18397 = G__18422;
continue;
} else {
var G__18423 = cljs.core.next(seq__17941_18408__$1);
var G__18424 = null;
var G__18425 = (0);
var G__18426 = (0);
seq__17941_18394 = G__18423;
chunk__17943_18395 = G__18424;
count__17944_18396 = G__18425;
i__17945_18397 = G__18426;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18393);
}
}


var G__18427 = seq__17907_18387;
var G__18428 = chunk__17909_18388;
var G__18429 = count__17910_18389;
var G__18430 = (i__17911_18390 + (1));
seq__17907_18387 = G__18427;
chunk__17909_18388 = G__18428;
count__17910_18389 = G__18429;
i__17911_18390 = G__18430;
continue;
} else {
var G__18431 = seq__17907_18387;
var G__18432 = chunk__17909_18388;
var G__18433 = count__17910_18389;
var G__18434 = (i__17911_18390 + (1));
seq__17907_18387 = G__18431;
chunk__17909_18388 = G__18432;
count__17910_18389 = G__18433;
i__17911_18390 = G__18434;
continue;
}
} else {
var temp__5804__auto___18435 = cljs.core.seq(seq__17907_18387);
if(temp__5804__auto___18435){
var seq__17907_18436__$1 = temp__5804__auto___18435;
if(cljs.core.chunked_seq_QMARK_(seq__17907_18436__$1)){
var c__5568__auto___18437 = cljs.core.chunk_first(seq__17907_18436__$1);
var G__18438 = cljs.core.chunk_rest(seq__17907_18436__$1);
var G__18439 = c__5568__auto___18437;
var G__18440 = cljs.core.count(c__5568__auto___18437);
var G__18441 = (0);
seq__17907_18387 = G__18438;
chunk__17909_18388 = G__18439;
count__17910_18389 = G__18440;
i__17911_18390 = G__18441;
continue;
} else {
var child_struct_18442 = cljs.core.first(seq__17907_18436__$1);
if((!((child_struct_18442 == null)))){
if(typeof child_struct_18442 === 'string'){
var text_18443 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_18443),child_struct_18442].join(''));
} else {
var children_18444 = shadow.dom.svg_node(child_struct_18442);
if(cljs.core.seq_QMARK_(children_18444)){
var seq__17957_18445 = cljs.core.seq(children_18444);
var chunk__17959_18446 = null;
var count__17960_18447 = (0);
var i__17961_18448 = (0);
while(true){
if((i__17961_18448 < count__17960_18447)){
var child_18449 = chunk__17959_18446.cljs$core$IIndexed$_nth$arity$2(null,i__17961_18448);
if(cljs.core.truth_(child_18449)){
node.appendChild(child_18449);


var G__18450 = seq__17957_18445;
var G__18451 = chunk__17959_18446;
var G__18452 = count__17960_18447;
var G__18453 = (i__17961_18448 + (1));
seq__17957_18445 = G__18450;
chunk__17959_18446 = G__18451;
count__17960_18447 = G__18452;
i__17961_18448 = G__18453;
continue;
} else {
var G__18454 = seq__17957_18445;
var G__18455 = chunk__17959_18446;
var G__18456 = count__17960_18447;
var G__18457 = (i__17961_18448 + (1));
seq__17957_18445 = G__18454;
chunk__17959_18446 = G__18455;
count__17960_18447 = G__18456;
i__17961_18448 = G__18457;
continue;
}
} else {
var temp__5804__auto___18458__$1 = cljs.core.seq(seq__17957_18445);
if(temp__5804__auto___18458__$1){
var seq__17957_18459__$1 = temp__5804__auto___18458__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17957_18459__$1)){
var c__5568__auto___18460 = cljs.core.chunk_first(seq__17957_18459__$1);
var G__18461 = cljs.core.chunk_rest(seq__17957_18459__$1);
var G__18462 = c__5568__auto___18460;
var G__18463 = cljs.core.count(c__5568__auto___18460);
var G__18464 = (0);
seq__17957_18445 = G__18461;
chunk__17959_18446 = G__18462;
count__17960_18447 = G__18463;
i__17961_18448 = G__18464;
continue;
} else {
var child_18465 = cljs.core.first(seq__17957_18459__$1);
if(cljs.core.truth_(child_18465)){
node.appendChild(child_18465);


var G__18466 = cljs.core.next(seq__17957_18459__$1);
var G__18467 = null;
var G__18468 = (0);
var G__18469 = (0);
seq__17957_18445 = G__18466;
chunk__17959_18446 = G__18467;
count__17960_18447 = G__18468;
i__17961_18448 = G__18469;
continue;
} else {
var G__18470 = cljs.core.next(seq__17957_18459__$1);
var G__18471 = null;
var G__18472 = (0);
var G__18473 = (0);
seq__17957_18445 = G__18470;
chunk__17959_18446 = G__18471;
count__17960_18447 = G__18472;
i__17961_18448 = G__18473;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_18444);
}
}


var G__18474 = cljs.core.next(seq__17907_18436__$1);
var G__18475 = null;
var G__18476 = (0);
var G__18477 = (0);
seq__17907_18387 = G__18474;
chunk__17909_18388 = G__18475;
count__17910_18389 = G__18476;
i__17911_18390 = G__18477;
continue;
} else {
var G__18478 = cljs.core.next(seq__17907_18436__$1);
var G__18479 = null;
var G__18480 = (0);
var G__18481 = (0);
seq__17907_18387 = G__18478;
chunk__17909_18388 = G__18479;
count__17910_18389 = G__18480;
i__17911_18390 = G__18481;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18482 = arguments.length;
var i__5770__auto___18483 = (0);
while(true){
if((i__5770__auto___18483 < len__5769__auto___18482)){
args__5775__auto__.push((arguments[i__5770__auto___18483]));

var G__18484 = (i__5770__auto___18483 + (1));
i__5770__auto___18483 = G__18484;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq17983){
var G__17984 = cljs.core.first(seq17983);
var seq17983__$1 = cljs.core.next(seq17983);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17984,seq17983__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18006 = arguments.length;
switch (G__18006) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__13737__auto___18490 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_18021){
var state_val_18022 = (state_18021[(1)]);
if((state_val_18022 === (1))){
var state_18021__$1 = state_18021;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18021__$1,(2),once_or_cleanup);
} else {
if((state_val_18022 === (2))){
var inst_18018 = (state_18021[(2)]);
var inst_18019 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18021__$1 = (function (){var statearr_18028 = state_18021;
(statearr_18028[(7)] = inst_18018);

return statearr_18028;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18021__$1,inst_18019);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13419__auto__ = null;
var shadow$dom$state_machine__13419__auto____0 = (function (){
var statearr_18039 = [null,null,null,null,null,null,null,null];
(statearr_18039[(0)] = shadow$dom$state_machine__13419__auto__);

(statearr_18039[(1)] = (1));

return statearr_18039;
});
var shadow$dom$state_machine__13419__auto____1 = (function (state_18021){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_18021);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e18040){var ex__13422__auto__ = e18040;
var statearr_18041_18494 = state_18021;
(statearr_18041_18494[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_18021[(4)]))){
var statearr_18043_18495 = state_18021;
(statearr_18043_18495[(1)] = cljs.core.first((state_18021[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18496 = state_18021;
state_18021 = G__18496;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
shadow$dom$state_machine__13419__auto__ = function(state_18021){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13419__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13419__auto____1.call(this,state_18021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13419__auto____0;
shadow$dom$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13419__auto____1;
return shadow$dom$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_18044 = f__13738__auto__();
(statearr_18044[(6)] = c__13737__auto___18490);

return statearr_18044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map

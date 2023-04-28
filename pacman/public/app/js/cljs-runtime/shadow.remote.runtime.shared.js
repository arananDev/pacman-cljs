goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13920){
var map__13921 = p__13920;
var map__13921__$1 = cljs.core.__destructure_map(map__13921);
var runtime = map__13921__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13921__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14175 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14175)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13930 = runtime;
var G__13931 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14175);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13930,G__13931) : shadow.remote.runtime.shared.process.call(null,G__13930,G__13931));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13937,res){
var map__13938 = p__13937;
var map__13938__$1 = cljs.core.__destructure_map(map__13938);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13938__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13939 = res;
var G__13939__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13939,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13939);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13939__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13939__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13941 = arguments.length;
switch (G__13941) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13945,msg,handlers,timeout_after_ms){
var map__13946 = p__13945;
var map__13946__$1 = cljs.core.__destructure_map(map__13946);
var runtime = map__13946__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___14190 = arguments.length;
var i__5770__auto___14191 = (0);
while(true){
if((i__5770__auto___14191 < len__5769__auto___14190)){
args__5775__auto__.push((arguments[i__5770__auto___14191]));

var G__14193 = (i__5770__auto___14191 + (1));
i__5770__auto___14191 = G__14193;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13971,ev,args){
var map__13975 = p__13971;
var map__13975__$1 = cljs.core.__destructure_map(map__13975);
var runtime = map__13975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13979 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13982 = null;
var count__13983 = (0);
var i__13984 = (0);
while(true){
if((i__13984 < count__13983)){
var ext = chunk__13982.cljs$core$IIndexed$_nth$arity$2(null,i__13984);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14210 = seq__13979;
var G__14211 = chunk__13982;
var G__14212 = count__13983;
var G__14213 = (i__13984 + (1));
seq__13979 = G__14210;
chunk__13982 = G__14211;
count__13983 = G__14212;
i__13984 = G__14213;
continue;
} else {
var G__14214 = seq__13979;
var G__14215 = chunk__13982;
var G__14216 = count__13983;
var G__14217 = (i__13984 + (1));
seq__13979 = G__14214;
chunk__13982 = G__14215;
count__13983 = G__14216;
i__13984 = G__14217;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__13979);
if(temp__5804__auto__){
var seq__13979__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13979__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__13979__$1);
var G__14219 = cljs.core.chunk_rest(seq__13979__$1);
var G__14220 = c__5568__auto__;
var G__14221 = cljs.core.count(c__5568__auto__);
var G__14222 = (0);
seq__13979 = G__14219;
chunk__13982 = G__14220;
count__13983 = G__14221;
i__13984 = G__14222;
continue;
} else {
var ext = cljs.core.first(seq__13979__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14223 = cljs.core.next(seq__13979__$1);
var G__14224 = null;
var G__14225 = (0);
var G__14226 = (0);
seq__13979 = G__14223;
chunk__13982 = G__14224;
count__13983 = G__14225;
i__13984 = G__14226;
continue;
} else {
var G__14227 = cljs.core.next(seq__13979__$1);
var G__14228 = null;
var G__14229 = (0);
var G__14230 = (0);
seq__13979 = G__14227;
chunk__13982 = G__14228;
count__13983 = G__14229;
i__13984 = G__14230;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13961){
var G__13962 = cljs.core.first(seq13961);
var seq13961__$1 = cljs.core.next(seq13961);
var G__13963 = cljs.core.first(seq13961__$1);
var seq13961__$2 = cljs.core.next(seq13961__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13962,G__13963,seq13961__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14010,p__14011){
var map__14012 = p__14010;
var map__14012__$1 = cljs.core.__destructure_map(map__14012);
var runtime = map__14012__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14012__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14013 = p__14011;
var map__14013__$1 = cljs.core.__destructure_map(map__14013);
var msg = map__14013__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14013__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__14018 = cljs.core.deref(state_ref);
var map__14018__$1 = cljs.core.__destructure_map(map__14018);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14018__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14034,msg){
var map__14035 = p__14034;
var map__14035__$1 = cljs.core.__destructure_map(map__14035);
var runtime = map__14035__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14035__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14045,key,p__14046){
var map__14047 = p__14045;
var map__14047__$1 = cljs.core.__destructure_map(map__14047);
var state = map__14047__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14047__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14048 = p__14046;
var map__14048__$1 = cljs.core.__destructure_map(map__14048);
var spec = map__14048__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14048__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14052,key,spec){
var map__14054 = p__14052;
var map__14054__$1 = cljs.core.__destructure_map(map__14054);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14054__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14058_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14058_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14059_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14059_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14060_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14060_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14061_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14061_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14062_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14062_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14083,key){
var map__14084 = p__14083;
var map__14084__$1 = cljs.core.__destructure_map(map__14084);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14084__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14097,msg){
var map__14098 = p__14097;
var map__14098__$1 = cljs.core.__destructure_map(map__14098);
var runtime = map__14098__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14098__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14123,p__14124){
var map__14125 = p__14123;
var map__14125__$1 = cljs.core.__destructure_map(map__14125);
var runtime = map__14125__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14125__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14126 = p__14124;
var map__14126__$1 = cljs.core.__destructure_map(map__14126);
var msg = map__14126__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14126__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14126__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14135 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14137 = null;
var count__14138 = (0);
var i__14139 = (0);
while(true){
if((i__14139 < count__14138)){
var map__14149 = chunk__14137.cljs$core$IIndexed$_nth$arity$2(null,i__14139);
var map__14149__$1 = cljs.core.__destructure_map(map__14149);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14149__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14306 = seq__14135;
var G__14307 = chunk__14137;
var G__14308 = count__14138;
var G__14309 = (i__14139 + (1));
seq__14135 = G__14306;
chunk__14137 = G__14307;
count__14138 = G__14308;
i__14139 = G__14309;
continue;
} else {
var G__14310 = seq__14135;
var G__14311 = chunk__14137;
var G__14312 = count__14138;
var G__14313 = (i__14139 + (1));
seq__14135 = G__14310;
chunk__14137 = G__14311;
count__14138 = G__14312;
i__14139 = G__14313;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14135);
if(temp__5804__auto__){
var seq__14135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14135__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__14135__$1);
var G__14314 = cljs.core.chunk_rest(seq__14135__$1);
var G__14315 = c__5568__auto__;
var G__14316 = cljs.core.count(c__5568__auto__);
var G__14317 = (0);
seq__14135 = G__14314;
chunk__14137 = G__14315;
count__14138 = G__14316;
i__14139 = G__14317;
continue;
} else {
var map__14165 = cljs.core.first(seq__14135__$1);
var map__14165__$1 = cljs.core.__destructure_map(map__14165);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14165__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14318 = cljs.core.next(seq__14135__$1);
var G__14319 = null;
var G__14320 = (0);
var G__14321 = (0);
seq__14135 = G__14318;
chunk__14137 = G__14319;
count__14138 = G__14320;
i__14139 = G__14321;
continue;
} else {
var G__14322 = cljs.core.next(seq__14135__$1);
var G__14323 = null;
var G__14324 = (0);
var G__14325 = (0);
seq__14135 = G__14322;
chunk__14137 = G__14323;
count__14138 = G__14324;
i__14139 = G__14325;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__19971,p__19972){
var map__19973 = p__19971;
var map__19973__$1 = cljs.core.__destructure_map(map__19973);
var svc = map__19973__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19973__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19973__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19973__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19974 = p__19972;
var map__19974__$1 = cljs.core.__destructure_map(map__19974);
var msg = map__19974__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19974__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19974__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__19980,p__19981){
var map__19982 = p__19980;
var map__19982__$1 = cljs.core.__destructure_map(map__19982);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19982__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__19983 = p__19981;
var map__19983__$1 = cljs.core.__destructure_map(map__19983);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19983__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__19989,p__19990){
var map__19991 = p__19989;
var map__19991__$1 = cljs.core.__destructure_map(map__19991);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19991__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19991__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__19992 = p__19990;
var map__19992__$1 = cljs.core.__destructure_map(map__19992);
var msg = map__19992__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19992__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__19996,tid){
var map__19997 = p__19996;
var map__19997__$1 = cljs.core.__destructure_map(map__19997);
var svc = map__19997__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19997__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20007 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20008 = null;
var count__20009 = (0);
var i__20010 = (0);
while(true){
if((i__20010 < count__20009)){
var vec__20019 = chunk__20008.cljs$core$IIndexed$_nth$arity$2(null,i__20010);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20019,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20019,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20053 = seq__20007;
var G__20054 = chunk__20008;
var G__20055 = count__20009;
var G__20056 = (i__20010 + (1));
seq__20007 = G__20053;
chunk__20008 = G__20054;
count__20009 = G__20055;
i__20010 = G__20056;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20007);
if(temp__5804__auto__){
var seq__20007__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20007__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20007__$1);
var G__20057 = cljs.core.chunk_rest(seq__20007__$1);
var G__20058 = c__5568__auto__;
var G__20059 = cljs.core.count(c__5568__auto__);
var G__20060 = (0);
seq__20007 = G__20057;
chunk__20008 = G__20058;
count__20009 = G__20059;
i__20010 = G__20060;
continue;
} else {
var vec__20022 = cljs.core.first(seq__20007__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20022,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20022,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20061 = cljs.core.next(seq__20007__$1);
var G__20062 = null;
var G__20063 = (0);
var G__20064 = (0);
seq__20007 = G__20061;
chunk__20008 = G__20062;
count__20009 = G__20063;
i__20010 = G__20064;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__19998_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__19998_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__19999_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__19999_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20000_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20000_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20001_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20001_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20027){
var map__20028 = p__20027;
var map__20028__$1 = cljs.core.__destructure_map(map__20028);
var svc = map__20028__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20028__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20028__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

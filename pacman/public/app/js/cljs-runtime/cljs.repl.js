goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18769){
var map__18770 = p__18769;
var map__18770__$1 = cljs.core.__destructure_map(map__18770);
var m = map__18770__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18771_19244 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18772_19245 = null;
var count__18773_19246 = (0);
var i__18774_19247 = (0);
while(true){
if((i__18774_19247 < count__18773_19246)){
var f_19250 = chunk__18772_19245.cljs$core$IIndexed$_nth$arity$2(null,i__18774_19247);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19250], 0));


var G__19251 = seq__18771_19244;
var G__19252 = chunk__18772_19245;
var G__19253 = count__18773_19246;
var G__19254 = (i__18774_19247 + (1));
seq__18771_19244 = G__19251;
chunk__18772_19245 = G__19252;
count__18773_19246 = G__19253;
i__18774_19247 = G__19254;
continue;
} else {
var temp__5804__auto___19255 = cljs.core.seq(seq__18771_19244);
if(temp__5804__auto___19255){
var seq__18771_19256__$1 = temp__5804__auto___19255;
if(cljs.core.chunked_seq_QMARK_(seq__18771_19256__$1)){
var c__5568__auto___19258 = cljs.core.chunk_first(seq__18771_19256__$1);
var G__19259 = cljs.core.chunk_rest(seq__18771_19256__$1);
var G__19260 = c__5568__auto___19258;
var G__19261 = cljs.core.count(c__5568__auto___19258);
var G__19262 = (0);
seq__18771_19244 = G__19259;
chunk__18772_19245 = G__19260;
count__18773_19246 = G__19261;
i__18774_19247 = G__19262;
continue;
} else {
var f_19263 = cljs.core.first(seq__18771_19256__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19263], 0));


var G__19264 = cljs.core.next(seq__18771_19256__$1);
var G__19265 = null;
var G__19266 = (0);
var G__19267 = (0);
seq__18771_19244 = G__19264;
chunk__18772_19245 = G__19265;
count__18773_19246 = G__19266;
i__18774_19247 = G__19267;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19268 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19268], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19268)))?cljs.core.second(arglists_19268):arglists_19268)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18795_19278 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18796_19279 = null;
var count__18797_19280 = (0);
var i__18798_19281 = (0);
while(true){
if((i__18798_19281 < count__18797_19280)){
var vec__18822_19291 = chunk__18796_19279.cljs$core$IIndexed$_nth$arity$2(null,i__18798_19281);
var name_19292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822_19291,(0),null);
var map__18825_19293 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18822_19291,(1),null);
var map__18825_19294__$1 = cljs.core.__destructure_map(map__18825_19293);
var doc_19295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18825_19294__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18825_19294__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19292], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19296], 0));

if(cljs.core.truth_(doc_19295)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19295], 0));
} else {
}


var G__19297 = seq__18795_19278;
var G__19298 = chunk__18796_19279;
var G__19299 = count__18797_19280;
var G__19300 = (i__18798_19281 + (1));
seq__18795_19278 = G__19297;
chunk__18796_19279 = G__19298;
count__18797_19280 = G__19299;
i__18798_19281 = G__19300;
continue;
} else {
var temp__5804__auto___19301 = cljs.core.seq(seq__18795_19278);
if(temp__5804__auto___19301){
var seq__18795_19302__$1 = temp__5804__auto___19301;
if(cljs.core.chunked_seq_QMARK_(seq__18795_19302__$1)){
var c__5568__auto___19303 = cljs.core.chunk_first(seq__18795_19302__$1);
var G__19304 = cljs.core.chunk_rest(seq__18795_19302__$1);
var G__19305 = c__5568__auto___19303;
var G__19306 = cljs.core.count(c__5568__auto___19303);
var G__19307 = (0);
seq__18795_19278 = G__19304;
chunk__18796_19279 = G__19305;
count__18797_19280 = G__19306;
i__18798_19281 = G__19307;
continue;
} else {
var vec__18833_19308 = cljs.core.first(seq__18795_19302__$1);
var name_19309 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19308,(0),null);
var map__18836_19310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18833_19308,(1),null);
var map__18836_19311__$1 = cljs.core.__destructure_map(map__18836_19310);
var doc_19312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836_19311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18836_19311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19309], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19313], 0));

if(cljs.core.truth_(doc_19312)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19312], 0));
} else {
}


var G__19315 = cljs.core.next(seq__18795_19302__$1);
var G__19316 = null;
var G__19317 = (0);
var G__19318 = (0);
seq__18795_19278 = G__19315;
chunk__18796_19279 = G__19316;
count__18797_19280 = G__19317;
i__18798_19281 = G__19318;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18846 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18847 = null;
var count__18848 = (0);
var i__18849 = (0);
while(true){
if((i__18849 < count__18848)){
var role = chunk__18847.cljs$core$IIndexed$_nth$arity$2(null,i__18849);
var temp__5804__auto___19320__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19320__$1)){
var spec_19321 = temp__5804__auto___19320__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19321)], 0));
} else {
}


var G__19322 = seq__18846;
var G__19323 = chunk__18847;
var G__19324 = count__18848;
var G__19325 = (i__18849 + (1));
seq__18846 = G__19322;
chunk__18847 = G__19323;
count__18848 = G__19324;
i__18849 = G__19325;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18846);
if(temp__5804__auto____$1){
var seq__18846__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18846__$1);
var G__19326 = cljs.core.chunk_rest(seq__18846__$1);
var G__19327 = c__5568__auto__;
var G__19328 = cljs.core.count(c__5568__auto__);
var G__19329 = (0);
seq__18846 = G__19326;
chunk__18847 = G__19327;
count__18848 = G__19328;
i__18849 = G__19329;
continue;
} else {
var role = cljs.core.first(seq__18846__$1);
var temp__5804__auto___19330__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19330__$2)){
var spec_19331 = temp__5804__auto___19330__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19331)], 0));
} else {
}


var G__19333 = cljs.core.next(seq__18846__$1);
var G__19334 = null;
var G__19335 = (0);
var G__19336 = (0);
seq__18846 = G__19333;
chunk__18847 = G__19334;
count__18848 = G__19335;
i__18849 = G__19336;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__19345 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19346 = cljs.core.ex_cause(t);
via = G__19345;
t = G__19346;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19007 = datafied_throwable;
var map__19007__$1 = cljs.core.__destructure_map(map__19007);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19007__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19007__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19017 = cljs.core.last(via);
var map__19017__$1 = cljs.core.__destructure_map(map__19017);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19018 = data;
var map__19018__$1 = cljs.core.__destructure_map(map__19018);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19019 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19019__$1 = cljs.core.__destructure_map(map__19019);
var top_data = map__19019__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19019__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19024 = phase;
var G__19024__$1 = (((G__19024 instanceof cljs.core.Keyword))?G__19024.fqn:null);
switch (G__19024__$1) {
case "read-source":
var map__19027 = data;
var map__19027__$1 = cljs.core.__destructure_map(map__19027);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19027__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19027__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19028 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19028__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19028,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19028);
var G__19028__$2 = (cljs.core.truth_((function (){var fexpr__19029 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19029.cljs$core$IFn$_invoke$arity$1 ? fexpr__19029.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19029.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19028__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19028__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19028__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19028__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19034 = top_data;
var G__19034__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19034);
var G__19034__$2 = (cljs.core.truth_((function (){var fexpr__19035 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19035.cljs$core$IFn$_invoke$arity$1 ? fexpr__19035.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19035.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19034__$1);
var G__19034__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19034__$2);
var G__19034__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19034__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19034__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19048 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19048,(3),null);
var G__19054 = top_data;
var G__19054__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19054);
var G__19054__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19054__$1);
var G__19054__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19054__$2);
var G__19054__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19054__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19054__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19054__$4;
}

break;
case "execution":
var vec__19064 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19064,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19001_SHARP_){
var or__5045__auto__ = (p1__19001_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19071 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19071.cljs$core$IFn$_invoke$arity$1 ? fexpr__19071.cljs$core$IFn$_invoke$arity$1(p1__19001_SHARP_) : fexpr__19071.call(null,p1__19001_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19084 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19084__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19084);
var G__19084__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19084__$1);
var G__19084__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19084__$2);
var G__19084__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19084__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19084__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19084__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19024__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19136){
var map__19137 = p__19136;
var map__19137__$1 = cljs.core.__destructure_map(map__19137);
var triage_data = map__19137__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19147 = phase;
var G__19147__$1 = (((G__19147 instanceof cljs.core.Keyword))?G__19147.fqn:null);
switch (G__19147__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19148 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19149 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19150 = loc;
var G__19151 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19152_19526 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19153_19527 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19154_19528 = true;
var _STAR_print_fn_STAR__temp_val__19155_19529 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19154_19528);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19155_19529);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19104_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19104_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19153_19527);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19152_19526);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19148,G__19149,G__19150,G__19151) : format.call(null,G__19148,G__19149,G__19150,G__19151));

break;
case "macroexpansion":
var G__19163 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19164 = cause_type;
var G__19165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19166 = loc;
var G__19167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19163,G__19164,G__19165,G__19166,G__19167) : format.call(null,G__19163,G__19164,G__19165,G__19166,G__19167));

break;
case "compile-syntax-check":
var G__19168 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19169 = cause_type;
var G__19170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19171 = loc;
var G__19172 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19168,G__19169,G__19170,G__19171,G__19172) : format.call(null,G__19168,G__19169,G__19170,G__19171,G__19172));

break;
case "compilation":
var G__19173 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19174 = cause_type;
var G__19175 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19176 = loc;
var G__19177 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19173,G__19174,G__19175,G__19176,G__19177) : format.call(null,G__19173,G__19174,G__19175,G__19176,G__19177));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19178 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19179 = symbol;
var G__19180 = loc;
var G__19181 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19188_19533 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19189_19534 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19190_19535 = true;
var _STAR_print_fn_STAR__temp_val__19191_19536 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19190_19535);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19191_19536);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19108_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19108_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19189_19534);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19188_19533);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19178,G__19179,G__19180,G__19181) : format.call(null,G__19178,G__19179,G__19180,G__19181));
} else {
var G__19225 = "Execution error%s at %s(%s).\n%s\n";
var G__19226 = cause_type;
var G__19227 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19228 = loc;
var G__19229 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19225,G__19226,G__19227,G__19228,G__19229) : format.call(null,G__19225,G__19226,G__19227,G__19228,G__19229));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19147__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

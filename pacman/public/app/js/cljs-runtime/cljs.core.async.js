goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13811 = (function (f,blockable,meta13812){
this.f = f;
this.blockable = blockable;
this.meta13812 = meta13812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13813,meta13812__$1){
var self__ = this;
var _13813__$1 = this;
return (new cljs.core.async.t_cljs$core$async13811(self__.f,self__.blockable,meta13812__$1));
}));

(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13813){
var self__ = this;
var _13813__$1 = this;
return self__.meta13812;
}));

(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async13811.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async13811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta13812","meta13812",-1433408374,null)], null);
}));

(cljs.core.async.t_cljs$core$async13811.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13811.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13811");

(cljs.core.async.t_cljs$core$async13811.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13811");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13811.
 */
cljs.core.async.__GT_t_cljs$core$async13811 = (function cljs$core$async$__GT_t_cljs$core$async13811(f,blockable,meta13812){
return (new cljs.core.async.t_cljs$core$async13811(f,blockable,meta13812));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__13810 = arguments.length;
switch (G__13810) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async13811(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__13817 = arguments.length;
switch (G__13817) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__13821 = arguments.length;
switch (G__13821) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__13835 = arguments.length;
switch (G__13835) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_16858 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16858) : fn1.call(null,val_16858));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16858) : fn1.call(null,val_16858));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__13846 = arguments.length;
switch (G__13846) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___16862 = n;
var x_16863 = (0);
while(true){
if((x_16863 < n__5636__auto___16862)){
(a[x_16863] = x_16863);

var G__16864 = (x_16863 + (1));
x_16863 = G__16864;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13856 = (function (flag,meta13857){
this.flag = flag;
this.meta13857 = meta13857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13858,meta13857__$1){
var self__ = this;
var _13858__$1 = this;
return (new cljs.core.async.t_cljs$core$async13856(self__.flag,meta13857__$1));
}));

(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13858){
var self__ = this;
var _13858__$1 = this;
return self__.meta13857;
}));

(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13856.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async13856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13857","meta13857",-1748867313,null)], null);
}));

(cljs.core.async.t_cljs$core$async13856.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13856.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13856");

(cljs.core.async.t_cljs$core$async13856.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13856");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13856.
 */
cljs.core.async.__GT_t_cljs$core$async13856 = (function cljs$core$async$__GT_t_cljs$core$async13856(flag,meta13857){
return (new cljs.core.async.t_cljs$core$async13856(flag,meta13857));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async13856(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13881 = (function (flag,cb,meta13882){
this.flag = flag;
this.cb = cb;
this.meta13882 = meta13882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13883,meta13882__$1){
var self__ = this;
var _13883__$1 = this;
return (new cljs.core.async.t_cljs$core$async13881(self__.flag,self__.cb,meta13882__$1));
}));

(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13883){
var self__ = this;
var _13883__$1 = this;
return self__.meta13882;
}));

(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async13881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async13881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13882","meta13882",-2110911338,null)], null);
}));

(cljs.core.async.t_cljs$core$async13881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async13881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13881");

(cljs.core.async.t_cljs$core$async13881.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async13881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13881.
 */
cljs.core.async.__GT_t_cljs$core$async13881 = (function cljs$core$async$__GT_t_cljs$core$async13881(flag,cb,meta13882){
return (new cljs.core.async.t_cljs$core$async13881(flag,cb,meta13882));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async13881(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13895_SHARP_){
var G__13904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13895_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13904) : fret.call(null,G__13904));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13896_SHARP_){
var G__13906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13896_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__13906) : fret.call(null,G__13906));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__16893 = (i + (1));
i = G__16893;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16894 = arguments.length;
var i__5770__auto___16895 = (0);
while(true){
if((i__5770__auto___16895 < len__5769__auto___16894)){
args__5775__auto__.push((arguments[i__5770__auto___16895]));

var G__16896 = (i__5770__auto___16895 + (1));
i__5770__auto___16895 = G__16896;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13912){
var map__13936 = p__13912;
var map__13936__$1 = cljs.core.__destructure_map(map__13936);
var opts = map__13936__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13909){
var G__13910 = cljs.core.first(seq13909);
var seq13909__$1 = cljs.core.next(seq13909);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13910,seq13909__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__13944 = arguments.length;
switch (G__13944) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__13737__auto___16903 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_13996){
var state_val_13997 = (state_13996[(1)]);
if((state_val_13997 === (7))){
var inst_13992 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_14006_16904 = state_13996__$1;
(statearr_14006_16904[(2)] = inst_13992);

(statearr_14006_16904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (1))){
var state_13996__$1 = state_13996;
var statearr_14007_16906 = state_13996__$1;
(statearr_14007_16906[(2)] = null);

(statearr_14007_16906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (4))){
var inst_13965 = (state_13996[(7)]);
var inst_13965__$1 = (state_13996[(2)]);
var inst_13966 = (inst_13965__$1 == null);
var state_13996__$1 = (function (){var statearr_14014 = state_13996;
(statearr_14014[(7)] = inst_13965__$1);

return statearr_14014;
})();
if(cljs.core.truth_(inst_13966)){
var statearr_14016_16908 = state_13996__$1;
(statearr_14016_16908[(1)] = (5));

} else {
var statearr_14020_16909 = state_13996__$1;
(statearr_14020_16909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (13))){
var state_13996__$1 = state_13996;
var statearr_14021_16910 = state_13996__$1;
(statearr_14021_16910[(2)] = null);

(statearr_14021_16910[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (6))){
var inst_13965 = (state_13996[(7)]);
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13996__$1,(11),to,inst_13965);
} else {
if((state_val_13997 === (3))){
var inst_13994 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_13996__$1,inst_13994);
} else {
if((state_val_13997 === (12))){
var state_13996__$1 = state_13996;
var statearr_14024_16911 = state_13996__$1;
(statearr_14024_16911[(2)] = null);

(statearr_14024_16911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (2))){
var state_13996__$1 = state_13996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13996__$1,(4),from);
} else {
if((state_val_13997 === (11))){
var inst_13977 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
if(cljs.core.truth_(inst_13977)){
var statearr_14025_16913 = state_13996__$1;
(statearr_14025_16913[(1)] = (12));

} else {
var statearr_14026_16914 = state_13996__$1;
(statearr_14026_16914[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (9))){
var state_13996__$1 = state_13996;
var statearr_14027_16915 = state_13996__$1;
(statearr_14027_16915[(2)] = null);

(statearr_14027_16915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (5))){
var state_13996__$1 = state_13996;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14028_16917 = state_13996__$1;
(statearr_14028_16917[(1)] = (8));

} else {
var statearr_14029_16918 = state_13996__$1;
(statearr_14029_16918[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (14))){
var inst_13990 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_14030_16919 = state_13996__$1;
(statearr_14030_16919[(2)] = inst_13990);

(statearr_14030_16919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (10))){
var inst_13973 = (state_13996[(2)]);
var state_13996__$1 = state_13996;
var statearr_14033_16921 = state_13996__$1;
(statearr_14033_16921[(2)] = inst_13973);

(statearr_14033_16921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13997 === (8))){
var inst_13969 = cljs.core.async.close_BANG_(to);
var state_13996__$1 = state_13996;
var statearr_14036_16925 = state_13996__$1;
(statearr_14036_16925[(2)] = inst_13969);

(statearr_14036_16925[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_14038 = [null,null,null,null,null,null,null,null];
(statearr_14038[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_14038[(1)] = (1));

return statearr_14038;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_13996){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_13996);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14039){var ex__13422__auto__ = e14039;
var statearr_14040_16928 = state_13996;
(statearr_14040_16928[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_13996[(4)]))){
var statearr_14041_16929 = state_13996;
(statearr_14041_16929[(1)] = cljs.core.first((state_13996[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16930 = state_13996;
state_13996 = G__16930;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_13996){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_13996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14043 = f__13738__auto__();
(statearr_14043[(6)] = c__13737__auto___16903);

return statearr_14043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14053){
var vec__14055 = p__14053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14055,(1),null);
var job = vec__14055;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__13737__auto___16936 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14067){
var state_val_14068 = (state_14067[(1)]);
if((state_val_14068 === (1))){
var state_14067__$1 = state_14067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14067__$1,(2),res,v);
} else {
if((state_val_14068 === (2))){
var inst_14064 = (state_14067[(2)]);
var inst_14065 = cljs.core.async.close_BANG_(res);
var state_14067__$1 = (function (){var statearr_14071 = state_14067;
(statearr_14071[(7)] = inst_14064);

return statearr_14071;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14067__$1,inst_14065);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_14072 = [null,null,null,null,null,null,null,null];
(statearr_14072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__);

(statearr_14072[(1)] = (1));

return statearr_14072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1 = (function (state_14067){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14067);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14077){var ex__13422__auto__ = e14077;
var statearr_14081_16939 = state_14067;
(statearr_14081_16939[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14067[(4)]))){
var statearr_14082_16940 = state_14067;
(statearr_14082_16940[(1)] = cljs.core.first((state_14067[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16941 = state_14067;
state_14067 = G__16941;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = function(state_14067){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1.call(this,state_14067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14085 = f__13738__auto__();
(statearr_14085[(6)] = c__13737__auto___16936);

return statearr_14085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14089){
var vec__14091 = p__14089;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14091,(1),null);
var job = vec__14091;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___16942 = n;
var __16943 = (0);
while(true){
if((__16943 < n__5636__auto___16942)){
var G__14099_16944 = type;
var G__14099_16945__$1 = (((G__14099_16944 instanceof cljs.core.Keyword))?G__14099_16944.fqn:null);
switch (G__14099_16945__$1) {
case "compute":
var c__13737__auto___16947 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16943,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = ((function (__16943,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function (state_14121){
var state_val_14122 = (state_14121[(1)]);
if((state_val_14122 === (1))){
var state_14121__$1 = state_14121;
var statearr_14127_16948 = state_14121__$1;
(statearr_14127_16948[(2)] = null);

(statearr_14127_16948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (2))){
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14121__$1,(4),jobs);
} else {
if((state_val_14122 === (3))){
var inst_14118 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14121__$1,inst_14118);
} else {
if((state_val_14122 === (4))){
var inst_14110 = (state_14121[(2)]);
var inst_14111 = process__$1(inst_14110);
var state_14121__$1 = state_14121;
if(cljs.core.truth_(inst_14111)){
var statearr_14128_16950 = state_14121__$1;
(statearr_14128_16950[(1)] = (5));

} else {
var statearr_14129_16951 = state_14121__$1;
(statearr_14129_16951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (5))){
var state_14121__$1 = state_14121;
var statearr_14130_16953 = state_14121__$1;
(statearr_14130_16953[(2)] = null);

(statearr_14130_16953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (6))){
var state_14121__$1 = state_14121;
var statearr_14131_16954 = state_14121__$1;
(statearr_14131_16954[(2)] = null);

(statearr_14131_16954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14122 === (7))){
var inst_14116 = (state_14121[(2)]);
var state_14121__$1 = state_14121;
var statearr_14134_16955 = state_14121__$1;
(statearr_14134_16955[(2)] = inst_14116);

(statearr_14134_16955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16943,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
;
return ((function (__16943,switch__13418__auto__,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_14142 = [null,null,null,null,null,null,null];
(statearr_14142[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__);

(statearr_14142[(1)] = (1));

return statearr_14142;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1 = (function (state_14121){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14121);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14143){var ex__13422__auto__ = e14143;
var statearr_14144_16956 = state_14121;
(statearr_14144_16956[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14121[(4)]))){
var statearr_14145_16957 = state_14121;
(statearr_14145_16957[(1)] = cljs.core.first((state_14121[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16958 = state_14121;
state_14121 = G__16958;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = function(state_14121){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1.call(this,state_14121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__;
})()
;})(__16943,switch__13418__auto__,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
})();
var state__13739__auto__ = (function (){var statearr_14147 = f__13738__auto__();
(statearr_14147[(6)] = c__13737__auto___16947);

return statearr_14147;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
});})(__16943,c__13737__auto___16947,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
);


break;
case "async":
var c__13737__auto___16961 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16943,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = ((function (__16943,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function (state_14162){
var state_val_14163 = (state_14162[(1)]);
if((state_val_14163 === (1))){
var state_14162__$1 = state_14162;
var statearr_14166_16962 = state_14162__$1;
(statearr_14166_16962[(2)] = null);

(statearr_14166_16962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (2))){
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14162__$1,(4),jobs);
} else {
if((state_val_14163 === (3))){
var inst_14159 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14162__$1,inst_14159);
} else {
if((state_val_14163 === (4))){
var inst_14151 = (state_14162[(2)]);
var inst_14152 = async(inst_14151);
var state_14162__$1 = state_14162;
if(cljs.core.truth_(inst_14152)){
var statearr_14167_16963 = state_14162__$1;
(statearr_14167_16963[(1)] = (5));

} else {
var statearr_14168_16964 = state_14162__$1;
(statearr_14168_16964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (5))){
var state_14162__$1 = state_14162;
var statearr_14169_16965 = state_14162__$1;
(statearr_14169_16965[(2)] = null);

(statearr_14169_16965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (6))){
var state_14162__$1 = state_14162;
var statearr_14173_16966 = state_14162__$1;
(statearr_14173_16966[(2)] = null);

(statearr_14173_16966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14163 === (7))){
var inst_14157 = (state_14162[(2)]);
var state_14162__$1 = state_14162;
var statearr_14174_16967 = state_14162__$1;
(statearr_14174_16967[(2)] = inst_14157);

(statearr_14174_16967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__16943,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
;
return ((function (__16943,switch__13418__auto__,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_14176 = [null,null,null,null,null,null,null];
(statearr_14176[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__);

(statearr_14176[(1)] = (1));

return statearr_14176;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1 = (function (state_14162){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14162);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14177){var ex__13422__auto__ = e14177;
var statearr_14178_16970 = state_14162;
(statearr_14178_16970[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14162[(4)]))){
var statearr_14181_16971 = state_14162;
(statearr_14181_16971[(1)] = cljs.core.first((state_14162[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16972 = state_14162;
state_14162 = G__16972;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = function(state_14162){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1.call(this,state_14162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__;
})()
;})(__16943,switch__13418__auto__,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
})();
var state__13739__auto__ = (function (){var statearr_14182 = f__13738__auto__();
(statearr_14182[(6)] = c__13737__auto___16961);

return statearr_14182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
});})(__16943,c__13737__auto___16961,G__14099_16944,G__14099_16945__$1,n__5636__auto___16942,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14099_16945__$1)].join('')));

}

var G__16973 = (__16943 + (1));
__16943 = G__16973;
continue;
} else {
}
break;
}

var c__13737__auto___16974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14208){
var state_val_14209 = (state_14208[(1)]);
if((state_val_14209 === (7))){
var inst_14203 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
var statearr_14231_16975 = state_14208__$1;
(statearr_14231_16975[(2)] = inst_14203);

(statearr_14231_16975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14209 === (1))){
var state_14208__$1 = state_14208;
var statearr_14232_16976 = state_14208__$1;
(statearr_14232_16976[(2)] = null);

(statearr_14232_16976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14209 === (4))){
var inst_14185 = (state_14208[(7)]);
var inst_14185__$1 = (state_14208[(2)]);
var inst_14186 = (inst_14185__$1 == null);
var state_14208__$1 = (function (){var statearr_14233 = state_14208;
(statearr_14233[(7)] = inst_14185__$1);

return statearr_14233;
})();
if(cljs.core.truth_(inst_14186)){
var statearr_14234_16978 = state_14208__$1;
(statearr_14234_16978[(1)] = (5));

} else {
var statearr_14235_16979 = state_14208__$1;
(statearr_14235_16979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14209 === (6))){
var inst_14185 = (state_14208[(7)]);
var inst_14192 = (state_14208[(8)]);
var inst_14192__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14194 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14195 = [inst_14185,inst_14192__$1];
var inst_14196 = (new cljs.core.PersistentVector(null,2,(5),inst_14194,inst_14195,null));
var state_14208__$1 = (function (){var statearr_14236 = state_14208;
(statearr_14236[(8)] = inst_14192__$1);

return statearr_14236;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14208__$1,(8),jobs,inst_14196);
} else {
if((state_val_14209 === (3))){
var inst_14206 = (state_14208[(2)]);
var state_14208__$1 = state_14208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14208__$1,inst_14206);
} else {
if((state_val_14209 === (2))){
var state_14208__$1 = state_14208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14208__$1,(4),from);
} else {
if((state_val_14209 === (9))){
var inst_14200 = (state_14208[(2)]);
var state_14208__$1 = (function (){var statearr_14237 = state_14208;
(statearr_14237[(9)] = inst_14200);

return statearr_14237;
})();
var statearr_14238_16983 = state_14208__$1;
(statearr_14238_16983[(2)] = null);

(statearr_14238_16983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14209 === (5))){
var inst_14188 = cljs.core.async.close_BANG_(jobs);
var state_14208__$1 = state_14208;
var statearr_14239_16984 = state_14208__$1;
(statearr_14239_16984[(2)] = inst_14188);

(statearr_14239_16984[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14209 === (8))){
var inst_14192 = (state_14208[(8)]);
var inst_14198 = (state_14208[(2)]);
var state_14208__$1 = (function (){var statearr_14241 = state_14208;
(statearr_14241[(10)] = inst_14198);

return statearr_14241;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14208__$1,(9),results,inst_14192);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_14243 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14243[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__);

(statearr_14243[(1)] = (1));

return statearr_14243;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1 = (function (state_14208){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14208);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14244){var ex__13422__auto__ = e14244;
var statearr_14245_16985 = state_14208;
(statearr_14245_16985[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14208[(4)]))){
var statearr_14246_16986 = state_14208;
(statearr_14246_16986[(1)] = cljs.core.first((state_14208[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16987 = state_14208;
state_14208 = G__16987;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = function(state_14208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1.call(this,state_14208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14247 = f__13738__auto__();
(statearr_14247[(6)] = c__13737__auto___16974);

return statearr_14247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


var c__13737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14285){
var state_val_14286 = (state_14285[(1)]);
if((state_val_14286 === (7))){
var inst_14281 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
var statearr_14287_16991 = state_14285__$1;
(statearr_14287_16991[(2)] = inst_14281);

(statearr_14287_16991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (20))){
var state_14285__$1 = state_14285;
var statearr_14288_16992 = state_14285__$1;
(statearr_14288_16992[(2)] = null);

(statearr_14288_16992[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (1))){
var state_14285__$1 = state_14285;
var statearr_14289_16993 = state_14285__$1;
(statearr_14289_16993[(2)] = null);

(statearr_14289_16993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (4))){
var inst_14250 = (state_14285[(7)]);
var inst_14250__$1 = (state_14285[(2)]);
var inst_14251 = (inst_14250__$1 == null);
var state_14285__$1 = (function (){var statearr_14290 = state_14285;
(statearr_14290[(7)] = inst_14250__$1);

return statearr_14290;
})();
if(cljs.core.truth_(inst_14251)){
var statearr_14291_16994 = state_14285__$1;
(statearr_14291_16994[(1)] = (5));

} else {
var statearr_14292_16995 = state_14285__$1;
(statearr_14292_16995[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (15))){
var inst_14263 = (state_14285[(8)]);
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14285__$1,(18),to,inst_14263);
} else {
if((state_val_14286 === (21))){
var inst_14276 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
var statearr_14293_16997 = state_14285__$1;
(statearr_14293_16997[(2)] = inst_14276);

(statearr_14293_16997[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (13))){
var inst_14278 = (state_14285[(2)]);
var state_14285__$1 = (function (){var statearr_14294 = state_14285;
(statearr_14294[(9)] = inst_14278);

return statearr_14294;
})();
var statearr_14295_16999 = state_14285__$1;
(statearr_14295_16999[(2)] = null);

(statearr_14295_16999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (6))){
var inst_14250 = (state_14285[(7)]);
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14285__$1,(11),inst_14250);
} else {
if((state_val_14286 === (17))){
var inst_14271 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
if(cljs.core.truth_(inst_14271)){
var statearr_14328_17000 = state_14285__$1;
(statearr_14328_17000[(1)] = (19));

} else {
var statearr_14329_17001 = state_14285__$1;
(statearr_14329_17001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (3))){
var inst_14283 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14285__$1,inst_14283);
} else {
if((state_val_14286 === (12))){
var inst_14260 = (state_14285[(10)]);
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14285__$1,(14),inst_14260);
} else {
if((state_val_14286 === (2))){
var state_14285__$1 = state_14285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14285__$1,(4),results);
} else {
if((state_val_14286 === (19))){
var state_14285__$1 = state_14285;
var statearr_14330_17002 = state_14285__$1;
(statearr_14330_17002[(2)] = null);

(statearr_14330_17002[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (11))){
var inst_14260 = (state_14285[(2)]);
var state_14285__$1 = (function (){var statearr_14331 = state_14285;
(statearr_14331[(10)] = inst_14260);

return statearr_14331;
})();
var statearr_14332_17003 = state_14285__$1;
(statearr_14332_17003[(2)] = null);

(statearr_14332_17003[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (9))){
var state_14285__$1 = state_14285;
var statearr_14333_17004 = state_14285__$1;
(statearr_14333_17004[(2)] = null);

(statearr_14333_17004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (5))){
var state_14285__$1 = state_14285;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14340_17005 = state_14285__$1;
(statearr_14340_17005[(1)] = (8));

} else {
var statearr_14345_17012 = state_14285__$1;
(statearr_14345_17012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (14))){
var inst_14265 = (state_14285[(11)]);
var inst_14263 = (state_14285[(8)]);
var inst_14263__$1 = (state_14285[(2)]);
var inst_14264 = (inst_14263__$1 == null);
var inst_14265__$1 = cljs.core.not(inst_14264);
var state_14285__$1 = (function (){var statearr_14359 = state_14285;
(statearr_14359[(11)] = inst_14265__$1);

(statearr_14359[(8)] = inst_14263__$1);

return statearr_14359;
})();
if(inst_14265__$1){
var statearr_14360_17020 = state_14285__$1;
(statearr_14360_17020[(1)] = (15));

} else {
var statearr_14361_17021 = state_14285__$1;
(statearr_14361_17021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (16))){
var inst_14265 = (state_14285[(11)]);
var state_14285__$1 = state_14285;
var statearr_14362_17022 = state_14285__$1;
(statearr_14362_17022[(2)] = inst_14265);

(statearr_14362_17022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (10))){
var inst_14257 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
var statearr_14363_17023 = state_14285__$1;
(statearr_14363_17023[(2)] = inst_14257);

(statearr_14363_17023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (18))){
var inst_14268 = (state_14285[(2)]);
var state_14285__$1 = state_14285;
var statearr_14364_17024 = state_14285__$1;
(statearr_14364_17024[(2)] = inst_14268);

(statearr_14364_17024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14286 === (8))){
var inst_14254 = cljs.core.async.close_BANG_(to);
var state_14285__$1 = state_14285;
var statearr_14365_17025 = state_14285__$1;
(statearr_14365_17025[(2)] = inst_14254);

(statearr_14365_17025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_14367 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__);

(statearr_14367[(1)] = (1));

return statearr_14367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1 = (function (state_14285){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14285);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14368){var ex__13422__auto__ = e14368;
var statearr_14369_17037 = state_14285;
(statearr_14369_17037[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14285[(4)]))){
var statearr_14372_17039 = state_14285;
(statearr_14372_17039[(1)] = cljs.core.first((state_14285[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17040 = state_14285;
state_14285 = G__17040;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__ = function(state_14285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1.call(this,state_14285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14373 = f__13738__auto__();
(statearr_14373[(6)] = c__13737__auto__);

return statearr_14373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

return c__13737__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__14385 = arguments.length;
switch (G__14385) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__14419 = arguments.length;
switch (G__14419) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__14453 = arguments.length;
switch (G__14453) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__13737__auto___17061 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14492){
var state_val_14493 = (state_14492[(1)]);
if((state_val_14493 === (7))){
var inst_14488 = (state_14492[(2)]);
var state_14492__$1 = state_14492;
var statearr_14494_17062 = state_14492__$1;
(statearr_14494_17062[(2)] = inst_14488);

(statearr_14494_17062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (1))){
var state_14492__$1 = state_14492;
var statearr_14496_17063 = state_14492__$1;
(statearr_14496_17063[(2)] = null);

(statearr_14496_17063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (4))){
var inst_14468 = (state_14492[(7)]);
var inst_14468__$1 = (state_14492[(2)]);
var inst_14469 = (inst_14468__$1 == null);
var state_14492__$1 = (function (){var statearr_14498 = state_14492;
(statearr_14498[(7)] = inst_14468__$1);

return statearr_14498;
})();
if(cljs.core.truth_(inst_14469)){
var statearr_14499_17068 = state_14492__$1;
(statearr_14499_17068[(1)] = (5));

} else {
var statearr_14500_17069 = state_14492__$1;
(statearr_14500_17069[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (13))){
var state_14492__$1 = state_14492;
var statearr_14501_17070 = state_14492__$1;
(statearr_14501_17070[(2)] = null);

(statearr_14501_17070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (6))){
var inst_14468 = (state_14492[(7)]);
var inst_14475 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14468) : p.call(null,inst_14468));
var state_14492__$1 = state_14492;
if(cljs.core.truth_(inst_14475)){
var statearr_14502_17071 = state_14492__$1;
(statearr_14502_17071[(1)] = (9));

} else {
var statearr_14503_17072 = state_14492__$1;
(statearr_14503_17072[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (3))){
var inst_14490 = (state_14492[(2)]);
var state_14492__$1 = state_14492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14492__$1,inst_14490);
} else {
if((state_val_14493 === (12))){
var state_14492__$1 = state_14492;
var statearr_14504_17073 = state_14492__$1;
(statearr_14504_17073[(2)] = null);

(statearr_14504_17073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (2))){
var state_14492__$1 = state_14492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14492__$1,(4),ch);
} else {
if((state_val_14493 === (11))){
var inst_14468 = (state_14492[(7)]);
var inst_14479 = (state_14492[(2)]);
var state_14492__$1 = state_14492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14492__$1,(8),inst_14479,inst_14468);
} else {
if((state_val_14493 === (9))){
var state_14492__$1 = state_14492;
var statearr_14505_17074 = state_14492__$1;
(statearr_14505_17074[(2)] = tc);

(statearr_14505_17074[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (5))){
var inst_14471 = cljs.core.async.close_BANG_(tc);
var inst_14472 = cljs.core.async.close_BANG_(fc);
var state_14492__$1 = (function (){var statearr_14506 = state_14492;
(statearr_14506[(8)] = inst_14471);

return statearr_14506;
})();
var statearr_14507_17079 = state_14492__$1;
(statearr_14507_17079[(2)] = inst_14472);

(statearr_14507_17079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (14))){
var inst_14486 = (state_14492[(2)]);
var state_14492__$1 = state_14492;
var statearr_14508_17080 = state_14492__$1;
(statearr_14508_17080[(2)] = inst_14486);

(statearr_14508_17080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (10))){
var state_14492__$1 = state_14492;
var statearr_14509_17081 = state_14492__$1;
(statearr_14509_17081[(2)] = fc);

(statearr_14509_17081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14493 === (8))){
var inst_14481 = (state_14492[(2)]);
var state_14492__$1 = state_14492;
if(cljs.core.truth_(inst_14481)){
var statearr_14510_17082 = state_14492__$1;
(statearr_14510_17082[(1)] = (12));

} else {
var statearr_14512_17083 = state_14492__$1;
(statearr_14512_17083[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_14528 = [null,null,null,null,null,null,null,null,null];
(statearr_14528[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_14528[(1)] = (1));

return statearr_14528;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_14492){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14492);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14529){var ex__13422__auto__ = e14529;
var statearr_14530_17085 = state_14492;
(statearr_14530_17085[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14492[(4)]))){
var statearr_14531_17086 = state_14492;
(statearr_14531_17086[(1)] = cljs.core.first((state_14492[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17088 = state_14492;
state_14492 = G__17088;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_14492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_14492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14536 = f__13738__auto__();
(statearr_14536[(6)] = c__13737__auto___17061);

return statearr_14536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__13737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14561){
var state_val_14562 = (state_14561[(1)]);
if((state_val_14562 === (7))){
var inst_14557 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
var statearr_14569_17089 = state_14561__$1;
(statearr_14569_17089[(2)] = inst_14557);

(statearr_14569_17089[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (1))){
var inst_14539 = init;
var inst_14540 = inst_14539;
var state_14561__$1 = (function (){var statearr_14575 = state_14561;
(statearr_14575[(7)] = inst_14540);

return statearr_14575;
})();
var statearr_14576_17090 = state_14561__$1;
(statearr_14576_17090[(2)] = null);

(statearr_14576_17090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (4))){
var inst_14544 = (state_14561[(8)]);
var inst_14544__$1 = (state_14561[(2)]);
var inst_14545 = (inst_14544__$1 == null);
var state_14561__$1 = (function (){var statearr_14579 = state_14561;
(statearr_14579[(8)] = inst_14544__$1);

return statearr_14579;
})();
if(cljs.core.truth_(inst_14545)){
var statearr_14581_17118 = state_14561__$1;
(statearr_14581_17118[(1)] = (5));

} else {
var statearr_14582_17119 = state_14561__$1;
(statearr_14582_17119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (6))){
var inst_14540 = (state_14561[(7)]);
var inst_14548 = (state_14561[(9)]);
var inst_14544 = (state_14561[(8)]);
var inst_14548__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_14540,inst_14544) : f.call(null,inst_14540,inst_14544));
var inst_14549 = cljs.core.reduced_QMARK_(inst_14548__$1);
var state_14561__$1 = (function (){var statearr_14586 = state_14561;
(statearr_14586[(9)] = inst_14548__$1);

return statearr_14586;
})();
if(inst_14549){
var statearr_14589_17120 = state_14561__$1;
(statearr_14589_17120[(1)] = (8));

} else {
var statearr_14590_17121 = state_14561__$1;
(statearr_14590_17121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (3))){
var inst_14559 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14561__$1,inst_14559);
} else {
if((state_val_14562 === (2))){
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14561__$1,(4),ch);
} else {
if((state_val_14562 === (9))){
var inst_14548 = (state_14561[(9)]);
var inst_14540 = inst_14548;
var state_14561__$1 = (function (){var statearr_14597 = state_14561;
(statearr_14597[(7)] = inst_14540);

return statearr_14597;
})();
var statearr_14602_17122 = state_14561__$1;
(statearr_14602_17122[(2)] = null);

(statearr_14602_17122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (5))){
var inst_14540 = (state_14561[(7)]);
var state_14561__$1 = state_14561;
var statearr_14603_17123 = state_14561__$1;
(statearr_14603_17123[(2)] = inst_14540);

(statearr_14603_17123[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (10))){
var inst_14555 = (state_14561[(2)]);
var state_14561__$1 = state_14561;
var statearr_14604_17124 = state_14561__$1;
(statearr_14604_17124[(2)] = inst_14555);

(statearr_14604_17124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14562 === (8))){
var inst_14548 = (state_14561[(9)]);
var inst_14551 = cljs.core.deref(inst_14548);
var state_14561__$1 = state_14561;
var statearr_14605_17125 = state_14561__$1;
(statearr_14605_17125[(2)] = inst_14551);

(statearr_14605_17125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13419__auto____0 = (function (){
var statearr_14606 = [null,null,null,null,null,null,null,null,null,null];
(statearr_14606[(0)] = cljs$core$async$reduce_$_state_machine__13419__auto__);

(statearr_14606[(1)] = (1));

return statearr_14606;
});
var cljs$core$async$reduce_$_state_machine__13419__auto____1 = (function (state_14561){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14561);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14607){var ex__13422__auto__ = e14607;
var statearr_14608_17128 = state_14561;
(statearr_14608_17128[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14561[(4)]))){
var statearr_14609_17129 = state_14561;
(statearr_14609_17129[(1)] = cljs.core.first((state_14561[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17130 = state_14561;
state_14561 = G__17130;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13419__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13419__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13419__auto____0;
cljs$core$async$reduce_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13419__auto____1;
return cljs$core$async$reduce_$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14610 = f__13738__auto__();
(statearr_14610[(6)] = c__13737__auto__);

return statearr_14610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

return c__13737__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__13737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14618){
var state_val_14619 = (state_14618[(1)]);
if((state_val_14619 === (1))){
var inst_14613 = cljs.core.async.reduce(f__$1,init,ch);
var state_14618__$1 = state_14618;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14618__$1,(2),inst_14613);
} else {
if((state_val_14619 === (2))){
var inst_14615 = (state_14618[(2)]);
var inst_14616 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_14615) : f__$1.call(null,inst_14615));
var state_14618__$1 = state_14618;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14618__$1,inst_14616);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13419__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13419__auto____0 = (function (){
var statearr_14622 = [null,null,null,null,null,null,null];
(statearr_14622[(0)] = cljs$core$async$transduce_$_state_machine__13419__auto__);

(statearr_14622[(1)] = (1));

return statearr_14622;
});
var cljs$core$async$transduce_$_state_machine__13419__auto____1 = (function (state_14618){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14618);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14625){var ex__13422__auto__ = e14625;
var statearr_14626_17156 = state_14618;
(statearr_14626_17156[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14618[(4)]))){
var statearr_14627_17157 = state_14618;
(statearr_14627_17157[(1)] = cljs.core.first((state_14618[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17158 = state_14618;
state_14618 = G__17158;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13419__auto__ = function(state_14618){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13419__auto____1.call(this,state_14618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13419__auto____0;
cljs$core$async$transduce_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13419__auto____1;
return cljs$core$async$transduce_$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14629 = f__13738__auto__();
(statearr_14629[(6)] = c__13737__auto__);

return statearr_14629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

return c__13737__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__14632 = arguments.length;
switch (G__14632) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__13737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14659){
var state_val_14660 = (state_14659[(1)]);
if((state_val_14660 === (7))){
var inst_14641 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
var statearr_14661_17163 = state_14659__$1;
(statearr_14661_17163[(2)] = inst_14641);

(statearr_14661_17163[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (1))){
var inst_14635 = cljs.core.seq(coll);
var inst_14636 = inst_14635;
var state_14659__$1 = (function (){var statearr_14662 = state_14659;
(statearr_14662[(7)] = inst_14636);

return statearr_14662;
})();
var statearr_14663_17165 = state_14659__$1;
(statearr_14663_17165[(2)] = null);

(statearr_14663_17165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (4))){
var inst_14636 = (state_14659[(7)]);
var inst_14639 = cljs.core.first(inst_14636);
var state_14659__$1 = state_14659;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14659__$1,(7),ch,inst_14639);
} else {
if((state_val_14660 === (13))){
var inst_14653 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
var statearr_14664_17166 = state_14659__$1;
(statearr_14664_17166[(2)] = inst_14653);

(statearr_14664_17166[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (6))){
var inst_14644 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
if(cljs.core.truth_(inst_14644)){
var statearr_14665_17167 = state_14659__$1;
(statearr_14665_17167[(1)] = (8));

} else {
var statearr_14667_17168 = state_14659__$1;
(statearr_14667_17168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (3))){
var inst_14657 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14659__$1,inst_14657);
} else {
if((state_val_14660 === (12))){
var state_14659__$1 = state_14659;
var statearr_14668_17169 = state_14659__$1;
(statearr_14668_17169[(2)] = null);

(statearr_14668_17169[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (2))){
var inst_14636 = (state_14659[(7)]);
var state_14659__$1 = state_14659;
if(cljs.core.truth_(inst_14636)){
var statearr_14669_17170 = state_14659__$1;
(statearr_14669_17170[(1)] = (4));

} else {
var statearr_14670_17171 = state_14659__$1;
(statearr_14670_17171[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (11))){
var inst_14650 = cljs.core.async.close_BANG_(ch);
var state_14659__$1 = state_14659;
var statearr_14673_17172 = state_14659__$1;
(statearr_14673_17172[(2)] = inst_14650);

(statearr_14673_17172[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (9))){
var state_14659__$1 = state_14659;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14676_17173 = state_14659__$1;
(statearr_14676_17173[(1)] = (11));

} else {
var statearr_14679_17174 = state_14659__$1;
(statearr_14679_17174[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (5))){
var inst_14636 = (state_14659[(7)]);
var state_14659__$1 = state_14659;
var statearr_14684_17175 = state_14659__$1;
(statearr_14684_17175[(2)] = inst_14636);

(statearr_14684_17175[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (10))){
var inst_14655 = (state_14659[(2)]);
var state_14659__$1 = state_14659;
var statearr_14687_17176 = state_14659__$1;
(statearr_14687_17176[(2)] = inst_14655);

(statearr_14687_17176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14660 === (8))){
var inst_14636 = (state_14659[(7)]);
var inst_14646 = cljs.core.next(inst_14636);
var inst_14636__$1 = inst_14646;
var state_14659__$1 = (function (){var statearr_14688 = state_14659;
(statearr_14688[(7)] = inst_14636__$1);

return statearr_14688;
})();
var statearr_14689_17177 = state_14659__$1;
(statearr_14689_17177[(2)] = null);

(statearr_14689_17177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_14690 = [null,null,null,null,null,null,null,null];
(statearr_14690[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_14690[(1)] = (1));

return statearr_14690;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_14659){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14659);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e14691){var ex__13422__auto__ = e14691;
var statearr_14692_17178 = state_14659;
(statearr_14692_17178[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14659[(4)]))){
var statearr_14699_17179 = state_14659;
(statearr_14699_17179[(1)] = cljs.core.first((state_14659[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17180 = state_14659;
state_14659 = G__17180;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_14659){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_14659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_14700 = f__13738__auto__();
(statearr_14700[(6)] = c__13737__auto__);

return statearr_14700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

return c__13737__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__14706 = arguments.length;
switch (G__14706) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17183 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17183(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17188 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17188(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17190 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17190(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17192 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17192(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14725 = (function (ch,cs,meta14726){
this.ch = ch;
this.cs = cs;
this.meta14726 = meta14726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14727,meta14726__$1){
var self__ = this;
var _14727__$1 = this;
return (new cljs.core.async.t_cljs$core$async14725(self__.ch,self__.cs,meta14726__$1));
}));

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14727){
var self__ = this;
var _14727__$1 = this;
return self__.meta14726;
}));

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async14725.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async14725.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14726","meta14726",1044998788,null)], null);
}));

(cljs.core.async.t_cljs$core$async14725.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14725.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14725");

(cljs.core.async.t_cljs$core$async14725.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14725");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14725.
 */
cljs.core.async.__GT_t_cljs$core$async14725 = (function cljs$core$async$__GT_t_cljs$core$async14725(ch,cs,meta14726){
return (new cljs.core.async.t_cljs$core$async14725(ch,cs,meta14726));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async14725(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__13737__auto___17194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_14908){
var state_val_14911 = (state_14908[(1)]);
if((state_val_14911 === (7))){
var inst_14900 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14913_17195 = state_14908__$1;
(statearr_14913_17195[(2)] = inst_14900);

(statearr_14913_17195[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (20))){
var inst_14785 = (state_14908[(7)]);
var inst_14801 = cljs.core.first(inst_14785);
var inst_14802 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14801,(0),null);
var inst_14803 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14801,(1),null);
var state_14908__$1 = (function (){var statearr_14917 = state_14908;
(statearr_14917[(8)] = inst_14802);

return statearr_14917;
})();
if(cljs.core.truth_(inst_14803)){
var statearr_14919_17197 = state_14908__$1;
(statearr_14919_17197[(1)] = (22));

} else {
var statearr_14920_17198 = state_14908__$1;
(statearr_14920_17198[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (27))){
var inst_14835 = (state_14908[(9)]);
var inst_14846 = (state_14908[(10)]);
var inst_14837 = (state_14908[(11)]);
var inst_14753 = (state_14908[(12)]);
var inst_14846__$1 = cljs.core._nth(inst_14835,inst_14837);
var inst_14847 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14846__$1,inst_14753,done);
var state_14908__$1 = (function (){var statearr_14924 = state_14908;
(statearr_14924[(10)] = inst_14846__$1);

return statearr_14924;
})();
if(cljs.core.truth_(inst_14847)){
var statearr_14925_17202 = state_14908__$1;
(statearr_14925_17202[(1)] = (30));

} else {
var statearr_14928_17203 = state_14908__$1;
(statearr_14928_17203[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (1))){
var state_14908__$1 = state_14908;
var statearr_14929_17207 = state_14908__$1;
(statearr_14929_17207[(2)] = null);

(statearr_14929_17207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (24))){
var inst_14785 = (state_14908[(7)]);
var inst_14810 = (state_14908[(2)]);
var inst_14811 = cljs.core.next(inst_14785);
var inst_14762 = inst_14811;
var inst_14763 = null;
var inst_14764 = (0);
var inst_14765 = (0);
var state_14908__$1 = (function (){var statearr_14932 = state_14908;
(statearr_14932[(13)] = inst_14762);

(statearr_14932[(14)] = inst_14765);

(statearr_14932[(15)] = inst_14763);

(statearr_14932[(16)] = inst_14810);

(statearr_14932[(17)] = inst_14764);

return statearr_14932;
})();
var statearr_14934_17214 = state_14908__$1;
(statearr_14934_17214[(2)] = null);

(statearr_14934_17214[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (39))){
var state_14908__$1 = state_14908;
var statearr_14943_17215 = state_14908__$1;
(statearr_14943_17215[(2)] = null);

(statearr_14943_17215[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (4))){
var inst_14753 = (state_14908[(12)]);
var inst_14753__$1 = (state_14908[(2)]);
var inst_14754 = (inst_14753__$1 == null);
var state_14908__$1 = (function (){var statearr_14945 = state_14908;
(statearr_14945[(12)] = inst_14753__$1);

return statearr_14945;
})();
if(cljs.core.truth_(inst_14754)){
var statearr_14946_17217 = state_14908__$1;
(statearr_14946_17217[(1)] = (5));

} else {
var statearr_14947_17218 = state_14908__$1;
(statearr_14947_17218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (15))){
var inst_14762 = (state_14908[(13)]);
var inst_14765 = (state_14908[(14)]);
var inst_14763 = (state_14908[(15)]);
var inst_14764 = (state_14908[(17)]);
var inst_14781 = (state_14908[(2)]);
var inst_14782 = (inst_14765 + (1));
var tmp14938 = inst_14762;
var tmp14939 = inst_14763;
var tmp14940 = inst_14764;
var inst_14762__$1 = tmp14938;
var inst_14763__$1 = tmp14939;
var inst_14764__$1 = tmp14940;
var inst_14765__$1 = inst_14782;
var state_14908__$1 = (function (){var statearr_14948 = state_14908;
(statearr_14948[(18)] = inst_14781);

(statearr_14948[(13)] = inst_14762__$1);

(statearr_14948[(14)] = inst_14765__$1);

(statearr_14948[(15)] = inst_14763__$1);

(statearr_14948[(17)] = inst_14764__$1);

return statearr_14948;
})();
var statearr_14949_17222 = state_14908__$1;
(statearr_14949_17222[(2)] = null);

(statearr_14949_17222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (21))){
var inst_14815 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14954_17223 = state_14908__$1;
(statearr_14954_17223[(2)] = inst_14815);

(statearr_14954_17223[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (31))){
var inst_14846 = (state_14908[(10)]);
var inst_14851 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14846);
var state_14908__$1 = state_14908;
var statearr_14955_17225 = state_14908__$1;
(statearr_14955_17225[(2)] = inst_14851);

(statearr_14955_17225[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (32))){
var inst_14835 = (state_14908[(9)]);
var inst_14836 = (state_14908[(19)]);
var inst_14837 = (state_14908[(11)]);
var inst_14834 = (state_14908[(20)]);
var inst_14853 = (state_14908[(2)]);
var inst_14854 = (inst_14837 + (1));
var tmp14950 = inst_14835;
var tmp14951 = inst_14836;
var tmp14952 = inst_14834;
var inst_14834__$1 = tmp14952;
var inst_14835__$1 = tmp14950;
var inst_14836__$1 = tmp14951;
var inst_14837__$1 = inst_14854;
var state_14908__$1 = (function (){var statearr_14960 = state_14908;
(statearr_14960[(9)] = inst_14835__$1);

(statearr_14960[(19)] = inst_14836__$1);

(statearr_14960[(21)] = inst_14853);

(statearr_14960[(11)] = inst_14837__$1);

(statearr_14960[(20)] = inst_14834__$1);

return statearr_14960;
})();
var statearr_14961_17226 = state_14908__$1;
(statearr_14961_17226[(2)] = null);

(statearr_14961_17226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (40))){
var inst_14871 = (state_14908[(22)]);
var inst_14876 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_14871);
var state_14908__$1 = state_14908;
var statearr_14962_17227 = state_14908__$1;
(statearr_14962_17227[(2)] = inst_14876);

(statearr_14962_17227[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (33))){
var inst_14857 = (state_14908[(23)]);
var inst_14861 = cljs.core.chunked_seq_QMARK_(inst_14857);
var state_14908__$1 = state_14908;
if(inst_14861){
var statearr_14967_17228 = state_14908__$1;
(statearr_14967_17228[(1)] = (36));

} else {
var statearr_14968_17229 = state_14908__$1;
(statearr_14968_17229[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (13))){
var inst_14775 = (state_14908[(24)]);
var inst_14778 = cljs.core.async.close_BANG_(inst_14775);
var state_14908__$1 = state_14908;
var statearr_14970_17230 = state_14908__$1;
(statearr_14970_17230[(2)] = inst_14778);

(statearr_14970_17230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (22))){
var inst_14802 = (state_14908[(8)]);
var inst_14805 = cljs.core.async.close_BANG_(inst_14802);
var state_14908__$1 = state_14908;
var statearr_14971_17235 = state_14908__$1;
(statearr_14971_17235[(2)] = inst_14805);

(statearr_14971_17235[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (36))){
var inst_14857 = (state_14908[(23)]);
var inst_14863 = cljs.core.chunk_first(inst_14857);
var inst_14864 = cljs.core.chunk_rest(inst_14857);
var inst_14865 = cljs.core.count(inst_14863);
var inst_14834 = inst_14864;
var inst_14835 = inst_14863;
var inst_14836 = inst_14865;
var inst_14837 = (0);
var state_14908__$1 = (function (){var statearr_14976 = state_14908;
(statearr_14976[(9)] = inst_14835);

(statearr_14976[(19)] = inst_14836);

(statearr_14976[(11)] = inst_14837);

(statearr_14976[(20)] = inst_14834);

return statearr_14976;
})();
var statearr_14977_17237 = state_14908__$1;
(statearr_14977_17237[(2)] = null);

(statearr_14977_17237[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (41))){
var inst_14857 = (state_14908[(23)]);
var inst_14878 = (state_14908[(2)]);
var inst_14879 = cljs.core.next(inst_14857);
var inst_14834 = inst_14879;
var inst_14835 = null;
var inst_14836 = (0);
var inst_14837 = (0);
var state_14908__$1 = (function (){var statearr_14982 = state_14908;
(statearr_14982[(9)] = inst_14835);

(statearr_14982[(19)] = inst_14836);

(statearr_14982[(25)] = inst_14878);

(statearr_14982[(11)] = inst_14837);

(statearr_14982[(20)] = inst_14834);

return statearr_14982;
})();
var statearr_14991_17238 = state_14908__$1;
(statearr_14991_17238[(2)] = null);

(statearr_14991_17238[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (43))){
var state_14908__$1 = state_14908;
var statearr_14992_17239 = state_14908__$1;
(statearr_14992_17239[(2)] = null);

(statearr_14992_17239[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (29))){
var inst_14887 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_14994_17241 = state_14908__$1;
(statearr_14994_17241[(2)] = inst_14887);

(statearr_14994_17241[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (44))){
var inst_14897 = (state_14908[(2)]);
var state_14908__$1 = (function (){var statearr_14997 = state_14908;
(statearr_14997[(26)] = inst_14897);

return statearr_14997;
})();
var statearr_14998_17245 = state_14908__$1;
(statearr_14998_17245[(2)] = null);

(statearr_14998_17245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (6))){
var inst_14826 = (state_14908[(27)]);
var inst_14825 = cljs.core.deref(cs);
var inst_14826__$1 = cljs.core.keys(inst_14825);
var inst_14827 = cljs.core.count(inst_14826__$1);
var inst_14828 = cljs.core.reset_BANG_(dctr,inst_14827);
var inst_14833 = cljs.core.seq(inst_14826__$1);
var inst_14834 = inst_14833;
var inst_14835 = null;
var inst_14836 = (0);
var inst_14837 = (0);
var state_14908__$1 = (function (){var statearr_15006 = state_14908;
(statearr_15006[(9)] = inst_14835);

(statearr_15006[(19)] = inst_14836);

(statearr_15006[(28)] = inst_14828);

(statearr_15006[(27)] = inst_14826__$1);

(statearr_15006[(11)] = inst_14837);

(statearr_15006[(20)] = inst_14834);

return statearr_15006;
})();
var statearr_15008_17247 = state_14908__$1;
(statearr_15008_17247[(2)] = null);

(statearr_15008_17247[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (28))){
var inst_14857 = (state_14908[(23)]);
var inst_14834 = (state_14908[(20)]);
var inst_14857__$1 = cljs.core.seq(inst_14834);
var state_14908__$1 = (function (){var statearr_15009 = state_14908;
(statearr_15009[(23)] = inst_14857__$1);

return statearr_15009;
})();
if(inst_14857__$1){
var statearr_15013_17254 = state_14908__$1;
(statearr_15013_17254[(1)] = (33));

} else {
var statearr_15015_17255 = state_14908__$1;
(statearr_15015_17255[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (25))){
var inst_14836 = (state_14908[(19)]);
var inst_14837 = (state_14908[(11)]);
var inst_14841 = (inst_14837 < inst_14836);
var inst_14842 = inst_14841;
var state_14908__$1 = state_14908;
if(cljs.core.truth_(inst_14842)){
var statearr_15019_17294 = state_14908__$1;
(statearr_15019_17294[(1)] = (27));

} else {
var statearr_15020_17295 = state_14908__$1;
(statearr_15020_17295[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (34))){
var state_14908__$1 = state_14908;
var statearr_15021_17296 = state_14908__$1;
(statearr_15021_17296[(2)] = null);

(statearr_15021_17296[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (17))){
var state_14908__$1 = state_14908;
var statearr_15023_17297 = state_14908__$1;
(statearr_15023_17297[(2)] = null);

(statearr_15023_17297[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (3))){
var inst_14902 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14908__$1,inst_14902);
} else {
if((state_val_14911 === (12))){
var inst_14821 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15026_17304 = state_14908__$1;
(statearr_15026_17304[(2)] = inst_14821);

(statearr_15026_17304[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (2))){
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(4),ch);
} else {
if((state_val_14911 === (23))){
var state_14908__$1 = state_14908;
var statearr_15029_17305 = state_14908__$1;
(statearr_15029_17305[(2)] = null);

(statearr_15029_17305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (35))){
var inst_14885 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15031_17306 = state_14908__$1;
(statearr_15031_17306[(2)] = inst_14885);

(statearr_15031_17306[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (19))){
var inst_14785 = (state_14908[(7)]);
var inst_14791 = cljs.core.chunk_first(inst_14785);
var inst_14794 = cljs.core.chunk_rest(inst_14785);
var inst_14795 = cljs.core.count(inst_14791);
var inst_14762 = inst_14794;
var inst_14763 = inst_14791;
var inst_14764 = inst_14795;
var inst_14765 = (0);
var state_14908__$1 = (function (){var statearr_15034 = state_14908;
(statearr_15034[(13)] = inst_14762);

(statearr_15034[(14)] = inst_14765);

(statearr_15034[(15)] = inst_14763);

(statearr_15034[(17)] = inst_14764);

return statearr_15034;
})();
var statearr_15037_17307 = state_14908__$1;
(statearr_15037_17307[(2)] = null);

(statearr_15037_17307[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (11))){
var inst_14785 = (state_14908[(7)]);
var inst_14762 = (state_14908[(13)]);
var inst_14785__$1 = cljs.core.seq(inst_14762);
var state_14908__$1 = (function (){var statearr_15039 = state_14908;
(statearr_15039[(7)] = inst_14785__$1);

return statearr_15039;
})();
if(inst_14785__$1){
var statearr_15040_17308 = state_14908__$1;
(statearr_15040_17308[(1)] = (16));

} else {
var statearr_15041_17309 = state_14908__$1;
(statearr_15041_17309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (9))){
var inst_14823 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15042_17310 = state_14908__$1;
(statearr_15042_17310[(2)] = inst_14823);

(statearr_15042_17310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (5))){
var inst_14760 = cljs.core.deref(cs);
var inst_14761 = cljs.core.seq(inst_14760);
var inst_14762 = inst_14761;
var inst_14763 = null;
var inst_14764 = (0);
var inst_14765 = (0);
var state_14908__$1 = (function (){var statearr_15044 = state_14908;
(statearr_15044[(13)] = inst_14762);

(statearr_15044[(14)] = inst_14765);

(statearr_15044[(15)] = inst_14763);

(statearr_15044[(17)] = inst_14764);

return statearr_15044;
})();
var statearr_15050_17311 = state_14908__$1;
(statearr_15050_17311[(2)] = null);

(statearr_15050_17311[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (14))){
var state_14908__$1 = state_14908;
var statearr_15053_17312 = state_14908__$1;
(statearr_15053_17312[(2)] = null);

(statearr_15053_17312[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (45))){
var inst_14894 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15056_17313 = state_14908__$1;
(statearr_15056_17313[(2)] = inst_14894);

(statearr_15056_17313[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (26))){
var inst_14826 = (state_14908[(27)]);
var inst_14889 = (state_14908[(2)]);
var inst_14891 = cljs.core.seq(inst_14826);
var state_14908__$1 = (function (){var statearr_15057 = state_14908;
(statearr_15057[(29)] = inst_14889);

return statearr_15057;
})();
if(inst_14891){
var statearr_15058_17314 = state_14908__$1;
(statearr_15058_17314[(1)] = (42));

} else {
var statearr_15059_17315 = state_14908__$1;
(statearr_15059_17315[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (16))){
var inst_14785 = (state_14908[(7)]);
var inst_14789 = cljs.core.chunked_seq_QMARK_(inst_14785);
var state_14908__$1 = state_14908;
if(inst_14789){
var statearr_15067_17316 = state_14908__$1;
(statearr_15067_17316[(1)] = (19));

} else {
var statearr_15088_17317 = state_14908__$1;
(statearr_15088_17317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (38))){
var inst_14882 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15095_17318 = state_14908__$1;
(statearr_15095_17318[(2)] = inst_14882);

(statearr_15095_17318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (30))){
var state_14908__$1 = state_14908;
var statearr_15099_17319 = state_14908__$1;
(statearr_15099_17319[(2)] = null);

(statearr_15099_17319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (10))){
var inst_14765 = (state_14908[(14)]);
var inst_14763 = (state_14908[(15)]);
var inst_14773 = cljs.core._nth(inst_14763,inst_14765);
var inst_14775 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14773,(0),null);
var inst_14776 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_14773,(1),null);
var state_14908__$1 = (function (){var statearr_15103 = state_14908;
(statearr_15103[(24)] = inst_14775);

return statearr_15103;
})();
if(cljs.core.truth_(inst_14776)){
var statearr_15104_17320 = state_14908__$1;
(statearr_15104_17320[(1)] = (13));

} else {
var statearr_15106_17321 = state_14908__$1;
(statearr_15106_17321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (18))){
var inst_14818 = (state_14908[(2)]);
var state_14908__$1 = state_14908;
var statearr_15110_17322 = state_14908__$1;
(statearr_15110_17322[(2)] = inst_14818);

(statearr_15110_17322[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (42))){
var state_14908__$1 = state_14908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14908__$1,(45),dchan);
} else {
if((state_val_14911 === (37))){
var inst_14857 = (state_14908[(23)]);
var inst_14753 = (state_14908[(12)]);
var inst_14871 = (state_14908[(22)]);
var inst_14871__$1 = cljs.core.first(inst_14857);
var inst_14872 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_14871__$1,inst_14753,done);
var state_14908__$1 = (function (){var statearr_15111 = state_14908;
(statearr_15111[(22)] = inst_14871__$1);

return statearr_15111;
})();
if(cljs.core.truth_(inst_14872)){
var statearr_15112_17323 = state_14908__$1;
(statearr_15112_17323[(1)] = (39));

} else {
var statearr_15114_17324 = state_14908__$1;
(statearr_15114_17324[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14911 === (8))){
var inst_14765 = (state_14908[(14)]);
var inst_14764 = (state_14908[(17)]);
var inst_14767 = (inst_14765 < inst_14764);
var inst_14768 = inst_14767;
var state_14908__$1 = state_14908;
if(cljs.core.truth_(inst_14768)){
var statearr_15127_17331 = state_14908__$1;
(statearr_15127_17331[(1)] = (10));

} else {
var statearr_15129_17332 = state_14908__$1;
(statearr_15129_17332[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13419__auto__ = null;
var cljs$core$async$mult_$_state_machine__13419__auto____0 = (function (){
var statearr_15134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15134[(0)] = cljs$core$async$mult_$_state_machine__13419__auto__);

(statearr_15134[(1)] = (1));

return statearr_15134;
});
var cljs$core$async$mult_$_state_machine__13419__auto____1 = (function (state_14908){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_14908);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e15135){var ex__13422__auto__ = e15135;
var statearr_15138_17333 = state_14908;
(statearr_15138_17333[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_14908[(4)]))){
var statearr_15140_17334 = state_14908;
(statearr_15140_17334[(1)] = cljs.core.first((state_14908[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17335 = state_14908;
state_14908 = G__17335;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13419__auto__ = function(state_14908){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13419__auto____1.call(this,state_14908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13419__auto____0;
cljs$core$async$mult_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13419__auto____1;
return cljs$core$async$mult_$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_15144 = f__13738__auto__();
(statearr_15144[(6)] = c__13737__auto___17194);

return statearr_15144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15154 = arguments.length;
switch (G__15154) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17337 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17337(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17338 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17338(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17339 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17339(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17340 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17340(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17341 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17341(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17342 = arguments.length;
var i__5770__auto___17343 = (0);
while(true){
if((i__5770__auto___17343 < len__5769__auto___17342)){
args__5775__auto__.push((arguments[i__5770__auto___17343]));

var G__17344 = (i__5770__auto___17343 + (1));
i__5770__auto___17343 = G__17344;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15228){
var map__15229 = p__15228;
var map__15229__$1 = cljs.core.__destructure_map(map__15229);
var opts = map__15229__$1;
var statearr_15230_17345 = state;
(statearr_15230_17345[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15236_17346 = state;
(statearr_15236_17346[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15237_17347 = state;
(statearr_15237_17347[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15218){
var G__15219 = cljs.core.first(seq15218);
var seq15218__$1 = cljs.core.next(seq15218);
var G__15220 = cljs.core.first(seq15218__$1);
var seq15218__$2 = cljs.core.next(seq15218__$1);
var G__15221 = cljs.core.first(seq15218__$2);
var seq15218__$3 = cljs.core.next(seq15218__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15219,G__15220,G__15221,seq15218__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15273 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15274){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15274 = meta15274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15275,meta15274__$1){
var self__ = this;
var _15275__$1 = this;
return (new cljs.core.async.t_cljs$core$async15273(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15274__$1));
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15275){
var self__ = this;
var _15275__$1 = this;
return self__.meta15274;
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15273.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15274","meta15274",45653168,null)], null);
}));

(cljs.core.async.t_cljs$core$async15273.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15273.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15273");

(cljs.core.async.t_cljs$core$async15273.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15273");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15273.
 */
cljs.core.async.__GT_t_cljs$core$async15273 = (function cljs$core$async$__GT_t_cljs$core$async15273(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15274){
return (new cljs.core.async.t_cljs$core$async15273(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15274));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15273(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__13737__auto___17350 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_15374){
var state_val_15375 = (state_15374[(1)]);
if((state_val_15375 === (7))){
var inst_15333 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15333)){
var statearr_15380_17353 = state_15374__$1;
(statearr_15380_17353[(1)] = (8));

} else {
var statearr_15381_17356 = state_15374__$1;
(statearr_15381_17356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (20))){
var inst_15326 = (state_15374[(7)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15374__$1,(23),out,inst_15326);
} else {
if((state_val_15375 === (1))){
var inst_15306 = calc_state();
var inst_15307 = cljs.core.__destructure_map(inst_15306);
var inst_15308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15307,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15307,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15307,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15311 = inst_15306;
var state_15374__$1 = (function (){var statearr_15386 = state_15374;
(statearr_15386[(8)] = inst_15308);

(statearr_15386[(9)] = inst_15309);

(statearr_15386[(10)] = inst_15310);

(statearr_15386[(11)] = inst_15311);

return statearr_15386;
})();
var statearr_15388_17357 = state_15374__$1;
(statearr_15388_17357[(2)] = null);

(statearr_15388_17357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (24))){
var inst_15314 = (state_15374[(12)]);
var inst_15311 = inst_15314;
var state_15374__$1 = (function (){var statearr_15393 = state_15374;
(statearr_15393[(11)] = inst_15311);

return statearr_15393;
})();
var statearr_15396_17358 = state_15374__$1;
(statearr_15396_17358[(2)] = null);

(statearr_15396_17358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (4))){
var inst_15326 = (state_15374[(7)]);
var inst_15328 = (state_15374[(13)]);
var inst_15325 = (state_15374[(2)]);
var inst_15326__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15325,(0),null);
var inst_15327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15325,(1),null);
var inst_15328__$1 = (inst_15326__$1 == null);
var state_15374__$1 = (function (){var statearr_15398 = state_15374;
(statearr_15398[(7)] = inst_15326__$1);

(statearr_15398[(14)] = inst_15327);

(statearr_15398[(13)] = inst_15328__$1);

return statearr_15398;
})();
if(cljs.core.truth_(inst_15328__$1)){
var statearr_15399_17359 = state_15374__$1;
(statearr_15399_17359[(1)] = (5));

} else {
var statearr_15400_17360 = state_15374__$1;
(statearr_15400_17360[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (15))){
var inst_15348 = (state_15374[(15)]);
var inst_15317 = (state_15374[(16)]);
var inst_15348__$1 = cljs.core.empty_QMARK_(inst_15317);
var state_15374__$1 = (function (){var statearr_15401 = state_15374;
(statearr_15401[(15)] = inst_15348__$1);

return statearr_15401;
})();
if(inst_15348__$1){
var statearr_15403_17361 = state_15374__$1;
(statearr_15403_17361[(1)] = (17));

} else {
var statearr_15405_17362 = state_15374__$1;
(statearr_15405_17362[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (21))){
var inst_15314 = (state_15374[(12)]);
var inst_15311 = inst_15314;
var state_15374__$1 = (function (){var statearr_15409 = state_15374;
(statearr_15409[(11)] = inst_15311);

return statearr_15409;
})();
var statearr_15410_17364 = state_15374__$1;
(statearr_15410_17364[(2)] = null);

(statearr_15410_17364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (13))){
var inst_15341 = (state_15374[(2)]);
var inst_15342 = calc_state();
var inst_15311 = inst_15342;
var state_15374__$1 = (function (){var statearr_15411 = state_15374;
(statearr_15411[(17)] = inst_15341);

(statearr_15411[(11)] = inst_15311);

return statearr_15411;
})();
var statearr_15412_17368 = state_15374__$1;
(statearr_15412_17368[(2)] = null);

(statearr_15412_17368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (22))){
var inst_15368 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15413_17369 = state_15374__$1;
(statearr_15413_17369[(2)] = inst_15368);

(statearr_15413_17369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (6))){
var inst_15327 = (state_15374[(14)]);
var inst_15331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15327,change);
var state_15374__$1 = state_15374;
var statearr_15415_17370 = state_15374__$1;
(statearr_15415_17370[(2)] = inst_15331);

(statearr_15415_17370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (25))){
var state_15374__$1 = state_15374;
var statearr_15418_17371 = state_15374__$1;
(statearr_15418_17371[(2)] = null);

(statearr_15418_17371[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (17))){
var inst_15318 = (state_15374[(18)]);
var inst_15327 = (state_15374[(14)]);
var inst_15350 = (inst_15318.cljs$core$IFn$_invoke$arity$1 ? inst_15318.cljs$core$IFn$_invoke$arity$1(inst_15327) : inst_15318.call(null,inst_15327));
var inst_15351 = cljs.core.not(inst_15350);
var state_15374__$1 = state_15374;
var statearr_15422_17372 = state_15374__$1;
(statearr_15422_17372[(2)] = inst_15351);

(statearr_15422_17372[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (3))){
var inst_15372 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15374__$1,inst_15372);
} else {
if((state_val_15375 === (12))){
var state_15374__$1 = state_15374;
var statearr_15425_17373 = state_15374__$1;
(statearr_15425_17373[(2)] = null);

(statearr_15425_17373[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (2))){
var inst_15311 = (state_15374[(11)]);
var inst_15314 = (state_15374[(12)]);
var inst_15314__$1 = cljs.core.__destructure_map(inst_15311);
var inst_15317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15314__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15318 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15314__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15319 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15314__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15374__$1 = (function (){var statearr_15429 = state_15374;
(statearr_15429[(18)] = inst_15318);

(statearr_15429[(16)] = inst_15317);

(statearr_15429[(12)] = inst_15314__$1);

return statearr_15429;
})();
return cljs.core.async.ioc_alts_BANG_(state_15374__$1,(4),inst_15319);
} else {
if((state_val_15375 === (23))){
var inst_15359 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15359)){
var statearr_15430_17381 = state_15374__$1;
(statearr_15430_17381[(1)] = (24));

} else {
var statearr_15431_17382 = state_15374__$1;
(statearr_15431_17382[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (19))){
var inst_15354 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15433_17383 = state_15374__$1;
(statearr_15433_17383[(2)] = inst_15354);

(statearr_15433_17383[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (11))){
var inst_15327 = (state_15374[(14)]);
var inst_15338 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15327);
var state_15374__$1 = state_15374;
var statearr_15435_17388 = state_15374__$1;
(statearr_15435_17388[(2)] = inst_15338);

(statearr_15435_17388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (9))){
var inst_15317 = (state_15374[(16)]);
var inst_15327 = (state_15374[(14)]);
var inst_15345 = (state_15374[(19)]);
var inst_15345__$1 = (inst_15317.cljs$core$IFn$_invoke$arity$1 ? inst_15317.cljs$core$IFn$_invoke$arity$1(inst_15327) : inst_15317.call(null,inst_15327));
var state_15374__$1 = (function (){var statearr_15440 = state_15374;
(statearr_15440[(19)] = inst_15345__$1);

return statearr_15440;
})();
if(cljs.core.truth_(inst_15345__$1)){
var statearr_15441_17390 = state_15374__$1;
(statearr_15441_17390[(1)] = (14));

} else {
var statearr_15442_17391 = state_15374__$1;
(statearr_15442_17391[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (5))){
var inst_15328 = (state_15374[(13)]);
var state_15374__$1 = state_15374;
var statearr_15443_17392 = state_15374__$1;
(statearr_15443_17392[(2)] = inst_15328);

(statearr_15443_17392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (14))){
var inst_15345 = (state_15374[(19)]);
var state_15374__$1 = state_15374;
var statearr_15444_17394 = state_15374__$1;
(statearr_15444_17394[(2)] = inst_15345);

(statearr_15444_17394[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (26))){
var inst_15364 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15445_17398 = state_15374__$1;
(statearr_15445_17398[(2)] = inst_15364);

(statearr_15445_17398[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (16))){
var inst_15356 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15356)){
var statearr_15446_17399 = state_15374__$1;
(statearr_15446_17399[(1)] = (20));

} else {
var statearr_15448_17400 = state_15374__$1;
(statearr_15448_17400[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (10))){
var inst_15370 = (state_15374[(2)]);
var state_15374__$1 = state_15374;
var statearr_15449_17401 = state_15374__$1;
(statearr_15449_17401[(2)] = inst_15370);

(statearr_15449_17401[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (18))){
var inst_15348 = (state_15374[(15)]);
var state_15374__$1 = state_15374;
var statearr_15450_17405 = state_15374__$1;
(statearr_15450_17405[(2)] = inst_15348);

(statearr_15450_17405[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15375 === (8))){
var inst_15326 = (state_15374[(7)]);
var inst_15336 = (inst_15326 == null);
var state_15374__$1 = state_15374;
if(cljs.core.truth_(inst_15336)){
var statearr_15453_17406 = state_15374__$1;
(statearr_15453_17406[(1)] = (11));

} else {
var statearr_15454_17407 = state_15374__$1;
(statearr_15454_17407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13419__auto__ = null;
var cljs$core$async$mix_$_state_machine__13419__auto____0 = (function (){
var statearr_15455 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15455[(0)] = cljs$core$async$mix_$_state_machine__13419__auto__);

(statearr_15455[(1)] = (1));

return statearr_15455;
});
var cljs$core$async$mix_$_state_machine__13419__auto____1 = (function (state_15374){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_15374);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e15460){var ex__13422__auto__ = e15460;
var statearr_15461_17410 = state_15374;
(statearr_15461_17410[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_15374[(4)]))){
var statearr_15463_17411 = state_15374;
(statearr_15463_17411[(1)] = cljs.core.first((state_15374[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17412 = state_15374;
state_15374 = G__17412;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13419__auto__ = function(state_15374){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13419__auto____1.call(this,state_15374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13419__auto____0;
cljs$core$async$mix_$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13419__auto____1;
return cljs$core$async$mix_$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_15464 = f__13738__auto__();
(statearr_15464[(6)] = c__13737__auto___17350);

return statearr_15464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17413 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17413(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17414 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17414(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17415 = (function() {
var G__17416 = null;
var G__17416__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17416__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17416 = function(p,v){
switch(arguments.length){
case 1:
return G__17416__1.call(this,p);
case 2:
return G__17416__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17416.cljs$core$IFn$_invoke$arity$1 = G__17416__1;
G__17416.cljs$core$IFn$_invoke$arity$2 = G__17416__2;
return G__17416;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15486 = arguments.length;
switch (G__15486) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17415(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17415(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15509 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15510){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15510 = meta15510;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15511,meta15510__$1){
var self__ = this;
var _15511__$1 = this;
return (new cljs.core.async.t_cljs$core$async15509(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15510__$1));
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15511){
var self__ = this;
var _15511__$1 = this;
return self__.meta15510;
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15509.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15509.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15510","meta15510",116160749,null)], null);
}));

(cljs.core.async.t_cljs$core$async15509.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15509");

(cljs.core.async.t_cljs$core$async15509.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15509");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15509.
 */
cljs.core.async.__GT_t_cljs$core$async15509 = (function cljs$core$async$__GT_t_cljs$core$async15509(ch,topic_fn,buf_fn,mults,ensure_mult,meta15510){
return (new cljs.core.async.t_cljs$core$async15509(ch,topic_fn,buf_fn,mults,ensure_mult,meta15510));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__15493 = arguments.length;
switch (G__15493) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15490_SHARP_){
if(cljs.core.truth_((p1__15490_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15490_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15490_SHARP_.call(null,topic)))){
return p1__15490_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15490_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15509(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__13737__auto___17426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_15610){
var state_val_15611 = (state_15610[(1)]);
if((state_val_15611 === (7))){
var inst_15606 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15620_17427 = state_15610__$1;
(statearr_15620_17427[(2)] = inst_15606);

(statearr_15620_17427[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (20))){
var state_15610__$1 = state_15610;
var statearr_15626_17428 = state_15610__$1;
(statearr_15626_17428[(2)] = null);

(statearr_15626_17428[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (1))){
var state_15610__$1 = state_15610;
var statearr_15630_17429 = state_15610__$1;
(statearr_15630_17429[(2)] = null);

(statearr_15630_17429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (24))){
var inst_15589 = (state_15610[(7)]);
var inst_15598 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15589);
var state_15610__$1 = state_15610;
var statearr_15634_17430 = state_15610__$1;
(statearr_15634_17430[(2)] = inst_15598);

(statearr_15634_17430[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (4))){
var inst_15535 = (state_15610[(8)]);
var inst_15535__$1 = (state_15610[(2)]);
var inst_15537 = (inst_15535__$1 == null);
var state_15610__$1 = (function (){var statearr_15647 = state_15610;
(statearr_15647[(8)] = inst_15535__$1);

return statearr_15647;
})();
if(cljs.core.truth_(inst_15537)){
var statearr_15648_17431 = state_15610__$1;
(statearr_15648_17431[(1)] = (5));

} else {
var statearr_15649_17432 = state_15610__$1;
(statearr_15649_17432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (15))){
var inst_15583 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15651_17433 = state_15610__$1;
(statearr_15651_17433[(2)] = inst_15583);

(statearr_15651_17433[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (21))){
var inst_15603 = (state_15610[(2)]);
var state_15610__$1 = (function (){var statearr_15652 = state_15610;
(statearr_15652[(9)] = inst_15603);

return statearr_15652;
})();
var statearr_15653_17434 = state_15610__$1;
(statearr_15653_17434[(2)] = null);

(statearr_15653_17434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (13))){
var inst_15565 = (state_15610[(10)]);
var inst_15567 = cljs.core.chunked_seq_QMARK_(inst_15565);
var state_15610__$1 = state_15610;
if(inst_15567){
var statearr_15655_17436 = state_15610__$1;
(statearr_15655_17436[(1)] = (16));

} else {
var statearr_15656_17437 = state_15610__$1;
(statearr_15656_17437[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (22))){
var inst_15595 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
if(cljs.core.truth_(inst_15595)){
var statearr_15661_17438 = state_15610__$1;
(statearr_15661_17438[(1)] = (23));

} else {
var statearr_15665_17439 = state_15610__$1;
(statearr_15665_17439[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (6))){
var inst_15591 = (state_15610[(11)]);
var inst_15535 = (state_15610[(8)]);
var inst_15589 = (state_15610[(7)]);
var inst_15589__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15535) : topic_fn.call(null,inst_15535));
var inst_15590 = cljs.core.deref(mults);
var inst_15591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15590,inst_15589__$1);
var state_15610__$1 = (function (){var statearr_15666 = state_15610;
(statearr_15666[(11)] = inst_15591__$1);

(statearr_15666[(7)] = inst_15589__$1);

return statearr_15666;
})();
if(cljs.core.truth_(inst_15591__$1)){
var statearr_15667_17440 = state_15610__$1;
(statearr_15667_17440[(1)] = (19));

} else {
var statearr_15668_17441 = state_15610__$1;
(statearr_15668_17441[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (25))){
var inst_15600 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15669_17442 = state_15610__$1;
(statearr_15669_17442[(2)] = inst_15600);

(statearr_15669_17442[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (17))){
var inst_15565 = (state_15610[(10)]);
var inst_15574 = cljs.core.first(inst_15565);
var inst_15575 = cljs.core.async.muxch_STAR_(inst_15574);
var inst_15576 = cljs.core.async.close_BANG_(inst_15575);
var inst_15577 = cljs.core.next(inst_15565);
var inst_15546 = inst_15577;
var inst_15547 = null;
var inst_15548 = (0);
var inst_15549 = (0);
var state_15610__$1 = (function (){var statearr_15670 = state_15610;
(statearr_15670[(12)] = inst_15546);

(statearr_15670[(13)] = inst_15548);

(statearr_15670[(14)] = inst_15549);

(statearr_15670[(15)] = inst_15547);

(statearr_15670[(16)] = inst_15576);

return statearr_15670;
})();
var statearr_15671_17447 = state_15610__$1;
(statearr_15671_17447[(2)] = null);

(statearr_15671_17447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (3))){
var inst_15608 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15610__$1,inst_15608);
} else {
if((state_val_15611 === (12))){
var inst_15585 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15674_17448 = state_15610__$1;
(statearr_15674_17448[(2)] = inst_15585);

(statearr_15674_17448[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (2))){
var state_15610__$1 = state_15610;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15610__$1,(4),ch);
} else {
if((state_val_15611 === (23))){
var state_15610__$1 = state_15610;
var statearr_15675_17450 = state_15610__$1;
(statearr_15675_17450[(2)] = null);

(statearr_15675_17450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (19))){
var inst_15591 = (state_15610[(11)]);
var inst_15535 = (state_15610[(8)]);
var inst_15593 = cljs.core.async.muxch_STAR_(inst_15591);
var state_15610__$1 = state_15610;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15610__$1,(22),inst_15593,inst_15535);
} else {
if((state_val_15611 === (11))){
var inst_15546 = (state_15610[(12)]);
var inst_15565 = (state_15610[(10)]);
var inst_15565__$1 = cljs.core.seq(inst_15546);
var state_15610__$1 = (function (){var statearr_15676 = state_15610;
(statearr_15676[(10)] = inst_15565__$1);

return statearr_15676;
})();
if(inst_15565__$1){
var statearr_15677_17468 = state_15610__$1;
(statearr_15677_17468[(1)] = (13));

} else {
var statearr_15678_17469 = state_15610__$1;
(statearr_15678_17469[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (9))){
var inst_15587 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15679_17470 = state_15610__$1;
(statearr_15679_17470[(2)] = inst_15587);

(statearr_15679_17470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (5))){
var inst_15543 = cljs.core.deref(mults);
var inst_15544 = cljs.core.vals(inst_15543);
var inst_15545 = cljs.core.seq(inst_15544);
var inst_15546 = inst_15545;
var inst_15547 = null;
var inst_15548 = (0);
var inst_15549 = (0);
var state_15610__$1 = (function (){var statearr_15685 = state_15610;
(statearr_15685[(12)] = inst_15546);

(statearr_15685[(13)] = inst_15548);

(statearr_15685[(14)] = inst_15549);

(statearr_15685[(15)] = inst_15547);

return statearr_15685;
})();
var statearr_15694_17477 = state_15610__$1;
(statearr_15694_17477[(2)] = null);

(statearr_15694_17477[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (14))){
var state_15610__$1 = state_15610;
var statearr_15698_17478 = state_15610__$1;
(statearr_15698_17478[(2)] = null);

(statearr_15698_17478[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (16))){
var inst_15565 = (state_15610[(10)]);
var inst_15569 = cljs.core.chunk_first(inst_15565);
var inst_15570 = cljs.core.chunk_rest(inst_15565);
var inst_15571 = cljs.core.count(inst_15569);
var inst_15546 = inst_15570;
var inst_15547 = inst_15569;
var inst_15548 = inst_15571;
var inst_15549 = (0);
var state_15610__$1 = (function (){var statearr_15700 = state_15610;
(statearr_15700[(12)] = inst_15546);

(statearr_15700[(13)] = inst_15548);

(statearr_15700[(14)] = inst_15549);

(statearr_15700[(15)] = inst_15547);

return statearr_15700;
})();
var statearr_15704_17479 = state_15610__$1;
(statearr_15704_17479[(2)] = null);

(statearr_15704_17479[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (10))){
var inst_15546 = (state_15610[(12)]);
var inst_15548 = (state_15610[(13)]);
var inst_15549 = (state_15610[(14)]);
var inst_15547 = (state_15610[(15)]);
var inst_15557 = cljs.core._nth(inst_15547,inst_15549);
var inst_15560 = cljs.core.async.muxch_STAR_(inst_15557);
var inst_15561 = cljs.core.async.close_BANG_(inst_15560);
var inst_15562 = (inst_15549 + (1));
var tmp15695 = inst_15546;
var tmp15696 = inst_15548;
var tmp15697 = inst_15547;
var inst_15546__$1 = tmp15695;
var inst_15547__$1 = tmp15697;
var inst_15548__$1 = tmp15696;
var inst_15549__$1 = inst_15562;
var state_15610__$1 = (function (){var statearr_15711 = state_15610;
(statearr_15711[(12)] = inst_15546__$1);

(statearr_15711[(17)] = inst_15561);

(statearr_15711[(13)] = inst_15548__$1);

(statearr_15711[(14)] = inst_15549__$1);

(statearr_15711[(15)] = inst_15547__$1);

return statearr_15711;
})();
var statearr_15712_17484 = state_15610__$1;
(statearr_15712_17484[(2)] = null);

(statearr_15712_17484[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (18))){
var inst_15580 = (state_15610[(2)]);
var state_15610__$1 = state_15610;
var statearr_15719_17488 = state_15610__$1;
(statearr_15719_17488[(2)] = inst_15580);

(statearr_15719_17488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15611 === (8))){
var inst_15548 = (state_15610[(13)]);
var inst_15549 = (state_15610[(14)]);
var inst_15552 = (inst_15549 < inst_15548);
var inst_15553 = inst_15552;
var state_15610__$1 = state_15610;
if(cljs.core.truth_(inst_15553)){
var statearr_15724_17497 = state_15610__$1;
(statearr_15724_17497[(1)] = (10));

} else {
var statearr_15725_17498 = state_15610__$1;
(statearr_15725_17498[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_15733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15733[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_15733[(1)] = (1));

return statearr_15733;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_15610){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_15610);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e15736){var ex__13422__auto__ = e15736;
var statearr_15737_17505 = state_15610;
(statearr_15737_17505[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_15610[(4)]))){
var statearr_15738_17509 = state_15610;
(statearr_15738_17509[(1)] = cljs.core.first((state_15610[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17516 = state_15610;
state_15610 = G__17516;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_15610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_15610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_15746 = f__13738__auto__();
(statearr_15746[(6)] = c__13737__auto___17426);

return statearr_15746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__15751 = arguments.length;
switch (G__15751) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__15755 = arguments.length;
switch (G__15755) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__15763 = arguments.length;
switch (G__15763) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__13737__auto___17532 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_15812){
var state_val_15813 = (state_15812[(1)]);
if((state_val_15813 === (7))){
var state_15812__$1 = state_15812;
var statearr_15815_17534 = state_15812__$1;
(statearr_15815_17534[(2)] = null);

(statearr_15815_17534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (1))){
var state_15812__$1 = state_15812;
var statearr_15816_17535 = state_15812__$1;
(statearr_15816_17535[(2)] = null);

(statearr_15816_17535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (4))){
var inst_15772 = (state_15812[(7)]);
var inst_15773 = (state_15812[(8)]);
var inst_15775 = (inst_15773 < inst_15772);
var state_15812__$1 = state_15812;
if(cljs.core.truth_(inst_15775)){
var statearr_15817_17536 = state_15812__$1;
(statearr_15817_17536[(1)] = (6));

} else {
var statearr_15818_17537 = state_15812__$1;
(statearr_15818_17537[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (15))){
var inst_15798 = (state_15812[(9)]);
var inst_15803 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15798);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15812__$1,(17),out,inst_15803);
} else {
if((state_val_15813 === (13))){
var inst_15798 = (state_15812[(9)]);
var inst_15798__$1 = (state_15812[(2)]);
var inst_15799 = cljs.core.some(cljs.core.nil_QMARK_,inst_15798__$1);
var state_15812__$1 = (function (){var statearr_15819 = state_15812;
(statearr_15819[(9)] = inst_15798__$1);

return statearr_15819;
})();
if(cljs.core.truth_(inst_15799)){
var statearr_15820_17538 = state_15812__$1;
(statearr_15820_17538[(1)] = (14));

} else {
var statearr_15821_17539 = state_15812__$1;
(statearr_15821_17539[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (6))){
var state_15812__$1 = state_15812;
var statearr_15824_17540 = state_15812__$1;
(statearr_15824_17540[(2)] = null);

(statearr_15824_17540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (17))){
var inst_15805 = (state_15812[(2)]);
var state_15812__$1 = (function (){var statearr_15829 = state_15812;
(statearr_15829[(10)] = inst_15805);

return statearr_15829;
})();
var statearr_15830_17541 = state_15812__$1;
(statearr_15830_17541[(2)] = null);

(statearr_15830_17541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (3))){
var inst_15810 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15812__$1,inst_15810);
} else {
if((state_val_15813 === (12))){
var _ = (function (){var statearr_15832 = state_15812;
(statearr_15832[(4)] = cljs.core.rest((state_15812[(4)])));

return statearr_15832;
})();
var state_15812__$1 = state_15812;
var ex15828 = (state_15812__$1[(2)]);
var statearr_15833_17542 = state_15812__$1;
(statearr_15833_17542[(5)] = ex15828);


if((ex15828 instanceof Object)){
var statearr_15837_17543 = state_15812__$1;
(statearr_15837_17543[(1)] = (11));

(statearr_15837_17543[(5)] = null);

} else {
throw ex15828;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (2))){
var inst_15771 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15772 = cnt;
var inst_15773 = (0);
var state_15812__$1 = (function (){var statearr_15840 = state_15812;
(statearr_15840[(11)] = inst_15771);

(statearr_15840[(7)] = inst_15772);

(statearr_15840[(8)] = inst_15773);

return statearr_15840;
})();
var statearr_15842_17544 = state_15812__$1;
(statearr_15842_17544[(2)] = null);

(statearr_15842_17544[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (11))){
var inst_15777 = (state_15812[(2)]);
var inst_15778 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15812__$1 = (function (){var statearr_15844 = state_15812;
(statearr_15844[(12)] = inst_15777);

return statearr_15844;
})();
var statearr_15845_17545 = state_15812__$1;
(statearr_15845_17545[(2)] = inst_15778);

(statearr_15845_17545[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (9))){
var inst_15773 = (state_15812[(8)]);
var _ = (function (){var statearr_15846 = state_15812;
(statearr_15846[(4)] = cljs.core.cons((12),(state_15812[(4)])));

return statearr_15846;
})();
var inst_15784 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15773) : chs__$1.call(null,inst_15773));
var inst_15785 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15773) : done.call(null,inst_15773));
var inst_15786 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15784,inst_15785);
var ___$1 = (function (){var statearr_15847 = state_15812;
(statearr_15847[(4)] = cljs.core.rest((state_15812[(4)])));

return statearr_15847;
})();
var state_15812__$1 = state_15812;
var statearr_15849_17550 = state_15812__$1;
(statearr_15849_17550[(2)] = inst_15786);

(statearr_15849_17550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (5))){
var inst_15796 = (state_15812[(2)]);
var state_15812__$1 = (function (){var statearr_15852 = state_15812;
(statearr_15852[(13)] = inst_15796);

return statearr_15852;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15812__$1,(13),dchan);
} else {
if((state_val_15813 === (14))){
var inst_15801 = cljs.core.async.close_BANG_(out);
var state_15812__$1 = state_15812;
var statearr_15854_17551 = state_15812__$1;
(statearr_15854_17551[(2)] = inst_15801);

(statearr_15854_17551[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (16))){
var inst_15808 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15855_17552 = state_15812__$1;
(statearr_15855_17552[(2)] = inst_15808);

(statearr_15855_17552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (10))){
var inst_15773 = (state_15812[(8)]);
var inst_15789 = (state_15812[(2)]);
var inst_15790 = (inst_15773 + (1));
var inst_15773__$1 = inst_15790;
var state_15812__$1 = (function (){var statearr_15857 = state_15812;
(statearr_15857[(14)] = inst_15789);

(statearr_15857[(8)] = inst_15773__$1);

return statearr_15857;
})();
var statearr_15858_17553 = state_15812__$1;
(statearr_15858_17553[(2)] = null);

(statearr_15858_17553[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15813 === (8))){
var inst_15794 = (state_15812[(2)]);
var state_15812__$1 = state_15812;
var statearr_15860_17554 = state_15812__$1;
(statearr_15860_17554[(2)] = inst_15794);

(statearr_15860_17554[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_15867 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15867[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_15867[(1)] = (1));

return statearr_15867;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_15812){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_15812);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e15868){var ex__13422__auto__ = e15868;
var statearr_15869_17555 = state_15812;
(statearr_15869_17555[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_15812[(4)]))){
var statearr_15871_17556 = state_15812;
(statearr_15871_17556[(1)] = cljs.core.first((state_15812[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17557 = state_15812;
state_15812 = G__17557;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_15812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_15812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_15874 = f__13738__auto__();
(statearr_15874[(6)] = c__13737__auto___17532);

return statearr_15874;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__15880 = arguments.length;
switch (G__15880) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_15921){
var state_val_15922 = (state_15921[(1)]);
if((state_val_15922 === (7))){
var inst_15899 = (state_15921[(7)]);
var inst_15900 = (state_15921[(8)]);
var inst_15899__$1 = (state_15921[(2)]);
var inst_15900__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15899__$1,(0),null);
var inst_15902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15899__$1,(1),null);
var inst_15903 = (inst_15900__$1 == null);
var state_15921__$1 = (function (){var statearr_15926 = state_15921;
(statearr_15926[(7)] = inst_15899__$1);

(statearr_15926[(8)] = inst_15900__$1);

(statearr_15926[(9)] = inst_15902);

return statearr_15926;
})();
if(cljs.core.truth_(inst_15903)){
var statearr_15927_17560 = state_15921__$1;
(statearr_15927_17560[(1)] = (8));

} else {
var statearr_15929_17561 = state_15921__$1;
(statearr_15929_17561[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (1))){
var inst_15887 = cljs.core.vec(chs);
var inst_15888 = inst_15887;
var state_15921__$1 = (function (){var statearr_15930 = state_15921;
(statearr_15930[(10)] = inst_15888);

return statearr_15930;
})();
var statearr_15931_17562 = state_15921__$1;
(statearr_15931_17562[(2)] = null);

(statearr_15931_17562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (4))){
var inst_15888 = (state_15921[(10)]);
var state_15921__$1 = state_15921;
return cljs.core.async.ioc_alts_BANG_(state_15921__$1,(7),inst_15888);
} else {
if((state_val_15922 === (6))){
var inst_15917 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
var statearr_15932_17563 = state_15921__$1;
(statearr_15932_17563[(2)] = inst_15917);

(statearr_15932_17563[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (3))){
var inst_15919 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15921__$1,inst_15919);
} else {
if((state_val_15922 === (2))){
var inst_15888 = (state_15921[(10)]);
var inst_15890 = cljs.core.count(inst_15888);
var inst_15891 = (inst_15890 > (0));
var state_15921__$1 = state_15921;
if(cljs.core.truth_(inst_15891)){
var statearr_15938_17564 = state_15921__$1;
(statearr_15938_17564[(1)] = (4));

} else {
var statearr_15939_17565 = state_15921__$1;
(statearr_15939_17565[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (11))){
var inst_15888 = (state_15921[(10)]);
var inst_15910 = (state_15921[(2)]);
var tmp15937 = inst_15888;
var inst_15888__$1 = tmp15937;
var state_15921__$1 = (function (){var statearr_15940 = state_15921;
(statearr_15940[(11)] = inst_15910);

(statearr_15940[(10)] = inst_15888__$1);

return statearr_15940;
})();
var statearr_15941_17566 = state_15921__$1;
(statearr_15941_17566[(2)] = null);

(statearr_15941_17566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (9))){
var inst_15900 = (state_15921[(8)]);
var state_15921__$1 = state_15921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15921__$1,(11),out,inst_15900);
} else {
if((state_val_15922 === (5))){
var inst_15915 = cljs.core.async.close_BANG_(out);
var state_15921__$1 = state_15921;
var statearr_15978_17568 = state_15921__$1;
(statearr_15978_17568[(2)] = inst_15915);

(statearr_15978_17568[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (10))){
var inst_15913 = (state_15921[(2)]);
var state_15921__$1 = state_15921;
var statearr_15990_17569 = state_15921__$1;
(statearr_15990_17569[(2)] = inst_15913);

(statearr_15990_17569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15922 === (8))){
var inst_15888 = (state_15921[(10)]);
var inst_15899 = (state_15921[(7)]);
var inst_15900 = (state_15921[(8)]);
var inst_15902 = (state_15921[(9)]);
var inst_15905 = (function (){var cs = inst_15888;
var vec__15894 = inst_15899;
var v = inst_15900;
var c = inst_15902;
return (function (p1__15876_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__15876_SHARP_);
});
})();
var inst_15906 = cljs.core.filterv(inst_15905,inst_15888);
var inst_15888__$1 = inst_15906;
var state_15921__$1 = (function (){var statearr_15996 = state_15921;
(statearr_15996[(10)] = inst_15888__$1);

return statearr_15996;
})();
var statearr_15998_17570 = state_15921__$1;
(statearr_15998_17570[(2)] = null);

(statearr_15998_17570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_15999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15999[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_15999[(1)] = (1));

return statearr_15999;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_15921){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_15921);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16003){var ex__13422__auto__ = e16003;
var statearr_16005_17571 = state_15921;
(statearr_16005_17571[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_15921[(4)]))){
var statearr_16006_17572 = state_15921;
(statearr_16006_17572[(1)] = cljs.core.first((state_15921[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17573 = state_15921;
state_15921 = G__17573;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_15921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_15921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16009 = f__13738__auto__();
(statearr_16009[(6)] = c__13737__auto___17559);

return statearr_16009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16019 = arguments.length;
switch (G__16019) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16050){
var state_val_16051 = (state_16050[(1)]);
if((state_val_16051 === (7))){
var inst_16032 = (state_16050[(7)]);
var inst_16032__$1 = (state_16050[(2)]);
var inst_16033 = (inst_16032__$1 == null);
var inst_16034 = cljs.core.not(inst_16033);
var state_16050__$1 = (function (){var statearr_16057 = state_16050;
(statearr_16057[(7)] = inst_16032__$1);

return statearr_16057;
})();
if(inst_16034){
var statearr_16059_17576 = state_16050__$1;
(statearr_16059_17576[(1)] = (8));

} else {
var statearr_16060_17577 = state_16050__$1;
(statearr_16060_17577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (1))){
var inst_16027 = (0);
var state_16050__$1 = (function (){var statearr_16062 = state_16050;
(statearr_16062[(8)] = inst_16027);

return statearr_16062;
})();
var statearr_16063_17578 = state_16050__$1;
(statearr_16063_17578[(2)] = null);

(statearr_16063_17578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (4))){
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16050__$1,(7),ch);
} else {
if((state_val_16051 === (6))){
var inst_16045 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16068_17579 = state_16050__$1;
(statearr_16068_17579[(2)] = inst_16045);

(statearr_16068_17579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (3))){
var inst_16047 = (state_16050[(2)]);
var inst_16048 = cljs.core.async.close_BANG_(out);
var state_16050__$1 = (function (){var statearr_16072 = state_16050;
(statearr_16072[(9)] = inst_16047);

return statearr_16072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16050__$1,inst_16048);
} else {
if((state_val_16051 === (2))){
var inst_16027 = (state_16050[(8)]);
var inst_16029 = (inst_16027 < n);
var state_16050__$1 = state_16050;
if(cljs.core.truth_(inst_16029)){
var statearr_16073_17580 = state_16050__$1;
(statearr_16073_17580[(1)] = (4));

} else {
var statearr_16075_17581 = state_16050__$1;
(statearr_16075_17581[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (11))){
var inst_16027 = (state_16050[(8)]);
var inst_16037 = (state_16050[(2)]);
var inst_16038 = (inst_16027 + (1));
var inst_16027__$1 = inst_16038;
var state_16050__$1 = (function (){var statearr_16076 = state_16050;
(statearr_16076[(8)] = inst_16027__$1);

(statearr_16076[(10)] = inst_16037);

return statearr_16076;
})();
var statearr_16078_17582 = state_16050__$1;
(statearr_16078_17582[(2)] = null);

(statearr_16078_17582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (9))){
var state_16050__$1 = state_16050;
var statearr_16079_17583 = state_16050__$1;
(statearr_16079_17583[(2)] = null);

(statearr_16079_17583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (5))){
var state_16050__$1 = state_16050;
var statearr_16081_17584 = state_16050__$1;
(statearr_16081_17584[(2)] = null);

(statearr_16081_17584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (10))){
var inst_16042 = (state_16050[(2)]);
var state_16050__$1 = state_16050;
var statearr_16082_17585 = state_16050__$1;
(statearr_16082_17585[(2)] = inst_16042);

(statearr_16082_17585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16051 === (8))){
var inst_16032 = (state_16050[(7)]);
var state_16050__$1 = state_16050;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16050__$1,(11),out,inst_16032);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_16086 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16086[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_16086[(1)] = (1));

return statearr_16086;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_16050){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16050);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16087){var ex__13422__auto__ = e16087;
var statearr_16088_17586 = state_16050;
(statearr_16088_17586[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16050[(4)]))){
var statearr_16089_17587 = state_16050;
(statearr_16089_17587[(1)] = cljs.core.first((state_16050[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17588 = state_16050;
state_16050 = G__17588;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_16050){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_16050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16097 = f__13738__auto__();
(statearr_16097[(6)] = c__13737__auto___17575);

return statearr_16097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16124 = (function (f,ch,meta16106,_,fn1,meta16125){
this.f = f;
this.ch = ch;
this.meta16106 = meta16106;
this._ = _;
this.fn1 = fn1;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){
var self__ = this;
var _16126__$1 = this;
return (new cljs.core.async.t_cljs$core$async16124(self__.f,self__.ch,self__.meta16106,self__._,self__.fn1,meta16125__$1));
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){
var self__ = this;
var _16126__$1 = this;
return self__.meta16125;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16124.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16099_SHARP_){
var G__16139 = (((p1__16099_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16099_SHARP_) : self__.f.call(null,p1__16099_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16139) : f1.call(null,G__16139));
});
}));

(cljs.core.async.t_cljs$core$async16124.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16106","meta16106",-235329724,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16105","cljs.core.async/t_cljs$core$async16105",-1120930994,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16125","meta16125",519741344,null)], null);
}));

(cljs.core.async.t_cljs$core$async16124.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16124");

(cljs.core.async.t_cljs$core$async16124.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16124");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16124.
 */
cljs.core.async.__GT_t_cljs$core$async16124 = (function cljs$core$async$__GT_t_cljs$core$async16124(f,ch,meta16106,_,fn1,meta16125){
return (new cljs.core.async.t_cljs$core$async16124(f,ch,meta16106,_,fn1,meta16125));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16105 = (function (f,ch,meta16106){
this.f = f;
this.ch = ch;
this.meta16106 = meta16106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16107,meta16106__$1){
var self__ = this;
var _16107__$1 = this;
return (new cljs.core.async.t_cljs$core$async16105(self__.f,self__.ch,meta16106__$1));
}));

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16107){
var self__ = this;
var _16107__$1 = this;
return self__.meta16106;
}));

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16124(self__.f,self__.ch,self__.meta16106,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16156 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16156) : self__.f.call(null,G__16156));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16106","meta16106",-235329724,null)], null);
}));

(cljs.core.async.t_cljs$core$async16105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16105");

(cljs.core.async.t_cljs$core$async16105.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16105.
 */
cljs.core.async.__GT_t_cljs$core$async16105 = (function cljs$core$async$__GT_t_cljs$core$async16105(f,ch,meta16106){
return (new cljs.core.async.t_cljs$core$async16105(f,ch,meta16106));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16105(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16182 = (function (f,ch,meta16183){
this.f = f;
this.ch = ch;
this.meta16183 = meta16183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16184,meta16183__$1){
var self__ = this;
var _16184__$1 = this;
return (new cljs.core.async.t_cljs$core$async16182(self__.f,self__.ch,meta16183__$1));
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16184){
var self__ = this;
var _16184__$1 = this;
return self__.meta16183;
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16182.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16182.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16183","meta16183",-1547286197,null)], null);
}));

(cljs.core.async.t_cljs$core$async16182.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16182");

(cljs.core.async.t_cljs$core$async16182.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16182");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16182.
 */
cljs.core.async.__GT_t_cljs$core$async16182 = (function cljs$core$async$__GT_t_cljs$core$async16182(f,ch,meta16183){
return (new cljs.core.async.t_cljs$core$async16182(f,ch,meta16183));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16182(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16203 = (function (p,ch,meta16204){
this.p = p;
this.ch = ch;
this.meta16204 = meta16204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16205,meta16204__$1){
var self__ = this;
var _16205__$1 = this;
return (new cljs.core.async.t_cljs$core$async16203(self__.p,self__.ch,meta16204__$1));
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16205){
var self__ = this;
var _16205__$1 = this;
return self__.meta16204;
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16203.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16203.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16204","meta16204",459537759,null)], null);
}));

(cljs.core.async.t_cljs$core$async16203.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16203");

(cljs.core.async.t_cljs$core$async16203.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16203");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16203.
 */
cljs.core.async.__GT_t_cljs$core$async16203 = (function cljs$core$async$__GT_t_cljs$core$async16203(p,ch,meta16204){
return (new cljs.core.async.t_cljs$core$async16203(p,ch,meta16204));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16203(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16241 = arguments.length;
switch (G__16241) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16274){
var state_val_16276 = (state_16274[(1)]);
if((state_val_16276 === (7))){
var inst_16270 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
var statearr_16282_17615 = state_16274__$1;
(statearr_16282_17615[(2)] = inst_16270);

(statearr_16282_17615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (1))){
var state_16274__$1 = state_16274;
var statearr_16285_17617 = state_16274__$1;
(statearr_16285_17617[(2)] = null);

(statearr_16285_17617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (4))){
var inst_16252 = (state_16274[(7)]);
var inst_16252__$1 = (state_16274[(2)]);
var inst_16254 = (inst_16252__$1 == null);
var state_16274__$1 = (function (){var statearr_16287 = state_16274;
(statearr_16287[(7)] = inst_16252__$1);

return statearr_16287;
})();
if(cljs.core.truth_(inst_16254)){
var statearr_16288_17621 = state_16274__$1;
(statearr_16288_17621[(1)] = (5));

} else {
var statearr_16289_17622 = state_16274__$1;
(statearr_16289_17622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (6))){
var inst_16252 = (state_16274[(7)]);
var inst_16258 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16252) : p.call(null,inst_16252));
var state_16274__$1 = state_16274;
if(cljs.core.truth_(inst_16258)){
var statearr_16293_17623 = state_16274__$1;
(statearr_16293_17623[(1)] = (8));

} else {
var statearr_16294_17624 = state_16274__$1;
(statearr_16294_17624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (3))){
var inst_16272 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16274__$1,inst_16272);
} else {
if((state_val_16276 === (2))){
var state_16274__$1 = state_16274;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16274__$1,(4),ch);
} else {
if((state_val_16276 === (11))){
var inst_16264 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
var statearr_16303_17625 = state_16274__$1;
(statearr_16303_17625[(2)] = inst_16264);

(statearr_16303_17625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (9))){
var state_16274__$1 = state_16274;
var statearr_16305_17626 = state_16274__$1;
(statearr_16305_17626[(2)] = null);

(statearr_16305_17626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (5))){
var inst_16256 = cljs.core.async.close_BANG_(out);
var state_16274__$1 = state_16274;
var statearr_16308_17627 = state_16274__$1;
(statearr_16308_17627[(2)] = inst_16256);

(statearr_16308_17627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (10))){
var inst_16267 = (state_16274[(2)]);
var state_16274__$1 = (function (){var statearr_16311 = state_16274;
(statearr_16311[(8)] = inst_16267);

return statearr_16311;
})();
var statearr_16312_17628 = state_16274__$1;
(statearr_16312_17628[(2)] = null);

(statearr_16312_17628[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16276 === (8))){
var inst_16252 = (state_16274[(7)]);
var state_16274__$1 = state_16274;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16274__$1,(11),out,inst_16252);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_16317 = [null,null,null,null,null,null,null,null,null];
(statearr_16317[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_16317[(1)] = (1));

return statearr_16317;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_16274){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16274);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16318){var ex__13422__auto__ = e16318;
var statearr_16320_17629 = state_16274;
(statearr_16320_17629[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16274[(4)]))){
var statearr_16321_17630 = state_16274;
(statearr_16321_17630[(1)] = cljs.core.first((state_16274[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17631 = state_16274;
state_16274 = G__17631;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_16274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_16274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16325 = f__13738__auto__();
(statearr_16325[(6)] = c__13737__auto___17614);

return statearr_16325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16331 = arguments.length;
switch (G__16331) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__13737__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16416){
var state_val_16417 = (state_16416[(1)]);
if((state_val_16417 === (7))){
var inst_16411 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16422_17633 = state_16416__$1;
(statearr_16422_17633[(2)] = inst_16411);

(statearr_16422_17633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (20))){
var inst_16377 = (state_16416[(7)]);
var inst_16392 = (state_16416[(2)]);
var inst_16393 = cljs.core.next(inst_16377);
var inst_16358 = inst_16393;
var inst_16359 = null;
var inst_16360 = (0);
var inst_16361 = (0);
var state_16416__$1 = (function (){var statearr_16426 = state_16416;
(statearr_16426[(8)] = inst_16359);

(statearr_16426[(9)] = inst_16392);

(statearr_16426[(10)] = inst_16360);

(statearr_16426[(11)] = inst_16361);

(statearr_16426[(12)] = inst_16358);

return statearr_16426;
})();
var statearr_16428_17634 = state_16416__$1;
(statearr_16428_17634[(2)] = null);

(statearr_16428_17634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (1))){
var state_16416__$1 = state_16416;
var statearr_16431_17635 = state_16416__$1;
(statearr_16431_17635[(2)] = null);

(statearr_16431_17635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (4))){
var inst_16346 = (state_16416[(13)]);
var inst_16346__$1 = (state_16416[(2)]);
var inst_16347 = (inst_16346__$1 == null);
var state_16416__$1 = (function (){var statearr_16434 = state_16416;
(statearr_16434[(13)] = inst_16346__$1);

return statearr_16434;
})();
if(cljs.core.truth_(inst_16347)){
var statearr_16436_17636 = state_16416__$1;
(statearr_16436_17636[(1)] = (5));

} else {
var statearr_16437_17637 = state_16416__$1;
(statearr_16437_17637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (15))){
var state_16416__$1 = state_16416;
var statearr_16448_17638 = state_16416__$1;
(statearr_16448_17638[(2)] = null);

(statearr_16448_17638[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (21))){
var state_16416__$1 = state_16416;
var statearr_16449_17639 = state_16416__$1;
(statearr_16449_17639[(2)] = null);

(statearr_16449_17639[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (13))){
var inst_16359 = (state_16416[(8)]);
var inst_16360 = (state_16416[(10)]);
var inst_16361 = (state_16416[(11)]);
var inst_16358 = (state_16416[(12)]);
var inst_16372 = (state_16416[(2)]);
var inst_16373 = (inst_16361 + (1));
var tmp16444 = inst_16359;
var tmp16445 = inst_16360;
var tmp16446 = inst_16358;
var inst_16358__$1 = tmp16446;
var inst_16359__$1 = tmp16444;
var inst_16360__$1 = tmp16445;
var inst_16361__$1 = inst_16373;
var state_16416__$1 = (function (){var statearr_16458 = state_16416;
(statearr_16458[(8)] = inst_16359__$1);

(statearr_16458[(10)] = inst_16360__$1);

(statearr_16458[(11)] = inst_16361__$1);

(statearr_16458[(12)] = inst_16358__$1);

(statearr_16458[(14)] = inst_16372);

return statearr_16458;
})();
var statearr_16460_17640 = state_16416__$1;
(statearr_16460_17640[(2)] = null);

(statearr_16460_17640[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (22))){
var state_16416__$1 = state_16416;
var statearr_16461_17641 = state_16416__$1;
(statearr_16461_17641[(2)] = null);

(statearr_16461_17641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (6))){
var inst_16346 = (state_16416[(13)]);
var inst_16355 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16346) : f.call(null,inst_16346));
var inst_16356 = cljs.core.seq(inst_16355);
var inst_16358 = inst_16356;
var inst_16359 = null;
var inst_16360 = (0);
var inst_16361 = (0);
var state_16416__$1 = (function (){var statearr_16464 = state_16416;
(statearr_16464[(8)] = inst_16359);

(statearr_16464[(10)] = inst_16360);

(statearr_16464[(11)] = inst_16361);

(statearr_16464[(12)] = inst_16358);

return statearr_16464;
})();
var statearr_16465_17642 = state_16416__$1;
(statearr_16465_17642[(2)] = null);

(statearr_16465_17642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (17))){
var inst_16377 = (state_16416[(7)]);
var inst_16384 = cljs.core.chunk_first(inst_16377);
var inst_16385 = cljs.core.chunk_rest(inst_16377);
var inst_16387 = cljs.core.count(inst_16384);
var inst_16358 = inst_16385;
var inst_16359 = inst_16384;
var inst_16360 = inst_16387;
var inst_16361 = (0);
var state_16416__$1 = (function (){var statearr_16466 = state_16416;
(statearr_16466[(8)] = inst_16359);

(statearr_16466[(10)] = inst_16360);

(statearr_16466[(11)] = inst_16361);

(statearr_16466[(12)] = inst_16358);

return statearr_16466;
})();
var statearr_16467_17646 = state_16416__$1;
(statearr_16467_17646[(2)] = null);

(statearr_16467_17646[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (3))){
var inst_16413 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16416__$1,inst_16413);
} else {
if((state_val_16417 === (12))){
var inst_16401 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16468_17647 = state_16416__$1;
(statearr_16468_17647[(2)] = inst_16401);

(statearr_16468_17647[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (2))){
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16416__$1,(4),in$);
} else {
if((state_val_16417 === (23))){
var inst_16409 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16469_17648 = state_16416__$1;
(statearr_16469_17648[(2)] = inst_16409);

(statearr_16469_17648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (19))){
var inst_16396 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16470_17649 = state_16416__$1;
(statearr_16470_17649[(2)] = inst_16396);

(statearr_16470_17649[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (11))){
var inst_16377 = (state_16416[(7)]);
var inst_16358 = (state_16416[(12)]);
var inst_16377__$1 = cljs.core.seq(inst_16358);
var state_16416__$1 = (function (){var statearr_16480 = state_16416;
(statearr_16480[(7)] = inst_16377__$1);

return statearr_16480;
})();
if(inst_16377__$1){
var statearr_16481_17650 = state_16416__$1;
(statearr_16481_17650[(1)] = (14));

} else {
var statearr_16487_17651 = state_16416__$1;
(statearr_16487_17651[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (9))){
var inst_16403 = (state_16416[(2)]);
var inst_16404 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16416__$1 = (function (){var statearr_16488 = state_16416;
(statearr_16488[(15)] = inst_16403);

return statearr_16488;
})();
if(cljs.core.truth_(inst_16404)){
var statearr_16489_17653 = state_16416__$1;
(statearr_16489_17653[(1)] = (21));

} else {
var statearr_16490_17654 = state_16416__$1;
(statearr_16490_17654[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (5))){
var inst_16349 = cljs.core.async.close_BANG_(out);
var state_16416__$1 = state_16416;
var statearr_16491_17655 = state_16416__$1;
(statearr_16491_17655[(2)] = inst_16349);

(statearr_16491_17655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (14))){
var inst_16377 = (state_16416[(7)]);
var inst_16380 = cljs.core.chunked_seq_QMARK_(inst_16377);
var state_16416__$1 = state_16416;
if(inst_16380){
var statearr_16492_17656 = state_16416__$1;
(statearr_16492_17656[(1)] = (17));

} else {
var statearr_16494_17657 = state_16416__$1;
(statearr_16494_17657[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (16))){
var inst_16399 = (state_16416[(2)]);
var state_16416__$1 = state_16416;
var statearr_16496_17658 = state_16416__$1;
(statearr_16496_17658[(2)] = inst_16399);

(statearr_16496_17658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16417 === (10))){
var inst_16359 = (state_16416[(8)]);
var inst_16361 = (state_16416[(11)]);
var inst_16369 = cljs.core._nth(inst_16359,inst_16361);
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16416__$1,(13),out,inst_16369);
} else {
if((state_val_16417 === (18))){
var inst_16377 = (state_16416[(7)]);
var inst_16390 = cljs.core.first(inst_16377);
var state_16416__$1 = state_16416;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16416__$1,(20),out,inst_16390);
} else {
if((state_val_16417 === (8))){
var inst_16360 = (state_16416[(10)]);
var inst_16361 = (state_16416[(11)]);
var inst_16366 = (inst_16361 < inst_16360);
var inst_16367 = inst_16366;
var state_16416__$1 = state_16416;
if(cljs.core.truth_(inst_16367)){
var statearr_16497_17662 = state_16416__$1;
(statearr_16497_17662[(1)] = (10));

} else {
var statearr_16498_17663 = state_16416__$1;
(statearr_16498_17663[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____0 = (function (){
var statearr_16503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16503[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__);

(statearr_16503[(1)] = (1));

return statearr_16503;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____1 = (function (state_16416){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16416);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16504){var ex__13422__auto__ = e16504;
var statearr_16505_17664 = state_16416;
(statearr_16505_17664[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16416[(4)]))){
var statearr_16506_17665 = state_16416;
(statearr_16506_17665[(1)] = cljs.core.first((state_16416[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17666 = state_16416;
state_16416 = G__17666;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__ = function(state_16416){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____1.call(this,state_16416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16515 = f__13738__auto__();
(statearr_16515[(6)] = c__13737__auto__);

return statearr_16515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));

return c__13737__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16517 = arguments.length;
switch (G__16517) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16528 = arguments.length;
switch (G__16528) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16540 = arguments.length;
switch (G__16540) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17670 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16569){
var state_val_16570 = (state_16569[(1)]);
if((state_val_16570 === (7))){
var inst_16564 = (state_16569[(2)]);
var state_16569__$1 = state_16569;
var statearr_16572_17671 = state_16569__$1;
(statearr_16572_17671[(2)] = inst_16564);

(statearr_16572_17671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (1))){
var inst_16545 = null;
var state_16569__$1 = (function (){var statearr_16577 = state_16569;
(statearr_16577[(7)] = inst_16545);

return statearr_16577;
})();
var statearr_16578_17673 = state_16569__$1;
(statearr_16578_17673[(2)] = null);

(statearr_16578_17673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (4))){
var inst_16548 = (state_16569[(8)]);
var inst_16548__$1 = (state_16569[(2)]);
var inst_16549 = (inst_16548__$1 == null);
var inst_16550 = cljs.core.not(inst_16549);
var state_16569__$1 = (function (){var statearr_16583 = state_16569;
(statearr_16583[(8)] = inst_16548__$1);

return statearr_16583;
})();
if(inst_16550){
var statearr_16584_17674 = state_16569__$1;
(statearr_16584_17674[(1)] = (5));

} else {
var statearr_16585_17675 = state_16569__$1;
(statearr_16585_17675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (6))){
var state_16569__$1 = state_16569;
var statearr_16587_17676 = state_16569__$1;
(statearr_16587_17676[(2)] = null);

(statearr_16587_17676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (3))){
var inst_16566 = (state_16569[(2)]);
var inst_16567 = cljs.core.async.close_BANG_(out);
var state_16569__$1 = (function (){var statearr_16591 = state_16569;
(statearr_16591[(9)] = inst_16566);

return statearr_16591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16569__$1,inst_16567);
} else {
if((state_val_16570 === (2))){
var state_16569__$1 = state_16569;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16569__$1,(4),ch);
} else {
if((state_val_16570 === (11))){
var inst_16548 = (state_16569[(8)]);
var inst_16558 = (state_16569[(2)]);
var inst_16545 = inst_16548;
var state_16569__$1 = (function (){var statearr_16593 = state_16569;
(statearr_16593[(10)] = inst_16558);

(statearr_16593[(7)] = inst_16545);

return statearr_16593;
})();
var statearr_16594_17677 = state_16569__$1;
(statearr_16594_17677[(2)] = null);

(statearr_16594_17677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (9))){
var inst_16548 = (state_16569[(8)]);
var state_16569__$1 = state_16569;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16569__$1,(11),out,inst_16548);
} else {
if((state_val_16570 === (5))){
var inst_16548 = (state_16569[(8)]);
var inst_16545 = (state_16569[(7)]);
var inst_16553 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16548,inst_16545);
var state_16569__$1 = state_16569;
if(inst_16553){
var statearr_16600_17678 = state_16569__$1;
(statearr_16600_17678[(1)] = (8));

} else {
var statearr_16601_17679 = state_16569__$1;
(statearr_16601_17679[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (10))){
var inst_16561 = (state_16569[(2)]);
var state_16569__$1 = state_16569;
var statearr_16602_17680 = state_16569__$1;
(statearr_16602_17680[(2)] = inst_16561);

(statearr_16602_17680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16570 === (8))){
var inst_16545 = (state_16569[(7)]);
var tmp16598 = inst_16545;
var inst_16545__$1 = tmp16598;
var state_16569__$1 = (function (){var statearr_16603 = state_16569;
(statearr_16603[(7)] = inst_16545__$1);

return statearr_16603;
})();
var statearr_16604_17681 = state_16569__$1;
(statearr_16604_17681[(2)] = null);

(statearr_16604_17681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_16609 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16609[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_16609[(1)] = (1));

return statearr_16609;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_16569){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16569);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16610){var ex__13422__auto__ = e16610;
var statearr_16611_17682 = state_16569;
(statearr_16611_17682[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16569[(4)]))){
var statearr_16612_17683 = state_16569;
(statearr_16612_17683[(1)] = cljs.core.first((state_16569[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17684 = state_16569;
state_16569 = G__17684;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_16569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_16569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16614 = f__13738__auto__();
(statearr_16614[(6)] = c__13737__auto___17670);

return statearr_16614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16621 = arguments.length;
switch (G__16621) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17686 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16673){
var state_val_16674 = (state_16673[(1)]);
if((state_val_16674 === (7))){
var inst_16669 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16679_17689 = state_16673__$1;
(statearr_16679_17689[(2)] = inst_16669);

(statearr_16679_17689[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (1))){
var inst_16629 = (new Array(n));
var inst_16630 = inst_16629;
var inst_16631 = (0);
var state_16673__$1 = (function (){var statearr_16680 = state_16673;
(statearr_16680[(7)] = inst_16631);

(statearr_16680[(8)] = inst_16630);

return statearr_16680;
})();
var statearr_16681_17692 = state_16673__$1;
(statearr_16681_17692[(2)] = null);

(statearr_16681_17692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (4))){
var inst_16634 = (state_16673[(9)]);
var inst_16634__$1 = (state_16673[(2)]);
var inst_16635 = (inst_16634__$1 == null);
var inst_16636 = cljs.core.not(inst_16635);
var state_16673__$1 = (function (){var statearr_16682 = state_16673;
(statearr_16682[(9)] = inst_16634__$1);

return statearr_16682;
})();
if(inst_16636){
var statearr_16683_17694 = state_16673__$1;
(statearr_16683_17694[(1)] = (5));

} else {
var statearr_16684_17695 = state_16673__$1;
(statearr_16684_17695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (15))){
var inst_16663 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16688_17696 = state_16673__$1;
(statearr_16688_17696[(2)] = inst_16663);

(statearr_16688_17696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (13))){
var state_16673__$1 = state_16673;
var statearr_16690_17697 = state_16673__$1;
(statearr_16690_17697[(2)] = null);

(statearr_16690_17697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (6))){
var inst_16631 = (state_16673[(7)]);
var inst_16659 = (inst_16631 > (0));
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16659)){
var statearr_16691_17698 = state_16673__$1;
(statearr_16691_17698[(1)] = (12));

} else {
var statearr_16692_17699 = state_16673__$1;
(statearr_16692_17699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (3))){
var inst_16671 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16673__$1,inst_16671);
} else {
if((state_val_16674 === (12))){
var inst_16630 = (state_16673[(8)]);
var inst_16661 = cljs.core.vec(inst_16630);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(15),out,inst_16661);
} else {
if((state_val_16674 === (2))){
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16673__$1,(4),ch);
} else {
if((state_val_16674 === (11))){
var inst_16652 = (state_16673[(2)]);
var inst_16653 = (new Array(n));
var inst_16630 = inst_16653;
var inst_16631 = (0);
var state_16673__$1 = (function (){var statearr_16694 = state_16673;
(statearr_16694[(10)] = inst_16652);

(statearr_16694[(7)] = inst_16631);

(statearr_16694[(8)] = inst_16630);

return statearr_16694;
})();
var statearr_16695_17700 = state_16673__$1;
(statearr_16695_17700[(2)] = null);

(statearr_16695_17700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (9))){
var inst_16630 = (state_16673[(8)]);
var inst_16650 = cljs.core.vec(inst_16630);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(11),out,inst_16650);
} else {
if((state_val_16674 === (5))){
var inst_16634 = (state_16673[(9)]);
var inst_16631 = (state_16673[(7)]);
var inst_16645 = (state_16673[(11)]);
var inst_16630 = (state_16673[(8)]);
var inst_16641 = (inst_16630[inst_16631] = inst_16634);
var inst_16645__$1 = (inst_16631 + (1));
var inst_16646 = (inst_16645__$1 < n);
var state_16673__$1 = (function (){var statearr_16696 = state_16673;
(statearr_16696[(12)] = inst_16641);

(statearr_16696[(11)] = inst_16645__$1);

return statearr_16696;
})();
if(cljs.core.truth_(inst_16646)){
var statearr_16697_17703 = state_16673__$1;
(statearr_16697_17703[(1)] = (8));

} else {
var statearr_16698_17704 = state_16673__$1;
(statearr_16698_17704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (14))){
var inst_16666 = (state_16673[(2)]);
var inst_16667 = cljs.core.async.close_BANG_(out);
var state_16673__$1 = (function (){var statearr_16707 = state_16673;
(statearr_16707[(13)] = inst_16666);

return statearr_16707;
})();
var statearr_16709_17706 = state_16673__$1;
(statearr_16709_17706[(2)] = inst_16667);

(statearr_16709_17706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (10))){
var inst_16656 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16710_17707 = state_16673__$1;
(statearr_16710_17707[(2)] = inst_16656);

(statearr_16710_17707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (8))){
var inst_16645 = (state_16673[(11)]);
var inst_16630 = (state_16673[(8)]);
var tmp16700 = inst_16630;
var inst_16630__$1 = tmp16700;
var inst_16631 = inst_16645;
var state_16673__$1 = (function (){var statearr_16711 = state_16673;
(statearr_16711[(7)] = inst_16631);

(statearr_16711[(8)] = inst_16630__$1);

return statearr_16711;
})();
var statearr_16712_17709 = state_16673__$1;
(statearr_16712_17709[(2)] = null);

(statearr_16712_17709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_16717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16717[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_16717[(1)] = (1));

return statearr_16717;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_16673){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16673);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16718){var ex__13422__auto__ = e16718;
var statearr_16722_17714 = state_16673;
(statearr_16722_17714[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16673[(4)]))){
var statearr_16723_17716 = state_16673;
(statearr_16723_17716[(1)] = cljs.core.first((state_16673[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17717 = state_16673;
state_16673 = G__17717;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_16673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_16673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16729 = f__13738__auto__();
(statearr_16729[(6)] = c__13737__auto___17686);

return statearr_16729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16735 = arguments.length;
switch (G__16735) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__13737__auto___17720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__13738__auto__ = (function (){var switch__13418__auto__ = (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var inst_16776 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16786_17722 = state_16784__$1;
(statearr_16786_17722[(2)] = inst_16776);

(statearr_16786_17722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (1))){
var inst_16736 = [];
var inst_16737 = inst_16736;
var inst_16738 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16784__$1 = (function (){var statearr_16788 = state_16784;
(statearr_16788[(7)] = inst_16737);

(statearr_16788[(8)] = inst_16738);

return statearr_16788;
})();
var statearr_16789_17723 = state_16784__$1;
(statearr_16789_17723[(2)] = null);

(statearr_16789_17723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (4))){
var inst_16741 = (state_16784[(9)]);
var inst_16741__$1 = (state_16784[(2)]);
var inst_16742 = (inst_16741__$1 == null);
var inst_16743 = cljs.core.not(inst_16742);
var state_16784__$1 = (function (){var statearr_16790 = state_16784;
(statearr_16790[(9)] = inst_16741__$1);

return statearr_16790;
})();
if(inst_16743){
var statearr_16791_17724 = state_16784__$1;
(statearr_16791_17724[(1)] = (5));

} else {
var statearr_16792_17725 = state_16784__$1;
(statearr_16792_17725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (15))){
var inst_16737 = (state_16784[(7)]);
var inst_16768 = cljs.core.vec(inst_16737);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16784__$1,(18),out,inst_16768);
} else {
if((state_val_16785 === (13))){
var inst_16763 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16793_17726 = state_16784__$1;
(statearr_16793_17726[(2)] = inst_16763);

(statearr_16793_17726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (6))){
var inst_16737 = (state_16784[(7)]);
var inst_16765 = inst_16737.length;
var inst_16766 = (inst_16765 > (0));
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16766)){
var statearr_16797_17728 = state_16784__$1;
(statearr_16797_17728[(1)] = (15));

} else {
var statearr_16798_17730 = state_16784__$1;
(statearr_16798_17730[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (17))){
var inst_16773 = (state_16784[(2)]);
var inst_16774 = cljs.core.async.close_BANG_(out);
var state_16784__$1 = (function (){var statearr_16801 = state_16784;
(statearr_16801[(10)] = inst_16773);

return statearr_16801;
})();
var statearr_16802_17731 = state_16784__$1;
(statearr_16802_17731[(2)] = inst_16774);

(statearr_16802_17731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (3))){
var inst_16778 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16784__$1,inst_16778);
} else {
if((state_val_16785 === (12))){
var inst_16737 = (state_16784[(7)]);
var inst_16756 = cljs.core.vec(inst_16737);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16784__$1,(14),out,inst_16756);
} else {
if((state_val_16785 === (2))){
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16784__$1,(4),ch);
} else {
if((state_val_16785 === (11))){
var inst_16741 = (state_16784[(9)]);
var inst_16737 = (state_16784[(7)]);
var inst_16745 = (state_16784[(11)]);
var inst_16753 = inst_16737.push(inst_16741);
var tmp16806 = inst_16737;
var inst_16737__$1 = tmp16806;
var inst_16738 = inst_16745;
var state_16784__$1 = (function (){var statearr_16807 = state_16784;
(statearr_16807[(7)] = inst_16737__$1);

(statearr_16807[(12)] = inst_16753);

(statearr_16807[(8)] = inst_16738);

return statearr_16807;
})();
var statearr_16808_17732 = state_16784__$1;
(statearr_16808_17732[(2)] = null);

(statearr_16808_17732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (9))){
var inst_16738 = (state_16784[(8)]);
var inst_16749 = cljs.core.keyword_identical_QMARK_(inst_16738,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16784__$1 = state_16784;
var statearr_16809_17733 = state_16784__$1;
(statearr_16809_17733[(2)] = inst_16749);

(statearr_16809_17733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (5))){
var inst_16741 = (state_16784[(9)]);
var inst_16746 = (state_16784[(13)]);
var inst_16745 = (state_16784[(11)]);
var inst_16738 = (state_16784[(8)]);
var inst_16745__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16741) : f.call(null,inst_16741));
var inst_16746__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16745__$1,inst_16738);
var state_16784__$1 = (function (){var statearr_16810 = state_16784;
(statearr_16810[(13)] = inst_16746__$1);

(statearr_16810[(11)] = inst_16745__$1);

return statearr_16810;
})();
if(inst_16746__$1){
var statearr_16811_17734 = state_16784__$1;
(statearr_16811_17734[(1)] = (8));

} else {
var statearr_16812_17735 = state_16784__$1;
(statearr_16812_17735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (14))){
var inst_16741 = (state_16784[(9)]);
var inst_16745 = (state_16784[(11)]);
var inst_16758 = (state_16784[(2)]);
var inst_16759 = [];
var inst_16760 = inst_16759.push(inst_16741);
var inst_16737 = inst_16759;
var inst_16738 = inst_16745;
var state_16784__$1 = (function (){var statearr_16813 = state_16784;
(statearr_16813[(7)] = inst_16737);

(statearr_16813[(14)] = inst_16760);

(statearr_16813[(15)] = inst_16758);

(statearr_16813[(8)] = inst_16738);

return statearr_16813;
})();
var statearr_16814_17736 = state_16784__$1;
(statearr_16814_17736[(2)] = null);

(statearr_16814_17736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (16))){
var state_16784__$1 = state_16784;
var statearr_16815_17737 = state_16784__$1;
(statearr_16815_17737[(2)] = null);

(statearr_16815_17737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (10))){
var inst_16751 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16751)){
var statearr_16816_17738 = state_16784__$1;
(statearr_16816_17738[(1)] = (11));

} else {
var statearr_16817_17739 = state_16784__$1;
(statearr_16817_17739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (18))){
var inst_16770 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16818_17747 = state_16784__$1;
(statearr_16818_17747[(2)] = inst_16770);

(statearr_16818_17747[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (8))){
var inst_16746 = (state_16784[(13)]);
var state_16784__$1 = state_16784;
var statearr_16819_17748 = state_16784__$1;
(statearr_16819_17748[(2)] = inst_16746);

(statearr_16819_17748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13419__auto__ = null;
var cljs$core$async$state_machine__13419__auto____0 = (function (){
var statearr_16820 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16820[(0)] = cljs$core$async$state_machine__13419__auto__);

(statearr_16820[(1)] = (1));

return statearr_16820;
});
var cljs$core$async$state_machine__13419__auto____1 = (function (state_16784){
while(true){
var ret_value__13420__auto__ = (function (){try{while(true){
var result__13421__auto__ = switch__13418__auto__(state_16784);
if(cljs.core.keyword_identical_QMARK_(result__13421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13421__auto__;
}
break;
}
}catch (e16821){var ex__13422__auto__ = e16821;
var statearr_16822_17749 = state_16784;
(statearr_16822_17749[(2)] = ex__13422__auto__);


if(cljs.core.seq((state_16784[(4)]))){
var statearr_16823_17750 = state_16784;
(statearr_16823_17750[(1)] = cljs.core.first((state_16784[(4)])));

} else {
throw ex__13422__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17751 = state_16784;
state_16784 = G__17751;
continue;
} else {
return ret_value__13420__auto__;
}
break;
}
});
cljs$core$async$state_machine__13419__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13419__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13419__auto____0;
cljs$core$async$state_machine__13419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13419__auto____1;
return cljs$core$async$state_machine__13419__auto__;
})()
})();
var state__13739__auto__ = (function (){var statearr_16824 = f__13738__auto__();
(statearr_16824[(6)] = c__13737__auto___17720);

return statearr_16824;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__13739__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

function Ox(n, r) {
    for (var l = 0; l < r.length; l++) {
        const s = r[l];
        if (typeof s != "string" && !Array.isArray(s)) {
            for (const u in s)
                if (u !== "default" && !(u in n)) {
                    const f = Object.getOwnPropertyDescriptor(s, u);
                    f && Object.defineProperty(n, u, f.get ? f : {
                        enumerable: !0,
                        get: () => s[u]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
        value: "Module"
    }))
}
(function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload"))
        return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        s(u);
    new MutationObserver(u => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && s(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function l(u) {
        const f = {};
        return u.integrity && (f.integrity = u.integrity),
        u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
        u.crossOrigin === "use-credentials" ? f.credentials = "include" : u.crossOrigin === "anonymous" ? f.credentials = "omit" : f.credentials = "same-origin",
        f
    }
    function s(u) {
        if (u.ep)
            return;
        u.ep = !0;
        const f = l(u);
        fetch(u.href, f)
    }
}
)();
function av(n) {
    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
}
var Xc = {
    exports: {}
}
  , hl = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fp;
function _x() {
    if (Fp)
        return hl;
    Fp = 1;
    var n = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.fragment");
    function l(s, u, f) {
        var d = null;
        if (f !== void 0 && (d = "" + f),
        u.key !== void 0 && (d = "" + u.key),
        "key"in u) {
            f = {};
            for (var h in u)
                h !== "key" && (f[h] = u[h])
        } else
            f = u;
        return u = f.ref,
        {
            $$typeof: n,
            type: s,
            key: d,
            ref: u !== void 0 ? u : null,
            props: f
        }
    }
    return hl.Fragment = r,
    hl.jsx = l,
    hl.jsxs = l,
    hl
}
var Ip;
function Ax() {
    return Ip || (Ip = 1,
    Xc.exports = _x()),
    Xc.exports
}
var O = Ax()
  , hr = class {
    constructor() {
        this.listeners = new Set,
        this.subscribe = this.subscribe.bind(this)
    }
    subscribe(n) {
        return this.listeners.add(n),
        this.onSubscribe(),
        () => {
            this.listeners.delete(n),
            this.onUnsubscribe()
        }
    }
    hasListeners() {
        return this.listeners.size > 0
    }
    onSubscribe() {}
    onUnsubscribe() {}
}
  , Tx = {
    setTimeout: (n, r) => setTimeout(n, r),
    clearTimeout: n => clearTimeout(n),
    setInterval: (n, r) => setInterval(n, r),
    clearInterval: n => clearInterval(n)
}
  , Cx = class {
    #e = Tx;
    #t = !1;
    setTimeoutProvider(n) {
        this.#e = n
    }
    setTimeout(n, r) {
        return this.#e.setTimeout(n, r)
    }
    clearTimeout(n) {
        this.#e.clearTimeout(n)
    }
    setInterval(n, r) {
        return this.#e.setInterval(n, r)
    }
    clearInterval(n) {
        this.#e.clearInterval(n)
    }
}
  , or = new Cx;
function Rx(n) {
    setTimeout(n, 0)
}
var cr = typeof window > "u" || "Deno"in globalThis;
function ye() {}
function Mx(n, r) {
    return typeof n == "function" ? n(r) : n
}
function ff(n) {
    return typeof n == "number" && n >= 0 && n !== 1 / 0
}
function rv(n, r) {
    return Math.max(n + (r || 0) - Date.now(), 0)
}
function Ma(n, r) {
    return typeof n == "function" ? n(r) : n
}
function nn(n, r) {
    return typeof n == "function" ? n(r) : n
}
function $p(n, r) {
    const {type: l="all", exact: s, fetchStatus: u, predicate: f, queryKey: d, stale: h} = n;
    if (d) {
        if (s) {
            if (r.queryHash !== Hf(d, r.options))
                return !1
        } else if (!bl(r.queryKey, d))
            return !1
    }
    if (l !== "all") {
        const m = r.isActive();
        if (l === "active" && !m || l === "inactive" && m)
            return !1
    }
    return !(typeof h == "boolean" && r.isStale() !== h || u && u !== r.state.fetchStatus || f && !f(r))
}
function Wp(n, r) {
    const {exact: l, status: s, predicate: u, mutationKey: f} = n;
    if (f) {
        if (!r.options.mutationKey)
            return !1;
        if (l) {
            if (ja(r.options.mutationKey) !== ja(f))
                return !1
        } else if (!bl(r.options.mutationKey, f))
            return !1
    }
    return !(s && r.state.status !== s || u && !u(r))
}
function Hf(n, r) {
    return (r?.queryKeyHashFn || ja)(n)
}
function ja(n) {
    return JSON.stringify(n, (r, l) => df(l) ? Object.keys(l).sort().reduce( (s, u) => (s[u] = l[u],
    s), {}) : l)
}
function bl(n, r) {
    return n === r ? !0 : typeof n != typeof r ? !1 : n && r && typeof n == "object" && typeof r == "object" ? Object.keys(r).every(l => bl(n[l], r[l])) : !1
}
var jx = Object.prototype.hasOwnProperty;
function Qf(n, r) {
    if (n === r)
        return n;
    const l = ty(n) && ty(r);
    if (!l && !(df(n) && df(r)))
        return r;
    const u = (l ? n : Object.keys(n)).length
      , f = l ? r : Object.keys(r)
      , d = f.length
      , h = l ? new Array(d) : {};
    let m = 0;
    for (let y = 0; y < d; y++) {
        const b = l ? y : f[y]
          , v = n[b]
          , x = r[b];
        if (v === x) {
            h[b] = v,
            (l ? y < u : jx.call(n, b)) && m++;
            continue
        }
        if (v === null || x === null || typeof v != "object" || typeof x != "object") {
            h[b] = x;
            continue
        }
        const _ = Qf(v, x);
        h[b] = _,
        _ === v && m++
    }
    return u === d && m === u ? n : h
}
function xl(n, r) {
    if (!r || Object.keys(n).length !== Object.keys(r).length)
        return !1;
    for (const l in n)
        if (n[l] !== r[l])
            return !1;
    return !0
}
function ty(n) {
    return Array.isArray(n) && n.length === Object.keys(n).length
}
function df(n) {
    if (!ey(n))
        return !1;
    const r = n.constructor;
    if (r === void 0)
        return !0;
    const l = r.prototype;
    return !(!ey(l) || !l.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype)
}
function ey(n) {
    return Object.prototype.toString.call(n) === "[object Object]"
}
function Dx(n) {
    return new Promise(r => {
        or.setTimeout(r, n)
    }
    )
}
function hf(n, r, l) {
    return typeof l.structuralSharing == "function" ? l.structuralSharing(n, r) : l.structuralSharing !== !1 ? Qf(n, r) : r
}
function Nx(n, r, l=0) {
    const s = [...n, r];
    return l && s.length > l ? s.slice(1) : s
}
function zx(n, r, l=0) {
    const s = [r, ...n];
    return l && s.length > l ? s.slice(0, -1) : s
}
var Ye = Symbol();
function iv(n, r) {
    return !n.queryFn && r?.initialPromise ? () => r.initialPromise : !n.queryFn || n.queryFn === Ye ? () => Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn
}
function lv(n, r) {
    return typeof n == "function" ? n(...r) : !!n
}
var Ux = class extends hr {
    #e;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!cr && window.addEventListener) {
                const r = () => n();
                return window.addEventListener("visibilitychange", r, !1),
                () => {
                    window.removeEventListener("visibilitychange", r)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#t?.(),
        this.#t = n(r => {
            typeof r == "boolean" ? this.setFocused(r) : this.onFocus()
        }
        )
    }
    setFocused(n) {
        this.#e !== n && (this.#e = n,
        this.onFocus())
    }
    onFocus() {
        const n = this.isFocused();
        this.listeners.forEach(r => {
            r(n)
        }
        )
    }
    isFocused() {
        return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden"
    }
}
  , Bf = new Ux;
function mf() {
    let n, r;
    const l = new Promise( (u, f) => {
        n = u,
        r = f
    }
    );
    l.status = "pending",
    l.catch( () => {}
    );
    function s(u) {
        Object.assign(l, u),
        delete l.resolve,
        delete l.reject
    }
    return l.resolve = u => {
        s({
            status: "fulfilled",
            value: u
        }),
        n(u)
    }
    ,
    l.reject = u => {
        s({
            status: "rejected",
            reason: u
        }),
        r(u)
    }
    ,
    l
}
var qx = Rx;
function Lx() {
    let n = []
      , r = 0
      , l = h => {
        h()
    }
      , s = h => {
        h()
    }
      , u = qx;
    const f = h => {
        r ? n.push(h) : u( () => {
            l(h)
        }
        )
    }
      , d = () => {
        const h = n;
        n = [],
        h.length && u( () => {
            s( () => {
                h.forEach(m => {
                    l(m)
                }
                )
            }
            )
        }
        )
    }
    ;
    return {
        batch: h => {
            let m;
            r++;
            try {
                m = h()
            } finally {
                r--,
                r || d()
            }
            return m
        }
        ,
        batchCalls: h => (...m) => {
            f( () => {
                h(...m)
            }
            )
        }
        ,
        schedule: f,
        setNotifyFunction: h => {
            l = h
        }
        ,
        setBatchNotifyFunction: h => {
            s = h
        }
        ,
        setScheduler: h => {
            u = h
        }
    }
}
var Kt = Lx()
  , Hx = class extends hr {
    #e = !0;
    #t;
    #n;
    constructor() {
        super(),
        this.#n = n => {
            if (!cr && window.addEventListener) {
                const r = () => n(!0)
                  , l = () => n(!1);
                return window.addEventListener("online", r, !1),
                window.addEventListener("offline", l, !1),
                () => {
                    window.removeEventListener("online", r),
                    window.removeEventListener("offline", l)
                }
            }
        }
    }
    onSubscribe() {
        this.#t || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
        this.hasListeners() || (this.#t?.(),
        this.#t = void 0)
    }
    setEventListener(n) {
        this.#n = n,
        this.#t?.(),
        this.#t = n(this.setOnline.bind(this))
    }
    setOnline(n) {
        this.#e !== n && (this.#e = n,
        this.listeners.forEach(l => {
            l(n)
        }
        ))
    }
    isOnline() {
        return this.#e
    }
}
  , so = new Hx;
function Qx(n) {
    return Math.min(1e3 * 2 ** n, 3e4)
}
function sv(n) {
    return (n ?? "online") === "online" ? so.isOnline() : !0
}
var pf = class extends Error {
    constructor(n) {
        super("CancelledError"),
        this.revert = n?.revert,
        this.silent = n?.silent
    }
}
;
function ov(n) {
    let r = !1, l = 0, s;
    const u = mf()
      , f = () => u.status !== "pending"
      , d = S => {
        if (!f()) {
            const U = new pf(S);
            x(U),
            n.onCancel?.(U)
        }
    }
      , h = () => {
        r = !0
    }
      , m = () => {
        r = !1
    }
      , y = () => Bf.isFocused() && (n.networkMode === "always" || so.isOnline()) && n.canRun()
      , b = () => sv(n.networkMode) && n.canRun()
      , v = S => {
        f() || (s?.(),
        u.resolve(S))
    }
      , x = S => {
        f() || (s?.(),
        u.reject(S))
    }
      , _ = () => new Promise(S => {
        s = U => {
            (f() || y()) && S(U)
        }
        ,
        n.onPause?.()
    }
    ).then( () => {
        s = void 0,
        f() || n.onContinue?.()
    }
    )
      , T = () => {
        if (f())
            return;
        let S;
        const U = l === 0 ? n.initialPromise : void 0;
        try {
            S = U ?? n.fn()
        } catch (B) {
            S = Promise.reject(B)
        }
        Promise.resolve(S).then(v).catch(B => {
            if (f())
                return;
            const J = n.retry ?? (cr ? 0 : 3)
              , I = n.retryDelay ?? Qx
              , nt = typeof I == "function" ? I(l, B) : I
              , X = J === !0 || typeof J == "number" && l < J || typeof J == "function" && J(l, B);
            if (r || !X) {
                x(B);
                return
            }
            l++,
            n.onFail?.(l, B),
            Dx(nt).then( () => y() ? void 0 : _()).then( () => {
                r ? x(B) : T()
            }
            )
        }
        )
    }
    ;
    return {
        promise: u,
        status: () => u.status,
        cancel: d,
        continue: () => (s?.(),
        u),
        cancelRetry: h,
        continueRetry: m,
        canStart: b,
        start: () => (b() ? T() : _().then(T),
        u)
    }
}
var uv = class {
    #e;
    destroy() {
        this.clearGcTimeout()
    }
    scheduleGc() {
        this.clearGcTimeout(),
        ff(this.gcTime) && (this.#e = or.setTimeout( () => {
            this.optionalRemove()
        }
        , this.gcTime))
    }
    updateGcTime(n) {
        this.gcTime = Math.max(this.gcTime || 0, n ?? (cr ? 1 / 0 : 300 * 1e3))
    }
    clearGcTimeout() {
        this.#e && (or.clearTimeout(this.#e),
        this.#e = void 0)
    }
}
  , Bx = class extends uv {
    #e;
    #t;
    #n;
    #r;
    #a;
    #i;
    #s;
    constructor(n) {
        super(),
        this.#s = !1,
        this.#i = n.defaultOptions,
        this.setOptions(n.options),
        this.observers = [],
        this.#r = n.client,
        this.#n = this.#r.getQueryCache(),
        this.queryKey = n.queryKey,
        this.queryHash = n.queryHash,
        this.#e = ny(this.options),
        this.state = n.state ?? this.#e,
        this.scheduleGc()
    }
    get meta() {
        return this.options.meta
    }
    get promise() {
        return this.#a?.promise
    }
    setOptions(n) {
        if (this.options = {
            ...this.#i,
            ...n
        },
        this.updateGcTime(this.options.gcTime),
        this.state && this.state.data === void 0) {
            const r = ny(this.options);
            r.data !== void 0 && (this.setData(r.data, {
                updatedAt: r.dataUpdatedAt,
                manual: !0
            }),
            this.#e = r)
        }
    }
    optionalRemove() {
        !this.observers.length && this.state.fetchStatus === "idle" && this.#n.remove(this)
    }
    setData(n, r) {
        const l = hf(this.state.data, n, this.options);
        return this.#l({
            data: l,
            type: "success",
            dataUpdatedAt: r?.updatedAt,
            manual: r?.manual
        }),
        l
    }
    setState(n, r) {
        this.#l({
            type: "setState",
            state: n,
            setStateOptions: r
        })
    }
    cancel(n) {
        const r = this.#a?.promise;
        return this.#a?.cancel(n),
        r ? r.then(ye).catch(ye) : Promise.resolve()
    }
    destroy() {
        super.destroy(),
        this.cancel({
            silent: !0
        })
    }
    reset() {
        this.destroy(),
        this.setState(this.#e)
    }
    isActive() {
        return this.observers.some(n => nn(n.options.enabled, this) !== !1)
    }
    isDisabled() {
        return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === Ye || this.state.dataUpdateCount + this.state.errorUpdateCount === 0
    }
    isStatic() {
        return this.getObserversCount() > 0 ? this.observers.some(n => Ma(n.options.staleTime, this) === "static") : !1
    }
    isStale() {
        return this.getObserversCount() > 0 ? this.observers.some(n => n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
    }
    isStaleByTime(n=0) {
        return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !rv(this.state.dataUpdatedAt, n)
    }
    onFocus() {
        this.observers.find(r => r.shouldFetchOnWindowFocus())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    onOnline() {
        this.observers.find(r => r.shouldFetchOnReconnect())?.refetch({
            cancelRefetch: !1
        }),
        this.#a?.continue()
    }
    addObserver(n) {
        this.observers.includes(n) || (this.observers.push(n),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            query: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.observers.includes(n) && (this.observers = this.observers.filter(r => r !== n),
        this.observers.length || (this.#a && (this.#s ? this.#a.cancel({
            revert: !0
        }) : this.#a.cancelRetry()),
        this.scheduleGc()),
        this.#n.notify({
            type: "observerRemoved",
            query: this,
            observer: n
        }))
    }
    getObserversCount() {
        return this.observers.length
    }
    invalidate() {
        this.state.isInvalidated || this.#l({
            type: "invalidate"
        })
    }
    async fetch(n, r) {
        if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
            if (this.state.data !== void 0 && r?.cancelRefetch)
                this.cancel({
                    silent: !0
                });
            else if (this.#a)
                return this.#a.continueRetry(),
                this.#a.promise
        }
        if (n && this.setOptions(n),
        !this.options.queryFn) {
            const h = this.observers.find(m => m.options.queryFn);
            h && this.setOptions(h.options)
        }
        const l = new AbortController
          , s = h => {
            Object.defineProperty(h, "signal", {
                enumerable: !0,
                get: () => (this.#s = !0,
                l.signal)
            })
        }
          , u = () => {
            const h = iv(this.options, r)
              , y = ( () => {
                const b = {
                    client: this.#r,
                    queryKey: this.queryKey,
                    meta: this.meta
                };
                return s(b),
                b
            }
            )();
            return this.#s = !1,
            this.options.persister ? this.options.persister(h, y, this) : h(y)
        }
          , d = ( () => {
            const h = {
                fetchOptions: r,
                options: this.options,
                queryKey: this.queryKey,
                client: this.#r,
                state: this.state,
                fetchFn: u
            };
            return s(h),
            h
        }
        )();
        this.options.behavior?.onFetch(d, this),
        this.#t = this.state,
        (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#l({
            type: "fetch",
            meta: d.fetchOptions?.meta
        }),
        this.#a = ov({
            initialPromise: r?.initialPromise,
            fn: d.fetchFn,
            onCancel: h => {
                h instanceof pf && h.revert && this.setState({
                    ...this.#t,
                    fetchStatus: "idle"
                }),
                l.abort()
            }
            ,
            onFail: (h, m) => {
                this.#l({
                    type: "failed",
                    failureCount: h,
                    error: m
                })
            }
            ,
            onPause: () => {
                this.#l({
                    type: "pause"
                })
            }
            ,
            onContinue: () => {
                this.#l({
                    type: "continue"
                })
            }
            ,
            retry: d.options.retry,
            retryDelay: d.options.retryDelay,
            networkMode: d.options.networkMode,
            canRun: () => !0
        });
        try {
            const h = await this.#a.start();
            if (h === void 0)
                throw new Error(`${this.queryHash} data is undefined`);
            return this.setData(h),
            this.#n.config.onSuccess?.(h, this),
            this.#n.config.onSettled?.(h, this.state.error, this),
            h
        } catch (h) {
            if (h instanceof pf) {
                if (h.silent)
                    return this.#a.promise;
                if (h.revert) {
                    if (this.state.data === void 0)
                        throw h;
                    return this.state.data
                }
            }
            throw this.#l({
                type: "error",
                error: h
            }),
            this.#n.config.onError?.(h, this),
            this.#n.config.onSettled?.(this.state.data, h, this),
            h
        } finally {
            this.scheduleGc()
        }
    }
    #l(n) {
        const r = l => {
            switch (n.type) {
            case "failed":
                return {
                    ...l,
                    fetchFailureCount: n.failureCount,
                    fetchFailureReason: n.error
                };
            case "pause":
                return {
                    ...l,
                    fetchStatus: "paused"
                };
            case "continue":
                return {
                    ...l,
                    fetchStatus: "fetching"
                };
            case "fetch":
                return {
                    ...l,
                    ...cv(l.data, this.options),
                    fetchMeta: n.meta ?? null
                };
            case "success":
                const s = {
                    ...l,
                    data: n.data,
                    dataUpdateCount: l.dataUpdateCount + 1,
                    dataUpdatedAt: n.dataUpdatedAt ?? Date.now(),
                    error: null,
                    isInvalidated: !1,
                    status: "success",
                    ...!n.manual && {
                        fetchStatus: "idle",
                        fetchFailureCount: 0,
                        fetchFailureReason: null
                    }
                };
                return this.#t = n.manual ? s : void 0,
                s;
            case "error":
                const u = n.error;
                return {
                    ...l,
                    error: u,
                    errorUpdateCount: l.errorUpdateCount + 1,
                    errorUpdatedAt: Date.now(),
                    fetchFailureCount: l.fetchFailureCount + 1,
                    fetchFailureReason: u,
                    fetchStatus: "idle",
                    status: "error"
                };
            case "invalidate":
                return {
                    ...l,
                    isInvalidated: !0
                };
            case "setState":
                return {
                    ...l,
                    ...n.state
                }
            }
        }
        ;
        this.state = r(this.state),
        Kt.batch( () => {
            this.observers.forEach(l => {
                l.onQueryUpdate()
            }
            ),
            this.#n.notify({
                query: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function cv(n, r) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: sv(r.networkMode) ? "fetching" : "paused",
        ...n === void 0 && {
            error: null,
            status: "pending"
        }
    }
}
function ny(n) {
    const r = typeof n.initialData == "function" ? n.initialData() : n.initialData
      , l = r !== void 0
      , s = l ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
    return {
        data: r,
        dataUpdateCount: 0,
        dataUpdatedAt: l ? s ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: l ? "success" : "pending",
        fetchStatus: "idle"
    }
}
var Tl = class extends hr {
    constructor(n, r) {
        super(),
        this.options = r,
        this.#e = n,
        this.#l = null,
        this.#s = mf(),
        this.bindMethods(),
        this.setOptions(r)
    }
    #e;
    #t = void 0;
    #n = void 0;
    #r = void 0;
    #a;
    #i;
    #s;
    #l;
    #h;
    #f;
    #d;
    #u;
    #c;
    #o;
    #p = new Set;
    bindMethods() {
        this.refetch = this.refetch.bind(this)
    }
    onSubscribe() {
        this.listeners.size === 1 && (this.#t.addObserver(this),
        ay(this.#t, this.options) ? this.#m() : this.updateResult(),
        this.#b())
    }
    onUnsubscribe() {
        this.hasListeners() || this.destroy()
    }
    shouldFetchOnReconnect() {
        return yf(this.#t, this.options, this.options.refetchOnReconnect)
    }
    shouldFetchOnWindowFocus() {
        return yf(this.#t, this.options, this.options.refetchOnWindowFocus)
    }
    destroy() {
        this.listeners = new Set,
        this.#x(),
        this.#S(),
        this.#t.removeObserver(this)
    }
    setOptions(n) {
        const r = this.options
          , l = this.#t;
        if (this.options = this.#e.defaultQueryOptions(n),
        this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof nn(this.options.enabled, this.#t) != "boolean")
            throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");
        this.#w(),
        this.#t.setOptions(this.options),
        r._defaulted && !xl(this.options, r) && this.#e.getQueryCache().notify({
            type: "observerOptionsUpdated",
            query: this.#t,
            observer: this
        });
        const s = this.hasListeners();
        s && ry(this.#t, l, this.options, r) && this.#m(),
        this.updateResult(),
        s && (this.#t !== l || nn(this.options.enabled, this.#t) !== nn(r.enabled, this.#t) || Ma(this.options.staleTime, this.#t) !== Ma(r.staleTime, this.#t)) && this.#y();
        const u = this.#v();
        s && (this.#t !== l || nn(this.options.enabled, this.#t) !== nn(r.enabled, this.#t) || u !== this.#o) && this.#g(u)
    }
    getOptimisticResult(n) {
        const r = this.#e.getQueryCache().build(this.#e, n)
          , l = this.createResult(r, n);
        return Px(this, l) && (this.#r = l,
        this.#i = this.options,
        this.#a = this.#t.state),
        l
    }
    getCurrentResult() {
        return this.#r
    }
    trackResult(n, r) {
        return new Proxy(n,{
            get: (l, s) => (this.trackProp(s),
            r?.(s),
            s === "promise" && !this.options.experimental_prefetchInRender && this.#s.status === "pending" && this.#s.reject(new Error("experimental_prefetchInRender feature flag is not enabled")),
            Reflect.get(l, s))
        })
    }
    trackProp(n) {
        this.#p.add(n)
    }
    getCurrentQuery() {
        return this.#t
    }
    refetch({...n}={}) {
        return this.fetch({
            ...n
        })
    }
    fetchOptimistic(n) {
        const r = this.#e.defaultQueryOptions(n)
          , l = this.#e.getQueryCache().build(this.#e, r);
        return l.fetch().then( () => this.createResult(l, r))
    }
    fetch(n) {
        return this.#m({
            ...n,
            cancelRefetch: n.cancelRefetch ?? !0
        }).then( () => (this.updateResult(),
        this.#r))
    }
    #m(n) {
        this.#w();
        let r = this.#t.fetch(this.options, n);
        return n?.throwOnError || (r = r.catch(ye)),
        r
    }
    #y() {
        this.#x();
        const n = Ma(this.options.staleTime, this.#t);
        if (cr || this.#r.isStale || !ff(n))
            return;
        const l = rv(this.#r.dataUpdatedAt, n) + 1;
        this.#u = or.setTimeout( () => {
            this.#r.isStale || this.updateResult()
        }
        , l)
    }
    #v() {
        return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.#t) : this.options.refetchInterval) ?? !1
    }
    #g(n) {
        this.#S(),
        this.#o = n,
        !(cr || nn(this.options.enabled, this.#t) === !1 || !ff(this.#o) || this.#o === 0) && (this.#c = or.setInterval( () => {
            (this.options.refetchIntervalInBackground || Bf.isFocused()) && this.#m()
        }
        , this.#o))
    }
    #b() {
        this.#y(),
        this.#g(this.#v())
    }
    #x() {
        this.#u && (or.clearTimeout(this.#u),
        this.#u = void 0)
    }
    #S() {
        this.#c && (or.clearInterval(this.#c),
        this.#c = void 0)
    }
    createResult(n, r) {
        const l = this.#t
          , s = this.options
          , u = this.#r
          , f = this.#a
          , d = this.#i
          , m = n !== l ? n.state : this.#n
          , {state: y} = n;
        let b = {
            ...y
        }, v = !1, x;
        if (r._optimisticResults) {
            const H = this.hasListeners()
              , $ = !H && ay(n, r)
              , W = H && ry(n, l, r, s);
            ($ || W) && (b = {
                ...b,
                ...cv(y.data, n.options)
            }),
            r._optimisticResults === "isRestoring" && (b.fetchStatus = "idle")
        }
        let {error: _, errorUpdatedAt: T, status: S} = b;
        x = b.data;
        let U = !1;
        if (r.placeholderData !== void 0 && x === void 0 && S === "pending") {
            let H;
            u?.isPlaceholderData && r.placeholderData === d?.placeholderData ? (H = u.data,
            U = !0) : H = typeof r.placeholderData == "function" ? r.placeholderData(this.#d?.state.data, this.#d) : r.placeholderData,
            H !== void 0 && (S = "success",
            x = hf(u?.data, H, r),
            v = !0)
        }
        if (r.select && x !== void 0 && !U)
            if (u && x === f?.data && r.select === this.#h)
                x = this.#f;
            else
                try {
                    this.#h = r.select,
                    x = r.select(x),
                    x = hf(u?.data, x, r),
                    this.#f = x,
                    this.#l = null
                } catch (H) {
                    this.#l = H
                }
        this.#l && (_ = this.#l,
        x = this.#f,
        T = Date.now(),
        S = "error");
        const B = b.fetchStatus === "fetching"
          , J = S === "pending"
          , I = S === "error"
          , nt = J && B
          , X = x !== void 0
          , M = {
            status: S,
            fetchStatus: b.fetchStatus,
            isPending: J,
            isSuccess: S === "success",
            isError: I,
            isInitialLoading: nt,
            isLoading: nt,
            data: x,
            dataUpdatedAt: b.dataUpdatedAt,
            error: _,
            errorUpdatedAt: T,
            failureCount: b.fetchFailureCount,
            failureReason: b.fetchFailureReason,
            errorUpdateCount: b.errorUpdateCount,
            isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0,
            isFetchedAfterMount: b.dataUpdateCount > m.dataUpdateCount || b.errorUpdateCount > m.errorUpdateCount,
            isFetching: B,
            isRefetching: B && !J,
            isLoadingError: I && !X,
            isPaused: b.fetchStatus === "paused",
            isPlaceholderData: v,
            isRefetchError: I && X,
            isStale: kf(n, r),
            refetch: this.refetch,
            promise: this.#s,
            isEnabled: nn(r.enabled, n) !== !1
        };
        if (this.options.experimental_prefetchInRender) {
            const H = at => {
                M.status === "error" ? at.reject(M.error) : M.data !== void 0 && at.resolve(M.data)
            }
              , $ = () => {
                const at = this.#s = M.promise = mf();
                H(at)
            }
              , W = this.#s;
            switch (W.status) {
            case "pending":
                n.queryHash === l.queryHash && H(W);
                break;
            case "fulfilled":
                (M.status === "error" || M.data !== W.value) && $();
                break;
            case "rejected":
                (M.status !== "error" || M.error !== W.reason) && $();
                break
            }
        }
        return M
    }
    updateResult() {
        const n = this.#r
          , r = this.createResult(this.#t, this.options);
        if (this.#a = this.#t.state,
        this.#i = this.options,
        this.#a.data !== void 0 && (this.#d = this.#t),
        xl(r, n))
            return;
        this.#r = r;
        const l = () => {
            if (!n)
                return !0;
            const {notifyOnChangeProps: s} = this.options
              , u = typeof s == "function" ? s() : s;
            if (u === "all" || !u && !this.#p.size)
                return !0;
            const f = new Set(u ?? this.#p);
            return this.options.throwOnError && f.add("error"),
            Object.keys(this.#r).some(d => {
                const h = d;
                return this.#r[h] !== n[h] && f.has(h)
            }
            )
        }
        ;
        this.#E({
            listeners: l()
        })
    }
    #w() {
        const n = this.#e.getQueryCache().build(this.#e, this.options);
        if (n === this.#t)
            return;
        const r = this.#t;
        this.#t = n,
        this.#n = n.state,
        this.hasListeners() && (r?.removeObserver(this),
        n.addObserver(this))
    }
    onQueryUpdate() {
        this.updateResult(),
        this.hasListeners() && this.#b()
    }
    #E(n) {
        Kt.batch( () => {
            n.listeners && this.listeners.forEach(r => {
                r(this.#r)
            }
            ),
            this.#e.getQueryCache().notify({
                query: this.#t,
                type: "observerResultsUpdated"
            })
        }
        )
    }
}
;
function kx(n, r) {
    return nn(r.enabled, n) !== !1 && n.state.data === void 0 && !(n.state.status === "error" && r.retryOnMount === !1)
}
function ay(n, r) {
    return kx(n, r) || n.state.data !== void 0 && yf(n, r, r.refetchOnMount)
}
function yf(n, r, l) {
    if (nn(r.enabled, n) !== !1 && Ma(r.staleTime, n) !== "static") {
        const s = typeof l == "function" ? l(n) : l;
        return s === "always" || s !== !1 && kf(n, r)
    }
    return !1
}
function ry(n, r, l, s) {
    return (n !== r || nn(s.enabled, n) === !1) && (!l.suspense || n.state.status !== "error") && kf(n, l)
}
function kf(n, r) {
    return nn(r.enabled, n) !== !1 && n.isStaleByTime(Ma(r.staleTime, n))
}
function Px(n, r) {
    return !xl(n.getCurrentResult(), r)
}
function oo(n) {
    return {
        onFetch: (r, l) => {
            const s = r.options
              , u = r.fetchOptions?.meta?.fetchMore?.direction
              , f = r.state.data?.pages || []
              , d = r.state.data?.pageParams || [];
            let h = {
                pages: [],
                pageParams: []
            }
              , m = 0;
            const y = async () => {
                let b = !1;
                const v = T => {
                    Object.defineProperty(T, "signal", {
                        enumerable: !0,
                        get: () => (r.signal.aborted ? b = !0 : r.signal.addEventListener("abort", () => {
                            b = !0
                        }
                        ),
                        r.signal)
                    })
                }
                  , x = iv(r.options, r.fetchOptions)
                  , _ = async (T, S, U) => {
                    if (b)
                        return Promise.reject();
                    if (S == null && T.pages.length)
                        return Promise.resolve(T);
                    const J = ( () => {
                        const Z = {
                            client: r.client,
                            queryKey: r.queryKey,
                            pageParam: S,
                            direction: U ? "backward" : "forward",
                            meta: r.options.meta
                        };
                        return v(Z),
                        Z
                    }
                    )()
                      , I = await x(J)
                      , {maxPages: nt} = r.options
                      , X = U ? zx : Nx;
                    return {
                        pages: X(T.pages, I, nt),
                        pageParams: X(T.pageParams, S, nt)
                    }
                }
                ;
                if (u && f.length) {
                    const T = u === "backward"
                      , S = T ? fv : vf
                      , U = {
                        pages: f,
                        pageParams: d
                    }
                      , B = S(s, U);
                    h = await _(U, B, T)
                } else {
                    const T = n ?? f.length;
                    do {
                        const S = m === 0 ? d[0] ?? s.initialPageParam : vf(s, h);
                        if (m > 0 && S == null)
                            break;
                        h = await _(h, S),
                        m++
                    } while (m < T)
                }
                return h
            }
            ;
            r.options.persister ? r.fetchFn = () => r.options.persister?.(y, {
                client: r.client,
                queryKey: r.queryKey,
                meta: r.options.meta,
                signal: r.signal
            }, l) : r.fetchFn = y
        }
    }
}
function vf(n, {pages: r, pageParams: l}) {
    const s = r.length - 1;
    return r.length > 0 ? n.getNextPageParam(r[s], r, l[s], l) : void 0
}
function fv(n, {pages: r, pageParams: l}) {
    return r.length > 0 ? n.getPreviousPageParam?.(r[0], r, l[0], l) : void 0
}
function Yx(n, r) {
    return r ? vf(n, r) != null : !1
}
function Gx(n, r) {
    return !r || !n.getPreviousPageParam ? !1 : fv(n, r) != null
}
var dv = class extends Tl {
    constructor(n, r) {
        super(n, r)
    }
    bindMethods() {
        super.bindMethods(),
        this.fetchNextPage = this.fetchNextPage.bind(this),
        this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
    }
    setOptions(n) {
        super.setOptions({
            ...n,
            behavior: oo()
        })
    }
    getOptimisticResult(n) {
        return n.behavior = oo(),
        super.getOptimisticResult(n)
    }
    fetchNextPage(n) {
        return this.fetch({
            ...n,
            meta: {
                fetchMore: {
                    direction: "forward"
                }
            }
        })
    }
    fetchPreviousPage(n) {
        return this.fetch({
            ...n,
            meta: {
                fetchMore: {
                    direction: "backward"
                }
            }
        })
    }
    createResult(n, r) {
        const {state: l} = n
          , s = super.createResult(n, r)
          , {isFetching: u, isRefetching: f, isError: d, isRefetchError: h} = s
          , m = l.fetchMeta?.fetchMore?.direction
          , y = d && m === "forward"
          , b = u && m === "forward"
          , v = d && m === "backward"
          , x = u && m === "backward";
        return {
            ...s,
            fetchNextPage: this.fetchNextPage,
            fetchPreviousPage: this.fetchPreviousPage,
            hasNextPage: Yx(r, l.data),
            hasPreviousPage: Gx(r, l.data),
            isFetchNextPageError: y,
            isFetchingNextPage: b,
            isFetchPreviousPageError: v,
            isFetchingPreviousPage: x,
            isRefetchError: h && !y && !v,
            isRefetching: f && !b && !x
        }
    }
}
  , Vx = class extends uv {
    #e;
    #t;
    #n;
    #r;
    constructor(n) {
        super(),
        this.#e = n.client,
        this.mutationId = n.mutationId,
        this.#n = n.mutationCache,
        this.#t = [],
        this.state = n.state || hv(),
        this.setOptions(n.options),
        this.scheduleGc()
    }
    setOptions(n) {
        this.options = n,
        this.updateGcTime(this.options.gcTime)
    }
    get meta() {
        return this.options.meta
    }
    addObserver(n) {
        this.#t.includes(n) || (this.#t.push(n),
        this.clearGcTimeout(),
        this.#n.notify({
            type: "observerAdded",
            mutation: this,
            observer: n
        }))
    }
    removeObserver(n) {
        this.#t = this.#t.filter(r => r !== n),
        this.scheduleGc(),
        this.#n.notify({
            type: "observerRemoved",
            mutation: this,
            observer: n
        })
    }
    optionalRemove() {
        this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
    }
    continue() {
        return this.#r?.continue() ?? this.execute(this.state.variables)
    }
    async execute(n) {
        const r = () => {
            this.#a({
                type: "continue"
            })
        }
          , l = {
            client: this.#e,
            meta: this.options.meta,
            mutationKey: this.options.mutationKey
        };
        this.#r = ov({
            fn: () => this.options.mutationFn ? this.options.mutationFn(n, l) : Promise.reject(new Error("No mutationFn found")),
            onFail: (f, d) => {
                this.#a({
                    type: "failed",
                    failureCount: f,
                    error: d
                })
            }
            ,
            onPause: () => {
                this.#a({
                    type: "pause"
                })
            }
            ,
            onContinue: r,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => this.#n.canRun(this)
        });
        const s = this.state.status === "pending"
          , u = !this.#r.canStart();
        try {
            if (s)
                r();
            else {
                this.#a({
                    type: "pending",
                    variables: n,
                    isPaused: u
                }),
                await this.#n.config.onMutate?.(n, this, l);
                const d = await this.options.onMutate?.(n, l);
                d !== this.state.context && this.#a({
                    type: "pending",
                    context: d,
                    variables: n,
                    isPaused: u
                })
            }
            const f = await this.#r.start();
            return await this.#n.config.onSuccess?.(f, n, this.state.context, this, l),
            await this.options.onSuccess?.(f, n, this.state.context, l),
            await this.#n.config.onSettled?.(f, null, this.state.variables, this.state.context, this, l),
            await this.options.onSettled?.(f, null, n, this.state.context, l),
            this.#a({
                type: "success",
                data: f
            }),
            f
        } catch (f) {
            try {
                throw await this.#n.config.onError?.(f, n, this.state.context, this, l),
                await this.options.onError?.(f, n, this.state.context, l),
                await this.#n.config.onSettled?.(void 0, f, this.state.variables, this.state.context, this, l),
                await this.options.onSettled?.(void 0, f, n, this.state.context, l),
                f
            } finally {
                this.#a({
                    type: "error",
                    error: f
                })
            }
        } finally {
            this.#n.runNext(this)
        }
    }
    #a(n) {
        const r = l => {
            switch (n.type) {
            case "failed":
                return {
                    ...l,
                    failureCount: n.failureCount,
                    failureReason: n.error
                };
            case "pause":
                return {
                    ...l,
                    isPaused: !0
                };
            case "continue":
                return {
                    ...l,
                    isPaused: !1
                };
            case "pending":
                return {
                    ...l,
                    context: n.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: n.isPaused,
                    status: "pending",
                    variables: n.variables,
                    submittedAt: Date.now()
                };
            case "success":
                return {
                    ...l,
                    data: n.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1
                };
            case "error":
                return {
                    ...l,
                    data: void 0,
                    error: n.error,
                    failureCount: l.failureCount + 1,
                    failureReason: n.error,
                    isPaused: !1,
                    status: "error"
                }
            }
        }
        ;
        this.state = r(this.state),
        Kt.batch( () => {
            this.#t.forEach(l => {
                l.onMutationUpdate(n)
            }
            ),
            this.#n.notify({
                mutation: this,
                type: "updated",
                action: n
            })
        }
        )
    }
}
;
function hv() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    }
}
var Xx = class extends hr {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Set,
        this.#t = new Map,
        this.#n = 0
    }
    #e;
    #t;
    #n;
    build(n, r, l) {
        const s = new Vx({
            client: n,
            mutationCache: this,
            mutationId: ++this.#n,
            options: n.defaultMutationOptions(r),
            state: l
        });
        return this.add(s),
        s
    }
    add(n) {
        this.#e.add(n);
        const r = Ks(n);
        if (typeof r == "string") {
            const l = this.#t.get(r);
            l ? l.push(n) : this.#t.set(r, [n])
        }
        this.notify({
            type: "added",
            mutation: n
        })
    }
    remove(n) {
        if (this.#e.delete(n)) {
            const r = Ks(n);
            if (typeof r == "string") {
                const l = this.#t.get(r);
                if (l)
                    if (l.length > 1) {
                        const s = l.indexOf(n);
                        s !== -1 && l.splice(s, 1)
                    } else
                        l[0] === n && this.#t.delete(r)
            }
        }
        this.notify({
            type: "removed",
            mutation: n
        })
    }
    canRun(n) {
        const r = Ks(n);
        if (typeof r == "string") {
            const s = this.#t.get(r)?.find(u => u.state.status === "pending");
            return !s || s === n
        } else
            return !0
    }
    runNext(n) {
        const r = Ks(n);
        return typeof r == "string" ? this.#t.get(r)?.find(s => s !== n && s.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
    }
    clear() {
        Kt.batch( () => {
            this.#e.forEach(n => {
                this.notify({
                    type: "removed",
                    mutation: n
                })
            }
            ),
            this.#e.clear(),
            this.#t.clear()
        }
        )
    }
    getAll() {
        return Array.from(this.#e)
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(l => Wp(r, l))
    }
    findAll(n={}) {
        return this.getAll().filter(r => Wp(n, r))
    }
    notify(n) {
        Kt.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    resumePausedMutations() {
        const n = this.getAll().filter(r => r.state.isPaused);
        return Kt.batch( () => Promise.all(n.map(r => r.continue().catch(ye))))
    }
}
;
function Ks(n) {
    return n.options.scope?.id
}
var Kx = class extends hr {
    #e;
    #t = void 0;
    #n;
    #r;
    constructor(r, l) {
        super(),
        this.#e = r,
        this.setOptions(l),
        this.bindMethods(),
        this.#a()
    }
    bindMethods() {
        this.mutate = this.mutate.bind(this),
        this.reset = this.reset.bind(this)
    }
    setOptions(r) {
        const l = this.options;
        this.options = this.#e.defaultMutationOptions(r),
        xl(this.options, l) || this.#e.getMutationCache().notify({
            type: "observerOptionsUpdated",
            mutation: this.#n,
            observer: this
        }),
        l?.mutationKey && this.options.mutationKey && ja(l.mutationKey) !== ja(this.options.mutationKey) ? this.reset() : this.#n?.state.status === "pending" && this.#n.setOptions(this.options)
    }
    onUnsubscribe() {
        this.hasListeners() || this.#n?.removeObserver(this)
    }
    onMutationUpdate(r) {
        this.#a(),
        this.#i(r)
    }
    getCurrentResult() {
        return this.#t
    }
    reset() {
        this.#n?.removeObserver(this),
        this.#n = void 0,
        this.#a(),
        this.#i()
    }
    mutate(r, l) {
        return this.#r = l,
        this.#n?.removeObserver(this),
        this.#n = this.#e.getMutationCache().build(this.#e, this.options),
        this.#n.addObserver(this),
        this.#n.execute(r)
    }
    #a() {
        const r = this.#n?.state ?? hv();
        this.#t = {
            ...r,
            isPending: r.status === "pending",
            isSuccess: r.status === "success",
            isError: r.status === "error",
            isIdle: r.status === "idle",
            mutate: this.mutate,
            reset: this.reset
        }
    }
    #i(r) {
        Kt.batch( () => {
            if (this.#r && this.hasListeners()) {
                const l = this.#t.variables
                  , s = this.#t.context
                  , u = {
                    client: this.#e,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey
                };
                r?.type === "success" ? (this.#r.onSuccess?.(r.data, l, s, u),
                this.#r.onSettled?.(r.data, null, l, s, u)) : r?.type === "error" && (this.#r.onError?.(r.error, l, s, u),
                this.#r.onSettled?.(void 0, r.error, l, s, u))
            }
            this.listeners.forEach(l => {
                l(this.#t)
            }
            )
        }
        )
    }
}
;
function iy(n, r) {
    const l = new Set(r);
    return n.filter(s => !l.has(s))
}
function Zx(n, r, l) {
    const s = n.slice(0);
    return s[r] = l,
    s
}
var Jx = class extends hr {
    #e;
    #t;
    #n;
    #r;
    #a;
    #i;
    #s;
    #l;
    #h = [];
    constructor(n, r, l) {
        super(),
        this.#e = n,
        this.#r = l,
        this.#n = [],
        this.#a = [],
        this.#t = [],
        this.setQueries(r)
    }
    onSubscribe() {
        this.listeners.size === 1 && this.#a.forEach(n => {
            n.subscribe(r => {
                this.#c(n, r)
            }
            )
        }
        )
    }
    onUnsubscribe() {
        this.listeners.size || this.destroy()
    }
    destroy() {
        this.listeners = new Set,
        this.#a.forEach(n => {
            n.destroy()
        }
        )
    }
    setQueries(n, r) {
        this.#n = n,
        this.#r = r,
        Kt.batch( () => {
            const l = this.#a
              , s = this.#u(this.#n);
            this.#h = s,
            s.forEach(b => b.observer.setOptions(b.defaultedQueryOptions));
            const u = s.map(b => b.observer)
              , f = u.map(b => b.getCurrentResult())
              , d = l.length !== u.length
              , h = u.some( (b, v) => b !== l[v])
              , m = d || h
              , y = m ? !0 : f.some( (b, v) => {
                const x = this.#t[v];
                return !x || !xl(b, x)
            }
            );
            !m && !y || (m && (this.#a = u),
            this.#t = f,
            this.hasListeners() && (m && (iy(l, u).forEach(b => {
                b.destroy()
            }
            ),
            iy(u, l).forEach(b => {
                b.subscribe(v => {
                    this.#c(b, v)
                }
                )
            }
            )),
            this.#o()))
        }
        )
    }
    getCurrentResult() {
        return this.#t
    }
    getQueries() {
        return this.#a.map(n => n.getCurrentQuery())
    }
    getObservers() {
        return this.#a
    }
    getOptimisticResult(n, r) {
        const l = this.#u(n)
          , s = l.map(u => u.observer.getOptimisticResult(u.defaultedQueryOptions));
        return [s, u => this.#d(u ?? s, r), () => this.#f(s, l)]
    }
    #f(n, r) {
        return r.map( (l, s) => {
            const u = n[s];
            return l.defaultedQueryOptions.notifyOnChangeProps ? u : l.observer.trackResult(u, f => {
                r.forEach(d => {
                    d.observer.trackProp(f)
                }
                )
            }
            )
        }
        )
    }
    #d(n, r) {
        return r ? ((!this.#i || this.#t !== this.#l || r !== this.#s) && (this.#s = r,
        this.#l = this.#t,
        this.#i = Qf(this.#i, r(n))),
        this.#i) : n
    }
    #u(n) {
        const r = new Map(this.#a.map(s => [s.options.queryHash, s]))
          , l = [];
        return n.forEach(s => {
            const u = this.#e.defaultQueryOptions(s)
              , f = r.get(u.queryHash);
            f ? l.push({
                defaultedQueryOptions: u,
                observer: f
            }) : l.push({
                defaultedQueryOptions: u,
                observer: new Tl(this.#e,u)
            })
        }
        ),
        l
    }
    #c(n, r) {
        const l = this.#a.indexOf(n);
        l !== -1 && (this.#t = Zx(this.#t, l, r),
        this.#o())
    }
    #o() {
        if (this.hasListeners()) {
            const n = this.#i
              , r = this.#f(this.#t, this.#h)
              , l = this.#d(r, this.#r?.combine);
            n !== l && Kt.batch( () => {
                this.listeners.forEach(s => {
                    s(this.#t)
                }
                )
            }
            )
        }
    }
}
  , Fx = class extends hr {
    constructor(n={}) {
        super(),
        this.config = n,
        this.#e = new Map
    }
    #e;
    build(n, r, l) {
        const s = r.queryKey
          , u = r.queryHash ?? Hf(s, r);
        let f = this.get(u);
        return f || (f = new Bx({
            client: n,
            queryKey: s,
            queryHash: u,
            options: n.defaultQueryOptions(r),
            state: l,
            defaultOptions: n.getQueryDefaults(s)
        }),
        this.add(f)),
        f
    }
    add(n) {
        this.#e.has(n.queryHash) || (this.#e.set(n.queryHash, n),
        this.notify({
            type: "added",
            query: n
        }))
    }
    remove(n) {
        const r = this.#e.get(n.queryHash);
        r && (n.destroy(),
        r === n && this.#e.delete(n.queryHash),
        this.notify({
            type: "removed",
            query: n
        }))
    }
    clear() {
        Kt.batch( () => {
            this.getAll().forEach(n => {
                this.remove(n)
            }
            )
        }
        )
    }
    get(n) {
        return this.#e.get(n)
    }
    getAll() {
        return [...this.#e.values()]
    }
    find(n) {
        const r = {
            exact: !0,
            ...n
        };
        return this.getAll().find(l => $p(r, l))
    }
    findAll(n={}) {
        const r = this.getAll();
        return Object.keys(n).length > 0 ? r.filter(l => $p(n, l)) : r
    }
    notify(n) {
        Kt.batch( () => {
            this.listeners.forEach(r => {
                r(n)
            }
            )
        }
        )
    }
    onFocus() {
        Kt.batch( () => {
            this.getAll().forEach(n => {
                n.onFocus()
            }
            )
        }
        )
    }
    onOnline() {
        Kt.batch( () => {
            this.getAll().forEach(n => {
                n.onOnline()
            }
            )
        }
        )
    }
}
  , Ix = class {
    #e;
    #t;
    #n;
    #r;
    #a;
    #i;
    #s;
    #l;
    constructor(n={}) {
        this.#e = n.queryCache || new Fx,
        this.#t = n.mutationCache || new Xx,
        this.#n = n.defaultOptions || {},
        this.#r = new Map,
        this.#a = new Map,
        this.#i = 0
    }
    mount() {
        this.#i++,
        this.#i === 1 && (this.#s = Bf.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onFocus())
        }
        ),
        this.#l = so.subscribe(async n => {
            n && (await this.resumePausedMutations(),
            this.#e.onOnline())
        }
        ))
    }
    unmount() {
        this.#i--,
        this.#i === 0 && (this.#s?.(),
        this.#s = void 0,
        this.#l?.(),
        this.#l = void 0)
    }
    isFetching(n) {
        return this.#e.findAll({
            ...n,
            fetchStatus: "fetching"
        }).length
    }
    isMutating(n) {
        return this.#t.findAll({
            ...n,
            status: "pending"
        }).length
    }
    getQueryData(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(r.queryHash)?.state.data
    }
    ensureQueryData(n) {
        const r = this.defaultQueryOptions(n)
          , l = this.#e.build(this, r)
          , s = l.state.data;
        return s === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && l.isStaleByTime(Ma(r.staleTime, l)) && this.prefetchQuery(r),
        Promise.resolve(s))
    }
    getQueriesData(n) {
        return this.#e.findAll(n).map( ({queryKey: r, state: l}) => {
            const s = l.data;
            return [r, s]
        }
        )
    }
    setQueryData(n, r, l) {
        const s = this.defaultQueryOptions({
            queryKey: n
        })
          , f = this.#e.get(s.queryHash)?.state.data
          , d = Mx(r, f);
        if (d !== void 0)
            return this.#e.build(this, s).setData(d, {
                ...l,
                manual: !0
            })
    }
    setQueriesData(n, r, l) {
        return Kt.batch( () => this.#e.findAll(n).map( ({queryKey: s}) => [s, this.setQueryData(s, r, l)]))
    }
    getQueryState(n) {
        const r = this.defaultQueryOptions({
            queryKey: n
        });
        return this.#e.get(r.queryHash)?.state
    }
    removeQueries(n) {
        const r = this.#e;
        Kt.batch( () => {
            r.findAll(n).forEach(l => {
                r.remove(l)
            }
            )
        }
        )
    }
    resetQueries(n, r) {
        const l = this.#e;
        return Kt.batch( () => (l.findAll(n).forEach(s => {
            s.reset()
        }
        ),
        this.refetchQueries({
            type: "active",
            ...n
        }, r)))
    }
    cancelQueries(n, r={}) {
        const l = {
            revert: !0,
            ...r
        }
          , s = Kt.batch( () => this.#e.findAll(n).map(u => u.cancel(l)));
        return Promise.all(s).then(ye).catch(ye)
    }
    invalidateQueries(n, r={}) {
        return Kt.batch( () => (this.#e.findAll(n).forEach(l => {
            l.invalidate()
        }
        ),
        n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
            ...n,
            type: n?.refetchType ?? n?.type ?? "active"
        }, r)))
    }
    refetchQueries(n, r={}) {
        const l = {
            ...r,
            cancelRefetch: r.cancelRefetch ?? !0
        }
          , s = Kt.batch( () => this.#e.findAll(n).filter(u => !u.isDisabled() && !u.isStatic()).map(u => {
            let f = u.fetch(void 0, l);
            return l.throwOnError || (f = f.catch(ye)),
            u.state.fetchStatus === "paused" ? Promise.resolve() : f
        }
        ));
        return Promise.all(s).then(ye)
    }
    fetchQuery(n) {
        const r = this.defaultQueryOptions(n);
        r.retry === void 0 && (r.retry = !1);
        const l = this.#e.build(this, r);
        return l.isStaleByTime(Ma(r.staleTime, l)) ? l.fetch(r) : Promise.resolve(l.state.data)
    }
    prefetchQuery(n) {
        return this.fetchQuery(n).then(ye).catch(ye)
    }
    fetchInfiniteQuery(n) {
        return n.behavior = oo(n.pages),
        this.fetchQuery(n)
    }
    prefetchInfiniteQuery(n) {
        return this.fetchInfiniteQuery(n).then(ye).catch(ye)
    }
    ensureInfiniteQueryData(n) {
        return n.behavior = oo(n.pages),
        this.ensureQueryData(n)
    }
    resumePausedMutations() {
        return so.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
        return this.#e
    }
    getMutationCache() {
        return this.#t
    }
    getDefaultOptions() {
        return this.#n
    }
    setDefaultOptions(n) {
        this.#n = n
    }
    setQueryDefaults(n, r) {
        this.#r.set(ja(n), {
            queryKey: n,
            defaultOptions: r
        })
    }
    getQueryDefaults(n) {
        const r = [...this.#r.values()]
          , l = {};
        return r.forEach(s => {
            bl(n, s.queryKey) && Object.assign(l, s.defaultOptions)
        }
        ),
        l
    }
    setMutationDefaults(n, r) {
        this.#a.set(ja(n), {
            mutationKey: n,
            defaultOptions: r
        })
    }
    getMutationDefaults(n) {
        const r = [...this.#a.values()]
          , l = {};
        return r.forEach(s => {
            bl(n, s.mutationKey) && Object.assign(l, s.defaultOptions)
        }
        ),
        l
    }
    defaultQueryOptions(n) {
        if (n._defaulted)
            return n;
        const r = {
            ...this.#n.queries,
            ...this.getQueryDefaults(n.queryKey),
            ...n,
            _defaulted: !0
        };
        return r.queryHash || (r.queryHash = Hf(r.queryKey, r)),
        r.refetchOnReconnect === void 0 && (r.refetchOnReconnect = r.networkMode !== "always"),
        r.throwOnError === void 0 && (r.throwOnError = !!r.suspense),
        !r.networkMode && r.persister && (r.networkMode = "offlineFirst"),
        r.queryFn === Ye && (r.enabled = !1),
        r
    }
    defaultMutationOptions(n) {
        return n?._defaulted ? n : {
            ...this.#n.mutations,
            ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
            ...n,
            _defaulted: !0
        }
    }
    clear() {
        this.#e.clear(),
        this.#t.clear()
    }
}
  , Kc = {
    exports: {}
}
  , xt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ly;
function $x() {
    if (ly)
        return xt;
    ly = 1;
    var n = Symbol.for("react.transitional.element")
      , r = Symbol.for("react.portal")
      , l = Symbol.for("react.fragment")
      , s = Symbol.for("react.strict_mode")
      , u = Symbol.for("react.profiler")
      , f = Symbol.for("react.consumer")
      , d = Symbol.for("react.context")
      , h = Symbol.for("react.forward_ref")
      , m = Symbol.for("react.suspense")
      , y = Symbol.for("react.memo")
      , b = Symbol.for("react.lazy")
      , v = Symbol.for("react.activity")
      , x = Symbol.iterator;
    function _(w) {
        return w === null || typeof w != "object" ? null : (w = x && w[x] || w["@@iterator"],
        typeof w == "function" ? w : null)
    }
    var T = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , S = Object.assign
      , U = {};
    function B(w, P, q) {
        this.props = w,
        this.context = P,
        this.refs = U,
        this.updater = q || T
    }
    B.prototype.isReactComponent = {},
    B.prototype.setState = function(w, P) {
        if (typeof w != "object" && typeof w != "function" && w != null)
            throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, w, P, "setState")
    }
    ,
    B.prototype.forceUpdate = function(w) {
        this.updater.enqueueForceUpdate(this, w, "forceUpdate")
    }
    ;
    function J() {}
    J.prototype = B.prototype;
    function I(w, P, q) {
        this.props = w,
        this.context = P,
        this.refs = U,
        this.updater = q || T
    }
    var nt = I.prototype = new J;
    nt.constructor = I,
    S(nt, B.prototype),
    nt.isPureReactComponent = !0;
    var X = Array.isArray;
    function Z() {}
    var M = {
        H: null,
        A: null,
        T: null,
        S: null
    }
      , H = Object.prototype.hasOwnProperty;
    function $(w, P, q) {
        var Y = q.ref;
        return {
            $$typeof: n,
            type: w,
            key: P,
            ref: Y !== void 0 ? Y : null,
            props: q
        }
    }
    function W(w, P) {
        return $(w.type, P, w.props)
    }
    function at(w) {
        return typeof w == "object" && w !== null && w.$$typeof === n
    }
    function tt(w) {
        var P = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + w.replace(/[=:]/g, function(q) {
            return P[q]
        })
    }
    var st = /\/+/g;
    function it(w, P) {
        return typeof w == "object" && w !== null && w.key != null ? tt("" + w.key) : P.toString(36)
    }
    function ut(w) {
        switch (w.status) {
        case "fulfilled":
            return w.value;
        case "rejected":
            throw w.reason;
        default:
            switch (typeof w.status == "string" ? w.then(Z, Z) : (w.status = "pending",
            w.then(function(P) {
                w.status === "pending" && (w.status = "fulfilled",
                w.value = P)
            }, function(P) {
                w.status === "pending" && (w.status = "rejected",
                w.reason = P)
            })),
            w.status) {
            case "fulfilled":
                return w.value;
            case "rejected":
                throw w.reason
            }
        }
        throw w
    }
    function A(w, P, q, Y, F) {
        var mt = typeof w;
        (mt === "undefined" || mt === "boolean") && (w = null);
        var ot = !1;
        if (w === null)
            ot = !0;
        else
            switch (mt) {
            case "bigint":
            case "string":
            case "number":
                ot = !0;
                break;
            case "object":
                switch (w.$$typeof) {
                case n:
                case r:
                    ot = !0;
                    break;
                case b:
                    return ot = w._init,
                    A(ot(w._payload), P, q, Y, F)
                }
            }
        if (ot)
            return F = F(w),
            ot = Y === "" ? "." + it(w, 0) : Y,
            X(F) ? (q = "",
            ot != null && (q = ot.replace(st, "$&/") + "/"),
            A(F, P, q, "", function(le) {
                return le
            })) : F != null && (at(F) && (F = W(F, q + (F.key == null || w && w.key === F.key ? "" : ("" + F.key).replace(st, "$&/") + "/") + ot)),
            P.push(F)),
            1;
        ot = 0;
        var gt = Y === "" ? "." : Y + ":";
        if (X(w))
            for (var Ct = 0; Ct < w.length; Ct++)
                Y = w[Ct],
                mt = gt + it(Y, Ct),
                ot += A(Y, P, q, mt, F);
        else if (Ct = _(w),
        typeof Ct == "function")
            for (w = Ct.call(w),
            Ct = 0; !(Y = w.next()).done; )
                Y = Y.value,
                mt = gt + it(Y, Ct++),
                ot += A(Y, P, q, mt, F);
        else if (mt === "object") {
            if (typeof w.then == "function")
                return A(ut(w), P, q, Y, F);
            throw P = String(w),
            Error("Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead.")
        }
        return ot
    }
    function Q(w, P, q) {
        if (w == null)
            return w;
        var Y = []
          , F = 0;
        return A(w, Y, "", "", function(mt) {
            return P.call(q, mt, F++)
        }),
        Y
    }
    function D(w) {
        if (w._status === -1) {
            var P = w._result;
            P = P(),
            P.then(function(q) {
                (w._status === 0 || w._status === -1) && (w._status = 1,
                w._result = q)
            }, function(q) {
                (w._status === 0 || w._status === -1) && (w._status = 2,
                w._result = q)
            }),
            w._status === -1 && (w._status = 0,
            w._result = P)
        }
        if (w._status === 1)
            return w._result.default;
        throw w._result
    }
    var rt = typeof reportError == "function" ? reportError : function(w) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var P = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
                error: w
            });
            if (!window.dispatchEvent(P))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", w);
            return
        }
        console.error(w)
    }
      , ht = {
        map: Q,
        forEach: function(w, P, q) {
            Q(w, function() {
                P.apply(this, arguments)
            }, q)
        },
        count: function(w) {
            var P = 0;
            return Q(w, function() {
                P++
            }),
            P
        },
        toArray: function(w) {
            return Q(w, function(P) {
                return P
            }) || []
        },
        only: function(w) {
            if (!at(w))
                throw Error("React.Children.only expected to receive a single React element child.");
            return w
        }
    };
    return xt.Activity = v,
    xt.Children = ht,
    xt.Component = B,
    xt.Fragment = l,
    xt.Profiler = u,
    xt.PureComponent = I,
    xt.StrictMode = s,
    xt.Suspense = m,
    xt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = M,
    xt.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(w) {
            return M.H.useMemoCache(w)
        }
    },
    xt.cache = function(w) {
        return function() {
            return w.apply(null, arguments)
        }
    }
    ,
    xt.cacheSignal = function() {
        return null
    }
    ,
    xt.cloneElement = function(w, P, q) {
        if (w == null)
            throw Error("The argument must be a React element, but you passed " + w + ".");
        var Y = S({}, w.props)
          , F = w.key;
        if (P != null)
            for (mt in P.key !== void 0 && (F = "" + P.key),
            P)
                !H.call(P, mt) || mt === "key" || mt === "__self" || mt === "__source" || mt === "ref" && P.ref === void 0 || (Y[mt] = P[mt]);
        var mt = arguments.length - 2;
        if (mt === 1)
            Y.children = q;
        else if (1 < mt) {
            for (var ot = Array(mt), gt = 0; gt < mt; gt++)
                ot[gt] = arguments[gt + 2];
            Y.children = ot
        }
        return $(w.type, F, Y)
    }
    ,
    xt.createContext = function(w) {
        return w = {
            $$typeof: d,
            _currentValue: w,
            _currentValue2: w,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        },
        w.Provider = w,
        w.Consumer = {
            $$typeof: f,
            _context: w
        },
        w
    }
    ,
    xt.createElement = function(w, P, q) {
        var Y, F = {}, mt = null;
        if (P != null)
            for (Y in P.key !== void 0 && (mt = "" + P.key),
            P)
                H.call(P, Y) && Y !== "key" && Y !== "__self" && Y !== "__source" && (F[Y] = P[Y]);
        var ot = arguments.length - 2;
        if (ot === 1)
            F.children = q;
        else if (1 < ot) {
            for (var gt = Array(ot), Ct = 0; Ct < ot; Ct++)
                gt[Ct] = arguments[Ct + 2];
            F.children = gt
        }
        if (w && w.defaultProps)
            for (Y in ot = w.defaultProps,
            ot)
                F[Y] === void 0 && (F[Y] = ot[Y]);
        return $(w, mt, F)
    }
    ,
    xt.createRef = function() {
        return {
            current: null
        }
    }
    ,
    xt.forwardRef = function(w) {
        return {
            $$typeof: h,
            render: w
        }
    }
    ,
    xt.isValidElement = at,
    xt.lazy = function(w) {
        return {
            $$typeof: b,
            _payload: {
                _status: -1,
                _result: w
            },
            _init: D
        }
    }
    ,
    xt.memo = function(w, P) {
        return {
            $$typeof: y,
            type: w,
            compare: P === void 0 ? null : P
        }
    }
    ,
    xt.startTransition = function(w) {
        var P = M.T
          , q = {};
        M.T = q;
        try {
            var Y = w()
              , F = M.S;
            F !== null && F(q, Y),
            typeof Y == "object" && Y !== null && typeof Y.then == "function" && Y.then(Z, rt)
        } catch (mt) {
            rt(mt)
        } finally {
            P !== null && q.types !== null && (P.types = q.types),
            M.T = P
        }
    }
    ,
    xt.unstable_useCacheRefresh = function() {
        return M.H.useCacheRefresh()
    }
    ,
    xt.use = function(w) {
        return M.H.use(w)
    }
    ,
    xt.useActionState = function(w, P, q) {
        return M.H.useActionState(w, P, q)
    }
    ,
    xt.useCallback = function(w, P) {
        return M.H.useCallback(w, P)
    }
    ,
    xt.useContext = function(w) {
        return M.H.useContext(w)
    }
    ,
    xt.useDebugValue = function() {}
    ,
    xt.useDeferredValue = function(w, P) {
        return M.H.useDeferredValue(w, P)
    }
    ,
    xt.useEffect = function(w, P) {
        return M.H.useEffect(w, P)
    }
    ,
    xt.useEffectEvent = function(w) {
        return M.H.useEffectEvent(w)
    }
    ,
    xt.useId = function() {
        return M.H.useId()
    }
    ,
    xt.useImperativeHandle = function(w, P, q) {
        return M.H.useImperativeHandle(w, P, q)
    }
    ,
    xt.useInsertionEffect = function(w, P) {
        return M.H.useInsertionEffect(w, P)
    }
    ,
    xt.useLayoutEffect = function(w, P) {
        return M.H.useLayoutEffect(w, P)
    }
    ,
    xt.useMemo = function(w, P) {
        return M.H.useMemo(w, P)
    }
    ,
    xt.useOptimistic = function(w, P) {
        return M.H.useOptimistic(w, P)
    }
    ,
    xt.useReducer = function(w, P, q) {
        return M.H.useReducer(w, P, q)
    }
    ,
    xt.useRef = function(w) {
        return M.H.useRef(w)
    }
    ,
    xt.useState = function(w) {
        return M.H.useState(w)
    }
    ,
    xt.useSyncExternalStore = function(w, P, q) {
        return M.H.useSyncExternalStore(w, P, q)
    }
    ,
    xt.useTransition = function() {
        return M.H.useTransition()
    }
    ,
    xt.version = "19.2.1",
    xt
}
var sy;
function vo() {
    return sy || (sy = 1,
    Kc.exports = $x()),
    Kc.exports
}
var C = vo();
const et = av(C)
  , mv = Ox({
    __proto__: null,
    default: et
}, [C]);
var pv = C.createContext(void 0)
  , Cl = n => {
    const r = C.useContext(pv);
    if (n)
        return n;
    if (!r)
        throw new Error("No QueryClient set, use QueryClientProvider to set one");
    return r
}
  , Wx = ({client: n, children: r}) => (C.useEffect( () => (n.mount(),
() => {
    n.unmount()
}
), [n]),
O.jsx(pv.Provider, {
    value: n,
    children: r
}))
  , yv = C.createContext(!1)
  , vv = () => C.useContext(yv);
yv.Provider;
function t1() {
    let n = !1;
    return {
        clearReset: () => {
            n = !1
        }
        ,
        reset: () => {
            n = !0
        }
        ,
        isReset: () => n
    }
}
var e1 = C.createContext(t1())
  , gv = () => C.useContext(e1)
  , bv = (n, r) => {
    (n.suspense || n.throwOnError || n.experimental_prefetchInRender) && (r.isReset() || (n.retryOnMount = !1))
}
  , xv = n => {
    C.useEffect( () => {
        n.clearReset()
    }
    , [n])
}
  , Sv = ({result: n, errorResetBoundary: r, throwOnError: l, query: s, suspense: u}) => n.isError && !r.isReset() && !n.isFetching && s && (u && n.data === void 0 || lv(l, [n.error, s]))
  , Pf = (n, r) => r.state.data === void 0
  , wv = n => {
    if (n.suspense) {
        const l = u => u === "static" ? u : Math.max(u ?? 1e3, 1e3)
          , s = n.staleTime;
        n.staleTime = typeof s == "function" ? (...u) => l(s(...u)) : l(s),
        typeof n.gcTime == "number" && (n.gcTime = Math.max(n.gcTime, 1e3))
    }
}
  , Ev = (n, r) => n.isLoading && n.isFetching && !r
  , gf = (n, r) => n?.suspense && r.isPending
  , uo = (n, r, l) => r.fetchOptimistic(n).catch( () => {
    l.clearReset()
}
);
function Ov({queries: n, ...r}, l) {
    const s = Cl(l)
      , u = vv()
      , f = gv()
      , d = C.useMemo( () => n.map(S => {
        const U = s.defaultQueryOptions(S);
        return U._optimisticResults = u ? "isRestoring" : "optimistic",
        U
    }
    ), [n, s, u]);
    d.forEach(S => {
        wv(S),
        bv(S, f)
    }
    ),
    xv(f);
    const [h] = C.useState( () => new Jx(s,d,r))
      , [m,y,b] = h.getOptimisticResult(d, r.combine)
      , v = !u && r.subscribed !== !1;
    C.useSyncExternalStore(C.useCallback(S => v ? h.subscribe(Kt.batchCalls(S)) : ye, [h, v]), () => h.getCurrentResult(), () => h.getCurrentResult()),
    C.useEffect( () => {
        h.setQueries(d, r)
    }
    , [d, r, h]);
    const _ = m.some( (S, U) => gf(d[U], S)) ? m.flatMap( (S, U) => {
        const B = d[U];
        if (B) {
            const J = new Tl(s,B);
            if (gf(B, S))
                return uo(B, J, f);
            Ev(S, u) && uo(B, J, f)
        }
        return []
    }
    ) : [];
    if (_.length > 0)
        throw Promise.all(_);
    const T = m.find( (S, U) => {
        const B = d[U];
        return B && Sv({
            result: S,
            errorResetBoundary: f,
            throwOnError: B.throwOnError,
            query: s.getQueryCache().get(B.queryHash),
            suspense: B.suspense
        })
    }
    );
    if (T?.error)
        throw T.error;
    return y(b())
}
function go(n, r, l) {
    const s = vv()
      , u = gv()
      , f = Cl(l)
      , d = f.defaultQueryOptions(n);
    f.getDefaultOptions().queries?._experimental_beforeQuery?.(d),
    d._optimisticResults = s ? "isRestoring" : "optimistic",
    wv(d),
    bv(d, u),
    xv(u);
    const h = !f.getQueryCache().get(d.queryHash)
      , [m] = C.useState( () => new r(f,d))
      , y = m.getOptimisticResult(d)
      , b = !s && n.subscribed !== !1;
    if (C.useSyncExternalStore(C.useCallback(v => {
        const x = b ? m.subscribe(Kt.batchCalls(v)) : ye;
        return m.updateResult(),
        x
    }
    , [m, b]), () => m.getCurrentResult(), () => m.getCurrentResult()),
    C.useEffect( () => {
        m.setOptions(d)
    }
    , [d, m]),
    gf(d, y))
        throw uo(d, m, u);
    if (Sv({
        result: y,
        errorResetBoundary: u,
        throwOnError: d.throwOnError,
        query: f.getQueryCache().get(d.queryHash),
        suspense: d.suspense
    }))
        throw y.error;
    return f.getDefaultOptions().queries?._experimental_afterQuery?.(d, y),
    d.experimental_prefetchInRender && !cr && Ev(y, s) && (h ? uo(d, m, u) : f.getQueryCache().get(d.queryHash)?.promise)?.catch(ye).finally( () => {
        m.updateResult()
    }
    ),
    d.notifyOnChangeProps ? y : m.trackResult(y)
}
function n1(n, r) {
    return go(n, Tl, r)
}
function a1(n, r) {
    return go({
        ...n,
        enabled: !0,
        suspense: !0,
        throwOnError: Pf,
        placeholderData: void 0
    }, Tl, r)
}
function r1(n, r) {
    return go({
        ...n,
        enabled: !0,
        suspense: !0,
        throwOnError: Pf
    }, dv, r)
}
function i1(n, r) {
    return Ov({
        ...n,
        queries: n.queries.map(l => ({
            ...l,
            suspense: !0,
            throwOnError: Pf,
            enabled: !0,
            placeholderData: void 0
        }))
    }, r)
}
function l1(n, r) {
    const l = Cl(r);
    l.getQueryState(n.queryKey) || l.prefetchQuery(n)
}
function s1(n, r) {
    const l = Cl(r);
    l.getQueryState(n.queryKey) || l.prefetchInfiniteQuery(n)
}
function o1(n, r) {
    const l = Cl(r)
      , [s] = C.useState( () => new Kx(l,n));
    C.useEffect( () => {
        s.setOptions(n)
    }
    , [s, n]);
    const u = C.useSyncExternalStore(C.useCallback(d => s.subscribe(Kt.batchCalls(d)), [s]), () => s.getCurrentResult(), () => s.getCurrentResult())
      , f = C.useCallback( (d, h) => {
        s.mutate(d, h).catch(ye)
    }
    , [s]);
    if (u.error && lv(s.options.throwOnError, [u.error]))
        throw u.error;
    return {
        ...u,
        mutate: f,
        mutateAsync: u.mutate
    }
}
function u1(n, r) {
    return go(n, dv, r)
}
function fr(n) {
    return !!n && !Array.isArray(n) && typeof n == "object"
}
const c1 = typeof Symbol == "function" && !!Symbol.asyncIterator;
function _v(n) {
    return c1 && fr(n) && Symbol.asyncIterator in n
}
var f1 = Object.create
  , Av = Object.defineProperty
  , d1 = Object.getOwnPropertyDescriptor
  , Tv = Object.getOwnPropertyNames
  , h1 = Object.getPrototypeOf
  , m1 = Object.prototype.hasOwnProperty
  , Rl = (n, r) => function() {
    return r || (0,
    n[Tv(n)[0]])((r = {
        exports: {}
    }).exports, r),
    r.exports
}
  , p1 = (n, r, l, s) => {
    if (r && typeof r == "object" || typeof r == "function")
        for (var u = Tv(r), f = 0, d = u.length, h; f < d; f++)
            h = u[f],
            !m1.call(n, h) && h !== l && Av(n, h, {
                get: (m => r[m]).bind(null, h),
                enumerable: !(s = d1(r, h)) || s.enumerable
            });
    return n
}
  , bo = (n, r, l) => (l = n != null ? f1(h1(n)) : {},
p1(Av(l, "default", {
    value: n,
    enumerable: !0
}), n));
const Cv = () => {}
  , oy = n => {
    Object.freeze && Object.freeze(n)
}
;
function Rv(n, r, l) {
    var s;
    const u = r.join(".");
    return (s = l[u]) !== null && s !== void 0 || (l[u] = new Proxy(Cv,{
        get(f, d) {
            if (!(typeof d != "string" || d === "then"))
                return Rv(n, [...r, d], l)
        },
        apply(f, d, h) {
            const m = r[r.length - 1];
            let y = {
                args: h,
                path: r
            };
            return m === "call" ? y = {
                args: h.length >= 2 ? [h[1]] : [],
                path: r.slice(0, -1)
            } : m === "apply" && (y = {
                args: h.length >= 2 ? h[1] : [],
                path: r.slice(0, -1)
            }),
            oy(y.args),
            oy(y.path),
            n(y)
        }
    })),
    l[u]
}
const xo = n => Rv(n, [], Object.create(null))
  , Yf = n => new Proxy(Cv,{
    get(r, l) {
        if (l !== "then")
            return n(l)
    }
});
var Mv = Rl({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(n, r) {
        function l(s) {
            "@babel/helpers - typeof";
            return r.exports = l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                return typeof u
            }
            : function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            r.exports.__esModule = !0,
            r.exports.default = r.exports,
            l(s)
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , y1 = Rl({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(n, r) {
        var l = Mv().default;
        function s(u, f) {
            if (l(u) != "object" || !u)
                return u;
            var d = u[Symbol.toPrimitive];
            if (d !== void 0) {
                var h = d.call(u, f || "default");
                if (l(h) != "object")
                    return h;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (f === "string" ? String : Number)(u)
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , v1 = Rl({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(n, r) {
        var l = Mv().default
          , s = y1();
        function u(f) {
            var d = s(f, "string");
            return l(d) == "symbol" ? d : d + ""
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , jv = Rl({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(n, r) {
        var l = v1();
        function s(u, f, d) {
            return (f = l(f))in u ? Object.defineProperty(u, f, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[f] = d,
            u
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , Gf = Rl({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(n, r) {
        var l = jv();
        function s(f, d) {
            var h = Object.keys(f);
            if (Object.getOwnPropertySymbols) {
                var m = Object.getOwnPropertySymbols(f);
                d && (m = m.filter(function(y) {
                    return Object.getOwnPropertyDescriptor(f, y).enumerable
                })),
                h.push.apply(h, m)
            }
            return h
        }
        function u(f) {
            for (var d = 1; d < arguments.length; d++) {
                var h = arguments[d] != null ? arguments[d] : {};
                d % 2 ? s(Object(h), !0).forEach(function(m) {
                    l(f, m, h[m])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : s(Object(h)).forEach(function(m) {
                    Object.defineProperty(f, m, Object.getOwnPropertyDescriptor(h, m))
                })
            }
            return f
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
});
bo(Gf());
bo(jv());
var Zs = bo(Gf());
function g1(n, r) {
    if ("error"in n) {
        const s = r.deserialize(n.error);
        return {
            ok: !1,
            error: (0,
            Zs.default)((0,
            Zs.default)({}, n), {}, {
                error: s
            })
        }
    }
    return {
        ok: !0,
        result: (0,
        Zs.default)((0,
        Zs.default)({}, n.result), (!n.result.type || n.result.type === "data") && {
            type: "data",
            data: r.deserialize(n.result.data)
        })
    }
}
var Zc = class extends Error {
    constructor() {
        super("Unable to transform response from server")
    }
}
;
function b1(n, r) {
    let l;
    try {
        l = g1(n, r)
    } catch {
        throw new Zc
    }
    if (!l.ok && (!fr(l.error.error) || typeof l.error.error.code != "number"))
        throw new Zc;
    if (l.ok && !fr(l.result))
        throw new Zc;
    return l
}
bo(Gf());
function So(n) {
    const r = {
        subscribe(l) {
            let s = null
              , u = !1
              , f = !1
              , d = !1;
            function h() {
                if (s === null) {
                    d = !0;
                    return
                }
                f || (f = !0,
                typeof s == "function" ? s() : s && s.unsubscribe())
            }
            return s = n({
                next(m) {
                    var y;
                    u || (y = l.next) === null || y === void 0 || y.call(l, m)
                },
                error(m) {
                    var y;
                    u || (u = !0,
                    (y = l.error) === null || y === void 0 || y.call(l, m),
                    h())
                },
                complete() {
                    var m;
                    u || (u = !0,
                    (m = l.complete) === null || m === void 0 || m.call(l),
                    h())
                }
            }),
            d && h(),
            {
                unsubscribe: h
            }
        },
        pipe(...l) {
            return l.reduce(x1, r)
        }
    };
    return r
}
function x1(n, r) {
    return r(n)
}
function S1(n) {
    const r = new AbortController;
    return new Promise( (s, u) => {
        let f = !1;
        function d() {
            f || (f = !0,
            h.unsubscribe())
        }
        r.signal.addEventListener("abort", () => {
            u(r.signal.reason)
        }
        );
        const h = n.subscribe({
            next(m) {
                f = !0,
                s(m),
                d()
            },
            error(m) {
                u(m)
            },
            complete() {
                r.abort(),
                d()
            }
        })
    }
    )
}
var w1 = Object.create
  , Dv = Object.defineProperty
  , E1 = Object.getOwnPropertyDescriptor
  , Nv = Object.getOwnPropertyNames
  , O1 = Object.getPrototypeOf
  , _1 = Object.prototype.hasOwnProperty
  , Ua = (n, r) => function() {
    return r || (0,
    n[Nv(n)[0]])((r = {
        exports: {}
    }).exports, r),
    r.exports
}
  , A1 = (n, r, l, s) => {
    if (r && typeof r == "object" || typeof r == "function")
        for (var u = Nv(r), f = 0, d = u.length, h; f < d; f++)
            h = u[f],
            !_1.call(n, h) && h !== l && Dv(n, h, {
                get: (m => r[m]).bind(null, h),
                enumerable: !(s = E1(r, h)) || s.enumerable
            });
    return n
}
  , mr = (n, r, l) => (l = n != null ? w1(O1(n)) : {},
A1(r || !n || !n.__esModule ? Dv(l, "default", {
    value: n,
    enumerable: !0
}) : l, n))
  , T1 = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutPropertiesLoose.js"(n, r) {
        function l(s, u) {
            if (s == null)
                return {};
            var f = {};
            for (var d in s)
                if ({}.hasOwnProperty.call(s, d)) {
                    if (u.includes(d))
                        continue;
                    f[d] = s[d]
                }
            return f
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , C1 = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectWithoutProperties.js"(n, r) {
        var l = T1();
        function s(u, f) {
            if (u == null)
                return {};
            var d, h, m = l(u, f);
            if (Object.getOwnPropertySymbols) {
                var y = Object.getOwnPropertySymbols(u);
                for (h = 0; h < y.length; h++)
                    d = y[h],
                    f.includes(d) || {}.propertyIsEnumerable.call(u, d) && (m[d] = u[d])
            }
            return m
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , zv = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(n, r) {
        function l(s) {
            "@babel/helpers - typeof";
            return r.exports = l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                return typeof u
            }
            : function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            r.exports.__esModule = !0,
            r.exports.default = r.exports,
            l(s)
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , R1 = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(n, r) {
        var l = zv().default;
        function s(u, f) {
            if (l(u) != "object" || !u)
                return u;
            var d = u[Symbol.toPrimitive];
            if (d !== void 0) {
                var h = d.call(u, f || "default");
                if (l(h) != "object")
                    return h;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (f === "string" ? String : Number)(u)
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , M1 = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(n, r) {
        var l = zv().default
          , s = R1();
        function u(f) {
            var d = s(f, "string");
            return l(d) == "symbol" ? d : d + ""
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , j1 = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(n, r) {
        var l = M1();
        function s(u, f, d) {
            return (f = l(f))in u ? Object.defineProperty(u, f, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[f] = d,
            u
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , Ml = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(n, r) {
        var l = j1();
        function s(f, d) {
            var h = Object.keys(f);
            if (Object.getOwnPropertySymbols) {
                var m = Object.getOwnPropertySymbols(f);
                d && (m = m.filter(function(y) {
                    return Object.getOwnPropertyDescriptor(f, y).enumerable
                })),
                h.push.apply(h, m)
            }
            return h
        }
        function u(f) {
            for (var d = 1; d < arguments.length; d++) {
                var h = arguments[d] != null ? arguments[d] : {};
                d % 2 ? s(Object(h), !0).forEach(function(m) {
                    l(f, m, h[m])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : s(Object(h)).forEach(function(m) {
                    Object.defineProperty(f, m, Object.getOwnPropertyDescriptor(h, m))
                })
            }
            return f
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , D1 = mr(C1(), 1)
  , uy = mr(Ml(), 1);
const N1 = ["cursor", "direction"];
function wn(n, r, l) {
    const s = n.flatMap(u => u.split("."));
    if (!r && (!l || l === "any"))
        return s.length ? [s] : [];
    if (l === "infinite" && fr(r) && ("direction"in r || "cursor"in r)) {
        const {cursor: u, direction: f} = r
          , d = (0,
        D1.default)(r, N1);
        return [s, {
            input: d,
            type: "infinite"
        }]
    }
    return [s, (0,
    uy.default)((0,
    uy.default)({}, typeof r < "u" && r !== Ye && {
        input: r
    }), l && l !== "any" && {
        type: l
    })]
}
function ao(n) {
    return wn(n, void 0, "any")
}
var z1 = Object.create
  , Uv = Object.defineProperty
  , U1 = Object.getOwnPropertyDescriptor
  , qv = Object.getOwnPropertyNames
  , q1 = Object.getPrototypeOf
  , L1 = Object.prototype.hasOwnProperty
  , An = (n, r) => function() {
    return r || (0,
    n[qv(n)[0]])((r = {
        exports: {}
    }).exports, r),
    r.exports
}
  , H1 = (n, r, l, s) => {
    if (r && typeof r == "object" || typeof r == "function")
        for (var u = qv(r), f = 0, d = u.length, h; f < d; f++)
            h = u[f],
            !L1.call(n, h) && h !== l && Uv(n, h, {
                get: (m => r[m]).bind(null, h),
                enumerable: !(s = U1(r, h)) || s.enumerable
            });
    return n
}
  , Ft = (n, r, l) => (l = n != null ? z1(q1(n)) : {},
H1(r || !n || !n.__esModule ? Uv(l, "default", {
    value: n,
    enumerable: !0
}) : l, n))
  , Lv = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/typeof.js"(n, r) {
        function l(s) {
            "@babel/helpers - typeof";
            return r.exports = l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(u) {
                return typeof u
            }
            : function(u) {
                return u && typeof Symbol == "function" && u.constructor === Symbol && u !== Symbol.prototype ? "symbol" : typeof u
            }
            ,
            r.exports.__esModule = !0,
            r.exports.default = r.exports,
            l(s)
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , Q1 = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPrimitive.js"(n, r) {
        var l = Lv().default;
        function s(u, f) {
            if (l(u) != "object" || !u)
                return u;
            var d = u[Symbol.toPrimitive];
            if (d !== void 0) {
                var h = d.call(u, f || "default");
                if (l(h) != "object")
                    return h;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return (f === "string" ? String : Number)(u)
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , B1 = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/toPropertyKey.js"(n, r) {
        var l = Lv().default
          , s = Q1();
        function u(f) {
            var d = s(f, "string");
            return l(d) == "symbol" ? d : d + ""
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , pr = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/defineProperty.js"(n, r) {
        var l = B1();
        function s(u, f, d) {
            return (f = l(f))in u ? Object.defineProperty(u, f, {
                value: d,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : u[f] = d,
            u
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , dn = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/objectSpread2.js"(n, r) {
        var l = pr();
        function s(f, d) {
            var h = Object.keys(f);
            if (Object.getOwnPropertySymbols) {
                var m = Object.getOwnPropertySymbols(f);
                d && (m = m.filter(function(y) {
                    return Object.getOwnPropertyDescriptor(f, y).enumerable
                })),
                h.push.apply(h, m)
            }
            return h
        }
        function u(f) {
            for (var d = 1; d < arguments.length; d++) {
                var h = arguments[d] != null ? arguments[d] : {};
                d % 2 ? s(Object(h), !0).forEach(function(m) {
                    l(f, m, h[m])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(f, Object.getOwnPropertyDescriptors(h)) : s(Object(h)).forEach(function(m) {
                    Object.defineProperty(f, m, Object.getOwnPropertyDescriptor(h, m))
                })
            }
            return f
        }
        r.exports = u,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
});
function k1(n) {
    return r => {
        let l = 0
          , s = null;
        const u = [];
        function f() {
            s || (s = r.subscribe({
                next(h) {
                    for (const y of u) {
                        var m;
                        (m = y.next) === null || m === void 0 || m.call(y, h)
                    }
                },
                error(h) {
                    for (const y of u) {
                        var m;
                        (m = y.error) === null || m === void 0 || m.call(y, h)
                    }
                },
                complete() {
                    for (const m of u) {
                        var h;
                        (h = m.complete) === null || h === void 0 || h.call(m)
                    }
                }
            }))
        }
        function d() {
            if (l === 0 && s) {
                const h = s;
                s = null,
                h.unsubscribe()
            }
        }
        return So(h => (l++,
        u.push(h),
        f(),
        {
            unsubscribe() {
                l--,
                d();
                const m = u.findIndex(y => y === h);
                m > -1 && u.splice(m, 1)
            }
        }))
    }
}
function P1(n) {
    let r = n;
    const l = []
      , s = d => {
        r !== void 0 && d.next(r),
        l.push(d)
    }
      , u = d => {
        l.splice(l.indexOf(d), 1)
    }
      , f = So(d => (s(d),
    () => {
        u(d)
    }
    ));
    return f.next = d => {
        if (r !== d) {
            r = d;
            for (const h of l)
                h.next(d)
        }
    }
    ,
    f.get = () => r,
    f
}
function Y1(n) {
    return So(r => {
        function l(u=0, f=n.op) {
            const d = n.links[u];
            if (!d)
                throw new Error("No more links to execute - did you forget to add an ending link?");
            return d({
                op: f,
                next(m) {
                    return l(u + 1, m)
                }
            })
        }
        return l().subscribe(r)
    }
    )
}
var Js = Ft(pr(), 1)
  , li = Ft(dn(), 1);
function G1(n) {
    return n instanceof ci
}
function V1(n) {
    return fr(n) && fr(n.error) && typeof n.error.code == "number" && typeof n.error.message == "string"
}
function X1(n, r) {
    return typeof n == "string" ? n : fr(n) && typeof n.message == "string" ? n.message : r
}
var ci = class ro extends Error {
    constructor(r, l) {
        var s, u;
        const f = l?.cause;
        super(r, {
            cause: f
        }),
        (0,
        Js.default)(this, "cause", void 0),
        (0,
        Js.default)(this, "shape", void 0),
        (0,
        Js.default)(this, "data", void 0),
        (0,
        Js.default)(this, "meta", void 0),
        this.meta = l?.meta,
        this.cause = f,
        this.shape = l == null || (s = l.result) === null || s === void 0 ? void 0 : s.error,
        this.data = l == null || (u = l.result) === null || u === void 0 ? void 0 : u.error.data,
        this.name = "TRPCClientError",
        Object.setPrototypeOf(this, ro.prototype)
    }
    static from(r, l={}) {
        const s = r;
        return G1(s) ? (l.meta && (s.meta = (0,
        li.default)((0,
        li.default)({}, s.meta), l.meta)),
        s) : V1(s) ? new ro(s.error.message,(0,
        li.default)((0,
        li.default)({}, l), {}, {
            result: s
        })) : new ro(X1(s, "Unknown error"),(0,
        li.default)((0,
        li.default)({}, l), {}, {
            cause: s
        }))
    }
}
;
function K1(n) {
    const r = n;
    return r ? "input"in r ? r : {
        input: r,
        output: r
    } : {
        input: {
            serialize: l => l,
            deserialize: l => l
        },
        output: {
            serialize: l => l,
            deserialize: l => l
        }
    }
}
const cy = n => typeof n == "function";
function Z1(n) {
    if (n)
        return n;
    if (typeof window < "u" && cy(window.fetch))
        return window.fetch;
    if (typeof globalThis < "u" && cy(globalThis.fetch))
        return globalThis.fetch;
    throw new Error("No fetch implementation found")
}
var vl = Ft(dn());
function J1(n) {
    return {
        url: n.url.toString(),
        fetch: n.fetch,
        transformer: K1(n.transformer),
        methodOverride: n.methodOverride
    }
}
function F1(n) {
    const r = {};
    for (let l = 0; l < n.length; l++) {
        const s = n[l];
        r[l] = s
    }
    return r
}
const I1 = {
    query: "GET",
    mutation: "POST",
    subscription: "PATCH"
};
function Hv(n) {
    return "input"in n ? n.transformer.input.serialize(n.input) : F1(n.inputs.map(r => n.transformer.input.serialize(r)))
}
const Qv = n => {
    const r = n.url.split("?");
    let s = r[0].replace(/\/$/, "") + "/" + n.path;
    const u = [];
    if (r[1] && u.push(r[1]),
    "inputs"in n && u.push("batch=1"),
    n.type === "query" || n.type === "subscription") {
        const f = Hv(n);
        f !== void 0 && n.methodOverride !== "POST" && u.push(`input=${encodeURIComponent(JSON.stringify(f))}`)
    }
    return u.length && (s += "?" + u.join("&")),
    s
}
  , $1 = n => {
    if (n.type === "query" && n.methodOverride !== "POST")
        return;
    const r = Hv(n);
    return r !== void 0 ? JSON.stringify(r) : void 0
}
  , W1 = n => aS((0,
vl.default)((0,
vl.default)({}, n), {}, {
    contentTypeHeader: "application/json",
    getUrl: Qv,
    getBody: $1
}));
var tS = class extends Error {
    constructor() {
        const n = "AbortError";
        super(n),
        this.name = n,
        this.message = n
    }
}
;
const eS = n => {
    var r;
    if (n?.aborted)
        throw (r = n.throwIfAborted) === null || r === void 0 || r.call(n),
        typeof DOMException < "u" ? new DOMException("AbortError","AbortError") : new tS
}
;
async function nS(n) {
    var r;
    eS(n.signal);
    const l = n.getUrl(n)
      , s = n.getBody(n)
      , u = (r = n.methodOverride) !== null && r !== void 0 ? r : I1[n.type]
      , f = await (async () => {
        const h = await n.headers();
        return Symbol.iterator in h ? Object.fromEntries(h) : h
    }
    )()
      , d = (0,
    vl.default)((0,
    vl.default)((0,
    vl.default)({}, n.contentTypeHeader && u !== "GET" ? {
        "content-type": n.contentTypeHeader
    } : {}), n.trpcAcceptHeader ? {
        "trpc-accept": n.trpcAcceptHeader
    } : void 0), f);
    return Z1(n.fetch)(l, {
        method: u,
        signal: n.signal,
        body: s,
        headers: d
    })
}
async function aS(n) {
    const r = {}
      , l = await nS(n);
    r.response = l;
    const s = await l.json();
    return r.responseJSON = s,
    {
        json: s,
        meta: r
    }
}
Ft(dn(), 1);
const fy = () => {
    throw new Error("Something went wrong. Please submit an issue at https://github.com/trpc/trpc/issues/new")
}
;
function dy(n) {
    let r = null
      , l = null;
    const s = () => {
        clearTimeout(l),
        l = null,
        r = null
    }
    ;
    function u(h) {
        const m = [[]];
        let y = 0;
        for (; ; ) {
            const x = h[y];
            if (!x)
                break;
            const _ = m[m.length - 1];
            if (x.aborted) {
                var b;
                (b = x.reject) === null || b === void 0 || b.call(x, new Error("Aborted")),
                y++;
                continue
            }
            if (n.validate(_.concat(x).map(S => S.key))) {
                _.push(x),
                y++;
                continue
            }
            if (_.length === 0) {
                var v;
                (v = x.reject) === null || v === void 0 || v.call(x, new Error("Input is too big for a single dispatch")),
                y++;
                continue
            }
            m.push([])
        }
        return m
    }
    function f() {
        const h = u(r);
        s();
        for (const m of h) {
            if (!m.length)
                continue;
            const y = {
                items: m
            };
            for (const v of m)
                v.batch = y;
            n.fetch(y.items.map(v => v.key)).then(async v => {
                await Promise.all(v.map(async (_, T) => {
                    const S = y.items[T];
                    try {
                        var U;
                        const J = await Promise.resolve(_);
                        (U = S.resolve) === null || U === void 0 || U.call(S, J)
                    } catch (J) {
                        var B;
                        (B = S.reject) === null || B === void 0 || B.call(S, J)
                    }
                    S.batch = null,
                    S.reject = null,
                    S.resolve = null
                }
                ));
                for (const _ of y.items) {
                    var x;
                    (x = _.reject) === null || x === void 0 || x.call(_, new Error("Missing result")),
                    _.batch = null
                }
            }
            ).catch(v => {
                for (const _ of y.items) {
                    var x;
                    (x = _.reject) === null || x === void 0 || x.call(_, v),
                    _.batch = null
                }
            }
            )
        }
    }
    function d(h) {
        var m;
        const y = {
            aborted: !1,
            key: h,
            batch: null,
            resolve: fy,
            reject: fy
        }
          , b = new Promise( (v, x) => {
            var _;
            y.reject = x,
            y.resolve = v,
            (_ = r) !== null && _ !== void 0 || (r = []),
            r.push(y)
        }
        );
        return (m = l) !== null && m !== void 0 || (l = setTimeout(f)),
        b
    }
    return {
        load: d
    }
}
function rS(...n) {
    const r = new AbortController
      , l = n.length;
    let s = 0;
    const u = () => {
        ++s === l && r.abort()
    }
    ;
    for (const f of n)
        f?.aborted ? u() : f?.addEventListener("abort", u, {
            once: !0
        });
    return r.signal
}
var Fs = Ft(dn(), 1);
function iS(n) {
    var r, l;
    const s = J1(n)
      , u = (r = n.maxURLLength) !== null && r !== void 0 ? r : 1 / 0
      , f = (l = n.maxItems) !== null && l !== void 0 ? l : 1 / 0;
    return () => {
        const d = b => ({
            validate(v) {
                if (u === 1 / 0 && f === 1 / 0)
                    return !0;
                if (v.length > f)
                    return !1;
                const x = v.map(S => S.path).join(",")
                  , _ = v.map(S => S.input);
                return Qv((0,
                Fs.default)((0,
                Fs.default)({}, s), {}, {
                    type: b,
                    path: x,
                    inputs: _,
                    signal: null
                })).length <= u
            },
            async fetch(v) {
                const x = v.map(J => J.path).join(",")
                  , _ = v.map(J => J.input)
                  , T = rS(...v.map(J => J.signal))
                  , S = await W1((0,
                Fs.default)((0,
                Fs.default)({}, s), {}, {
                    path: x,
                    inputs: _,
                    type: b,
                    headers() {
                        return n.headers ? typeof n.headers == "function" ? n.headers({
                            opList: v
                        }) : n.headers : {}
                    },
                    signal: T
                }));
                return (Array.isArray(S.json) ? S.json : v.map( () => S.json)).map(J => ({
                    meta: S.meta,
                    json: J
                }))
            }
        })
          , h = dy(d("query"))
          , m = dy(d("mutation"))
          , y = {
            query: h,
            mutation: m
        };
        return ({op: b}) => So(v => {
            /* istanbul ignore if -- @preserve */
            if (b.type === "subscription")
                throw new Error("Subscriptions are unsupported by `httpLink` - use `httpSubscriptionLink` or `wsLink`");
            const _ = y[b.type].load(b);
            let T;
            return _.then(S => {
                T = S;
                const U = b1(S.json, s.transformer.output);
                if (!U.ok) {
                    v.error(ci.from(U.error, {
                        meta: S.meta
                    }));
                    return
                }
                v.next({
                    context: S.meta,
                    result: U.result
                }),
                v.complete()
            }
            ).catch(S => {
                v.error(ci.from(S, {
                    meta: T?.meta
                }))
            }
            ),
            () => {}
        }
        )
    }
}
Ft(dn(), 1);
const Bv = (n, ...r) => typeof n == "function" ? n(...r) : n;
Ft(pr(), 1);
function lS() {
    let n, r;
    return {
        promise: new Promise( (s, u) => {
            n = s,
            r = u
        }
        ),
        resolve: n,
        reject: r
    }
}
async function sS(n) {
    const r = await Bv(n.url);
    if (!n.connectionParams)
        return r;
    const s = `${r.includes("?") ? "&" : "?"}connectionParams=1`;
    return r + s
}
async function oS(n) {
    const r = {
        method: "connectionParams",
        data: await Bv(n)
    };
    return JSON.stringify(r)
}
Ft(pr(), 1);
var lr = Ft(pr(), 1);
function uS(n) {
    const {promise: r, resolve: l, reject: s} = lS();
    return n.addEventListener("open", () => {
        n.removeEventListener("error", s),
        l()
    }
    ),
    n.addEventListener("error", s),
    r
}
function cS(n, {intervalMs: r, pongTimeoutMs: l}) {
    let s, u;
    function f() {
        s = setTimeout( () => {
            n.send("PING"),
            u = setTimeout( () => {
                n.close()
            }
            , l)
        }
        , r)
    }
    function d() {
        clearTimeout(s),
        f()
    }
    function h() {
        clearTimeout(u),
        d()
    }
    n.addEventListener("open", f),
    n.addEventListener("message", ({data: m}) => {
        clearTimeout(s),
        f(),
        m === "PONG" && h()
    }
    ),
    n.addEventListener("close", () => {
        clearTimeout(s),
        clearTimeout(u)
    }
    )
}
var fS = class bf {
    constructor(r) {
        var l;
        if ((0,
        lr.default)(this, "id", ++bf.connectCount),
        (0,
        lr.default)(this, "WebSocketPonyfill", void 0),
        (0,
        lr.default)(this, "urlOptions", void 0),
        (0,
        lr.default)(this, "keepAliveOpts", void 0),
        (0,
        lr.default)(this, "wsObservable", P1(null)),
        (0,
        lr.default)(this, "openPromise", null),
        this.WebSocketPonyfill = (l = r.WebSocketPonyfill) !== null && l !== void 0 ? l : WebSocket,
        !this.WebSocketPonyfill)
            throw new Error("No WebSocket implementation found - you probably don't want to use this on the server, but if you do you need to pass a `WebSocket`-ponyfill");
        this.urlOptions = r.urlOptions,
        this.keepAliveOpts = r.keepAlive
    }
    get ws() {
        return this.wsObservable.get()
    }
    set ws(r) {
        this.wsObservable.next(r)
    }
    isOpen() {
        return !!this.ws && this.ws.readyState === this.WebSocketPonyfill.OPEN && !this.openPromise
    }
    isClosed() {
        return !!this.ws && (this.ws.readyState === this.WebSocketPonyfill.CLOSING || this.ws.readyState === this.WebSocketPonyfill.CLOSED)
    }
    async open() {
        var r = this;
        if (r.openPromise)
            return r.openPromise;
        r.id = ++bf.connectCount;
        const l = sS(r.urlOptions).then(s => new r.WebSocketPonyfill(s));
        r.openPromise = l.then(async s => {
            r.ws = s,
            s.addEventListener("message", function({data: u}) {
                u === "PING" && this.send("PONG")
            }),
            r.keepAliveOpts.enabled && cS(s, r.keepAliveOpts),
            s.addEventListener("close", () => {
                r.ws === s && (r.ws = null)
            }
            ),
            await uS(s),
            r.urlOptions.connectionParams && s.send(await oS(r.urlOptions.connectionParams))
        }
        );
        try {
            await r.openPromise
        } finally {
            r.openPromise = null
        }
    }
    async close() {
        var r = this;
        try {
            await r.openPromise
        } finally {
            var l;
            (l = r.ws) === null || l === void 0 || l.close()
        }
    }
}
;
(0,
lr.default)(fS, "connectCount", 0);
Ft(pr(), 1);
Ft(dn(), 1);
var Jc = Ft(pr(), 1)
  , hy = Ft(dn(), 1)
  , wo = class {
    constructor(n) {
        (0,
        Jc.default)(this, "links", void 0),
        (0,
        Jc.default)(this, "runtime", void 0),
        (0,
        Jc.default)(this, "requestId", void 0),
        this.requestId = 0,
        this.runtime = {},
        this.links = n.links.map(r => r(this.runtime))
    }
    $request(n) {
        var r;
        return Y1({
            links: this.links,
            op: (0,
            hy.default)((0,
            hy.default)({}, n), {}, {
                context: (r = n.context) !== null && r !== void 0 ? r : {},
                id: ++this.requestId
            })
        }).pipe(k1())
    }
    async requestAsPromise(n) {
        var r = this;
        try {
            const l = r.$request(n);
            return (await S1(l)).result.data
        } catch (l) {
            throw ci.from(l)
        }
    }
    query(n, r, l) {
        return this.requestAsPromise({
            type: "query",
            path: n,
            input: r,
            context: l?.context,
            signal: l?.signal
        })
    }
    mutation(n, r, l) {
        return this.requestAsPromise({
            type: "mutation",
            path: n,
            input: r,
            context: l?.context,
            signal: l?.signal
        })
    }
    subscription(n, r, l) {
        return this.$request({
            type: "subscription",
            path: n,
            input: r,
            context: l.context,
            signal: l.signal
        }).subscribe({
            next(u) {
                switch (u.result.type) {
                case "state":
                    {
                        var f;
                        (f = l.onConnectionStateChange) === null || f === void 0 || f.call(l, u.result);
                        break
                    }
                case "started":
                    {
                        var d;
                        (d = l.onStarted) === null || d === void 0 || d.call(l, {
                            context: u.context
                        });
                        break
                    }
                case "stopped":
                    {
                        var h;
                        (h = l.onStopped) === null || h === void 0 || h.call(l);
                        break
                    }
                case "data":
                case void 0:
                    {
                        var m;
                        (m = l.onData) === null || m === void 0 || m.call(l, u.result.data);
                        break
                    }
                }
            },
            error(u) {
                var f;
                (f = l.onError) === null || f === void 0 || f.call(l, u)
            },
            complete() {
                var u;
                (u = l.onComplete) === null || u === void 0 || u.call(l)
            }
        })
    }
}
;
const kv = Symbol.for("trpc_untypedClient")
  , dS = {
    query: "query",
    mutate: "mutation",
    subscribe: "subscription"
}
  , hS = n => dS[n];
function Pv(n) {
    const r = xo( ({path: l, args: s}) => {
        const u = [...l]
          , f = hS(u.pop())
          , d = u.join(".");
        return n[f](d, ...s)
    }
    );
    return Yf(l => l === kv ? n : r[l])
}
function mS(n) {
    const r = new wo(n);
    return Pv(r)
}
function Vf(n) {
    return n[kv]
}
Ft(dn(), 1);
Ft(dn(), 1);
var pS = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(n, r) {
        function l(u) {
            var f, d, h, m = 2;
            for (typeof Symbol < "u" && (d = Symbol.asyncIterator,
            h = Symbol.iterator); m--; ) {
                if (d && (f = u[d]) != null)
                    return f.call(u);
                if (h && (f = u[h]) != null)
                    return new s(f.call(u));
                d = "@@asyncIterator",
                h = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }
        function s(u) {
            function f(d) {
                if (Object(d) !== d)
                    return Promise.reject(new TypeError(d + " is not an object."));
                var h = d.done;
                return Promise.resolve(d.value).then(function(m) {
                    return {
                        value: m,
                        done: h
                    }
                })
            }
            return s = function(h) {
                this.s = h,
                this.n = h.next
            }
            ,
            s.prototype = {
                s: null,
                n: null,
                next: function() {
                    return f(this.n.apply(this.s, arguments))
                },
                return: function(h) {
                    var m = this.s.return;
                    return m === void 0 ? Promise.resolve({
                        value: h,
                        done: !0
                    }) : f(m.apply(this.s, arguments))
                },
                throw: function(h) {
                    var m = this.s.return;
                    return m === void 0 ? Promise.reject(h) : f(m.apply(this.s, arguments))
                }
            },
            new s(u)
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
});
Ft(pS(), 1);
Ft(dn(), 1);
var yS = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/usingCtx.js"(n, r) {
        function l() {
            var s = typeof SuppressedError == "function" ? SuppressedError : function(h, m) {
                var y = Error();
                return y.name = "SuppressedError",
                y.error = h,
                y.suppressed = m,
                y
            }
              , u = {}
              , f = [];
            function d(h, m) {
                if (m != null) {
                    if (Object(m) !== m)
                        throw new TypeError("using declarations can only be used with objects, functions, null, or undefined.");
                    if (h)
                        var y = m[Symbol.asyncDispose || Symbol.for("Symbol.asyncDispose")];
                    if (y === void 0 && (y = m[Symbol.dispose || Symbol.for("Symbol.dispose")],
                    h))
                        var b = y;
                    if (typeof y != "function")
                        throw new TypeError("Object is not disposable.");
                    b && (y = function() {
                        try {
                            b.call(m)
                        } catch (x) {
                            return Promise.reject(x)
                        }
                    }
                    ),
                    f.push({
                        v: m,
                        d: y,
                        a: h
                    })
                } else
                    h && f.push({
                        d: m,
                        a: h
                    });
                return m
            }
            return {
                e: u,
                u: d.bind(null, !1),
                a: d.bind(null, !0),
                d: function() {
                    var m, y = this.e, b = 0;
                    function v() {
                        for (; m = f.pop(); )
                            try {
                                if (!m.a && b === 1)
                                    return b = 0,
                                    f.push(m),
                                    Promise.resolve().then(v);
                                if (m.d) {
                                    var _ = m.d.call(m.v);
                                    if (m.a)
                                        return b |= 2,
                                        Promise.resolve(_).then(v, x)
                                } else
                                    b |= 1
                            } catch (T) {
                                return x(T)
                            }
                        if (b === 1)
                            return y !== u ? Promise.reject(y) : Promise.resolve();
                        if (y !== u)
                            throw y
                    }
                    function x(_) {
                        return y = y !== u ? new s(_,y) : _,
                        v()
                    }
                    return v()
                }
            }
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , Yv = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/OverloadYield.js"(n, r) {
        function l(s, u) {
            this.v = s,
            this.k = u
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , vS = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/awaitAsyncGenerator.js"(n, r) {
        var l = Yv();
        function s(u) {
            return new l(u,0)
        }
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , gS = An({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/wrapAsyncGenerator.js"(n, r) {
        var l = Yv();
        function s(f) {
            return function() {
                return new u(f.apply(this, arguments))
            }
        }
        function u(f) {
            var d, h;
            function m(b, v) {
                try {
                    var x = f[b](v)
                      , _ = x.value
                      , T = _ instanceof l;
                    Promise.resolve(T ? _.v : _).then(function(S) {
                        if (T) {
                            var U = b === "return" ? "return" : "next";
                            if (!_.k || S.done)
                                return m(U, S);
                            S = f[U](S).value
                        }
                        y(x.done ? "return" : "normal", S)
                    }, function(S) {
                        m("throw", S)
                    })
                } catch (S) {
                    y("throw", S)
                }
            }
            function y(b, v) {
                switch (b) {
                case "return":
                    d.resolve({
                        value: v,
                        done: !0
                    });
                    break;
                case "throw":
                    d.reject(v);
                    break;
                default:
                    d.resolve({
                        value: v,
                        done: !1
                    })
                }
                (d = d.next) ? m(d.key, d.arg) : h = null
            }
            this._invoke = function(b, v) {
                return new Promise(function(x, _) {
                    var T = {
                        key: b,
                        arg: v,
                        resolve: x,
                        reject: _,
                        next: null
                    };
                    h ? h = h.next = T : (d = h = T,
                    m(b, v))
                }
                )
            }
            ,
            typeof f.return != "function" && (this.return = void 0)
        }
        u.prototype[typeof Symbol == "function" && Symbol.asyncIterator || "@@asyncIterator"] = function() {
            return this
        }
        ,
        u.prototype.next = function(f) {
            return this._invoke("next", f)
        }
        ,
        u.prototype.throw = function(f) {
            return this._invoke("throw", f)
        }
        ,
        u.prototype.return = function(f) {
            return this._invoke("return", f)
        }
        ,
        r.exports = s,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
});
Ft(yS(), 1);
Ft(vS(), 1);
Ft(gS(), 1);
Ft(dn(), 1);
function bS(n) {
    return xo( ({path: r, args: l}) => {
        var s;
        const u = [...r]
          , f = u.pop();
        if (f === "useMutation")
            return n[f](u, ...l);
        if (f === "_def")
            return {
                path: u
            };
        const [d,...h] = l
          , m = (s = h[0]) !== null && s !== void 0 ? s : {};
        return n[f](u, d, m)
    }
    )
}
var Fc;
const xS = ["client", "ssrContext", "ssrState", "abortOnUnmount"]
  , SS = (Fc = C.createContext) === null || Fc === void 0 ? void 0 : Fc.call(mv, null)
  , wS = n => {
    switch (n) {
    case "queryOptions":
    case "fetch":
    case "ensureData":
    case "prefetch":
    case "getData":
    case "setData":
    case "setQueriesData":
        return "query";
    case "infiniteQueryOptions":
    case "fetchInfinite":
    case "prefetchInfinite":
    case "getInfiniteData":
    case "setInfiniteData":
        return "infinite";
    case "setMutationDefaults":
    case "getMutationDefaults":
    case "isMutating":
    case "cancel":
    case "invalidate":
    case "refetch":
    case "reset":
        return "any"
    }
}
;
function ES(n) {
    return xo(r => {
        const l = [...r.path]
          , s = l.pop()
          , u = [...r.args]
          , f = u.shift()
          , d = wS(s)
          , h = wn(l, f, d);
        return {
            infiniteQueryOptions: () => n.infiniteQueryOptions(l, h, u[0]),
            queryOptions: () => n.queryOptions(l, h, ...u),
            fetch: () => n.fetchQuery(h, ...u),
            fetchInfinite: () => n.fetchInfiniteQuery(h, u[0]),
            prefetch: () => n.prefetchQuery(h, ...u),
            prefetchInfinite: () => n.prefetchInfiniteQuery(h, u[0]),
            ensureData: () => n.ensureQueryData(h, ...u),
            invalidate: () => n.invalidateQueries(h, ...u),
            reset: () => n.resetQueries(h, ...u),
            refetch: () => n.refetchQueries(h, ...u),
            cancel: () => n.cancelQuery(h, ...u),
            setData: () => {
                n.setQueryData(h, u[0], u[1])
            }
            ,
            setQueriesData: () => n.setQueriesData(h, u[0], u[1], u[2]),
            setInfiniteData: () => {
                n.setInfiniteQueryData(h, u[0], u[1])
            }
            ,
            getData: () => n.getQueryData(h),
            getInfiniteData: () => n.getInfiniteQueryData(h),
            setMutationDefaults: () => n.setMutationDefaults(ao(l), f),
            getMutationDefaults: () => n.getMutationDefaults(ao(l)),
            isMutating: () => n.isMutating({
                mutationKey: ao(l)
            })
        }[s]()
    }
    )
}
function OS(n) {
    const r = Pv(n.client)
      , l = ES(n);
    return Yf(s => {
        const u = s;
        return u === "client" ? r : xS.includes(u) ? n[u] : l[s]
    }
    )
}
var _S = mr(Ml(), 1);
function my(n) {
    const r = n instanceof wo ? n : Vf(n);
    return xo(l => {
        const s = l.path
          , u = s.join(".")
          , [f,d] = l.args;
        return (0,
        _S.default)({
            queryKey: wn(s, f, "query"),
            queryFn: () => r.query(u, f, d?.trpc)
        }, d)
    }
    )
}
var Ic = mr(Ml(), 1);
function we(n, r, l) {
    var s;
    const u = n[0];
    let f = (s = n[1]) === null || s === void 0 ? void 0 : s.input;
    if (l) {
        var d;
        f = (0,
        Ic.default)((0,
        Ic.default)((0,
        Ic.default)({}, (d = f) !== null && d !== void 0 ? d : {}), l.pageParam ? {
            cursor: l.pageParam
        } : {}), {}, {
            direction: l.direction
        })
    }
    return [u.join("."), f, r?.trpc]
}
var AS = Ua({
    "../../node_modules/.pnpm/@oxc-project+runtime@0.72.2/node_modules/@oxc-project/runtime/src/helpers/asyncIterator.js"(n, r) {
        function l(u) {
            var f, d, h, m = 2;
            for (typeof Symbol < "u" && (d = Symbol.asyncIterator,
            h = Symbol.iterator); m--; ) {
                if (d && (f = u[d]) != null)
                    return f.call(u);
                if (h && (f = u[h]) != null)
                    return new s(f.call(u));
                d = "@@asyncIterator",
                h = "@@iterator"
            }
            throw new TypeError("Object is not async iterable")
        }
        function s(u) {
            function f(d) {
                if (Object(d) !== d)
                    return Promise.reject(new TypeError(d + " is not an object."));
                var h = d.done;
                return Promise.resolve(d.value).then(function(m) {
                    return {
                        value: m,
                        done: h
                    }
                })
            }
            return s = function(h) {
                this.s = h,
                this.n = h.next
            }
            ,
            s.prototype = {
                s: null,
                n: null,
                next: function() {
                    return f(this.n.apply(this.s, arguments))
                },
                return: function(h) {
                    var m = this.s.return;
                    return m === void 0 ? Promise.resolve({
                        value: h,
                        done: !0
                    }) : f(m.apply(this.s, arguments))
                },
                throw: function(h) {
                    var m = this.s.return;
                    return m === void 0 ? Promise.reject(h) : f(m.apply(this.s, arguments))
                }
            },
            new s(u)
        }
        r.exports = l,
        r.exports.__esModule = !0,
        r.exports.default = r.exports
    }
})
  , TS = mr(AS(), 1);
function xf(n) {
    return {
        path: n.path.join(".")
    }
}
function ml(n) {
    const r = xf(n);
    return C.useMemo( () => r, [r])
}
async function Gv(n, r, l) {
    const u = r.getQueryCache().build(r, {
        queryKey: l
    });
    u.setState({
        data: [],
        status: "success"
    });
    const f = [];
    var d = !1, h = !1, m;
    try {
        for (var y = (0,
        TS.default)(n), b; d = !(b = await y.next()).done; d = !1) {
            const v = b.value;
            f.push(v),
            u.setState({
                data: [...f]
            })
        }
    } catch (v) {
        h = !0,
        m = v
    } finally {
        try {
            d && y.return != null && await y.return()
        } finally {
            if (h)
                throw m
        }
    }
    return f
}
var Dt = mr(Ml(), 1);
function CS(n) {
    const {client: r, queryClient: l} = n
      , s = r instanceof wo ? r : Vf(r);
    return {
        infiniteQueryOptions: (u, f, d) => {
            var h, m;
            const y = ((h = f[1]) === null || h === void 0 ? void 0 : h.input) === Ye
              , b = async v => {
                var x;
                const _ = (0,
                Dt.default)((0,
                Dt.default)({}, d), {}, {
                    trpc: (0,
                    Dt.default)((0,
                    Dt.default)({}, d?.trpc), !(d == null || (x = d.trpc) === null || x === void 0) && x.abortOnUnmount ? {
                        signal: v.signal
                    } : {
                        signal: null
                    })
                });
                return await s.query(...we(f, _, {
                    direction: v.direction,
                    pageParam: v.pageParam
                }))
            }
            ;
            return Object.assign((0,
            Dt.default)((0,
            Dt.default)({}, d), {}, {
                initialData: d?.initialData,
                queryKey: f,
                queryFn: y ? Ye : b,
                initialPageParam: (m = d?.initialCursor) !== null && m !== void 0 ? m : null
            }), {
                trpc: xf({
                    path: u
                })
            })
        }
        ,
        queryOptions: (u, f, d) => {
            var h;
            const m = ((h = f[1]) === null || h === void 0 ? void 0 : h.input) === Ye
              , y = async b => {
                var v;
                const x = (0,
                Dt.default)((0,
                Dt.default)({}, d), {}, {
                    trpc: (0,
                    Dt.default)((0,
                    Dt.default)({}, d?.trpc), !(d == null || (v = d.trpc) === null || v === void 0) && v.abortOnUnmount ? {
                        signal: b.signal
                    } : {
                        signal: null
                    })
                })
                  , _ = await s.query(...we(f, x));
                return _v(_) ? Gv(_, l, f) : _
            }
            ;
            return Object.assign((0,
            Dt.default)((0,
            Dt.default)({}, d), {}, {
                initialData: d?.initialData,
                queryKey: f,
                queryFn: m ? Ye : y
            }), {
                trpc: xf({
                    path: u
                })
            })
        }
        ,
        fetchQuery: (u, f) => l.fetchQuery((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u,
            queryFn: () => s.query(...we(u, f))
        })),
        fetchInfiniteQuery: (u, f) => {
            var d;
            return l.fetchInfiniteQuery((0,
            Dt.default)((0,
            Dt.default)({}, f), {}, {
                queryKey: u,
                queryFn: ({pageParam: h, direction: m}) => s.query(...we(u, f, {
                    pageParam: h,
                    direction: m
                })),
                initialPageParam: (d = f?.initialCursor) !== null && d !== void 0 ? d : null
            }))
        }
        ,
        prefetchQuery: (u, f) => l.prefetchQuery((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u,
            queryFn: () => s.query(...we(u, f))
        })),
        prefetchInfiniteQuery: (u, f) => {
            var d;
            return l.prefetchInfiniteQuery((0,
            Dt.default)((0,
            Dt.default)({}, f), {}, {
                queryKey: u,
                queryFn: ({pageParam: h, direction: m}) => s.query(...we(u, f, {
                    pageParam: h,
                    direction: m
                })),
                initialPageParam: (d = f?.initialCursor) !== null && d !== void 0 ? d : null
            }))
        }
        ,
        ensureQueryData: (u, f) => l.ensureQueryData((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u,
            queryFn: () => s.query(...we(u, f))
        })),
        invalidateQueries: (u, f, d) => l.invalidateQueries((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u
        }), d),
        resetQueries: (u, f, d) => l.resetQueries((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u
        }), d),
        refetchQueries: (u, f, d) => l.refetchQueries((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u
        }), d),
        cancelQuery: (u, f) => l.cancelQueries({
            queryKey: u
        }, f),
        setQueryData: (u, f, d) => l.setQueryData(u, f, d),
        setQueriesData: (u, f, d, h) => l.setQueriesData((0,
        Dt.default)((0,
        Dt.default)({}, f), {}, {
            queryKey: u
        }), d, h),
        getQueryData: u => l.getQueryData(u),
        setInfiniteQueryData: (u, f, d) => l.setQueryData(u, f, d),
        getInfiniteQueryData: u => l.getQueryData(u),
        setMutationDefaults: (u, f) => {
            const d = u[0]
              , h = m => s.mutation(...we([d, {
                input: m
            }], n));
            return l.setMutationDefaults(u, typeof f == "function" ? f({
                canonicalMutationFn: h
            }) : f)
        }
        ,
        getMutationDefaults: u => l.getMutationDefaults(u),
        isMutating: u => l.isMutating((0,
        Dt.default)((0,
        Dt.default)({}, u), {}, {
            exact: !0
        }))
    }
}
var lt = mr(Ml());
const py = (n, r) => new Proxy(n,{
    get(s, u) {
        return r(u),
        s[u]
    }
});
function RS(n) {
    var r, l;
    const s = (r = void 0) !== null && r !== void 0 ? r : X => X.originalFn()
      , u = (l = void 0) !== null && l !== void 0 ? l : SS
      , f = mS
      , d = X => {
        var Z;
        const {abortOnUnmount: M=!1, queryClient: H, ssrContext: $} = X
          , [W,at] = C.useState((Z = X.ssrState) !== null && Z !== void 0 ? Z : !1)
          , tt = X.client instanceof wo ? X.client : Vf(X.client)
          , st = C.useMemo( () => CS({
            client: tt,
            queryClient: H
        }), [tt, H])
          , it = C.useMemo( () => (0,
        lt.default)({
            abortOnUnmount: M,
            queryClient: H,
            client: tt,
            ssrContext: $ ?? null,
            ssrState: W
        }, st), [M, tt, st, H, $, W]);
        return C.useEffect( () => {
            at(ut => ut ? "mounted" : !1)
        }
        , []),
        O.jsx(u.Provider, {
            value: it,
            children: X.children
        })
    }
    ;
    function h() {
        const X = C.useContext(u);
        if (!X)
            throw new Error("Unable to find tRPC Context. Did you forget to wrap your App inside `withTRPC` HoC?");
        return X
    }
    function m(X, Z) {
        var M;
        const {queryClient: H, ssrState: $} = h();
        return $ && $ !== "mounted" && ((M = H.getQueryCache().find({
            queryKey: X
        })) === null || M === void 0 ? void 0 : M.state.status) === "error" ? (0,
        lt.default)({
            retryOnMount: !1
        }, Z) : Z
    }
    function y(X, Z, M) {
        var H, $, W, at, tt;
        const st = h()
          , {abortOnUnmount: it, client: ut, ssrState: A, queryClient: Q, prefetchQuery: D} = st
          , rt = wn(X, Z, "query")
          , ht = Q.getQueryDefaults(rt)
          , w = Z === Ye;
        typeof window > "u" && A === "prepass" && (M == null || (H = M.trpc) === null || H === void 0 ? void 0 : H.ssr) !== !1 && (($ = M?.enabled) !== null && $ !== void 0 ? $ : ht?.enabled) !== !1 && !w && !Q.getQueryCache().find({
            queryKey: rt
        }) && D(rt, M);
        const P = m(rt, (0,
        lt.default)((0,
        lt.default)({}, ht), M))
          , q = (W = (at = M == null || (tt = M.trpc) === null || tt === void 0 ? void 0 : tt.abortOnUnmount) !== null && at !== void 0 ? at : void 0) !== null && W !== void 0 ? W : it
          , Y = n1((0,
        lt.default)((0,
        lt.default)({}, P), {}, {
            queryKey: rt,
            queryFn: w ? Z : async F => {
                const mt = (0,
                lt.default)((0,
                lt.default)({}, P), {}, {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, P?.trpc), q ? {
                        signal: F.signal
                    } : {
                        signal: null
                    })
                })
                  , ot = await ut.query(...we(rt, mt));
                return _v(ot) ? Gv(ot, Q, rt) : ot
            }
        }), Q);
        return Y.trpc = ml({
            path: X
        }),
        Y
    }
    function b(X, Z, M) {
        var H, $, W;
        const at = h()
          , tt = wn(X, Z, "query")
          , st = Z === Ye
          , it = (H = ($ = M == null || (W = M.trpc) === null || W === void 0 ? void 0 : W.abortOnUnmount) !== null && $ !== void 0 ? $ : void 0) !== null && H !== void 0 ? H : at.abortOnUnmount;
        l1((0,
        lt.default)((0,
        lt.default)({}, M), {}, {
            queryKey: tt,
            queryFn: st ? Z : ut => {
                const A = {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, M?.trpc), it ? {
                        signal: ut.signal
                    } : {})
                };
                return at.client.query(...we(tt, A))
            }
        }))
    }
    function v(X, Z, M) {
        var H, $, W;
        const at = h()
          , tt = wn(X, Z, "query")
          , st = (H = ($ = M == null || (W = M.trpc) === null || W === void 0 ? void 0 : W.abortOnUnmount) !== null && $ !== void 0 ? $ : void 0) !== null && H !== void 0 ? H : at.abortOnUnmount
          , it = a1((0,
        lt.default)((0,
        lt.default)({}, M), {}, {
            queryKey: tt,
            queryFn: ut => {
                const A = (0,
                lt.default)((0,
                lt.default)({}, M), {}, {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, M?.trpc), st ? {
                        signal: ut.signal
                    } : {
                        signal: null
                    })
                });
                return at.client.query(...we(tt, A))
            }
        }), at.queryClient);
        return it.trpc = ml({
            path: X
        }),
        [it.data, it]
    }
    function x(X, Z) {
        const {client: M, queryClient: H} = h()
          , $ = ao(X)
          , W = H.defaultMutationOptions(H.getMutationDefaults($))
          , at = o1((0,
        lt.default)((0,
        lt.default)({}, Z), {}, {
            mutationKey: $,
            mutationFn: tt => M.mutation(...we([X, {
                input: tt
            }], Z)),
            onSuccess(...tt) {
                var st, it;
                return s({
                    originalFn: () => {
                        var A, Q, D;
                        return (A = Z == null || (Q = Z.onSuccess) === null || Q === void 0 ? void 0 : Q.call(Z, ...tt)) !== null && A !== void 0 ? A : W == null || (D = W.onSuccess) === null || D === void 0 ? void 0 : D.call(W, ...tt)
                    }
                    ,
                    queryClient: H,
                    meta: (st = (it = Z?.meta) !== null && it !== void 0 ? it : W?.meta) !== null && st !== void 0 ? st : {}
                })
            }
        }), H);
        return at.trpc = ml({
            path: X
        }),
        at
    }
    const _ = {
        data: void 0,
        error: null,
        status: "idle"
    }
      , T = {
        data: void 0,
        error: null,
        status: "connecting"
    };
    /* istanbul ignore next -- @preserve */
    function S(X, Z, M) {
        var H;
        const $ = (H = M?.enabled) !== null && H !== void 0 ? H : Z !== Ye
          , W = ja(wn(X, Z, "any"))
          , {client: at} = h()
          , tt = C.useRef(M);
        C.useEffect( () => {
            tt.current = M
        }
        );
        const [st] = C.useState(new Set([]))
          , it = C.useCallback(w => {
            st.add(w)
        }
        , [st])
          , ut = C.useRef(null)
          , A = C.useCallback(w => {
            const P = D.current
              , q = D.current = w(P);
            let Y = !1;
            for (const F of st)
                if (P[F] !== q[F]) {
                    Y = !0;
                    break
                }
            Y && ht(py(q, it))
        }
        , [it, st])
          , Q = C.useCallback( () => {
            var w;
            if ((w = ut.current) === null || w === void 0 || w.unsubscribe(),
            !$) {
                A( () => (0,
                lt.default)((0,
                lt.default)({}, _), {}, {
                    reset: Q
                }));
                return
            }
            A( () => (0,
            lt.default)((0,
            lt.default)({}, T), {}, {
                reset: Q
            }));
            const P = at.subscription(X.join("."), Z ?? void 0, {
                onStarted: () => {
                    var q, Y;
                    (q = (Y = tt.current).onStarted) === null || q === void 0 || q.call(Y),
                    A(F => (0,
                    lt.default)((0,
                    lt.default)({}, F), {}, {
                        status: "pending",
                        error: null
                    }))
                }
                ,
                onData: q => {
                    var Y, F;
                    (Y = (F = tt.current).onData) === null || Y === void 0 || Y.call(F, q),
                    A(mt => (0,
                    lt.default)((0,
                    lt.default)({}, mt), {}, {
                        status: "pending",
                        data: q,
                        error: null
                    }))
                }
                ,
                onError: q => {
                    var Y, F;
                    (Y = (F = tt.current).onError) === null || Y === void 0 || Y.call(F, q),
                    A(mt => (0,
                    lt.default)((0,
                    lt.default)({}, mt), {}, {
                        status: "error",
                        error: q
                    }))
                }
                ,
                onConnectionStateChange: q => {
                    A(Y => {
                        switch (q.state) {
                        case "idle":
                            return (0,
                            lt.default)((0,
                            lt.default)({}, Y), {}, {
                                status: q.state,
                                error: null,
                                data: void 0
                            });
                        case "connecting":
                            return (0,
                            lt.default)((0,
                            lt.default)({}, Y), {}, {
                                error: q.error,
                                status: q.state
                            });
                        case "pending":
                            return Y
                        }
                    }
                    )
                }
                ,
                onComplete: () => {
                    var q, Y;
                    (q = (Y = tt.current).onComplete) === null || q === void 0 || q.call(Y),
                    A(F => (0,
                    lt.default)((0,
                    lt.default)({}, F), {}, {
                        status: "idle",
                        error: null,
                        data: void 0
                    }))
                }
            });
            ut.current = P
        }
        , [at, W, $, A]);
        C.useEffect( () => (Q(),
        () => {
            var w;
            (w = ut.current) === null || w === void 0 || w.unsubscribe()
        }
        ), [Q]);
        const D = C.useRef($ ? (0,
        lt.default)((0,
        lt.default)({}, T), {}, {
            reset: Q
        }) : (0,
        lt.default)((0,
        lt.default)({}, _), {}, {
            reset: Q
        }))
          , [rt,ht] = C.useState(py(D.current, it));
        return rt
    }
    function U(X, Z, M) {
        var H, $, W, at, tt;
        const {client: st, ssrState: it, prefetchInfiniteQuery: ut, queryClient: A, abortOnUnmount: Q} = h()
          , D = wn(X, Z, "infinite")
          , rt = A.getQueryDefaults(D)
          , ht = Z === Ye;
        typeof window > "u" && it === "prepass" && (M == null || (H = M.trpc) === null || H === void 0 ? void 0 : H.ssr) !== !1 && (($ = M?.enabled) !== null && $ !== void 0 ? $ : rt?.enabled) !== !1 && !ht && !A.getQueryCache().find({
            queryKey: D
        }) && ut(D, (0,
        lt.default)((0,
        lt.default)({}, rt), M));
        const w = m(D, (0,
        lt.default)((0,
        lt.default)({}, rt), M))
          , P = (W = M == null || (at = M.trpc) === null || at === void 0 ? void 0 : at.abortOnUnmount) !== null && W !== void 0 ? W : Q
          , q = u1((0,
        lt.default)((0,
        lt.default)({}, w), {}, {
            initialPageParam: (tt = M.initialCursor) !== null && tt !== void 0 ? tt : null,
            persister: M.persister,
            queryKey: D,
            queryFn: ht ? Z : Y => {
                var F;
                const mt = (0,
                lt.default)((0,
                lt.default)({}, w), {}, {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, w?.trpc), P ? {
                        signal: Y.signal
                    } : {
                        signal: null
                    })
                });
                return st.query(...we(D, mt, {
                    pageParam: (F = Y.pageParam) !== null && F !== void 0 ? F : M.initialCursor,
                    direction: Y.direction
                }))
            }
        }), A);
        return q.trpc = ml({
            path: X
        }),
        q
    }
    function B(X, Z, M) {
        var H, $, W;
        const at = h()
          , tt = wn(X, Z, "infinite")
          , st = at.queryClient.getQueryDefaults(tt)
          , it = Z === Ye
          , ut = m(tt, (0,
        lt.default)((0,
        lt.default)({}, st), M))
          , A = (H = M == null || ($ = M.trpc) === null || $ === void 0 ? void 0 : $.abortOnUnmount) !== null && H !== void 0 ? H : at.abortOnUnmount;
        s1((0,
        lt.default)((0,
        lt.default)({}, M), {}, {
            initialPageParam: (W = M.initialCursor) !== null && W !== void 0 ? W : null,
            queryKey: tt,
            queryFn: it ? Z : Q => {
                var D;
                const rt = (0,
                lt.default)((0,
                lt.default)({}, ut), {}, {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, ut?.trpc), A ? {
                        signal: Q.signal
                    } : {})
                });
                return at.client.query(...we(tt, rt, {
                    pageParam: (D = Q.pageParam) !== null && D !== void 0 ? D : M.initialCursor,
                    direction: Q.direction
                }))
            }
        }))
    }
    function J(X, Z, M) {
        var H, $, W;
        const at = h()
          , tt = wn(X, Z, "infinite")
          , st = at.queryClient.getQueryDefaults(tt)
          , it = m(tt, (0,
        lt.default)((0,
        lt.default)({}, st), M))
          , ut = (H = M == null || ($ = M.trpc) === null || $ === void 0 ? void 0 : $.abortOnUnmount) !== null && H !== void 0 ? H : at.abortOnUnmount
          , A = r1((0,
        lt.default)((0,
        lt.default)({}, M), {}, {
            initialPageParam: (W = M.initialCursor) !== null && W !== void 0 ? W : null,
            queryKey: tt,
            queryFn: Q => {
                var D;
                const rt = (0,
                lt.default)((0,
                lt.default)({}, it), {}, {
                    trpc: (0,
                    lt.default)((0,
                    lt.default)({}, it?.trpc), ut ? {
                        signal: Q.signal
                    } : {})
                });
                return at.client.query(...we(tt, rt, {
                    pageParam: (D = Q.pageParam) !== null && D !== void 0 ? D : M.initialCursor,
                    direction: Q.direction
                }))
            }
        }), at.queryClient);
        return A.trpc = ml({
            path: X
        }),
        [A.data, A]
    }
    return {
        Provider: d,
        createClient: f,
        useContext: h,
        useUtils: h,
        useQuery: y,
        usePrefetchQuery: b,
        useSuspenseQuery: v,
        useQueries: (X, Z) => {
            const {ssrState: M, queryClient: H, prefetchQuery: $, client: W} = h()
              , at = my(W)
              , tt = X(at);
            if (typeof window > "u" && M === "prepass")
                for (const it of tt) {
                    var st;
                    const ut = it;
                    ((st = ut.trpc) === null || st === void 0 ? void 0 : st.ssr) !== !1 && !H.getQueryCache().find({
                        queryKey: ut.queryKey
                    }) && $(ut.queryKey, ut)
                }
            return Ov({
                queries: tt.map(it => (0,
                lt.default)((0,
                lt.default)({}, it), {}, {
                    queryKey: it.queryKey
                })),
                combine: Z?.combine
            }, H)
        }
        ,
        useSuspenseQueries: X => {
            const {queryClient: Z, client: M} = h()
              , H = my(M)
              , $ = X(H)
              , W = i1({
                queries: $.map(at => (0,
                lt.default)((0,
                lt.default)({}, at), {}, {
                    queryFn: at.queryFn,
                    queryKey: at.queryKey
                }))
            }, Z);
            return [W.map(at => at.data), W]
        }
        ,
        useMutation: x,
        useSubscription: S,
        useInfiniteQuery: U,
        usePrefetchInfiniteQuery: B,
        useSuspenseInfiniteQuery: J
    }
}
function MS(n) {
    const r = bS(n);
    return Yf(l => l === "useContext" || l === "useUtils" ? () => {
        const s = n.useUtils();
        return C.useMemo( () => OS(s), [s])
    }
    : n.hasOwnProperty(l) ? n[l] : r[l])
}
function jS(n) {
    const r = RS();
    return MS(r)
}
const Ge = jS();
var $c = {
    exports: {}
}
  , pl = {}
  , Wc = {
    exports: {}
}
  , tf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yy;
function DS() {
    return yy || (yy = 1,
    (function(n) {
        function r(A, Q) {
            var D = A.length;
            A.push(Q);
            t: for (; 0 < D; ) {
                var rt = D - 1 >>> 1
                  , ht = A[rt];
                if (0 < u(ht, Q))
                    A[rt] = Q,
                    A[D] = ht,
                    D = rt;
                else
                    break t
            }
        }
        function l(A) {
            return A.length === 0 ? null : A[0]
        }
        function s(A) {
            if (A.length === 0)
                return null;
            var Q = A[0]
              , D = A.pop();
            if (D !== Q) {
                A[0] = D;
                t: for (var rt = 0, ht = A.length, w = ht >>> 1; rt < w; ) {
                    var P = 2 * (rt + 1) - 1
                      , q = A[P]
                      , Y = P + 1
                      , F = A[Y];
                    if (0 > u(q, D))
                        Y < ht && 0 > u(F, q) ? (A[rt] = F,
                        A[Y] = D,
                        rt = Y) : (A[rt] = q,
                        A[P] = D,
                        rt = P);
                    else if (Y < ht && 0 > u(F, D))
                        A[rt] = F,
                        A[Y] = D,
                        rt = Y;
                    else
                        break t
                }
            }
            return Q
        }
        function u(A, Q) {
            var D = A.sortIndex - Q.sortIndex;
            return D !== 0 ? D : A.id - Q.id
        }
        if (n.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
            var f = performance;
            n.unstable_now = function() {
                return f.now()
            }
        } else {
            var d = Date
              , h = d.now();
            n.unstable_now = function() {
                return d.now() - h
            }
        }
        var m = []
          , y = []
          , b = 1
          , v = null
          , x = 3
          , _ = !1
          , T = !1
          , S = !1
          , U = !1
          , B = typeof setTimeout == "function" ? setTimeout : null
          , J = typeof clearTimeout == "function" ? clearTimeout : null
          , I = typeof setImmediate < "u" ? setImmediate : null;
        function nt(A) {
            for (var Q = l(y); Q !== null; ) {
                if (Q.callback === null)
                    s(y);
                else if (Q.startTime <= A)
                    s(y),
                    Q.sortIndex = Q.expirationTime,
                    r(m, Q);
                else
                    break;
                Q = l(y)
            }
        }
        function X(A) {
            if (S = !1,
            nt(A),
            !T)
                if (l(m) !== null)
                    T = !0,
                    Z || (Z = !0,
                    tt());
                else {
                    var Q = l(y);
                    Q !== null && ut(X, Q.startTime - A)
                }
        }
        var Z = !1
          , M = -1
          , H = 5
          , $ = -1;
        function W() {
            return U ? !0 : !(n.unstable_now() - $ < H)
        }
        function at() {
            if (U = !1,
            Z) {
                var A = n.unstable_now();
                $ = A;
                var Q = !0;
                try {
                    t: {
                        T = !1,
                        S && (S = !1,
                        J(M),
                        M = -1),
                        _ = !0;
                        var D = x;
                        try {
                            e: {
                                for (nt(A),
                                v = l(m); v !== null && !(v.expirationTime > A && W()); ) {
                                    var rt = v.callback;
                                    if (typeof rt == "function") {
                                        v.callback = null,
                                        x = v.priorityLevel;
                                        var ht = rt(v.expirationTime <= A);
                                        if (A = n.unstable_now(),
                                        typeof ht == "function") {
                                            v.callback = ht,
                                            nt(A),
                                            Q = !0;
                                            break e
                                        }
                                        v === l(m) && s(m),
                                        nt(A)
                                    } else
                                        s(m);
                                    v = l(m)
                                }
                                if (v !== null)
                                    Q = !0;
                                else {
                                    var w = l(y);
                                    w !== null && ut(X, w.startTime - A),
                                    Q = !1
                                }
                            }
                            break t
                        } finally {
                            v = null,
                            x = D,
                            _ = !1
                        }
                        Q = void 0
                    }
                } finally {
                    Q ? tt() : Z = !1
                }
            }
        }
        var tt;
        if (typeof I == "function")
            tt = function() {
                I(at)
            }
            ;
        else if (typeof MessageChannel < "u") {
            var st = new MessageChannel
              , it = st.port2;
            st.port1.onmessage = at,
            tt = function() {
                it.postMessage(null)
            }
        } else
            tt = function() {
                B(at, 0)
            }
            ;
        function ut(A, Q) {
            M = B(function() {
                A(n.unstable_now())
            }, Q)
        }
        n.unstable_IdlePriority = 5,
        n.unstable_ImmediatePriority = 1,
        n.unstable_LowPriority = 4,
        n.unstable_NormalPriority = 3,
        n.unstable_Profiling = null,
        n.unstable_UserBlockingPriority = 2,
        n.unstable_cancelCallback = function(A) {
            A.callback = null
        }
        ,
        n.unstable_forceFrameRate = function(A) {
            0 > A || 125 < A ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < A ? Math.floor(1e3 / A) : 5
        }
        ,
        n.unstable_getCurrentPriorityLevel = function() {
            return x
        }
        ,
        n.unstable_next = function(A) {
            switch (x) {
            case 1:
            case 2:
            case 3:
                var Q = 3;
                break;
            default:
                Q = x
            }
            var D = x;
            x = Q;
            try {
                return A()
            } finally {
                x = D
            }
        }
        ,
        n.unstable_requestPaint = function() {
            U = !0
        }
        ,
        n.unstable_runWithPriority = function(A, Q) {
            switch (A) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                A = 3
            }
            var D = x;
            x = A;
            try {
                return Q()
            } finally {
                x = D
            }
        }
        ,
        n.unstable_scheduleCallback = function(A, Q, D) {
            var rt = n.unstable_now();
            switch (typeof D == "object" && D !== null ? (D = D.delay,
            D = typeof D == "number" && 0 < D ? rt + D : rt) : D = rt,
            A) {
            case 1:
                var ht = -1;
                break;
            case 2:
                ht = 250;
                break;
            case 5:
                ht = 1073741823;
                break;
            case 4:
                ht = 1e4;
                break;
            default:
                ht = 5e3
            }
            return ht = D + ht,
            A = {
                id: b++,
                callback: Q,
                priorityLevel: A,
                startTime: D,
                expirationTime: ht,
                sortIndex: -1
            },
            D > rt ? (A.sortIndex = D,
            r(y, A),
            l(m) === null && A === l(y) && (S ? (J(M),
            M = -1) : S = !0,
            ut(X, D - rt))) : (A.sortIndex = ht,
            r(m, A),
            T || _ || (T = !0,
            Z || (Z = !0,
            tt()))),
            A
        }
        ,
        n.unstable_shouldYield = W,
        n.unstable_wrapCallback = function(A) {
            var Q = x;
            return function() {
                var D = x;
                x = Q;
                try {
                    return A.apply(this, arguments)
                } finally {
                    x = D
                }
            }
        }
    }
    )(tf)),
    tf
}
var vy;
function NS() {
    return vy || (vy = 1,
    Wc.exports = DS()),
    Wc.exports
}
var ef = {
    exports: {}
}
  , pe = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gy;
function zS() {
    if (gy)
        return pe;
    gy = 1;
    var n = vo();
    function r(m) {
        var y = "https://react.dev/errors/" + m;
        if (1 < arguments.length) {
            y += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var b = 2; b < arguments.length; b++)
                y += "&args[]=" + encodeURIComponent(arguments[b])
        }
        return "Minified React error #" + m + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function l() {}
    var s = {
        d: {
            f: l,
            r: function() {
                throw Error(r(522))
            },
            D: l,
            C: l,
            L: l,
            m: l,
            X: l,
            S: l,
            M: l
        },
        p: 0,
        findDOMNode: null
    }
      , u = Symbol.for("react.portal");
    function f(m, y, b) {
        var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: m,
            containerInfo: y,
            implementation: b
        }
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(m, y) {
        if (m === "font")
            return "";
        if (typeof y == "string")
            return y === "use-credentials" ? y : ""
    }
    return pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s,
    pe.createPortal = function(m, y) {
        var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
        if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
            throw Error(r(299));
        return f(m, y, null, b)
    }
    ,
    pe.flushSync = function(m) {
        var y = d.T
          , b = s.p;
        try {
            if (d.T = null,
            s.p = 2,
            m)
                return m()
        } finally {
            d.T = y,
            s.p = b,
            s.d.f()
        }
    }
    ,
    pe.preconnect = function(m, y) {
        typeof m == "string" && (y ? (y = y.crossOrigin,
        y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null,
        s.d.C(m, y))
    }
    ,
    pe.prefetchDNS = function(m) {
        typeof m == "string" && s.d.D(m)
    }
    ,
    pe.preinit = function(m, y) {
        if (typeof m == "string" && y && typeof y.as == "string") {
            var b = y.as
              , v = h(b, y.crossOrigin)
              , x = typeof y.integrity == "string" ? y.integrity : void 0
              , _ = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
            b === "style" ? s.d.S(m, typeof y.precedence == "string" ? y.precedence : void 0, {
                crossOrigin: v,
                integrity: x,
                fetchPriority: _
            }) : b === "script" && s.d.X(m, {
                crossOrigin: v,
                integrity: x,
                fetchPriority: _,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0
            })
        }
    }
    ,
    pe.preinitModule = function(m, y) {
        if (typeof m == "string")
            if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = h(y.as, y.crossOrigin);
                    s.d.M(m, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    })
                }
            } else
                y == null && s.d.M(m)
    }
    ,
    pe.preload = function(m, y) {
        if (typeof m == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
            var b = y.as
              , v = h(b, y.crossOrigin);
            s.d.L(m, b, {
                crossOrigin: v,
                integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                type: typeof y.type == "string" ? y.type : void 0,
                fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                media: typeof y.media == "string" ? y.media : void 0
            })
        }
    }
    ,
    pe.preloadModule = function(m, y) {
        if (typeof m == "string")
            if (y) {
                var b = h(y.as, y.crossOrigin);
                s.d.m(m, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                })
            } else
                s.d.m(m)
    }
    ,
    pe.requestFormReset = function(m) {
        s.d.r(m)
    }
    ,
    pe.unstable_batchedUpdates = function(m, y) {
        return m(y)
    }
    ,
    pe.useFormState = function(m, y, b) {
        return d.H.useFormState(m, y, b)
    }
    ,
    pe.useFormStatus = function() {
        return d.H.useHostTransitionStatus()
    }
    ,
    pe.version = "19.2.1",
    pe
}
var by;
function Vv() {
    if (by)
        return ef.exports;
    by = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    ef.exports = zS(),
    ef.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xy;
function US() {
    if (xy)
        return pl;
    xy = 1;
    var n = NS()
      , r = vo()
      , l = Vv();
    function s(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var a = 2; a < arguments.length; a++)
                e += "&args[]=" + encodeURIComponent(arguments[a])
        }
        return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    }
    function u(t) {
        return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
    }
    function f(t) {
        var e = t
          , a = t;
        if (t.alternate)
            for (; e.return; )
                e = e.return;
        else {
            t = e;
            do
                e = t,
                (e.flags & 4098) !== 0 && (a = e.return),
                t = e.return;
            while (t)
        }
        return e.tag === 3 ? a : null
    }
    function d(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function h(t) {
        if (t.tag === 31) {
            var e = t.memoizedState;
            if (e === null && (t = t.alternate,
            t !== null && (e = t.memoizedState)),
            e !== null)
                return e.dehydrated
        }
        return null
    }
    function m(t) {
        if (f(t) !== t)
            throw Error(s(188))
    }
    function y(t) {
        var e = t.alternate;
        if (!e) {
            if (e = f(t),
            e === null)
                throw Error(s(188));
            return e !== t ? null : t
        }
        for (var a = t, i = e; ; ) {
            var o = a.return;
            if (o === null)
                break;
            var c = o.alternate;
            if (c === null) {
                if (i = o.return,
                i !== null) {
                    a = i;
                    continue
                }
                break
            }
            if (o.child === c.child) {
                for (c = o.child; c; ) {
                    if (c === a)
                        return m(o),
                        t;
                    if (c === i)
                        return m(o),
                        e;
                    c = c.sibling
                }
                throw Error(s(188))
            }
            if (a.return !== i.return)
                a = o,
                i = c;
            else {
                for (var p = !1, g = o.child; g; ) {
                    if (g === a) {
                        p = !0,
                        a = o,
                        i = c;
                        break
                    }
                    if (g === i) {
                        p = !0,
                        i = o,
                        a = c;
                        break
                    }
                    g = g.sibling
                }
                if (!p) {
                    for (g = c.child; g; ) {
                        if (g === a) {
                            p = !0,
                            a = c,
                            i = o;
                            break
                        }
                        if (g === i) {
                            p = !0,
                            i = c,
                            a = o;
                            break
                        }
                        g = g.sibling
                    }
                    if (!p)
                        throw Error(s(189))
                }
            }
            if (a.alternate !== i)
                throw Error(s(190))
        }
        if (a.tag !== 3)
            throw Error(s(188));
        return a.stateNode.current === a ? t : e
    }
    function b(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t;
        for (t = t.child; t !== null; ) {
            if (e = b(t),
            e !== null)
                return e;
            t = t.sibling
        }
        return null
    }
    var v = Object.assign
      , x = Symbol.for("react.element")
      , _ = Symbol.for("react.transitional.element")
      , T = Symbol.for("react.portal")
      , S = Symbol.for("react.fragment")
      , U = Symbol.for("react.strict_mode")
      , B = Symbol.for("react.profiler")
      , J = Symbol.for("react.consumer")
      , I = Symbol.for("react.context")
      , nt = Symbol.for("react.forward_ref")
      , X = Symbol.for("react.suspense")
      , Z = Symbol.for("react.suspense_list")
      , M = Symbol.for("react.memo")
      , H = Symbol.for("react.lazy")
      , $ = Symbol.for("react.activity")
      , W = Symbol.for("react.memo_cache_sentinel")
      , at = Symbol.iterator;
    function tt(t) {
        return t === null || typeof t != "object" ? null : (t = at && t[at] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var st = Symbol.for("react.client.reference");
    function it(t) {
        if (t == null)
            return null;
        if (typeof t == "function")
            return t.$$typeof === st ? null : t.displayName || t.name || null;
        if (typeof t == "string")
            return t;
        switch (t) {
        case S:
            return "Fragment";
        case B:
            return "Profiler";
        case U:
            return "StrictMode";
        case X:
            return "Suspense";
        case Z:
            return "SuspenseList";
        case $:
            return "Activity"
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
            case T:
                return "Portal";
            case I:
                return t.displayName || "Context";
            case J:
                return (t._context.displayName || "Context") + ".Consumer";
            case nt:
                var e = t.render;
                return t = t.displayName,
                t || (t = e.displayName || e.name || "",
                t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
                t;
            case M:
                return e = t.displayName || null,
                e !== null ? e : it(t.type) || "Memo";
            case H:
                e = t._payload,
                t = t._init;
                try {
                    return it(t(e))
                } catch {}
            }
        return null
    }
    var ut = Array.isArray
      , A = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , Q = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
      , D = {
        pending: !1,
        data: null,
        method: null,
        action: null
    }
      , rt = []
      , ht = -1;
    function w(t) {
        return {
            current: t
        }
    }
    function P(t) {
        0 > ht || (t.current = rt[ht],
        rt[ht] = null,
        ht--)
    }
    function q(t, e) {
        ht++,
        rt[ht] = t.current,
        t.current = e
    }
    var Y = w(null)
      , F = w(null)
      , mt = w(null)
      , ot = w(null);
    function gt(t, e) {
        switch (q(mt, e),
        q(F, t),
        q(Y, null),
        e.nodeType) {
        case 9:
        case 11:
            t = (t = e.documentElement) && (t = t.namespaceURI) ? bp(t) : 0;
            break;
        default:
            if (t = e.tagName,
            e = e.namespaceURI)
                e = bp(e),
                t = xp(e, t);
            else
                switch (t) {
                case "svg":
                    t = 1;
                    break;
                case "math":
                    t = 2;
                    break;
                default:
                    t = 0
                }
        }
        P(Y),
        q(Y, t)
    }
    function Ct() {
        P(Y),
        P(F),
        P(mt)
    }
    function le(t) {
        t.memoizedState !== null && q(ot, t);
        var e = Y.current
          , a = xp(e, t.type);
        e !== a && (q(F, t),
        q(Y, a))
    }
    function ve(t) {
        F.current === t && (P(Y),
        P(F)),
        ot.current === t && (P(ot),
        ul._currentValue = D)
    }
    var se, Cn;
    function an(t) {
        if (se === void 0)
            try {
                throw Error()
            } catch (a) {
                var e = a.stack.trim().match(/\n( *(at )?)/);
                se = e && e[1] || "",
                Cn = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
            }
        return `
` + se + t + Cn
    }
    var gi = !1;
    function gr(t, e) {
        if (!t || gi)
            return "";
        gi = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var i = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (e) {
                            var K = function() {
                                throw Error()
                            };
                            if (Object.defineProperty(K.prototype, "props", {
                                set: function() {
                                    throw Error()
                                }
                            }),
                            typeof Reflect == "object" && Reflect.construct) {
                                try {
                                    Reflect.construct(K, [])
                                } catch (k) {
                                    var L = k
                                }
                                Reflect.construct(t, [], K)
                            } else {
                                try {
                                    K.call()
                                } catch (k) {
                                    L = k
                                }
                                t.call(K.prototype)
                            }
                        } else {
                            try {
                                throw Error()
                            } catch (k) {
                                L = k
                            }
                            (K = t()) && typeof K.catch == "function" && K.catch(function() {})
                        }
                    } catch (k) {
                        if (k && L && typeof k.stack == "string")
                            return [k.stack, L.stack]
                    }
                    return [null, null]
                }
            };
            i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot, "name");
            o && o.configurable && Object.defineProperty(i.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var c = i.DetermineComponentFrameRoot()
              , p = c[0]
              , g = c[1];
            if (p && g) {
                var E = p.split(`
`)
                  , z = g.split(`
`);
                for (o = i = 0; i < E.length && !E[i].includes("DetermineComponentFrameRoot"); )
                    i++;
                for (; o < z.length && !z[o].includes("DetermineComponentFrameRoot"); )
                    o++;
                if (i === E.length || o === z.length)
                    for (i = E.length - 1,
                    o = z.length - 1; 1 <= i && 0 <= o && E[i] !== z[o]; )
                        o--;
                for (; 1 <= i && 0 <= o; i--,
                o--)
                    if (E[i] !== z[o]) {
                        if (i !== 1 || o !== 1)
                            do
                                if (i--,
                                o--,
                                0 > o || E[i] !== z[o]) {
                                    var G = `
` + E[i].replace(" at new ", " at ");
                                    return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)),
                                    G
                                }
                            while (1 <= i && 0 <= o);
                        break
                    }
            }
        } finally {
            gi = !1,
            Error.prepareStackTrace = a
        }
        return (a = t ? t.displayName || t.name : "") ? an(a) : ""
    }
    function qa(t, e) {
        switch (t.tag) {
        case 26:
        case 27:
        case 5:
            return an(t.type);
        case 16:
            return an("Lazy");
        case 13:
            return t.child !== e && e !== null ? an("Suspense Fallback") : an("Suspense");
        case 19:
            return an("SuspenseList");
        case 0:
        case 15:
            return gr(t.type, !1);
        case 11:
            return gr(t.type.render, !1);
        case 1:
            return gr(t.type, !0);
        case 31:
            return an("Activity");
        default:
            return ""
        }
    }
    function bi(t) {
        try {
            var e = ""
              , a = null;
            do
                e += qa(t, a),
                a = t,
                t = t.return;
            while (t);
            return e
        } catch (i) {
            return `
Error generating stack: ` + i.message + `
` + i.stack
        }
    }
    var ze = Object.prototype.hasOwnProperty
      , xi = n.unstable_scheduleCallback
      , Si = n.unstable_cancelCallback
      , ge = n.unstable_shouldYield
      , ta = n.unstable_requestPaint
      , be = n.unstable_now
      , zo = n.unstable_getCurrentPriorityLevel
      , La = n.unstable_ImmediatePriority
      , Nl = n.unstable_UserBlockingPriority
      , Ha = n.unstable_NormalPriority
      , wi = n.unstable_LowPriority
      , Rn = n.unstable_IdlePriority
      , zl = n.log
      , ea = n.unstable_setDisableYieldValue
      , Qa = null
      , xe = null;
    function rn(t) {
        if (typeof zl == "function" && ea(t),
        xe && typeof xe.setStrictMode == "function")
            try {
                xe.setStrictMode(Qa, t)
            } catch {}
    }
    var he = Math.clz32 ? Math.clz32 : mn
      , Uo = Math.log
      , Ei = Math.LN2;
    function mn(t) {
        return t >>>= 0,
        t === 0 ? 32 : 31 - (Uo(t) / Ei | 0) | 0
    }
    var br = 256
      , xr = 262144
      , Ba = 4194304;
    function pn(t) {
        var e = t & 42;
        if (e !== 0)
            return e;
        switch (t & -t) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
            return 64;
        case 128:
            return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
            return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return t & 62914560;
        case 67108864:
            return 67108864;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 0;
        default:
            return t
        }
    }
    function bt(t, e, a) {
        var i = t.pendingLanes;
        if (i === 0)
            return 0;
        var o = 0
          , c = t.suspendedLanes
          , p = t.pingedLanes;
        t = t.warmLanes;
        var g = i & 134217727;
        return g !== 0 ? (i = g & ~c,
        i !== 0 ? o = pn(i) : (p &= g,
        p !== 0 ? o = pn(p) : a || (a = g & ~t,
        a !== 0 && (o = pn(a))))) : (g = i & ~c,
        g !== 0 ? o = pn(g) : p !== 0 ? o = pn(p) : a || (a = i & ~t,
        a !== 0 && (o = pn(a)))),
        o === 0 ? 0 : e !== 0 && e !== o && (e & c) === 0 && (c = o & -o,
        a = e & -e,
        c >= a || c === 32 && (a & 4194048) !== 0) ? e : o
    }
    function Pt(t, e) {
        return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
    }
    function ae(t, e) {
        switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
            return e + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
        }
    }
    function me() {
        var t = Ba;
        return Ba <<= 1,
        (Ba & 62914560) === 0 && (Ba = 4194304),
        t
    }
    function na(t) {
        for (var e = [], a = 0; 31 > a; a++)
            e.push(t);
        return e
    }
    function Gt(t, e) {
        t.pendingLanes |= e,
        e !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
    }
    function Ee(t, e, a, i, o, c) {
        var p = t.pendingLanes;
        t.pendingLanes = a,
        t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0,
        t.expiredLanes &= a,
        t.entangledLanes &= a,
        t.errorRecoveryDisabledLanes &= a,
        t.shellSuspendCounter = 0;
        var g = t.entanglements
          , E = t.expirationTimes
          , z = t.hiddenUpdates;
        for (a = p & ~a; 0 < a; ) {
            var G = 31 - he(a)
              , K = 1 << G;
            g[G] = 0,
            E[G] = -1;
            var L = z[G];
            if (L !== null)
                for (z[G] = null,
                G = 0; G < L.length; G++) {
                    var k = L[G];
                    k !== null && (k.lane &= -536870913)
                }
            a &= ~K
        }
        i !== 0 && ka(t, i, 0),
        c !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= c & ~(p & ~e))
    }
    function ka(t, e, a) {
        t.pendingLanes |= e,
        t.suspendedLanes &= ~e;
        var i = 31 - he(e);
        t.entangledLanes |= e,
        t.entanglements[i] = t.entanglements[i] | 1073741824 | a & 261930
    }
    function Oe(t, e) {
        var a = t.entangledLanes |= e;
        for (t = t.entanglements; a; ) {
            var i = 31 - he(a)
              , o = 1 << i;
            o & e | t[i] & e && (t[i] |= e),
            a &= ~o
        }
    }
    function _e(t, e) {
        var a = e & -e;
        return a = (a & 42) !== 0 ? 1 : Sr(a),
        (a & (t.suspendedLanes | e)) !== 0 ? 0 : a
    }
    function Sr(t) {
        switch (t) {
        case 2:
            t = 1;
            break;
        case 8:
            t = 4;
            break;
        case 32:
            t = 16;
            break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
            t = 128;
            break;
        case 268435456:
            t = 134217728;
            break;
        default:
            t = 0
        }
        return t
    }
    function ln(t) {
        return t &= -t,
        2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
    }
    function qo() {
        var t = Q.p;
        return t !== 0 ? t : (t = window.event,
        t === void 0 ? 32 : Yp(t.type))
    }
    function id(t, e) {
        var a = Q.p;
        try {
            return Q.p = t,
            e()
        } finally {
            Q.p = a
        }
    }
    var aa = Math.random().toString(36).slice(2)
      , oe = "__reactFiber$" + aa
      , Ae = "__reactProps$" + aa
      , wr = "__reactContainer$" + aa
      , Lo = "__reactEvents$" + aa
      , h0 = "__reactListeners$" + aa
      , m0 = "__reactHandles$" + aa
      , ld = "__reactResources$" + aa
      , Oi = "__reactMarker$" + aa;
    function Ho(t) {
        delete t[oe],
        delete t[Ae],
        delete t[Lo],
        delete t[h0],
        delete t[m0]
    }
    function Er(t) {
        var e = t[oe];
        if (e)
            return e;
        for (var a = t.parentNode; a; ) {
            if (e = a[wr] || a[oe]) {
                if (a = e.alternate,
                e.child !== null || a !== null && a.child !== null)
                    for (t = Tp(t); t !== null; ) {
                        if (a = t[oe])
                            return a;
                        t = Tp(t)
                    }
                return e
            }
            t = a,
            a = t.parentNode
        }
        return null
    }
    function Or(t) {
        if (t = t[oe] || t[wr]) {
            var e = t.tag;
            if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
                return t
        }
        return null
    }
    function _i(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6)
            return t.stateNode;
        throw Error(s(33))
    }
    function _r(t) {
        var e = t[ld];
        return e || (e = t[ld] = {
            hoistableStyles: new Map,
            hoistableScripts: new Map
        }),
        e
    }
    function re(t) {
        t[Oi] = !0
    }
    var sd = new Set
      , od = {};
    function Pa(t, e) {
        Ar(t, e),
        Ar(t + "Capture", e)
    }
    function Ar(t, e) {
        for (od[t] = e,
        t = 0; t < e.length; t++)
            sd.add(e[t])
    }
    var p0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
      , ud = {}
      , cd = {};
    function y0(t) {
        return ze.call(cd, t) ? !0 : ze.call(ud, t) ? !1 : p0.test(t) ? cd[t] = !0 : (ud[t] = !0,
        !1)
    }
    function Ul(t, e, a) {
        if (y0(e))
            if (a === null)
                t.removeAttribute(e);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                    t.removeAttribute(e);
                    return;
                case "boolean":
                    var i = e.toLowerCase().slice(0, 5);
                    if (i !== "data-" && i !== "aria-") {
                        t.removeAttribute(e);
                        return
                    }
                }
                t.setAttribute(e, "" + a)
            }
    }
    function ql(t, e, a) {
        if (a === null)
            t.removeAttribute(e);
        else {
            switch (typeof a) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(e);
                return
            }
            t.setAttribute(e, "" + a)
        }
    }
    function Mn(t, e, a, i) {
        if (i === null)
            t.removeAttribute(a);
        else {
            switch (typeof i) {
            case "undefined":
            case "function":
            case "symbol":
            case "boolean":
                t.removeAttribute(a);
                return
            }
            t.setAttributeNS(e, a, "" + i)
        }
    }
    function Xe(t) {
        switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return t;
        case "object":
            return t;
        default:
            return ""
        }
    }
    function fd(t) {
        var e = t.type;
        return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio")
    }
    function v0(t, e, a) {
        var i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
        if (!t.hasOwnProperty(e) && typeof i < "u" && typeof i.get == "function" && typeof i.set == "function") {
            var o = i.get
              , c = i.set;
            return Object.defineProperty(t, e, {
                configurable: !0,
                get: function() {
                    return o.call(this)
                },
                set: function(p) {
                    a = "" + p,
                    c.call(this, p)
                }
            }),
            Object.defineProperty(t, e, {
                enumerable: i.enumerable
            }),
            {
                getValue: function() {
                    return a
                },
                setValue: function(p) {
                    a = "" + p
                },
                stopTracking: function() {
                    t._valueTracker = null,
                    delete t[e]
                }
            }
        }
    }
    function Qo(t) {
        if (!t._valueTracker) {
            var e = fd(t) ? "checked" : "value";
            t._valueTracker = v0(t, e, "" + t[e])
        }
    }
    function dd(t) {
        if (!t)
            return !1;
        var e = t._valueTracker;
        if (!e)
            return !0;
        var a = e.getValue()
          , i = "";
        return t && (i = fd(t) ? t.checked ? "true" : "false" : t.value),
        t = i,
        t !== a ? (e.setValue(t),
        !0) : !1
    }
    function Ll(t) {
        if (t = t || (typeof document < "u" ? document : void 0),
        typeof t > "u")
            return null;
        try {
            return t.activeElement || t.body
        } catch {
            return t.body
        }
    }
    var g0 = /[\n"\\]/g;
    function Ke(t) {
        return t.replace(g0, function(e) {
            return "\\" + e.charCodeAt(0).toString(16) + " "
        })
    }
    function Bo(t, e, a, i, o, c, p, g) {
        t.name = "",
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.type = p : t.removeAttribute("type"),
        e != null ? p === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : p !== "submit" && p !== "reset" || t.removeAttribute("value"),
        e != null ? ko(t, p, Xe(e)) : a != null ? ko(t, p, Xe(a)) : i != null && t.removeAttribute("value"),
        o == null && c != null && (t.defaultChecked = !!c),
        o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"),
        g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.name = "" + Xe(g) : t.removeAttribute("name")
    }
    function hd(t, e, a, i, o, c, p, g) {
        if (c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (t.type = c),
        e != null || a != null) {
            if (!(c !== "submit" && c !== "reset" || e != null)) {
                Qo(t);
                return
            }
            a = a != null ? "" + Xe(a) : "",
            e = e != null ? "" + Xe(e) : a,
            g || e === t.value || (t.value = e),
            t.defaultValue = e
        }
        i = i ?? o,
        i = typeof i != "function" && typeof i != "symbol" && !!i,
        t.checked = g ? t.checked : !!i,
        t.defaultChecked = !!i,
        p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" && (t.name = p),
        Qo(t)
    }
    function ko(t, e, a) {
        e === "number" && Ll(t.ownerDocument) === t || t.defaultValue === "" + a || (t.defaultValue = "" + a)
    }
    function Tr(t, e, a, i) {
        if (t = t.options,
        e) {
            e = {};
            for (var o = 0; o < a.length; o++)
                e["$" + a[o]] = !0;
            for (a = 0; a < t.length; a++)
                o = e.hasOwnProperty("$" + t[a].value),
                t[a].selected !== o && (t[a].selected = o),
                o && i && (t[a].defaultSelected = !0)
        } else {
            for (a = "" + Xe(a),
            e = null,
            o = 0; o < t.length; o++) {
                if (t[o].value === a) {
                    t[o].selected = !0,
                    i && (t[o].defaultSelected = !0);
                    return
                }
                e !== null || t[o].disabled || (e = t[o])
            }
            e !== null && (e.selected = !0)
        }
    }
    function md(t, e, a) {
        if (e != null && (e = "" + Xe(e),
        e !== t.value && (t.value = e),
        a == null)) {
            t.defaultValue !== e && (t.defaultValue = e);
            return
        }
        t.defaultValue = a != null ? "" + Xe(a) : ""
    }
    function pd(t, e, a, i) {
        if (e == null) {
            if (i != null) {
                if (a != null)
                    throw Error(s(92));
                if (ut(i)) {
                    if (1 < i.length)
                        throw Error(s(93));
                    i = i[0]
                }
                a = i
            }
            a == null && (a = ""),
            e = a
        }
        a = Xe(e),
        t.defaultValue = a,
        i = t.textContent,
        i === a && i !== "" && i !== null && (t.value = i),
        Qo(t)
    }
    function Cr(t, e) {
        if (e) {
            var a = t.firstChild;
            if (a && a === t.lastChild && a.nodeType === 3) {
                a.nodeValue = e;
                return
            }
        }
        t.textContent = e
    }
    var b0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function yd(t, e, a) {
        var i = e.indexOf("--") === 0;
        a == null || typeof a == "boolean" || a === "" ? i ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : i ? t.setProperty(e, a) : typeof a != "number" || a === 0 || b0.has(e) ? e === "float" ? t.cssFloat = a : t[e] = ("" + a).trim() : t[e] = a + "px"
    }
    function vd(t, e, a) {
        if (e != null && typeof e != "object")
            throw Error(s(62));
        if (t = t.style,
        a != null) {
            for (var i in a)
                !a.hasOwnProperty(i) || e != null && e.hasOwnProperty(i) || (i.indexOf("--") === 0 ? t.setProperty(i, "") : i === "float" ? t.cssFloat = "" : t[i] = "");
            for (var o in e)
                i = e[o],
                e.hasOwnProperty(o) && a[o] !== i && yd(t, o, i)
        } else
            for (var c in e)
                e.hasOwnProperty(c) && yd(t, c, e[c])
    }
    function Po(t) {
        if (t.indexOf("-") === -1)
            return !1;
        switch (t) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
        }
    }
    var x0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
      , S0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Hl(t) {
        return S0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
    }
    function jn() {}
    var Yo = null;
    function Go(t) {
        return t = t.target || t.srcElement || window,
        t.correspondingUseElement && (t = t.correspondingUseElement),
        t.nodeType === 3 ? t.parentNode : t
    }
    var Rr = null
      , Mr = null;
    function gd(t) {
        var e = Or(t);
        if (e && (t = e.stateNode)) {
            var a = t[Ae] || null;
            t: switch (t = e.stateNode,
            e.type) {
            case "input":
                if (Bo(t, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                e = a.name,
                a.type === "radio" && e != null) {
                    for (a = t; a.parentNode; )
                        a = a.parentNode;
                    for (a = a.querySelectorAll('input[name="' + Ke("" + e) + '"][type="radio"]'),
                    e = 0; e < a.length; e++) {
                        var i = a[e];
                        if (i !== t && i.form === t.form) {
                            var o = i[Ae] || null;
                            if (!o)
                                throw Error(s(90));
                            Bo(i, o.value, o.defaultValue, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name)
                        }
                    }
                    for (e = 0; e < a.length; e++)
                        i = a[e],
                        i.form === t.form && dd(i)
                }
                break t;
            case "textarea":
                md(t, a.value, a.defaultValue);
                break t;
            case "select":
                e = a.value,
                e != null && Tr(t, !!a.multiple, e, !1)
            }
        }
    }
    var Vo = !1;
    function bd(t, e, a) {
        if (Vo)
            return t(e, a);
        Vo = !0;
        try {
            var i = t(e);
            return i
        } finally {
            if (Vo = !1,
            (Rr !== null || Mr !== null) && (_s(),
            Rr && (e = Rr,
            t = Mr,
            Mr = Rr = null,
            gd(e),
            t)))
                for (e = 0; e < t.length; e++)
                    gd(t[e])
        }
    }
    function Ai(t, e) {
        var a = t.stateNode;
        if (a === null)
            return null;
        var i = a[Ae] || null;
        if (i === null)
            return null;
        a = i[e];
        t: switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (i = !i.disabled) || (t = t.type,
            i = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
            t = !i;
            break t;
        default:
            t = !1
        }
        if (t)
            return null;
        if (a && typeof a != "function")
            throw Error(s(231, e, typeof a));
        return a
    }
    var Dn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
      , Xo = !1;
    if (Dn)
        try {
            var Ti = {};
            Object.defineProperty(Ti, "passive", {
                get: function() {
                    Xo = !0
                }
            }),
            window.addEventListener("test", Ti, Ti),
            window.removeEventListener("test", Ti, Ti)
        } catch {
            Xo = !1
        }
    var ra = null
      , Ko = null
      , Ql = null;
    function xd() {
        if (Ql)
            return Ql;
        var t, e = Ko, a = e.length, i, o = "value"in ra ? ra.value : ra.textContent, c = o.length;
        for (t = 0; t < a && e[t] === o[t]; t++)
            ;
        var p = a - t;
        for (i = 1; i <= p && e[a - i] === o[c - i]; i++)
            ;
        return Ql = o.slice(t, 1 < i ? 1 - i : void 0)
    }
    function Bl(t) {
        var e = t.keyCode;
        return "charCode"in t ? (t = t.charCode,
        t === 0 && e === 13 && (t = 13)) : t = e,
        t === 10 && (t = 13),
        32 <= t || t === 13 ? t : 0
    }
    function kl() {
        return !0
    }
    function Sd() {
        return !1
    }
    function Te(t) {
        function e(a, i, o, c, p) {
            this._reactName = a,
            this._targetInst = o,
            this.type = i,
            this.nativeEvent = c,
            this.target = p,
            this.currentTarget = null;
            for (var g in t)
                t.hasOwnProperty(g) && (a = t[g],
                this[g] = a ? a(c) : c[g]);
            return this.isDefaultPrevented = (c.defaultPrevented != null ? c.defaultPrevented : c.returnValue === !1) ? kl : Sd,
            this.isPropagationStopped = Sd,
            this
        }
        return v(e.prototype, {
            preventDefault: function() {
                this.defaultPrevented = !0;
                var a = this.nativeEvent;
                a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                this.isDefaultPrevented = kl)
            },
            stopPropagation: function() {
                var a = this.nativeEvent;
                a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                this.isPropagationStopped = kl)
            },
            persist: function() {},
            isPersistent: kl
        }),
        e
    }
    var Ya = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(t) {
            return t.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    }, Pl = Te(Ya), Ci = v({}, Ya, {
        view: 0,
        detail: 0
    }), w0 = Te(Ci), Zo, Jo, Ri, Yl = v({}, Ci, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Io,
        button: 0,
        buttons: 0,
        relatedTarget: function(t) {
            return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
        },
        movementX: function(t) {
            return "movementX"in t ? t.movementX : (t !== Ri && (Ri && t.type === "mousemove" ? (Zo = t.screenX - Ri.screenX,
            Jo = t.screenY - Ri.screenY) : Jo = Zo = 0,
            Ri = t),
            Zo)
        },
        movementY: function(t) {
            return "movementY"in t ? t.movementY : Jo
        }
    }), wd = Te(Yl), E0 = v({}, Yl, {
        dataTransfer: 0
    }), O0 = Te(E0), _0 = v({}, Ci, {
        relatedTarget: 0
    }), Fo = Te(_0), A0 = v({}, Ya, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }), T0 = Te(A0), C0 = v({}, Ya, {
        clipboardData: function(t) {
            return "clipboardData"in t ? t.clipboardData : window.clipboardData
        }
    }), R0 = Te(C0), M0 = v({}, Ya, {
        data: 0
    }), Ed = Te(M0), j0 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    }, D0 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    }, N0 = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };
    function z0(t) {
        var e = this.nativeEvent;
        return e.getModifierState ? e.getModifierState(t) : (t = N0[t]) ? !!e[t] : !1
    }
    function Io() {
        return z0
    }
    var U0 = v({}, Ci, {
        key: function(t) {
            if (t.key) {
                var e = j0[t.key] || t.key;
                if (e !== "Unidentified")
                    return e
            }
            return t.type === "keypress" ? (t = Bl(t),
            t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? D0[t.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Io,
        charCode: function(t) {
            return t.type === "keypress" ? Bl(t) : 0
        },
        keyCode: function(t) {
            return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        },
        which: function(t) {
            return t.type === "keypress" ? Bl(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
        }
    })
      , q0 = Te(U0)
      , L0 = v({}, Yl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    })
      , Od = Te(L0)
      , H0 = v({}, Ci, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Io
    })
      , Q0 = Te(H0)
      , B0 = v({}, Ya, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    })
      , k0 = Te(B0)
      , P0 = v({}, Yl, {
        deltaX: function(t) {
            return "deltaX"in t ? t.deltaX : "wheelDeltaX"in t ? -t.wheelDeltaX : 0
        },
        deltaY: function(t) {
            return "deltaY"in t ? t.deltaY : "wheelDeltaY"in t ? -t.wheelDeltaY : "wheelDelta"in t ? -t.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    })
      , Y0 = Te(P0)
      , G0 = v({}, Ya, {
        newState: 0,
        oldState: 0
    })
      , V0 = Te(G0)
      , X0 = [9, 13, 27, 32]
      , $o = Dn && "CompositionEvent"in window
      , Mi = null;
    Dn && "documentMode"in document && (Mi = document.documentMode);
    var K0 = Dn && "TextEvent"in window && !Mi
      , _d = Dn && (!$o || Mi && 8 < Mi && 11 >= Mi)
      , Ad = " "
      , Td = !1;
    function Cd(t, e) {
        switch (t) {
        case "keyup":
            return X0.indexOf(e.keyCode) !== -1;
        case "keydown":
            return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
        }
    }
    function Rd(t) {
        return t = t.detail,
        typeof t == "object" && "data"in t ? t.data : null
    }
    var jr = !1;
    function Z0(t, e) {
        switch (t) {
        case "compositionend":
            return Rd(e);
        case "keypress":
            return e.which !== 32 ? null : (Td = !0,
            Ad);
        case "textInput":
            return t = e.data,
            t === Ad && Td ? null : t;
        default:
            return null
        }
    }
    function J0(t, e) {
        if (jr)
            return t === "compositionend" || !$o && Cd(t, e) ? (t = xd(),
            Ql = Ko = ra = null,
            jr = !1,
            t) : null;
        switch (t) {
        case "paste":
            return null;
        case "keypress":
            if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                if (e.char && 1 < e.char.length)
                    return e.char;
                if (e.which)
                    return String.fromCharCode(e.which)
            }
            return null;
        case "compositionend":
            return _d && e.locale !== "ko" ? null : e.data;
        default:
            return null
        }
    }
    var F0 = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };
    function Md(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!F0[t.type] : e === "textarea"
    }
    function jd(t, e, a, i) {
        Rr ? Mr ? Mr.push(i) : Mr = [i] : Rr = i,
        e = Ds(e, "onChange"),
        0 < e.length && (a = new Pl("onChange","change",null,a,i),
        t.push({
            event: a,
            listeners: e
        }))
    }
    var ji = null
      , Di = null;
    function I0(t) {
        hp(t, 0)
    }
    function Gl(t) {
        var e = _i(t);
        if (dd(e))
            return t
    }
    function Dd(t, e) {
        if (t === "change")
            return e
    }
    var Nd = !1;
    if (Dn) {
        var Wo;
        if (Dn) {
            var tu = "oninput"in document;
            if (!tu) {
                var zd = document.createElement("div");
                zd.setAttribute("oninput", "return;"),
                tu = typeof zd.oninput == "function"
            }
            Wo = tu
        } else
            Wo = !1;
        Nd = Wo && (!document.documentMode || 9 < document.documentMode)
    }
    function Ud() {
        ji && (ji.detachEvent("onpropertychange", qd),
        Di = ji = null)
    }
    function qd(t) {
        if (t.propertyName === "value" && Gl(Di)) {
            var e = [];
            jd(e, Di, t, Go(t)),
            bd(I0, e)
        }
    }
    function $0(t, e, a) {
        t === "focusin" ? (Ud(),
        ji = e,
        Di = a,
        ji.attachEvent("onpropertychange", qd)) : t === "focusout" && Ud()
    }
    function W0(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return Gl(Di)
    }
    function tb(t, e) {
        if (t === "click")
            return Gl(e)
    }
    function eb(t, e) {
        if (t === "input" || t === "change")
            return Gl(e)
    }
    function nb(t, e) {
        return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e
    }
    var Ue = typeof Object.is == "function" ? Object.is : nb;
    function Ni(t, e) {
        if (Ue(t, e))
            return !0;
        if (typeof t != "object" || t === null || typeof e != "object" || e === null)
            return !1;
        var a = Object.keys(t)
          , i = Object.keys(e);
        if (a.length !== i.length)
            return !1;
        for (i = 0; i < a.length; i++) {
            var o = a[i];
            if (!ze.call(e, o) || !Ue(t[o], e[o]))
                return !1
        }
        return !0
    }
    function Ld(t) {
        for (; t && t.firstChild; )
            t = t.firstChild;
        return t
    }
    function Hd(t, e) {
        var a = Ld(t);
        t = 0;
        for (var i; a; ) {
            if (a.nodeType === 3) {
                if (i = t + a.textContent.length,
                t <= e && i >= e)
                    return {
                        node: a,
                        offset: e - t
                    };
                t = i
            }
            t: {
                for (; a; ) {
                    if (a.nextSibling) {
                        a = a.nextSibling;
                        break t
                    }
                    a = a.parentNode
                }
                a = void 0
            }
            a = Ld(a)
        }
    }
    function Qd(t, e) {
        return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Qd(t, e.parentNode) : "contains"in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1
    }
    function Bd(t) {
        t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
        for (var e = Ll(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var a = typeof e.contentWindow.location.href == "string"
            } catch {
                a = !1
            }
            if (a)
                t = e.contentWindow;
            else
                break;
            e = Ll(t.document)
        }
        return e
    }
    function eu(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true")
    }
    var ab = Dn && "documentMode"in document && 11 >= document.documentMode
      , Dr = null
      , nu = null
      , zi = null
      , au = !1;
    function kd(t, e, a) {
        var i = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
        au || Dr == null || Dr !== Ll(i) || (i = Dr,
        "selectionStart"in i && eu(i) ? i = {
            start: i.selectionStart,
            end: i.selectionEnd
        } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(),
        i = {
            anchorNode: i.anchorNode,
            anchorOffset: i.anchorOffset,
            focusNode: i.focusNode,
            focusOffset: i.focusOffset
        }),
        zi && Ni(zi, i) || (zi = i,
        i = Ds(nu, "onSelect"),
        0 < i.length && (e = new Pl("onSelect","select",null,e,a),
        t.push({
            event: e,
            listeners: i
        }),
        e.target = Dr)))
    }
    function Ga(t, e) {
        var a = {};
        return a[t.toLowerCase()] = e.toLowerCase(),
        a["Webkit" + t] = "webkit" + e,
        a["Moz" + t] = "moz" + e,
        a
    }
    var Nr = {
        animationend: Ga("Animation", "AnimationEnd"),
        animationiteration: Ga("Animation", "AnimationIteration"),
        animationstart: Ga("Animation", "AnimationStart"),
        transitionrun: Ga("Transition", "TransitionRun"),
        transitionstart: Ga("Transition", "TransitionStart"),
        transitioncancel: Ga("Transition", "TransitionCancel"),
        transitionend: Ga("Transition", "TransitionEnd")
    }
      , ru = {}
      , Pd = {};
    Dn && (Pd = document.createElement("div").style,
    "AnimationEvent"in window || (delete Nr.animationend.animation,
    delete Nr.animationiteration.animation,
    delete Nr.animationstart.animation),
    "TransitionEvent"in window || delete Nr.transitionend.transition);
    function Va(t) {
        if (ru[t])
            return ru[t];
        if (!Nr[t])
            return t;
        var e = Nr[t], a;
        for (a in e)
            if (e.hasOwnProperty(a) && a in Pd)
                return ru[t] = e[a];
        return t
    }
    var Yd = Va("animationend")
      , Gd = Va("animationiteration")
      , Vd = Va("animationstart")
      , rb = Va("transitionrun")
      , ib = Va("transitionstart")
      , lb = Va("transitioncancel")
      , Xd = Va("transitionend")
      , Kd = new Map
      , iu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    iu.push("scrollEnd");
    function sn(t, e) {
        Kd.set(t, e),
        Pa(e, [t])
    }
    var Vl = typeof reportError == "function" ? reportError : function(t) {
        if (typeof window == "object" && typeof window.ErrorEvent == "function") {
            var e = new window.ErrorEvent("error",{
                bubbles: !0,
                cancelable: !0,
                message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
                error: t
            });
            if (!window.dispatchEvent(e))
                return
        } else if (typeof process == "object" && typeof process.emit == "function") {
            process.emit("uncaughtException", t);
            return
        }
        console.error(t)
    }
      , Ze = []
      , zr = 0
      , lu = 0;
    function Xl() {
        for (var t = zr, e = lu = zr = 0; e < t; ) {
            var a = Ze[e];
            Ze[e++] = null;
            var i = Ze[e];
            Ze[e++] = null;
            var o = Ze[e];
            Ze[e++] = null;
            var c = Ze[e];
            if (Ze[e++] = null,
            i !== null && o !== null) {
                var p = i.pending;
                p === null ? o.next = o : (o.next = p.next,
                p.next = o),
                i.pending = o
            }
            c !== 0 && Zd(a, o, c)
        }
    }
    function Kl(t, e, a, i) {
        Ze[zr++] = t,
        Ze[zr++] = e,
        Ze[zr++] = a,
        Ze[zr++] = i,
        lu |= i,
        t.lanes |= i,
        t = t.alternate,
        t !== null && (t.lanes |= i)
    }
    function su(t, e, a, i) {
        return Kl(t, e, a, i),
        Zl(t)
    }
    function Xa(t, e) {
        return Kl(t, null, null, e),
        Zl(t)
    }
    function Zd(t, e, a) {
        t.lanes |= a;
        var i = t.alternate;
        i !== null && (i.lanes |= a);
        for (var o = !1, c = t.return; c !== null; )
            c.childLanes |= a,
            i = c.alternate,
            i !== null && (i.childLanes |= a),
            c.tag === 22 && (t = c.stateNode,
            t === null || t._visibility & 1 || (o = !0)),
            t = c,
            c = c.return;
        return t.tag === 3 ? (c = t.stateNode,
        o && e !== null && (o = 31 - he(a),
        t = c.hiddenUpdates,
        i = t[o],
        i === null ? t[o] = [e] : i.push(e),
        e.lane = a | 536870912),
        c) : null
    }
    function Zl(t) {
        if (50 < nl)
            throw nl = 0,
            yc = null,
            Error(s(185));
        for (var e = t.return; e !== null; )
            t = e,
            e = t.return;
        return t.tag === 3 ? t.stateNode : null
    }
    var Ur = {};
    function sb(t, e, a, i) {
        this.tag = t,
        this.key = a,
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
        this.index = 0,
        this.refCleanup = this.ref = null,
        this.pendingProps = e,
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
        this.mode = i,
        this.subtreeFlags = this.flags = 0,
        this.deletions = null,
        this.childLanes = this.lanes = 0,
        this.alternate = null
    }
    function qe(t, e, a, i) {
        return new sb(t,e,a,i)
    }
    function ou(t) {
        return t = t.prototype,
        !(!t || !t.isReactComponent)
    }
    function Nn(t, e) {
        var a = t.alternate;
        return a === null ? (a = qe(t.tag, e, t.key, t.mode),
        a.elementType = t.elementType,
        a.type = t.type,
        a.stateNode = t.stateNode,
        a.alternate = t,
        t.alternate = a) : (a.pendingProps = e,
        a.type = t.type,
        a.flags = 0,
        a.subtreeFlags = 0,
        a.deletions = null),
        a.flags = t.flags & 65011712,
        a.childLanes = t.childLanes,
        a.lanes = t.lanes,
        a.child = t.child,
        a.memoizedProps = t.memoizedProps,
        a.memoizedState = t.memoizedState,
        a.updateQueue = t.updateQueue,
        e = t.dependencies,
        a.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        },
        a.sibling = t.sibling,
        a.index = t.index,
        a.ref = t.ref,
        a.refCleanup = t.refCleanup,
        a
    }
    function Jd(t, e) {
        t.flags &= 65011714;
        var a = t.alternate;
        return a === null ? (t.childLanes = 0,
        t.lanes = e,
        t.child = null,
        t.subtreeFlags = 0,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.updateQueue = null,
        t.dependencies = null,
        t.stateNode = null) : (t.childLanes = a.childLanes,
        t.lanes = a.lanes,
        t.child = a.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = a.memoizedProps,
        t.memoizedState = a.memoizedState,
        t.updateQueue = a.updateQueue,
        t.type = a.type,
        e = a.dependencies,
        t.dependencies = e === null ? null : {
            lanes: e.lanes,
            firstContext: e.firstContext
        }),
        t
    }
    function Jl(t, e, a, i, o, c) {
        var p = 0;
        if (i = t,
        typeof t == "function")
            ou(t) && (p = 1);
        else if (typeof t == "string")
            p = dx(t, a, Y.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
        else
            t: switch (t) {
            case $:
                return t = qe(31, a, e, o),
                t.elementType = $,
                t.lanes = c,
                t;
            case S:
                return Ka(a.children, o, c, e);
            case U:
                p = 8,
                o |= 24;
                break;
            case B:
                return t = qe(12, a, e, o | 2),
                t.elementType = B,
                t.lanes = c,
                t;
            case X:
                return t = qe(13, a, e, o),
                t.elementType = X,
                t.lanes = c,
                t;
            case Z:
                return t = qe(19, a, e, o),
                t.elementType = Z,
                t.lanes = c,
                t;
            default:
                if (typeof t == "object" && t !== null)
                    switch (t.$$typeof) {
                    case I:
                        p = 10;
                        break t;
                    case J:
                        p = 9;
                        break t;
                    case nt:
                        p = 11;
                        break t;
                    case M:
                        p = 14;
                        break t;
                    case H:
                        p = 16,
                        i = null;
                        break t
                    }
                p = 29,
                a = Error(s(130, t === null ? "null" : typeof t, "")),
                i = null
            }
        return e = qe(p, a, e, o),
        e.elementType = t,
        e.type = i,
        e.lanes = c,
        e
    }
    function Ka(t, e, a, i) {
        return t = qe(7, t, i, e),
        t.lanes = a,
        t
    }
    function uu(t, e, a) {
        return t = qe(6, t, null, e),
        t.lanes = a,
        t
    }
    function Fd(t) {
        var e = qe(18, null, null, 0);
        return e.stateNode = t,
        e
    }
    function cu(t, e, a) {
        return e = qe(4, t.children !== null ? t.children : [], t.key, e),
        e.lanes = a,
        e.stateNode = {
            containerInfo: t.containerInfo,
            pendingChildren: null,
            implementation: t.implementation
        },
        e
    }
    var Id = new WeakMap;
    function Je(t, e) {
        if (typeof t == "object" && t !== null) {
            var a = Id.get(t);
            return a !== void 0 ? a : (e = {
                value: t,
                source: e,
                stack: bi(e)
            },
            Id.set(t, e),
            e)
        }
        return {
            value: t,
            source: e,
            stack: bi(e)
        }
    }
    var qr = []
      , Lr = 0
      , Fl = null
      , Ui = 0
      , Fe = []
      , Ie = 0
      , ia = null
      , yn = 1
      , vn = "";
    function zn(t, e) {
        qr[Lr++] = Ui,
        qr[Lr++] = Fl,
        Fl = t,
        Ui = e
    }
    function $d(t, e, a) {
        Fe[Ie++] = yn,
        Fe[Ie++] = vn,
        Fe[Ie++] = ia,
        ia = t;
        var i = yn;
        t = vn;
        var o = 32 - he(i) - 1;
        i &= ~(1 << o),
        a += 1;
        var c = 32 - he(e) + o;
        if (30 < c) {
            var p = o - o % 5;
            c = (i & (1 << p) - 1).toString(32),
            i >>= p,
            o -= p,
            yn = 1 << 32 - he(e) + o | a << o | i,
            vn = c + t
        } else
            yn = 1 << c | a << o | i,
            vn = t
    }
    function fu(t) {
        t.return !== null && (zn(t, 1),
        $d(t, 1, 0))
    }
    function du(t) {
        for (; t === Fl; )
            Fl = qr[--Lr],
            qr[Lr] = null,
            Ui = qr[--Lr],
            qr[Lr] = null;
        for (; t === ia; )
            ia = Fe[--Ie],
            Fe[Ie] = null,
            vn = Fe[--Ie],
            Fe[Ie] = null,
            yn = Fe[--Ie],
            Fe[Ie] = null
    }
    function Wd(t, e) {
        Fe[Ie++] = yn,
        Fe[Ie++] = vn,
        Fe[Ie++] = ia,
        yn = e.id,
        vn = e.overflow,
        ia = t
    }
    var ue = null
      , Bt = null
      , Rt = !1
      , la = null
      , $e = !1
      , hu = Error(s(519));
    function sa(t) {
        var e = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
        throw qi(Je(e, t)),
        hu
    }
    function th(t) {
        var e = t.stateNode
          , a = t.type
          , i = t.memoizedProps;
        switch (e[oe] = t,
        e[Ae] = i,
        a) {
        case "dialog":
            _t("cancel", e),
            _t("close", e);
            break;
        case "iframe":
        case "object":
        case "embed":
            _t("load", e);
            break;
        case "video":
        case "audio":
            for (a = 0; a < rl.length; a++)
                _t(rl[a], e);
            break;
        case "source":
            _t("error", e);
            break;
        case "img":
        case "image":
        case "link":
            _t("error", e),
            _t("load", e);
            break;
        case "details":
            _t("toggle", e);
            break;
        case "input":
            _t("invalid", e),
            hd(e, i.value, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name, !0);
            break;
        case "select":
            _t("invalid", e);
            break;
        case "textarea":
            _t("invalid", e),
            pd(e, i.value, i.defaultValue, i.children)
        }
        a = i.children,
        typeof a != "string" && typeof a != "number" && typeof a != "bigint" || e.textContent === "" + a || i.suppressHydrationWarning === !0 || vp(e.textContent, a) ? (i.popover != null && (_t("beforetoggle", e),
        _t("toggle", e)),
        i.onScroll != null && _t("scroll", e),
        i.onScrollEnd != null && _t("scrollend", e),
        i.onClick != null && (e.onclick = jn),
        e = !0) : e = !1,
        e || sa(t, !0)
    }
    function eh(t) {
        for (ue = t.return; ue; )
            switch (ue.tag) {
            case 5:
            case 31:
            case 13:
                $e = !1;
                return;
            case 27:
            case 3:
                $e = !0;
                return;
            default:
                ue = ue.return
            }
    }
    function Hr(t) {
        if (t !== ue)
            return !1;
        if (!Rt)
            return eh(t),
            Rt = !0,
            !1;
        var e = t.tag, a;
        if ((a = e !== 3 && e !== 27) && ((a = e === 5) && (a = t.type,
        a = !(a !== "form" && a !== "button") || jc(t.type, t.memoizedProps)),
        a = !a),
        a && Bt && sa(t),
        eh(t),
        e === 13) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(s(317));
            Bt = Ap(t)
        } else if (e === 31) {
            if (t = t.memoizedState,
            t = t !== null ? t.dehydrated : null,
            !t)
                throw Error(s(317));
            Bt = Ap(t)
        } else
            e === 27 ? (e = Bt,
            Sa(t.type) ? (t = qc,
            qc = null,
            Bt = t) : Bt = e) : Bt = ue ? tn(t.stateNode.nextSibling) : null;
        return !0
    }
    function Za() {
        Bt = ue = null,
        Rt = !1
    }
    function mu() {
        var t = la;
        return t !== null && (je === null ? je = t : je.push.apply(je, t),
        la = null),
        t
    }
    function qi(t) {
        la === null ? la = [t] : la.push(t)
    }
    var pu = w(null)
      , Ja = null
      , Un = null;
    function oa(t, e, a) {
        q(pu, e._currentValue),
        e._currentValue = a
    }
    function qn(t) {
        t._currentValue = pu.current,
        P(pu)
    }
    function yu(t, e, a) {
        for (; t !== null; ) {
            var i = t.alternate;
            if ((t.childLanes & e) !== e ? (t.childLanes |= e,
            i !== null && (i.childLanes |= e)) : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
            t === a)
                break;
            t = t.return
        }
    }
    function vu(t, e, a, i) {
        var o = t.child;
        for (o !== null && (o.return = t); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
                var p = o.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var g = c;
                    c = o;
                    for (var E = 0; E < e.length; E++)
                        if (g.context === e[E]) {
                            c.lanes |= a,
                            g = c.alternate,
                            g !== null && (g.lanes |= a),
                            yu(c.return, a, t),
                            i || (p = null);
                            break t
                        }
                    c = g.next
                }
            } else if (o.tag === 18) {
                if (p = o.return,
                p === null)
                    throw Error(s(341));
                p.lanes |= a,
                c = p.alternate,
                c !== null && (c.lanes |= a),
                yu(p, a, t),
                p = null
            } else
                p = o.child;
            if (p !== null)
                p.return = o;
            else
                for (p = o; p !== null; ) {
                    if (p === t) {
                        p = null;
                        break
                    }
                    if (o = p.sibling,
                    o !== null) {
                        o.return = p.return,
                        p = o;
                        break
                    }
                    p = p.return
                }
            o = p
        }
    }
    function Qr(t, e, a, i) {
        t = null;
        for (var o = e, c = !1; o !== null; ) {
            if (!c) {
                if ((o.flags & 524288) !== 0)
                    c = !0;
                else if ((o.flags & 262144) !== 0)
                    break
            }
            if (o.tag === 10) {
                var p = o.alternate;
                if (p === null)
                    throw Error(s(387));
                if (p = p.memoizedProps,
                p !== null) {
                    var g = o.type;
                    Ue(o.pendingProps.value, p.value) || (t !== null ? t.push(g) : t = [g])
                }
            } else if (o === ot.current) {
                if (p = o.alternate,
                p === null)
                    throw Error(s(387));
                p.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ul) : t = [ul])
            }
            o = o.return
        }
        t !== null && vu(e, t, a, i),
        e.flags |= 262144
    }
    function Il(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ue(t.context._currentValue, t.memoizedValue))
                return !0;
            t = t.next
        }
        return !1
    }
    function Fa(t) {
        Ja = t,
        Un = null,
        t = t.dependencies,
        t !== null && (t.firstContext = null)
    }
    function ce(t) {
        return nh(Ja, t)
    }
    function $l(t, e) {
        return Ja === null && Fa(t),
        nh(t, e)
    }
    function nh(t, e) {
        var a = e._currentValue;
        if (e = {
            context: e,
            memoizedValue: a,
            next: null
        },
        Un === null) {
            if (t === null)
                throw Error(s(308));
            Un = e,
            t.dependencies = {
                lanes: 0,
                firstContext: e
            },
            t.flags |= 524288
        } else
            Un = Un.next = e;
        return a
    }
    var ob = typeof AbortController < "u" ? AbortController : function() {
        var t = []
          , e = this.signal = {
            aborted: !1,
            addEventListener: function(a, i) {
                t.push(i)
            }
        };
        this.abort = function() {
            e.aborted = !0,
            t.forEach(function(a) {
                return a()
            })
        }
    }
      , ub = n.unstable_scheduleCallback
      , cb = n.unstable_NormalPriority
      , It = {
        $$typeof: I,
        Consumer: null,
        Provider: null,
        _currentValue: null,
        _currentValue2: null,
        _threadCount: 0
    };
    function gu() {
        return {
            controller: new ob,
            data: new Map,
            refCount: 0
        }
    }
    function Li(t) {
        t.refCount--,
        t.refCount === 0 && ub(cb, function() {
            t.controller.abort()
        })
    }
    var Hi = null
      , bu = 0
      , Br = 0
      , kr = null;
    function fb(t, e) {
        if (Hi === null) {
            var a = Hi = [];
            bu = 0,
            Br = wc(),
            kr = {
                status: "pending",
                value: void 0,
                then: function(i) {
                    a.push(i)
                }
            }
        }
        return bu++,
        e.then(ah, ah),
        e
    }
    function ah() {
        if (--bu === 0 && Hi !== null) {
            kr !== null && (kr.status = "fulfilled");
            var t = Hi;
            Hi = null,
            Br = 0,
            kr = null;
            for (var e = 0; e < t.length; e++)
                (0,
                t[e])()
        }
    }
    function db(t, e) {
        var a = []
          , i = {
            status: "pending",
            value: null,
            reason: null,
            then: function(o) {
                a.push(o)
            }
        };
        return t.then(function() {
            i.status = "fulfilled",
            i.value = e;
            for (var o = 0; o < a.length; o++)
                (0,
                a[o])(e)
        }, function(o) {
            for (i.status = "rejected",
            i.reason = o,
            o = 0; o < a.length; o++)
                (0,
                a[o])(void 0)
        }),
        i
    }
    var rh = A.S;
    A.S = function(t, e) {
        km = be(),
        typeof e == "object" && e !== null && typeof e.then == "function" && fb(t, e),
        rh !== null && rh(t, e)
    }
    ;
    var Ia = w(null);
    function xu() {
        var t = Ia.current;
        return t !== null ? t : Qt.pooledCache
    }
    function Wl(t, e) {
        e === null ? q(Ia, Ia.current) : q(Ia, e.pool)
    }
    function ih() {
        var t = xu();
        return t === null ? null : {
            parent: It._currentValue,
            pool: t
        }
    }
    var Pr = Error(s(460))
      , Su = Error(s(474))
      , ts = Error(s(542))
      , es = {
        then: function() {}
    };
    function lh(t) {
        return t = t.status,
        t === "fulfilled" || t === "rejected"
    }
    function sh(t, e, a) {
        switch (a = t[a],
        a === void 0 ? t.push(e) : a !== e && (e.then(jn, jn),
        e = a),
        e.status) {
        case "fulfilled":
            return e.value;
        case "rejected":
            throw t = e.reason,
            uh(t),
            t;
        default:
            if (typeof e.status == "string")
                e.then(jn, jn);
            else {
                if (t = Qt,
                t !== null && 100 < t.shellSuspendCounter)
                    throw Error(s(482));
                t = e,
                t.status = "pending",
                t.then(function(i) {
                    if (e.status === "pending") {
                        var o = e;
                        o.status = "fulfilled",
                        o.value = i
                    }
                }, function(i) {
                    if (e.status === "pending") {
                        var o = e;
                        o.status = "rejected",
                        o.reason = i
                    }
                })
            }
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw t = e.reason,
                uh(t),
                t
            }
            throw Wa = e,
            Pr
        }
    }
    function $a(t) {
        try {
            var e = t._init;
            return e(t._payload)
        } catch (a) {
            throw a !== null && typeof a == "object" && typeof a.then == "function" ? (Wa = a,
            Pr) : a
        }
    }
    var Wa = null;
    function oh() {
        if (Wa === null)
            throw Error(s(459));
        var t = Wa;
        return Wa = null,
        t
    }
    function uh(t) {
        if (t === Pr || t === ts)
            throw Error(s(483))
    }
    var Yr = null
      , Qi = 0;
    function ns(t) {
        var e = Qi;
        return Qi += 1,
        Yr === null && (Yr = []),
        sh(Yr, t, e)
    }
    function Bi(t, e) {
        e = e.props.ref,
        t.ref = e !== void 0 ? e : null
    }
    function as(t, e) {
        throw e.$$typeof === x ? Error(s(525)) : (t = Object.prototype.toString.call(e),
        Error(s(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)))
    }
    function ch(t) {
        function e(j, R) {
            if (t) {
                var N = j.deletions;
                N === null ? (j.deletions = [R],
                j.flags |= 16) : N.push(R)
            }
        }
        function a(j, R) {
            if (!t)
                return null;
            for (; R !== null; )
                e(j, R),
                R = R.sibling;
            return null
        }
        function i(j) {
            for (var R = new Map; j !== null; )
                j.key !== null ? R.set(j.key, j) : R.set(j.index, j),
                j = j.sibling;
            return R
        }
        function o(j, R) {
            return j = Nn(j, R),
            j.index = 0,
            j.sibling = null,
            j
        }
        function c(j, R, N) {
            return j.index = N,
            t ? (N = j.alternate,
            N !== null ? (N = N.index,
            N < R ? (j.flags |= 67108866,
            R) : N) : (j.flags |= 67108866,
            R)) : (j.flags |= 1048576,
            R)
        }
        function p(j) {
            return t && j.alternate === null && (j.flags |= 67108866),
            j
        }
        function g(j, R, N, V) {
            return R === null || R.tag !== 6 ? (R = uu(N, j.mode, V),
            R.return = j,
            R) : (R = o(R, N),
            R.return = j,
            R)
        }
        function E(j, R, N, V) {
            var yt = N.type;
            return yt === S ? G(j, R, N.props.children, V, N.key) : R !== null && (R.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === H && $a(yt) === R.type) ? (R = o(R, N.props),
            Bi(R, N),
            R.return = j,
            R) : (R = Jl(N.type, N.key, N.props, null, j.mode, V),
            Bi(R, N),
            R.return = j,
            R)
        }
        function z(j, R, N, V) {
            return R === null || R.tag !== 4 || R.stateNode.containerInfo !== N.containerInfo || R.stateNode.implementation !== N.implementation ? (R = cu(N, j.mode, V),
            R.return = j,
            R) : (R = o(R, N.children || []),
            R.return = j,
            R)
        }
        function G(j, R, N, V, yt) {
            return R === null || R.tag !== 7 ? (R = Ka(N, j.mode, V, yt),
            R.return = j,
            R) : (R = o(R, N),
            R.return = j,
            R)
        }
        function K(j, R, N) {
            if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
                return R = uu("" + R, j.mode, N),
                R.return = j,
                R;
            if (typeof R == "object" && R !== null) {
                switch (R.$$typeof) {
                case _:
                    return N = Jl(R.type, R.key, R.props, null, j.mode, N),
                    Bi(N, R),
                    N.return = j,
                    N;
                case T:
                    return R = cu(R, j.mode, N),
                    R.return = j,
                    R;
                case H:
                    return R = $a(R),
                    K(j, R, N)
                }
                if (ut(R) || tt(R))
                    return R = Ka(R, j.mode, N, null),
                    R.return = j,
                    R;
                if (typeof R.then == "function")
                    return K(j, ns(R), N);
                if (R.$$typeof === I)
                    return K(j, $l(j, R), N);
                as(j, R)
            }
            return null
        }
        function L(j, R, N, V) {
            var yt = R !== null ? R.key : null;
            if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
                return yt !== null ? null : g(j, R, "" + N, V);
            if (typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case _:
                    return N.key === yt ? E(j, R, N, V) : null;
                case T:
                    return N.key === yt ? z(j, R, N, V) : null;
                case H:
                    return N = $a(N),
                    L(j, R, N, V)
                }
                if (ut(N) || tt(N))
                    return yt !== null ? null : G(j, R, N, V, null);
                if (typeof N.then == "function")
                    return L(j, R, ns(N), V);
                if (N.$$typeof === I)
                    return L(j, R, $l(j, N), V);
                as(j, N)
            }
            return null
        }
        function k(j, R, N, V, yt) {
            if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint")
                return j = j.get(N) || null,
                g(R, j, "" + V, yt);
            if (typeof V == "object" && V !== null) {
                switch (V.$$typeof) {
                case _:
                    return j = j.get(V.key === null ? N : V.key) || null,
                    E(R, j, V, yt);
                case T:
                    return j = j.get(V.key === null ? N : V.key) || null,
                    z(R, j, V, yt);
                case H:
                    return V = $a(V),
                    k(j, R, N, V, yt)
                }
                if (ut(V) || tt(V))
                    return j = j.get(N) || null,
                    G(R, j, V, yt, null);
                if (typeof V.then == "function")
                    return k(j, R, N, ns(V), yt);
                if (V.$$typeof === I)
                    return k(j, R, N, $l(R, V), yt);
                as(R, V)
            }
            return null
        }
        function ct(j, R, N, V) {
            for (var yt = null, Mt = null, pt = R, wt = R = 0, Tt = null; pt !== null && wt < N.length; wt++) {
                pt.index > wt ? (Tt = pt,
                pt = null) : Tt = pt.sibling;
                var jt = L(j, pt, N[wt], V);
                if (jt === null) {
                    pt === null && (pt = Tt);
                    break
                }
                t && pt && jt.alternate === null && e(j, pt),
                R = c(jt, R, wt),
                Mt === null ? yt = jt : Mt.sibling = jt,
                Mt = jt,
                pt = Tt
            }
            if (wt === N.length)
                return a(j, pt),
                Rt && zn(j, wt),
                yt;
            if (pt === null) {
                for (; wt < N.length; wt++)
                    pt = K(j, N[wt], V),
                    pt !== null && (R = c(pt, R, wt),
                    Mt === null ? yt = pt : Mt.sibling = pt,
                    Mt = pt);
                return Rt && zn(j, wt),
                yt
            }
            for (pt = i(pt); wt < N.length; wt++)
                Tt = k(pt, j, wt, N[wt], V),
                Tt !== null && (t && Tt.alternate !== null && pt.delete(Tt.key === null ? wt : Tt.key),
                R = c(Tt, R, wt),
                Mt === null ? yt = Tt : Mt.sibling = Tt,
                Mt = Tt);
            return t && pt.forEach(function(Aa) {
                return e(j, Aa)
            }),
            Rt && zn(j, wt),
            yt
        }
        function vt(j, R, N, V) {
            if (N == null)
                throw Error(s(151));
            for (var yt = null, Mt = null, pt = R, wt = R = 0, Tt = null, jt = N.next(); pt !== null && !jt.done; wt++,
            jt = N.next()) {
                pt.index > wt ? (Tt = pt,
                pt = null) : Tt = pt.sibling;
                var Aa = L(j, pt, jt.value, V);
                if (Aa === null) {
                    pt === null && (pt = Tt);
                    break
                }
                t && pt && Aa.alternate === null && e(j, pt),
                R = c(Aa, R, wt),
                Mt === null ? yt = Aa : Mt.sibling = Aa,
                Mt = Aa,
                pt = Tt
            }
            if (jt.done)
                return a(j, pt),
                Rt && zn(j, wt),
                yt;
            if (pt === null) {
                for (; !jt.done; wt++,
                jt = N.next())
                    jt = K(j, jt.value, V),
                    jt !== null && (R = c(jt, R, wt),
                    Mt === null ? yt = jt : Mt.sibling = jt,
                    Mt = jt);
                return Rt && zn(j, wt),
                yt
            }
            for (pt = i(pt); !jt.done; wt++,
            jt = N.next())
                jt = k(pt, j, wt, jt.value, V),
                jt !== null && (t && jt.alternate !== null && pt.delete(jt.key === null ? wt : jt.key),
                R = c(jt, R, wt),
                Mt === null ? yt = jt : Mt.sibling = jt,
                Mt = jt);
            return t && pt.forEach(function(Ex) {
                return e(j, Ex)
            }),
            Rt && zn(j, wt),
            yt
        }
        function Ht(j, R, N, V) {
            if (typeof N == "object" && N !== null && N.type === S && N.key === null && (N = N.props.children),
            typeof N == "object" && N !== null) {
                switch (N.$$typeof) {
                case _:
                    t: {
                        for (var yt = N.key; R !== null; ) {
                            if (R.key === yt) {
                                if (yt = N.type,
                                yt === S) {
                                    if (R.tag === 7) {
                                        a(j, R.sibling),
                                        V = o(R, N.props.children),
                                        V.return = j,
                                        j = V;
                                        break t
                                    }
                                } else if (R.elementType === yt || typeof yt == "object" && yt !== null && yt.$$typeof === H && $a(yt) === R.type) {
                                    a(j, R.sibling),
                                    V = o(R, N.props),
                                    Bi(V, N),
                                    V.return = j,
                                    j = V;
                                    break t
                                }
                                a(j, R);
                                break
                            } else
                                e(j, R);
                            R = R.sibling
                        }
                        N.type === S ? (V = Ka(N.props.children, j.mode, V, N.key),
                        V.return = j,
                        j = V) : (V = Jl(N.type, N.key, N.props, null, j.mode, V),
                        Bi(V, N),
                        V.return = j,
                        j = V)
                    }
                    return p(j);
                case T:
                    t: {
                        for (yt = N.key; R !== null; ) {
                            if (R.key === yt)
                                if (R.tag === 4 && R.stateNode.containerInfo === N.containerInfo && R.stateNode.implementation === N.implementation) {
                                    a(j, R.sibling),
                                    V = o(R, N.children || []),
                                    V.return = j,
                                    j = V;
                                    break t
                                } else {
                                    a(j, R);
                                    break
                                }
                            else
                                e(j, R);
                            R = R.sibling
                        }
                        V = cu(N, j.mode, V),
                        V.return = j,
                        j = V
                    }
                    return p(j);
                case H:
                    return N = $a(N),
                    Ht(j, R, N, V)
                }
                if (ut(N))
                    return ct(j, R, N, V);
                if (tt(N)) {
                    if (yt = tt(N),
                    typeof yt != "function")
                        throw Error(s(150));
                    return N = yt.call(N),
                    vt(j, R, N, V)
                }
                if (typeof N.then == "function")
                    return Ht(j, R, ns(N), V);
                if (N.$$typeof === I)
                    return Ht(j, R, $l(j, N), V);
                as(j, N)
            }
            return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N,
            R !== null && R.tag === 6 ? (a(j, R.sibling),
            V = o(R, N),
            V.return = j,
            j = V) : (a(j, R),
            V = uu(N, j.mode, V),
            V.return = j,
            j = V),
            p(j)) : a(j, R)
        }
        return function(j, R, N, V) {
            try {
                Qi = 0;
                var yt = Ht(j, R, N, V);
                return Yr = null,
                yt
            } catch (pt) {
                if (pt === Pr || pt === ts)
                    throw pt;
                var Mt = qe(29, pt, null, j.mode);
                return Mt.lanes = V,
                Mt.return = j,
                Mt
            } finally {}
        }
    }
    var tr = ch(!0)
      , fh = ch(!1)
      , ua = !1;
    function wu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: {
                pending: null,
                lanes: 0,
                hiddenCallbacks: null
            },
            callbacks: null
        }
    }
    function Eu(t, e) {
        t = t.updateQueue,
        e.updateQueue === t && (e.updateQueue = {
            baseState: t.baseState,
            firstBaseUpdate: t.firstBaseUpdate,
            lastBaseUpdate: t.lastBaseUpdate,
            shared: t.shared,
            callbacks: null
        })
    }
    function ca(t) {
        return {
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null
        }
    }
    function fa(t, e, a) {
        var i = t.updateQueue;
        if (i === null)
            return null;
        if (i = i.shared,
        (Nt & 2) !== 0) {
            var o = i.pending;
            return o === null ? e.next = e : (e.next = o.next,
            o.next = e),
            i.pending = e,
            e = Zl(t),
            Zd(t, null, a),
            e
        }
        return Kl(t, i, e, a),
        Zl(t)
    }
    function ki(t, e, a) {
        if (e = e.updateQueue,
        e !== null && (e = e.shared,
        (a & 4194048) !== 0)) {
            var i = e.lanes;
            i &= t.pendingLanes,
            a |= i,
            e.lanes = a,
            Oe(t, a)
        }
    }
    function Ou(t, e) {
        var a = t.updateQueue
          , i = t.alternate;
        if (i !== null && (i = i.updateQueue,
        a === i)) {
            var o = null
              , c = null;
            if (a = a.firstBaseUpdate,
            a !== null) {
                do {
                    var p = {
                        lane: a.lane,
                        tag: a.tag,
                        payload: a.payload,
                        callback: null,
                        next: null
                    };
                    c === null ? o = c = p : c = c.next = p,
                    a = a.next
                } while (a !== null);
                c === null ? o = c = e : c = c.next = e
            } else
                o = c = e;
            a = {
                baseState: i.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: i.shared,
                callbacks: i.callbacks
            },
            t.updateQueue = a;
            return
        }
        t = a.lastBaseUpdate,
        t === null ? a.firstBaseUpdate = e : t.next = e,
        a.lastBaseUpdate = e
    }
    var _u = !1;
    function Pi() {
        if (_u) {
            var t = kr;
            if (t !== null)
                throw t
        }
    }
    function Yi(t, e, a, i) {
        _u = !1;
        var o = t.updateQueue;
        ua = !1;
        var c = o.firstBaseUpdate
          , p = o.lastBaseUpdate
          , g = o.shared.pending;
        if (g !== null) {
            o.shared.pending = null;
            var E = g
              , z = E.next;
            E.next = null,
            p === null ? c = z : p.next = z,
            p = E;
            var G = t.alternate;
            G !== null && (G = G.updateQueue,
            g = G.lastBaseUpdate,
            g !== p && (g === null ? G.firstBaseUpdate = z : g.next = z,
            G.lastBaseUpdate = E))
        }
        if (c !== null) {
            var K = o.baseState;
            p = 0,
            G = z = E = null,
            g = c;
            do {
                var L = g.lane & -536870913
                  , k = L !== g.lane;
                if (k ? (At & L) === L : (i & L) === L) {
                    L !== 0 && L === Br && (_u = !0),
                    G !== null && (G = G.next = {
                        lane: 0,
                        tag: g.tag,
                        payload: g.payload,
                        callback: null,
                        next: null
                    });
                    t: {
                        var ct = t
                          , vt = g;
                        L = e;
                        var Ht = a;
                        switch (vt.tag) {
                        case 1:
                            if (ct = vt.payload,
                            typeof ct == "function") {
                                K = ct.call(Ht, K, L);
                                break t
                            }
                            K = ct;
                            break t;
                        case 3:
                            ct.flags = ct.flags & -65537 | 128;
                        case 0:
                            if (ct = vt.payload,
                            L = typeof ct == "function" ? ct.call(Ht, K, L) : ct,
                            L == null)
                                break t;
                            K = v({}, K, L);
                            break t;
                        case 2:
                            ua = !0
                        }
                    }
                    L = g.callback,
                    L !== null && (t.flags |= 64,
                    k && (t.flags |= 8192),
                    k = o.callbacks,
                    k === null ? o.callbacks = [L] : k.push(L))
                } else
                    k = {
                        lane: L,
                        tag: g.tag,
                        payload: g.payload,
                        callback: g.callback,
                        next: null
                    },
                    G === null ? (z = G = k,
                    E = K) : G = G.next = k,
                    p |= L;
                if (g = g.next,
                g === null) {
                    if (g = o.shared.pending,
                    g === null)
                        break;
                    k = g,
                    g = k.next,
                    k.next = null,
                    o.lastBaseUpdate = k,
                    o.shared.pending = null
                }
            } while (!0);
            G === null && (E = K),
            o.baseState = E,
            o.firstBaseUpdate = z,
            o.lastBaseUpdate = G,
            c === null && (o.shared.lanes = 0),
            ya |= p,
            t.lanes = p,
            t.memoizedState = K
        }
    }
    function dh(t, e) {
        if (typeof t != "function")
            throw Error(s(191, t));
        t.call(e)
    }
    function hh(t, e) {
        var a = t.callbacks;
        if (a !== null)
            for (t.callbacks = null,
            t = 0; t < a.length; t++)
                dh(a[t], e)
    }
    var Gr = w(null)
      , rs = w(0);
    function mh(t, e) {
        t = Vn,
        q(rs, t),
        q(Gr, e),
        Vn = t | e.baseLanes
    }
    function Au() {
        q(rs, Vn),
        q(Gr, Gr.current)
    }
    function Tu() {
        Vn = rs.current,
        P(Gr),
        P(rs)
    }
    var Le = w(null)
      , We = null;
    function da(t) {
        var e = t.alternate;
        q(Zt, Zt.current & 1),
        q(Le, t),
        We === null && (e === null || Gr.current !== null || e.memoizedState !== null) && (We = t)
    }
    function Cu(t) {
        q(Zt, Zt.current),
        q(Le, t),
        We === null && (We = t)
    }
    function ph(t) {
        t.tag === 22 ? (q(Zt, Zt.current),
        q(Le, t),
        We === null && (We = t)) : ha()
    }
    function ha() {
        q(Zt, Zt.current),
        q(Le, Le.current)
    }
    function He(t) {
        P(Le),
        We === t && (We = null),
        P(Zt)
    }
    var Zt = w(0);
    function is(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var a = e.memoizedState;
                if (a !== null && (a = a.dehydrated,
                a === null || zc(a) || Uc(a)))
                    return e
            } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
                if ((e.flags & 128) !== 0)
                    return e
            } else if (e.child !== null) {
                e.child.return = e,
                e = e.child;
                continue
            }
            if (e === t)
                break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t)
                    return null;
                e = e.return
            }
            e.sibling.return = e.return,
            e = e.sibling
        }
        return null
    }
    var Ln = 0
      , St = null
      , qt = null
      , $t = null
      , ls = !1
      , Vr = !1
      , er = !1
      , ss = 0
      , Gi = 0
      , Xr = null
      , hb = 0;
    function Vt() {
        throw Error(s(321))
    }
    function Ru(t, e) {
        if (e === null)
            return !1;
        for (var a = 0; a < e.length && a < t.length; a++)
            if (!Ue(t[a], e[a]))
                return !1;
        return !0
    }
    function Mu(t, e, a, i, o, c) {
        return Ln = c,
        St = e,
        e.memoizedState = null,
        e.updateQueue = null,
        e.lanes = 0,
        A.H = t === null || t.memoizedState === null ? $h : Vu,
        er = !1,
        c = a(i, o),
        er = !1,
        Vr && (c = vh(e, a, i, o)),
        yh(t),
        c
    }
    function yh(t) {
        A.H = Ki;
        var e = qt !== null && qt.next !== null;
        if (Ln = 0,
        $t = qt = St = null,
        ls = !1,
        Gi = 0,
        Xr = null,
        e)
            throw Error(s(300));
        t === null || Wt || (t = t.dependencies,
        t !== null && Il(t) && (Wt = !0))
    }
    function vh(t, e, a, i) {
        St = t;
        var o = 0;
        do {
            if (Vr && (Xr = null),
            Gi = 0,
            Vr = !1,
            25 <= o)
                throw Error(s(301));
            if (o += 1,
            $t = qt = null,
            t.updateQueue != null) {
                var c = t.updateQueue;
                c.lastEffect = null,
                c.events = null,
                c.stores = null,
                c.memoCache != null && (c.memoCache.index = 0)
            }
            A.H = Wh,
            c = e(a, i)
        } while (Vr);
        return c
    }
    function mb() {
        var t = A.H
          , e = t.useState()[0];
        return e = typeof e.then == "function" ? Vi(e) : e,
        t = t.useState()[0],
        (qt !== null ? qt.memoizedState : null) !== t && (St.flags |= 1024),
        e
    }
    function ju() {
        var t = ss !== 0;
        return ss = 0,
        t
    }
    function Du(t, e, a) {
        e.updateQueue = t.updateQueue,
        e.flags &= -2053,
        t.lanes &= ~a
    }
    function Nu(t) {
        if (ls) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null),
                t = t.next
            }
            ls = !1
        }
        Ln = 0,
        $t = qt = St = null,
        Vr = !1,
        Gi = ss = 0,
        Xr = null
    }
    function Se() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null
        };
        return $t === null ? St.memoizedState = $t = t : $t = $t.next = t,
        $t
    }
    function Jt() {
        if (qt === null) {
            var t = St.alternate;
            t = t !== null ? t.memoizedState : null
        } else
            t = qt.next;
        var e = $t === null ? St.memoizedState : $t.next;
        if (e !== null)
            $t = e,
            qt = t;
        else {
            if (t === null)
                throw St.alternate === null ? Error(s(467)) : Error(s(310));
            qt = t,
            t = {
                memoizedState: qt.memoizedState,
                baseState: qt.baseState,
                baseQueue: qt.baseQueue,
                queue: qt.queue,
                next: null
            },
            $t === null ? St.memoizedState = $t = t : $t = $t.next = t
        }
        return $t
    }
    function os() {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null
        }
    }
    function Vi(t) {
        var e = Gi;
        return Gi += 1,
        Xr === null && (Xr = []),
        t = sh(Xr, t, e),
        e = St,
        ($t === null ? e.memoizedState : $t.next) === null && (e = e.alternate,
        A.H = e === null || e.memoizedState === null ? $h : Vu),
        t
    }
    function us(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function")
                return Vi(t);
            if (t.$$typeof === I)
                return ce(t)
        }
        throw Error(s(438, String(t)))
    }
    function zu(t) {
        var e = null
          , a = St.updateQueue;
        if (a !== null && (e = a.memoCache),
        e == null) {
            var i = St.alternate;
            i !== null && (i = i.updateQueue,
            i !== null && (i = i.memoCache,
            i != null && (e = {
                data: i.data.map(function(o) {
                    return o.slice()
                }),
                index: 0
            })))
        }
        if (e == null && (e = {
            data: [],
            index: 0
        }),
        a === null && (a = os(),
        St.updateQueue = a),
        a.memoCache = e,
        a = e.data[e.index],
        a === void 0)
            for (a = e.data[e.index] = Array(t),
            i = 0; i < t; i++)
                a[i] = W;
        return e.index++,
        a
    }
    function Hn(t, e) {
        return typeof e == "function" ? e(t) : e
    }
    function cs(t) {
        var e = Jt();
        return Uu(e, qt, t)
    }
    function Uu(t, e, a) {
        var i = t.queue;
        if (i === null)
            throw Error(s(311));
        i.lastRenderedReducer = a;
        var o = t.baseQueue
          , c = i.pending;
        if (c !== null) {
            if (o !== null) {
                var p = o.next;
                o.next = c.next,
                c.next = p
            }
            e.baseQueue = o = c,
            i.pending = null
        }
        if (c = t.baseState,
        o === null)
            t.memoizedState = c;
        else {
            e = o.next;
            var g = p = null
              , E = null
              , z = e
              , G = !1;
            do {
                var K = z.lane & -536870913;
                if (K !== z.lane ? (At & K) === K : (Ln & K) === K) {
                    var L = z.revertLane;
                    if (L === 0)
                        E !== null && (E = E.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }),
                        K === Br && (G = !0);
                    else if ((Ln & L) === L) {
                        z = z.next,
                        L === Br && (G = !0);
                        continue
                    } else
                        K = {
                            lane: 0,
                            revertLane: z.revertLane,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        },
                        E === null ? (g = E = K,
                        p = c) : E = E.next = K,
                        St.lanes |= L,
                        ya |= L;
                    K = z.action,
                    er && a(c, K),
                    c = z.hasEagerState ? z.eagerState : a(c, K)
                } else
                    L = {
                        lane: K,
                        revertLane: z.revertLane,
                        gesture: z.gesture,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    },
                    E === null ? (g = E = L,
                    p = c) : E = E.next = L,
                    St.lanes |= K,
                    ya |= K;
                z = z.next
            } while (z !== null && z !== e);
            if (E === null ? p = c : E.next = g,
            !Ue(c, t.memoizedState) && (Wt = !0,
            G && (a = kr,
            a !== null)))
                throw a;
            t.memoizedState = c,
            t.baseState = p,
            t.baseQueue = E,
            i.lastRenderedState = c
        }
        return o === null && (i.lanes = 0),
        [t.memoizedState, i.dispatch]
    }
    function qu(t) {
        var e = Jt()
          , a = e.queue;
        if (a === null)
            throw Error(s(311));
        a.lastRenderedReducer = t;
        var i = a.dispatch
          , o = a.pending
          , c = e.memoizedState;
        if (o !== null) {
            a.pending = null;
            var p = o = o.next;
            do
                c = t(c, p.action),
                p = p.next;
            while (p !== o);
            Ue(c, e.memoizedState) || (Wt = !0),
            e.memoizedState = c,
            e.baseQueue === null && (e.baseState = c),
            a.lastRenderedState = c
        }
        return [c, i]
    }
    function gh(t, e, a) {
        var i = St
          , o = Jt()
          , c = Rt;
        if (c) {
            if (a === void 0)
                throw Error(s(407));
            a = a()
        } else
            a = e();
        var p = !Ue((qt || o).memoizedState, a);
        if (p && (o.memoizedState = a,
        Wt = !0),
        o = o.queue,
        Qu(Sh.bind(null, i, o, t), [t]),
        o.getSnapshot !== e || p || $t !== null && $t.memoizedState.tag & 1) {
            if (i.flags |= 2048,
            Kr(9, {
                destroy: void 0
            }, xh.bind(null, i, o, a, e), null),
            Qt === null)
                throw Error(s(349));
            c || (Ln & 127) !== 0 || bh(i, e, a)
        }
        return a
    }
    function bh(t, e, a) {
        t.flags |= 16384,
        t = {
            getSnapshot: e,
            value: a
        },
        e = St.updateQueue,
        e === null ? (e = os(),
        St.updateQueue = e,
        e.stores = [t]) : (a = e.stores,
        a === null ? e.stores = [t] : a.push(t))
    }
    function xh(t, e, a, i) {
        e.value = a,
        e.getSnapshot = i,
        wh(e) && Eh(t)
    }
    function Sh(t, e, a) {
        return a(function() {
            wh(e) && Eh(t)
        })
    }
    function wh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var a = e();
            return !Ue(t, a)
        } catch {
            return !0
        }
    }
    function Eh(t) {
        var e = Xa(t, 2);
        e !== null && De(e, t, 2)
    }
    function Lu(t) {
        var e = Se();
        if (typeof t == "function") {
            var a = t;
            if (t = a(),
            er) {
                rn(!0);
                try {
                    a()
                } finally {
                    rn(!1)
                }
            }
        }
        return e.memoizedState = e.baseState = t,
        e.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Hn,
            lastRenderedState: t
        },
        e
    }
    function Oh(t, e, a, i) {
        return t.baseState = a,
        Uu(t, qt, typeof i == "function" ? i : Hn)
    }
    function pb(t, e, a, i, o) {
        if (hs(t))
            throw Error(s(485));
        if (t = e.action,
        t !== null) {
            var c = {
                payload: o,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function(p) {
                    c.listeners.push(p)
                }
            };
            A.T !== null ? a(!0) : c.isTransition = !1,
            i(c),
            a = e.pending,
            a === null ? (c.next = e.pending = c,
            _h(e, c)) : (c.next = a.next,
            e.pending = a.next = c)
        }
    }
    function _h(t, e) {
        var a = e.action
          , i = e.payload
          , o = t.state;
        if (e.isTransition) {
            var c = A.T
              , p = {};
            A.T = p;
            try {
                var g = a(o, i)
                  , E = A.S;
                E !== null && E(p, g),
                Ah(t, e, g)
            } catch (z) {
                Hu(t, e, z)
            } finally {
                c !== null && p.types !== null && (c.types = p.types),
                A.T = c
            }
        } else
            try {
                c = a(o, i),
                Ah(t, e, c)
            } catch (z) {
                Hu(t, e, z)
            }
    }
    function Ah(t, e, a) {
        a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(i) {
            Th(t, e, i)
        }, function(i) {
            return Hu(t, e, i)
        }) : Th(t, e, a)
    }
    function Th(t, e, a) {
        e.status = "fulfilled",
        e.value = a,
        Ch(e),
        t.state = a,
        e = t.pending,
        e !== null && (a = e.next,
        a === e ? t.pending = null : (a = a.next,
        e.next = a,
        _h(t, a)))
    }
    function Hu(t, e, a) {
        var i = t.pending;
        if (t.pending = null,
        i !== null) {
            i = i.next;
            do
                e.status = "rejected",
                e.reason = a,
                Ch(e),
                e = e.next;
            while (e !== i)
        }
        t.action = null
    }
    function Ch(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++)
            (0,
            t[e])()
    }
    function Rh(t, e) {
        return e
    }
    function Mh(t, e) {
        if (Rt) {
            var a = Qt.formState;
            if (a !== null) {
                t: {
                    var i = St;
                    if (Rt) {
                        if (Bt) {
                            e: {
                                for (var o = Bt, c = $e; o.nodeType !== 8; ) {
                                    if (!c) {
                                        o = null;
                                        break e
                                    }
                                    if (o = tn(o.nextSibling),
                                    o === null) {
                                        o = null;
                                        break e
                                    }
                                }
                                c = o.data,
                                o = c === "F!" || c === "F" ? o : null
                            }
                            if (o) {
                                Bt = tn(o.nextSibling),
                                i = o.data === "F!";
                                break t
                            }
                        }
                        sa(i)
                    }
                    i = !1
                }
                i && (e = a[0])
            }
        }
        return a = Se(),
        a.memoizedState = a.baseState = e,
        i = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Rh,
            lastRenderedState: e
        },
        a.queue = i,
        a = Jh.bind(null, St, i),
        i.dispatch = a,
        i = Lu(!1),
        c = Gu.bind(null, St, !1, i.queue),
        i = Se(),
        o = {
            state: e,
            dispatch: null,
            action: t,
            pending: null
        },
        i.queue = o,
        a = pb.bind(null, St, o, c, a),
        o.dispatch = a,
        i.memoizedState = t,
        [e, a, !1]
    }
    function jh(t) {
        var e = Jt();
        return Dh(e, qt, t)
    }
    function Dh(t, e, a) {
        if (e = Uu(t, e, Rh)[0],
        t = cs(Hn)[0],
        typeof e == "object" && e !== null && typeof e.then == "function")
            try {
                var i = Vi(e)
            } catch (p) {
                throw p === Pr ? ts : p
            }
        else
            i = e;
        e = Jt();
        var o = e.queue
          , c = o.dispatch;
        return a !== e.memoizedState && (St.flags |= 2048,
        Kr(9, {
            destroy: void 0
        }, yb.bind(null, o, a), null)),
        [i, c, t]
    }
    function yb(t, e) {
        t.action = e
    }
    function Nh(t) {
        var e = Jt()
          , a = qt;
        if (a !== null)
            return Dh(e, a, t);
        Jt(),
        e = e.memoizedState,
        a = Jt();
        var i = a.queue.dispatch;
        return a.memoizedState = t,
        [e, i, !1]
    }
    function Kr(t, e, a, i) {
        return t = {
            tag: t,
            create: a,
            deps: i,
            inst: e,
            next: null
        },
        e = St.updateQueue,
        e === null && (e = os(),
        St.updateQueue = e),
        a = e.lastEffect,
        a === null ? e.lastEffect = t.next = t : (i = a.next,
        a.next = t,
        t.next = i,
        e.lastEffect = t),
        t
    }
    function zh() {
        return Jt().memoizedState
    }
    function fs(t, e, a, i) {
        var o = Se();
        St.flags |= t,
        o.memoizedState = Kr(1 | e, {
            destroy: void 0
        }, a, i === void 0 ? null : i)
    }
    function ds(t, e, a, i) {
        var o = Jt();
        i = i === void 0 ? null : i;
        var c = o.memoizedState.inst;
        qt !== null && i !== null && Ru(i, qt.memoizedState.deps) ? o.memoizedState = Kr(e, c, a, i) : (St.flags |= t,
        o.memoizedState = Kr(1 | e, c, a, i))
    }
    function Uh(t, e) {
        fs(8390656, 8, t, e)
    }
    function Qu(t, e) {
        ds(2048, 8, t, e)
    }
    function vb(t) {
        St.flags |= 4;
        var e = St.updateQueue;
        if (e === null)
            e = os(),
            St.updateQueue = e,
            e.events = [t];
        else {
            var a = e.events;
            a === null ? e.events = [t] : a.push(t)
        }
    }
    function qh(t) {
        var e = Jt().memoizedState;
        return vb({
            ref: e,
            nextImpl: t
        }),
        function() {
            if ((Nt & 2) !== 0)
                throw Error(s(440));
            return e.impl.apply(void 0, arguments)
        }
    }
    function Lh(t, e) {
        return ds(4, 2, t, e)
    }
    function Hh(t, e) {
        return ds(4, 4, t, e)
    }
    function Qh(t, e) {
        if (typeof e == "function") {
            t = t();
            var a = e(t);
            return function() {
                typeof a == "function" ? a() : e(null)
            }
        }
        if (e != null)
            return t = t(),
            e.current = t,
            function() {
                e.current = null
            }
    }
    function Bh(t, e, a) {
        a = a != null ? a.concat([t]) : null,
        ds(4, 4, Qh.bind(null, e, t), a)
    }
    function Bu() {}
    function kh(t, e) {
        var a = Jt();
        e = e === void 0 ? null : e;
        var i = a.memoizedState;
        return e !== null && Ru(e, i[1]) ? i[0] : (a.memoizedState = [t, e],
        t)
    }
    function Ph(t, e) {
        var a = Jt();
        e = e === void 0 ? null : e;
        var i = a.memoizedState;
        if (e !== null && Ru(e, i[1]))
            return i[0];
        if (i = t(),
        er) {
            rn(!0);
            try {
                t()
            } finally {
                rn(!1)
            }
        }
        return a.memoizedState = [i, e],
        i
    }
    function ku(t, e, a) {
        return a === void 0 || (Ln & 1073741824) !== 0 && (At & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = a,
        t = Ym(),
        St.lanes |= t,
        ya |= t,
        a)
    }
    function Yh(t, e, a, i) {
        return Ue(a, e) ? a : Gr.current !== null ? (t = ku(t, a, i),
        Ue(t, e) || (Wt = !0),
        t) : (Ln & 42) === 0 || (Ln & 1073741824) !== 0 && (At & 261930) === 0 ? (Wt = !0,
        t.memoizedState = a) : (t = Ym(),
        St.lanes |= t,
        ya |= t,
        e)
    }
    function Gh(t, e, a, i, o) {
        var c = Q.p;
        Q.p = c !== 0 && 8 > c ? c : 8;
        var p = A.T
          , g = {};
        A.T = g,
        Gu(t, !1, e, a);
        try {
            var E = o()
              , z = A.S;
            if (z !== null && z(g, E),
            E !== null && typeof E == "object" && typeof E.then == "function") {
                var G = db(E, i);
                Xi(t, e, G, ke(t))
            } else
                Xi(t, e, i, ke(t))
        } catch (K) {
            Xi(t, e, {
                then: function() {},
                status: "rejected",
                reason: K
            }, ke())
        } finally {
            Q.p = c,
            p !== null && g.types !== null && (p.types = g.types),
            A.T = p
        }
    }
    function gb() {}
    function Pu(t, e, a, i) {
        if (t.tag !== 5)
            throw Error(s(476));
        var o = Vh(t).queue;
        Gh(t, o, e, D, a === null ? gb : function() {
            return Xh(t),
            a(i)
        }
        )
    }
    function Vh(t) {
        var e = t.memoizedState;
        if (e !== null)
            return e;
        e = {
            memoizedState: D,
            baseState: D,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Hn,
                lastRenderedState: D
            },
            next: null
        };
        var a = {};
        return e.next = {
            memoizedState: a,
            baseState: a,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Hn,
                lastRenderedState: a
            },
            next: null
        },
        t.memoizedState = e,
        t = t.alternate,
        t !== null && (t.memoizedState = e),
        e
    }
    function Xh(t) {
        var e = Vh(t);
        e.next === null && (e = t.alternate.memoizedState),
        Xi(t, e.next.queue, {}, ke())
    }
    function Yu() {
        return ce(ul)
    }
    function Kh() {
        return Jt().memoizedState
    }
    function Zh() {
        return Jt().memoizedState
    }
    function bb(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
            case 24:
            case 3:
                var a = ke();
                t = ca(a);
                var i = fa(e, t, a);
                i !== null && (De(i, e, a),
                ki(i, e, a)),
                e = {
                    cache: gu()
                },
                t.payload = e;
                return
            }
            e = e.return
        }
    }
    function xb(t, e, a) {
        var i = ke();
        a = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        hs(t) ? Fh(e, a) : (a = su(t, e, a, i),
        a !== null && (De(a, t, i),
        Ih(a, e, i)))
    }
    function Jh(t, e, a) {
        var i = ke();
        Xi(t, e, a, i)
    }
    function Xi(t, e, a, i) {
        var o = {
            lane: i,
            revertLane: 0,
            gesture: null,
            action: a,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
        if (hs(t))
            Fh(e, o);
        else {
            var c = t.alternate;
            if (t.lanes === 0 && (c === null || c.lanes === 0) && (c = e.lastRenderedReducer,
            c !== null))
                try {
                    var p = e.lastRenderedState
                      , g = c(p, a);
                    if (o.hasEagerState = !0,
                    o.eagerState = g,
                    Ue(g, p))
                        return Kl(t, e, o, 0),
                        Qt === null && Xl(),
                        !1
                } catch {} finally {}
            if (a = su(t, e, o, i),
            a !== null)
                return De(a, t, i),
                Ih(a, e, i),
                !0
        }
        return !1
    }
    function Gu(t, e, a, i) {
        if (i = {
            lane: 2,
            revertLane: wc(),
            gesture: null,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null
        },
        hs(t)) {
            if (e)
                throw Error(s(479))
        } else
            e = su(t, a, i, 2),
            e !== null && De(e, t, 2)
    }
    function hs(t) {
        var e = t.alternate;
        return t === St || e !== null && e === St
    }
    function Fh(t, e) {
        Vr = ls = !0;
        var a = t.pending;
        a === null ? e.next = e : (e.next = a.next,
        a.next = e),
        t.pending = e
    }
    function Ih(t, e, a) {
        if ((a & 4194048) !== 0) {
            var i = e.lanes;
            i &= t.pendingLanes,
            a |= i,
            e.lanes = a,
            Oe(t, a)
        }
    }
    var Ki = {
        readContext: ce,
        use: us,
        useCallback: Vt,
        useContext: Vt,
        useEffect: Vt,
        useImperativeHandle: Vt,
        useLayoutEffect: Vt,
        useInsertionEffect: Vt,
        useMemo: Vt,
        useReducer: Vt,
        useRef: Vt,
        useState: Vt,
        useDebugValue: Vt,
        useDeferredValue: Vt,
        useTransition: Vt,
        useSyncExternalStore: Vt,
        useId: Vt,
        useHostTransitionStatus: Vt,
        useFormState: Vt,
        useActionState: Vt,
        useOptimistic: Vt,
        useMemoCache: Vt,
        useCacheRefresh: Vt
    };
    Ki.useEffectEvent = Vt;
    var $h = {
        readContext: ce,
        use: us,
        useCallback: function(t, e) {
            return Se().memoizedState = [t, e === void 0 ? null : e],
            t
        },
        useContext: ce,
        useEffect: Uh,
        useImperativeHandle: function(t, e, a) {
            a = a != null ? a.concat([t]) : null,
            fs(4194308, 4, Qh.bind(null, e, t), a)
        },
        useLayoutEffect: function(t, e) {
            return fs(4194308, 4, t, e)
        },
        useInsertionEffect: function(t, e) {
            fs(4, 2, t, e)
        },
        useMemo: function(t, e) {
            var a = Se();
            e = e === void 0 ? null : e;
            var i = t();
            if (er) {
                rn(!0);
                try {
                    t()
                } finally {
                    rn(!1)
                }
            }
            return a.memoizedState = [i, e],
            i
        },
        useReducer: function(t, e, a) {
            var i = Se();
            if (a !== void 0) {
                var o = a(e);
                if (er) {
                    rn(!0);
                    try {
                        a(e)
                    } finally {
                        rn(!1)
                    }
                }
            } else
                o = e;
            return i.memoizedState = i.baseState = o,
            t = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: t,
                lastRenderedState: o
            },
            i.queue = t,
            t = t.dispatch = xb.bind(null, St, t),
            [i.memoizedState, t]
        },
        useRef: function(t) {
            var e = Se();
            return t = {
                current: t
            },
            e.memoizedState = t
        },
        useState: function(t) {
            t = Lu(t);
            var e = t.queue
              , a = Jh.bind(null, St, e);
            return e.dispatch = a,
            [t.memoizedState, a]
        },
        useDebugValue: Bu,
        useDeferredValue: function(t, e) {
            var a = Se();
            return ku(a, t, e)
        },
        useTransition: function() {
            var t = Lu(!1);
            return t = Gh.bind(null, St, t.queue, !0, !1),
            Se().memoizedState = t,
            [!1, t]
        },
        useSyncExternalStore: function(t, e, a) {
            var i = St
              , o = Se();
            if (Rt) {
                if (a === void 0)
                    throw Error(s(407));
                a = a()
            } else {
                if (a = e(),
                Qt === null)
                    throw Error(s(349));
                (At & 127) !== 0 || bh(i, e, a)
            }
            o.memoizedState = a;
            var c = {
                value: a,
                getSnapshot: e
            };
            return o.queue = c,
            Uh(Sh.bind(null, i, c, t), [t]),
            i.flags |= 2048,
            Kr(9, {
                destroy: void 0
            }, xh.bind(null, i, c, a, e), null),
            a
        },
        useId: function() {
            var t = Se()
              , e = Qt.identifierPrefix;
            if (Rt) {
                var a = vn
                  , i = yn;
                a = (i & ~(1 << 32 - he(i) - 1)).toString(32) + a,
                e = "_" + e + "R_" + a,
                a = ss++,
                0 < a && (e += "H" + a.toString(32)),
                e += "_"
            } else
                a = hb++,
                e = "_" + e + "r_" + a.toString(32) + "_";
            return t.memoizedState = e
        },
        useHostTransitionStatus: Yu,
        useFormState: Mh,
        useActionState: Mh,
        useOptimistic: function(t) {
            var e = Se();
            e.memoizedState = e.baseState = t;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return e.queue = a,
            e = Gu.bind(null, St, !0, a),
            a.dispatch = e,
            [t, e]
        },
        useMemoCache: zu,
        useCacheRefresh: function() {
            return Se().memoizedState = bb.bind(null, St)
        },
        useEffectEvent: function(t) {
            var e = Se()
              , a = {
                impl: t
            };
            return e.memoizedState = a,
            function() {
                if ((Nt & 2) !== 0)
                    throw Error(s(440));
                return a.impl.apply(void 0, arguments)
            }
        }
    }
      , Vu = {
        readContext: ce,
        use: us,
        useCallback: kh,
        useContext: ce,
        useEffect: Qu,
        useImperativeHandle: Bh,
        useInsertionEffect: Lh,
        useLayoutEffect: Hh,
        useMemo: Ph,
        useReducer: cs,
        useRef: zh,
        useState: function() {
            return cs(Hn)
        },
        useDebugValue: Bu,
        useDeferredValue: function(t, e) {
            var a = Jt();
            return Yh(a, qt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = cs(Hn)[0]
              , e = Jt().memoizedState;
            return [typeof t == "boolean" ? t : Vi(t), e]
        },
        useSyncExternalStore: gh,
        useId: Kh,
        useHostTransitionStatus: Yu,
        useFormState: jh,
        useActionState: jh,
        useOptimistic: function(t, e) {
            var a = Jt();
            return Oh(a, qt, t, e)
        },
        useMemoCache: zu,
        useCacheRefresh: Zh
    };
    Vu.useEffectEvent = qh;
    var Wh = {
        readContext: ce,
        use: us,
        useCallback: kh,
        useContext: ce,
        useEffect: Qu,
        useImperativeHandle: Bh,
        useInsertionEffect: Lh,
        useLayoutEffect: Hh,
        useMemo: Ph,
        useReducer: qu,
        useRef: zh,
        useState: function() {
            return qu(Hn)
        },
        useDebugValue: Bu,
        useDeferredValue: function(t, e) {
            var a = Jt();
            return qt === null ? ku(a, t, e) : Yh(a, qt.memoizedState, t, e)
        },
        useTransition: function() {
            var t = qu(Hn)[0]
              , e = Jt().memoizedState;
            return [typeof t == "boolean" ? t : Vi(t), e]
        },
        useSyncExternalStore: gh,
        useId: Kh,
        useHostTransitionStatus: Yu,
        useFormState: Nh,
        useActionState: Nh,
        useOptimistic: function(t, e) {
            var a = Jt();
            return qt !== null ? Oh(a, qt, t, e) : (a.baseState = t,
            [t, a.queue.dispatch])
        },
        useMemoCache: zu,
        useCacheRefresh: Zh
    };
    Wh.useEffectEvent = qh;
    function Xu(t, e, a, i) {
        e = t.memoizedState,
        a = a(i, e),
        a = a == null ? e : v({}, e, a),
        t.memoizedState = a,
        t.lanes === 0 && (t.updateQueue.baseState = a)
    }
    var Ku = {
        enqueueSetState: function(t, e, a) {
            t = t._reactInternals;
            var i = ke()
              , o = ca(i);
            o.payload = e,
            a != null && (o.callback = a),
            e = fa(t, o, i),
            e !== null && (De(e, t, i),
            ki(e, t, i))
        },
        enqueueReplaceState: function(t, e, a) {
            t = t._reactInternals;
            var i = ke()
              , o = ca(i);
            o.tag = 1,
            o.payload = e,
            a != null && (o.callback = a),
            e = fa(t, o, i),
            e !== null && (De(e, t, i),
            ki(e, t, i))
        },
        enqueueForceUpdate: function(t, e) {
            t = t._reactInternals;
            var a = ke()
              , i = ca(a);
            i.tag = 2,
            e != null && (i.callback = e),
            e = fa(t, i, a),
            e !== null && (De(e, t, a),
            ki(e, t, a))
        }
    };
    function tm(t, e, a, i, o, c, p) {
        return t = t.stateNode,
        typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(i, c, p) : e.prototype && e.prototype.isPureReactComponent ? !Ni(a, i) || !Ni(o, c) : !0
    }
    function em(t, e, a, i) {
        t = e.state,
        typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(a, i),
        typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(a, i),
        e.state !== t && Ku.enqueueReplaceState(e, e.state, null)
    }
    function nr(t, e) {
        var a = e;
        if ("ref"in e) {
            a = {};
            for (var i in e)
                i !== "ref" && (a[i] = e[i])
        }
        if (t = t.defaultProps) {
            a === e && (a = v({}, a));
            for (var o in t)
                a[o] === void 0 && (a[o] = t[o])
        }
        return a
    }
    function nm(t) {
        Vl(t)
    }
    function am(t) {
        console.error(t)
    }
    function rm(t) {
        Vl(t)
    }
    function ms(t, e) {
        try {
            var a = t.onUncaughtError;
            a(e.value, {
                componentStack: e.stack
            })
        } catch (i) {
            setTimeout(function() {
                throw i
            })
        }
    }
    function im(t, e, a) {
        try {
            var i = t.onCaughtError;
            i(a.value, {
                componentStack: a.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null
            })
        } catch (o) {
            setTimeout(function() {
                throw o
            })
        }
    }
    function Zu(t, e, a) {
        return a = ca(a),
        a.tag = 3,
        a.payload = {
            element: null
        },
        a.callback = function() {
            ms(t, e)
        }
        ,
        a
    }
    function lm(t) {
        return t = ca(t),
        t.tag = 3,
        t
    }
    function sm(t, e, a, i) {
        var o = a.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = i.value;
            t.payload = function() {
                return o(c)
            }
            ,
            t.callback = function() {
                im(e, a, i)
            }
        }
        var p = a.stateNode;
        p !== null && typeof p.componentDidCatch == "function" && (t.callback = function() {
            im(e, a, i),
            typeof o != "function" && (va === null ? va = new Set([this]) : va.add(this));
            var g = i.stack;
            this.componentDidCatch(i.value, {
                componentStack: g !== null ? g : ""
            })
        }
        )
    }
    function Sb(t, e, a, i, o) {
        if (a.flags |= 32768,
        i !== null && typeof i == "object" && typeof i.then == "function") {
            if (e = a.alternate,
            e !== null && Qr(e, a, o, !0),
            a = Le.current,
            a !== null) {
                switch (a.tag) {
                case 31:
                case 13:
                    return We === null ? As() : a.alternate === null && Xt === 0 && (Xt = 3),
                    a.flags &= -257,
                    a.flags |= 65536,
                    a.lanes = o,
                    i === es ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? a.updateQueue = new Set([i]) : e.add(i),
                    bc(t, i, o)),
                    !1;
                case 22:
                    return a.flags |= 65536,
                    i === es ? a.flags |= 16384 : (e = a.updateQueue,
                    e === null ? (e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([i])
                    },
                    a.updateQueue = e) : (a = e.retryQueue,
                    a === null ? e.retryQueue = new Set([i]) : a.add(i)),
                    bc(t, i, o)),
                    !1
                }
                throw Error(s(435, a.tag))
            }
            return bc(t, i, o),
            As(),
            !1
        }
        if (Rt)
            return e = Le.current,
            e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            e.flags |= 65536,
            e.lanes = o,
            i !== hu && (t = Error(s(422), {
                cause: i
            }),
            qi(Je(t, a)))) : (i !== hu && (e = Error(s(423), {
                cause: i
            }),
            qi(Je(e, a))),
            t = t.current.alternate,
            t.flags |= 65536,
            o &= -o,
            t.lanes |= o,
            i = Je(i, a),
            o = Zu(t.stateNode, i, o),
            Ou(t, o),
            Xt !== 4 && (Xt = 2)),
            !1;
        var c = Error(s(520), {
            cause: i
        });
        if (c = Je(c, a),
        el === null ? el = [c] : el.push(c),
        Xt !== 4 && (Xt = 2),
        e === null)
            return !0;
        i = Je(i, a),
        a = e;
        do {
            switch (a.tag) {
            case 3:
                return a.flags |= 65536,
                t = o & -o,
                a.lanes |= t,
                t = Zu(a.stateNode, i, t),
                Ou(a, t),
                !1;
            case 1:
                if (e = a.type,
                c = a.stateNode,
                (a.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (va === null || !va.has(c))))
                    return a.flags |= 65536,
                    o &= -o,
                    a.lanes |= o,
                    o = lm(o),
                    sm(o, t, a, i),
                    Ou(a, o),
                    !1
            }
            a = a.return
        } while (a !== null);
        return !1
    }
    var Ju = Error(s(461))
      , Wt = !1;
    function fe(t, e, a, i) {
        e.child = t === null ? fh(e, null, a, i) : tr(e, t.child, a, i)
    }
    function om(t, e, a, i, o) {
        a = a.render;
        var c = e.ref;
        if ("ref"in i) {
            var p = {};
            for (var g in i)
                g !== "ref" && (p[g] = i[g])
        } else
            p = i;
        return Fa(e),
        i = Mu(t, e, a, p, c, o),
        g = ju(),
        t !== null && !Wt ? (Du(t, e, o),
        Qn(t, e, o)) : (Rt && g && fu(e),
        e.flags |= 1,
        fe(t, e, i, o),
        e.child)
    }
    function um(t, e, a, i, o) {
        if (t === null) {
            var c = a.type;
            return typeof c == "function" && !ou(c) && c.defaultProps === void 0 && a.compare === null ? (e.tag = 15,
            e.type = c,
            cm(t, e, c, i, o)) : (t = Jl(a.type, null, i, e, e.mode, o),
            t.ref = e.ref,
            t.return = e,
            e.child = t)
        }
        if (c = t.child,
        !ac(t, o)) {
            var p = c.memoizedProps;
            if (a = a.compare,
            a = a !== null ? a : Ni,
            a(p, i) && t.ref === e.ref)
                return Qn(t, e, o)
        }
        return e.flags |= 1,
        t = Nn(c, i),
        t.ref = e.ref,
        t.return = e,
        e.child = t
    }
    function cm(t, e, a, i, o) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (Ni(c, i) && t.ref === e.ref)
                if (Wt = !1,
                e.pendingProps = i = c,
                ac(t, o))
                    (t.flags & 131072) !== 0 && (Wt = !0);
                else
                    return e.lanes = t.lanes,
                    Qn(t, e, o)
        }
        return Fu(t, e, a, i, o)
    }
    function fm(t, e, a, i) {
        var o = i.children
          , c = t !== null ? t.memoizedState : null;
        if (t === null && e.stateNode === null && (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        i.mode === "hidden") {
            if ((e.flags & 128) !== 0) {
                if (c = c !== null ? c.baseLanes | a : a,
                t !== null) {
                    for (i = e.child = t.child,
                    o = 0; i !== null; )
                        o = o | i.lanes | i.childLanes,
                        i = i.sibling;
                    i = o & ~c
                } else
                    i = 0,
                    e.child = null;
                return dm(t, e, c, a, i)
            }
            if ((a & 536870912) !== 0)
                e.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                },
                t !== null && Wl(e, c !== null ? c.cachePool : null),
                c !== null ? mh(e, c) : Au(),
                ph(e);
            else
                return i = e.lanes = 536870912,
                dm(t, e, c !== null ? c.baseLanes | a : a, a, i)
        } else
            c !== null ? (Wl(e, c.cachePool),
            mh(e, c),
            ha(),
            e.memoizedState = null) : (t !== null && Wl(e, null),
            Au(),
            ha());
        return fe(t, e, o, a),
        e.child
    }
    function Zi(t, e) {
        return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
            _visibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null
        }),
        e.sibling
    }
    function dm(t, e, a, i, o) {
        var c = xu();
        return c = c === null ? null : {
            parent: It._currentValue,
            pool: c
        },
        e.memoizedState = {
            baseLanes: a,
            cachePool: c
        },
        t !== null && Wl(e, null),
        Au(),
        ph(e),
        t !== null && Qr(t, e, i, !0),
        e.childLanes = o,
        null
    }
    function ps(t, e) {
        return e = vs({
            mode: e.mode,
            children: e.children
        }, t.mode),
        e.ref = t.ref,
        t.child = e,
        e.return = t,
        e
    }
    function hm(t, e, a) {
        return tr(e, t.child, null, a),
        t = ps(e, e.pendingProps),
        t.flags |= 2,
        He(e),
        e.memoizedState = null,
        t
    }
    function wb(t, e, a) {
        var i = e.pendingProps
          , o = (e.flags & 128) !== 0;
        if (e.flags &= -129,
        t === null) {
            if (Rt) {
                if (i.mode === "hidden")
                    return t = ps(e, i),
                    e.lanes = 536870912,
                    Zi(null, t);
                if (Cu(e),
                (t = Bt) ? (t = _p(t, $e),
                t = t !== null && t.data === "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: ia !== null ? {
                        id: yn,
                        overflow: vn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = Fd(t),
                a.return = e,
                e.child = a,
                ue = e,
                Bt = null)) : t = null,
                t === null)
                    throw sa(e);
                return e.lanes = 536870912,
                null
            }
            return ps(e, i)
        }
        var c = t.memoizedState;
        if (c !== null) {
            var p = c.dehydrated;
            if (Cu(e),
            o)
                if (e.flags & 256)
                    e.flags &= -257,
                    e = hm(t, e, a);
                else if (e.memoizedState !== null)
                    e.child = t.child,
                    e.flags |= 128,
                    e = null;
                else
                    throw Error(s(558));
            else if (Wt || Qr(t, e, a, !1),
            o = (a & t.childLanes) !== 0,
            Wt || o) {
                if (i = Qt,
                i !== null && (p = _e(i, a),
                p !== 0 && p !== c.retryLane))
                    throw c.retryLane = p,
                    Xa(t, p),
                    De(i, t, p),
                    Ju;
                As(),
                e = hm(t, e, a)
            } else
                t = c.treeContext,
                Bt = tn(p.nextSibling),
                ue = e,
                Rt = !0,
                la = null,
                $e = !1,
                t !== null && Wd(e, t),
                e = ps(e, i),
                e.flags |= 4096;
            return e
        }
        return t = Nn(t.child, {
            mode: i.mode,
            children: i.children
        }),
        t.ref = e.ref,
        e.child = t,
        t.return = e,
        t
    }
    function ys(t, e) {
        var a = e.ref;
        if (a === null)
            t !== null && t.ref !== null && (e.flags |= 4194816);
        else {
            if (typeof a != "function" && typeof a != "object")
                throw Error(s(284));
            (t === null || t.ref !== a) && (e.flags |= 4194816)
        }
    }
    function Fu(t, e, a, i, o) {
        return Fa(e),
        a = Mu(t, e, a, i, void 0, o),
        i = ju(),
        t !== null && !Wt ? (Du(t, e, o),
        Qn(t, e, o)) : (Rt && i && fu(e),
        e.flags |= 1,
        fe(t, e, a, o),
        e.child)
    }
    function mm(t, e, a, i, o, c) {
        return Fa(e),
        e.updateQueue = null,
        a = vh(e, i, a, o),
        yh(t),
        i = ju(),
        t !== null && !Wt ? (Du(t, e, c),
        Qn(t, e, c)) : (Rt && i && fu(e),
        e.flags |= 1,
        fe(t, e, a, c),
        e.child)
    }
    function pm(t, e, a, i, o) {
        if (Fa(e),
        e.stateNode === null) {
            var c = Ur
              , p = a.contextType;
            typeof p == "object" && p !== null && (c = ce(p)),
            c = new a(i,c),
            e.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null,
            c.updater = Ku,
            e.stateNode = c,
            c._reactInternals = e,
            c = e.stateNode,
            c.props = i,
            c.state = e.memoizedState,
            c.refs = {},
            wu(e),
            p = a.contextType,
            c.context = typeof p == "object" && p !== null ? ce(p) : Ur,
            c.state = e.memoizedState,
            p = a.getDerivedStateFromProps,
            typeof p == "function" && (Xu(e, a, p, i),
            c.state = e.memoizedState),
            typeof a.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (p = c.state,
            typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(),
            p !== c.state && Ku.enqueueReplaceState(c, c.state, null),
            Yi(e, i, c, o),
            Pi(),
            c.state = e.memoizedState),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            i = !0
        } else if (t === null) {
            c = e.stateNode;
            var g = e.memoizedProps
              , E = nr(a, g);
            c.props = E;
            var z = c.context
              , G = a.contextType;
            p = Ur,
            typeof G == "object" && G !== null && (p = ce(G));
            var K = a.getDerivedStateFromProps;
            G = typeof K == "function" || typeof c.getSnapshotBeforeUpdate == "function",
            g = e.pendingProps !== g,
            G || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (g || z !== p) && em(e, c, i, p),
            ua = !1;
            var L = e.memoizedState;
            c.state = L,
            Yi(e, i, c, o),
            Pi(),
            z = e.memoizedState,
            g || L !== z || ua ? (typeof K == "function" && (Xu(e, a, K, i),
            z = e.memoizedState),
            (E = ua || tm(e, a, E, i, L, z, p)) ? (G || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (typeof c.componentWillMount == "function" && c.componentWillMount(),
            typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount()),
            typeof c.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            e.memoizedProps = i,
            e.memoizedState = z),
            c.props = i,
            c.state = z,
            c.context = p,
            i = E) : (typeof c.componentDidMount == "function" && (e.flags |= 4194308),
            i = !1)
        } else {
            c = e.stateNode,
            Eu(t, e),
            p = e.memoizedProps,
            G = nr(a, p),
            c.props = G,
            K = e.pendingProps,
            L = c.context,
            z = a.contextType,
            E = Ur,
            typeof z == "object" && z !== null && (E = ce(z)),
            g = a.getDerivedStateFromProps,
            (z = typeof g == "function" || typeof c.getSnapshotBeforeUpdate == "function") || typeof c.UNSAFE_componentWillReceiveProps != "function" && typeof c.componentWillReceiveProps != "function" || (p !== K || L !== E) && em(e, c, i, E),
            ua = !1,
            L = e.memoizedState,
            c.state = L,
            Yi(e, i, c, o),
            Pi();
            var k = e.memoizedState;
            p !== K || L !== k || ua || t !== null && t.dependencies !== null && Il(t.dependencies) ? (typeof g == "function" && (Xu(e, a, g, i),
            k = e.memoizedState),
            (G = ua || tm(e, a, G, i, L, k, E) || t !== null && t.dependencies !== null && Il(t.dependencies)) ? (z || typeof c.UNSAFE_componentWillUpdate != "function" && typeof c.componentWillUpdate != "function" || (typeof c.componentWillUpdate == "function" && c.componentWillUpdate(i, k, E),
            typeof c.UNSAFE_componentWillUpdate == "function" && c.UNSAFE_componentWillUpdate(i, k, E)),
            typeof c.componentDidUpdate == "function" && (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            e.memoizedProps = i,
            e.memoizedState = k),
            c.props = i,
            c.state = k,
            c.context = E,
            i = G) : (typeof c.componentDidUpdate != "function" || p === t.memoizedProps && L === t.memoizedState || (e.flags |= 4),
            typeof c.getSnapshotBeforeUpdate != "function" || p === t.memoizedProps && L === t.memoizedState || (e.flags |= 1024),
            i = !1)
        }
        return c = i,
        ys(t, e),
        i = (e.flags & 128) !== 0,
        c || i ? (c = e.stateNode,
        a = i && typeof a.getDerivedStateFromError != "function" ? null : c.render(),
        e.flags |= 1,
        t !== null && i ? (e.child = tr(e, t.child, null, o),
        e.child = tr(e, null, a, o)) : fe(t, e, a, o),
        e.memoizedState = c.state,
        t = e.child) : t = Qn(t, e, o),
        t
    }
    function ym(t, e, a, i) {
        return Za(),
        e.flags |= 256,
        fe(t, e, a, i),
        e.child
    }
    var Iu = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null
    };
    function $u(t) {
        return {
            baseLanes: t,
            cachePool: ih()
        }
    }
    function Wu(t, e, a) {
        return t = t !== null ? t.childLanes & ~a : 0,
        e && (t |= Be),
        t
    }
    function vm(t, e, a) {
        var i = e.pendingProps, o = !1, c = (e.flags & 128) !== 0, p;
        if ((p = c) || (p = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0),
        p && (o = !0,
        e.flags &= -129),
        p = (e.flags & 32) !== 0,
        e.flags &= -33,
        t === null) {
            if (Rt) {
                if (o ? da(e) : ha(),
                (t = Bt) ? (t = _p(t, $e),
                t = t !== null && t.data !== "&" ? t : null,
                t !== null && (e.memoizedState = {
                    dehydrated: t,
                    treeContext: ia !== null ? {
                        id: yn,
                        overflow: vn
                    } : null,
                    retryLane: 536870912,
                    hydrationErrors: null
                },
                a = Fd(t),
                a.return = e,
                e.child = a,
                ue = e,
                Bt = null)) : t = null,
                t === null)
                    throw sa(e);
                return Uc(t) ? e.lanes = 32 : e.lanes = 536870912,
                null
            }
            var g = i.children;
            return i = i.fallback,
            o ? (ha(),
            o = e.mode,
            g = vs({
                mode: "hidden",
                children: g
            }, o),
            i = Ka(i, o, a, null),
            g.return = e,
            i.return = e,
            g.sibling = i,
            e.child = g,
            i = e.child,
            i.memoizedState = $u(a),
            i.childLanes = Wu(t, p, a),
            e.memoizedState = Iu,
            Zi(null, i)) : (da(e),
            tc(e, g))
        }
        var E = t.memoizedState;
        if (E !== null && (g = E.dehydrated,
        g !== null)) {
            if (c)
                e.flags & 256 ? (da(e),
                e.flags &= -257,
                e = ec(t, e, a)) : e.memoizedState !== null ? (ha(),
                e.child = t.child,
                e.flags |= 128,
                e = null) : (ha(),
                g = i.fallback,
                o = e.mode,
                i = vs({
                    mode: "visible",
                    children: i.children
                }, o),
                g = Ka(g, o, a, null),
                g.flags |= 2,
                i.return = e,
                g.return = e,
                i.sibling = g,
                e.child = i,
                tr(e, t.child, null, a),
                i = e.child,
                i.memoizedState = $u(a),
                i.childLanes = Wu(t, p, a),
                e.memoizedState = Iu,
                e = Zi(null, i));
            else if (da(e),
            Uc(g)) {
                if (p = g.nextSibling && g.nextSibling.dataset,
                p)
                    var z = p.dgst;
                p = z,
                i = Error(s(419)),
                i.stack = "",
                i.digest = p,
                qi({
                    value: i,
                    source: null,
                    stack: null
                }),
                e = ec(t, e, a)
            } else if (Wt || Qr(t, e, a, !1),
            p = (a & t.childLanes) !== 0,
            Wt || p) {
                if (p = Qt,
                p !== null && (i = _e(p, a),
                i !== 0 && i !== E.retryLane))
                    throw E.retryLane = i,
                    Xa(t, i),
                    De(p, t, i),
                    Ju;
                zc(g) || As(),
                e = ec(t, e, a)
            } else
                zc(g) ? (e.flags |= 192,
                e.child = t.child,
                e = null) : (t = E.treeContext,
                Bt = tn(g.nextSibling),
                ue = e,
                Rt = !0,
                la = null,
                $e = !1,
                t !== null && Wd(e, t),
                e = tc(e, i.children),
                e.flags |= 4096);
            return e
        }
        return o ? (ha(),
        g = i.fallback,
        o = e.mode,
        E = t.child,
        z = E.sibling,
        i = Nn(E, {
            mode: "hidden",
            children: i.children
        }),
        i.subtreeFlags = E.subtreeFlags & 65011712,
        z !== null ? g = Nn(z, g) : (g = Ka(g, o, a, null),
        g.flags |= 2),
        g.return = e,
        i.return = e,
        i.sibling = g,
        e.child = i,
        Zi(null, i),
        i = e.child,
        g = t.child.memoizedState,
        g === null ? g = $u(a) : (o = g.cachePool,
        o !== null ? (E = It._currentValue,
        o = o.parent !== E ? {
            parent: E,
            pool: E
        } : o) : o = ih(),
        g = {
            baseLanes: g.baseLanes | a,
            cachePool: o
        }),
        i.memoizedState = g,
        i.childLanes = Wu(t, p, a),
        e.memoizedState = Iu,
        Zi(t.child, i)) : (da(e),
        a = t.child,
        t = a.sibling,
        a = Nn(a, {
            mode: "visible",
            children: i.children
        }),
        a.return = e,
        a.sibling = null,
        t !== null && (p = e.deletions,
        p === null ? (e.deletions = [t],
        e.flags |= 16) : p.push(t)),
        e.child = a,
        e.memoizedState = null,
        a)
    }
    function tc(t, e) {
        return e = vs({
            mode: "visible",
            children: e
        }, t.mode),
        e.return = t,
        t.child = e
    }
    function vs(t, e) {
        return t = qe(22, t, null, e),
        t.lanes = 0,
        t
    }
    function ec(t, e, a) {
        return tr(e, t.child, null, a),
        t = tc(e, e.pendingProps.children),
        t.flags |= 2,
        e.memoizedState = null,
        t
    }
    function gm(t, e, a) {
        t.lanes |= e;
        var i = t.alternate;
        i !== null && (i.lanes |= e),
        yu(t.return, e, a)
    }
    function nc(t, e, a, i, o, c) {
        var p = t.memoizedState;
        p === null ? t.memoizedState = {
            isBackwards: e,
            rendering: null,
            renderingStartTime: 0,
            last: i,
            tail: a,
            tailMode: o,
            treeForkCount: c
        } : (p.isBackwards = e,
        p.rendering = null,
        p.renderingStartTime = 0,
        p.last = i,
        p.tail = a,
        p.tailMode = o,
        p.treeForkCount = c)
    }
    function bm(t, e, a) {
        var i = e.pendingProps
          , o = i.revealOrder
          , c = i.tail;
        i = i.children;
        var p = Zt.current
          , g = (p & 2) !== 0;
        if (g ? (p = p & 1 | 2,
        e.flags |= 128) : p &= 1,
        q(Zt, p),
        fe(t, e, i, a),
        i = Rt ? Ui : 0,
        !g && t !== null && (t.flags & 128) !== 0)
            t: for (t = e.child; t !== null; ) {
                if (t.tag === 13)
                    t.memoizedState !== null && gm(t, a, e);
                else if (t.tag === 19)
                    gm(t, a, e);
                else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break t;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        break t;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
        switch (o) {
        case "forwards":
            for (a = e.child,
            o = null; a !== null; )
                t = a.alternate,
                t !== null && is(t) === null && (o = a),
                a = a.sibling;
            a = o,
            a === null ? (o = e.child,
            e.child = null) : (o = a.sibling,
            a.sibling = null),
            nc(e, !1, o, a, c, i);
            break;
        case "backwards":
        case "unstable_legacy-backwards":
            for (a = null,
            o = e.child,
            e.child = null; o !== null; ) {
                if (t = o.alternate,
                t !== null && is(t) === null) {
                    e.child = o;
                    break
                }
                t = o.sibling,
                o.sibling = a,
                a = o,
                o = t
            }
            nc(e, !0, a, null, c, i);
            break;
        case "together":
            nc(e, !1, null, null, void 0, i);
            break;
        default:
            e.memoizedState = null
        }
        return e.child
    }
    function Qn(t, e, a) {
        if (t !== null && (e.dependencies = t.dependencies),
        ya |= e.lanes,
        (a & e.childLanes) === 0)
            if (t !== null) {
                if (Qr(t, e, a, !1),
                (a & e.childLanes) === 0)
                    return null
            } else
                return null;
        if (t !== null && e.child !== t.child)
            throw Error(s(153));
        if (e.child !== null) {
            for (t = e.child,
            a = Nn(t, t.pendingProps),
            e.child = a,
            a.return = e; t.sibling !== null; )
                t = t.sibling,
                a = a.sibling = Nn(t, t.pendingProps),
                a.return = e;
            a.sibling = null
        }
        return e.child
    }
    function ac(t, e) {
        return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies,
        !!(t !== null && Il(t)))
    }
    function Eb(t, e, a) {
        switch (e.tag) {
        case 3:
            gt(e, e.stateNode.containerInfo),
            oa(e, It, t.memoizedState.cache),
            Za();
            break;
        case 27:
        case 5:
            le(e);
            break;
        case 4:
            gt(e, e.stateNode.containerInfo);
            break;
        case 10:
            oa(e, e.type, e.memoizedProps.value);
            break;
        case 31:
            if (e.memoizedState !== null)
                return e.flags |= 128,
                Cu(e),
                null;
            break;
        case 13:
            var i = e.memoizedState;
            if (i !== null)
                return i.dehydrated !== null ? (da(e),
                e.flags |= 128,
                null) : (a & e.child.childLanes) !== 0 ? vm(t, e, a) : (da(e),
                t = Qn(t, e, a),
                t !== null ? t.sibling : null);
            da(e);
            break;
        case 19:
            var o = (t.flags & 128) !== 0;
            if (i = (a & e.childLanes) !== 0,
            i || (Qr(t, e, a, !1),
            i = (a & e.childLanes) !== 0),
            o) {
                if (i)
                    return bm(t, e, a);
                e.flags |= 128
            }
            if (o = e.memoizedState,
            o !== null && (o.rendering = null,
            o.tail = null,
            o.lastEffect = null),
            q(Zt, Zt.current),
            i)
                break;
            return null;
        case 22:
            return e.lanes = 0,
            fm(t, e, a, e.pendingProps);
        case 24:
            oa(e, It, t.memoizedState.cache)
        }
        return Qn(t, e, a)
    }
    function xm(t, e, a) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps)
                Wt = !0;
            else {
                if (!ac(t, a) && (e.flags & 128) === 0)
                    return Wt = !1,
                    Eb(t, e, a);
                Wt = (t.flags & 131072) !== 0
            }
        else
            Wt = !1,
            Rt && (e.flags & 1048576) !== 0 && $d(e, Ui, e.index);
        switch (e.lanes = 0,
        e.tag) {
        case 16:
            t: {
                var i = e.pendingProps;
                if (t = $a(e.elementType),
                e.type = t,
                typeof t == "function")
                    ou(t) ? (i = nr(t, i),
                    e.tag = 1,
                    e = pm(null, e, t, i, a)) : (e.tag = 0,
                    e = Fu(null, e, t, i, a));
                else {
                    if (t != null) {
                        var o = t.$$typeof;
                        if (o === nt) {
                            e.tag = 11,
                            e = om(null, e, t, i, a);
                            break t
                        } else if (o === M) {
                            e.tag = 14,
                            e = um(null, e, t, i, a);
                            break t
                        }
                    }
                    throw e = it(t) || t,
                    Error(s(306, e, ""))
                }
            }
            return e;
        case 0:
            return Fu(t, e, e.type, e.pendingProps, a);
        case 1:
            return i = e.type,
            o = nr(i, e.pendingProps),
            pm(t, e, i, o, a);
        case 3:
            t: {
                if (gt(e, e.stateNode.containerInfo),
                t === null)
                    throw Error(s(387));
                i = e.pendingProps;
                var c = e.memoizedState;
                o = c.element,
                Eu(t, e),
                Yi(e, i, null, a);
                var p = e.memoizedState;
                if (i = p.cache,
                oa(e, It, i),
                i !== c.cache && vu(e, [It], a, !0),
                Pi(),
                i = p.element,
                c.isDehydrated)
                    if (c = {
                        element: i,
                        isDehydrated: !1,
                        cache: p.cache
                    },
                    e.updateQueue.baseState = c,
                    e.memoizedState = c,
                    e.flags & 256) {
                        e = ym(t, e, i, a);
                        break t
                    } else if (i !== o) {
                        o = Je(Error(s(424)), e),
                        qi(o),
                        e = ym(t, e, i, a);
                        break t
                    } else {
                        switch (t = e.stateNode.containerInfo,
                        t.nodeType) {
                        case 9:
                            t = t.body;
                            break;
                        default:
                            t = t.nodeName === "HTML" ? t.ownerDocument.body : t
                        }
                        for (Bt = tn(t.firstChild),
                        ue = e,
                        Rt = !0,
                        la = null,
                        $e = !0,
                        a = fh(e, null, i, a),
                        e.child = a; a; )
                            a.flags = a.flags & -3 | 4096,
                            a = a.sibling
                    }
                else {
                    if (Za(),
                    i === o) {
                        e = Qn(t, e, a);
                        break t
                    }
                    fe(t, e, i, a)
                }
                e = e.child
            }
            return e;
        case 26:
            return ys(t, e),
            t === null ? (a = jp(e.type, null, e.pendingProps, null)) ? e.memoizedState = a : Rt || (a = e.type,
            t = e.pendingProps,
            i = Ns(mt.current).createElement(a),
            i[oe] = e,
            i[Ae] = t,
            de(i, a, t),
            re(i),
            e.stateNode = i) : e.memoizedState = jp(e.type, t.memoizedProps, e.pendingProps, t.memoizedState),
            null;
        case 27:
            return le(e),
            t === null && Rt && (i = e.stateNode = Cp(e.type, e.pendingProps, mt.current),
            ue = e,
            $e = !0,
            o = Bt,
            Sa(e.type) ? (qc = o,
            Bt = tn(i.firstChild)) : Bt = o),
            fe(t, e, e.pendingProps.children, a),
            ys(t, e),
            t === null && (e.flags |= 4194304),
            e.child;
        case 5:
            return t === null && Rt && ((o = i = Bt) && (i = Wb(i, e.type, e.pendingProps, $e),
            i !== null ? (e.stateNode = i,
            ue = e,
            Bt = tn(i.firstChild),
            $e = !1,
            o = !0) : o = !1),
            o || sa(e)),
            le(e),
            o = e.type,
            c = e.pendingProps,
            p = t !== null ? t.memoizedProps : null,
            i = c.children,
            jc(o, c) ? i = null : p !== null && jc(o, p) && (e.flags |= 32),
            e.memoizedState !== null && (o = Mu(t, e, mb, null, null, a),
            ul._currentValue = o),
            ys(t, e),
            fe(t, e, i, a),
            e.child;
        case 6:
            return t === null && Rt && ((t = a = Bt) && (a = tx(a, e.pendingProps, $e),
            a !== null ? (e.stateNode = a,
            ue = e,
            Bt = null,
            t = !0) : t = !1),
            t || sa(e)),
            null;
        case 13:
            return vm(t, e, a);
        case 4:
            return gt(e, e.stateNode.containerInfo),
            i = e.pendingProps,
            t === null ? e.child = tr(e, null, i, a) : fe(t, e, i, a),
            e.child;
        case 11:
            return om(t, e, e.type, e.pendingProps, a);
        case 7:
            return fe(t, e, e.pendingProps, a),
            e.child;
        case 8:
            return fe(t, e, e.pendingProps.children, a),
            e.child;
        case 12:
            return fe(t, e, e.pendingProps.children, a),
            e.child;
        case 10:
            return i = e.pendingProps,
            oa(e, e.type, i.value),
            fe(t, e, i.children, a),
            e.child;
        case 9:
            return o = e.type._context,
            i = e.pendingProps.children,
            Fa(e),
            o = ce(o),
            i = i(o),
            e.flags |= 1,
            fe(t, e, i, a),
            e.child;
        case 14:
            return um(t, e, e.type, e.pendingProps, a);
        case 15:
            return cm(t, e, e.type, e.pendingProps, a);
        case 19:
            return bm(t, e, a);
        case 31:
            return wb(t, e, a);
        case 22:
            return fm(t, e, a, e.pendingProps);
        case 24:
            return Fa(e),
            i = ce(It),
            t === null ? (o = xu(),
            o === null && (o = Qt,
            c = gu(),
            o.pooledCache = c,
            c.refCount++,
            c !== null && (o.pooledCacheLanes |= a),
            o = c),
            e.memoizedState = {
                parent: i,
                cache: o
            },
            wu(e),
            oa(e, It, o)) : ((t.lanes & a) !== 0 && (Eu(t, e),
            Yi(e, null, null, a),
            Pi()),
            o = t.memoizedState,
            c = e.memoizedState,
            o.parent !== i ? (o = {
                parent: i,
                cache: i
            },
            e.memoizedState = o,
            e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o),
            oa(e, It, i)) : (i = c.cache,
            oa(e, It, i),
            i !== o.cache && vu(e, [It], a, !0))),
            fe(t, e, e.pendingProps.children, a),
            e.child;
        case 29:
            throw e.pendingProps
        }
        throw Error(s(156, e.tag))
    }
    function Bn(t) {
        t.flags |= 4
    }
    function rc(t, e, a, i, o) {
        if ((e = (t.mode & 32) !== 0) && (e = !1),
        e) {
            if (t.flags |= 16777216,
            (o & 335544128) === o)
                if (t.stateNode.complete)
                    t.flags |= 8192;
                else if (Km())
                    t.flags |= 8192;
                else
                    throw Wa = es,
                    Su
        } else
            t.flags &= -16777217
    }
    function Sm(t, e) {
        if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
            t.flags &= -16777217;
        else if (t.flags |= 16777216,
        !qp(e))
            if (Km())
                t.flags |= 8192;
            else
                throw Wa = es,
                Su
    }
    function gs(t, e) {
        e !== null && (t.flags |= 4),
        t.flags & 16384 && (e = t.tag !== 22 ? me() : 536870912,
        t.lanes |= e,
        Ir |= e)
    }
    function Ji(t, e) {
        if (!Rt)
            switch (t.tailMode) {
            case "hidden":
                e = t.tail;
                for (var a = null; e !== null; )
                    e.alternate !== null && (a = e),
                    e = e.sibling;
                a === null ? t.tail = null : a.sibling = null;
                break;
            case "collapsed":
                a = t.tail;
                for (var i = null; a !== null; )
                    a.alternate !== null && (i = a),
                    a = a.sibling;
                i === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : i.sibling = null
            }
    }
    function kt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child
          , a = 0
          , i = 0;
        if (e)
            for (var o = t.child; o !== null; )
                a |= o.lanes | o.childLanes,
                i |= o.subtreeFlags & 65011712,
                i |= o.flags & 65011712,
                o.return = t,
                o = o.sibling;
        else
            for (o = t.child; o !== null; )
                a |= o.lanes | o.childLanes,
                i |= o.subtreeFlags,
                i |= o.flags,
                o.return = t,
                o = o.sibling;
        return t.subtreeFlags |= i,
        t.childLanes = a,
        e
    }
    function Ob(t, e, a) {
        var i = e.pendingProps;
        switch (du(e),
        e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return kt(e),
            null;
        case 1:
            return kt(e),
            null;
        case 3:
            return a = e.stateNode,
            i = null,
            t !== null && (i = t.memoizedState.cache),
            e.memoizedState.cache !== i && (e.flags |= 2048),
            qn(It),
            Ct(),
            a.pendingContext && (a.context = a.pendingContext,
            a.pendingContext = null),
            (t === null || t.child === null) && (Hr(e) ? Bn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024,
            mu())),
            kt(e),
            null;
        case 26:
            var o = e.type
              , c = e.memoizedState;
            return t === null ? (Bn(e),
            c !== null ? (kt(e),
            Sm(e, c)) : (kt(e),
            rc(e, o, null, i, a))) : c ? c !== t.memoizedState ? (Bn(e),
            kt(e),
            Sm(e, c)) : (kt(e),
            e.flags &= -16777217) : (t = t.memoizedProps,
            t !== i && Bn(e),
            kt(e),
            rc(e, o, t, i, a)),
            null;
        case 27:
            if (ve(e),
            a = mt.current,
            o = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && Bn(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(s(166));
                    return kt(e),
                    null
                }
                t = Y.current,
                Hr(e) ? th(e) : (t = Cp(o, i, a),
                e.stateNode = t,
                Bn(e))
            }
            return kt(e),
            null;
        case 5:
            if (ve(e),
            o = e.type,
            t !== null && e.stateNode != null)
                t.memoizedProps !== i && Bn(e);
            else {
                if (!i) {
                    if (e.stateNode === null)
                        throw Error(s(166));
                    return kt(e),
                    null
                }
                if (c = Y.current,
                Hr(e))
                    th(e);
                else {
                    var p = Ns(mt.current);
                    switch (c) {
                    case 1:
                        c = p.createElementNS("http://www.w3.org/2000/svg", o);
                        break;
                    case 2:
                        c = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                        break;
                    default:
                        switch (o) {
                        case "svg":
                            c = p.createElementNS("http://www.w3.org/2000/svg", o);
                            break;
                        case "math":
                            c = p.createElementNS("http://www.w3.org/1998/Math/MathML", o);
                            break;
                        case "script":
                            c = p.createElement("div"),
                            c.innerHTML = "<script><\/script>",
                            c = c.removeChild(c.firstChild);
                            break;
                        case "select":
                            c = typeof i.is == "string" ? p.createElement("select", {
                                is: i.is
                            }) : p.createElement("select"),
                            i.multiple ? c.multiple = !0 : i.size && (c.size = i.size);
                            break;
                        default:
                            c = typeof i.is == "string" ? p.createElement(o, {
                                is: i.is
                            }) : p.createElement(o)
                        }
                    }
                    c[oe] = e,
                    c[Ae] = i;
                    t: for (p = e.child; p !== null; ) {
                        if (p.tag === 5 || p.tag === 6)
                            c.appendChild(p.stateNode);
                        else if (p.tag !== 4 && p.tag !== 27 && p.child !== null) {
                            p.child.return = p,
                            p = p.child;
                            continue
                        }
                        if (p === e)
                            break t;
                        for (; p.sibling === null; ) {
                            if (p.return === null || p.return === e)
                                break t;
                            p = p.return
                        }
                        p.sibling.return = p.return,
                        p = p.sibling
                    }
                    e.stateNode = c;
                    t: switch (de(c, o, i),
                    o) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        i = !!i.autoFocus;
                        break t;
                    case "img":
                        i = !0;
                        break t;
                    default:
                        i = !1
                    }
                    i && Bn(e)
                }
            }
            return kt(e),
            rc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, a),
            null;
        case 6:
            if (t && e.stateNode != null)
                t.memoizedProps !== i && Bn(e);
            else {
                if (typeof i != "string" && e.stateNode === null)
                    throw Error(s(166));
                if (t = mt.current,
                Hr(e)) {
                    if (t = e.stateNode,
                    a = e.memoizedProps,
                    i = null,
                    o = ue,
                    o !== null)
                        switch (o.tag) {
                        case 27:
                        case 5:
                            i = o.memoizedProps
                        }
                    t[oe] = e,
                    t = !!(t.nodeValue === a || i !== null && i.suppressHydrationWarning === !0 || vp(t.nodeValue, a)),
                    t || sa(e, !0)
                } else
                    t = Ns(t).createTextNode(i),
                    t[oe] = e,
                    e.stateNode = t
            }
            return kt(e),
            null;
        case 31:
            if (a = e.memoizedState,
            t === null || t.memoizedState !== null) {
                if (i = Hr(e),
                a !== null) {
                    if (t === null) {
                        if (!i)
                            throw Error(s(318));
                        if (t = e.memoizedState,
                        t = t !== null ? t.dehydrated : null,
                        !t)
                            throw Error(s(557));
                        t[oe] = e
                    } else
                        Za(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    kt(e),
                    t = !1
                } else
                    a = mu(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = a),
                    t = !0;
                if (!t)
                    return e.flags & 256 ? (He(e),
                    e) : (He(e),
                    null);
                if ((e.flags & 128) !== 0)
                    throw Error(s(558))
            }
            return kt(e),
            null;
        case 13:
            if (i = e.memoizedState,
            t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
                if (o = Hr(e),
                i !== null && i.dehydrated !== null) {
                    if (t === null) {
                        if (!o)
                            throw Error(s(318));
                        if (o = e.memoizedState,
                        o = o !== null ? o.dehydrated : null,
                        !o)
                            throw Error(s(317));
                        o[oe] = e
                    } else
                        Za(),
                        (e.flags & 128) === 0 && (e.memoizedState = null),
                        e.flags |= 4;
                    kt(e),
                    o = !1
                } else
                    o = mu(),
                    t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o),
                    o = !0;
                if (!o)
                    return e.flags & 256 ? (He(e),
                    e) : (He(e),
                    null)
            }
            return He(e),
            (e.flags & 128) !== 0 ? (e.lanes = a,
            e) : (a = i !== null,
            t = t !== null && t.memoizedState !== null,
            a && (i = e.child,
            o = null,
            i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool),
            c = null,
            i.memoizedState !== null && i.memoizedState.cachePool !== null && (c = i.memoizedState.cachePool.pool),
            c !== o && (i.flags |= 2048)),
            a !== t && a && (e.child.flags |= 8192),
            gs(e, e.updateQueue),
            kt(e),
            null);
        case 4:
            return Ct(),
            t === null && Ac(e.stateNode.containerInfo),
            kt(e),
            null;
        case 10:
            return qn(e.type),
            kt(e),
            null;
        case 19:
            if (P(Zt),
            i = e.memoizedState,
            i === null)
                return kt(e),
                null;
            if (o = (e.flags & 128) !== 0,
            c = i.rendering,
            c === null)
                if (o)
                    Ji(i, !1);
                else {
                    if (Xt !== 0 || t !== null && (t.flags & 128) !== 0)
                        for (t = e.child; t !== null; ) {
                            if (c = is(t),
                            c !== null) {
                                for (e.flags |= 128,
                                Ji(i, !1),
                                t = c.updateQueue,
                                e.updateQueue = t,
                                gs(e, t),
                                e.subtreeFlags = 0,
                                t = a,
                                a = e.child; a !== null; )
                                    Jd(a, t),
                                    a = a.sibling;
                                return q(Zt, Zt.current & 1 | 2),
                                Rt && zn(e, i.treeForkCount),
                                e.child
                            }
                            t = t.sibling
                        }
                    i.tail !== null && be() > Es && (e.flags |= 128,
                    o = !0,
                    Ji(i, !1),
                    e.lanes = 4194304)
                }
            else {
                if (!o)
                    if (t = is(c),
                    t !== null) {
                        if (e.flags |= 128,
                        o = !0,
                        t = t.updateQueue,
                        e.updateQueue = t,
                        gs(e, t),
                        Ji(i, !0),
                        i.tail === null && i.tailMode === "hidden" && !c.alternate && !Rt)
                            return kt(e),
                            null
                    } else
                        2 * be() - i.renderingStartTime > Es && a !== 536870912 && (e.flags |= 128,
                        o = !0,
                        Ji(i, !1),
                        e.lanes = 4194304);
                i.isBackwards ? (c.sibling = e.child,
                e.child = c) : (t = i.last,
                t !== null ? t.sibling = c : e.child = c,
                i.last = c)
            }
            return i.tail !== null ? (t = i.tail,
            i.rendering = t,
            i.tail = t.sibling,
            i.renderingStartTime = be(),
            t.sibling = null,
            a = Zt.current,
            q(Zt, o ? a & 1 | 2 : a & 1),
            Rt && zn(e, i.treeForkCount),
            t) : (kt(e),
            null);
        case 22:
        case 23:
            return He(e),
            Tu(),
            i = e.memoizedState !== null,
            t !== null ? t.memoizedState !== null !== i && (e.flags |= 8192) : i && (e.flags |= 8192),
            i ? (a & 536870912) !== 0 && (e.flags & 128) === 0 && (kt(e),
            e.subtreeFlags & 6 && (e.flags |= 8192)) : kt(e),
            a = e.updateQueue,
            a !== null && gs(e, a.retryQueue),
            a = null,
            t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
            i = null,
            e.memoizedState !== null && e.memoizedState.cachePool !== null && (i = e.memoizedState.cachePool.pool),
            i !== a && (e.flags |= 2048),
            t !== null && P(Ia),
            null;
        case 24:
            return a = null,
            t !== null && (a = t.memoizedState.cache),
            e.memoizedState.cache !== a && (e.flags |= 2048),
            qn(It),
            kt(e),
            null;
        case 25:
            return null;
        case 30:
            return null
        }
        throw Error(s(156, e.tag))
    }
    function _b(t, e) {
        switch (du(e),
        e.tag) {
        case 1:
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 3:
            return qn(It),
            Ct(),
            t = e.flags,
            (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 26:
        case 27:
        case 5:
            return ve(e),
            null;
        case 31:
            if (e.memoizedState !== null) {
                if (He(e),
                e.alternate === null)
                    throw Error(s(340));
                Za()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 13:
            if (He(e),
            t = e.memoizedState,
            t !== null && t.dehydrated !== null) {
                if (e.alternate === null)
                    throw Error(s(340));
                Za()
            }
            return t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 19:
            return P(Zt),
            null;
        case 4:
            return Ct(),
            null;
        case 10:
            return qn(e.type),
            null;
        case 22:
        case 23:
            return He(e),
            Tu(),
            t !== null && P(Ia),
            t = e.flags,
            t & 65536 ? (e.flags = t & -65537 | 128,
            e) : null;
        case 24:
            return qn(It),
            null;
        case 25:
            return null;
        default:
            return null
        }
    }
    function wm(t, e) {
        switch (du(e),
        e.tag) {
        case 3:
            qn(It),
            Ct();
            break;
        case 26:
        case 27:
        case 5:
            ve(e);
            break;
        case 4:
            Ct();
            break;
        case 31:
            e.memoizedState !== null && He(e);
            break;
        case 13:
            He(e);
            break;
        case 19:
            P(Zt);
            break;
        case 10:
            qn(e.type);
            break;
        case 22:
        case 23:
            He(e),
            Tu(),
            t !== null && P(Ia);
            break;
        case 24:
            qn(It)
        }
    }
    function Fi(t, e) {
        try {
            var a = e.updateQueue
              , i = a !== null ? a.lastEffect : null;
            if (i !== null) {
                var o = i.next;
                a = o;
                do {
                    if ((a.tag & t) === t) {
                        i = void 0;
                        var c = a.create
                          , p = a.inst;
                        i = c(),
                        p.destroy = i
                    }
                    a = a.next
                } while (a !== o)
            }
        } catch (g) {
            Ut(e, e.return, g)
        }
    }
    function ma(t, e, a) {
        try {
            var i = e.updateQueue
              , o = i !== null ? i.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                i = c;
                do {
                    if ((i.tag & t) === t) {
                        var p = i.inst
                          , g = p.destroy;
                        if (g !== void 0) {
                            p.destroy = void 0,
                            o = e;
                            var E = a
                              , z = g;
                            try {
                                z()
                            } catch (G) {
                                Ut(o, E, G)
                            }
                        }
                    }
                    i = i.next
                } while (i !== c)
            }
        } catch (G) {
            Ut(e, e.return, G)
        }
    }
    function Em(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var a = t.stateNode;
            try {
                hh(e, a)
            } catch (i) {
                Ut(t, t.return, i)
            }
        }
    }
    function Om(t, e, a) {
        a.props = nr(t.type, t.memoizedProps),
        a.state = t.memoizedState;
        try {
            a.componentWillUnmount()
        } catch (i) {
            Ut(t, e, i)
        }
    }
    function Ii(t, e) {
        try {
            var a = t.ref;
            if (a !== null) {
                switch (t.tag) {
                case 26:
                case 27:
                case 5:
                    var i = t.stateNode;
                    break;
                case 30:
                    i = t.stateNode;
                    break;
                default:
                    i = t.stateNode
                }
                typeof a == "function" ? t.refCleanup = a(i) : a.current = i
            }
        } catch (o) {
            Ut(t, e, o)
        }
    }
    function gn(t, e) {
        var a = t.ref
          , i = t.refCleanup;
        if (a !== null)
            if (typeof i == "function")
                try {
                    i()
                } catch (o) {
                    Ut(t, e, o)
                } finally {
                    t.refCleanup = null,
                    t = t.alternate,
                    t != null && (t.refCleanup = null)
                }
            else if (typeof a == "function")
                try {
                    a(null)
                } catch (o) {
                    Ut(t, e, o)
                }
            else
                a.current = null
    }
    function _m(t) {
        var e = t.type
          , a = t.memoizedProps
          , i = t.stateNode;
        try {
            t: switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                a.autoFocus && i.focus();
                break t;
            case "img":
                a.src ? i.src = a.src : a.srcSet && (i.srcset = a.srcSet)
            }
        } catch (o) {
            Ut(t, t.return, o)
        }
    }
    function ic(t, e, a) {
        try {
            var i = t.stateNode;
            Kb(i, t.type, a, e),
            i[Ae] = e
        } catch (o) {
            Ut(t, t.return, o)
        }
    }
    function Am(t) {
        return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Sa(t.type) || t.tag === 4
    }
    function lc(t) {
        t: for (; ; ) {
            for (; t.sibling === null; ) {
                if (t.return === null || Am(t.return))
                    return null;
                t = t.return
            }
            for (t.sibling.return = t.return,
            t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
                if (t.tag === 27 && Sa(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
                    continue t;
                t.child.return = t,
                t = t.child
            }
            if (!(t.flags & 2))
                return t.stateNode
        }
    }
    function sc(t, e, a) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(t, e) : (e = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a,
            e.appendChild(t),
            a = a._reactRootContainer,
            a != null || e.onclick !== null || (e.onclick = jn));
        else if (i !== 4 && (i === 27 && Sa(t.type) && (a = t.stateNode,
        e = null),
        t = t.child,
        t !== null))
            for (sc(t, e, a),
            t = t.sibling; t !== null; )
                sc(t, e, a),
                t = t.sibling
    }
    function bs(t, e, a) {
        var i = t.tag;
        if (i === 5 || i === 6)
            t = t.stateNode,
            e ? a.insertBefore(t, e) : a.appendChild(t);
        else if (i !== 4 && (i === 27 && Sa(t.type) && (a = t.stateNode),
        t = t.child,
        t !== null))
            for (bs(t, e, a),
            t = t.sibling; t !== null; )
                bs(t, e, a),
                t = t.sibling
    }
    function Tm(t) {
        var e = t.stateNode
          , a = t.memoizedProps;
        try {
            for (var i = t.type, o = e.attributes; o.length; )
                e.removeAttributeNode(o[0]);
            de(e, i, a),
            e[oe] = t,
            e[Ae] = a
        } catch (c) {
            Ut(t, t.return, c)
        }
    }
    var kn = !1
      , te = !1
      , oc = !1
      , Cm = typeof WeakSet == "function" ? WeakSet : Set
      , ie = null;
    function Ab(t, e) {
        if (t = t.containerInfo,
        Rc = Bs,
        t = Bd(t),
        eu(t)) {
            if ("selectionStart"in t)
                var a = {
                    start: t.selectionStart,
                    end: t.selectionEnd
                };
            else
                t: {
                    a = (a = t.ownerDocument) && a.defaultView || window;
                    var i = a.getSelection && a.getSelection();
                    if (i && i.rangeCount !== 0) {
                        a = i.anchorNode;
                        var o = i.anchorOffset
                          , c = i.focusNode;
                        i = i.focusOffset;
                        try {
                            a.nodeType,
                            c.nodeType
                        } catch {
                            a = null;
                            break t
                        }
                        var p = 0
                          , g = -1
                          , E = -1
                          , z = 0
                          , G = 0
                          , K = t
                          , L = null;
                        e: for (; ; ) {
                            for (var k; K !== a || o !== 0 && K.nodeType !== 3 || (g = p + o),
                            K !== c || i !== 0 && K.nodeType !== 3 || (E = p + i),
                            K.nodeType === 3 && (p += K.nodeValue.length),
                            (k = K.firstChild) !== null; )
                                L = K,
                                K = k;
                            for (; ; ) {
                                if (K === t)
                                    break e;
                                if (L === a && ++z === o && (g = p),
                                L === c && ++G === i && (E = p),
                                (k = K.nextSibling) !== null)
                                    break;
                                K = L,
                                L = K.parentNode
                            }
                            K = k
                        }
                        a = g === -1 || E === -1 ? null : {
                            start: g,
                            end: E
                        }
                    } else
                        a = null
                }
            a = a || {
                start: 0,
                end: 0
            }
        } else
            a = null;
        for (Mc = {
            focusedElem: t,
            selectionRange: a
        },
        Bs = !1,
        ie = e; ie !== null; )
            if (e = ie,
            t = e.child,
            (e.subtreeFlags & 1028) !== 0 && t !== null)
                t.return = e,
                ie = t;
            else
                for (; ie !== null; ) {
                    switch (e = ie,
                    c = e.alternate,
                    t = e.flags,
                    e.tag) {
                    case 0:
                        if ((t & 4) !== 0 && (t = e.updateQueue,
                        t = t !== null ? t.events : null,
                        t !== null))
                            for (a = 0; a < t.length; a++)
                                o = t[a],
                                o.ref.impl = o.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((t & 1024) !== 0 && c !== null) {
                            t = void 0,
                            a = e,
                            o = c.memoizedProps,
                            c = c.memoizedState,
                            i = a.stateNode;
                            try {
                                var ct = nr(a.type, o);
                                t = i.getSnapshotBeforeUpdate(ct, c),
                                i.__reactInternalSnapshotBeforeUpdate = t
                            } catch (vt) {
                                Ut(a, a.return, vt)
                            }
                        }
                        break;
                    case 3:
                        if ((t & 1024) !== 0) {
                            if (t = e.stateNode.containerInfo,
                            a = t.nodeType,
                            a === 9)
                                Nc(t);
                            else if (a === 1)
                                switch (t.nodeName) {
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    Nc(t);
                                    break;
                                default:
                                    t.textContent = ""
                                }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((t & 1024) !== 0)
                            throw Error(s(163))
                    }
                    if (t = e.sibling,
                    t !== null) {
                        t.return = e.return,
                        ie = t;
                        break
                    }
                    ie = e.return
                }
    }
    function Rm(t, e, a) {
        var i = a.flags;
        switch (a.tag) {
        case 0:
        case 11:
        case 15:
            Yn(t, a),
            i & 4 && Fi(5, a);
            break;
        case 1:
            if (Yn(t, a),
            i & 4)
                if (t = a.stateNode,
                e === null)
                    try {
                        t.componentDidMount()
                    } catch (p) {
                        Ut(a, a.return, p)
                    }
                else {
                    var o = nr(a.type, e.memoizedProps);
                    e = e.memoizedState;
                    try {
                        t.componentDidUpdate(o, e, t.__reactInternalSnapshotBeforeUpdate)
                    } catch (p) {
                        Ut(a, a.return, p)
                    }
                }
            i & 64 && Em(a),
            i & 512 && Ii(a, a.return);
            break;
        case 3:
            if (Yn(t, a),
            i & 64 && (t = a.updateQueue,
            t !== null)) {
                if (e = null,
                a.child !== null)
                    switch (a.child.tag) {
                    case 27:
                    case 5:
                        e = a.child.stateNode;
                        break;
                    case 1:
                        e = a.child.stateNode
                    }
                try {
                    hh(t, e)
                } catch (p) {
                    Ut(a, a.return, p)
                }
            }
            break;
        case 27:
            e === null && i & 4 && Tm(a);
        case 26:
        case 5:
            Yn(t, a),
            e === null && i & 4 && _m(a),
            i & 512 && Ii(a, a.return);
            break;
        case 12:
            Yn(t, a);
            break;
        case 31:
            Yn(t, a),
            i & 4 && Dm(t, a);
            break;
        case 13:
            Yn(t, a),
            i & 4 && Nm(t, a),
            i & 64 && (t = a.memoizedState,
            t !== null && (t = t.dehydrated,
            t !== null && (a = Ub.bind(null, a),
            ex(t, a))));
            break;
        case 22:
            if (i = a.memoizedState !== null || kn,
            !i) {
                e = e !== null && e.memoizedState !== null || te,
                o = kn;
                var c = te;
                kn = i,
                (te = e) && !c ? Gn(t, a, (a.subtreeFlags & 8772) !== 0) : Yn(t, a),
                kn = o,
                te = c
            }
            break;
        case 30:
            break;
        default:
            Yn(t, a)
        }
    }
    function Mm(t) {
        var e = t.alternate;
        e !== null && (t.alternate = null,
        Mm(e)),
        t.child = null,
        t.deletions = null,
        t.sibling = null,
        t.tag === 5 && (e = t.stateNode,
        e !== null && Ho(e)),
        t.stateNode = null,
        t.return = null,
        t.dependencies = null,
        t.memoizedProps = null,
        t.memoizedState = null,
        t.pendingProps = null,
        t.stateNode = null,
        t.updateQueue = null
    }
    var Yt = null
      , Ce = !1;
    function Pn(t, e, a) {
        for (a = a.child; a !== null; )
            jm(t, e, a),
            a = a.sibling
    }
    function jm(t, e, a) {
        if (xe && typeof xe.onCommitFiberUnmount == "function")
            try {
                xe.onCommitFiberUnmount(Qa, a)
            } catch {}
        switch (a.tag) {
        case 26:
            te || gn(a, e),
            Pn(t, e, a),
            a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
            a.parentNode.removeChild(a));
            break;
        case 27:
            te || gn(a, e);
            var i = Yt
              , o = Ce;
            Sa(a.type) && (Yt = a.stateNode,
            Ce = !1),
            Pn(t, e, a),
            ll(a.stateNode),
            Yt = i,
            Ce = o;
            break;
        case 5:
            te || gn(a, e);
        case 6:
            if (i = Yt,
            o = Ce,
            Yt = null,
            Pn(t, e, a),
            Yt = i,
            Ce = o,
            Yt !== null)
                if (Ce)
                    try {
                        (Yt.nodeType === 9 ? Yt.body : Yt.nodeName === "HTML" ? Yt.ownerDocument.body : Yt).removeChild(a.stateNode)
                    } catch (c) {
                        Ut(a, e, c)
                    }
                else
                    try {
                        Yt.removeChild(a.stateNode)
                    } catch (c) {
                        Ut(a, e, c)
                    }
            break;
        case 18:
            Yt !== null && (Ce ? (t = Yt,
            Ep(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, a.stateNode),
            ii(t)) : Ep(Yt, a.stateNode));
            break;
        case 4:
            i = Yt,
            o = Ce,
            Yt = a.stateNode.containerInfo,
            Ce = !0,
            Pn(t, e, a),
            Yt = i,
            Ce = o;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            ma(2, a, e),
            te || ma(4, a, e),
            Pn(t, e, a);
            break;
        case 1:
            te || (gn(a, e),
            i = a.stateNode,
            typeof i.componentWillUnmount == "function" && Om(a, e, i)),
            Pn(t, e, a);
            break;
        case 21:
            Pn(t, e, a);
            break;
        case 22:
            te = (i = te) || a.memoizedState !== null,
            Pn(t, e, a),
            te = i;
            break;
        default:
            Pn(t, e, a)
        }
    }
    function Dm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null))) {
            t = t.dehydrated;
            try {
                ii(t)
            } catch (a) {
                Ut(e, e.return, a)
            }
        }
    }
    function Nm(t, e) {
        if (e.memoizedState === null && (t = e.alternate,
        t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
        t !== null))))
            try {
                ii(t)
            } catch (a) {
                Ut(e, e.return, a)
            }
    }
    function Tb(t) {
        switch (t.tag) {
        case 31:
        case 13:
        case 19:
            var e = t.stateNode;
            return e === null && (e = t.stateNode = new Cm),
            e;
        case 22:
            return t = t.stateNode,
            e = t._retryCache,
            e === null && (e = t._retryCache = new Cm),
            e;
        default:
            throw Error(s(435, t.tag))
        }
    }
    function xs(t, e) {
        var a = Tb(t);
        e.forEach(function(i) {
            if (!a.has(i)) {
                a.add(i);
                var o = qb.bind(null, t, i);
                i.then(o, o)
            }
        })
    }
    function Re(t, e) {
        var a = e.deletions;
        if (a !== null)
            for (var i = 0; i < a.length; i++) {
                var o = a[i]
                  , c = t
                  , p = e
                  , g = p;
                t: for (; g !== null; ) {
                    switch (g.tag) {
                    case 27:
                        if (Sa(g.type)) {
                            Yt = g.stateNode,
                            Ce = !1;
                            break t
                        }
                        break;
                    case 5:
                        Yt = g.stateNode,
                        Ce = !1;
                        break t;
                    case 3:
                    case 4:
                        Yt = g.stateNode.containerInfo,
                        Ce = !0;
                        break t
                    }
                    g = g.return
                }
                if (Yt === null)
                    throw Error(s(160));
                jm(c, p, o),
                Yt = null,
                Ce = !1,
                c = o.alternate,
                c !== null && (c.return = null),
                o.return = null
            }
        if (e.subtreeFlags & 13886)
            for (e = e.child; e !== null; )
                zm(e, t),
                e = e.sibling
    }
    var on = null;
    function zm(t, e) {
        var a = t.alternate
          , i = t.flags;
        switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            Re(e, t),
            Me(t),
            i & 4 && (ma(3, t, t.return),
            Fi(3, t),
            ma(5, t, t.return));
            break;
        case 1:
            Re(e, t),
            Me(t),
            i & 512 && (te || a === null || gn(a, a.return)),
            i & 64 && kn && (t = t.updateQueue,
            t !== null && (i = t.callbacks,
            i !== null && (a = t.shared.hiddenCallbacks,
            t.shared.hiddenCallbacks = a === null ? i : a.concat(i))));
            break;
        case 26:
            var o = on;
            if (Re(e, t),
            Me(t),
            i & 512 && (te || a === null || gn(a, a.return)),
            i & 4) {
                var c = a !== null ? a.memoizedState : null;
                if (i = t.memoizedState,
                a === null)
                    if (i === null)
                        if (t.stateNode === null) {
                            t: {
                                i = t.type,
                                a = t.memoizedProps,
                                o = o.ownerDocument || o;
                                e: switch (i) {
                                case "title":
                                    c = o.getElementsByTagName("title")[0],
                                    (!c || c[Oi] || c[oe] || c.namespaceURI === "http://www.w3.org/2000/svg" || c.hasAttribute("itemprop")) && (c = o.createElement(i),
                                    o.head.insertBefore(c, o.querySelector("head > title"))),
                                    de(c, i, a),
                                    c[oe] = t,
                                    re(c),
                                    i = c;
                                    break t;
                                case "link":
                                    var p = zp("link", "href", o).get(i + (a.href || ""));
                                    if (p) {
                                        for (var g = 0; g < p.length; g++)
                                            if (c = p[g],
                                            c.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && c.getAttribute("rel") === (a.rel == null ? null : a.rel) && c.getAttribute("title") === (a.title == null ? null : a.title) && c.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                p.splice(g, 1);
                                                break e
                                            }
                                    }
                                    c = o.createElement(i),
                                    de(c, i, a),
                                    o.head.appendChild(c);
                                    break;
                                case "meta":
                                    if (p = zp("meta", "content", o).get(i + (a.content || ""))) {
                                        for (g = 0; g < p.length; g++)
                                            if (c = p[g],
                                            c.getAttribute("content") === (a.content == null ? null : "" + a.content) && c.getAttribute("name") === (a.name == null ? null : a.name) && c.getAttribute("property") === (a.property == null ? null : a.property) && c.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && c.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                p.splice(g, 1);
                                                break e
                                            }
                                    }
                                    c = o.createElement(i),
                                    de(c, i, a),
                                    o.head.appendChild(c);
                                    break;
                                default:
                                    throw Error(s(468, i))
                                }
                                c[oe] = t,
                                re(c),
                                i = c
                            }
                            t.stateNode = i
                        } else
                            Up(o, t.type, t.stateNode);
                    else
                        t.stateNode = Np(o, i, t.memoizedProps);
                else
                    c !== i ? (c === null ? a.stateNode !== null && (a = a.stateNode,
                    a.parentNode.removeChild(a)) : c.count--,
                    i === null ? Up(o, t.type, t.stateNode) : Np(o, i, t.memoizedProps)) : i === null && t.stateNode !== null && ic(t, t.memoizedProps, a.memoizedProps)
            }
            break;
        case 27:
            Re(e, t),
            Me(t),
            i & 512 && (te || a === null || gn(a, a.return)),
            a !== null && i & 4 && ic(t, t.memoizedProps, a.memoizedProps);
            break;
        case 5:
            if (Re(e, t),
            Me(t),
            i & 512 && (te || a === null || gn(a, a.return)),
            t.flags & 32) {
                o = t.stateNode;
                try {
                    Cr(o, "")
                } catch (ct) {
                    Ut(t, t.return, ct)
                }
            }
            i & 4 && t.stateNode != null && (o = t.memoizedProps,
            ic(t, o, a !== null ? a.memoizedProps : o)),
            i & 1024 && (oc = !0);
            break;
        case 6:
            if (Re(e, t),
            Me(t),
            i & 4) {
                if (t.stateNode === null)
                    throw Error(s(162));
                i = t.memoizedProps,
                a = t.stateNode;
                try {
                    a.nodeValue = i
                } catch (ct) {
                    Ut(t, t.return, ct)
                }
            }
            break;
        case 3:
            if (qs = null,
            o = on,
            on = zs(e.containerInfo),
            Re(e, t),
            on = o,
            Me(t),
            i & 4 && a !== null && a.memoizedState.isDehydrated)
                try {
                    ii(e.containerInfo)
                } catch (ct) {
                    Ut(t, t.return, ct)
                }
            oc && (oc = !1,
            Um(t));
            break;
        case 4:
            i = on,
            on = zs(t.stateNode.containerInfo),
            Re(e, t),
            Me(t),
            on = i;
            break;
        case 12:
            Re(e, t),
            Me(t);
            break;
        case 31:
            Re(e, t),
            Me(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            xs(t, i)));
            break;
        case 13:
            Re(e, t),
            Me(t),
            t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (ws = be()),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            xs(t, i)));
            break;
        case 22:
            o = t.memoizedState !== null;
            var E = a !== null && a.memoizedState !== null
              , z = kn
              , G = te;
            if (kn = z || o,
            te = G || E,
            Re(e, t),
            te = G,
            kn = z,
            Me(t),
            i & 8192)
                t: for (e = t.stateNode,
                e._visibility = o ? e._visibility & -2 : e._visibility | 1,
                o && (a === null || E || kn || te || ar(t)),
                a = null,
                e = t; ; ) {
                    if (e.tag === 5 || e.tag === 26) {
                        if (a === null) {
                            E = a = e;
                            try {
                                if (c = E.stateNode,
                                o)
                                    p = c.style,
                                    typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none";
                                else {
                                    g = E.stateNode;
                                    var K = E.memoizedProps.style
                                      , L = K != null && K.hasOwnProperty("display") ? K.display : null;
                                    g.style.display = L == null || typeof L == "boolean" ? "" : ("" + L).trim()
                                }
                            } catch (ct) {
                                Ut(E, E.return, ct)
                            }
                        }
                    } else if (e.tag === 6) {
                        if (a === null) {
                            E = e;
                            try {
                                E.stateNode.nodeValue = o ? "" : E.memoizedProps
                            } catch (ct) {
                                Ut(E, E.return, ct)
                            }
                        }
                    } else if (e.tag === 18) {
                        if (a === null) {
                            E = e;
                            try {
                                var k = E.stateNode;
                                o ? Op(k, !0) : Op(E.stateNode, !1)
                            } catch (ct) {
                                Ut(E, E.return, ct)
                            }
                        }
                    } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
                        e.child.return = e,
                        e = e.child;
                        continue
                    }
                    if (e === t)
                        break t;
                    for (; e.sibling === null; ) {
                        if (e.return === null || e.return === t)
                            break t;
                        a === e && (a = null),
                        e = e.return
                    }
                    a === e && (a = null),
                    e.sibling.return = e.return,
                    e = e.sibling
                }
            i & 4 && (i = t.updateQueue,
            i !== null && (a = i.retryQueue,
            a !== null && (i.retryQueue = null,
            xs(t, a))));
            break;
        case 19:
            Re(e, t),
            Me(t),
            i & 4 && (i = t.updateQueue,
            i !== null && (t.updateQueue = null,
            xs(t, i)));
            break;
        case 30:
            break;
        case 21:
            break;
        default:
            Re(e, t),
            Me(t)
        }
    }
    function Me(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                for (var a, i = t.return; i !== null; ) {
                    if (Am(i)) {
                        a = i;
                        break
                    }
                    i = i.return
                }
                if (a == null)
                    throw Error(s(160));
                switch (a.tag) {
                case 27:
                    var o = a.stateNode
                      , c = lc(t);
                    bs(t, c, o);
                    break;
                case 5:
                    var p = a.stateNode;
                    a.flags & 32 && (Cr(p, ""),
                    a.flags &= -33);
                    var g = lc(t);
                    bs(t, g, p);
                    break;
                case 3:
                case 4:
                    var E = a.stateNode.containerInfo
                      , z = lc(t);
                    sc(t, z, E);
                    break;
                default:
                    throw Error(s(161))
                }
            } catch (G) {
                Ut(t, t.return, G)
            }
            t.flags &= -3
        }
        e & 4096 && (t.flags &= -4097)
    }
    function Um(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                Um(e),
                e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                t = t.sibling
            }
    }
    function Yn(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                Rm(t, e.alternate, e),
                e = e.sibling
    }
    function ar(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ma(4, e, e.return),
                ar(e);
                break;
            case 1:
                gn(e, e.return);
                var a = e.stateNode;
                typeof a.componentWillUnmount == "function" && Om(e, e.return, a),
                ar(e);
                break;
            case 27:
                ll(e.stateNode);
            case 26:
            case 5:
                gn(e, e.return),
                ar(e);
                break;
            case 22:
                e.memoizedState === null && ar(e);
                break;
            case 30:
                ar(e);
                break;
            default:
                ar(e)
            }
            t = t.sibling
        }
    }
    function Gn(t, e, a) {
        for (a = a && (e.subtreeFlags & 8772) !== 0,
        e = e.child; e !== null; ) {
            var i = e.alternate
              , o = t
              , c = e
              , p = c.flags;
            switch (c.tag) {
            case 0:
            case 11:
            case 15:
                Gn(o, c, a),
                Fi(4, c);
                break;
            case 1:
                if (Gn(o, c, a),
                i = c,
                o = i.stateNode,
                typeof o.componentDidMount == "function")
                    try {
                        o.componentDidMount()
                    } catch (z) {
                        Ut(i, i.return, z)
                    }
                if (i = c,
                o = i.updateQueue,
                o !== null) {
                    var g = i.stateNode;
                    try {
                        var E = o.shared.hiddenCallbacks;
                        if (E !== null)
                            for (o.shared.hiddenCallbacks = null,
                            o = 0; o < E.length; o++)
                                dh(E[o], g)
                    } catch (z) {
                        Ut(i, i.return, z)
                    }
                }
                a && p & 64 && Em(c),
                Ii(c, c.return);
                break;
            case 27:
                Tm(c);
            case 26:
            case 5:
                Gn(o, c, a),
                a && i === null && p & 4 && _m(c),
                Ii(c, c.return);
                break;
            case 12:
                Gn(o, c, a);
                break;
            case 31:
                Gn(o, c, a),
                a && p & 4 && Dm(o, c);
                break;
            case 13:
                Gn(o, c, a),
                a && p & 4 && Nm(o, c);
                break;
            case 22:
                c.memoizedState === null && Gn(o, c, a),
                Ii(c, c.return);
                break;
            case 30:
                break;
            default:
                Gn(o, c, a)
            }
            e = e.sibling
        }
    }
    function uc(t, e) {
        var a = null;
        t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool),
        t = null,
        e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool),
        t !== a && (t != null && t.refCount++,
        a != null && Li(a))
    }
    function cc(t, e) {
        t = null,
        e.alternate !== null && (t = e.alternate.memoizedState.cache),
        e = e.memoizedState.cache,
        e !== t && (e.refCount++,
        t != null && Li(t))
    }
    function un(t, e, a, i) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; )
                qm(t, e, a, i),
                e = e.sibling
    }
    function qm(t, e, a, i) {
        var o = e.flags;
        switch (e.tag) {
        case 0:
        case 11:
        case 15:
            un(t, e, a, i),
            o & 2048 && Fi(9, e);
            break;
        case 1:
            un(t, e, a, i);
            break;
        case 3:
            un(t, e, a, i),
            o & 2048 && (t = null,
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            e = e.memoizedState.cache,
            e !== t && (e.refCount++,
            t != null && Li(t)));
            break;
        case 12:
            if (o & 2048) {
                un(t, e, a, i),
                t = e.stateNode;
                try {
                    var c = e.memoizedProps
                      , p = c.id
                      , g = c.onPostCommit;
                    typeof g == "function" && g(p, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
                } catch (E) {
                    Ut(e, e.return, E)
                }
            } else
                un(t, e, a, i);
            break;
        case 31:
            un(t, e, a, i);
            break;
        case 13:
            un(t, e, a, i);
            break;
        case 23:
            break;
        case 22:
            c = e.stateNode,
            p = e.alternate,
            e.memoizedState !== null ? c._visibility & 2 ? un(t, e, a, i) : $i(t, e) : c._visibility & 2 ? un(t, e, a, i) : (c._visibility |= 2,
            Zr(t, e, a, i, (e.subtreeFlags & 10256) !== 0 || !1)),
            o & 2048 && uc(p, e);
            break;
        case 24:
            un(t, e, a, i),
            o & 2048 && cc(e.alternate, e);
            break;
        default:
            un(t, e, a, i)
        }
    }
    function Zr(t, e, a, i, o) {
        for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1),
        e = e.child; e !== null; ) {
            var c = t
              , p = e
              , g = a
              , E = i
              , z = p.flags;
            switch (p.tag) {
            case 0:
            case 11:
            case 15:
                Zr(c, p, g, E, o),
                Fi(8, p);
                break;
            case 23:
                break;
            case 22:
                var G = p.stateNode;
                p.memoizedState !== null ? G._visibility & 2 ? Zr(c, p, g, E, o) : $i(c, p) : (G._visibility |= 2,
                Zr(c, p, g, E, o)),
                o && z & 2048 && uc(p.alternate, p);
                break;
            case 24:
                Zr(c, p, g, E, o),
                o && z & 2048 && cc(p.alternate, p);
                break;
            default:
                Zr(c, p, g, E, o)
            }
            e = e.sibling
        }
    }
    function $i(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var a = t
                  , i = e
                  , o = i.flags;
                switch (i.tag) {
                case 22:
                    $i(a, i),
                    o & 2048 && uc(i.alternate, i);
                    break;
                case 24:
                    $i(a, i),
                    o & 2048 && cc(i.alternate, i);
                    break;
                default:
                    $i(a, i)
                }
                e = e.sibling
            }
    }
    var Wi = 8192;
    function Jr(t, e, a) {
        if (t.subtreeFlags & Wi)
            for (t = t.child; t !== null; )
                Lm(t, e, a),
                t = t.sibling
    }
    function Lm(t, e, a) {
        switch (t.tag) {
        case 26:
            Jr(t, e, a),
            t.flags & Wi && t.memoizedState !== null && hx(a, on, t.memoizedState, t.memoizedProps);
            break;
        case 5:
            Jr(t, e, a);
            break;
        case 3:
        case 4:
            var i = on;
            on = zs(t.stateNode.containerInfo),
            Jr(t, e, a),
            on = i;
            break;
        case 22:
            t.memoizedState === null && (i = t.alternate,
            i !== null && i.memoizedState !== null ? (i = Wi,
            Wi = 16777216,
            Jr(t, e, a),
            Wi = i) : Jr(t, e, a));
            break;
        default:
            Jr(t, e, a)
        }
    }
    function Hm(t) {
        var e = t.alternate;
        if (e !== null && (t = e.child,
        t !== null)) {
            e.child = null;
            do
                e = t.sibling,
                t.sibling = null,
                t = e;
            while (t !== null)
        }
    }
    function tl(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    ie = i,
                    Bm(i, t)
                }
            Hm(t)
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; )
                Qm(t),
                t = t.sibling
    }
    function Qm(t) {
        switch (t.tag) {
        case 0:
        case 11:
        case 15:
            tl(t),
            t.flags & 2048 && ma(9, t, t.return);
            break;
        case 3:
            tl(t);
            break;
        case 12:
            tl(t);
            break;
        case 22:
            var e = t.stateNode;
            t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3,
            Ss(t)) : tl(t);
            break;
        default:
            tl(t)
        }
    }
    function Ss(t) {
        var e = t.deletions;
        if ((t.flags & 16) !== 0) {
            if (e !== null)
                for (var a = 0; a < e.length; a++) {
                    var i = e[a];
                    ie = i,
                    Bm(i, t)
                }
            Hm(t)
        }
        for (t = t.child; t !== null; ) {
            switch (e = t,
            e.tag) {
            case 0:
            case 11:
            case 15:
                ma(8, e, e.return),
                Ss(e);
                break;
            case 22:
                a = e.stateNode,
                a._visibility & 2 && (a._visibility &= -3,
                Ss(e));
                break;
            default:
                Ss(e)
            }
            t = t.sibling
        }
    }
    function Bm(t, e) {
        for (; ie !== null; ) {
            var a = ie;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ma(8, a, e);
                break;
            case 23:
            case 22:
                if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                    var i = a.memoizedState.cachePool.pool;
                    i != null && i.refCount++
                }
                break;
            case 24:
                Li(a.memoizedState.cache)
            }
            if (i = a.child,
            i !== null)
                i.return = a,
                ie = i;
            else
                t: for (a = t; ie !== null; ) {
                    i = ie;
                    var o = i.sibling
                      , c = i.return;
                    if (Mm(i),
                    i === a) {
                        ie = null;
                        break t
                    }
                    if (o !== null) {
                        o.return = c,
                        ie = o;
                        break t
                    }
                    ie = c
                }
        }
    }
    var Cb = {
        getCacheForType: function(t) {
            var e = ce(It)
              , a = e.data.get(t);
            return a === void 0 && (a = t(),
            e.data.set(t, a)),
            a
        },
        cacheSignal: function() {
            return ce(It).controller.signal
        }
    }
      , Rb = typeof WeakMap == "function" ? WeakMap : Map
      , Nt = 0
      , Qt = null
      , Ot = null
      , At = 0
      , zt = 0
      , Qe = null
      , pa = !1
      , Fr = !1
      , fc = !1
      , Vn = 0
      , Xt = 0
      , ya = 0
      , rr = 0
      , dc = 0
      , Be = 0
      , Ir = 0
      , el = null
      , je = null
      , hc = !1
      , ws = 0
      , km = 0
      , Es = 1 / 0
      , Os = null
      , va = null
      , ee = 0
      , ga = null
      , $r = null
      , Xn = 0
      , mc = 0
      , pc = null
      , Pm = null
      , nl = 0
      , yc = null;
    function ke() {
        return (Nt & 2) !== 0 && At !== 0 ? At & -At : A.T !== null ? wc() : qo()
    }
    function Ym() {
        if (Be === 0)
            if ((At & 536870912) === 0 || Rt) {
                var t = xr;
                xr <<= 1,
                (xr & 3932160) === 0 && (xr = 262144),
                Be = t
            } else
                Be = 536870912;
        return t = Le.current,
        t !== null && (t.flags |= 32),
        Be
    }
    function De(t, e, a) {
        (t === Qt && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null) && (Wr(t, 0),
        ba(t, At, Be, !1)),
        Gt(t, a),
        ((Nt & 2) === 0 || t !== Qt) && (t === Qt && ((Nt & 2) === 0 && (rr |= a),
        Xt === 4 && ba(t, At, Be, !1)),
        bn(t))
    }
    function Gm(t, e, a) {
        if ((Nt & 6) !== 0)
            throw Error(s(327));
        var i = !a && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Pt(t, e)
          , o = i ? Db(t, e) : gc(t, e, !0)
          , c = i;
        do {
            if (o === 0) {
                Fr && !i && ba(t, e, 0, !1);
                break
            } else {
                if (a = t.current.alternate,
                c && !Mb(a)) {
                    o = gc(t, e, !1),
                    c = !1;
                    continue
                }
                if (o === 2) {
                    if (c = e,
                    t.errorRecoveryDisabledLanes & c)
                        var p = 0;
                    else
                        p = t.pendingLanes & -536870913,
                        p = p !== 0 ? p : p & 536870912 ? 536870912 : 0;
                    if (p !== 0) {
                        e = p;
                        t: {
                            var g = t;
                            o = el;
                            var E = g.current.memoizedState.isDehydrated;
                            if (E && (Wr(g, p).flags |= 256),
                            p = gc(g, p, !1),
                            p !== 2) {
                                if (fc && !E) {
                                    g.errorRecoveryDisabledLanes |= c,
                                    rr |= c,
                                    o = 4;
                                    break t
                                }
                                c = je,
                                je = o,
                                c !== null && (je === null ? je = c : je.push.apply(je, c))
                            }
                            o = p
                        }
                        if (c = !1,
                        o !== 2)
                            continue
                    }
                }
                if (o === 1) {
                    Wr(t, 0),
                    ba(t, e, 0, !0);
                    break
                }
                t: {
                    switch (i = t,
                    c = o,
                    c) {
                    case 0:
                    case 1:
                        throw Error(s(345));
                    case 4:
                        if ((e & 4194048) !== e)
                            break;
                    case 6:
                        ba(i, e, Be, !pa);
                        break t;
                    case 2:
                        je = null;
                        break;
                    case 3:
                    case 5:
                        break;
                    default:
                        throw Error(s(329))
                    }
                    if ((e & 62914560) === e && (o = ws + 300 - be(),
                    10 < o)) {
                        if (ba(i, e, Be, !pa),
                        bt(i, 0, !0) !== 0)
                            break t;
                        Xn = e,
                        i.timeoutHandle = Sp(Vm.bind(null, i, a, je, Os, hc, e, Be, rr, Ir, pa, c, "Throttled", -0, 0), o);
                        break t
                    }
                    Vm(i, a, je, Os, hc, e, Be, rr, Ir, pa, c, null, -0, 0)
                }
            }
            break
        } while (!0);
        bn(t)
    }
    function Vm(t, e, a, i, o, c, p, g, E, z, G, K, L, k) {
        if (t.timeoutHandle = -1,
        K = e.subtreeFlags,
        K & 8192 || (K & 16785408) === 16785408) {
            K = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: jn
            },
            Lm(e, c, K);
            var ct = (c & 62914560) === c ? ws - be() : (c & 4194048) === c ? km - be() : 0;
            if (ct = mx(K, ct),
            ct !== null) {
                Xn = c,
                t.cancelPendingCommit = ct(Wm.bind(null, t, e, c, a, i, o, p, g, E, G, K, null, L, k)),
                ba(t, c, p, !z);
                return
            }
        }
        Wm(t, e, c, a, i, o, p, g, E)
    }
    function Mb(t) {
        for (var e = t; ; ) {
            var a = e.tag;
            if ((a === 0 || a === 11 || a === 15) && e.flags & 16384 && (a = e.updateQueue,
            a !== null && (a = a.stores,
            a !== null)))
                for (var i = 0; i < a.length; i++) {
                    var o = a[i]
                      , c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ue(c(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
            if (a = e.child,
            e.subtreeFlags & 16384 && a !== null)
                a.return = e,
                e = a;
            else {
                if (e === t)
                    break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        return !0;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        }
        return !0
    }
    function ba(t, e, a, i) {
        e &= ~dc,
        e &= ~rr,
        t.suspendedLanes |= e,
        t.pingedLanes &= ~e,
        i && (t.warmLanes |= e),
        i = t.expirationTimes;
        for (var o = e; 0 < o; ) {
            var c = 31 - he(o)
              , p = 1 << c;
            i[c] = -1,
            o &= ~p
        }
        a !== 0 && ka(t, a, e)
    }
    function _s() {
        return (Nt & 6) === 0 ? (al(0),
        !1) : !0
    }
    function vc() {
        if (Ot !== null) {
            if (zt === 0)
                var t = Ot.return;
            else
                t = Ot,
                Un = Ja = null,
                Nu(t),
                Yr = null,
                Qi = 0,
                t = Ot;
            for (; t !== null; )
                wm(t.alternate, t),
                t = t.return;
            Ot = null
        }
    }
    function Wr(t, e) {
        var a = t.timeoutHandle;
        a !== -1 && (t.timeoutHandle = -1,
        Fb(a)),
        a = t.cancelPendingCommit,
        a !== null && (t.cancelPendingCommit = null,
        a()),
        Xn = 0,
        vc(),
        Qt = t,
        Ot = a = Nn(t.current, null),
        At = e,
        zt = 0,
        Qe = null,
        pa = !1,
        Fr = Pt(t, e),
        fc = !1,
        Ir = Be = dc = rr = ya = Xt = 0,
        je = el = null,
        hc = !1,
        (e & 8) !== 0 && (e |= e & 32);
        var i = t.entangledLanes;
        if (i !== 0)
            for (t = t.entanglements,
            i &= e; 0 < i; ) {
                var o = 31 - he(i)
                  , c = 1 << o;
                e |= t[o],
                i &= ~c
            }
        return Vn = e,
        Xl(),
        a
    }
    function Xm(t, e) {
        St = null,
        A.H = Ki,
        e === Pr || e === ts ? (e = oh(),
        zt = 3) : e === Su ? (e = oh(),
        zt = 4) : zt = e === Ju ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1,
        Qe = e,
        Ot === null && (Xt = 1,
        ms(t, Je(e, t.current)))
    }
    function Km() {
        var t = Le.current;
        return t === null ? !0 : (At & 4194048) === At ? We === null : (At & 62914560) === At || (At & 536870912) !== 0 ? t === We : !1
    }
    function Zm() {
        var t = A.H;
        return A.H = Ki,
        t === null ? Ki : t
    }
    function Jm() {
        var t = A.A;
        return A.A = Cb,
        t
    }
    function As() {
        Xt = 4,
        pa || (At & 4194048) !== At && Le.current !== null || (Fr = !0),
        (ya & 134217727) === 0 && (rr & 134217727) === 0 || Qt === null || ba(Qt, At, Be, !1)
    }
    function gc(t, e, a) {
        var i = Nt;
        Nt |= 2;
        var o = Zm()
          , c = Jm();
        (Qt !== t || At !== e) && (Os = null,
        Wr(t, e)),
        e = !1;
        var p = Xt;
        t: do
            try {
                if (zt !== 0 && Ot !== null) {
                    var g = Ot
                      , E = Qe;
                    switch (zt) {
                    case 8:
                        vc(),
                        p = 6;
                        break t;
                    case 3:
                    case 2:
                    case 9:
                    case 6:
                        Le.current === null && (e = !0);
                        var z = zt;
                        if (zt = 0,
                        Qe = null,
                        ti(t, g, E, z),
                        a && Fr) {
                            p = 0;
                            break t
                        }
                        break;
                    default:
                        z = zt,
                        zt = 0,
                        Qe = null,
                        ti(t, g, E, z)
                    }
                }
                jb(),
                p = Xt;
                break
            } catch (G) {
                Xm(t, G)
            }
        while (!0);
        return e && t.shellSuspendCounter++,
        Un = Ja = null,
        Nt = i,
        A.H = o,
        A.A = c,
        Ot === null && (Qt = null,
        At = 0,
        Xl()),
        p
    }
    function jb() {
        for (; Ot !== null; )
            Fm(Ot)
    }
    function Db(t, e) {
        var a = Nt;
        Nt |= 2;
        var i = Zm()
          , o = Jm();
        Qt !== t || At !== e ? (Os = null,
        Es = be() + 500,
        Wr(t, e)) : Fr = Pt(t, e);
        t: do
            try {
                if (zt !== 0 && Ot !== null) {
                    e = Ot;
                    var c = Qe;
                    e: switch (zt) {
                    case 1:
                        zt = 0,
                        Qe = null,
                        ti(t, e, c, 1);
                        break;
                    case 2:
                    case 9:
                        if (lh(c)) {
                            zt = 0,
                            Qe = null,
                            Im(e);
                            break
                        }
                        e = function() {
                            zt !== 2 && zt !== 9 || Qt !== t || (zt = 7),
                            bn(t)
                        }
                        ,
                        c.then(e, e);
                        break t;
                    case 3:
                        zt = 7;
                        break t;
                    case 4:
                        zt = 5;
                        break t;
                    case 7:
                        lh(c) ? (zt = 0,
                        Qe = null,
                        Im(e)) : (zt = 0,
                        Qe = null,
                        ti(t, e, c, 7));
                        break;
                    case 5:
                        var p = null;
                        switch (Ot.tag) {
                        case 26:
                            p = Ot.memoizedState;
                        case 5:
                        case 27:
                            var g = Ot;
                            if (p ? qp(p) : g.stateNode.complete) {
                                zt = 0,
                                Qe = null;
                                var E = g.sibling;
                                if (E !== null)
                                    Ot = E;
                                else {
                                    var z = g.return;
                                    z !== null ? (Ot = z,
                                    Ts(z)) : Ot = null
                                }
                                break e
                            }
                        }
                        zt = 0,
                        Qe = null,
                        ti(t, e, c, 5);
                        break;
                    case 6:
                        zt = 0,
                        Qe = null,
                        ti(t, e, c, 6);
                        break;
                    case 8:
                        vc(),
                        Xt = 6;
                        break t;
                    default:
                        throw Error(s(462))
                    }
                }
                Nb();
                break
            } catch (G) {
                Xm(t, G)
            }
        while (!0);
        return Un = Ja = null,
        A.H = i,
        A.A = o,
        Nt = a,
        Ot !== null ? 0 : (Qt = null,
        At = 0,
        Xl(),
        Xt)
    }
    function Nb() {
        for (; Ot !== null && !ge(); )
            Fm(Ot)
    }
    function Fm(t) {
        var e = xm(t.alternate, t, Vn);
        t.memoizedProps = t.pendingProps,
        e === null ? Ts(t) : Ot = e
    }
    function Im(t) {
        var e = t
          , a = e.alternate;
        switch (e.tag) {
        case 15:
        case 0:
            e = mm(a, e, e.pendingProps, e.type, void 0, At);
            break;
        case 11:
            e = mm(a, e, e.pendingProps, e.type.render, e.ref, At);
            break;
        case 5:
            Nu(e);
        default:
            wm(a, e),
            e = Ot = Jd(e, Vn),
            e = xm(a, e, Vn)
        }
        t.memoizedProps = t.pendingProps,
        e === null ? Ts(t) : Ot = e
    }
    function ti(t, e, a, i) {
        Un = Ja = null,
        Nu(e),
        Yr = null,
        Qi = 0;
        var o = e.return;
        try {
            if (Sb(t, o, e, a, At)) {
                Xt = 1,
                ms(t, Je(a, t.current)),
                Ot = null;
                return
            }
        } catch (c) {
            if (o !== null)
                throw Ot = o,
                c;
            Xt = 1,
            ms(t, Je(a, t.current)),
            Ot = null;
            return
        }
        e.flags & 32768 ? (Rt || i === 1 ? t = !0 : Fr || (At & 536870912) !== 0 ? t = !1 : (pa = t = !0,
        (i === 2 || i === 9 || i === 3 || i === 6) && (i = Le.current,
        i !== null && i.tag === 13 && (i.flags |= 16384))),
        $m(e, t)) : Ts(e)
    }
    function Ts(t) {
        var e = t;
        do {
            if ((e.flags & 32768) !== 0) {
                $m(e, pa);
                return
            }
            t = e.return;
            var a = Ob(e.alternate, e, Vn);
            if (a !== null) {
                Ot = a;
                return
            }
            if (e = e.sibling,
            e !== null) {
                Ot = e;
                return
            }
            Ot = e = t
        } while (e !== null);
        Xt === 0 && (Xt = 5)
    }
    function $m(t, e) {
        do {
            var a = _b(t.alternate, t);
            if (a !== null) {
                a.flags &= 32767,
                Ot = a;
                return
            }
            if (a = t.return,
            a !== null && (a.flags |= 32768,
            a.subtreeFlags = 0,
            a.deletions = null),
            !e && (t = t.sibling,
            t !== null)) {
                Ot = t;
                return
            }
            Ot = t = a
        } while (t !== null);
        Xt = 6,
        Ot = null
    }
    function Wm(t, e, a, i, o, c, p, g, E) {
        t.cancelPendingCommit = null;
        do
            Cs();
        while (ee !== 0);
        if ((Nt & 6) !== 0)
            throw Error(s(327));
        if (e !== null) {
            if (e === t.current)
                throw Error(s(177));
            if (c = e.lanes | e.childLanes,
            c |= lu,
            Ee(t, a, c, p, g, E),
            t === Qt && (Ot = Qt = null,
            At = 0),
            $r = e,
            ga = t,
            Xn = a,
            mc = c,
            pc = o,
            Pm = i,
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null,
            t.callbackPriority = 0,
            Lb(Ha, function() {
                return rp(),
                null
            })) : (t.callbackNode = null,
            t.callbackPriority = 0),
            i = (e.flags & 13878) !== 0,
            (e.subtreeFlags & 13878) !== 0 || i) {
                i = A.T,
                A.T = null,
                o = Q.p,
                Q.p = 2,
                p = Nt,
                Nt |= 4;
                try {
                    Ab(t, e, a)
                } finally {
                    Nt = p,
                    Q.p = o,
                    A.T = i
                }
            }
            ee = 1,
            tp(),
            ep(),
            np()
        }
    }
    function tp() {
        if (ee === 1) {
            ee = 0;
            var t = ga
              , e = $r
              , a = (e.flags & 13878) !== 0;
            if ((e.subtreeFlags & 13878) !== 0 || a) {
                a = A.T,
                A.T = null;
                var i = Q.p;
                Q.p = 2;
                var o = Nt;
                Nt |= 4;
                try {
                    zm(e, t);
                    var c = Mc
                      , p = Bd(t.containerInfo)
                      , g = c.focusedElem
                      , E = c.selectionRange;
                    if (p !== g && g && g.ownerDocument && Qd(g.ownerDocument.documentElement, g)) {
                        if (E !== null && eu(g)) {
                            var z = E.start
                              , G = E.end;
                            if (G === void 0 && (G = z),
                            "selectionStart"in g)
                                g.selectionStart = z,
                                g.selectionEnd = Math.min(G, g.value.length);
                            else {
                                var K = g.ownerDocument || document
                                  , L = K && K.defaultView || window;
                                if (L.getSelection) {
                                    var k = L.getSelection()
                                      , ct = g.textContent.length
                                      , vt = Math.min(E.start, ct)
                                      , Ht = E.end === void 0 ? vt : Math.min(E.end, ct);
                                    !k.extend && vt > Ht && (p = Ht,
                                    Ht = vt,
                                    vt = p);
                                    var j = Hd(g, vt)
                                      , R = Hd(g, Ht);
                                    if (j && R && (k.rangeCount !== 1 || k.anchorNode !== j.node || k.anchorOffset !== j.offset || k.focusNode !== R.node || k.focusOffset !== R.offset)) {
                                        var N = K.createRange();
                                        N.setStart(j.node, j.offset),
                                        k.removeAllRanges(),
                                        vt > Ht ? (k.addRange(N),
                                        k.extend(R.node, R.offset)) : (N.setEnd(R.node, R.offset),
                                        k.addRange(N))
                                    }
                                }
                            }
                        }
                        for (K = [],
                        k = g; k = k.parentNode; )
                            k.nodeType === 1 && K.push({
                                element: k,
                                left: k.scrollLeft,
                                top: k.scrollTop
                            });
                        for (typeof g.focus == "function" && g.focus(),
                        g = 0; g < K.length; g++) {
                            var V = K[g];
                            V.element.scrollLeft = V.left,
                            V.element.scrollTop = V.top
                        }
                    }
                    Bs = !!Rc,
                    Mc = Rc = null
                } finally {
                    Nt = o,
                    Q.p = i,
                    A.T = a
                }
            }
            t.current = e,
            ee = 2
        }
    }
    function ep() {
        if (ee === 2) {
            ee = 0;
            var t = ga
              , e = $r
              , a = (e.flags & 8772) !== 0;
            if ((e.subtreeFlags & 8772) !== 0 || a) {
                a = A.T,
                A.T = null;
                var i = Q.p;
                Q.p = 2;
                var o = Nt;
                Nt |= 4;
                try {
                    Rm(t, e.alternate, e)
                } finally {
                    Nt = o,
                    Q.p = i,
                    A.T = a
                }
            }
            ee = 3
        }
    }
    function np() {
        if (ee === 4 || ee === 3) {
            ee = 0,
            ta();
            var t = ga
              , e = $r
              , a = Xn
              , i = Pm;
            (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? ee = 5 : (ee = 0,
            $r = ga = null,
            ap(t, t.pendingLanes));
            var o = t.pendingLanes;
            if (o === 0 && (va = null),
            ln(a),
            e = e.stateNode,
            xe && typeof xe.onCommitFiberRoot == "function")
                try {
                    xe.onCommitFiberRoot(Qa, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
            if (i !== null) {
                e = A.T,
                o = Q.p,
                Q.p = 2,
                A.T = null;
                try {
                    for (var c = t.onRecoverableError, p = 0; p < i.length; p++) {
                        var g = i[p];
                        c(g.value, {
                            componentStack: g.stack
                        })
                    }
                } finally {
                    A.T = e,
                    Q.p = o
                }
            }
            (Xn & 3) !== 0 && Cs(),
            bn(t),
            o = t.pendingLanes,
            (a & 261930) !== 0 && (o & 42) !== 0 ? t === yc ? nl++ : (nl = 0,
            yc = t) : nl = 0,
            al(0)
        }
    }
    function ap(t, e) {
        (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache,
        e != null && (t.pooledCache = null,
        Li(e)))
    }
    function Cs() {
        return tp(),
        ep(),
        np(),
        rp()
    }
    function rp() {
        if (ee !== 5)
            return !1;
        var t = ga
          , e = mc;
        mc = 0;
        var a = ln(Xn)
          , i = A.T
          , o = Q.p;
        try {
            Q.p = 32 > a ? 32 : a,
            A.T = null,
            a = pc,
            pc = null;
            var c = ga
              , p = Xn;
            if (ee = 0,
            $r = ga = null,
            Xn = 0,
            (Nt & 6) !== 0)
                throw Error(s(331));
            var g = Nt;
            if (Nt |= 4,
            Qm(c.current),
            qm(c, c.current, p, a),
            Nt = g,
            al(0, !1),
            xe && typeof xe.onPostCommitFiberRoot == "function")
                try {
                    xe.onPostCommitFiberRoot(Qa, c)
                } catch {}
            return !0
        } finally {
            Q.p = o,
            A.T = i,
            ap(t, e)
        }
    }
    function ip(t, e, a) {
        e = Je(a, e),
        e = Zu(t.stateNode, e, 2),
        t = fa(t, e, 2),
        t !== null && (Gt(t, 2),
        bn(t))
    }
    function Ut(t, e, a) {
        if (t.tag === 3)
            ip(t, t, a);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    ip(e, t, a);
                    break
                } else if (e.tag === 1) {
                    var i = e.stateNode;
                    if (typeof e.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (va === null || !va.has(i))) {
                        t = Je(a, t),
                        a = lm(2),
                        i = fa(e, a, 2),
                        i !== null && (sm(a, i, e, t),
                        Gt(i, 2),
                        bn(i));
                        break
                    }
                }
                e = e.return
            }
    }
    function bc(t, e, a) {
        var i = t.pingCache;
        if (i === null) {
            i = t.pingCache = new Rb;
            var o = new Set;
            i.set(e, o)
        } else
            o = i.get(e),
            o === void 0 && (o = new Set,
            i.set(e, o));
        o.has(a) || (fc = !0,
        o.add(a),
        t = zb.bind(null, t, e, a),
        e.then(t, t))
    }
    function zb(t, e, a) {
        var i = t.pingCache;
        i !== null && i.delete(e),
        t.pingedLanes |= t.suspendedLanes & a,
        t.warmLanes &= ~a,
        Qt === t && (At & a) === a && (Xt === 4 || Xt === 3 && (At & 62914560) === At && 300 > be() - ws ? (Nt & 2) === 0 && Wr(t, 0) : dc |= a,
        Ir === At && (Ir = 0)),
        bn(t)
    }
    function lp(t, e) {
        e === 0 && (e = me()),
        t = Xa(t, e),
        t !== null && (Gt(t, e),
        bn(t))
    }
    function Ub(t) {
        var e = t.memoizedState
          , a = 0;
        e !== null && (a = e.retryLane),
        lp(t, a)
    }
    function qb(t, e) {
        var a = 0;
        switch (t.tag) {
        case 31:
        case 13:
            var i = t.stateNode
              , o = t.memoizedState;
            o !== null && (a = o.retryLane);
            break;
        case 19:
            i = t.stateNode;
            break;
        case 22:
            i = t.stateNode._retryCache;
            break;
        default:
            throw Error(s(314))
        }
        i !== null && i.delete(e),
        lp(t, a)
    }
    function Lb(t, e) {
        return xi(t, e)
    }
    var Rs = null
      , ei = null
      , xc = !1
      , Ms = !1
      , Sc = !1
      , xa = 0;
    function bn(t) {
        t !== ei && t.next === null && (ei === null ? Rs = ei = t : ei = ei.next = t),
        Ms = !0,
        xc || (xc = !0,
        Qb())
    }
    function al(t, e) {
        if (!Sc && Ms) {
            Sc = !0;
            do
                for (var a = !1, i = Rs; i !== null; ) {
                    if (t !== 0) {
                        var o = i.pendingLanes;
                        if (o === 0)
                            var c = 0;
                        else {
                            var p = i.suspendedLanes
                              , g = i.pingedLanes;
                            c = (1 << 31 - he(42 | t) + 1) - 1,
                            c &= o & ~(p & ~g),
                            c = c & 201326741 ? c & 201326741 | 1 : c ? c | 2 : 0
                        }
                        c !== 0 && (a = !0,
                        cp(i, c))
                    } else
                        c = At,
                        c = bt(i, i === Qt ? c : 0, i.cancelPendingCommit !== null || i.timeoutHandle !== -1),
                        (c & 3) === 0 || Pt(i, c) || (a = !0,
                        cp(i, c));
                    i = i.next
                }
            while (a);
            Sc = !1
        }
    }
    function Hb() {
        sp()
    }
    function sp() {
        Ms = xc = !1;
        var t = 0;
        xa !== 0 && Jb() && (t = xa);
        for (var e = be(), a = null, i = Rs; i !== null; ) {
            var o = i.next
              , c = op(i, e);
            c === 0 ? (i.next = null,
            a === null ? Rs = o : a.next = o,
            o === null && (ei = a)) : (a = i,
            (t !== 0 || (c & 3) !== 0) && (Ms = !0)),
            i = o
        }
        ee !== 0 && ee !== 5 || al(t),
        xa !== 0 && (xa = 0)
    }
    function op(t, e) {
        for (var a = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, c = t.pendingLanes & -62914561; 0 < c; ) {
            var p = 31 - he(c)
              , g = 1 << p
              , E = o[p];
            E === -1 ? ((g & a) === 0 || (g & i) !== 0) && (o[p] = ae(g, e)) : E <= e && (t.expiredLanes |= g),
            c &= ~g
        }
        if (e = Qt,
        a = At,
        a = bt(t, t === e ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i = t.callbackNode,
        a === 0 || t === e && (zt === 2 || zt === 9) || t.cancelPendingCommit !== null)
            return i !== null && i !== null && Si(i),
            t.callbackNode = null,
            t.callbackPriority = 0;
        if ((a & 3) === 0 || Pt(t, a)) {
            if (e = a & -a,
            e === t.callbackPriority)
                return e;
            switch (i !== null && Si(i),
            ln(a)) {
            case 2:
            case 8:
                a = Nl;
                break;
            case 32:
                a = Ha;
                break;
            case 268435456:
                a = Rn;
                break;
            default:
                a = Ha
            }
            return i = up.bind(null, t),
            a = xi(a, i),
            t.callbackPriority = e,
            t.callbackNode = a,
            e
        }
        return i !== null && i !== null && Si(i),
        t.callbackPriority = 2,
        t.callbackNode = null,
        2
    }
    function up(t, e) {
        if (ee !== 0 && ee !== 5)
            return t.callbackNode = null,
            t.callbackPriority = 0,
            null;
        var a = t.callbackNode;
        if (Cs() && t.callbackNode !== a)
            return null;
        var i = At;
        return i = bt(t, t === Qt ? i : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
        i === 0 ? null : (Gm(t, i, e),
        op(t, be()),
        t.callbackNode != null && t.callbackNode === a ? up.bind(null, t) : null)
    }
    function cp(t, e) {
        if (Cs())
            return null;
        Gm(t, e, !0)
    }
    function Qb() {
        Ib(function() {
            (Nt & 6) !== 0 ? xi(La, Hb) : sp()
        })
    }
    function wc() {
        if (xa === 0) {
            var t = Br;
            t === 0 && (t = br,
            br <<= 1,
            (br & 261888) === 0 && (br = 256)),
            xa = t
        }
        return xa
    }
    function fp(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Hl("" + t)
    }
    function dp(t, e) {
        var a = e.ownerDocument.createElement("input");
        return a.name = e.name,
        a.value = e.value,
        t.id && a.setAttribute("form", t.id),
        e.parentNode.insertBefore(a, e),
        t = new FormData(t),
        a.parentNode.removeChild(a),
        t
    }
    function Bb(t, e, a, i, o) {
        if (e === "submit" && a && a.stateNode === o) {
            var c = fp((o[Ae] || null).action)
              , p = i.submitter;
            p && (e = (e = p[Ae] || null) ? fp(e.formAction) : p.getAttribute("formAction"),
            e !== null && (c = e,
            p = null));
            var g = new Pl("action","action",null,i,o);
            t.push({
                event: g,
                listeners: [{
                    instance: null,
                    listener: function() {
                        if (i.defaultPrevented) {
                            if (xa !== 0) {
                                var E = p ? dp(o, p) : new FormData(o);
                                Pu(a, {
                                    pending: !0,
                                    data: E,
                                    method: o.method,
                                    action: c
                                }, null, E)
                            }
                        } else
                            typeof c == "function" && (g.preventDefault(),
                            E = p ? dp(o, p) : new FormData(o),
                            Pu(a, {
                                pending: !0,
                                data: E,
                                method: o.method,
                                action: c
                            }, c, E))
                    },
                    currentTarget: o
                }]
            })
        }
    }
    for (var Ec = 0; Ec < iu.length; Ec++) {
        var Oc = iu[Ec]
          , kb = Oc.toLowerCase()
          , Pb = Oc[0].toUpperCase() + Oc.slice(1);
        sn(kb, "on" + Pb)
    }
    sn(Yd, "onAnimationEnd"),
    sn(Gd, "onAnimationIteration"),
    sn(Vd, "onAnimationStart"),
    sn("dblclick", "onDoubleClick"),
    sn("focusin", "onFocus"),
    sn("focusout", "onBlur"),
    sn(rb, "onTransitionRun"),
    sn(ib, "onTransitionStart"),
    sn(lb, "onTransitionCancel"),
    sn(Xd, "onTransitionEnd"),
    Ar("onMouseEnter", ["mouseout", "mouseover"]),
    Ar("onMouseLeave", ["mouseout", "mouseover"]),
    Ar("onPointerEnter", ["pointerout", "pointerover"]),
    Ar("onPointerLeave", ["pointerout", "pointerover"]),
    Pa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Pa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Pa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Pa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Pa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Pa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var rl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
      , Yb = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(rl));
    function hp(t, e) {
        e = (e & 4) !== 0;
        for (var a = 0; a < t.length; a++) {
            var i = t[a]
              , o = i.event;
            i = i.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var p = i.length - 1; 0 <= p; p--) {
                        var g = i[p]
                          , E = g.instance
                          , z = g.currentTarget;
                        if (g = g.listener,
                        E !== c && o.isPropagationStopped())
                            break t;
                        c = g,
                        o.currentTarget = z;
                        try {
                            c(o)
                        } catch (G) {
                            Vl(G)
                        }
                        o.currentTarget = null,
                        c = E
                    }
                else
                    for (p = 0; p < i.length; p++) {
                        if (g = i[p],
                        E = g.instance,
                        z = g.currentTarget,
                        g = g.listener,
                        E !== c && o.isPropagationStopped())
                            break t;
                        c = g,
                        o.currentTarget = z;
                        try {
                            c(o)
                        } catch (G) {
                            Vl(G)
                        }
                        o.currentTarget = null,
                        c = E
                    }
            }
        }
    }
    function _t(t, e) {
        var a = e[Lo];
        a === void 0 && (a = e[Lo] = new Set);
        var i = t + "__bubble";
        a.has(i) || (mp(e, t, 2, !1),
        a.add(i))
    }
    function _c(t, e, a) {
        var i = 0;
        e && (i |= 4),
        mp(a, t, i, e)
    }
    var js = "_reactListening" + Math.random().toString(36).slice(2);
    function Ac(t) {
        if (!t[js]) {
            t[js] = !0,
            sd.forEach(function(a) {
                a !== "selectionchange" && (Yb.has(a) || _c(a, !1, t),
                _c(a, !0, t))
            });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[js] || (e[js] = !0,
            _c("selectionchange", !1, e))
        }
    }
    function mp(t, e, a, i) {
        switch (Yp(e)) {
        case 2:
            var o = vx;
            break;
        case 8:
            o = gx;
            break;
        default:
            o = kc
        }
        a = o.bind(null, e, a, t),
        o = void 0,
        !Xo || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0),
        i ? o !== void 0 ? t.addEventListener(e, a, {
            capture: !0,
            passive: o
        }) : t.addEventListener(e, a, !0) : o !== void 0 ? t.addEventListener(e, a, {
            passive: o
        }) : t.addEventListener(e, a, !1)
    }
    function Tc(t, e, a, i, o) {
        var c = i;
        if ((e & 1) === 0 && (e & 2) === 0 && i !== null)
            t: for (; ; ) {
                if (i === null)
                    return;
                var p = i.tag;
                if (p === 3 || p === 4) {
                    var g = i.stateNode.containerInfo;
                    if (g === o)
                        break;
                    if (p === 4)
                        for (p = i.return; p !== null; ) {
                            var E = p.tag;
                            if ((E === 3 || E === 4) && p.stateNode.containerInfo === o)
                                return;
                            p = p.return
                        }
                    for (; g !== null; ) {
                        if (p = Er(g),
                        p === null)
                            return;
                        if (E = p.tag,
                        E === 5 || E === 6 || E === 26 || E === 27) {
                            i = c = p;
                            continue t
                        }
                        g = g.parentNode
                    }
                }
                i = i.return
            }
        bd(function() {
            var z = c
              , G = Go(a)
              , K = [];
            t: {
                var L = Kd.get(t);
                if (L !== void 0) {
                    var k = Pl
                      , ct = t;
                    switch (t) {
                    case "keypress":
                        if (Bl(a) === 0)
                            break t;
                    case "keydown":
                    case "keyup":
                        k = q0;
                        break;
                    case "focusin":
                        ct = "focus",
                        k = Fo;
                        break;
                    case "focusout":
                        ct = "blur",
                        k = Fo;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        k = Fo;
                        break;
                    case "click":
                        if (a.button === 2)
                            break t;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        k = wd;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        k = O0;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        k = Q0;
                        break;
                    case Yd:
                    case Gd:
                    case Vd:
                        k = T0;
                        break;
                    case Xd:
                        k = k0;
                        break;
                    case "scroll":
                    case "scrollend":
                        k = w0;
                        break;
                    case "wheel":
                        k = Y0;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        k = R0;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        k = Od;
                        break;
                    case "toggle":
                    case "beforetoggle":
                        k = V0
                    }
                    var vt = (e & 4) !== 0
                      , Ht = !vt && (t === "scroll" || t === "scrollend")
                      , j = vt ? L !== null ? L + "Capture" : null : L;
                    vt = [];
                    for (var R = z, N; R !== null; ) {
                        var V = R;
                        if (N = V.stateNode,
                        V = V.tag,
                        V !== 5 && V !== 26 && V !== 27 || N === null || j === null || (V = Ai(R, j),
                        V != null && vt.push(il(R, V, N))),
                        Ht)
                            break;
                        R = R.return
                    }
                    0 < vt.length && (L = new k(L,ct,null,a,G),
                    K.push({
                        event: L,
                        listeners: vt
                    }))
                }
            }
            if ((e & 7) === 0) {
                t: {
                    if (L = t === "mouseover" || t === "pointerover",
                    k = t === "mouseout" || t === "pointerout",
                    L && a !== Yo && (ct = a.relatedTarget || a.fromElement) && (Er(ct) || ct[wr]))
                        break t;
                    if ((k || L) && (L = G.window === G ? G : (L = G.ownerDocument) ? L.defaultView || L.parentWindow : window,
                    k ? (ct = a.relatedTarget || a.toElement,
                    k = z,
                    ct = ct ? Er(ct) : null,
                    ct !== null && (Ht = f(ct),
                    vt = ct.tag,
                    ct !== Ht || vt !== 5 && vt !== 27 && vt !== 6) && (ct = null)) : (k = null,
                    ct = z),
                    k !== ct)) {
                        if (vt = wd,
                        V = "onMouseLeave",
                        j = "onMouseEnter",
                        R = "mouse",
                        (t === "pointerout" || t === "pointerover") && (vt = Od,
                        V = "onPointerLeave",
                        j = "onPointerEnter",
                        R = "pointer"),
                        Ht = k == null ? L : _i(k),
                        N = ct == null ? L : _i(ct),
                        L = new vt(V,R + "leave",k,a,G),
                        L.target = Ht,
                        L.relatedTarget = N,
                        V = null,
                        Er(G) === z && (vt = new vt(j,R + "enter",ct,a,G),
                        vt.target = N,
                        vt.relatedTarget = Ht,
                        V = vt),
                        Ht = V,
                        k && ct)
                            e: {
                                for (vt = Gb,
                                j = k,
                                R = ct,
                                N = 0,
                                V = j; V; V = vt(V))
                                    N++;
                                V = 0;
                                for (var yt = R; yt; yt = vt(yt))
                                    V++;
                                for (; 0 < N - V; )
                                    j = vt(j),
                                    N--;
                                for (; 0 < V - N; )
                                    R = vt(R),
                                    V--;
                                for (; N--; ) {
                                    if (j === R || R !== null && j === R.alternate) {
                                        vt = j;
                                        break e
                                    }
                                    j = vt(j),
                                    R = vt(R)
                                }
                                vt = null
                            }
                        else
                            vt = null;
                        k !== null && pp(K, L, k, vt, !1),
                        ct !== null && Ht !== null && pp(K, Ht, ct, vt, !0)
                    }
                }
                t: {
                    if (L = z ? _i(z) : window,
                    k = L.nodeName && L.nodeName.toLowerCase(),
                    k === "select" || k === "input" && L.type === "file")
                        var Mt = Dd;
                    else if (Md(L))
                        if (Nd)
                            Mt = eb;
                        else {
                            Mt = W0;
                            var pt = $0
                        }
                    else
                        k = L.nodeName,
                        !k || k.toLowerCase() !== "input" || L.type !== "checkbox" && L.type !== "radio" ? z && Po(z.elementType) && (Mt = Dd) : Mt = tb;
                    if (Mt && (Mt = Mt(t, z))) {
                        jd(K, Mt, a, G);
                        break t
                    }
                    pt && pt(t, L, z),
                    t === "focusout" && z && L.type === "number" && z.memoizedProps.value != null && ko(L, "number", L.value)
                }
                switch (pt = z ? _i(z) : window,
                t) {
                case "focusin":
                    (Md(pt) || pt.contentEditable === "true") && (Dr = pt,
                    nu = z,
                    zi = null);
                    break;
                case "focusout":
                    zi = nu = Dr = null;
                    break;
                case "mousedown":
                    au = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    au = !1,
                    kd(K, a, G);
                    break;
                case "selectionchange":
                    if (ab)
                        break;
                case "keydown":
                case "keyup":
                    kd(K, a, G)
                }
                var wt;
                if ($o)
                    t: {
                        switch (t) {
                        case "compositionstart":
                            var Tt = "onCompositionStart";
                            break t;
                        case "compositionend":
                            Tt = "onCompositionEnd";
                            break t;
                        case "compositionupdate":
                            Tt = "onCompositionUpdate";
                            break t
                        }
                        Tt = void 0
                    }
                else
                    jr ? Cd(t, a) && (Tt = "onCompositionEnd") : t === "keydown" && a.keyCode === 229 && (Tt = "onCompositionStart");
                Tt && (_d && a.locale !== "ko" && (jr || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && jr && (wt = xd()) : (ra = G,
                Ko = "value"in ra ? ra.value : ra.textContent,
                jr = !0)),
                pt = Ds(z, Tt),
                0 < pt.length && (Tt = new Ed(Tt,t,null,a,G),
                K.push({
                    event: Tt,
                    listeners: pt
                }),
                wt ? Tt.data = wt : (wt = Rd(a),
                wt !== null && (Tt.data = wt)))),
                (wt = K0 ? Z0(t, a) : J0(t, a)) && (Tt = Ds(z, "onBeforeInput"),
                0 < Tt.length && (pt = new Ed("onBeforeInput","beforeinput",null,a,G),
                K.push({
                    event: pt,
                    listeners: Tt
                }),
                pt.data = wt)),
                Bb(K, t, z, a, G)
            }
            hp(K, e)
        })
    }
    function il(t, e, a) {
        return {
            instance: t,
            listener: e,
            currentTarget: a
        }
    }
    function Ds(t, e) {
        for (var a = e + "Capture", i = []; t !== null; ) {
            var o = t
              , c = o.stateNode;
            if (o = o.tag,
            o !== 5 && o !== 26 && o !== 27 || c === null || (o = Ai(t, a),
            o != null && i.unshift(il(t, o, c)),
            o = Ai(t, e),
            o != null && i.push(il(t, o, c))),
            t.tag === 3)
                return i;
            t = t.return
        }
        return []
    }
    function Gb(t) {
        if (t === null)
            return null;
        do
            t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null
    }
    function pp(t, e, a, i, o) {
        for (var c = e._reactName, p = []; a !== null && a !== i; ) {
            var g = a
              , E = g.alternate
              , z = g.stateNode;
            if (g = g.tag,
            E !== null && E === i)
                break;
            g !== 5 && g !== 26 && g !== 27 || z === null || (E = z,
            o ? (z = Ai(a, c),
            z != null && p.unshift(il(a, z, E))) : o || (z = Ai(a, c),
            z != null && p.push(il(a, z, E)))),
            a = a.return
        }
        p.length !== 0 && t.push({
            event: e,
            listeners: p
        })
    }
    var Vb = /\r\n?/g
      , Xb = /\u0000|\uFFFD/g;
    function yp(t) {
        return (typeof t == "string" ? t : "" + t).replace(Vb, `
`).replace(Xb, "")
    }
    function vp(t, e) {
        return e = yp(e),
        yp(t) === e
    }
    function Lt(t, e, a, i, o, c) {
        switch (a) {
        case "children":
            typeof i == "string" ? e === "body" || e === "textarea" && i === "" || Cr(t, i) : (typeof i == "number" || typeof i == "bigint") && e !== "body" && Cr(t, "" + i);
            break;
        case "className":
            ql(t, "class", i);
            break;
        case "tabIndex":
            ql(t, "tabindex", i);
            break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
            ql(t, a, i);
            break;
        case "style":
            vd(t, i, c);
            break;
        case "data":
            if (e !== "object") {
                ql(t, "data", i);
                break
            }
        case "src":
        case "href":
            if (i === "" && (e !== "a" || a !== "href")) {
                t.removeAttribute(a);
                break
            }
            if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(a);
                break
            }
            i = Hl("" + i),
            t.setAttribute(a, i);
            break;
        case "action":
        case "formAction":
            if (typeof i == "function") {
                t.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                break
            } else
                typeof c == "function" && (a === "formAction" ? (e !== "input" && Lt(t, e, "name", o.name, o, null),
                Lt(t, e, "formEncType", o.formEncType, o, null),
                Lt(t, e, "formMethod", o.formMethod, o, null),
                Lt(t, e, "formTarget", o.formTarget, o, null)) : (Lt(t, e, "encType", o.encType, o, null),
                Lt(t, e, "method", o.method, o, null),
                Lt(t, e, "target", o.target, o, null)));
            if (i == null || typeof i == "symbol" || typeof i == "boolean") {
                t.removeAttribute(a);
                break
            }
            i = Hl("" + i),
            t.setAttribute(a, i);
            break;
        case "onClick":
            i != null && (t.onclick = jn);
            break;
        case "onScroll":
            i != null && _t("scroll", t);
            break;
        case "onScrollEnd":
            i != null && _t("scrollend", t);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(s(61));
                if (a = i.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(s(60));
                    t.innerHTML = a
                }
            }
            break;
        case "multiple":
            t.multiple = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "muted":
            t.muted = i && typeof i != "function" && typeof i != "symbol";
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
            break;
        case "autoFocus":
            break;
        case "xlinkHref":
            if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
                t.removeAttribute("xlink:href");
                break
            }
            a = Hl("" + i),
            t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
            break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
            i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "" + i) : t.removeAttribute(a);
            break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
            i && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, "") : t.removeAttribute(a);
            break;
        case "capture":
        case "download":
            i === !0 ? t.setAttribute(a, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? t.setAttribute(a, i) : t.removeAttribute(a);
            break;
        case "cols":
        case "rows":
        case "size":
        case "span":
            i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? t.setAttribute(a, i) : t.removeAttribute(a);
            break;
        case "rowSpan":
        case "start":
            i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? t.removeAttribute(a) : t.setAttribute(a, i);
            break;
        case "popover":
            _t("beforetoggle", t),
            _t("toggle", t),
            Ul(t, "popover", i);
            break;
        case "xlinkActuate":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", i);
            break;
        case "xlinkArcrole":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", i);
            break;
        case "xlinkRole":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:role", i);
            break;
        case "xlinkShow":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:show", i);
            break;
        case "xlinkTitle":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:title", i);
            break;
        case "xlinkType":
            Mn(t, "http://www.w3.org/1999/xlink", "xlink:type", i);
            break;
        case "xmlBase":
            Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", i);
            break;
        case "xmlLang":
            Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", i);
            break;
        case "xmlSpace":
            Mn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", i);
            break;
        case "is":
            Ul(t, "is", i);
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = x0.get(a) || a,
            Ul(t, a, i))
        }
    }
    function Cc(t, e, a, i, o, c) {
        switch (a) {
        case "style":
            vd(t, i, c);
            break;
        case "dangerouslySetInnerHTML":
            if (i != null) {
                if (typeof i != "object" || !("__html"in i))
                    throw Error(s(61));
                if (a = i.__html,
                a != null) {
                    if (o.children != null)
                        throw Error(s(60));
                    t.innerHTML = a
                }
            }
            break;
        case "children":
            typeof i == "string" ? Cr(t, i) : (typeof i == "number" || typeof i == "bigint") && Cr(t, "" + i);
            break;
        case "onScroll":
            i != null && _t("scroll", t);
            break;
        case "onScrollEnd":
            i != null && _t("scrollend", t);
            break;
        case "onClick":
            i != null && (t.onclick = jn);
            break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
            break;
        case "innerText":
        case "textContent":
            break;
        default:
            if (!od.hasOwnProperty(a))
                t: {
                    if (a[0] === "o" && a[1] === "n" && (o = a.endsWith("Capture"),
                    e = a.slice(2, o ? a.length - 7 : void 0),
                    c = t[Ae] || null,
                    c = c != null ? c[a] : null,
                    typeof c == "function" && t.removeEventListener(e, c, o),
                    typeof i == "function")) {
                        typeof c != "function" && c !== null && (a in t ? t[a] = null : t.hasAttribute(a) && t.removeAttribute(a)),
                        t.addEventListener(e, i, o);
                        break t
                    }
                    a in t ? t[a] = i : i === !0 ? t.setAttribute(a, "") : Ul(t, a, i)
                }
        }
    }
    function de(t, e, a) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "img":
            _t("error", t),
            _t("load", t);
            var i = !1, o = !1, c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var p = a[c];
                    if (p != null)
                        switch (c) {
                        case "src":
                            i = !0;
                            break;
                        case "srcSet":
                            o = !0;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, e));
                        default:
                            Lt(t, e, c, p, a, null)
                        }
                }
            o && Lt(t, e, "srcSet", a.srcSet, a, null),
            i && Lt(t, e, "src", a.src, a, null);
            return;
        case "input":
            _t("invalid", t);
            var g = c = p = o = null
              , E = null
              , z = null;
            for (i in a)
                if (a.hasOwnProperty(i)) {
                    var G = a[i];
                    if (G != null)
                        switch (i) {
                        case "name":
                            o = G;
                            break;
                        case "type":
                            p = G;
                            break;
                        case "checked":
                            E = G;
                            break;
                        case "defaultChecked":
                            z = G;
                            break;
                        case "value":
                            c = G;
                            break;
                        case "defaultValue":
                            g = G;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (G != null)
                                throw Error(s(137, e));
                            break;
                        default:
                            Lt(t, e, i, G, a, null)
                        }
                }
            hd(t, c, g, E, z, p, o, !1);
            return;
        case "select":
            _t("invalid", t),
            i = p = c = null;
            for (o in a)
                if (a.hasOwnProperty(o) && (g = a[o],
                g != null))
                    switch (o) {
                    case "value":
                        c = g;
                        break;
                    case "defaultValue":
                        p = g;
                        break;
                    case "multiple":
                        i = g;
                    default:
                        Lt(t, e, o, g, a, null)
                    }
            e = c,
            a = p,
            t.multiple = !!i,
            e != null ? Tr(t, !!i, e, !1) : a != null && Tr(t, !!i, a, !0);
            return;
        case "textarea":
            _t("invalid", t),
            c = o = i = null;
            for (p in a)
                if (a.hasOwnProperty(p) && (g = a[p],
                g != null))
                    switch (p) {
                    case "value":
                        i = g;
                        break;
                    case "defaultValue":
                        o = g;
                        break;
                    case "children":
                        c = g;
                        break;
                    case "dangerouslySetInnerHTML":
                        if (g != null)
                            throw Error(s(91));
                        break;
                    default:
                        Lt(t, e, p, g, a, null)
                    }
            pd(t, i, o, c);
            return;
        case "option":
            for (E in a)
                if (a.hasOwnProperty(E) && (i = a[E],
                i != null))
                    switch (E) {
                    case "selected":
                        t.selected = i && typeof i != "function" && typeof i != "symbol";
                        break;
                    default:
                        Lt(t, e, E, i, a, null)
                    }
            return;
        case "dialog":
            _t("beforetoggle", t),
            _t("toggle", t),
            _t("cancel", t),
            _t("close", t);
            break;
        case "iframe":
        case "object":
            _t("load", t);
            break;
        case "video":
        case "audio":
            for (i = 0; i < rl.length; i++)
                _t(rl[i], t);
            break;
        case "image":
            _t("error", t),
            _t("load", t);
            break;
        case "details":
            _t("toggle", t);
            break;
        case "embed":
        case "source":
        case "link":
            _t("error", t),
            _t("load", t);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
            for (z in a)
                if (a.hasOwnProperty(z) && (i = a[z],
                i != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        throw Error(s(137, e));
                    default:
                        Lt(t, e, z, i, a, null)
                    }
            return;
        default:
            if (Po(e)) {
                for (G in a)
                    a.hasOwnProperty(G) && (i = a[G],
                    i !== void 0 && Cc(t, e, G, i, a, void 0));
                return
            }
        }
        for (g in a)
            a.hasOwnProperty(g) && (i = a[g],
            i != null && Lt(t, e, g, i, a, null))
    }
    function Kb(t, e, a, i) {
        switch (e) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
            break;
        case "input":
            var o = null
              , c = null
              , p = null
              , g = null
              , E = null
              , z = null
              , G = null;
            for (k in a) {
                var K = a[k];
                if (a.hasOwnProperty(k) && K != null)
                    switch (k) {
                    case "checked":
                        break;
                    case "value":
                        break;
                    case "defaultValue":
                        E = K;
                    default:
                        i.hasOwnProperty(k) || Lt(t, e, k, null, i, K)
                    }
            }
            for (var L in i) {
                var k = i[L];
                if (K = a[L],
                i.hasOwnProperty(L) && (k != null || K != null))
                    switch (L) {
                    case "type":
                        c = k;
                        break;
                    case "name":
                        o = k;
                        break;
                    case "checked":
                        z = k;
                        break;
                    case "defaultChecked":
                        G = k;
                        break;
                    case "value":
                        p = k;
                        break;
                    case "defaultValue":
                        g = k;
                        break;
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (k != null)
                            throw Error(s(137, e));
                        break;
                    default:
                        k !== K && Lt(t, e, L, k, i, K)
                    }
            }
            Bo(t, p, g, E, z, G, c, o);
            return;
        case "select":
            k = p = g = L = null;
            for (c in a)
                if (E = a[c],
                a.hasOwnProperty(c) && E != null)
                    switch (c) {
                    case "value":
                        break;
                    case "multiple":
                        k = E;
                    default:
                        i.hasOwnProperty(c) || Lt(t, e, c, null, i, E)
                    }
            for (o in i)
                if (c = i[o],
                E = a[o],
                i.hasOwnProperty(o) && (c != null || E != null))
                    switch (o) {
                    case "value":
                        L = c;
                        break;
                    case "defaultValue":
                        g = c;
                        break;
                    case "multiple":
                        p = c;
                    default:
                        c !== E && Lt(t, e, o, c, i, E)
                    }
            e = g,
            a = p,
            i = k,
            L != null ? Tr(t, !!a, L, !1) : !!i != !!a && (e != null ? Tr(t, !!a, e, !0) : Tr(t, !!a, a ? [] : "", !1));
            return;
        case "textarea":
            k = L = null;
            for (g in a)
                if (o = a[g],
                a.hasOwnProperty(g) && o != null && !i.hasOwnProperty(g))
                    switch (g) {
                    case "value":
                        break;
                    case "children":
                        break;
                    default:
                        Lt(t, e, g, null, i, o)
                    }
            for (p in i)
                if (o = i[p],
                c = a[p],
                i.hasOwnProperty(p) && (o != null || c != null))
                    switch (p) {
                    case "value":
                        L = o;
                        break;
                    case "defaultValue":
                        k = o;
                        break;
                    case "children":
                        break;
                    case "dangerouslySetInnerHTML":
                        if (o != null)
                            throw Error(s(91));
                        break;
                    default:
                        o !== c && Lt(t, e, p, o, i, c)
                    }
            md(t, L, k);
            return;
        case "option":
            for (var ct in a)
                if (L = a[ct],
                a.hasOwnProperty(ct) && L != null && !i.hasOwnProperty(ct))
                    switch (ct) {
                    case "selected":
                        t.selected = !1;
                        break;
                    default:
                        Lt(t, e, ct, null, i, L)
                    }
            for (E in i)
                if (L = i[E],
                k = a[E],
                i.hasOwnProperty(E) && L !== k && (L != null || k != null))
                    switch (E) {
                    case "selected":
                        t.selected = L && typeof L != "function" && typeof L != "symbol";
                        break;
                    default:
                        Lt(t, e, E, L, i, k)
                    }
            return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
            for (var vt in a)
                L = a[vt],
                a.hasOwnProperty(vt) && L != null && !i.hasOwnProperty(vt) && Lt(t, e, vt, null, i, L);
            for (z in i)
                if (L = i[z],
                k = a[z],
                i.hasOwnProperty(z) && L !== k && (L != null || k != null))
                    switch (z) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                        if (L != null)
                            throw Error(s(137, e));
                        break;
                    default:
                        Lt(t, e, z, L, i, k)
                    }
            return;
        default:
            if (Po(e)) {
                for (var Ht in a)
                    L = a[Ht],
                    a.hasOwnProperty(Ht) && L !== void 0 && !i.hasOwnProperty(Ht) && Cc(t, e, Ht, void 0, i, L);
                for (G in i)
                    L = i[G],
                    k = a[G],
                    !i.hasOwnProperty(G) || L === k || L === void 0 && k === void 0 || Cc(t, e, G, L, i, k);
                return
            }
        }
        for (var j in a)
            L = a[j],
            a.hasOwnProperty(j) && L != null && !i.hasOwnProperty(j) && Lt(t, e, j, null, i, L);
        for (K in i)
            L = i[K],
            k = a[K],
            !i.hasOwnProperty(K) || L === k || L == null && k == null || Lt(t, e, K, L, i, k)
    }
    function gp(t) {
        switch (t) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
            return !0;
        default:
            return !1
        }
    }
    function Zb() {
        if (typeof performance.getEntriesByType == "function") {
            for (var t = 0, e = 0, a = performance.getEntriesByType("resource"), i = 0; i < a.length; i++) {
                var o = a[i]
                  , c = o.transferSize
                  , p = o.initiatorType
                  , g = o.duration;
                if (c && g && gp(p)) {
                    for (p = 0,
                    g = o.responseEnd,
                    i += 1; i < a.length; i++) {
                        var E = a[i]
                          , z = E.startTime;
                        if (z > g)
                            break;
                        var G = E.transferSize
                          , K = E.initiatorType;
                        G && gp(K) && (E = E.responseEnd,
                        p += G * (E < g ? 1 : (g - z) / (E - z)))
                    }
                    if (--i,
                    e += 8 * (c + p) / (o.duration / 1e3),
                    t++,
                    10 < t)
                        break
                }
            }
            if (0 < t)
                return e / t / 1e6
        }
        return navigator.connection && (t = navigator.connection.downlink,
        typeof t == "number") ? t : 5
    }
    var Rc = null
      , Mc = null;
    function Ns(t) {
        return t.nodeType === 9 ? t : t.ownerDocument
    }
    function bp(t) {
        switch (t) {
        case "http://www.w3.org/2000/svg":
            return 1;
        case "http://www.w3.org/1998/Math/MathML":
            return 2;
        default:
            return 0
        }
    }
    function xp(t, e) {
        if (t === 0)
            switch (e) {
            case "svg":
                return 1;
            case "math":
                return 2;
            default:
                return 0
            }
        return t === 1 && e === "foreignObject" ? 0 : t
    }
    function jc(t, e) {
        return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null
    }
    var Dc = null;
    function Jb() {
        var t = window.event;
        return t && t.type === "popstate" ? t === Dc ? !1 : (Dc = t,
        !0) : (Dc = null,
        !1)
    }
    var Sp = typeof setTimeout == "function" ? setTimeout : void 0
      , Fb = typeof clearTimeout == "function" ? clearTimeout : void 0
      , wp = typeof Promise == "function" ? Promise : void 0
      , Ib = typeof queueMicrotask == "function" ? queueMicrotask : typeof wp < "u" ? function(t) {
        return wp.resolve(null).then(t).catch($b)
    }
    : Sp;
    function $b(t) {
        setTimeout(function() {
            throw t
        })
    }
    function Sa(t) {
        return t === "head"
    }
    function Ep(t, e) {
        var a = e
          , i = 0;
        do {
            var o = a.nextSibling;
            if (t.removeChild(a),
            o && o.nodeType === 8)
                if (a = o.data,
                a === "/$" || a === "/&") {
                    if (i === 0) {
                        t.removeChild(o),
                        ii(e);
                        return
                    }
                    i--
                } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
                    i++;
                else if (a === "html")
                    ll(t.ownerDocument.documentElement);
                else if (a === "head") {
                    a = t.ownerDocument.head,
                    ll(a);
                    for (var c = a.firstChild; c; ) {
                        var p = c.nextSibling
                          , g = c.nodeName;
                        c[Oi] || g === "SCRIPT" || g === "STYLE" || g === "LINK" && c.rel.toLowerCase() === "stylesheet" || a.removeChild(c),
                        c = p
                    }
                } else
                    a === "body" && ll(t.ownerDocument.body);
            a = o
        } while (a);
        ii(e)
    }
    function Op(t, e) {
        var a = t;
        t = 0;
        do {
            var i = a.nextSibling;
            if (a.nodeType === 1 ? e ? (a._stashedDisplay = a.style.display,
            a.style.display = "none") : (a.style.display = a._stashedDisplay || "",
            a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (e ? (a._stashedText = a.nodeValue,
            a.nodeValue = "") : a.nodeValue = a._stashedText || ""),
            i && i.nodeType === 8)
                if (a = i.data,
                a === "/$") {
                    if (t === 0)
                        break;
                    t--
                } else
                    a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || t++;
            a = i
        } while (a)
    }
    function Nc(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var a = e;
            switch (e = e.nextSibling,
            a.nodeName) {
            case "HTML":
            case "HEAD":
            case "BODY":
                Nc(a),
                Ho(a);
                continue;
            case "SCRIPT":
            case "STYLE":
                continue;
            case "LINK":
                if (a.rel.toLowerCase() === "stylesheet")
                    continue
            }
            t.removeChild(a)
        }
    }
    function Wb(t, e, a, i) {
        for (; t.nodeType === 1; ) {
            var o = a;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!i && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break
            } else if (i) {
                if (!t[Oi])
                    switch (e) {
                    case "meta":
                        if (!t.hasAttribute("itemprop"))
                            break;
                        return t;
                    case "link":
                        if (c = t.getAttribute("rel"),
                        c === "stylesheet" && t.hasAttribute("data-precedence"))
                            break;
                        if (c !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                            break;
                        return t;
                    case "style":
                        if (t.hasAttribute("data-precedence"))
                            break;
                        return t;
                    case "script":
                        if (c = t.getAttribute("src"),
                        (c !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && c && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                            break;
                        return t;
                    default:
                        return t
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && t.getAttribute("name") === c)
                    return t
            } else
                return t;
            if (t = tn(t.nextSibling),
            t === null)
                break
        }
        return null
    }
    function tx(t, e, a) {
        if (e === "")
            return null;
        for (; t.nodeType !== 3; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !a || (t = tn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function _p(t, e) {
        for (; t.nodeType !== 8; )
            if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = tn(t.nextSibling),
            t === null))
                return null;
        return t
    }
    function zc(t) {
        return t.data === "$?" || t.data === "$~"
    }
    function Uc(t) {
        return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading"
    }
    function ex(t, e) {
        var a = t.ownerDocument;
        if (t.data === "$~")
            t._reactRetry = e;
        else if (t.data !== "$?" || a.readyState !== "loading")
            e();
        else {
            var i = function() {
                e(),
                a.removeEventListener("DOMContentLoaded", i)
            };
            a.addEventListener("DOMContentLoaded", i),
            t._reactRetry = i
        }
    }
    function tn(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3)
                break;
            if (e === 8) {
                if (e = t.data,
                e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
                    break;
                if (e === "/$" || e === "/&")
                    return null
            }
        }
        return t
    }
    var qc = null;
    function Ap(t) {
        t = t.nextSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "/$" || a === "/&") {
                    if (e === 0)
                        return tn(t.nextSibling);
                    e--
                } else
                    a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || e++
            }
            t = t.nextSibling
        }
        return null
    }
    function Tp(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var a = t.data;
                if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
                    if (e === 0)
                        return t;
                    e--
                } else
                    a !== "/$" && a !== "/&" || e++
            }
            t = t.previousSibling
        }
        return null
    }
    function Cp(t, e, a) {
        switch (e = Ns(a),
        t) {
        case "html":
            if (t = e.documentElement,
            !t)
                throw Error(s(452));
            return t;
        case "head":
            if (t = e.head,
            !t)
                throw Error(s(453));
            return t;
        case "body":
            if (t = e.body,
            !t)
                throw Error(s(454));
            return t;
        default:
            throw Error(s(451))
        }
    }
    function ll(t) {
        for (var e = t.attributes; e.length; )
            t.removeAttributeNode(e[0]);
        Ho(t)
    }
    var en = new Map
      , Rp = new Set;
    function zs(t) {
        return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
    }
    var Kn = Q.d;
    Q.d = {
        f: nx,
        r: ax,
        D: rx,
        C: ix,
        L: lx,
        m: sx,
        X: ux,
        S: ox,
        M: cx
    };
    function nx() {
        var t = Kn.f()
          , e = _s();
        return t || e
    }
    function ax(t) {
        var e = Or(t);
        e !== null && e.tag === 5 && e.type === "form" ? Xh(e) : Kn.r(t)
    }
    var ni = typeof document > "u" ? null : document;
    function Mp(t, e, a) {
        var i = ni;
        if (i && typeof e == "string" && e) {
            var o = Ke(e);
            o = 'link[rel="' + t + '"][href="' + o + '"]',
            typeof a == "string" && (o += '[crossorigin="' + a + '"]'),
            Rp.has(o) || (Rp.add(o),
            t = {
                rel: t,
                crossOrigin: a,
                href: e
            },
            i.querySelector(o) === null && (e = i.createElement("link"),
            de(e, "link", t),
            re(e),
            i.head.appendChild(e)))
        }
    }
    function rx(t) {
        Kn.D(t),
        Mp("dns-prefetch", t, null)
    }
    function ix(t, e) {
        Kn.C(t, e),
        Mp("preconnect", t, e)
    }
    function lx(t, e, a) {
        Kn.L(t, e, a);
        var i = ni;
        if (i && t && e) {
            var o = 'link[rel="preload"][as="' + Ke(e) + '"]';
            e === "image" && a && a.imageSrcSet ? (o += '[imagesrcset="' + Ke(a.imageSrcSet) + '"]',
            typeof a.imageSizes == "string" && (o += '[imagesizes="' + Ke(a.imageSizes) + '"]')) : o += '[href="' + Ke(t) + '"]';
            var c = o;
            switch (e) {
            case "style":
                c = ai(t);
                break;
            case "script":
                c = ri(t)
            }
            en.has(c) || (t = v({
                rel: "preload",
                href: e === "image" && a && a.imageSrcSet ? void 0 : t,
                as: e
            }, a),
            en.set(c, t),
            i.querySelector(o) !== null || e === "style" && i.querySelector(sl(c)) || e === "script" && i.querySelector(ol(c)) || (e = i.createElement("link"),
            de(e, "link", t),
            re(e),
            i.head.appendChild(e)))
        }
    }
    function sx(t, e) {
        Kn.m(t, e);
        var a = ni;
        if (a && t) {
            var i = e && typeof e.as == "string" ? e.as : "script"
              , o = 'link[rel="modulepreload"][as="' + Ke(i) + '"][href="' + Ke(t) + '"]'
              , c = o;
            switch (i) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
                c = ri(t)
            }
            if (!en.has(c) && (t = v({
                rel: "modulepreload",
                href: t
            }, e),
            en.set(c, t),
            a.querySelector(o) === null)) {
                switch (i) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    if (a.querySelector(ol(c)))
                        return
                }
                i = a.createElement("link"),
                de(i, "link", t),
                re(i),
                a.head.appendChild(i)
            }
        }
    }
    function ox(t, e, a) {
        Kn.S(t, e, a);
        var i = ni;
        if (i && t) {
            var o = _r(i).hoistableStyles
              , c = ai(t);
            e = e || "default";
            var p = o.get(c);
            if (!p) {
                var g = {
                    loading: 0,
                    preload: null
                };
                if (p = i.querySelector(sl(c)))
                    g.loading = 5;
                else {
                    t = v({
                        rel: "stylesheet",
                        href: t,
                        "data-precedence": e
                    }, a),
                    (a = en.get(c)) && Lc(t, a);
                    var E = p = i.createElement("link");
                    re(E),
                    de(E, "link", t),
                    E._p = new Promise(function(z, G) {
                        E.onload = z,
                        E.onerror = G
                    }
                    ),
                    E.addEventListener("load", function() {
                        g.loading |= 1
                    }),
                    E.addEventListener("error", function() {
                        g.loading |= 2
                    }),
                    g.loading |= 4,
                    Us(p, e, i)
                }
                p = {
                    type: "stylesheet",
                    instance: p,
                    count: 1,
                    state: g
                },
                o.set(c, p)
            }
        }
    }
    function ux(t, e) {
        Kn.X(t, e);
        var a = ni;
        if (a && t) {
            var i = _r(a).hoistableScripts
              , o = ri(t)
              , c = i.get(o);
            c || (c = a.querySelector(ol(o)),
            c || (t = v({
                src: t,
                async: !0
            }, e),
            (e = en.get(o)) && Hc(t, e),
            c = a.createElement("script"),
            re(c),
            de(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(o, c))
        }
    }
    function cx(t, e) {
        Kn.M(t, e);
        var a = ni;
        if (a && t) {
            var i = _r(a).hoistableScripts
              , o = ri(t)
              , c = i.get(o);
            c || (c = a.querySelector(ol(o)),
            c || (t = v({
                src: t,
                async: !0,
                type: "module"
            }, e),
            (e = en.get(o)) && Hc(t, e),
            c = a.createElement("script"),
            re(c),
            de(c, "link", t),
            a.head.appendChild(c)),
            c = {
                type: "script",
                instance: c,
                count: 1,
                state: null
            },
            i.set(o, c))
        }
    }
    function jp(t, e, a, i) {
        var o = (o = mt.current) ? zs(o) : null;
        if (!o)
            throw Error(s(446));
        switch (t) {
        case "meta":
        case "title":
            return null;
        case "style":
            return typeof a.precedence == "string" && typeof a.href == "string" ? (e = ai(a.href),
            a = _r(o).hoistableStyles,
            i = a.get(e),
            i || (i = {
                type: "style",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        case "link":
            if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                t = ai(a.href);
                var c = _r(o).hoistableStyles
                  , p = c.get(t);
                if (p || (o = o.ownerDocument || o,
                p = {
                    type: "stylesheet",
                    instance: null,
                    count: 0,
                    state: {
                        loading: 0,
                        preload: null
                    }
                },
                c.set(t, p),
                (c = o.querySelector(sl(t))) && !c._p && (p.instance = c,
                p.state.loading = 5),
                en.has(t) || (a = {
                    rel: "preload",
                    as: "style",
                    href: a.href,
                    crossOrigin: a.crossOrigin,
                    integrity: a.integrity,
                    media: a.media,
                    hrefLang: a.hrefLang,
                    referrerPolicy: a.referrerPolicy
                },
                en.set(t, a),
                c || fx(o, t, a, p.state))),
                e && i === null)
                    throw Error(s(528, ""));
                return p
            }
            if (e && i !== null)
                throw Error(s(529, ""));
            return null;
        case "script":
            return e = a.async,
            a = a.src,
            typeof a == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ri(a),
            a = _r(o).hoistableScripts,
            i = a.get(e),
            i || (i = {
                type: "script",
                instance: null,
                count: 0,
                state: null
            },
            a.set(e, i)),
            i) : {
                type: "void",
                instance: null,
                count: 0,
                state: null
            };
        default:
            throw Error(s(444, t))
        }
    }
    function ai(t) {
        return 'href="' + Ke(t) + '"'
    }
    function sl(t) {
        return 'link[rel="stylesheet"][' + t + "]"
    }
    function Dp(t) {
        return v({}, t, {
            "data-precedence": t.precedence,
            precedence: null
        })
    }
    function fx(t, e, a, i) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? i.loading = 1 : (e = t.createElement("link"),
        i.preload = e,
        e.addEventListener("load", function() {
            return i.loading |= 1
        }),
        e.addEventListener("error", function() {
            return i.loading |= 2
        }),
        de(e, "link", a),
        re(e),
        t.head.appendChild(e))
    }
    function ri(t) {
        return '[src="' + Ke(t) + '"]'
    }
    function ol(t) {
        return "script[async]" + t
    }
    function Np(t, e, a) {
        if (e.count++,
        e.instance === null)
            switch (e.type) {
            case "style":
                var i = t.querySelector('style[data-href~="' + Ke(a.href) + '"]');
                if (i)
                    return e.instance = i,
                    re(i),
                    i;
                var o = v({}, a, {
                    "data-href": a.href,
                    "data-precedence": a.precedence,
                    href: null,
                    precedence: null
                });
                return i = (t.ownerDocument || t).createElement("style"),
                re(i),
                de(i, "style", o),
                Us(i, a.precedence, t),
                e.instance = i;
            case "stylesheet":
                o = ai(a.href);
                var c = t.querySelector(sl(o));
                if (c)
                    return e.state.loading |= 4,
                    e.instance = c,
                    re(c),
                    c;
                i = Dp(a),
                (o = en.get(o)) && Lc(i, o),
                c = (t.ownerDocument || t).createElement("link"),
                re(c);
                var p = c;
                return p._p = new Promise(function(g, E) {
                    p.onload = g,
                    p.onerror = E
                }
                ),
                de(c, "link", i),
                e.state.loading |= 4,
                Us(c, a.precedence, t),
                e.instance = c;
            case "script":
                return c = ri(a.src),
                (o = t.querySelector(ol(c))) ? (e.instance = o,
                re(o),
                o) : (i = a,
                (o = en.get(c)) && (i = v({}, a),
                Hc(i, o)),
                t = t.ownerDocument || t,
                o = t.createElement("script"),
                re(o),
                de(o, "link", i),
                t.head.appendChild(o),
                e.instance = o);
            case "void":
                return null;
            default:
                throw Error(s(443, e.type))
            }
        else
            e.type === "stylesheet" && (e.state.loading & 4) === 0 && (i = e.instance,
            e.state.loading |= 4,
            Us(i, a.precedence, t));
        return e.instance
    }
    function Us(t, e, a) {
        for (var i = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), o = i.length ? i[i.length - 1] : null, c = o, p = 0; p < i.length; p++) {
            var g = i[p];
            if (g.dataset.precedence === e)
                c = g;
            else if (c !== o)
                break
        }
        c ? c.parentNode.insertBefore(t, c.nextSibling) : (e = a.nodeType === 9 ? a.head : a,
        e.insertBefore(t, e.firstChild))
    }
    function Lc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.title == null && (t.title = e.title)
    }
    function Hc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
        t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
        t.integrity == null && (t.integrity = e.integrity)
    }
    var qs = null;
    function zp(t, e, a) {
        if (qs === null) {
            var i = new Map
              , o = qs = new Map;
            o.set(a, i)
        } else
            o = qs,
            i = o.get(a),
            i || (i = new Map,
            o.set(a, i));
        if (i.has(t))
            return i;
        for (i.set(t, null),
        a = a.getElementsByTagName(t),
        o = 0; o < a.length; o++) {
            var c = a[o];
            if (!(c[Oi] || c[oe] || t === "link" && c.getAttribute("rel") === "stylesheet") && c.namespaceURI !== "http://www.w3.org/2000/svg") {
                var p = c.getAttribute(e) || "";
                p = t + p;
                var g = i.get(p);
                g ? g.push(c) : i.set(p, [c])
            }
        }
        return i
    }
    function Up(t, e, a) {
        t = t.ownerDocument || t,
        t.head.insertBefore(a, e === "title" ? t.querySelector("head > title") : null)
    }
    function dx(t, e, a) {
        if (a === 1 || e.itemProp != null)
            return !1;
        switch (t) {
        case "meta":
        case "title":
            return !0;
        case "style":
            if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
                break;
            return !0;
        case "link":
            if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
                break;
            switch (e.rel) {
            case "stylesheet":
                return t = e.disabled,
                typeof e.precedence == "string" && t == null;
            default:
                return !0
            }
        case "script":
            if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
                return !0
        }
        return !1
    }
    function qp(t) {
        return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
    }
    function hx(t, e, a, i) {
        if (a.type === "stylesheet" && (typeof i.media != "string" || matchMedia(i.media).matches !== !1) && (a.state.loading & 4) === 0) {
            if (a.instance === null) {
                var o = ai(i.href)
                  , c = e.querySelector(sl(o));
                if (c) {
                    e = c._p,
                    e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++,
                    t = Ls.bind(t),
                    e.then(t, t)),
                    a.state.loading |= 4,
                    a.instance = c,
                    re(c);
                    return
                }
                c = e.ownerDocument || e,
                i = Dp(i),
                (o = en.get(o)) && Lc(i, o),
                c = c.createElement("link"),
                re(c);
                var p = c;
                p._p = new Promise(function(g, E) {
                    p.onload = g,
                    p.onerror = E
                }
                ),
                de(c, "link", i),
                a.instance = c
            }
            t.stylesheets === null && (t.stylesheets = new Map),
            t.stylesheets.set(a, e),
            (e = a.state.preload) && (a.state.loading & 3) === 0 && (t.count++,
            a = Ls.bind(t),
            e.addEventListener("load", a),
            e.addEventListener("error", a))
        }
    }
    var Qc = 0;
    function mx(t, e) {
        return t.stylesheets && t.count === 0 && Qs(t, t.stylesheets),
        0 < t.count || 0 < t.imgCount ? function(a) {
            var i = setTimeout(function() {
                if (t.stylesheets && Qs(t, t.stylesheets),
                t.unsuspend) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, 6e4 + e);
            0 < t.imgBytes && Qc === 0 && (Qc = 62500 * Zb());
            var o = setTimeout(function() {
                if (t.waitingForImages = !1,
                t.count === 0 && (t.stylesheets && Qs(t, t.stylesheets),
                t.unsuspend)) {
                    var c = t.unsuspend;
                    t.unsuspend = null,
                    c()
                }
            }, (t.imgBytes > Qc ? 50 : 800) + e);
            return t.unsuspend = a,
            function() {
                t.unsuspend = null,
                clearTimeout(i),
                clearTimeout(o)
            }
        }
        : null
    }
    function Ls() {
        if (this.count--,
        this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
            if (this.stylesheets)
                Qs(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                this.unsuspend = null,
                t()
            }
        }
    }
    var Hs = null;
    function Qs(t, e) {
        t.stylesheets = null,
        t.unsuspend !== null && (t.count++,
        Hs = new Map,
        e.forEach(px, t),
        Hs = null,
        Ls.call(t))
    }
    function px(t, e) {
        if (!(e.state.loading & 4)) {
            var a = Hs.get(t);
            if (a)
                var i = a.get(null);
            else {
                a = new Map,
                Hs.set(t, a);
                for (var o = t.querySelectorAll("link[data-precedence],style[data-precedence]"), c = 0; c < o.length; c++) {
                    var p = o[c];
                    (p.nodeName === "LINK" || p.getAttribute("media") !== "not all") && (a.set(p.dataset.precedence, p),
                    i = p)
                }
                i && a.set(null, i)
            }
            o = e.instance,
            p = o.getAttribute("data-precedence"),
            c = a.get(p) || i,
            c === i && a.set(null, o),
            a.set(p, o),
            this.count++,
            i = Ls.bind(this),
            o.addEventListener("load", i),
            o.addEventListener("error", i),
            c ? c.parentNode.insertBefore(o, c.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
            t.insertBefore(o, t.firstChild)),
            e.state.loading |= 4
        }
    }
    var ul = {
        $$typeof: I,
        Provider: null,
        Consumer: null,
        _currentValue: D,
        _currentValue2: D,
        _threadCount: 0
    };
    function yx(t, e, a, i, o, c, p, g, E) {
        this.tag = 1,
        this.containerInfo = t,
        this.pingCache = this.current = this.pendingChildren = null,
        this.timeoutHandle = -1,
        this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
        this.callbackPriority = 0,
        this.expirationTimes = na(-1),
        this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
        this.entanglements = na(0),
        this.hiddenUpdates = na(null),
        this.identifierPrefix = i,
        this.onUncaughtError = o,
        this.onCaughtError = c,
        this.onRecoverableError = p,
        this.pooledCache = null,
        this.pooledCacheLanes = 0,
        this.formState = E,
        this.incompleteTransitions = new Map
    }
    function Lp(t, e, a, i, o, c, p, g, E, z, G, K) {
        return t = new yx(t,e,a,p,E,z,G,K,g),
        e = 1,
        c === !0 && (e |= 24),
        c = qe(3, null, null, e),
        t.current = c,
        c.stateNode = t,
        e = gu(),
        e.refCount++,
        t.pooledCache = e,
        e.refCount++,
        c.memoizedState = {
            element: i,
            isDehydrated: a,
            cache: e
        },
        wu(c),
        t
    }
    function Hp(t) {
        return t ? (t = Ur,
        t) : Ur
    }
    function Qp(t, e, a, i, o, c) {
        o = Hp(o),
        i.context === null ? i.context = o : i.pendingContext = o,
        i = ca(e),
        i.payload = {
            element: a
        },
        c = c === void 0 ? null : c,
        c !== null && (i.callback = c),
        a = fa(t, i, e),
        a !== null && (De(a, t, e),
        ki(a, t, e))
    }
    function Bp(t, e) {
        if (t = t.memoizedState,
        t !== null && t.dehydrated !== null) {
            var a = t.retryLane;
            t.retryLane = a !== 0 && a < e ? a : e
        }
    }
    function Bc(t, e) {
        Bp(t, e),
        (t = t.alternate) && Bp(t, e)
    }
    function kp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = Xa(t, 67108864);
            e !== null && De(e, t, 67108864),
            Bc(t, 67108864)
        }
    }
    function Pp(t) {
        if (t.tag === 13 || t.tag === 31) {
            var e = ke();
            e = Sr(e);
            var a = Xa(t, e);
            a !== null && De(a, t, e),
            Bc(t, e)
        }
    }
    var Bs = !0;
    function vx(t, e, a, i) {
        var o = A.T;
        A.T = null;
        var c = Q.p;
        try {
            Q.p = 2,
            kc(t, e, a, i)
        } finally {
            Q.p = c,
            A.T = o
        }
    }
    function gx(t, e, a, i) {
        var o = A.T;
        A.T = null;
        var c = Q.p;
        try {
            Q.p = 8,
            kc(t, e, a, i)
        } finally {
            Q.p = c,
            A.T = o
        }
    }
    function kc(t, e, a, i) {
        if (Bs) {
            var o = Pc(i);
            if (o === null)
                Tc(t, e, i, ks, a),
                Gp(t, i);
            else if (xx(o, t, e, a, i))
                i.stopPropagation();
            else if (Gp(t, i),
            e & 4 && -1 < bx.indexOf(t)) {
                for (; o !== null; ) {
                    var c = Or(o);
                    if (c !== null)
                        switch (c.tag) {
                        case 3:
                            if (c = c.stateNode,
                            c.current.memoizedState.isDehydrated) {
                                var p = pn(c.pendingLanes);
                                if (p !== 0) {
                                    var g = c;
                                    for (g.pendingLanes |= 2,
                                    g.entangledLanes |= 2; p; ) {
                                        var E = 1 << 31 - he(p);
                                        g.entanglements[1] |= E,
                                        p &= ~E
                                    }
                                    bn(c),
                                    (Nt & 6) === 0 && (Es = be() + 500,
                                    al(0))
                                }
                            }
                            break;
                        case 31:
                        case 13:
                            g = Xa(c, 2),
                            g !== null && De(g, c, 2),
                            _s(),
                            Bc(c, 2)
                        }
                    if (c = Pc(i),
                    c === null && Tc(t, e, i, ks, a),
                    c === o)
                        break;
                    o = c
                }
                o !== null && i.stopPropagation()
            } else
                Tc(t, e, i, null, a)
        }
    }
    function Pc(t) {
        return t = Go(t),
        Yc(t)
    }
    var ks = null;
    function Yc(t) {
        if (ks = null,
        t = Er(t),
        t !== null) {
            var e = f(t);
            if (e === null)
                t = null;
            else {
                var a = e.tag;
                if (a === 13) {
                    if (t = d(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 31) {
                    if (t = h(e),
                    t !== null)
                        return t;
                    t = null
                } else if (a === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null
                } else
                    e !== t && (t = null)
            }
        }
        return ks = t,
        null
    }
    function Yp(t) {
        switch (t) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 8;
        case "message":
            switch (zo()) {
            case La:
                return 2;
            case Nl:
                return 8;
            case Ha:
            case wi:
                return 32;
            case Rn:
                return 268435456;
            default:
                return 32
            }
        default:
            return 32
        }
    }
    var Gc = !1
      , wa = null
      , Ea = null
      , Oa = null
      , cl = new Map
      , fl = new Map
      , _a = []
      , bx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Gp(t, e) {
        switch (t) {
        case "focusin":
        case "focusout":
            wa = null;
            break;
        case "dragenter":
        case "dragleave":
            Ea = null;
            break;
        case "mouseover":
        case "mouseout":
            Oa = null;
            break;
        case "pointerover":
        case "pointerout":
            cl.delete(e.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            fl.delete(e.pointerId)
        }
    }
    function dl(t, e, a, i, o, c) {
        return t === null || t.nativeEvent !== c ? (t = {
            blockedOn: e,
            domEventName: a,
            eventSystemFlags: i,
            nativeEvent: c,
            targetContainers: [o]
        },
        e !== null && (e = Or(e),
        e !== null && kp(e)),
        t) : (t.eventSystemFlags |= i,
        e = t.targetContainers,
        o !== null && e.indexOf(o) === -1 && e.push(o),
        t)
    }
    function xx(t, e, a, i, o) {
        switch (e) {
        case "focusin":
            return wa = dl(wa, t, e, a, i, o),
            !0;
        case "dragenter":
            return Ea = dl(Ea, t, e, a, i, o),
            !0;
        case "mouseover":
            return Oa = dl(Oa, t, e, a, i, o),
            !0;
        case "pointerover":
            var c = o.pointerId;
            return cl.set(c, dl(cl.get(c) || null, t, e, a, i, o)),
            !0;
        case "gotpointercapture":
            return c = o.pointerId,
            fl.set(c, dl(fl.get(c) || null, t, e, a, i, o)),
            !0
        }
        return !1
    }
    function Vp(t) {
        var e = Er(t.target);
        if (e !== null) {
            var a = f(e);
            if (a !== null) {
                if (e = a.tag,
                e === 13) {
                    if (e = d(a),
                    e !== null) {
                        t.blockedOn = e,
                        id(t.priority, function() {
                            Pp(a)
                        });
                        return
                    }
                } else if (e === 31) {
                    if (e = h(a),
                    e !== null) {
                        t.blockedOn = e,
                        id(t.priority, function() {
                            Pp(a)
                        });
                        return
                    }
                } else if (e === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                    t.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                    return
                }
            }
        }
        t.blockedOn = null
    }
    function Ps(t) {
        if (t.blockedOn !== null)
            return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var a = Pc(t.nativeEvent);
            if (a === null) {
                a = t.nativeEvent;
                var i = new a.constructor(a.type,a);
                Yo = i,
                a.target.dispatchEvent(i),
                Yo = null
            } else
                return e = Or(a),
                e !== null && kp(e),
                t.blockedOn = a,
                !1;
            e.shift()
        }
        return !0
    }
    function Xp(t, e, a) {
        Ps(t) && a.delete(e)
    }
    function Sx() {
        Gc = !1,
        wa !== null && Ps(wa) && (wa = null),
        Ea !== null && Ps(Ea) && (Ea = null),
        Oa !== null && Ps(Oa) && (Oa = null),
        cl.forEach(Xp),
        fl.forEach(Xp)
    }
    function Ys(t, e) {
        t.blockedOn === e && (t.blockedOn = null,
        Gc || (Gc = !0,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, Sx)))
    }
    var Gs = null;
    function Kp(t) {
        Gs !== t && (Gs = t,
        n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
            Gs === t && (Gs = null);
            for (var e = 0; e < t.length; e += 3) {
                var a = t[e]
                  , i = t[e + 1]
                  , o = t[e + 2];
                if (typeof i != "function") {
                    if (Yc(i || a) === null)
                        continue;
                    break
                }
                var c = Or(a);
                c !== null && (t.splice(e, 3),
                e -= 3,
                Pu(c, {
                    pending: !0,
                    data: o,
                    method: a.method,
                    action: i
                }, i, o))
            }
        }))
    }
    function ii(t) {
        function e(E) {
            return Ys(E, t)
        }
        wa !== null && Ys(wa, t),
        Ea !== null && Ys(Ea, t),
        Oa !== null && Ys(Oa, t),
        cl.forEach(e),
        fl.forEach(e);
        for (var a = 0; a < _a.length; a++) {
            var i = _a[a];
            i.blockedOn === t && (i.blockedOn = null)
        }
        for (; 0 < _a.length && (a = _a[0],
        a.blockedOn === null); )
            Vp(a),
            a.blockedOn === null && _a.shift();
        if (a = (t.ownerDocument || t).$$reactFormReplay,
        a != null)
            for (i = 0; i < a.length; i += 3) {
                var o = a[i]
                  , c = a[i + 1]
                  , p = o[Ae] || null;
                if (typeof c == "function")
                    p || Kp(a);
                else if (p) {
                    var g = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (o = c,
                        p = c[Ae] || null)
                            g = p.formAction;
                        else if (Yc(o) !== null)
                            continue
                    } else
                        g = p.action;
                    typeof g == "function" ? a[i + 1] = g : (a.splice(i, 3),
                    i -= 3),
                    Kp(a)
                }
            }
    }
    function Zp() {
        function t(c) {
            c.canIntercept && c.info === "react-transition" && c.intercept({
                handler: function() {
                    return new Promise(function(p) {
                        return o = p
                    }
                    )
                },
                focusReset: "manual",
                scroll: "manual"
            })
        }
        function e() {
            o !== null && (o(),
            o = null),
            i || setTimeout(a, 20)
        }
        function a() {
            if (!i && !navigation.transition) {
                var c = navigation.currentEntry;
                c && c.url != null && navigation.navigate(c.url, {
                    state: c.getState(),
                    info: "react-transition",
                    history: "replace"
                })
            }
        }
        if (typeof navigation == "object") {
            var i = !1
              , o = null;
            return navigation.addEventListener("navigate", t),
            navigation.addEventListener("navigatesuccess", e),
            navigation.addEventListener("navigateerror", e),
            setTimeout(a, 100),
            function() {
                i = !0,
                navigation.removeEventListener("navigate", t),
                navigation.removeEventListener("navigatesuccess", e),
                navigation.removeEventListener("navigateerror", e),
                o !== null && (o(),
                o = null)
            }
        }
    }
    function Vc(t) {
        this._internalRoot = t
    }
    Vs.prototype.render = Vc.prototype.render = function(t) {
        var e = this._internalRoot;
        if (e === null)
            throw Error(s(409));
        var a = e.current
          , i = ke();
        Qp(a, i, t, e, null, null)
    }
    ,
    Vs.prototype.unmount = Vc.prototype.unmount = function() {
        var t = this._internalRoot;
        if (t !== null) {
            this._internalRoot = null;
            var e = t.containerInfo;
            Qp(t.current, 2, null, t, null, null),
            _s(),
            e[wr] = null
        }
    }
    ;
    function Vs(t) {
        this._internalRoot = t
    }
    Vs.prototype.unstable_scheduleHydration = function(t) {
        if (t) {
            var e = qo();
            t = {
                blockedOn: null,
                target: t,
                priority: e
            };
            for (var a = 0; a < _a.length && e !== 0 && e < _a[a].priority; a++)
                ;
            _a.splice(a, 0, t),
            a === 0 && Vp(t)
        }
    }
    ;
    var Jp = r.version;
    if (Jp !== "19.2.1")
        throw Error(s(527, Jp, "19.2.1"));
    Q.findDOMNode = function(t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function" ? Error(s(188)) : (t = Object.keys(t).join(","),
            Error(s(268, t)));
        return t = y(e),
        t = t !== null ? b(t) : null,
        t = t === null ? null : t.stateNode,
        t
    }
    ;
    var wx = {
        bundleType: 0,
        version: "19.2.1",
        rendererPackageName: "react-dom",
        currentDispatcherRef: A,
        reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Xs.isDisabled && Xs.supportsFiber)
            try {
                Qa = Xs.inject(wx),
                xe = Xs
            } catch {}
    }
    return pl.createRoot = function(t, e) {
        if (!u(t))
            throw Error(s(299));
        var a = !1
          , i = ""
          , o = nm
          , c = am
          , p = rm;
        return e != null && (e.unstable_strictMode === !0 && (a = !0),
        e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
        e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
        e.onCaughtError !== void 0 && (c = e.onCaughtError),
        e.onRecoverableError !== void 0 && (p = e.onRecoverableError)),
        e = Lp(t, 1, !1, null, null, a, i, null, o, c, p, Zp),
        t[wr] = e.current,
        Ac(t),
        new Vc(e)
    }
    ,
    pl.hydrateRoot = function(t, e, a) {
        if (!u(t))
            throw Error(s(299));
        var i = !1
          , o = ""
          , c = nm
          , p = am
          , g = rm
          , E = null;
        return a != null && (a.unstable_strictMode === !0 && (i = !0),
        a.identifierPrefix !== void 0 && (o = a.identifierPrefix),
        a.onUncaughtError !== void 0 && (c = a.onUncaughtError),
        a.onCaughtError !== void 0 && (p = a.onCaughtError),
        a.onRecoverableError !== void 0 && (g = a.onRecoverableError),
        a.formState !== void 0 && (E = a.formState)),
        e = Lp(t, 1, !0, e, a ?? null, i, o, E, c, p, g, Zp),
        e.context = Hp(null),
        a = e.current,
        i = ke(),
        i = Sr(i),
        o = ca(i),
        o.callback = null,
        fa(a, o, i),
        a = i,
        e.current.lanes = a,
        Gt(e, a),
        bn(e),
        t[wr] = e.current,
        Ac(t),
        new Vs(e)
    }
    ,
    pl.version = "19.2.1",
    pl
}
var Sy;
function qS() {
    if (Sy)
        return $c.exports;
    Sy = 1;
    function n() {
        if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
            } catch (r) {
                console.error(r)
            }
    }
    return n(),
    $c.exports = US(),
    $c.exports
}
var LS = qS()
  , HS = (function() {
    function n() {
        this.keyToValue = new Map,
        this.valueToKey = new Map
    }
    return n.prototype.set = function(r, l) {
        this.keyToValue.set(r, l),
        this.valueToKey.set(l, r)
    }
    ,
    n.prototype.getByKey = function(r) {
        return this.keyToValue.get(r)
    }
    ,
    n.prototype.getByValue = function(r) {
        return this.valueToKey.get(r)
    }
    ,
    n.prototype.clear = function() {
        this.keyToValue.clear(),
        this.valueToKey.clear()
    }
    ,
    n
}
)()
  , Xv = (function() {
    function n(r) {
        this.generateIdentifier = r,
        this.kv = new HS
    }
    return n.prototype.register = function(r, l) {
        this.kv.getByValue(r) || (l || (l = this.generateIdentifier(r)),
        this.kv.set(l, r))
    }
    ,
    n.prototype.clear = function() {
        this.kv.clear()
    }
    ,
    n.prototype.getIdentifier = function(r) {
        return this.kv.getByValue(r)
    }
    ,
    n.prototype.getValue = function(r) {
        return this.kv.getByKey(r)
    }
    ,
    n
}
)()
  , QS = (function() {
    var n = function(r, l) {
        return n = Object.setPrototypeOf || {
            __proto__: []
        }instanceof Array && function(s, u) {
            s.__proto__ = u
        }
        || function(s, u) {
            for (var f in u)
                Object.prototype.hasOwnProperty.call(u, f) && (s[f] = u[f])
        }
        ,
        n(r, l)
    };
    return function(r, l) {
        if (typeof l != "function" && l !== null)
            throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
        n(r, l);
        function s() {
            this.constructor = r
        }
        r.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype,
        new s)
    }
}
)()
  , BS = (function(n) {
    QS(r, n);
    function r() {
        var l = n.call(this, function(s) {
            return s.name
        }) || this;
        return l.classToAllowedProps = new Map,
        l
    }
    return r.prototype.register = function(l, s) {
        typeof s == "object" ? (s.allowProps && this.classToAllowedProps.set(l, s.allowProps),
        n.prototype.register.call(this, l, s.identifier)) : n.prototype.register.call(this, l, s)
    }
    ,
    r.prototype.getAllowedProps = function(l) {
        return this.classToAllowedProps.get(l)
    }
    ,
    r
}
)(Xv)
  , kS = function(n, r) {
    var l = typeof Symbol == "function" && n[Symbol.iterator];
    if (!l)
        return n;
    var s = l.call(n), u, f = [], d;
    try {
        for (; (r === void 0 || r-- > 0) && !(u = s.next()).done; )
            f.push(u.value)
    } catch (h) {
        d = {
            error: h
        }
    } finally {
        try {
            u && !u.done && (l = s.return) && l.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return f
};
function PS(n) {
    if ("values"in Object)
        return Object.values(n);
    var r = [];
    for (var l in n)
        n.hasOwnProperty(l) && r.push(n[l]);
    return r
}
function YS(n, r) {
    var l = PS(n);
    if ("find"in l)
        return l.find(r);
    for (var s = l, u = 0; u < s.length; u++) {
        var f = s[u];
        if (r(f))
            return f
    }
}
function fi(n, r) {
    Object.entries(n).forEach(function(l) {
        var s = kS(l, 2)
          , u = s[0]
          , f = s[1];
        return r(f, u)
    })
}
function io(n, r) {
    return n.indexOf(r) !== -1
}
function wy(n, r) {
    for (var l = 0; l < n.length; l++) {
        var s = n[l];
        if (r(s))
            return s
    }
}
var GS = (function() {
    function n() {
        this.transfomers = {}
    }
    return n.prototype.register = function(r) {
        this.transfomers[r.name] = r
    }
    ,
    n.prototype.findApplicable = function(r) {
        return YS(this.transfomers, function(l) {
            return l.isApplicable(r)
        })
    }
    ,
    n.prototype.findByName = function(r) {
        return this.transfomers[r]
    }
    ,
    n
}
)()
  , VS = function(n) {
    return Object.prototype.toString.call(n).slice(8, -1)
}
  , Kv = function(n) {
    return typeof n > "u"
}
  , XS = function(n) {
    return n === null
}
  , Sl = function(n) {
    return typeof n != "object" || n === null || n === Object.prototype ? !1 : Object.getPrototypeOf(n) === null ? !0 : Object.getPrototypeOf(n) === Object.prototype
}
  , Sf = function(n) {
    return Sl(n) && Object.keys(n).length === 0
}
  , Da = function(n) {
    return Array.isArray(n)
}
  , KS = function(n) {
    return typeof n == "string"
}
  , ZS = function(n) {
    return typeof n == "number" && !isNaN(n)
}
  , JS = function(n) {
    return typeof n == "boolean"
}
  , FS = function(n) {
    return n instanceof RegExp
}
  , wl = function(n) {
    return n instanceof Map
}
  , El = function(n) {
    return n instanceof Set
}
  , Zv = function(n) {
    return VS(n) === "Symbol"
}
  , IS = function(n) {
    return n instanceof Date && !isNaN(n.valueOf())
}
  , $S = function(n) {
    return n instanceof Error
}
  , Ey = function(n) {
    return typeof n == "number" && isNaN(n)
}
  , WS = function(n) {
    return JS(n) || XS(n) || Kv(n) || ZS(n) || KS(n) || Zv(n)
}
  , tw = function(n) {
    return typeof n == "bigint"
}
  , ew = function(n) {
    return n === 1 / 0 || n === -1 / 0
}
  , nw = function(n) {
    return ArrayBuffer.isView(n) && !(n instanceof DataView)
}
  , aw = function(n) {
    return n instanceof URL
}
  , Jv = function(n) {
    return n.replace(/\./g, "\\.")
}
  , nf = function(n) {
    return n.map(String).map(Jv).join(".")
}
  , gl = function(n) {
    for (var r = [], l = "", s = 0; s < n.length; s++) {
        var u = n.charAt(s)
          , f = u === "\\" && n.charAt(s + 1) === ".";
        if (f) {
            l += ".",
            s++;
            continue
        }
        var d = u === ".";
        if (d) {
            r.push(l),
            l = "";
            continue
        }
        l += u
    }
    var h = l;
    return r.push(h),
    r
}
  , wf = function() {
    return wf = Object.assign || function(n) {
        for (var r, l = 1, s = arguments.length; l < s; l++) {
            r = arguments[l];
            for (var u in r)
                Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u])
        }
        return n
    }
    ,
    wf.apply(this, arguments)
}
  , Ef = function(n, r) {
    var l = typeof Symbol == "function" && n[Symbol.iterator];
    if (!l)
        return n;
    var s = l.call(n), u, f = [], d;
    try {
        for (; (r === void 0 || r-- > 0) && !(u = s.next()).done; )
            f.push(u.value)
    } catch (h) {
        d = {
            error: h
        }
    } finally {
        try {
            u && !u.done && (l = s.return) && l.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return f
}
  , Of = function(n, r) {
    for (var l = 0, s = r.length, u = n.length; l < s; l++,
    u++)
        n[u] = r[l];
    return n
};
function xn(n, r, l, s) {
    return {
        isApplicable: n,
        annotation: r,
        transform: l,
        untransform: s
    }
}
var Fv = [xn(Kv, "undefined", function() {
    return null
}, function() {}), xn(tw, "bigint", function(n) {
    return n.toString()
}, function(n) {
    return typeof BigInt < "u" ? BigInt(n) : (console.error("Please add a BigInt polyfill."),
    n)
}), xn(IS, "Date", function(n) {
    return n.toISOString()
}, function(n) {
    return new Date(n)
}), xn($S, "Error", function(n, r) {
    var l = {
        name: n.name,
        message: n.message
    };
    return r.allowedErrorProps.forEach(function(s) {
        l[s] = n[s]
    }),
    l
}, function(n, r) {
    var l = new Error(n.message);
    return l.name = n.name,
    l.stack = n.stack,
    r.allowedErrorProps.forEach(function(s) {
        l[s] = n[s]
    }),
    l
}), xn(FS, "regexp", function(n) {
    return "" + n
}, function(n) {
    var r = n.slice(1, n.lastIndexOf("/"))
      , l = n.slice(n.lastIndexOf("/") + 1);
    return new RegExp(r,l)
}), xn(El, "set", function(n) {
    return Of([], Ef(n.values()))
}, function(n) {
    return new Set(n)
}), xn(wl, "map", function(n) {
    return Of([], Ef(n.entries()))
}, function(n) {
    return new Map(n)
}), xn(function(n) {
    return Ey(n) || ew(n)
}, "number", function(n) {
    return Ey(n) ? "NaN" : n > 0 ? "Infinity" : "-Infinity"
}, Number), xn(function(n) {
    return n === 0 && 1 / n === -1 / 0
}, "number", function() {
    return "-0"
}, Number), xn(aw, "URL", function(n) {
    return n.toString()
}, function(n) {
    return new URL(n)
})];
function Eo(n, r, l, s) {
    return {
        isApplicable: n,
        annotation: r,
        transform: l,
        untransform: s
    }
}
var Iv = Eo(function(n, r) {
    if (Zv(n)) {
        var l = !!r.symbolRegistry.getIdentifier(n);
        return l
    }
    return !1
}, function(n, r) {
    var l = r.symbolRegistry.getIdentifier(n);
    return ["symbol", l]
}, function(n) {
    return n.description
}, function(n, r, l) {
    var s = l.symbolRegistry.getValue(r[1]);
    if (!s)
        throw new Error("Trying to deserialize unknown symbol");
    return s
})
  , rw = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, Uint8ClampedArray].reduce(function(n, r) {
    return n[r.name] = r,
    n
}, {})
  , $v = Eo(nw, function(n) {
    return ["typed-array", n.constructor.name]
}, function(n) {
    return Of([], Ef(n))
}, function(n, r) {
    var l = rw[r[1]];
    if (!l)
        throw new Error("Trying to deserialize unknown typed array");
    return new l(n)
});
function Wv(n, r) {
    if (n?.constructor) {
        var l = !!r.classRegistry.getIdentifier(n.constructor);
        return l
    }
    return !1
}
var tg = Eo(Wv, function(n, r) {
    var l = r.classRegistry.getIdentifier(n.constructor);
    return ["class", l]
}, function(n, r) {
    var l = r.classRegistry.getAllowedProps(n.constructor);
    if (!l)
        return wf({}, n);
    var s = {};
    return l.forEach(function(u) {
        s[u] = n[u]
    }),
    s
}, function(n, r, l) {
    var s = l.classRegistry.getValue(r[1]);
    if (!s)
        throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
    return Object.assign(Object.create(s.prototype), n)
})
  , eg = Eo(function(n, r) {
    return !!r.customTransformerRegistry.findApplicable(n)
}, function(n, r) {
    var l = r.customTransformerRegistry.findApplicable(n);
    return ["custom", l.name]
}, function(n, r) {
    var l = r.customTransformerRegistry.findApplicable(n);
    return l.serialize(n)
}, function(n, r, l) {
    var s = l.customTransformerRegistry.findByName(r[1]);
    if (!s)
        throw new Error("Trying to deserialize unknown custom value");
    return s.deserialize(n)
})
  , iw = [tg, Iv, eg, $v]
  , Oy = function(n, r) {
    var l = wy(iw, function(u) {
        return u.isApplicable(n, r)
    });
    if (l)
        return {
            value: l.transform(n, r),
            type: l.annotation(n, r)
        };
    var s = wy(Fv, function(u) {
        return u.isApplicable(n, r)
    });
    if (s)
        return {
            value: s.transform(n, r),
            type: s.annotation
        }
}
  , ng = {};
Fv.forEach(function(n) {
    ng[n.annotation] = n
});
var lw = function(n, r, l) {
    if (Da(r))
        switch (r[0]) {
        case "symbol":
            return Iv.untransform(n, r, l);
        case "class":
            return tg.untransform(n, r, l);
        case "custom":
            return eg.untransform(n, r, l);
        case "typed-array":
            return $v.untransform(n, r, l);
        default:
            throw new Error("Unknown transformation: " + r)
        }
    else {
        var s = ng[r];
        if (!s)
            throw new Error("Unknown transformation: " + r);
        return s.untransform(n, l)
    }
}
  , oi = function(n, r) {
    for (var l = n.keys(); r > 0; )
        l.next(),
        r--;
    return l.next().value
};
function ag(n) {
    if (io(n, "__proto__"))
        throw new Error("__proto__ is not allowed as a property");
    if (io(n, "prototype"))
        throw new Error("prototype is not allowed as a property");
    if (io(n, "constructor"))
        throw new Error("constructor is not allowed as a property")
}
var sw = function(n, r) {
    ag(r);
    for (var l = 0; l < r.length; l++) {
        var s = r[l];
        if (El(n))
            n = oi(n, +s);
        else if (wl(n)) {
            var u = +s
              , f = +r[++l] == 0 ? "key" : "value"
              , d = oi(n, u);
            switch (f) {
            case "key":
                n = d;
                break;
            case "value":
                n = n.get(d);
                break
            }
        } else
            n = n[s]
    }
    return n
}
  , _f = function(n, r, l) {
    if (ag(r),
    r.length === 0)
        return l(n);
    for (var s = n, u = 0; u < r.length - 1; u++) {
        var f = r[u];
        if (Da(s)) {
            var d = +f;
            s = s[d]
        } else if (Sl(s))
            s = s[f];
        else if (El(s)) {
            var h = +f;
            s = oi(s, h)
        } else if (wl(s)) {
            var m = u === r.length - 2;
            if (m)
                break;
            var h = +f
              , y = +r[++u] == 0 ? "key" : "value"
              , b = oi(s, h);
            switch (y) {
            case "key":
                s = b;
                break;
            case "value":
                s = s.get(b);
                break
            }
        }
    }
    var v = r[r.length - 1];
    if (Da(s) ? s[+v] = l(s[+v]) : Sl(s) && (s[v] = l(s[v])),
    El(s)) {
        var x = oi(s, +v)
          , _ = l(x);
        x !== _ && (s.delete(x),
        s.add(_))
    }
    if (wl(s)) {
        var h = +r[r.length - 2]
          , T = oi(s, h)
          , y = +v == 0 ? "key" : "value";
        switch (y) {
        case "key":
            {
                var S = l(T);
                s.set(S, s.get(T)),
                S !== T && s.delete(T);
                break
            }
        case "value":
            {
                s.set(T, l(s.get(T)));
                break
            }
        }
    }
    return n
}
  , Fn = function(n, r) {
    var l = typeof Symbol == "function" && n[Symbol.iterator];
    if (!l)
        return n;
    var s = l.call(n), u, f = [], d;
    try {
        for (; (r === void 0 || r-- > 0) && !(u = s.next()).done; )
            f.push(u.value)
    } catch (h) {
        d = {
            error: h
        }
    } finally {
        try {
            u && !u.done && (l = s.return) && l.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return f
}
  , Ra = function(n, r) {
    for (var l = 0, s = r.length, u = n.length; l < s; l++,
    u++)
        n[u] = r[l];
    return n
};
function Af(n, r, l) {
    if (l === void 0 && (l = []),
    !!n) {
        if (!Da(n)) {
            fi(n, function(d, h) {
                return Af(d, r, Ra(Ra([], Fn(l)), Fn(gl(h))))
            });
            return
        }
        var s = Fn(n, 2)
          , u = s[0]
          , f = s[1];
        f && fi(f, function(d, h) {
            Af(d, r, Ra(Ra([], Fn(l)), Fn(gl(h))))
        }),
        r(u, l)
    }
}
function ow(n, r, l) {
    return Af(r, function(s, u) {
        n = _f(n, u, function(f) {
            return lw(f, s, l)
        })
    }),
    n
}
function uw(n, r) {
    function l(d, h) {
        var m = sw(n, gl(h));
        d.map(gl).forEach(function(y) {
            n = _f(n, y, function() {
                return m
            })
        })
    }
    if (Da(r)) {
        var s = Fn(r, 2)
          , u = s[0]
          , f = s[1];
        u.forEach(function(d) {
            n = _f(n, gl(d), function() {
                return n
            })
        }),
        f && fi(f, l)
    } else
        fi(r, l);
    return n
}
var cw = function(n, r) {
    return Sl(n) || Da(n) || wl(n) || El(n) || Wv(n, r)
};
function fw(n, r, l) {
    var s = l.get(n);
    s ? s.push(r) : l.set(n, [r])
}
function dw(n, r) {
    var l = {}
      , s = void 0;
    return n.forEach(function(u) {
        if (!(u.length <= 1)) {
            r || (u = u.map(function(m) {
                return m.map(String)
            }).sort(function(m, y) {
                return m.length - y.length
            }));
            var f = Fn(u)
              , d = f[0]
              , h = f.slice(1);
            d.length === 0 ? s = h.map(nf) : l[nf(d)] = h.map(nf)
        }
    }),
    s ? Sf(l) ? [s] : [s, l] : Sf(l) ? void 0 : l
}
var rg = function(n, r, l, s, u, f, d) {
    var h;
    u === void 0 && (u = []),
    f === void 0 && (f = []),
    d === void 0 && (d = new Map);
    var m = WS(n);
    if (!m) {
        fw(n, u, r);
        var y = d.get(n);
        if (y)
            return s ? {
                transformedValue: null
            } : y
    }
    if (!cw(n, l)) {
        var b = Oy(n, l)
          , v = b ? {
            transformedValue: b.value,
            annotations: [b.type]
        } : {
            transformedValue: n
        };
        return m || d.set(n, v),
        v
    }
    if (io(f, n))
        return {
            transformedValue: null
        };
    var x = Oy(n, l)
      , _ = (h = x?.value) !== null && h !== void 0 ? h : n
      , T = Da(_) ? [] : {}
      , S = {};
    fi(_, function(B, J) {
        var I = rg(B, r, l, s, Ra(Ra([], Fn(u)), [J]), Ra(Ra([], Fn(f)), [n]), d);
        T[J] = I.transformedValue,
        Da(I.annotations) ? S[J] = I.annotations : Sl(I.annotations) && fi(I.annotations, function(nt, X) {
            S[Jv(J) + "." + X] = nt
        })
    });
    var U = Sf(S) ? {
        transformedValue: T,
        annotations: x ? [x.type] : void 0
    } : {
        transformedValue: T,
        annotations: x ? [x.type, S] : S
    };
    return m || d.set(n, U),
    U
};
function ig(n) {
    return Object.prototype.toString.call(n).slice(8, -1)
}
function _y(n) {
    return ig(n) === "Array"
}
function hw(n) {
    if (ig(n) !== "Object")
        return !1;
    const r = Object.getPrototypeOf(n);
    return !!r && r.constructor === Object && r === Object.prototype
}
function mw(n, r, l, s, u) {
    const f = {}.propertyIsEnumerable.call(s, r) ? "enumerable" : "nonenumerable";
    f === "enumerable" && (n[r] = l),
    u && f === "nonenumerable" && Object.defineProperty(n, r, {
        value: l,
        enumerable: !1,
        writable: !0,
        configurable: !0
    })
}
function Tf(n, r={}) {
    if (_y(n))
        return n.map(u => Tf(u, r));
    if (!hw(n))
        return n;
    const l = Object.getOwnPropertyNames(n)
      , s = Object.getOwnPropertySymbols(n);
    return [...l, ...s].reduce( (u, f) => {
        if (_y(r.props) && !r.props.includes(f))
            return u;
        const d = n[f]
          , h = Tf(d, r);
        return mw(u, f, h, n, r.nonenumerable),
        u
    }
    , {})
}
var sr = function() {
    return sr = Object.assign || function(n) {
        for (var r, l = 1, s = arguments.length; l < s; l++) {
            r = arguments[l];
            for (var u in r)
                Object.prototype.hasOwnProperty.call(r, u) && (n[u] = r[u])
        }
        return n
    }
    ,
    sr.apply(this, arguments)
}
  , pw = function(n, r) {
    var l = typeof Symbol == "function" && n[Symbol.iterator];
    if (!l)
        return n;
    var s = l.call(n), u, f = [], d;
    try {
        for (; (r === void 0 || r-- > 0) && !(u = s.next()).done; )
            f.push(u.value)
    } catch (h) {
        d = {
            error: h
        }
    } finally {
        try {
            u && !u.done && (l = s.return) && l.call(s)
        } finally {
            if (d)
                throw d.error
        }
    }
    return f
}
  , yw = function(n, r) {
    for (var l = 0, s = r.length, u = n.length; l < s; l++,
    u++)
        n[u] = r[l];
    return n
}
  , Wn = (function() {
    function n(r) {
        var l = r === void 0 ? {} : r
          , s = l.dedupe
          , u = s === void 0 ? !1 : s;
        this.classRegistry = new BS,
        this.symbolRegistry = new Xv(function(f) {
            var d;
            return (d = f.description) !== null && d !== void 0 ? d : ""
        }
        ),
        this.customTransformerRegistry = new GS,
        this.allowedErrorProps = [],
        this.dedupe = u
    }
    return n.prototype.serialize = function(r) {
        var l = new Map
          , s = rg(r, l, this, this.dedupe)
          , u = {
            json: s.transformedValue
        };
        s.annotations && (u.meta = sr(sr({}, u.meta), {
            values: s.annotations
        }));
        var f = dw(l, this.dedupe);
        return f && (u.meta = sr(sr({}, u.meta), {
            referentialEqualities: f
        })),
        u
    }
    ,
    n.prototype.deserialize = function(r) {
        var l = r.json
          , s = r.meta
          , u = Tf(l);
        return s?.values && (u = ow(u, s.values, this)),
        s?.referentialEqualities && (u = uw(u, s.referentialEqualities)),
        u
    }
    ,
    n.prototype.stringify = function(r) {
        return JSON.stringify(this.serialize(r))
    }
    ,
    n.prototype.parse = function(r) {
        return this.deserialize(JSON.parse(r))
    }
    ,
    n.prototype.registerClass = function(r, l) {
        this.classRegistry.register(r, l)
    }
    ,
    n.prototype.registerSymbol = function(r, l) {
        this.symbolRegistry.register(r, l)
    }
    ,
    n.prototype.registerCustom = function(r, l) {
        this.customTransformerRegistry.register(sr({
            name: l
        }, r))
    }
    ,
    n.prototype.allowErrorProps = function() {
        for (var r, l = [], s = 0; s < arguments.length; s++)
            l[s] = arguments[s];
        (r = this.allowedErrorProps).push.apply(r, yw([], pw(l)))
    }
    ,
    n.defaultInstance = new n,
    n.serialize = n.defaultInstance.serialize.bind(n.defaultInstance),
    n.deserialize = n.defaultInstance.deserialize.bind(n.defaultInstance),
    n.stringify = n.defaultInstance.stringify.bind(n.defaultInstance),
    n.parse = n.defaultInstance.parse.bind(n.defaultInstance),
    n.registerClass = n.defaultInstance.registerClass.bind(n.defaultInstance),
    n.registerSymbol = n.defaultInstance.registerSymbol.bind(n.defaultInstance),
    n.registerCustom = n.defaultInstance.registerCustom.bind(n.defaultInstance),
    n.allowErrorProps = n.defaultInstance.allowErrorProps.bind(n.defaultInstance),
    n
}
)();
Wn.serialize;
Wn.deserialize;
Wn.stringify;
Wn.parse;
Wn.registerClass;
Wn.registerCustom;
Wn.registerSymbol;
Wn.allowErrorProps;
var vw = (n, r, l, s, u, f, d, h) => {
    let m = document.documentElement
      , y = ["light", "dark"];
    function b(_) {
        (Array.isArray(n) ? n : [n]).forEach(T => {
            let S = T === "class"
              , U = S && f ? u.map(B => f[B] || B) : u;
            S ? (m.classList.remove(...U),
            m.classList.add(f && f[_] ? f[_] : _)) : m.setAttribute(T, _)
        }
        ),
        v(_)
    }
    function v(_) {
        h && y.includes(_) && (m.style.colorScheme = _)
    }
    function x() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
    if (s)
        b(s);
    else
        try {
            let _ = localStorage.getItem(r) || l
              , T = d && _ === "system" ? x() : _;
            b(T)
        } catch {}
}
  , gw = C.createContext(void 0)
  , bw = {
    setTheme: n => {}
    ,
    themes: []
}
  , xw = () => {
    var n;
    return (n = C.useContext(gw)) != null ? n : bw
}
;
C.memo( ({forcedTheme: n, storageKey: r, attribute: l, enableSystem: s, enableColorScheme: u, defaultTheme: f, value: d, themes: h, nonce: m, scriptProps: y}) => {
    let b = JSON.stringify([l, r, f, n, h, d, s, u]).slice(1, -1);
    return C.createElement("script", {
        ...y,
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? m : "",
        dangerouslySetInnerHTML: {
            __html: `(${vw.toString()})(${b})`
        }
    })
}
);
var Xf = Vv();
const Sw = av(Xf);
function ww(n) {
    if (typeof document > "u")
        return;
    let r = document.head || document.getElementsByTagName("head")[0]
      , l = document.createElement("style");
    l.type = "text/css",
    r.appendChild(l),
    l.styleSheet ? l.styleSheet.cssText = n : l.appendChild(document.createTextNode(n))
}
const Ew = n => {
    switch (n) {
    case "success":
        return Aw;
    case "info":
        return Cw;
    case "warning":
        return Tw;
    case "error":
        return Rw;
    default:
        return null
    }
}
  , Ow = Array(12).fill(0)
  , _w = ({visible: n, className: r}) => et.createElement("div", {
    className: ["sonner-loading-wrapper", r].filter(Boolean).join(" "),
    "data-visible": n
}, et.createElement("div", {
    className: "sonner-spinner"
}, Ow.map( (l, s) => et.createElement("div", {
    className: "sonner-loading-bar",
    key: `spinner-bar-${s}`
}))))
  , Aw = et.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, et.createElement("path", {
    fillRule: "evenodd",
    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
    clipRule: "evenodd"
}))
  , Tw = et.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    height: "20",
    width: "20"
}, et.createElement("path", {
    fillRule: "evenodd",
    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
    clipRule: "evenodd"
}))
  , Cw = et.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, et.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
    clipRule: "evenodd"
}))
  , Rw = et.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    height: "20",
    width: "20"
}, et.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
    clipRule: "evenodd"
}))
  , Mw = et.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
}, et.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
}), et.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
}))
  , jw = () => {
    const [n,r] = et.useState(document.hidden);
    return et.useEffect( () => {
        const l = () => {
            r(document.hidden)
        }
        ;
        return document.addEventListener("visibilitychange", l),
        () => window.removeEventListener("visibilitychange", l)
    }
    , []),
    n
}
;
let Cf = 1;
class Dw {
    constructor() {
        this.subscribe = r => (this.subscribers.push(r),
        () => {
            const l = this.subscribers.indexOf(r);
            this.subscribers.splice(l, 1)
        }
        ),
        this.publish = r => {
            this.subscribers.forEach(l => l(r))
        }
        ,
        this.addToast = r => {
            this.publish(r),
            this.toasts = [...this.toasts, r]
        }
        ,
        this.create = r => {
            var l;
            const {message: s, ...u} = r
              , f = typeof r?.id == "number" || ((l = r.id) == null ? void 0 : l.length) > 0 ? r.id : Cf++
              , d = this.toasts.find(m => m.id === f)
              , h = r.dismissible === void 0 ? !0 : r.dismissible;
            return this.dismissedToasts.has(f) && this.dismissedToasts.delete(f),
            d ? this.toasts = this.toasts.map(m => m.id === f ? (this.publish({
                ...m,
                ...r,
                id: f,
                title: s
            }),
            {
                ...m,
                ...r,
                id: f,
                dismissible: h,
                title: s
            }) : m) : this.addToast({
                title: s,
                ...u,
                dismissible: h,
                id: f
            }),
            f
        }
        ,
        this.dismiss = r => (r ? (this.dismissedToasts.add(r),
        requestAnimationFrame( () => this.subscribers.forEach(l => l({
            id: r,
            dismiss: !0
        })))) : this.toasts.forEach(l => {
            this.subscribers.forEach(s => s({
                id: l.id,
                dismiss: !0
            }))
        }
        ),
        r),
        this.message = (r, l) => this.create({
            ...l,
            message: r
        }),
        this.error = (r, l) => this.create({
            ...l,
            message: r,
            type: "error"
        }),
        this.success = (r, l) => this.create({
            ...l,
            type: "success",
            message: r
        }),
        this.info = (r, l) => this.create({
            ...l,
            type: "info",
            message: r
        }),
        this.warning = (r, l) => this.create({
            ...l,
            type: "warning",
            message: r
        }),
        this.loading = (r, l) => this.create({
            ...l,
            type: "loading",
            message: r
        }),
        this.promise = (r, l) => {
            if (!l)
                return;
            let s;
            l.loading !== void 0 && (s = this.create({
                ...l,
                promise: r,
                type: "loading",
                message: l.loading,
                description: typeof l.description != "function" ? l.description : void 0
            }));
            const u = Promise.resolve(r instanceof Function ? r() : r);
            let f = s !== void 0, d;
            const h = u.then(async y => {
                if (d = ["resolve", y],
                et.isValidElement(y))
                    f = !1,
                    this.create({
                        id: s,
                        type: "default",
                        message: y
                    });
                else if (zw(y) && !y.ok) {
                    f = !1;
                    const v = typeof l.error == "function" ? await l.error(`HTTP error! status: ${y.status}`) : l.error
                      , x = typeof l.description == "function" ? await l.description(`HTTP error! status: ${y.status}`) : l.description
                      , T = typeof v == "object" && !et.isValidElement(v) ? v : {
                        message: v
                    };
                    this.create({
                        id: s,
                        type: "error",
                        description: x,
                        ...T
                    })
                } else if (y instanceof Error) {
                    f = !1;
                    const v = typeof l.error == "function" ? await l.error(y) : l.error
                      , x = typeof l.description == "function" ? await l.description(y) : l.description
                      , T = typeof v == "object" && !et.isValidElement(v) ? v : {
                        message: v
                    };
                    this.create({
                        id: s,
                        type: "error",
                        description: x,
                        ...T
                    })
                } else if (l.success !== void 0) {
                    f = !1;
                    const v = typeof l.success == "function" ? await l.success(y) : l.success
                      , x = typeof l.description == "function" ? await l.description(y) : l.description
                      , T = typeof v == "object" && !et.isValidElement(v) ? v : {
                        message: v
                    };
                    this.create({
                        id: s,
                        type: "success",
                        description: x,
                        ...T
                    })
                }
            }
            ).catch(async y => {
                if (d = ["reject", y],
                l.error !== void 0) {
                    f = !1;
                    const b = typeof l.error == "function" ? await l.error(y) : l.error
                      , v = typeof l.description == "function" ? await l.description(y) : l.description
                      , _ = typeof b == "object" && !et.isValidElement(b) ? b : {
                        message: b
                    };
                    this.create({
                        id: s,
                        type: "error",
                        description: v,
                        ..._
                    })
                }
            }
            ).finally( () => {
                f && (this.dismiss(s),
                s = void 0),
                l.finally == null || l.finally.call(l)
            }
            )
              , m = () => new Promise( (y, b) => h.then( () => d[0] === "reject" ? b(d[1]) : y(d[1])).catch(b));
            return typeof s != "string" && typeof s != "number" ? {
                unwrap: m
            } : Object.assign(s, {
                unwrap: m
            })
        }
        ,
        this.custom = (r, l) => {
            const s = l?.id || Cf++;
            return this.create({
                jsx: r(s),
                id: s,
                ...l
            }),
            s
        }
        ,
        this.getActiveToasts = () => this.toasts.filter(r => !this.dismissedToasts.has(r.id)),
        this.subscribers = [],
        this.toasts = [],
        this.dismissedToasts = new Set
    }
}
const Ne = new Dw
  , Nw = (n, r) => {
    const l = r?.id || Cf++;
    return Ne.addToast({
        title: n,
        ...r,
        id: l
    }),
    l
}
  , zw = n => n && typeof n == "object" && "ok"in n && typeof n.ok == "boolean" && "status"in n && typeof n.status == "number"
  , Uw = Nw
  , qw = () => Ne.toasts
  , Lw = () => Ne.getActiveToasts()
  , Is = Object.assign(Uw, {
    success: Ne.success,
    info: Ne.info,
    warning: Ne.warning,
    error: Ne.error,
    custom: Ne.custom,
    message: Ne.message,
    promise: Ne.promise,
    dismiss: Ne.dismiss,
    loading: Ne.loading
}, {
    getHistory: qw,
    getToasts: Lw
});
ww("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
function $s(n) {
    return n.label !== void 0
}
const Hw = 3
  , Qw = "24px"
  , Bw = "16px"
  , Ay = 4e3
  , kw = 356
  , Pw = 14
  , Yw = 45
  , Gw = 200;
function Sn(...n) {
    return n.filter(Boolean).join(" ")
}
function Vw(n) {
    const [r,l] = n.split("-")
      , s = [];
    return r && s.push(r),
    l && s.push(l),
    s
}
const Xw = n => {
    var r, l, s, u, f, d, h, m, y;
    const {invert: b, toast: v, unstyled: x, interacting: _, setHeights: T, visibleToasts: S, heights: U, index: B, toasts: J, expanded: I, removeToast: nt, defaultRichColors: X, closeButton: Z, style: M, cancelButtonStyle: H, actionButtonStyle: $, className: W="", descriptionClassName: at="", duration: tt, position: st, gap: it, expandByDefault: ut, classNames: A, icons: Q, closeButtonAriaLabel: D="Close toast"} = n
      , [rt,ht] = et.useState(null)
      , [w,P] = et.useState(null)
      , [q,Y] = et.useState(!1)
      , [F,mt] = et.useState(!1)
      , [ot,gt] = et.useState(!1)
      , [Ct,le] = et.useState(!1)
      , [ve,se] = et.useState(!1)
      , [Cn,an] = et.useState(0)
      , [gi,gr] = et.useState(0)
      , qa = et.useRef(v.duration || tt || Ay)
      , bi = et.useRef(null)
      , ze = et.useRef(null)
      , xi = B === 0
      , Si = B + 1 <= S
      , ge = v.type
      , ta = v.dismissible !== !1
      , be = v.className || ""
      , zo = v.descriptionClassName || ""
      , La = et.useMemo( () => U.findIndex(bt => bt.toastId === v.id) || 0, [U, v.id])
      , Nl = et.useMemo( () => {
        var bt;
        return (bt = v.closeButton) != null ? bt : Z
    }
    , [v.closeButton, Z])
      , Ha = et.useMemo( () => v.duration || tt || Ay, [v.duration, tt])
      , wi = et.useRef(0)
      , Rn = et.useRef(0)
      , zl = et.useRef(0)
      , ea = et.useRef(null)
      , [Qa,xe] = st.split("-")
      , rn = et.useMemo( () => U.reduce( (bt, Pt, ae) => ae >= La ? bt : bt + Pt.height, 0), [U, La])
      , he = jw()
      , Uo = v.invert || b
      , Ei = ge === "loading";
    Rn.current = et.useMemo( () => La * it + rn, [La, rn]),
    et.useEffect( () => {
        qa.current = Ha
    }
    , [Ha]),
    et.useEffect( () => {
        Y(!0)
    }
    , []),
    et.useEffect( () => {
        const bt = ze.current;
        if (bt) {
            const Pt = bt.getBoundingClientRect().height;
            return gr(Pt),
            T(ae => [{
                toastId: v.id,
                height: Pt,
                position: v.position
            }, ...ae]),
            () => T(ae => ae.filter(me => me.toastId !== v.id))
        }
    }
    , [T, v.id]),
    et.useLayoutEffect( () => {
        if (!q)
            return;
        const bt = ze.current
          , Pt = bt.style.height;
        bt.style.height = "auto";
        const ae = bt.getBoundingClientRect().height;
        bt.style.height = Pt,
        gr(ae),
        T(me => me.find(Gt => Gt.toastId === v.id) ? me.map(Gt => Gt.toastId === v.id ? {
            ...Gt,
            height: ae
        } : Gt) : [{
            toastId: v.id,
            height: ae,
            position: v.position
        }, ...me])
    }
    , [q, v.title, v.description, T, v.id, v.jsx, v.action, v.cancel]);
    const mn = et.useCallback( () => {
        mt(!0),
        an(Rn.current),
        T(bt => bt.filter(Pt => Pt.toastId !== v.id)),
        setTimeout( () => {
            nt(v)
        }
        , Gw)
    }
    , [v, nt, T, Rn]);
    et.useEffect( () => {
        if (v.promise && ge === "loading" || v.duration === 1 / 0 || v.type === "loading")
            return;
        let bt;
        return I || _ || he ? ( () => {
            if (zl.current < wi.current) {
                const me = new Date().getTime() - wi.current;
                qa.current = qa.current - me
            }
            zl.current = new Date().getTime()
        }
        )() : ( () => {
            qa.current !== 1 / 0 && (wi.current = new Date().getTime(),
            bt = setTimeout( () => {
                v.onAutoClose == null || v.onAutoClose.call(v, v),
                mn()
            }
            , qa.current))
        }
        )(),
        () => clearTimeout(bt)
    }
    , [I, _, v, ge, he, mn]),
    et.useEffect( () => {
        v.delete && (mn(),
        v.onDismiss == null || v.onDismiss.call(v, v))
    }
    , [mn, v.delete]);
    function br() {
        var bt;
        if (Q?.loading) {
            var Pt;
            return et.createElement("div", {
                className: Sn(A?.loader, v == null || (Pt = v.classNames) == null ? void 0 : Pt.loader, "sonner-loader"),
                "data-visible": ge === "loading"
            }, Q.loading)
        }
        return et.createElement(_w, {
            className: Sn(A?.loader, v == null || (bt = v.classNames) == null ? void 0 : bt.loader),
            visible: ge === "loading"
        })
    }
    const xr = v.icon || Q?.[ge] || Ew(ge);
    var Ba, pn;
    return et.createElement("li", {
        tabIndex: 0,
        ref: ze,
        className: Sn(W, be, A?.toast, v == null || (r = v.classNames) == null ? void 0 : r.toast, A?.default, A?.[ge], v == null || (l = v.classNames) == null ? void 0 : l[ge]),
        "data-sonner-toast": "",
        "data-rich-colors": (Ba = v.richColors) != null ? Ba : X,
        "data-styled": !(v.jsx || v.unstyled || x),
        "data-mounted": q,
        "data-promise": !!v.promise,
        "data-swiped": ve,
        "data-removed": F,
        "data-visible": Si,
        "data-y-position": Qa,
        "data-x-position": xe,
        "data-index": B,
        "data-front": xi,
        "data-swiping": ot,
        "data-dismissible": ta,
        "data-type": ge,
        "data-invert": Uo,
        "data-swipe-out": Ct,
        "data-swipe-direction": w,
        "data-expanded": !!(I || ut && q),
        "data-testid": v.testId,
        style: {
            "--index": B,
            "--toasts-before": B,
            "--z-index": J.length - B,
            "--offset": `${F ? Cn : Rn.current}px`,
            "--initial-height": ut ? "auto" : `${gi}px`,
            ...M,
            ...v.style
        },
        onDragEnd: () => {
            gt(!1),
            ht(null),
            ea.current = null
        }
        ,
        onPointerDown: bt => {
            bt.button !== 2 && (Ei || !ta || (bi.current = new Date,
            an(Rn.current),
            bt.target.setPointerCapture(bt.pointerId),
            bt.target.tagName !== "BUTTON" && (gt(!0),
            ea.current = {
                x: bt.clientX,
                y: bt.clientY
            })))
        }
        ,
        onPointerUp: () => {
            var bt, Pt, ae;
            if (Ct || !ta)
                return;
            ea.current = null;
            const me = Number(((bt = ze.current) == null ? void 0 : bt.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0)
              , na = Number(((Pt = ze.current) == null ? void 0 : Pt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0)
              , Gt = new Date().getTime() - ((ae = bi.current) == null ? void 0 : ae.getTime())
              , Ee = rt === "x" ? me : na
              , ka = Math.abs(Ee) / Gt;
            if (Math.abs(Ee) >= Yw || ka > .11) {
                an(Rn.current),
                v.onDismiss == null || v.onDismiss.call(v, v),
                P(rt === "x" ? me > 0 ? "right" : "left" : na > 0 ? "down" : "up"),
                mn(),
                le(!0);
                return
            } else {
                var Oe, _e;
                (Oe = ze.current) == null || Oe.style.setProperty("--swipe-amount-x", "0px"),
                (_e = ze.current) == null || _e.style.setProperty("--swipe-amount-y", "0px")
            }
            se(!1),
            gt(!1),
            ht(null)
        }
        ,
        onPointerMove: bt => {
            var Pt, ae, me;
            if (!ea.current || !ta || ((Pt = window.getSelection()) == null ? void 0 : Pt.toString().length) > 0)
                return;
            const Gt = bt.clientY - ea.current.y
              , Ee = bt.clientX - ea.current.x;
            var ka;
            const Oe = (ka = n.swipeDirections) != null ? ka : Vw(st);
            !rt && (Math.abs(Ee) > 1 || Math.abs(Gt) > 1) && ht(Math.abs(Ee) > Math.abs(Gt) ? "x" : "y");
            let _e = {
                x: 0,
                y: 0
            };
            const Sr = ln => 1 / (1.5 + Math.abs(ln) / 20);
            if (rt === "y") {
                if (Oe.includes("top") || Oe.includes("bottom"))
                    if (Oe.includes("top") && Gt < 0 || Oe.includes("bottom") && Gt > 0)
                        _e.y = Gt;
                    else {
                        const ln = Gt * Sr(Gt);
                        _e.y = Math.abs(ln) < Math.abs(Gt) ? ln : Gt
                    }
            } else if (rt === "x" && (Oe.includes("left") || Oe.includes("right")))
                if (Oe.includes("left") && Ee < 0 || Oe.includes("right") && Ee > 0)
                    _e.x = Ee;
                else {
                    const ln = Ee * Sr(Ee);
                    _e.x = Math.abs(ln) < Math.abs(Ee) ? ln : Ee
                }
            (Math.abs(_e.x) > 0 || Math.abs(_e.y) > 0) && se(!0),
            (ae = ze.current) == null || ae.style.setProperty("--swipe-amount-x", `${_e.x}px`),
            (me = ze.current) == null || me.style.setProperty("--swipe-amount-y", `${_e.y}px`)
        }
    }, Nl && !v.jsx && ge !== "loading" ? et.createElement("button", {
        "aria-label": D,
        "data-disabled": Ei,
        "data-close-button": !0,
        onClick: Ei || !ta ? () => {}
        : () => {
            mn(),
            v.onDismiss == null || v.onDismiss.call(v, v)
        }
        ,
        className: Sn(A?.closeButton, v == null || (s = v.classNames) == null ? void 0 : s.closeButton)
    }, (pn = Q?.close) != null ? pn : Mw) : null, (ge || v.icon || v.promise) && v.icon !== null && (Q?.[ge] !== null || v.icon) ? et.createElement("div", {
        "data-icon": "",
        className: Sn(A?.icon, v == null || (u = v.classNames) == null ? void 0 : u.icon)
    }, v.promise || v.type === "loading" && !v.icon ? v.icon || br() : null, v.type !== "loading" ? xr : null) : null, et.createElement("div", {
        "data-content": "",
        className: Sn(A?.content, v == null || (f = v.classNames) == null ? void 0 : f.content)
    }, et.createElement("div", {
        "data-title": "",
        className: Sn(A?.title, v == null || (d = v.classNames) == null ? void 0 : d.title)
    }, v.jsx ? v.jsx : typeof v.title == "function" ? v.title() : v.title), v.description ? et.createElement("div", {
        "data-description": "",
        className: Sn(at, zo, A?.description, v == null || (h = v.classNames) == null ? void 0 : h.description)
    }, typeof v.description == "function" ? v.description() : v.description) : null), et.isValidElement(v.cancel) ? v.cancel : v.cancel && $s(v.cancel) ? et.createElement("button", {
        "data-button": !0,
        "data-cancel": !0,
        style: v.cancelButtonStyle || H,
        onClick: bt => {
            $s(v.cancel) && ta && (v.cancel.onClick == null || v.cancel.onClick.call(v.cancel, bt),
            mn())
        }
        ,
        className: Sn(A?.cancelButton, v == null || (m = v.classNames) == null ? void 0 : m.cancelButton)
    }, v.cancel.label) : null, et.isValidElement(v.action) ? v.action : v.action && $s(v.action) ? et.createElement("button", {
        "data-button": !0,
        "data-action": !0,
        style: v.actionButtonStyle || $,
        onClick: bt => {
            $s(v.action) && (v.action.onClick == null || v.action.onClick.call(v.action, bt),
            !bt.defaultPrevented && mn())
        }
        ,
        className: Sn(A?.actionButton, v == null || (y = v.classNames) == null ? void 0 : y.actionButton)
    }, v.action.label) : null)
}
;
function Ty() {
    if (typeof window > "u" || typeof document > "u")
        return "ltr";
    const n = document.documentElement.getAttribute("dir");
    return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n
}
function Kw(n, r) {
    const l = {};
    return [n, r].forEach( (s, u) => {
        const f = u === 1
          , d = f ? "--mobile-offset" : "--offset"
          , h = f ? Bw : Qw;
        function m(y) {
            ["top", "right", "bottom", "left"].forEach(b => {
                l[`${d}-${b}`] = typeof y == "number" ? `${y}px` : y
            }
            )
        }
        typeof s == "number" || typeof s == "string" ? m(s) : typeof s == "object" ? ["top", "right", "bottom", "left"].forEach(y => {
            s[y] === void 0 ? l[`${d}-${y}`] = h : l[`${d}-${y}`] = typeof s[y] == "number" ? `${s[y]}px` : s[y]
        }
        ) : m(h)
    }
    ),
    l
}
const Zw = et.forwardRef(function(r, l) {
    const {id: s, invert: u, position: f="bottom-right", hotkey: d=["altKey", "KeyT"], expand: h, closeButton: m, className: y, offset: b, mobileOffset: v, theme: x="light", richColors: _, duration: T, style: S, visibleToasts: U=Hw, toastOptions: B, dir: J=Ty(), gap: I=Pw, icons: nt, containerAriaLabel: X="Notifications"} = r
      , [Z,M] = et.useState([])
      , H = et.useMemo( () => s ? Z.filter(q => q.toasterId === s) : Z.filter(q => !q.toasterId), [Z, s])
      , $ = et.useMemo( () => Array.from(new Set([f].concat(H.filter(q => q.position).map(q => q.position)))), [H, f])
      , [W,at] = et.useState([])
      , [tt,st] = et.useState(!1)
      , [it,ut] = et.useState(!1)
      , [A,Q] = et.useState(x !== "system" ? x : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
      , D = et.useRef(null)
      , rt = d.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , ht = et.useRef(null)
      , w = et.useRef(!1)
      , P = et.useCallback(q => {
        M(Y => {
            var F;
            return (F = Y.find(mt => mt.id === q.id)) != null && F.delete || Ne.dismiss(q.id),
            Y.filter( ({id: mt}) => mt !== q.id)
        }
        )
    }
    , []);
    return et.useEffect( () => Ne.subscribe(q => {
        if (q.dismiss) {
            requestAnimationFrame( () => {
                M(Y => Y.map(F => F.id === q.id ? {
                    ...F,
                    delete: !0
                } : F))
            }
            );
            return
        }
        setTimeout( () => {
            Sw.flushSync( () => {
                M(Y => {
                    const F = Y.findIndex(mt => mt.id === q.id);
                    return F !== -1 ? [...Y.slice(0, F), {
                        ...Y[F],
                        ...q
                    }, ...Y.slice(F + 1)] : [q, ...Y]
                }
                )
            }
            )
        }
        )
    }
    ), [Z]),
    et.useEffect( () => {
        if (x !== "system") {
            Q(x);
            return
        }
        if (x === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Q("dark") : Q("light")),
        typeof window > "u")
            return;
        const q = window.matchMedia("(prefers-color-scheme: dark)");
        try {
            q.addEventListener("change", ({matches: Y}) => {
                Q(Y ? "dark" : "light")
            }
            )
        } catch {
            q.addListener( ({matches: F}) => {
                try {
                    Q(F ? "dark" : "light")
                } catch (mt) {
                    console.error(mt)
                }
            }
            )
        }
    }
    , [x]),
    et.useEffect( () => {
        Z.length <= 1 && st(!1)
    }
    , [Z]),
    et.useEffect( () => {
        const q = Y => {
            var F;
            if (d.every(gt => Y[gt] || Y.code === gt)) {
                var ot;
                st(!0),
                (ot = D.current) == null || ot.focus()
            }
            Y.code === "Escape" && (document.activeElement === D.current || (F = D.current) != null && F.contains(document.activeElement)) && st(!1)
        }
        ;
        return document.addEventListener("keydown", q),
        () => document.removeEventListener("keydown", q)
    }
    , [d]),
    et.useEffect( () => {
        if (D.current)
            return () => {
                ht.current && (ht.current.focus({
                    preventScroll: !0
                }),
                ht.current = null,
                w.current = !1)
            }
    }
    , [D.current]),
    et.createElement("section", {
        ref: l,
        "aria-label": `${X} ${rt}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0
    }, $.map( (q, Y) => {
        var F;
        const [mt,ot] = q.split("-");
        return H.length ? et.createElement("ol", {
            key: q,
            dir: J === "auto" ? Ty() : J,
            tabIndex: -1,
            ref: D,
            className: y,
            "data-sonner-toaster": !0,
            "data-sonner-theme": A,
            "data-y-position": mt,
            "data-x-position": ot,
            style: {
                "--front-toast-height": `${((F = W[0]) == null ? void 0 : F.height) || 0}px`,
                "--width": `${kw}px`,
                "--gap": `${I}px`,
                ...S,
                ...Kw(b, v)
            },
            onBlur: gt => {
                w.current && !gt.currentTarget.contains(gt.relatedTarget) && (w.current = !1,
                ht.current && (ht.current.focus({
                    preventScroll: !0
                }),
                ht.current = null))
            }
            ,
            onFocus: gt => {
                gt.target instanceof HTMLElement && gt.target.dataset.dismissible === "false" || w.current || (w.current = !0,
                ht.current = gt.relatedTarget)
            }
            ,
            onMouseEnter: () => st(!0),
            onMouseMove: () => st(!0),
            onMouseLeave: () => {
                it || st(!1)
            }
            ,
            onDragEnd: () => st(!1),
            onPointerDown: gt => {
                gt.target instanceof HTMLElement && gt.target.dataset.dismissible === "false" || ut(!0)
            }
            ,
            onPointerUp: () => ut(!1)
        }, H.filter(gt => !gt.position && Y === 0 || gt.position === q).map( (gt, Ct) => {
            var le, ve;
            return et.createElement(Xw, {
                key: gt.id,
                icons: nt,
                index: Ct,
                toast: gt,
                defaultRichColors: _,
                duration: (le = B?.duration) != null ? le : T,
                className: B?.className,
                descriptionClassName: B?.descriptionClassName,
                invert: u,
                visibleToasts: U,
                closeButton: (ve = B?.closeButton) != null ? ve : m,
                interacting: it,
                position: q,
                style: B?.style,
                unstyled: B?.unstyled,
                classNames: B?.classNames,
                cancelButtonStyle: B?.cancelButtonStyle,
                actionButtonStyle: B?.actionButtonStyle,
                closeButtonAriaLabel: B?.closeButtonAriaLabel,
                removeToast: P,
                toasts: H.filter(se => se.position == gt.position),
                heights: W.filter(se => se.position == gt.position),
                setHeights: at,
                expandByDefault: h,
                gap: I,
                expanded: tt,
                swipeDirections: r.swipeDirections
            })
        }
        )) : null
    }
    ))
})
  , Jw = ({...n}) => {
    const {theme: r="system"} = xw();
    return O.jsx(Zw, {
        "data-loc": "client/src/components/ui/sonner.tsx:8",
        theme: r,
        className: "toaster group",
        style: {
            "--normal-bg": "var(--popover)",
            "--normal-text": "var(--popover-foreground)",
            "--normal-border": "var(--border)"
        },
        ...n
    })
}
;
function Jn(n, r, {checkForDefaultPrevented: l=!0}={}) {
    return function(u) {
        if (n?.(u),
        l === !1 || !u.defaultPrevented)
            return r?.(u)
    }
}
function Cy(n, r) {
    if (typeof n == "function")
        return n(r);
    n != null && (n.current = r)
}
function lg(...n) {
    return r => {
        let l = !1;
        const s = n.map(u => {
            const f = Cy(u, r);
            return !l && typeof f == "function" && (l = !0),
            f
        }
        );
        if (l)
            return () => {
                for (let u = 0; u < s.length; u++) {
                    const f = s[u];
                    typeof f == "function" ? f() : Cy(n[u], null)
                }
            }
    }
}
function yr(...n) {
    return C.useCallback(lg(...n), n)
}
function sg(n, r=[]) {
    let l = [];
    function s(f, d) {
        const h = C.createContext(d)
          , m = l.length;
        l = [...l, d];
        const y = v => {
            const {scope: x, children: _, ...T} = v
              , S = x?.[n]?.[m] || h
              , U = C.useMemo( () => T, Object.values(T));
            return O.jsx(S.Provider, {
                value: U,
                children: _
            })
        }
        ;
        y.displayName = f + "Provider";
        function b(v, x) {
            const _ = x?.[n]?.[m] || h
              , T = C.useContext(_);
            if (T)
                return T;
            if (d !== void 0)
                return d;
            throw new Error(`\`${v}\` must be used within \`${f}\``)
        }
        return [y, b]
    }
    const u = () => {
        const f = l.map(d => C.createContext(d));
        return function(h) {
            const m = h?.[n] || f;
            return C.useMemo( () => ({
                [`__scope${n}`]: {
                    ...h,
                    [n]: m
                }
            }), [h, m])
        }
    }
    ;
    return u.scopeName = n,
    [s, Fw(u, ...r)]
}
function Fw(...n) {
    const r = n[0];
    if (n.length === 1)
        return r;
    const l = () => {
        const s = n.map(u => ({
            useScope: u(),
            scopeName: u.scopeName
        }));
        return function(f) {
            const d = s.reduce( (h, {useScope: m, scopeName: y}) => {
                const v = m(f)[`__scope${y}`];
                return {
                    ...h,
                    ...v
                }
            }
            , {});
            return C.useMemo( () => ({
                [`__scope${r.scopeName}`]: d
            }), [d])
        }
    }
    ;
    return l.scopeName = r.scopeName,
    l
}
function og(n) {
    const r = $w(n)
      , l = C.forwardRef( (s, u) => {
        const {children: f, ...d} = s
          , h = C.Children.toArray(f)
          , m = h.find(t2);
        if (m) {
            const y = m.props.children
              , b = h.map(v => v === m ? C.Children.count(y) > 1 ? C.Children.only(null) : C.isValidElement(y) ? y.props.children : null : v);
            return O.jsx(r, {
                ...d,
                ref: u,
                children: C.isValidElement(y) ? C.cloneElement(y, void 0, b) : null
            })
        }
        return O.jsx(r, {
            ...d,
            ref: u,
            children: f
        })
    }
    );
    return l.displayName = `${n}.Slot`,
    l
}
var Iw = og("Slot");
function $w(n) {
    const r = C.forwardRef( (l, s) => {
        const {children: u, ...f} = l;
        if (C.isValidElement(u)) {
            const d = n2(u)
              , h = e2(f, u.props);
            return u.type !== C.Fragment && (h.ref = s ? lg(s, d) : d),
            C.cloneElement(u, h)
        }
        return C.Children.count(u) > 1 ? C.Children.only(null) : null
    }
    );
    return r.displayName = `${n}.SlotClone`,
    r
}
var ug = Symbol("radix.slottable");
function Ww(n) {
    const r = ({children: l}) => O.jsx(O.Fragment, {
        children: l
    });
    return r.displayName = `${n}.Slottable`,
    r.__radixId = ug,
    r
}
function t2(n) {
    return C.isValidElement(n) && typeof n.type == "function" && "__radixId"in n.type && n.type.__radixId === ug
}
function e2(n, r) {
    const l = {
        ...r
    };
    for (const s in r) {
        const u = n[s]
          , f = r[s];
        /^on[A-Z]/.test(s) ? u && f ? l[s] = (...h) => {
            const m = f(...h);
            return u(...h),
            m
        }
        : u && (l[s] = u) : s === "style" ? l[s] = {
            ...u,
            ...f
        } : s === "className" && (l[s] = [u, f].filter(Boolean).join(" "))
    }
    return {
        ...n,
        ...l
    }
}
function n2(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , l = r && "isReactWarning"in r && r.isReactWarning;
    return l ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    l = r && "isReactWarning"in r && r.isReactWarning,
    l ? n.props.ref : n.props.ref || n.ref)
}
var a2 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , vr = a2.reduce( (n, r) => {
    const l = og(`Primitive.${r}`)
      , s = C.forwardRef( (u, f) => {
        const {asChild: d, ...h} = u
          , m = d ? l : r;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        O.jsx(m, {
            ...h,
            ref: f
        })
    }
    );
    return s.displayName = `Primitive.${r}`,
    {
        ...n,
        [r]: s
    }
}
, {});
function r2(n, r) {
    n && Xf.flushSync( () => n.dispatchEvent(r))
}
function Oo(n) {
    const r = C.useRef(n);
    return C.useEffect( () => {
        r.current = n
    }
    ),
    C.useMemo( () => (...l) => r.current?.(...l), [])
}
function i2(n, r=globalThis?.document) {
    const l = Oo(n);
    C.useEffect( () => {
        const s = u => {
            u.key === "Escape" && l(u)
        }
        ;
        return r.addEventListener("keydown", s, {
            capture: !0
        }),
        () => r.removeEventListener("keydown", s, {
            capture: !0
        })
    }
    , [l, r])
}
var l2 = "DismissableLayer", Rf = "dismissableLayer.update", s2 = "dismissableLayer.pointerDownOutside", o2 = "dismissableLayer.focusOutside", Ry, cg = C.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), fg = C.forwardRef( (n, r) => {
    const {disableOutsidePointerEvents: l=!1, onEscapeKeyDown: s, onPointerDownOutside: u, onFocusOutside: f, onInteractOutside: d, onDismiss: h, ...m} = n
      , y = C.useContext(cg)
      , [b,v] = C.useState(null)
      , x = b?.ownerDocument ?? globalThis?.document
      , [,_] = C.useState({})
      , T = yr(r, M => v(M))
      , S = Array.from(y.layers)
      , [U] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1)
      , B = S.indexOf(U)
      , J = b ? S.indexOf(b) : -1
      , I = y.layersWithOutsidePointerEventsDisabled.size > 0
      , nt = J >= B
      , X = f2(M => {
        const H = M.target
          , $ = [...y.branches].some(W => W.contains(H));
        !nt || $ || (u?.(M),
        d?.(M),
        M.defaultPrevented || h?.())
    }
    , x)
      , Z = d2(M => {
        const H = M.target;
        [...y.branches].some(W => W.contains(H)) || (f?.(M),
        d?.(M),
        M.defaultPrevented || h?.())
    }
    , x);
    return i2(M => {
        J === y.layers.size - 1 && (s?.(M),
        !M.defaultPrevented && h && (M.preventDefault(),
        h()))
    }
    , x),
    C.useEffect( () => {
        if (b)
            return l && (y.layersWithOutsidePointerEventsDisabled.size === 0 && (Ry = x.body.style.pointerEvents,
            x.body.style.pointerEvents = "none"),
            y.layersWithOutsidePointerEventsDisabled.add(b)),
            y.layers.add(b),
            My(),
            () => {
                l && y.layersWithOutsidePointerEventsDisabled.size === 1 && (x.body.style.pointerEvents = Ry)
            }
    }
    , [b, x, l, y]),
    C.useEffect( () => () => {
        b && (y.layers.delete(b),
        y.layersWithOutsidePointerEventsDisabled.delete(b),
        My())
    }
    , [b, y]),
    C.useEffect( () => {
        const M = () => _({});
        return document.addEventListener(Rf, M),
        () => document.removeEventListener(Rf, M)
    }
    , []),
    O.jsx(vr.div, {
        ...m,
        ref: T,
        style: {
            pointerEvents: I ? nt ? "auto" : "none" : void 0,
            ...n.style
        },
        onFocusCapture: Jn(n.onFocusCapture, Z.onFocusCapture),
        onBlurCapture: Jn(n.onBlurCapture, Z.onBlurCapture),
        onPointerDownCapture: Jn(n.onPointerDownCapture, X.onPointerDownCapture)
    })
}
);
fg.displayName = l2;
var u2 = "DismissableLayerBranch"
  , c2 = C.forwardRef( (n, r) => {
    const l = C.useContext(cg)
      , s = C.useRef(null)
      , u = yr(r, s);
    return C.useEffect( () => {
        const f = s.current;
        if (f)
            return l.branches.add(f),
            () => {
                l.branches.delete(f)
            }
    }
    , [l.branches]),
    O.jsx(vr.div, {
        ...n,
        ref: u
    })
}
);
c2.displayName = u2;
function f2(n, r=globalThis?.document) {
    const l = Oo(n)
      , s = C.useRef(!1)
      , u = C.useRef( () => {}
    );
    return C.useEffect( () => {
        const f = h => {
            if (h.target && !s.current) {
                let m = function() {
                    dg(s2, l, y, {
                        discrete: !0
                    })
                };
                const y = {
                    originalEvent: h
                };
                h.pointerType === "touch" ? (r.removeEventListener("click", u.current),
                u.current = m,
                r.addEventListener("click", u.current, {
                    once: !0
                })) : m()
            } else
                r.removeEventListener("click", u.current);
            s.current = !1
        }
          , d = window.setTimeout( () => {
            r.addEventListener("pointerdown", f)
        }
        , 0);
        return () => {
            window.clearTimeout(d),
            r.removeEventListener("pointerdown", f),
            r.removeEventListener("click", u.current)
        }
    }
    , [r, l]),
    {
        onPointerDownCapture: () => s.current = !0
    }
}
function d2(n, r=globalThis?.document) {
    const l = Oo(n)
      , s = C.useRef(!1);
    return C.useEffect( () => {
        const u = f => {
            f.target && !s.current && dg(o2, l, {
                originalEvent: f
            }, {
                discrete: !1
            })
        }
        ;
        return r.addEventListener("focusin", u),
        () => r.removeEventListener("focusin", u)
    }
    , [r, l]),
    {
        onFocusCapture: () => s.current = !0,
        onBlurCapture: () => s.current = !1
    }
}
function My() {
    const n = new CustomEvent(Rf);
    document.dispatchEvent(n)
}
function dg(n, r, l, {discrete: s}) {
    const u = l.originalEvent.target
      , f = new CustomEvent(n,{
        bubbles: !1,
        cancelable: !0,
        detail: l
    });
    r && u.addEventListener(n, r, {
        once: !0
    }),
    s ? r2(u, f) : u.dispatchEvent(f)
}
var Ol = globalThis?.document ? C.useLayoutEffect : () => {}
;
const h2 = ["top", "right", "bottom", "left"]
  , Na = Math.min
  , Pe = Math.max
  , co = Math.round
  , Ws = Math.floor
  , On = n => ({
    x: n,
    y: n
})
  , m2 = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , p2 = {
    start: "end",
    end: "start"
};
function Mf(n, r, l) {
    return Pe(n, Na(r, l))
}
function In(n, r) {
    return typeof n == "function" ? n(r) : n
}
function $n(n) {
    return n.split("-")[0]
}
function mi(n) {
    return n.split("-")[1]
}
function Kf(n) {
    return n === "x" ? "y" : "x"
}
function Zf(n) {
    return n === "y" ? "height" : "width"
}
const y2 = new Set(["top", "bottom"]);
function En(n) {
    return y2.has($n(n)) ? "y" : "x"
}
function Jf(n) {
    return Kf(En(n))
}
function v2(n, r, l) {
    l === void 0 && (l = !1);
    const s = mi(n)
      , u = Jf(n)
      , f = Zf(u);
    let d = u === "x" ? s === (l ? "end" : "start") ? "right" : "left" : s === "start" ? "bottom" : "top";
    return r.reference[f] > r.floating[f] && (d = fo(d)),
    [d, fo(d)]
}
function g2(n) {
    const r = fo(n);
    return [jf(n), r, jf(r)]
}
function jf(n) {
    return n.replace(/start|end/g, r => p2[r])
}
const jy = ["left", "right"]
  , Dy = ["right", "left"]
  , b2 = ["top", "bottom"]
  , x2 = ["bottom", "top"];
function S2(n, r, l) {
    switch (n) {
    case "top":
    case "bottom":
        return l ? r ? Dy : jy : r ? jy : Dy;
    case "left":
    case "right":
        return r ? b2 : x2;
    default:
        return []
    }
}
function w2(n, r, l, s) {
    const u = mi(n);
    let f = S2($n(n), l === "start", s);
    return u && (f = f.map(d => d + "-" + u),
    r && (f = f.concat(f.map(jf)))),
    f
}
function fo(n) {
    return n.replace(/left|right|bottom|top/g, r => m2[r])
}
function E2(n) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...n
    }
}
function hg(n) {
    return typeof n != "number" ? E2(n) : {
        top: n,
        right: n,
        bottom: n,
        left: n
    }
}
function ho(n) {
    const {x: r, y: l, width: s, height: u} = n;
    return {
        width: s,
        height: u,
        top: l,
        left: r,
        right: r + s,
        bottom: l + u,
        x: r,
        y: l
    }
}
function Ny(n, r, l) {
    let {reference: s, floating: u} = n;
    const f = En(r)
      , d = Jf(r)
      , h = Zf(d)
      , m = $n(r)
      , y = f === "y"
      , b = s.x + s.width / 2 - u.width / 2
      , v = s.y + s.height / 2 - u.height / 2
      , x = s[h] / 2 - u[h] / 2;
    let _;
    switch (m) {
    case "top":
        _ = {
            x: b,
            y: s.y - u.height
        };
        break;
    case "bottom":
        _ = {
            x: b,
            y: s.y + s.height
        };
        break;
    case "right":
        _ = {
            x: s.x + s.width,
            y: v
        };
        break;
    case "left":
        _ = {
            x: s.x - u.width,
            y: v
        };
        break;
    default:
        _ = {
            x: s.x,
            y: s.y
        }
    }
    switch (mi(r)) {
    case "start":
        _[d] -= x * (l && y ? -1 : 1);
        break;
    case "end":
        _[d] += x * (l && y ? -1 : 1);
        break
    }
    return _
}
const O2 = async (n, r, l) => {
    const {placement: s="bottom", strategy: u="absolute", middleware: f=[], platform: d} = l
      , h = f.filter(Boolean)
      , m = await (d.isRTL == null ? void 0 : d.isRTL(r));
    let y = await d.getElementRects({
        reference: n,
        floating: r,
        strategy: u
    })
      , {x: b, y: v} = Ny(y, s, m)
      , x = s
      , _ = {}
      , T = 0;
    for (let S = 0; S < h.length; S++) {
        const {name: U, fn: B} = h[S]
          , {x: J, y: I, data: nt, reset: X} = await B({
            x: b,
            y: v,
            initialPlacement: s,
            placement: x,
            strategy: u,
            middlewareData: _,
            rects: y,
            platform: d,
            elements: {
                reference: n,
                floating: r
            }
        });
        b = J ?? b,
        v = I ?? v,
        _ = {
            ..._,
            [U]: {
                ..._[U],
                ...nt
            }
        },
        X && T <= 50 && (T++,
        typeof X == "object" && (X.placement && (x = X.placement),
        X.rects && (y = X.rects === !0 ? await d.getElementRects({
            reference: n,
            floating: r,
            strategy: u
        }) : X.rects),
        {x: b, y: v} = Ny(y, x, m)),
        S = -1)
    }
    return {
        x: b,
        y: v,
        placement: x,
        strategy: u,
        middlewareData: _
    }
}
;
async function _l(n, r) {
    var l;
    r === void 0 && (r = {});
    const {x: s, y: u, platform: f, rects: d, elements: h, strategy: m} = n
      , {boundary: y="clippingAncestors", rootBoundary: b="viewport", elementContext: v="floating", altBoundary: x=!1, padding: _=0} = In(r, n)
      , T = hg(_)
      , U = h[x ? v === "floating" ? "reference" : "floating" : v]
      , B = ho(await f.getClippingRect({
        element: (l = await (f.isElement == null ? void 0 : f.isElement(U))) == null || l ? U : U.contextElement || await (f.getDocumentElement == null ? void 0 : f.getDocumentElement(h.floating)),
        boundary: y,
        rootBoundary: b,
        strategy: m
    }))
      , J = v === "floating" ? {
        x: s,
        y: u,
        width: d.floating.width,
        height: d.floating.height
    } : d.reference
      , I = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(h.floating))
      , nt = await (f.isElement == null ? void 0 : f.isElement(I)) ? await (f.getScale == null ? void 0 : f.getScale(I)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , X = ho(f.convertOffsetParentRelativeRectToViewportRelativeRect ? await f.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: h,
        rect: J,
        offsetParent: I,
        strategy: m
    }) : J);
    return {
        top: (B.top - X.top + T.top) / nt.y,
        bottom: (X.bottom - B.bottom + T.bottom) / nt.y,
        left: (B.left - X.left + T.left) / nt.x,
        right: (X.right - B.right + T.right) / nt.x
    }
}
const _2 = n => ({
    name: "arrow",
    options: n,
    async fn(r) {
        const {x: l, y: s, placement: u, rects: f, platform: d, elements: h, middlewareData: m} = r
          , {element: y, padding: b=0} = In(n, r) || {};
        if (y == null)
            return {};
        const v = hg(b)
          , x = {
            x: l,
            y: s
        }
          , _ = Jf(u)
          , T = Zf(_)
          , S = await d.getDimensions(y)
          , U = _ === "y"
          , B = U ? "top" : "left"
          , J = U ? "bottom" : "right"
          , I = U ? "clientHeight" : "clientWidth"
          , nt = f.reference[T] + f.reference[_] - x[_] - f.floating[T]
          , X = x[_] - f.reference[_]
          , Z = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(y));
        let M = Z ? Z[I] : 0;
        (!M || !await (d.isElement == null ? void 0 : d.isElement(Z))) && (M = h.floating[I] || f.floating[T]);
        const H = nt / 2 - X / 2
          , $ = M / 2 - S[T] / 2 - 1
          , W = Na(v[B], $)
          , at = Na(v[J], $)
          , tt = W
          , st = M - S[T] - at
          , it = M / 2 - S[T] / 2 + H
          , ut = Mf(tt, it, st)
          , A = !m.arrow && mi(u) != null && it !== ut && f.reference[T] / 2 - (it < tt ? W : at) - S[T] / 2 < 0
          , Q = A ? it < tt ? it - tt : it - st : 0;
        return {
            [_]: x[_] + Q,
            data: {
                [_]: ut,
                centerOffset: it - ut - Q,
                ...A && {
                    alignmentOffset: Q
                }
            },
            reset: A
        }
    }
})
  , A2 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "flip",
        options: n,
        async fn(r) {
            var l, s;
            const {placement: u, middlewareData: f, rects: d, initialPlacement: h, platform: m, elements: y} = r
              , {mainAxis: b=!0, crossAxis: v=!0, fallbackPlacements: x, fallbackStrategy: _="bestFit", fallbackAxisSideDirection: T="none", flipAlignment: S=!0, ...U} = In(n, r);
            if ((l = f.arrow) != null && l.alignmentOffset)
                return {};
            const B = $n(u)
              , J = En(h)
              , I = $n(h) === h
              , nt = await (m.isRTL == null ? void 0 : m.isRTL(y.floating))
              , X = x || (I || !S ? [fo(h)] : g2(h))
              , Z = T !== "none";
            !x && Z && X.push(...w2(h, S, T, nt));
            const M = [h, ...X]
              , H = await _l(r, U)
              , $ = [];
            let W = ((s = f.flip) == null ? void 0 : s.overflows) || [];
            if (b && $.push(H[B]),
            v) {
                const it = v2(u, d, nt);
                $.push(H[it[0]], H[it[1]])
            }
            if (W = [...W, {
                placement: u,
                overflows: $
            }],
            !$.every(it => it <= 0)) {
                var at, tt;
                const it = (((at = f.flip) == null ? void 0 : at.index) || 0) + 1
                  , ut = M[it];
                if (ut && (!(v === "alignment" ? J !== En(ut) : !1) || W.every(D => En(D.placement) === J ? D.overflows[0] > 0 : !0)))
                    return {
                        data: {
                            index: it,
                            overflows: W
                        },
                        reset: {
                            placement: ut
                        }
                    };
                let A = (tt = W.filter(Q => Q.overflows[0] <= 0).sort( (Q, D) => Q.overflows[1] - D.overflows[1])[0]) == null ? void 0 : tt.placement;
                if (!A)
                    switch (_) {
                    case "bestFit":
                        {
                            var st;
                            const Q = (st = W.filter(D => {
                                if (Z) {
                                    const rt = En(D.placement);
                                    return rt === J || rt === "y"
                                }
                                return !0
                            }
                            ).map(D => [D.placement, D.overflows.filter(rt => rt > 0).reduce( (rt, ht) => rt + ht, 0)]).sort( (D, rt) => D[1] - rt[1])[0]) == null ? void 0 : st[0];
                            Q && (A = Q);
                            break
                        }
                    case "initialPlacement":
                        A = h;
                        break
                    }
                if (u !== A)
                    return {
                        reset: {
                            placement: A
                        }
                    }
            }
            return {}
        }
    }
};
function zy(n, r) {
    return {
        top: n.top - r.height,
        right: n.right - r.width,
        bottom: n.bottom - r.height,
        left: n.left - r.width
    }
}
function Uy(n) {
    return h2.some(r => n[r] >= 0)
}
const T2 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "hide",
        options: n,
        async fn(r) {
            const {rects: l} = r
              , {strategy: s="referenceHidden", ...u} = In(n, r);
            switch (s) {
            case "referenceHidden":
                {
                    const f = await _l(r, {
                        ...u,
                        elementContext: "reference"
                    })
                      , d = zy(f, l.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: d,
                            referenceHidden: Uy(d)
                        }
                    }
                }
            case "escaped":
                {
                    const f = await _l(r, {
                        ...u,
                        altBoundary: !0
                    })
                      , d = zy(f, l.floating);
                    return {
                        data: {
                            escapedOffsets: d,
                            escaped: Uy(d)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
}
  , mg = new Set(["left", "top"]);
async function C2(n, r) {
    const {placement: l, platform: s, elements: u} = n
      , f = await (s.isRTL == null ? void 0 : s.isRTL(u.floating))
      , d = $n(l)
      , h = mi(l)
      , m = En(l) === "y"
      , y = mg.has(d) ? -1 : 1
      , b = f && m ? -1 : 1
      , v = In(r, n);
    let {mainAxis: x, crossAxis: _, alignmentAxis: T} = typeof v == "number" ? {
        mainAxis: v,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: v.mainAxis || 0,
        crossAxis: v.crossAxis || 0,
        alignmentAxis: v.alignmentAxis
    };
    return h && typeof T == "number" && (_ = h === "end" ? T * -1 : T),
    m ? {
        x: _ * b,
        y: x * y
    } : {
        x: x * y,
        y: _ * b
    }
}
const R2 = function(n) {
    return n === void 0 && (n = 0),
    {
        name: "offset",
        options: n,
        async fn(r) {
            var l, s;
            const {x: u, y: f, placement: d, middlewareData: h} = r
              , m = await C2(r, n);
            return d === ((l = h.offset) == null ? void 0 : l.placement) && (s = h.arrow) != null && s.alignmentOffset ? {} : {
                x: u + m.x,
                y: f + m.y,
                data: {
                    ...m,
                    placement: d
                }
            }
        }
    }
}
  , M2 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "shift",
        options: n,
        async fn(r) {
            const {x: l, y: s, placement: u} = r
              , {mainAxis: f=!0, crossAxis: d=!1, limiter: h={
                fn: U => {
                    let {x: B, y: J} = U;
                    return {
                        x: B,
                        y: J
                    }
                }
            }, ...m} = In(n, r)
              , y = {
                x: l,
                y: s
            }
              , b = await _l(r, m)
              , v = En($n(u))
              , x = Kf(v);
            let _ = y[x]
              , T = y[v];
            if (f) {
                const U = x === "y" ? "top" : "left"
                  , B = x === "y" ? "bottom" : "right"
                  , J = _ + b[U]
                  , I = _ - b[B];
                _ = Mf(J, _, I)
            }
            if (d) {
                const U = v === "y" ? "top" : "left"
                  , B = v === "y" ? "bottom" : "right"
                  , J = T + b[U]
                  , I = T - b[B];
                T = Mf(J, T, I)
            }
            const S = h.fn({
                ...r,
                [x]: _,
                [v]: T
            });
            return {
                ...S,
                data: {
                    x: S.x - l,
                    y: S.y - s,
                    enabled: {
                        [x]: f,
                        [v]: d
                    }
                }
            }
        }
    }
}
  , j2 = function(n) {
    return n === void 0 && (n = {}),
    {
        options: n,
        fn(r) {
            const {x: l, y: s, placement: u, rects: f, middlewareData: d} = r
              , {offset: h=0, mainAxis: m=!0, crossAxis: y=!0} = In(n, r)
              , b = {
                x: l,
                y: s
            }
              , v = En(u)
              , x = Kf(v);
            let _ = b[x]
              , T = b[v];
            const S = In(h, r)
              , U = typeof S == "number" ? {
                mainAxis: S,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...S
            };
            if (m) {
                const I = x === "y" ? "height" : "width"
                  , nt = f.reference[x] - f.floating[I] + U.mainAxis
                  , X = f.reference[x] + f.reference[I] - U.mainAxis;
                _ < nt ? _ = nt : _ > X && (_ = X)
            }
            if (y) {
                var B, J;
                const I = x === "y" ? "width" : "height"
                  , nt = mg.has($n(u))
                  , X = f.reference[v] - f.floating[I] + (nt && ((B = d.offset) == null ? void 0 : B[v]) || 0) + (nt ? 0 : U.crossAxis)
                  , Z = f.reference[v] + f.reference[I] + (nt ? 0 : ((J = d.offset) == null ? void 0 : J[v]) || 0) - (nt ? U.crossAxis : 0);
                T < X ? T = X : T > Z && (T = Z)
            }
            return {
                [x]: _,
                [v]: T
            }
        }
    }
}
  , D2 = function(n) {
    return n === void 0 && (n = {}),
    {
        name: "size",
        options: n,
        async fn(r) {
            var l, s;
            const {placement: u, rects: f, platform: d, elements: h} = r
              , {apply: m= () => {}
            , ...y} = In(n, r)
              , b = await _l(r, y)
              , v = $n(u)
              , x = mi(u)
              , _ = En(u) === "y"
              , {width: T, height: S} = f.floating;
            let U, B;
            v === "top" || v === "bottom" ? (U = v,
            B = x === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (B = v,
            U = x === "end" ? "top" : "bottom");
            const J = S - b.top - b.bottom
              , I = T - b.left - b.right
              , nt = Na(S - b[U], J)
              , X = Na(T - b[B], I)
              , Z = !r.middlewareData.shift;
            let M = nt
              , H = X;
            if ((l = r.middlewareData.shift) != null && l.enabled.x && (H = I),
            (s = r.middlewareData.shift) != null && s.enabled.y && (M = J),
            Z && !x) {
                const W = Pe(b.left, 0)
                  , at = Pe(b.right, 0)
                  , tt = Pe(b.top, 0)
                  , st = Pe(b.bottom, 0);
                _ ? H = T - 2 * (W !== 0 || at !== 0 ? W + at : Pe(b.left, b.right)) : M = S - 2 * (tt !== 0 || st !== 0 ? tt + st : Pe(b.top, b.bottom))
            }
            await m({
                ...r,
                availableWidth: H,
                availableHeight: M
            });
            const $ = await d.getDimensions(h.floating);
            return T !== $.width || S !== $.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function _o() {
    return typeof window < "u"
}
function pi(n) {
    return pg(n) ? (n.nodeName || "").toLowerCase() : "#document"
}
function Ve(n) {
    var r;
    return (n == null || (r = n.ownerDocument) == null ? void 0 : r.defaultView) || window
}
function Tn(n) {
    var r;
    return (r = (pg(n) ? n.ownerDocument : n.document) || window.document) == null ? void 0 : r.documentElement
}
function pg(n) {
    return _o() ? n instanceof Node || n instanceof Ve(n).Node : !1
}
function cn(n) {
    return _o() ? n instanceof Element || n instanceof Ve(n).Element : !1
}
function _n(n) {
    return _o() ? n instanceof HTMLElement || n instanceof Ve(n).HTMLElement : !1
}
function qy(n) {
    return !_o() || typeof ShadowRoot > "u" ? !1 : n instanceof ShadowRoot || n instanceof Ve(n).ShadowRoot
}
const N2 = new Set(["inline", "contents"]);
function jl(n) {
    const {overflow: r, overflowX: l, overflowY: s, display: u} = fn(n);
    return /auto|scroll|overlay|hidden|clip/.test(r + s + l) && !N2.has(u)
}
const z2 = new Set(["table", "td", "th"]);
function U2(n) {
    return z2.has(pi(n))
}
const q2 = [":popover-open", ":modal"];
function Ao(n) {
    return q2.some(r => {
        try {
            return n.matches(r)
        } catch {
            return !1
        }
    }
    )
}
const L2 = ["transform", "translate", "scale", "rotate", "perspective"]
  , H2 = ["transform", "translate", "scale", "rotate", "perspective", "filter"]
  , Q2 = ["paint", "layout", "strict", "content"];
function Ff(n) {
    const r = If()
      , l = cn(n) ? fn(n) : n;
    return L2.some(s => l[s] ? l[s] !== "none" : !1) || (l.containerType ? l.containerType !== "normal" : !1) || !r && (l.backdropFilter ? l.backdropFilter !== "none" : !1) || !r && (l.filter ? l.filter !== "none" : !1) || H2.some(s => (l.willChange || "").includes(s)) || Q2.some(s => (l.contain || "").includes(s))
}
function B2(n) {
    let r = za(n);
    for (; _n(r) && !di(r); ) {
        if (Ff(r))
            return r;
        if (Ao(r))
            return null;
        r = za(r)
    }
    return null
}
function If() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
const k2 = new Set(["html", "body", "#document"]);
function di(n) {
    return k2.has(pi(n))
}
function fn(n) {
    return Ve(n).getComputedStyle(n)
}
function To(n) {
    return cn(n) ? {
        scrollLeft: n.scrollLeft,
        scrollTop: n.scrollTop
    } : {
        scrollLeft: n.scrollX,
        scrollTop: n.scrollY
    }
}
function za(n) {
    if (pi(n) === "html")
        return n;
    const r = n.assignedSlot || n.parentNode || qy(n) && n.host || Tn(n);
    return qy(r) ? r.host : r
}
function yg(n) {
    const r = za(n);
    return di(r) ? n.ownerDocument ? n.ownerDocument.body : n.body : _n(r) && jl(r) ? r : yg(r)
}
function Al(n, r, l) {
    var s;
    r === void 0 && (r = []),
    l === void 0 && (l = !0);
    const u = yg(n)
      , f = u === ((s = n.ownerDocument) == null ? void 0 : s.body)
      , d = Ve(u);
    if (f) {
        const h = Df(d);
        return r.concat(d, d.visualViewport || [], jl(u) ? u : [], h && l ? Al(h) : [])
    }
    return r.concat(u, Al(u, [], l))
}
function Df(n) {
    return n.parent && Object.getPrototypeOf(n.parent) ? n.frameElement : null
}
function vg(n) {
    const r = fn(n);
    let l = parseFloat(r.width) || 0
      , s = parseFloat(r.height) || 0;
    const u = _n(n)
      , f = u ? n.offsetWidth : l
      , d = u ? n.offsetHeight : s
      , h = co(l) !== f || co(s) !== d;
    return h && (l = f,
    s = d),
    {
        width: l,
        height: s,
        $: h
    }
}
function $f(n) {
    return cn(n) ? n : n.contextElement
}
function ui(n) {
    const r = $f(n);
    if (!_n(r))
        return On(1);
    const l = r.getBoundingClientRect()
      , {width: s, height: u, $: f} = vg(r);
    let d = (f ? co(l.width) : l.width) / s
      , h = (f ? co(l.height) : l.height) / u;
    return (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
    {
        x: d,
        y: h
    }
}
const P2 = On(0);
function gg(n) {
    const r = Ve(n);
    return !If() || !r.visualViewport ? P2 : {
        x: r.visualViewport.offsetLeft,
        y: r.visualViewport.offsetTop
    }
}
function Y2(n, r, l) {
    return r === void 0 && (r = !1),
    !l || r && l !== Ve(n) ? !1 : r
}
function dr(n, r, l, s) {
    r === void 0 && (r = !1),
    l === void 0 && (l = !1);
    const u = n.getBoundingClientRect()
      , f = $f(n);
    let d = On(1);
    r && (s ? cn(s) && (d = ui(s)) : d = ui(n));
    const h = Y2(f, l, s) ? gg(f) : On(0);
    let m = (u.left + h.x) / d.x
      , y = (u.top + h.y) / d.y
      , b = u.width / d.x
      , v = u.height / d.y;
    if (f) {
        const x = Ve(f)
          , _ = s && cn(s) ? Ve(s) : s;
        let T = x
          , S = Df(T);
        for (; S && s && _ !== T; ) {
            const U = ui(S)
              , B = S.getBoundingClientRect()
              , J = fn(S)
              , I = B.left + (S.clientLeft + parseFloat(J.paddingLeft)) * U.x
              , nt = B.top + (S.clientTop + parseFloat(J.paddingTop)) * U.y;
            m *= U.x,
            y *= U.y,
            b *= U.x,
            v *= U.y,
            m += I,
            y += nt,
            T = Ve(S),
            S = Df(T)
        }
    }
    return ho({
        width: b,
        height: v,
        x: m,
        y
    })
}
function Co(n, r) {
    const l = To(n).scrollLeft;
    return r ? r.left + l : dr(Tn(n)).left + l
}
function bg(n, r) {
    const l = n.getBoundingClientRect()
      , s = l.left + r.scrollLeft - Co(n, l)
      , u = l.top + r.scrollTop;
    return {
        x: s,
        y: u
    }
}
function G2(n) {
    let {elements: r, rect: l, offsetParent: s, strategy: u} = n;
    const f = u === "fixed"
      , d = Tn(s)
      , h = r ? Ao(r.floating) : !1;
    if (s === d || h && f)
        return l;
    let m = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , y = On(1);
    const b = On(0)
      , v = _n(s);
    if ((v || !v && !f) && ((pi(s) !== "body" || jl(d)) && (m = To(s)),
    _n(s))) {
        const _ = dr(s);
        y = ui(s),
        b.x = _.x + s.clientLeft,
        b.y = _.y + s.clientTop
    }
    const x = d && !v && !f ? bg(d, m) : On(0);
    return {
        width: l.width * y.x,
        height: l.height * y.y,
        x: l.x * y.x - m.scrollLeft * y.x + b.x + x.x,
        y: l.y * y.y - m.scrollTop * y.y + b.y + x.y
    }
}
function V2(n) {
    return Array.from(n.getClientRects())
}
function X2(n) {
    const r = Tn(n)
      , l = To(n)
      , s = n.ownerDocument.body
      , u = Pe(r.scrollWidth, r.clientWidth, s.scrollWidth, s.clientWidth)
      , f = Pe(r.scrollHeight, r.clientHeight, s.scrollHeight, s.clientHeight);
    let d = -l.scrollLeft + Co(n);
    const h = -l.scrollTop;
    return fn(s).direction === "rtl" && (d += Pe(r.clientWidth, s.clientWidth) - u),
    {
        width: u,
        height: f,
        x: d,
        y: h
    }
}
const Ly = 25;
function K2(n, r) {
    const l = Ve(n)
      , s = Tn(n)
      , u = l.visualViewport;
    let f = s.clientWidth
      , d = s.clientHeight
      , h = 0
      , m = 0;
    if (u) {
        f = u.width,
        d = u.height;
        const b = If();
        (!b || b && r === "fixed") && (h = u.offsetLeft,
        m = u.offsetTop)
    }
    const y = Co(s);
    if (y <= 0) {
        const b = s.ownerDocument
          , v = b.body
          , x = getComputedStyle(v)
          , _ = b.compatMode === "CSS1Compat" && parseFloat(x.marginLeft) + parseFloat(x.marginRight) || 0
          , T = Math.abs(s.clientWidth - v.clientWidth - _);
        T <= Ly && (f -= T)
    } else
        y <= Ly && (f += y);
    return {
        width: f,
        height: d,
        x: h,
        y: m
    }
}
const Z2 = new Set(["absolute", "fixed"]);
function J2(n, r) {
    const l = dr(n, !0, r === "fixed")
      , s = l.top + n.clientTop
      , u = l.left + n.clientLeft
      , f = _n(n) ? ui(n) : On(1)
      , d = n.clientWidth * f.x
      , h = n.clientHeight * f.y
      , m = u * f.x
      , y = s * f.y;
    return {
        width: d,
        height: h,
        x: m,
        y
    }
}
function Hy(n, r, l) {
    let s;
    if (r === "viewport")
        s = K2(n, l);
    else if (r === "document")
        s = X2(Tn(n));
    else if (cn(r))
        s = J2(r, l);
    else {
        const u = gg(n);
        s = {
            x: r.x - u.x,
            y: r.y - u.y,
            width: r.width,
            height: r.height
        }
    }
    return ho(s)
}
function xg(n, r) {
    const l = za(n);
    return l === r || !cn(l) || di(l) ? !1 : fn(l).position === "fixed" || xg(l, r)
}
function F2(n, r) {
    const l = r.get(n);
    if (l)
        return l;
    let s = Al(n, [], !1).filter(h => cn(h) && pi(h) !== "body")
      , u = null;
    const f = fn(n).position === "fixed";
    let d = f ? za(n) : n;
    for (; cn(d) && !di(d); ) {
        const h = fn(d)
          , m = Ff(d);
        !m && h.position === "fixed" && (u = null),
        (f ? !m && !u : !m && h.position === "static" && !!u && Z2.has(u.position) || jl(d) && !m && xg(n, d)) ? s = s.filter(b => b !== d) : u = h,
        d = za(d)
    }
    return r.set(n, s),
    s
}
function I2(n) {
    let {element: r, boundary: l, rootBoundary: s, strategy: u} = n;
    const d = [...l === "clippingAncestors" ? Ao(r) ? [] : F2(r, this._c) : [].concat(l), s]
      , h = d[0]
      , m = d.reduce( (y, b) => {
        const v = Hy(r, b, u);
        return y.top = Pe(v.top, y.top),
        y.right = Na(v.right, y.right),
        y.bottom = Na(v.bottom, y.bottom),
        y.left = Pe(v.left, y.left),
        y
    }
    , Hy(r, h, u));
    return {
        width: m.right - m.left,
        height: m.bottom - m.top,
        x: m.left,
        y: m.top
    }
}
function $2(n) {
    const {width: r, height: l} = vg(n);
    return {
        width: r,
        height: l
    }
}
function W2(n, r, l) {
    const s = _n(r)
      , u = Tn(r)
      , f = l === "fixed"
      , d = dr(n, !0, f, r);
    let h = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const m = On(0);
    function y() {
        m.x = Co(u)
    }
    if (s || !s && !f)
        if ((pi(r) !== "body" || jl(u)) && (h = To(r)),
        s) {
            const _ = dr(r, !0, f, r);
            m.x = _.x + r.clientLeft,
            m.y = _.y + r.clientTop
        } else
            u && y();
    f && !s && u && y();
    const b = u && !s && !f ? bg(u, h) : On(0)
      , v = d.left + h.scrollLeft - m.x - b.x
      , x = d.top + h.scrollTop - m.y - b.y;
    return {
        x: v,
        y: x,
        width: d.width,
        height: d.height
    }
}
function af(n) {
    return fn(n).position === "static"
}
function Qy(n, r) {
    if (!_n(n) || fn(n).position === "fixed")
        return null;
    if (r)
        return r(n);
    let l = n.offsetParent;
    return Tn(n) === l && (l = l.ownerDocument.body),
    l
}
function Sg(n, r) {
    const l = Ve(n);
    if (Ao(n))
        return l;
    if (!_n(n)) {
        let u = za(n);
        for (; u && !di(u); ) {
            if (cn(u) && !af(u))
                return u;
            u = za(u)
        }
        return l
    }
    let s = Qy(n, r);
    for (; s && U2(s) && af(s); )
        s = Qy(s, r);
    return s && di(s) && af(s) && !Ff(s) ? l : s || B2(n) || l
}
const tE = async function(n) {
    const r = this.getOffsetParent || Sg
      , l = this.getDimensions
      , s = await l(n.floating);
    return {
        reference: W2(n.reference, await r(n.floating), n.strategy),
        floating: {
            x: 0,
            y: 0,
            width: s.width,
            height: s.height
        }
    }
};
function eE(n) {
    return fn(n).direction === "rtl"
}
const nE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: G2,
    getDocumentElement: Tn,
    getClippingRect: I2,
    getOffsetParent: Sg,
    getElementRects: tE,
    getClientRects: V2,
    getDimensions: $2,
    getScale: ui,
    isElement: cn,
    isRTL: eE
};
function wg(n, r) {
    return n.x === r.x && n.y === r.y && n.width === r.width && n.height === r.height
}
function aE(n, r) {
    let l = null, s;
    const u = Tn(n);
    function f() {
        var h;
        clearTimeout(s),
        (h = l) == null || h.disconnect(),
        l = null
    }
    function d(h, m) {
        h === void 0 && (h = !1),
        m === void 0 && (m = 1),
        f();
        const y = n.getBoundingClientRect()
          , {left: b, top: v, width: x, height: _} = y;
        if (h || r(),
        !x || !_)
            return;
        const T = Ws(v)
          , S = Ws(u.clientWidth - (b + x))
          , U = Ws(u.clientHeight - (v + _))
          , B = Ws(b)
          , I = {
            rootMargin: -T + "px " + -S + "px " + -U + "px " + -B + "px",
            threshold: Pe(0, Na(1, m)) || 1
        };
        let nt = !0;
        function X(Z) {
            const M = Z[0].intersectionRatio;
            if (M !== m) {
                if (!nt)
                    return d();
                M ? d(!1, M) : s = setTimeout( () => {
                    d(!1, 1e-7)
                }
                , 1e3)
            }
            M === 1 && !wg(y, n.getBoundingClientRect()) && d(),
            nt = !1
        }
        try {
            l = new IntersectionObserver(X,{
                ...I,
                root: u.ownerDocument
            })
        } catch {
            l = new IntersectionObserver(X,I)
        }
        l.observe(n)
    }
    return d(!0),
    f
}
function rE(n, r, l, s) {
    s === void 0 && (s = {});
    const {ancestorScroll: u=!0, ancestorResize: f=!0, elementResize: d=typeof ResizeObserver == "function", layoutShift: h=typeof IntersectionObserver == "function", animationFrame: m=!1} = s
      , y = $f(n)
      , b = u || f ? [...y ? Al(y) : [], ...Al(r)] : [];
    b.forEach(B => {
        u && B.addEventListener("scroll", l, {
            passive: !0
        }),
        f && B.addEventListener("resize", l)
    }
    );
    const v = y && h ? aE(y, l) : null;
    let x = -1
      , _ = null;
    d && (_ = new ResizeObserver(B => {
        let[J] = B;
        J && J.target === y && _ && (_.unobserve(r),
        cancelAnimationFrame(x),
        x = requestAnimationFrame( () => {
            var I;
            (I = _) == null || I.observe(r)
        }
        )),
        l()
    }
    ),
    y && !m && _.observe(y),
    _.observe(r));
    let T, S = m ? dr(n) : null;
    m && U();
    function U() {
        const B = dr(n);
        S && !wg(S, B) && l(),
        S = B,
        T = requestAnimationFrame(U)
    }
    return l(),
    () => {
        var B;
        b.forEach(J => {
            u && J.removeEventListener("scroll", l),
            f && J.removeEventListener("resize", l)
        }
        ),
        v?.(),
        (B = _) == null || B.disconnect(),
        _ = null,
        m && cancelAnimationFrame(T)
    }
}
const iE = R2
  , lE = M2
  , sE = A2
  , oE = D2
  , uE = T2
  , By = _2
  , cE = j2
  , fE = (n, r, l) => {
    const s = new Map
      , u = {
        platform: nE,
        ...l
    }
      , f = {
        ...u.platform,
        _c: s
    };
    return O2(n, r, {
        ...u,
        platform: f
    })
}
;
var dE = typeof document < "u"
  , hE = function() {}
  , lo = dE ? C.useLayoutEffect : hE;
function mo(n, r) {
    if (n === r)
        return !0;
    if (typeof n != typeof r)
        return !1;
    if (typeof n == "function" && n.toString() === r.toString())
        return !0;
    let l, s, u;
    if (n && r && typeof n == "object") {
        if (Array.isArray(n)) {
            if (l = n.length,
            l !== r.length)
                return !1;
            for (s = l; s-- !== 0; )
                if (!mo(n[s], r[s]))
                    return !1;
            return !0
        }
        if (u = Object.keys(n),
        l = u.length,
        l !== Object.keys(r).length)
            return !1;
        for (s = l; s-- !== 0; )
            if (!{}.hasOwnProperty.call(r, u[s]))
                return !1;
        for (s = l; s-- !== 0; ) {
            const f = u[s];
            if (!(f === "_owner" && n.$$typeof) && !mo(n[f], r[f]))
                return !1
        }
        return !0
    }
    return n !== n && r !== r
}
function Eg(n) {
    return typeof window > "u" ? 1 : (n.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function ky(n, r) {
    const l = Eg(n);
    return Math.round(r * l) / l
}
function rf(n) {
    const r = C.useRef(n);
    return lo( () => {
        r.current = n
    }
    ),
    r
}
function mE(n) {
    n === void 0 && (n = {});
    const {placement: r="bottom", strategy: l="absolute", middleware: s=[], platform: u, elements: {reference: f, floating: d}={}, transform: h=!0, whileElementsMounted: m, open: y} = n
      , [b,v] = C.useState({
        x: 0,
        y: 0,
        strategy: l,
        placement: r,
        middlewareData: {},
        isPositioned: !1
    })
      , [x,_] = C.useState(s);
    mo(x, s) || _(s);
    const [T,S] = C.useState(null)
      , [U,B] = C.useState(null)
      , J = C.useCallback(D => {
        D !== Z.current && (Z.current = D,
        S(D))
    }
    , [])
      , I = C.useCallback(D => {
        D !== M.current && (M.current = D,
        B(D))
    }
    , [])
      , nt = f || T
      , X = d || U
      , Z = C.useRef(null)
      , M = C.useRef(null)
      , H = C.useRef(b)
      , $ = m != null
      , W = rf(m)
      , at = rf(u)
      , tt = rf(y)
      , st = C.useCallback( () => {
        if (!Z.current || !M.current)
            return;
        const D = {
            placement: r,
            strategy: l,
            middleware: x
        };
        at.current && (D.platform = at.current),
        fE(Z.current, M.current, D).then(rt => {
            const ht = {
                ...rt,
                isPositioned: tt.current !== !1
            };
            it.current && !mo(H.current, ht) && (H.current = ht,
            Xf.flushSync( () => {
                v(ht)
            }
            ))
        }
        )
    }
    , [x, r, l, at, tt]);
    lo( () => {
        y === !1 && H.current.isPositioned && (H.current.isPositioned = !1,
        v(D => ({
            ...D,
            isPositioned: !1
        })))
    }
    , [y]);
    const it = C.useRef(!1);
    lo( () => (it.current = !0,
    () => {
        it.current = !1
    }
    ), []),
    lo( () => {
        if (nt && (Z.current = nt),
        X && (M.current = X),
        nt && X) {
            if (W.current)
                return W.current(nt, X, st);
            st()
        }
    }
    , [nt, X, st, W, $]);
    const ut = C.useMemo( () => ({
        reference: Z,
        floating: M,
        setReference: J,
        setFloating: I
    }), [J, I])
      , A = C.useMemo( () => ({
        reference: nt,
        floating: X
    }), [nt, X])
      , Q = C.useMemo( () => {
        const D = {
            position: l,
            left: 0,
            top: 0
        };
        if (!A.floating)
            return D;
        const rt = ky(A.floating, b.x)
          , ht = ky(A.floating, b.y);
        return h ? {
            ...D,
            transform: "translate(" + rt + "px, " + ht + "px)",
            ...Eg(A.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: l,
            left: rt,
            top: ht
        }
    }
    , [l, h, A.floating, b.x, b.y]);
    return C.useMemo( () => ({
        ...b,
        update: st,
        refs: ut,
        elements: A,
        floatingStyles: Q
    }), [b, st, ut, A, Q])
}
const pE = n => {
    function r(l) {
        return {}.hasOwnProperty.call(l, "current")
    }
    return {
        name: "arrow",
        options: n,
        fn(l) {
            const {element: s, padding: u} = typeof n == "function" ? n(l) : n;
            return s && r(s) ? s.current != null ? By({
                element: s.current,
                padding: u
            }).fn(l) : {} : s ? By({
                element: s,
                padding: u
            }).fn(l) : {}
        }
    }
}
  , yE = (n, r) => ({
    ...iE(n),
    options: [n, r]
})
  , vE = (n, r) => ({
    ...lE(n),
    options: [n, r]
})
  , gE = (n, r) => ({
    ...cE(n),
    options: [n, r]
})
  , bE = (n, r) => ({
    ...sE(n),
    options: [n, r]
})
  , xE = (n, r) => ({
    ...oE(n),
    options: [n, r]
})
  , SE = (n, r) => ({
    ...uE(n),
    options: [n, r]
})
  , wE = (n, r) => ({
    ...pE(n),
    options: [n, r]
});
var EE = "Arrow"
  , Og = C.forwardRef( (n, r) => {
    const {children: l, width: s=10, height: u=5, ...f} = n;
    return O.jsx(vr.svg, {
        ...f,
        ref: r,
        width: s,
        height: u,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: n.asChild ? l : O.jsx("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Og.displayName = EE;
var OE = Og;
function _E(n) {
    const [r,l] = C.useState(void 0);
    return Ol( () => {
        if (n) {
            l({
                width: n.offsetWidth,
                height: n.offsetHeight
            });
            const s = new ResizeObserver(u => {
                if (!Array.isArray(u) || !u.length)
                    return;
                const f = u[0];
                let d, h;
                if ("borderBoxSize"in f) {
                    const m = f.borderBoxSize
                      , y = Array.isArray(m) ? m[0] : m;
                    d = y.inlineSize,
                    h = y.blockSize
                } else
                    d = n.offsetWidth,
                    h = n.offsetHeight;
                l({
                    width: d,
                    height: h
                })
            }
            );
            return s.observe(n, {
                box: "border-box"
            }),
            () => s.unobserve(n)
        } else
            l(void 0)
    }
    , [n]),
    r
}
var _g = "Popper"
  , [Ag,Tg] = sg(_g)
  , [B_,Cg] = Ag(_g)
  , Rg = "PopperAnchor"
  , Mg = C.forwardRef( (n, r) => {
    const {__scopePopper: l, virtualRef: s, ...u} = n
      , f = Cg(Rg, l)
      , d = C.useRef(null)
      , h = yr(r, d)
      , m = C.useRef(null);
    return C.useEffect( () => {
        const y = m.current;
        m.current = s?.current || d.current,
        y !== m.current && f.onAnchorChange(m.current)
    }
    ),
    s ? null : O.jsx(vr.div, {
        ...u,
        ref: h
    })
}
);
Mg.displayName = Rg;
var Wf = "PopperContent"
  , [AE,TE] = Ag(Wf)
  , jg = C.forwardRef( (n, r) => {
    const {__scopePopper: l, side: s="bottom", sideOffset: u=0, align: f="center", alignOffset: d=0, arrowPadding: h=0, avoidCollisions: m=!0, collisionBoundary: y=[], collisionPadding: b=0, sticky: v="partial", hideWhenDetached: x=!1, updatePositionStrategy: _="optimized", onPlaced: T, ...S} = n
      , U = Cg(Wf, l)
      , [B,J] = C.useState(null)
      , I = yr(r, ot => J(ot))
      , [nt,X] = C.useState(null)
      , Z = _E(nt)
      , M = Z?.width ?? 0
      , H = Z?.height ?? 0
      , $ = s + (f !== "center" ? "-" + f : "")
      , W = typeof b == "number" ? b : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...b
    }
      , at = Array.isArray(y) ? y : [y]
      , tt = at.length > 0
      , st = {
        padding: W,
        boundary: at.filter(RE),
        altBoundary: tt
    }
      , {refs: it, floatingStyles: ut, placement: A, isPositioned: Q, middlewareData: D} = mE({
        strategy: "fixed",
        placement: $,
        whileElementsMounted: (...ot) => rE(...ot, {
            animationFrame: _ === "always"
        }),
        elements: {
            reference: U.anchor
        },
        middleware: [yE({
            mainAxis: u + H,
            alignmentAxis: d
        }), m && vE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: v === "partial" ? gE() : void 0,
            ...st
        }), m && bE({
            ...st
        }), xE({
            ...st,
            apply: ({elements: ot, rects: gt, availableWidth: Ct, availableHeight: le}) => {
                const {width: ve, height: se} = gt.reference
                  , Cn = ot.floating.style;
                Cn.setProperty("--radix-popper-available-width", `${Ct}px`),
                Cn.setProperty("--radix-popper-available-height", `${le}px`),
                Cn.setProperty("--radix-popper-anchor-width", `${ve}px`),
                Cn.setProperty("--radix-popper-anchor-height", `${se}px`)
            }
        }), nt && wE({
            element: nt,
            padding: h
        }), ME({
            arrowWidth: M,
            arrowHeight: H
        }), x && SE({
            strategy: "referenceHidden",
            ...st
        })]
    })
      , [rt,ht] = zg(A)
      , w = Oo(T);
    Ol( () => {
        Q && w?.()
    }
    , [Q, w]);
    const P = D.arrow?.x
      , q = D.arrow?.y
      , Y = D.arrow?.centerOffset !== 0
      , [F,mt] = C.useState();
    return Ol( () => {
        B && mt(window.getComputedStyle(B).zIndex)
    }
    , [B]),
    O.jsx("div", {
        ref: it.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...ut,
            transform: Q ? ut.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: F,
            "--radix-popper-transform-origin": [D.transformOrigin?.x, D.transformOrigin?.y].join(" "),
            ...D.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: n.dir,
        children: O.jsx(AE, {
            scope: l,
            placedSide: rt,
            onArrowChange: X,
            arrowX: P,
            arrowY: q,
            shouldHideArrow: Y,
            children: O.jsx(vr.div, {
                "data-side": rt,
                "data-align": ht,
                ...S,
                ref: I,
                style: {
                    ...S.style,
                    animation: Q ? void 0 : "none"
                }
            })
        })
    })
}
);
jg.displayName = Wf;
var Dg = "PopperArrow"
  , CE = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , Ng = C.forwardRef(function(r, l) {
    const {__scopePopper: s, ...u} = r
      , f = TE(Dg, s)
      , d = CE[f.placedSide];
    return O.jsx("span", {
        ref: f.onArrowChange,
        style: {
            position: "absolute",
            left: f.arrowX,
            top: f.arrowY,
            [d]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[f.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[f.placedSide],
            visibility: f.shouldHideArrow ? "hidden" : void 0
        },
        children: O.jsx(OE, {
            ...u,
            ref: l,
            style: {
                ...u.style,
                display: "block"
            }
        })
    })
});
Ng.displayName = Dg;
function RE(n) {
    return n !== null
}
var ME = n => ({
    name: "transformOrigin",
    options: n,
    fn(r) {
        const {placement: l, rects: s, middlewareData: u} = r
          , d = u.arrow?.centerOffset !== 0
          , h = d ? 0 : n.arrowWidth
          , m = d ? 0 : n.arrowHeight
          , [y,b] = zg(l)
          , v = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[b]
          , x = (u.arrow?.x ?? 0) + h / 2
          , _ = (u.arrow?.y ?? 0) + m / 2;
        let T = ""
          , S = "";
        return y === "bottom" ? (T = d ? v : `${x}px`,
        S = `${-m}px`) : y === "top" ? (T = d ? v : `${x}px`,
        S = `${s.floating.height + m}px`) : y === "right" ? (T = `${-m}px`,
        S = d ? v : `${_}px`) : y === "left" && (T = `${s.floating.width + m}px`,
        S = d ? v : `${_}px`),
        {
            data: {
                x: T,
                y: S
            }
        }
    }
});
function zg(n) {
    const [r,l="center"] = n.split("-");
    return [r, l]
}
var jE = Mg
  , DE = jg
  , NE = Ng;
function zE(n, r) {
    return C.useReducer( (l, s) => r[l][s] ?? l, n)
}
var Ug = n => {
    const {present: r, children: l} = n
      , s = UE(r)
      , u = typeof l == "function" ? l({
        present: s.isPresent
    }) : C.Children.only(l)
      , f = yr(s.ref, qE(u));
    return typeof l == "function" || s.isPresent ? C.cloneElement(u, {
        ref: f
    }) : null
}
;
Ug.displayName = "Presence";
function UE(n) {
    const [r,l] = C.useState()
      , s = C.useRef(null)
      , u = C.useRef(n)
      , f = C.useRef("none")
      , d = n ? "mounted" : "unmounted"
      , [h,m] = zE(d, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return C.useEffect( () => {
        const y = to(s.current);
        f.current = h === "mounted" ? y : "none"
    }
    , [h]),
    Ol( () => {
        const y = s.current
          , b = u.current;
        if (b !== n) {
            const x = f.current
              , _ = to(y);
            n ? m("MOUNT") : _ === "none" || y?.display === "none" ? m("UNMOUNT") : m(b && x !== _ ? "ANIMATION_OUT" : "UNMOUNT"),
            u.current = n
        }
    }
    , [n, m]),
    Ol( () => {
        if (r) {
            let y;
            const b = r.ownerDocument.defaultView ?? window
              , v = _ => {
                const S = to(s.current).includes(CSS.escape(_.animationName));
                if (_.target === r && S && (m("ANIMATION_END"),
                !u.current)) {
                    const U = r.style.animationFillMode;
                    r.style.animationFillMode = "forwards",
                    y = b.setTimeout( () => {
                        r.style.animationFillMode === "forwards" && (r.style.animationFillMode = U)
                    }
                    )
                }
            }
              , x = _ => {
                _.target === r && (f.current = to(s.current))
            }
            ;
            return r.addEventListener("animationstart", x),
            r.addEventListener("animationcancel", v),
            r.addEventListener("animationend", v),
            () => {
                b.clearTimeout(y),
                r.removeEventListener("animationstart", x),
                r.removeEventListener("animationcancel", v),
                r.removeEventListener("animationend", v)
            }
        } else
            m("ANIMATION_END")
    }
    , [r, m]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(h),
        ref: C.useCallback(y => {
            s.current = y ? getComputedStyle(y) : null,
            l(y)
        }
        , [])
    }
}
function to(n) {
    return n?.animationName || "none"
}
function qE(n) {
    let r = Object.getOwnPropertyDescriptor(n.props, "ref")?.get
      , l = r && "isReactWarning"in r && r.isReactWarning;
    return l ? n.ref : (r = Object.getOwnPropertyDescriptor(n, "ref")?.get,
    l = r && "isReactWarning"in r && r.isReactWarning,
    l ? n.props.ref : n.props.ref || n.ref)
}
var LE = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal"
})
  , HE = "VisuallyHidden"
  , qg = C.forwardRef( (n, r) => O.jsx(vr.span, {
    ...n,
    ref: r,
    style: {
        ...LE,
        ...n.style
    }
}));
qg.displayName = HE;
var QE = qg
  , [Ro] = sg("Tooltip", [Tg])
  , td = Tg()
  , Lg = "TooltipProvider"
  , BE = 700
  , Py = "tooltip.open"
  , [kE,Hg] = Ro(Lg)
  , Qg = n => {
    const {__scopeTooltip: r, delayDuration: l=BE, skipDelayDuration: s=300, disableHoverableContent: u=!1, children: f} = n
      , d = C.useRef(!0)
      , h = C.useRef(!1)
      , m = C.useRef(0);
    return C.useEffect( () => {
        const y = m.current;
        return () => window.clearTimeout(y)
    }
    , []),
    O.jsx(kE, {
        scope: r,
        isOpenDelayedRef: d,
        delayDuration: l,
        onOpen: C.useCallback( () => {
            window.clearTimeout(m.current),
            d.current = !1
        }
        , []),
        onClose: C.useCallback( () => {
            window.clearTimeout(m.current),
            m.current = window.setTimeout( () => d.current = !0, s)
        }
        , [s]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: C.useCallback(y => {
            h.current = y
        }
        , []),
        disableHoverableContent: u,
        children: f
    })
}
;
Qg.displayName = Lg;
var Bg = "Tooltip"
  , [k_,Mo] = Ro(Bg)
  , Nf = "TooltipTrigger"
  , PE = C.forwardRef( (n, r) => {
    const {__scopeTooltip: l, ...s} = n
      , u = Mo(Nf, l)
      , f = Hg(Nf, l)
      , d = td(l)
      , h = C.useRef(null)
      , m = yr(r, h, u.onTriggerChange)
      , y = C.useRef(!1)
      , b = C.useRef(!1)
      , v = C.useCallback( () => y.current = !1, []);
    return C.useEffect( () => () => document.removeEventListener("pointerup", v), [v]),
    O.jsx(jE, {
        asChild: !0,
        ...d,
        children: O.jsx(vr.button, {
            "aria-describedby": u.open ? u.contentId : void 0,
            "data-state": u.stateAttribute,
            ...s,
            ref: m,
            onPointerMove: Jn(n.onPointerMove, x => {
                x.pointerType !== "touch" && !b.current && !f.isPointerInTransitRef.current && (u.onTriggerEnter(),
                b.current = !0)
            }
            ),
            onPointerLeave: Jn(n.onPointerLeave, () => {
                u.onTriggerLeave(),
                b.current = !1
            }
            ),
            onPointerDown: Jn(n.onPointerDown, () => {
                u.open && u.onClose(),
                y.current = !0,
                document.addEventListener("pointerup", v, {
                    once: !0
                })
            }
            ),
            onFocus: Jn(n.onFocus, () => {
                y.current || u.onOpen()
            }
            ),
            onBlur: Jn(n.onBlur, u.onClose),
            onClick: Jn(n.onClick, u.onClose)
        })
    })
}
);
PE.displayName = Nf;
var YE = "TooltipPortal"
  , [P_,GE] = Ro(YE, {
    forceMount: void 0
})
  , hi = "TooltipContent"
  , VE = C.forwardRef( (n, r) => {
    const l = GE(hi, n.__scopeTooltip)
      , {forceMount: s=l.forceMount, side: u="top", ...f} = n
      , d = Mo(hi, n.__scopeTooltip);
    return O.jsx(Ug, {
        present: s || d.open,
        children: d.disableHoverableContent ? O.jsx(kg, {
            side: u,
            ...f,
            ref: r
        }) : O.jsx(XE, {
            side: u,
            ...f,
            ref: r
        })
    })
}
)
  , XE = C.forwardRef( (n, r) => {
    const l = Mo(hi, n.__scopeTooltip)
      , s = Hg(hi, n.__scopeTooltip)
      , u = C.useRef(null)
      , f = yr(r, u)
      , [d,h] = C.useState(null)
      , {trigger: m, onClose: y} = l
      , b = u.current
      , {onPointerInTransitChange: v} = s
      , x = C.useCallback( () => {
        h(null),
        v(!1)
    }
    , [v])
      , _ = C.useCallback( (T, S) => {
        const U = T.currentTarget
          , B = {
            x: T.clientX,
            y: T.clientY
        }
          , J = IE(B, U.getBoundingClientRect())
          , I = $E(B, J)
          , nt = WE(S.getBoundingClientRect())
          , X = eO([...I, ...nt]);
        h(X),
        v(!0)
    }
    , [v]);
    return C.useEffect( () => () => x(), [x]),
    C.useEffect( () => {
        if (m && b) {
            const T = U => _(U, b)
              , S = U => _(U, m);
            return m.addEventListener("pointerleave", T),
            b.addEventListener("pointerleave", S),
            () => {
                m.removeEventListener("pointerleave", T),
                b.removeEventListener("pointerleave", S)
            }
        }
    }
    , [m, b, _, x]),
    C.useEffect( () => {
        if (d) {
            const T = S => {
                const U = S.target
                  , B = {
                    x: S.clientX,
                    y: S.clientY
                }
                  , J = m?.contains(U) || b?.contains(U)
                  , I = !tO(B, d);
                J ? x() : I && (x(),
                y())
            }
            ;
            return document.addEventListener("pointermove", T),
            () => document.removeEventListener("pointermove", T)
        }
    }
    , [m, b, d, y, x]),
    O.jsx(kg, {
        ...n,
        ref: f
    })
}
)
  , [KE,ZE] = Ro(Bg, {
    isInside: !1
})
  , JE = Ww("TooltipContent")
  , kg = C.forwardRef( (n, r) => {
    const {__scopeTooltip: l, children: s, "aria-label": u, onEscapeKeyDown: f, onPointerDownOutside: d, ...h} = n
      , m = Mo(hi, l)
      , y = td(l)
      , {onClose: b} = m;
    return C.useEffect( () => (document.addEventListener(Py, b),
    () => document.removeEventListener(Py, b)), [b]),
    C.useEffect( () => {
        if (m.trigger) {
            const v = x => {
                x.target?.contains(m.trigger) && b()
            }
            ;
            return window.addEventListener("scroll", v, {
                capture: !0
            }),
            () => window.removeEventListener("scroll", v, {
                capture: !0
            })
        }
    }
    , [m.trigger, b]),
    O.jsx(fg, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: f,
        onPointerDownOutside: d,
        onFocusOutside: v => v.preventDefault(),
        onDismiss: b,
        children: O.jsxs(DE, {
            "data-state": m.stateAttribute,
            ...y,
            ...h,
            ref: r,
            style: {
                ...h.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
            },
            children: [O.jsx(JE, {
                children: s
            }), O.jsx(KE, {
                scope: l,
                isInside: !0,
                children: O.jsx(QE, {
                    id: m.contentId,
                    role: "tooltip",
                    children: u || s
                })
            })]
        })
    })
}
);
VE.displayName = hi;
var Pg = "TooltipArrow"
  , FE = C.forwardRef( (n, r) => {
    const {__scopeTooltip: l, ...s} = n
      , u = td(l);
    return ZE(Pg, l).isInside ? null : O.jsx(NE, {
        ...u,
        ...s,
        ref: r
    })
}
);
FE.displayName = Pg;
function IE(n, r) {
    const l = Math.abs(r.top - n.y)
      , s = Math.abs(r.bottom - n.y)
      , u = Math.abs(r.right - n.x)
      , f = Math.abs(r.left - n.x);
    switch (Math.min(l, s, u, f)) {
    case f:
        return "left";
    case u:
        return "right";
    case l:
        return "top";
    case s:
        return "bottom";
    default:
        throw new Error("unreachable")
    }
}
function $E(n, r, l=5) {
    const s = [];
    switch (r) {
    case "top":
        s.push({
            x: n.x - l,
            y: n.y + l
        }, {
            x: n.x + l,
            y: n.y + l
        });
        break;
    case "bottom":
        s.push({
            x: n.x - l,
            y: n.y - l
        }, {
            x: n.x + l,
            y: n.y - l
        });
        break;
    case "left":
        s.push({
            x: n.x + l,
            y: n.y - l
        }, {
            x: n.x + l,
            y: n.y + l
        });
        break;
    case "right":
        s.push({
            x: n.x - l,
            y: n.y - l
        }, {
            x: n.x - l,
            y: n.y + l
        });
        break
    }
    return s
}
function WE(n) {
    const {top: r, right: l, bottom: s, left: u} = n;
    return [{
        x: u,
        y: r
    }, {
        x: l,
        y: r
    }, {
        x: l,
        y: s
    }, {
        x: u,
        y: s
    }]
}
function tO(n, r) {
    const {x: l, y: s} = n;
    let u = !1;
    for (let f = 0, d = r.length - 1; f < r.length; d = f++) {
        const h = r[f]
          , m = r[d]
          , y = h.x
          , b = h.y
          , v = m.x
          , x = m.y;
        b > s != x > s && l < (v - y) * (s - b) / (x - b) + y && (u = !u)
    }
    return u
}
function eO(n) {
    const r = n.slice();
    return r.sort( (l, s) => l.x < s.x ? -1 : l.x > s.x ? 1 : l.y < s.y ? -1 : l.y > s.y ? 1 : 0),
    nO(r)
}
function nO(n) {
    if (n.length <= 1)
        return n.slice();
    const r = [];
    for (let s = 0; s < n.length; s++) {
        const u = n[s];
        for (; r.length >= 2; ) {
            const f = r[r.length - 1]
              , d = r[r.length - 2];
            if ((f.x - d.x) * (u.y - d.y) >= (f.y - d.y) * (u.x - d.x))
                r.pop();
            else
                break
        }
        r.push(u)
    }
    r.pop();
    const l = [];
    for (let s = n.length - 1; s >= 0; s--) {
        const u = n[s];
        for (; l.length >= 2; ) {
            const f = l[l.length - 1]
              , d = l[l.length - 2];
            if ((f.x - d.x) * (u.y - d.y) >= (f.y - d.y) * (u.x - d.x))
                l.pop();
            else
                break
        }
        l.push(u)
    }
    return l.pop(),
    r.length === 1 && l.length === 1 && r[0].x === l[0].x && r[0].y === l[0].y ? r : r.concat(l)
}
var aO = Qg;
function Yg(n) {
    var r, l, s = "";
    if (typeof n == "string" || typeof n == "number")
        s += n;
    else if (typeof n == "object")
        if (Array.isArray(n)) {
            var u = n.length;
            for (r = 0; r < u; r++)
                n[r] && (l = Yg(n[r])) && (s && (s += " "),
                s += l)
        } else
            for (l in n)
                n[l] && (s && (s += " "),
                s += l);
    return s
}
function Gg() {
    for (var n, r, l = 0, s = "", u = arguments.length; l < u; l++)
        (n = arguments[l]) && (r = Yg(n)) && (s && (s += " "),
        s += r);
    return s
}
const ed = "-"
  , rO = n => {
    const r = lO(n)
      , {conflictingClassGroups: l, conflictingClassGroupModifiers: s} = n;
    return {
        getClassGroupId: d => {
            const h = d.split(ed);
            return h[0] === "" && h.length !== 1 && h.shift(),
            Vg(h, r) || iO(d)
        }
        ,
        getConflictingClassGroupIds: (d, h) => {
            const m = l[d] || [];
            return h && s[d] ? [...m, ...s[d]] : m
        }
    }
}
  , Vg = (n, r) => {
    if (n.length === 0)
        return r.classGroupId;
    const l = n[0]
      , s = r.nextPart.get(l)
      , u = s ? Vg(n.slice(1), s) : void 0;
    if (u)
        return u;
    if (r.validators.length === 0)
        return;
    const f = n.join(ed);
    return r.validators.find( ({validator: d}) => d(f))?.classGroupId
}
  , Yy = /^\[(.+)\]$/
  , iO = n => {
    if (Yy.test(n)) {
        const r = Yy.exec(n)[1]
          , l = r?.substring(0, r.indexOf(":"));
        if (l)
            return "arbitrary.." + l
    }
}
  , lO = n => {
    const {theme: r, classGroups: l} = n
      , s = {
        nextPart: new Map,
        validators: []
    };
    for (const u in l)
        zf(l[u], s, u, r);
    return s
}
  , zf = (n, r, l, s) => {
    n.forEach(u => {
        if (typeof u == "string") {
            const f = u === "" ? r : Gy(r, u);
            f.classGroupId = l;
            return
        }
        if (typeof u == "function") {
            if (sO(u)) {
                zf(u(s), r, l, s);
                return
            }
            r.validators.push({
                validator: u,
                classGroupId: l
            });
            return
        }
        Object.entries(u).forEach( ([f,d]) => {
            zf(d, Gy(r, f), l, s)
        }
        )
    }
    )
}
  , Gy = (n, r) => {
    let l = n;
    return r.split(ed).forEach(s => {
        l.nextPart.has(s) || l.nextPart.set(s, {
            nextPart: new Map,
            validators: []
        }),
        l = l.nextPart.get(s)
    }
    ),
    l
}
  , sO = n => n.isThemeGetter
  , oO = n => {
    if (n < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let r = 0
      , l = new Map
      , s = new Map;
    const u = (f, d) => {
        l.set(f, d),
        r++,
        r > n && (r = 0,
        s = l,
        l = new Map)
    }
    ;
    return {
        get(f) {
            let d = l.get(f);
            if (d !== void 0)
                return d;
            if ((d = s.get(f)) !== void 0)
                return u(f, d),
                d
        },
        set(f, d) {
            l.has(f) ? l.set(f, d) : u(f, d)
        }
    }
}
  , Uf = "!"
  , qf = ":"
  , uO = qf.length
  , cO = n => {
    const {prefix: r, experimentalParseClassName: l} = n;
    let s = u => {
        const f = [];
        let d = 0, h = 0, m = 0, y;
        for (let T = 0; T < u.length; T++) {
            let S = u[T];
            if (d === 0 && h === 0) {
                if (S === qf) {
                    f.push(u.slice(m, T)),
                    m = T + uO;
                    continue
                }
                if (S === "/") {
                    y = T;
                    continue
                }
            }
            S === "[" ? d++ : S === "]" ? d-- : S === "(" ? h++ : S === ")" && h--
        }
        const b = f.length === 0 ? u : u.substring(m)
          , v = fO(b)
          , x = v !== b
          , _ = y && y > m ? y - m : void 0;
        return {
            modifiers: f,
            hasImportantModifier: x,
            baseClassName: v,
            maybePostfixModifierPosition: _
        }
    }
    ;
    if (r) {
        const u = r + qf
          , f = s;
        s = d => d.startsWith(u) ? f(d.substring(u.length)) : {
            isExternal: !0,
            modifiers: [],
            hasImportantModifier: !1,
            baseClassName: d,
            maybePostfixModifierPosition: void 0
        }
    }
    if (l) {
        const u = s;
        s = f => l({
            className: f,
            parseClassName: u
        })
    }
    return s
}
  , fO = n => n.endsWith(Uf) ? n.substring(0, n.length - 1) : n.startsWith(Uf) ? n.substring(1) : n
  , dO = n => {
    const r = Object.fromEntries(n.orderSensitiveModifiers.map(s => [s, !0]));
    return s => {
        if (s.length <= 1)
            return s;
        const u = [];
        let f = [];
        return s.forEach(d => {
            d[0] === "[" || r[d] ? (u.push(...f.sort(), d),
            f = []) : f.push(d)
        }
        ),
        u.push(...f.sort()),
        u
    }
}
  , hO = n => ({
    cache: oO(n.cacheSize),
    parseClassName: cO(n),
    sortModifiers: dO(n),
    ...rO(n)
})
  , mO = /\s+/
  , pO = (n, r) => {
    const {parseClassName: l, getClassGroupId: s, getConflictingClassGroupIds: u, sortModifiers: f} = r
      , d = []
      , h = n.trim().split(mO);
    let m = "";
    for (let y = h.length - 1; y >= 0; y -= 1) {
        const b = h[y]
          , {isExternal: v, modifiers: x, hasImportantModifier: _, baseClassName: T, maybePostfixModifierPosition: S} = l(b);
        if (v) {
            m = b + (m.length > 0 ? " " + m : m);
            continue
        }
        let U = !!S
          , B = s(U ? T.substring(0, S) : T);
        if (!B) {
            if (!U) {
                m = b + (m.length > 0 ? " " + m : m);
                continue
            }
            if (B = s(T),
            !B) {
                m = b + (m.length > 0 ? " " + m : m);
                continue
            }
            U = !1
        }
        const J = f(x).join(":")
          , I = _ ? J + Uf : J
          , nt = I + B;
        if (d.includes(nt))
            continue;
        d.push(nt);
        const X = u(B, U);
        for (let Z = 0; Z < X.length; ++Z) {
            const M = X[Z];
            d.push(I + M)
        }
        m = b + (m.length > 0 ? " " + m : m)
    }
    return m
}
;
function yO() {
    let n = 0, r, l, s = "";
    for (; n < arguments.length; )
        (r = arguments[n++]) && (l = Xg(r)) && (s && (s += " "),
        s += l);
    return s
}
const Xg = n => {
    if (typeof n == "string")
        return n;
    let r, l = "";
    for (let s = 0; s < n.length; s++)
        n[s] && (r = Xg(n[s])) && (l && (l += " "),
        l += r);
    return l
}
;
function vO(n, ...r) {
    let l, s, u, f = d;
    function d(m) {
        const y = r.reduce( (b, v) => v(b), n());
        return l = hO(y),
        s = l.cache.get,
        u = l.cache.set,
        f = h,
        h(m)
    }
    function h(m) {
        const y = s(m);
        if (y)
            return y;
        const b = pO(m, l);
        return u(m, b),
        b
    }
    return function() {
        return f(yO.apply(null, arguments))
    }
}
const ne = n => {
    const r = l => l[n] || [];
    return r.isThemeGetter = !0,
    r
}
  , Kg = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , Zg = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , gO = /^\d+\/\d+$/
  , bO = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , xO = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , SO = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , wO = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , EO = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , si = n => gO.test(n)
  , Et = n => !!n && !Number.isNaN(Number(n))
  , Ta = n => !!n && Number.isInteger(Number(n))
  , lf = n => n.endsWith("%") && Et(n.slice(0, -1))
  , Zn = n => bO.test(n)
  , OO = () => !0
  , _O = n => xO.test(n) && !SO.test(n)
  , Jg = () => !1
  , AO = n => wO.test(n)
  , TO = n => EO.test(n)
  , CO = n => !ft(n) && !dt(n)
  , RO = n => yi(n, $g, Jg)
  , ft = n => Kg.test(n)
  , ir = n => yi(n, Wg, _O)
  , sf = n => yi(n, zO, Et)
  , Vy = n => yi(n, Fg, Jg)
  , MO = n => yi(n, Ig, TO)
  , eo = n => yi(n, t0, AO)
  , dt = n => Zg.test(n)
  , yl = n => vi(n, Wg)
  , jO = n => vi(n, UO)
  , Xy = n => vi(n, Fg)
  , DO = n => vi(n, $g)
  , NO = n => vi(n, Ig)
  , no = n => vi(n, t0, !0)
  , yi = (n, r, l) => {
    const s = Kg.exec(n);
    return s ? s[1] ? r(s[1]) : l(s[2]) : !1
}
  , vi = (n, r, l=!1) => {
    const s = Zg.exec(n);
    return s ? s[1] ? r(s[1]) : l : !1
}
  , Fg = n => n === "position" || n === "percentage"
  , Ig = n => n === "image" || n === "url"
  , $g = n => n === "length" || n === "size" || n === "bg-size"
  , Wg = n => n === "length"
  , zO = n => n === "number"
  , UO = n => n === "family-name"
  , t0 = n => n === "shadow"
  , qO = () => {
    const n = ne("color")
      , r = ne("font")
      , l = ne("text")
      , s = ne("font-weight")
      , u = ne("tracking")
      , f = ne("leading")
      , d = ne("breakpoint")
      , h = ne("container")
      , m = ne("spacing")
      , y = ne("radius")
      , b = ne("shadow")
      , v = ne("inset-shadow")
      , x = ne("text-shadow")
      , _ = ne("drop-shadow")
      , T = ne("blur")
      , S = ne("perspective")
      , U = ne("aspect")
      , B = ne("ease")
      , J = ne("animate")
      , I = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , nt = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , X = () => [...nt(), dt, ft]
      , Z = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , M = () => ["auto", "contain", "none"]
      , H = () => [dt, ft, m]
      , $ = () => [si, "full", "auto", ...H()]
      , W = () => [Ta, "none", "subgrid", dt, ft]
      , at = () => ["auto", {
        span: ["full", Ta, dt, ft]
    }, Ta, dt, ft]
      , tt = () => [Ta, "auto", dt, ft]
      , st = () => ["auto", "min", "max", "fr", dt, ft]
      , it = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , ut = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , A = () => ["auto", ...H()]
      , Q = () => [si, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()]
      , D = () => [n, dt, ft]
      , rt = () => [...nt(), Xy, Vy, {
        position: [dt, ft]
    }]
      , ht = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
    }]
      , w = () => ["auto", "cover", "contain", DO, RO, {
        size: [dt, ft]
    }]
      , P = () => [lf, yl, ir]
      , q = () => ["", "none", "full", y, dt, ft]
      , Y = () => ["", Et, yl, ir]
      , F = () => ["solid", "dashed", "dotted", "double"]
      , mt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , ot = () => [Et, lf, Xy, Vy]
      , gt = () => ["", "none", T, dt, ft]
      , Ct = () => ["none", Et, dt, ft]
      , le = () => ["none", Et, dt, ft]
      , ve = () => [Et, dt, ft]
      , se = () => [si, "full", ...H()];
    return {
        cacheSize: 500,
        theme: {
            animate: ["spin", "ping", "pulse", "bounce"],
            aspect: ["video"],
            blur: [Zn],
            breakpoint: [Zn],
            color: [OO],
            container: [Zn],
            "drop-shadow": [Zn],
            ease: ["in", "out", "in-out"],
            font: [CO],
            "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
            "inset-shadow": [Zn],
            leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
            perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
            radius: [Zn],
            shadow: [Zn],
            spacing: ["px", Et],
            text: [Zn],
            "text-shadow": [Zn],
            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", si, ft, dt, U]
            }],
            container: ["container"],
            columns: [{
                columns: [Et, ft, dt, h]
            }],
            "break-after": [{
                "break-after": I()
            }],
            "break-before": [{
                "break-before": I()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            sr: ["sr-only", "not-sr-only"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: X()
            }],
            overflow: [{
                overflow: Z()
            }],
            "overflow-x": [{
                "overflow-x": Z()
            }],
            "overflow-y": [{
                "overflow-y": Z()
            }],
            overscroll: [{
                overscroll: M()
            }],
            "overscroll-x": [{
                "overscroll-x": M()
            }],
            "overscroll-y": [{
                "overscroll-y": M()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: $()
            }],
            "inset-x": [{
                "inset-x": $()
            }],
            "inset-y": [{
                "inset-y": $()
            }],
            start: [{
                start: $()
            }],
            end: [{
                end: $()
            }],
            top: [{
                top: $()
            }],
            right: [{
                right: $()
            }],
            bottom: [{
                bottom: $()
            }],
            left: [{
                left: $()
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: [Ta, "auto", dt, ft]
            }],
            basis: [{
                basis: [si, "full", "auto", h, ...H()]
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["nowrap", "wrap", "wrap-reverse"]
            }],
            flex: [{
                flex: [Et, si, "auto", "initial", "none", ft]
            }],
            grow: [{
                grow: ["", Et, dt, ft]
            }],
            shrink: [{
                shrink: ["", Et, dt, ft]
            }],
            order: [{
                order: [Ta, "first", "last", "none", dt, ft]
            }],
            "grid-cols": [{
                "grid-cols": W()
            }],
            "col-start-end": [{
                col: at()
            }],
            "col-start": [{
                "col-start": tt()
            }],
            "col-end": [{
                "col-end": tt()
            }],
            "grid-rows": [{
                "grid-rows": W()
            }],
            "row-start-end": [{
                row: at()
            }],
            "row-start": [{
                "row-start": tt()
            }],
            "row-end": [{
                "row-end": tt()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": st()
            }],
            "auto-rows": [{
                "auto-rows": st()
            }],
            gap: [{
                gap: H()
            }],
            "gap-x": [{
                "gap-x": H()
            }],
            "gap-y": [{
                "gap-y": H()
            }],
            "justify-content": [{
                justify: [...it(), "normal"]
            }],
            "justify-items": [{
                "justify-items": [...ut(), "normal"]
            }],
            "justify-self": [{
                "justify-self": ["auto", ...ut()]
            }],
            "align-content": [{
                content: ["normal", ...it()]
            }],
            "align-items": [{
                items: [...ut(), {
                    baseline: ["", "last"]
                }]
            }],
            "align-self": [{
                self: ["auto", ...ut(), {
                    baseline: ["", "last"]
                }]
            }],
            "place-content": [{
                "place-content": it()
            }],
            "place-items": [{
                "place-items": [...ut(), "baseline"]
            }],
            "place-self": [{
                "place-self": ["auto", ...ut()]
            }],
            p: [{
                p: H()
            }],
            px: [{
                px: H()
            }],
            py: [{
                py: H()
            }],
            ps: [{
                ps: H()
            }],
            pe: [{
                pe: H()
            }],
            pt: [{
                pt: H()
            }],
            pr: [{
                pr: H()
            }],
            pb: [{
                pb: H()
            }],
            pl: [{
                pl: H()
            }],
            m: [{
                m: A()
            }],
            mx: [{
                mx: A()
            }],
            my: [{
                my: A()
            }],
            ms: [{
                ms: A()
            }],
            me: [{
                me: A()
            }],
            mt: [{
                mt: A()
            }],
            mr: [{
                mr: A()
            }],
            mb: [{
                mb: A()
            }],
            ml: [{
                ml: A()
            }],
            "space-x": [{
                "space-x": H()
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": H()
            }],
            "space-y-reverse": ["space-y-reverse"],
            size: [{
                size: Q()
            }],
            w: [{
                w: [h, "screen", ...Q()]
            }],
            "min-w": [{
                "min-w": [h, "screen", "none", ...Q()]
            }],
            "max-w": [{
                "max-w": [h, "screen", "none", "prose", {
                    screen: [d]
                }, ...Q()]
            }],
            h: [{
                h: ["screen", "lh", ...Q()]
            }],
            "min-h": [{
                "min-h": ["screen", "lh", "none", ...Q()]
            }],
            "max-h": [{
                "max-h": ["screen", "lh", ...Q()]
            }],
            "font-size": [{
                text: ["base", l, yl, ir]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: [s, dt, sf]
            }],
            "font-stretch": [{
                "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", lf, ft]
            }],
            "font-family": [{
                font: [jO, ft, r]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [{
                tracking: [u, dt, ft]
            }],
            "line-clamp": [{
                "line-clamp": [Et, "none", dt, sf]
            }],
            leading: [{
                leading: [f, ...H()]
            }],
            "list-image": [{
                "list-image": ["none", dt, ft]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "list-style-type": [{
                list: ["disc", "decimal", "none", dt, ft]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "placeholder-color": [{
                placeholder: D()
            }],
            "text-color": [{
                text: D()
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...F(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: [Et, "from-font", "auto", dt, ir]
            }],
            "text-decoration-color": [{
                decoration: D()
            }],
            "underline-offset": [{
                "underline-offset": [Et, "auto", dt, ft]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: H()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", dt, ft]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            wrap: [{
                wrap: ["break-word", "anywhere", "normal"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", dt, ft]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: rt()
            }],
            "bg-repeat": [{
                bg: ht()
            }],
            "bg-size": [{
                bg: w()
            }],
            "bg-image": [{
                bg: ["none", {
                    linear: [{
                        to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                    }, Ta, dt, ft],
                    radial: ["", dt, ft],
                    conic: [Ta, dt, ft]
                }, NO, MO]
            }],
            "bg-color": [{
                bg: D()
            }],
            "gradient-from-pos": [{
                from: P()
            }],
            "gradient-via-pos": [{
                via: P()
            }],
            "gradient-to-pos": [{
                to: P()
            }],
            "gradient-from": [{
                from: D()
            }],
            "gradient-via": [{
                via: D()
            }],
            "gradient-to": [{
                to: D()
            }],
            rounded: [{
                rounded: q()
            }],
            "rounded-s": [{
                "rounded-s": q()
            }],
            "rounded-e": [{
                "rounded-e": q()
            }],
            "rounded-t": [{
                "rounded-t": q()
            }],
            "rounded-r": [{
                "rounded-r": q()
            }],
            "rounded-b": [{
                "rounded-b": q()
            }],
            "rounded-l": [{
                "rounded-l": q()
            }],
            "rounded-ss": [{
                "rounded-ss": q()
            }],
            "rounded-se": [{
                "rounded-se": q()
            }],
            "rounded-ee": [{
                "rounded-ee": q()
            }],
            "rounded-es": [{
                "rounded-es": q()
            }],
            "rounded-tl": [{
                "rounded-tl": q()
            }],
            "rounded-tr": [{
                "rounded-tr": q()
            }],
            "rounded-br": [{
                "rounded-br": q()
            }],
            "rounded-bl": [{
                "rounded-bl": q()
            }],
            "border-w": [{
                border: Y()
            }],
            "border-w-x": [{
                "border-x": Y()
            }],
            "border-w-y": [{
                "border-y": Y()
            }],
            "border-w-s": [{
                "border-s": Y()
            }],
            "border-w-e": [{
                "border-e": Y()
            }],
            "border-w-t": [{
                "border-t": Y()
            }],
            "border-w-r": [{
                "border-r": Y()
            }],
            "border-w-b": [{
                "border-b": Y()
            }],
            "border-w-l": [{
                "border-l": Y()
            }],
            "divide-x": [{
                "divide-x": Y()
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": Y()
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "border-style": [{
                border: [...F(), "hidden", "none"]
            }],
            "divide-style": [{
                divide: [...F(), "hidden", "none"]
            }],
            "border-color": [{
                border: D()
            }],
            "border-color-x": [{
                "border-x": D()
            }],
            "border-color-y": [{
                "border-y": D()
            }],
            "border-color-s": [{
                "border-s": D()
            }],
            "border-color-e": [{
                "border-e": D()
            }],
            "border-color-t": [{
                "border-t": D()
            }],
            "border-color-r": [{
                "border-r": D()
            }],
            "border-color-b": [{
                "border-b": D()
            }],
            "border-color-l": [{
                "border-l": D()
            }],
            "divide-color": [{
                divide: D()
            }],
            "outline-style": [{
                outline: [...F(), "none", "hidden"]
            }],
            "outline-offset": [{
                "outline-offset": [Et, dt, ft]
            }],
            "outline-w": [{
                outline: ["", Et, yl, ir]
            }],
            "outline-color": [{
                outline: D()
            }],
            shadow: [{
                shadow: ["", "none", b, no, eo]
            }],
            "shadow-color": [{
                shadow: D()
            }],
            "inset-shadow": [{
                "inset-shadow": ["none", v, no, eo]
            }],
            "inset-shadow-color": [{
                "inset-shadow": D()
            }],
            "ring-w": [{
                ring: Y()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: D()
            }],
            "ring-offset-w": [{
                "ring-offset": [Et, ir]
            }],
            "ring-offset-color": [{
                "ring-offset": D()
            }],
            "inset-ring-w": [{
                "inset-ring": Y()
            }],
            "inset-ring-color": [{
                "inset-ring": D()
            }],
            "text-shadow": [{
                "text-shadow": ["none", x, no, eo]
            }],
            "text-shadow-color": [{
                "text-shadow": D()
            }],
            opacity: [{
                opacity: [Et, dt, ft]
            }],
            "mix-blend": [{
                "mix-blend": [...mt(), "plus-darker", "plus-lighter"]
            }],
            "bg-blend": [{
                "bg-blend": mt()
            }],
            "mask-clip": [{
                "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
            }, "mask-no-clip"],
            "mask-composite": [{
                mask: ["add", "subtract", "intersect", "exclude"]
            }],
            "mask-image-linear-pos": [{
                "mask-linear": [Et]
            }],
            "mask-image-linear-from-pos": [{
                "mask-linear-from": ot()
            }],
            "mask-image-linear-to-pos": [{
                "mask-linear-to": ot()
            }],
            "mask-image-linear-from-color": [{
                "mask-linear-from": D()
            }],
            "mask-image-linear-to-color": [{
                "mask-linear-to": D()
            }],
            "mask-image-t-from-pos": [{
                "mask-t-from": ot()
            }],
            "mask-image-t-to-pos": [{
                "mask-t-to": ot()
            }],
            "mask-image-t-from-color": [{
                "mask-t-from": D()
            }],
            "mask-image-t-to-color": [{
                "mask-t-to": D()
            }],
            "mask-image-r-from-pos": [{
                "mask-r-from": ot()
            }],
            "mask-image-r-to-pos": [{
                "mask-r-to": ot()
            }],
            "mask-image-r-from-color": [{
                "mask-r-from": D()
            }],
            "mask-image-r-to-color": [{
                "mask-r-to": D()
            }],
            "mask-image-b-from-pos": [{
                "mask-b-from": ot()
            }],
            "mask-image-b-to-pos": [{
                "mask-b-to": ot()
            }],
            "mask-image-b-from-color": [{
                "mask-b-from": D()
            }],
            "mask-image-b-to-color": [{
                "mask-b-to": D()
            }],
            "mask-image-l-from-pos": [{
                "mask-l-from": ot()
            }],
            "mask-image-l-to-pos": [{
                "mask-l-to": ot()
            }],
            "mask-image-l-from-color": [{
                "mask-l-from": D()
            }],
            "mask-image-l-to-color": [{
                "mask-l-to": D()
            }],
            "mask-image-x-from-pos": [{
                "mask-x-from": ot()
            }],
            "mask-image-x-to-pos": [{
                "mask-x-to": ot()
            }],
            "mask-image-x-from-color": [{
                "mask-x-from": D()
            }],
            "mask-image-x-to-color": [{
                "mask-x-to": D()
            }],
            "mask-image-y-from-pos": [{
                "mask-y-from": ot()
            }],
            "mask-image-y-to-pos": [{
                "mask-y-to": ot()
            }],
            "mask-image-y-from-color": [{
                "mask-y-from": D()
            }],
            "mask-image-y-to-color": [{
                "mask-y-to": D()
            }],
            "mask-image-radial": [{
                "mask-radial": [dt, ft]
            }],
            "mask-image-radial-from-pos": [{
                "mask-radial-from": ot()
            }],
            "mask-image-radial-to-pos": [{
                "mask-radial-to": ot()
            }],
            "mask-image-radial-from-color": [{
                "mask-radial-from": D()
            }],
            "mask-image-radial-to-color": [{
                "mask-radial-to": D()
            }],
            "mask-image-radial-shape": [{
                "mask-radial": ["circle", "ellipse"]
            }],
            "mask-image-radial-size": [{
                "mask-radial": [{
                    closest: ["side", "corner"],
                    farthest: ["side", "corner"]
                }]
            }],
            "mask-image-radial-pos": [{
                "mask-radial-at": nt()
            }],
            "mask-image-conic-pos": [{
                "mask-conic": [Et]
            }],
            "mask-image-conic-from-pos": [{
                "mask-conic-from": ot()
            }],
            "mask-image-conic-to-pos": [{
                "mask-conic-to": ot()
            }],
            "mask-image-conic-from-color": [{
                "mask-conic-from": D()
            }],
            "mask-image-conic-to-color": [{
                "mask-conic-to": D()
            }],
            "mask-mode": [{
                mask: ["alpha", "luminance", "match"]
            }],
            "mask-origin": [{
                "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
            }],
            "mask-position": [{
                mask: rt()
            }],
            "mask-repeat": [{
                mask: ht()
            }],
            "mask-size": [{
                mask: w()
            }],
            "mask-type": [{
                "mask-type": ["alpha", "luminance"]
            }],
            "mask-image": [{
                mask: ["none", dt, ft]
            }],
            filter: [{
                filter: ["", "none", dt, ft]
            }],
            blur: [{
                blur: gt()
            }],
            brightness: [{
                brightness: [Et, dt, ft]
            }],
            contrast: [{
                contrast: [Et, dt, ft]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", _, no, eo]
            }],
            "drop-shadow-color": [{
                "drop-shadow": D()
            }],
            grayscale: [{
                grayscale: ["", Et, dt, ft]
            }],
            "hue-rotate": [{
                "hue-rotate": [Et, dt, ft]
            }],
            invert: [{
                invert: ["", Et, dt, ft]
            }],
            saturate: [{
                saturate: [Et, dt, ft]
            }],
            sepia: [{
                sepia: ["", Et, dt, ft]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none", dt, ft]
            }],
            "backdrop-blur": [{
                "backdrop-blur": gt()
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [Et, dt, ft]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [Et, dt, ft]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": ["", Et, dt, ft]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [Et, dt, ft]
            }],
            "backdrop-invert": [{
                "backdrop-invert": ["", Et, dt, ft]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [Et, dt, ft]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [Et, dt, ft]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": ["", Et, dt, ft]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": H()
            }],
            "border-spacing-x": [{
                "border-spacing-x": H()
            }],
            "border-spacing-y": [{
                "border-spacing-y": H()
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", dt, ft]
            }],
            "transition-behavior": [{
                transition: ["normal", "discrete"]
            }],
            duration: [{
                duration: [Et, "initial", dt, ft]
            }],
            ease: [{
                ease: ["linear", "initial", B, dt, ft]
            }],
            delay: [{
                delay: [Et, dt, ft]
            }],
            animate: [{
                animate: ["none", J, dt, ft]
            }],
            backface: [{
                backface: ["hidden", "visible"]
            }],
            perspective: [{
                perspective: [S, dt, ft]
            }],
            "perspective-origin": [{
                "perspective-origin": X()
            }],
            rotate: [{
                rotate: Ct()
            }],
            "rotate-x": [{
                "rotate-x": Ct()
            }],
            "rotate-y": [{
                "rotate-y": Ct()
            }],
            "rotate-z": [{
                "rotate-z": Ct()
            }],
            scale: [{
                scale: le()
            }],
            "scale-x": [{
                "scale-x": le()
            }],
            "scale-y": [{
                "scale-y": le()
            }],
            "scale-z": [{
                "scale-z": le()
            }],
            "scale-3d": ["scale-3d"],
            skew: [{
                skew: ve()
            }],
            "skew-x": [{
                "skew-x": ve()
            }],
            "skew-y": [{
                "skew-y": ve()
            }],
            transform: [{
                transform: [dt, ft, "", "none", "gpu", "cpu"]
            }],
            "transform-origin": [{
                origin: X()
            }],
            "transform-style": [{
                transform: ["3d", "flat"]
            }],
            translate: [{
                translate: se()
            }],
            "translate-x": [{
                "translate-x": se()
            }],
            "translate-y": [{
                "translate-y": se()
            }],
            "translate-z": [{
                "translate-z": se()
            }],
            "translate-none": ["translate-none"],
            accent: [{
                accent: D()
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            "caret-color": [{
                caret: D()
            }],
            "color-scheme": [{
                scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", dt, ft]
            }],
            "field-sizing": [{
                "field-sizing": ["fixed", "content"]
            }],
            "pointer-events": [{
                "pointer-events": ["auto", "none"]
            }],
            resize: [{
                resize: ["none", "", "y", "x"]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": H()
            }],
            "scroll-mx": [{
                "scroll-mx": H()
            }],
            "scroll-my": [{
                "scroll-my": H()
            }],
            "scroll-ms": [{
                "scroll-ms": H()
            }],
            "scroll-me": [{
                "scroll-me": H()
            }],
            "scroll-mt": [{
                "scroll-mt": H()
            }],
            "scroll-mr": [{
                "scroll-mr": H()
            }],
            "scroll-mb": [{
                "scroll-mb": H()
            }],
            "scroll-ml": [{
                "scroll-ml": H()
            }],
            "scroll-p": [{
                "scroll-p": H()
            }],
            "scroll-px": [{
                "scroll-px": H()
            }],
            "scroll-py": [{
                "scroll-py": H()
            }],
            "scroll-ps": [{
                "scroll-ps": H()
            }],
            "scroll-pe": [{
                "scroll-pe": H()
            }],
            "scroll-pt": [{
                "scroll-pt": H()
            }],
            "scroll-pr": [{
                "scroll-pr": H()
            }],
            "scroll-pb": [{
                "scroll-pb": H()
            }],
            "scroll-pl": [{
                "scroll-pl": H()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", dt, ft]
            }],
            fill: [{
                fill: ["none", ...D()]
            }],
            "stroke-w": [{
                stroke: [Et, yl, ir, sf]
            }],
            stroke: [{
                stroke: ["none", ...D()]
            }],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            translate: ["translate-x", "translate-y", "translate-none"],
            "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        },
        orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
}
  , LO = vO(qO);
function jo(...n) {
    return LO(Gg(n))
}
function HO({delayDuration: n=0, ...r}) {
    return O.jsx(aO, {
        "data-loc": "client/src/components/ui/tooltip.tsx:11",
        "data-slot": "tooltip-provider",
        delayDuration: n,
        ...r
    })
}
function QO(n, r) {
    if (n instanceof RegExp)
        return {
            keys: !1,
            pattern: n
        };
    var l, s, u, f, d = [], h = "", m = n.split("/");
    for (m[0] || m.shift(); u = m.shift(); )
        l = u[0],
        l === "*" ? (d.push(l),
        h += u[1] === "?" ? "(?:/(.*))?" : "/(.*)") : l === ":" ? (s = u.indexOf("?", 1),
        f = u.indexOf(".", 1),
        d.push(u.substring(1, ~s ? s : ~f ? f : u.length)),
        h += ~s && !~f ? "(?:/([^/]+?))?" : "/([^/]+?)",
        ~f && (h += (~s ? "?" : "") + "\\" + u.substring(f))) : h += "/" + u;
    return {
        keys: d,
        pattern: new RegExp("^" + h + (r ? "(?=$|/)" : "/?$"),"i")
    }
}
var of = {
    exports: {}
}
  , uf = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ky;
function BO() {
    if (Ky)
        return uf;
    Ky = 1;
    var n = vo();
    function r(v, x) {
        return v === x && (v !== 0 || 1 / v === 1 / x) || v !== v && x !== x
    }
    var l = typeof Object.is == "function" ? Object.is : r
      , s = n.useState
      , u = n.useEffect
      , f = n.useLayoutEffect
      , d = n.useDebugValue;
    function h(v, x) {
        var _ = x()
          , T = s({
            inst: {
                value: _,
                getSnapshot: x
            }
        })
          , S = T[0].inst
          , U = T[1];
        return f(function() {
            S.value = _,
            S.getSnapshot = x,
            m(S) && U({
                inst: S
            })
        }, [v, _, x]),
        u(function() {
            return m(S) && U({
                inst: S
            }),
            v(function() {
                m(S) && U({
                    inst: S
                })
            })
        }, [v]),
        d(_),
        _
    }
    function m(v) {
        var x = v.getSnapshot;
        v = v.value;
        try {
            var _ = x();
            return !l(v, _)
        } catch {
            return !0
        }
    }
    function y(v, x) {
        return x()
    }
    var b = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? y : h;
    return uf.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : b,
    uf
}
var Zy;
function kO() {
    return Zy || (Zy = 1,
    of.exports = BO()),
    of.exports
}
var PO = kO();
const YO = mv.useInsertionEffect
  , GO = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , VO = GO ? C.useLayoutEffect : C.useEffect
  , XO = YO || VO
  , e0 = n => {
    const r = C.useRef([n, (...l) => r[0](...l)]).current;
    return XO( () => {
        r[0] = n
    }
    ),
    r[1]
}
  , KO = "popstate"
  , nd = "pushState"
  , ad = "replaceState"
  , ZO = "hashchange"
  , Jy = [KO, nd, ad, ZO]
  , JO = n => {
    for (const r of Jy)
        addEventListener(r, n);
    return () => {
        for (const r of Jy)
            removeEventListener(r, n)
    }
}
  , n0 = (n, r) => PO.useSyncExternalStore(JO, n, r)
  , FO = () => location.search
  , IO = ({ssrSearch: n=""}={}) => n0(FO, () => n)
  , Fy = () => location.pathname
  , $O = ({ssrPath: n}={}) => n0(Fy, n ? () => n : Fy)
  , WO = (n, {replace: r=!1, state: l=null}={}) => history[r ? ad : nd](l, "", n)
  , t_ = (n={}) => [$O(n), WO]
  , Iy = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[Iy] > "u") {
    for (const n of [nd, ad]) {
        const r = history[n];
        history[n] = function() {
            const l = r.apply(this, arguments)
              , s = new Event(n);
            return s.arguments = arguments,
            dispatchEvent(s),
            l
        }
    }
    Object.defineProperty(window, Iy, {
        value: !0
    })
}
const e_ = (n, r) => r.toLowerCase().indexOf(n.toLowerCase()) ? "~" + r : r.slice(n.length) || "/"
  , a0 = (n="") => n === "/" ? "" : n
  , n_ = (n, r) => n[0] === "~" ? n.slice(1) : a0(r) + n
  , a_ = (n="", r) => e_($y(a0(n)), $y(r))
  , $y = n => {
    try {
        return decodeURI(n)
    } catch {
        return n
    }
}
  , r0 = {
    hook: t_,
    searchHook: IO,
    parser: QO,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: n => n
}
  , i0 = C.createContext(r0)
  , Dl = () => C.useContext(i0)
  , l0 = {}
  , s0 = C.createContext(l0)
  , o0 = () => C.useContext(s0)
  , Do = n => {
    const [r,l] = n.hook(n);
    return [a_(n.base, r), e0( (s, u) => l(n_(s, n.base), u))]
}
  , No = () => Do(Dl())
  , u0 = (n, r, l, s) => {
    const {pattern: u, keys: f} = r instanceof RegExp ? {
        keys: !1,
        pattern: r
    } : n(r || "*", s)
      , d = u.exec(l) || []
      , [h,...m] = d;
    return h !== void 0 ? [!0, ( () => {
        const y = f !== !1 ? Object.fromEntries(f.map( (v, x) => [v, m[x]])) : d.groups;
        let b = {
            ...m
        };
        return y && Object.assign(b, y),
        b
    }
    )(), ...s ? [h] : []] : [!1, null]
}
  , r_ = ({children: n, ...r}) => {
    const l = Dl()
      , s = r.hook ? r0 : l;
    let u = s;
    const [f,d] = r.ssrPath?.split("?") ?? [];
    d && (r.ssrSearch = d,
    r.ssrPath = f),
    r.hrefs = r.hrefs ?? r.hook?.hrefs;
    let h = C.useRef({})
      , m = h.current
      , y = m;
    for (let b in s) {
        const v = b === "base" ? s[b] + (r[b] || "") : r[b] || s[b];
        m === y && v !== y[b] && (h.current = y = {
            ...y
        }),
        y[b] = v,
        (v !== s[b] || v !== u[b]) && (u = y)
    }
    return C.createElement(i0.Provider, {
        value: u,
        children: n
    })
}
  , Wy = ({children: n, component: r}, l) => r ? C.createElement(r, {
    params: l
}) : typeof n == "function" ? n(l) : n
  , i_ = n => {
    let r = C.useRef(l0);
    const l = r.current;
    return r.current = Object.keys(n).length !== Object.keys(l).length || Object.entries(n).some( ([s,u]) => u !== l[s]) ? n : l
}
  , Ca = ({path: n, nest: r, match: l, ...s}) => {
    const u = Dl()
      , [f] = Do(u)
      , [d,h,m] = l ?? u0(u.parser, n, f, r)
      , y = i_({
        ...o0(),
        ...h
    });
    if (!d)
        return null;
    const b = m ? C.createElement(r_, {
        base: m
    }, Wy(s, y)) : Wy(s, y);
    return C.createElement(s0.Provider, {
        value: y,
        children: b
    })
}
  , ur = C.forwardRef( (n, r) => {
    const l = Dl()
      , [s,u] = Do(l)
      , {to: f="", href: d=f, onClick: h, asChild: m, children: y, className: b, replace: v, state: x, ..._} = n
      , T = e0(U => {
        U.ctrlKey || U.metaKey || U.altKey || U.shiftKey || U.button !== 0 || (h?.(U),
        U.defaultPrevented || (U.preventDefault(),
        u(d, n)))
    }
    )
      , S = l.hrefs(d[0] === "~" ? d.slice(1) : l.base + d, l);
    return m && C.isValidElement(y) ? C.cloneElement(y, {
        onClick: T,
        href: S
    }) : C.createElement("a", {
        ..._,
        onClick: T,
        href: S,
        className: b?.call ? b(s === d) : b,
        children: y,
        ref: r
    })
}
)
  , Lf = n => Array.isArray(n) ? n.flatMap(r => Lf(r && r.type === C.Fragment ? r.props.children : r)) : [n]
  , l_ = ({children: n, location: r}) => {
    const l = Dl()
      , [s] = Do(l);
    typeof window < "u" && (window.__WOUTER_ROUTES__ || (window.__WOUTER_ROUTES__ = []),
    Lf(n).forEach(f => {
        if (C.isValidElement(f) && f.props.path) {
            const d = f.props.path;
            window.__WOUTER_ROUTES__.includes(d) || window.__WOUTER_ROUTES__.push(d)
        }
    }
    ));
    for (const u of Lf(n)) {
        let f = 0;
        if (C.isValidElement(u) && (f = u0(l.parser, u.props.path, r || s, u.props.nest))[0])
            return C.cloneElement(u, {
                match: f
            })
    }
    return null
}
;
function s_() {
    const [n,r] = C.useState("")
      , l = Ge.auth.local.requestPasswordReset.useMutation()
      , s = u => {
        u.preventDefault(),
        l.mutate({
            email: n
        })
    }
    ;
    return O.jsxs("main", {
        "data-loc": "client/src/pages/ForgotPassword.tsx:14",
        className: "auth-shell",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/ForgotPassword.tsx:15",
            className: "auth-orb auth-orb--cyan"
        }), O.jsx("div", {
            "data-loc": "client/src/pages/ForgotPassword.tsx:16",
            className: "auth-orb auth-orb--violet"
        }), O.jsxs("section", {
            "data-loc": "client/src/pages/ForgotPassword.tsx:17",
            className: "auth-card",
            "aria-labelledby": "forgot-title",
            children: [O.jsxs("div", {
                "data-loc": "client/src/pages/ForgotPassword.tsx:18",
                className: "auth-brand",
                children: [O.jsx("span", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:18",
                    className: "auth-brand__spark",
                    children: "✦"
                }), O.jsx("span", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:18",
                    children: "Nexus"
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/ForgotPassword.tsx:19",
                className: "auth-heading",
                children: [O.jsx("p", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:19",
                    className: "eyebrow",
                    children: "RECUPERAÇÃO DE ACESSO"
                }), O.jsx("h1", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:19",
                    id: "forgot-title",
                    children: "Redefinir sua senha."
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:19",
                    children: "Informe o e-mail da sua conta. Quando o envio de e-mail estiver ativado, as instruções chegarão por lá."
                })]
            }), O.jsxs("form", {
                "data-loc": "client/src/pages/ForgotPassword.tsx:20",
                className: "auth-form",
                onSubmit: s,
                children: [O.jsxs("label", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:21",
                    children: ["E-mail", O.jsx("input", {
                        "data-loc": "client/src/pages/ForgotPassword.tsx:21",
                        autoComplete: "email",
                        type: "email",
                        value: n,
                        onChange: u => r(u.target.value),
                        placeholder: "voce@exemplo.com",
                        required: !0
                    })]
                }), l.error && O.jsx("p", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:22",
                    className: "form-error",
                    role: "alert",
                    children: l.error.message
                }), l.data && O.jsx("p", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:23",
                    className: "auth-success",
                    role: "status",
                    children: l.data.message
                }), O.jsx("button", {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:24",
                    className: "auth-submit",
                    type: "submit",
                    disabled: !n || l.isPending,
                    children: l.isPending ? "Enviando..." : "Solicitar recuperação"
                })]
            }), O.jsx("div", {
                "data-loc": "client/src/pages/ForgotPassword.tsx:26",
                className: "auth-links",
                children: O.jsx(ur, {
                    "data-loc": "client/src/pages/ForgotPassword.tsx:26",
                    href: "/login",
                    children: "Voltar para entrar"
                })
            })]
        })]
    })
}
function rd(n) {
    const {redirectOnUnauthenticated: r=!1, redirectPath: l} = {}
      , s = Ge.useUtils()
      , u = Ge.auth.me.useQuery(void 0, {
        retry: !1,
        refetchOnWindowFocus: !1
    })
      , f = Ge.auth.logout.useMutation({
        onSuccess: () => {
            s.auth.me.setData(void 0, null)
        }
    })
      , d = C.useCallback(async () => {
        try {
            await f.mutateAsync()
        } catch (m) {
            if (m instanceof ci && m.data?.code === "UNAUTHORIZED")
                return;
            throw m
        } finally {
            s.auth.me.setData(void 0, null),
            await s.auth.me.invalidate()
        }
    }
    , [f, s])
      , h = C.useMemo( () => ({
        user: u.data ?? null,
        loading: u.isLoading || f.isPending,
        error: u.error ?? f.error ?? null,
        isAuthenticated: !!u.data
    }), [u.data, u.error, u.isLoading, f.error, f.isPending]);
    return C.useEffect( () => {
        r && (u.isLoading || f.isPending || h.user || typeof window > "u" || l && window.location.pathname === l || (window.location.href = l || "/login"))
    }
    , [r, l, f.isPending, u.isLoading, h.user]),
    {
        ...h,
        refresh: () => u.refetch(),
        logout: d
    }
}
const po = "Lordchat".trim() || "Lordchat";
function o_() {
    const [,n] = No()
      , {isAuthenticated: r, loading: l} = rd()
      , s = Ge.useUtils()
      , [u,f] = C.useState("")
      , [d,h] = C.useState("")
      , [m,y] = C.useState(!1)
      , [b,v] = C.useState(0)
      , x = Ge.auth.local.login.useMutation({
        onSuccess: async () => {
            await s.auth.me.invalidate(),
            n("/")
        }
        ,
        onError: () => {
            v(S => S + 1)
        }
    });
    C.useEffect( () => {
        !l && r && n("/")
    }
    , [r, l, n]);
    const _ = S => {
        S.preventDefault(),
        x.mutate({
            email: u,
            password: d
        })
    }
      , T = x.error ? ( () => {
        const S = x.error.message.toLowerCase();
        return S.includes("credentials") || S.includes("inválid") || S.includes("senha") || S.includes("email") || S.includes("usuário") ? "E-mail ou senha incorretos. Verifique suas credenciais e tente novamente." : S.includes("bloqueio") || S.includes("lock") || S.includes("tentativ") ? "Muitas tentativas incorretas. Conta temporariamente bloqueada por segurança (tente novamente em alguns minutos)." : x.error.message
    }
    )() : null;
    return O.jsxs("main", {
        "data-loc": "client/src/pages/Login.tsx:47",
        className: "auth-shell",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/Login.tsx:48",
            className: "auth-orb auth-orb--cyan"
        }), O.jsx("div", {
            "data-loc": "client/src/pages/Login.tsx:49",
            className: "auth-orb auth-orb--violet"
        }), O.jsxs("section", {
            "data-loc": "client/src/pages/Login.tsx:50",
            className: `auth-card ${x.error ? "auth-card--shake" : ""}`,
            "aria-labelledby": "login-title",
            children: [O.jsxs("div", {
                "data-loc": "client/src/pages/Login.tsx:51",
                className: "auth-brand",
                children: [O.jsx("span", {
                    "data-loc": "client/src/pages/Login.tsx:51",
                    className: "auth-brand__spark",
                    children: "✦"
                }), O.jsx("span", {
                    "data-loc": "client/src/pages/Login.tsx:51",
                    children: po
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/Login.tsx:52",
                className: "auth-heading",
                children: [O.jsx("p", {
                    "data-loc": "client/src/pages/Login.tsx:53",
                    className: "eyebrow",
                    children: "BEM-VINDO DE VOLTA"
                }), O.jsx("h1", {
                    "data-loc": "client/src/pages/Login.tsx:54",
                    id: "login-title",
                    children: "Entre na sua comunidade."
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/Login.tsx:55",
                    children: "Use seu e-mail e senha para acessar conversas, servidores e amizades."
                })]
            }), O.jsxs("form", {
                "data-loc": "client/src/pages/Login.tsx:57",
                className: "auth-form",
                onSubmit: _,
                children: [O.jsxs("label", {
                    "data-loc": "client/src/pages/Login.tsx:58",
                    className: x.error ? "label-error" : "",
                    children: ["E-mail", O.jsx("input", {
                        "data-loc": "client/src/pages/Login.tsx:60",
                        autoComplete: "email",
                        type: "email",
                        value: u,
                        onChange: S => f(S.target.value),
                        placeholder: "voce@exemplo.com",
                        required: !0,
                        className: x.error ? "input-error" : ""
                    })]
                }), O.jsxs("label", {
                    "data-loc": "client/src/pages/Login.tsx:70",
                    className: x.error ? "label-error" : "",
                    children: ["Senha", O.jsxs("div", {
                        "data-loc": "client/src/pages/Login.tsx:72",
                        className: "password-input-wrapper",
                        children: [O.jsx("input", {
                            "data-loc": "client/src/pages/Login.tsx:73",
                            autoComplete: "current-password",
                            type: m ? "text" : "password",
                            value: d,
                            onChange: S => h(S.target.value),
                            placeholder: "Sua senha",
                            required: !0,
                            className: x.error ? "input-error password-field" : "password-field"
                        }), O.jsx("button", {
                            "data-loc": "client/src/pages/Login.tsx:82",
                            type: "button",
                            className: "password-toggle-btn",
                            onClick: () => y(S => !S),
                            "aria-label": m ? "Ocultar senha" : "Exibir senha",
                            title: m ? "Ocultar senha" : "Exibir senha",
                            children: m ? O.jsxs("svg", {
                                "data-loc": "client/src/pages/Login.tsx:90",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [O.jsx("path", {
                                    "data-loc": "client/src/pages/Login.tsx:91",
                                    d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"
                                }), O.jsx("line", {
                                    "data-loc": "client/src/pages/Login.tsx:92",
                                    x1: "1",
                                    y1: "1",
                                    x2: "23",
                                    y2: "23"
                                })]
                            }) : O.jsxs("svg", {
                                "data-loc": "client/src/pages/Login.tsx:95",
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "18",
                                height: "18",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                stroke: "currentColor",
                                strokeWidth: "2",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                children: [O.jsx("path", {
                                    "data-loc": "client/src/pages/Login.tsx:96",
                                    d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
                                }), O.jsx("circle", {
                                    "data-loc": "client/src/pages/Login.tsx:97",
                                    cx: "12",
                                    cy: "12",
                                    r: "3"
                                })]
                            })
                        })]
                    })]
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/Login.tsx:103",
                    className: "auth-field-hint",
                    children: "Por segurança, cinco tentativas incorretas bloqueiam temporariamente novas entradas."
                }), T && O.jsxs("div", {
                    "data-loc": "client/src/pages/Login.tsx:105",
                    className: "form-error-banner",
                    role: "alert",
                    children: [O.jsx("span", {
                        "data-loc": "client/src/pages/Login.tsx:106",
                        className: "form-error-icon",
                        children: "⚠️"
                    }), O.jsx("span", {
                        "data-loc": "client/src/pages/Login.tsx:107",
                        children: T
                    })]
                }), O.jsx("button", {
                    "data-loc": "client/src/pages/Login.tsx:110",
                    className: "auth-submit",
                    type: "submit",
                    disabled: !u || !d || x.isPending,
                    children: x.isPending ? "Entrando..." : `Entrar no ${po}`
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/Login.tsx:114",
                className: "auth-links",
                children: [O.jsx(ur, {
                    "data-loc": "client/src/pages/Login.tsx:115",
                    href: "/forgot-password",
                    children: "Esqueci minha senha"
                }), O.jsxs("span", {
                    "data-loc": "client/src/pages/Login.tsx:116",
                    children: ["Não possui uma conta? ", O.jsx(ur, {
                        "data-loc": "client/src/pages/Login.tsx:116",
                        href: "/register",
                        children: "Criar conta"
                    })]
                })]
            })]
        }, b)]
    })
}
const tv = n => typeof n == "boolean" ? `${n}` : n === 0 ? "0" : n
  , ev = Gg
  , u_ = (n, r) => l => {
    var s;
    if (r?.variants == null)
        return ev(n, l?.class, l?.className);
    const {variants: u, defaultVariants: f} = r
      , d = Object.keys(u).map(y => {
        const b = l?.[y]
          , v = f?.[y];
        if (b === null)
            return null;
        const x = tv(b) || tv(v);
        return u[y][x]
    }
    )
      , h = l && Object.entries(l).reduce( (y, b) => {
        let[v,x] = b;
        return x === void 0 || (y[v] = x),
        y
    }
    , {})
      , m = r == null || (s = r.compoundVariants) === null || s === void 0 ? void 0 : s.reduce( (y, b) => {
        let {class: v, className: x, ..._} = b;
        return Object.entries(_).every(T => {
            let[S,U] = T;
            return Array.isArray(U) ? U.includes({
                ...f,
                ...h
            }[S]) : {
                ...f,
                ...h
            }[S] === U
        }
        ) ? [...y, v, x] : y
    }
    , []);
    return ev(n, d, m, l?.class, l?.className)
}
  , c_ = u_("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-transparent shadow-xs hover:bg-accent dark:bg-transparent dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function f_({className: n, variant: r, size: l, asChild: s=!1, ...u}) {
    const f = s ? Iw : "button";
    return O.jsx(f, {
        "data-loc": "client/src/components/ui/button.tsx:52",
        "data-slot": "button",
        className: jo(c_({
            variant: r,
            size: l,
            className: n
        })),
        ...u
    })
}
function d_({className: n, ...r}) {
    return O.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:7",
        "data-slot": "card",
        className: jo("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", n),
        ...r
    })
}
function h_({className: n, ...r}) {
    return O.jsx("div", {
        "data-loc": "client/src/components/ui/card.tsx:66",
        "data-slot": "card-content",
        className: jo("px-6", n),
        ...r
    })
}
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m_ = n => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , c0 = (...n) => n.filter( (r, l, s) => !!r && s.indexOf(r) === l).join(" ");
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var p_ = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y_ = C.forwardRef( ({color: n="currentColor", size: r=24, strokeWidth: l=2, absoluteStrokeWidth: s, className: u="", children: f, iconNode: d, ...h}, m) => C.createElement("svg", {
    ref: m,
    ...p_,
    width: r,
    height: r,
    stroke: n,
    strokeWidth: s ? Number(l) * 24 / Number(r) : l,
    className: c0("lucide", u),
    ...h
}, [...d.map( ([y,b]) => C.createElement(y, b)), ...Array.isArray(f) ? f : [f]]));
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hn = (n, r) => {
    const l = C.forwardRef( ({className: s, ...u}, f) => C.createElement(y_, {
        ref: f,
        iconNode: r,
        className: c0(`lucide-${m_(n)}`, s),
        ...u
    }));
    return l.displayName = `${n}`,
    l
}
;
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const v_ = hn("ArrowRight", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}], ["path", {
    d: "m12 5 7 7-7 7",
    key: "xquz4c"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const g_ = hn("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const b_ = hn("CircleAlert", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "8",
    y2: "12",
    key: "1pkeuh"
}], ["line", {
    x1: "12",
    x2: "12.01",
    y1: "16",
    y2: "16",
    key: "4dfq90"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const x_ = hn("Clock3", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["polyline", {
    points: "12 6 12 12 16.5 12",
    key: "1aq6pp"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const S_ = hn("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const w_ = hn("House", [["path", {
    d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
    key: "5wwlr5"
}], ["path", {
    d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
    key: "1d0kgt"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const E_ = hn("LogIn", [["path", {
    d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",
    key: "u53s6r"
}], ["polyline", {
    points: "10 17 15 12 10 7",
    key: "1ail0h"
}], ["line", {
    x1: "15",
    x2: "3",
    y1: "12",
    y2: "12",
    key: "v6grx8"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const O_ = hn("RotateCcw", [["path", {
    d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
    key: "1357e3"
}], ["path", {
    d: "M3 3v5h5",
    key: "1xhq8a"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __ = hn("Server", [["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "2",
    rx: "2",
    ry: "2",
    key: "ngkwjq"
}], ["rect", {
    width: "20",
    height: "8",
    x: "2",
    y: "14",
    rx: "2",
    ry: "2",
    key: "iecqi9"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "6",
    y2: "6",
    key: "16zg32"
}], ["line", {
    x1: "6",
    x2: "6.01",
    y1: "18",
    y2: "18",
    key: "nzw8ys"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A_ = hn("Sparkles", [["path", {
    d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
    key: "4pj2yx"
}], ["path", {
    d: "M20 3v4",
    key: "1olli1"
}], ["path", {
    d: "M22 5h-4",
    key: "1gvqau"
}], ["path", {
    d: "M4 17v2",
    key: "vumght"
}], ["path", {
    d: "M5 18H3",
    key: "zchphs"
}]]);
/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const f0 = hn("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
function nv() {
    const [,n] = No()
      , r = () => {
        n("/")
    }
    ;
    return O.jsx("div", {
        "data-loc": "client/src/pages/NotFound.tsx:14",
        className: "min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100",
        children: O.jsx(d_, {
            "data-loc": "client/src/pages/NotFound.tsx:15",
            className: "w-full max-w-lg mx-4 shadow-lg border-0 bg-white/80 backdrop-blur-sm",
            children: O.jsxs(h_, {
                "data-loc": "client/src/pages/NotFound.tsx:16",
                className: "pt-8 pb-8 text-center",
                children: [O.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:17",
                    className: "flex justify-center mb-6",
                    children: O.jsxs("div", {
                        "data-loc": "client/src/pages/NotFound.tsx:18",
                        className: "relative",
                        children: [O.jsx("div", {
                            "data-loc": "client/src/pages/NotFound.tsx:19",
                            className: "absolute inset-0 bg-red-100 rounded-full animate-pulse"
                        }), O.jsx(b_, {
                            "data-loc": "client/src/pages/NotFound.tsx:20",
                            className: "relative h-16 w-16 text-red-500"
                        })]
                    })
                }), O.jsx("h1", {
                    "data-loc": "client/src/pages/NotFound.tsx:24",
                    className: "text-4xl font-bold text-slate-900 mb-2",
                    children: "404"
                }), O.jsx("h2", {
                    "data-loc": "client/src/pages/NotFound.tsx:26",
                    className: "text-xl font-semibold text-slate-700 mb-4",
                    children: "Page Not Found"
                }), O.jsxs("p", {
                    "data-loc": "client/src/pages/NotFound.tsx:30",
                    className: "text-slate-600 mb-8 leading-relaxed",
                    children: ["Sorry, the page you are looking for doesn't exist.", O.jsx("br", {
                        "data-loc": "client/src/pages/NotFound.tsx:32"
                    }), "It may have been moved or deleted."]
                }), O.jsx("div", {
                    "data-loc": "client/src/pages/NotFound.tsx:36",
                    id: "not-found-button-group",
                    className: "flex flex-col sm:flex-row gap-3 justify-center",
                    children: O.jsxs(f_, {
                        "data-loc": "client/src/pages/NotFound.tsx:40",
                        onClick: r,
                        className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg",
                        children: [O.jsx(w_, {
                            "data-loc": "client/src/pages/NotFound.tsx:44",
                            className: "w-4 h-4 mr-2"
                        }), "Go Home"]
                    })
                })]
            })
        })
    })
}
function T_() {
    const [,n] = No()
      , {isAuthenticated: r, loading: l} = rd()
      , s = Ge.useUtils()
      , [u,f] = C.useState("")
      , [d,h] = C.useState("")
      , [m,y] = C.useState("")
      , [b,v] = C.useState("")
      , [x,_] = C.useState(null)
      , T = Ge.auth.local.register.useMutation({
        onSuccess: async () => {
            await s.auth.me.invalidate(),
            n("/")
        }
    });
    C.useEffect( () => {
        !l && r && n("/")
    }
    , [r, l, n]);
    const S = U => {
        if (U.preventDefault(),
        m !== b) {
            _("As senhas precisam ser iguais.");
            return
        }
        _(null),
        T.mutate({
            displayName: u,
            email: d,
            password: m
        })
    }
    ;
    return O.jsxs("main", {
        "data-loc": "client/src/pages/Register.tsx:37",
        className: "auth-shell",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/Register.tsx:38",
            className: "auth-orb auth-orb--cyan"
        }), O.jsx("div", {
            "data-loc": "client/src/pages/Register.tsx:39",
            className: "auth-orb auth-orb--violet"
        }), O.jsxs("section", {
            "data-loc": "client/src/pages/Register.tsx:40",
            className: "auth-card",
            "aria-labelledby": "register-title",
            children: [O.jsxs("div", {
                "data-loc": "client/src/pages/Register.tsx:41",
                className: "auth-brand",
                children: [O.jsx("span", {
                    "data-loc": "client/src/pages/Register.tsx:41",
                    className: "auth-brand__spark",
                    children: "✦"
                }), O.jsx("span", {
                    "data-loc": "client/src/pages/Register.tsx:41",
                    children: "Nexus"
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/Register.tsx:42",
                className: "auth-heading",
                children: [O.jsx("p", {
                    "data-loc": "client/src/pages/Register.tsx:42",
                    className: "eyebrow",
                    children: "SEU ESPAÇO, DO SEU JEITO"
                }), O.jsx("h1", {
                    "data-loc": "client/src/pages/Register.tsx:42",
                    id: "register-title",
                    children: "Crie sua conta."
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/Register.tsx:42",
                    children: "Comece a organizar suas comunidades e conversas em um único lugar."
                })]
            }), O.jsxs("form", {
                "data-loc": "client/src/pages/Register.tsx:43",
                className: "auth-form",
                onSubmit: S,
                children: [O.jsxs("label", {
                    "data-loc": "client/src/pages/Register.tsx:44",
                    children: ["Nome de exibição", O.jsx("input", {
                        "data-loc": "client/src/pages/Register.tsx:44",
                        autoComplete: "name",
                        value: u,
                        onChange: U => f(U.target.value),
                        placeholder: "Como as pessoas vão ver você",
                        minLength: 2,
                        maxLength: 64,
                        required: !0
                    })]
                }), O.jsxs("label", {
                    "data-loc": "client/src/pages/Register.tsx:45",
                    children: ["E-mail", O.jsx("input", {
                        "data-loc": "client/src/pages/Register.tsx:45",
                        autoComplete: "email",
                        type: "email",
                        value: d,
                        onChange: U => h(U.target.value),
                        placeholder: "voce@exemplo.com",
                        required: !0
                    })]
                }), O.jsxs("label", {
                    "data-loc": "client/src/pages/Register.tsx:46",
                    children: ["Senha", O.jsx("input", {
                        "data-loc": "client/src/pages/Register.tsx:46",
                        autoComplete: "new-password",
                        type: "password",
                        value: m,
                        onChange: U => y(U.target.value),
                        placeholder: "12+ caracteres, maiúsculas, minúsculas e números",
                        minLength: 12,
                        maxLength: 128,
                        required: !0
                    })]
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/Register.tsx:47",
                    className: "auth-field-hint",
                    children: "Use ao menos 12 caracteres, incluindo letra maiúscula, minúscula e número."
                }), O.jsxs("label", {
                    "data-loc": "client/src/pages/Register.tsx:48",
                    children: ["Confirmar senha", O.jsx("input", {
                        "data-loc": "client/src/pages/Register.tsx:48",
                        autoComplete: "new-password",
                        type: "password",
                        value: b,
                        onChange: U => v(U.target.value),
                        placeholder: "Repita sua senha",
                        required: !0
                    })]
                }), (x || T.error) && O.jsx("p", {
                    "data-loc": "client/src/pages/Register.tsx:49",
                    className: "form-error",
                    role: "alert",
                    children: x || T.error?.message
                }), O.jsx("button", {
                    "data-loc": "client/src/pages/Register.tsx:50",
                    className: "auth-submit",
                    type: "submit",
                    disabled: !u || !d || !m || !b || T.isPending,
                    children: T.isPending ? "Criando conta..." : "Criar conta"
                })]
            }), O.jsx("div", {
                "data-loc": "client/src/pages/Register.tsx:52",
                className: "auth-links",
                children: O.jsxs("span", {
                    "data-loc": "client/src/pages/Register.tsx:52",
                    children: ["Já possui uma conta? ", O.jsx(ur, {
                        "data-loc": "client/src/pages/Register.tsx:52",
                        href: "/login",
                        children: "Entrar"
                    })]
                })
            })]
        })]
    })
}
function C_(n) {
    const r = new URLSearchParams(n).get("token")?.trim() ?? "";
    return r.length >= 32 ? r : null
}
function R_() {
    const n = C_(window.location.search)
      , [r,l] = C.useState("")
      , [s,u] = C.useState("")
      , [f,d] = C.useState(null)
      , h = Ge.auth.local.resetPassword.useMutation()
      , m = b => {
        if (b.preventDefault(),
        !!n) {
            if (r !== s) {
                d("As senhas precisam ser iguais.");
                return
            }
            d(null),
            h.mutate({
                token: n,
                password: r
            })
        }
    }
      , y = f || h.error?.message || (n ? null : "O link de recuperação está ausente ou é inválido. Solicite um novo link.");
    return O.jsxs("main", {
        "data-loc": "client/src/pages/ResetPassword.tsx:27",
        className: "auth-shell",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/ResetPassword.tsx:28",
            className: "auth-orb auth-orb--cyan"
        }), O.jsx("div", {
            "data-loc": "client/src/pages/ResetPassword.tsx:29",
            className: "auth-orb auth-orb--violet"
        }), O.jsxs("section", {
            "data-loc": "client/src/pages/ResetPassword.tsx:30",
            className: "auth-card",
            "aria-labelledby": "reset-title",
            children: [O.jsxs("div", {
                "data-loc": "client/src/pages/ResetPassword.tsx:31",
                className: "auth-brand",
                children: [O.jsx("span", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:31",
                    className: "auth-brand__spark",
                    children: "✦"
                }), O.jsx("span", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:31",
                    children: "Nexus"
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/ResetPassword.tsx:32",
                className: "auth-heading",
                children: [O.jsx("p", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:32",
                    className: "eyebrow",
                    children: "RECUPERAÇÃO DE ACESSO"
                }), O.jsx("h1", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:32",
                    id: "reset-title",
                    children: "Crie uma nova senha."
                }), O.jsx("p", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:32",
                    children: "Escolha uma senha segura para voltar a acessar sua conta."
                })]
            }), h.data ? O.jsxs("div", {
                "data-loc": "client/src/pages/ResetPassword.tsx:34",
                className: "auth-form",
                children: [O.jsx("p", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:34",
                    className: "auth-success",
                    role: "status",
                    children: "Senha redefinida com sucesso. Você já pode entrar no Nexus."
                }), O.jsx("div", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:34",
                    className: "auth-links",
                    children: O.jsx(ur, {
                        "data-loc": "client/src/pages/ResetPassword.tsx:34",
                        href: "/login",
                        children: "Ir para entrar"
                    })
                })]
            }) : O.jsxs("form", {
                "data-loc": "client/src/pages/ResetPassword.tsx:36",
                className: "auth-form",
                onSubmit: m,
                children: [O.jsxs("label", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:37",
                    children: ["Nova senha", O.jsx("input", {
                        "data-loc": "client/src/pages/ResetPassword.tsx:37",
                        autoComplete: "new-password",
                        type: "password",
                        value: r,
                        onChange: b => l(b.target.value),
                        placeholder: "Ao menos 10 caracteres, letras e números",
                        required: !0,
                        disabled: !n
                    })]
                }), O.jsxs("label", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:38",
                    children: ["Confirmar nova senha", O.jsx("input", {
                        "data-loc": "client/src/pages/ResetPassword.tsx:38",
                        autoComplete: "new-password",
                        type: "password",
                        value: s,
                        onChange: b => u(b.target.value),
                        placeholder: "Repita sua nova senha",
                        required: !0,
                        disabled: !n
                    })]
                }), y && O.jsx("p", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:39",
                    className: "form-error",
                    role: "alert",
                    children: y
                }), O.jsx("button", {
                    "data-loc": "client/src/pages/ResetPassword.tsx:40",
                    className: "auth-submit",
                    type: "submit",
                    disabled: !n || !r || !s || h.isPending,
                    children: h.isPending ? "Redefinindo..." : "Redefinir senha"
                })]
            }), O.jsxs("div", {
                "data-loc": "client/src/pages/ResetPassword.tsx:43",
                className: "auth-links",
                children: [O.jsx(ur, {
                    "data-loc": "client/src/pages/ResetPassword.tsx:43",
                    href: "/forgot-password",
                    children: "Solicitar novo link"
                }), O.jsx(ur, {
                    "data-loc": "client/src/pages/ResetPassword.tsx:43",
                    href: "/login",
                    children: "Voltar para entrar"
                })]
            })]
        })]
    })
}
class M_ extends C.Component {
    constructor(r) {
        super(r),
        this.state = {
            hasError: !1,
            error: null
        }
    }
    static getDerivedStateFromError(r) {
        return {
            hasError: !0,
            error: r
        }
    }
    render() {
        return this.state.hasError ? O.jsx("div", {
            "data-loc": "client/src/components/ErrorBoundary.tsx:27",
            className: "flex items-center justify-center min-h-screen p-8 bg-background",
            children: O.jsxs("div", {
                "data-loc": "client/src/components/ErrorBoundary.tsx:28",
                className: "flex flex-col items-center w-full max-w-2xl p-8",
                children: [O.jsx(f0, {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:29",
                    size: 48,
                    className: "text-destructive mb-6 flex-shrink-0"
                }), O.jsx("h2", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:34",
                    className: "text-xl mb-4",
                    children: "An unexpected error occurred."
                }), O.jsx("div", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:36",
                    className: "p-4 w-full rounded bg-muted overflow-auto mb-6",
                    children: O.jsx("pre", {
                        "data-loc": "client/src/components/ErrorBoundary.tsx:37",
                        className: "text-sm text-muted-foreground whitespace-break-spaces",
                        children: this.state.error?.stack
                    })
                }), O.jsxs("button", {
                    "data-loc": "client/src/components/ErrorBoundary.tsx:42",
                    onClick: () => window.location.reload(),
                    className: jo("flex items-center gap-2 px-4 py-2 rounded-lg", "bg-primary text-primary-foreground", "hover:opacity-90 cursor-pointer"),
                    children: [O.jsx(O_, {
                        "data-loc": "client/src/components/ErrorBoundary.tsx:50",
                        size: 16
                    }), "Reload Page"]
                })]
            })
        }) : this.props.children
    }
}
const j_ = C.createContext(void 0);
function D_({children: n, defaultTheme: r="light", switchable: l=!1}) {
    const s = new URLSearchParams(window.location.search).get("theme")
      , u = s === "light" || s === "dark" ? s : null
      , [f,d] = C.useState( () => u || l && localStorage.getItem("theme") || r);
    C.useEffect( () => {
        const m = document.documentElement;
        f === "dark" ? m.classList.add("dark") : m.classList.remove("dark"),
        l && !u && localStorage.setItem("theme", f)
    }
    , [f, l, u]);
    const h = l ? () => {
        d(m => m === "light" ? "dark" : "light")
    }
    : void 0;
    return O.jsx(j_.Provider, {
        "data-loc": "client/src/contexts/ThemeContext.tsx:55",
        value: {
            theme: f,
            toggleTheme: h,
            switchable: l
        },
        children: n
    })
}
function N_() {
    const [n,r] = C.useState("ESTE SITE FOI HACKEADO! NÃO EXISTE MAIS LORDCHAT");
    return C.useEffect( () => {
        const l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*-_<>[]"
          , s = setInterval( () => {
            if (Math.random() > .7) {
                const u = "ESTE SITE FOI HACKEADO! NÃO EXISTE MAIS LORDCHAT".split("").map(f => Math.random() > .85 ? l[Math.floor(Math.random() * l.length)] : f).join("");
                r(u),
                setTimeout( () => r("ESTE SITE FOI HACKEADO! NÃO EXISTE MAIS LORDCHAT"), 120)
            }
        }
        , 2200);
        return () => clearInterval(s)
    }
    , []),
    O.jsxs("div", {
        "data-loc": "client/src/pages/Home.tsx:22",
        style: {
            minHeight: "100vh",
            background: "#030305",
            color: "#00ff66",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            fontFamily: "'Courier New', Courier, monospace",
            textAlign: "center",
            overflow: "hidden",
            position: "relative"
        },
        children: [O.jsx("style", {
            "data-loc": "client/src/pages/Home.tsx:36",
            children: `
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        @keyframes flicker {
          0% { opacity: 0.97; }
          50% { opacity: 1; }
          100% { opacity: 0.95; }
        }
        .scanline {
          position: absolute;
          top: 0; left: 0; right: 0; height: 4px;
          background: rgba(0, 255, 102, 0.2);
          box-shadow: 0 0 10px rgba(0, 255, 102, 0.5);
          animation: scanline 6s linear infinite;
          pointer-events: none;
        }
        .terminal-box {
          background: rgba(5, 8, 5, 0.9);
          border: 1px solid #00ff66;
          box-shadow: 0 0 25px rgba(0, 255, 102, 0.25), inset 0 0 15px rgba(0, 255, 102, 0.1);
          border-radius: 6px;
          padding: 3rem 2.5rem;
          max-width: 680px;
          position: relative;
          animation: flicker 0.15s infinite;
        }
        .glitch-title {
          font-size: 1.85rem;
          font-weight: 900;
          color: #ff3333;
          text-shadow: 2px 0 #00ff66, -2px 0 #00ffff;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
        }
        .glitch-body {
          font-size: 1.35rem;
          font-weight: 700;
          color: #00ff66;
          text-shadow: 0 0 8px rgba(0, 255, 102, 0.6);
          line-height: 1.6;
          margin-bottom: 2.5rem;
        }
        .signature {
          border-top: 1px dashed rgba(0, 255, 102, 0.3);
          padding-top: 1.5rem;
          font-size: 1.05rem;
          color: #00ffff;
          letter-spacing: 0.05em;
        }
      `
        }), O.jsx("div", {
            "data-loc": "client/src/pages/Home.tsx:89",
            className: "scanline"
        }), O.jsxs("div", {
            "data-loc": "client/src/pages/Home.tsx:91",
            className: "terminal-box",
            children: [O.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:92",
                className: "glitch-title",
                children: "⚠️ SYSTEM BREACH DETECTED ⚠️"
            }), O.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:95",
                className: "glitch-body",
                children: n
            }), O.jsx("div", {
                "data-loc": "client/src/pages/Home.tsx:98",
                className: "signature",
                children: "> assigned by myst // root access granted"
            })]
        })]
    })
}
function z_(n) {
    return n ? new Intl.DateTimeFormat("pt-BR",{
        dateStyle: "medium",
        timeStyle: "short"
    }).format(new Date(n)) : "sem data de expiração"
}
function U_() {
    const {code: n=""} = o0()
      , [,r] = No()
      , {isAuthenticated: l, loading: s} = rd()
      , [u,f] = C.useState(!1)
      , d = Ge.community.getInvite.useQuery({
        code: n
    }, {
        enabled: !!n,
        retry: !1
    })
      , h = Ge.community.joinByInvite.useMutation({
        onSuccess: v => {
            Is.success("Você entrou no servidor!"),
            r(`/?server=${v.serverId}`)
        }
        ,
        onError: v => Is.error(v.message)
    })
      , m = async () => {
        try {
            await navigator.clipboard.writeText(n),
            f(!0),
            Is.success("Código do convite copiado."),
            window.setTimeout( () => f(!1), 1800)
        } catch {
            Is.error("Não foi possível copiar o convite.")
        }
    }
    ;
    if (d.isLoading || s)
        return O.jsx(cf, {
            "data-loc": "client/src/pages/InvitePage.tsx:46",
            children: O.jsx("div", {
                "data-loc": "client/src/pages/InvitePage.tsx:46",
                className: "invite-card__loading",
                children: "Carregando convite..."
            })
        });
    if (d.isError || !d.data)
        return O.jsxs(cf, {
            "data-loc": "client/src/pages/InvitePage.tsx:51",
            children: [O.jsx("div", {
                "data-loc": "client/src/pages/InvitePage.tsx:52",
                className: "invite-card__icon invite-card__icon--error",
                children: O.jsx(f0, {
                    "data-loc": "client/src/pages/InvitePage.tsx:52",
                    "aria-hidden": "true"
                })
            }), O.jsxs("p", {
                "data-loc": "client/src/pages/InvitePage.tsx:53",
                className: "invite-card__eyebrow",
                children: ["CONVITE DO ", po.toUpperCase()]
            }), O.jsx("h1", {
                "data-loc": "client/src/pages/InvitePage.tsx:54",
                children: "Este convite não está disponível"
            }), O.jsx("p", {
                "data-loc": "client/src/pages/InvitePage.tsx:55",
                className: "invite-card__description",
                children: "O link pode estar incorreto, ter expirado ou não existir mais."
            }), O.jsx("button", {
                "data-loc": "client/src/pages/InvitePage.tsx:56",
                className: "invite-button invite-button--secondary",
                onClick: () => r("/"),
                children: "Ir para o Lordchat"
            })]
        });
    const y = d.data
      , b = y.available;
    return O.jsxs(cf, {
        "data-loc": "client/src/pages/InvitePage.tsx:65",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/InvitePage.tsx:66",
            className: "invite-card__icon",
            children: O.jsx(__, {
                "data-loc": "client/src/pages/InvitePage.tsx:66",
                "aria-hidden": "true"
            })
        }), O.jsx("p", {
            "data-loc": "client/src/pages/InvitePage.tsx:67",
            className: "invite-card__eyebrow",
            children: "VOCÊ FOI CONVIDADO PARA ENTRAR EM"
        }), O.jsx("h1", {
            "data-loc": "client/src/pages/InvitePage.tsx:68",
            children: y.serverName
        }), y.serverDescription && O.jsx("p", {
            "data-loc": "client/src/pages/InvitePage.tsx:69",
            className: "invite-card__description",
            children: y.serverDescription
        }), O.jsxs("div", {
            "data-loc": "client/src/pages/InvitePage.tsx:70",
            className: "invite-card__meta",
            children: [O.jsxs("span", {
                "data-loc": "client/src/pages/InvitePage.tsx:71",
                children: [O.jsx(x_, {
                    "data-loc": "client/src/pages/InvitePage.tsx:71",
                    "aria-hidden": "true"
                }), " ", b ? `Expira em ${z_(y.expiresAt)}` : "Convite expirado ou esgotado"]
            }), y.maxUses !== null && O.jsxs("span", {
                "data-loc": "client/src/pages/InvitePage.tsx:72",
                children: [y.useCount, "/", y.maxUses, " usos"]
            })]
        }), b ? l ? O.jsx("button", {
            "data-loc": "client/src/pages/InvitePage.tsx:76",
            className: "invite-button",
            disabled: h.isPending,
            onClick: () => h.mutate({
                code: n
            }),
            children: h.isPending ? "Entrando..." : O.jsxs(O.Fragment, {
                children: ["Entrar no servidor ", O.jsx(v_, {
                    "data-loc": "client/src/pages/InvitePage.tsx:77",
                    "aria-hidden": "true"
                })]
            })
        }) : O.jsxs("button", {
            "data-loc": "client/src/pages/InvitePage.tsx:80",
            className: "invite-button",
            onClick: () => {
                window.location.href = `/login?returnTo=${encodeURIComponent(`/invite/${n}`)}`
            }
            ,
            children: [O.jsx(E_, {
                "data-loc": "client/src/pages/InvitePage.tsx:81",
                "aria-hidden": "true"
            }), " Fazer login para entrar"]
        }) : O.jsx("button", {
            "data-loc": "client/src/pages/InvitePage.tsx:85",
            className: "invite-button invite-button--secondary",
            disabled: !0,
            children: "Convite indisponível"
        }), O.jsxs("button", {
            "data-loc": "client/src/pages/InvitePage.tsx:87",
            className: "invite-code-button",
            onClick: m,
            children: [u ? O.jsx(g_, {
                "data-loc": "client/src/pages/InvitePage.tsx:88",
                "aria-hidden": "true"
            }) : O.jsx(S_, {
                "data-loc": "client/src/pages/InvitePage.tsx:88",
                "aria-hidden": "true"
            }), " ", u ? "Copiado" : `Copiar código ${n}`]
        })]
    })
}
function cf({children: n}) {
    return O.jsxs("main", {
        "data-loc": "client/src/pages/InvitePage.tsx:96",
        className: "invite-page",
        children: [O.jsx("div", {
            "data-loc": "client/src/pages/InvitePage.tsx:97",
            className: "invite-page__glow invite-page__glow--one"
        }), O.jsx("div", {
            "data-loc": "client/src/pages/InvitePage.tsx:98",
            className: "invite-page__glow invite-page__glow--two"
        }), O.jsxs("header", {
            "data-loc": "client/src/pages/InvitePage.tsx:99",
            className: "invite-page__brand",
            children: [O.jsx(A_, {
                "data-loc": "client/src/pages/InvitePage.tsx:99",
                "aria-hidden": "true"
            }), O.jsx("strong", {
                "data-loc": "client/src/pages/InvitePage.tsx:99",
                children: po
            })]
        }), O.jsx("section", {
            "data-loc": "client/src/pages/InvitePage.tsx:100",
            className: "invite-card",
            children: n
        }), O.jsx("p", {
            "data-loc": "client/src/pages/InvitePage.tsx:101",
            className: "invite-page__footer",
            children: "Convites são gerados por membros autorizados da comunidade."
        })]
    })
}
function q_() {
    return O.jsxs(l_, {
        "data-loc": "client/src/App.tsx:17",
        children: [O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:18",
            path: "/login",
            component: o_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:19",
            path: "/register",
            component: T_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:20",
            path: "/forgot-password",
            component: s_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:21",
            path: "/reset-password",
            component: R_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:22",
            path: "/invite/:code",
            component: U_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:23",
            path: "/",
            component: N_
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:24",
            path: "/404",
            component: nv
        }), O.jsx(Ca, {
            "data-loc": "client/src/App.tsx:26",
            component: nv
        })]
    })
}
function L_() {
    return O.jsx(M_, {
        "data-loc": "client/src/App.tsx:38",
        children: O.jsx(D_, {
            "data-loc": "client/src/App.tsx:39",
            defaultTheme: "dark",
            switchable: !0,
            children: O.jsxs(HO, {
                "data-loc": "client/src/App.tsx:43",
                children: [O.jsx(Jw, {
                    "data-loc": "client/src/App.tsx:44"
                }), O.jsx(q_, {
                    "data-loc": "client/src/App.tsx:45"
                })]
            })
        })
    })
}
const yo = new Ix
  , d0 = n => {
    n instanceof ci && (typeof window > "u" || n.data?.code === "UNAUTHORIZED" && window.location.pathname !== "/login" && window.location.assign("/login"))
}
;
yo.getQueryCache().subscribe(n => {
    if (n.type === "updated" && n.action.type === "error") {
        const r = n.query.state.error;
        d0(r),
        console.error("[API Query Error]", r)
    }
}
);
yo.getMutationCache().subscribe(n => {
    if (n.type === "updated" && n.action.type === "error") {
        const r = n.mutation.state.error;
        d0(r),
        console.error("[API Mutation Error]", r)
    }
}
);
const H_ = Ge.createClient({
    links: [iS({
        url: "/api/trpc",
        transformer: Wn,
        fetch(n, r) {
            return globalThis.fetch(n, {
                ...r ?? {},
                credentials: "include"
            })
        }
    })]
});
LS.createRoot(document.getElementById("root")).render(O.jsx(Ge.Provider, {
    "data-loc": "client/src/main.tsx:51",
    client: H_,
    queryClient: yo,
    children: O.jsx(Wx, {
        "data-loc": "client/src/main.tsx:52",
        client: yo,
        children: O.jsx(L_, {
            "data-loc": "client/src/main.tsx:53"
        })
    })
}));

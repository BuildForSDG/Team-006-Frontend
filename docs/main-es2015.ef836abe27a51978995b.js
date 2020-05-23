(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (t, e, n) {
      t.exports = n('zUnb');
    },
    '0LF7': function (t, e, n) {
      'use strict';
      var r = n('8Y7J');
      n('kBGf'),
        n.d(e, 'a', function () {
          return i;
        }),
        n.d(e, 'b', function () {
          return o;
        });
      var i = r.nb({
        encapsulation: 0,
        styles: [
          [
            '.errorPage[_ngcontent-%COMP%]{display:flex;height:90%;align-items:center;justify-content:center;text-align:center}.errorPage[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff4848;font-weight:700;margin-bottom:10px}'
          ]
        ],
        data: {}
      });
      function o(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 5, 'div', [['class', 'errorPage']], null, null, null, null, null)),
            (t()(), r.pb(1, 0, null, null, 4, 'div', [], null, null, null, null, null)),
            (t()(), r.pb(2, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, ['Reporter device too large!!!'])),
            (t()(), r.pb(4, 0, null, null, 1, 'p', [], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, ['We recommend using a mobile device to place reports']))
          ],
          null,
          null
        );
      }
    },
    '2QA8': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = 'function' == typeof Symbol ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    },
    '2fFW': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      let r = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(t) {
          if (t) {
            const t = new Error();
            console.warn(
              'DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + t.stack
            );
          } else r && console.log('RxJS: Back to a better error behavior. Thank you. <3');
          r = t;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return r;
        }
      };
    },
    '3bS2': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      class r {
        constructor(t, e) {
          (this.screenWidthService = t), (this.authService = e);
        }
        ngOnInit() {}
      }
    },
    '5+tZ': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('ZUHj'),
        i = n('l7GE'),
        o = n('51Dv'),
        s = n('lJxs'),
        a = n('Cfvw');
      function u(t, e, n = Number.POSITIVE_INFINITY) {
        return 'function' == typeof e
          ? (r) => r.pipe(u((n, r) => Object(a.a)(t(n, r)).pipe(Object(s.a)((t, i) => e(n, t, r, i))), n))
          : ('number' == typeof e && (n = e), (e) => e.lift(new c(t, n)));
      }
      class c {
        constructor(t, e = Number.POSITIVE_INFINITY) {
          (this.project = t), (this.concurrent = e);
        }
        call(t, e) {
          return e.subscribe(new l(t, this.project, this.concurrent));
        }
      }
      class l extends i.a {
        constructor(t, e, n = Number.POSITIVE_INFINITY) {
          super(t),
            (this.project = e),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(t) {
          this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t);
        }
        _tryNext(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const i = new o.a(this, void 0, void 0);
          this.destination.add(i), Object(r.a)(this, t, e, n, i);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active && 0 === this.buffer.length && this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(t, e, n, r, i) {
          this.destination.next(e);
        }
        notifyComplete(t) {
          const e = this.buffer;
          this.remove(t),
            this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active && this.hasCompleted && this.destination.complete();
        }
      }
    },
    '51Dv': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('7o/Q');
      class i extends r.a {
        constructor(t, e, n) {
          super(), (this.parent = t), (this.outerValue = e), (this.outerIndex = n), (this.index = 0);
        }
        _next(t) {
          this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this);
        }
        _error(t) {
          this.parent.notifyError(t, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
    },
    '6C7I': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('8Y7J');
      let i = (() => {
        class t {
          constructor() {
            (this.screenWidth = document.body.clientWidth),
              window.addEventListener('resize', () => {
                (this.screenWidth = document.body.clientWidth), console.log(this.screenWidth);
              });
          }
        }
        return (
          (t.ngInjectableDef = r.Kb({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
    },
    '6epW': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      }),
        n('3bS2');
      class r {}
    },
    '7o/Q': function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return c;
      });
      var r = n('n6bG'),
        i = n('gRHU'),
        o = n('quSY'),
        s = n('2QA8'),
        a = n('2fFW'),
        u = n('NJ4a');
      class c extends o.a {
        constructor(t, e, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = i.a;
              break;
            case 1:
              if (!t) {
                this.destination = i.a;
                break;
              }
              if ('object' == typeof t) {
                t instanceof c
                  ? ((this.syncErrorThrowable = t.syncErrorThrowable), (this.destination = t), t.add(this))
                  : ((this.syncErrorThrowable = !0), (this.destination = new l(this, t)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0), (this.destination = new l(this, t, e, n));
          }
        }
        [s.a]() {
          return this;
        }
        static create(t, e, n) {
          const r = new c(t, e, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(t) {
          this.isStopped || this._next(t);
        }
        error(t) {
          this.isStopped || ((this.isStopped = !0), this._error(t));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(t) {
          this.destination.next(t);
        }
        _error(t) {
          this.destination.error(t), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parent: t, _parents: e } = this;
          return (
            (this._parent = null),
            (this._parents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parent = t),
            (this._parents = e),
            this
          );
        }
      }
      class l extends c {
        constructor(t, e, n, o) {
          let s;
          super(), (this._parentSubscriber = t);
          let a = this;
          Object(r.a)(e)
            ? (s = e)
            : e &&
              ((s = e.next),
              (n = e.error),
              (o = e.complete),
              e !== i.a &&
                ((a = Object.create(e)),
                Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)),
                (a.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = a),
            (this._next = s),
            (this._error = n),
            (this._complete = o);
        }
        next(t) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: e } = this;
            a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
              ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, t);
          }
        }
        error(t) {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this,
              { useDeprecatedSynchronousErrorHandling: n } = a.a;
            if (this._error)
              n && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
            else if (e.syncErrorThrowable)
              n ? ((e.syncErrorValue = t), (e.syncErrorThrown = !0)) : Object(u.a)(t), this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw t;
              Object(u.a)(t);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this;
            if (this._complete) {
              const e = () => this._complete.call(this._context);
              a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, e), this.unsubscribe())
                : (this.__tryOrUnsub(e), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(t, e) {
          try {
            t.call(this._context, e);
          } catch (n) {
            if ((this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling)) throw n;
            Object(u.a)(n);
          }
        }
        __tryOrSetError(t, e, n) {
          if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error('bad call');
          try {
            e.call(this._context, n);
          } catch (r) {
            return a.a.useDeprecatedSynchronousErrorHandling
              ? ((t.syncErrorValue = r), (t.syncErrorThrown = !0), !0)
              : (Object(u.a)(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: t } = this;
          (this._context = null), (this._parentSubscriber = null), t.unsubscribe();
        }
      }
    },
    '8Y7J': function (t, e, n) {
      'use strict';
      var r = n('XNiG'),
        i = n('quSY'),
        o = n('HDdC'),
        s = n('z+Ro'),
        a = n('bHdf'),
        u = n('yCtX'),
        c = n('7o/Q');
      function l() {
        return function (t) {
          return t.lift(new h(t));
        };
      }
      class h {
        constructor(t) {
          this.connectable = t;
        }
        call(t, e) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new d(t, n),
            i = e.subscribe(r);
          return r.closed || (r.connection = n.connect()), i;
        }
      }
      class d extends c.a {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _unsubscribe() {
          const { connectable: t } = this;
          if (!t) return void (this.connection = null);
          this.connectable = null;
          const e = t._refCount;
          if (e <= 0) return void (this.connection = null);
          if (((t._refCount = e - 1), e > 1)) return void (this.connection = null);
          const { connection: n } = this,
            r = t._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      const f = class extends o.a {
          constructor(t, e) {
            super(), (this.source = t), (this.subjectFactory = e), (this._refCount = 0), (this._isComplete = !1);
          }
          _subscribe(t) {
            return this.getSubject().subscribe(t);
          }
          getSubject() {
            const t = this._subject;
            return (t && !t.isStopped) || (this._subject = this.subjectFactory()), this._subject;
          }
          connect() {
            let t = this._connection;
            return (
              t ||
                ((this._isComplete = !1),
                (t = this._connection = new i.a()),
                t.add(this.source.subscribe(new g(this.getSubject(), this))),
                t.closed ? ((this._connection = null), (t = i.a.EMPTY)) : (this._connection = t)),
              t
            );
          }
          refCount() {
            return l()(this);
          }
        }.prototype,
        p = {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: f._subscribe },
          _isComplete: { value: f._isComplete, writable: !0 },
          getSubject: { value: f.getSubject },
          connect: { value: f.connect },
          refCount: { value: f.refCount }
        };
      class g extends r.b {
        constructor(t, e) {
          super(t), (this.connectable = e);
        }
        _error(t) {
          this._unsubscribe(), super._error(t);
        }
        _complete() {
          (this.connectable._isComplete = !0), this._unsubscribe(), super._complete();
        }
        _unsubscribe() {
          const t = this.connectable;
          if (t) {
            this.connectable = null;
            const e = t._connection;
            (t._refCount = 0), (t._subject = null), (t._connection = null), e && e.unsubscribe();
          }
        }
      }
      function m() {
        return new r.a();
      }
      function v(t, e, n) {
        const r = (function (t) {
          return function (...e) {
            if (t) {
              const n = t(...e);
              for (const t in n) this[t] = n[t];
            }
          };
        })(e);
        function i(...t) {
          if (this instanceof i) return r.apply(this, t), this;
          const e = new i(...t);
          return (n.annotation = e), n;
          function n(t, n, r) {
            const i = t.hasOwnProperty('__parameters__')
              ? t.__parameters__
              : Object.defineProperty(t, '__parameters__', { value: [] }).__parameters__;
            for (; i.length <= r; ) i.push(null);
            return (i[r] = i[r] || []).push(e), t;
          }
        }
        return (
          n && (i.prototype = Object.create(n.prototype)), (i.prototype.ngMetadataName = t), (i.annotationCls = i), i
        );
      }
      n.d(e, 'hb', function () {
        return os;
      }),
        n.d(e, 'ib', function () {
          return ss;
        }),
        n.d(e, 'jb', function () {
          return as;
        }),
        n.d(e, 'kb', function () {
          return us;
        }),
        n.d(e, 'gb', function () {
          return no;
        }),
        n.d(e, 'fb', function () {
          return Bi;
        }),
        n.d(e, 'g', function () {
          return qo;
        }),
        n.d(e, 'P', function () {
          return zo;
        }),
        n.d(e, 'w', function () {
          return Fo;
        }),
        n.d(e, 'Q', function () {
          return Kt;
        }),
        n.d(e, 'T', function () {
          return Gt;
        }),
        n.d(e, 'c', function () {
          return eo;
        }),
        n.d(e, 'A', function () {
          return io;
        }),
        n.d(e, 'z', function () {
          return oo;
        }),
        n.d(e, 'b', function () {
          return so;
        }),
        n.d(e, 'd', function () {
          return Qi;
        }),
        n.d(e, 'e', function () {
          return to;
        }),
        n.d(e, 'S', function () {
          return ns;
        }),
        n.d(e, 'K', function () {
          return Po;
        }),
        n.d(e, 'V', function () {
          return Mo;
        }),
        n.d(e, 's', function () {
          return uo;
        }),
        n.d(e, 'f', function () {
          return cs;
        }),
        n.d(e, 'm', function () {
          return Ji;
        }),
        n.d(e, 'l', function () {
          return $t;
        }),
        n.d(e, 'E', function () {
          return be;
        }),
        n.d(e, 'F', function () {
          return ve;
        }),
        n.d(e, 'a', function () {
          return Qe;
        }),
        n.d(e, 'N', function () {
          return Z;
        }),
        n.d(e, 'L', function () {
          return jn;
        }),
        n.d(e, 'Kb', function () {
          return C;
        }),
        n.d(e, 'R', function () {
          return O;
        }),
        n.d(e, 'p', function () {
          return qe;
        }),
        n.d(e, 'Lb', function () {
          return B;
        }),
        n.d(e, 'o', function () {
          return M;
        }),
        n.d(e, 'n', function () {
          return b;
        }),
        n.d(e, 'y', function () {
          return y;
        }),
        n.d(e, 'G', function () {
          return _;
        }),
        n.d(e, 'x', function () {
          return To;
        }),
        n.d(e, 'B', function () {
          return Pn;
        }),
        n.d(e, 'C', function () {
          return Nn;
        }),
        n.d(e, 'D', function () {
          return Rn;
        }),
        n.d(e, 'i', function () {
          return go;
        }),
        n.d(e, 'j', function () {
          return Cn;
        }),
        n.d(e, 'k', function () {
          return kn;
        }),
        n.d(e, 't', function () {
          return G;
        }),
        n.d(e, 'v', function () {
          return W;
        }),
        n.d(e, 'u', function () {
          return Go;
        }),
        n.d(e, 'H', function () {
          return Jo;
        }),
        n.d(e, 'I', function () {
          return Ko;
        }),
        n.d(e, 'J', function () {
          return Xn;
        }),
        n.d(e, 'M', function () {
          return tr;
        }),
        n.d(e, 'h', function () {
          return ze;
        }),
        n.d(e, 'q', function () {
          return Gn;
        }),
        n.d(e, 'r', function () {
          return Kn;
        }),
        n.d(e, 'O', function () {
          return sn;
        }),
        n.d(e, 'U', function () {
          return is;
        }),
        n.d(e, 'ub', function () {
          return an;
        }),
        n.d(e, 'Y', function () {
          return ao;
        }),
        n.d(e, 'W', function () {
          return Be;
        }),
        n.d(e, 'X', function () {
          return In;
        }),
        n.d(e, 'bb', function () {
          return ge;
        }),
        n.d(e, 'cb', function () {
          return _e;
        }),
        n.d(e, 'db', function () {
          return Xt;
        }),
        n.d(e, 'sb', function () {
          return j;
        }),
        n.d(e, 'xb', function () {
          return rn;
        }),
        n.d(e, 'Eb', function () {
          return x;
        }),
        n.d(e, 'vb', function () {
          return bn;
        }),
        n.d(e, 'wb', function () {
          return vn;
        }),
        n.d(e, 'rb', function () {
          return Ki;
        }),
        n.d(e, 'qb', function () {
          return Yi;
        }),
        n.d(e, 'Z', function () {
          return $i;
        }),
        n.d(e, 'ab', function () {
          return qi;
        }),
        n.d(e, 'Jb', function () {
          return at;
        }),
        n.d(e, 'Hb', function () {
          return tn;
        }),
        n.d(e, 'Nb', function () {
          return cn;
        }),
        n.d(e, 'Mb', function () {
          return ln;
        }),
        n.d(e, 'Ib', function () {
          return hn;
        }),
        n.d(e, 'Ob', function () {
          return fn;
        }),
        n.d(e, 'eb', function () {
          return ls;
        }),
        n.d(e, 'lb', function () {
          return ri;
        }),
        n.d(e, 'mb', function () {
          return Na;
        }),
        n.d(e, 'nb', function () {
          return mr;
        }),
        n.d(e, 'ob', function () {
          return xi;
        }),
        n.d(e, 'pb', function () {
          return hs;
        }),
        n.d(e, 'tb', function () {
          return Br;
        }),
        n.d(e, 'yb', function () {
          return Jr;
        }),
        n.d(e, 'zb', function () {
          return Yr;
        }),
        n.d(e, 'Ab', function () {
          return ws;
        }),
        n.d(e, 'Bb', function () {
          return pi;
        }),
        n.d(e, 'Db', function () {
          return ki;
        }),
        n.d(e, 'Cb', function () {
          return Ss;
        }),
        n.d(e, 'Fb', function () {
          return Es;
        }),
        n.d(e, 'Gb', function () {
          return Ts;
        });
      const b = v('Inject', (t) => ({ token: t })),
        y = v('Optional'),
        w = v('Self'),
        _ = v('SkipSelf');
      var S = (function (t) {
        return (
          (t[(t.Default = 0)] = 'Default'),
          (t[(t.Host = 1)] = 'Host'),
          (t[(t.Self = 2)] = 'Self'),
          (t[(t.SkipSelf = 4)] = 'SkipSelf'),
          (t[(t.Optional = 8)] = 'Optional'),
          t
        );
      })({});
      function E(t) {
        for (let e in t) if (t[e] === E) return e;
        throw Error('Could not find renamed property on target object.');
      }
      function C(t) {
        return { token: t.token, providedIn: t.providedIn || null, factory: t.factory, value: void 0 };
      }
      function I(t) {
        const e = t[T];
        return e && e.token === t ? e : null;
      }
      const T = E({ ngInjectableDef: E });
      function x(t) {
        if ('string' == typeof t) return t;
        if (t instanceof Array) return '[' + t.map(x).join(', ') + ']';
        if (null == t) return '' + t;
        if (t.overriddenName) return `${t.overriddenName}`;
        if (t.name) return `${t.name}`;
        const e = t.toString();
        if (null == e) return '' + e;
        const n = e.indexOf('\n');
        return -1 === n ? e : e.substring(0, n);
      }
      const k = E({ __forward_ref__: E });
      function O(t) {
        return (
          (t.__forward_ref__ = O),
          (t.toString = function () {
            return x(this());
          }),
          t
        );
      }
      function A(t) {
        const e = t;
        return 'function' == typeof e && e.hasOwnProperty(k) && e.__forward_ref__ === O ? e() : t;
      }
      const N = 'undefined' != typeof globalThis && globalThis,
        R = 'undefined' != typeof window && window,
        P =
          'undefined' != typeof self &&
          'undefined' != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        D = 'undefined' != typeof global && global,
        j = N || D || R || P;
      class M {
        constructor(t, e) {
          (this._desc = t),
            (this.ngMetadataName = 'InjectionToken'),
            (this.ngInjectableDef = void 0),
            'number' == typeof e
              ? (this.__NG_ELEMENT_ID__ = e)
              : void 0 !== e &&
                (this.ngInjectableDef = C({ token: this, providedIn: e.providedIn || 'root', factory: e.factory }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const L = new M('INJECTOR', -1),
        U = new Object(),
        V = /\n/gm,
        F = E({ provide: String, useValue: E });
      let z = void 0;
      function H(t) {
        const e = z;
        return (z = t), e;
      }
      function B(t, e = S.Default) {
        return (function (t, e = S.Default) {
          if (void 0 === z) throw new Error('inject() must be called from an injection context');
          return null === z
            ? (function (t, e, n) {
                const r = I(t);
                if (r && 'root' == r.providedIn) return void 0 === r.value ? (r.value = r.factory()) : r.value;
                if (n & S.Optional) return null;
                throw new Error(`Injector: NOT_FOUND [${x(t)}]`);
              })(t, 0, e)
            : z.get(t, e & S.Optional ? null : void 0, e);
        })(t, e);
      }
      class $ {
        get(t, e = U) {
          if (e === U) {
            const e = new Error(`NullInjectorError: No provider for ${x(t)}!`);
            throw ((e.name = 'NullInjectorError'), e);
          }
          return e;
        }
      }
      function q(t, e, n, r = null) {
        t = t && '\n' === t.charAt(0) && '\u0275' == t.charAt(1) ? t.substr(2) : t;
        let i = x(e);
        if (e instanceof Array) i = e.map(x).join(' -> ');
        else if ('object' == typeof e) {
          let t = [];
          for (let n in e)
            if (e.hasOwnProperty(n)) {
              let r = e[n];
              t.push(n + ':' + ('string' == typeof r ? JSON.stringify(r) : x(r)));
            }
          i = `{${t.join(', ')}}`;
        }
        return `${n}${r ? '(' + r + ')' : ''}[${i}]: ${t.replace(V, '\n  ')}`;
      }
      class W {}
      class G {}
      function K(t, e, n) {
        e >= t.length ? t.push(n) : t.splice(e, 0, n);
      }
      function Y(t, e) {
        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0];
      }
      const J = (function () {
          var t = { OnPush: 0, Default: 1 };
          return (t[t.OnPush] = 'OnPush'), (t[t.Default] = 'Default'), t;
        })(),
        Z = (function () {
          var t = { Emulated: 0, Native: 1, None: 2, ShadowDom: 3 };
          return (
            (t[t.Emulated] = 'Emulated'),
            (t[t.Native] = 'Native'),
            (t[t.None] = 'None'),
            (t[t.ShadowDom] = 'ShadowDom'),
            t
          );
        })(),
        X = {},
        Q = [],
        tt = E({ ngComponentDef: E }),
        et = E({ ngDirectiveDef: E }),
        nt = E({ ngPipeDef: E });
      let rt = 0;
      function it(t) {
        return (
          (function (t) {
            return t[tt] || null;
          })(t) ||
          (function (t) {
            return t[et] || null;
          })(t)
        );
      }
      function ot(t) {
        return (function (t) {
          return t[nt] || null;
        })(t);
      }
      function st(t, e) {
        if (null == t) return X;
        const n = {};
        for (const r in t)
          if (t.hasOwnProperty(r)) {
            let i = t[r],
              o = i;
            Array.isArray(i) && ((o = i[1]), (i = i[0])), (n[i] = r), e && (e[i] = o);
          }
        return n;
      }
      const at = function (t) {
        const e = t.type,
          n = e.prototype,
          r = {},
          i = {
            type: e,
            providersResolver: null,
            consts: t.consts,
            vars: t.vars,
            factory: t.factory,
            template: t.template || null,
            ngContentSelectors: t.ngContentSelectors,
            hostBindings: t.hostBindings || null,
            contentQueries: t.contentQueries || null,
            declaredInputs: r,
            inputs: null,
            outputs: null,
            exportAs: t.exportAs || null,
            onChanges: null,
            onInit: n.ngOnInit || null,
            doCheck: n.ngDoCheck || null,
            afterContentInit: n.ngAfterContentInit || null,
            afterContentChecked: n.ngAfterContentChecked || null,
            afterViewInit: n.ngAfterViewInit || null,
            afterViewChecked: n.ngAfterViewChecked || null,
            onDestroy: n.ngOnDestroy || null,
            onPush: t.changeDetection === J.OnPush,
            directiveDefs: null,
            pipeDefs: null,
            selectors: t.selectors,
            viewQuery: t.viewQuery || null,
            features: t.features || null,
            data: t.data || {},
            encapsulation: t.encapsulation || Z.Emulated,
            id: 'c',
            styles: t.styles || Q,
            _: null,
            setInput: null,
            schemas: t.schemas || null,
            tView: null
          };
        return (
          (i._ =
            '' +
            {
              toString: () => {
                const n = t.directives,
                  o = t.features,
                  s = t.pipes;
                (i.id += rt++),
                  (i.inputs = st(t.inputs, r)),
                  (i.outputs = st(t.outputs)),
                  o && o.forEach((t) => t(i)),
                  (i.directiveDefs = n ? () => ('function' == typeof n ? n() : n).map(it) : null),
                  (i.pipeDefs = s ? () => ('function' == typeof s ? s() : s).map(ot) : null),
                  e.hasOwnProperty(T) || (e[T] = C({ token: e, factory: t.factory }));
              }
            }),
          i
        );
      };
      let ut = null;
      const ct = new Map();
      let lt,
        ht = null;
      function dt(t, e) {
        return (
          (ht && t === ht) ||
            ((ht = t),
            e && (ut = ct.get(t) || null),
            (ut = ut || { classesBitMask: 0, classesIndex: 1, stylesBitMask: 0, stylesIndex: 1 })),
          ut
        );
      }
      function ft(t, e) {
        return (function (t) {
          for (; Array.isArray(t); ) t = t[0];
          return t;
        })(e[t.index]);
      }
      function pt(t, e) {
        return e[1].data[t + 19];
      }
      function gt() {
        return lt;
      }
      const mt = (() =>
        (('undefined' != typeof requestAnimationFrame && requestAnimationFrame) || setTimeout).bind(j))();
      function vt(t, e) {
        0 === e
          ? t[2] > 0 &&
            (function (t) {
              yt(t, 2 | bt(t));
            })(t)
          : (t[2] = e);
      }
      function bt(t) {
        return t[1];
      }
      function yt(t, e) {
        t[1] = e;
      }
      function wt(t, e) {
        return t[e + 2];
      }
      function _t(t, e) {
        return 1 & t[e + 0];
      }
      function St(t, e) {
        return (1 & _t(t, e)) > 0;
      }
      function Et(t, e) {
        return t[e + 0] >> 1;
      }
      function Ct(t, e, n) {
        const r = _t(t, e);
        t[e + 0] = r | (n << 1);
      }
      function It(t, e) {
        return t[e + 1];
      }
      function Tt(t, e, n) {
        return t[e + 3 + n];
      }
      function xt(t, e) {
        return !(!t || e !== t[2]);
      }
      function kt(t) {
        return (1 & bt(t)) > 0;
      }
      function Ot(t) {
        return (2 & bt(t)) > 0;
      }
      function At(t) {
        return 6 + t[4];
      }
      function Nt(t, e) {
        let n = Array.isArray(t) ? t[0] : t,
          r = Array.isArray(e) ? e[0] : e;
        return (
          n instanceof String && (n = n.toString()),
          r instanceof String && (r = r.toString()),
          (function (t, e) {
            return !(t != t && e != e) && t !== e;
          })(n, r)
        );
      }
      function Rt(t) {
        return null != t && '' !== t;
      }
      function Pt(t) {
        return t.replace(/[a-z][A-Z]/g, (t) => t.charAt(0) + '-' + t.charAt(1)).toLowerCase();
      }
      function Dt(t) {
        return jt(t) ? t[0] : t;
      }
      function jt(t) {
        return Array.isArray(t) && t.length >= 6 && 'string' != typeof t[1];
      }
      function Mt(t, e) {
        return t[e + 0];
      }
      function Lt(t, e, n) {
        t[e + 1] = n;
      }
      function Ut(t, e) {
        return t[e + 1];
      }
      const Vt = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      function Ft(t) {
        return !!t.listen;
      }
      function zt(t) {
        return t.ngDebugContext;
      }
      function Ht(t) {
        return t.ngOriginalError;
      }
      function Bt(t, ...e) {
        t.error(...e);
      }
      class $t {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const e = this._findOriginalError(t),
            n = this._findContext(t),
            r = (function (t) {
              return t.ngErrorLogger || Bt;
            })(t);
          r(this._console, 'ERROR', t),
            e && r(this._console, 'ORIGINAL ERROR', e),
            n && r(this._console, 'ERROR CONTEXT', n);
        }
        _findContext(t) {
          return t ? (zt(t) ? zt(t) : this._findContext(Ht(t))) : null;
        }
        _findOriginalError(t) {
          let e = Ht(t);
          for (; e && Ht(e); ) e = Ht(e);
          return e;
        }
      }
      let qt = !0,
        Wt = !1;
      function Gt() {
        return (Wt = !0), qt;
      }
      function Kt() {
        if (Wt) throw new Error('Cannot enable prod mode after platform setup.');
        qt = !1;
      }
      class Yt {
        constructor(t) {
          if (
            ((this.defaultDoc = t),
            (this.inertDocument = this.defaultDoc.implementation.createHTMLDocument('sanitization-inert')),
            (this.inertBodyElement = this.inertDocument.body),
            null == this.inertBodyElement)
          ) {
            const t = this.inertDocument.createElement('html');
            this.inertDocument.appendChild(t),
              (this.inertBodyElement = this.inertDocument.createElement('body')),
              t.appendChild(this.inertBodyElement);
          }
          (this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>'),
            !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector('svg')
              ? ((this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">'),
                (this.getInertBodyElement =
                  this.inertBodyElement.querySelector &&
                  this.inertBodyElement.querySelector('svg img') &&
                  (function () {
                    try {
                      return !!window.DOMParser;
                    } catch (t) {
                      return !1;
                    }
                  })()
                    ? this.getInertBodyElement_DOMParser
                    : this.getInertBodyElement_InertDocument))
              : (this.getInertBodyElement = this.getInertBodyElement_XHR);
        }
        getInertBodyElement_XHR(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            t = encodeURI(t);
          } catch (r) {
            return null;
          }
          const e = new XMLHttpRequest();
          (e.responseType = 'document'), e.open('GET', 'data:text/html;charset=utf-8,' + t, !1), e.send(void 0);
          const n = e.response.body;
          return n.removeChild(n.firstChild), n;
        }
        getInertBodyElement_DOMParser(t) {
          t = '<body><remove></remove>' + t + '</body>';
          try {
            const e = new window.DOMParser().parseFromString(t, 'text/html').body;
            return e.removeChild(e.firstChild), e;
          } catch (e) {
            return null;
          }
        }
        getInertBodyElement_InertDocument(t) {
          const e = this.inertDocument.createElement('template');
          return 'content' in e
            ? ((e.innerHTML = t), e)
            : ((this.inertBodyElement.innerHTML = t),
              this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement),
              this.inertBodyElement);
        }
        stripCustomNsAttrs(t) {
          const e = t.attributes;
          for (let r = e.length - 1; 0 < r; r--) {
            const n = e.item(r).name;
            ('xmlns:ns1' !== n && 0 !== n.indexOf('ns1:')) || t.removeAttribute(n);
          }
          let n = t.firstChild;
          for (; n; ) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), (n = n.nextSibling);
        }
      }
      const Jt = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
        Zt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      function Xt(t) {
        return (t = String(t)).match(Jt) || t.match(Zt)
          ? t
          : (Gt() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`),
            'unsafe:' + t);
      }
      function Qt(t) {
        const e = {};
        for (const n of t.split(',')) e[n] = !0;
        return e;
      }
      function te(...t) {
        const e = {};
        for (const n of t) for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
        return e;
      }
      const ee = Qt('area,br,col,hr,img,wbr'),
        ne = Qt('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr'),
        re = Qt('rp,rt'),
        ie = te(re, ne),
        oe = te(
          ee,
          te(
            ne,
            Qt(
              'address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul'
            )
          ),
          te(
            re,
            Qt(
              'a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video'
            )
          ),
          ie
        ),
        se = Qt('background,cite,href,itemtype,longdesc,poster,src,xlink:href'),
        ae = Qt('srcset'),
        ue = te(
          se,
          ae,
          Qt(
            'abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width'
          ),
          Qt(
            'aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext'
          )
        ),
        ce = Qt('script,style,template');
      class le {
        constructor() {
          (this.sanitizedSomething = !1), (this.buf = []);
        }
        sanitizeChildren(t) {
          let e = t.firstChild,
            n = !0;
          for (; e; )
            if (
              (e.nodeType === Node.ELEMENT_NODE
                ? (n = this.startElement(e))
                : e.nodeType === Node.TEXT_NODE
                ? this.chars(e.nodeValue)
                : (this.sanitizedSomething = !0),
              n && e.firstChild)
            )
              e = e.firstChild;
            else
              for (; e; ) {
                e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                let t = this.checkClobberedElement(e, e.nextSibling);
                if (t) {
                  e = t;
                  break;
                }
                e = this.checkClobberedElement(e, e.parentNode);
              }
          return this.buf.join('');
        }
        startElement(t) {
          const e = t.nodeName.toLowerCase();
          if (!oe.hasOwnProperty(e)) return (this.sanitizedSomething = !0), !ce.hasOwnProperty(e);
          this.buf.push('<'), this.buf.push(e);
          const n = t.attributes;
          for (let i = 0; i < n.length; i++) {
            const t = n.item(i),
              e = t.name,
              o = e.toLowerCase();
            if (!ue.hasOwnProperty(o)) {
              this.sanitizedSomething = !0;
              continue;
            }
            let s = t.value;
            se[o] && (s = Xt(s)),
              ae[o] &&
                ((r = s),
                (s = (r = String(r))
                  .split(',')
                  .map((t) => Xt(t.trim()))
                  .join(', '))),
              this.buf.push(' ', e, '="', fe(s), '"');
          }
          var r;
          return this.buf.push('>'), !0;
        }
        endElement(t) {
          const e = t.nodeName.toLowerCase();
          oe.hasOwnProperty(e) && !ee.hasOwnProperty(e) && (this.buf.push('</'), this.buf.push(e), this.buf.push('>'));
        }
        chars(t) {
          this.buf.push(fe(t));
        }
        checkClobberedElement(t, e) {
          if (
            e &&
            (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY
          )
            throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
          return e;
        }
      }
      const he = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
        de = /([^\#-~ |!])/g;
      function fe(t) {
        return t
          .replace(/&/g, '&amp;')
          .replace(he, function (t) {
            return '&#' + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ';';
          })
          .replace(de, function (t) {
            return '&#' + t.charCodeAt(0) + ';';
          })
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      let pe;
      function ge(t, e) {
        let n = null;
        try {
          pe = pe || new Yt(t);
          let r = e ? String(e) : '';
          n = pe.getInertBodyElement(r);
          let i = 5,
            o = r;
          do {
            if (0 === i) throw new Error('Failed to sanitize html because the input is unstable');
            i--, (r = o), (o = n.innerHTML), (n = pe.getInertBodyElement(r));
          } while (r !== o);
          const s = new le(),
            a = s.sanitizeChildren(me(n) || n);
          return (
            Gt() &&
              s.sanitizedSomething &&
              console.warn('WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss'),
            a
          );
        } finally {
          if (n) {
            const t = me(n) || n;
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
        }
      }
      function me(t) {
        return 'content' in t &&
          (function (t) {
            return t.nodeType === Node.ELEMENT_NODE && 'TEMPLATE' === t.nodeName;
          })(t)
          ? t.content
          : null;
      }
      const ve = (function () {
        var t = { NONE: 0, HTML: 1, STYLE: 2, SCRIPT: 3, URL: 4, RESOURCE_URL: 5 };
        return (
          (t[t.NONE] = 'NONE'),
          (t[t.HTML] = 'HTML'),
          (t[t.STYLE] = 'STYLE'),
          (t[t.SCRIPT] = 'SCRIPT'),
          (t[t.URL] = 'URL'),
          (t[t.RESOURCE_URL] = 'RESOURCE_URL'),
          t
        );
      })();
      class be {}
      const ye = new RegExp(
          '^([-,."\'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|Z|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$',
          'g'
        ),
        we = /^url\(([^)]+)\)$/;
      function _e(t) {
        if (!(t = String(t).trim())) return '';
        const e = t.match(we);
        return (e && Xt(e[1]) === e[1]) ||
          (t.match(ye) &&
            (function (t) {
              let e = !0,
                n = !0;
              for (let r = 0; r < t.length; r++) {
                const i = t.charAt(r);
                "'" === i && n ? (e = !e) : '"' === i && e && (n = !n);
              }
              return e && n;
            })(t))
          ? t
          : (Gt() && console.warn(`WARNING: sanitizing unsafe style value ${t} (see http://g.co/ng/security#xss).`),
            'unsafe');
      }
      function Se(t) {
        var e;
        return (e = t.replace(/[$@]/g, '_')), `ng-reflect-${(t = e.replace(Ee, (...t) => '-' + t[1].toLowerCase()))}`;
      }
      const Ee = /([A-Z])/g;
      function Ce(t) {
        try {
          return null != t ? t.toString().slice(0, 30) : t;
        } catch (e) {
          return '[ERROR] Exception while trying to serialize the value';
        }
      }
      let Ie = [];
      function Te(t, e, n, r, i, o, s, a, u) {
        kt(t) ||
          (s
            ? (function (t, e, n, r, i) {
                Ie.unshift(t, e, n, r, i);
              })(t, n, r, i, u)
            : (Ie.length && xe(), ke(t, n, r, i, u)));
        const c = a || Nt(e[i], o);
        return c && (e[i] = o), c;
      }
      function xe() {
        let t = 0;
        for (; t < Ie.length; ) ke(Ie[t++], Ie[t++], Ie[t++], Ie[t++], Ie[t++]);
        Ie.length = 0;
      }
      function ke(t, e, n, r, i) {
        let o = !1;
        if (n) {
          let s = !1,
            a = At(t);
          for (; a < t.length; ) {
            const o = It(t, a),
              u = wt(t, a);
            if (((s = n <= u), s)) {
              n < u && Oe(t, a, n, i), Ae(t, !1, a, r, e);
              break;
            }
            a += 3 + o;
          }
          s || (Oe(t, t.length, n, i), Ae(t, !1, a, r, e), (o = !0));
        } else Ae(t, !0, 3, r, e), (o = !0);
        return o;
      }
      function Oe(t, e, n, r) {
        t.splice(e, 0, r ? 1 : 0, 1, n, null), Ct(t, e, 1);
      }
      function Ae(t, e, n, r, i) {
        const o = n + 3;
        let s = o + It(t, n);
        if ((e || s--, 'number' == typeof r)) {
          for (let e = o; e <= s; e++) if (t[e] === r) return;
          t.splice(s, 0, r), t[n + 1]++, Ct(t, n, Et(t, n) | (1 << i));
        } else null !== r && null == t[s] && (t[s] = r);
      }
      function Ne(t, e, n, r, i, o, s, a) {
        return i &&
          r &&
          ((function (t) {
            if (!kt(t)) {
              const e = Dt(t);
              e &&
                (function (t, e) {
                  for (let n = 1; n < e.length; n += 2) {
                    const r = Ut(e, n);
                    r && ke(t, -1, Mt(e, n), r, !1);
                  }
                })(t, e),
                (function (t) {
                  yt(t, 1 | bt(t));
                })(t);
            }
          })(r),
          (function (t, e) {
            return t && e > 0;
          })(r, o))
          ? ((function (t, e, n, r, i, o, s) {
              const a = !0 === (u = i) ? -1 : !1 === u ? 0 : u;
              var u;
              const c = Re,
                l = (a & Et(t, 3)) > 0 ? 1 : 0;
              let h = At(t);
              for (; h < t.length; ) {
                const i = It(t, h);
                if (a & Et(t, h)) {
                  let a = !1;
                  const u = wt(t, h),
                    d = i - 1,
                    f = Tt(t, h, d);
                  for (let i = 0; i < d; i++) {
                    const c = Tt(t, h, i),
                      l = r[c];
                    if (Rt(l)) {
                      o(e, n, u, s && St(t, h) ? s(u, l, 2) : l, c), (a = !0);
                      break;
                    }
                  }
                  if (c) {
                    const i = c(t, e, n, r, o, s, l | (a ? 4 : 2), u, f);
                    a = a || i;
                  }
                  a || o(e, n, u, f);
                }
                h += 3 + i;
              }
              c && c(t, e, n, r, o, s, l);
            })(r, t, e, n, o, s, a),
            !0)
          : i;
      }
      let Re = null;
      const Pe = (t, e, n, r) => {
          const i = e.style;
          r
            ? ((r = r.toString()), t && Ft(t) ? t.setStyle(e, n, r, Vt.DashCase) : i && i.setProperty(n, r))
            : t && Ft(t)
            ? t.removeStyle(e, n, Vt.DashCase)
            : i && i.removeProperty(n);
        },
        De = (t, e, n, r) => {
          if ('' !== n) {
            const i = e.classList;
            r ? (t && Ft(t) ? t.addClass(e, n) : i && i.add(n)) : t && Ft(t) ? t.removeClass(e, n) : i && i.remove(n);
          }
        },
        je = {},
        Me = (t, e, n, r, i, o, s, a, u) => {
          let c = !1;
          if (It(t, 3)) {
            let l = !0;
            const h = !a;
            h && -2 & s && ((l = !1), (c = !0)),
              l &&
                (c = (function t(e, n, r, i, o, s, a, u, c, l) {
                  let h = !1;
                  if (c < It(e, 3)) {
                    const d = Tt(e, 3, c),
                      f = i[d];
                    let p = (function (t) {
                      return t >= Ve.length && Ve.push(1), Ve[t];
                    })(c);
                    for (; p < f.length; ) {
                      const g = Mt(f, p),
                        m = u && g > u,
                        v = !m && g === u,
                        b = Ut(f, p),
                        y = Rt(b);
                      let w = t(e, n, r, i, o, s, m ? a : Le(a, y, v), m ? u : g, c + 1, l);
                      if (m) {
                        h || (h = w);
                        break;
                      }
                      if (!w && Ue(a, v)) {
                        const t = v && !y,
                          e = t ? l : b,
                          i = t ? d : null;
                        o(n, r, g, s ? s(g, e, 3) : e, i), (w = !0);
                      }
                      (h = w && v), (p += 2);
                    }
                    if (((Ve[c] = p), 1 === f.length || !u)) return t(e, n, r, i, o, s, a, u, c + 1, l);
                  }
                  return h;
                })(t, e, n, r, i, o, s, a || null, 0, u || null)),
              h &&
                (function () {
                  for (let t = 0; t < Ve.length; t++) Ve[t] = 1;
                })();
          }
          return c;
        };
      function Le(t, e, n) {
        let r = t;
        return e || 4 & t || !(n || 1 & t) ? ((r |= 4), (r &= -3)) : ((r |= 2), (r &= -5)), r;
      }
      function Ue(t, e) {
        let n = (1 & t) > 0;
        return n ? 4 & t && e && (n = !1) : 2 & t && (n = e), n;
      }
      const Ve = [];
      function Fe(t, e, n, r) {
        for (let i = 1; i < t.length; i += 2) {
          const o = Mt(t, i);
          if (e <= o) {
            let s = !1;
            if (o === e) {
              const e = t[i];
              (!r && Rt(e)) || ((s = !0), Lt(t, i, n));
            } else (s = !0), t.splice(i, 0, e, n);
            return s;
          }
        }
        return t.push(e, n), !0;
      }
      let ze = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => He()), t;
      })();
      const He = (...t) => {},
        Be = new M('The presence of this token marks an injector as being the root injector.'),
        $e = function (t, e, n) {
          return new Je(t, e, n);
        };
      let qe = (() => {
        class t {
          static create(t, e) {
            return Array.isArray(t) ? $e(t, e, '') : $e(t.providers, t.parent, t.name || '');
          }
        }
        return (
          (t.THROW_IF_NOT_FOUND = U),
          (t.NULL = new $()),
          (t.ngInjectableDef = C({ token: t, providedIn: 'any', factory: () => B(L) })),
          (t.__NG_ELEMENT_ID__ = -1),
          t
        );
      })();
      const We = function (t) {
          return t;
        },
        Ge = [],
        Ke = We,
        Ye = function () {
          return Array.prototype.slice.call(arguments);
        };
      class Je {
        constructor(t, e = qe.NULL, n = null) {
          (this.parent = e), (this.source = n);
          const r = (this._records = new Map());
          r.set(qe, { token: qe, fn: We, deps: Ge, value: this, useNew: !1 }),
            r.set(L, { token: L, fn: We, deps: Ge, value: this, useNew: !1 }),
            (function t(e, n) {
              if (n)
                if ((n = A(n)) instanceof Array) for (let r = 0; r < n.length; r++) t(e, n[r]);
                else {
                  if ('function' == typeof n) throw Xe('Function/Class not supported', n);
                  if (!n || 'object' != typeof n || !n.provide) throw Xe('Unexpected provider', n);
                  {
                    let t = A(n.provide);
                    const r = (function (t) {
                      const e = (function (t) {
                        let e = Ge;
                        const n = t.deps;
                        if (n && n.length) {
                          e = [];
                          for (let t = 0; t < n.length; t++) {
                            let r = 6,
                              i = A(n[t]);
                            if (i instanceof Array)
                              for (let t = 0, e = i; t < e.length; t++) {
                                const n = e[t];
                                n instanceof y || n == y
                                  ? (r |= 1)
                                  : n instanceof _ || n == _
                                  ? (r &= -3)
                                  : n instanceof w || n == w
                                  ? (r &= -5)
                                  : (i = n instanceof b ? n.token : A(n));
                              }
                            e.push({ token: i, options: r });
                          }
                        } else if (t.useExisting) e = [{ token: A(t.useExisting), options: 6 }];
                        else if (!(n || F in t)) throw Xe("'deps' required", t);
                        return e;
                      })(t);
                      let n = We,
                        r = Ge,
                        i = !1,
                        o = A(t.provide);
                      if (F in t) r = t.useValue;
                      else if (t.useFactory) n = t.useFactory;
                      else if (t.useExisting);
                      else if (t.useClass) (i = !0), (n = A(t.useClass));
                      else {
                        if ('function' != typeof o)
                          throw Xe(
                            'StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable',
                            t
                          );
                        (i = !0), (n = o);
                      }
                      return { deps: e, fn: n, useNew: i, value: r };
                    })(n);
                    if (!0 === n.multi) {
                      let r = e.get(t);
                      if (r) {
                        if (r.fn !== Ye) throw Ze(t);
                      } else e.set(t, (r = { token: n.provide, deps: [], useNew: !1, fn: Ye, value: Ge }));
                      (t = n), r.deps.push({ token: t, options: 6 });
                    }
                    const i = e.get(t);
                    if (i && i.fn == Ye) throw Ze(t);
                    e.set(t, r);
                  }
                }
            })(r, t);
        }
        get(t, e, n = S.Default) {
          const r = this._records.get(t);
          try {
            return (function t(e, n, r, i, o, s) {
              try {
                return (function (e, n, r, i, o, s) {
                  let a;
                  if (!n || s & S.SkipSelf) s & S.Self || (a = i.get(e, o, S.Default));
                  else {
                    if (((a = n.value), a == Ke)) throw Error('\u0275Circular dependency');
                    if (a === Ge) {
                      n.value = Ke;
                      let e = void 0,
                        o = n.useNew,
                        s = n.fn,
                        u = n.deps,
                        c = Ge;
                      if (u.length) {
                        c = [];
                        for (let e = 0; e < u.length; e++) {
                          const n = u[e],
                            o = n.options,
                            s = 2 & o ? r.get(n.token) : void 0;
                          c.push(
                            t(n.token, s, r, s || 4 & o ? i : qe.NULL, 1 & o ? null : qe.THROW_IF_NOT_FOUND, S.Default)
                          );
                        }
                      }
                      n.value = a = o ? new s(...c) : s.apply(e, c);
                    }
                  }
                  return a;
                })(e, n, r, i, o, s);
              } catch (a) {
                throw (
                  (a instanceof Error || (a = new Error(a)),
                  (a.ngTempTokenPath = a.ngTempTokenPath || []).unshift(e),
                  n && n.value == Ke && (n.value = Ge),
                  a)
                );
              }
            })(t, r, this._records, this.parent, e, n);
          } catch (i) {
            return (function (t, e, n, r) {
              const i = t.ngTempTokenPath;
              throw (
                (e.__source && i.unshift(e.__source),
                (t.message = q('\n' + t.message, i, 'StaticInjectorError', r)),
                (t.ngTokenPath = i),
                (t.ngTempTokenPath = null),
                t)
              );
            })(i, t, 0, this.source);
          }
        }
        toString() {
          const t = [];
          return this._records.forEach((e, n) => t.push(x(n))), `StaticInjector[${t.join(', ')}]`;
        }
      }
      function Ze(t) {
        return Xe('Cannot mix multi providers and regular providers', t);
      }
      function Xe(t, e) {
        return new Error(q(t, e, 'StaticInjectorError'));
      }
      const Qe = new M('AnalyzeForEntryComponents');
      function tn(t) {
        const e = (void 0)[1];
        e.firstTemplatePass &&
          ((function (t, e, n) {
            const r = t.expandoInstructions,
              i = r.length;
            i >= 2 && r[i - 2] === null.hostBindings ? (r[i - 1] = r[i - 1] + n) : r.push(null.hostBindings, n);
          })(e, 0, t),
          (function (t, e, n) {
            for (let r = 0; r < n; r++) (void 0).push(je), t.blueprint.push(je), t.data.push(null);
          })(e, 0, t));
      }
      let en = null;
      function nn() {
        if (!en) {
          const t = j.Symbol;
          if (t && t.iterator) en = t.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let e = 0; e < t.length; ++e) {
              const n = t[e];
              'entries' !== n && 'size' !== n && Map.prototype[n] === Map.prototype.entries && (en = n);
            }
          }
        }
        return en;
      }
      function rn(t, e) {
        return t === e || ('number' == typeof t && 'number' == typeof e && isNaN(t) && isNaN(e));
      }
      function on(t, e) {
        const n = an(t),
          r = an(e);
        if (n && r)
          return (function (t, e, n) {
            const r = t[nn()](),
              i = e[nn()]();
            for (;;) {
              const t = r.next(),
                e = i.next();
              if (t.done && e.done) return !0;
              if (t.done || e.done) return !1;
              if (!n(t.value, e.value)) return !1;
            }
          })(t, e, on);
        {
          const i = t && ('object' == typeof t || 'function' == typeof t),
            o = e && ('object' == typeof e || 'function' == typeof e);
          return !(n || !i || r || !o) || rn(t, e);
        }
      }
      class sn {
        constructor(t) {
          this.wrapped = t;
        }
        static wrap(t) {
          return new sn(t);
        }
        static unwrap(t) {
          return sn.isWrapped(t) ? t.wrapped : t;
        }
        static isWrapped(t) {
          return t instanceof sn;
        }
      }
      function an(t) {
        return !!un(t) && (Array.isArray(t) || (!(t instanceof Map) && nn() in t));
      }
      function un(t) {
        return null !== t && ('function' == typeof t || 'object' == typeof t);
      }
      function cn() {
        (void 0)[1].firstTemplatePass && (1, vt(gn(void 0), 1), vt(pn(void 0), 1));
      }
      function ln(t) {
        const e = pt(-1, void 0),
          n = pn(e),
          r = (void 0)[7]++;
        dn(-1, n, r, t, !1, !1);
      }
      function hn(t) {
        !(function (t, e) {
          const n = pt(-1, void 0),
            r = gn(n),
            i = (void 0)[7]++;
          dn(-1, r, i, e, !0, !1);
        })(0, t);
      }
      function dn(t, e, n, r, i, o) {
        Re = Me;
        let s = !1;
        if (r !== je) {
          const a = ft(pt(t, void 0), void 0),
            u = (void 0)[n];
          s = Nt(u, r);
          const c = (function (t, e, n) {
            const r = Array.isArray(t) ? t : [null];
            r[0] = e || null;
            for (let a = 1; a < r.length; a += 2) Lt(r, a, null);
            let i,
              o = null,
              s = !1;
            if (
              ('string' == typeof e
                ? e.length && ((o = e.split(/\s+/)), (s = !0))
                : ((o = e ? Object.keys(e) : null), (i = e)),
              o)
            )
              for (let a = 0; a < o.length; a++) {
                const t = o[a];
                Fe(r, n ? Pt(t) : t, !!s || i[t], !0);
              }
            return r;
          })(u, r, !i);
          i
            ? (function (t, e, n, r, i, o, s, a) {
                const u = dt(n, Ot(t));
                (!Te(t, void 0, 0, null, i, o, s, a, !1) && !a) || (u.classesBitMask |= 1);
              })(e, 0, a, 0, n, c, o, s)
            : (function (t, e, n, r, i, o, s, a, u) {
                const c = dt(n, Ot(t));
                (!Te(t, void 0, 0, null, i, o, a, u, !0) && !u) || (c.stylesBitMask |= 1);
              })(e, 0, a, 0, n, c, gt(), o, s);
        }
        return s;
      }
      function fn() {
        const t = pt(-1, void 0),
          e = (function (t, e) {
            return 3 === t.type ? (void 0)[12] : null;
          })(t),
          n = ft(t, void 0),
          r = gt();
        (function (t, e, n, r, i, o, s) {
          const a = n ? Ot(n) : !!r && Ot(r),
            u = xt(n, o),
            c = xt(r, o);
          Ie.length && (u || c) && xe();
          const l = dt(i, a),
            h = Ne(t, i, e, n, u, l.classesBitMask, De, null),
            d = Ne(t, i, e, r, c, l.stylesBitMask, Pe, s);
          h && d
            ? ((ut = null),
              (ht = null),
              a &&
                (function (t) {
                  ct.delete(t);
                })(i))
            : a &&
              (function (t, e) {
                ct.set(t, e);
              })(i, l);
        })(e, void 0, gn(t), pn(t), n, 1, r),
          (lt = null);
      }
      function pn(t) {
        return mn(t, !1);
      }
      function gn(t) {
        return mn(t, !0);
      }
      function mn(t, e) {
        let n = e ? t.classes : t.styles;
        return jt(n) || ((n = [n || [''], 0, 0, 1, 0, '--MAP--']), e ? (t.classes = n) : (t.styles = n)), n;
      }
      function vn(t) {
        return !!t && 'function' == typeof t.then;
      }
      function bn(t) {
        return !!t && 'function' == typeof t.subscribe;
      }
      class yn {
        constructor(t, e, n) {
          (this.previousValue = t), (this.currentValue = e), (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      class wn {}
      function _n(t) {
        const e = Error(`No component factory found for ${x(t)}. Did you add it to @NgModule.entryComponents?`);
        return (e[Sn] = t), e;
      }
      const Sn = 'ngComponent';
      class En {
        resolveComponentFactory(t) {
          throw _n(t);
        }
      }
      let Cn = (() => {
        class t {}
        return (t.NULL = new En()), t;
      })();
      class In {
        constructor(t, e, n) {
          (this._parent = e), (this._ngModule = n), (this._factories = new Map());
          for (let r = 0; r < t.length; r++) {
            const e = t[r];
            this._factories.set(e.componentType, e);
          }
        }
        resolveComponentFactory(t) {
          let e = this._factories.get(t);
          if ((!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e)) throw _n(t);
          return new Tn(e, this._ngModule);
        }
      }
      class Tn extends wn {
        constructor(t, e) {
          super(),
            (this.factory = t),
            (this.ngModule = e),
            (this.selector = t.selector),
            (this.componentType = t.componentType),
            (this.ngContentSelectors = t.ngContentSelectors),
            (this.inputs = t.inputs),
            (this.outputs = t.outputs);
        }
        create(t, e, n, r) {
          return this.factory.create(t, e, n, r || this.ngModule);
        }
      }
      function xn(...t) {}
      let kn = (() => {
        class t {
          constructor(t) {
            this.nativeElement = t;
          }
        }
        return (t.__NG_ELEMENT_ID__ = () => On(t)), t;
      })();
      const On = xn;
      class An {}
      class Nn {}
      const Rn = (function () {
        var t = { Important: 1, DashCase: 2 };
        return (t[t.Important] = 'Important'), (t[t.DashCase] = 'DashCase'), t;
      })();
      let Pn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Dn()), t;
      })();
      const Dn = xn;
      class jn {
        constructor(t) {
          (this.full = t),
            (this.major = t.split('.')[0]),
            (this.minor = t.split('.')[1]),
            (this.patch = t.split('.').slice(2).join('.'));
        }
      }
      const Mn = new jn('8.2.14');
      class Ln {
        constructor() {}
        supports(t) {
          return an(t);
        }
        create(t) {
          return new Vn(t);
        }
      }
      const Un = (t, e) => e;
      class Vn {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Un);
        }
        forEachItem(t) {
          let e;
          for (e = this._itHead; null !== e; e = e._next) t(e);
        }
        forEachOperation(t) {
          let e = this._itHead,
            n = this._removalsHead,
            r = 0,
            i = null;
          for (; e || n; ) {
            const o = !n || (e && e.currentIndex < Bn(n, r, i)) ? e : n,
              s = Bn(o, r, i),
              a = o.currentIndex;
            if (o === n) r--, (n = n._nextRemoved);
            else if (((e = e._next), null == o.previousIndex)) r++;
            else {
              i || (i = []);
              const t = s - r,
                e = a - r;
              if (t != e) {
                for (let n = 0; n < t; n++) {
                  const r = n < i.length ? i[n] : (i[n] = 0),
                    o = r + n;
                  e <= o && o < t && (i[n] = r + 1);
                }
                i[o.previousIndex] = e - t;
              }
            }
            s !== a && t(o, s, a);
          }
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachMovedItem(t) {
          let e;
          for (e = this._movesHead; null !== e; e = e._nextMoved) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        forEachIdentityChange(t) {
          let e;
          for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e);
        }
        diff(t) {
          if ((null == t && (t = []), !an(t)))
            throw new Error(`Error trying to diff '${x(t)}'. Only arrays and iterables are allowed`);
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e,
            n,
            r,
            i = this._itHead,
            o = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let e = 0; e < this.length; e++)
              (n = t[e]),
                (r = this._trackByFn(e, n)),
                null !== i && rn(i.trackById, r)
                  ? (o && (i = this._verifyReinsertion(i, n, r, e)), rn(i.item, n) || this._addIdentityChange(i, n))
                  : ((i = this._mismatch(i, n, r, e)), (o = !0)),
                (i = i._next);
          } else
            (e = 0),
              (function (t, e) {
                if (Array.isArray(t)) for (let n = 0; n < t.length; n++) e(t[n]);
                else {
                  const n = t[nn()]();
                  let r;
                  for (; !(r = n.next()).done; ) e(r.value);
                }
              })(t, (t) => {
                (r = this._trackByFn(e, t)),
                  null !== i && rn(i.trackById, r)
                    ? (o && (i = this._verifyReinsertion(i, t, r, e)), rn(i.item, t) || this._addIdentityChange(i, t))
                    : ((i = this._mismatch(i, t, r, e)), (o = !0)),
                  (i = i._next),
                  e++;
              }),
              (this.length = e);
          return this._truncate(i), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t, e;
            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e)
              (t.previousIndex = t.currentIndex), (e = t._nextMoved);
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, e, n, r) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r))
              ? (rn(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, i, r))
              : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null))
              ? (rn(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, i, r))
              : (t = this._addAfter(new Fn(e, n), i, r)),
            t
          );
        }
        _verifyReinsertion(t, e, n, r) {
          let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, r))
              : t.currentIndex != r && ((t.currentIndex = r), this._addToMoves(t, r)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const e = t._next;
            this._addToRemovals(this._unlink(t)), (t = e);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail && (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail && (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, e, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const r = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === r ? (this._removalsHead = i) : (r._nextRemoved = i),
            null === i ? (this._removalsTail = r) : (i._prevRemoved = r),
            this._insertAfter(t, e, n),
            this._addToMoves(t, n),
            t
          );
        }
        _moveAfter(t, e, n) {
          return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t;
        }
        _addAfter(t, e, n) {
          return (
            this._insertAfter(t, e, n),
            (this._additionsTail =
              null === this._additionsTail ? (this._additionsHead = t) : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, e, n) {
          const r = null === e ? this._itHead : e._next;
          return (
            (t._next = r),
            (t._prev = e),
            null === r ? (this._itTail = t) : (r._prev = t),
            null === e ? (this._itHead = t) : (e._next = t),
            null === this._linkedRecords && (this._linkedRecords = new Hn()),
            this._linkedRecords.put(t),
            (t.currentIndex = n),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const e = t._prev,
            n = t._next;
          return null === e ? (this._itHead = n) : (e._next = n), null === n ? (this._itTail = e) : (n._prev = e), t;
        }
        _addToMoves(t, e) {
          return t.previousIndex === e
            ? t
            : ((this._movesTail = null === this._movesTail ? (this._movesHead = t) : (this._movesTail._nextMoved = t)),
              t);
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords && (this._unlinkedRecords = new Hn()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t), (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail), (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, e) {
          return (
            (t.item = e),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class Fn {
        constructor(t, e) {
          (this.item = t),
            (this.trackById = e),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class zn {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t), (t._nextDup = null), (t._prevDup = null))
            : ((this._tail._nextDup = t), (t._prevDup = this._tail), (t._nextDup = null), (this._tail = t));
        }
        get(t, e) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if ((null === e || e <= n.currentIndex) && rn(n.trackById, t)) return n;
          return null;
        }
        remove(t) {
          const e = t._prevDup,
            n = t._nextDup;
          return (
            null === e ? (this._head = n) : (e._nextDup = n),
            null === n ? (this._tail = e) : (n._prevDup = e),
            null === this._head
          );
        }
      }
      class Hn {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const e = t.trackById;
          let n = this.map.get(e);
          n || ((n = new zn()), this.map.set(e, n)), n.add(t);
        }
        get(t, e) {
          const n = this.map.get(t);
          return n ? n.get(t, e) : null;
        }
        remove(t) {
          const e = t.trackById;
          return this.map.get(e).remove(t) && this.map.delete(e), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function Bn(t, e, n) {
        const r = t.previousIndex;
        if (null === r) return r;
        let i = 0;
        return n && r < n.length && (i = n[r]), r + e + i;
      }
      class $n {
        constructor() {}
        supports(t) {
          return t instanceof Map || un(t);
        }
        create() {
          return new qn();
        }
      }
      class qn {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead;
        }
        forEachItem(t) {
          let e;
          for (e = this._mapHead; null !== e; e = e._next) t(e);
        }
        forEachPreviousItem(t) {
          let e;
          for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e);
        }
        forEachChangedItem(t) {
          let e;
          for (e = this._changesHead; null !== e; e = e._nextChanged) t(e);
        }
        forEachAddedItem(t) {
          let e;
          for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e);
        }
        forEachRemovedItem(t) {
          let e;
          for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || un(t)))
              throw new Error(`Error trying to diff '${x(t)}'. Only maps and objects are allowed`);
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let e = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (t, n) => {
              if (e && e.key === n) this._maybeAddToChanges(e, t), (this._appendAfter = e), (e = e._next);
              else {
                const r = this._getOrCreateRecordForKey(n, t);
                e = this._insertBeforeOrAppend(e, r);
              }
            }),
            e)
          ) {
            e._prev && (e._prev._next = null), (this._removalsHead = e);
            for (let t = e; null !== t; t = t._nextRemoved)
              t === this._mapHead && (this._mapHead = null),
                this._records.delete(t.key),
                (t._nextRemoved = t._next),
                (t.previousValue = t.currentValue),
                (t.currentValue = null),
                (t._prev = null),
                (t._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, e) {
          if (t) {
            const n = t._prev;
            return (
              (e._next = t),
              (e._prev = n),
              (t._prev = e),
              n && (n._next = e),
              t === this._mapHead && (this._mapHead = e),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter ? ((this._appendAfter._next = e), (e._prev = this._appendAfter)) : (this._mapHead = e),
            (this._appendAfter = e),
            null
          );
        }
        _getOrCreateRecordForKey(t, e) {
          if (this._records.has(t)) {
            const n = this._records.get(t);
            this._maybeAddToChanges(n, e);
            const r = n._prev,
              i = n._next;
            return r && (r._next = i), i && (i._prev = r), (n._next = null), (n._prev = null), n;
          }
          const n = new Wn(t);
          return this._records.set(t, n), (n.currentValue = e), this._addToAdditions(n), n;
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next)
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, e) {
          rn(e, t.currentValue) || ((t.previousValue = t.currentValue), (t.currentValue = e), this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, e) {
          t instanceof Map ? t.forEach(e) : Object.keys(t).forEach((n) => e(t[n], n));
        }
      }
      class Wn {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      let Gn = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (null != n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n) throw new Error('Cannot extend IterableDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new _(), new y()]]
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (null != e) return e;
              throw new Error(
                `Cannot find a differ supporting object '${t}' of type '${((n = t), n.name || typeof n)}'`
              );
              var n;
            }
          }
          return (t.ngInjectableDef = C({ token: t, providedIn: 'root', factory: () => new t([new Ln()]) })), t;
        })(),
        Kn = (() => {
          class t {
            constructor(t) {
              this.factories = t;
            }
            static create(e, n) {
              if (n) {
                const t = n.factories.slice();
                e = e.concat(t);
              }
              return new t(e);
            }
            static extend(e) {
              return {
                provide: t,
                useFactory: (n) => {
                  if (!n) throw new Error('Cannot extend KeyValueDiffers without a parent injector');
                  return t.create(e, n);
                },
                deps: [[t, new _(), new y()]]
              };
            }
            find(t) {
              const e = this.factories.find((e) => e.supports(t));
              if (e) return e;
              throw new Error(`Cannot find a differ supporting object '${t}'`);
            }
          }
          return (t.ngInjectableDef = C({ token: t, providedIn: 'root', factory: () => new t([new $n()]) })), t;
        })();
      const Yn = [new $n()],
        Jn = new Gn([new Ln()]),
        Zn = new Kn(Yn);
      let Xn = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => Qn(t, kn)), t;
      })();
      const Qn = xn;
      let tr = (() => {
        class t {}
        return (t.__NG_ELEMENT_ID__ = () => er(t, kn)), t;
      })();
      const er = xn;
      function nr(t, e, n, r) {
        let i = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '${e}'. Current value: '${n}'.`;
        return (
          r &&
            (i +=
              ' It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?'),
          (function (t, e) {
            const n = new Error(t);
            return rr(n, e), n;
          })(i, t)
        );
      }
      function rr(t, e) {
        (t.ngDebugContext = e), (t.ngErrorLogger = e.logError.bind(e));
      }
      function ir(t) {
        return new Error(`ViewDestroyedError: Attempt to use a destroyed view: ${t}`);
      }
      function or(t, e, n) {
        const r = t.state,
          i = 1792 & r;
        return i === e ? ((t.state = (-1793 & r) | n), (t.initIndex = -1), !0) : i === n;
      }
      function sr(t, e, n) {
        return (1792 & t.state) === e && t.initIndex <= n && ((t.initIndex = n + 1), !0);
      }
      function ar(t, e) {
        return t.nodes[e];
      }
      function ur(t, e) {
        return t.nodes[e];
      }
      function cr(t, e) {
        return t.nodes[e];
      }
      function lr(t, e) {
        return t.nodes[e];
      }
      function hr(t, e) {
        return t.nodes[e];
      }
      const dr = {
          setCurrentNode: void 0,
          createRootView: void 0,
          createEmbeddedView: void 0,
          createComponentView: void 0,
          createNgModuleRef: void 0,
          overrideProvider: void 0,
          overrideComponentView: void 0,
          clearOverrides: void 0,
          checkAndUpdateView: void 0,
          checkNoChangesView: void 0,
          destroyView: void 0,
          resolveDep: void 0,
          createDebugContext: void 0,
          handleEvent: void 0,
          updateDirectives: void 0,
          updateRenderer: void 0,
          dirtyParentQueries: void 0
        },
        fr = () => {},
        pr = new Map();
      function gr(t) {
        let e = pr.get(t);
        return e || ((e = x(t) + '_' + pr.size), pr.set(t, e)), e;
      }
      function mr(t) {
        return { id: '$$undefined', styles: t.styles, encapsulation: t.encapsulation, data: t.data };
      }
      let vr = 0;
      function br(t, e, n, r) {
        return !(!(2 & t.state) && rn(t.oldValues[e.bindingIndex + n], r));
      }
      function yr(t, e, n, r) {
        return !!br(t, e, n, r) && ((t.oldValues[e.bindingIndex + n] = r), !0);
      }
      function wr(t, e, n, r) {
        const i = t.oldValues[e.bindingIndex + n];
        if (1 & t.state || !on(i, r)) {
          const o = e.bindings[n].name;
          throw nr(dr.createDebugContext(t, e.nodeIndex), `${o}: ${i}`, `${o}: ${r}`, 0 != (1 & t.state));
        }
      }
      function _r(t) {
        let e = t;
        for (; e; ) 2 & e.def.flags && (e.state |= 8), (e = e.viewContainerParent || e.parent);
      }
      function Sr(t, e) {
        let n = t;
        for (; n && n !== e; ) (n.state |= 64), (n = n.viewContainerParent || n.parent);
      }
      function Er(t, e, n, r) {
        try {
          return _r(33554432 & t.def.nodes[e].flags ? ur(t, e).componentView : t), dr.handleEvent(t, e, n, r);
        } catch (i) {
          t.root.errorHandler.handleError(i);
        }
      }
      function Cr(t) {
        return t.parent ? ur(t.parent, t.parentNodeDef.nodeIndex) : null;
      }
      function Ir(t) {
        return t.parent ? t.parentNodeDef.parent : null;
      }
      function Tr(t, e) {
        switch (201347067 & e.flags) {
          case 1:
            return ur(t, e.nodeIndex).renderElement;
          case 2:
            return ar(t, e.nodeIndex).renderText;
        }
      }
      function xr(t, e) {
        return t ? `${t}:${e}` : e;
      }
      function kr(t) {
        return !!t.parent && !!(32768 & t.parentNodeDef.flags);
      }
      function Or(t) {
        return !(!t.parent || 32768 & t.parentNodeDef.flags);
      }
      function Ar(t) {
        const e = {};
        let n = 0;
        const r = {};
        return (
          t &&
            t.forEach(([t, i]) => {
              'number' == typeof t
                ? ((e[t] = i),
                  (n |= (function (t) {
                    return 1 << t % 32;
                  })(t)))
                : (r[t] = i);
            }),
          { matchedQueries: e, references: r, matchedQueryIds: n }
        );
      }
      function Nr(t, e) {
        return t.map((t) => {
          let n, r;
          return (
            Array.isArray(t) ? ([r, n] = t) : ((r = 0), (n = t)),
            n &&
              ('function' == typeof n || 'object' == typeof n) &&
              e &&
              Object.defineProperty(n, '__source', { value: e, configurable: !0 }),
            { flags: r, token: n, tokenKey: gr(n) }
          );
        });
      }
      function Rr(t, e, n) {
        let r = n.renderParent;
        return r
          ? 0 == (1 & r.flags) ||
            0 == (33554432 & r.flags) ||
            (r.element.componentRendererType && r.element.componentRendererType.encapsulation === Z.Native)
            ? ur(t, n.renderParent.nodeIndex).renderElement
            : void 0
          : e;
      }
      const Pr = new WeakMap();
      function Dr(t) {
        let e = Pr.get(t);
        return e || ((e = t(() => fr)), (e.factory = t), Pr.set(t, e)), e;
      }
      function jr(t, e, n, r, i) {
        3 === e && (n = t.renderer.parentNode(Tr(t, t.def.lastRenderRootNode))),
          Mr(t, e, 0, t.def.nodes.length - 1, n, r, i);
      }
      function Mr(t, e, n, r, i, o, s) {
        for (let a = n; a <= r; a++) {
          const n = t.def.nodes[a];
          11 & n.flags && Ur(t, n, e, i, o, s), (a += n.childCount);
        }
      }
      function Lr(t, e, n, r, i, o) {
        let s = t;
        for (; s && !kr(s); ) s = s.parent;
        const a = s.parent,
          u = Ir(s),
          c = u.nodeIndex + u.childCount;
        for (let l = u.nodeIndex + 1; l <= c; l++) {
          const t = a.def.nodes[l];
          t.ngContentIndex === e && Ur(a, t, n, r, i, o), (l += t.childCount);
        }
        if (!a.parent) {
          const s = t.root.projectableNodes[e];
          if (s) for (let e = 0; e < s.length; e++) Vr(t, s[e], n, r, i, o);
        }
      }
      function Ur(t, e, n, r, i, o) {
        if (8 & e.flags) Lr(t, e.ngContent.index, n, r, i, o);
        else {
          const s = Tr(t, e);
          if (
            (3 === n && 33554432 & e.flags && 48 & e.bindingFlags
              ? (16 & e.bindingFlags && Vr(t, s, n, r, i, o),
                32 & e.bindingFlags && Vr(ur(t, e.nodeIndex).componentView, s, n, r, i, o))
              : Vr(t, s, n, r, i, o),
            16777216 & e.flags)
          ) {
            const s = ur(t, e.nodeIndex).viewContainer._embeddedViews;
            for (let t = 0; t < s.length; t++) jr(s[t], n, r, i, o);
          }
          1 & e.flags && !e.element.name && Mr(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, i, o);
        }
      }
      function Vr(t, e, n, r, i, o) {
        const s = t.renderer;
        switch (n) {
          case 1:
            s.appendChild(r, e);
            break;
          case 2:
            s.insertBefore(r, e, i);
            break;
          case 3:
            s.removeChild(r, e);
            break;
          case 0:
            o.push(e);
        }
      }
      const Fr = /^:([^:]+):(.+)$/;
      function zr(t) {
        if (':' === t[0]) {
          const e = t.match(Fr);
          return [e[1], e[2]];
        }
        return ['', t];
      }
      function Hr(t) {
        let e = 0;
        for (let n = 0; n < t.length; n++) e |= t[n].flags;
        return e;
      }
      function Br(t, e, n, r, i, o, s, a, u, c, l, h, d, f, p, g, m, v, b, y) {
        switch (t) {
          case 1:
            return e + $r(n) + r;
          case 2:
            return e + $r(n) + r + $r(i) + o;
          case 3:
            return e + $r(n) + r + $r(i) + o + $r(s) + a;
          case 4:
            return e + $r(n) + r + $r(i) + o + $r(s) + a + $r(u) + c;
          case 5:
            return e + $r(n) + r + $r(i) + o + $r(s) + a + $r(u) + c + $r(l) + h;
          case 6:
            return e + $r(n) + r + $r(i) + o + $r(s) + a + $r(u) + c + $r(l) + h + $r(d) + f;
          case 7:
            return e + $r(n) + r + $r(i) + o + $r(s) + a + $r(u) + c + $r(l) + h + $r(d) + f + $r(p) + g;
          case 8:
            return e + $r(n) + r + $r(i) + o + $r(s) + a + $r(u) + c + $r(l) + h + $r(d) + f + $r(p) + g + $r(m) + v;
          case 9:
            return (
              e +
              $r(n) +
              r +
              $r(i) +
              o +
              $r(s) +
              a +
              $r(u) +
              c +
              $r(l) +
              h +
              $r(d) +
              f +
              $r(p) +
              g +
              $r(m) +
              v +
              $r(b) +
              y
            );
          default:
            throw new Error('Does not support more than 9 expressions');
        }
      }
      function $r(t) {
        return null != t ? t.toString() : '';
      }
      const qr = new Object(),
        Wr = gr(qe),
        Gr = gr(L),
        Kr = gr(W);
      function Yr(t, e, n, r) {
        return (n = A(n)), { index: -1, deps: Nr(r, x(e)), flags: t, token: e, value: n };
      }
      function Jr(t) {
        const e = {},
          n = [];
        let r = !1;
        for (let i = 0; i < t.length; i++) {
          const o = t[i];
          o.token === Be && !0 === o.value && (r = !0),
            1073741824 & o.flags && n.push(o.token),
            (o.index = i),
            (e[gr(o.token)] = o);
        }
        return { factory: null, providersByKey: e, providers: t, modules: n, isRoot: r };
      }
      function Zr(t, e, n = qe.THROW_IF_NOT_FOUND) {
        const r = H(t);
        try {
          if (8 & e.flags) return e.token;
          if ((2 & e.flags && (n = null), 1 & e.flags)) return t._parent.get(e.token, n);
          const s = e.tokenKey;
          switch (s) {
            case Wr:
            case Gr:
            case Kr:
              return t;
          }
          const a = t._def.providersByKey[s];
          let u;
          if (a) {
            let e = t._providers[a.index];
            return void 0 === e && (e = t._providers[a.index] = Xr(t, a)), e === qr ? void 0 : e;
          }
          if (
            (u = I(e.token)) &&
            ((i = t),
            null != (o = u).providedIn &&
              ((function (t, e) {
                return t._def.modules.indexOf(e) > -1;
              })(i, o.providedIn) ||
                ('root' === o.providedIn && i._def.isRoot)))
          ) {
            const n = t._providers.length;
            return (
              (t._def.providers[n] = t._def.providersByKey[e.tokenKey] = {
                flags: 5120,
                value: u.factory,
                deps: [],
                index: n,
                token: e.token
              }),
              (t._providers[n] = qr),
              (t._providers[n] = Xr(t, t._def.providersByKey[e.tokenKey]))
            );
          }
          return 4 & e.flags ? n : t._parent.get(e.token, n);
        } finally {
          H(r);
        }
        var i, o;
      }
      function Xr(t, e) {
        let n;
        switch (201347067 & e.flags) {
          case 512:
            n = (function (t, e, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return new e();
                case 1:
                  return new e(Zr(t, n[0]));
                case 2:
                  return new e(Zr(t, n[0]), Zr(t, n[1]));
                case 3:
                  return new e(Zr(t, n[0]), Zr(t, n[1]), Zr(t, n[2]));
                default:
                  const i = new Array(r);
                  for (let e = 0; e < r; e++) i[e] = Zr(t, n[e]);
                  return new e(...i);
              }
            })(t, e.value, e.deps);
            break;
          case 1024:
            n = (function (t, e, n) {
              const r = n.length;
              switch (r) {
                case 0:
                  return e();
                case 1:
                  return e(Zr(t, n[0]));
                case 2:
                  return e(Zr(t, n[0]), Zr(t, n[1]));
                case 3:
                  return e(Zr(t, n[0]), Zr(t, n[1]), Zr(t, n[2]));
                default:
                  const i = Array(r);
                  for (let e = 0; e < r; e++) i[e] = Zr(t, n[e]);
                  return e(...i);
              }
            })(t, e.value, e.deps);
            break;
          case 2048:
            n = Zr(t, e.deps[0]);
            break;
          case 256:
            n = e.value;
        }
        return (
          n === qr ||
            null === n ||
            'object' != typeof n ||
            131072 & e.flags ||
            'function' != typeof n.ngOnDestroy ||
            (e.flags |= 131072),
          void 0 === n ? qr : n
        );
      }
      function Qr(t, e) {
        const n = t.viewContainer._embeddedViews;
        if (((null == e || e >= n.length) && (e = n.length - 1), e < 0)) return null;
        const r = n[e];
        return (r.viewContainerParent = null), Y(n, e), dr.dirtyParentQueries(r), ei(r), r;
      }
      function ti(t, e, n) {
        const r = e ? Tr(e, e.def.lastRenderRootNode) : t.renderElement,
          i = n.renderer.parentNode(r),
          o = n.renderer.nextSibling(r);
        jr(n, 2, i, o, void 0);
      }
      function ei(t) {
        jr(t, 3, null, null, void 0);
      }
      const ni = new Object();
      function ri(t, e, n, r, i, o) {
        return new ii(t, e, n, r, i, o);
      }
      class ii extends wn {
        constructor(t, e, n, r, i, o) {
          super(),
            (this.selector = t),
            (this.componentType = e),
            (this._inputs = r),
            (this._outputs = i),
            (this.ngContentSelectors = o),
            (this.viewDefFactory = n);
        }
        get inputs() {
          const t = [],
            e = this._inputs;
          for (let n in e) t.push({ propName: n, templateName: e[n] });
          return t;
        }
        get outputs() {
          const t = [];
          for (let e in this._outputs) t.push({ propName: e, templateName: this._outputs[e] });
          return t;
        }
        create(t, e, n, r) {
          if (!r) throw new Error('ngModule should be provided');
          const i = Dr(this.viewDefFactory),
            o = i.nodes[0].element.componentProvider.nodeIndex,
            s = dr.createRootView(t, e || [], n, i, r, ni),
            a = cr(s, o).instance;
          return n && s.renderer.setAttribute(ur(s, 0).renderElement, 'ng-version', Mn.full), new oi(s, new ci(s), a);
        }
      }
      class oi extends class {} {
        constructor(t, e, n) {
          super(),
            (this._view = t),
            (this._viewRef = e),
            (this._component = n),
            (this._elDef = this._view.def.nodes[0]),
            (this.hostView = e),
            (this.changeDetectorRef = e),
            (this.instance = n);
        }
        get location() {
          return new kn(ur(this._view, this._elDef.nodeIndex).renderElement);
        }
        get injector() {
          return new fi(this._view, this._elDef);
        }
        get componentType() {
          return this._component.constructor;
        }
        destroy() {
          this._viewRef.destroy();
        }
        onDestroy(t) {
          this._viewRef.onDestroy(t);
        }
      }
      function si(t, e, n) {
        return new ai(t, e, n);
      }
      class ai {
        constructor(t, e, n) {
          (this._view = t), (this._elDef = e), (this._data = n), (this._embeddedViews = []);
        }
        get element() {
          return new kn(this._data.renderElement);
        }
        get injector() {
          return new fi(this._view, this._elDef);
        }
        get parentInjector() {
          let t = this._view,
            e = this._elDef.parent;
          for (; !e && t; ) (e = Ir(t)), (t = t.parent);
          return t ? new fi(t, e) : new fi(this._view, null);
        }
        clear() {
          for (let t = this._embeddedViews.length - 1; t >= 0; t--) {
            const e = Qr(this._data, t);
            dr.destroyView(e);
          }
        }
        get(t) {
          const e = this._embeddedViews[t];
          if (e) {
            const t = new ci(e);
            return t.attachToViewContainerRef(this), t;
          }
          return null;
        }
        get length() {
          return this._embeddedViews.length;
        }
        createEmbeddedView(t, e, n) {
          const r = t.createEmbeddedView(e || {});
          return this.insert(r, n), r;
        }
        createComponent(t, e, n, r, i) {
          const o = n || this.parentInjector;
          i || t instanceof Tn || (i = o.get(W));
          const s = t.create(o, r, void 0, i);
          return this.insert(s.hostView, e), s;
        }
        insert(t, e) {
          if (t.destroyed) throw new Error('Cannot insert a destroyed View in a ViewContainer!');
          const n = t;
          return (
            (function (t, e, n, r) {
              let i = e.viewContainer._embeddedViews;
              null == n && (n = i.length),
                (r.viewContainerParent = t),
                K(i, n, r),
                (function (t, e) {
                  const n = Cr(e);
                  if (!n || n === t || 16 & e.state) return;
                  e.state |= 16;
                  let r = n.template._projectedViews;
                  r || (r = n.template._projectedViews = []),
                    r.push(e),
                    (function (t, e) {
                      if (4 & e.flags) return;
                      (t.nodeFlags |= 4), (e.flags |= 4);
                      let n = e.parent;
                      for (; n; ) (n.childFlags |= 4), (n = n.parent);
                    })(e.parent.def, e.parentNodeDef);
                })(e, r),
                dr.dirtyParentQueries(r),
                ti(e, n > 0 ? i[n - 1] : null, r);
            })(this._view, this._data, e, n._view),
            n.attachToViewContainerRef(this),
            t
          );
        }
        move(t, e) {
          if (t.destroyed) throw new Error('Cannot move a destroyed View in a ViewContainer!');
          const n = this._embeddedViews.indexOf(t._view);
          return (
            (function (t, e, n) {
              const r = t.viewContainer._embeddedViews,
                i = r[e];
              Y(r, e),
                null == n && (n = r.length),
                K(r, n, i),
                dr.dirtyParentQueries(i),
                ei(i),
                ti(t, n > 0 ? r[n - 1] : null, i);
            })(this._data, n, e),
            t
          );
        }
        indexOf(t) {
          return this._embeddedViews.indexOf(t._view);
        }
        remove(t) {
          const e = Qr(this._data, t);
          e && dr.destroyView(e);
        }
        detach(t) {
          const e = Qr(this._data, t);
          return e ? new ci(e) : null;
        }
      }
      function ui(t) {
        return new ci(t);
      }
      class ci {
        constructor(t) {
          (this._view = t), (this._viewContainerRef = null), (this._appRef = null);
        }
        get rootNodes() {
          return (function (t) {
            const e = [];
            return jr(t, 0, void 0, void 0, e), e;
          })(this._view);
        }
        get context() {
          return this._view.context;
        }
        get destroyed() {
          return 0 != (128 & this._view.state);
        }
        markForCheck() {
          _r(this._view);
        }
        detach() {
          this._view.state &= -5;
        }
        detectChanges() {
          const t = this._view.root.rendererFactory;
          t.begin && t.begin();
          try {
            dr.checkAndUpdateView(this._view);
          } finally {
            t.end && t.end();
          }
        }
        checkNoChanges() {
          dr.checkNoChangesView(this._view);
        }
        reattach() {
          this._view.state |= 4;
        }
        onDestroy(t) {
          this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t);
        }
        destroy() {
          this._appRef
            ? this._appRef.detachView(this)
            : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)),
            dr.destroyView(this._view);
        }
        detachFromAppRef() {
          (this._appRef = null), ei(this._view), dr.dirtyParentQueries(this._view);
        }
        attachToAppRef(t) {
          if (this._viewContainerRef) throw new Error('This view is already attached to a ViewContainer!');
          this._appRef = t;
        }
        attachToViewContainerRef(t) {
          if (this._appRef) throw new Error('This view is already attached directly to the ApplicationRef!');
          this._viewContainerRef = t;
        }
      }
      function li(t, e) {
        return new hi(t, e);
      }
      class hi extends Xn {
        constructor(t, e) {
          super(), (this._parentView = t), (this._def = e);
        }
        createEmbeddedView(t) {
          return new ci(dr.createEmbeddedView(this._parentView, this._def, this._def.element.template, t));
        }
        get elementRef() {
          return new kn(ur(this._parentView, this._def.nodeIndex).renderElement);
        }
      }
      function di(t, e) {
        return new fi(t, e);
      }
      class fi {
        constructor(t, e) {
          (this.view = t), (this.elDef = e);
        }
        get(t, e = qe.THROW_IF_NOT_FOUND) {
          return dr.resolveDep(
            this.view,
            this.elDef,
            !!this.elDef && 0 != (33554432 & this.elDef.flags),
            { flags: 0, token: t, tokenKey: gr(t) },
            e
          );
        }
      }
      function pi(t, e) {
        const n = t.def.nodes[e];
        if (1 & n.flags) {
          const e = ur(t, n.nodeIndex);
          return n.element.template ? e.template : e.renderElement;
        }
        if (2 & n.flags) return ar(t, n.nodeIndex).renderText;
        if (20240 & n.flags) return cr(t, n.nodeIndex).instance;
        throw new Error(`Illegal state: read nodeValue for node index ${e}`);
      }
      function gi(t) {
        return new mi(t.renderer);
      }
      class mi {
        constructor(t) {
          this.delegate = t;
        }
        selectRootElement(t) {
          return this.delegate.selectRootElement(t);
        }
        createElement(t, e) {
          const [n, r] = zr(e),
            i = this.delegate.createElement(r, n);
          return t && this.delegate.appendChild(t, i), i;
        }
        createViewRoot(t) {
          return t;
        }
        createTemplateAnchor(t) {
          const e = this.delegate.createComment('');
          return t && this.delegate.appendChild(t, e), e;
        }
        createText(t, e) {
          const n = this.delegate.createText(e);
          return t && this.delegate.appendChild(t, n), n;
        }
        projectNodes(t, e) {
          for (let n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n]);
        }
        attachViewAfter(t, e) {
          const n = this.delegate.parentNode(t),
            r = this.delegate.nextSibling(t);
          for (let i = 0; i < e.length; i++) this.delegate.insertBefore(n, e[i], r);
        }
        detachView(t) {
          for (let e = 0; e < t.length; e++) {
            const n = t[e],
              r = this.delegate.parentNode(n);
            this.delegate.removeChild(r, n);
          }
        }
        destroyView(t, e) {
          for (let n = 0; n < e.length; n++) this.delegate.destroyNode(e[n]);
        }
        listen(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        listenGlobal(t, e, n) {
          return this.delegate.listen(t, e, n);
        }
        setElementProperty(t, e, n) {
          this.delegate.setProperty(t, e, n);
        }
        setElementAttribute(t, e, n) {
          const [r, i] = zr(e);
          null != n ? this.delegate.setAttribute(t, i, n, r) : this.delegate.removeAttribute(t, i, r);
        }
        setBindingDebugInfo(t, e, n) {}
        setElementClass(t, e, n) {
          n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e);
        }
        setElementStyle(t, e, n) {
          null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e);
        }
        invokeElementMethod(t, e, n) {
          t[e].apply(t, n);
        }
        setText(t, e) {
          this.delegate.setValue(t, e);
        }
        animate() {
          throw new Error('Renderer.animate is no longer supported!');
        }
      }
      function vi(t, e, n, r) {
        return new bi(t, e, n, r);
      }
      class bi {
        constructor(t, e, n, r) {
          (this._moduleType = t),
            (this._parent = e),
            (this._bootstrapComponents = n),
            (this._def = r),
            (this._destroyListeners = []),
            (this._destroyed = !1),
            (this.injector = this),
            (function (t) {
              const e = t._def,
                n = (t._providers = new Array(e.providers.length));
              for (let r = 0; r < e.providers.length; r++) {
                const i = e.providers[r];
                4096 & i.flags || (void 0 === n[r] && (n[r] = Xr(t, i)));
              }
            })(this);
        }
        get(t, e = qe.THROW_IF_NOT_FOUND, n = S.Default) {
          let r = 0;
          return (
            n & S.SkipSelf ? (r |= 1) : n & S.Self && (r |= 4), Zr(this, { token: t, tokenKey: gr(t), flags: r }, e)
          );
        }
        get instance() {
          return this.get(this._moduleType);
        }
        get componentFactoryResolver() {
          return this.get(Cn);
        }
        destroy() {
          if (this._destroyed)
            throw new Error(`The ng module ${x(this.instance.constructor)} has already been destroyed.`);
          (this._destroyed = !0),
            (function (t, e) {
              const n = t._def,
                r = new Set();
              for (let i = 0; i < n.providers.length; i++)
                if (131072 & n.providers[i].flags) {
                  const e = t._providers[i];
                  if (e && e !== qr) {
                    const t = e.ngOnDestroy;
                    'function' != typeof t || r.has(e) || (t.apply(e), r.add(e));
                  }
                }
            })(this),
            this._destroyListeners.forEach((t) => t());
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
      }
      const yi = gr(An),
        wi = gr(Pn),
        _i = gr(kn),
        Si = gr(tr),
        Ei = gr(Xn),
        Ci = gr(ze),
        Ii = gr(qe),
        Ti = gr(L);
      function xi(t, e, n, r, i, o, s, a) {
        const u = [];
        if (s)
          for (let l in s) {
            const [t, e] = s[l];
            u[t] = { flags: 8, name: l, nonMinifiedName: e, ns: null, securityContext: null, suffix: null };
          }
        const c = [];
        if (a) for (let l in a) c.push({ type: 1, propName: l, target: null, eventName: a[l] });
        return Oi(t, (e |= 16384), n, r, i, i, o, u, c);
      }
      function ki(t, e, n, r, i) {
        return Oi(-1, t, e, 0, n, r, i);
      }
      function Oi(t, e, n, r, i, o, s, a, u) {
        const { matchedQueries: c, references: l, matchedQueryIds: h } = Ar(n);
        u || (u = []), a || (a = []), (o = A(o));
        const d = Nr(s, x(i));
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: e,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: c,
          matchedQueryIds: h,
          references: l,
          ngContentIndex: -1,
          childCount: r,
          bindings: a,
          bindingFlags: Hr(a),
          outputs: u,
          element: null,
          provider: { token: i, value: o, deps: d },
          text: null,
          query: null,
          ngContent: null
        };
      }
      function Ai(t, e) {
        return Di(t, e);
      }
      function Ni(t, e) {
        let n = t;
        for (; n.parent && !kr(n); ) n = n.parent;
        return ji(n.parent, Ir(n), !0, e.provider.value, e.provider.deps);
      }
      function Ri(t, e) {
        const n = ji(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
        if (e.outputs.length)
          for (let r = 0; r < e.outputs.length; r++) {
            const i = e.outputs[r],
              o = n[i.propName];
            if (!bn(o)) throw new Error(`@Output ${i.propName} not initialized in '${n.constructor.name}'.`);
            {
              const n = o.subscribe(Pi(t, e.parent.nodeIndex, i.eventName));
              t.disposables[e.outputIndex + r] = n.unsubscribe.bind(n);
            }
          }
        return n;
      }
      function Pi(t, e, n) {
        return (r) => Er(t, e, n, r);
      }
      function Di(t, e) {
        const n = (8192 & e.flags) > 0,
          r = e.provider;
        switch (201347067 & e.flags) {
          case 512:
            return ji(t, e.parent, n, r.value, r.deps);
          case 1024:
            return (function (t, e, n, r, i) {
              const o = i.length;
              switch (o) {
                case 0:
                  return r();
                case 1:
                  return r(Li(t, e, n, i[0]));
                case 2:
                  return r(Li(t, e, n, i[0]), Li(t, e, n, i[1]));
                case 3:
                  return r(Li(t, e, n, i[0]), Li(t, e, n, i[1]), Li(t, e, n, i[2]));
                default:
                  const s = Array(o);
                  for (let r = 0; r < o; r++) s[r] = Li(t, e, n, i[r]);
                  return r(...s);
              }
            })(t, e.parent, n, r.value, r.deps);
          case 2048:
            return Li(t, e.parent, n, r.deps[0]);
          case 256:
            return r.value;
        }
      }
      function ji(t, e, n, r, i) {
        const o = i.length;
        switch (o) {
          case 0:
            return new r();
          case 1:
            return new r(Li(t, e, n, i[0]));
          case 2:
            return new r(Li(t, e, n, i[0]), Li(t, e, n, i[1]));
          case 3:
            return new r(Li(t, e, n, i[0]), Li(t, e, n, i[1]), Li(t, e, n, i[2]));
          default:
            const s = new Array(o);
            for (let r = 0; r < o; r++) s[r] = Li(t, e, n, i[r]);
            return new r(...s);
        }
      }
      const Mi = {};
      function Li(t, e, n, r, i = qe.THROW_IF_NOT_FOUND) {
        if (8 & r.flags) return r.token;
        const o = t;
        2 & r.flags && (i = null);
        const s = r.tokenKey;
        s === Ci && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && ((n = !1), (e = e.parent));
        let a = t;
        for (; a; ) {
          if (e)
            switch (s) {
              case yi:
                return gi(Ui(a, e, n));
              case wi:
                return Ui(a, e, n).renderer;
              case _i:
                return new kn(ur(a, e.nodeIndex).renderElement);
              case Si:
                return ur(a, e.nodeIndex).viewContainer;
              case Ei:
                if (e.element.template) return ur(a, e.nodeIndex).template;
                break;
              case Ci:
                return ui(Ui(a, e, n));
              case Ii:
              case Ti:
                return di(a, e);
              default:
                const t = (n ? e.element.allProviders : e.element.publicProviders)[s];
                if (t) {
                  let e = cr(a, t.nodeIndex);
                  return e || ((e = { instance: Di(a, t) }), (a.nodes[t.nodeIndex] = e)), e.instance;
                }
            }
          (n = kr(a)), (e = Ir(a)), (a = a.parent), 4 & r.flags && (a = null);
        }
        const u = o.root.injector.get(r.token, Mi);
        return u !== Mi || i === Mi ? u : o.root.ngModule.injector.get(r.token, i);
      }
      function Ui(t, e, n) {
        let r;
        if (n) r = ur(t, e.nodeIndex).componentView;
        else for (r = t; r.parent && !kr(r); ) r = r.parent;
        return r;
      }
      function Vi(t, e, n, r, i, o) {
        if (32768 & n.flags) {
          const e = ur(t, n.parent.nodeIndex).componentView;
          2 & e.def.flags && (e.state |= 8);
        }
        if (((e.instance[n.bindings[r].name] = i), 524288 & n.flags)) {
          o = o || {};
          const e = sn.unwrap(t.oldValues[n.bindingIndex + r]);
          o[n.bindings[r].nonMinifiedName] = new yn(e, i, 0 != (2 & t.state));
        }
        return (t.oldValues[n.bindingIndex + r] = i), o;
      }
      function Fi(t, e) {
        if (!(t.def.nodeFlags & e)) return;
        const n = t.def.nodes;
        let r = 0;
        for (let i = 0; i < n.length; i++) {
          const o = n[i];
          let s = o.parent;
          for (
            !s && o.flags & e && Hi(t, i, o.flags & e, r++), 0 == (o.childFlags & e) && (i += o.childCount);
            s && 1 & s.flags && i === s.nodeIndex + s.childCount;

          )
            s.directChildFlags & e && (r = zi(t, s, e, r)), (s = s.parent);
        }
      }
      function zi(t, e, n, r) {
        for (let i = e.nodeIndex + 1; i <= e.nodeIndex + e.childCount; i++) {
          const e = t.def.nodes[i];
          e.flags & n && Hi(t, i, e.flags & n, r++), (i += e.childCount);
        }
        return r;
      }
      function Hi(t, e, n, r) {
        const i = cr(t, e);
        if (!i) return;
        const o = i.instance;
        o &&
          (dr.setCurrentNode(t, e),
          1048576 & n && sr(t, 512, r) && o.ngAfterContentInit(),
          2097152 & n && o.ngAfterContentChecked(),
          4194304 & n && sr(t, 768, r) && o.ngAfterViewInit(),
          8388608 & n && o.ngAfterViewChecked(),
          131072 & n && o.ngOnDestroy());
      }
      const Bi = new M('SCHEDULER_TOKEN', { providedIn: 'root', factory: () => mt }),
        $i = {},
        qi = (function () {
          var t = {
            LocaleId: 0,
            DayPeriodsFormat: 1,
            DayPeriodsStandalone: 2,
            DaysFormat: 3,
            DaysStandalone: 4,
            MonthsFormat: 5,
            MonthsStandalone: 6,
            Eras: 7,
            FirstDayOfWeek: 8,
            WeekendRange: 9,
            DateFormat: 10,
            TimeFormat: 11,
            DateTimeFormat: 12,
            NumberSymbols: 13,
            NumberFormats: 14,
            CurrencySymbol: 15,
            CurrencyName: 16,
            Currencies: 17,
            PluralCase: 18,
            ExtraData: 19
          };
          return (
            (t[t.LocaleId] = 'LocaleId'),
            (t[t.DayPeriodsFormat] = 'DayPeriodsFormat'),
            (t[t.DayPeriodsStandalone] = 'DayPeriodsStandalone'),
            (t[t.DaysFormat] = 'DaysFormat'),
            (t[t.DaysStandalone] = 'DaysStandalone'),
            (t[t.MonthsFormat] = 'MonthsFormat'),
            (t[t.MonthsStandalone] = 'MonthsStandalone'),
            (t[t.Eras] = 'Eras'),
            (t[t.FirstDayOfWeek] = 'FirstDayOfWeek'),
            (t[t.WeekendRange] = 'WeekendRange'),
            (t[t.DateFormat] = 'DateFormat'),
            (t[t.TimeFormat] = 'TimeFormat'),
            (t[t.DateTimeFormat] = 'DateTimeFormat'),
            (t[t.NumberSymbols] = 'NumberSymbols'),
            (t[t.NumberFormats] = 'NumberFormats'),
            (t[t.CurrencySymbol] = 'CurrencySymbol'),
            (t[t.CurrencyName] = 'CurrencyName'),
            (t[t.Currencies] = 'Currencies'),
            (t[t.PluralCase] = 'PluralCase'),
            (t[t.ExtraData] = 'ExtraData'),
            t
          );
        })(),
        Wi = void 0;
      var Gi = [
        'en',
        [['a', 'p'], ['AM', 'PM'], Wi],
        [['AM', 'PM'], Wi, Wi],
        [
          ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
          ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
        ],
        Wi,
        [
          ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
          ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ]
        ],
        Wi,
        [
          ['B', 'A'],
          ['BC', 'AD'],
          ['Before Christ', 'Anno Domini']
        ],
        0,
        [6, 0],
        ['M/d/yy', 'MMM d, y', 'MMMM d, y', 'EEEE, MMMM d, y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1}, {0}', Wi, "{1} 'at' {0}", Wi],
        ['.', ',', ';', '%', '+', '-', 'E', '\xd7', '\u2030', '\u221e', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '\xa4#,##0.00', '#E0'],
        '$',
        'US Dollar',
        {},
        function (t) {
          let e = Math.floor(Math.abs(t)),
            n = t.toString().replace(/^[^.]*\.?/, '').length;
          return 1 === e && 0 === n ? 1 : 5;
        }
      ];
      function Ki(t) {
        return Yi(t)[qi.PluralCase];
      }
      function Yi(t) {
        const e = t.toLowerCase().replace(/_/g, '-');
        let n = $i[e];
        if (n) return n;
        const r = e.split('-')[0];
        if (((n = $i[r]), n)) return n;
        if ('en' === r) return Gi;
        throw new Error(`Missing locale data for the locale "${t}".`);
      }
      class Ji extends r.a {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, e, n) {
          let r,
            o = (t) => null,
            s = () => null;
          t && 'object' == typeof t
            ? ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t.next(e));
                  }
                : (e) => {
                    t.next(e);
                  }),
              t.error &&
                (o = this.__isAsync
                  ? (e) => {
                      setTimeout(() => t.error(e));
                    }
                  : (e) => {
                      t.error(e);
                    }),
              t.complete &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => t.complete());
                    }
                  : () => {
                      t.complete();
                    }))
            : ((r = this.__isAsync
                ? (e) => {
                    setTimeout(() => t(e));
                  }
                : (e) => {
                    t(e);
                  }),
              e &&
                (o = this.__isAsync
                  ? (t) => {
                      setTimeout(() => e(t));
                    }
                  : (t) => {
                      e(t);
                    }),
              n &&
                (s = this.__isAsync
                  ? () => {
                      setTimeout(() => n());
                    }
                  : () => {
                      n();
                    }));
          const a = super.subscribe(r, o, s);
          return t instanceof i.a && t.add(a), a;
        }
      }
      function Zi() {
        return this._results[nn()]();
      }
      class Xi {
        constructor() {
          (this.dirty = !0), (this._results = []), (this.changes = new Ji()), (this.length = 0);
          const t = nn(),
            e = Xi.prototype;
          e[t] || (e[t] = Zi);
        }
        map(t) {
          return this._results.map(t);
        }
        filter(t) {
          return this._results.filter(t);
        }
        find(t) {
          return this._results.find(t);
        }
        reduce(t, e) {
          return this._results.reduce(t, e);
        }
        forEach(t) {
          this._results.forEach(t);
        }
        some(t) {
          return this._results.some(t);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(t) {
          (this._results = (function t(e, n) {
            void 0 === n && (n = e);
            for (let r = 0; r < e.length; r++) {
              let i = e[r];
              Array.isArray(i) ? (n === e && (n = e.slice(0, r)), t(i, n)) : n !== e && n.push(i);
            }
            return n;
          })(t)),
            (this.dirty = !1),
            (this.length = this._results.length),
            (this.last = this._results[this.length - 1]),
            (this.first = this._results[0]);
        }
        notifyOnChanges() {
          this.changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      const Qi = new M('Application Initializer');
      class to {
        constructor(t) {
          (this.appInits = t),
            (this.initialized = !1),
            (this.done = !1),
            (this.donePromise = new Promise((t, e) => {
              (this.resolve = t), (this.reject = e);
            }));
        }
        runInitializers() {
          if (this.initialized) return;
          const t = [],
            e = () => {
              (this.done = !0), this.resolve();
            };
          if (this.appInits)
            for (let n = 0; n < this.appInits.length; n++) {
              const e = this.appInits[n]();
              vn(e) && t.push(e);
            }
          Promise.all(t)
            .then(() => {
              e();
            })
            .catch((t) => {
              this.reject(t);
            }),
            0 === t.length && e(),
            (this.initialized = !0);
        }
      }
      const eo = new M('AppId');
      function no() {
        return `${ro()}${ro()}${ro()}`;
      }
      function ro() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const io = new M('Platform Initializer'),
        oo = new M('Platform ID'),
        so = new M('appBootstrapListener');
      class ao {
        log(t) {
          console.log(t);
        }
        warn(t) {
          console.warn(t);
        }
      }
      const uo = new M('LocaleId');
      function co() {
        throw new Error('Runtime compiler is not loaded');
      }
      const lo = co,
        ho = co,
        fo = co,
        po = co;
      class go {
        constructor() {
          (this.compileModuleSync = lo),
            (this.compileModuleAsync = ho),
            (this.compileModuleAndAllComponentsSync = fo),
            (this.compileModuleAndAllComponentsAsync = po);
        }
        clearCache() {}
        clearCacheFor(t) {}
        getModuleId(t) {}
      }
      class mo {}
      let vo, bo;
      function yo() {
        const t = j.wtf;
        return !(!t || ((vo = t.trace), !vo) || ((bo = vo.events), 0));
      }
      const wo = yo();
      function _o(t, e) {
        return null;
      }
      const So = wo
          ? function (t, e = null) {
              return bo.createScope(t, e);
            }
          : (t, e) => _o,
        Eo = wo
          ? function (t, e) {
              return vo.leaveScope(t, e), e;
            }
          : (t, e) => e,
        Co = (() => Promise.resolve(0))();
      function Io(t) {
        'undefined' == typeof Zone
          ? Co.then(() => {
              t && t.apply(null, null);
            })
          : Zone.current.scheduleMicroTask('scheduleMicrotask', t);
      }
      class To {
        constructor({ enableLongStackTrace: t = !1 }) {
          if (
            ((this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ji(!1)),
            (this.onMicrotaskEmpty = new Ji(!1)),
            (this.onStable = new Ji(!1)),
            (this.onError = new Ji(!1)),
            'undefined' == typeof Zone)
          )
            throw new Error('In this configuration Angular requires Zone.js');
          var e;
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)),
            Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            ((e = this)._inner = e._inner.fork({
              name: 'angular',
              properties: { isAngularZone: !0 },
              onInvokeTask: (t, n, r, i, o, s) => {
                try {
                  return Ao(e), t.invokeTask(r, i, o, s);
                } finally {
                  No(e);
                }
              },
              onInvoke: (t, n, r, i, o, s, a) => {
                try {
                  return Ao(e), t.invoke(r, i, o, s, a);
                } finally {
                  No(e);
                }
              },
              onHasTask: (t, n, r, i) => {
                t.hasTask(r, i),
                  n === r &&
                    ('microTask' == i.change
                      ? ((e.hasPendingMicrotasks = i.microTask), Oo(e))
                      : 'macroTask' == i.change && (e.hasPendingMacrotasks = i.macroTask));
              },
              onHandleError: (t, n, r, i) => (t.handleError(r, i), e.runOutsideAngular(() => e.onError.emit(i)), !1)
            }));
        }
        static isInAngularZone() {
          return !0 === Zone.current.get('isAngularZone');
        }
        static assertInAngularZone() {
          if (!To.isInAngularZone()) throw new Error('Expected to be in Angular Zone, but it is not!');
        }
        static assertNotInAngularZone() {
          if (To.isInAngularZone()) throw new Error('Expected to not be in Angular Zone, but it is!');
        }
        run(t, e, n) {
          return this._inner.run(t, e, n);
        }
        runTask(t, e, n, r) {
          const i = this._inner,
            o = i.scheduleEventTask('NgZoneEvent: ' + r, t, ko, xo, xo);
          try {
            return i.runTask(o, e, n);
          } finally {
            i.cancelTask(o);
          }
        }
        runGuarded(t, e, n) {
          return this._inner.runGuarded(t, e, n);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      function xo() {}
      const ko = {};
      function Oo(t) {
        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable)
          try {
            t._nesting++, t.onMicrotaskEmpty.emit(null);
          } finally {
            if ((t._nesting--, !t.hasPendingMicrotasks))
              try {
                t.runOutsideAngular(() => t.onStable.emit(null));
              } finally {
                t.isStable = !0;
              }
          }
      }
      function Ao(t) {
        t._nesting++, t.isStable && ((t.isStable = !1), t.onUnstable.emit(null));
      }
      function No(t) {
        t._nesting--, Oo(t);
      }
      class Ro {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new Ji()),
            (this.onMicrotaskEmpty = new Ji()),
            (this.onStable = new Ji()),
            (this.onError = new Ji());
        }
        run(t) {
          return t();
        }
        runGuarded(t) {
          return t();
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t) {
          return t();
        }
      }
      class Po {
        constructor(t) {
          (this._ngZone = t),
            (this._pendingCount = 0),
            (this._isZoneStable = !0),
            (this._didWork = !1),
            (this._callbacks = []),
            (this.taskTrackingZone = null),
            this._watchAngularEvents(),
            t.run(() => {
              this.taskTrackingZone = 'undefined' == typeof Zone ? null : Zone.current.get('TaskTrackingZone');
            });
        }
        _watchAngularEvents() {
          this._ngZone.onUnstable.subscribe({
            next: () => {
              (this._didWork = !0), (this._isZoneStable = !1);
            }
          }),
            this._ngZone.runOutsideAngular(() => {
              this._ngZone.onStable.subscribe({
                next: () => {
                  To.assertNotInAngularZone(),
                    Io(() => {
                      (this._isZoneStable = !0), this._runCallbacksIfReady();
                    });
                }
              });
            });
        }
        increasePendingRequestCount() {
          return (this._pendingCount += 1), (this._didWork = !0), this._pendingCount;
        }
        decreasePendingRequestCount() {
          if (((this._pendingCount -= 1), this._pendingCount < 0)) throw new Error('pending async requests below zero');
          return this._runCallbacksIfReady(), this._pendingCount;
        }
        isStable() {
          return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks;
        }
        _runCallbacksIfReady() {
          if (this.isStable())
            Io(() => {
              for (; 0 !== this._callbacks.length; ) {
                let t = this._callbacks.pop();
                clearTimeout(t.timeoutId), t.doneCb(this._didWork);
              }
              this._didWork = !1;
            });
          else {
            let t = this.getPendingTasks();
            (this._callbacks = this._callbacks.filter(
              (e) => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)
            )),
              (this._didWork = !0);
          }
        }
        getPendingTasks() {
          return this.taskTrackingZone
            ? this.taskTrackingZone.macroTasks.map((t) => ({
                source: t.source,
                creationLocation: t.creationLocation,
                data: t.data
              }))
            : [];
        }
        addCallback(t, e, n) {
          let r = -1;
          e &&
            e > 0 &&
            (r = setTimeout(() => {
              (this._callbacks = this._callbacks.filter((t) => t.timeoutId !== r)),
                t(this._didWork, this.getPendingTasks());
            }, e)),
            this._callbacks.push({ doneCb: t, timeoutId: r, updateCb: n });
        }
        whenStable(t, e, n) {
          if (n && !this.taskTrackingZone)
            throw new Error(
              'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
            );
          this.addCallback(t, e, n), this._runCallbacksIfReady();
        }
        getPendingRequestCount() {
          return this._pendingCount;
        }
        findProviders(t, e, n) {
          return [];
        }
      }
      class Do {
        constructor() {
          (this._applications = new Map()), Uo.addToWindow(this);
        }
        registerApplication(t, e) {
          this._applications.set(t, e);
        }
        unregisterApplication(t) {
          this._applications.delete(t);
        }
        unregisterAllApplications() {
          this._applications.clear();
        }
        getTestability(t) {
          return this._applications.get(t) || null;
        }
        getAllTestabilities() {
          return Array.from(this._applications.values());
        }
        getAllRootElements() {
          return Array.from(this._applications.keys());
        }
        findTestabilityInTree(t, e = !0) {
          return Uo.findTestabilityInTree(this, t, e);
        }
      }
      class jo {
        addToWindow(t) {}
        findTestabilityInTree(t, e, n) {
          return null;
        }
      }
      function Mo(t) {
        Uo = t;
      }
      let Lo,
        Uo = new jo();
      const Vo = new M('AllowMultipleToken');
      class Fo {
        constructor(t, e) {
          (this.name = t), (this.token = e);
        }
      }
      function zo(t, e, n = []) {
        const r = `Platform: ${e}`,
          i = new M(r);
        return (e = []) => {
          let o = Ho();
          if (!o || o.injector.get(Vo, !1))
            if (t) t(n.concat(e).concat({ provide: i, useValue: !0 }));
            else {
              const t = n.concat(e).concat({ provide: i, useValue: !0 });
              !(function (t) {
                if (Lo && !Lo.destroyed && !Lo.injector.get(Vo, !1))
                  throw new Error('There can be only one platform. Destroy the previous one to create a new one.');
                Lo = t.get(Bo);
                const e = t.get(io, null);
                e && e.forEach((t) => t());
              })(qe.create({ providers: t, name: r }));
            }
          return (function (t) {
            const e = Ho();
            if (!e) throw new Error('No platform exists!');
            if (!e.injector.get(t, null))
              throw new Error('A platform with a different configuration has been created. Please destroy it first.');
            return e;
          })(i);
        };
      }
      function Ho() {
        return Lo && !Lo.destroyed ? Lo : null;
      }
      class Bo {
        constructor(t) {
          (this._injector = t), (this._modules = []), (this._destroyListeners = []), (this._destroyed = !1);
        }
        bootstrapModuleFactory(t, e) {
          const n = (function (t) {
              let e;
              return (
                (e =
                  'noop' === t ? new Ro() : ('zone.js' === t ? void 0 : t) || new To({ enableLongStackTrace: Gt() })),
                e
              );
            })(e ? e.ngZone : void 0),
            r = [{ provide: To, useValue: n }];
          return n.run(() => {
            const e = qe.create({ providers: r, parent: this.injector, name: t.moduleType.name }),
              i = t.create(e),
              o = i.injector.get($t, null);
            if (!o) throw new Error('No ErrorHandler. Is platform module (BrowserModule) included?');
            return (
              i.onDestroy(() => Wo(this._modules, i)),
              n.runOutsideAngular(() =>
                n.onError.subscribe({
                  next: (t) => {
                    o.handleError(t);
                  }
                })
              ),
              (function (t, e, n) {
                try {
                  const r = n();
                  return vn(r)
                    ? r.catch((n) => {
                        throw (e.runOutsideAngular(() => t.handleError(n)), n);
                      })
                    : r;
                } catch (r) {
                  throw (e.runOutsideAngular(() => t.handleError(r)), r);
                }
              })(o, n, () => {
                const t = i.injector.get(to);
                return t.runInitializers(), t.donePromise.then(() => (this._moduleDoBootstrap(i), i));
              })
            );
          });
        }
        bootstrapModule(t, e = []) {
          const n = $o({}, e);
          return (function (t, e, n) {
            return t.get(mo).createCompiler([e]).compileModuleAsync(n);
          })(this.injector, n, t).then((t) => this.bootstrapModuleFactory(t, n));
        }
        _moduleDoBootstrap(t) {
          const e = t.injector.get(qo);
          if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach((t) => e.bootstrap(t));
          else {
            if (!t.instance.ngDoBootstrap)
              throw new Error(
                `The module ${x(
                  t.instance.constructor
                )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. ` +
                  'Please define one of these.'
              );
            t.instance.ngDoBootstrap(e);
          }
          this._modules.push(t);
        }
        onDestroy(t) {
          this._destroyListeners.push(t);
        }
        get injector() {
          return this._injector;
        }
        destroy() {
          if (this._destroyed) throw new Error('The platform has already been destroyed!');
          this._modules.slice().forEach((t) => t.destroy()),
            this._destroyListeners.forEach((t) => t()),
            (this._destroyed = !0);
        }
        get destroyed() {
          return this._destroyed;
        }
      }
      function $o(t, e) {
        return Array.isArray(e) ? e.reduce($o, t) : Object.assign({}, t, e);
      }
      let qo = (() => {
        class t {
          constructor(t, e, n, r, i, c) {
            (this._zone = t),
              (this._console = e),
              (this._injector = n),
              (this._exceptionHandler = r),
              (this._componentFactoryResolver = i),
              (this._initStatus = c),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._enforceNoNewChanges = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._enforceNoNewChanges = Gt()),
              this._zone.onMicrotaskEmpty.subscribe({
                next: () => {
                  this._zone.run(() => {
                    this.tick();
                  });
                }
              });
            const h = new o.a((t) => {
                (this._stable =
                  this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    t.next(this._stable), t.complete();
                  });
              }),
              d = new o.a((t) => {
                let e;
                this._zone.runOutsideAngular(() => {
                  e = this._zone.onStable.subscribe(() => {
                    To.assertNotInAngularZone(),
                      Io(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), t.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  To.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        t.next(!1);
                      }));
                });
                return () => {
                  e.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = (function (...t) {
              let e = Number.POSITIVE_INFINITY,
                n = null,
                r = t[t.length - 1];
              return (
                Object(s.a)(r)
                  ? ((n = t.pop()), t.length > 1 && 'number' == typeof t[t.length - 1] && (e = t.pop()))
                  : 'number' == typeof r && (e = t.pop()),
                null === n && 1 === t.length && t[0] instanceof o.a ? t[0] : Object(a.a)(e)(Object(u.a)(t, n))
              );
            })(
              h,
              d.pipe((t) => {
                return l()(
                  ((e = m),
                  function (t) {
                    let n;
                    n =
                      'function' == typeof e
                        ? e
                        : function () {
                            return e;
                          };
                    const r = Object.create(t, p);
                    return (r.source = t), (r.subjectFactory = n), r;
                  })(t)
                );
                var e;
              })
            );
          }
          bootstrap(t, e) {
            if (!this._initStatus.done)
              throw new Error(
                'Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.'
              );
            let n;
            (n = t instanceof wn ? t : this._componentFactoryResolver.resolveComponentFactory(t)),
              this.componentTypes.push(n.componentType);
            const r = n instanceof Tn ? null : this._injector.get(W),
              i = n.create(qe.NULL, [], e || n.selector, r);
            i.onDestroy(() => {
              this._unloadComponent(i);
            });
            const o = i.injector.get(Po, null);
            return (
              o && i.injector.get(Do).registerApplication(i.location.nativeElement, o),
              this._loadComponent(i),
              Gt() &&
                this._console.log(
                  'Angular is running in the development mode. Call enableProdMode() to enable the production mode.'
                ),
              i
            );
          }
          tick() {
            if (this._runningTick) throw new Error('ApplicationRef.tick is called recursively');
            const e = t._tickScope();
            try {
              this._runningTick = !0;
              for (let t of this._views) t.detectChanges();
              if (this._enforceNoNewChanges) for (let t of this._views) t.checkNoChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(n));
            } finally {
              (this._runningTick = !1), Eo(e);
            }
          }
          attachView(t) {
            const e = t;
            this._views.push(e), e.attachToAppRef(this);
          }
          detachView(t) {
            const e = t;
            Wo(this._views, e), e.detachFromAppRef();
          }
          _loadComponent(t) {
            this.attachView(t.hostView),
              this.tick(),
              this.components.push(t),
              this._injector
                .get(so, [])
                .concat(this._bootstrapListeners)
                .forEach((e) => e(t));
          }
          _unloadComponent(t) {
            this.detachView(t.hostView), Wo(this.components, t);
          }
          ngOnDestroy() {
            this._views.slice().forEach((t) => t.destroy());
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (t._tickScope = So('ApplicationRef#tick()')), t;
      })();
      function Wo(t, e) {
        const n = t.indexOf(e);
        n > -1 && t.splice(n, 1);
      }
      class Go {}
      class Ko {}
      const Yo = { factoryPathPrefix: '', factoryPathSuffix: '.ngfactory' };
      class Jo {
        constructor(t, e) {
          (this._compiler = t), (this._config = e || Yo);
        }
        load(t) {
          return this._compiler instanceof go ? this.loadFactory(t) : this.loadAndCompile(t);
        }
        loadAndCompile(t) {
          let [e, r] = t.split('#');
          return (
            void 0 === r && (r = 'default'),
            n('zn8P')(e)
              .then((t) => t[r])
              .then((t) => Zo(t, e, r))
              .then((t) => this._compiler.compileModuleAsync(t))
          );
        }
        loadFactory(t) {
          let [e, r] = t.split('#'),
            i = 'NgFactory';
          return (
            void 0 === r && ((r = 'default'), (i = '')),
            n('zn8P')(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix)
              .then((t) => t[r + i])
              .then((t) => Zo(t, e, r))
          );
        }
      }
      function Zo(t, e, n) {
        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
        return t;
      }
      class Xo {
        constructor(t, e) {
          (this.name = t), (this.callback = e);
        }
      }
      class Qo {
        constructor(t, e, n) {
          (this.listeners = []),
            (this.parent = null),
            (this._debugContext = n),
            (this.nativeNode = t),
            e && e instanceof ts && e.addChild(this);
        }
        get injector() {
          return this._debugContext.injector;
        }
        get componentInstance() {
          return this._debugContext.component;
        }
        get context() {
          return this._debugContext.context;
        }
        get references() {
          return this._debugContext.references;
        }
        get providerTokens() {
          return this._debugContext.providerTokens;
        }
      }
      class ts extends Qo {
        constructor(t, e, n) {
          super(t, e, n),
            (this.properties = {}),
            (this.attributes = {}),
            (this.classes = {}),
            (this.styles = {}),
            (this.childNodes = []),
            (this.nativeElement = t);
        }
        addChild(t) {
          t && (this.childNodes.push(t), (t.parent = this));
        }
        removeChild(t) {
          const e = this.childNodes.indexOf(t);
          -1 !== e && ((t.parent = null), this.childNodes.splice(e, 1));
        }
        insertChildrenAfter(t, e) {
          const n = this.childNodes.indexOf(t);
          -1 !== n &&
            (this.childNodes.splice(n + 1, 0, ...e),
            e.forEach((e) => {
              e.parent && e.parent.removeChild(e), (t.parent = this);
            }));
        }
        insertBefore(t, e) {
          const n = this.childNodes.indexOf(t);
          -1 === n
            ? this.addChild(e)
            : (e.parent && e.parent.removeChild(e), (e.parent = this), this.childNodes.splice(n, 0, e));
        }
        query(t) {
          return this.queryAll(t)[0] || null;
        }
        queryAll(t) {
          const e = [];
          return (
            (function t(e, n, r) {
              e.childNodes.forEach((e) => {
                e instanceof ts && (n(e) && r.push(e), t(e, n, r));
              });
            })(this, t, e),
            e
          );
        }
        queryAllNodes(t) {
          const e = [];
          return (
            (function t(e, n, r) {
              e instanceof ts &&
                e.childNodes.forEach((e) => {
                  n(e) && r.push(e), e instanceof ts && t(e, n, r);
                });
            })(this, t, e),
            e
          );
        }
        get children() {
          return this.childNodes.filter((t) => t instanceof ts);
        }
        triggerEventHandler(t, e) {
          this.listeners.forEach((n) => {
            n.name == t && n.callback(e);
          });
        }
      }
      const es = new Map(),
        ns = function (t) {
          return es.get(t) || null;
        };
      function rs(t) {
        es.set(t.nativeNode, t);
      }
      const is = zo(null, 'core', [
        { provide: oo, useValue: 'unknown' },
        { provide: Bo, deps: [qe] },
        { provide: Do, deps: [] },
        { provide: ao, deps: [] }
      ]);
      function os() {
        return Jn;
      }
      function ss() {
        return Zn;
      }
      function as(t) {
        return t || 'en-US';
      }
      function us(t) {
        let e = [];
        return (
          t.onStable.subscribe(() => {
            for (; e.length; ) e.pop()();
          }),
          function (t) {
            e.push(t);
          }
        );
      }
      class cs {
        constructor(t) {}
      }
      function ls(t, e, n, r, i, o) {
        t |= 1;
        const { matchedQueries: s, references: a, matchedQueryIds: u } = Ar(e);
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          flags: t,
          checkIndex: -1,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: s,
          matchedQueryIds: u,
          references: a,
          ngContentIndex: n,
          childCount: r,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: {
            ns: null,
            name: null,
            attrs: null,
            template: o ? Dr(o) : null,
            componentProvider: null,
            componentView: null,
            componentRendererType: null,
            publicProviders: null,
            allProviders: null,
            handleEvent: i || fr
          },
          provider: null,
          text: null,
          query: null,
          ngContent: null
        };
      }
      function hs(t, e, n, r, i, o, s = [], a, u, c, l, h) {
        c || (c = fr);
        const { matchedQueries: d, references: f, matchedQueryIds: p } = Ar(n);
        let g = null,
          m = null;
        o && ([g, m] = zr(o)), (a = a || []);
        const v = new Array(a.length);
        for (let w = 0; w < a.length; w++) {
          const [t, e, n] = a[w],
            [r, i] = zr(e);
          let o = void 0,
            s = void 0;
          switch (15 & t) {
            case 4:
              s = n;
              break;
            case 1:
            case 8:
              o = n;
          }
          v[w] = { flags: t, ns: r, name: i, nonMinifiedName: i, securityContext: o, suffix: s };
        }
        u = u || [];
        const b = new Array(u.length);
        for (let w = 0; w < u.length; w++) {
          const [t, e] = u[w];
          b[w] = { type: 0, target: t, eventName: e, propName: null };
        }
        const y = (s = s || []).map(([t, e]) => {
          const [n, r] = zr(t);
          return [n, r, e];
        });
        return (
          (h = (function (t) {
            if (t && '$$undefined' === t.id) {
              const e =
                (null != t.encapsulation && t.encapsulation !== Z.None) ||
                t.styles.length ||
                Object.keys(t.data).length;
              t.id = e ? `c${vr++}` : '$$empty';
            }
            return t && '$$empty' === t.id && (t = null), t || null;
          })(h)),
          l && (e |= 33554432),
          {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: t,
            flags: (e |= 1),
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: d,
            matchedQueryIds: p,
            references: f,
            ngContentIndex: r,
            childCount: i,
            bindings: v,
            bindingFlags: Hr(v),
            outputs: b,
            element: {
              ns: g,
              name: m,
              attrs: y,
              template: null,
              componentProvider: null,
              componentView: l || null,
              componentRendererType: h,
              publicProviders: null,
              allProviders: null,
              handleEvent: c || fr
            },
            provider: null,
            text: null,
            query: null,
            ngContent: null
          }
        );
      }
      function ds(t, e, n) {
        const r = n.element,
          i = t.root.selectorOrNode,
          o = t.renderer;
        let s;
        if (t.parent || !i) {
          s = r.name ? o.createElement(r.name, r.ns) : o.createComment('');
          const i = Rr(t, e, n);
          i && o.appendChild(i, s);
        } else
          s = o.selectRootElement(
            i,
            !!r.componentRendererType && r.componentRendererType.encapsulation === Z.ShadowDom
          );
        if (r.attrs)
          for (let a = 0; a < r.attrs.length; a++) {
            const [t, e, n] = r.attrs[a];
            o.setAttribute(s, e, n, t);
          }
        return s;
      }
      function fs(t, e, n, r) {
        for (let i = 0; i < n.outputs.length; i++) {
          const o = n.outputs[i],
            s = ps(t, n.nodeIndex, xr(o.target, o.eventName));
          let a = o.target,
            u = t;
          'component' === o.target && ((a = null), (u = e));
          const c = u.renderer.listen(a || r, o.eventName, s);
          t.disposables[n.outputIndex + i] = c;
        }
      }
      function ps(t, e, n) {
        return (r) => Er(t, e, n, r);
      }
      function gs(t, e, n, r) {
        if (!yr(t, e, n, r)) return !1;
        const i = e.bindings[n],
          o = ur(t, e.nodeIndex),
          s = o.renderElement,
          a = i.name;
        switch (15 & i.flags) {
          case 1:
            !(function (t, e, n, r, i, o) {
              const s = e.securityContext;
              let a = s ? t.root.sanitizer.sanitize(s, o) : o;
              a = null != a ? a.toString() : null;
              const u = t.renderer;
              null != o ? u.setAttribute(n, i, a, r) : u.removeAttribute(n, i, r);
            })(t, i, s, i.ns, a, r);
            break;
          case 2:
            !(function (t, e, n, r) {
              const i = t.renderer;
              r ? i.addClass(e, n) : i.removeClass(e, n);
            })(t, s, a, r);
            break;
          case 4:
            !(function (t, e, n, r, i) {
              let o = t.root.sanitizer.sanitize(ve.STYLE, i);
              if (null != o) {
                o = o.toString();
                const t = e.suffix;
                null != t && (o += t);
              } else o = null;
              const s = t.renderer;
              null != o ? s.setStyle(n, r, o) : s.removeStyle(n, r);
            })(t, i, s, a, r);
            break;
          case 8:
            !(function (t, e, n, r, i) {
              const o = e.securityContext;
              let s = o ? t.root.sanitizer.sanitize(o, i) : i;
              t.renderer.setProperty(n, r, s);
            })(33554432 & e.flags && 32 & i.flags ? o.componentView : t, i, s, a, r);
        }
        return !0;
      }
      function ms(t) {
        const e = t.def.nodeMatchedQueries;
        for (; t.parent && Or(t); ) {
          let n = t.parentNodeDef;
          t = t.parent;
          const r = n.nodeIndex + n.childCount;
          for (let i = 0; i <= r; i++) {
            const r = t.def.nodes[i];
            67108864 & r.flags &&
              536870912 & r.flags &&
              (r.query.filterId & e) === r.query.filterId &&
              hr(t, i).setDirty(),
              (!(1 & r.flags && i + r.childCount < n.nodeIndex) &&
                67108864 & r.childFlags &&
                536870912 & r.childFlags) ||
                (i += r.childCount);
          }
        }
        if (134217728 & t.def.nodeFlags)
          for (let n = 0; n < t.def.nodes.length; n++) {
            const e = t.def.nodes[n];
            134217728 & e.flags && 536870912 & e.flags && hr(t, n).setDirty(), (n += e.childCount);
          }
      }
      function vs(t, e) {
        const n = hr(t, e.nodeIndex);
        if (!n.dirty) return;
        let r,
          i = void 0;
        if (67108864 & e.flags) {
          const n = e.parent.parent;
          (i = bs(t, n.nodeIndex, n.nodeIndex + n.childCount, e.query, [])), (r = cr(t, e.parent.nodeIndex).instance);
        } else 134217728 & e.flags && ((i = bs(t, 0, t.def.nodes.length - 1, e.query, [])), (r = t.component));
        n.reset(i);
        const o = e.query.bindings;
        let s = !1;
        for (let a = 0; a < o.length; a++) {
          const t = o[a];
          let e;
          switch (t.bindingType) {
            case 0:
              e = n.first;
              break;
            case 1:
              (e = n), (s = !0);
          }
          r[t.propName] = e;
        }
        s && n.notifyOnChanges();
      }
      function bs(t, e, n, r, i) {
        for (let o = e; o <= n; o++) {
          const e = t.def.nodes[o],
            n = e.matchedQueries[r.id];
          if (
            (null != n && i.push(ys(t, e, n)),
            1 & e.flags && e.element.template && (e.element.template.nodeMatchedQueries & r.filterId) === r.filterId)
          ) {
            const n = ur(t, o);
            if (
              ((e.childMatchedQueries & r.filterId) === r.filterId &&
                (bs(t, o + 1, o + e.childCount, r, i), (o += e.childCount)),
              16777216 & e.flags)
            ) {
              const t = n.viewContainer._embeddedViews;
              for (let e = 0; e < t.length; e++) {
                const o = t[e],
                  s = Cr(o);
                s && s === n && bs(o, 0, o.def.nodes.length - 1, r, i);
              }
            }
            const s = n.template._projectedViews;
            if (s)
              for (let t = 0; t < s.length; t++) {
                const e = s[t];
                bs(e, 0, e.def.nodes.length - 1, r, i);
              }
          }
          (e.childMatchedQueries & r.filterId) !== r.filterId && (o += e.childCount);
        }
        return i;
      }
      function ys(t, e, n) {
        if (null != n)
          switch (n) {
            case 1:
              return ur(t, e.nodeIndex).renderElement;
            case 0:
              return new kn(ur(t, e.nodeIndex).renderElement);
            case 2:
              return ur(t, e.nodeIndex).template;
            case 3:
              return ur(t, e.nodeIndex).viewContainer;
            case 4:
              return cr(t, e.nodeIndex).instance;
          }
      }
      function ws(t, e) {
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: -1,
          flags: 8,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: t,
          childCount: 0,
          bindings: [],
          bindingFlags: 0,
          outputs: [],
          element: null,
          provider: null,
          text: null,
          query: null,
          ngContent: { index: e }
        };
      }
      function _s(t, e, n) {
        const r = Rr(t, e, n);
        r && Lr(t, n.ngContent.index, 1, r, null, void 0);
      }
      function Ss(t, e) {
        const n = Object.keys(e),
          r = n.length,
          i = new Array(r);
        for (let o = 0; o < r; o++) {
          const t = n[o];
          i[e[t]] = t;
        }
        return (function (t, e, n) {
          const r = new Array(n.length);
          for (let i = 0; i < n.length; i++) {
            const t = n[i];
            r[i] = { flags: 8, name: t, ns: null, nonMinifiedName: t, securityContext: null, suffix: null };
          }
          return {
            nodeIndex: -1,
            parent: null,
            renderParent: null,
            bindingIndex: -1,
            outputIndex: -1,
            checkIndex: e,
            flags: 64,
            childFlags: 0,
            directChildFlags: 0,
            childMatchedQueries: 0,
            matchedQueries: {},
            matchedQueryIds: 0,
            references: {},
            ngContentIndex: -1,
            childCount: 0,
            bindings: r,
            bindingFlags: Hr(r),
            outputs: [],
            element: null,
            provider: null,
            text: null,
            query: null,
            ngContent: null
          };
        })(0, t, i);
      }
      function Es(t, e, n) {
        const r = new Array(n.length - 1);
        for (let i = 1; i < n.length; i++)
          r[i - 1] = { flags: 8, name: null, ns: null, nonMinifiedName: null, securityContext: null, suffix: n[i] };
        return {
          nodeIndex: -1,
          parent: null,
          renderParent: null,
          bindingIndex: -1,
          outputIndex: -1,
          checkIndex: t,
          flags: 2,
          childFlags: 0,
          directChildFlags: 0,
          childMatchedQueries: 0,
          matchedQueries: {},
          matchedQueryIds: 0,
          references: {},
          ngContentIndex: e,
          childCount: 0,
          bindings: r,
          bindingFlags: 8,
          outputs: [],
          element: null,
          provider: null,
          text: { prefix: n[0] },
          query: null,
          ngContent: null
        };
      }
      function Cs(t, e, n) {
        let r;
        const i = t.renderer;
        r = i.createText(n.text.prefix);
        const o = Rr(t, e, n);
        return o && i.appendChild(o, r), { renderText: r };
      }
      function Is(t, e) {
        return (null != t ? t.toString() : '') + e.suffix;
      }
      function Ts(t, e, n, r) {
        let i = 0,
          o = 0,
          s = 0,
          a = 0,
          u = 0,
          c = null,
          l = null,
          h = !1,
          d = !1,
          f = null;
        for (let p = 0; p < e.length; p++) {
          const t = e[p];
          if (
            ((t.nodeIndex = p),
            (t.parent = c),
            (t.bindingIndex = i),
            (t.outputIndex = o),
            (t.renderParent = l),
            (s |= t.flags),
            (u |= t.matchedQueryIds),
            t.element)
          ) {
            const e = t.element;
            (e.publicProviders = c ? c.element.publicProviders : Object.create(null)),
              (e.allProviders = e.publicProviders),
              (h = !1),
              (d = !1),
              t.element.template && (u |= t.element.template.nodeMatchedQueries);
          }
          if (
            (ks(c, t, e.length),
            (i += t.bindings.length),
            (o += t.outputs.length),
            !l && 3 & t.flags && (f = t),
            20224 & t.flags)
          ) {
            h ||
              ((h = !0),
              (c.element.publicProviders = Object.create(c.element.publicProviders)),
              (c.element.allProviders = c.element.publicProviders));
            const e = 0 != (32768 & t.flags);
            0 == (8192 & t.flags) || e
              ? (c.element.publicProviders[gr(t.provider.token)] = t)
              : (d || ((d = !0), (c.element.allProviders = Object.create(c.element.publicProviders))),
                (c.element.allProviders[gr(t.provider.token)] = t)),
              e && (c.element.componentProvider = t);
          }
          if (
            (c
              ? ((c.childFlags |= t.flags),
                (c.directChildFlags |= t.flags),
                (c.childMatchedQueries |= t.matchedQueryIds),
                t.element && t.element.template && (c.childMatchedQueries |= t.element.template.nodeMatchedQueries))
              : (a |= t.flags),
            t.childCount > 0)
          )
            (c = t), xs(t) || (l = t);
          else
            for (; c && p === c.nodeIndex + c.childCount; ) {
              const t = c.parent;
              t && ((t.childFlags |= c.childFlags), (t.childMatchedQueries |= c.childMatchedQueries)),
                (c = t),
                (l = c && xs(c) ? c.renderParent : c);
            }
        }
        return {
          factory: null,
          nodeFlags: s,
          rootNodeFlags: a,
          nodeMatchedQueries: u,
          flags: t,
          nodes: e,
          updateDirectives: n || fr,
          updateRenderer: r || fr,
          handleEvent: (t, n, r, i) => e[n].element.handleEvent(t, r, i),
          bindingCount: i,
          outputCount: o,
          lastRenderRootNode: f
        };
      }
      function xs(t) {
        return 0 != (1 & t.flags) && null === t.element.name;
      }
      function ks(t, e, n) {
        const r = e.element && e.element.template;
        if (r) {
          if (!r.lastRenderRootNode)
            throw new Error('Illegal State: Embedded templates without nodes are not allowed!');
          if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags)
            throw new Error(
              `Illegal State: Last root node of a template can't have embedded views, at index ${e.nodeIndex}!`
            );
        }
        if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0)))
          throw new Error(
            `Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index ${e.nodeIndex}!`
          );
        if (e.query) {
          if (67108864 & e.flags && (!t || 0 == (16384 & t.flags)))
            throw new Error(
              `Illegal State: Content Query nodes need to be children of directives, at index ${e.nodeIndex}!`
            );
          if (134217728 & e.flags && t)
            throw new Error(`Illegal State: View Query nodes have to be top level nodes, at index ${e.nodeIndex}!`);
        }
        if (e.childCount) {
          const r = t ? t.nodeIndex + t.childCount : n - 1;
          if (e.nodeIndex <= r && e.nodeIndex + e.childCount > r)
            throw new Error(`Illegal State: childCount of node leads outside of parent, at index ${e.nodeIndex}!`);
        }
      }
      function Os(t, e, n, r) {
        const i = Rs(t.root, t.renderer, t, e, n);
        return Ps(i, t.component, r), Ds(i), i;
      }
      function As(t, e, n) {
        const r = Rs(t, t.renderer, null, null, e);
        return Ps(r, n, n), Ds(r), r;
      }
      function Ns(t, e, n, r) {
        const i = e.element.componentRendererType;
        let o;
        return (
          (o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer),
          Rs(t.root, o, t, e.element.componentProvider, n)
        );
      }
      function Rs(t, e, n, r, i) {
        const o = new Array(i.nodes.length),
          s = i.outputCount ? new Array(i.outputCount) : null;
        return {
          def: i,
          parent: n,
          viewContainerParent: null,
          parentNodeDef: r,
          context: null,
          component: null,
          nodes: o,
          state: 13,
          root: t,
          renderer: e,
          oldValues: new Array(i.bindingCount),
          disposables: s,
          initIndex: -1
        };
      }
      function Ps(t, e, n) {
        (t.component = e), (t.context = n);
      }
      function Ds(t) {
        let e;
        kr(t) && (e = ur(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
        const n = t.def,
          r = t.nodes;
        for (let i = 0; i < n.nodes.length; i++) {
          const o = n.nodes[i];
          let s;
          switch ((dr.setCurrentNode(t, i), 201347067 & o.flags)) {
            case 1:
              const n = ds(t, e, o);
              let a = void 0;
              if (33554432 & o.flags) {
                const e = Dr(o.element.componentView);
                a = dr.createComponentView(t, o, e, n);
              }
              fs(t, a, o, n),
                (s = {
                  renderElement: n,
                  componentView: a,
                  viewContainer: null,
                  template: o.element.template ? li(t, o) : void 0
                }),
                16777216 & o.flags && (s.viewContainer = si(t, o, s));
              break;
            case 2:
              s = Cs(t, e, o);
              break;
            case 512:
            case 1024:
            case 2048:
            case 256:
              (s = r[i]), s || 4096 & o.flags || (s = { instance: Ai(t, o) });
              break;
            case 16:
              s = { instance: Ni(t, o) };
              break;
            case 16384:
              (s = r[i]),
                s || (s = { instance: Ri(t, o) }),
                32768 & o.flags && Ps(ur(t, o.parent.nodeIndex).componentView, s.instance, s.instance);
              break;
            case 32:
            case 64:
            case 128:
              s = { value: void 0 };
              break;
            case 67108864:
            case 134217728:
              s = new Xi();
              break;
            case 8:
              _s(t, e, o), (s = void 0);
          }
          r[i] = s;
        }
        Bs(t, Hs.CreateViewNodes), Gs(t, 201326592, 268435456, 0);
      }
      function js(t) {
        Us(t),
          dr.updateDirectives(t, 1),
          $s(t, Hs.CheckNoChanges),
          dr.updateRenderer(t, 1),
          Bs(t, Hs.CheckNoChanges),
          (t.state &= -97);
      }
      function Ms(t) {
        1 & t.state ? ((t.state &= -2), (t.state |= 2)) : (t.state &= -3),
          or(t, 0, 256),
          Us(t),
          dr.updateDirectives(t, 0),
          $s(t, Hs.CheckAndUpdate),
          Gs(t, 67108864, 536870912, 0);
        let e = or(t, 256, 512);
        Fi(t, 2097152 | (e ? 1048576 : 0)),
          dr.updateRenderer(t, 0),
          Bs(t, Hs.CheckAndUpdate),
          Gs(t, 134217728, 536870912, 0),
          (e = or(t, 512, 768)),
          Fi(t, 8388608 | (e ? 4194304 : 0)),
          2 & t.def.flags && (t.state &= -9),
          (t.state &= -97),
          or(t, 768, 1024);
      }
      function Ls(t, e, n, r, i, o, s, a, u, c, l, h, d) {
        return 0 === n
          ? (function (t, e, n, r, i, o, s, a, u, c, l, h) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n, r, i, o, s, a, u, c, l, h) {
                    const d = e.bindings.length;
                    let f = !1;
                    return (
                      d > 0 && gs(t, e, 0, n) && (f = !0),
                      d > 1 && gs(t, e, 1, r) && (f = !0),
                      d > 2 && gs(t, e, 2, i) && (f = !0),
                      d > 3 && gs(t, e, 3, o) && (f = !0),
                      d > 4 && gs(t, e, 4, s) && (f = !0),
                      d > 5 && gs(t, e, 5, a) && (f = !0),
                      d > 6 && gs(t, e, 6, u) && (f = !0),
                      d > 7 && gs(t, e, 7, c) && (f = !0),
                      d > 8 && gs(t, e, 8, l) && (f = !0),
                      d > 9 && gs(t, e, 9, h) && (f = !0),
                      f
                    );
                  })(t, e, n, r, i, o, s, a, u, c, l, h);
                case 2:
                  return (function (t, e, n, r, i, o, s, a, u, c, l, h) {
                    let d = !1;
                    const f = e.bindings,
                      p = f.length;
                    if (
                      (p > 0 && yr(t, e, 0, n) && (d = !0),
                      p > 1 && yr(t, e, 1, r) && (d = !0),
                      p > 2 && yr(t, e, 2, i) && (d = !0),
                      p > 3 && yr(t, e, 3, o) && (d = !0),
                      p > 4 && yr(t, e, 4, s) && (d = !0),
                      p > 5 && yr(t, e, 5, a) && (d = !0),
                      p > 6 && yr(t, e, 6, u) && (d = !0),
                      p > 7 && yr(t, e, 7, c) && (d = !0),
                      p > 8 && yr(t, e, 8, l) && (d = !0),
                      p > 9 && yr(t, e, 9, h) && (d = !0),
                      d)
                    ) {
                      let d = e.text.prefix;
                      p > 0 && (d += Is(n, f[0])),
                        p > 1 && (d += Is(r, f[1])),
                        p > 2 && (d += Is(i, f[2])),
                        p > 3 && (d += Is(o, f[3])),
                        p > 4 && (d += Is(s, f[4])),
                        p > 5 && (d += Is(a, f[5])),
                        p > 6 && (d += Is(u, f[6])),
                        p > 7 && (d += Is(c, f[7])),
                        p > 8 && (d += Is(l, f[8])),
                        p > 9 && (d += Is(h, f[9]));
                      const g = ar(t, e.nodeIndex).renderText;
                      t.renderer.setValue(g, d);
                    }
                    return d;
                  })(t, e, n, r, i, o, s, a, u, c, l, h);
                case 16384:
                  return (function (t, e, n, r, i, o, s, a, u, c, l, h) {
                    const d = cr(t, e.nodeIndex),
                      f = d.instance;
                    let p = !1,
                      g = void 0;
                    const m = e.bindings.length;
                    return (
                      m > 0 && br(t, e, 0, n) && ((p = !0), (g = Vi(t, d, e, 0, n, g))),
                      m > 1 && br(t, e, 1, r) && ((p = !0), (g = Vi(t, d, e, 1, r, g))),
                      m > 2 && br(t, e, 2, i) && ((p = !0), (g = Vi(t, d, e, 2, i, g))),
                      m > 3 && br(t, e, 3, o) && ((p = !0), (g = Vi(t, d, e, 3, o, g))),
                      m > 4 && br(t, e, 4, s) && ((p = !0), (g = Vi(t, d, e, 4, s, g))),
                      m > 5 && br(t, e, 5, a) && ((p = !0), (g = Vi(t, d, e, 5, a, g))),
                      m > 6 && br(t, e, 6, u) && ((p = !0), (g = Vi(t, d, e, 6, u, g))),
                      m > 7 && br(t, e, 7, c) && ((p = !0), (g = Vi(t, d, e, 7, c, g))),
                      m > 8 && br(t, e, 8, l) && ((p = !0), (g = Vi(t, d, e, 8, l, g))),
                      m > 9 && br(t, e, 9, h) && ((p = !0), (g = Vi(t, d, e, 9, h, g))),
                      g && f.ngOnChanges(g),
                      65536 & e.flags && sr(t, 256, e.nodeIndex) && f.ngOnInit(),
                      262144 & e.flags && f.ngDoCheck(),
                      p
                    );
                  })(t, e, n, r, i, o, s, a, u, c, l, h);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n, r, i, o, s, a, u, c, l, h) {
                    const d = e.bindings;
                    let f = !1;
                    const p = d.length;
                    if (
                      (p > 0 && yr(t, e, 0, n) && (f = !0),
                      p > 1 && yr(t, e, 1, r) && (f = !0),
                      p > 2 && yr(t, e, 2, i) && (f = !0),
                      p > 3 && yr(t, e, 3, o) && (f = !0),
                      p > 4 && yr(t, e, 4, s) && (f = !0),
                      p > 5 && yr(t, e, 5, a) && (f = !0),
                      p > 6 && yr(t, e, 6, u) && (f = !0),
                      p > 7 && yr(t, e, 7, c) && (f = !0),
                      p > 8 && yr(t, e, 8, l) && (f = !0),
                      p > 9 && yr(t, e, 9, h) && (f = !0),
                      f)
                    ) {
                      const f = lr(t, e.nodeIndex);
                      let g;
                      switch (201347067 & e.flags) {
                        case 32:
                          (g = new Array(d.length)),
                            p > 0 && (g[0] = n),
                            p > 1 && (g[1] = r),
                            p > 2 && (g[2] = i),
                            p > 3 && (g[3] = o),
                            p > 4 && (g[4] = s),
                            p > 5 && (g[5] = a),
                            p > 6 && (g[6] = u),
                            p > 7 && (g[7] = c),
                            p > 8 && (g[8] = l),
                            p > 9 && (g[9] = h);
                          break;
                        case 64:
                          (g = {}),
                            p > 0 && (g[d[0].name] = n),
                            p > 1 && (g[d[1].name] = r),
                            p > 2 && (g[d[2].name] = i),
                            p > 3 && (g[d[3].name] = o),
                            p > 4 && (g[d[4].name] = s),
                            p > 5 && (g[d[5].name] = a),
                            p > 6 && (g[d[6].name] = u),
                            p > 7 && (g[d[7].name] = c),
                            p > 8 && (g[d[8].name] = l),
                            p > 9 && (g[d[9].name] = h);
                          break;
                        case 128:
                          const t = n;
                          switch (p) {
                            case 1:
                              g = t.transform(n);
                              break;
                            case 2:
                              g = t.transform(r);
                              break;
                            case 3:
                              g = t.transform(r, i);
                              break;
                            case 4:
                              g = t.transform(r, i, o);
                              break;
                            case 5:
                              g = t.transform(r, i, o, s);
                              break;
                            case 6:
                              g = t.transform(r, i, o, s, a);
                              break;
                            case 7:
                              g = t.transform(r, i, o, s, a, u);
                              break;
                            case 8:
                              g = t.transform(r, i, o, s, a, u, c);
                              break;
                            case 9:
                              g = t.transform(r, i, o, s, a, u, c, l);
                              break;
                            case 10:
                              g = t.transform(r, i, o, s, a, u, c, l, h);
                          }
                      }
                      f.value = g;
                    }
                    return f;
                  })(t, e, n, r, i, o, s, a, u, c, l, h);
                default:
                  throw 'unreachable';
              }
            })(t, e, r, i, o, s, a, u, c, l, h, d)
          : (function (t, e, n) {
              switch (201347067 & e.flags) {
                case 1:
                  return (function (t, e, n) {
                    let r = !1;
                    for (let i = 0; i < n.length; i++) gs(t, e, i, n[i]) && (r = !0);
                    return r;
                  })(t, e, n);
                case 2:
                  return (function (t, e, n) {
                    const r = e.bindings;
                    let i = !1;
                    for (let o = 0; o < n.length; o++) yr(t, e, o, n[o]) && (i = !0);
                    if (i) {
                      let i = '';
                      for (let t = 0; t < n.length; t++) i += Is(n[t], r[t]);
                      i = e.text.prefix + i;
                      const o = ar(t, e.nodeIndex).renderText;
                      t.renderer.setValue(o, i);
                    }
                    return i;
                  })(t, e, n);
                case 16384:
                  return (function (t, e, n) {
                    const r = cr(t, e.nodeIndex),
                      i = r.instance;
                    let o = !1,
                      s = void 0;
                    for (let a = 0; a < n.length; a++) br(t, e, a, n[a]) && ((o = !0), (s = Vi(t, r, e, a, n[a], s)));
                    return (
                      s && i.ngOnChanges(s),
                      65536 & e.flags && sr(t, 256, e.nodeIndex) && i.ngOnInit(),
                      262144 & e.flags && i.ngDoCheck(),
                      o
                    );
                  })(t, e, n);
                case 32:
                case 64:
                case 128:
                  return (function (t, e, n) {
                    const r = e.bindings;
                    let i = !1;
                    for (let o = 0; o < n.length; o++) yr(t, e, o, n[o]) && (i = !0);
                    if (i) {
                      const i = lr(t, e.nodeIndex);
                      let o;
                      switch (201347067 & e.flags) {
                        case 32:
                          o = n;
                          break;
                        case 64:
                          o = {};
                          for (let i = 0; i < n.length; i++) o[r[i].name] = n[i];
                          break;
                        case 128:
                          const t = n[0],
                            e = n.slice(1);
                          o = t.transform(...e);
                      }
                      i.value = o;
                    }
                    return i;
                  })(t, e, n);
                default:
                  throw 'unreachable';
              }
            })(t, e, r);
      }
      function Us(t) {
        const e = t.def;
        if (4 & e.nodeFlags)
          for (let n = 0; n < e.nodes.length; n++) {
            const r = e.nodes[n];
            if (4 & r.flags) {
              const e = ur(t, n).template._projectedViews;
              if (e)
                for (let n = 0; n < e.length; n++) {
                  const r = e[n];
                  (r.state |= 32), Sr(r, t);
                }
            } else 0 == (4 & r.childFlags) && (n += r.childCount);
          }
      }
      function Vs(t, e, n, r, i, o, s, a, u, c, l, h, d) {
        return (
          0 === n
            ? (function (t, e, n, r, i, o, s, a, u, c, l, h) {
                const d = e.bindings.length;
                d > 0 && wr(t, e, 0, n),
                  d > 1 && wr(t, e, 1, r),
                  d > 2 && wr(t, e, 2, i),
                  d > 3 && wr(t, e, 3, o),
                  d > 4 && wr(t, e, 4, s),
                  d > 5 && wr(t, e, 5, a),
                  d > 6 && wr(t, e, 6, u),
                  d > 7 && wr(t, e, 7, c),
                  d > 8 && wr(t, e, 8, l),
                  d > 9 && wr(t, e, 9, h);
              })(t, e, r, i, o, s, a, u, c, l, h, d)
            : (function (t, e, n) {
                for (let r = 0; r < n.length; r++) wr(t, e, r, n[r]);
              })(t, e, r),
          !1
        );
      }
      function Fs(t, e) {
        if (hr(t, e.nodeIndex).dirty)
          throw nr(
            dr.createDebugContext(t, e.nodeIndex),
            `Query ${e.query.id} not dirty`,
            `Query ${e.query.id} dirty`,
            0 != (1 & t.state)
          );
      }
      function zs(t) {
        if (!(128 & t.state)) {
          if (($s(t, Hs.Destroy), Bs(t, Hs.Destroy), Fi(t, 131072), t.disposables))
            for (let e = 0; e < t.disposables.length; e++) t.disposables[e]();
          !(function (t) {
            if (!(16 & t.state)) return;
            const e = Cr(t);
            if (e) {
              const n = e.template._projectedViews;
              n && (Y(n, n.indexOf(t)), dr.dirtyParentQueries(t));
            }
          })(t),
            t.renderer.destroyNode &&
              (function (t) {
                const e = t.def.nodes.length;
                for (let n = 0; n < e; n++) {
                  const e = t.def.nodes[n];
                  1 & e.flags
                    ? t.renderer.destroyNode(ur(t, n).renderElement)
                    : 2 & e.flags
                    ? t.renderer.destroyNode(ar(t, n).renderText)
                    : (67108864 & e.flags || 134217728 & e.flags) && hr(t, n).destroy();
                }
              })(t),
            kr(t) && t.renderer.destroy(),
            (t.state |= 128);
        }
      }
      const Hs = (function () {
        var t = {
          CreateViewNodes: 0,
          CheckNoChanges: 1,
          CheckNoChangesProjectedViews: 2,
          CheckAndUpdate: 3,
          CheckAndUpdateProjectedViews: 4,
          Destroy: 5
        };
        return (
          (t[t.CreateViewNodes] = 'CreateViewNodes'),
          (t[t.CheckNoChanges] = 'CheckNoChanges'),
          (t[t.CheckNoChangesProjectedViews] = 'CheckNoChangesProjectedViews'),
          (t[t.CheckAndUpdate] = 'CheckAndUpdate'),
          (t[t.CheckAndUpdateProjectedViews] = 'CheckAndUpdateProjectedViews'),
          (t[t.Destroy] = 'Destroy'),
          t
        );
      })();
      function Bs(t, e) {
        const n = t.def;
        if (33554432 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            33554432 & i.flags ? qs(ur(t, r).componentView, e) : 0 == (33554432 & i.childFlags) && (r += i.childCount);
          }
      }
      function $s(t, e) {
        const n = t.def;
        if (16777216 & n.nodeFlags)
          for (let r = 0; r < n.nodes.length; r++) {
            const i = n.nodes[r];
            if (16777216 & i.flags) {
              const n = ur(t, r).viewContainer._embeddedViews;
              for (let t = 0; t < n.length; t++) qs(n[t], e);
            } else 0 == (16777216 & i.childFlags) && (r += i.childCount);
          }
      }
      function qs(t, e) {
        const n = t.state;
        switch (e) {
          case Hs.CheckNoChanges:
            0 == (128 & n) && (12 == (12 & n) ? js(t) : 64 & n && Ws(t, Hs.CheckNoChangesProjectedViews));
            break;
          case Hs.CheckNoChangesProjectedViews:
            0 == (128 & n) && (32 & n ? js(t) : 64 & n && Ws(t, e));
            break;
          case Hs.CheckAndUpdate:
            0 == (128 & n) && (12 == (12 & n) ? Ms(t) : 64 & n && Ws(t, Hs.CheckAndUpdateProjectedViews));
            break;
          case Hs.CheckAndUpdateProjectedViews:
            0 == (128 & n) && (32 & n ? Ms(t) : 64 & n && Ws(t, e));
            break;
          case Hs.Destroy:
            zs(t);
            break;
          case Hs.CreateViewNodes:
            Ds(t);
        }
      }
      function Ws(t, e) {
        $s(t, e), Bs(t, e);
      }
      function Gs(t, e, n, r) {
        if (!(t.def.nodeFlags & e && t.def.nodeFlags & n)) return;
        const i = t.def.nodes.length;
        for (let o = 0; o < i; o++) {
          const i = t.def.nodes[o];
          if (i.flags & e && i.flags & n)
            switch ((dr.setCurrentNode(t, i.nodeIndex), r)) {
              case 0:
                vs(t, i);
                break;
              case 1:
                Fs(t, i);
            }
          (i.childFlags & e && i.childFlags & n) || (o += i.childCount);
        }
      }
      let Ks = !1;
      function Ys(t, e, n, r, i, o) {
        const s = i.injector.get(Nn);
        return As(Zs(t, i, s, e, n), r, o);
      }
      function Js(t, e, n, r, i, o) {
        const s = i.injector.get(Nn),
          a = Zs(t, i, new Oa(s), e, n),
          u = aa(r);
        return xa(fa.create, As, null, [a, u, o]);
      }
      function Zs(t, e, n, r, i) {
        const o = e.injector.get(be),
          s = e.injector.get($t),
          a = n.createRenderer(null, null);
        return {
          ngModule: e,
          injector: t,
          projectableNodes: r,
          selectorOrNode: i,
          sanitizer: o,
          rendererFactory: n,
          renderer: a,
          errorHandler: s
        };
      }
      function Xs(t, e, n, r) {
        const i = aa(n);
        return xa(fa.create, Os, null, [t, e, i, r]);
      }
      function Qs(t, e, n, r) {
        return (n = ra.get(e.element.componentProvider.provider.token) || aa(n)), xa(fa.create, Ns, null, [t, e, n, r]);
      }
      function ta(t, e, n, r) {
        return vi(
          t,
          e,
          n,
          (function (t) {
            const { hasOverrides: e, hasDeprecatedOverrides: n } = (function (t) {
              let e = !1,
                n = !1;
              return 0 === ea.size
                ? { hasOverrides: e, hasDeprecatedOverrides: n }
                : (t.providers.forEach((t) => {
                    const r = ea.get(t.token);
                    3840 & t.flags && r && ((e = !0), (n = n || r.deprecatedBehavior));
                  }),
                  t.modules.forEach((t) => {
                    na.forEach((r, i) => {
                      I(i).providedIn === t && ((e = !0), (n = n || r.deprecatedBehavior));
                    });
                  }),
                  { hasOverrides: e, hasDeprecatedOverrides: n });
            })(t);
            return e
              ? ((function (t) {
                  for (let e = 0; e < t.providers.length; e++) {
                    const r = t.providers[e];
                    n && (r.flags |= 4096);
                    const i = ea.get(r.token);
                    i && ((r.flags = (-3841 & r.flags) | i.flags), (r.deps = Nr(i.deps)), (r.value = i.value));
                  }
                  if (na.size > 0) {
                    let e = new Set(t.modules);
                    na.forEach((r, i) => {
                      if (e.has(I(i).providedIn)) {
                        let e = {
                          token: i,
                          flags: r.flags | (n ? 4096 : 0),
                          deps: Nr(r.deps),
                          value: r.value,
                          index: t.providers.length
                        };
                        t.providers.push(e), (t.providersByKey[gr(i)] = e);
                      }
                    });
                  }
                })((t = t.factory(() => fr))),
                t)
              : t;
          })(r)
        );
      }
      const ea = new Map(),
        na = new Map(),
        ra = new Map();
      function ia(t) {
        let e;
        ea.set(t.token, t),
          'function' == typeof t.token && (e = I(t.token)) && 'function' == typeof e.providedIn && na.set(t.token, t);
      }
      function oa(t, e) {
        const n = Dr(e.viewDefFactory),
          r = Dr(n.nodes[0].element.componentView);
        ra.set(t, r);
      }
      function sa() {
        ea.clear(), na.clear(), ra.clear();
      }
      function aa(t) {
        if (0 === ea.size) return t;
        const e = (function (t) {
          const e = [];
          let n = null;
          for (let r = 0; r < t.nodes.length; r++) {
            const i = t.nodes[r];
            1 & i.flags && (n = i),
              n && 3840 & i.flags && ea.has(i.provider.token) && (e.push(n.nodeIndex), (n = null));
          }
          return e;
        })(t);
        if (0 === e.length) return t;
        t = t.factory(() => fr);
        for (let r = 0; r < e.length; r++) n(t, e[r]);
        return t;
        function n(t, e) {
          for (let n = e + 1; n < t.nodes.length; n++) {
            const e = t.nodes[n];
            if (1 & e.flags) return;
            if (3840 & e.flags) {
              const t = e.provider,
                n = ea.get(t.token);
              n && ((e.flags = (-3841 & e.flags) | n.flags), (t.deps = Nr(n.deps)), (t.value = n.value));
            }
          }
        }
      }
      function ua(t, e, n, r, i, o, s, a, u, c, l, h, d) {
        const f = t.def.nodes[e];
        return Ls(t, f, n, r, i, o, s, a, u, c, l, h, d), 224 & f.flags ? lr(t, e).value : void 0;
      }
      function ca(t, e, n, r, i, o, s, a, u, c, l, h, d) {
        const f = t.def.nodes[e];
        return Vs(t, f, n, r, i, o, s, a, u, c, l, h, d), 224 & f.flags ? lr(t, e).value : void 0;
      }
      function la(t) {
        return xa(fa.detectChanges, Ms, null, [t]);
      }
      function ha(t) {
        return xa(fa.checkNoChanges, js, null, [t]);
      }
      function da(t) {
        return xa(fa.destroy, zs, null, [t]);
      }
      const fa = (function () {
        var t = { create: 0, detectChanges: 1, checkNoChanges: 2, destroy: 3, handleEvent: 4 };
        return (
          (t[t.create] = 'create'),
          (t[t.detectChanges] = 'detectChanges'),
          (t[t.checkNoChanges] = 'checkNoChanges'),
          (t[t.destroy] = 'destroy'),
          (t[t.handleEvent] = 'handleEvent'),
          t
        );
      })();
      let pa, ga, ma;
      function va(t, e) {
        (ga = t), (ma = e);
      }
      function ba(t, e, n, r) {
        return va(t, e), xa(fa.handleEvent, t.def.handleEvent, null, [t, e, n, r]);
      }
      function ya(t, e) {
        if (128 & t.state) throw ir(fa[pa]);
        return (
          va(t, Ea(t, 0)),
          t.def.updateDirectives(function (t, n, r, ...i) {
            const o = t.def.nodes[n];
            return (
              0 === e ? _a(t, o, r, i) : Sa(t, o, r, i),
              16384 & o.flags && va(t, Ea(t, n)),
              224 & o.flags ? lr(t, o.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function wa(t, e) {
        if (128 & t.state) throw ir(fa[pa]);
        return (
          va(t, Ca(t, 0)),
          t.def.updateRenderer(function (t, n, r, ...i) {
            const o = t.def.nodes[n];
            return (
              0 === e ? _a(t, o, r, i) : Sa(t, o, r, i),
              3 & o.flags && va(t, Ca(t, n)),
              224 & o.flags ? lr(t, o.nodeIndex).value : void 0
            );
          }, t)
        );
      }
      function _a(t, e, n, r) {
        if (Ls(t, e, n, ...r)) {
          const i = 1 === n ? r[0] : r;
          if (16384 & e.flags) {
            const n = {};
            for (let t = 0; t < e.bindings.length; t++) {
              const r = e.bindings[t],
                o = i[t];
              8 & r.flags && (n[Se(r.nonMinifiedName)] = Ce(o));
            }
            const r = e.parent,
              o = ur(t, r.nodeIndex).renderElement;
            if (r.element.name)
              for (let e in n) {
                const r = n[e];
                null != r ? t.renderer.setAttribute(o, e, r) : t.renderer.removeAttribute(o, e);
              }
            else t.renderer.setValue(o, `bindings=${JSON.stringify(n, null, 2)}`);
          }
        }
      }
      function Sa(t, e, n, r) {
        Vs(t, e, n, ...r);
      }
      function Ea(t, e) {
        for (let n = e; n < t.def.nodes.length; n++) {
          const e = t.def.nodes[n];
          if (16384 & e.flags && e.bindings && e.bindings.length) return n;
        }
        return null;
      }
      function Ca(t, e) {
        for (let n = e; n < t.def.nodes.length; n++) {
          const e = t.def.nodes[n];
          if (3 & e.flags && e.bindings && e.bindings.length) return n;
        }
        return null;
      }
      class Ia {
        constructor(t, e) {
          (this.view = t), (this.nodeIndex = e), null == e && (this.nodeIndex = e = 0), (this.nodeDef = t.def.nodes[e]);
          let n = this.nodeDef,
            r = t;
          for (; n && 0 == (1 & n.flags); ) n = n.parent;
          if (!n) for (; !n && r; ) (n = Ir(r)), (r = r.parent);
          (this.elDef = n), (this.elView = r);
        }
        get elOrCompView() {
          return ur(this.elView, this.elDef.nodeIndex).componentView || this.view;
        }
        get injector() {
          return di(this.elView, this.elDef);
        }
        get component() {
          return this.elOrCompView.component;
        }
        get context() {
          return this.elOrCompView.context;
        }
        get providerTokens() {
          const t = [];
          if (this.elDef)
            for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
              const n = this.elView.def.nodes[e];
              20224 & n.flags && t.push(n.provider.token), (e += n.childCount);
            }
          return t;
        }
        get references() {
          const t = {};
          if (this.elDef) {
            Ta(this.elView, this.elDef, t);
            for (let e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
              const n = this.elView.def.nodes[e];
              20224 & n.flags && Ta(this.elView, n, t), (e += n.childCount);
            }
          }
          return t;
        }
        get componentRenderElement() {
          const t = (function (t) {
            for (; t && !kr(t); ) t = t.parent;
            return t.parent ? ur(t.parent, Ir(t).nodeIndex) : null;
          })(this.elOrCompView);
          return t ? t.renderElement : void 0;
        }
        get renderNode() {
          return 2 & this.nodeDef.flags ? Tr(this.view, this.nodeDef) : Tr(this.elView, this.elDef);
        }
        logError(t, ...e) {
          let n, r;
          2 & this.nodeDef.flags
            ? ((n = this.view.def), (r = this.nodeDef.nodeIndex))
            : ((n = this.elView.def), (r = this.elDef.nodeIndex));
          const i = (function (t, e) {
            let n = -1;
            for (let r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
            return n;
          })(n, r);
          let o = -1;
          n.factory(() => (o++, o === i ? t.error.bind(t, ...e) : fr)),
            o < i && (t.error('Illegal state: the ViewDefinitionFactory did not call the logger!'), t.error(...e));
        }
      }
      function Ta(t, e, n) {
        for (let r in e.references) n[r] = ys(t, e, e.references[r]);
      }
      function xa(t, e, n, r) {
        const i = pa,
          o = ga,
          s = ma;
        try {
          pa = t;
          const a = e.apply(n, r);
          return (ga = o), (ma = s), (pa = i), a;
        } catch (a) {
          if (zt(a) || !ga) throw a;
          throw (function (t, e) {
            return t instanceof Error || (t = new Error(t.toString())), rr(t, e), t;
          })(a, ka());
        }
      }
      function ka() {
        return ga ? new Ia(ga, ma) : null;
      }
      class Oa {
        constructor(t) {
          this.delegate = t;
        }
        createRenderer(t, e) {
          return new Aa(this.delegate.createRenderer(t, e));
        }
        begin() {
          this.delegate.begin && this.delegate.begin();
        }
        end() {
          this.delegate.end && this.delegate.end();
        }
        whenRenderingDone() {
          return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null);
        }
      }
      class Aa {
        constructor(t) {
          (this.delegate = t), (this.debugContextFactory = ka), (this.data = this.delegate.data);
        }
        createDebugContext(t) {
          return this.debugContextFactory(t);
        }
        destroyNode(t) {
          const e = ns(t);
          !(function (t) {
            es.delete(t.nativeNode);
          })(e),
            e instanceof Qo && (e.listeners.length = 0),
            this.delegate.destroyNode && this.delegate.destroyNode(t);
        }
        destroy() {
          this.delegate.destroy();
        }
        createElement(t, e) {
          const n = this.delegate.createElement(t, e),
            r = this.createDebugContext(n);
          if (r) {
            const e = new ts(n, null, r);
            (e.name = t), rs(e);
          }
          return n;
        }
        createComment(t) {
          const e = this.delegate.createComment(t),
            n = this.createDebugContext(e);
          return n && rs(new Qo(e, null, n)), e;
        }
        createText(t) {
          const e = this.delegate.createText(t),
            n = this.createDebugContext(e);
          return n && rs(new Qo(e, null, n)), e;
        }
        appendChild(t, e) {
          const n = ns(t),
            r = ns(e);
          n && r && n instanceof ts && n.addChild(r), this.delegate.appendChild(t, e);
        }
        insertBefore(t, e, n) {
          const r = ns(t),
            i = ns(e),
            o = ns(n);
          r && i && r instanceof ts && r.insertBefore(o, i), this.delegate.insertBefore(t, e, n);
        }
        removeChild(t, e) {
          const n = ns(t),
            r = ns(e);
          n && r && n instanceof ts && n.removeChild(r), this.delegate.removeChild(t, e);
        }
        selectRootElement(t, e) {
          const n = this.delegate.selectRootElement(t, e),
            r = ka();
          return r && rs(new ts(n, null, r)), n;
        }
        setAttribute(t, e, n, r) {
          const i = ns(t);
          i && i instanceof ts && (i.attributes[r ? r + ':' + e : e] = n), this.delegate.setAttribute(t, e, n, r);
        }
        removeAttribute(t, e, n) {
          const r = ns(t);
          r && r instanceof ts && (r.attributes[n ? n + ':' + e : e] = null), this.delegate.removeAttribute(t, e, n);
        }
        addClass(t, e) {
          const n = ns(t);
          n && n instanceof ts && (n.classes[e] = !0), this.delegate.addClass(t, e);
        }
        removeClass(t, e) {
          const n = ns(t);
          n && n instanceof ts && (n.classes[e] = !1), this.delegate.removeClass(t, e);
        }
        setStyle(t, e, n, r) {
          const i = ns(t);
          i && i instanceof ts && (i.styles[e] = n), this.delegate.setStyle(t, e, n, r);
        }
        removeStyle(t, e, n) {
          const r = ns(t);
          r && r instanceof ts && (r.styles[e] = null), this.delegate.removeStyle(t, e, n);
        }
        setProperty(t, e, n) {
          const r = ns(t);
          r && r instanceof ts && (r.properties[e] = n), this.delegate.setProperty(t, e, n);
        }
        listen(t, e, n) {
          if ('string' != typeof t) {
            const r = ns(t);
            r && r.listeners.push(new Xo(e, n));
          }
          return this.delegate.listen(t, e, n);
        }
        parentNode(t) {
          return this.delegate.parentNode(t);
        }
        nextSibling(t) {
          return this.delegate.nextSibling(t);
        }
        setValue(t, e) {
          return this.delegate.setValue(t, e);
        }
      }
      function Na(t, e, n) {
        return new Ra(t, e, n);
      }
      class Ra extends G {
        constructor(t, e, n) {
          super(), (this.moduleType = t), (this._bootstrapComponents = e), (this._ngModuleDefFactory = n);
        }
        create(t) {
          !(function () {
            if (Ks) return;
            Ks = !0;
            const t = Gt()
              ? {
                  setCurrentNode: va,
                  createRootView: Js,
                  createEmbeddedView: Xs,
                  createComponentView: Qs,
                  createNgModuleRef: ta,
                  overrideProvider: ia,
                  overrideComponentView: oa,
                  clearOverrides: sa,
                  checkAndUpdateView: la,
                  checkNoChangesView: ha,
                  destroyView: da,
                  createDebugContext: (t, e) => new Ia(t, e),
                  handleEvent: ba,
                  updateDirectives: ya,
                  updateRenderer: wa
                }
              : {
                  setCurrentNode: () => {},
                  createRootView: Ys,
                  createEmbeddedView: Os,
                  createComponentView: Ns,
                  createNgModuleRef: vi,
                  overrideProvider: fr,
                  overrideComponentView: fr,
                  clearOverrides: fr,
                  checkAndUpdateView: Ms,
                  checkNoChangesView: js,
                  destroyView: zs,
                  createDebugContext: (t, e) => new Ia(t, e),
                  handleEvent: (t, e, n, r) => t.def.handleEvent(t, e, n, r),
                  updateDirectives: (t, e) => t.def.updateDirectives(0 === e ? ua : ca, t),
                  updateRenderer: (t, e) => t.def.updateRenderer(0 === e ? ua : ca, t)
                };
            (dr.setCurrentNode = t.setCurrentNode),
              (dr.createRootView = t.createRootView),
              (dr.createEmbeddedView = t.createEmbeddedView),
              (dr.createComponentView = t.createComponentView),
              (dr.createNgModuleRef = t.createNgModuleRef),
              (dr.overrideProvider = t.overrideProvider),
              (dr.overrideComponentView = t.overrideComponentView),
              (dr.clearOverrides = t.clearOverrides),
              (dr.checkAndUpdateView = t.checkAndUpdateView),
              (dr.checkNoChangesView = t.checkNoChangesView),
              (dr.destroyView = t.destroyView),
              (dr.resolveDep = Li),
              (dr.createDebugContext = t.createDebugContext),
              (dr.handleEvent = t.handleEvent),
              (dr.updateDirectives = t.updateDirectives),
              (dr.updateRenderer = t.updateRenderer),
              (dr.dirtyParentQueries = ms);
          })();
          const e = (function (t) {
            const e = Array.from(t.providers),
              n = Array.from(t.modules),
              r = {};
            for (const i in t.providersByKey) r[i] = t.providersByKey[i];
            return { factory: t.factory, isRoot: t.isRoot, providers: e, modules: n, providersByKey: r };
          })(Dr(this._ngModuleDefFactory));
          return dr.createNgModuleRef(this.moduleType, t || qe.NULL, this._bootstrapComponents, e);
        }
      }
    },
    '9ppp': function (t, e, n) {
      'use strict';
      function r() {
        return Error.call(this), (this.message = 'object unsubscribed'), (this.name = 'ObjectUnsubscribedError'), this;
      }
      n.d(e, 'a', function () {
        return i;
      }),
        (r.prototype = Object.create(Error.prototype));
      const i = r;
    },
    CRDf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('kJWO');
      const i = (t) => (e) => {
        const n = t[r.a]();
        if ('function' != typeof n.subscribe)
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
        return n.subscribe(e);
      };
    },
    Cfvw: function (t, e, n) {
      'use strict';
      var r = n('HDdC'),
        i = n('c2HN'),
        o = n('I55L'),
        s = n('kJWO'),
        a = n('Lhse'),
        u = n('yCtX'),
        c = n('quSY'),
        l = n('a7t3'),
        h = n('pLzU'),
        d = n('CRDf'),
        f = n('SeVD');
      function p(t, e) {
        if (!e) return t instanceof r.a ? t : new r.a(Object(f.a)(t));
        if (null != t) {
          if (
            (function (t) {
              return t && 'function' == typeof t[s.a];
            })(t)
          )
            return (function (t, e) {
              return new r.a(
                e
                  ? (n) => {
                      const r = new c.a();
                      return (
                        r.add(
                          e.schedule(() => {
                            const i = t[s.a]();
                            r.add(
                              i.subscribe({
                                next(t) {
                                  r.add(e.schedule(() => n.next(t)));
                                },
                                error(t) {
                                  r.add(e.schedule(() => n.error(t)));
                                },
                                complete() {
                                  r.add(e.schedule(() => n.complete()));
                                }
                              })
                            );
                          })
                        ),
                        r
                      );
                    }
                  : Object(d.a)(t)
              );
            })(t, e);
          if (Object(i.a)(t))
            return (function (t, e) {
              return new r.a(
                e
                  ? (n) => {
                      const r = new c.a();
                      return (
                        r.add(
                          e.schedule(() =>
                            t.then(
                              (t) => {
                                r.add(
                                  e.schedule(() => {
                                    n.next(t), r.add(e.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (t) => {
                                r.add(e.schedule(() => n.error(t)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    }
                  : Object(l.a)(t)
              );
            })(t, e);
          if (Object(o.a)(t)) return Object(u.a)(t, e);
          if (
            (function (t) {
              return t && 'function' == typeof t[a.a];
            })(t) ||
            'string' == typeof t
          )
            return (function (t, e) {
              if (!t) throw new Error('Iterable cannot be null');
              return new r.a(
                e
                  ? (n) => {
                      const r = new c.a();
                      let i;
                      return (
                        r.add(() => {
                          i && 'function' == typeof i.return && i.return();
                        }),
                        r.add(
                          e.schedule(() => {
                            (i = t[a.a]()),
                              r.add(
                                e.schedule(function () {
                                  if (n.closed) return;
                                  let t, e;
                                  try {
                                    const n = i.next();
                                    (t = n.value), (e = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  e ? n.complete() : (n.next(t), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    }
                  : Object(h.a)(t)
              );
            })(t, e);
        }
        throw new TypeError(((null !== t && typeof t) || t) + ' is not observable');
      }
      n.d(e, 'a', function () {
        return p;
      });
    },
    DH7j: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = Array.isArray || ((t) => t && 'number' == typeof t.length);
    },
    EY2u: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return o;
        });
      var r = n('HDdC');
      const i = new r.a((t) => t.complete());
      function o(t) {
        return t
          ? (function (t) {
              return new r.a((e) => t.schedule(() => e.complete()));
            })(t)
          : i;
      }
    },
    EtQq: function (t, e, n) {
      'use strict';
      var r = {
        prefix: 'fas',
        iconName: 'bars',
        icon: [
          448,
          512,
          [],
          'f0c9',
          'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z'
        ]
      };
      n.d(e, 'a', function () {
        return i;
      });
      class i {
        constructor(t) {
          (this.authService = t), (this.faBars = r), (this.sideMenu = !1);
        }
        ngOnInit() {}
        closeMenu() {
          this.sideMenu = !this.sideMenu;
        }
        showMenu() {
          this.sideMenu = !this.sideMenu;
        }
        logout() {
          this.authService.logout();
        }
      }
    },
    HDdC: function (t, e, n) {
      'use strict';
      var r = n('7o/Q'),
        i = n('2QA8'),
        o = n('gRHU'),
        s = n('kJWO'),
        a = n('mCNh'),
        u = n('2fFW');
      n.d(e, 'a', function () {
        return c;
      });
      let c = (() => {
        class t {
          constructor(t) {
            (this._isScalar = !1), t && (this._subscribe = t);
          }
          lift(e) {
            const n = new t();
            return (n.source = this), (n.operator = e), n;
          }
          subscribe(t, e, n) {
            const { operator: s } = this,
              a = (function (t, e, n) {
                if (t) {
                  if (t instanceof r.a) return t;
                  if (t[i.a]) return t[i.a]();
                }
                return t || e || n ? new r.a(t, e, n) : new r.a(o.a);
              })(t, e, n);
            if (
              (a.add(
                s
                  ? s.call(a, this.source)
                  : this.source || (u.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable)
                  ? this._subscribe(a)
                  : this._trySubscribe(a)
              ),
              u.a.useDeprecatedSynchronousErrorHandling &&
                a.syncErrorThrowable &&
                ((a.syncErrorThrowable = !1), a.syncErrorThrown))
            )
              throw a.syncErrorValue;
            return a;
          }
          _trySubscribe(t) {
            try {
              return this._subscribe(t);
            } catch (e) {
              u.a.useDeprecatedSynchronousErrorHandling && ((t.syncErrorThrown = !0), (t.syncErrorValue = e)),
                (function (t) {
                  for (; t; ) {
                    const { closed: e, destination: n, isStopped: i } = t;
                    if (e || i) return !1;
                    t = n && n instanceof r.a ? n : null;
                  }
                  return !0;
                })(t)
                  ? t.error(e)
                  : console.warn(e);
            }
          }
          forEach(t, e) {
            return new (e = l(e))((e, n) => {
              let r;
              r = this.subscribe(
                (e) => {
                  try {
                    t(e);
                  } catch (i) {
                    n(i), r && r.unsubscribe();
                  }
                },
                n,
                e
              );
            });
          }
          _subscribe(t) {
            const { source: e } = this;
            return e && e.subscribe(t);
          }
          [s.a]() {
            return this;
          }
          pipe(...t) {
            return 0 === t.length ? this : Object(a.b)(t)(this);
          }
          toPromise(t) {
            return new (t = l(t))((t, e) => {
              let n;
              this.subscribe(
                (t) => (n = t),
                (t) => e(t),
                () => t(n)
              );
            });
          }
        }
        return (t.create = (e) => new t(e)), t;
      })();
      function l(t) {
        if ((t || (t = u.a.Promise || Promise), !t)) throw new Error('no Promise impl found');
        return t;
      }
    },
    I55L: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => t && 'number' == typeof t.length && 'function' != typeof t;
    },
    KDUW: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('Wcq6'),
        i = n('8Y7J'),
        o = n('irV9'),
        s = n('iInd');
      let a = (() => {
        class t {
          constructor(t, e, n) {
            (this.angularFireAuth = t),
              (this.router = e),
              (this.ngZone = n),
              (this.signInMessage = 'Loading...'),
              window.sessionStorage.getItem('period') &&
                (this.showSignInPendingMessage(),
                window.sessionStorage.removeItem('period'),
                this.angularFireAuth.auth
                  .getRedirectResult()
                  .then((t) => {
                    t.user &&
                      this.ngZone.run(() => {
                        (this.signInPendingState = !1),
                          this.setReporterLoggedInStatus(),
                          this.router.navigate(['/report-dashboard']);
                      });
                  })
                  .catch((t) => {
                    console.log(t);
                  }));
          }
          loginWithGoogle() {
            return new Promise((t, e) => {
              const n = new r.auth.GoogleAuthProvider();
              n.addScope('profile'), n.addScope('email'), this.initiateSignInWithRedirect(n), t();
            });
          }
          loginWithFacebook() {
            return new Promise((t, e) => {
              const n = new r.auth.FacebookAuthProvider();
              this.initiateSignInWithRedirect(n), t();
            });
          }
          logout() {
            this.angularFireAuth.auth
              .signOut()
              .then(() => {
                this.angularFireAuth.auth.onAuthStateChanged((t) => {
                  (this.reporterIsLoggedIn = void 0), this.router.navigate(['/reporter-login']);
                });
              })
              .catch((t) => {
                console.log(t);
              });
          }
          showSignInPendingMessage() {
            this.signInPendingState = !0;
          }
          initiateSignInWithRedirect(t) {
            window.sessionStorage.setItem('period', '1'), this.angularFireAuth.auth.signInWithRedirect(t);
          }
          setReporterLoggedInStatus() {
            this.reporterIsLoggedIn = !0;
          }
        }
        return (
          (t.ngInjectableDef = i.Kb({
            factory: function () {
              return new t(i.Lb(o.a), i.Lb(s.k), i.Lb(i.x));
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
    },
    KqfI: function (t, e, n) {
      'use strict';
      function r() {}
      n.d(e, 'a', function () {
        return r;
      });
    },
    LRne: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return a;
      });
      var r = n('z+Ro'),
        i = n('yCtX'),
        o = n('EY2u'),
        s = n('XUOw');
      function a(...t) {
        let e = t[t.length - 1];
        switch ((Object(r.a)(e) ? t.pop() : (e = void 0), t.length)) {
          case 0:
            return Object(o.b)(e);
          case 1:
            return e ? Object(i.a)(t, e) : Object(s.a)(t[0]);
          default:
            return Object(i.a)(t, e);
        }
      }
    },
    Lhse: function (t, e, n) {
      'use strict';
      function r() {
        return 'function' == typeof Symbol && Symbol.iterator ? Symbol.iterator : '@@iterator';
      }
      n.d(e, 'a', function () {
        return i;
      });
      const i = r();
    },
    NCnI: function (t, e, n) {
      'use strict';
      var r = n('8Y7J'),
        i = n('VTKs'),
        o = n('EtQq'),
        s = n('KDUW'),
        a = n('SVse'),
        u = n('0LF7'),
        c = n('kBGf'),
        l = n('3bS2'),
        h = n('6C7I');
      n.d(e, 'a', function () {
        return b;
      });
      var d = r.nb({
        encapsulation: 0,
        styles: [
          [
            '.container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{padding:0 15px;margin-top:33%}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#ff4848;width:65%;margin:0 auto;text-align:center}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .social-btn-container[_ngcontent-%COMP%]{display:flex;flex-flow:column;margin-top:20%}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .social-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;margin-bottom:25px;border:none;align-items:center;display:flex;justify-content:space-evenly;font-size:16px;font-weight:700}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .social-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{height:40px;width:40px}.container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .social-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:100%}'
          ]
        ],
        data: {}
      });
      function f(t) {
        return r.Gb(
          0,
          [
            (t()(),
            r.pb(
              0,
              0,
              null,
              null,
              1,
              'div',
              [['style', 'text-align: center; margin-top: 30px;']],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), r.Fb(1, null, [' ', ' ']))
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.component.authService.signInMessage);
          }
        );
      }
      function p(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 16, 'div', [['class', 'container']], null, null, null, null, null)),
            (t()(), r.pb(1, 0, null, null, 1, 'app-navbar', [], null, null, null, i.b, i.a)),
            r.ob(2, 114688, null, 0, o.a, [s.a], null, null),
            (t()(), r.pb(3, 0, null, null, 13, 'div', [['class', 'main']], null, null, null, null, null)),
            (t()(), r.pb(4, 0, null, null, 1, 'h1', [], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, [' Login to report an emergency '])),
            (t()(), r.eb(16777216, null, null, 1, null, f)),
            r.ob(7, 16384, null, 0, a.j, [r.M, r.J], { ngIf: [0, 'ngIf'] }, null),
            (t()(),
            r.pb(8, 0, null, null, 8, 'div', [['class', 'social-btn-container']], null, null, null, null, null)),
            (t()(),
            r.pb(
              9,
              0,
              null,
              null,
              3,
              'button',
              [],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.authService.loginWithGoogle() && r), r;
              },
              null,
              null
            )),
            (t()(), r.pb(10, 0, null, null, 1, 'div', [['class', 'logo-container']], null, null, null, null, null)),
            (t()(),
            r.pb(
              11,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/images/google-logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), r.Fb(-1, null, [' Login with Google '])),
            (t()(),
            r.pb(
              13,
              0,
              null,
              null,
              3,
              'button',
              [],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.authService.loginWithFacebook() && r), r;
              },
              null,
              null
            )),
            (t()(), r.pb(14, 0, null, null, 1, 'div', [['class', 'logo-container']], null, null, null, null, null)),
            (t()(),
            r.pb(
              15,
              0,
              null,
              null,
              0,
              'img',
              [
                ['alt', ''],
                ['src', 'assets/images/facebook-logo.png']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            (t()(), r.Fb(-1, null, [' Login with Facebook ']))
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0), t(e, 7, 0, n.authService.signInPendingState);
          },
          null
        );
      }
      function g(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 2, 'div', [], null, null, null, null, null)),
            (t()(), r.pb(1, 0, null, null, 1, 'app-large-device-error', [], null, null, null, u.b, u.a)),
            r.ob(2, 114688, null, 0, c.a, [], null, null)
          ],
          function (t, e) {
            t(e, 2, 0);
          },
          null
        );
      }
      function m(t) {
        return r.Gb(
          0,
          [
            (t()(), r.eb(16777216, null, null, 1, null, p)),
            r.ob(1, 16384, null, 0, a.j, [r.M, r.J], { ngIf: [0, 'ngIf'] }, null),
            (t()(), r.eb(16777216, null, null, 1, null, g)),
            r.ob(3, 16384, null, 0, a.j, [r.M, r.J], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.screenWidthService.screenWidth <= 450), t(e, 3, 0, n.screenWidthService.screenWidth > 450);
          },
          null
        );
      }
      function v(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 1, 'app-reporter-login', [], null, null, null, m, d)),
            r.ob(1, 114688, null, 0, l.a, [h.a, s.a], null, null)
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var b = r.lb('app-reporter-login', l.a, v, {}, {}, []);
    },
    NJ4a: function (t, e, n) {
      'use strict';
      function r(t) {
        setTimeout(() => {
          throw t;
        });
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    'Nv++': function (t, e, n) {
      'use strict';
      var r = n('8Y7J');
      function i(t) {
        return (i =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      function o(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (t[e] = n),
          t
        );
      }
      function s(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (t) {
                return Object.getOwnPropertyDescriptor(n, t).enumerable;
              })
            )),
            r.forEach(function (e) {
              o(t, e, n[e]);
            });
        }
        return t;
      }
      function a(t, e) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, e) {
            var n = [],
              r = !0,
              i = !1,
              o = void 0;
            try {
              for (
                var s, a = t[Symbol.iterator]();
                !(r = (s = a.next()).done) && (n.push(s.value), !e || n.length !== e);
                r = !0
              );
            } catch (u) {
              (i = !0), (o = u);
            } finally {
              try {
                r || null == a.return || a.return();
              } finally {
                if (i) throw o;
              }
            }
            return n;
          })(t, e) ||
          (function () {
            throw new TypeError('Invalid attempt to destructure non-iterable instance');
          })()
        );
      }
      function u(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) {
              for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
              return n;
            }
          })(t) ||
          (function (t) {
            if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t))
              return Array.from(t);
          })(t) ||
          (function () {
            throw new TypeError('Invalid attempt to spread non-iterable instance');
          })()
        );
      }
      var c = {},
        l = {};
      try {
        'undefined' != typeof window && (c = window),
          'undefined' != typeof document && (l = document),
          'undefined' != typeof MutationObserver && MutationObserver,
          'undefined' != typeof performance && performance;
      } catch (Pt) {}
      var h = (c.navigator || {}).userAgent,
        d = void 0 === h ? '' : h,
        f = c,
        p = l,
        g =
          !!p.documentElement &&
          !!p.head &&
          'function' == typeof p.addEventListener &&
          'function' == typeof p.createElement,
        m = ~d.indexOf('MSIE') || ~d.indexOf('Trident/'),
        v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        b = v.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
        y = { GROUP: 'group', SWAP_OPACITY: 'swap-opacity', PRIMARY: 'primary', SECONDARY: 'secondary' },
        w =
          ([
            'xs',
            'sm',
            'lg',
            'fw',
            'ul',
            'li',
            'border',
            'pull-left',
            'pull-right',
            'spin',
            'pulse',
            'rotate-90',
            'rotate-180',
            'rotate-270',
            'flip-horizontal',
            'flip-vertical',
            'flip-both',
            'stack',
            'stack-1x',
            'stack-2x',
            'inverse',
            'layers',
            'layers-text',
            'layers-counter',
            y.GROUP,
            y.SWAP_OPACITY,
            y.PRIMARY,
            y.SECONDARY
          ]
            .concat(
              v.map(function (t) {
                return ''.concat(t, 'x');
              })
            )
            .concat(
              b.map(function (t) {
                return 'w-'.concat(t);
              })
            ),
          f.FontAwesomeConfig || {});
      p &&
        'function' == typeof p.querySelector &&
        [
          ['data-family-prefix', 'familyPrefix'],
          ['data-replacement-class', 'replacementClass'],
          ['data-auto-replace-svg', 'autoReplaceSvg'],
          ['data-auto-add-css', 'autoAddCss'],
          ['data-auto-a11y', 'autoA11y'],
          ['data-search-pseudo-elements', 'searchPseudoElements'],
          ['data-observe-mutations', 'observeMutations'],
          ['data-mutate-approach', 'mutateApproach'],
          ['data-keep-original-source', 'keepOriginalSource'],
          ['data-measure-performance', 'measurePerformance'],
          ['data-show-missing-icons', 'showMissingIcons']
        ].forEach(function (t) {
          var e = a(t, 2),
            n = e[1],
            r = (function (t) {
              return '' === t || ('false' !== t && ('true' === t || t));
            })(
              (function (t) {
                var e = p.querySelector('script[' + t + ']');
                if (e) return e.getAttribute(t);
              })(e[0])
            );
          null != r && (w[n] = r);
        });
      var _ = s(
        {},
        {
          familyPrefix: 'fa',
          replacementClass: 'svg-inline--fa',
          autoReplaceSvg: !0,
          autoAddCss: !0,
          autoA11y: !0,
          searchPseudoElements: !1,
          observeMutations: !0,
          mutateApproach: 'async',
          keepOriginalSource: !0,
          measurePerformance: !1,
          showMissingIcons: !0
        },
        w
      );
      _.autoReplaceSvg || (_.observeMutations = !1);
      var S = s({}, _);
      f.FontAwesomeConfig = S;
      var E = f || {};
      E.___FONT_AWESOME___ || (E.___FONT_AWESOME___ = {}),
        E.___FONT_AWESOME___.styles || (E.___FONT_AWESOME___.styles = {}),
        E.___FONT_AWESOME___.hooks || (E.___FONT_AWESOME___.hooks = {}),
        E.___FONT_AWESOME___.shims || (E.___FONT_AWESOME___.shims = []);
      var C = E.___FONT_AWESOME___,
        I = [];
      g &&
        ((p.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(p.readyState) ||
          p.addEventListener('DOMContentLoaded', function t() {
            p.removeEventListener('DOMContentLoaded', t),
              I.map(function (t) {
                return t();
              });
          }));
      var T,
        x = function () {},
        k = 'undefined' != typeof global && void 0 !== global.process && 'function' == typeof global.process.emit,
        O = 'undefined' == typeof setImmediate ? setTimeout : setImmediate,
        A = [];
      function N() {
        for (var t = 0; t < A.length; t++) A[t][0](A[t][1]);
        (A = []), (T = !1);
      }
      function R(t, e) {
        A.push([t, e]), T || ((T = !0), O(N, 0));
      }
      function P(t) {
        var e = t.owner,
          n = e._state,
          r = e._data,
          i = t[n],
          o = t.then;
        if ('function' == typeof i) {
          n = 'fulfilled';
          try {
            r = i(r);
          } catch (Pt) {
            L(o, Pt);
          }
        }
        D(o, r) || ('fulfilled' === n && j(o, r), 'rejected' === n && L(o, r));
      }
      function D(t, e) {
        var n;
        try {
          if (t === e) throw new TypeError('A promises callback cannot return that same promise.');
          if (e && ('function' == typeof e || 'object' === i(e))) {
            var r = e.then;
            if ('function' == typeof r)
              return (
                r.call(
                  e,
                  function (r) {
                    n || ((n = !0), e === r ? M(t, r) : j(t, r));
                  },
                  function (e) {
                    n || ((n = !0), L(t, e));
                  }
                ),
                !0
              );
          }
        } catch (Pt) {
          return n || L(t, Pt), !0;
        }
        return !1;
      }
      function j(t, e) {
        (t !== e && D(t, e)) || M(t, e);
      }
      function M(t, e) {
        'pending' === t._state && ((t._state = 'settled'), (t._data = e), R(V, t));
      }
      function L(t, e) {
        'pending' === t._state && ((t._state = 'settled'), (t._data = e), R(F, t));
      }
      function U(t) {
        t._then = t._then.forEach(P);
      }
      function V(t) {
        (t._state = 'fulfilled'), U(t);
      }
      function F(t) {
        (t._state = 'rejected'), U(t), !t._handled && k && global.process.emit('unhandledRejection', t._data, t);
      }
      function z(t) {
        global.process.emit('rejectionHandled', t);
      }
      function H(t) {
        if ('function' != typeof t) throw new TypeError('Promise resolver ' + t + ' is not a function');
        if (this instanceof H == 0)
          throw new TypeError(
            "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
          );
        (this._then = []),
          (function (t, e) {
            function n(t) {
              L(e, t);
            }
            try {
              t(function (t) {
                j(e, t);
              }, n);
            } catch (Pt) {
              n(Pt);
            }
          })(t, this);
      }
      (H.prototype = {
        constructor: H,
        _state: 'pending',
        _then: null,
        _data: void 0,
        _handled: !1,
        then: function (t, e) {
          var n = { owner: this, then: new this.constructor(x), fulfilled: t, rejected: e };
          return (
            (!e && !t) || this._handled || ((this._handled = !0), 'rejected' === this._state && k && R(z, this)),
            'fulfilled' === this._state || 'rejected' === this._state ? R(P, n) : this._then.push(n),
            n.then
          );
        },
        catch: function (t) {
          return this.then(null, t);
        }
      }),
        (H.all = function (t) {
          if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.all().');
          return new H(function (e, n) {
            var r = [],
              i = 0;
            function o(t) {
              return (
                i++,
                function (n) {
                  (r[t] = n), --i || e(r);
                }
              );
            }
            for (var s, a = 0; a < t.length; a++)
              (s = t[a]) && 'function' == typeof s.then ? s.then(o(a), n) : (r[a] = s);
            i || e(r);
          });
        }),
        (H.race = function (t) {
          if (!Array.isArray(t)) throw new TypeError('You must pass an array to Promise.race().');
          return new H(function (e, n) {
            for (var r, i = 0; i < t.length; i++) (r = t[i]) && 'function' == typeof r.then ? r.then(e, n) : e(r);
          });
        }),
        (H.resolve = function (t) {
          return t && 'object' === i(t) && t.constructor === H
            ? t
            : new H(function (e) {
                e(t);
              });
        }),
        (H.reject = function (t) {
          return new H(function (e, n) {
            n(t);
          });
        });
      var B = 16,
        $ = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
      function q() {
        for (var t = 12, e = ''; t-- > 0; )
          e += '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[(62 * Math.random()) | 0];
        return e;
      }
      function W(t) {
        return ''
          .concat(t)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
      }
      function G(t) {
        return Object.keys(t || {}).reduce(function (e, n) {
          return e + ''.concat(n, ': ').concat(t[n], ';');
        }, '');
      }
      function K(t) {
        return t.size !== $.size || t.x !== $.x || t.y !== $.y || t.rotate !== $.rotate || t.flipX || t.flipY;
      }
      function Y(t) {
        var e = t.transform,
          n = t.iconWidth,
          r = { transform: 'translate('.concat(t.containerWidth / 2, ' 256)') },
          i = 'translate('.concat(32 * e.x, ', ').concat(32 * e.y, ') '),
          o = 'scale('
            .concat((e.size / 16) * (e.flipX ? -1 : 1), ', ')
            .concat((e.size / 16) * (e.flipY ? -1 : 1), ') '),
          s = 'rotate('.concat(e.rotate, ' 0 0)');
        return {
          outer: r,
          inner: { transform: ''.concat(i, ' ').concat(o, ' ').concat(s) },
          path: { transform: 'translate('.concat((n / 2) * -1, ' -256)') }
        };
      }
      var J = { x: 0, y: 0, width: '100%', height: '100%' };
      function Z(t) {
        var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = 'black'), t;
      }
      function X(t) {
        var e = t.icons,
          n = e.main,
          r = e.mask,
          i = t.prefix,
          o = t.iconName,
          a = t.transform,
          u = t.symbol,
          c = t.title,
          l = t.extra,
          h = t.watchable,
          d = void 0 !== h && h,
          f = r.found ? r : n,
          p = f.width,
          g = f.height,
          m = 'fa-w-'.concat(Math.ceil((p / g) * 16)),
          v = [S.replacementClass, o ? ''.concat(S.familyPrefix, '-').concat(o) : '', m]
            .filter(function (t) {
              return -1 === l.classes.indexOf(t);
            })
            .concat(l.classes)
            .join(' '),
          b = {
            children: [],
            attributes: s({}, l.attributes, {
              'data-prefix': i,
              'data-icon': o,
              class: v,
              role: l.attributes.role || 'img',
              xmlns: 'http://www.w3.org/2000/svg',
              viewBox: '0 0 '.concat(p, ' ').concat(g)
            })
          };
        d && (b.attributes['data-fa-i2svg'] = ''),
          c &&
            b.children.push({
              tag: 'title',
              attributes: { id: b.attributes['aria-labelledby'] || 'title-'.concat(q()) },
              children: [c]
            });
        var y = s({}, b, { prefix: i, iconName: o, main: n, mask: r, transform: a, symbol: u, styles: l.styles }),
          w =
            r.found && n.found
              ? (function (t) {
                  var e,
                    n = t.children,
                    r = t.attributes,
                    i = t.main,
                    o = t.mask,
                    a = i.icon,
                    u = o.icon,
                    c = Y({ transform: t.transform, containerWidth: o.width, iconWidth: i.width }),
                    l = { tag: 'rect', attributes: s({}, J, { fill: 'white' }) },
                    h = a.children ? { children: a.children.map(Z) } : {},
                    d = {
                      tag: 'g',
                      attributes: s({}, c.inner),
                      children: [Z(s({ tag: a.tag, attributes: s({}, a.attributes, c.path) }, h))]
                    },
                    f = { tag: 'g', attributes: s({}, c.outer), children: [d] },
                    p = 'mask-'.concat(q()),
                    g = 'clip-'.concat(q()),
                    m = {
                      tag: 'mask',
                      attributes: s({}, J, { id: p, maskUnits: 'userSpaceOnUse', maskContentUnits: 'userSpaceOnUse' }),
                      children: [l, f]
                    },
                    v = {
                      tag: 'defs',
                      children: [
                        {
                          tag: 'clipPath',
                          attributes: { id: g },
                          children: ((e = u), 'g' === e.tag ? e.children : [e])
                        },
                        m
                      ]
                    };
                  return (
                    n.push(v, {
                      tag: 'rect',
                      attributes: s(
                        { fill: 'currentColor', 'clip-path': 'url(#'.concat(g, ')'), mask: 'url(#'.concat(p, ')') },
                        J
                      )
                    }),
                    { children: n, attributes: r }
                  );
                })(y)
              : (function (t) {
                  var e = t.children,
                    n = t.attributes,
                    r = t.main,
                    i = t.transform,
                    o = G(t.styles);
                  if ((o.length > 0 && (n.style = o), K(i))) {
                    var a = Y({ transform: i, containerWidth: r.width, iconWidth: r.width });
                    e.push({
                      tag: 'g',
                      attributes: s({}, a.outer),
                      children: [
                        {
                          tag: 'g',
                          attributes: s({}, a.inner),
                          children: [
                            { tag: r.icon.tag, children: r.icon.children, attributes: s({}, r.icon.attributes, a.path) }
                          ]
                        }
                      ]
                    });
                  } else e.push(r.icon);
                  return { children: e, attributes: n };
                })(y),
          _ = w.attributes;
        return (
          (y.children = w.children),
          (y.attributes = _),
          u
            ? (function (t) {
                var e = t.iconName,
                  n = t.children,
                  r = t.symbol;
                return [
                  {
                    tag: 'svg',
                    attributes: { style: 'display: none;' },
                    children: [
                      {
                        tag: 'symbol',
                        attributes: s({}, t.attributes, {
                          id: !0 === r ? ''.concat(t.prefix, '-').concat(S.familyPrefix, '-').concat(e) : r
                        }),
                        children: n
                      }
                    ]
                  }
                ];
              })(y)
            : (function (t) {
                var e = t.children,
                  n = t.main,
                  r = t.mask,
                  i = t.attributes,
                  o = t.styles,
                  a = t.transform;
                if (K(a) && n.found && !r.found) {
                  var u = { x: n.width / n.height / 2, y: 0.5 };
                  i.style = G(
                    s({}, o, { 'transform-origin': ''.concat(u.x + a.x / 16, 'em ').concat(u.y + a.y / 16, 'em') })
                  );
                }
                return [{ tag: 'svg', attributes: i, children: e }];
              })(y)
        );
      }
      function Q(t) {
        var e = t.content,
          n = t.width,
          r = t.height,
          i = t.transform,
          o = t.title,
          a = t.extra,
          u = t.watchable,
          c = void 0 !== u && u,
          l = s({}, a.attributes, o ? { title: o } : {}, { class: a.classes.join(' ') });
        c && (l['data-fa-i2svg'] = '');
        var h = s({}, a.styles);
        K(i) &&
          ((h.transform = (function (t) {
            var e = t.transform,
              n = t.width,
              r = t.height,
              i = void 0 === r ? 16 : r,
              o = t.startCentered,
              s = void 0 !== o && o,
              a = '';
            return (
              (a +=
                s && m
                  ? 'translate('.concat(e.x / B - (void 0 === n ? 16 : n) / 2, 'em, ').concat(e.y / B - i / 2, 'em) ')
                  : s
                  ? 'translate(calc(-50% + '.concat(e.x / B, 'em), calc(-50% + ').concat(e.y / B, 'em)) ')
                  : 'translate('.concat(e.x / B, 'em, ').concat(e.y / B, 'em) ')),
              (a += 'scale('
                .concat((e.size / B) * (e.flipX ? -1 : 1), ', ')
                .concat((e.size / B) * (e.flipY ? -1 : 1), ') ')) + 'rotate('.concat(e.rotate, 'deg) ')
            );
          })({ transform: i, startCentered: !0, width: n, height: r })),
          (h['-webkit-transform'] = h.transform));
        var d = G(h);
        d.length > 0 && (l.style = d);
        var f = [];
        return (
          f.push({ tag: 'span', attributes: l, children: [e] }),
          o && f.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [o] }),
          f
        );
      }
      function tt(t) {
        var e = t.content,
          n = t.title,
          r = t.extra,
          i = s({}, r.attributes, n ? { title: n } : {}, { class: r.classes.join(' ') }),
          o = G(r.styles);
        o.length > 0 && (i.style = o);
        var a = [];
        return (
          a.push({ tag: 'span', attributes: i, children: [e] }),
          n && a.push({ tag: 'span', attributes: { class: 'sr-only' }, children: [n] }),
          a
        );
      }
      var et = function (t, e, n, r) {
        var i,
          o,
          s,
          a = Object.keys(t),
          u = a.length,
          c =
            void 0 !== r
              ? (function (t, e) {
                  return function (n, r, i, o) {
                    return t.call(e, n, r, i, o);
                  };
                })(e, r)
              : e;
        for (void 0 === n ? ((i = 1), (s = t[a[0]])) : ((i = 0), (s = n)); i < u; i++) s = c(s, t[(o = a[i])], o, t);
        return s;
      };
      function nt(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.skipHooks,
          i = void 0 !== r && r,
          o = Object.keys(e).reduce(function (t, n) {
            var r = e[n];
            return r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
          }, {});
        'function' != typeof C.hooks.addPack || i ? (C.styles[t] = s({}, C.styles[t] || {}, o)) : C.hooks.addPack(t, o),
          'fas' === t && nt('fa', e);
      }
      var rt = C.styles,
        it = C.shims,
        ot = function () {
          var t = function (t) {
            return et(
              rt,
              function (e, n, r) {
                return (e[r] = et(n, t, {})), e;
              },
              {}
            );
          };
          t(function (t, e, n) {
            return e[3] && (t[e[3]] = n), t;
          }),
            t(function (t, e, n) {
              var r = e[2];
              return (
                (t[n] = n),
                r.forEach(function (e) {
                  t[e] = n;
                }),
                t
              );
            });
          var e = 'far' in rt;
          et(
            it,
            function (t, n) {
              var r = n[1];
              return 'far' !== r || e || (r = 'fas'), (t[n[0]] = { prefix: r, iconName: n[2] }), t;
            },
            {}
          );
        };
      function st(t, e, n) {
        if (t && t[e] && t[e][n]) return { prefix: e, iconName: n, icon: t[e][n] };
      }
      function at(t) {
        var e = t.tag,
          n = t.attributes,
          r = void 0 === n ? {} : n,
          i = t.children,
          o = void 0 === i ? [] : i;
        return 'string' == typeof t
          ? W(t)
          : '<'
              .concat(e, ' ')
              .concat(
                (function (t) {
                  return Object.keys(t || {})
                    .reduce(function (e, n) {
                      return e + ''.concat(n, '="').concat(W(t[n]), '" ');
                    }, '')
                    .trim();
                })(r),
                '>'
              )
              .concat(o.map(at).join(''), '</')
              .concat(e, '>');
      }
      function ut(t) {
        (this.name = 'MissingIcon'), (this.message = t || 'Icon unavailable'), (this.stack = new Error().stack);
      }
      ot(), ((ut.prototype = Object.create(Error.prototype)).constructor = ut);
      var ct = { fill: 'currentColor' },
        lt = { attributeType: 'XML', repeatCount: 'indefinite', dur: '2s' },
        ht =
          (s({}, ct, {
            d:
              'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
          }),
          s({}, lt, { attributeName: 'opacity' }));
      function dt(t) {
        var e = t[0],
          n = t[1],
          r = a(t.slice(4), 1)[0];
        return {
          found: !0,
          width: e,
          height: n,
          icon: Array.isArray(r)
            ? {
                tag: 'g',
                attributes: { class: ''.concat(S.familyPrefix, '-').concat(y.GROUP) },
                children: [
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(S.familyPrefix, '-').concat(y.SECONDARY),
                      fill: 'currentColor',
                      d: r[0]
                    }
                  },
                  {
                    tag: 'path',
                    attributes: {
                      class: ''.concat(S.familyPrefix, '-').concat(y.PRIMARY),
                      fill: 'currentColor',
                      d: r[1]
                    }
                  }
                ]
              }
            : { tag: 'path', attributes: { fill: 'currentColor', d: r } }
        };
      }
      function ft() {
        S.autoAddCss &&
          !bt &&
          ((function (t) {
            if (t && g) {
              var e = p.createElement('style');
              e.setAttribute('type', 'text/css'), (e.innerHTML = t);
              for (var n = p.head.childNodes, r = null, i = n.length - 1; i > -1; i--) {
                var o = n[i],
                  s = (o.tagName || '').toUpperCase();
                ['STYLE', 'LINK'].indexOf(s) > -1 && (r = o);
              }
              p.head.insertBefore(e, r);
            }
          })(
            (function () {
              var t = 'svg-inline--fa',
                e = S.familyPrefix,
                n = S.replacementClass,
                r =
                  'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
              if ('fa' !== e || n !== t) {
                var i = new RegExp('\\.'.concat('fa', '\\-'), 'g'),
                  o = new RegExp('\\--'.concat('fa', '\\-'), 'g'),
                  s = new RegExp('\\.'.concat(t), 'g');
                r = r.replace(i, '.'.concat(e, '-')).replace(o, '--'.concat(e, '-')).replace(s, '.'.concat(n));
              }
              return r;
            })()
          ),
          (bt = !0));
      }
      function pt(t, e) {
        return (
          Object.defineProperty(t, 'abstract', { get: e }),
          Object.defineProperty(t, 'html', {
            get: function () {
              return t.abstract.map(function (t) {
                return at(t);
              });
            }
          }),
          Object.defineProperty(t, 'node', {
            get: function () {
              if (g) {
                var e = p.createElement('div');
                return (e.innerHTML = t.html), e.children;
              }
            }
          }),
          t
        );
      }
      function gt(t) {
        var e = t.prefix,
          n = void 0 === e ? 'fa' : e,
          r = t.iconName;
        if (r) return st(vt.definitions, n, r) || st(C.styles, n, r);
      }
      s({}, ct, { cx: '256', cy: '364', r: '28' }),
        s({}, lt, { attributeName: 'r', values: '28;14;28;28;14;28;' }),
        s({}, ht, { values: '1;0;1;1;0;1;' }),
        s({}, ct, {
          opacity: '1',
          d:
            'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
        }),
        s({}, ht, { values: '1;0;0;0;0;1;' }),
        s({}, ct, {
          opacity: '0',
          d:
            'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
        }),
        s({}, ht, { values: '0;0;1;1;0;0;' });
      var mt,
        vt = new ((function () {
          function t() {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.definitions = {});
          }
          var e;
          return (
            (e = [
              {
                key: 'add',
                value: function () {
                  for (var t = this, e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                  var i = n.reduce(this._pullDefinitions, {});
                  Object.keys(i).forEach(function (e) {
                    (t.definitions[e] = s({}, t.definitions[e] || {}, i[e])), nt(e, i[e]), ot();
                  });
                }
              },
              {
                key: 'reset',
                value: function () {
                  this.definitions = {};
                }
              },
              {
                key: '_pullDefinitions',
                value: function (t, e) {
                  var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                  return (
                    Object.keys(n).map(function (e) {
                      var r = n[e],
                        i = r.prefix,
                        o = r.iconName,
                        s = r.icon;
                      t[i] || (t[i] = {}), (t[i][o] = s);
                    }),
                    t
                  );
                }
              }
            ]) &&
              (function (t, e) {
                for (var n = 0; n < e.length; n++) {
                  var r = e[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    'value' in r && (r.writable = !0),
                    Object.defineProperty(t, r.key, r);
                }
              })(t.prototype, e),
            t
          );
        })())(),
        bt = !1,
        yt = function (t) {
          return (function (t) {
            var e = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
            return t
              ? t
                  .toLowerCase()
                  .split(' ')
                  .reduce(function (t, e) {
                    var n = e.toLowerCase().split('-'),
                      r = n[0],
                      i = n.slice(1).join('-');
                    if (r && 'h' === i) return (t.flipX = !0), t;
                    if (r && 'v' === i) return (t.flipY = !0), t;
                    if (((i = parseFloat(i)), isNaN(i))) return t;
                    switch (r) {
                      case 'grow':
                        t.size = t.size + i;
                        break;
                      case 'shrink':
                        t.size = t.size - i;
                        break;
                      case 'left':
                        t.x = t.x - i;
                        break;
                      case 'right':
                        t.x = t.x + i;
                        break;
                      case 'up':
                        t.y = t.y - i;
                        break;
                      case 'down':
                        t.y = t.y + i;
                        break;
                      case 'rotate':
                        t.rotate = t.rotate + i;
                    }
                    return t;
                  }, e)
              : e;
          })(t);
        },
        wt =
          ((mt = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.transform,
              r = void 0 === n ? $ : n,
              i = e.symbol,
              o = void 0 !== i && i,
              a = e.mask,
              u = void 0 === a ? null : a,
              c = e.title,
              l = void 0 === c ? null : c,
              h = e.classes,
              d = void 0 === h ? [] : h,
              f = e.attributes,
              p = void 0 === f ? {} : f,
              g = e.styles,
              m = void 0 === g ? {} : g;
            if (t) {
              var v = t.prefix,
                b = t.iconName,
                y = t.icon;
              return pt(s({ type: 'icon' }, t), function () {
                return (
                  ft(),
                  S.autoA11y &&
                    (l
                      ? (p['aria-labelledby'] = ''.concat(S.replacementClass, '-title-').concat(q()))
                      : ((p['aria-hidden'] = 'true'), (p.focusable = 'false'))),
                  X({
                    icons: { main: dt(y), mask: u ? dt(u.icon) : { found: !1, width: null, height: null, icon: {} } },
                    prefix: v,
                    iconName: b,
                    transform: s({}, $, r),
                    symbol: o,
                    title: l,
                    extra: { attributes: p, styles: m, classes: d }
                  })
                );
              });
            }
          }),
          function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = (t || {}).icon ? t : gt(t || {}),
              r = e.mask;
            return r && (r = (r || {}).icon ? r : gt(r || {})), mt(n, s({}, e, { mask: r }));
          });
      n.d(e, 'a', function () {
        return _t;
      }),
        n.d(e, 'b', function () {
          return Tt;
        }),
        n.d(e, 'c', function () {
          return It;
        }),
        n.d(e, 'd', function () {
          return St;
        }),
        n.d(e, 'e', function () {
          return xt;
        }),
        n.d(e, 'f', function () {
          return Ot;
        }),
        n.d(e, 'g', function () {
          return At;
        }),
        n.d(e, 'h', function () {
          return Nt;
        }),
        n.d(e, 'i', function () {
          return Ct;
        }),
        n.d(e, 'j', function () {
          return Rt;
        });
      let _t = (() => {
          class t {
            constructor() {
              (this.defaultPrefix = 'fas'), (this.globalLibrary = 'unset');
            }
          }
          return (
            (t.ngInjectableDef = Object(r.Kb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })(),
        St = (() => {
          class t {
            constructor() {
              this.definitions = {};
            }
            addIcons(...t) {
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                n.prefix in this.definitions || (this.definitions[n.prefix] = {}),
                  (this.definitions[n.prefix][n.iconName] = n);
              }
            }
            addIconPacks(...t) {
              for (let e = 0; e < t.length; e++) {
                const n = t[e],
                  r = Object.keys(n).map((t) => n[t]);
                this.addIcons(...r);
              }
            }
            getIconDefinition(t, e) {
              return t in this.definitions && e in this.definitions[t] ? this.definitions[t][e] : null;
            }
          }
          return (
            (t.ngInjectableDef = Object(r.Kb)({
              factory: function () {
                return new t();
              },
              token: t,
              providedIn: 'root'
            })),
            t
          );
        })();
      const Et = (t) => {
        const e = {
          'fa-spin': t.spin,
          'fa-pulse': t.pulse,
          'fa-fw': t.fixedWidth,
          'fa-border': t.border,
          'fa-li': t.listItem,
          'fa-inverse': t.inverse,
          'fa-layers-counter': t.counter,
          'fa-flip-horizontal': 'horizontal' === t.flip || 'both' === t.flip,
          'fa-flip-vertical': 'vertical' === t.flip || 'both' === t.flip,
          [`fa-${t.size}`]: null !== t.size,
          [`fa-rotate-${t.rotate}`]: null !== t.rotate,
          [`fa-pull-${t.pull}`]: null !== t.pull,
          [`fa-stack-${t.stackItemSize}`]: null != t.stackItemSize
        };
        return Object.keys(e)
          .map((t) => (e[t] ? t : null))
          .filter((t) => t);
      };
      class Ct {
        constructor() {
          this.stackItemSize = '1x';
        }
        ngOnChanges(t) {
          if ('size' in t)
            throw new Error(
              'fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.'
            );
        }
      }
      class It {
        constructor(t, e, n, r) {
          (this.sanitizer = t), (this.config = e), (this.iconLibrary = n), (this.stackItem = r), (this.classes = []);
        }
        get iconProp() {
          return this.icon;
        }
        set iconProp(t) {
          this.icon = t;
        }
        ngOnChanges(t) {
          if (null != this.icon) {
            if (t) {
              const t = this.findIconDefinition(this.icon);
              if (null != t) {
                const e = this.buildParams();
                this.renderIcon(t, e);
              }
            }
          } else
            console.error(
              'FontAwesome: Property `icon` is required for `fa-icon`/`fa-duotone-icon` components. This warning will become a hard error in 0.6.0.'
            );
        }
        render() {
          this.ngOnChanges({});
        }
        findIconDefinition(t) {
          const e = ((t, e) => {
            return void 0 !== (n = t).prefix && void 0 !== n.iconName
              ? t
              : Array.isArray(t) && 2 === t.length
              ? { prefix: t[0], iconName: t[1] }
              : 'string' == typeof t
              ? { prefix: e, iconName: t }
              : void 0;
            var n;
          })(t, this.config.defaultPrefix);
          if ('icon' in e) return e;
          const n = this.iconLibrary.getIconDefinition(e.prefix, e.iconName);
          if (null != n) return n;
          const r = gt(e);
          if (null != r) {
            const t =
              'Global icon library is deprecated. Consult https://github.com/FortAwesome/angular-fontawesome/blob/master/UPGRADING.md for the migration instructions.';
            if ('unset' === this.config.globalLibrary) console.error('FontAwesome: ' + t);
            else if (!this.config.globalLibrary) throw new Error(t);
            return r;
          }
          var i;
          return (
            (i = e),
            console.error(
              `FontAwesome: Could not find icon with iconName=${i.iconName} and prefix=${i.prefix}. ` +
                'This warning will become a hard error in 0.6.0.'
            ),
            null
          );
        }
        buildParams() {
          const t = {
              flip: this.flip,
              spin: this.spin,
              pulse: this.pulse,
              border: this.border,
              inverse: this.inverse,
              listItem: this.listItem,
              size: this.size || null,
              pull: this.pull || null,
              rotate: this.rotate || null,
              fixedWidth: this.fixedWidth,
              stackItemSize: null != this.stackItem ? this.stackItem.stackItemSize : null
            },
            e = 'string' == typeof this.transform ? yt(this.transform) : this.transform;
          return {
            title: this.title,
            transform: e,
            classes: [...Et(t), ...this.classes],
            mask: null != this.mask ? this.findIconDefinition(this.mask) : null,
            styles: null != this.styles ? this.styles : {},
            symbol: this.symbol,
            attributes: { role: this.a11yRole }
          };
        }
        renderIcon(t, e) {
          const n = wt(t, e);
          this.renderedIconHTML = this.sanitizer.bypassSecurityTrustHtml(n.html.join('\n'));
        }
      }
      class Tt extends It {
        findIconDefinition(t) {
          const e = super.findIconDefinition(t);
          if (null != e && 'fad' !== e.prefix)
            throw new Error(
              'The specified icon does not appear to be a Duotone icon. Check that you specified the correct style: ' +
                `<fa-duotone-icon [icon]="['fab', '${e.iconName}']"></fa-duotone-icon> ` +
                `or use: <fa-icon icon="${e.iconName}"></fa-icon> instead.`
            );
          return e;
        }
        buildParams() {
          const t = super.buildParams();
          return (
            (!0 !== this.swapOpacity && 'true' !== this.swapOpacity) || t.classes.push('fa-swap-opacity'),
            null != this.primaryOpacity && (t.styles['--fa-primary-opacity'] = this.primaryOpacity.toString()),
            null != this.secondaryOpacity && (t.styles['--fa-secondary-opacity'] = this.secondaryOpacity.toString()),
            null != this.primaryColor && (t.styles['--fa-primary-color'] = this.primaryColor),
            null != this.secondaryColor && (t.styles['--fa-secondary-color'] = this.secondaryColor),
            t
          );
        }
      }
      class xt {
        constructor(t, e) {
          (this.renderer = t), (this.elementRef = e);
        }
        ngOnInit() {
          this.renderer.addClass(this.elementRef.nativeElement, 'fa-layers');
        }
        ngOnChanges(t) {
          'size' in t &&
            (null != t.size.currentValue &&
              this.renderer.addClass(this.elementRef.nativeElement, `fa-${t.size.currentValue}`),
            null != t.size.previousValue &&
              this.renderer.removeClass(this.elementRef.nativeElement, `fa-${t.size.previousValue}`));
        }
      }
      class kt {
        constructor(t, e) {
          (this.parent = t),
            (this.sanitizer = e),
            (this.classes = []),
            ((t, e, n) => {
              this.parent ||
                console.error(
                  `FontAwesome: ${this.constructor.name} should be used as child of FaLayersComponent only.`
                );
            })();
        }
        ngOnChanges(t) {
          t && (this.updateParams(), this.updateContent());
        }
        updateContent() {
          this.renderedHTML = this.sanitizer.bypassSecurityTrustHtml(
            this.renderFontawesomeObject(this.content || '', this.params).html.join('\n')
          );
        }
      }
      class Ot extends kt {
        updateParams() {
          this.params = { title: this.title, classes: this.classes, styles: this.styles };
        }
        renderFontawesomeObject(t, e) {
          return (function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.title,
              r = void 0 === n ? null : n,
              i = e.classes,
              o = void 0 === i ? [] : i,
              s = e.attributes,
              a = void 0 === s ? {} : s,
              c = e.styles,
              l = void 0 === c ? {} : c;
            return pt({ type: 'counter', content: t }, function () {
              return (
                ft(),
                tt({
                  content: t.toString(),
                  title: r,
                  extra: {
                    attributes: a,
                    styles: l,
                    classes: [''.concat(S.familyPrefix, '-layers-counter')].concat(u(o))
                  }
                })
              );
            });
          })(t, e);
        }
      }
      class At extends kt {
        updateParams() {
          const t = {
              flip: this.flip,
              spin: this.spin,
              pulse: this.pulse,
              border: this.border,
              inverse: this.inverse,
              listItem: this.listItem,
              size: this.size || null,
              pull: this.pull || null,
              rotate: this.rotate || null,
              fixedWidth: this.fixedWidth
            },
            e = 'string' == typeof this.transform ? yt(this.transform) : this.transform;
          this.params = { transform: e, classes: [...Et(t), ...this.classes], title: this.title, styles: this.styles };
        }
        renderFontawesomeObject(t, e) {
          return (function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = e.transform,
              r = void 0 === n ? $ : n,
              i = e.title,
              o = void 0 === i ? null : i,
              a = e.classes,
              c = void 0 === a ? [] : a,
              l = e.attributes,
              h = void 0 === l ? {} : l,
              d = e.styles,
              f = void 0 === d ? {} : d;
            return pt({ type: 'text', content: t }, function () {
              return (
                ft(),
                Q({
                  content: t,
                  transform: s({}, $, r),
                  title: o,
                  extra: { attributes: h, styles: f, classes: [''.concat(S.familyPrefix, '-layers-text')].concat(u(c)) }
                })
              );
            });
          })(t, e);
        }
      }
      class Nt {
        constructor(t, e) {
          (this.renderer = t), (this.elementRef = e);
        }
        ngOnInit() {
          this.renderer.addClass(this.elementRef.nativeElement, 'fa-stack');
        }
        ngOnChanges(t) {
          'size' in t &&
            (null != t.size.currentValue &&
              this.renderer.addClass(this.elementRef.nativeElement, `fa-${t.size.currentValue}`),
            null != t.size.previousValue &&
              this.renderer.removeClass(this.elementRef.nativeElement, `fa-${t.size.previousValue}`));
        }
      }
      class Rt {}
    },
    PCNd: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      class r {}
    },
    'S+S0': function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n('mrSG'),
        i = n('zVF4'),
        o = (function () {
          function t(t, e, n) {
            (this.name = t),
              (this.instanceFactory = e),
              (this.type = n),
              (this.multipleInstances = !1),
              (this.serviceProps = {}),
              (this.instantiationMode = 'LAZY');
          }
          return (
            (t.prototype.setInstantiationMode = function (t) {
              return (this.instantiationMode = t), this;
            }),
            (t.prototype.setMultipleInstances = function (t) {
              return (this.multipleInstances = t), this;
            }),
            (t.prototype.setServiceProps = function (t) {
              return (this.serviceProps = t), this;
            }),
            t
          );
        })(),
        s = (function () {
          function t(t, e) {
            (this.name = t),
              (this.container = e),
              (this.component = null),
              (this.instances = new Map()),
              (this.instancesDeferred = new Map());
          }
          return (
            (t.prototype.get = function (t) {
              void 0 === t && (t = '[DEFAULT]');
              var e = this.normalizeInstanceIdentifier(t);
              if (!this.instancesDeferred.has(e)) {
                var n = new i.Deferred();
                this.instancesDeferred.set(e, n);
                try {
                  var r = this.getOrInitializeService(e);
                  r && n.resolve(r);
                } catch (o) {}
              }
              return this.instancesDeferred.get(e).promise;
            }),
            (t.prototype.getImmediate = function (t) {
              var e = r.__assign({ identifier: '[DEFAULT]', optional: !1 }, t),
                n = e.optional,
                i = this.normalizeInstanceIdentifier(e.identifier);
              try {
                var o = this.getOrInitializeService(i);
                if (!o) {
                  if (n) return null;
                  throw Error('Service ' + this.name + ' is not available');
                }
                return o;
              } catch (s) {
                if (n) return null;
                throw s;
              }
            }),
            (t.prototype.getComponent = function () {
              return this.component;
            }),
            (t.prototype.setComponent = function (t) {
              var e, n;
              if (t.name !== this.name)
                throw Error('Mismatching Component ' + t.name + ' for Provider ' + this.name + '.');
              if (this.component) throw Error('Component for ' + this.name + ' has already been provided');
              if (
                ((this.component = t),
                (function (t) {
                  return 'EAGER' === t.instantiationMode;
                })(t))
              )
                try {
                  this.getOrInitializeService('[DEFAULT]');
                } catch (l) {}
              try {
                for (var i = r.__values(this.instancesDeferred.entries()), o = i.next(); !o.done; o = i.next()) {
                  var s = r.__read(o.value, 2),
                    a = s[1],
                    u = this.normalizeInstanceIdentifier(s[0]);
                  try {
                    var c = this.getOrInitializeService(u);
                    a.resolve(c);
                  } catch (l) {}
                }
              } catch (h) {
                e = { error: h };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (e) throw e.error;
                }
              }
            }),
            (t.prototype.clearInstance = function (t) {
              void 0 === t && (t = '[DEFAULT]'), this.instancesDeferred.delete(t), this.instances.delete(t);
            }),
            (t.prototype.delete = function () {
              return r.__awaiter(this, void 0, void 0, function () {
                var t;
                return r.__generator(this, function (e) {
                  switch (e.label) {
                    case 0:
                      return (
                        (t = Array.from(this.instances.values())),
                        [
                          4,
                          Promise.all(
                            t
                              .filter(function (t) {
                                return 'INTERNAL' in t;
                              })
                              .map(function (t) {
                                return t.INTERNAL.delete();
                              })
                          )
                        ]
                      );
                    case 1:
                      return e.sent(), [2];
                  }
                });
              });
            }),
            (t.prototype.isComponentSet = function () {
              return null != this.component;
            }),
            (t.prototype.getOrInitializeService = function (t) {
              var e = this.instances.get(t);
              return (
                !e &&
                  this.component &&
                  ((e = this.component.instanceFactory(
                    this.container,
                    (function (t) {
                      return '[DEFAULT]' === t ? void 0 : t;
                    })(t)
                  )),
                  this.instances.set(t, e)),
                e || null
              );
            }),
            (t.prototype.normalizeInstanceIdentifier = function (t) {
              return this.component ? (this.component.multipleInstances ? t : '[DEFAULT]') : t;
            }),
            t
          );
        })(),
        a = (function () {
          function t(t) {
            (this.name = t), (this.providers = new Map());
          }
          return (
            (t.prototype.addComponent = function (t) {
              var e = this.getProvider(t.name);
              if (e.isComponentSet())
                throw new Error('Component ' + t.name + ' has already been registered with ' + this.name);
              e.setComponent(t);
            }),
            (t.prototype.addOrOverwriteComponent = function (t) {
              this.getProvider(t.name).isComponentSet() && this.providers.delete(t.name), this.addComponent(t);
            }),
            (t.prototype.getProvider = function (t) {
              if (this.providers.has(t)) return this.providers.get(t);
              var e = new s(t, this);
              return this.providers.set(t, e), e;
            }),
            (t.prototype.getProviders = function () {
              return Array.from(this.providers.values());
            }),
            t
          );
        })();
      (e.Component = o), (e.ComponentContainer = a), (e.Provider = s);
    },
    SVse: function (t, e, n) {
      'use strict';
      n.d(e, 't', function () {
        return p;
      }),
        n.d(e, 'k', function () {
          return m;
        }),
        n.d(e, 'l', function () {
          return g;
        }),
        n.d(e, 'u', function () {
          return v;
        }),
        n.d(e, 'b', function () {
          return k;
        }),
        n.d(e, 'h', function () {
          return _;
        }),
        n.d(e, 'i', function () {
          return E;
        }),
        n.d(e, 'j', function () {
          return I;
        }),
        n.d(e, 'c', function () {
          return O;
        }),
        n.d(e, 's', function () {
          return A;
        }),
        n.d(e, 'p', function () {
          return N;
        }),
        n.d(e, 'o', function () {
          return R;
        }),
        n.d(e, 'r', function () {
          return y;
        }),
        n.d(e, 'q', function () {
          return b;
        }),
        n.d(e, 'n', function () {
          return i;
        }),
        n.d(e, 'e', function () {
          return o;
        }),
        n.d(e, 'g', function () {
          return s;
        }),
        n.d(e, 'a', function () {
          return a;
        }),
        n.d(e, 'd', function () {
          return l;
        }),
        n.d(e, 'm', function () {
          return h;
        }),
        n.d(e, 'f', function () {
          return u;
        });
      var r = n('8Y7J');
      class i {}
      const o = new r.o('Location Initialized');
      class s {}
      const a = new r.o('appBaseHref');
      class u {
        constructor(t, e) {
          (this._subject = new r.m()), (this._urlChangeListeners = []), (this._platformStrategy = t);
          const n = this._platformStrategy.getBaseHref();
          (this._platformLocation = e),
            (this._baseHref = u.stripTrailingSlash(c(n))),
            this._platformStrategy.onPopState((t) => {
              this._subject.emit({ url: this.path(!0), pop: !0, state: t.state, type: t.type });
            });
        }
        path(t = !1) {
          return this.normalize(this._platformStrategy.path(t));
        }
        getState() {
          return this._platformLocation.getState();
        }
        isCurrentPathEqualTo(t, e = '') {
          return this.path() == this.normalize(t + u.normalizeQueryParams(e));
        }
        normalize(t) {
          return u.stripTrailingSlash(
            (function (t, e) {
              return t && e.startsWith(t) ? e.substring(t.length) : e;
            })(this._baseHref, c(t))
          );
        }
        prepareExternalUrl(t) {
          return t && '/' !== t[0] && (t = '/' + t), this._platformStrategy.prepareExternalUrl(t);
        }
        go(t, e = '', n = null) {
          this._platformStrategy.pushState(n, '', t, e),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(t + u.normalizeQueryParams(e)), n);
        }
        replaceState(t, e = '', n = null) {
          this._platformStrategy.replaceState(n, '', t, e),
            this._notifyUrlChangeListeners(this.prepareExternalUrl(t + u.normalizeQueryParams(e)), n);
        }
        forward() {
          this._platformStrategy.forward();
        }
        back() {
          this._platformStrategy.back();
        }
        onUrlChange(t) {
          this._urlChangeListeners.push(t),
            this.subscribe((t) => {
              this._notifyUrlChangeListeners(t.url, t.state);
            });
        }
        _notifyUrlChangeListeners(t = '', e) {
          this._urlChangeListeners.forEach((n) => n(t, e));
        }
        subscribe(t, e, n) {
          return this._subject.subscribe({ next: t, error: e, complete: n });
        }
        static normalizeQueryParams(t) {
          return t && '?' !== t[0] ? '?' + t : t;
        }
        static joinWithSlash(t, e) {
          if (0 == t.length) return e;
          if (0 == e.length) return t;
          let n = 0;
          return (
            t.endsWith('/') && n++, e.startsWith('/') && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + '/' + e
          );
        }
        static stripTrailingSlash(t) {
          const e = t.match(/#|\?|$/),
            n = (e && e.index) || t.length;
          return t.slice(0, n - ('/' === t[n - 1] ? 1 : 0)) + t.slice(n);
        }
      }
      function c(t) {
        return t.replace(/\/index.html$/, '');
      }
      class l extends s {
        constructor(t, e) {
          super(), (this._platformLocation = t), (this._baseHref = ''), null != e && (this._baseHref = e);
        }
        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        path(t = !1) {
          let e = this._platformLocation.hash;
          return null == e && (e = '#'), e.length > 0 ? e.substring(1) : e;
        }
        prepareExternalUrl(t) {
          const e = u.joinWithSlash(this._baseHref, t);
          return e.length > 0 ? '#' + e : e;
        }
        pushState(t, e, n, r) {
          let i = this.prepareExternalUrl(n + u.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(t, e, i);
        }
        replaceState(t, e, n, r) {
          let i = this.prepareExternalUrl(n + u.normalizeQueryParams(r));
          0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      class h extends s {
        constructor(t, e) {
          if (
            (super(),
            (this._platformLocation = t),
            null == e && (e = this._platformLocation.getBaseHrefFromDOM()),
            null == e)
          )
            throw new Error(
              'No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.'
            );
          this._baseHref = e;
        }
        onPopState(t) {
          this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t);
        }
        getBaseHref() {
          return this._baseHref;
        }
        prepareExternalUrl(t) {
          return u.joinWithSlash(this._baseHref, t);
        }
        path(t = !1) {
          const e = this._platformLocation.pathname + u.normalizeQueryParams(this._platformLocation.search),
            n = this._platformLocation.hash;
          return n && t ? `${e}${n}` : e;
        }
        pushState(t, e, n, r) {
          const i = this.prepareExternalUrl(n + u.normalizeQueryParams(r));
          this._platformLocation.pushState(t, e, i);
        }
        replaceState(t, e, n, r) {
          const i = this.prepareExternalUrl(n + u.normalizeQueryParams(r));
          this._platformLocation.replaceState(t, e, i);
        }
        forward() {
          this._platformLocation.forward();
        }
        back() {
          this._platformLocation.back();
        }
      }
      const d = (function () {
          var t = { Zero: 0, One: 1, Two: 2, Few: 3, Many: 4, Other: 5 };
          return (
            (t[t.Zero] = 'Zero'),
            (t[t.One] = 'One'),
            (t[t.Two] = 'Two'),
            (t[t.Few] = 'Few'),
            (t[t.Many] = 'Many'),
            (t[t.Other] = 'Other'),
            t
          );
        })(),
        f = r.rb,
        p = new r.o('UseV4Plurals');
      class g {}
      class m extends g {
        constructor(t, e) {
          super(), (this.locale = t), (this.deprecatedPluralFn = e);
        }
        getPluralCategory(t, e) {
          switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : f(e || this.locale)(t)) {
            case d.Zero:
              return 'zero';
            case d.One:
              return 'one';
            case d.Two:
              return 'two';
            case d.Few:
              return 'few';
            case d.Many:
              return 'many';
            default:
              return 'other';
          }
        }
      }
      function v(t, e) {
        e = encodeURIComponent(e);
        for (const n of t.split(';')) {
          const t = n.indexOf('='),
            [r, i] = -1 == t ? [n, ''] : [n.slice(0, t), n.slice(t + 1)];
          if (r.trim() === e) return decodeURIComponent(i);
        }
        return null;
      }
      class b {}
      class y {
        constructor(t, e, n, r) {
          (this._iterableDiffers = t),
            (this._keyValueDiffers = e),
            (this._ngEl = n),
            (this._renderer = r),
            (this._initialClasses = []);
        }
        getValue() {
          return null;
        }
        setClass(t) {
          this._removeClasses(this._initialClasses),
            (this._initialClasses = 'string' == typeof t ? t.split(/\s+/) : []),
            this._applyClasses(this._initialClasses),
            this._applyClasses(this._rawClass);
        }
        setNgClass(t) {
          this._removeClasses(this._rawClass),
            this._applyClasses(this._initialClasses),
            (this._iterableDiffer = null),
            (this._keyValueDiffer = null),
            (this._rawClass = 'string' == typeof t ? t.split(/\s+/) : t),
            this._rawClass &&
              (Object(r.ub)(this._rawClass)
                ? (this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create())
                : (this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create()));
        }
        applyChanges() {
          if (this._iterableDiffer) {
            const t = this._iterableDiffer.diff(this._rawClass);
            t && this._applyIterableChanges(t);
          } else if (this._keyValueDiffer) {
            const t = this._keyValueDiffer.diff(this._rawClass);
            t && this._applyKeyValueChanges(t);
          }
        }
        _applyKeyValueChanges(t) {
          t.forEachAddedItem((t) => this._toggleClass(t.key, t.currentValue)),
            t.forEachChangedItem((t) => this._toggleClass(t.key, t.currentValue)),
            t.forEachRemovedItem((t) => {
              t.previousValue && this._toggleClass(t.key, !1);
            });
        }
        _applyIterableChanges(t) {
          t.forEachAddedItem((t) => {
            if ('string' != typeof t.item)
              throw new Error(`NgClass can only toggle CSS classes expressed as strings, got ${Object(r.Eb)(t.item)}`);
            this._toggleClass(t.item, !0);
          }),
            t.forEachRemovedItem((t) => this._toggleClass(t.item, !1));
        }
        _applyClasses(t) {
          t &&
            (Array.isArray(t) || t instanceof Set
              ? t.forEach((t) => this._toggleClass(t, !0))
              : Object.keys(t).forEach((e) => this._toggleClass(e, !!t[e])));
        }
        _removeClasses(t) {
          t &&
            (Array.isArray(t) || t instanceof Set
              ? t.forEach((t) => this._toggleClass(t, !1))
              : Object.keys(t).forEach((t) => this._toggleClass(t, !1)));
        }
        _toggleClass(t, e) {
          (t = t.trim()) &&
            t.split(/\s+/g).forEach((t) => {
              e
                ? this._renderer.addClass(this._ngEl.nativeElement, t)
                : this._renderer.removeClass(this._ngEl.nativeElement, t);
            });
        }
      }
      let w = (() => {
        class t {
          constructor(t) {
            this._delegate = t;
          }
          getValue() {
            return this._delegate.getValue();
          }
        }
        return (t.ngDirectiveDef = void 0), t;
      })();
      class _ extends w {
        constructor(t) {
          super(t);
        }
        set klass(t) {
          this._delegate.setClass(t);
        }
        set ngClass(t) {
          this._delegate.setNgClass(t);
        }
        ngDoCheck() {
          this._delegate.applyChanges();
        }
      }
      class S {
        constructor(t, e, n, r) {
          (this.$implicit = t), (this.ngForOf = e), (this.index = n), (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      class E {
        constructor(t, e, n) {
          (this._viewContainer = t),
            (this._template = e),
            (this._differs = n),
            (this._ngForOfDirty = !0),
            (this._differ = null);
        }
        set ngForOf(t) {
          (this._ngForOf = t), (this._ngForOfDirty = !0);
        }
        set ngForTrackBy(t) {
          Object(r.T)() &&
            null != t &&
            'function' != typeof t &&
            console &&
            console.warn &&
            console.warn(
              `trackBy must be a function, but received ${JSON.stringify(t)}. ` +
                'See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information.'
            ),
            (this._trackByFn = t);
        }
        get ngForTrackBy() {
          return this._trackByFn;
        }
        set ngForTemplate(t) {
          t && (this._template = t);
        }
        ngDoCheck() {
          if (this._ngForOfDirty) {
            this._ngForOfDirty = !1;
            const n = this._ngForOf;
            if (!this._differ && n)
              try {
                this._differ = this._differs.find(n).create(this.ngForTrackBy);
              } catch (e) {
                throw new Error(
                  `Cannot find a differ supporting object '${n}' of type '${
                    ((t = n), t.name || typeof t)
                  }'. NgFor only supports binding to Iterables such as Arrays.`
                );
              }
          }
          var t;
          if (this._differ) {
            const t = this._differ.diff(this._ngForOf);
            t && this._applyChanges(t);
          }
        }
        _applyChanges(t) {
          const e = [];
          t.forEachOperation((t, n, r) => {
            if (null == t.previousIndex) {
              const n = this._viewContainer.createEmbeddedView(
                  this._template,
                  new S(null, this._ngForOf, -1, -1),
                  null === r ? void 0 : r
                ),
                i = new C(t, n);
              e.push(i);
            } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
            else if (null !== n) {
              const i = this._viewContainer.get(n);
              this._viewContainer.move(i, r);
              const o = new C(t, i);
              e.push(o);
            }
          });
          for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
          for (let n = 0, r = this._viewContainer.length; n < r; n++) {
            const t = this._viewContainer.get(n);
            (t.context.index = n), (t.context.count = r), (t.context.ngForOf = this._ngForOf);
          }
          t.forEachIdentityChange((t) => {
            this._viewContainer.get(t.currentIndex).context.$implicit = t.item;
          });
        }
        _perViewChange(t, e) {
          t.context.$implicit = e.item;
        }
        static ngTemplateContextGuard(t, e) {
          return !0;
        }
      }
      class C {
        constructor(t, e) {
          (this.record = t), (this.view = e);
        }
      }
      class I {
        constructor(t, e) {
          (this._viewContainer = t),
            (this._context = new T()),
            (this._thenTemplateRef = null),
            (this._elseTemplateRef = null),
            (this._thenViewRef = null),
            (this._elseViewRef = null),
            (this._thenTemplateRef = e);
        }
        set ngIf(t) {
          (this._context.$implicit = this._context.ngIf = t), this._updateView();
        }
        set ngIfThen(t) {
          x('ngIfThen', t), (this._thenTemplateRef = t), (this._thenViewRef = null), this._updateView();
        }
        set ngIfElse(t) {
          x('ngIfElse', t), (this._elseTemplateRef = t), (this._elseViewRef = null), this._updateView();
        }
        _updateView() {
          this._context.$implicit
            ? this._thenViewRef ||
              (this._viewContainer.clear(),
              (this._elseViewRef = null),
              this._thenTemplateRef &&
                (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context)))
            : this._elseViewRef ||
              (this._viewContainer.clear(),
              (this._thenViewRef = null),
              this._elseTemplateRef &&
                (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)));
        }
      }
      class T {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function x(t, e) {
        if (e && !e.createEmbeddedView)
          throw new Error(`${t} must be a TemplateRef, but received '${Object(r.Eb)(e)}'.`);
      }
      class k {}
      const O = new r.o('DocumentToken'),
        A = 'browser';
      function N(t) {
        return 'server' === t;
      }
      let R = (() => {
        class t {}
        return (
          (t.ngInjectableDef = Object(r.Kb)({
            token: t,
            providedIn: 'root',
            factory: () => new P(Object(r.Lb)(O), window, Object(r.Lb)(r.l))
          })),
          t
        );
      })();
      class P {
        constructor(t, e, n) {
          (this.document = t), (this.window = e), (this.errorHandler = n), (this.offset = () => [0, 0]);
        }
        setOffset(t) {
          this.offset = Array.isArray(t) ? () => t : t;
        }
        getScrollPosition() {
          return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0];
        }
        scrollToPosition(t) {
          this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1]);
        }
        scrollToAnchor(t) {
          if (this.supportScrollRestoration()) {
            t =
              this.window.CSS && this.window.CSS.escape
                ? this.window.CSS.escape(t)
                : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            try {
              const e = this.document.querySelector(`#${t}`);
              if (e) return void this.scrollToElement(e);
              const n = this.document.querySelector(`[name='${t}']`);
              if (n) return void this.scrollToElement(n);
            } catch (e) {
              this.errorHandler.handleError(e);
            }
          }
        }
        setHistoryScrollRestoration(t) {
          if (this.supportScrollRestoration()) {
            const e = this.window.history;
            e && e.scrollRestoration && (e.scrollRestoration = t);
          }
        }
        scrollToElement(t) {
          const e = t.getBoundingClientRect(),
            n = e.left + this.window.pageXOffset,
            r = e.top + this.window.pageYOffset,
            i = this.offset();
          this.window.scrollTo(n - i[0], r - i[1]);
        }
        supportScrollRestoration() {
          try {
            return !!this.window && !!this.window.scrollTo;
          } catch (t) {
            return !1;
          }
        }
      }
    },
    SeVD: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return f;
      });
      var r = n('HDdC'),
        i = n('ngJS'),
        o = n('a7t3'),
        s = n('pLzU'),
        a = n('CRDf'),
        u = n('I55L'),
        c = n('c2HN'),
        l = n('XoHu'),
        h = n('Lhse'),
        d = n('kJWO');
      const f = (t) => {
        if (t instanceof r.a) return (e) => (t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e));
        if (t && 'function' == typeof t[d.a]) return Object(a.a)(t);
        if (Object(u.a)(t)) return Object(i.a)(t);
        if (Object(c.a)(t)) return Object(o.a)(t);
        if (t && 'function' == typeof t[h.a]) return Object(s.a)(t);
        {
          const e = Object(l.a)(t) ? 'an invalid object' : `'${t}'`;
          throw new TypeError(
            `You provided ${e} where a stream was expected.` +
              ' You can provide an Observable, Promise, Array, or Iterable.'
          );
        }
      };
    },
    SpAZ: function (t, e, n) {
      'use strict';
      function r(t) {
        return t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    VTKs: function (t, e, n) {
      'use strict';
      var r = n('8Y7J'),
        i = n('fNgX'),
        o = n('Nv++'),
        s = n('cUpR'),
        a = n('SVse');
      n('EtQq'),
        n('KDUW'),
        n.d(e, 'a', function () {
          return u;
        }),
        n.d(e, 'b', function () {
          return h;
        });
      var u = r.nb({
        encapsulation: 0,
        styles: [
          [
            'nav[_ngcontent-%COMP%]{background-color:red;display:flex;padding:20px 15px;justify-content:space-between}nav[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{color:#fff}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{position:relative}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]{color:#fff}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]{position:fixed;top:0;right:-200%;background-color:#fff;z-index:1;height:100%;display:flex;flex-direction:column;width:50vw;box-shadow:-8px 0 21px rgba(0,0,0,.2);transition:.2s ease}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{padding:7px 10px;border-bottom:1px solid #a0a0a0;text-align:right;margin-bottom:20px;font-size:16px;cursor:pointer}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul.nav-list[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;align-items:flex-end}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%]   ul.nav-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block;padding-bottom:39px;padding-right:15px}nav[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav.active[_ngcontent-%COMP%]{right:0}'
          ]
        ],
        data: {}
      });
      function c(t) {
        return r.Gb(
          0,
          [
            (t()(),
            r.pb(
              0,
              0,
              null,
              null,
              1,
              'fa-icon',
              [['class', 'hamburger ng-fa-icon']],
              [
                [1, 'title', 0],
                [8, 'innerHTML', 1]
              ],
              [[null, 'click']],
              function (t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.showMenu() && r), r;
              },
              i.d,
              i.c
            )),
            r.ob(1, 573440, null, 0, o.c, [s.b, o.a, o.d, [2, o.i]], { icon: [0, 'icon'] }, null)
          ],
          function (t, e) {
            t(e, 1, 0, e.component.faBars);
          },
          function (t, e) {
            t(e, 0, 0, r.Bb(e, 1).title, r.Bb(e, 1).renderedIconHTML);
          }
        );
      }
      function l(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 12, 'div', [['class', 'nav']], null, null, null, null, null)),
            r.Db(512, null, a.q, a.r, [r.q, r.r, r.k, r.B]),
            r.ob(2, 278528, null, 0, a.h, [a.q], { klass: [0, 'klass'], ngClass: [1, 'ngClass'] }, null),
            r.Cb(3, { active: 0 }),
            (t()(),
            r.pb(
              4,
              0,
              null,
              null,
              1,
              'span',
              [['class', 'close']],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.closeMenu() && r), r;
              },
              null,
              null
            )),
            (t()(), r.Fb(-1, null, ['\xd7'])),
            (t()(), r.pb(6, 0, null, null, 6, 'ul', [['class', 'nav-list']], null, null, null, null, null)),
            (t()(), r.pb(7, 0, null, null, 1, 'li', [['class', 'nav-item']], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, ['Dashboard'])),
            (t()(), r.pb(9, 0, null, null, 1, 'li', [['class', 'nav-item']], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, ['History'])),
            (t()(),
            r.pb(
              11,
              0,
              null,
              null,
              1,
              'li',
              [['class', 'nav-item']],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var r = !0;
                return 'click' === e && (r = !1 !== t.component.logout() && r), r;
              },
              null,
              null
            )),
            (t()(), r.Fb(-1, null, ['Logout']))
          ],
          function (t, e) {
            var n = t(e, 3, 0, e.component.sideMenu);
            t(e, 2, 0, 'nav', n);
          },
          null
        );
      }
      function h(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 7, 'nav', [], null, null, null, null, null)),
            (t()(), r.pb(1, 0, null, null, 1, 'span', [['id', 'logo']], null, null, null, null, null)),
            (t()(), r.Fb(-1, null, ['Logo'])),
            (t()(), r.pb(3, 0, null, null, 4, 'div', [['class', 'navbar-nav']], null, null, null, null, null)),
            (t()(), r.eb(16777216, null, null, 1, null, c)),
            r.ob(5, 16384, null, 0, a.j, [r.M, r.J], { ngIf: [0, 'ngIf'] }, null),
            (t()(), r.eb(16777216, null, null, 1, null, l)),
            r.ob(7, 16384, null, 0, a.j, [r.M, r.J], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (t, e) {
            var n = e.component;
            t(e, 5, 0, n.authService.reporterIsLoggedIn), t(e, 7, 0, n.authService.reporterIsLoggedIn);
          },
          null
        );
      }
    },
    Wcq6: function (t, e, n) {
      'use strict';
      var r,
        i = (r = n('wj3C')) && 'object' == typeof r && 'default' in r ? r.default : r;
      i.registerVersion('firebase', '7.14.4', 'app'), (t.exports = i);
    },
    XNiG: function (t, e, n) {
      'use strict';
      var r = n('HDdC'),
        i = n('7o/Q'),
        o = n('quSY'),
        s = n('9ppp');
      class a extends o.a {
        constructor(t, e) {
          super(), (this.subject = t), (this.subscriber = e), (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const t = this.subject,
            e = t.observers;
          if (((this.subject = null), !e || 0 === e.length || t.isStopped || t.closed)) return;
          const n = e.indexOf(this.subscriber);
          -1 !== n && e.splice(n, 1);
        }
      }
      var u = n('2QA8');
      n.d(e, 'b', function () {
        return c;
      }),
        n.d(e, 'a', function () {
          return l;
        });
      class c extends i.a {
        constructor(t) {
          super(t), (this.destination = t);
        }
      }
      let l = (() => {
        class t extends r.a {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [u.a]() {
            return new c(this);
          }
          lift(t) {
            const e = new h(this, this);
            return (e.operator = t), e;
          }
          next(t) {
            if (this.closed) throw new s.a();
            if (!this.isStopped) {
              const { observers: e } = this,
                n = e.length,
                r = e.slice();
              for (let i = 0; i < n; i++) r[i].next(t);
            }
          }
          error(t) {
            if (this.closed) throw new s.a();
            (this.hasError = !0), (this.thrownError = t), (this.isStopped = !0);
            const { observers: e } = this,
              n = e.length,
              r = e.slice();
            for (let i = 0; i < n; i++) r[i].error(t);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new s.a();
            this.isStopped = !0;
            const { observers: t } = this,
              e = t.length,
              n = t.slice();
            for (let r = 0; r < e; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(t) {
            if (this.closed) throw new s.a();
            return super._trySubscribe(t);
          }
          _subscribe(t) {
            if (this.closed) throw new s.a();
            return this.hasError
              ? (t.error(this.thrownError), o.a.EMPTY)
              : this.isStopped
              ? (t.complete(), o.a.EMPTY)
              : (this.observers.push(t), new a(this, t));
          }
          asObservable() {
            const t = new r.a();
            return (t.source = this), t;
          }
        }
        return (t.create = (t, e) => new h(t, e)), t;
      })();
      class h extends l {
        constructor(t, e) {
          super(), (this.destination = t), (this.source = e);
        }
        next(t) {
          const { destination: e } = this;
          e && e.next && e.next(t);
        }
        error(t) {
          const { destination: e } = this;
          e && e.error && this.destination.error(t);
        }
        complete() {
          const { destination: t } = this;
          t && t.complete && this.destination.complete();
        }
        _subscribe(t) {
          const { source: e } = this;
          return e ? this.source.subscribe(t) : o.a.EMPTY;
        }
      }
    },
    XUOw: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('HDdC');
      function i(t) {
        const e = new r.a((e) => {
          e.next(t), e.complete();
        });
        return (e._isScalar = !0), (e.value = t), e;
      }
    },
    XoHu: function (t, e, n) {
      'use strict';
      function r(t) {
        return null !== t && 'object' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    Yj9t: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      class r {}
    },
    ZUHj: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('51Dv'),
        i = n('SeVD');
      function o(t, e, n, o, s = new r.a(t, n, o)) {
        if (!s.closed) return Object(i.a)(e)(s);
      }
    },
    a7t3: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('NJ4a');
      const i = (t) => (e) => (
        t
          .then(
            (t) => {
              e.closed || (e.next(t), e.complete());
            },
            (t) => e.error(t)
          )
          .then(null, r.a),
        e
      );
    },
    bHdf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('5+tZ'),
        i = n('SpAZ');
      function o(t = Number.POSITIVE_INFINITY) {
        return Object(r.a)(i.a, t);
      }
    },
    c2HN: function (t, e, n) {
      'use strict';
      function r(t) {
        return !!t && 'function' != typeof t.subscribe && 'function' == typeof t.then;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    cUpR: function (t, e, n) {
      'use strict';
      n.d(e, 'p', function () {
        return lt;
      }),
        n.d(e, 'q', function () {
          return _;
        }),
        n.d(e, 'a', function () {
          return ht;
        }),
        n.d(e, 'h', function () {
          return ct;
        }),
        n.d(e, 'c', function () {
          return S;
        }),
        n.d(e, 'd', function () {
          return E;
        }),
        n.d(e, 'e', function () {
          return G;
        }),
        n.d(e, 'f', function () {
          return K;
        }),
        n.d(e, 'g', function () {
          return Y;
        }),
        n.d(e, 'b', function () {
          return tt;
        }),
        n.d(e, 'r', function () {
          return s;
        }),
        n.d(e, 'j', function () {
          return N;
        }),
        n.d(e, 'i', function () {
          return q;
        }),
        n.d(e, 'm', function () {
          return J;
        }),
        n.d(e, 'n', function () {
          return Q;
        }),
        n.d(e, 'l', function () {
          return T;
        }),
        n.d(e, 'o', function () {
          return I;
        }),
        n.d(e, 'k', function () {
          return et;
        });
      var r = n('SVse'),
        i = n('8Y7J');
      let o = null;
      function s() {
        return o;
      }
      const a = { class: 'className', innerHtml: 'innerHTML', readonly: 'readOnly', tabindex: 'tabIndex' },
        u = {
          '\b': 'Backspace',
          '\t': 'Tab',
          '\x7f': 'Delete',
          '\x1b': 'Escape',
          Del: 'Delete',
          Esc: 'Escape',
          Left: 'ArrowLeft',
          Right: 'ArrowRight',
          Up: 'ArrowUp',
          Down: 'ArrowDown',
          Menu: 'ContextMenu',
          Scroll: 'ScrollLock',
          Win: 'OS'
        },
        c = {
          A: '1',
          B: '2',
          C: '3',
          D: '4',
          E: '5',
          F: '6',
          G: '7',
          H: '8',
          I: '9',
          J: '*',
          K: '+',
          M: '-',
          N: '.',
          O: '/',
          '`': '0',
          '\x90': 'NumLock'
        },
        l = (() => {
          if (i.sb.Node)
            return (
              i.sb.Node.prototype.contains ||
              function (t) {
                return !!(16 & this.compareDocumentPosition(t));
              }
            );
        })();
      class h extends class extends class {
        constructor() {
          this.resourceLoaderType = null;
        }
        get attrToPropMap() {
          return this._attrToPropMap;
        }
        set attrToPropMap(t) {
          this._attrToPropMap = t;
        }
      } {
        constructor() {
          super(), (this._animationPrefix = null), (this._transitionEnd = null);
          try {
            const t = this.createElement('div', document);
            if (null != this.getStyle(t, 'animationName')) this._animationPrefix = '';
            else {
              const e = ['Webkit', 'Moz', 'O', 'ms'];
              for (let n = 0; n < e.length; n++)
                if (null != this.getStyle(t, e[n] + 'AnimationName')) {
                  this._animationPrefix = '-' + e[n].toLowerCase() + '-';
                  break;
                }
            }
            const e = {
              WebkitTransition: 'webkitTransitionEnd',
              MozTransition: 'transitionend',
              OTransition: 'oTransitionEnd otransitionend',
              transition: 'transitionend'
            };
            Object.keys(e).forEach((n) => {
              null != this.getStyle(t, n) && (this._transitionEnd = e[n]);
            });
          } catch (t) {
            (this._animationPrefix = null), (this._transitionEnd = null);
          }
        }
        getDistributedNodes(t) {
          return t.getDistributedNodes();
        }
        resolveAndSetHref(t, e, n) {
          t.href = null == n ? e : e + '/../' + n;
        }
        supportsDOMEvents() {
          return !0;
        }
        supportsNativeShadowDOM() {
          return 'function' == typeof document.body.createShadowRoot;
        }
        getAnimationPrefix() {
          return this._animationPrefix ? this._animationPrefix : '';
        }
        getTransitionEnd() {
          return this._transitionEnd ? this._transitionEnd : '';
        }
        supportsAnimation() {
          return null != this._animationPrefix && null != this._transitionEnd;
        }
      } {
        parse(t) {
          throw new Error('parse not implemented');
        }
        static makeCurrent() {
          var t;
          (t = new h()), o || (o = t);
        }
        hasProperty(t, e) {
          return e in t;
        }
        setProperty(t, e, n) {
          t[e] = n;
        }
        getProperty(t, e) {
          return t[e];
        }
        invoke(t, e, n) {
          t[e](...n);
        }
        logError(t) {
          window.console && (console.error ? console.error(t) : console.log(t));
        }
        log(t) {
          window.console && window.console.log && window.console.log(t);
        }
        logGroup(t) {
          window.console && window.console.group && window.console.group(t);
        }
        logGroupEnd() {
          window.console && window.console.groupEnd && window.console.groupEnd();
        }
        get attrToPropMap() {
          return a;
        }
        contains(t, e) {
          return l.call(t, e);
        }
        querySelector(t, e) {
          return t.querySelector(e);
        }
        querySelectorAll(t, e) {
          return t.querySelectorAll(e);
        }
        on(t, e, n) {
          t.addEventListener(e, n, !1);
        }
        onAndCancel(t, e, n) {
          return (
            t.addEventListener(e, n, !1),
            () => {
              t.removeEventListener(e, n, !1);
            }
          );
        }
        dispatchEvent(t, e) {
          t.dispatchEvent(e);
        }
        createMouseEvent(t) {
          const e = this.getDefaultDocument().createEvent('MouseEvent');
          return e.initEvent(t, !0, !0), e;
        }
        createEvent(t) {
          const e = this.getDefaultDocument().createEvent('Event');
          return e.initEvent(t, !0, !0), e;
        }
        preventDefault(t) {
          t.preventDefault(), (t.returnValue = !1);
        }
        isPrevented(t) {
          return t.defaultPrevented || (null != t.returnValue && !t.returnValue);
        }
        getInnerHTML(t) {
          return t.innerHTML;
        }
        getTemplateContent(t) {
          return 'content' in t && this.isTemplateElement(t) ? t.content : null;
        }
        getOuterHTML(t) {
          return t.outerHTML;
        }
        nodeName(t) {
          return t.nodeName;
        }
        nodeValue(t) {
          return t.nodeValue;
        }
        type(t) {
          return t.type;
        }
        content(t) {
          return this.hasProperty(t, 'content') ? t.content : t;
        }
        firstChild(t) {
          return t.firstChild;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        parentElement(t) {
          return t.parentNode;
        }
        childNodes(t) {
          return t.childNodes;
        }
        childNodesAsList(t) {
          const e = t.childNodes,
            n = new Array(e.length);
          for (let r = 0; r < e.length; r++) n[r] = e[r];
          return n;
        }
        clearNodes(t) {
          for (; t.firstChild; ) t.removeChild(t.firstChild);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        removeChild(t, e) {
          t.removeChild(e);
        }
        replaceChild(t, e, n) {
          t.replaceChild(e, n);
        }
        remove(t) {
          return t.parentNode && t.parentNode.removeChild(t), t;
        }
        insertBefore(t, e, n) {
          t.insertBefore(n, e);
        }
        insertAllBefore(t, e, n) {
          n.forEach((n) => t.insertBefore(n, e));
        }
        insertAfter(t, e, n) {
          t.insertBefore(n, e.nextSibling);
        }
        setInnerHTML(t, e) {
          t.innerHTML = e;
        }
        getText(t) {
          return t.textContent;
        }
        setText(t, e) {
          t.textContent = e;
        }
        getValue(t) {
          return t.value;
        }
        setValue(t, e) {
          t.value = e;
        }
        getChecked(t) {
          return t.checked;
        }
        setChecked(t, e) {
          t.checked = e;
        }
        createComment(t) {
          return this.getDefaultDocument().createComment(t);
        }
        createTemplate(t) {
          const e = this.getDefaultDocument().createElement('template');
          return (e.innerHTML = t), e;
        }
        createElement(t, e) {
          return (e = e || this.getDefaultDocument()).createElement(t);
        }
        createElementNS(t, e, n) {
          return (n = n || this.getDefaultDocument()).createElementNS(t, e);
        }
        createTextNode(t, e) {
          return (e = e || this.getDefaultDocument()).createTextNode(t);
        }
        createScriptTag(t, e, n) {
          const r = (n = n || this.getDefaultDocument()).createElement('SCRIPT');
          return r.setAttribute(t, e), r;
        }
        createStyleElement(t, e) {
          const n = (e = e || this.getDefaultDocument()).createElement('style');
          return this.appendChild(n, this.createTextNode(t, e)), n;
        }
        createShadowRoot(t) {
          return t.createShadowRoot();
        }
        getShadowRoot(t) {
          return t.shadowRoot;
        }
        getHost(t) {
          return t.host;
        }
        clone(t) {
          return t.cloneNode(!0);
        }
        getElementsByClassName(t, e) {
          return t.getElementsByClassName(e);
        }
        getElementsByTagName(t, e) {
          return t.getElementsByTagName(e);
        }
        classList(t) {
          return Array.prototype.slice.call(t.classList, 0);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        hasClass(t, e) {
          return t.classList.contains(e);
        }
        setStyle(t, e, n) {
          t.style[e] = n;
        }
        removeStyle(t, e) {
          t.style[e] = '';
        }
        getStyle(t, e) {
          return t.style[e];
        }
        hasStyle(t, e, n) {
          const r = this.getStyle(t, e) || '';
          return n ? r == n : r.length > 0;
        }
        tagName(t) {
          return t.tagName;
        }
        attributeMap(t) {
          const e = new Map(),
            n = t.attributes;
          for (let r = 0; r < n.length; r++) {
            const t = n.item(r);
            e.set(t.name, t.value);
          }
          return e;
        }
        hasAttribute(t, e) {
          return t.hasAttribute(e);
        }
        hasAttributeNS(t, e, n) {
          return t.hasAttributeNS(e, n);
        }
        getAttribute(t, e) {
          return t.getAttribute(e);
        }
        getAttributeNS(t, e, n) {
          return t.getAttributeNS(e, n);
        }
        setAttribute(t, e, n) {
          t.setAttribute(e, n);
        }
        setAttributeNS(t, e, n, r) {
          t.setAttributeNS(e, n, r);
        }
        removeAttribute(t, e) {
          t.removeAttribute(e);
        }
        removeAttributeNS(t, e, n) {
          t.removeAttributeNS(e, n);
        }
        templateAwareRoot(t) {
          return this.isTemplateElement(t) ? this.content(t) : t;
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument('fakeTitle');
        }
        getDefaultDocument() {
          return document;
        }
        getBoundingClientRect(t) {
          try {
            return t.getBoundingClientRect();
          } catch (e) {
            return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
          }
        }
        getTitle(t) {
          return t.title;
        }
        setTitle(t, e) {
          t.title = e || '';
        }
        elementMatches(t, e) {
          return (
            !!this.isElementNode(t) &&
            ((t.matches && t.matches(e)) ||
              (t.msMatchesSelector && t.msMatchesSelector(e)) ||
              (t.webkitMatchesSelector && t.webkitMatchesSelector(e)))
          );
        }
        isTemplateElement(t) {
          return this.isElementNode(t) && 'TEMPLATE' === t.nodeName;
        }
        isTextNode(t) {
          return t.nodeType === Node.TEXT_NODE;
        }
        isCommentNode(t) {
          return t.nodeType === Node.COMMENT_NODE;
        }
        isElementNode(t) {
          return t.nodeType === Node.ELEMENT_NODE;
        }
        hasShadowRoot(t) {
          return null != t.shadowRoot && t instanceof HTMLElement;
        }
        isShadowRoot(t) {
          return t instanceof DocumentFragment;
        }
        importIntoDoc(t) {
          return document.importNode(this.templateAwareRoot(t), !0);
        }
        adoptNode(t) {
          return document.adoptNode(t);
        }
        getHref(t) {
          return t.getAttribute('href');
        }
        getEventKey(t) {
          let e = t.key;
          if (null == e) {
            if (((e = t.keyIdentifier), null == e)) return 'Unidentified';
            e.startsWith('U+') &&
              ((e = String.fromCharCode(parseInt(e.substring(2), 16))),
              3 === t.location && c.hasOwnProperty(e) && (e = c[e]));
          }
          return u[e] || e;
        }
        getGlobalEventTarget(t, e) {
          return 'window' === e ? window : 'document' === e ? t : 'body' === e ? t.body : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(t) {
          const e = f || ((f = document.querySelector('base')), f) ? f.getAttribute('href') : null;
          return null == e
            ? null
            : ((n = e),
              d || (d = document.createElement('a')),
              d.setAttribute('href', n),
              '/' === d.pathname.charAt(0) ? d.pathname : '/' + d.pathname);
          var n;
        }
        resetBaseElement() {
          f = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        setData(t, e, n) {
          this.setAttribute(t, 'data-' + e, n);
        }
        getData(t, e) {
          return this.getAttribute(t, 'data-' + e);
        }
        getComputedStyle(t) {
          return getComputedStyle(t);
        }
        supportsWebAnimation() {
          return 'function' == typeof Element.prototype.animate;
        }
        performanceNow() {
          return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(t) {
          return Object(r.u)(document.cookie, t);
        }
        setCookie(t, e) {
          document.cookie = encodeURIComponent(t) + '=' + encodeURIComponent(e);
        }
      }
      let d,
        f = null;
      function p() {
        return !!window.history.pushState;
      }
      const g = new i.o('TRANSITION_ID'),
        m = [
          {
            provide: i.d,
            useFactory: function (t, e, n) {
              return () => {
                n.get(i.e).donePromise.then(() => {
                  const n = s();
                  Array.prototype.slice
                    .apply(n.querySelectorAll(e, 'style[ng-transition]'))
                    .filter((e) => n.getAttribute(e, 'ng-transition') === t)
                    .forEach((t) => n.remove(t));
                });
              };
            },
            deps: [g, r.c, i.p],
            multi: !0
          }
        ];
      class v {
        static init() {
          Object(i.V)(new v());
        }
        addToWindow(t) {
          (i.sb.getAngularTestability = (e, n = !0) => {
            const r = t.findTestabilityInTree(e, n);
            if (null == r) throw new Error('Could not find testability for element.');
            return r;
          }),
            (i.sb.getAllAngularTestabilities = () => t.getAllTestabilities()),
            (i.sb.getAllAngularRootElements = () => t.getAllRootElements()),
            i.sb.frameworkStabilizers || (i.sb.frameworkStabilizers = []),
            i.sb.frameworkStabilizers.push((t) => {
              const e = i.sb.getAllAngularTestabilities();
              let n = e.length,
                r = !1;
              const o = function (e) {
                (r = r || e), n--, 0 == n && t(r);
              };
              e.forEach(function (t) {
                t.whenStable(o);
              });
            });
        }
        findTestabilityInTree(t, e, n) {
          if (null == e) return null;
          const r = t.getTestability(e);
          return null != r
            ? r
            : n
            ? s().isShadowRoot(e)
              ? this.findTestabilityInTree(t, s().getHost(e), !0)
              : this.findTestabilityInTree(t, s().parentElement(e), !0)
            : null;
        }
      }
      function b(t, e) {
        ('undefined' != typeof COMPILED && COMPILED) || ((i.sb.ng = i.sb.ng || {})[t] = e);
      }
      const y = (() => ({ ApplicationRef: i.g, NgZone: i.x }))();
      function w(t) {
        return Object(i.S)(t);
      }
      function _(t) {
        return (
          b('probe', w),
          b(
            'coreTokens',
            Object.assign(
              {},
              y,
              (t || []).reduce((t, e) => ((t[e.name] = e.token), t), {})
            )
          ),
          () => w
        );
      }
      const S = new i.o('EventManagerPlugins');
      class E {
        constructor(t, e) {
          (this._zone = e),
            (this._eventNameToPlugin = new Map()),
            t.forEach((t) => (t.manager = this)),
            (this._plugins = t.slice().reverse());
        }
        addEventListener(t, e, n) {
          return this._findPluginFor(e).addEventListener(t, e, n);
        }
        addGlobalEventListener(t, e, n) {
          return this._findPluginFor(e).addGlobalEventListener(t, e, n);
        }
        getZone() {
          return this._zone;
        }
        _findPluginFor(t) {
          const e = this._eventNameToPlugin.get(t);
          if (e) return e;
          const n = this._plugins;
          for (let r = 0; r < n.length; r++) {
            const e = n[r];
            if (e.supports(t)) return this._eventNameToPlugin.set(t, e), e;
          }
          throw new Error(`No event manager plugin found for event ${t}`);
        }
      }
      class C {
        constructor(t) {
          this._doc = t;
        }
        addGlobalEventListener(t, e, n) {
          const r = s().getGlobalEventTarget(this._doc, t);
          if (!r) throw new Error(`Unsupported event target ${r} for event ${e}`);
          return this.addEventListener(r, e, n);
        }
      }
      class I {
        constructor() {
          this._stylesSet = new Set();
        }
        addStyles(t) {
          const e = new Set();
          t.forEach((t) => {
            this._stylesSet.has(t) || (this._stylesSet.add(t), e.add(t));
          }),
            this.onStylesAdded(e);
        }
        onStylesAdded(t) {}
        getAllStyles() {
          return Array.from(this._stylesSet);
        }
      }
      class T extends I {
        constructor(t) {
          super(),
            (this._doc = t),
            (this._hostNodes = new Set()),
            (this._styleNodes = new Set()),
            this._hostNodes.add(t.head);
        }
        _addStylesToHost(t, e) {
          t.forEach((t) => {
            const n = this._doc.createElement('style');
            (n.textContent = t), this._styleNodes.add(e.appendChild(n));
          });
        }
        addHost(t) {
          this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t);
        }
        removeHost(t) {
          this._hostNodes.delete(t);
        }
        onStylesAdded(t) {
          this._hostNodes.forEach((e) => this._addStylesToHost(t, e));
        }
        ngOnDestroy() {
          this._styleNodes.forEach((t) => s().remove(t));
        }
      }
      const x = {
          svg: 'http://www.w3.org/2000/svg',
          xhtml: 'http://www.w3.org/1999/xhtml',
          xlink: 'http://www.w3.org/1999/xlink',
          xml: 'http://www.w3.org/XML/1998/namespace',
          xmlns: 'http://www.w3.org/2000/xmlns/'
        },
        k = /%COMP%/g;
      function O(t, e, n) {
        for (let r = 0; r < e.length; r++) {
          let i = e[r];
          Array.isArray(i) ? O(t, i, n) : ((i = i.replace(k, t)), n.push(i));
        }
        return n;
      }
      function A(t) {
        return (e) => {
          !1 === t(e) && (e.preventDefault(), (e.returnValue = !1));
        };
      }
      class N {
        constructor(t, e, n) {
          (this.eventManager = t),
            (this.sharedStylesHost = e),
            (this.appId = n),
            (this.rendererByCompId = new Map()),
            (this.defaultRenderer = new R(t));
        }
        createRenderer(t, e) {
          if (!t || !e) return this.defaultRenderer;
          switch (e.encapsulation) {
            case i.N.Emulated: {
              let n = this.rendererByCompId.get(e.id);
              return (
                n ||
                  ((n = new j(this.eventManager, this.sharedStylesHost, e, this.appId)),
                  this.rendererByCompId.set(e.id, n)),
                n.applyToHost(t),
                n
              );
            }
            case i.N.Native:
            case i.N.ShadowDom:
              return new M(this.eventManager, this.sharedStylesHost, t, e);
            default:
              if (!this.rendererByCompId.has(e.id)) {
                const t = O(e.id, e.styles, []);
                this.sharedStylesHost.addStyles(t), this.rendererByCompId.set(e.id, this.defaultRenderer);
              }
              return this.defaultRenderer;
          }
        }
        begin() {}
        end() {}
      }
      class R {
        constructor(t) {
          (this.eventManager = t), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(t, e) {
          return e ? document.createElementNS(x[e] || e, t) : document.createElement(t);
        }
        createComment(t) {
          return document.createComment(t);
        }
        createText(t) {
          return document.createTextNode(t);
        }
        appendChild(t, e) {
          t.appendChild(e);
        }
        insertBefore(t, e, n) {
          t && t.insertBefore(e, n);
        }
        removeChild(t, e) {
          t && t.removeChild(e);
        }
        selectRootElement(t, e) {
          let n = 'string' == typeof t ? document.querySelector(t) : t;
          if (!n) throw new Error(`The selector "${t}" did not match any elements`);
          return e || (n.textContent = ''), n;
        }
        parentNode(t) {
          return t.parentNode;
        }
        nextSibling(t) {
          return t.nextSibling;
        }
        setAttribute(t, e, n, r) {
          if (r) {
            e = r + ':' + e;
            const i = x[r];
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n);
          } else t.setAttribute(e, n);
        }
        removeAttribute(t, e, n) {
          if (n) {
            const r = x[n];
            r ? t.removeAttributeNS(r, e) : t.removeAttribute(`${n}:${e}`);
          } else t.removeAttribute(e);
        }
        addClass(t, e) {
          t.classList.add(e);
        }
        removeClass(t, e) {
          t.classList.remove(e);
        }
        setStyle(t, e, n, r) {
          r & i.D.DashCase ? t.style.setProperty(e, n, r & i.D.Important ? 'important' : '') : (t.style[e] = n);
        }
        removeStyle(t, e, n) {
          n & i.D.DashCase ? t.style.removeProperty(e) : (t.style[e] = '');
        }
        setProperty(t, e, n) {
          D(e, 'property'), (t[e] = n);
        }
        setValue(t, e) {
          t.nodeValue = e;
        }
        listen(t, e, n) {
          return (
            D(e, 'listener'),
            'string' == typeof t
              ? this.eventManager.addGlobalEventListener(t, e, A(n))
              : this.eventManager.addEventListener(t, e, A(n))
          );
        }
      }
      const P = (() => '@'.charCodeAt(0))();
      function D(t, e) {
        if (t.charCodeAt(0) === P)
          throw new Error(
            `Found the synthetic ${e} ${t}. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.`
          );
      }
      class j extends R {
        constructor(t, e, n, r) {
          super(t), (this.component = n);
          const i = O(r + '-' + n.id, n.styles, []);
          e.addStyles(i),
            (this.contentAttr = '_ngcontent-%COMP%'.replace(k, r + '-' + n.id)),
            (this.hostAttr = (function (t) {
              return '_nghost-%COMP%'.replace(k, t);
            })(r + '-' + n.id));
        }
        applyToHost(t) {
          super.setAttribute(t, this.hostAttr, '');
        }
        createElement(t, e) {
          const n = super.createElement(t, e);
          return super.setAttribute(n, this.contentAttr, ''), n;
        }
      }
      class M extends R {
        constructor(t, e, n, r) {
          super(t),
            (this.sharedStylesHost = e),
            (this.hostEl = n),
            (this.component = r),
            (this.shadowRoot =
              r.encapsulation === i.N.ShadowDom ? n.attachShadow({ mode: 'open' }) : n.createShadowRoot()),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const o = O(r.id, r.styles, []);
          for (let i = 0; i < o.length; i++) {
            const t = document.createElement('style');
            (t.textContent = o[i]), this.shadowRoot.appendChild(t);
          }
        }
        nodeOrShadowRoot(t) {
          return t === this.hostEl ? this.shadowRoot : t;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(t, e) {
          return super.appendChild(this.nodeOrShadowRoot(t), e);
        }
        insertBefore(t, e, n) {
          return super.insertBefore(this.nodeOrShadowRoot(t), e, n);
        }
        removeChild(t, e) {
          return super.removeChild(this.nodeOrShadowRoot(t), e);
        }
        parentNode(t) {
          return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)));
        }
      }
      const L = (() =>
          ('undefined' != typeof Zone && Zone.__symbol__) ||
          function (t) {
            return '__zone_symbol__' + t;
          })(),
        U = L('addEventListener'),
        V = L('removeEventListener'),
        F = {},
        z = '__zone_symbol__propagationStopped',
        H = (() => {
          const t = 'undefined' != typeof Zone && Zone[L('BLACK_LISTED_EVENTS')];
          if (t) {
            const e = {};
            return (
              t.forEach((t) => {
                e[t] = t;
              }),
              e
            );
          }
        })(),
        B = function (t) {
          return !!H && H.hasOwnProperty(t);
        },
        $ = function (t) {
          const e = F[t.type];
          if (!e) return;
          const n = this[e];
          if (!n) return;
          const r = [t];
          if (1 === n.length) {
            const t = n[0];
            return t.zone !== Zone.current ? t.zone.run(t.handler, this, r) : t.handler.apply(this, r);
          }
          {
            const e = n.slice();
            for (let n = 0; n < e.length && !0 !== t[z]; n++) {
              const t = e[n];
              t.zone !== Zone.current ? t.zone.run(t.handler, this, r) : t.handler.apply(this, r);
            }
          }
        };
      class q extends C {
        constructor(t, e, n) {
          super(t), (this.ngZone = e), (n && Object(r.p)(n)) || this.patchEvent();
        }
        patchEvent() {
          if ('undefined' == typeof Event || !Event || !Event.prototype) return;
          if (Event.prototype.__zone_symbol__stopImmediatePropagation) return;
          const t = (Event.prototype.__zone_symbol__stopImmediatePropagation =
            Event.prototype.stopImmediatePropagation);
          Event.prototype.stopImmediatePropagation = function () {
            this && (this[z] = !0), t && t.apply(this, arguments);
          };
        }
        supports(t) {
          return !0;
        }
        addEventListener(t, e, n) {
          let r = n;
          if (!t[U] || (i.x.isInAngularZone() && !B(e))) t.addEventListener(e, r, !1);
          else {
            let n = F[e];
            n || (n = F[e] = L('ANGULAR' + e + 'FALSE'));
            let i = t[n];
            const o = i && i.length > 0;
            i || (i = t[n] = []);
            const s = B(e) ? Zone.root : Zone.current;
            if (0 === i.length) i.push({ zone: s, handler: r });
            else {
              let t = !1;
              for (let e = 0; e < i.length; e++)
                if (i[e].handler === r) {
                  t = !0;
                  break;
                }
              t || i.push({ zone: s, handler: r });
            }
            o || t[U](e, $, !1);
          }
          return () => this.removeEventListener(t, e, r);
        }
        removeEventListener(t, e, n) {
          let r = t[V];
          if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
          let i = F[e],
            o = i && t[i];
          if (!o) return t.removeEventListener.apply(t, [e, n, !1]);
          let s = !1;
          for (let a = 0; a < o.length; a++)
            if (o[a].handler === n) {
              (s = !0), o.splice(a, 1);
              break;
            }
          s ? 0 === o.length && r.apply(t, [e, $, !1]) : t.removeEventListener.apply(t, [e, n, !1]);
        }
      }
      const W = {
          pan: !0,
          panstart: !0,
          panmove: !0,
          panend: !0,
          pancancel: !0,
          panleft: !0,
          panright: !0,
          panup: !0,
          pandown: !0,
          pinch: !0,
          pinchstart: !0,
          pinchmove: !0,
          pinchend: !0,
          pinchcancel: !0,
          pinchin: !0,
          pinchout: !0,
          press: !0,
          pressup: !0,
          rotate: !0,
          rotatestart: !0,
          rotatemove: !0,
          rotateend: !0,
          rotatecancel: !0,
          swipe: !0,
          swipeleft: !0,
          swiperight: !0,
          swipeup: !0,
          swipedown: !0,
          tap: !0
        },
        G = new i.o('HammerGestureConfig'),
        K = new i.o('HammerLoader');
      class Y {
        constructor() {
          (this.events = []), (this.overrides = {});
        }
        buildHammer(t) {
          const e = new Hammer(t, this.options);
          e.get('pinch').set({ enable: !0 }), e.get('rotate').set({ enable: !0 });
          for (const n in this.overrides) e.get(n).set(this.overrides[n]);
          return e;
        }
      }
      class J extends C {
        constructor(t, e, n, r) {
          super(t), (this._config = e), (this.console = n), (this.loader = r);
        }
        supports(t) {
          return !(
            (!W.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t)) ||
            (!window.Hammer &&
              !this.loader &&
              (this.console.warn(
                `The "${t}" event cannot be bound because Hammer.JS is not ` +
                  'loaded and no custom loader has been specified.'
              ),
              1))
          );
        }
        addEventListener(t, e, n) {
          const r = this.manager.getZone();
          if (((e = e.toLowerCase()), !window.Hammer && this.loader)) {
            let r = !1,
              i = () => {
                r = !0;
              };
            return (
              this.loader()
                .then(() => {
                  if (!window.Hammer)
                    return (
                      this.console.warn('The custom HAMMER_LOADER completed, but Hammer.JS is not present.'),
                      void (i = () => {})
                    );
                  r || (i = this.addEventListener(t, e, n));
                })
                .catch(() => {
                  this.console.warn(
                    `The "${e}" event cannot be bound because the custom ` + 'Hammer.JS loader failed.'
                  ),
                    (i = () => {});
                }),
              () => {
                i();
              }
            );
          }
          return r.runOutsideAngular(() => {
            const i = this._config.buildHammer(t),
              o = function (t) {
                r.runGuarded(function () {
                  n(t);
                });
              };
            return (
              i.on(e, o),
              () => {
                i.off(e, o), 'function' == typeof i.destroy && i.destroy();
              }
            );
          });
        }
        isCustomEvent(t) {
          return this._config.events.indexOf(t) > -1;
        }
      }
      const Z = ['alt', 'control', 'meta', 'shift'],
        X = { alt: (t) => t.altKey, control: (t) => t.ctrlKey, meta: (t) => t.metaKey, shift: (t) => t.shiftKey };
      class Q extends C {
        constructor(t) {
          super(t);
        }
        supports(t) {
          return null != Q.parseEventName(t);
        }
        addEventListener(t, e, n) {
          const r = Q.parseEventName(e),
            i = Q.eventCallback(r.fullKey, n, this.manager.getZone());
          return this.manager.getZone().runOutsideAngular(() => s().onAndCancel(t, r.domEventName, i));
        }
        static parseEventName(t) {
          const e = t.toLowerCase().split('.'),
            n = e.shift();
          if (0 === e.length || ('keydown' !== n && 'keyup' !== n)) return null;
          const r = Q._normalizeKey(e.pop());
          let i = '';
          if (
            (Z.forEach((t) => {
              const n = e.indexOf(t);
              n > -1 && (e.splice(n, 1), (i += t + '.'));
            }),
            (i += r),
            0 != e.length || 0 === r.length)
          )
            return null;
          const o = {};
          return (o.domEventName = n), (o.fullKey = i), o;
        }
        static getEventFullKey(t) {
          let e = '',
            n = s().getEventKey(t);
          return (
            (n = n.toLowerCase()),
            ' ' === n ? (n = 'space') : '.' === n && (n = 'dot'),
            Z.forEach((r) => {
              r != n && (0, X[r])(t) && (e += r + '.');
            }),
            (e += n),
            e
          );
        }
        static eventCallback(t, e, n) {
          return (r) => {
            Q.getEventFullKey(r) === t && n.runGuarded(() => e(r));
          };
        }
        static _normalizeKey(t) {
          switch (t) {
            case 'esc':
              return 'escape';
            default:
              return t;
          }
        }
      }
      class tt {}
      class et extends tt {
        constructor(t) {
          super(), (this._doc = t);
        }
        sanitize(t, e) {
          if (null == e) return null;
          switch (t) {
            case i.F.NONE:
              return e;
            case i.F.HTML:
              return e instanceof rt
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'HTML'), Object(i.bb)(this._doc, String(e)));
            case i.F.STYLE:
              return e instanceof it
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'Style'), Object(i.cb)(e));
            case i.F.SCRIPT:
              if (e instanceof ot) return e.changingThisBreaksApplicationSecurity;
              throw (this.checkNotSafeValue(e, 'Script'), new Error('unsafe value used in a script context'));
            case i.F.URL:
              return e instanceof at || e instanceof st
                ? e.changingThisBreaksApplicationSecurity
                : (this.checkNotSafeValue(e, 'URL'), Object(i.db)(String(e)));
            case i.F.RESOURCE_URL:
              if (e instanceof at) return e.changingThisBreaksApplicationSecurity;
              throw (
                (this.checkNotSafeValue(e, 'ResourceURL'),
                new Error('unsafe value used in a resource URL context (see http://g.co/ng/security#xss)'))
              );
            default:
              throw new Error(`Unexpected SecurityContext ${t} (see http://g.co/ng/security#xss)`);
          }
        }
        checkNotSafeValue(t, e) {
          if (t instanceof nt)
            throw new Error(`Required a safe ${e}, got a ${t.getTypeName()} ` + '(see http://g.co/ng/security#xss)');
        }
        bypassSecurityTrustHtml(t) {
          return new rt(t);
        }
        bypassSecurityTrustStyle(t) {
          return new it(t);
        }
        bypassSecurityTrustScript(t) {
          return new ot(t);
        }
        bypassSecurityTrustUrl(t) {
          return new st(t);
        }
        bypassSecurityTrustResourceUrl(t) {
          return new at(t);
        }
      }
      class nt {
        constructor(t) {
          this.changingThisBreaksApplicationSecurity = t;
        }
        toString() {
          return (
            `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity}` +
            ' (see http://g.co/ng/security#xss)'
          );
        }
      }
      class rt extends nt {
        getTypeName() {
          return 'HTML';
        }
      }
      class it extends nt {
        getTypeName() {
          return 'Style';
        }
      }
      class ot extends nt {
        getTypeName() {
          return 'Script';
        }
      }
      class st extends nt {
        getTypeName() {
          return 'URL';
        }
      }
      class at extends nt {
        getTypeName() {
          return 'ResourceURL';
        }
      }
      const ut = [
          { provide: i.z, useValue: r.s },
          {
            provide: i.A,
            useValue: function () {
              h.makeCurrent(), v.init();
            },
            multi: !0
          },
          {
            provide: r.n,
            useClass: class extends r.n {
              constructor(t) {
                super(), (this._doc = t), this._init();
              }
              _init() {
                (this.location = s().getLocation()), (this._history = s().getHistory());
              }
              getBaseHrefFromDOM() {
                return s().getBaseHref(this._doc);
              }
              onPopState(t) {
                s().getGlobalEventTarget(this._doc, 'window').addEventListener('popstate', t, !1);
              }
              onHashChange(t) {
                s().getGlobalEventTarget(this._doc, 'window').addEventListener('hashchange', t, !1);
              }
              get href() {
                return this.location.href;
              }
              get protocol() {
                return this.location.protocol;
              }
              get hostname() {
                return this.location.hostname;
              }
              get port() {
                return this.location.port;
              }
              get pathname() {
                return this.location.pathname;
              }
              get search() {
                return this.location.search;
              }
              get hash() {
                return this.location.hash;
              }
              set pathname(t) {
                this.location.pathname = t;
              }
              pushState(t, e, n) {
                p() ? this._history.pushState(t, e, n) : (this.location.hash = n);
              }
              replaceState(t, e, n) {
                p() ? this._history.replaceState(t, e, n) : (this.location.hash = n);
              }
              forward() {
                this._history.forward();
              }
              back() {
                this._history.back();
              }
              getState() {
                return this._history.state;
              }
            },
            deps: [r.c]
          },
          {
            provide: r.c,
            useFactory: function () {
              return document;
            },
            deps: []
          }
        ],
        ct = Object(i.P)(i.U, 'browser', ut);
      function lt() {
        return new i.l();
      }
      class ht {
        constructor(t) {
          if (t)
            throw new Error(
              'BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.'
            );
        }
        static withServerTransition(t) {
          return {
            ngModule: ht,
            providers: [{ provide: i.c, useValue: t.appId }, { provide: g, useExisting: i.c }, m]
          };
        }
      }
      'undefined' != typeof window && window;
    },
    eIep: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('l7GE'),
        i = n('51Dv'),
        o = n('ZUHj'),
        s = n('lJxs'),
        a = n('Cfvw');
      function u(t, e) {
        return 'function' == typeof e
          ? (n) => n.pipe(u((n, r) => Object(a.a)(t(n, r)).pipe(Object(s.a)((t, i) => e(n, t, r, i)))))
          : (e) => e.lift(new c(t));
      }
      class c {
        constructor(t) {
          this.project = t;
        }
        call(t, e) {
          return e.subscribe(new l(t, this.project));
        }
      }
      class l extends r.a {
        constructor(t, e) {
          super(t), (this.project = e), (this.index = 0);
        }
        _next(t) {
          let e;
          const n = this.index++;
          try {
            e = this.project(t, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(e, t, n);
        }
        _innerSub(t, e, n) {
          const r = this.innerSubscription;
          r && r.unsubscribe();
          const s = new i.a(this, void 0, void 0);
          this.destination.add(s), (this.innerSubscription = Object(o.a)(this, t, e, n, s));
        }
        _complete() {
          const { innerSubscription: t } = this;
          (t && !t.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = null;
        }
        notifyComplete(t) {
          this.destination.remove(t), (this.innerSubscription = null), this.isStopped && super._complete();
        }
        notifyNext(t, e, n, r, i) {
          this.destination.next(e);
        }
      }
    },
    fNgX: function (t, e, n) {
      'use strict';
      n.d(e, 'c', function () {
        return s;
      }),
        n.d(e, 'd', function () {
          return a;
        }),
        n.d(e, 'b', function () {
          return c;
        }),
        n.d(e, 'a', function () {
          return f;
        });
      var r = n('8Y7J'),
        i = n('Nv++'),
        o = n('cUpR'),
        s = r.nb({ encapsulation: 2, styles: [], data: {} });
      function a(t) {
        return r.Gb(0, [], null, null);
      }
      function u(t) {
        return r.Gb(
          0,
          [
            (t()(),
            r.pb(
              0,
              0,
              null,
              null,
              1,
              'fa-icon',
              [['class', 'ng-fa-icon']],
              [
                [1, 'title', 0],
                [8, 'innerHTML', 1]
              ],
              null,
              null,
              a,
              s
            )),
            r.ob(1, 573440, null, 0, i.c, [o.b, i.a, i.d, [2, i.i]], null, null)
          ],
          null,
          function (t, e) {
            t(e, 0, 0, r.Bb(e, 1).title, r.Bb(e, 1).renderedIconHTML);
          }
        );
      }
      var c = r.lb(
          'fa-icon',
          i.c,
          u,
          {
            icon: 'icon',
            title: 'title',
            spin: 'spin',
            pulse: 'pulse',
            mask: 'mask',
            styles: 'styles',
            flip: 'flip',
            size: 'size',
            pull: 'pull',
            border: 'border',
            inverse: 'inverse',
            symbol: 'symbol',
            listItem: 'listItem',
            rotate: 'rotate',
            fixedWidth: 'fixedWidth',
            classes: 'classes',
            transform: 'transform',
            a11yRole: 'a11yRole'
          },
          {},
          []
        ),
        l = r.nb({ encapsulation: 2, styles: [], data: {} });
      function h(t) {
        return r.Gb(0, [], null, null);
      }
      function d(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 1, 'fa-duotone-icon', [], [[8, 'innerHTML', 1]], null, null, h, l)),
            r.ob(1, 573440, null, 0, i.b, [o.b, i.a, i.d, [2, i.i]], null, null)
          ],
          null,
          function (t, e) {
            t(e, 0, 0, r.Bb(e, 1).renderedIconHTML);
          }
        );
      }
      var f = r.lb(
        'fa-duotone-icon',
        i.b,
        d,
        {
          icon: 'icon',
          title: 'title',
          spin: 'spin',
          pulse: 'pulse',
          mask: 'mask',
          styles: 'styles',
          flip: 'flip',
          size: 'size',
          pull: 'pull',
          border: 'border',
          inverse: 'inverse',
          symbol: 'symbol',
          listItem: 'listItem',
          rotate: 'rotate',
          fixedWidth: 'fixedWidth',
          classes: 'classes',
          transform: 'transform',
          a11yRole: 'a11yRole',
          swapOpacity: 'swapOpacity',
          primaryOpacity: 'primaryOpacity',
          secondaryOpacity: 'secondaryOpacity',
          primaryColor: 'primaryColor',
          secondaryColor: 'secondaryColor'
        },
        {},
        []
      );
    },
    gRHU: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return o;
      });
      var r = n('2fFW'),
        i = n('NJ4a');
      const o = {
        closed: !0,
        next(t) {},
        error(t) {
          if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
          Object(i.a)(t);
        },
        complete() {}
      };
    },
    iInd: function (t, e, n) {
      'use strict';
      var r = n('SVse'),
        i = n('8Y7J'),
        o = n('LRne'),
        s = n('Cfvw'),
        a = n('XNiG'),
        u = n('9ppp');
      class c extends a.a {
        constructor(t) {
          super(), (this._value = t);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(t) {
          const e = super._subscribe(t);
          return e && !e.closed && t.next(this._value), e;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new u.a();
          return this._value;
        }
        next(t) {
          super.next((this._value = t));
        }
      }
      var l = n('HDdC');
      function h() {
        return Error.call(this), (this.message = 'no elements in sequence'), (this.name = 'EmptyError'), this;
      }
      h.prototype = Object.create(Error.prototype);
      const d = h;
      var f = n('z+Ro'),
        p = n('DH7j'),
        g = n('l7GE'),
        m = n('ZUHj'),
        v = n('yCtX');
      const b = {};
      class y {
        constructor(t) {
          this.resultSelector = t;
        }
        call(t, e) {
          return e.subscribe(new w(t, this.resultSelector));
        }
      }
      class w extends g.a {
        constructor(t, e) {
          super(t), (this.resultSelector = e), (this.active = 0), (this.values = []), (this.observables = []);
        }
        _next(t) {
          this.values.push(b), this.observables.push(t);
        }
        _complete() {
          const t = this.observables,
            e = t.length;
          if (0 === e) this.destination.complete();
          else {
            (this.active = e), (this.toRespond = e);
            for (let n = 0; n < e; n++) {
              const e = t[n];
              this.add(Object(m.a)(this, e, e, n));
            }
          }
        }
        notifyComplete(t) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(t, e, n, r, i) {
          const o = this.values,
            s = this.toRespond ? (o[n] === b ? --this.toRespond : this.toRespond) : 0;
          (o[n] = e), 0 === s && (this.resultSelector ? this._tryResultSelector(o) : this.destination.next(o.slice()));
        }
        _tryResultSelector(t) {
          let e;
          try {
            e = this.resultSelector.apply(this, t);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      var _ = n('EY2u');
      function S(t) {
        return new l.a((e) => {
          let n;
          try {
            n = t();
          } catch (r) {
            return void e.error(r);
          }
          return (n ? Object(s.a)(n) : Object(_.b)()).subscribe(e);
        });
      }
      var E = n('lJxs'),
        C = n('bHdf');
      function I() {
        return Object(C.a)(1);
      }
      var T = n('7o/Q');
      function x(t, e) {
        return function (n) {
          return n.lift(new k(t, e));
        };
      }
      class k {
        constructor(t, e) {
          (this.predicate = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new O(t, this.predicate, this.thisArg));
        }
      }
      class O extends T.a {
        constructor(t, e, n) {
          super(t), (this.predicate = e), (this.thisArg = n), (this.count = 0);
        }
        _next(t) {
          let e;
          try {
            e = this.predicate.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          e && this.destination.next(t);
        }
      }
      function A() {
        return (
          Error.call(this), (this.message = 'argument out of range'), (this.name = 'ArgumentOutOfRangeError'), this
        );
      }
      A.prototype = Object.create(Error.prototype);
      const N = A;
      function R(t) {
        return function (e) {
          return 0 === t ? Object(_.b)() : e.lift(new P(t));
        };
      }
      class P {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new N();
        }
        call(t, e) {
          return e.subscribe(new D(t, this.total));
        }
      }
      class D extends T.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.ring = new Array()), (this.count = 0);
        }
        _next(t) {
          const e = this.ring,
            n = this.total,
            r = this.count++;
          e.length < n ? e.push(t) : (e[r % n] = t);
        }
        _complete() {
          const t = this.destination;
          let e = this.count;
          if (e > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let i = 0; i < n; i++) {
              const i = e++ % n;
              t.next(r[i]);
            }
          }
          t.complete();
        }
      }
      var j = n('KqfI'),
        M = n('n6bG');
      function L(t, e, n) {
        return function (r) {
          return r.lift(new U(t, e, n));
        };
      }
      class U {
        constructor(t, e, n) {
          (this.nextOrObserver = t), (this.error = e), (this.complete = n);
        }
        call(t, e) {
          return e.subscribe(new V(t, this.nextOrObserver, this.error, this.complete));
        }
      }
      class V extends T.a {
        constructor(t, e, n, r) {
          super(t),
            (this._tapNext = j.a),
            (this._tapError = j.a),
            (this._tapComplete = j.a),
            (this._tapError = n || j.a),
            (this._tapComplete = r || j.a),
            Object(M.a)(e)
              ? ((this._context = this), (this._tapNext = e))
              : e &&
                ((this._context = e),
                (this._tapNext = e.next || j.a),
                (this._tapError = e.error || j.a),
                (this._tapComplete = e.complete || j.a));
        }
        _next(t) {
          try {
            this._tapNext.call(this._context, t);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.next(t);
        }
        _error(t) {
          try {
            this._tapError.call(this._context, t);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.error(t);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (t) {
            return void this.destination.error(t);
          }
          return this.destination.complete();
        }
      }
      const F = (t = z) =>
        L({
          hasValue: !1,
          next() {
            this.hasValue = !0;
          },
          complete() {
            if (!this.hasValue) throw t();
          }
        });
      function z() {
        return new d();
      }
      function H(t = null) {
        return (e) => e.lift(new B(t));
      }
      class B {
        constructor(t) {
          this.defaultValue = t;
        }
        call(t, e) {
          return e.subscribe(new $(t, this.defaultValue));
        }
      }
      class $ extends T.a {
        constructor(t, e) {
          super(t), (this.defaultValue = e), (this.isEmpty = !0);
        }
        _next(t) {
          (this.isEmpty = !1), this.destination.next(t);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
        }
      }
      var q = n('SpAZ');
      function W(t, e) {
        const n = arguments.length >= 2;
        return (r) => r.pipe(t ? x((e, n) => t(e, n, r)) : q.a, R(1), n ? H(e) : F(() => new d()));
      }
      var G = n('51Dv');
      function K(t) {
        return function (e) {
          const n = new Y(t),
            r = e.lift(n);
          return (n.caught = r);
        };
      }
      class Y {
        constructor(t) {
          this.selector = t;
        }
        call(t, e) {
          return e.subscribe(new J(t, this.selector, this.caught));
        }
      }
      class J extends g.a {
        constructor(t, e, n) {
          super(t), (this.selector = e), (this.caught = n);
        }
        error(t) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(t, this.caught);
            } catch (e) {
              return void super.error(e);
            }
            this._unsubscribeAndRecycle();
            const r = new G.a(this, void 0, void 0);
            this.add(r), Object(m.a)(this, n, void 0, void 0, r);
          }
        }
      }
      function Z(t) {
        return (e) => (0 === t ? Object(_.b)() : e.lift(new X(t)));
      }
      class X {
        constructor(t) {
          if (((this.total = t), this.total < 0)) throw new N();
        }
        call(t, e) {
          return e.subscribe(new Q(t, this.total));
        }
      }
      class Q extends T.a {
        constructor(t, e) {
          super(t), (this.total = e), (this.count = 0);
        }
        _next(t) {
          const e = this.total,
            n = ++this.count;
          n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function tt(t, e) {
        const n = arguments.length >= 2;
        return (r) => r.pipe(t ? x((e, n) => t(e, n, r)) : q.a, Z(1), n ? H(e) : F(() => new d()));
      }
      var et = n('5+tZ');
      class nt {
        constructor(t, e, n) {
          (this.predicate = t), (this.thisArg = e), (this.source = n);
        }
        call(t, e) {
          return e.subscribe(new rt(t, this.predicate, this.thisArg, this.source));
        }
      }
      class rt extends T.a {
        constructor(t, e, n, r) {
          super(t),
            (this.predicate = e),
            (this.thisArg = n),
            (this.source = r),
            (this.index = 0),
            (this.thisArg = n || this);
        }
        notifyComplete(t) {
          this.destination.next(t), this.destination.complete();
        }
        _next(t) {
          let e = !1;
          try {
            e = this.predicate.call(this.thisArg, t, this.index++, this.source);
          } catch (n) {
            return void this.destination.error(n);
          }
          e || this.notifyComplete(!1);
        }
        _complete() {
          this.notifyComplete(!0);
        }
      }
      var it = n('eIep'),
        ot = n('XUOw');
      function st(t, e) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new at(t, e, n));
          }
        );
      }
      class at {
        constructor(t, e, n = !1) {
          (this.accumulator = t), (this.seed = e), (this.hasSeed = n);
        }
        call(t, e) {
          return e.subscribe(new ut(t, this.accumulator, this.seed, this.hasSeed));
        }
      }
      class ut extends T.a {
        constructor(t, e, n, r) {
          super(t), (this.accumulator = e), (this._seed = n), (this.hasSeed = r), (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(t) {
          (this.hasSeed = !0), (this._seed = t);
        }
        _next(t) {
          if (this.hasSeed) return this._tryNext(t);
          (this.seed = t), this.destination.next(t);
        }
        _tryNext(t) {
          const e = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, t, e);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function ct(t, e) {
        return Object(et.a)(t, e, 1);
      }
      var lt = n('mCNh'),
        ht = n('quSY');
      class dt {
        constructor(t) {
          this.callback = t;
        }
        call(t, e) {
          return e.subscribe(new ft(t, this.callback));
        }
      }
      class ft extends T.a {
        constructor(t, e) {
          super(t), this.add(new ht.a(e));
        }
      }
      var pt = n('cUpR');
      n.d(e, 'A', function () {
        return Rt;
      }),
        n.d(e, 'q', function () {
          return Bn;
        }),
        n.d(e, 'x', function () {
          return Qn;
        }),
        n.d(e, 's', function () {
          return Gn;
        }),
        n.d(e, 'y', function () {
          return tr;
        }),
        n.d(e, 'z', function () {
          return er;
        }),
        n.d(e, 'u', function () {
          return Yn;
        }),
        n.d(e, 't', function () {
          return Kn;
        }),
        n.d(e, 'w', function () {
          return Xn;
        }),
        n.d(e, 'r', function () {
          return qn;
        }),
        n.d(e, 'v', function () {
          return Zn;
        }),
        n.d(e, 'B', function () {
          return zn;
        }),
        n.d(e, 'm', function () {
          return jn;
        }),
        n.d(e, 'j', function () {
          return En;
        }),
        n.d(e, 'k', function () {
          return Rn;
        }),
        n.d(e, 'i', function () {
          return In;
        }),
        n.d(e, 'g', function () {
          return Hn;
        }),
        n.d(e, 'h', function () {
          return nr;
        }),
        n.d(e, 'l', function () {
          return Wn;
        }),
        n.d(e, 'b', function () {
          return Dn;
        }),
        n.d(e, 'd', function () {
          return Vn;
        }),
        n.d(e, 'e', function () {
          return Un;
        }),
        n.d(e, 'f', function () {
          return Ln;
        }),
        n.d(e, 'n', function () {
          return Fn;
        }),
        n.d(e, 'a', function () {
          return _e;
        }),
        n.d(e, 'o', function () {
          return xn;
        }),
        n.d(e, 'c', function () {
          return te;
        }),
        n.d(e, 'p', function () {
          return Qt;
        });
      class gt {
        constructor(t, e) {
          (this.id = t), (this.url = e);
        }
      }
      class mt extends gt {
        constructor(t, e, n = 'imperative', r = null) {
          super(t, e), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class vt extends gt {
        constructor(t, e, n) {
          super(t, e), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class bt extends gt {
        constructor(t, e, n) {
          super(t, e), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class yt extends gt {
        constructor(t, e, n) {
          super(t, e), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class wt extends gt {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class _t extends gt {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class St extends gt {
        constructor(t, e, n, r, i) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r), (this.shouldActivate = i);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class Et extends gt {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class Ct extends gt {
        constructor(t, e, n, r) {
          super(t, e), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class It {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class Tt {
        constructor(t) {
          this.route = t;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class xt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class kt {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ChildActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Ot {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationStart(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class At {
        constructor(t) {
          this.snapshot = t;
        }
        toString() {
          return `ActivationEnd(path: '${(this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ''}')`;
        }
      }
      class Nt {
        constructor(t, e, n) {
          (this.routerEvent = t), (this.position = e), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class Rt {}
      class Pt {
        constructor(t) {
          this.params = t || {};
        }
        has(t) {
          return this.params.hasOwnProperty(t);
        }
        get(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e[0] : e;
          }
          return null;
        }
        getAll(t) {
          if (this.has(t)) {
            const e = this.params[t];
            return Array.isArray(e) ? e : [e];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function Dt(t) {
        return new Pt(t);
      }
      function jt(t) {
        const e = Error('NavigationCancelingError: ' + t);
        return (e.ngNavigationCancelingError = !0), e;
      }
      function Mt(t, e, n) {
        const r = n.path.split('/');
        if (r.length > t.length) return null;
        if ('full' === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
        const i = {};
        for (let o = 0; o < r.length; o++) {
          const e = r[o],
            n = t[o];
          if (e.startsWith(':')) i[e.substring(1)] = n;
          else if (e !== n.path) return null;
        }
        return { consumed: t.slice(0, r.length), posParams: i };
      }
      class Lt {
        constructor(t, e) {
          (this.routes = t), (this.module = e);
        }
      }
      function Ut(t, e = '') {
        for (let n = 0; n < t.length; n++) {
          const r = t[n];
          Vt(r, Ft(e, r));
        }
      }
      function Vt(t, e) {
        if (!t)
          throw new Error(
            `\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `
          );
        if (Array.isArray(t)) throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);
        if (!t.component && !t.children && !t.loadChildren && t.outlet && 'primary' !== t.outlet)
          throw new Error(
            `Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`
          );
        if (t.redirectTo && t.children)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);
        if (t.redirectTo && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);
        if (t.children && t.loadChildren)
          throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);
        if (t.redirectTo && t.component)
          throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);
        if (t.path && t.matcher)
          throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);
        if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren)
          throw new Error(
            `Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`
          );
        if (void 0 === t.path && void 0 === t.matcher)
          throw new Error(
            `Invalid configuration of route '${e}': routes must have either a path or a matcher specified`
          );
        if ('string' == typeof t.path && '/' === t.path.charAt(0))
          throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);
        if ('' === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch)
          throw new Error(
            `Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`
          );
        if (void 0 !== t.pathMatch && 'full' !== t.pathMatch && 'prefix' !== t.pathMatch)
          throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);
        t.children && Ut(t.children, e);
      }
      function Ft(t, e) {
        return e ? (t || e.path ? (t && !e.path ? `${t}/` : !t && e.path ? e.path : `${t}/${e.path}`) : '') : t;
      }
      function zt(t) {
        const e = t.children && t.children.map(zt),
          n = e ? Object.assign({}, t, { children: e }) : Object.assign({}, t);
        return !n.component && (e || n.loadChildren) && n.outlet && 'primary' !== n.outlet && (n.component = Rt), n;
      }
      function Ht(t, e) {
        const n = Object.keys(t),
          r = Object.keys(e);
        if (!n || !r || n.length != r.length) return !1;
        let i;
        for (let o = 0; o < n.length; o++) if (((i = n[o]), t[i] !== e[i])) return !1;
        return !0;
      }
      function Bt(t) {
        return Array.prototype.concat.apply([], t);
      }
      function $t(t) {
        return t.length > 0 ? t[t.length - 1] : null;
      }
      function qt(t, e) {
        for (const n in t) t.hasOwnProperty(n) && e(t[n], n);
      }
      function Wt(t) {
        return Object(i.vb)(t) ? t : Object(i.wb)(t) ? Object(s.a)(Promise.resolve(t)) : Object(o.a)(t);
      }
      function Gt(t, e, n) {
        return n
          ? (function (t, e) {
              return Ht(t, e);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                if (!Zt(e.segments, n.segments)) return !1;
                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                for (const r in n.children) {
                  if (!e.children[r]) return !1;
                  if (!t(e.children[r], n.children[r])) return !1;
                }
                return !0;
              })(t.root, e.root)
          : (function (t, e) {
              return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every((n) => e[n] === t[n]);
            })(t.queryParams, e.queryParams) &&
              (function t(e, n) {
                return (function e(n, r, i) {
                  if (n.segments.length > i.length) return !!Zt(n.segments.slice(0, i.length), i) && !r.hasChildren();
                  if (n.segments.length === i.length) {
                    if (!Zt(n.segments, i)) return !1;
                    for (const e in r.children) {
                      if (!n.children[e]) return !1;
                      if (!t(n.children[e], r.children[e])) return !1;
                    }
                    return !0;
                  }
                  {
                    const t = i.slice(0, n.segments.length),
                      o = i.slice(n.segments.length);
                    return !!Zt(n.segments, t) && !!n.children.primary && e(n.children.primary, r, o);
                  }
                })(e, n, n.segments);
              })(t.root, e.root);
      }
      class Kt {
        constructor(t, e, n) {
          (this.root = t), (this.queryParams = e), (this.fragment = n);
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Dt(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return ee.serialize(this);
        }
      }
      class Yt {
        constructor(t, e) {
          (this.segments = t), (this.children = e), (this.parent = null), qt(e, (t, e) => (t.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return ne(this);
        }
      }
      class Jt {
        constructor(t, e) {
          (this.path = t), (this.parameters = e);
        }
        get parameterMap() {
          return this._parameterMap || (this._parameterMap = Dt(this.parameters)), this._parameterMap;
        }
        toString() {
          return ue(this);
        }
      }
      function Zt(t, e) {
        return t.length === e.length && t.every((t, n) => t.path === e[n].path);
      }
      function Xt(t, e) {
        let n = [];
        return (
          qt(t.children, (t, r) => {
            'primary' === r && (n = n.concat(e(t, r)));
          }),
          qt(t.children, (t, r) => {
            'primary' !== r && (n = n.concat(e(t, r)));
          }),
          n
        );
      }
      class Qt {}
      class te {
        parse(t) {
          const e = new fe(t);
          return new Kt(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment());
        }
        serialize(t) {
          var e;
          return `${`/${(function t(e, n) {
            if (!e.hasChildren()) return ne(e);
            if (n) {
              const n = e.children.primary ? t(e.children.primary, !1) : '',
                r = [];
              return (
                qt(e.children, (e, n) => {
                  'primary' !== n && r.push(`${n}:${t(e, !1)}`);
                }),
                r.length > 0 ? `${n}(${r.join('//')})` : n
              );
            }
            {
              const n = Xt(e, (n, r) => ('primary' === r ? [t(e.children.primary, !1)] : [`${r}:${t(n, !1)}`]));
              return `${ne(e)}/(${n.join('//')})`;
            }
          })(t.root, !0)}`}${(function (t) {
            const e = Object.keys(t).map((e) => {
              const n = t[e];
              return Array.isArray(n) ? n.map((t) => `${ie(e)}=${ie(t)}`).join('&') : `${ie(e)}=${ie(n)}`;
            });
            return e.length ? `?${e.join('&')}` : '';
          })(t.queryParams)}${'string' == typeof t.fragment ? `#${((e = t.fragment), encodeURI(e))}` : ''}`;
        }
      }
      const ee = new te();
      function ne(t) {
        return t.segments.map((t) => ue(t)).join('/');
      }
      function re(t) {
        return encodeURIComponent(t)
          .replace(/%40/g, '@')
          .replace(/%3A/gi, ':')
          .replace(/%24/g, '$')
          .replace(/%2C/gi, ',');
      }
      function ie(t) {
        return re(t).replace(/%3B/gi, ';');
      }
      function oe(t) {
        return re(t).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
      }
      function se(t) {
        return decodeURIComponent(t);
      }
      function ae(t) {
        return se(t.replace(/\+/g, '%20'));
      }
      function ue(t) {
        return `${oe(t.path)}${
          ((e = t.parameters),
          Object.keys(e)
            .map((t) => `;${oe(t)}=${oe(e[t])}`)
            .join(''))
        }`;
        var e;
      }
      const ce = /^[^\/()?;=#]+/;
      function le(t) {
        const e = t.match(ce);
        return e ? e[0] : '';
      }
      const he = /^[^=?&#]+/,
        de = /^[^?&#]+/;
      class fe {
        constructor(t) {
          (this.url = t), (this.remaining = t);
        }
        parseRootSegment() {
          return (
            this.consumeOptional('/'),
            '' === this.remaining || this.peekStartsWith('?') || this.peekStartsWith('#')
              ? new Yt([], {})
              : new Yt([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const t = {};
          if (this.consumeOptional('?'))
            do {
              this.parseQueryParam(t);
            } while (this.consumeOptional('&'));
          return t;
        }
        parseFragment() {
          return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
        }
        parseChildren() {
          if ('' === this.remaining) return {};
          this.consumeOptional('/');
          const t = [];
          for (
            this.peekStartsWith('(') || t.push(this.parseSegment());
            this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(');

          )
            this.capture('/'), t.push(this.parseSegment());
          let e = {};
          this.peekStartsWith('/(') && (this.capture('/'), (e = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith('(') && (n = this.parseParens(!1)),
            (t.length > 0 || Object.keys(e).length > 0) && (n.primary = new Yt(t, e)),
            n
          );
        }
        parseSegment() {
          const t = le(this.remaining);
          if ('' === t && this.peekStartsWith(';'))
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
          return this.capture(t), new Jt(se(t), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const t = {};
          for (; this.consumeOptional(';'); ) this.parseParam(t);
          return t;
        }
        parseParam(t) {
          const e = le(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = le(this.remaining);
            t && ((n = t), this.capture(n));
          }
          t[se(e)] = se(n);
        }
        parseQueryParam(t) {
          const e = (function (t) {
            const e = t.match(he);
            return e ? e[0] : '';
          })(this.remaining);
          if (!e) return;
          this.capture(e);
          let n = '';
          if (this.consumeOptional('=')) {
            const t = (function (t) {
              const e = t.match(de);
              return e ? e[0] : '';
            })(this.remaining);
            t && ((n = t), this.capture(n));
          }
          const r = ae(e),
            i = ae(n);
          if (t.hasOwnProperty(r)) {
            let e = t[r];
            Array.isArray(e) || ((e = [e]), (t[r] = e)), e.push(i);
          } else t[r] = i;
        }
        parseParens(t) {
          const e = {};
          for (this.capture('('); !this.consumeOptional(')') && this.remaining.length > 0; ) {
            const n = le(this.remaining),
              r = this.remaining[n.length];
            if ('/' !== r && ')' !== r && ';' !== r) throw new Error(`Cannot parse url '${this.url}'`);
            let i = void 0;
            n.indexOf(':') > -1
              ? ((i = n.substr(0, n.indexOf(':'))), this.capture(i), this.capture(':'))
              : t && (i = 'primary');
            const o = this.parseChildren();
            (e[i] = 1 === Object.keys(o).length ? o.primary : new Yt([], o)), this.consumeOptional('//');
          }
          return e;
        }
        peekStartsWith(t) {
          return this.remaining.startsWith(t);
        }
        consumeOptional(t) {
          return !!this.peekStartsWith(t) && ((this.remaining = this.remaining.substring(t.length)), !0);
        }
        capture(t) {
          if (!this.consumeOptional(t)) throw new Error(`Expected "${t}".`);
        }
      }
      class pe {
        constructor(t) {
          this._root = t;
        }
        get root() {
          return this._root.value;
        }
        parent(t) {
          const e = this.pathFromRoot(t);
          return e.length > 1 ? e[e.length - 2] : null;
        }
        children(t) {
          const e = ge(t, this._root);
          return e ? e.children.map((t) => t.value) : [];
        }
        firstChild(t) {
          const e = ge(t, this._root);
          return e && e.children.length > 0 ? e.children[0].value : null;
        }
        siblings(t) {
          const e = me(t, this._root);
          return e.length < 2 ? [] : e[e.length - 2].children.map((t) => t.value).filter((e) => e !== t);
        }
        pathFromRoot(t) {
          return me(t, this._root).map((t) => t.value);
        }
      }
      function ge(t, e) {
        if (t === e.value) return e;
        for (const n of e.children) {
          const e = ge(t, n);
          if (e) return e;
        }
        return null;
      }
      function me(t, e) {
        if (t === e.value) return [e];
        for (const n of e.children) {
          const r = me(t, n);
          if (r.length) return r.unshift(e), r;
        }
        return [];
      }
      class ve {
        constructor(t, e) {
          (this.value = t), (this.children = e);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function be(t) {
        const e = {};
        return t && t.children.forEach((t) => (e[t.value.outlet] = t)), e;
      }
      class ye extends pe {
        constructor(t, e) {
          super(t), (this.snapshot = e), Ie(this, t);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function we(t, e) {
        const n = (function (t, e) {
            const n = new Ee([], {}, {}, '', {}, 'primary', e, null, t.root, -1, {});
            return new Ce('', new ve(n, []));
          })(t, e),
          r = new c([new Jt('', {})]),
          i = new c({}),
          o = new c({}),
          s = new c({}),
          a = new c(''),
          u = new _e(r, i, s, a, o, 'primary', e, n.root);
        return (u.snapshot = n.root), new ye(new ve(u, []), n);
      }
      class _e {
        constructor(t, e, n, r, i, o, s, a) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = o),
            (this.component = s),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = this.params.pipe(Object(E.a)((t) => Dt(t)))), this._paramMap;
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(Object(E.a)((t) => Dt(t)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`;
        }
      }
      function Se(t, e = 'emptyOnly') {
        const n = t.pathFromRoot;
        let r = 0;
        if ('always' !== e)
          for (r = n.length - 1; r >= 1; ) {
            const t = n[r],
              e = n[r - 1];
            if (t.routeConfig && '' === t.routeConfig.path) r--;
            else {
              if (e.component) break;
              r--;
            }
          }
        return (function (t) {
          return t.reduce(
            (t, e) => ({
              params: Object.assign({}, t.params, e.params),
              data: Object.assign({}, t.data, e.data),
              resolve: Object.assign({}, t.resolve, e._resolvedData)
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class Ee {
        constructor(t, e, n, r, i, o, s, a, u, c, l) {
          (this.url = t),
            (this.params = e),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = i),
            (this.outlet = o),
            (this.component = s),
            (this.routeConfig = a),
            (this._urlSegment = u),
            (this._lastPathIndex = c),
            (this._resolve = l);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return this._paramMap || (this._paramMap = Dt(this.params)), this._paramMap;
        }
        get queryParamMap() {
          return this._queryParamMap || (this._queryParamMap = Dt(this.queryParams)), this._queryParamMap;
        }
        toString() {
          return `Route(url:'${this.url.map((t) => t.toString()).join('/')}', path:'${
            this.routeConfig ? this.routeConfig.path : ''
          }')`;
        }
      }
      class Ce extends pe {
        constructor(t, e) {
          super(e), (this.url = t), Ie(this, e);
        }
        toString() {
          return Te(this._root);
        }
      }
      function Ie(t, e) {
        (e.value._routerState = t), e.children.forEach((e) => Ie(t, e));
      }
      function Te(t) {
        const e = t.children.length > 0 ? ` { ${t.children.map(Te).join(', ')} } ` : '';
        return `${t.value}${e}`;
      }
      function xe(t) {
        if (t.snapshot) {
          const e = t.snapshot,
            n = t._futureSnapshot;
          (t.snapshot = n),
            Ht(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams),
            e.fragment !== n.fragment && t.fragment.next(n.fragment),
            Ht(e.params, n.params) || t.params.next(n.params),
            (function (t, e) {
              if (t.length !== e.length) return !1;
              for (let n = 0; n < t.length; ++n) if (!Ht(t[n], e[n])) return !1;
              return !0;
            })(e.url, n.url) || t.url.next(n.url),
            Ht(e.data, n.data) || t.data.next(n.data);
        } else (t.snapshot = t._futureSnapshot), t.data.next(t._futureSnapshot.data);
      }
      function ke(t, e) {
        var n, r;
        return (
          Ht(t.params, e.params) &&
          Zt((n = t.url), (r = e.url)) &&
          n.every((t, e) => Ht(t.parameters, r[e].parameters)) &&
          !(!t.parent != !e.parent) &&
          (!t.parent || ke(t.parent, e.parent))
        );
      }
      function Oe(t) {
        return 'object' == typeof t && null != t && !t.outlets && !t.segmentPath;
      }
      function Ae(t, e, n, r, i) {
        let o = {};
        return (
          r &&
            qt(r, (t, e) => {
              o[e] = Array.isArray(t) ? t.map((t) => `${t}`) : `${t}`;
            }),
          new Kt(
            n.root === t
              ? e
              : (function t(e, n, r) {
                  const i = {};
                  return (
                    qt(e.children, (e, o) => {
                      i[o] = e === n ? r : t(e, n, r);
                    }),
                    new Yt(e.segments, i)
                  );
                })(n.root, t, e),
            o,
            i
          )
        );
      }
      class Ne {
        constructor(t, e, n) {
          if (
            ((this.isAbsolute = t), (this.numberOfDoubleDots = e), (this.commands = n), t && n.length > 0 && Oe(n[0]))
          )
            throw new Error('Root segment cannot have matrix parameters');
          const r = n.find((t) => 'object' == typeof t && null != t && t.outlets);
          if (r && r !== $t(n)) throw new Error('{outlets:{}} has to be the last command');
        }
        toRoot() {
          return this.isAbsolute && 1 === this.commands.length && '/' == this.commands[0];
        }
      }
      class Re {
        constructor(t, e, n) {
          (this.segmentGroup = t), (this.processChildren = e), (this.index = n);
        }
      }
      function Pe(t) {
        return 'object' == typeof t && null != t && t.outlets ? t.outlets.primary : `${t}`;
      }
      function De(t, e, n) {
        if ((t || (t = new Yt([], {})), 0 === t.segments.length && t.hasChildren())) return je(t, e, n);
        const r = (function (t, e, n) {
            let r = 0,
              i = e;
            const o = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; i < t.segments.length; ) {
              if (r >= n.length) return o;
              const e = t.segments[i],
                s = Pe(n[r]),
                a = r < n.length - 1 ? n[r + 1] : null;
              if (i > 0 && void 0 === s) break;
              if (s && a && 'object' == typeof a && void 0 === a.outlets) {
                if (!Ve(s, a, e)) return o;
                r += 2;
              } else {
                if (!Ve(s, {}, e)) return o;
                r++;
              }
              i++;
            }
            return { match: !0, pathIndex: i, commandIndex: r };
          })(t, e, n),
          i = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < t.segments.length) {
          const e = new Yt(t.segments.slice(0, r.pathIndex), {});
          return (e.children.primary = new Yt(t.segments.slice(r.pathIndex), t.children)), je(e, 0, i);
        }
        return r.match && 0 === i.length
          ? new Yt(t.segments, {})
          : r.match && !t.hasChildren()
          ? Me(t, e, n)
          : r.match
          ? je(t, 0, i)
          : Me(t, e, n);
      }
      function je(t, e, n) {
        if (0 === n.length) return new Yt(t.segments, {});
        {
          const r = (function (t) {
              return 'object' != typeof t[0] ? { primary: t } : void 0 === t[0].outlets ? { primary: t } : t[0].outlets;
            })(n),
            i = {};
          return (
            qt(r, (n, r) => {
              null !== n && (i[r] = De(t.children[r], e, n));
            }),
            qt(t.children, (t, e) => {
              void 0 === r[e] && (i[e] = t);
            }),
            new Yt(t.segments, i)
          );
        }
      }
      function Me(t, e, n) {
        const r = t.segments.slice(0, e);
        let i = 0;
        for (; i < n.length; ) {
          if ('object' == typeof n[i] && void 0 !== n[i].outlets) {
            const t = Le(n[i].outlets);
            return new Yt(r, t);
          }
          if (0 === i && Oe(n[0])) {
            r.push(new Jt(t.segments[e].path, n[0])), i++;
            continue;
          }
          const o = Pe(n[i]),
            s = i < n.length - 1 ? n[i + 1] : null;
          o && s && Oe(s) ? (r.push(new Jt(o, Ue(s))), (i += 2)) : (r.push(new Jt(o, {})), i++);
        }
        return new Yt(r, {});
      }
      function Le(t) {
        const e = {};
        return (
          qt(t, (t, n) => {
            null !== t && (e[n] = Me(new Yt([], {}), 0, t));
          }),
          e
        );
      }
      function Ue(t) {
        const e = {};
        return qt(t, (t, n) => (e[n] = `${t}`)), e;
      }
      function Ve(t, e, n) {
        return t == n.path && Ht(e, n.parameters);
      }
      class Fe {
        constructor(t, e, n, r) {
          (this.routeReuseStrategy = t), (this.futureState = e), (this.currState = n), (this.forwardEvent = r);
        }
        activate(t) {
          const e = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(e, n, t), xe(this.futureState.root), this.activateChildRoutes(e, n, t);
        }
        deactivateChildRoutes(t, e, n) {
          const r = be(e);
          t.children.forEach((t) => {
            const e = t.value.outlet;
            this.deactivateRoutes(t, r[e], n), delete r[e];
          }),
            qt(r, (t, e) => {
              this.deactivateRouteAndItsChildren(t, n);
            });
        }
        deactivateRoutes(t, e, n) {
          const r = t.value,
            i = e ? e.value : null;
          if (r === i)
            if (r.component) {
              const i = n.getContext(r.outlet);
              i && this.deactivateChildRoutes(t, e, i.children);
            } else this.deactivateChildRoutes(t, e, n);
          else i && this.deactivateRouteAndItsChildren(e, n);
        }
        deactivateRouteAndItsChildren(t, e) {
          this.routeReuseStrategy.shouldDetach(t.value.snapshot)
            ? this.detachAndStoreRouteSubtree(t, e)
            : this.deactivateRouteAndOutlet(t, e);
        }
        detachAndStoreRouteSubtree(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n && n.outlet) {
            const e = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(t.value.snapshot, { componentRef: e, route: t, contexts: r });
          }
        }
        deactivateRouteAndOutlet(t, e) {
          const n = e.getContext(t.value.outlet);
          if (n) {
            const r = be(t),
              i = t.value.component ? n.children : e;
            qt(r, (t, e) => this.deactivateRouteAndItsChildren(t, i)),
              n.outlet && (n.outlet.deactivate(), n.children.onOutletDeactivated());
          }
        }
        activateChildRoutes(t, e, n) {
          const r = be(e);
          t.children.forEach((t) => {
            this.activateRoutes(t, r[t.value.outlet], n), this.forwardEvent(new At(t.value.snapshot));
          }),
            t.children.length && this.forwardEvent(new kt(t.value.snapshot));
        }
        activateRoutes(t, e, n) {
          const r = t.value,
            i = e ? e.value : null;
          if ((xe(r), r === i))
            if (r.component) {
              const i = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(t, e, i.children);
            } else this.activateChildRoutes(t, e, n);
          else if (r.component) {
            const e = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const t = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                e.children.onOutletReAttached(t.contexts),
                (e.attachRef = t.componentRef),
                (e.route = t.route.value),
                e.outlet && e.outlet.attach(t.componentRef, t.route.value),
                ze(t.route);
            } else {
              const n = (function (t) {
                  for (let e = t.parent; e; e = e.parent) {
                    const t = e.routeConfig;
                    if (t && t._loadedConfig) return t._loadedConfig;
                    if (t && t.component) return null;
                  }
                  return null;
                })(r.snapshot),
                i = n ? n.module.componentFactoryResolver : null;
              (e.attachRef = null),
                (e.route = r),
                (e.resolver = i),
                e.outlet && e.outlet.activateWith(r, i),
                this.activateChildRoutes(t, null, e.children);
            }
          } else this.activateChildRoutes(t, null, n);
        }
      }
      function ze(t) {
        xe(t.value), t.children.forEach(ze);
      }
      function He(t) {
        return 'function' == typeof t;
      }
      function Be(t) {
        return t instanceof Kt;
      }
      class $e {
        constructor(t) {
          this.segmentGroup = t || null;
        }
      }
      class qe {
        constructor(t) {
          this.urlTree = t;
        }
      }
      function We(t) {
        return new l.a((e) => e.error(new $e(t)));
      }
      function Ge(t) {
        return new l.a((e) => e.error(new qe(t)));
      }
      function Ke(t) {
        return new l.a((e) => e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)));
      }
      class Ye {
        constructor(t, e, n, r, o) {
          (this.configLoader = e),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = o),
            (this.allowRedirects = !0),
            (this.ngModule = t.get(i.v));
        }
        apply() {
          return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, 'primary')
            .pipe(Object(E.a)((t) => this.createUrlTree(t, this.urlTree.queryParams, this.urlTree.fragment)))
            .pipe(
              K((t) => {
                if (t instanceof qe) return (this.allowRedirects = !1), this.match(t.urlTree);
                if (t instanceof $e) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        match(t) {
          return this.expandSegmentGroup(this.ngModule, this.config, t.root, 'primary')
            .pipe(Object(E.a)((e) => this.createUrlTree(e, t.queryParams, t.fragment)))
            .pipe(
              K((t) => {
                if (t instanceof $e) throw this.noMatchError(t);
                throw t;
              })
            );
        }
        noMatchError(t) {
          return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`);
        }
        createUrlTree(t, e, n) {
          const r = t.segments.length > 0 ? new Yt([], { primary: t }) : t;
          return new Kt(r, e, n);
        }
        expandSegmentGroup(t, e, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(t, e, n).pipe(Object(E.a)((t) => new Yt([], t)))
            : this.expandSegment(t, n, e, n.segments, r, !0);
        }
        expandChildren(t, e, n) {
          return (function (t, e) {
            if (0 === Object.keys(t).length) return Object(o.a)({});
            const n = [],
              r = [],
              i = {};
            return (
              qt(t, (t, o) => {
                const s = e(o, t).pipe(Object(E.a)((t) => (i[o] = t)));
                'primary' === o ? n.push(s) : r.push(s);
              }),
              o.a.apply(null, n.concat(r)).pipe(
                I(),
                W(),
                Object(E.a)(() => i)
              )
            );
          })(n.children, (n, r) => this.expandSegmentGroup(t, e, r, n));
        }
        expandSegment(t, e, n, r, i, s) {
          return Object(o.a)(...n).pipe(
            Object(E.a)((a) =>
              this.expandSegmentAgainstRoute(t, e, n, a, r, i, s).pipe(
                K((t) => {
                  if (t instanceof $e) return Object(o.a)(null);
                  throw t;
                })
              )
            ),
            I(),
            tt((t) => !!t),
            K((t, n) => {
              if (t instanceof d || 'EmptyError' === t.name) {
                if (this.noLeftoversInUrl(e, r, i)) return Object(o.a)(new Yt([], {}));
                throw new $e(e);
              }
              throw t;
            })
          );
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        expandSegmentAgainstRoute(t, e, n, r, i, o, s) {
          return Qe(r) !== o
            ? We(e)
            : void 0 === r.redirectTo
            ? this.matchSegmentAgainstRoute(t, e, r, i)
            : s && this.allowRedirects
            ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o)
            : We(e);
        }
        expandSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o) {
          return '**' === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, o)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o);
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(t, e, n, r) {
          const i = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith('/')
            ? Ge(i)
            : this.lineralizeSegments(n, i).pipe(
                Object(et.a)((n) => {
                  const i = new Yt(n, {});
                  return this.expandSegment(t, i, e, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, i, o) {
          const { matched: s, consumedSegments: a, lastChild: u, positionalParamSegments: c } = Je(e, r, i);
          if (!s) return We(e);
          const l = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith('/')
            ? Ge(l)
            : this.lineralizeSegments(r, l).pipe(
                Object(et.a)((r) => this.expandSegment(t, e, n, r.concat(i.slice(u)), o, !1))
              );
        }
        matchSegmentAgainstRoute(t, e, n, r) {
          if ('**' === n.path)
            return n.loadChildren
              ? this.configLoader.load(t.injector, n).pipe(Object(E.a)((t) => ((n._loadedConfig = t), new Yt(r, {}))))
              : Object(o.a)(new Yt(r, {}));
          const { matched: i, consumedSegments: s, lastChild: a } = Je(e, n, r);
          if (!i) return We(e);
          const u = r.slice(a);
          return this.getChildConfig(t, n, r).pipe(
            Object(et.a)((t) => {
              const n = t.module,
                r = t.routes,
                { segmentGroup: i, slicedSegments: a } = (function (t, e, n, r) {
                  return n.length > 0 &&
                    (function (t, e, n) {
                      return n.some((n) => Xe(t, e, n) && 'primary' !== Qe(n));
                    })(t, n, r)
                    ? {
                        segmentGroup: Ze(
                          new Yt(
                            e,
                            (function (t, e) {
                              const n = {};
                              n.primary = e;
                              for (const r of t) '' === r.path && 'primary' !== Qe(r) && (n[Qe(r)] = new Yt([], {}));
                              return n;
                            })(r, new Yt(n, t.children))
                          )
                        ),
                        slicedSegments: []
                      }
                    : 0 === n.length &&
                      (function (t, e, n) {
                        return n.some((n) => Xe(t, e, n));
                      })(t, n, r)
                    ? {
                        segmentGroup: Ze(
                          new Yt(
                            t.segments,
                            (function (t, e, n, r) {
                              const i = {};
                              for (const o of n) Xe(t, e, o) && !r[Qe(o)] && (i[Qe(o)] = new Yt([], {}));
                              return Object.assign({}, r, i);
                            })(t, n, r, t.children)
                          )
                        ),
                        slicedSegments: n
                      }
                    : { segmentGroup: t, slicedSegments: n };
                })(e, s, u, r);
              return 0 === a.length && i.hasChildren()
                ? this.expandChildren(n, r, i).pipe(Object(E.a)((t) => new Yt(s, t)))
                : 0 === r.length && 0 === a.length
                ? Object(o.a)(new Yt(s, {}))
                : this.expandSegment(n, i, r, a, 'primary', !0).pipe(
                    Object(E.a)((t) => new Yt(s.concat(t.segments), t.children))
                  );
            })
          );
        }
        getChildConfig(t, e, n) {
          return e.children
            ? Object(o.a)(new Lt(e.children, t))
            : e.loadChildren
            ? void 0 !== e._loadedConfig
              ? Object(o.a)(e._loadedConfig)
              : (function (t, e, n) {
                  const r = e.canLoad;
                  return r && 0 !== r.length
                    ? Object(s.a)(r)
                        .pipe(
                          Object(E.a)((r) => {
                            const i = t.get(r);
                            let o;
                            if (
                              (function (t) {
                                return t && He(t.canLoad);
                              })(i)
                            )
                              o = i.canLoad(e, n);
                            else {
                              if (!He(i)) throw new Error('Invalid CanLoad guard');
                              o = i(e, n);
                            }
                            return Wt(o);
                          })
                        )
                        .pipe(I(), ((i = (t) => !0 === t), (t) => t.lift(new nt(i, void 0, t))))
                    : Object(o.a)(!0);
                  var i;
                })(t.injector, e, n).pipe(
                  Object(et.a)((n) =>
                    n
                      ? this.configLoader.load(t.injector, e).pipe(Object(E.a)((t) => ((e._loadedConfig = t), t)))
                      : (function (t) {
                          return new l.a((e) =>
                            e.error(
                              jt(
                                `Cannot load children because the guard of the route "path: '${t.path}'" returned false`
                              )
                            )
                          );
                        })(e)
                  )
                )
            : Object(o.a)(new Lt([], t));
        }
        lineralizeSegments(t, e) {
          let n = [],
            r = e.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren)) return Object(o.a)(n);
            if (r.numberOfChildren > 1 || !r.children.primary) return Ke(t.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(t, e, n) {
          return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n);
        }
        applyRedirectCreatreUrlTree(t, e, n, r) {
          const i = this.createSegmentGroup(t, e.root, n, r);
          return new Kt(i, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment);
        }
        createQueryParams(t, e) {
          const n = {};
          return (
            qt(t, (t, r) => {
              if ('string' == typeof t && t.startsWith(':')) {
                const i = t.substring(1);
                n[r] = e[i];
              } else n[r] = t;
            }),
            n
          );
        }
        createSegmentGroup(t, e, n, r) {
          const i = this.createSegments(t, e.segments, n, r);
          let o = {};
          return (
            qt(e.children, (e, i) => {
              o[i] = this.createSegmentGroup(t, e, n, r);
            }),
            new Yt(i, o)
          );
        }
        createSegments(t, e, n, r) {
          return e.map((e) => (e.path.startsWith(':') ? this.findPosParam(t, e, r) : this.findOrReturn(e, n)));
        }
        findPosParam(t, e, n) {
          const r = n[e.path.substring(1)];
          if (!r) throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);
          return r;
        }
        findOrReturn(t, e) {
          let n = 0;
          for (const r of e) {
            if (r.path === t.path) return e.splice(n), r;
            n++;
          }
          return t;
        }
      }
      function Je(t, e, n) {
        if ('' === e.path)
          return 'full' === e.pathMatch && (t.hasChildren() || n.length > 0)
            ? { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} }
            : { matched: !0, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
        const r = (e.matcher || Mt)(n, t, e);
        return r
          ? {
              matched: !0,
              consumedSegments: r.consumed,
              lastChild: r.consumed.length,
              positionalParamSegments: r.posParams
            }
          : { matched: !1, consumedSegments: [], lastChild: 0, positionalParamSegments: {} };
      }
      function Ze(t) {
        if (1 === t.numberOfChildren && t.children.primary) {
          const e = t.children.primary;
          return new Yt(t.segments.concat(e.segments), e.children);
        }
        return t;
      }
      function Xe(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 !== n.redirectTo
        );
      }
      function Qe(t) {
        return t.outlet || 'primary';
      }
      class tn {
        constructor(t) {
          (this.path = t), (this.route = this.path[this.path.length - 1]);
        }
      }
      class en {
        constructor(t, e) {
          (this.component = t), (this.route = e);
        }
      }
      function nn(t, e, n) {
        const r = t._root;
        return (function t(e, n, r, i, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
          const s = be(n);
          return (
            e.children.forEach((e) => {
              !(function (e, n, r, i, o = { canDeactivateChecks: [], canActivateChecks: [] }) {
                const s = e.value,
                  a = n ? n.value : null,
                  u = r ? r.getContext(e.value.outlet) : null;
                if (a && s.routeConfig === a.routeConfig) {
                  const c = (function (t, e, n) {
                    if ('function' == typeof n) return n(t, e);
                    switch (n) {
                      case 'pathParamsChange':
                        return !Zt(t.url, e.url);
                      case 'pathParamsOrQueryParamsChange':
                        return !Zt(t.url, e.url) || !Ht(t.queryParams, e.queryParams);
                      case 'always':
                        return !0;
                      case 'paramsOrQueryParamsChange':
                        return !ke(t, e) || !Ht(t.queryParams, e.queryParams);
                      case 'paramsChange':
                      default:
                        return !ke(t, e);
                    }
                  })(a, s, s.routeConfig.runGuardsAndResolvers);
                  c ? o.canActivateChecks.push(new tn(i)) : ((s.data = a.data), (s._resolvedData = a._resolvedData)),
                    t(e, n, s.component ? (u ? u.children : null) : r, i, o),
                    c && o.canDeactivateChecks.push(new en((u && u.outlet && u.outlet.component) || null, a));
                } else
                  a && on(n, u, o),
                    o.canActivateChecks.push(new tn(i)),
                    t(e, null, s.component ? (u ? u.children : null) : r, i, o);
              })(e, s[e.value.outlet], r, i.concat([e.value]), o),
                delete s[e.value.outlet];
            }),
            qt(s, (t, e) => on(t, r.getContext(e), o)),
            o
          );
        })(r, e ? e._root : null, n, [r.value]);
      }
      function rn(t, e, n) {
        const r = (function (t) {
          if (!t) return null;
          for (let e = t.parent; e; e = e.parent) {
            const t = e.routeConfig;
            if (t && t._loadedConfig) return t._loadedConfig;
          }
          return null;
        })(e);
        return (r ? r.module.injector : n).get(t);
      }
      function on(t, e, n) {
        const r = be(t),
          i = t.value;
        qt(r, (t, r) => {
          on(t, i.component ? (e ? e.children.getContext(r) : null) : e, n);
        }),
          n.canDeactivateChecks.push(
            new en(i.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, i)
          );
      }
      const sn = Symbol('INITIAL_VALUE');
      function an() {
        return Object(it.a)((t) =>
          (function (...t) {
            let e = null,
              n = null;
            return (
              Object(f.a)(t[t.length - 1]) && (n = t.pop()),
              'function' == typeof t[t.length - 1] && (e = t.pop()),
              1 === t.length && Object(p.a)(t[0]) && (t = t[0]),
              Object(v.a)(t, n).lift(new y(e))
            );
          })(
            ...t.map((t) =>
              t.pipe(
                Z(1),
                (function (...t) {
                  return (e) => {
                    let n = t[t.length - 1];
                    Object(f.a)(n) ? t.pop() : (n = null);
                    const r = t.length;
                    return (function (...t) {
                      return I()(Object(o.a)(...t));
                    })(1 !== r || n ? (r > 0 ? Object(v.a)(t, n) : Object(_.b)(n)) : Object(ot.a)(t[0]), e);
                  };
                })(sn)
              )
            )
          ).pipe(
            st((t, e) => {
              let n = !1;
              return e.reduce((t, r, i) => {
                if (t !== sn) return t;
                if ((r === sn && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (i === e.length - 1 || Be(r)) return r;
                }
                return t;
              }, t);
            }, sn),
            x((t) => t !== sn),
            Object(E.a)((t) => (Be(t) ? t : !0 === t)),
            Z(1)
          )
        );
      }
      function un(t, e) {
        return null !== t && e && e(new Ot(t)), Object(o.a)(!0);
      }
      function cn(t, e) {
        return null !== t && e && e(new xt(t)), Object(o.a)(!0);
      }
      function ln(t, e, n) {
        const r = e.routeConfig ? e.routeConfig.canActivate : null;
        if (!r || 0 === r.length) return Object(o.a)(!0);
        const i = r.map((r) =>
          S(() => {
            const i = rn(r, e, n);
            let o;
            if (
              (function (t) {
                return t && He(t.canActivate);
              })(i)
            )
              o = Wt(i.canActivate(e, t));
            else {
              if (!He(i)) throw new Error('Invalid CanActivate guard');
              o = Wt(i(e, t));
            }
            return o.pipe(tt());
          })
        );
        return Object(o.a)(i).pipe(an());
      }
      function hn(t, e, n) {
        const r = e[e.length - 1],
          i = e
            .slice(0, e.length - 1)
            .reverse()
            .map((t) =>
              (function (t) {
                const e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                return e && 0 !== e.length ? { node: t, guards: e } : null;
              })(t)
            )
            .filter((t) => null !== t)
            .map((e) =>
              S(() => {
                const i = e.guards.map((i) => {
                  const o = rn(i, e.node, n);
                  let s;
                  if (
                    (function (t) {
                      return t && He(t.canActivateChild);
                    })(o)
                  )
                    s = Wt(o.canActivateChild(r, t));
                  else {
                    if (!He(o)) throw new Error('Invalid CanActivateChild guard');
                    s = Wt(o(r, t));
                  }
                  return s.pipe(tt());
                });
                return Object(o.a)(i).pipe(an());
              })
            );
        return Object(o.a)(i).pipe(an());
      }
      class dn {}
      class fn {
        constructor(t, e, n, r, i, o) {
          (this.rootComponentType = t),
            (this.config = e),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = i),
            (this.relativeLinkResolution = o);
        }
        recognize() {
          try {
            const t = mn(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
              e = this.processSegmentGroup(this.config, t, 'primary'),
              n = new Ee(
                [],
                Object.freeze({}),
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                {},
                'primary',
                this.rootComponentType,
                null,
                this.urlTree.root,
                -1,
                {}
              ),
              r = new ve(n, e),
              i = new Ce(this.url, r);
            return this.inheritParamsAndData(i._root), Object(o.a)(i);
          } catch (t) {
            return new l.a((e) => e.error(t));
          }
        }
        inheritParamsAndData(t) {
          const e = t.value,
            n = Se(e, this.paramsInheritanceStrategy);
          (e.params = Object.freeze(n.params)),
            (e.data = Object.freeze(n.data)),
            t.children.forEach((t) => this.inheritParamsAndData(t));
        }
        processSegmentGroup(t, e, n) {
          return 0 === e.segments.length && e.hasChildren()
            ? this.processChildren(t, e)
            : this.processSegment(t, e, e.segments, n);
        }
        processChildren(t, e) {
          const n = Xt(e, (e, n) => this.processSegmentGroup(t, e, n));
          return (
            (function (t) {
              const e = {};
              t.forEach((t) => {
                const n = e[t.value.outlet];
                if (n) {
                  const e = n.url.map((t) => t.toString()).join('/'),
                    r = t.value.url.map((t) => t.toString()).join('/');
                  throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`);
                }
                e[t.value.outlet] = t.value;
              });
            })(n),
            n.sort((t, e) =>
              'primary' === t.value.outlet
                ? -1
                : 'primary' === e.value.outlet
                ? 1
                : t.value.outlet.localeCompare(e.value.outlet)
            ),
            n
          );
        }
        processSegment(t, e, n, r) {
          for (const o of t)
            try {
              return this.processSegmentAgainstRoute(o, e, n, r);
            } catch (i) {
              if (!(i instanceof dn)) throw i;
            }
          if (this.noLeftoversInUrl(e, n, r)) return [];
          throw new dn();
        }
        noLeftoversInUrl(t, e, n) {
          return 0 === e.length && !t.children[n];
        }
        processSegmentAgainstRoute(t, e, n, r) {
          if (t.redirectTo) throw new dn();
          if ((t.outlet || 'primary') !== r) throw new dn();
          let i,
            o = [],
            s = [];
          if ('**' === t.path) {
            const o = n.length > 0 ? $t(n).parameters : {};
            i = new Ee(
              n,
              o,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              yn(t),
              r,
              t.component,
              t,
              pn(e),
              gn(e) + n.length,
              wn(t)
            );
          } else {
            const a = (function (t, e, n) {
              if ('' === e.path) {
                if ('full' === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new dn();
                return { consumedSegments: [], lastChild: 0, parameters: {} };
              }
              const r = (e.matcher || Mt)(n, t, e);
              if (!r) throw new dn();
              const i = {};
              qt(r.posParams, (t, e) => {
                i[e] = t.path;
              });
              const o = r.consumed.length > 0 ? Object.assign({}, i, r.consumed[r.consumed.length - 1].parameters) : i;
              return { consumedSegments: r.consumed, lastChild: r.consumed.length, parameters: o };
            })(e, t, n);
            (o = a.consumedSegments),
              (s = n.slice(a.lastChild)),
              (i = new Ee(
                o,
                a.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                yn(t),
                r,
                t.component,
                t,
                pn(e),
                gn(e) + o.length,
                wn(t)
              ));
          }
          const a = (function (t) {
              return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : [];
            })(t),
            { segmentGroup: u, slicedSegments: c } = mn(e, o, s, a, this.relativeLinkResolution);
          if (0 === c.length && u.hasChildren()) {
            const t = this.processChildren(a, u);
            return [new ve(i, t)];
          }
          if (0 === a.length && 0 === c.length) return [new ve(i, [])];
          const l = this.processSegment(a, u, c, 'primary');
          return [new ve(i, l)];
        }
      }
      function pn(t) {
        let e = t;
        for (; e._sourceSegment; ) e = e._sourceSegment;
        return e;
      }
      function gn(t) {
        let e = t,
          n = e._segmentIndexShift ? e._segmentIndexShift : 0;
        for (; e._sourceSegment; ) (e = e._sourceSegment), (n += e._segmentIndexShift ? e._segmentIndexShift : 0);
        return n - 1;
      }
      function mn(t, e, n, r, i) {
        if (
          n.length > 0 &&
          (function (t, e, n) {
            return n.some((n) => vn(t, e, n) && 'primary' !== bn(n));
          })(t, n, r)
        ) {
          const i = new Yt(
            e,
            (function (t, e, n, r) {
              const i = {};
              (i.primary = r), (r._sourceSegment = t), (r._segmentIndexShift = e.length);
              for (const o of n)
                if ('' === o.path && 'primary' !== bn(o)) {
                  const n = new Yt([], {});
                  (n._sourceSegment = t), (n._segmentIndexShift = e.length), (i[bn(o)] = n);
                }
              return i;
            })(t, e, r, new Yt(n, t.children))
          );
          return (i._sourceSegment = t), (i._segmentIndexShift = e.length), { segmentGroup: i, slicedSegments: [] };
        }
        if (
          0 === n.length &&
          (function (t, e, n) {
            return n.some((n) => vn(t, e, n));
          })(t, n, r)
        ) {
          const o = new Yt(
            t.segments,
            (function (t, e, n, r, i, o) {
              const s = {};
              for (const a of r)
                if (vn(t, n, a) && !i[bn(a)]) {
                  const n = new Yt([], {});
                  (n._sourceSegment = t),
                    (n._segmentIndexShift = 'legacy' === o ? t.segments.length : e.length),
                    (s[bn(a)] = n);
                }
              return Object.assign({}, i, s);
            })(t, e, n, r, t.children, i)
          );
          return (o._sourceSegment = t), (o._segmentIndexShift = e.length), { segmentGroup: o, slicedSegments: n };
        }
        const o = new Yt(t.segments, t.children);
        return (o._sourceSegment = t), (o._segmentIndexShift = e.length), { segmentGroup: o, slicedSegments: n };
      }
      function vn(t, e, n) {
        return (
          (!(t.hasChildren() || e.length > 0) || 'full' !== n.pathMatch) && '' === n.path && void 0 === n.redirectTo
        );
      }
      function bn(t) {
        return t.outlet || 'primary';
      }
      function yn(t) {
        return t.data || {};
      }
      function wn(t) {
        return t.resolve || {};
      }
      function _n(t, e, n, r) {
        const i = rn(t, e, r);
        return Wt(i.resolve ? i.resolve(e, n) : i(e, n));
      }
      function Sn(t) {
        return function (e) {
          return e.pipe(
            Object(it.a)((e) => {
              const n = t(e);
              return n ? Object(s.a)(n).pipe(Object(E.a)(() => e)) : Object(s.a)([e]);
            })
          );
        };
      }
      class En {}
      class Cn {
        shouldDetach(t) {
          return !1;
        }
        store(t, e) {}
        shouldAttach(t) {
          return !1;
        }
        retrieve(t) {
          return null;
        }
        shouldReuseRoute(t, e) {
          return t.routeConfig === e.routeConfig;
        }
      }
      const In = new i.o('ROUTES');
      class Tn {
        constructor(t, e, n, r) {
          (this.loader = t), (this.compiler = e), (this.onLoadStartListener = n), (this.onLoadEndListener = r);
        }
        load(t, e) {
          return (
            this.onLoadStartListener && this.onLoadStartListener(e),
            this.loadModuleFactory(e.loadChildren).pipe(
              Object(E.a)((n) => {
                this.onLoadEndListener && this.onLoadEndListener(e);
                const r = n.create(t);
                return new Lt(Bt(r.injector.get(In)).map(zt), r);
              })
            )
          );
        }
        loadModuleFactory(t) {
          return 'string' == typeof t
            ? Object(s.a)(this.loader.load(t))
            : Wt(t()).pipe(
                Object(et.a)((t) =>
                  t instanceof i.t ? Object(o.a)(t) : Object(s.a)(this.compiler.compileModuleAsync(t))
                )
              );
        }
      }
      class xn {}
      class kn {
        shouldProcessUrl(t) {
          return !0;
        }
        extract(t) {
          return t;
        }
        merge(t, e) {
          return t;
        }
      }
      function On(t) {
        throw t;
      }
      function An(t, e, n) {
        return e.parse('/');
      }
      function Nn(t, e) {
        return Object(o.a)(null);
      }
      class Rn {
        constructor(t, e, n, r, o, s, u, l) {
          (this.rootComponentType = t),
            (this.urlSerializer = e),
            (this.rootContexts = n),
            (this.location = r),
            (this.config = l),
            (this.lastSuccessfulNavigation = null),
            (this.currentNavigation = null),
            (this.navigationId = 0),
            (this.isNgZoneEnabled = !1),
            (this.events = new a.a()),
            (this.errorHandler = On),
            (this.malformedUriErrorHandler = An),
            (this.navigated = !1),
            (this.lastSuccessfulId = -1),
            (this.hooks = { beforePreactivation: Nn, afterPreactivation: Nn }),
            (this.urlHandlingStrategy = new kn()),
            (this.routeReuseStrategy = new Cn()),
            (this.onSameUrlNavigation = 'ignore'),
            (this.paramsInheritanceStrategy = 'emptyOnly'),
            (this.urlUpdateStrategy = 'deferred'),
            (this.relativeLinkResolution = 'legacy'),
            (this.ngModule = o.get(i.v)),
            (this.console = o.get(i.Y));
          const h = o.get(i.x);
          (this.isNgZoneEnabled = h instanceof i.x),
            this.resetConfig(l),
            (this.currentUrlTree = new Kt(new Yt([], {}), {}, null)),
            (this.rawUrlTree = this.currentUrlTree),
            (this.browserUrlTree = this.currentUrlTree),
            (this.configLoader = new Tn(
              s,
              u,
              (t) => this.triggerEvent(new It(t)),
              (t) => this.triggerEvent(new Tt(t))
            )),
            (this.routerState = we(this.currentUrlTree, this.rootComponentType)),
            (this.transitions = new c({
              id: 0,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.currentUrlTree,
              extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
              urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
              rawUrl: this.currentUrlTree,
              extras: {},
              resolve: null,
              reject: null,
              promise: Promise.resolve(!0),
              source: 'imperative',
              restoredState: null,
              currentSnapshot: this.routerState.snapshot,
              targetSnapshot: null,
              currentRouterState: this.routerState,
              targetRouterState: null,
              guards: { canActivateChecks: [], canDeactivateChecks: [] },
              guardsResult: null
            })),
            (this.navigations = this.setupNavigations(this.transitions)),
            this.processNavigations();
        }
        setupNavigations(t) {
          const e = this.events;
          return t.pipe(
            x((t) => 0 !== t.id),
            Object(E.a)((t) => Object.assign({}, t, { extractedUrl: this.urlHandlingStrategy.extract(t.rawUrl) })),
            Object(it.a)((t) => {
              let n = !1,
                r = !1;
              return Object(o.a)(t).pipe(
                L((t) => {
                  this.currentNavigation = {
                    id: t.id,
                    initialUrl: t.currentRawUrl,
                    extractedUrl: t.extractedUrl,
                    trigger: t.source,
                    extras: t.extras,
                    previousNavigation: this.lastSuccessfulNavigation
                      ? Object.assign({}, this.lastSuccessfulNavigation, { previousNavigation: null })
                      : null
                  };
                }),
                Object(it.a)((t) => {
                  const n = !this.navigated || t.extractedUrl.toString() !== this.browserUrlTree.toString();
                  if (
                    ('reload' === this.onSameUrlNavigation || n) &&
                    this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)
                  )
                    return Object(o.a)(t).pipe(
                      Object(it.a)((t) => {
                        const n = this.transitions.getValue();
                        return (
                          e.next(new mt(t.id, this.serializeUrl(t.extractedUrl), t.source, t.restoredState)),
                          n !== this.transitions.getValue() ? _.a : [t]
                        );
                      }),
                      Object(it.a)((t) => Promise.resolve(t)),
                      ((r = this.ngModule.injector),
                      (i = this.configLoader),
                      (s = this.urlSerializer),
                      (a = this.config),
                      function (t) {
                        return t.pipe(
                          Object(it.a)((t) =>
                            (function (t, e, n, r, i) {
                              return new Ye(t, e, n, r, i).apply();
                            })(r, i, s, t.extractedUrl, a).pipe(
                              Object(E.a)((e) => Object.assign({}, t, { urlAfterRedirects: e }))
                            )
                          )
                        );
                      }),
                      L((t) => {
                        this.currentNavigation = Object.assign({}, this.currentNavigation, {
                          finalUrl: t.urlAfterRedirects
                        });
                      }),
                      (function (t, e, n, r, i) {
                        return function (o) {
                          return o.pipe(
                            Object(et.a)((o) =>
                              (function (t, e, n, r, i = 'emptyOnly', o = 'legacy') {
                                return new fn(t, e, n, r, i, o).recognize();
                              })(t, e, o.urlAfterRedirects, n(o.urlAfterRedirects), r, i).pipe(
                                Object(E.a)((t) => Object.assign({}, o, { targetSnapshot: t }))
                              )
                            )
                          );
                        };
                      })(
                        this.rootComponentType,
                        this.config,
                        (t) => this.serializeUrl(t),
                        this.paramsInheritanceStrategy,
                        this.relativeLinkResolution
                      ),
                      L((t) => {
                        'eager' === this.urlUpdateStrategy &&
                          (t.extras.skipLocationChange ||
                            this.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id, t.extras.state),
                          (this.browserUrlTree = t.urlAfterRedirects));
                      }),
                      L((t) => {
                        const n = new wt(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        e.next(n);
                      })
                    );
                  var r, i, s, a;
                  if (n && this.rawUrlTree && this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)) {
                    const { id: n, extractedUrl: r, source: i, restoredState: s, extras: a } = t,
                      u = new mt(n, this.serializeUrl(r), i, s);
                    e.next(u);
                    const c = we(r, this.rootComponentType).snapshot;
                    return Object(o.a)(
                      Object.assign({}, t, {
                        targetSnapshot: c,
                        urlAfterRedirects: r,
                        extras: Object.assign({}, a, { skipLocationChange: !1, replaceUrl: !1 })
                      })
                    );
                  }
                  return (
                    (this.rawUrlTree = t.rawUrl), (this.browserUrlTree = t.urlAfterRedirects), t.resolve(null), _.a
                  );
                }),
                Sn((t) => {
                  const {
                    targetSnapshot: e,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: o, replaceUrl: s }
                  } = t;
                  return this.hooks.beforePreactivation(e, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!o,
                    replaceUrl: !!s
                  });
                }),
                L((t) => {
                  const e = new _t(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot
                  );
                  this.triggerEvent(e);
                }),
                Object(E.a)((t) =>
                  Object.assign({}, t, { guards: nn(t.targetSnapshot, t.currentSnapshot, this.rootContexts) })
                ),
                (function (t, e) {
                  return function (n) {
                    return n.pipe(
                      Object(et.a)((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: i,
                          guards: { canActivateChecks: a, canDeactivateChecks: u }
                        } = n;
                        return 0 === u.length && 0 === a.length
                          ? Object(o.a)(Object.assign({}, n, { guardsResult: !0 }))
                          : (function (t, e, n, r) {
                              return Object(s.a)(t).pipe(
                                Object(et.a)((t) =>
                                  (function (t, e, n, r, i) {
                                    const s = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                    if (!s || 0 === s.length) return Object(o.a)(!0);
                                    const a = s.map((o) => {
                                      const s = rn(o, e, i);
                                      let a;
                                      if (
                                        (function (t) {
                                          return t && He(t.canDeactivate);
                                        })(s)
                                      )
                                        a = Wt(s.canDeactivate(t, e, n, r));
                                      else {
                                        if (!He(s)) throw new Error('Invalid CanDeactivate guard');
                                        a = Wt(s(t, e, n, r));
                                      }
                                      return a.pipe(tt());
                                    });
                                    return Object(o.a)(a).pipe(an());
                                  })(t.component, t.route, n, e, r)
                                ),
                                tt((t) => !0 !== t, !0)
                              );
                            })(u, r, i, t).pipe(
                              Object(et.a)((n) =>
                                n && 'boolean' == typeof n
                                  ? (function (t, e, n, r) {
                                      return Object(s.a)(e).pipe(
                                        ct((e) =>
                                          Object(s.a)([
                                            cn(e.route.parent, r),
                                            un(e.route, r),
                                            hn(t, e.path, n),
                                            ln(t, e.route, n)
                                          ]).pipe(
                                            I(),
                                            tt((t) => !0 !== t, !0)
                                          )
                                        ),
                                        tt((t) => !0 !== t, !0)
                                      );
                                    })(r, a, t, e)
                                  : Object(o.a)(n)
                              ),
                              Object(E.a)((t) => Object.assign({}, n, { guardsResult: t }))
                            );
                      })
                    );
                  };
                })(this.ngModule.injector, (t) => this.triggerEvent(t)),
                L((t) => {
                  if (Be(t.guardsResult)) {
                    const e = jt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);
                    throw ((e.url = t.guardsResult), e);
                  }
                }),
                L((t) => {
                  const e = new St(
                    t.id,
                    this.serializeUrl(t.extractedUrl),
                    this.serializeUrl(t.urlAfterRedirects),
                    t.targetSnapshot,
                    !!t.guardsResult
                  );
                  this.triggerEvent(e);
                }),
                x((t) => {
                  if (!t.guardsResult) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new bt(t.id, this.serializeUrl(t.extractedUrl), '');
                    return e.next(n), t.resolve(!1), !1;
                  }
                  return !0;
                }),
                Sn((t) => {
                  if (t.guards.canActivateChecks.length)
                    return Object(o.a)(t).pipe(
                      L((t) => {
                        const e = new Et(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(e);
                      }),
                      ((e = this.paramsInheritanceStrategy),
                      (n = this.ngModule.injector),
                      function (t) {
                        return t.pipe(
                          Object(et.a)((t) => {
                            const {
                              targetSnapshot: r,
                              guards: { canActivateChecks: i }
                            } = t;
                            return i.length
                              ? Object(s.a)(i).pipe(
                                  ct((t) =>
                                    (function (t, e, n, r) {
                                      return (function (t, e, n, r) {
                                        const i = Object.keys(t);
                                        if (0 === i.length) return Object(o.a)({});
                                        if (1 === i.length) {
                                          const o = i[0];
                                          return _n(t[o], e, n, r).pipe(Object(E.a)((t) => ({ [o]: t })));
                                        }
                                        const a = {};
                                        return Object(s.a)(i)
                                          .pipe(
                                            Object(et.a)((i) =>
                                              _n(t[i], e, n, r).pipe(Object(E.a)((t) => ((a[i] = t), t)))
                                            )
                                          )
                                          .pipe(
                                            W(),
                                            Object(E.a)(() => a)
                                          );
                                      })(t._resolve, t, e, r).pipe(
                                        Object(E.a)(
                                          (e) => (
                                            (t._resolvedData = e),
                                            (t.data = Object.assign({}, t.data, Se(t, n).resolve)),
                                            null
                                          )
                                        )
                                      );
                                    })(t.route, r, e, n)
                                  ),
                                  (function (t, e) {
                                    return arguments.length >= 2
                                      ? function (n) {
                                          return Object(lt.a)(st(t, e), R(1), H(e))(n);
                                        }
                                      : function (e) {
                                          return Object(lt.a)(
                                            st((e, n, r) => t(e, n, r + 1)),
                                            R(1)
                                          )(e);
                                        };
                                  })((t, e) => t),
                                  Object(E.a)((e) => t)
                                )
                              : Object(o.a)(t);
                          })
                        );
                      }),
                      L((t) => {
                        const e = new Ct(
                          t.id,
                          this.serializeUrl(t.extractedUrl),
                          this.serializeUrl(t.urlAfterRedirects),
                          t.targetSnapshot
                        );
                        this.triggerEvent(e);
                      })
                    );
                  var e, n;
                }),
                Sn((t) => {
                  const {
                    targetSnapshot: e,
                    id: n,
                    extractedUrl: r,
                    rawUrl: i,
                    extras: { skipLocationChange: o, replaceUrl: s }
                  } = t;
                  return this.hooks.afterPreactivation(e, {
                    navigationId: n,
                    appliedUrlTree: r,
                    rawUrlTree: i,
                    skipLocationChange: !!o,
                    replaceUrl: !!s
                  });
                }),
                Object(E.a)((t) => {
                  const e = (function (t, e, n) {
                    const r = (function t(e, n, r) {
                      if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                        const i = r.value;
                        i._futureSnapshot = n.value;
                        const o = (function (e, n, r) {
                          return n.children.map((n) => {
                            for (const i of r.children)
                              if (e.shouldReuseRoute(i.value.snapshot, n.value)) return t(e, n, i);
                            return t(e, n);
                          });
                        })(e, n, r);
                        return new ve(i, o);
                      }
                      {
                        const r = e.retrieve(n.value);
                        if (r) {
                          const t = r.route;
                          return (
                            (function t(e, n) {
                              if (e.value.routeConfig !== n.value.routeConfig)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot created from a different route'
                                );
                              if (e.children.length !== n.children.length)
                                throw new Error(
                                  'Cannot reattach ActivatedRouteSnapshot with a different number of children'
                                );
                              n.value._futureSnapshot = e.value;
                              for (let r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r]);
                            })(n, t),
                            t
                          );
                        }
                        {
                          const r = new _e(
                              new c((i = n.value).url),
                              new c(i.params),
                              new c(i.queryParams),
                              new c(i.fragment),
                              new c(i.data),
                              i.outlet,
                              i.component,
                              i
                            ),
                            o = n.children.map((n) => t(e, n));
                          return new ve(r, o);
                        }
                      }
                      var i;
                    })(t, e._root, n ? n._root : void 0);
                    return new ye(r, e);
                  })(this.routeReuseStrategy, t.targetSnapshot, t.currentRouterState);
                  return Object.assign({}, t, { targetRouterState: e });
                }),
                L((t) => {
                  (this.currentUrlTree = t.urlAfterRedirects),
                    (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, t.rawUrl)),
                    (this.routerState = t.targetRouterState),
                    'deferred' === this.urlUpdateStrategy &&
                      (t.extras.skipLocationChange ||
                        this.setBrowserUrl(this.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state),
                      (this.browserUrlTree = t.urlAfterRedirects));
                }),
                ((a = this.rootContexts),
                (u = this.routeReuseStrategy),
                (l = (t) => this.triggerEvent(t)),
                Object(E.a)((t) => (new Fe(u, t.targetRouterState, t.currentRouterState, l).activate(a), t))),
                L({
                  next() {
                    n = !0;
                  },
                  complete() {
                    n = !0;
                  }
                }),
                ((i = () => {
                  if (!n && !r) {
                    this.resetUrlToCurrentUrlTree();
                    const n = new bt(
                      t.id,
                      this.serializeUrl(t.extractedUrl),
                      `Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`
                    );
                    e.next(n), t.resolve(!1);
                  }
                  this.currentNavigation = null;
                }),
                (t) => t.lift(new dt(i))),
                K((n) => {
                  if (((r = !0), (i = n) && i.ngNavigationCancelingError)) {
                    const r = Be(n.url);
                    r ||
                      ((this.navigated = !0), this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl));
                    const i = new bt(t.id, this.serializeUrl(t.extractedUrl), n.message);
                    e.next(i), t.resolve(!1), r && this.navigateByUrl(n.url);
                  } else {
                    this.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                    const r = new yt(t.id, this.serializeUrl(t.extractedUrl), n);
                    e.next(r);
                    try {
                      t.resolve(this.errorHandler(n));
                    } catch (o) {
                      t.reject(o);
                    }
                  }
                  var i;
                  return _.a;
                })
              );
              var i, a, u, l;
            })
          );
        }
        resetRootComponentType(t) {
          (this.rootComponentType = t), (this.routerState.root.component = this.rootComponentType);
        }
        getTransition() {
          const t = this.transitions.value;
          return (t.urlAfterRedirects = this.browserUrlTree), t;
        }
        setTransition(t) {
          this.transitions.next(Object.assign({}, this.getTransition(), t));
        }
        initialNavigation() {
          this.setUpLocationChangeListener(),
            0 === this.navigationId && this.navigateByUrl(this.location.path(!0), { replaceUrl: !0 });
        }
        setUpLocationChangeListener() {
          this.locationSubscription ||
            (this.locationSubscription = this.location.subscribe((t) => {
              let e = this.parseUrl(t.url);
              const n = 'popstate' === t.type ? 'popstate' : 'hashchange',
                r = t.state && t.state.navigationId ? t.state : null;
              setTimeout(() => {
                this.scheduleNavigation(e, n, r, { replaceUrl: !0 });
              }, 0);
            }));
        }
        get url() {
          return this.serializeUrl(this.currentUrlTree);
        }
        getCurrentNavigation() {
          return this.currentNavigation;
        }
        triggerEvent(t) {
          this.events.next(t);
        }
        resetConfig(t) {
          Ut(t), (this.config = t.map(zt)), (this.navigated = !1), (this.lastSuccessfulId = -1);
        }
        ngOnDestroy() {
          this.dispose();
        }
        dispose() {
          this.locationSubscription && (this.locationSubscription.unsubscribe(), (this.locationSubscription = null));
        }
        createUrlTree(t, e = {}) {
          const {
            relativeTo: n,
            queryParams: r,
            fragment: o,
            preserveQueryParams: s,
            queryParamsHandling: a,
            preserveFragment: u
          } = e;
          Object(i.T)() &&
            s &&
            console &&
            console.warn &&
            console.warn('preserveQueryParams is deprecated, use queryParamsHandling instead.');
          const c = n || this.routerState.root,
            l = u ? this.currentUrlTree.fragment : o;
          let h = null;
          if (a)
            switch (a) {
              case 'merge':
                h = Object.assign({}, this.currentUrlTree.queryParams, r);
                break;
              case 'preserve':
                h = this.currentUrlTree.queryParams;
                break;
              default:
                h = r || null;
            }
          else h = s ? this.currentUrlTree.queryParams : r || null;
          return (
            null !== h && (h = this.removeEmptyProps(h)),
            (function (t, e, n, r, i) {
              if (0 === n.length) return Ae(e.root, e.root, e, r, i);
              const o = (function (t) {
                if ('string' == typeof t[0] && 1 === t.length && '/' === t[0]) return new Ne(!0, 0, t);
                let e = 0,
                  n = !1;
                const r = t.reduce((t, r, i) => {
                  if ('object' == typeof r && null != r) {
                    if (r.outlets) {
                      const e = {};
                      return (
                        qt(r.outlets, (t, n) => {
                          e[n] = 'string' == typeof t ? t.split('/') : t;
                        }),
                        [...t, { outlets: e }]
                      );
                    }
                    if (r.segmentPath) return [...t, r.segmentPath];
                  }
                  return 'string' != typeof r
                    ? [...t, r]
                    : 0 === i
                    ? (r.split('/').forEach((r, i) => {
                        (0 == i && '.' === r) ||
                          (0 == i && '' === r ? (n = !0) : '..' === r ? e++ : '' != r && t.push(r));
                      }),
                      t)
                    : [...t, r];
                }, []);
                return new Ne(n, e, r);
              })(n);
              if (o.toRoot()) return Ae(e.root, new Yt([], {}), e, r, i);
              const s = (function (t, e, n) {
                  if (t.isAbsolute) return new Re(e.root, !0, 0);
                  if (-1 === n.snapshot._lastPathIndex) return new Re(n.snapshot._urlSegment, !0, 0);
                  const r = Oe(t.commands[0]) ? 0 : 1;
                  return (function (t, e, n) {
                    let r = t,
                      i = e,
                      o = n;
                    for (; o > i; ) {
                      if (((o -= i), (r = r.parent), !r)) throw new Error("Invalid number of '../'");
                      i = r.segments.length;
                    }
                    return new Re(r, !1, i - o);
                  })(n.snapshot._urlSegment, n.snapshot._lastPathIndex + r, t.numberOfDoubleDots);
                })(o, e, t),
                a = s.processChildren
                  ? je(s.segmentGroup, s.index, o.commands)
                  : De(s.segmentGroup, s.index, o.commands);
              return Ae(s.segmentGroup, a, e, r, i);
            })(c, this.currentUrlTree, t, h, l)
          );
        }
        navigateByUrl(t, e = { skipLocationChange: !1 }) {
          Object(i.T)() &&
            this.isNgZoneEnabled &&
            !i.x.isInAngularZone() &&
            this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
          const n = Be(t) ? t : this.parseUrl(t),
            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
          return this.scheduleNavigation(r, 'imperative', null, e);
        }
        navigate(t, e = { skipLocationChange: !1 }) {
          return (
            (function (t) {
              for (let e = 0; e < t.length; e++) {
                const n = t[e];
                if (null == n) throw new Error(`The requested path contains ${n} segment at index ${e}`);
              }
            })(t),
            this.navigateByUrl(this.createUrlTree(t, e), e)
          );
        }
        serializeUrl(t) {
          return this.urlSerializer.serialize(t);
        }
        parseUrl(t) {
          let e;
          try {
            e = this.urlSerializer.parse(t);
          } catch (n) {
            e = this.malformedUriErrorHandler(n, this.urlSerializer, t);
          }
          return e;
        }
        isActive(t, e) {
          if (Be(t)) return Gt(this.currentUrlTree, t, e);
          const n = this.parseUrl(t);
          return Gt(this.currentUrlTree, n, e);
        }
        removeEmptyProps(t) {
          return Object.keys(t).reduce((e, n) => {
            const r = t[n];
            return null != r && (e[n] = r), e;
          }, {});
        }
        processNavigations() {
          this.navigations.subscribe(
            (t) => {
              (this.navigated = !0),
                (this.lastSuccessfulId = t.id),
                this.events.next(
                  new vt(t.id, this.serializeUrl(t.extractedUrl), this.serializeUrl(this.currentUrlTree))
                ),
                (this.lastSuccessfulNavigation = this.currentNavigation),
                (this.currentNavigation = null),
                t.resolve(!0);
            },
            (t) => {
              this.console.warn('Unhandled Navigation Error: ');
            }
          );
        }
        scheduleNavigation(t, e, n, r) {
          const i = this.getTransition();
          if (i && 'imperative' !== e && 'imperative' === i.source && i.rawUrl.toString() === t.toString())
            return Promise.resolve(!0);
          if (i && 'hashchange' == e && 'popstate' === i.source && i.rawUrl.toString() === t.toString())
            return Promise.resolve(!0);
          if (i && 'popstate' == e && 'hashchange' === i.source && i.rawUrl.toString() === t.toString())
            return Promise.resolve(!0);
          let o = null,
            s = null;
          const a = new Promise((t, e) => {
              (o = t), (s = e);
            }),
            u = ++this.navigationId;
          return (
            this.setTransition({
              id: u,
              source: e,
              restoredState: n,
              currentUrlTree: this.currentUrlTree,
              currentRawUrl: this.rawUrlTree,
              rawUrl: t,
              extras: r,
              resolve: o,
              reject: s,
              promise: a,
              currentSnapshot: this.routerState.snapshot,
              currentRouterState: this.routerState
            }),
            a.catch((t) => Promise.reject(t))
          );
        }
        setBrowserUrl(t, e, n, r) {
          const i = this.urlSerializer.serialize(t);
          (r = r || {}),
            this.location.isCurrentPathEqualTo(i) || e
              ? this.location.replaceState(i, '', Object.assign({}, r, { navigationId: n }))
              : this.location.go(i, '', Object.assign({}, r, { navigationId: n }));
        }
        resetStateAndUrl(t, e, n) {
          (this.routerState = t),
            (this.currentUrlTree = e),
            (this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n)),
            this.resetUrlToCurrentUrlTree();
        }
        resetUrlToCurrentUrlTree() {
          this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), '', {
            navigationId: this.lastSuccessfulId
          });
        }
      }
      class Pn {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new Dn()),
            (this.attachRef = null);
        }
      }
      class Dn {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(t, e) {
          const n = this.getOrCreateContext(t);
          (n.outlet = e), this.contexts.set(t, n);
        }
        onChildOutletDestroyed(t) {
          const e = this.getContext(t);
          e && (e.outlet = null);
        }
        onOutletDeactivated() {
          const t = this.contexts;
          return (this.contexts = new Map()), t;
        }
        onOutletReAttached(t) {
          this.contexts = t;
        }
        getOrCreateContext(t) {
          let e = this.getContext(t);
          return e || ((e = new Pn()), this.contexts.set(t, e)), e;
        }
        getContext(t) {
          return this.contexts.get(t) || null;
        }
      }
      class jn {
        constructor(t, e, n, r, o) {
          (this.parentContexts = t),
            (this.location = e),
            (this.resolver = n),
            (this.changeDetector = o),
            (this.activated = null),
            (this._activatedRoute = null),
            (this.activateEvents = new i.m()),
            (this.deactivateEvents = new i.m()),
            (this.name = r || 'primary'),
            t.onChildOutletCreated(this.name, this);
        }
        ngOnDestroy() {
          this.parentContexts.onChildOutletDestroyed(this.name);
        }
        ngOnInit() {
          if (!this.activated) {
            const t = this.parentContexts.getContext(this.name);
            t &&
              t.route &&
              (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null));
          }
        }
        get isActivated() {
          return !!this.activated;
        }
        get component() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this.activated.instance;
        }
        get activatedRoute() {
          if (!this.activated) throw new Error('Outlet is not activated');
          return this._activatedRoute;
        }
        get activatedRouteData() {
          return this._activatedRoute ? this._activatedRoute.snapshot.data : {};
        }
        detach() {
          if (!this.activated) throw new Error('Outlet is not activated');
          this.location.detach();
          const t = this.activated;
          return (this.activated = null), (this._activatedRoute = null), t;
        }
        attach(t, e) {
          (this.activated = t), (this._activatedRoute = e), this.location.insert(t.hostView);
        }
        deactivate() {
          if (this.activated) {
            const t = this.component;
            this.activated.destroy(),
              (this.activated = null),
              (this._activatedRoute = null),
              this.deactivateEvents.emit(t);
          }
        }
        activateWith(t, e) {
          if (this.isActivated) throw new Error('Cannot activate an already activated outlet');
          this._activatedRoute = t;
          const n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
            r = this.parentContexts.getOrCreateContext(this.name).children,
            i = new Mn(t, r, this.location.injector);
          (this.activated = this.location.createComponent(n, this.location.length, i)),
            this.changeDetector.markForCheck(),
            this.activateEvents.emit(this.activated.instance);
        }
      }
      class Mn {
        constructor(t, e, n) {
          (this.route = t), (this.childContexts = e), (this.parent = n);
        }
        get(t, e) {
          return t === _e ? this.route : t === Dn ? this.childContexts : this.parent.get(t, e);
        }
      }
      class Ln {}
      class Un {
        preload(t, e) {
          return e().pipe(K(() => Object(o.a)(null)));
        }
      }
      class Vn {
        preload(t, e) {
          return Object(o.a)(null);
        }
      }
      class Fn {
        constructor(t, e, n, r, i) {
          (this.router = t),
            (this.injector = r),
            (this.preloadingStrategy = i),
            (this.loader = new Tn(
              e,
              n,
              (e) => t.triggerEvent(new It(e)),
              (e) => t.triggerEvent(new Tt(e))
            ));
        }
        setUpPreloading() {
          this.subscription = this.router.events
            .pipe(
              x((t) => t instanceof vt),
              ct(() => this.preload())
            )
            .subscribe(() => {});
        }
        preload() {
          const t = this.injector.get(i.v);
          return this.processRoutes(t, this.router.config);
        }
        ngOnDestroy() {
          this.subscription.unsubscribe();
        }
        processRoutes(t, e) {
          const n = [];
          for (const r of e)
            if (r.loadChildren && !r.canLoad && r._loadedConfig) {
              const t = r._loadedConfig;
              n.push(this.processRoutes(t.module, t.routes));
            } else
              r.loadChildren && !r.canLoad
                ? n.push(this.preloadConfig(t, r))
                : r.children && n.push(this.processRoutes(t, r.children));
          return Object(s.a)(n).pipe(
            Object(C.a)(),
            Object(E.a)((t) => {})
          );
        }
        preloadConfig(t, e) {
          return this.preloadingStrategy.preload(e, () =>
            this.loader
              .load(t.injector, e)
              .pipe(Object(et.a)((t) => ((e._loadedConfig = t), this.processRoutes(t.module, t.routes))))
          );
        }
      }
      class zn {
        constructor(t, e, n = {}) {
          (this.router = t),
            (this.viewportScroller = e),
            (this.options = n),
            (this.lastId = 0),
            (this.lastSource = 'imperative'),
            (this.restoredId = 0),
            (this.store = {}),
            (n.scrollPositionRestoration = n.scrollPositionRestoration || 'disabled'),
            (n.anchorScrolling = n.anchorScrolling || 'disabled');
        }
        init() {
          'disabled' !== this.options.scrollPositionRestoration &&
            this.viewportScroller.setHistoryScrollRestoration('manual'),
            (this.routerEventsSubscription = this.createScrollEvents()),
            (this.scrollEventsSubscription = this.consumeScrollEvents());
        }
        createScrollEvents() {
          return this.router.events.subscribe((t) => {
            t instanceof mt
              ? ((this.store[this.lastId] = this.viewportScroller.getScrollPosition()),
                (this.lastSource = t.navigationTrigger),
                (this.restoredId = t.restoredState ? t.restoredState.navigationId : 0))
              : t instanceof vt &&
                ((this.lastId = t.id), this.scheduleScrollEvent(t, this.router.parseUrl(t.urlAfterRedirects).fragment));
          });
        }
        consumeScrollEvents() {
          return this.router.events.subscribe((t) => {
            t instanceof Nt &&
              (t.position
                ? 'top' === this.options.scrollPositionRestoration
                  ? this.viewportScroller.scrollToPosition([0, 0])
                  : 'enabled' === this.options.scrollPositionRestoration &&
                    this.viewportScroller.scrollToPosition(t.position)
                : t.anchor && 'enabled' === this.options.anchorScrolling
                ? this.viewportScroller.scrollToAnchor(t.anchor)
                : 'disabled' !== this.options.scrollPositionRestoration &&
                  this.viewportScroller.scrollToPosition([0, 0]));
          });
        }
        scheduleScrollEvent(t, e) {
          this.router.triggerEvent(new Nt(t, 'popstate' === this.lastSource ? this.store[this.restoredId] : null, e));
        }
        ngOnDestroy() {
          this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(),
            this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe();
        }
      }
      const Hn = new i.o('ROUTER_CONFIGURATION'),
        Bn = new i.o('ROUTER_FORROOT_GUARD'),
        $n = [
          r.f,
          { provide: Qt, useClass: te },
          {
            provide: Rn,
            useFactory: Zn,
            deps: [i.g, Qt, Dn, r.f, i.p, i.u, i.i, In, Hn, [xn, new i.y()], [En, new i.y()]]
          },
          Dn,
          { provide: _e, useFactory: Xn, deps: [Rn] },
          { provide: i.u, useClass: i.H },
          Fn,
          Vn,
          Un,
          { provide: Hn, useValue: { enableTracing: !1 } }
        ];
      function qn() {
        return new i.w('Router', Rn);
      }
      class Wn {
        constructor(t, e) {}
        static forRoot(t, e) {
          return {
            ngModule: Wn,
            providers: [
              $n,
              Jn(t),
              { provide: Bn, useFactory: Yn, deps: [[Rn, new i.y(), new i.G()]] },
              { provide: Hn, useValue: e || {} },
              { provide: r.g, useFactory: Kn, deps: [r.n, [new i.n(r.a), new i.y()], Hn] },
              { provide: zn, useFactory: Gn, deps: [Rn, r.o, Hn] },
              { provide: Ln, useExisting: e && e.preloadingStrategy ? e.preloadingStrategy : Vn },
              { provide: i.w, multi: !0, useFactory: qn },
              [
                Qn,
                { provide: i.d, multi: !0, useFactory: tr, deps: [Qn] },
                { provide: nr, useFactory: er, deps: [Qn] },
                { provide: i.b, multi: !0, useExisting: nr }
              ]
            ]
          };
        }
        static forChild(t) {
          return { ngModule: Wn, providers: [Jn(t)] };
        }
      }
      function Gn(t, e, n) {
        return n.scrollOffset && e.setOffset(n.scrollOffset), new zn(t, e, n);
      }
      function Kn(t, e, n = {}) {
        return n.useHash ? new r.d(t, e) : new r.m(t, e);
      }
      function Yn(t) {
        if (t)
          throw new Error(
            'RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.'
          );
        return 'guarded';
      }
      function Jn(t) {
        return [
          { provide: i.a, multi: !0, useValue: t },
          { provide: In, multi: !0, useValue: t }
        ];
      }
      function Zn(t, e, n, r, i, o, s, a, u = {}, c, l) {
        const h = new Rn(null, e, n, r, i, o, s, Bt(a));
        if (
          (c && (h.urlHandlingStrategy = c),
          l && (h.routeReuseStrategy = l),
          u.errorHandler && (h.errorHandler = u.errorHandler),
          u.malformedUriErrorHandler && (h.malformedUriErrorHandler = u.malformedUriErrorHandler),
          u.enableTracing)
        ) {
          const t = Object(pt.r)();
          h.events.subscribe((e) => {
            t.logGroup(`Router Event: ${e.constructor.name}`), t.log(e.toString()), t.log(e), t.logGroupEnd();
          });
        }
        return (
          u.onSameUrlNavigation && (h.onSameUrlNavigation = u.onSameUrlNavigation),
          u.paramsInheritanceStrategy && (h.paramsInheritanceStrategy = u.paramsInheritanceStrategy),
          u.urlUpdateStrategy && (h.urlUpdateStrategy = u.urlUpdateStrategy),
          u.relativeLinkResolution && (h.relativeLinkResolution = u.relativeLinkResolution),
          h
        );
      }
      function Xn(t) {
        return t.routerState.root;
      }
      class Qn {
        constructor(t) {
          (this.injector = t), (this.initNavigation = !1), (this.resultOfPreactivationDone = new a.a());
        }
        appInitializer() {
          return this.injector.get(r.e, Promise.resolve(null)).then(() => {
            let t = null;
            const e = new Promise((e) => (t = e)),
              n = this.injector.get(Rn),
              r = this.injector.get(Hn);
            if (this.isLegacyDisabled(r) || this.isLegacyEnabled(r)) t(!0);
            else if ('disabled' === r.initialNavigation) n.setUpLocationChangeListener(), t(!0);
            else {
              if ('enabled' !== r.initialNavigation)
                throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);
              (n.hooks.afterPreactivation = () =>
                this.initNavigation
                  ? Object(o.a)(null)
                  : ((this.initNavigation = !0), t(!0), this.resultOfPreactivationDone)),
                n.initialNavigation();
            }
            return e;
          });
        }
        bootstrapListener(t) {
          const e = this.injector.get(Hn),
            n = this.injector.get(Fn),
            r = this.injector.get(zn),
            o = this.injector.get(Rn),
            s = this.injector.get(i.g);
          t === s.components[0] &&
            (this.isLegacyEnabled(e)
              ? o.initialNavigation()
              : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(),
            n.setUpPreloading(),
            r.init(),
            o.resetRootComponentType(s.componentTypes[0]),
            this.resultOfPreactivationDone.next(null),
            this.resultOfPreactivationDone.complete());
        }
        isLegacyEnabled(t) {
          return (
            'legacy_enabled' === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
          );
        }
        isLegacyDisabled(t) {
          return 'legacy_disabled' === t.initialNavigation || !1 === t.initialNavigation;
        }
      }
      function tr(t) {
        return t.appInitializer.bind(t);
      }
      function er(t) {
        return t.bootstrapListener.bind(t);
      }
      const nr = new i.o('Router Initializer');
    },
    irV9: function (t, e, n) {
      'use strict';
      var r = n('HDdC'),
        i = n('Cfvw'),
        o = n('LRne'),
        s = n('eIep'),
        a = (n('8Y7J'), n('SVse')),
        u = n('quSY');
      class c extends u.a {
        constructor(t, e) {
          super();
        }
        schedule(t, e = 0) {
          return this;
        }
      }
      class l extends c {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e), (this.pending = !1);
        }
        schedule(t, e = 0) {
          if (this.closed) return this;
          this.state = t;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, e)),
            (this.pending = !0),
            (this.delay = e),
            (this.id = this.id || this.requestAsyncId(r, this.id, e)),
            this
          );
        }
        requestAsyncId(t, e, n = 0) {
          return setInterval(t.flush.bind(t, this), n);
        }
        recycleAsyncId(t, e, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return e;
          clearInterval(e);
        }
        execute(t, e) {
          if (this.closed) return new Error('executing a cancelled action');
          this.pending = !1;
          const n = this._execute(t, e);
          if (n) return n;
          !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(t, e) {
          let n = !1,
            r = void 0;
          try {
            this.work(t);
          } catch (i) {
            (n = !0), (r = (!!i && i) || new Error(i));
          }
          if (n) return this.unsubscribe(), r;
        }
        _unsubscribe() {
          const t = this.id,
            e = this.scheduler,
            n = e.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != t && (this.id = this.recycleAsyncId(e, t, null)),
            (this.delay = null);
        }
      }
      class h extends l {
        constructor(t, e) {
          super(t, e), (this.scheduler = t), (this.work = e);
        }
        schedule(t, e = 0) {
          return e > 0 ? super.schedule(t, e) : ((this.delay = e), (this.state = t), this.scheduler.flush(this), this);
        }
        execute(t, e) {
          return e > 0 || this.closed ? super.execute(t, e) : this._execute(t, e);
        }
        requestAsyncId(t, e, n = 0) {
          return (null !== n && n > 0) || (null === n && this.delay > 0)
            ? super.requestAsyncId(t, e, n)
            : t.flush(this);
        }
      }
      let d = (() => {
        class t {
          constructor(e, n = t.now) {
            (this.SchedulerAction = e), (this.now = n);
          }
          schedule(t, e = 0, n) {
            return new this.SchedulerAction(this, t).schedule(n, e);
          }
        }
        return (t.now = () => Date.now()), t;
      })();
      class f extends d {
        constructor(t, e = d.now) {
          super(t, () => (f.delegate && f.delegate !== this ? f.delegate.now() : e())),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(t, e = 0, n) {
          return f.delegate && f.delegate !== this ? f.delegate.schedule(t, e, n) : super.schedule(t, e, n);
        }
        flush(t) {
          const { actions: e } = this;
          if (this.active) return void e.push(t);
          let n;
          this.active = !0;
          do {
            if ((n = t.execute(t.state, t.delay))) break;
          } while ((t = e.shift()));
          if (((this.active = !1), n)) {
            for (; (t = e.shift()); ) t.unsubscribe();
            throw n;
          }
        }
      }
      class p extends f {}
      const g = new p(h);
      class m {
        constructor(t, e) {
          (this.zone = t), (this.platformId = e);
        }
        schedule(...t) {
          return this.zone.runGuarded(function () {
            return g.schedule.apply(g, t);
          });
        }
        keepUnstableUntilFirst(t) {
          return Object(a.p)(this.platformId)
            ? new r.a((e) => {
                const n = () => {},
                  r = Zone.current.scheduleMacroTask('firebaseZoneBlock', n, {}, n, n);
                t.subscribe(
                  (t) => {
                    'scheduled' === r.state && r.invoke(), e.next(t);
                  },
                  (t) => {
                    'scheduled' === r.state && r.invoke(), e.error(t);
                  },
                  () => {
                    'scheduled' === r.state && r.invoke(), e.complete();
                  }
                );
              })
            : t;
        }
        runOutsideAngular(t) {
          return new r.a((e) =>
            this.zone.runOutsideAngular(() =>
              t.subscribe(
                (t) => this.zone.run(() => e.next(t)),
                (t) => this.zone.run(() => e.error(t)),
                () => this.zone.run(() => e.complete())
              )
            )
          );
        }
      }
      var v = n('yA/v');
      n.d(e, 'a', function () {
        return b;
      });
      let b = class {
        constructor(t, e, n, a) {
          this.zone = a;
          const u = new m(a, n);
          (this.auth = a.runOutsideAngular(() => Object(v.e)(t, e).auth())),
            (this.authState = u.keepUnstableUntilFirst(
              u.runOutsideAngular(new r.a((t) => ({ unsubscribe: this.auth.onAuthStateChanged(t) })))
            )),
            (this.user = u.keepUnstableUntilFirst(
              u.runOutsideAngular(new r.a((t) => ({ unsubscribe: this.auth.onIdTokenChanged(t) })))
            )),
            (this.idToken = this.user.pipe(Object(s.a)((t) => (t ? Object(i.a)(t.getIdToken()) : Object(o.a)(null))))),
            (this.idTokenResult = this.user.pipe(
              Object(s.a)((t) => (t ? Object(i.a)(t.getIdTokenResult()) : Object(o.a)(null)))
            ));
        }
      };
    },
    kBGf: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      class r {
        constructor() {}
        ngOnInit() {}
      }
    },
    kJWO: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = ('function' == typeof Symbol && Symbol.observable) || '@@observable';
    },
    l7GE: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('7o/Q');
      class i extends r.a {
        notifyNext(t, e, n, r, i) {
          this.destination.next(e);
        }
        notifyError(t, e) {
          this.destination.error(t);
        }
        notifyComplete(t) {
          this.destination.complete();
        }
      }
    },
    lJxs: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('7o/Q');
      function i(t, e) {
        return function (n) {
          if ('function' != typeof t) throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
          return n.lift(new o(t, e));
        };
      }
      class o {
        constructor(t, e) {
          (this.project = t), (this.thisArg = e);
        }
        call(t, e) {
          return e.subscribe(new s(t, this.project, this.thisArg));
        }
      }
      class s extends r.a {
        constructor(t, e, n) {
          super(t), (this.project = e), (this.count = 0), (this.thisArg = n || this);
        }
        _next(t) {
          let e;
          try {
            e = this.project.call(this.thisArg, t, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
    },
    mCNh: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      }),
        n.d(e, 'b', function () {
          return o;
        });
      var r = n('KqfI');
      function i(...t) {
        return o(t);
      }
      function o(t) {
        return t
          ? 1 === t.length
            ? t[0]
            : function (e) {
                return t.reduce((t, e) => e(t), e);
              }
          : r.a;
      }
    },
    mrSG: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, '__extends', function () {
          return i;
        }),
        n.d(e, '__assign', function () {
          return o;
        }),
        n.d(e, '__rest', function () {
          return s;
        }),
        n.d(e, '__decorate', function () {
          return a;
        }),
        n.d(e, '__param', function () {
          return u;
        }),
        n.d(e, '__metadata', function () {
          return c;
        }),
        n.d(e, '__awaiter', function () {
          return l;
        }),
        n.d(e, '__generator', function () {
          return h;
        }),
        n.d(e, '__exportStar', function () {
          return d;
        }),
        n.d(e, '__values', function () {
          return f;
        }),
        n.d(e, '__read', function () {
          return p;
        }),
        n.d(e, '__spread', function () {
          return g;
        }),
        n.d(e, '__spreadArrays', function () {
          return m;
        }),
        n.d(e, '__await', function () {
          return v;
        }),
        n.d(e, '__asyncGenerator', function () {
          return b;
        }),
        n.d(e, '__asyncDelegator', function () {
          return y;
        }),
        n.d(e, '__asyncValues', function () {
          return w;
        }),
        n.d(e, '__makeTemplateObject', function () {
          return _;
        }),
        n.d(e, '__importStar', function () {
          return S;
        }),
        n.d(e, '__importDefault', function () {
          return E;
        }),
        n.d(e, '__classPrivateFieldGet', function () {
          return C;
        }),
        n.d(e, '__classPrivateFieldSet', function () {
          return I;
        });
      var r = function (t, e) {
        return (r =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, e) {
              t.__proto__ = e;
            }) ||
          function (t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
          })(t, e);
      };
      function i(t, e) {
        function n() {
          this.constructor = t;
        }
        r(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
      }
      var o = function () {
        return (o =
          Object.assign ||
          function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++)
              for (var i in (e = arguments[n])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function s(t, e) {
        var n = {};
        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
        if (null != t && 'function' == typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (r = Object.getOwnPropertySymbols(t); i < r.length; i++)
            e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
        }
        return n;
      }
      function a(t, e, n, r) {
        var i,
          o = arguments.length,
          s = o < 3 ? e : null === r ? (r = Object.getOwnPropertyDescriptor(e, n)) : r;
        if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, r);
        else
          for (var a = t.length - 1; a >= 0; a--)
            (i = t[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(e, n, s) : i(e, n)) || s);
        return o > 3 && s && Object.defineProperty(e, n, s), s;
      }
      function u(t, e) {
        return function (n, r) {
          e(n, r, t);
        };
      }
      function c(t, e) {
        if ('object' == typeof Reflect && 'function' == typeof Reflect.metadata) return Reflect.metadata(t, e);
      }
      function l(t, e, n, r) {
        return new (n || (n = Promise))(function (i, o) {
          function s(t) {
            try {
              u(r.next(t));
            } catch (e) {
              o(e);
            }
          }
          function a(t) {
            try {
              u(r.throw(t));
            } catch (e) {
              o(e);
            }
          }
          function u(t) {
            var e;
            t.done
              ? i(t.value)
              : ((e = t.value),
                e instanceof n
                  ? e
                  : new n(function (t) {
                      t(e);
                    })).then(s, a);
          }
          u((r = r.apply(t, e || [])).next());
        });
      }
      function h(t, e) {
        var n,
          r,
          i,
          o,
          s = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: []
          };
        return (
          (o = { next: a(0), throw: a(1), return: a(2) }),
          'function' == typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function a(o) {
          return function (a) {
            return (function (o) {
              if (n) throw new TypeError('Generator is already executing.');
              for (; s; )
                try {
                  if (
                    ((n = 1),
                    r &&
                      (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) &&
                      !(i = i.call(r, o[1])).done)
                  )
                    return i;
                  switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                    case 0:
                    case 1:
                      i = o;
                      break;
                    case 4:
                      return s.label++, { value: o[1], done: !1 };
                    case 5:
                      s.label++, (r = o[1]), (o = [0]);
                      continue;
                    case 7:
                      (o = s.ops.pop()), s.trys.pop();
                      continue;
                    default:
                      if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                        s = 0;
                        continue;
                      }
                      if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                        s.label = o[1];
                        break;
                      }
                      if (6 === o[0] && s.label < i[1]) {
                        (s.label = i[1]), (i = o);
                        break;
                      }
                      if (i && s.label < i[2]) {
                        (s.label = i[2]), s.ops.push(o);
                        break;
                      }
                      i[2] && s.ops.pop(), s.trys.pop();
                      continue;
                  }
                  o = e.call(t, s);
                } catch (a) {
                  (o = [6, a]), (r = 0);
                } finally {
                  n = i = 0;
                }
              if (5 & o[0]) throw o[1];
              return { value: o[0] ? o[1] : void 0, done: !0 };
            })([o, a]);
          };
        }
      }
      function d(t, e) {
        for (var n in t) e.hasOwnProperty(n) || (e[n] = t[n]);
      }
      function f(t) {
        var e = 'function' == typeof Symbol && Symbol.iterator,
          n = e && t[e],
          r = 0;
        if (n) return n.call(t);
        if (t && 'number' == typeof t.length)
          return {
            next: function () {
              return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
            }
          };
        throw new TypeError(e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
      }
      function p(t, e) {
        var n = 'function' == typeof Symbol && t[Symbol.iterator];
        if (!n) return t;
        var r,
          i,
          o = n.call(t),
          s = [];
        try {
          for (; (void 0 === e || e-- > 0) && !(r = o.next()).done; ) s.push(r.value);
        } catch (a) {
          i = { error: a };
        } finally {
          try {
            r && !r.done && (n = o.return) && n.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return s;
      }
      function g() {
        for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
        return t;
      }
      function m() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
        return r;
      }
      function v(t) {
        return this instanceof v ? ((this.v = t), this) : new v(t);
      }
      function b(t, e, n) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var r,
          i = n.apply(t, e || []),
          o = [];
        return (
          (r = {}),
          s('next'),
          s('throw'),
          s('return'),
          (r[Symbol.asyncIterator] = function () {
            return this;
          }),
          r
        );
        function s(t) {
          i[t] &&
            (r[t] = function (e) {
              return new Promise(function (n, r) {
                o.push([t, e, n, r]) > 1 || a(t, e);
              });
            });
        }
        function a(t, e) {
          try {
            (n = i[t](e)).value instanceof v ? Promise.resolve(n.value.v).then(u, c) : l(o[0][2], n);
          } catch (r) {
            l(o[0][3], r);
          }
          var n;
        }
        function u(t) {
          a('next', t);
        }
        function c(t) {
          a('throw', t);
        }
        function l(t, e) {
          t(e), o.shift(), o.length && a(o[0][0], o[0][1]);
        }
      }
      function y(t) {
        var e, n;
        return (
          (e = {}),
          r('next'),
          r('throw', function (t) {
            throw t;
          }),
          r('return'),
          (e[Symbol.iterator] = function () {
            return this;
          }),
          e
        );
        function r(r, i) {
          e[r] = t[r]
            ? function (e) {
                return (n = !n) ? { value: v(t[r](e)), done: 'return' === r } : i ? i(e) : e;
              }
            : i;
        }
      }
      function w(t) {
        if (!Symbol.asyncIterator) throw new TypeError('Symbol.asyncIterator is not defined.');
        var e,
          n = t[Symbol.asyncIterator];
        return n
          ? n.call(t)
          : ((t = f(t)),
            (e = {}),
            r('next'),
            r('throw'),
            r('return'),
            (e[Symbol.asyncIterator] = function () {
              return this;
            }),
            e);
        function r(n) {
          e[n] =
            t[n] &&
            function (e) {
              return new Promise(function (r, i) {
                !(function (t, e, n, r) {
                  Promise.resolve(r).then(function (e) {
                    t({ value: e, done: n });
                  }, e);
                })(r, i, (e = t[n](e)).done, e.value);
              });
            };
        }
      }
      function _(t, e) {
        return Object.defineProperty ? Object.defineProperty(t, 'raw', { value: e }) : (t.raw = e), t;
      }
      function S(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t) for (var n in t) Object.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        return (e.default = t), e;
      }
      function E(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function C(t, e) {
        if (!e.has(t)) throw new TypeError('attempted to get private field on non-instance');
        return e.get(t);
      }
      function I(t, e, n) {
        if (!e.has(t)) throw new TypeError('attempted to set private field on non-instance');
        return e.set(t, n), n;
      }
    },
    n6bG: function (t, e, n) {
      'use strict';
      function r(t) {
        return 'function' == typeof t;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    ngJS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return r;
      });
      const r = (t) => (e) => {
        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
        e.closed || e.complete();
      };
    },
    pLzU: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return i;
      });
      var r = n('Lhse');
      const i = (t) => (e) => {
        const n = t[r.a]();
        for (;;) {
          const t = n.next();
          if (t.done) {
            e.complete();
            break;
          }
          if ((e.next(t.value), e.closed)) break;
        }
        return (
          'function' == typeof n.return &&
            e.add(() => {
              n.return && n.return();
            }),
          e
        );
      };
    },
    pMnS: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return u;
      });
      var r = n('8Y7J'),
        i = n('iInd'),
        o = r.nb({ encapsulation: 2, styles: [], data: {} });
      function s(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            r.ob(1, 212992, null, 0, i.m, [i.b, r.M, r.j, [8, null], r.h], null, null)
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function a(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 1, 'ng-component', [], null, null, null, s, o)),
            r.ob(1, 49152, null, 0, i.A, [], null, null)
          ],
          null,
          null
        );
      }
      var u = r.lb('ng-component', i.A, a, {}, {}, []);
    },
    'q/0M': function (t, e, n) {
      'use strict';
      function r() {
        for (var t = 0, e = 0, n = arguments.length; e < n; e++) t += arguments[e].length;
        var r = Array(t),
          i = 0;
        for (e = 0; e < n; e++) for (var o = arguments[e], s = 0, a = o.length; s < a; s++, i++) r[i] = o[s];
        return r;
      }
      var i;
      n.r(e),
        n.d(e, 'LogLevel', function () {
          return s;
        }),
        n.d(e, 'Logger', function () {
          return h;
        }),
        n.d(e, 'setLogLevel', function () {
          return d;
        }),
        n.d(e, 'setUserLogHandler', function () {
          return f;
        });
      var o = [],
        s = (function (t) {
          return (
            (t[(t.DEBUG = 0)] = 'DEBUG'),
            (t[(t.VERBOSE = 1)] = 'VERBOSE'),
            (t[(t.INFO = 2)] = 'INFO'),
            (t[(t.WARN = 3)] = 'WARN'),
            (t[(t.ERROR = 4)] = 'ERROR'),
            (t[(t.SILENT = 5)] = 'SILENT'),
            t
          );
        })({}),
        a = { debug: s.DEBUG, verbose: s.VERBOSE, info: s.INFO, warn: s.WARN, error: s.ERROR, silent: s.SILENT },
        u = s.INFO,
        c =
          (((i = {})[s.DEBUG] = 'log'),
          (i[s.VERBOSE] = 'log'),
          (i[s.INFO] = 'info'),
          (i[s.WARN] = 'warn'),
          (i[s.ERROR] = 'error'),
          i),
        l = function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
          if (!(e < t.logLevel)) {
            var o = new Date().toISOString(),
              s = c[e];
            if (!s) throw new Error('Attempted to log a message with an invalid logType (value: ' + e + ')');
            console[s].apply(console, r(['[' + o + ']  ' + t.name + ':'], n));
          }
        },
        h = (function () {
          function t(t) {
            (this.name = t), (this._logLevel = u), (this._logHandler = l), (this._userLogHandler = null), o.push(this);
          }
          return (
            Object.defineProperty(t.prototype, 'logLevel', {
              get: function () {
                return this._logLevel;
              },
              set: function (t) {
                if (!(t in s)) throw new TypeError('Invalid value assigned to `logLevel`');
                this._logLevel = t;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'logHandler', {
              get: function () {
                return this._logHandler;
              },
              set: function (t) {
                if ('function' != typeof t) throw new TypeError('Value assigned to `logHandler` must be a function');
                this._logHandler = t;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'userLogHandler', {
              get: function () {
                return this._userLogHandler;
              },
              set: function (t) {
                this._userLogHandler = t;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.debug = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              this._userLogHandler && this._userLogHandler.apply(this, r([this, s.DEBUG], t)),
                this._logHandler.apply(this, r([this, s.DEBUG], t));
            }),
            (t.prototype.log = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              this._userLogHandler && this._userLogHandler.apply(this, r([this, s.VERBOSE], t)),
                this._logHandler.apply(this, r([this, s.VERBOSE], t));
            }),
            (t.prototype.info = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              this._userLogHandler && this._userLogHandler.apply(this, r([this, s.INFO], t)),
                this._logHandler.apply(this, r([this, s.INFO], t));
            }),
            (t.prototype.warn = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              this._userLogHandler && this._userLogHandler.apply(this, r([this, s.WARN], t)),
                this._logHandler.apply(this, r([this, s.WARN], t));
            }),
            (t.prototype.error = function () {
              for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
              this._userLogHandler && this._userLogHandler.apply(this, r([this, s.ERROR], t)),
                this._logHandler.apply(this, r([this, s.ERROR], t));
            }),
            t
          );
        })();
      function d(t) {
        var e = 'string' == typeof t ? a[t] : t;
        o.forEach(function (t) {
          t.logLevel = e;
        });
      }
      function f(t, e) {
        for (
          var n = function (n) {
              var r = null;
              e && e.level && (r = a[e.level]),
                (n.userLogHandler =
                  null === t
                    ? null
                    : function (e, n) {
                        for (var i = [], o = 2; o < arguments.length; o++) i[o - 2] = arguments[o];
                        var a = i
                          .map(function (t) {
                            if (null == t) return null;
                            if ('string' == typeof t) return t;
                            if ('number' == typeof t || 'boolean' == typeof t) return t.toString();
                            if (t instanceof Error) return t.message;
                            try {
                              return JSON.stringify(t);
                            } catch (e) {
                              return null;
                            }
                          })
                          .filter(function (t) {
                            return t;
                          })
                          .join(' ');
                        n >= (null != r ? r : e.logLevel) &&
                          t({ level: s[n].toLowerCase(), message: a, args: i, type: e.name });
                      });
            },
            r = 0,
            i = o;
          r < i.length;
          r++
        )
          n(i[r]);
      }
    },
    quSY: function (t, e, n) {
      'use strict';
      var r = n('DH7j'),
        i = n('XoHu'),
        o = n('n6bG');
      function s(t) {
        return (
          Error.call(this),
          (this.message = t
            ? `${t.length} errors occurred during unsubscription:\n${t
                .map((t, e) => `${e + 1}) ${t.toString()}`)
                .join('\n  ')}`
            : ''),
          (this.name = 'UnsubscriptionError'),
          (this.errors = t),
          this
        );
      }
      s.prototype = Object.create(Error.prototype);
      const a = s;
      n.d(e, 'a', function () {
        return u;
      });
      let u = (() => {
        class t {
          constructor(t) {
            (this.closed = !1),
              (this._parent = null),
              (this._parents = null),
              (this._subscriptions = null),
              t && (this._unsubscribe = t);
          }
          unsubscribe() {
            let t,
              e = !1;
            if (this.closed) return;
            let { _parent: n, _parents: s, _unsubscribe: u, _subscriptions: l } = this;
            (this.closed = !0), (this._parent = null), (this._parents = null), (this._subscriptions = null);
            let h = -1,
              d = s ? s.length : 0;
            for (; n; ) n.remove(this), (n = (++h < d && s[h]) || null);
            if (Object(o.a)(u))
              try {
                u.call(this);
              } catch (f) {
                (e = !0), (t = f instanceof a ? c(f.errors) : [f]);
              }
            if (Object(r.a)(l))
              for (h = -1, d = l.length; ++h < d; ) {
                const n = l[h];
                if (Object(i.a)(n))
                  try {
                    n.unsubscribe();
                  } catch (f) {
                    (e = !0), (t = t || []), f instanceof a ? (t = t.concat(c(f.errors))) : t.push(f);
                  }
              }
            if (e) throw new a(t);
          }
          add(e) {
            let n = e;
            switch (typeof e) {
              case 'function':
                n = new t(e);
              case 'object':
                if (n === this || n.closed || 'function' != typeof n.unsubscribe) return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof t)) {
                  const e = n;
                  (n = new t()), (n._subscriptions = [e]);
                }
                break;
              default:
                if (!e) return t.EMPTY;
                throw new Error('unrecognized teardown ' + e + ' added to Subscription.');
            }
            if (n._addParent(this)) {
              const t = this._subscriptions;
              t ? t.push(n) : (this._subscriptions = [n]);
            }
            return n;
          }
          remove(t) {
            const e = this._subscriptions;
            if (e) {
              const n = e.indexOf(t);
              -1 !== n && e.splice(n, 1);
            }
          }
          _addParent(t) {
            let { _parent: e, _parents: n } = this;
            return (
              e !== t &&
              (e
                ? n
                  ? -1 === n.indexOf(t) && (n.push(t), !0)
                  : ((this._parents = [t]), !0)
                : ((this._parent = t), !0))
            );
          }
        }
        var e;
        return (t.EMPTY = (((e = new t()).closed = !0), e)), t;
      })();
      function c(t) {
        return t.reduce((t, e) => t.concat(e instanceof a ? e.errors : e), []);
      }
    },
    wj3C: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r,
        i,
        o = n('mrSG'),
        s = n('zVF4'),
        a = n('S+S0'),
        u = n('q/0M'),
        c =
          (((r = {})['no-app'] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),
          (r['bad-app-name'] = "Illegal App name: '{$appName}"),
          (r['duplicate-app'] = "Firebase App named '{$appName}' already exists"),
          (r['app-deleted'] = "Firebase App named '{$appName}' already deleted"),
          (r['invalid-app-argument'] = 'firebase.{$appName}() takes either no argument or a Firebase App instance.'),
          (r['invalid-log-argument'] = 'First argument to `onLog` must be null or a function.'),
          r),
        l = new s.ErrorFactory('app', 'Firebase', c),
        h =
          (((i = {})['@firebase/app'] = 'fire-core'),
          (i['@firebase/analytics'] = 'fire-analytics'),
          (i['@firebase/auth'] = 'fire-auth'),
          (i['@firebase/database'] = 'fire-rtdb'),
          (i['@firebase/functions'] = 'fire-fn'),
          (i['@firebase/installations'] = 'fire-iid'),
          (i['@firebase/messaging'] = 'fire-fcm'),
          (i['@firebase/performance'] = 'fire-perf'),
          (i['@firebase/remote-config'] = 'fire-rc'),
          (i['@firebase/storage'] = 'fire-gcs'),
          (i['@firebase/firestore'] = 'fire-fst'),
          (i['fire-js'] = 'fire-js'),
          (i['firebase-wrapper'] = 'fire-js-all'),
          i),
        d = new u.Logger('@firebase/app'),
        f = (function () {
          function t(t, e, n) {
            var r,
              i,
              u = this;
            (this.firebase_ = n),
              (this.isDeleted_ = !1),
              (this.name_ = e.name),
              (this.automaticDataCollectionEnabled_ = e.automaticDataCollectionEnabled || !1),
              (this.options_ = s.deepCopy(t)),
              (this.container = new a.ComponentContainer(e.name)),
              this._addComponent(
                new a.Component(
                  'app',
                  function () {
                    return u;
                  },
                  'PUBLIC'
                )
              );
            try {
              for (var c = o.__values(this.firebase_.INTERNAL.components.values()), l = c.next(); !l.done; l = c.next())
                this._addComponent(l.value);
            } catch (h) {
              r = { error: h };
            } finally {
              try {
                l && !l.done && (i = c.return) && i.call(c);
              } finally {
                if (r) throw r.error;
              }
            }
          }
          return (
            Object.defineProperty(t.prototype, 'automaticDataCollectionEnabled', {
              get: function () {
                return this.checkDestroyed_(), this.automaticDataCollectionEnabled_;
              },
              set: function (t) {
                this.checkDestroyed_(), (this.automaticDataCollectionEnabled_ = t);
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'name', {
              get: function () {
                return this.checkDestroyed_(), this.name_;
              },
              enumerable: !0,
              configurable: !0
            }),
            Object.defineProperty(t.prototype, 'options', {
              get: function () {
                return this.checkDestroyed_(), this.options_;
              },
              enumerable: !0,
              configurable: !0
            }),
            (t.prototype.delete = function () {
              var t = this;
              return new Promise(function (e) {
                t.checkDestroyed_(), e();
              })
                .then(function () {
                  return (
                    t.firebase_.INTERNAL.removeApp(t.name_),
                    Promise.all(
                      t.container.getProviders().map(function (t) {
                        return t.delete();
                      })
                    )
                  );
                })
                .then(function () {
                  t.isDeleted_ = !0;
                });
            }),
            (t.prototype._getService = function (t, e) {
              return (
                void 0 === e && (e = '[DEFAULT]'),
                this.checkDestroyed_(),
                this.container.getProvider(t).getImmediate({ identifier: e })
              );
            }),
            (t.prototype._removeServiceInstance = function (t, e) {
              void 0 === e && (e = '[DEFAULT]'), this.container.getProvider(t).clearInstance(e);
            }),
            (t.prototype._addComponent = function (t) {
              try {
                this.container.addComponent(t);
              } catch (e) {
                d.debug('Component ' + t.name + ' failed to register with FirebaseApp ' + this.name, e);
              }
            }),
            (t.prototype._addOrOverwriteComponent = function (t) {
              this.container.addOrOverwriteComponent(t);
            }),
            (t.prototype.checkDestroyed_ = function () {
              if (this.isDeleted_) throw l.create('app-deleted', { appName: this.name_ });
            }),
            t
          );
        })();
      (f.prototype.name && f.prototype.options) || f.prototype.delete || console.log('dc');
      var p = (function t() {
          var e = (function (t) {
            var e = {},
              n = new Map(),
              r = {
                __esModule: !0,
                initializeApp: function (n, i) {
                  void 0 === i && (i = {}), ('object' == typeof i && null !== i) || (i = { name: i });
                  var o = i;
                  void 0 === o.name && (o.name = '[DEFAULT]');
                  var a = o.name;
                  if ('string' != typeof a || !a) throw l.create('bad-app-name', { appName: String(a) });
                  if (s.contains(e, a)) throw l.create('duplicate-app', { appName: a });
                  var u = new t(n, o, r);
                  return (e[a] = u), u;
                },
                app: i,
                registerVersion: function (t, e, n) {
                  var r,
                    i = null !== (r = h[t]) && void 0 !== r ? r : t;
                  n && (i += '-' + n);
                  var o = i.match(/\s|\//),
                    s = e.match(/\s|\//);
                  if (o || s) {
                    var u = ['Unable to register library "' + i + '" with version "' + e + '":'];
                    return (
                      o && u.push('library name "' + i + '" contains illegal characters (whitespace or "/")'),
                      o && s && u.push('and'),
                      s && u.push('version name "' + e + '" contains illegal characters (whitespace or "/")'),
                      void d.warn(u.join(' '))
                    );
                  }
                  c(
                    new a.Component(
                      i + '-version',
                      function () {
                        return { library: i, version: e };
                      },
                      'VERSION'
                    )
                  );
                },
                setLogLevel: u.setLogLevel,
                onLog: function (t, e) {
                  if (null !== t && 'function' != typeof t) throw l.create('invalid-log-argument', { appName: name });
                  u.setUserLogHandler(t, e);
                },
                apps: null,
                SDK_VERSION: '7.14.3',
                INTERNAL: {
                  registerComponent: c,
                  removeApp: function (t) {
                    delete e[t];
                  },
                  components: n,
                  useAsService: function (t, e) {
                    return 'serverAuth' === e ? null : e;
                  }
                }
              };
            function i(t) {
              if (!s.contains(e, (t = t || '[DEFAULT]'))) throw l.create('no-app', { appName: t });
              return e[t];
            }
            function c(a) {
              var u,
                c,
                h = a.name;
              if (n.has(h))
                return (
                  d.debug('There were multiple attempts to register component ' + h + '.'),
                  'PUBLIC' === a.type ? r[h] : null
                );
              if ((n.set(h, a), 'PUBLIC' === a.type)) {
                var f = function (t) {
                  if ((void 0 === t && (t = i()), 'function' != typeof t[h]))
                    throw l.create('invalid-app-argument', { appName: h });
                  return t[h]();
                };
                void 0 !== a.serviceProps && s.deepExtend(f, a.serviceProps),
                  (r[h] = f),
                  (t.prototype[h] = function () {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    var n = this._getService.bind(this, h);
                    return n.apply(this, a.multipleInstances ? t : []);
                  });
              }
              try {
                for (var p = o.__values(Object.keys(e)), g = p.next(); !g.done; g = p.next())
                  e[g.value]._addComponent(a);
              } catch (m) {
                u = { error: m };
              } finally {
                try {
                  g && !g.done && (c = p.return) && c.call(p);
                } finally {
                  if (u) throw u.error;
                }
              }
              return 'PUBLIC' === a.type ? r[h] : null;
            }
            return (
              (r.default = r),
              Object.defineProperty(r, 'apps', {
                get: function () {
                  return Object.keys(e).map(function (t) {
                    return e[t];
                  });
                }
              }),
              (i.App = t),
              r
            );
          })(f);
          return (
            (e.INTERNAL = o.__assign(o.__assign({}, e.INTERNAL), {
              createFirebaseNamespace: t,
              extendNamespace: function (t) {
                s.deepExtend(e, t);
              },
              createSubscribe: s.createSubscribe,
              ErrorFactory: s.ErrorFactory,
              deepExtend: s.deepExtend
            })),
            e
          );
        })(),
        g = (function () {
          function t(t) {
            this.container = t;
          }
          return (
            (t.prototype.getPlatformInfoString = function () {
              return this.container
                .getProviders()
                .map(function (t) {
                  if (
                    (function (t) {
                      var e = t.getComponent();
                      return 'VERSION' === (null == e ? void 0 : e.type);
                    })(t)
                  ) {
                    var e = t.getImmediate();
                    return e.library + '/' + e.version;
                  }
                  return null;
                })
                .filter(function (t) {
                  return t;
                })
                .join(' ');
            }),
            t
          );
        })();
      if (s.isBrowser() && void 0 !== self.firebase) {
        d.warn(
          '\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  '
        );
        var m = self.firebase.SDK_VERSION;
        m &&
          m.indexOf('LITE') >= 0 &&
          d.warn(
            '\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    '
          );
      }
      var v = p.initializeApp;
      p.initializeApp = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        return (
          s.isNode() &&
            d.warn(
              '\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '
            ),
          v.apply(void 0, t)
        );
      };
      var b = p;
      !(function (t, e) {
        t.INTERNAL.registerComponent(
          new a.Component(
            'platform-logger',
            function (t) {
              return new g(t);
            },
            'PRIVATE'
          )
        ),
          t.registerVersion('@firebase/app', '0.6.3', void 0),
          t.registerVersion('fire-js', '');
      })(b),
        (e.default = b),
        (e.firebase = b);
    },
    'yA/v': function (t, e, n) {
      'use strict';
      n.d(e, 'd', function () {
        return a;
      }),
        n.d(e, 'c', function () {
          return u;
        }),
        n.d(e, 'b', function () {
          return c;
        }),
        n.d(e, 'e', function () {
          return l;
        }),
        n.d(e, 'a', function () {
          return h;
        });
      var r,
        i = n('8Y7J'),
        o = n('Wcq6'),
        s = n.n(o);
      const a = new i.o('angularfire2.app.options'),
        u = new i.o('angularfire2.app.nameOrConfig');
      class c {}
      function l(t, e) {
        const n = ('object' == typeof e && e) || {};
        return (
          (n.name = n.name || ('string' == typeof e && e) || '[DEFAULT]'),
          s.a.apps.filter((t) => t && t.name === n.name)[0] || s.a.initializeApp(t, n)
        );
      }
      let h = (r = class {
        static initializeApp(t, e) {
          return {
            ngModule: r,
            providers: [
              { provide: a, useValue: t },
              { provide: u, useValue: e }
            ]
          };
        }
      });
    },
    yCtX: function (t, e, n) {
      'use strict';
      n.d(e, 'a', function () {
        return s;
      });
      var r = n('HDdC'),
        i = n('quSY'),
        o = n('ngJS');
      function s(t, e) {
        return new r.a(
          e
            ? (n) => {
                const r = new i.a();
                let o = 0;
                return (
                  r.add(
                    e.schedule(function () {
                      o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete();
                    })
                  ),
                  r
                );
              }
            : Object(o.a)(t)
        );
      }
    },
    'z+Ro': function (t, e, n) {
      'use strict';
      function r(t) {
        return t && 'function' == typeof t.schedule;
      }
      n.d(e, 'a', function () {
        return r;
      });
    },
    zUnb: function (t, e, n) {
      'use strict';
      n.r(e);
      var r = n('8Y7J');
      class i {}
      class o {}
      var s = n('pMnS'),
        a = n('fNgX'),
        u = n('NCnI'),
        c = n('iInd'),
        l = r.nb({ encapsulation: 0, styles: [['']], data: {} });
      function h(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
            r.ob(1, 212992, null, 0, c.m, [c.b, r.M, r.j, [8, null], r.h], null, null)
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function d(t) {
        return r.Gb(
          0,
          [
            (t()(), r.pb(0, 0, null, null, 1, 'app-root', [], null, null, null, h, l)),
            r.ob(1, 49152, null, 0, o, [], null, null)
          ],
          null,
          null
        );
      }
      var f = r.lb('app-root', o, d, {}, {}, []),
        p = n('SVse'),
        g = n('cUpR'),
        m = n('yA/v'),
        v = n('irV9'),
        b = n('wj3C'),
        y = n.n(b);
      (function () {
        var t,
          e =
            'function' == typeof Object.defineProperties
              ? Object.defineProperty
              : function (t, e, n) {
                  t != Array.prototype && t != Object.prototype && (t[e] = n.value);
                },
          n = (function (t) {
            t = [
              'object' == typeof window && window,
              'object' == typeof self && self,
              'object' == typeof global && global,
              t
            ];
            for (var e = 0; e < t.length; ++e) {
              var n = t[e];
              if (n && n.Math == Math) return n;
            }
            return globalThis;
          })(this);
        function r(t) {
          var e = 0;
          return function () {
            return e < t.length ? { done: !1, value: t[e++] } : { done: !0 };
          };
        }
        function i(t) {
          var e = 'undefined' != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
          return e ? e.call(t) : { next: r(t) };
        }
        !(function (t, r) {
          if (r) {
            var i = n;
            t = t.split('.');
            for (var o = 0; o < t.length - 1; o++) {
              var s = t[o];
              s in i || (i[s] = {}), (i = i[s]);
            }
            (r = r((o = i[(t = t[t.length - 1])]))) != o &&
              null != r &&
              e(i, t, { configurable: !0, writable: !0, value: r });
          }
        })('Promise', function (t) {
          function e(t) {
            (this.b = 0), (this.c = void 0), (this.a = []);
            var e = this.f();
            try {
              t(e.resolve, e.reject);
            } catch (n) {
              e.reject(n);
            }
          }
          function r() {
            this.a = null;
          }
          function o(t) {
            return t instanceof e
              ? t
              : new e(function (e) {
                  e(t);
                });
          }
          if (t) return t;
          r.prototype.b = function (t) {
            if (null == this.a) {
              this.a = [];
              var e = this;
              this.c(function () {
                e.g();
              });
            }
            this.a.push(t);
          };
          var s = n.setTimeout;
          (r.prototype.c = function (t) {
            s(t, 0);
          }),
            (r.prototype.g = function () {
              for (; this.a && this.a.length; ) {
                var t = this.a;
                this.a = [];
                for (var e = 0; e < t.length; ++e) {
                  var n = t[e];
                  t[e] = null;
                  try {
                    n();
                  } catch (r) {
                    this.f(r);
                  }
                }
              }
              this.a = null;
            }),
            (r.prototype.f = function (t) {
              this.c(function () {
                throw t;
              });
            }),
            (e.prototype.f = function () {
              function t(t) {
                return function (r) {
                  n || ((n = !0), t.call(e, r));
                };
              }
              var e = this,
                n = !1;
              return { resolve: t(this.m), reject: t(this.g) };
            }),
            (e.prototype.m = function (t) {
              if (t === this) this.g(new TypeError('A Promise cannot resolve to itself'));
              else if (t instanceof e) this.s(t);
              else {
                t: switch (typeof t) {
                  case 'object':
                    var n = null != t;
                    break t;
                  case 'function':
                    n = !0;
                    break t;
                  default:
                    n = !1;
                }
                n ? this.u(t) : this.h(t);
              }
            }),
            (e.prototype.u = function (t) {
              var e = void 0;
              try {
                e = t.then;
              } catch (n) {
                return void this.g(n);
              }
              'function' == typeof e ? this.w(e, t) : this.h(t);
            }),
            (e.prototype.g = function (t) {
              this.i(2, t);
            }),
            (e.prototype.h = function (t) {
              this.i(1, t);
            }),
            (e.prototype.i = function (t, e) {
              if (0 != this.b)
                throw Error('Cannot settle(' + t + ', ' + e + '): Promise already settled in state' + this.b);
              (this.b = t), (this.c = e), this.l();
            }),
            (e.prototype.l = function () {
              if (null != this.a) {
                for (var t = 0; t < this.a.length; ++t) a.b(this.a[t]);
                this.a = null;
              }
            });
          var a = new r();
          return (
            (e.prototype.s = function (t) {
              var e = this.f();
              t.Oa(e.resolve, e.reject);
            }),
            (e.prototype.w = function (t, e) {
              var n = this.f();
              try {
                t.call(e, n.resolve, n.reject);
              } catch (r) {
                n.reject(r);
              }
            }),
            (e.prototype.then = function (t, n) {
              function r(t, e) {
                return 'function' == typeof t
                  ? function (e) {
                      try {
                        i(t(e));
                      } catch (n) {
                        o(n);
                      }
                    }
                  : e;
              }
              var i,
                o,
                s = new e(function (t, e) {
                  (i = t), (o = e);
                });
              return this.Oa(r(t, i), r(n, o)), s;
            }),
            (e.prototype.catch = function (t) {
              return this.then(void 0, t);
            }),
            (e.prototype.Oa = function (t, e) {
              function n() {
                switch (r.b) {
                  case 1:
                    t(r.c);
                    break;
                  case 2:
                    e(r.c);
                    break;
                  default:
                    throw Error('Unexpected state: ' + r.b);
                }
              }
              var r = this;
              null == this.a ? a.b(n) : this.a.push(n);
            }),
            (e.resolve = o),
            (e.reject = function (t) {
              return new e(function (e, n) {
                n(t);
              });
            }),
            (e.race = function (t) {
              return new e(function (e, n) {
                for (var r = i(t), s = r.next(); !s.done; s = r.next()) o(s.value).Oa(e, n);
              });
            }),
            (e.all = function (t) {
              var n = i(t),
                r = n.next();
              return r.done
                ? o([])
                : new e(function (t, e) {
                    function i(e) {
                      return function (n) {
                        (s[e] = n), 0 == --a && t(s);
                      };
                    }
                    var s = [],
                      a = 0;
                    do {
                      s.push(void 0), a++, o(r.value).Oa(i(s.length - 1), e), (r = n.next());
                    } while (!r.done);
                  });
            }),
            e
          );
        });
        var o = o || {},
          s = this || self,
          a = /^[\w+/_-]+[=]{0,2}$/,
          u = null;
        function c() {}
        function l(t) {
          var e = typeof t;
          if ('object' == e) {
            if (!t) return 'null';
            if (t instanceof Array) return 'array';
            if (t instanceof Object) return e;
            var n = Object.prototype.toString.call(t);
            if ('[object Window]' == n) return 'object';
            if (
              '[object Array]' == n ||
              ('number' == typeof t.length &&
                void 0 !== t.splice &&
                void 0 !== t.propertyIsEnumerable &&
                !t.propertyIsEnumerable('splice'))
            )
              return 'array';
            if (
              '[object Function]' == n ||
              (void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable('call'))
            )
              return 'function';
          } else if ('function' == e && void 0 === t.call) return 'object';
          return e;
        }
        function h(t) {
          var e = l(t);
          return 'array' == e || ('object' == e && 'number' == typeof t.length);
        }
        function d(t) {
          return 'function' == l(t);
        }
        function f(t) {
          var e = typeof t;
          return ('object' == e && null != t) || 'function' == e;
        }
        function p(t) {
          return (Object.prototype.hasOwnProperty.call(t, g) && t[g]) || (t[g] = ++m);
        }
        var g = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
          m = 0;
        function v(t, e, n) {
          return t.call.apply(t.bind, arguments);
        }
        function b(t, e, n) {
          if (!t) throw Error();
          if (2 < arguments.length) {
            var r = Array.prototype.slice.call(arguments, 2);
            return function () {
              var n = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(n, r), t.apply(e, n);
            };
          }
          return function () {
            return t.apply(e, arguments);
          };
        }
        function w(t, e, n) {
          return (w =
            Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? v : b).apply(
            null,
            arguments
          );
        }
        function _(t, e) {
          var n = Array.prototype.slice.call(arguments, 1);
          return function () {
            var e = n.slice();
            return e.push.apply(e, arguments), t.apply(this, e);
          };
        }
        var S =
          Date.now ||
          function () {
            return +new Date();
          };
        function E(t, e) {
          function n() {}
          (n.prototype = e.prototype), (t.Za = e.prototype), (t.prototype = new n()), (t.prototype.constructor = t);
        }
        function C(t, e, n) {
          (this.code = x + t), (this.message = e || k[t] || ''), (this.a = n || null);
        }
        function I(t) {
          var e = t && t.code;
          return e ? new C(e.substring(x.length), t.message, t.serverResponse) : null;
        }
        E(C, Error),
          (C.prototype.v = function () {
            var t = { code: this.code, message: this.message };
            return this.a && (t.serverResponse = this.a), t;
          }),
          (C.prototype.toJSON = function () {
            return this.v();
          });
        var T,
          x = 'auth/',
          k = {
            'admin-restricted-operation': 'This operation is restricted to administrators only.',
            'argument-error': '',
            'app-not-authorized':
              "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
            'app-not-installed':
              'The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.',
            'captcha-check-failed':
              'The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.',
            'code-expired': 'The SMS code has expired. Please re-send the verification code to try again.',
            'cordova-not-ready': 'Cordova framework is not ready.',
            'cors-unsupported': 'This browser is not supported.',
            'credential-already-in-use': 'This credential is already associated with a different user account.',
            'custom-token-mismatch': 'The custom token corresponds to a different audience.',
            'requires-recent-login':
              'This operation is sensitive and requires recent authentication. Log in again before retrying this request.',
            'dynamic-link-not-activated':
              'Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.',
            'email-change-needs-verification': 'Multi-factor users must always have a verified email.',
            'email-already-in-use': 'The email address is already in use by another account.',
            'expired-action-code': 'The action code has expired. ',
            'cancelled-popup-request':
              'This operation has been cancelled due to another conflicting popup being opened.',
            'internal-error': 'An internal error has occurred.',
            'invalid-app-credential':
              'The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.',
            'invalid-app-id': 'The mobile app identifier is not registed for the current project.',
            'invalid-user-token':
              "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
            'invalid-auth-event': 'An internal error has occurred.',
            'invalid-verification-code':
              'The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.',
            'invalid-continue-uri': 'The continue URL provided in the request is invalid.',
            'invalid-cordova-configuration':
              'The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.',
            'invalid-custom-token': 'The custom token format is incorrect. Please check the documentation.',
            'invalid-dynamic-link-domain':
              'The provided dynamic link domain is not configured or authorized for the current project.',
            'invalid-email': 'The email address is badly formatted.',
            'invalid-api-key': 'Your API key is invalid, please check you have copied it correctly.',
            'invalid-cert-hash': 'The SHA-1 certificate hash provided is invalid.',
            'invalid-credential': 'The supplied auth credential is malformed or has expired.',
            'invalid-message-payload':
              'The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-multi-factor-session':
              'The request does not contain a valid proof of first factor successful sign-in.',
            'invalid-oauth-provider':
              'EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.',
            'invalid-oauth-client-id':
              'The OAuth client ID provided is either invalid or does not match the specified API key.',
            'unauthorized-domain':
              'This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.',
            'invalid-action-code':
              'The action code is invalid. This can happen if the code is malformed, expired, or has already been used.',
            'wrong-password': 'The password is invalid or the user does not have a password.',
            'invalid-persistence-type':
              'The specified persistence type is invalid. It can only be local, session or none.',
            'invalid-phone-number':
              'The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].',
            'invalid-provider-id': 'The specified provider ID is invalid.',
            'invalid-recipient-email':
              'The email corresponding to this action failed to send as the provided recipient email address is invalid.',
            'invalid-sender':
              'The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.',
            'invalid-verification-id': 'The verification ID used to create the phone auth credential is invalid.',
            'invalid-tenant-id': "The Auth instance's tenant ID is invalid.",
            'multi-factor-info-not-found': 'The user does not have a second factor matching the identifier provided.',
            'multi-factor-auth-required': 'Proof of ownership of a second factor is required to complete sign-in.',
            'missing-android-pkg-name':
              'An Android Package Name must be provided if the Android App is required to be installed.',
            'auth-domain-config-required':
              'Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.',
            'missing-app-credential':
              'The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.',
            'missing-verification-code': 'The phone auth credential was created with an empty SMS verification code.',
            'missing-continue-uri': 'A continue URL must be provided in the request.',
            'missing-iframe-start': 'An internal error has occurred.',
            'missing-ios-bundle-id': 'An iOS Bundle ID must be provided if an App Store ID is provided.',
            'missing-multi-factor-info': 'No second factor identifier is provided.',
            'missing-multi-factor-session': 'The request is missing proof of first factor successful sign-in.',
            'missing-or-invalid-nonce':
              'The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.',
            'missing-phone-number': 'To send verification codes, provide a phone number for the recipient.',
            'missing-verification-id': 'The phone auth credential was created with an empty verification ID.',
            'app-deleted': 'This instance of FirebaseApp has been deleted.',
            'account-exists-with-different-credential':
              'An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.',
            'network-request-failed':
              'A network error (such as timeout, interrupted connection or unreachable host) has occurred.',
            'no-auth-event': 'An internal error has occurred.',
            'no-such-provider': 'User was not linked to an account with the given provider.',
            'null-user':
              'A null user object was provided as the argument for an operation which requires a non-null user object.',
            'operation-not-allowed':
              'The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.',
            'operation-not-supported-in-this-environment':
              'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
            'popup-blocked':
              'Unable to establish a connection with the popup. It may have been blocked by the browser.',
            'popup-closed-by-user': 'The popup has been closed by the user before finalizing the operation.',
            'provider-already-linked': 'User can only be linked to one identity for the given provider.',
            'quota-exceeded': "The project's quota for this operation has been exceeded.",
            'redirect-cancelled-by-user': 'The redirect operation has been cancelled by the user before finalizing.',
            'redirect-operation-pending': 'A redirect sign-in operation is already pending.',
            'rejected-credential': 'The request contains malformed or mismatching credentials.',
            'second-factor-already-in-use': 'The second factor is already enrolled on this account.',
            'maximum-second-factor-count-exceeded':
              'The maximum allowed number of second factors on a user has been exceeded.',
            'tenant-id-mismatch': "The provided tenant ID does not match the Auth instance's tenant ID",
            timeout: 'The operation has timed out.',
            'user-token-expired': "The user's credential is no longer valid. The user must sign in again.",
            'too-many-requests':
              'We have blocked all requests from this device due to unusual activity. Try again later.',
            'unauthorized-continue-uri':
              'The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.',
            'unsupported-first-factor':
              'Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.',
            'unsupported-persistence-type': 'The current environment does not support the specified persistence type.',
            'unsupported-tenant-operation': 'This operation is not supported in a multi-tenant context.',
            'unverified-email': 'The operation requires a verified email.',
            'user-cancelled': 'The user did not grant your application the permissions it requested.',
            'user-not-found':
              'There is no user record corresponding to this identifier. The user may have been deleted.',
            'user-disabled': 'The user account has been disabled by an administrator.',
            'user-mismatch': 'The supplied credentials do not correspond to the previously signed in user.',
            'user-signed-out': '',
            'weak-password': 'The password must be 6 characters long or more.',
            'web-storage-unsupported': 'This browser is not supported or 3rd party cookies and data may be disabled.'
          },
          O = {
            hd: {
              Ra: 'https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 'b'
            },
            pd: {
              Ra: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://securetoken.googleapis.com/v1/token',
              Ua: 'https://identitytoolkit.googleapis.com/v2/',
              id: 'p'
            },
            rd: {
              Ra: 'https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://staging-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://staging-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 's'
            },
            sd: {
              Ra: 'https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/',
              Xa: 'https://test-securetoken.sandbox.googleapis.com/v1/token',
              Ua: 'https://test-identitytoolkit.sandbox.googleapis.com/v2/',
              id: 't'
            }
          };
        function A(t) {
          for (var e in O)
            if (O[e].id === t)
              return { firebaseEndpoint: (t = O[e]).Ra, secureTokenEndpoint: t.Xa, identityPlatformEndpoint: t.Ua };
          return null;
        }
        function N(t) {
          if (!t) return !1;
          try {
            return !!t.$goog_Thenable;
          } catch (e) {
            return !1;
          }
        }
        function R(t) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, R);
          else {
            var e = Error().stack;
            e && (this.stack = e);
          }
          t && (this.message = String(t));
        }
        function P(t, e) {
          for (var n = '', r = (t = t.split('%s')).length - 1, i = 0; i < r; i++)
            n += t[i] + (i < e.length ? e[i] : '%s');
          R.call(this, n + t[r]);
        }
        function D(t, e) {
          throw new P('Failure' + (t ? ': ' + t : ''), Array.prototype.slice.call(arguments, 1));
        }
        function j(t, e) {
          (this.c = t), (this.f = e), (this.b = 0), (this.a = null);
        }
        function M(t, e) {
          t.f(e), 100 > t.b && (t.b++, (e.next = t.a), (t.a = e));
        }
        function L() {
          this.b = this.a = null;
        }
        (T = A('__EID__') ? '__EID__' : void 0),
          E(R, Error),
          (R.prototype.name = 'CustomError'),
          E(P, R),
          (P.prototype.name = 'AssertionError'),
          (j.prototype.get = function () {
            if (0 < this.b) {
              this.b--;
              var t = this.a;
              (this.a = t.next), (t.next = null);
            } else t = this.c();
            return t;
          });
        var U = new j(
          function () {
            return new F();
          },
          function (t) {
            t.reset();
          }
        );
        function V() {
          var t = me,
            e = null;
          return t.a && ((e = t.a), (t.a = t.a.next), t.a || (t.b = null), (e.next = null)), e;
        }
        function F() {
          this.next = this.b = this.a = null;
        }
        (L.prototype.add = function (t, e) {
          var n = U.get();
          n.set(t, e), this.b ? (this.b.next = n) : (this.a = n), (this.b = n);
        }),
          (F.prototype.set = function (t, e) {
            (this.a = t), (this.b = e), (this.next = null);
          }),
          (F.prototype.reset = function () {
            this.next = this.b = this.a = null;
          });
        var z = Array.prototype.indexOf
            ? function (t, e) {
                return Array.prototype.indexOf.call(t, e, void 0);
              }
            : function (t, e) {
                if ('string' == typeof t) return 'string' != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0);
                for (var n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
                return -1;
              },
          H = Array.prototype.forEach
            ? function (t, e, n) {
                Array.prototype.forEach.call(t, e, n);
              }
            : function (t, e, n) {
                for (var r = t.length, i = 'string' == typeof t ? t.split('') : t, o = 0; o < r; o++)
                  o in i && e.call(n, i[o], o, t);
              },
          B = Array.prototype.filter
            ? function (t, e) {
                return Array.prototype.filter.call(t, e, void 0);
              }
            : function (t, e) {
                for (var n = t.length, r = [], i = 0, o = 'string' == typeof t ? t.split('') : t, s = 0; s < n; s++)
                  if (s in o) {
                    var a = o[s];
                    e.call(void 0, a, s, t) && (r[i++] = a);
                  }
                return r;
              },
          $ = Array.prototype.map
            ? function (t, e) {
                return Array.prototype.map.call(t, e, void 0);
              }
            : function (t, e) {
                for (var n = t.length, r = Array(n), i = 'string' == typeof t ? t.split('') : t, o = 0; o < n; o++)
                  o in i && (r[o] = e.call(void 0, i[o], o, t));
                return r;
              },
          q = Array.prototype.some
            ? function (t, e) {
                return Array.prototype.some.call(t, e, void 0);
              }
            : function (t, e) {
                for (var n = t.length, r = 'string' == typeof t ? t.split('') : t, i = 0; i < n; i++)
                  if (i in r && e.call(void 0, r[i], i, t)) return !0;
                return !1;
              };
        function W(t, e) {
          return 0 <= z(t, e);
        }
        function G(t, e) {
          var n;
          return (n = 0 <= (e = z(t, e))) && Array.prototype.splice.call(t, e, 1), n;
        }
        function K(t, e) {
          !(function (t, e) {
            for (var n = 'string' == typeof t ? t.split('') : t, r = t.length - 1; 0 <= r; --r)
              r in n && e.call(void 0, n[r], r, t);
          })(t, function (n, r) {
            e.call(void 0, n, r, t) && Array.prototype.splice.call(t, r, 1);
          });
        }
        function Y(t) {
          return Array.prototype.concat.apply([], arguments);
        }
        function J(t) {
          var e = t.length;
          if (0 < e) {
            for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
            return n;
          }
          return [];
        }
        var Z,
          X = String.prototype.trim
            ? function (t) {
                return t.trim();
              }
            : function (t) {
                return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
              },
          Q = /&/g,
          tt = /</g,
          et = />/g,
          nt = /"/g,
          rt = /'/g,
          it = /\x00/g,
          ot = /[\x00&<>"']/;
        function st(t, e) {
          return -1 != t.indexOf(e);
        }
        function at(t, e) {
          return t < e ? -1 : t > e ? 1 : 0;
        }
        t: {
          var ut = s.navigator;
          if (ut) {
            var ct = ut.userAgent;
            if (ct) {
              Z = ct;
              break t;
            }
          }
          Z = '';
        }
        function lt(t) {
          return st(Z, t);
        }
        function ht(t, e) {
          for (var n in t) e.call(void 0, t[n], n, t);
        }
        function dt(t) {
          for (var e in t) return !1;
          return !0;
        }
        function ft(t) {
          var e,
            n = {};
          for (e in t) n[e] = t[e];
          return n;
        }
        var pt = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
          ' '
        );
        function gt(t, e) {
          for (var n, r, i = 1; i < arguments.length; i++) {
            for (n in (r = arguments[i])) t[n] = r[n];
            for (var o = 0; o < pt.length; o++)
              (n = pt[o]), Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
        }
        function mt(t, e) {
          t: {
            try {
              var n = t && t.ownerDocument,
                r = n && (n.defaultView || n.parentWindow);
              if ((r = r || s).Element && r.Location) {
                var i = r;
                break t;
              }
            } catch (a) {}
            i = null;
          }
          if (
            i &&
            void 0 !== i[e] &&
            (!t || (!(t instanceof i[e]) && (t instanceof i.Location || t instanceof i.Element)))
          ) {
            if (f(t))
              try {
                var o = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t);
              } catch (a) {
                o = '<object could not be stringified>';
              }
            else o = void 0 === t ? 'undefined' : null === t ? 'null' : typeof t;
            D('Argument is not a %s (or a non-Element, non-Location mock); got: %s', e, o);
          }
        }
        function vt(t, e) {
          (this.a = (t === wt && e) || ''), (this.b = yt);
        }
        function bt(t) {
          return t instanceof vt && t.constructor === vt && t.b === yt
            ? t.a
            : (D("expected object of type Const, got '" + t + "'"), 'type_error:Const');
        }
        (vt.prototype.ra = !0),
          (vt.prototype.qa = function () {
            return this.a;
          }),
          (vt.prototype.toString = function () {
            return 'Const{' + this.a + '}';
          });
        var yt = {},
          wt = {},
          _t = new vt(wt, '');
        function St(t, e) {
          (this.a = (t === kt && e) || ''), (this.b = xt);
        }
        function Et(t) {
          return t instanceof St && t.constructor === St && t.b === xt
            ? t.a
            : (D("expected object of type TrustedResourceUrl, got '" + t + "' of type " + l(t)),
              'type_error:TrustedResourceUrl');
        }
        function Ct(t, e) {
          var n = bt(t);
          if (!Tt.test(n)) throw Error('Invalid TrustedResourceUrl format: ' + n);
          return (
            (t = n.replace(It, function (t, r) {
              if (!Object.prototype.hasOwnProperty.call(e, r))
                throw Error(
                  'Found marker, "' +
                    r +
                    '", in format string, "' +
                    n +
                    '", but no valid label mapping found in args: ' +
                    JSON.stringify(e)
                );
              return (t = e[r]) instanceof vt ? bt(t) : encodeURIComponent(String(t));
            })),
            new St(kt, t)
          );
        }
        (St.prototype.ra = !0),
          (St.prototype.qa = function () {
            return this.a.toString();
          }),
          (St.prototype.toString = function () {
            return 'TrustedResourceUrl{' + this.a + '}';
          });
        var It = /%{(\w+)}/g,
          Tt = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
          xt = {},
          kt = {};
        function Ot(t, e) {
          (this.a = (t === Dt && e) || ''), (this.b = Pt);
        }
        function At(t) {
          return t instanceof Ot && t.constructor === Ot && t.b === Pt
            ? t.a
            : (D("expected object of type SafeUrl, got '" + t + "' of type " + l(t)), 'type_error:SafeUrl');
        }
        (Ot.prototype.ra = !0),
          (Ot.prototype.qa = function () {
            return this.a.toString();
          }),
          (Ot.prototype.toString = function () {
            return 'SafeUrl{' + this.a + '}';
          });
        var Nt = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        function Rt(t) {
          return t instanceof Ot
            ? t
            : ((t = 'object' == typeof t && t.ra ? t.qa() : String(t)),
              Nt.test(t) || (t = 'about:invalid#zClosurez'),
              new Ot(Dt, t));
        }
        var Pt = {},
          Dt = {};
        function jt() {
          (this.a = ''), (this.b = Lt);
        }
        function Mt(t) {
          return t instanceof jt && t.constructor === jt && t.b === Lt
            ? t.a
            : (D("expected object of type SafeHtml, got '" + t + "' of type " + l(t)), 'type_error:SafeHtml');
        }
        (jt.prototype.ra = !0),
          (jt.prototype.qa = function () {
            return this.a.toString();
          }),
          (jt.prototype.toString = function () {
            return 'SafeHtml{' + this.a + '}';
          });
        var Lt = {};
        function Ut(t) {
          var e = new jt();
          return (e.a = t), e;
        }
        Ut('<!DOCTYPE html>');
        var Vt = Ut('');
        function Ft(t, e) {
          for (var n = t.split('%s'), r = '', i = Array.prototype.slice.call(arguments, 1); i.length && 1 < n.length; )
            r += n.shift() + i.shift();
          return r + n.join('%s');
        }
        function zt(t) {
          return (
            ot.test(t) &&
              (-1 != t.indexOf('&') && (t = t.replace(Q, '&amp;')),
              -1 != t.indexOf('<') && (t = t.replace(tt, '&lt;')),
              -1 != t.indexOf('>') && (t = t.replace(et, '&gt;')),
              -1 != t.indexOf('"') && (t = t.replace(nt, '&quot;')),
              -1 != t.indexOf("'") && (t = t.replace(rt, '&#39;')),
              -1 != t.indexOf('\0') && (t = t.replace(it, '&#0;'))),
            t
          );
        }
        function Ht(t) {
          return Ht[' '](t), t;
        }
        Ut('<br>'), (Ht[' '] = c);
        var Bt,
          $t,
          qt = lt('Opera'),
          Wt = lt('Trident') || lt('MSIE'),
          Gt = lt('Edge'),
          Kt = Gt || Wt,
          Yt =
            lt('Gecko') &&
            !(st(Z.toLowerCase(), 'webkit') && !lt('Edge')) &&
            !(lt('Trident') || lt('MSIE')) &&
            !lt('Edge'),
          Jt = st(Z.toLowerCase(), 'webkit') && !lt('Edge');
        function Zt() {
          var t = s.document;
          return t ? t.documentMode : void 0;
        }
        t: {
          var Xt = '',
            Qt =
              (($t = Z),
              Yt
                ? /rv:([^\);]+)(\)|;)/.exec($t)
                : Gt
                ? /Edge\/([\d\.]+)/.exec($t)
                : Wt
                ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($t)
                : Jt
                ? /WebKit\/(\S+)/.exec($t)
                : qt
                ? /(?:Version)[ \/]?(\S+)/.exec($t)
                : void 0);
          if ((Qt && (Xt = Qt ? Qt[1] : ''), Wt)) {
            var te = Zt();
            if (null != te && te > parseFloat(Xt)) {
              Bt = String(te);
              break t;
            }
          }
          Bt = Xt;
        }
        var ee,
          ne = {};
        function re(t) {
          return (function (t, e) {
            var n = ne;
            return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : (n[t] = e());
          })(t, function () {
            for (
              var e = 0,
                n = X(String(Bt)).split('.'),
                r = X(String(t)).split('.'),
                i = Math.max(n.length, r.length),
                o = 0;
              0 == e && o < i;
              o++
            ) {
              var s = n[o] || '',
                a = r[o] || '';
              do {
                if (
                  ((s = /(\d*)(\D*)(.*)/.exec(s) || ['', '', '', '']),
                  (a = /(\d*)(\D*)(.*)/.exec(a) || ['', '', '', '']),
                  0 == s[0].length && 0 == a[0].length)
                )
                  break;
                (e =
                  at(0 == s[1].length ? 0 : parseInt(s[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) ||
                  at(0 == s[2].length, 0 == a[2].length) ||
                  at(s[2], a[2])),
                  (s = s[3]),
                  (a = a[3]);
              } while (0 == e);
            }
            return 0 <= e;
          });
        }
        ee = s.document && Wt ? Zt() : void 0;
        try {
          new self.OffscreenCanvas(0, 0).getContext('2d');
        } catch ($t) {}
        var ie = !Wt || 9 <= Number(ee);
        function oe(t) {
          var e = document;
          return 'string' == typeof t ? e.getElementById(t) : t;
        }
        function se(t, e) {
          ht(e, function (e, n) {
            e && 'object' == typeof e && e.ra && (e = e.qa()),
              'style' == n
                ? (t.style.cssText = e)
                : 'class' == n
                ? (t.className = e)
                : 'for' == n
                ? (t.htmlFor = e)
                : ce.hasOwnProperty(n)
                ? t.setAttribute(ce[n], e)
                : 0 == n.lastIndexOf('aria-', 0) || 0 == n.lastIndexOf('data-', 0)
                ? t.setAttribute(n, e)
                : (t[n] = e);
          });
        }
        var ae,
          ue,
          ce = {
            cellpadding: 'cellPadding',
            cellspacing: 'cellSpacing',
            colspan: 'colSpan',
            frameborder: 'frameBorder',
            height: 'height',
            maxlength: 'maxLength',
            nonce: 'nonce',
            role: 'role',
            rowspan: 'rowSpan',
            type: 'type',
            usemap: 'useMap',
            valign: 'vAlign',
            width: 'width'
          };
        function le(t, e, n) {
          function r(n) {
            n && e.appendChild('string' == typeof n ? t.createTextNode(n) : n);
          }
          for (var i = 2; i < n.length; i++) {
            var o = n[i];
            !h(o) || (f(o) && 0 < o.nodeType) ? r(o) : H(de(o) ? J(o) : o, r);
          }
        }
        function he(t, e) {
          return (
            (e = String(e)), 'application/xhtml+xml' === t.contentType && (e = e.toLowerCase()), t.createElement(e)
          );
        }
        function de(t) {
          if (t && 'number' == typeof t.length) {
            if (f(t)) return 'function' == typeof t.item || 'string' == typeof t.item;
            if (d(t)) return 'function' == typeof t.item;
          }
          return !1;
        }
        function fe(t) {
          s.setTimeout(function () {
            throw t;
          }, 0);
        }
        function pe(t, e) {
          ue ||
            (function () {
              if (s.Promise && s.Promise.resolve) {
                var t = s.Promise.resolve(void 0);
                ue = function () {
                  t.then(ve);
                };
              } else
                ue = function () {
                  var t = ve;
                  !d(s.setImmediate) ||
                  (s.Window && s.Window.prototype && !lt('Edge') && s.Window.prototype.setImmediate == s.setImmediate)
                    ? (ae ||
                        (ae = (function () {
                          var t = s.MessageChannel;
                          if (
                            (void 0 === t &&
                              'undefined' != typeof window &&
                              window.postMessage &&
                              window.addEventListener &&
                              !lt('Presto') &&
                              (t = function () {
                                var t = he(document, 'IFRAME');
                                (t.style.display = 'none'),
                                  (function (t) {
                                    var e = new St(kt, bt(_t));
                                    mt(t, 'HTMLIFrameElement'), (t.src = Et(e).toString());
                                  })(t),
                                  document.documentElement.appendChild(t);
                                var e = t.contentWindow;
                                (t = e.document).open(), t.write(Mt(Vt)), t.close();
                                var n = 'callImmediate' + Math.random(),
                                  r =
                                    'file:' == e.location.protocol ? '*' : e.location.protocol + '//' + e.location.host;
                                (t = w(function (t) {
                                  ('*' != r && t.origin != r) || t.data != n || this.port1.onmessage();
                                }, this)),
                                  e.addEventListener('message', t, !1),
                                  (this.port1 = {}),
                                  (this.port2 = {
                                    postMessage: function () {
                                      e.postMessage(n, r);
                                    }
                                  });
                              }),
                            void 0 !== t && !lt('Trident') && !lt('MSIE'))
                          ) {
                            var e = new t(),
                              n = {},
                              r = n;
                            return (
                              (e.port1.onmessage = function () {
                                if (void 0 !== n.next) {
                                  var t = (n = n.next).Db;
                                  (n.Db = null), t();
                                }
                              }),
                              function (t) {
                                (r.next = { Db: t }), (r = r.next), e.port2.postMessage(0);
                              }
                            );
                          }
                          return function (t) {
                            s.setTimeout(t, 0);
                          };
                        })()),
                      ae(t))
                    : s.setImmediate(t);
                };
            })(),
            ge || (ue(), (ge = !0)),
            me.add(t, e);
        }
        var ge = !1,
          me = new L();
        function ve() {
          for (var t; (t = V()); ) {
            try {
              t.a.call(t.b);
            } catch (e) {
              fe(e);
            }
            M(U, t);
          }
          ge = !1;
        }
        function be(t, e) {
          if (((this.a = ye), (this.i = void 0), (this.f = this.b = this.c = null), (this.g = this.h = !1), t != c))
            try {
              var n = this;
              t.call(
                e,
                function (t) {
                  Ne(n, we, t);
                },
                function (t) {
                  if (!(t instanceof Ue))
                    try {
                      if (t instanceof Error) throw t;
                      throw Error('Promise rejected.');
                    } catch (e) {}
                  Ne(n, _e, t);
                }
              );
            } catch (r) {
              Ne(this, _e, r);
            }
        }
        var ye = 0,
          we = 2,
          _e = 3;
        function Se() {
          (this.next = this.f = this.b = this.g = this.a = null), (this.c = !1);
        }
        Se.prototype.reset = function () {
          (this.f = this.b = this.g = this.a = null), (this.c = !1);
        };
        var Ee = new j(
          function () {
            return new Se();
          },
          function (t) {
            t.reset();
          }
        );
        function Ce(t, e, n) {
          var r = Ee.get();
          return (r.g = t), (r.b = e), (r.f = n), r;
        }
        function Ie(t) {
          if (t instanceof be) return t;
          var e = new be(c);
          return Ne(e, we, t), e;
        }
        function Te(t) {
          return new be(function (e, n) {
            n(t);
          });
        }
        function xe(t, e, n) {
          Re(t, e, n, null) || pe(_(e, t));
        }
        function ke(t) {
          return new be(function (e) {
            var n = t.length,
              r = [];
            if (n)
              for (
                var i = function (t, i, o) {
                    n--, (r[t] = i ? { Mb: !0, value: o } : { Mb: !1, reason: o }), 0 == n && e(r);
                  },
                  o = 0;
                o < t.length;
                o++
              )
                xe(t[o], _(i, o, !0), _(i, o, !1));
            else e(r);
          });
        }
        function Oe(t, e) {
          t.b || (t.a != we && t.a != _e) || Pe(t), t.f ? (t.f.next = e) : (t.b = e), (t.f = e);
        }
        function Ae(t, e, n, r) {
          var i = Ce(null, null, null);
          return (
            (i.a = new be(function (t, o) {
              (i.g = e
                ? function (n) {
                    try {
                      var i = e.call(r, n);
                      t(i);
                    } catch (s) {
                      o(s);
                    }
                  }
                : t),
                (i.b = n
                  ? function (e) {
                      try {
                        var i = n.call(r, e);
                        void 0 === i && e instanceof Ue ? o(e) : t(i);
                      } catch (s) {
                        o(s);
                      }
                    }
                  : o);
            })),
            (i.a.c = t),
            Oe(t, i),
            i.a
          );
        }
        function Ne(t, e, n) {
          t.a == ye &&
            (t === n && ((e = _e), (n = new TypeError('Promise cannot resolve to itself'))),
            (t.a = 1),
            Re(n, t.Yc, t.Zc, t) ||
              ((t.i = n),
              (t.a = e),
              (t.c = null),
              Pe(t),
              e != _e ||
                n instanceof Ue ||
                (function (t, e) {
                  (t.g = !0),
                    pe(function () {
                      t.g && Le.call(null, e);
                    });
                })(t, n)));
        }
        function Re(t, e, n, r) {
          if (t instanceof be) return Oe(t, Ce(e || c, n || null, r)), !0;
          if (N(t)) return t.then(e, n, r), !0;
          if (f(t))
            try {
              var i = t.then;
              if (d(i))
                return (
                  (function (t, e, n, r, i) {
                    function o(t) {
                      s || ((s = !0), r.call(i, t));
                    }
                    var s = !1;
                    try {
                      e.call(
                        t,
                        function (t) {
                          s || ((s = !0), n.call(i, t));
                        },
                        o
                      );
                    } catch (a) {
                      o(a);
                    }
                  })(t, i, e, n, r),
                  !0
                );
            } catch (o) {
              return n.call(r, o), !0;
            }
          return !1;
        }
        function Pe(t) {
          t.h || ((t.h = !0), pe(t.ec, t));
        }
        function De(t) {
          var e = null;
          return t.b && ((t.b = (e = t.b).next), (e.next = null)), t.b || (t.f = null), e;
        }
        function je(t, e, n, r) {
          if (n == _e && e.b && !e.c) for (; t && t.g; t = t.c) t.g = !1;
          if (e.a) (e.a.c = null), Me(e, n, r);
          else
            try {
              e.c ? e.g.call(e.f) : Me(e, n, r);
            } catch (i) {
              Le.call(null, i);
            }
          M(Ee, e);
        }
        function Me(t, e, n) {
          e == we ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n);
        }
        (be.prototype.then = function (t, e, n) {
          return Ae(this, d(t) ? t : null, d(e) ? e : null, n);
        }),
          (be.prototype.$goog_Thenable = !0),
          ((t = be.prototype).ma = function (t, e) {
            return ((t = Ce(t, t, e)).c = !0), Oe(this, t), this;
          }),
          (t.o = function (t, e) {
            return Ae(this, null, t, e);
          }),
          (t.cancel = function (t) {
            if (this.a == ye) {
              var e = new Ue(t);
              pe(function () {
                !(function t(e, n) {
                  if (e.a == ye)
                    if (e.c) {
                      var r = e.c;
                      if (r.b) {
                        for (
                          var i = 0, o = null, s = null, a = r.b;
                          a && (a.c || (i++, a.a == e && (o = a), !(o && 1 < i)));
                          a = a.next
                        )
                          o || (s = a);
                        o &&
                          (r.a == ye && 1 == i
                            ? t(r, n)
                            : (s ? ((i = s).next == r.f && (r.f = i), (i.next = i.next.next)) : De(r),
                              je(r, o, _e, n)));
                      }
                      e.c = null;
                    } else Ne(e, _e, n);
                })(this, e);
              }, this);
            }
          }),
          (t.Yc = function (t) {
            (this.a = ye), Ne(this, we, t);
          }),
          (t.Zc = function (t) {
            (this.a = ye), Ne(this, _e, t);
          }),
          (t.ec = function () {
            for (var t; (t = De(this)); ) je(this, t, this.a, this.i);
            this.h = !1;
          });
        var Le = fe;
        function Ue(t) {
          R.call(this, t);
        }
        function Ve() {
          0 != Fe && (ze[p(this)] = this), (this.wa = this.wa), (this.na = this.na);
        }
        E(Ue, R), (Ue.prototype.name = 'cancel');
        var Fe = 0,
          ze = {};
        function He(t) {
          if (!t.wa && ((t.wa = !0), t.Ba(), 0 != Fe)) {
            var e = p(t);
            if (0 != Fe && t.na && 0 < t.na.length)
              throw Error(
                t +
                  " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method."
              );
            delete ze[e];
          }
        }
        (Ve.prototype.wa = !1),
          (Ve.prototype.Ba = function () {
            if (this.na) for (; this.na.length; ) this.na.shift()();
          });
        var Be =
            Object.freeze ||
            function (t) {
              return t;
            },
          $e = !Wt || 9 <= Number(ee),
          qe = Wt && !re('9'),
          We = (function () {
            if (!s.addEventListener || !Object.defineProperty) return !1;
            var t = !1,
              e = Object.defineProperty({}, 'passive', {
                get: function () {
                  t = !0;
                }
              });
            try {
              s.addEventListener('test', c, e), s.removeEventListener('test', c, e);
            } catch (n) {}
            return t;
          })();
        function Ge(t, e) {
          (this.type = t), (this.b = this.target = e), (this.defaultPrevented = !1);
        }
        function Ke(t, e) {
          if (
            (Ge.call(this, t ? t.type : ''),
            (this.relatedTarget = this.b = this.target = null),
            (this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0),
            (this.key = ''),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.pointerId = 0),
            (this.pointerType = ''),
            (this.a = null),
            t)
          ) {
            var n = (this.type = t.type),
              r = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null;
            if (((this.target = t.target || t.srcElement), (this.b = e), (e = t.relatedTarget))) {
              if (Yt) {
                t: {
                  try {
                    Ht(e.nodeName);
                    var i = !0;
                    break t;
                  } catch (o) {}
                  i = !1;
                }
                i || (e = null);
              }
            } else 'mouseover' == n ? (e = t.fromElement) : 'mouseout' == n && (e = t.toElement);
            (this.relatedTarget = e),
              r
                ? ((this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX),
                  (this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY),
                  (this.screenX = r.screenX || 0),
                  (this.screenY = r.screenY || 0))
                : ((this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX),
                  (this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY),
                  (this.screenX = t.screenX || 0),
                  (this.screenY = t.screenY || 0)),
              (this.button = t.button),
              (this.key = t.key || ''),
              (this.ctrlKey = t.ctrlKey),
              (this.altKey = t.altKey),
              (this.shiftKey = t.shiftKey),
              (this.metaKey = t.metaKey),
              (this.pointerId = t.pointerId || 0),
              (this.pointerType = 'string' == typeof t.pointerType ? t.pointerType : Ye[t.pointerType] || ''),
              (this.a = t),
              t.defaultPrevented && this.preventDefault();
          }
        }
        (Ge.prototype.preventDefault = function () {
          this.defaultPrevented = !0;
        }),
          E(Ke, Ge);
        var Ye = Be({ 2: 'touch', 3: 'pen', 4: 'mouse' });
        (Ke.prototype.preventDefault = function () {
          Ke.Za.preventDefault.call(this);
          var t = this.a;
          if (t.preventDefault) t.preventDefault();
          else if (((t.returnValue = !1), qe))
            try {
              (t.ctrlKey || (112 <= t.keyCode && 123 >= t.keyCode)) && (t.keyCode = -1);
            } catch (e) {}
        }),
          (Ke.prototype.f = function () {
            return this.a;
          });
        var Je = 'closure_listenable_' + ((1e6 * Math.random()) | 0),
          Ze = 0;
        function Xe(t, e, n, r, i) {
          (this.listener = t),
            (this.proxy = null),
            (this.src = e),
            (this.type = n),
            (this.capture = !!r),
            (this.Ta = i),
            (this.key = ++Ze),
            (this.ua = this.Na = !1);
        }
        function Qe(t) {
          (t.ua = !0), (t.listener = null), (t.proxy = null), (t.src = null), (t.Ta = null);
        }
        function tn(t) {
          (this.src = t), (this.a = {}), (this.b = 0);
        }
        function en(t, e) {
          var n = e.type;
          n in t.a && G(t.a[n], e) && (Qe(e), 0 == t.a[n].length && (delete t.a[n], t.b--));
        }
        function nn(t, e, n, r) {
          for (var i = 0; i < t.length; ++i) {
            var o = t[i];
            if (!o.ua && o.listener == e && o.capture == !!n && o.Ta == r) return i;
          }
          return -1;
        }
        tn.prototype.add = function (t, e, n, r, i) {
          var o = t.toString();
          (t = this.a[o]) || ((t = this.a[o] = []), this.b++);
          var s = nn(t, e, r, i);
          return (
            -1 < s ? ((e = t[s]), n || (e.Na = !1)) : (((e = new Xe(e, this.src, o, !!r, i)).Na = n), t.push(e)), e
          );
        };
        var rn = 'closure_lm_' + ((1e6 * Math.random()) | 0),
          on = {};
        function sn(t, e, n, r, i) {
          if (r && r.once) un(t, e, n, r, i);
          else if (Array.isArray(e)) for (var o = 0; o < e.length; o++) sn(t, e[o], n, r, i);
          else (n = vn(n)), t && t[Je] ? yn(t, e, n, f(r) ? !!r.capture : !!r, i) : an(t, e, n, !1, r, i);
        }
        function an(t, e, n, r, i, o) {
          if (!e) throw Error('Invalid event type');
          var s = f(i) ? !!i.capture : !!i,
            a = gn(t);
          if ((a || (t[rn] = a = new tn(t)), !(n = a.add(e, n, r, s, o)).proxy))
            if (
              ((r = (function () {
                var t = pn,
                  e = $e
                    ? function (n) {
                        return t.call(e.src, e.listener, n);
                      }
                    : function (n) {
                        if (!(n = t.call(e.src, e.listener, n))) return n;
                      };
                return e;
              })()),
              (n.proxy = r),
              (r.src = t),
              (r.listener = n),
              t.addEventListener)
            )
              We || (i = s), void 0 === i && (i = !1), t.addEventListener(e.toString(), r, i);
            else if (t.attachEvent) t.attachEvent(hn(e.toString()), r);
            else {
              if (!t.addListener || !t.removeListener) throw Error('addEventListener and attachEvent are unavailable.');
              t.addListener(r);
            }
        }
        function un(t, e, n, r, i) {
          if (Array.isArray(e)) for (var o = 0; o < e.length; o++) un(t, e[o], n, r, i);
          else (n = vn(n)), t && t[Je] ? wn(t, e, n, f(r) ? !!r.capture : !!r, i) : an(t, e, n, !0, r, i);
        }
        function cn(t, e, n, r, i) {
          if (Array.isArray(e)) for (var o = 0; o < e.length; o++) cn(t, e[o], n, r, i);
          else
            (r = f(r) ? !!r.capture : !!r),
              (n = vn(n)),
              t && t[Je]
                ? ((t = t.u),
                  (e = String(e).toString()) in t.a &&
                    -1 < (n = nn((o = t.a[e]), n, r, i)) &&
                    (Qe(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))
                : t &&
                  (t = gn(t)) &&
                  ((e = t.a[e.toString()]), (t = -1), e && (t = nn(e, n, r, i)), (n = -1 < t ? e[t] : null) && ln(n));
        }
        function ln(t) {
          if ('number' != typeof t && t && !t.ua) {
            var e = t.src;
            if (e && e[Je]) en(e.u, t);
            else {
              var n = t.type,
                r = t.proxy;
              e.removeEventListener
                ? e.removeEventListener(n, r, t.capture)
                : e.detachEvent
                ? e.detachEvent(hn(n), r)
                : e.addListener && e.removeListener && e.removeListener(r),
                (n = gn(e)) ? (en(n, t), 0 == n.b && ((n.src = null), (e[rn] = null))) : Qe(t);
            }
          }
        }
        function hn(t) {
          return t in on ? on[t] : (on[t] = 'on' + t);
        }
        function dn(t, e, n, r) {
          var i = !0;
          if ((t = gn(t)) && (e = t.a[e.toString()]))
            for (e = e.concat(), t = 0; t < e.length; t++) {
              var o = e[t];
              o && o.capture == n && !o.ua && ((o = fn(o, r)), (i = i && !1 !== o));
            }
          return i;
        }
        function fn(t, e) {
          var n = t.listener,
            r = t.Ta || t.src;
          return t.Na && ln(t), n.call(r, e);
        }
        function pn(t, e) {
          if (t.ua) return !0;
          if (!$e) {
            if (!e)
              t: {
                e = ['window', 'event'];
                for (var n = s, r = 0; r < e.length; r++)
                  if (null == (n = n[e[r]])) {
                    e = null;
                    break t;
                  }
                e = n;
              }
            if (((e = new Ke((r = e), this)), (n = !0), !(0 > r.keyCode || null != r.returnValue))) {
              t: {
                var i = !1;
                if (0 == r.keyCode)
                  try {
                    r.keyCode = -1;
                    break t;
                  } catch (a) {
                    i = !0;
                  }
                (i || null == r.returnValue) && (r.returnValue = !0);
              }
              for (r = [], i = e.b; i; i = i.parentNode) r.push(i);
              for (t = t.type, i = r.length - 1; 0 <= i; i--) {
                e.b = r[i];
                var o = dn(r[i], t, !0, e);
                n = n && o;
              }
              for (i = 0; i < r.length; i++) (e.b = r[i]), (o = dn(r[i], t, !1, e)), (n = n && o);
            }
            return n;
          }
          return fn(t, new Ke(e, this));
        }
        function gn(t) {
          return (t = t[rn]) instanceof tn ? t : null;
        }
        var mn = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
        function vn(t) {
          return d(t)
            ? t
            : (t[mn] ||
                (t[mn] = function (e) {
                  return t.handleEvent(e);
                }),
              t[mn]);
        }
        function bn() {
          Ve.call(this), (this.u = new tn(this)), (this.Yb = this), (this.eb = null);
        }
        function yn(t, e, n, r, i) {
          t.u.add(String(e), n, !1, r, i);
        }
        function wn(t, e, n, r, i) {
          t.u.add(String(e), n, !0, r, i);
        }
        function _n(t, e, n, r) {
          if (!(e = t.u.a[String(e)])) return !0;
          e = e.concat();
          for (var i = !0, o = 0; o < e.length; ++o) {
            var s = e[o];
            if (s && !s.ua && s.capture == n) {
              var a = s.listener,
                u = s.Ta || s.src;
              s.Na && en(t.u, s), (i = !1 !== a.call(u, r) && i);
            }
          }
          return i && !r.defaultPrevented;
        }
        function Sn(t, e, n) {
          if (d(t)) n && (t = w(t, n));
          else {
            if (!t || 'function' != typeof t.handleEvent) throw Error('Invalid listener argument');
            t = w(t.handleEvent, t);
          }
          return 2147483647 < Number(e) ? -1 : s.setTimeout(t, e || 0);
        }
        function En(t) {
          var e = null;
          return new be(function (n, r) {
            -1 ==
              (e = Sn(function () {
                n(void 0);
              }, t)) && r(Error('Failed to schedule timer.'));
          }).o(function (t) {
            throw (s.clearTimeout(e), t);
          });
        }
        function Cn(t) {
          if (t.V && 'function' == typeof t.V) return t.V();
          if ('string' == typeof t) return t.split('');
          if (h(t)) {
            for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
            return e;
          }
          for (r in ((e = []), (n = 0), t)) e[n++] = t[r];
          return e;
        }
        function In(t) {
          if (t.X && 'function' == typeof t.X) return t.X();
          if (!t.V || 'function' != typeof t.V) {
            if (h(t) || 'string' == typeof t) {
              var e = [];
              t = t.length;
              for (var n = 0; n < t; n++) e.push(n);
              return e;
            }
            for (var r in ((e = []), (n = 0), t)) e[n++] = r;
            return e;
          }
        }
        function Tn(t, e) {
          (this.b = {}), (this.a = []), (this.c = 0);
          var n = arguments.length;
          if (1 < n) {
            if (n % 2) throw Error('Uneven number of arguments');
            for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1]);
          } else if (t)
            if (t instanceof Tn) for (n = t.X(), r = 0; r < n.length; r++) this.set(n[r], t.get(n[r]));
            else for (r in t) this.set(r, t[r]);
        }
        function xn(t) {
          if (t.c != t.a.length) {
            for (var e = 0, n = 0; e < t.a.length; ) {
              var r = t.a[e];
              kn(t.b, r) && (t.a[n++] = r), e++;
            }
            t.a.length = n;
          }
          if (t.c != t.a.length) {
            var i = {};
            for (n = e = 0; e < t.a.length; ) kn(i, (r = t.a[e])) || ((t.a[n++] = r), (i[r] = 1)), e++;
            t.a.length = n;
          }
        }
        function kn(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        E(bn, Ve),
          (bn.prototype[Je] = !0),
          (bn.prototype.addEventListener = function (t, e, n, r) {
            sn(this, t, e, n, r);
          }),
          (bn.prototype.removeEventListener = function (t, e, n, r) {
            cn(this, t, e, n, r);
          }),
          (bn.prototype.dispatchEvent = function (t) {
            var e,
              n = this.eb;
            if (n) for (e = []; n; n = n.eb) e.push(n);
            n = this.Yb;
            var r = t.type || t;
            if ('string' == typeof t) t = new Ge(t, n);
            else if (t instanceof Ge) t.target = t.target || n;
            else {
              var i = t;
              gt((t = new Ge(r, n)), i);
            }
            if (((i = !0), e))
              for (var o = e.length - 1; 0 <= o; o--) {
                var s = (t.b = e[o]);
                i = _n(s, r, !0, t) && i;
              }
            if (((i = _n((s = t.b = n), r, !0, t) && i), (i = _n(s, r, !1, t) && i), e))
              for (o = 0; o < e.length; o++) i = _n((s = t.b = e[o]), r, !1, t) && i;
            return i;
          }),
          (bn.prototype.Ba = function () {
            if ((bn.Za.Ba.call(this), this.u)) {
              var t,
                e = this.u;
              for (t in e.a) {
                for (var n = e.a[t], r = 0; r < n.length; r++) Qe(n[r]);
                delete e.a[t], e.b--;
              }
            }
            this.eb = null;
          }),
          ((t = Tn.prototype).V = function () {
            xn(this);
            for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
            return t;
          }),
          (t.X = function () {
            return xn(this), this.a.concat();
          }),
          (t.clear = function () {
            (this.b = {}), (this.c = this.a.length = 0);
          }),
          (t.get = function (t, e) {
            return kn(this.b, t) ? this.b[t] : e;
          }),
          (t.set = function (t, e) {
            kn(this.b, t) || (this.c++, this.a.push(t)), (this.b[t] = e);
          }),
          (t.forEach = function (t, e) {
            for (var n = this.X(), r = 0; r < n.length; r++) {
              var i = n[r],
                o = this.get(i);
              t.call(e, o, i, this);
            }
          });
        var On = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
        function An(t, e) {
          var n;
          (this.b = this.i = this.f = ''),
            (this.l = null),
            (this.g = this.c = ''),
            (this.h = !1),
            t instanceof An
              ? ((this.h = void 0 !== e ? e : t.h),
                Nn(this, t.f),
                (this.i = t.i),
                (this.b = t.b),
                Rn(this, t.l),
                (this.c = t.c),
                Pn(this, Xn(t.a)),
                (this.g = t.g))
              : t && (n = String(t).match(On))
              ? ((this.h = !!e),
                Nn(this, n[1] || '', !0),
                (this.i = Un(n[2] || '')),
                (this.b = Un(n[3] || '', !0)),
                Rn(this, n[4]),
                (this.c = Un(n[5] || '', !0)),
                Pn(this, n[6] || '', !0),
                (this.g = Un(n[7] || '')))
              : ((this.h = !!e), (this.a = new Wn(null, this.h)));
        }
        function Nn(t, e, n) {
          (t.f = n ? Un(e, !0) : e), t.f && (t.f = t.f.replace(/:$/, ''));
        }
        function Rn(t, e) {
          if (e) {
            if (((e = Number(e)), isNaN(e) || 0 > e)) throw Error('Bad port number ' + e);
            t.l = e;
          } else t.l = null;
        }
        function Pn(t, e, n) {
          e instanceof Wn
            ? ((t.a = e),
              (function (t, e) {
                e &&
                  !t.f &&
                  (Gn(t),
                  (t.c = null),
                  t.a.forEach(function (t, e) {
                    var n = e.toLowerCase();
                    e != n && (Yn(this, e), Zn(this, n, t));
                  }, t)),
                  (t.f = e);
              })(t.a, t.h))
            : (n || (e = Vn(e, $n)), (t.a = new Wn(e, t.h)));
        }
        function Dn(t, e, n) {
          t.a.set(e, n);
        }
        function jn(t, e) {
          return t.a.get(e);
        }
        function Mn(t) {
          return t instanceof An ? new An(t) : new An(t, void 0);
        }
        function Ln(t, e) {
          var n = new An(null, void 0);
          return Nn(n, 'https'), t && (n.b = t), e && (n.c = e), n;
        }
        function Un(t, e) {
          return t ? (e ? decodeURI(t.replace(/%25/g, '%2525')) : decodeURIComponent(t)) : '';
        }
        function Vn(t, e, n) {
          return 'string' == typeof t
            ? ((t = encodeURI(t).replace(e, Fn)), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, '%$1')), t)
            : null;
        }
        function Fn(t) {
          return '%' + (((t = t.charCodeAt(0)) >> 4) & 15).toString(16) + (15 & t).toString(16);
        }
        (An.prototype.toString = function () {
          var t = [],
            e = this.f;
          e && t.push(Vn(e, zn, !0), ':');
          var n = this.b;
          return (
            (n || 'file' == e) &&
              (t.push('//'),
              (e = this.i) && t.push(Vn(e, zn, !0), '@'),
              t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, '%$1')),
              null != (n = this.l) && t.push(':', String(n))),
            (n = this.c) &&
              (this.b && '/' != n.charAt(0) && t.push('/'), t.push(Vn(n, '/' == n.charAt(0) ? Bn : Hn, !0))),
            (n = this.a.toString()) && t.push('?', n),
            (n = this.g) && t.push('#', Vn(n, qn)),
            t.join('')
          );
        }),
          (An.prototype.resolve = function (t) {
            var e = new An(this),
              n = !!t.f;
            n ? Nn(e, t.f) : (n = !!t.i), n ? (e.i = t.i) : (n = !!t.b), n ? (e.b = t.b) : (n = null != t.l);
            var r = t.c;
            if (n) Rn(e, t.l);
            else if ((n = !!t.c)) {
              if ('/' != r.charAt(0))
                if (this.b && !this.c) r = '/' + r;
                else {
                  var i = e.c.lastIndexOf('/');
                  -1 != i && (r = e.c.substr(0, i + 1) + r);
                }
              if ('..' == (i = r) || '.' == i) r = '';
              else if (st(i, './') || st(i, '/.')) {
                (r = 0 == i.lastIndexOf('/', 0)), (i = i.split('/'));
                for (var o = [], s = 0; s < i.length; ) {
                  var a = i[s++];
                  '.' == a
                    ? r && s == i.length && o.push('')
                    : '..' == a
                    ? ((1 < o.length || (1 == o.length && '' != o[0])) && o.pop(), r && s == i.length && o.push(''))
                    : (o.push(a), (r = !0));
                }
                r = o.join('/');
              } else r = i;
            }
            return n ? (e.c = r) : (n = '' !== t.a.toString()), n ? Pn(e, Xn(t.a)) : (n = !!t.g), n && (e.g = t.g), e;
          });
        var zn = /[#\/\?@]/g,
          Hn = /[#\?:]/g,
          Bn = /[#\?]/g,
          $n = /[#\?@]/g,
          qn = /#/g;
        function Wn(t, e) {
          (this.b = this.a = null), (this.c = t || null), (this.f = !!e);
        }
        function Gn(t) {
          t.a ||
            ((t.a = new Tn()),
            (t.b = 0),
            t.c &&
              (function (t, e) {
                if (t) {
                  t = t.split('&');
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n].indexOf('='),
                      i = null;
                    if (0 <= r) {
                      var o = t[n].substring(0, r);
                      i = t[n].substring(r + 1);
                    } else o = t[n];
                    e(o, i ? decodeURIComponent(i.replace(/\+/g, ' ')) : '');
                  }
                }
              })(t.c, function (e, n) {
                t.add(decodeURIComponent(e.replace(/\+/g, ' ')), n);
              }));
        }
        function Kn(t) {
          var e = In(t);
          if (void 0 === e) throw Error('Keys are undefined');
          var n = new Wn(null, void 0);
          t = Cn(t);
          for (var r = 0; r < e.length; r++) {
            var i = e[r],
              o = t[r];
            Array.isArray(o) ? Zn(n, i, o) : n.add(i, o);
          }
          return n;
        }
        function Yn(t, e) {
          Gn(t),
            (e = Qn(t, e)),
            kn(t.a.b, e) &&
              ((t.c = null),
              (t.b -= t.a.get(e).length),
              kn((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && xn(t)));
        }
        function Jn(t, e) {
          return Gn(t), (e = Qn(t, e)), kn(t.a.b, e);
        }
        function Zn(t, e, n) {
          Yn(t, e), 0 < n.length && ((t.c = null), t.a.set(Qn(t, e), J(n)), (t.b += n.length));
        }
        function Xn(t) {
          var e = new Wn();
          return (e.c = t.c), t.a && ((e.a = new Tn(t.a)), (e.b = t.b)), e;
        }
        function Qn(t, e) {
          return (e = String(e)), t.f && (e = e.toLowerCase()), e;
        }
        function tr(t) {
          var e = [];
          return (
            (function t(e, n, r) {
              if (null == n) r.push('null');
              else {
                if ('object' == typeof n) {
                  if (Array.isArray(n)) {
                    var i = n;
                    (n = i.length), r.push('[');
                    for (var o = '', s = 0; s < n; s++) r.push(o), t(e, i[s], r), (o = ',');
                    return void r.push(']');
                  }
                  if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) {
                    for (i in (r.push('{'), (o = ''), n))
                      Object.prototype.hasOwnProperty.call(n, i) &&
                        'function' != typeof (s = n[i]) &&
                        (r.push(o), ir(i, r), r.push(':'), t(e, s, r), (o = ','));
                    return void r.push('}');
                  }
                  n = n.valueOf();
                }
                switch (typeof n) {
                  case 'string':
                    ir(n, r);
                    break;
                  case 'number':
                    r.push(isFinite(n) && !isNaN(n) ? String(n) : 'null');
                    break;
                  case 'boolean':
                    r.push(String(n));
                    break;
                  case 'function':
                    r.push('null');
                    break;
                  default:
                    throw Error('Unknown type: ' + typeof n);
                }
              }
            })(new er(), t, e),
            e.join('')
          );
        }
        function er() {}
        ((t = Wn.prototype).add = function (t, e) {
          Gn(this), (this.c = null), (t = Qn(this, t));
          var n = this.a.get(t);
          return n || this.a.set(t, (n = [])), n.push(e), (this.b += 1), this;
        }),
          (t.clear = function () {
            (this.a = this.c = null), (this.b = 0);
          }),
          (t.forEach = function (t, e) {
            Gn(this),
              this.a.forEach(function (n, r) {
                H(
                  n,
                  function (n) {
                    t.call(e, n, r, this);
                  },
                  this
                );
              }, this);
          }),
          (t.X = function () {
            Gn(this);
            for (var t = this.a.V(), e = this.a.X(), n = [], r = 0; r < e.length; r++)
              for (var i = t[r], o = 0; o < i.length; o++) n.push(e[r]);
            return n;
          }),
          (t.V = function (t) {
            Gn(this);
            var e = [];
            if ('string' == typeof t) Jn(this, t) && (e = Y(e, this.a.get(Qn(this, t))));
            else {
              t = this.a.V();
              for (var n = 0; n < t.length; n++) e = Y(e, t[n]);
            }
            return e;
          }),
          (t.set = function (t, e) {
            return (
              Gn(this),
              (this.c = null),
              Jn(this, (t = Qn(this, t))) && (this.b -= this.a.get(t).length),
              this.a.set(t, [e]),
              (this.b += 1),
              this
            );
          }),
          (t.get = function (t, e) {
            return t && 0 < (t = this.V(t)).length ? String(t[0]) : e;
          }),
          (t.toString = function () {
            if (this.c) return this.c;
            if (!this.a) return '';
            for (var t = [], e = this.a.X(), n = 0; n < e.length; n++) {
              var r = e[n],
                i = encodeURIComponent(String(r));
              r = this.V(r);
              for (var o = 0; o < r.length; o++) {
                var s = i;
                '' !== r[o] && (s += '=' + encodeURIComponent(String(r[o]))), t.push(s);
              }
            }
            return (this.c = t.join('&'));
          });
        var nr = {
            '"': '\\"',
            '\\': '\\\\',
            '/': '\\/',
            '\b': '\\b',
            '\f': '\\f',
            '\n': '\\n',
            '\r': '\\r',
            '\t': '\\t',
            '\v': '\\u000b'
          },
          rr = /\uffff/.test('\uffff') ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
        function ir(t, e) {
          e.push(
            '"',
            t.replace(rr, function (t) {
              var e = nr[t];
              return e || ((e = '\\u' + (65536 | t.charCodeAt(0)).toString(16).substr(1)), (nr[t] = e)), e;
            }),
            '"'
          );
        }
        function or() {
          var t = Er();
          return (Wt && !!ee && 11 == ee) || /Edge\/\d+/.test(t);
        }
        function sr() {
          return (s.window && s.window.location.href) || (self && self.location && self.location.href) || '';
        }
        function ar(t, e) {
          e = e || s.window;
          var n = 'about:blank';
          t && (n = At(Rt(t))), (e.location.href = n);
        }
        function ur(t) {
          return !!(
            (t = (t || Er()).toLowerCase()).match(/android/) ||
            t.match(/webos/) ||
            t.match(/iphone|ipad|ipod/) ||
            t.match(/blackberry/) ||
            t.match(/windows phone/) ||
            t.match(/iemobile/)
          );
        }
        function cr(t) {
          t = t || s.window;
          try {
            t.close();
          } catch (e) {}
        }
        function lr(t, e, n) {
          var r = Math.floor(1e9 * Math.random()).toString();
          (e = e || 500), (n = n || 600);
          var i = (window.screen.availHeight - n) / 2,
            o = (window.screen.availWidth - e) / 2;
          for (s in ((e = {
            width: e,
            height: n,
            top: 0 < i ? i : 0,
            left: 0 < o ? o : 0,
            location: !0,
            resizable: !0,
            statusbar: !0,
            toolbar: !1
          }),
          (n = Er().toLowerCase()),
          r && ((e.target = r), st(n, 'crios/') && (e.target = '_blank')),
          wr(Er()) == yr && ((t = t || 'http://localhost'), (e.scrollbars = !0)),
          (n = t || ''),
          (t = e) || (t = {}),
          (r = window),
          (e = n instanceof Ot ? n : Rt(void 0 !== n.href ? n.href : String(n))),
          (n = t.target || n.target),
          (i = []),
          t))
            switch (s) {
              case 'width':
              case 'height':
              case 'top':
              case 'left':
                i.push(s + '=' + t[s]);
                break;
              case 'target':
              case 'noopener':
              case 'noreferrer':
                break;
              default:
                i.push(s + '=' + (t[s] ? 1 : 0));
            }
          var s = i.join(',');
          if (
            (((lt('iPhone') && !lt('iPod') && !lt('iPad')) || lt('iPad') || lt('iPod')) &&
            r.navigator &&
            r.navigator.standalone &&
            n &&
            '_self' != n
              ? (mt((s = he(document, 'A')), 'HTMLAnchorElement'),
                e instanceof Ot ||
                  e instanceof Ot ||
                  ((e = 'object' == typeof e && e.ra ? e.qa() : String(e)),
                  Nt.test(e) || (e = 'about:invalid#zClosurez'),
                  (e = new Ot(Dt, e))),
                (s.href = At(e)),
                s.setAttribute('target', n),
                t.noreferrer && s.setAttribute('rel', 'noreferrer'),
                (t = document.createEvent('MouseEvent')).initMouseEvent('click', !0, !0, r, 1),
                s.dispatchEvent(t),
                (s = {}))
              : t.noreferrer
              ? ((s = r.open('', n, s)),
                (t = At(e)),
                s &&
                  (Kt && st(t, ';') && (t = "'" + t.replace(/'/g, '%27') + "'"),
                  (s.opener = null),
                  (t = Ut(
                    '<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' +
                      zt(t) +
                      '">'
                  )),
                  (r = s.document)) &&
                  (r.write(Mt(t)), r.close()))
              : (s = r.open(At(e), n, s)) && t.noopener && (s.opener = null),
            s)
          )
            try {
              s.focus();
            } catch (a) {}
          return s;
        }
        var hr = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
          dr = /^[^@]+@[^@]+$/;
        function fr() {
          var t = null;
          return new be(function (e) {
            'complete' == s.document.readyState
              ? e()
              : ((t = function () {
                  e();
                }),
                un(window, 'load', t));
          }).o(function (e) {
            throw (cn(window, 'load', t), e);
          });
        }
        function pr(t) {
          return (
            (t = t || Er()),
            !(('file:' !== kr() && 'ionic:' !== kr()) || !t.toLowerCase().match(/iphone|ipad|ipod|android/))
          );
        }
        function gr() {
          var t = s.window;
          try {
            return !(!t || t == t.top);
          } catch (e) {
            return !1;
          }
        }
        function mr() {
          return void 0 !== s.WorkerGlobalScope && 'function' == typeof s.importScripts;
        }
        function vr() {
          return y.a.INTERNAL.hasOwnProperty('reactNative')
            ? 'ReactNative'
            : y.a.INTERNAL.hasOwnProperty('node')
            ? 'Node'
            : mr()
            ? 'Worker'
            : 'Browser';
        }
        function br() {
          var t = vr();
          return 'ReactNative' === t || 'Node' === t;
        }
        var yr = 'Firefox';
        function wr(t) {
          var e = t.toLowerCase();
          return st(e, 'opera/') || st(e, 'opr/') || st(e, 'opios/')
            ? 'Opera'
            : st(e, 'iemobile')
            ? 'IEMobile'
            : st(e, 'msie') || st(e, 'trident/')
            ? 'IE'
            : st(e, 'edge/')
            ? 'Edge'
            : st(e, 'firefox/')
            ? yr
            : st(e, 'silk/')
            ? 'Silk'
            : st(e, 'blackberry')
            ? 'Blackberry'
            : st(e, 'webos')
            ? 'Webos'
            : !st(e, 'safari/') || st(e, 'chrome/') || st(e, 'crios/') || st(e, 'android')
            ? (!st(e, 'chrome/') && !st(e, 'crios/')) || st(e, 'edge/')
              ? st(e, 'android')
                ? 'Android'
                : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length
                ? t[1]
                : 'Other'
              : 'Chrome'
            : 'Safari';
        }
        var _r = { jd: 'FirebaseCore-web', ld: 'FirebaseUI-web' };
        function Sr(t, e) {
          e = e || [];
          var n,
            r = [],
            i = {};
          for (n in _r) i[_r[n]] = !0;
          for (n = 0; n < e.length; n++) void 0 !== i[e[n]] && (delete i[e[n]], r.push(e[n]));
          return (
            r.sort(),
            (e = r).length || (e = ['FirebaseCore-web']),
            'Browser' === (r = vr()) ? (r = wr((i = Er()))) : 'Worker' === r && (r = wr((i = Er())) + '-' + r),
            r + '/JsCore/' + t + '/' + e.join(',')
          );
        }
        function Er() {
          return (s.navigator && s.navigator.userAgent) || '';
        }
        function Cr(t, e) {
          (t = t.split('.')), (e = e || s);
          for (var n = 0; n < t.length && 'object' == typeof e && null != e; n++) e = e[t[n]];
          return n != t.length && (e = void 0), e;
        }
        function Ir() {
          try {
            var t = s.localStorage,
              e = Pr();
            if (t) return t.setItem(e, '1'), t.removeItem(e), !or() || !!s.indexedDB;
          } catch (n) {
            return mr() && !!s.indexedDB;
          }
          return !1;
        }
        function Tr() {
          return (xr() || 'chrome-extension:' === kr() || pr()) && !br() && Ir() && !mr();
        }
        function xr() {
          return 'http:' === kr() || 'https:' === kr();
        }
        function kr() {
          return (s.location && s.location.protocol) || null;
        }
        function Or(t) {
          return !ur((t = t || Er())) && wr(t) != yr;
        }
        function Ar(t) {
          return void 0 === t ? null : tr(t);
        }
        function Nr(t) {
          var e,
            n = {};
          for (e in t) t.hasOwnProperty(e) && null != t[e] && (n[e] = t[e]);
          return n;
        }
        function Rr(t) {
          if (null !== t) return JSON.parse(t);
        }
        function Pr(t) {
          return t || Math.floor(1e9 * Math.random()).toString();
        }
        function Dr(t) {
          return 'Safari' != wr((t = t || Er())) && !t.toLowerCase().match(/iphone|ipad|ipod/);
        }
        function jr() {
          var t = s.___jsl;
          if (t && t.H)
            for (var e in t.H)
              if (((t.H[e].r = t.H[e].r || []), (t.H[e].L = t.H[e].L || []), (t.H[e].r = t.H[e].L.concat()), t.CP))
                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null;
        }
        function Mr(t, e) {
          if (t > e) throw Error('Short delay should be less than long delay!');
          (this.a = t), (this.c = e), (t = Er()), (e = vr()), (this.b = ur(t) || 'ReactNative' === e);
        }
        function Lr() {
          var t = s.document;
          return !t || void 0 === t.visibilityState || 'visible' == t.visibilityState;
        }
        function Ur(t) {
          try {
            var e = new Date(parseInt(t, 10));
            if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString();
          } catch (n) {}
          return null;
        }
        function Vr() {
          return !(!Cr('fireauth.oauthhelper', s) && !Cr('fireauth.iframe', s));
        }
        Mr.prototype.get = function () {
          var t = s.navigator;
          return !t ||
            'boolean' != typeof t.onLine ||
            (!xr() && 'chrome-extension:' !== kr() && void 0 === t.connection) ||
            t.onLine
            ? this.b
              ? this.c
              : this.a
            : Math.min(5e3, this.a);
        };
        var Fr,
          zr = {};
        function Hr(t) {
          zr[t] ||
            ((zr[t] = !0), 'undefined' != typeof console && 'function' == typeof console.warn && console.warn(t));
        }
        try {
          var Br = {};
          Object.defineProperty(Br, 'abcd', { configurable: !0, enumerable: !0, value: 1 }),
            Object.defineProperty(Br, 'abcd', { configurable: !0, enumerable: !0, value: 2 }),
            (Fr = 2 == Br.abcd);
        } catch ($t) {
          Fr = !1;
        }
        function $r(t, e, n) {
          Fr ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : (t[e] = n);
        }
        function qr(t, e) {
          if (e) for (var n in e) e.hasOwnProperty(n) && $r(t, n, e[n]);
        }
        function Wr(t) {
          var e = {};
          return qr(e, t), e;
        }
        function Gr(t) {
          var e = t;
          if ('object' == typeof t && null != t) for (var n in ((e = 'length' in t ? [] : {}), t)) $r(e, n, Gr(t[n]));
          return e;
        }
        function Kr(t) {
          var e = t && (t[Qr] ? 'phone' : null);
          if (!(e && t && t[Xr])) throw new C('internal-error', 'Internal assert: invalid MultiFactorInfo object');
          $r(this, 'uid', t[Xr]), $r(this, 'displayName', t[Jr] || null);
          var n = null;
          t[Zr] && (n = new Date(t[Zr]).toUTCString()), $r(this, 'enrollmentTime', n), $r(this, 'factorId', e);
        }
        function Yr(t) {
          try {
            var e = new ti(t);
          } catch (n) {
            e = null;
          }
          return e;
        }
        Kr.prototype.v = function () {
          return {
            uid: this.uid,
            displayName: this.displayName,
            factorId: this.factorId,
            enrollmentTime: this.enrollmentTime
          };
        };
        var Jr = 'displayName',
          Zr = 'enrolledAt',
          Xr = 'mfaEnrollmentId',
          Qr = 'phoneInfo';
        function ti(t) {
          Kr.call(this, t), $r(this, 'phoneNumber', t[Qr]);
        }
        function ei(t) {
          var e = {},
            n = t[oi],
            r = t[ai],
            i = t[ui];
          if (((t = Yr(t[si])), !i || (i != ri && i != ii && !n) || (i == ii && !r) || (i == ni && !t)))
            throw Error('Invalid checkActionCode response!');
          i == ii
            ? ((e[li] = n || null), (e[di] = n || null), (e[ci] = r))
            : ((e[li] = r || null), (e[di] = r || null), (e[ci] = n || null)),
            (e[hi] = t || null),
            $r(this, pi, i),
            $r(this, fi, Gr(e));
        }
        E(ti, Kr),
          (ti.prototype.v = function () {
            var t = ti.Za.v.call(this);
            return (t.phoneNumber = this.phoneNumber), t;
          });
        var ni = 'REVERT_SECOND_FACTOR_ADDITION',
          ri = 'EMAIL_SIGNIN',
          ii = 'VERIFY_AND_CHANGE_EMAIL',
          oi = 'email',
          si = 'mfaInfo',
          ai = 'newEmail',
          ui = 'requestType',
          ci = 'email',
          li = 'fromEmail',
          hi = 'multiFactorInfo',
          di = 'previousEmail',
          fi = 'data',
          pi = 'operation';
        function gi(t) {
          var e = jn((t = Mn(t)), mi) || null,
            n = jn(t, vi) || null,
            r = jn(t, wi) || null;
          if (((r = (r && Si[r]) || null), !e || !n || !r))
            throw new C('argument-error', mi + ', ' + vi + 'and ' + wi + ' are required in a valid action code URL.');
          qr(this, {
            apiKey: e,
            operation: r,
            code: n,
            continueUrl: jn(t, bi) || null,
            languageCode: jn(t, yi) || null,
            tenantId: jn(t, _i) || null
          });
        }
        var mi = 'apiKey',
          vi = 'oobCode',
          bi = 'continueUrl',
          yi = 'languageCode',
          wi = 'mode',
          _i = 'tenantId',
          Si = {
            recoverEmail: 'RECOVER_EMAIL',
            resetPassword: 'PASSWORD_RESET',
            revertSecondFactorAddition: ni,
            signIn: ri,
            verifyAndChangeEmail: ii,
            verifyEmail: 'VERIFY_EMAIL'
          };
        function Ei(t) {
          try {
            return new gi(t);
          } catch (e) {
            return null;
          }
        }
        function Ci(t) {
          var e = t[Oi];
          if (void 0 === e) throw new C('missing-continue-uri');
          if ('string' != typeof e || ('string' == typeof e && !e.length)) throw new C('invalid-continue-uri');
          (this.h = e), (this.b = this.a = null), (this.g = !1);
          var n = t[Ii];
          if (n && 'object' == typeof n) {
            e = n[Ri];
            var r = n[Ai];
            if (((n = n[Ni]), 'string' == typeof e && e.length)) {
              if (((this.a = e), void 0 !== r && 'boolean' != typeof r))
                throw new C('argument-error', Ai + ' property must be a boolean when specified.');
              if (((this.g = !!r), void 0 !== n && ('string' != typeof n || ('string' == typeof n && !n.length))))
                throw new C('argument-error', Ni + ' property must be a non empty string when specified.');
              this.b = n || null;
            } else {
              if (void 0 !== e)
                throw new C('argument-error', Ri + ' property must be a non empty string when specified.');
              if (void 0 !== r || void 0 !== n) throw new C('missing-android-pkg-name');
            }
          } else if (void 0 !== n)
            throw new C('argument-error', Ii + ' property must be a non null object when specified.');
          if (((this.f = null), (e = t[ki]) && 'object' == typeof e)) {
            if ('string' == typeof (e = e[Pi]) && e.length) this.f = e;
            else if (void 0 !== e)
              throw new C('argument-error', Pi + ' property must be a non empty string when specified.');
          } else if (void 0 !== e)
            throw new C('argument-error', ki + ' property must be a non null object when specified.');
          if (void 0 !== (e = t[xi]) && 'boolean' != typeof e)
            throw new C('argument-error', xi + ' property must be a boolean when specified.');
          if (((this.c = !!e), void 0 !== (t = t[Ti]) && ('string' != typeof t || ('string' == typeof t && !t.length))))
            throw new C('argument-error', Ti + ' property must be a non empty string when specified.');
          this.i = t || null;
        }
        var Ii = 'android',
          Ti = 'dynamicLinkDomain',
          xi = 'handleCodeInApp',
          ki = 'iOS',
          Oi = 'url',
          Ai = 'installApp',
          Ni = 'minimumVersion',
          Ri = 'packageName',
          Pi = 'bundleId';
        function Di(t) {
          var e = {};
          for (var n in ((e.continueUrl = t.h),
          (e.canHandleCodeInApp = t.c),
          (e.androidPackageName = t.a) && ((e.androidMinimumVersion = t.b), (e.androidInstallApp = t.g)),
          (e.iOSBundleId = t.f),
          (e.dynamicLinkDomain = t.i),
          e))
            null === e[n] && delete e[n];
          return e;
        }
        var ji = null;
        function Mi(t) {
          var e = Ui(t);
          if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error('Invalid JWT');
          (this.g = t),
            (this.c = e.exp),
            (this.h = e.sub),
            S(),
            (this.a = e.provider_id || (e.firebase && e.firebase.sign_in_provider) || null),
            (this.f = (e.firebase && e.firebase.tenant) || null),
            (this.b = !!e.is_anonymous || 'anonymous' == this.a);
        }
        function Li(t) {
          try {
            return new Mi(t);
          } catch (e) {
            return null;
          }
        }
        function Ui(t) {
          if (!t) return null;
          if (3 != (t = t.split('.')).length) return null;
          for (var e = (4 - ((t = t[1]).length % 4)) % 4, n = 0; n < e; n++) t += '.';
          try {
            return JSON.parse(
              (function (t) {
                var e = '';
                return (
                  (function (t, e) {
                    function n(e) {
                      for (; r < t.length; ) {
                        var n = t.charAt(r++),
                          i = ji[n];
                        if (null != i) return i;
                        if (!/^[\s\xa0]*$/.test(n)) throw Error('Unknown base64 encoding at char: ' + n);
                      }
                      return e;
                    }
                    !(function () {
                      if (!ji) {
                        ji = {};
                        for (
                          var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
                            e = ['+/=', '+/', '-_=', '-_.', '-_'],
                            n = 0;
                          5 > n;
                          n++
                        )
                          for (var r = t.concat(e[n].split('')), i = 0; i < r.length; i++) {
                            var o = r[i];
                            void 0 === ji[o] && (ji[o] = i);
                          }
                      }
                    })();
                    for (var r = 0; ; ) {
                      var i = n(-1),
                        o = n(0),
                        s = n(64),
                        a = n(64);
                      if (64 === a && -1 === i) break;
                      e((i << 2) | (o >> 4)),
                        64 != s && (e(((o << 4) & 240) | (s >> 2)), 64 != a && e(((s << 6) & 192) | a));
                    }
                  })(t, function (t) {
                    e += String.fromCharCode(t);
                  }),
                  e
                );
              })(t)
            );
          } catch (r) {}
          return null;
        }
        (Mi.prototype.S = function () {
          return this.f;
        }),
          (Mi.prototype.i = function () {
            return this.b;
          }),
          (Mi.prototype.toString = function () {
            return this.g;
          });
        var Vi = 'oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version'.split(
            ' '
          ),
          Fi = ['client_id', 'response_type', 'scope', 'redirect_uri', 'state'],
          zi = {
            kd: { Ha: 'locale', ta: 700, sa: 600, ea: 'facebook.com', Va: Fi },
            md: { Ha: null, ta: 500, sa: 750, ea: 'github.com', Va: Fi },
            nd: { Ha: 'hl', ta: 515, sa: 680, ea: 'google.com', Va: Fi },
            td: { Ha: 'lang', ta: 485, sa: 705, ea: 'twitter.com', Va: Vi },
            gd: { Ha: 'locale', ta: 640, sa: 600, ea: 'apple.com', Va: [] }
          };
        function Hi(t) {
          for (var e in zi) if (zi[e].ea == t) return zi[e];
          return null;
        }
        function Bi(t) {
          var e = {};
          (e['facebook.com'] = Ki), (e['google.com'] = Ji), (e['github.com'] = Yi), (e['twitter.com'] = Zi);
          var n = t && t[qi];
          try {
            if (n) return e[n] ? new e[n](t) : new Gi(t);
            if (void 0 !== t[$i]) return new Wi(t);
          } catch (r) {}
          return null;
        }
        var $i = 'idToken',
          qi = 'providerId';
        function Wi(t) {
          var e = t[qi];
          if (!e && t[$i]) {
            var n = Li(t[$i]);
            n && n.a && (e = n.a);
          }
          if (!e) throw Error('Invalid additional user info!');
          ('anonymous' != e && 'custom' != e) || (e = null),
            (n = !1),
            void 0 !== t.isNewUser
              ? (n = !!t.isNewUser)
              : 'identitytoolkit#SignupNewUserResponse' === t.kind && (n = !0),
            $r(this, 'providerId', e),
            $r(this, 'isNewUser', n);
        }
        function Gi(t) {
          Wi.call(this, t), $r(this, 'profile', Gr((t = Rr(t.rawUserInfo || '{}')) || {}));
        }
        function Ki(t) {
          if ((Gi.call(this, t), 'facebook.com' != this.providerId)) throw Error('Invalid provider ID!');
        }
        function Yi(t) {
          if ((Gi.call(this, t), 'github.com' != this.providerId)) throw Error('Invalid provider ID!');
          $r(this, 'username', (this.profile && this.profile.login) || null);
        }
        function Ji(t) {
          if ((Gi.call(this, t), 'google.com' != this.providerId)) throw Error('Invalid provider ID!');
        }
        function Zi(t) {
          if ((Gi.call(this, t), 'twitter.com' != this.providerId)) throw Error('Invalid provider ID!');
          $r(this, 'username', t.screenName || null);
        }
        function Xi(t) {
          var e = Mn(t),
            n = jn(e, 'link'),
            r = jn(Mn(n), 'link');
          return (e = jn(e, 'deep_link_id')), jn(Mn(e), 'link') || e || r || n || t;
        }
        function Qi(t, e) {
          if (!t && !e) throw new C('internal-error', 'Internal assert: no raw session string available');
          if (t && e) throw new C('internal-error', 'Internal assert: unable to determine the session type');
          (this.a = t || null), (this.b = e || null), (this.type = this.a ? to : eo);
        }
        E(Gi, Wi), E(Ki, Gi), E(Yi, Gi), E(Ji, Gi), E(Zi, Gi);
        var to = 'enroll',
          eo = 'signin';
        function no() {}
        function ro(t, e) {
          return t
            .then(function (t) {
              if (t[Bs]) {
                var n = Li(t[Bs]);
                if (!n || e != n.h) throw new C('user-mismatch');
                return t;
              }
              throw new C('user-mismatch');
            })
            .o(function (t) {
              throw t && t.code && t.code == x + 'user-not-found' ? new C('user-mismatch') : t;
            });
        }
        function io(t, e) {
          if (!e) throw new C('internal-error', 'failed to construct a credential');
          (this.a = e), $r(this, 'providerId', t), $r(this, 'signInMethod', t);
        }
        function oo(t) {
          return { pendingToken: t.a, requestUri: 'http://localhost' };
        }
        function so(t) {
          if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf('saml.') && t.pendingToken)
            try {
              return new io(t.providerId, t.pendingToken);
            } catch (e) {}
          return null;
        }
        function ao(t, e, n) {
          if (((this.a = null), e.idToken || e.accessToken))
            e.idToken && $r(this, 'idToken', e.idToken),
              e.accessToken && $r(this, 'accessToken', e.accessToken),
              e.nonce && !e.pendingToken && $r(this, 'nonce', e.nonce),
              e.pendingToken && (this.a = e.pendingToken);
          else {
            if (!e.oauthToken || !e.oauthTokenSecret) throw new C('internal-error', 'failed to construct a credential');
            $r(this, 'accessToken', e.oauthToken), $r(this, 'secret', e.oauthTokenSecret);
          }
          $r(this, 'providerId', t), $r(this, 'signInMethod', n);
        }
        function uo(t) {
          var e = {};
          return (
            t.idToken && (e.id_token = t.idToken),
            t.accessToken && (e.access_token = t.accessToken),
            t.secret && (e.oauth_token_secret = t.secret),
            (e.providerId = t.providerId),
            t.nonce && !t.a && (e.nonce = t.nonce),
            (e = { postBody: Kn(e).toString(), requestUri: 'http://localhost' }),
            t.a && (delete e.postBody, (e.pendingToken = t.a)),
            e
          );
        }
        function co(t) {
          if (t && t.providerId && t.signInMethod) {
            var e = {
              idToken: t.oauthIdToken,
              accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken,
              oauthTokenSecret: t.oauthTokenSecret,
              oauthToken: t.oauthTokenSecret && t.oauthAccessToken,
              nonce: t.nonce,
              pendingToken: t.pendingToken
            };
            try {
              return new ao(t.providerId, e, t.signInMethod);
            } catch (n) {}
          }
          return null;
        }
        function lo(t, e) {
          (this.Oc = e || []),
            qr(this, { providerId: t, isOAuthProvider: !0 }),
            (this.Fb = {}),
            (this.lb = (Hi(t) || {}).Ha || null),
            (this.kb = null);
        }
        function ho(t) {
          if ('string' != typeof t || 0 != t.indexOf('saml.'))
            throw new C('argument-error', 'SAML provider IDs must be prefixed with "saml."');
          lo.call(this, t, []);
        }
        function fo(t) {
          lo.call(this, t, Fi), (this.a = []);
        }
        function po() {
          fo.call(this, 'facebook.com');
        }
        function go(t) {
          if (!t) throw new C('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var e = t;
          return f(t) && (e = t.accessToken), new po().credential({ accessToken: e });
        }
        function mo() {
          fo.call(this, 'github.com');
        }
        function vo(t) {
          if (!t) throw new C('argument-error', 'credential failed: expected 1 argument (the OAuth access token).');
          var e = t;
          return f(t) && (e = t.accessToken), new mo().credential({ accessToken: e });
        }
        function bo() {
          fo.call(this, 'google.com'), this.Aa('profile');
        }
        function yo(t, e) {
          var n = t;
          return f(t) && ((n = t.idToken), (e = t.accessToken)), new bo().credential({ idToken: n, accessToken: e });
        }
        function wo() {
          lo.call(this, 'twitter.com', Vi);
        }
        function _o(t, e) {
          var n = t;
          if ((f(n) || (n = { oauthToken: t, oauthTokenSecret: e }), !n.oauthToken || !n.oauthTokenSecret))
            throw new C(
              'argument-error',
              'credential failed: expected 2 arguments (the OAuth access token and secret).'
            );
          return new ao('twitter.com', n, 'twitter.com');
        }
        function So(t, e, n) {
          (this.a = t),
            (this.f = e),
            $r(this, 'providerId', 'password'),
            $r(
              this,
              'signInMethod',
              n === Co.EMAIL_LINK_SIGN_IN_METHOD ? Co.EMAIL_LINK_SIGN_IN_METHOD : Co.EMAIL_PASSWORD_SIGN_IN_METHOD
            );
        }
        function Eo(t) {
          return t && t.email && t.password ? new So(t.email, t.password, t.signInMethod) : null;
        }
        function Co() {
          qr(this, { providerId: 'password', isOAuthProvider: !1 });
        }
        function Io(t, e) {
          if (!(e = To(e))) throw new C('argument-error', 'Invalid email link!');
          return new So(t, e.code, Co.EMAIL_LINK_SIGN_IN_METHOD);
        }
        function To(t) {
          return (t = Ei((t = Xi(t)))) && t.operation === ri ? t : null;
        }
        function xo(t) {
          if (!((t.bb && t.ab) || (t.Ja && t.da))) throw new C('internal-error');
          (this.a = t), $r(this, 'providerId', 'phone'), (this.ea = 'phone'), $r(this, 'signInMethod', 'phone');
        }
        function ko(t) {
          if (
            t &&
            'phone' === t.providerId &&
            ((t.verificationId && t.verificationCode) || (t.temporaryProof && t.phoneNumber))
          ) {
            var e = {};
            return (
              H(['verificationId', 'verificationCode', 'temporaryProof', 'phoneNumber'], function (n) {
                t[n] && (e[n] = t[n]);
              }),
              new xo(e)
            );
          }
          return null;
        }
        function Oo(t) {
          return t.a.Ja && t.a.da
            ? { temporaryProof: t.a.Ja, phoneNumber: t.a.da }
            : { sessionInfo: t.a.bb, code: t.a.ab };
        }
        function Ao(t) {
          try {
            this.a = t || y.a.auth();
          } catch (e) {
            throw new C(
              'argument-error',
              'Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().'
            );
          }
          qr(this, { providerId: 'phone', isOAuthProvider: !1 });
        }
        function No(t, e) {
          if (!t) throw new C('missing-verification-id');
          if (!e) throw new C('missing-verification-code');
          return new xo({ bb: t, ab: e });
        }
        function Ro(t) {
          if (t.temporaryProof && t.phoneNumber) return new xo({ Ja: t.temporaryProof, da: t.phoneNumber });
          var e = t && t.providerId;
          if (!e || 'password' === e) return null;
          var n = t && t.oauthAccessToken,
            r = t && t.oauthTokenSecret,
            i = t && t.nonce,
            o = t && t.oauthIdToken,
            s = t && t.pendingToken;
          try {
            switch (e) {
              case 'google.com':
                return yo(o, n);
              case 'facebook.com':
                return go(n);
              case 'github.com':
                return vo(n);
              case 'twitter.com':
                return _o(n, r);
              default:
                return n || r || o || s
                  ? s
                    ? 0 == e.indexOf('saml.')
                      ? new io(e, s)
                      : new ao(e, { pendingToken: s, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, e)
                    : new fo(e).credential({ idToken: o, accessToken: n, rawNonce: i })
                  : null;
            }
          } catch (a) {
            return null;
          }
        }
        function Po(t) {
          if (!t.isOAuthProvider) throw new C('invalid-oauth-provider');
        }
        function Do(t, e, n, r, i, o, s) {
          if (
            ((this.c = t),
            (this.b = e || null),
            (this.g = n || null),
            (this.f = r || null),
            (this.i = o || null),
            (this.h = s || null),
            (this.a = i || null),
            !this.g && !this.a)
          )
            throw new C('invalid-auth-event');
          if (this.g && this.a) throw new C('invalid-auth-event');
          if (this.g && !this.f) throw new C('invalid-auth-event');
        }
        function jo(t) {
          return (t = t || {}).type
            ? new Do(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && I(t.error), t.postBody, t.tenantId)
            : null;
        }
        function Mo() {
          (this.b = null), (this.a = []);
        }
        (Qi.prototype.Fa = function () {
          return Ie(this.a ? this.a : this.b);
        }),
          (Qi.prototype.v = function () {
            return this.type == to
              ? { multiFactorSession: { idToken: this.a } }
              : { multiFactorSession: { pendingCredential: this.b } };
          }),
          (no.prototype.ia = function () {}),
          (no.prototype.b = function () {}),
          (no.prototype.c = function () {}),
          (no.prototype.v = function () {}),
          (io.prototype.ia = function (t) {
            return ua(t, oo(this));
          }),
          (io.prototype.b = function (t, e) {
            var n = oo(this);
            return (n.idToken = e), ca(t, n);
          }),
          (io.prototype.c = function (t, e) {
            return ro(la(t, oo(this)), e);
          }),
          (io.prototype.v = function () {
            return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a };
          }),
          (ao.prototype.ia = function (t) {
            return ua(t, uo(this));
          }),
          (ao.prototype.b = function (t, e) {
            var n = uo(this);
            return (n.idToken = e), ca(t, n);
          }),
          (ao.prototype.c = function (t, e) {
            return ro(la(t, uo(this)), e);
          }),
          (ao.prototype.v = function () {
            var t = { providerId: this.providerId, signInMethod: this.signInMethod };
            return (
              this.idToken && (t.oauthIdToken = this.idToken),
              this.accessToken && (t.oauthAccessToken = this.accessToken),
              this.secret && (t.oauthTokenSecret = this.secret),
              this.nonce && (t.nonce = this.nonce),
              this.a && (t.pendingToken = this.a),
              t
            );
          }),
          (lo.prototype.Ia = function (t) {
            return (this.Fb = ft(t)), this;
          }),
          E(ho, lo),
          E(fo, lo),
          (fo.prototype.Aa = function (t) {
            return W(this.a, t) || this.a.push(t), this;
          }),
          (fo.prototype.Nb = function () {
            return J(this.a);
          }),
          (fo.prototype.credential = function (t, e) {
            var n;
            if (
              !(n = f(t)
                ? { idToken: t.idToken || null, accessToken: t.accessToken || null, nonce: t.rawNonce || null }
                : { idToken: t || null, accessToken: e || null }).idToken &&
              !n.accessToken
            )
              throw new C('argument-error', 'credential failed: must provide the ID token and/or the access token.');
            return new ao(this.providerId, n, this.providerId);
          }),
          E(po, fo),
          $r(po, 'PROVIDER_ID', 'facebook.com'),
          $r(po, 'FACEBOOK_SIGN_IN_METHOD', 'facebook.com'),
          E(mo, fo),
          $r(mo, 'PROVIDER_ID', 'github.com'),
          $r(mo, 'GITHUB_SIGN_IN_METHOD', 'github.com'),
          E(bo, fo),
          $r(bo, 'PROVIDER_ID', 'google.com'),
          $r(bo, 'GOOGLE_SIGN_IN_METHOD', 'google.com'),
          E(wo, lo),
          $r(wo, 'PROVIDER_ID', 'twitter.com'),
          $r(wo, 'TWITTER_SIGN_IN_METHOD', 'twitter.com'),
          (So.prototype.ia = function (t) {
            return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD
              ? qa(t, ba, { email: this.a, oobCode: this.f })
              : qa(t, Fa, { email: this.a, password: this.f });
          }),
          (So.prototype.b = function (t, e) {
            return this.signInMethod == Co.EMAIL_LINK_SIGN_IN_METHOD
              ? qa(t, ya, { idToken: e, email: this.a, oobCode: this.f })
              : qa(t, Ra, { idToken: e, email: this.a, password: this.f });
          }),
          (So.prototype.c = function (t, e) {
            return ro(this.ia(t), e);
          }),
          (So.prototype.v = function () {
            return { email: this.a, password: this.f, signInMethod: this.signInMethod };
          }),
          qr(Co, { PROVIDER_ID: 'password' }),
          qr(Co, { EMAIL_LINK_SIGN_IN_METHOD: 'emailLink' }),
          qr(Co, { EMAIL_PASSWORD_SIGN_IN_METHOD: 'password' }),
          (xo.prototype.ia = function (t) {
            return t.cb(Oo(this));
          }),
          (xo.prototype.b = function (t, e) {
            var n = Oo(this);
            return (n.idToken = e), qa(t, Ha, n);
          }),
          (xo.prototype.c = function (t, e) {
            var n = Oo(this);
            return (n.operation = 'REAUTH'), ro((t = qa(t, Ba, n)), e);
          }),
          (xo.prototype.v = function () {
            var t = { providerId: 'phone' };
            return (
              this.a.bb && (t.verificationId = this.a.bb),
              this.a.ab && (t.verificationCode = this.a.ab),
              this.a.Ja && (t.temporaryProof = this.a.Ja),
              this.a.da && (t.phoneNumber = this.a.da),
              t
            );
          }),
          (Ao.prototype.cb = function (t, e) {
            var n = this.a.b;
            return Ie(e.verify()).then(function (r) {
              if ('string' != typeof r)
                throw new C(
                  'argument-error',
                  'An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.'
                );
              switch (e.type) {
                case 'recaptcha':
                  var i = f(t) ? t.session : null,
                    o = f(t) ? t.phoneNumber : t;
                  return (i && i.type == to
                    ? i.Fa().then(function (t) {
                        return (function (t, e) {
                          return qa(t, Da, e).then(function (t) {
                            return t.phoneSessionInfo.sessionInfo;
                          });
                        })(n, { idToken: t, phoneEnrollmentInfo: { phoneNumber: o, recaptchaToken: r } });
                      })
                    : i && i.type == eo
                    ? i.Fa().then(function (e) {
                        return (function (t, e) {
                          return qa(t, ja, e).then(function (t) {
                            return t.phoneResponseInfo.sessionInfo;
                          });
                        })(n, {
                          mfaPendingCredential: e,
                          mfaEnrollmentId: (t.multiFactorHint && t.multiFactorHint.uid) || t.multiFactorUid,
                          phoneSignInInfo: { recaptchaToken: r }
                        });
                      })
                    : (function (t, e) {
                        return qa(t, Aa, e);
                      })(n, { phoneNumber: o, recaptchaToken: r })
                  ).then(
                    function (t) {
                      return 'function' == typeof e.reset && e.reset(), t;
                    },
                    function (t) {
                      throw ('function' == typeof e.reset && e.reset(), t);
                    }
                  );
                default:
                  throw new C(
                    'argument-error',
                    'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'
                  );
              }
            });
          }),
          qr(Ao, { PROVIDER_ID: 'phone' }),
          qr(Ao, { PHONE_SIGN_IN_METHOD: 'phone' }),
          (Do.prototype.getUid = function () {
            var t = [];
            return (
              t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join('-')
            );
          }),
          (Do.prototype.S = function () {
            return this.h;
          }),
          (Do.prototype.v = function () {
            return {
              type: this.c,
              eventId: this.b,
              urlResponse: this.g,
              sessionId: this.f,
              postBody: this.i,
              tenantId: this.h,
              error: this.a && this.a.v()
            };
          });
        var Lo,
          Uo = null;
        function Vo(t) {
          var e = 'unauthorized-domain',
            n = void 0,
            r = Mn(t);
          (t = r.b),
            'chrome-extension' == (r = r.f)
              ? (n = Ft(
                  'This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : 'http' == r || 'https' == r
              ? (n = Ft(
                  'This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.',
                  t
                ))
              : (e = 'operation-not-supported-in-this-environment'),
            C.call(this, e, n);
        }
        function Fo(t, e, n) {
          C.call(this, t, n),
            (t = e || {}).Gb && $r(this, 'email', t.Gb),
            t.da && $r(this, 'phoneNumber', t.da),
            t.credential && $r(this, 'credential', t.credential),
            t.Wb && $r(this, 'tenantId', t.Wb);
        }
        function zo(t) {
          if (t.code) {
            var e = t.code || '';
            0 == e.indexOf(x) && (e = e.substring(x.length));
            var n = { credential: Ro(t), Wb: t.tenantId };
            if (t.email) n.Gb = t.email;
            else if (t.phoneNumber) n.da = t.phoneNumber;
            else if (!n.credential) return new C(e, t.message || void 0);
            return new Fo(e, n, t.message);
          }
          return null;
        }
        function Ho() {}
        function Bo() {}
        function $o(t) {
          if (!t.f && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
            for (
              var e = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'], n = 0;
              n < e.length;
              n++
            ) {
              var r = e[n];
              try {
                return new ActiveXObject(r), (t.f = r);
              } catch (i) {}
            }
            throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
          }
          return t.f;
        }
        function qo() {}
        function Wo() {
          (this.a = new XDomainRequest()),
            (this.readyState = 0),
            (this.onreadystatechange = null),
            (this.responseType = this.responseText = this.response = ''),
            (this.status = -1),
            (this.statusText = ''),
            (this.a.onload = w(this.oc, this)),
            (this.a.onerror = w(this.Pb, this)),
            (this.a.onprogress = w(this.pc, this)),
            (this.a.ontimeout = w(this.tc, this));
        }
        function Go(t, e) {
          (t.readyState = e), t.onreadystatechange && t.onreadystatechange();
        }
        function Ko(t, e, n) {
          this.reset(t, e, n, void 0, void 0);
        }
        function Yo(t) {
          (this.f = t), (this.b = this.c = this.a = null);
        }
        function Jo(t, e) {
          (this.name = t), (this.value = e);
        }
        E(Vo, C),
          E(Fo, C),
          (Fo.prototype.v = function () {
            var t = { code: this.code, message: this.message };
            this.email && (t.email = this.email),
              this.phoneNumber && (t.phoneNumber = this.phoneNumber),
              this.tenantId && (t.tenantId = this.tenantId);
            var e = this.credential && this.credential.v();
            return e && gt(t, e), t;
          }),
          (Fo.prototype.toJSON = function () {
            return this.v();
          }),
          (Ho.prototype.c = null),
          E(Bo, Ho),
          (Bo.prototype.a = function () {
            var t = $o(this);
            return t ? new ActiveXObject(t) : new XMLHttpRequest();
          }),
          (Bo.prototype.b = function () {
            var t = {};
            return $o(this) && ((t[0] = !0), (t[1] = !0)), t;
          }),
          (Lo = new Bo()),
          E(qo, Ho),
          (qo.prototype.a = function () {
            var t = new XMLHttpRequest();
            if ('withCredentials' in t) return t;
            if ('undefined' != typeof XDomainRequest) return new Wo();
            throw Error('Unsupported browser');
          }),
          (qo.prototype.b = function () {
            return {};
          }),
          ((t = Wo.prototype).open = function (t, e, n) {
            if (null != n && !n) throw Error('Only async requests are supported.');
            this.a.open(t, e);
          }),
          (t.send = function (t) {
            if (t) {
              if ('string' != typeof t) throw Error('Only string data is supported');
              this.a.send(t);
            } else this.a.send();
          }),
          (t.abort = function () {
            this.a.abort();
          }),
          (t.setRequestHeader = function () {}),
          (t.getResponseHeader = function (t) {
            return 'content-type' == t.toLowerCase() ? this.a.contentType : '';
          }),
          (t.oc = function () {
            (this.status = 200), (this.response = this.responseText = this.a.responseText), Go(this, 4);
          }),
          (t.Pb = function () {
            (this.status = 500), (this.response = this.responseText = ''), Go(this, 4);
          }),
          (t.tc = function () {
            this.Pb();
          }),
          (t.pc = function () {
            (this.status = 200), Go(this, 1);
          }),
          (t.getAllResponseHeaders = function () {
            return 'content-type: ' + this.a.contentType;
          }),
          (Ko.prototype.a = null),
          (Ko.prototype.reset = function (t, e, n, r, i) {
            r || S(), delete this.a;
          }),
          (Jo.prototype.toString = function () {
            return this.name;
          });
        var Zo = new Jo('SEVERE', 1e3),
          Xo = new Jo('WARNING', 900),
          Qo = new Jo('CONFIG', 700),
          ts = new Jo('FINE', 500);
        Yo.prototype.log = function (t, e, n) {
          if (
            t.value >=
            (function t(e) {
              return e.c ? e.c : e.a ? t(e.a) : (D('Root logger has no level set.'), null);
            })(this).value
          )
            for (d(e) && (e = e()), t = new Ko(t, String(e), this.f), n && (t.a = n), n = this; n; ) n = n.a;
        };
        var es = {},
          ns = null;
        function rs(t) {
          var e;
          if ((ns || ((ns = new Yo('')), (es[''] = ns), (ns.c = Qo)), !(e = es[t]))) {
            e = new Yo(t);
            var n = t.lastIndexOf('.'),
              r = t.substr(n + 1);
            (n = rs(t.substr(0, n))).b || (n.b = {}), (n.b[r] = e), (e.a = n), (es[t] = e);
          }
          return e;
        }
        function is(t, e) {
          t && t.log(ts, e, void 0);
        }
        function os(t) {
          this.f = t;
        }
        function ss(t) {
          bn.call(this),
            (this.s = t),
            (this.readyState = as),
            (this.status = 0),
            (this.responseType = this.responseText = this.response = this.statusText = ''),
            (this.onreadystatechange = null),
            (this.i = new Headers()),
            (this.b = null),
            (this.m = 'GET'),
            (this.g = ''),
            (this.a = !1),
            (this.h = rs('goog.net.FetchXmlHttp')),
            (this.l = this.c = this.f = null);
        }
        E(os, Ho),
          (os.prototype.a = function () {
            return new ss(this.f);
          }),
          (os.prototype.b = (function (t) {
            return function () {
              return t;
            };
          })({})),
          E(ss, bn);
        var as = 0;
        function us(t) {
          t.c.read().then(t.nc.bind(t)).catch(t.Sa.bind(t));
        }
        function cs(t, e) {
          e && t.f && ((t.status = t.f.status), (t.statusText = t.f.statusText)),
            (t.readyState = 4),
            (t.f = null),
            (t.c = null),
            (t.l = null),
            ls(t);
        }
        function ls(t) {
          t.onreadystatechange && t.onreadystatechange.call(t);
        }
        function hs(t) {
          bn.call(this),
            (this.headers = new Tn()),
            (this.D = t || null),
            (this.c = !1),
            (this.B = this.a = null),
            (this.h = this.P = this.l = ''),
            (this.f = this.O = this.i = this.N = !1),
            (this.g = 0),
            (this.s = null),
            (this.m = ds),
            (this.w = this.R = !1);
        }
        ((t = ss.prototype).open = function (t, e) {
          if (this.readyState != as) throw (this.abort(), Error('Error reopening a connection'));
          (this.m = t), (this.g = e), (this.readyState = 1), ls(this);
        }),
          (t.send = function (t) {
            if (1 != this.readyState) throw (this.abort(), Error('need to call open() first. '));
            this.a = !0;
            var e = { headers: this.i, method: this.m, credentials: void 0, cache: void 0 };
            t && (e.body = t), this.s.fetch(new Request(this.g, e)).then(this.sc.bind(this), this.Sa.bind(this));
          }),
          (t.abort = function () {
            (this.response = this.responseText = ''),
              (this.i = new Headers()),
              (this.status = 0),
              this.c && this.c.cancel('Request was aborted.'),
              1 <= this.readyState && this.a && 4 != this.readyState && ((this.a = !1), cs(this, !1)),
              (this.readyState = as);
          }),
          (t.sc = function (t) {
            this.a &&
              ((this.f = t),
              this.b || ((this.b = t.headers), (this.readyState = 2), ls(this)),
              this.a &&
                ((this.readyState = 3),
                ls(this),
                this.a &&
                  ('arraybuffer' === this.responseType
                    ? t.arrayBuffer().then(this.qc.bind(this), this.Sa.bind(this))
                    : void 0 !== s.ReadableStream && 'body' in t
                    ? ((this.response = this.responseText = ''),
                      (this.c = t.body.getReader()),
                      (this.l = new TextDecoder()),
                      us(this))
                    : t.text().then(this.rc.bind(this), this.Sa.bind(this)))));
          }),
          (t.nc = function (t) {
            if (this.a) {
              var e = this.l.decode(t.value ? t.value : new Uint8Array(0), { stream: !t.done });
              e && (this.response = this.responseText += e),
                t.done ? cs(this, !0) : ls(this),
                3 == this.readyState && us(this);
            }
          }),
          (t.rc = function (t) {
            this.a && ((this.response = this.responseText = t), cs(this, !0));
          }),
          (t.qc = function (t) {
            this.a && ((this.response = t), cs(this, !0));
          }),
          (t.Sa = function (t) {
            var e = this.h;
            e && e.log(Xo, 'Failed to fetch url ' + this.g, t instanceof Error ? t : Error(t)), this.a && cs(this, !0);
          }),
          (t.setRequestHeader = function (t, e) {
            this.i.append(t, e);
          }),
          (t.getResponseHeader = function (t) {
            return this.b
              ? this.b.get(t.toLowerCase()) || ''
              : ((t = this.h) &&
                  t.log(
                    Xo,
                    'Attempting to get response header but no headers have been received for url: ' + this.g,
                    void 0
                  ),
                '');
          }),
          (t.getAllResponseHeaders = function () {
            if (!this.b) {
              var t = this.h;
              return (
                t &&
                  t.log(
                    Xo,
                    'Attempting to get all response headers but no headers have been received for url: ' + this.g,
                    void 0
                  ),
                ''
              );
            }
            t = [];
            for (var e = this.b.entries(), n = e.next(); !n.done; )
              t.push((n = n.value)[0] + ': ' + n[1]), (n = e.next());
            return t.join('\r\n');
          }),
          E(hs, bn);
        var ds = '';
        hs.prototype.b = rs('goog.net.XhrIo');
        var fs = /^https?$/i,
          ps = ['POST', 'PUT'];
        function gs(t) {
          return 'content-type' == t.toLowerCase();
        }
        function ms(t, e) {
          (t.c = !1), t.a && ((t.f = !0), t.a.abort(), (t.f = !1)), (t.h = e), vs(t), ys(t);
        }
        function vs(t) {
          t.N || ((t.N = !0), t.dispatchEvent('complete'), t.dispatchEvent('error'));
        }
        function bs(t) {
          if (t.c && void 0 !== o)
            if (t.B[1] && 4 == _s(t) && 2 == Ss(t)) is(t.b, Es(t, 'Local request error detected and ignored'));
            else if (t.i && 4 == _s(t)) Sn(t.Sb, 0, t);
            else if ((t.dispatchEvent('readystatechange'), 4 == _s(t))) {
              is(t.b, Es(t, 'Request complete')), (t.c = !1);
              try {
                var e,
                  n = Ss(t);
                t: switch (n) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var r = !0;
                    break t;
                  default:
                    r = !1;
                }
                if (!(e = r)) {
                  var i;
                  if ((i = 0 === n)) {
                    var a = String(t.l).match(On)[1] || null;
                    if (!a && s.self && s.self.location) {
                      var u = s.self.location.protocol;
                      a = u.substr(0, u.length - 1);
                    }
                    i = !fs.test(a ? a.toLowerCase() : '');
                  }
                  e = i;
                }
                if (e) t.dispatchEvent('complete'), t.dispatchEvent('success');
                else {
                  try {
                    var c = 2 < _s(t) ? t.a.statusText : '';
                  } catch (l) {
                    is(t.b, 'Can not get status: ' + l.message), (c = '');
                  }
                  (t.h = c + ' [' + Ss(t) + ']'), vs(t);
                }
              } finally {
                ys(t);
              }
            }
        }
        function ys(t, e) {
          if (t.a) {
            ws(t);
            var n = t.a,
              r = t.B[0] ? c : null;
            (t.a = null), (t.B = null), e || t.dispatchEvent('ready');
            try {
              n.onreadystatechange = r;
            } catch (i) {
              (t = t.b) && t.log(Zo, 'Problem encountered resetting onreadystatechange: ' + i.message, void 0);
            }
          }
        }
        function ws(t) {
          t.a && t.w && (t.a.ontimeout = null), t.s && (s.clearTimeout(t.s), (t.s = null));
        }
        function _s(t) {
          return t.a ? t.a.readyState : 0;
        }
        function Ss(t) {
          try {
            return 2 < _s(t) ? t.a.status : -1;
          } catch (e) {
            return -1;
          }
        }
        function Es(t, e) {
          return e + ' [' + t.P + ' ' + t.l + ' ' + Ss(t) + ']';
        }
        function Cs(t) {
          var e = js;
          (this.g = []),
            (this.w = e),
            (this.s = t || null),
            (this.f = this.a = !1),
            (this.c = void 0),
            (this.u = this.B = this.i = !1),
            (this.h = 0),
            (this.b = null),
            (this.l = 0);
        }
        function Is(t, e, n) {
          (t.a = !0), (t.c = n), (t.f = !e), Os(t);
        }
        function Ts(t) {
          if (t.a) {
            if (!t.u) throw new As(t);
            t.u = !1;
          }
        }
        function xs(t, e, n, r) {
          t.g.push([e, n, r]), t.a && Os(t);
        }
        function ks(t) {
          return q(t.g, function (t) {
            return d(t[1]);
          });
        }
        function Os(t) {
          if (t.h && t.a && ks(t)) {
            var e = t.h,
              n = Ps[e];
            n && (s.clearTimeout(n.a), delete Ps[e]), (t.h = 0);
          }
          t.b && (t.b.l--, delete t.b), (e = t.c);
          for (var r = (n = !1); t.g.length && !t.i; ) {
            var i = t.g.shift(),
              o = i[0],
              a = i[1];
            if (((i = i[2]), (o = t.f ? a : o)))
              try {
                var u = o.call(i || t.s, e);
                void 0 !== u && ((t.f = t.f && (u == e || u instanceof Error)), (t.c = e = u)),
                  (N(e) || ('function' == typeof s.Promise && e instanceof s.Promise)) && ((r = !0), (t.i = !0));
              } catch (c) {
                (e = c), (t.f = !0), ks(t) || (n = !0);
              }
          }
          (t.c = e),
            r && ((u = w(t.m, t, !0)), (r = w(t.m, t, !1)), e instanceof Cs ? (xs(e, u, r), (e.B = !0)) : e.then(u, r)),
            n && ((e = new Rs(e)), (Ps[e.a] = e), (t.h = e.a));
        }
        function As() {
          R.call(this);
        }
        function Ns() {
          R.call(this);
        }
        function Rs(t) {
          (this.a = s.setTimeout(w(this.c, this), 0)), (this.b = t);
        }
        ((t = hs.prototype).Ka = function () {
          void 0 !== o &&
            this.a &&
            ((this.h = 'Timed out after ' + this.g + 'ms, aborting'),
            is(this.b, Es(this, this.h)),
            this.dispatchEvent('timeout'),
            this.abort(8));
        }),
          (t.abort = function () {
            this.a &&
              this.c &&
              (is(this.b, Es(this, 'Aborting')),
              (this.c = !1),
              (this.f = !0),
              this.a.abort(),
              (this.f = !1),
              this.dispatchEvent('complete'),
              this.dispatchEvent('abort'),
              ys(this));
          }),
          (t.Ba = function () {
            this.a && (this.c && ((this.c = !1), (this.f = !0), this.a.abort(), (this.f = !1)), ys(this, !0)),
              hs.Za.Ba.call(this);
          }),
          (t.Sb = function () {
            this.wa || (this.O || this.i || this.f ? bs(this) : this.Hc());
          }),
          (t.Hc = function () {
            bs(this);
          }),
          (t.getResponse = function () {
            try {
              if (!this.a) return null;
              if ('response' in this.a) return this.a.response;
              switch (this.m) {
                case ds:
                case 'text':
                  return this.a.responseText;
                case 'arraybuffer':
                  if ('mozResponseArrayBuffer' in this.a) return this.a.mozResponseArrayBuffer;
              }
              var t = this.b;
              return t && t.log(Zo, 'Response type ' + this.m + ' is not supported on this browser', void 0), null;
            } catch (e) {
              return is(this.b, 'Can not get response: ' + e.message), null;
            }
          }),
          (Cs.prototype.cancel = function (t) {
            if (this.a) this.c instanceof Cs && this.c.cancel();
            else {
              if (this.b) {
                var e = this.b;
                delete this.b, t ? e.cancel(t) : (e.l--, 0 >= e.l && e.cancel());
              }
              this.w ? this.w.call(this.s, this) : (this.u = !0),
                this.a || ((t = new Ns(this)), Ts(this), Is(this, !1, t));
            }
          }),
          (Cs.prototype.m = function (t, e) {
            (this.i = !1), Is(this, t, e);
          }),
          (Cs.prototype.then = function (t, e, n) {
            var r,
              i,
              o = new be(function (t, e) {
                (r = t), (i = e);
              });
            return (
              xs(this, r, function (t) {
                t instanceof Ns ? o.cancel() : i(t);
              }),
              o.then(t, e, n)
            );
          }),
          (Cs.prototype.$goog_Thenable = !0),
          E(As, R),
          (As.prototype.message = 'Deferred has already fired'),
          (As.prototype.name = 'AlreadyCalledError'),
          E(Ns, R),
          (Ns.prototype.message = 'Deferred was canceled'),
          (Ns.prototype.name = 'CanceledError'),
          (Rs.prototype.c = function () {
            throw (delete Ps[this.a], this.b);
          });
        var Ps = {};
        function Ds(t) {
          var e = {},
            n = e.document || document,
            r = Et(t).toString(),
            i = he(document, 'SCRIPT'),
            o = { Tb: i, Ka: void 0 },
            c = new Cs(o),
            l = null,
            h = null != e.timeout ? e.timeout : 5e3;
          return (
            0 < h &&
              ((l = window.setTimeout(function () {
                Ms(i, !0);
                var t = new Vs(Us, 'Timeout reached for loading script ' + r);
                Ts(c), Is(c, !1, t);
              }, h)),
              (o.Ka = l)),
            (i.onload = i.onreadystatechange = function () {
              (i.readyState && 'loaded' != i.readyState && 'complete' != i.readyState) ||
                (Ms(i, e.ud || !1, l), Ts(c), Is(c, !0, null));
            }),
            (i.onerror = function () {
              Ms(i, !0, l);
              var t = new Vs(Ls, 'Error while loading script ' + r);
              Ts(c), Is(c, !1, t);
            }),
            gt((o = e.attributes || {}), { type: 'text/javascript', charset: 'UTF-8' }),
            se(i, o),
            (function (t, e) {
              mt(t, 'HTMLScriptElement'),
                (t.src = Et(e)),
                null === u &&
                  (u =
                    (e = (e = s.document).querySelector && e.querySelector('script[nonce]')) &&
                    (e = e.nonce || e.getAttribute('nonce')) &&
                    a.test(e)
                      ? e
                      : ''),
                (e = u) && t.setAttribute('nonce', e);
            })(i, t),
            (function (t) {
              var e;
              return (e = (t || document).getElementsByTagName('HEAD')) && 0 != e.length ? e[0] : t.documentElement;
            })(n).appendChild(i),
            c
          );
        }
        function js() {
          if (this && this.Tb) {
            var t = this.Tb;
            t && 'SCRIPT' == t.tagName && Ms(t, !0, this.Ka);
          }
        }
        function Ms(t, e, n) {
          null != n && s.clearTimeout(n),
            (t.onload = c),
            (t.onerror = c),
            (t.onreadystatechange = c),
            e &&
              window.setTimeout(function () {
                t && t.parentNode && t.parentNode.removeChild(t);
              }, 0);
        }
        var Ls = 0,
          Us = 1;
        function Vs(t, e) {
          var n = 'Jsloader error (code #' + t + ')';
          e && (n += ': ' + e), R.call(this, n), (this.code = t);
        }
        function Fs(t) {
          this.f = t;
        }
        function zs(t, e, n) {
          if (
            ((this.c = t),
            (this.u = (t = e || {}).secureTokenEndpoint || 'https://securetoken.googleapis.com/v1/token'),
            (this.m = t.secureTokenTimeout || $s),
            (this.g = ft(t.secureTokenHeaders || qs)),
            (this.h = t.firebaseEndpoint || 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/'),
            (this.l = t.identityPlatformEndpoint || 'https://identitytoolkit.googleapis.com/v2/'),
            (this.i = t.firebaseTimeout || Ws),
            (this.a = ft(t.firebaseHeaders || Gs)),
            n && ((this.a['X-Client-Version'] = n), (this.g['X-Client-Version'] = n)),
            (n = 'Node' == vr()),
            !(n = s.XMLHttpRequest || (n && y.a.INTERNAL.node && y.a.INTERNAL.node.XMLHttpRequest)) && !mr())
          )
            throw new C('internal-error', 'The XMLHttpRequest compatibility library was not found.');
          (this.f = void 0), (this.f = mr() ? new os(self) : br() ? new Fs(n) : new qo()), (this.b = null);
        }
        E(Vs, R),
          E(Fs, Ho),
          (Fs.prototype.a = function () {
            return new this.f();
          }),
          (Fs.prototype.b = function () {
            return {};
          });
        var Hs,
          Bs = 'idToken',
          $s = new Mr(3e4, 6e4),
          qs = { 'Content-Type': 'application/x-www-form-urlencoded' },
          Ws = new Mr(3e4, 6e4),
          Gs = { 'Content-Type': 'application/json' };
        function Ks(t, e) {
          e ? (t.a['X-Firebase-Locale'] = e) : delete t.a['X-Firebase-Locale'];
        }
        function Ys(t, e) {
          e
            ? ((t.a['X-Client-Version'] = e), (t.g['X-Client-Version'] = e))
            : (delete t.a['X-Client-Version'], delete t.g['X-Client-Version']);
        }
        function Js(t, e, n, r, i, o, a) {
          (function () {
            var t = Er();
            return !(
              ((t =
                'Chrome' != wr(t)
                  ? null
                  : (t = t.match(/\sChrome\/(\d+)/i)) && 2 == t.length
                  ? parseInt(t[1], 10)
                  : null) &&
                30 > t) ||
              (Wt && ee && !(9 < ee))
            );
          })() || mr()
            ? (t = w(t.w, t))
            : (Hs ||
                (Hs = new be(function (t, e) {
                  !(function (t, e) {
                    ((window.gapi || {}).client || {}).request
                      ? t()
                      : ((s[Xs] = function () {
                          ((window.gapi || {}).client || {}).request ? t() : e(Error('CORS_UNSUPPORTED'));
                        }),
                        (function (t, e) {
                          xs(t, null, e, void 0);
                        })(Ds(Ct(Zs, { onload: Xs })), function () {
                          e(Error('CORS_UNSUPPORTED'));
                        }));
                  })(t, e);
                })),
              (t = w(t.s, t))),
            t(e, n, r, i, o, a);
        }
        (zs.prototype.S = function () {
          return this.b;
        }),
          (zs.prototype.w = function (t, e, n, r, i, o) {
            if (mr() && (void 0 === s.fetch || void 0 === s.Headers || void 0 === s.Request))
              throw new C(
                'operation-not-supported-in-this-environment',
                'fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.'
              );
            var a = new hs(this.f);
            if (o) {
              a.g = Math.max(0, o);
              var u = setTimeout(function () {
                a.dispatchEvent('timeout');
              }, o);
            }
            yn(a, 'complete', function () {
              u && clearTimeout(u);
              var t = null;
              try {
                t =
                  JSON.parse(
                    (function (t) {
                      try {
                        return t.a ? t.a.responseText : '';
                      } catch (e) {
                        return is(t.b, 'Can not get responseText: ' + e.message), '';
                      }
                    })(this)
                  ) || null;
              } catch (n) {
                t = null;
              }
              e && e(t);
            }),
              wn(a, 'ready', function () {
                u && clearTimeout(u), He(this);
              }),
              wn(a, 'timeout', function () {
                u && clearTimeout(u), He(this), e && e(null);
              }),
              (function (t, e, n, r, i) {
                if (t.a) throw Error('[goog.net.XhrIo] Object is active with another request=' + t.l + '; newUri=' + e);
                (n = n ? n.toUpperCase() : 'GET'),
                  (t.l = e),
                  (t.h = ''),
                  (t.P = n),
                  (t.N = !1),
                  (t.c = !0),
                  (t.a = t.D ? t.D.a() : Lo.a()),
                  (t.B = (function (t) {
                    return t.c || (t.c = t.b());
                  })(t.D ? t.D : Lo)),
                  (t.a.onreadystatechange = w(t.Sb, t));
                try {
                  is(t.b, Es(t, 'Opening Xhr')), (t.O = !0), t.a.open(n, String(e), !0), (t.O = !1);
                } catch (a) {
                  return is(t.b, Es(t, 'Error opening Xhr: ' + a.message)), void ms(t, a);
                }
                e = r || '';
                var o = new Tn(t.headers);
                i &&
                  (function (t, e) {
                    if (t.forEach && 'function' == typeof t.forEach) t.forEach(e, void 0);
                    else if (h(t) || 'string' == typeof t) H(t, e, void 0);
                    else
                      for (var n = In(t), r = Cn(t), i = r.length, o = 0; o < i; o++)
                        e.call(void 0, r[o], n && n[o], t);
                  })(i, function (t, e) {
                    o.set(e, t);
                  }),
                  (i = (function (t) {
                    t: {
                      for (var e = gs, n = t.length, r = 'string' == typeof t ? t.split('') : t, i = 0; i < n; i++)
                        if (i in r && e.call(void 0, r[i], i, t)) {
                          e = i;
                          break t;
                        }
                      e = -1;
                    }
                    return 0 > e ? null : 'string' == typeof t ? t.charAt(e) : t[e];
                  })(o.X())),
                  (r = s.FormData && e instanceof s.FormData),
                  !W(ps, n) || i || r || o.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8'),
                  o.forEach(function (t, e) {
                    this.a.setRequestHeader(e, t);
                  }, t),
                  t.m && (t.a.responseType = t.m),
                  'withCredentials' in t.a && t.a.withCredentials !== t.R && (t.a.withCredentials = t.R);
                try {
                  ws(t),
                    0 < t.g &&
                      ((t.w = (function (t) {
                        return Wt && re(9) && 'number' == typeof t.timeout && void 0 !== t.ontimeout;
                      })(t.a)),
                      is(t.b, Es(t, 'Will abort after ' + t.g + 'ms if incomplete, xhr2 ' + t.w)),
                      t.w ? ((t.a.timeout = t.g), (t.a.ontimeout = w(t.Ka, t))) : (t.s = Sn(t.Ka, t.g, t))),
                    is(t.b, Es(t, 'Sending request')),
                    (t.i = !0),
                    t.a.send(e),
                    (t.i = !1);
                } catch (a) {
                  is(t.b, Es(t, 'Send error: ' + a.message)), ms(t, a);
                }
              })(a, t, n, r, i);
          });
        var Zs = new vt(wt, 'https://apis.google.com/js/client.js?onload=%{onload}'),
          Xs = '__fcb' + Math.floor(1e6 * Math.random()).toString();
        function Qs(t) {
          if ('string' != typeof (t = t.email) || !dr.test(t)) throw new C('invalid-email');
        }
        function ta(t) {
          'email' in t && Qs(t);
        }
        function ea(t) {
          if (!t[Bs]) {
            if (t.mfaPendingCredential) throw new C('multi-factor-auth-required', null, ft(t));
            throw new C('internal-error');
          }
        }
        function na(t) {
          if (t.phoneNumber || t.temporaryProof) {
            if (!t.phoneNumber || !t.temporaryProof) throw new C('internal-error');
          } else {
            if (!t.sessionInfo) throw new C('missing-verification-id');
            if (!t.code) throw new C('missing-verification-code');
          }
        }
        (zs.prototype.s = function (t, e, n, r, i) {
          var o = this;
          Hs.then(function () {
            window.gapi.client.setApiKey(o.c);
            var s = window.gapi.auth.getToken();
            window.gapi.auth.setToken(null),
              window.gapi.client.request({
                path: t,
                method: n,
                body: r,
                headers: i,
                authType: 'none',
                callback: function (t) {
                  window.gapi.auth.setToken(s), e && e(t);
                }
              });
          }).o(function (t) {
            e && e({ error: { message: (t && t.message) || 'CORS_UNSUPPORTED' } });
          });
        }),
          (zs.prototype.vb = function () {
            return qa(this, Pa, {});
          }),
          (zs.prototype.xb = function (t, e) {
            return qa(this, Na, { idToken: t, email: e });
          }),
          (zs.prototype.yb = function (t, e) {
            return qa(this, Ra, { idToken: t, password: e });
          });
        var ra = { displayName: 'DISPLAY_NAME', photoUrl: 'PHOTO_URL' };
        function ia(t) {
          if (!t.phoneVerificationInfo) throw new C('internal-error');
          if (!t.phoneVerificationInfo.sessionInfo) throw new C('missing-verification-id');
          if (!t.phoneVerificationInfo.code) throw new C('missing-verification-code');
        }
        function oa(t) {
          if (!t.requestUri || (!t.sessionId && !t.postBody && !t.pendingToken)) throw new C('internal-error');
        }
        function sa(t, e) {
          return (
            e.oauthIdToken &&
              e.providerId &&
              0 == e.providerId.indexOf('oidc.') &&
              !e.pendingToken &&
              (t.sessionId
                ? (e.nonce = t.sessionId)
                : t.postBody && Jn((t = new Wn(t.postBody)), 'nonce') && (e.nonce = t.get('nonce'))),
            e
          );
        }
        function aa(t) {
          var e = null;
          if (
            (t.needConfirmation
              ? ((t.code = 'account-exists-with-different-credential'), (e = zo(t)))
              : 'FEDERATED_USER_ID_ALREADY_LINKED' == t.errorMessage
              ? ((t.code = 'credential-already-in-use'), (e = zo(t)))
              : 'EMAIL_EXISTS' == t.errorMessage
              ? ((t.code = 'email-already-in-use'), (e = zo(t)))
              : t.errorMessage && (e = Wa(t.errorMessage)),
            e)
          )
            throw e;
          ea(t);
        }
        function ua(t, e) {
          return (e.returnIdpCredential = !0), qa(t, Ma, e);
        }
        function ca(t, e) {
          return (e.returnIdpCredential = !0), qa(t, Ua, e);
        }
        function la(t, e) {
          return (e.returnIdpCredential = !0), (e.autoCreate = !1), qa(t, La, e);
        }
        function ha(t) {
          if (!t.oobCode) throw new C('invalid-action-code');
        }
        ((t = zs.prototype).zb = function (t, e) {
          var n = { idToken: t },
            r = [];
          return (
            ht(ra, function (t, i) {
              var o = e[i];
              null === o ? r.push(t) : i in e && (n[i] = o);
            }),
            r.length && (n.deleteAttribute = r),
            qa(this, Na, n)
          );
        }),
          (t.rb = function (t, e) {
            return gt((t = { requestType: 'PASSWORD_RESET', email: t }), e), qa(this, Ta, t);
          }),
          (t.sb = function (t, e) {
            return gt((t = { requestType: 'EMAIL_SIGNIN', email: t }), e), qa(this, Ea, t);
          }),
          (t.qb = function (t, e) {
            return gt((t = { requestType: 'VERIFY_EMAIL', idToken: t }), e), qa(this, Ca, t);
          }),
          (t.Ab = function (t, e, n) {
            return gt((t = { requestType: 'VERIFY_AND_CHANGE_EMAIL', idToken: t, newEmail: e }), n), qa(this, Ia, t);
          }),
          (t.cb = function (t) {
            return qa(this, za, t);
          }),
          (t.jb = function (t, e) {
            return qa(this, Oa, { oobCode: t, newPassword: e });
          }),
          (t.Pa = function (t) {
            return qa(this, fa, { oobCode: t });
          }),
          (t.fb = function (t) {
            return qa(this, da, { oobCode: t });
          });
        var da = { endpoint: 'setAccountInfo', A: ha, Y: 'email', C: !0 },
          fa = {
            endpoint: 'resetPassword',
            A: ha,
            G: function (t) {
              var e = t.requestType;
              if (!e || (!t.email && 'EMAIL_SIGNIN' != e && 'VERIFY_AND_CHANGE_EMAIL' != e))
                throw new C('internal-error');
            },
            C: !0
          },
          pa = {
            endpoint: 'signupNewUser',
            A: function (t) {
              if ((Qs(t), !t.password)) throw new C('weak-password');
            },
            G: ea,
            U: !0,
            C: !0
          },
          ga = { endpoint: 'createAuthUri', C: !0 },
          ma = { endpoint: 'deleteAccount', M: ['idToken'] },
          va = {
            endpoint: 'setAccountInfo',
            M: ['idToken', 'deleteProvider'],
            A: function (t) {
              if ('array' != l(t.deleteProvider)) throw new C('internal-error');
            }
          },
          ba = { endpoint: 'emailLinkSignin', M: ['email', 'oobCode'], A: Qs, G: ea, U: !0, C: !0 },
          ya = { endpoint: 'emailLinkSignin', M: ['idToken', 'email', 'oobCode'], A: Qs, G: ea, U: !0 },
          wa = {
            endpoint: 'accounts/mfaEnrollment:finalize',
            M: ['idToken', 'phoneVerificationInfo'],
            A: ia,
            G: ea,
            C: !0,
            La: !0
          },
          _a = {
            endpoint: 'accounts/mfaSignIn:finalize',
            M: ['mfaPendingCredential', 'phoneVerificationInfo'],
            A: ia,
            G: ea,
            C: !0,
            La: !0
          },
          Sa = { endpoint: 'getAccountInfo' },
          Ea = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            A: function (t) {
              if ('EMAIL_SIGNIN' != t.requestType) throw new C('internal-error');
              Qs(t);
            },
            Y: 'email',
            C: !0
          },
          Ca = {
            endpoint: 'getOobConfirmationCode',
            M: ['idToken', 'requestType'],
            A: function (t) {
              if ('VERIFY_EMAIL' != t.requestType) throw new C('internal-error');
            },
            Y: 'email',
            C: !0
          },
          Ia = {
            endpoint: 'getOobConfirmationCode',
            M: ['idToken', 'newEmail', 'requestType'],
            A: function (t) {
              if ('VERIFY_AND_CHANGE_EMAIL' != t.requestType) throw new C('internal-error');
            },
            Y: 'email',
            C: !0
          },
          Ta = {
            endpoint: 'getOobConfirmationCode',
            M: ['requestType'],
            A: function (t) {
              if ('PASSWORD_RESET' != t.requestType) throw new C('internal-error');
              Qs(t);
            },
            Y: 'email',
            C: !0
          },
          xa = { hb: !0, endpoint: 'getProjectConfig', Rb: 'GET' },
          ka = {
            hb: !0,
            endpoint: 'getRecaptchaParam',
            Rb: 'GET',
            G: function (t) {
              if (!t.recaptchaSiteKey) throw new C('internal-error');
            }
          },
          Oa = { endpoint: 'resetPassword', A: ha, Y: 'email', C: !0 },
          Aa = { endpoint: 'sendVerificationCode', M: ['phoneNumber', 'recaptchaToken'], Y: 'sessionInfo', C: !0 },
          Na = { endpoint: 'setAccountInfo', M: ['idToken'], A: ta, U: !0 },
          Ra = {
            endpoint: 'setAccountInfo',
            M: ['idToken'],
            A: function (t) {
              if ((ta(t), !t.password)) throw new C('weak-password');
            },
            G: ea,
            U: !0
          },
          Pa = { endpoint: 'signupNewUser', G: ea, U: !0, C: !0 },
          Da = {
            endpoint: 'accounts/mfaEnrollment:start',
            M: ['idToken', 'phoneEnrollmentInfo'],
            A: function (t) {
              if (!t.phoneEnrollmentInfo) throw new C('internal-error');
              if (!t.phoneEnrollmentInfo.phoneNumber) throw new C('missing-phone-number');
              if (!t.phoneEnrollmentInfo.recaptchaToken) throw new C('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new C('internal-error');
            },
            C: !0,
            La: !0
          },
          ja = {
            endpoint: 'accounts/mfaSignIn:start',
            M: ['mfaPendingCredential', 'mfaEnrollmentId', 'phoneSignInInfo'],
            A: function (t) {
              if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new C('missing-app-credential');
            },
            G: function (t) {
              if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new C('internal-error');
            },
            C: !0,
            La: !0
          },
          Ma = { endpoint: 'verifyAssertion', A: oa, Wa: sa, G: aa, U: !0, C: !0 },
          La = {
            endpoint: 'verifyAssertion',
            A: oa,
            Wa: sa,
            G: function (t) {
              if (t.errorMessage && 'USER_NOT_FOUND' == t.errorMessage) throw new C('user-not-found');
              if (t.errorMessage) throw Wa(t.errorMessage);
              ea(t);
            },
            U: !0,
            C: !0
          },
          Ua = {
            endpoint: 'verifyAssertion',
            A: function (t) {
              if ((oa(t), !t.idToken)) throw new C('internal-error');
            },
            Wa: sa,
            G: aa,
            U: !0
          },
          Va = {
            endpoint: 'verifyCustomToken',
            A: function (t) {
              if (!t.token) throw new C('invalid-custom-token');
            },
            G: ea,
            U: !0,
            C: !0
          },
          Fa = {
            endpoint: 'verifyPassword',
            A: function (t) {
              if ((Qs(t), !t.password)) throw new C('wrong-password');
            },
            G: ea,
            U: !0,
            C: !0
          },
          za = { endpoint: 'verifyPhoneNumber', A: na, G: ea, C: !0 },
          Ha = {
            endpoint: 'verifyPhoneNumber',
            A: function (t) {
              if (!t.idToken) throw new C('internal-error');
              na(t);
            },
            G: function (t) {
              if (t.temporaryProof) throw ((t.code = 'credential-already-in-use'), zo(t));
              ea(t);
            }
          },
          Ba = { Eb: { USER_NOT_FOUND: 'user-not-found' }, endpoint: 'verifyPhoneNumber', A: na, G: ea, C: !0 },
          $a = {
            endpoint: 'accounts/mfaEnrollment:withdraw',
            M: ['idToken', 'mfaEnrollmentId'],
            G: function (t) {
              if (!!t[Bs] ^ !!t.refreshToken) throw new C('internal-error');
            },
            C: !0,
            La: !0
          };
        function qa(t, e, n) {
          if (
            !(function (t, e) {
              if (!e || !e.length) return !0;
              if (!t) return !1;
              for (var n = 0; n < e.length; n++) {
                var r = t[e[n]];
                if (null == r || '' === r) return !1;
              }
              return !0;
            })(n, e.M)
          )
            return Te(new C('internal-error'));
          var r,
            i = !!e.La,
            o = e.Rb || 'POST';
          return Ie(n)
            .then(e.A)
            .then(function () {
              return (
                e.U && (n.returnSecureToken = !0),
                e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b),
                (function (t, e, n, r, i, o, s) {
                  var a = Mn(e + n);
                  Dn(a, 'key', t.c), s && Dn(a, 'cb', S().toString());
                  var u = 'GET' == r;
                  if (u) for (var c in i) i.hasOwnProperty(c) && Dn(a, c, i[c]);
                  return new be(function (e, n) {
                    Js(
                      t,
                      a.toString(),
                      function (t) {
                        t ? (t.error ? n(Ga(t, o || {})) : e(t)) : n(new C('network-request-failed'));
                      },
                      r,
                      u ? void 0 : tr(Nr(i)),
                      t.a,
                      t.i.get()
                    );
                  });
                })(t, i ? t.l : t.h, e.endpoint, o, n, e.Eb, e.hb || !1)
              );
            })
            .then(function (t) {
              return (r = t), e.Wa ? e.Wa(n, r) : r;
            })
            .then(e.G)
            .then(function () {
              if (!e.Y) return r;
              if (!(e.Y in r)) throw new C('internal-error');
              return r[e.Y];
            });
        }
        function Wa(t) {
          return Ga({ error: { errors: [{ message: t }], code: 400, message: t } });
        }
        function Ga(t, e) {
          var n = ((t.error && t.error.errors && t.error.errors[0]) || {}).reason || '',
            r = { keyInvalid: 'invalid-api-key', ipRefererBlocked: 'app-not-authorized' };
          if ((n = r[n] ? new C(r[n]) : null)) return n;
          for (var i in ((n = (t.error && t.error.message) || ''),
          gt(
            (r = {
              INVALID_CUSTOM_TOKEN: 'invalid-custom-token',
              CREDENTIAL_MISMATCH: 'custom-token-mismatch',
              MISSING_CUSTOM_TOKEN: 'internal-error',
              INVALID_IDENTIFIER: 'invalid-email',
              MISSING_CONTINUE_URI: 'internal-error',
              INVALID_EMAIL: 'invalid-email',
              INVALID_PASSWORD: 'wrong-password',
              USER_DISABLED: 'user-disabled',
              MISSING_PASSWORD: 'internal-error',
              EMAIL_EXISTS: 'email-already-in-use',
              PASSWORD_LOGIN_DISABLED: 'operation-not-allowed',
              INVALID_IDP_RESPONSE: 'invalid-credential',
              INVALID_PENDING_TOKEN: 'invalid-credential',
              FEDERATED_USER_ID_ALREADY_LINKED: 'credential-already-in-use',
              MISSING_OR_INVALID_NONCE: 'missing-or-invalid-nonce',
              INVALID_MESSAGE_PAYLOAD: 'invalid-message-payload',
              INVALID_RECIPIENT_EMAIL: 'invalid-recipient-email',
              INVALID_SENDER: 'invalid-sender',
              EMAIL_NOT_FOUND: 'user-not-found',
              RESET_PASSWORD_EXCEED_LIMIT: 'too-many-requests',
              EXPIRED_OOB_CODE: 'expired-action-code',
              INVALID_OOB_CODE: 'invalid-action-code',
              MISSING_OOB_CODE: 'internal-error',
              INVALID_PROVIDER_ID: 'invalid-provider-id',
              CREDENTIAL_TOO_OLD_LOGIN_AGAIN: 'requires-recent-login',
              INVALID_ID_TOKEN: 'invalid-user-token',
              TOKEN_EXPIRED: 'user-token-expired',
              USER_NOT_FOUND: 'user-token-expired',
              CORS_UNSUPPORTED: 'cors-unsupported',
              DYNAMIC_LINK_NOT_ACTIVATED: 'dynamic-link-not-activated',
              INVALID_APP_ID: 'invalid-app-id',
              TOO_MANY_ATTEMPTS_TRY_LATER: 'too-many-requests',
              WEAK_PASSWORD: 'weak-password',
              OPERATION_NOT_ALLOWED: 'operation-not-allowed',
              USER_CANCELLED: 'user-cancelled',
              CAPTCHA_CHECK_FAILED: 'captcha-check-failed',
              INVALID_APP_CREDENTIAL: 'invalid-app-credential',
              INVALID_CODE: 'invalid-verification-code',
              INVALID_PHONE_NUMBER: 'invalid-phone-number',
              INVALID_SESSION_INFO: 'invalid-verification-id',
              INVALID_TEMPORARY_PROOF: 'invalid-credential',
              MISSING_APP_CREDENTIAL: 'missing-app-credential',
              MISSING_CODE: 'missing-verification-code',
              MISSING_PHONE_NUMBER: 'missing-phone-number',
              MISSING_SESSION_INFO: 'missing-verification-id',
              QUOTA_EXCEEDED: 'quota-exceeded',
              SESSION_EXPIRED: 'code-expired',
              REJECTED_CREDENTIAL: 'rejected-credential',
              INVALID_CONTINUE_URI: 'invalid-continue-uri',
              MISSING_ANDROID_PACKAGE_NAME: 'missing-android-pkg-name',
              MISSING_IOS_BUNDLE_ID: 'missing-ios-bundle-id',
              UNAUTHORIZED_DOMAIN: 'unauthorized-continue-uri',
              INVALID_DYNAMIC_LINK_DOMAIN: 'invalid-dynamic-link-domain',
              INVALID_OAUTH_CLIENT_ID: 'invalid-oauth-client-id',
              INVALID_CERT_HASH: 'invalid-cert-hash',
              UNSUPPORTED_TENANT_OPERATION: 'unsupported-tenant-operation',
              INVALID_TENANT_ID: 'invalid-tenant-id',
              TENANT_ID_MISMATCH: 'tenant-id-mismatch',
              ADMIN_ONLY_OPERATION: 'admin-restricted-operation',
              INVALID_MFA_PENDING_CREDENTIAL: 'invalid-multi-factor-session',
              MFA_ENROLLMENT_NOT_FOUND: 'multi-factor-info-not-found',
              MISSING_MFA_PENDING_CREDENTIAL: 'missing-multi-factor-session',
              MISSING_MFA_ENROLLMENT_ID: 'missing-multi-factor-info',
              EMAIL_CHANGE_NEEDS_VERIFICATION: 'email-change-needs-verification',
              SECOND_FACTOR_EXISTS: 'second-factor-already-in-use',
              SECOND_FACTOR_LIMIT_EXCEEDED: 'maximum-second-factor-count-exceeded',
              UNSUPPORTED_FIRST_FACTOR: 'unsupported-first-factor',
              UNVERIFIED_EMAIL: 'unverified-email'
            }),
            e || {}
          ),
          (e = (e = n.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0),
          r))
            if (0 === n.indexOf(i)) return new C(r[i], e);
          return !e && t && (e = Ar(t)), new C('internal-error', e);
        }
        function Ka(t) {
          (this.b = t),
            (this.a = null),
            (this.nb = (function (t) {
              return (
                Xa ||
                (Xa = new be(function (t, e) {
                  function n() {
                    jr(),
                      Cr('gapi.load')('gapi.iframes', {
                        callback: t,
                        ontimeout: function () {
                          jr(), e(Error('Network Error'));
                        },
                        timeout: Ja.get()
                      });
                  }
                  if (Cr('gapi.iframes.Iframe')) t();
                  else if (Cr('gapi.load')) n();
                  else {
                    var r = '__iframefcb' + Math.floor(1e6 * Math.random()).toString();
                    (s[r] = function () {
                      Cr('gapi.load') ? n() : e(Error('Network Error'));
                    }),
                      Ie(Ds((r = Ct(Ya, { onload: r })))).o(function () {
                        e(Error('Network Error'));
                      });
                  }
                }).o(function (t) {
                  throw ((Xa = null), t);
                }))
              ).then(function () {
                return new be(function (e, n) {
                  Cr('gapi.iframes.getContext')().open(
                    {
                      where: document.body,
                      url: t.b,
                      messageHandlersFilter: Cr('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'),
                      attributes: { style: { position: 'absolute', top: '-100px', width: '1px', height: '1px' } },
                      dontclear: !0
                    },
                    function (r) {
                      function i() {
                        clearTimeout(o), e();
                      }
                      (t.a = r), t.a.restyle({ setHideOnLeave: !1 });
                      var o = setTimeout(function () {
                        n(Error('Network Error'));
                      }, Za.get());
                      r.ping(i).then(i, function () {
                        n(Error('Network Error'));
                      });
                    }
                  );
                });
              });
            })(this));
        }
        var Ya = new vt(wt, 'https://apis.google.com/js/api.js?onload=%{onload}'),
          Ja = new Mr(3e4, 6e4),
          Za = new Mr(5e3, 15e3),
          Xa = null;
        function Qa(t, e, n) {
          (this.i = t),
            (this.g = e),
            (this.h = n),
            (this.f = null),
            (this.a = Ln(this.i, '/__/auth/iframe')),
            Dn(this.a, 'apiKey', this.g),
            Dn(this.a, 'appName', this.h),
            (this.b = null),
            (this.c = []);
        }
        function tu(t, e, n, r, i) {
          (this.s = t),
            (this.m = e),
            (this.c = n),
            (this.u = r),
            (this.i = this.g = this.l = null),
            (this.a = i),
            (this.h = this.f = null);
        }
        function eu(t) {
          try {
            return y.a.app(t).auth().Ea();
          } catch (e) {
            return [];
          }
        }
        function nu(t, e, n, r, i) {
          (this.u = t),
            (this.f = e),
            (this.b = n),
            (this.c = r || null),
            (this.h = i || null),
            (this.m = this.s = this.w = null),
            (this.g = []),
            (this.l = this.a = null);
        }
        function ru(t) {
          var e = sr();
          return (function (t) {
            return qa(t, xa, {}).then(function (t) {
              return t.authorizedDomains || [];
            });
          })(t).then(function (t) {
            t: {
              var n = Mn(e),
                r = n.f;
              n = n.b;
              for (var i = 0; i < t.length; i++) {
                var o = t[i],
                  s = n,
                  a = r;
                if (
                  (0 == o.indexOf('chrome-extension://')
                    ? (s = Mn(o).b == s && 'chrome-extension' == a)
                    : 'http' != a && 'https' != a
                    ? (s = !1)
                    : hr.test(o)
                    ? (s = s == o)
                    : ((o = o.split('.').join('\\.')), (s = new RegExp('^(.+\\.' + o + '|' + o + ')$', 'i').test(s))),
                  s)
                ) {
                  t = !0;
                  break t;
                }
              }
              t = !1;
            }
            if (!t) throw new Vo(sr());
          });
        }
        function iu(t) {
          return t.l
            ? t.l
            : ((t.l = fr().then(function () {
                if (!t.s) {
                  var e = t.c,
                    n = t.h,
                    r = eu(t.b),
                    i = new Qa(t.u, t.f, t.b);
                  (i.f = e), (i.b = n), (i.c = J(r || [])), (t.s = i.toString());
                }
                (t.i = new Ka(t.s)),
                  (function (t) {
                    if (!t.i) throw Error('IfcHandler must be initialized!');
                    !(function (t, e) {
                      t.nb.then(function () {
                        t.a.register('authEvent', e, Cr('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                      });
                    })(t.i, function (e) {
                      var n = {};
                      if (e && e.authEvent) {
                        var r = !1;
                        for (e = jo(e.authEvent), n = 0; n < t.g.length; n++) r = t.g[n](e) || r;
                        return ((n = {}).status = r ? 'ACK' : 'ERROR'), Ie(n);
                      }
                      return (n.status = 'ERROR'), Ie(n);
                    });
                  })(t);
              })),
              t.l);
        }
        function ou(t) {
          return t.m || ((t.w = t.c ? Sr(t.c, eu(t.b)) : null), (t.m = new zs(t.f, A(t.h), t.w))), t.m;
        }
        function su(t, e, n, r, i, o, s, a, u, c, l) {
          return (
            ((t = new tu(t, e, n, r, i)).l = o),
            (t.g = s),
            (t.i = a),
            (t.b = ft(u || null)),
            (t.f = c),
            t.ub(l).toString()
          );
        }
        function au(t) {
          if (((this.a = t || (y.a.INTERNAL.reactNative && y.a.INTERNAL.reactNative.AsyncStorage)), !this.a))
            throw new C('internal-error', 'The React Native compatibility library was not found.');
          this.type = 'asyncStorage';
        }
        function uu(t) {
          (this.b = t), (this.a = {}), (this.f = w(this.c, this));
        }
        (Qa.prototype.toString = function () {
          return (
            this.f ? Dn(this.a, 'v', this.f) : Yn(this.a.a, 'v'),
            this.b ? Dn(this.a, 'eid', this.b) : Yn(this.a.a, 'eid'),
            this.c.length ? Dn(this.a, 'fw', this.c.join(',')) : Yn(this.a.a, 'fw'),
            this.a.toString()
          );
        }),
          (tu.prototype.ub = function (t) {
            return (this.h = t), this;
          }),
          (tu.prototype.toString = function () {
            var t = Ln(this.s, '/__/auth/handler');
            if (
              (Dn(t, 'apiKey', this.m), Dn(t, 'appName', this.c), Dn(t, 'authType', this.u), this.a.isOAuthProvider)
            ) {
              var e = this.a;
              try {
                var n = y.a.app(this.c).auth().ja();
              } catch (a) {
                n = null;
              }
              for (var r in ((e.kb = n), Dn(t, 'providerId', this.a.providerId), (n = Nr((e = this.a).Fb))))
                n[r] = n[r].toString();
              (r = e.Oc), (n = ft(n));
              for (var i = 0; i < r.length; i++) {
                var o = r[i];
                o in n && delete n[o];
              }
              e.lb && e.kb && !n[e.lb] && (n[e.lb] = e.kb), dt(n) || Dn(t, 'customParameters', Ar(n));
            }
            if (
              ('function' == typeof this.a.Nb && (e = this.a.Nb()).length && Dn(t, 'scopes', e.join(',')),
              this.l ? Dn(t, 'redirectUrl', this.l) : Yn(t.a, 'redirectUrl'),
              this.g ? Dn(t, 'eventId', this.g) : Yn(t.a, 'eventId'),
              this.i ? Dn(t, 'v', this.i) : Yn(t.a, 'v'),
              this.b)
            )
              for (var s in this.b) this.b.hasOwnProperty(s) && !jn(t, s) && Dn(t, s, this.b[s]);
            return (
              this.h ? Dn(t, 'tid', this.h) : Yn(t.a, 'tid'),
              this.f ? Dn(t, 'eid', this.f) : Yn(t.a, 'eid'),
              (s = eu(this.c)).length && Dn(t, 'fw', s.join(',')),
              t.toString()
            );
          }),
          ((t = nu.prototype).Lb = function (t, e, n) {
            var r = new C('popup-closed-by-user'),
              i = new C('web-storage-unsupported'),
              o = this,
              s = !1;
            return this.ka()
              .then(function () {
                (function (t) {
                  var e = { type: 'webStorageSupport' };
                  return iu(t)
                    .then(function () {
                      return (function (t, e) {
                        return t.nb.then(function () {
                          return new be(function (n) {
                            t.a.send(e.type, e, n, Cr('gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER'));
                          });
                        });
                      })(t.i, e);
                    })
                    .then(function (t) {
                      if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport;
                      throw Error();
                    });
                })(o).then(function (n) {
                  n || (t && cr(t), e(i), (s = !0));
                });
              })
              .o(function () {})
              .then(function () {
                if (!s)
                  return (function (t) {
                    return new be(function (e) {
                      return (function n() {
                        En(2e3).then(function () {
                          if (t && !t.closed) return n();
                          e();
                        });
                      })();
                    });
                  })(t);
              })
              .then(function () {
                if (!s)
                  return En(n).then(function () {
                    e(r);
                  });
              });
          }),
          (t.Ub = function () {
            var t = Er();
            return !Or(t) && !Dr(t);
          }),
          (t.Qb = function () {
            return !1;
          }),
          (t.Jb = function (t, e, n, r, i, o, s, a) {
            if (!t) return Te(new C('popup-blocked'));
            if (s && !Or())
              return (
                this.ka().o(function (e) {
                  cr(t), i(e);
                }),
                r(),
                Ie()
              );
            this.a || (this.a = ru(ou(this)));
            var u = this;
            return this.a
              .then(function () {
                var e = u.ka().o(function (e) {
                  throw (cr(t), i(e), e);
                });
                return r(), e;
              })
              .then(function () {
                Po(n), s || ar(su(u.u, u.f, u.b, e, n, null, o, u.c, void 0, u.h, a), t);
              })
              .o(function (t) {
                throw ('auth/network-request-failed' == t.code && (u.a = null), t);
              });
          }),
          (t.Kb = function (t, e, n, r) {
            this.a || (this.a = ru(ou(this)));
            var i = this;
            return this.a
              .then(function () {
                Po(e), ar(su(i.u, i.f, i.b, t, e, sr(), n, i.c, void 0, i.h, r));
              })
              .o(function (t) {
                throw ('auth/network-request-failed' == t.code && (i.a = null), t);
              });
          }),
          (t.ka = function () {
            var t = this;
            return iu(this)
              .then(function () {
                return t.i.nb;
              })
              .o(function () {
                throw ((t.a = null), new C('network-request-failed'));
              });
          }),
          (t.Xb = function () {
            return !0;
          }),
          (t.Ca = function (t) {
            this.g.push(t);
          }),
          (t.Qa = function (t) {
            K(this.g, function (e) {
              return e == t;
            });
          }),
          ((t = au.prototype).get = function (t) {
            return Ie(this.a.getItem(t)).then(function (t) {
              return t && Rr(t);
            });
          }),
          (t.set = function (t, e) {
            return Ie(this.a.setItem(t, Ar(e)));
          }),
          (t.T = function (t) {
            return Ie(this.a.removeItem(t));
          }),
          (t.ba = function () {}),
          (t.ha = function () {});
        var cu,
          lu = [];
        function hu(t, e, n) {
          dt(t.a) && t.b.addEventListener('message', t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n);
        }
        function du(t) {
          this.a = t;
        }
        function fu(t) {
          (this.c = t), (this.b = !1), (this.a = []);
        }
        function pu(t, e, n, r) {
          var i,
            o,
            s,
            a,
            u = n || {},
            c = null;
          if (t.b) return Te(Error('connection_unavailable'));
          var l = r ? 800 : 50,
            h = 'undefined' != typeof MessageChannel ? new MessageChannel() : null;
          return new be(function (n, r) {
            h
              ? ((i = Math.floor(Math.random() * Math.pow(10, 20)).toString()),
                h.port1.start(),
                (s = setTimeout(function () {
                  r(Error('unsupported_event'));
                }, l)),
                t.a.push(
                  (c = {
                    messageChannel: h,
                    onMessage: (o = function (t) {
                      t.data.eventId === i &&
                        ('ack' === t.data.status
                          ? (clearTimeout(s),
                            (a = setTimeout(function () {
                              r(Error('timeout'));
                            }, 3e3)))
                          : 'done' === t.data.status
                          ? (clearTimeout(a),
                            void 0 !== t.data.response ? n(t.data.response) : r(Error('unknown_error')))
                          : (clearTimeout(s), clearTimeout(a), r(Error('invalid_response'))));
                    })
                  })
                ),
                h.port1.addEventListener('message', o),
                t.c.postMessage({ eventType: e, eventId: i, data: u }, [h.port2]))
              : r(Error('connection_unavailable'));
          })
            .then(function (e) {
              return gu(t, c), e;
            })
            .o(function (e) {
              throw (gu(t, c), e);
            });
        }
        function gu(t, e) {
          if (e) {
            var n = e.messageChannel;
            n && (n.port1.removeEventListener('message', e.onMessage), n.port1.close()),
              K(t.a, function (t) {
                return t == e;
              });
          }
        }
        function mu() {
          if (!bu()) throw new C('web-storage-unsupported');
          (this.c = {}),
            (this.a = []),
            (this.b = 0),
            (this.u = s.indexedDB),
            (this.type = 'indexedDB'),
            (this.g = this.l = this.f = this.i = null),
            (this.s = !1),
            (this.h = null);
          var t = this;
          mr() && self
            ? ((this.l = (function () {
                var t = mr() ? self : null;
                if (
                  (H(lu, function (n) {
                    n.b == t && (e = n);
                  }),
                  !e)
                ) {
                  var e = new uu(t);
                  lu.push(e);
                }
                return e;
              })()),
              hu(this.l, 'keyChanged', function (e, n) {
                return Eu(t).then(function (e) {
                  return (
                    0 < e.length &&
                      H(t.a, function (t) {
                        t(e);
                      }),
                    { keyProcessed: W(e, n.key) }
                  );
                });
              }),
              hu(this.l, 'ping', function () {
                return Ie(['keyChanged']);
              }))
            : (function () {
                var t = s.navigator;
                return t && t.serviceWorker
                  ? Ie()
                      .then(function () {
                        return t.serviceWorker.ready;
                      })
                      .then(function (t) {
                        return t.active || null;
                      })
                      .o(function () {
                        return null;
                      })
                  : Ie(null);
              })().then(function (e) {
                (t.h = e) &&
                  ((t.g = new fu(new du(e))),
                  pu(t.g, 'ping', null, !0)
                    .then(function (e) {
                      e[0].fulfilled && W(e[0].value, 'keyChanged') && (t.s = !0);
                    })
                    .o(function () {}));
              });
        }
        function vu(t) {
          return (
            t.m ||
              (t.m = (function t(e) {
                return new be(function (n, r) {
                  var i = e.u.open('firebaseLocalStorageDb', 1);
                  (i.onerror = function (t) {
                    try {
                      t.preventDefault();
                    } catch (e) {}
                    r(Error(t.target.error));
                  }),
                    (i.onupgradeneeded = function (t) {
                      t = t.target.result;
                      try {
                        t.createObjectStore('firebaseLocalStorage', { keyPath: 'fbase_key' });
                      } catch (e) {
                        r(e);
                      }
                    }),
                    (i.onsuccess = function (i) {
                      (i = i.target.result).objectStoreNames.contains('firebaseLocalStorage')
                        ? n(i)
                        : (function (t) {
                            return new be(function (e, n) {
                              var r = t.u.deleteDatabase('firebaseLocalStorageDb');
                              (r.onsuccess = function () {
                                e();
                              }),
                                (r.onerror = function (t) {
                                  n(Error(t.target.error));
                                });
                            });
                          })(e)
                            .then(function () {
                              return t(e);
                            })
                            .then(function (t) {
                              n(t);
                            })
                            .o(function (t) {
                              r(t);
                            });
                    });
                });
              })(t)),
            t.m
          );
        }
        function bu() {
          try {
            return !!s.indexedDB;
          } catch ($t) {
            return !1;
          }
        }
        function yu(t) {
          return t.objectStore('firebaseLocalStorage');
        }
        function wu(t, e) {
          return t.transaction(['firebaseLocalStorage'], e ? 'readwrite' : 'readonly');
        }
        function _u(t) {
          return new be(function (e, n) {
            (t.onsuccess = function (t) {
              t && t.target ? e(t.target.result) : e();
            }),
              (t.onerror = function (t) {
                n(t.target.error);
              });
          });
        }
        function Su(t, e) {
          return t.g &&
            t.h &&
            (function () {
              var t = s.navigator;
              return (t && t.serviceWorker && t.serviceWorker.controller) || null;
            })() === t.h
            ? pu(t.g, 'keyChanged', { key: e }, t.s)
                .then(function () {})
                .o(function () {})
            : Ie();
        }
        function Eu(t) {
          return vu(t)
            .then(function (t) {
              var e = yu(wu(t, !1));
              return e.getAll
                ? _u(e.getAll())
                : new be(function (t, n) {
                    var r = [],
                      i = e.openCursor();
                    (i.onsuccess = function (e) {
                      (e = e.target.result) ? (r.push(e.value), e.continue()) : t(r);
                    }),
                      (i.onerror = function (t) {
                        n(t.target.error);
                      });
                  });
            })
            .then(function (e) {
              var n = {},
                r = [];
              if (0 == t.b) {
                for (r = 0; r < e.length; r++) n[e[r].fbase_key] = e[r].value;
                (r = (function t(e, n) {
                  var r,
                    i = [];
                  for (r in e)
                    r in n
                      ? typeof e[r] != typeof n[r]
                        ? i.push(r)
                        : 'object' == typeof e[r] && null != e[r] && null != n[r]
                        ? 0 < t(e[r], n[r]).length && i.push(r)
                        : e[r] !== n[r] && i.push(r)
                      : i.push(r);
                  for (r in n) r in e || i.push(r);
                  return i;
                })(t.c, n)),
                  (t.c = n);
              }
              return r;
            });
        }
        function Cu(t) {
          t.i && t.i.cancel('STOP_EVENT'), t.f && (clearTimeout(t.f), (t.f = null));
        }
        function Iu(t) {
          var e = this,
            n = null;
          (this.a = []),
            (this.type = 'indexedDB'),
            (this.c = t),
            (this.b = Ie()
              .then(function () {
                if (bu()) {
                  var t = Pr(),
                    r = '__sak' + t;
                  return (
                    cu || (cu = new mu()),
                    (n = cu)
                      .set(r, t)
                      .then(function () {
                        return n.get(r);
                      })
                      .then(function (e) {
                        if (e !== t) throw Error('indexedDB not supported!');
                        return n.T(r);
                      })
                      .then(function () {
                        return n;
                      })
                      .o(function () {
                        return e.c;
                      })
                  );
                }
                return e.c;
              })
              .then(function (t) {
                return (
                  (e.type = t.type),
                  t.ba(function (t) {
                    H(e.a, function (e) {
                      e(t);
                    });
                  }),
                  t
                );
              }));
        }
        function Tu() {
          (this.a = {}), (this.type = 'inMemory');
        }
        function xu() {
          if (
            !(function () {
              var t = 'Node' == vr();
              if (!(t = ku() || (t && y.a.INTERNAL.node && y.a.INTERNAL.node.localStorage))) return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (e) {
                return !1;
              }
            })()
          ) {
            if ('Node' == vr()) throw new C('internal-error', 'The LocalStorage compatibility library was not found.');
            throw new C('web-storage-unsupported');
          }
          (this.a = ku() || y.a.INTERNAL.node.localStorage), (this.type = 'localStorage');
        }
        function ku() {
          try {
            var t = s.localStorage,
              e = Pr();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (n) {
            return null;
          }
        }
        function Ou() {
          this.type = 'nullStorage';
        }
        function Au() {
          if (
            !(function () {
              var t = 'Node' == vr();
              if (!(t = Nu() || (t && y.a.INTERNAL.node && y.a.INTERNAL.node.sessionStorage))) return !1;
              try {
                return t.setItem('__sak', '1'), t.removeItem('__sak'), !0;
              } catch (e) {
                return !1;
              }
            })()
          ) {
            if ('Node' == vr())
              throw new C('internal-error', 'The SessionStorage compatibility library was not found.');
            throw new C('web-storage-unsupported');
          }
          (this.a = Nu() || y.a.INTERNAL.node.sessionStorage), (this.type = 'sessionStorage');
        }
        function Nu() {
          try {
            var t = s.sessionStorage,
              e = Pr();
            return t && (t.setItem(e, '1'), t.removeItem(e)), t;
          } catch (n) {
            return null;
          }
        }
        function Ru() {
          var t = {};
          (t.Browser = ju), (t.Node = Mu), (t.ReactNative = Lu), (t.Worker = Uu), (this.a = t[vr()]);
        }
        (uu.prototype.c = function (t) {
          var e = t.data.eventType,
            n = t.data.eventId,
            r = this.a[e];
          if (r && 0 < r.length) {
            t.ports[0].postMessage({ status: 'ack', eventId: n, eventType: e, response: null });
            var i = [];
            H(r, function (e) {
              i.push(
                Ie().then(function () {
                  return e(t.origin, t.data.data);
                })
              );
            }),
              ke(i).then(function (r) {
                var i = [];
                H(r, function (t) {
                  i.push({ fulfilled: t.Mb, value: t.value, reason: t.reason ? t.reason.message : void 0 });
                }),
                  H(i, function (t) {
                    for (var e in t) void 0 === t[e] && delete t[e];
                  }),
                  t.ports[0].postMessage({ status: 'done', eventId: n, eventType: e, response: i });
              });
          }
        }),
          (du.prototype.postMessage = function (t, e) {
            this.a.postMessage(t, e);
          }),
          (fu.prototype.close = function () {
            for (; 0 < this.a.length; ) gu(this, this.a[0]);
            this.b = !0;
          }),
          ((t = mu.prototype).set = function (t, e) {
            var n,
              r = !1,
              i = this;
            return vu(this)
              .then(function (e) {
                return _u((e = yu(wu((n = e), !0))).get(t));
              })
              .then(function (o) {
                var s = yu(wu(n, !0));
                return o
                  ? ((o.value = e), _u(s.put(o)))
                  : (i.b++, (r = !0), ((o = {}).fbase_key = t), (o.value = e), _u(s.add(o)));
              })
              .then(function () {
                return (i.c[t] = e), Su(i, t);
              })
              .ma(function () {
                r && i.b--;
              });
          }),
          (t.get = function (t) {
            return vu(this)
              .then(function (e) {
                return _u(yu(wu(e, !1)).get(t));
              })
              .then(function (t) {
                return t && t.value;
              });
          }),
          (t.T = function (t) {
            var e = !1,
              n = this;
            return vu(this)
              .then(function (r) {
                return (e = !0), n.b++, _u(yu(wu(r, !0)).delete(t));
              })
              .then(function () {
                return delete n.c[t], Su(n, t);
              })
              .ma(function () {
                e && n.b--;
              });
          }),
          (t.ba = function (t) {
            0 == this.a.length &&
              (function (t) {
                Cu(t),
                  (function e() {
                    t.f = setTimeout(function () {
                      t.i = Eu(t)
                        .then(function (e) {
                          0 < e.length &&
                            H(t.a, function (t) {
                              t(e);
                            });
                        })
                        .then(function () {
                          e();
                        })
                        .o(function (t) {
                          'STOP_EVENT' != t.message && e();
                        });
                    }, 800);
                  })();
              })(this),
              this.a.push(t);
          }),
          (t.ha = function (t) {
            K(this.a, function (e) {
              return e == t;
            }),
              0 == this.a.length && Cu(this);
          }),
          ((t = Iu.prototype).get = function (t) {
            return this.b.then(function (e) {
              return e.get(t);
            });
          }),
          (t.set = function (t, e) {
            return this.b.then(function (n) {
              return n.set(t, e);
            });
          }),
          (t.T = function (t) {
            return this.b.then(function (e) {
              return e.T(t);
            });
          }),
          (t.ba = function (t) {
            this.a.push(t);
          }),
          (t.ha = function (t) {
            K(this.a, function (e) {
              return e == t;
            });
          }),
          ((t = Tu.prototype).get = function (t) {
            return Ie(this.a[t]);
          }),
          (t.set = function (t, e) {
            return (this.a[t] = e), Ie();
          }),
          (t.T = function (t) {
            return delete this.a[t], Ie();
          }),
          (t.ba = function () {}),
          (t.ha = function () {}),
          ((t = xu.prototype).get = function (t) {
            var e = this;
            return Ie().then(function () {
              return Rr(e.a.getItem(t));
            });
          }),
          (t.set = function (t, e) {
            var n = this;
            return Ie().then(function () {
              var r = Ar(e);
              null === r ? n.T(t) : n.a.setItem(t, r);
            });
          }),
          (t.T = function (t) {
            var e = this;
            return Ie().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ba = function (t) {
            s.window && sn(s.window, 'storage', t);
          }),
          (t.ha = function (t) {
            s.window && cn(s.window, 'storage', t);
          }),
          ((t = Ou.prototype).get = function () {
            return Ie(null);
          }),
          (t.set = function () {
            return Ie();
          }),
          (t.T = function () {
            return Ie();
          }),
          (t.ba = function () {}),
          (t.ha = function () {}),
          ((t = Au.prototype).get = function (t) {
            var e = this;
            return Ie().then(function () {
              return Rr(e.a.getItem(t));
            });
          }),
          (t.set = function (t, e) {
            var n = this;
            return Ie().then(function () {
              var r = Ar(e);
              null === r ? n.T(t) : n.a.setItem(t, r);
            });
          }),
          (t.T = function (t) {
            var e = this;
            return Ie().then(function () {
              e.a.removeItem(t);
            });
          }),
          (t.ba = function () {}),
          (t.ha = function () {});
        var Pu,
          Du,
          ju = { F: xu, $a: Au },
          Mu = { F: xu, $a: Au },
          Lu = { F: au, $a: Ou },
          Uu = { F: xu, $a: Ou },
          Vu = { od: 'local', NONE: 'none', qd: 'session' };
        function Fu() {
          var t = !(Dr(Er()) || !gr()),
            e = Or(),
            n = Ir();
          (this.m = t), (this.h = e), (this.l = n), (this.a = {}), Pu || (Pu = new Ru()), (t = Pu);
          try {
            this.g = (!or() && Vr()) || !s.indexedDB ? new t.a.F() : new Iu(mr() ? new Tu() : new t.a.F());
          } catch (r) {
            (this.g = new Tu()), (this.h = !0);
          }
          try {
            this.i = new t.a.$a();
          } catch (r) {
            this.i = new Tu();
          }
          (this.u = new Tu()), (this.f = w(this.Vb, this)), (this.b = {});
        }
        function zu() {
          return Du || (Du = new Fu()), Du;
        }
        function Hu(t, e) {
          switch (e) {
            case 'session':
              return t.i;
            case 'none':
              return t.u;
            default:
              return t.g;
          }
        }
        function Bu(t, e) {
          return 'firebase:' + t.name + (e ? ':' + e : '');
        }
        function $u(t, e, n) {
          return (n = Bu(e, n)), 'local' == e.F && (t.b[n] = null), Hu(t, e.F).T(n);
        }
        function qu(t) {
          t.c && (clearInterval(t.c), (t.c = null));
        }
        function Wu(t) {
          (this.a = t), (this.b = zu());
        }
        ((t = Fu.prototype).get = function (t, e) {
          return Hu(this, t.F).get(Bu(t, e));
        }),
          (t.set = function (t, e, n) {
            var r = Bu(t, n),
              i = this,
              o = Hu(this, t.F);
            return o
              .set(r, e)
              .then(function () {
                return o.get(r);
              })
              .then(function (e) {
                'local' == t.F && (i.b[r] = e);
              });
          }),
          (t.addListener = function (t, e, n) {
            (t = Bu(t, e)),
              this.l && (this.b[t] = s.localStorage.getItem(t)),
              dt(this.a) &&
                (Hu(this, 'local').ba(this.f),
                this.h ||
                  ((or() || !Vr()) && s.indexedDB) ||
                  !this.l ||
                  (function (t) {
                    qu(t),
                      (t.c = setInterval(function () {
                        for (var e in t.a) {
                          var n = s.localStorage.getItem(e),
                            r = t.b[e];
                          n != r &&
                            ((t.b[e] = n),
                            (n = new Ke({ type: 'storage', key: e, target: window, oldValue: r, newValue: n, a: !0 })),
                            t.Vb(n));
                        }
                      }, 1e3));
                  })(this)),
              this.a[t] || (this.a[t] = []),
              this.a[t].push(n);
          }),
          (t.removeListener = function (t, e, n) {
            (t = Bu(t, e)),
              this.a[t] &&
                (K(this.a[t], function (t) {
                  return t == n;
                }),
                0 == this.a[t].length && delete this.a[t]),
              dt(this.a) && (Hu(this, 'local').ha(this.f), qu(this));
          }),
          (t.Vb = function (t) {
            if (t && t.f) {
              var e = t.a.key;
              if (null == e)
                for (var n in this.a) {
                  var r = this.b[n];
                  void 0 === r && (r = null);
                  var i = s.localStorage.getItem(n);
                  i !== r && ((this.b[n] = i), this.ib(n));
                }
              else if (0 == e.indexOf('firebase:') && this.a[e]) {
                if ((void 0 !== t.a.a ? Hu(this, 'local').ha(this.f) : qu(this), this.m))
                  if (((n = s.localStorage.getItem(e)), (r = t.a.newValue) !== n))
                    null !== r ? s.localStorage.setItem(e, r) : s.localStorage.removeItem(e);
                  else if (this.b[e] === r && void 0 === t.a.a) return;
                var o = this;
                (n = function () {
                  (void 0 === t.a.a && o.b[e] === s.localStorage.getItem(e)) ||
                    ((o.b[e] = s.localStorage.getItem(e)), o.ib(e));
                }),
                  Wt && ee && 10 == ee && s.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue
                    ? setTimeout(n, 10)
                    : n();
              }
            } else H(t, w(this.ib, this));
          }),
          (t.ib = function (t) {
            this.a[t] &&
              H(this.a[t], function (t) {
                t();
              });
          });
        var Gu,
          Ku = { name: 'authEvent', F: 'local' };
        function Yu() {
          this.a = zu();
        }
        function Ju(t, e) {
          (this.b = Zu),
            (this.f = s.Uint8Array ? new Uint8Array(this.b) : Array(this.b)),
            (this.g = this.c = 0),
            (this.a = []),
            (this.i = t),
            (this.h = e),
            (this.l = s.Int32Array ? new Int32Array(64) : Array(64)),
            void 0 === Gu && (Gu = s.Int32Array ? new Int32Array(ic) : ic),
            this.reset();
        }
        E(Ju, function () {
          this.b = -1;
        });
        for (var Zu = 64, Xu = Zu - 1, Qu = [], tc = 0; tc < Xu; tc++) Qu[tc] = 0;
        var ec = Y(128, Qu);
        function nc(t) {
          for (var e = t.f, n = t.l, r = 0, i = 0; i < e.length; )
            (n[r++] = (e[i] << 24) | (e[i + 1] << 16) | (e[i + 2] << 8) | e[i + 3]), (i = 4 * r);
          for (e = 16; 64 > e; e++) {
            var o =
                ((0 | n[e - 16]) + ((((i = 0 | n[e - 15]) >>> 7) | (i << 25)) ^ ((i >>> 18) | (i << 14)) ^ (i >>> 3))) |
                0,
              s =
                ((0 | n[e - 7]) + ((((r = 0 | n[e - 2]) >>> 17) | (r << 15)) ^ ((r >>> 19) | (r << 13)) ^ (r >>> 10))) |
                0;
            n[e] = (o + s) | 0;
          }
          (r = 0 | t.a[0]), (i = 0 | t.a[1]);
          var a = 0 | t.a[2],
            u = 0 | t.a[3],
            c = 0 | t.a[4],
            l = 0 | t.a[5],
            h = 0 | t.a[6];
          for (o = 0 | t.a[7], e = 0; 64 > e; e++) {
            var d =
              ((((r >>> 2) | (r << 30)) ^ ((r >>> 13) | (r << 19)) ^ ((r >>> 22) | (r << 10))) +
                ((r & i) ^ (r & a) ^ (i & a))) |
              0;
            (s =
              ((o = (o + (((c >>> 6) | (c << 26)) ^ ((c >>> 11) | (c << 21)) ^ ((c >>> 25) | (c << 7)))) | 0) +
                (((s = ((s = (c & l) ^ (~c & h)) + (0 | Gu[e])) | 0) + (0 | n[e])) | 0)) |
              0),
              (o = h),
              (h = l),
              (l = c),
              (c = (u + s) | 0),
              (u = a),
              (a = i),
              (i = r),
              (r = (s + d) | 0);
          }
          (t.a[0] = (t.a[0] + r) | 0),
            (t.a[1] = (t.a[1] + i) | 0),
            (t.a[2] = (t.a[2] + a) | 0),
            (t.a[3] = (t.a[3] + u) | 0),
            (t.a[4] = (t.a[4] + c) | 0),
            (t.a[5] = (t.a[5] + l) | 0),
            (t.a[6] = (t.a[6] + h) | 0),
            (t.a[7] = (t.a[7] + o) | 0);
        }
        function rc(t, e, n) {
          void 0 === n && (n = e.length);
          var r = 0,
            i = t.c;
          if ('string' == typeof e) for (; r < n; ) (t.f[i++] = e.charCodeAt(r++)), i == t.b && (nc(t), (i = 0));
          else {
            if (!h(e)) throw Error('message must be string or array');
            for (; r < n; ) {
              var o = e[r++];
              if (!('number' == typeof o && 0 <= o && 255 >= o && o == (0 | o)))
                throw Error('message must be a byte array');
              (t.f[i++] = o), i == t.b && (nc(t), (i = 0));
            }
          }
          (t.c = i), (t.g += n);
        }
        Ju.prototype.reset = function () {
          (this.g = this.c = 0), (this.a = s.Int32Array ? new Int32Array(this.h) : J(this.h));
        };
        var ic = [
          1116352408,
          1899447441,
          3049323471,
          3921009573,
          961987163,
          1508970993,
          2453635748,
          2870763221,
          3624381080,
          310598401,
          607225278,
          1426881987,
          1925078388,
          2162078206,
          2614888103,
          3248222580,
          3835390401,
          4022224774,
          264347078,
          604807628,
          770255983,
          1249150122,
          1555081692,
          1996064986,
          2554220882,
          2821834349,
          2952996808,
          3210313671,
          3336571891,
          3584528711,
          113926993,
          338241895,
          666307205,
          773529912,
          1294757372,
          1396182291,
          1695183700,
          1986661051,
          2177026350,
          2456956037,
          2730485921,
          2820302411,
          3259730800,
          3345764771,
          3516065817,
          3600352804,
          4094571909,
          275423344,
          430227734,
          506948616,
          659060556,
          883997877,
          958139571,
          1322822218,
          1537002063,
          1747873779,
          1955562222,
          2024104815,
          2227730452,
          2361852424,
          2428436474,
          2756734187,
          3204031479,
          3329325298
        ];
        function oc() {
          Ju.call(this, 8, sc);
        }
        E(oc, Ju);
        var sc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
        function ac(t, e, n, r, i) {
          (this.u = t),
            (this.i = e),
            (this.l = n),
            (this.m = r || null),
            (this.s = i || null),
            (this.h = e + ':' + n),
            (this.w = new Yu()),
            (this.g = new Wu(this.h)),
            (this.f = null),
            (this.b = []),
            (this.a = this.c = null);
        }
        function uc(t) {
          return new C('invalid-cordova-configuration', t);
        }
        function cc(t, e) {
          for (var n = 0; n < t.b.length; n++)
            try {
              t.b[n](e);
            } catch (r) {}
        }
        function lc(t) {
          return (
            t.f ||
              (t.f = t.ka().then(function () {
                return new be(function (e) {
                  t.Ca(function n(r) {
                    return e(r), t.Qa(n), !1;
                  }),
                    (function (t) {
                      function e(e) {
                        (r = !0),
                          i && i.cancel(),
                          hc(t).then(function (r) {
                            var i = n;
                            if (r && e && e.url) {
                              var o = null;
                              -1 != (i = Xi(e.url)).indexOf('/__/auth/callback') &&
                                (o = (o =
                                  'object' == typeof (o = Rr(jn((o = Mn(i)), 'firebaseError') || null)) ? I(o) : null)
                                  ? new Do(r.c, r.b, null, null, o, null, r.S())
                                  : new Do(r.c, r.b, i, r.f, null, null, r.S())),
                                (i = o || n);
                            }
                            cc(t, i);
                          });
                      }
                      var n = new Do('unknown', null, null, null, new C('no-auth-event')),
                        r = !1,
                        i = En(500).then(function () {
                          return hc(t).then(function () {
                            r || cc(t, n);
                          });
                        }),
                        o = s.handleOpenURL;
                      (s.handleOpenURL = function (t) {
                        if (
                          (0 == t.toLowerCase().indexOf(Cr('BuildInfo.packageName', s).toLowerCase() + '://') &&
                            e({ url: t }),
                          'function' == typeof o)
                        )
                          try {
                            o(t);
                          } catch (n) {
                            console.error(n);
                          }
                      }),
                        Uo || (Uo = new Mo()),
                        (function (t) {
                          var e = Uo;
                          e.a.push(t),
                            e.b ||
                              ((e.b = function (t) {
                                for (var n = 0; n < e.a.length; n++) e.a[n](t);
                              }),
                              'function' == typeof (t = Cr('universalLinks.subscribe', s)) && t(null, e.b));
                        })(e);
                    })(t);
                });
              })),
            t.f
          );
        }
        function hc(t) {
          var e = null;
          return (function (t) {
            return t.b.get(Ku, t.a).then(function (t) {
              return jo(t);
            });
          })(t.g)
            .then(function (n) {
              return (e = n), $u((n = t.g).b, Ku, n.a);
            })
            .then(function () {
              return e;
            });
        }
        function dc(t) {
          (this.a = t), (this.b = zu());
        }
        ((t = ac.prototype).ka = function () {
          return this.Ga
            ? this.Ga
            : (this.Ga = (pr(void 0)
                ? fr().then(function () {
                    return new be(function (t, e) {
                      var n = s.document,
                        r = setTimeout(function () {
                          e(Error('Cordova framework is not ready.'));
                        }, 1e3);
                      n.addEventListener(
                        'deviceready',
                        function () {
                          clearTimeout(r), t();
                        },
                        !1
                      );
                    });
                  })
                : Te(Error('Cordova must run in an Android or iOS file scheme.'))
              ).then(
                function () {
                  if ('function' != typeof Cr('universalLinks.subscribe', s))
                    throw uc('cordova-universal-links-plugin-fix is not installed');
                  if (void 0 === Cr('BuildInfo.packageName', s)) throw uc('cordova-plugin-buildinfo is not installed');
                  if ('function' != typeof Cr('cordova.plugins.browsertab.openUrl', s))
                    throw uc('cordova-plugin-browsertab is not installed');
                  if ('function' != typeof Cr('cordova.InAppBrowser.open', s))
                    throw uc('cordova-plugin-inappbrowser is not installed');
                },
                function () {
                  throw new C('cordova-not-ready');
                }
              ));
        }),
          (t.Lb = function (t, e) {
            return e(new C('operation-not-supported-in-this-environment')), Ie();
          }),
          (t.Jb = function () {
            return Te(new C('operation-not-supported-in-this-environment'));
          }),
          (t.Xb = function () {
            return !1;
          }),
          (t.Ub = function () {
            return !0;
          }),
          (t.Qb = function () {
            return !0;
          }),
          (t.Kb = function (t, e, n, r) {
            if (this.c) return Te(new C('redirect-operation-pending'));
            var i = this,
              o = s.document,
              a = null,
              u = null,
              c = null,
              l = null;
            return (this.c = Ie()
              .then(function () {
                return Po(e), lc(i);
              })
              .then(function () {
                return (function (t, e, n, r, i) {
                  var o = (function () {
                      for (var t = 20, e = []; 0 < t; )
                        e.push(
                          '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                            Math.floor(62 * Math.random())
                          )
                        ),
                          t--;
                      return e.join('');
                    })(),
                    a = new Do(e, r, null, o, new C('no-auth-event'), null, i),
                    u = Cr('BuildInfo.packageName', s);
                  if ('string' != typeof u) throw new C('invalid-cordova-configuration');
                  var c = Cr('BuildInfo.displayName', s),
                    l = {};
                  if (
                    Er()
                      .toLowerCase()
                      .match(/iphone|ipad|ipod/)
                  )
                    l.ibi = u;
                  else {
                    if (
                      !Er()
                        .toLowerCase()
                        .match(/android/)
                    )
                      return Te(new C('operation-not-supported-in-this-environment'));
                    l.apn = u;
                  }
                  c && (l.appDisplayName = c),
                    (o = (function (t) {
                      var e = new oc();
                      rc(e, t), (t = []);
                      var n = 8 * e.g;
                      rc(e, ec, 56 > e.c ? 56 - e.c : e.b - (e.c - 56));
                      for (var r = 63; 56 <= r; r--) (e.f[r] = 255 & n), (n /= 256);
                      for (nc(e), r = n = 0; r < e.i; r++)
                        for (var i = 24; 0 <= i; i -= 8) t[n++] = (e.a[r] >> i) & 255;
                      return (function (t) {
                        return $(t, function (t) {
                          return 1 < (t = t.toString(16)).length ? t : '0' + t;
                        }).join('');
                      })(t);
                    })(o)),
                    (l.sessionId = o);
                  var h = su(t.u, t.i, t.l, e, n, null, r, t.m, l, t.s, i);
                  return t
                    .ka()
                    .then(function () {
                      var e = t.h;
                      return t.w.a.set(Ku, a.v(), e);
                    })
                    .then(function () {
                      var e = Cr('cordova.plugins.browsertab.isAvailable', s);
                      if ('function' != typeof e) throw new C('invalid-cordova-configuration');
                      var n = null;
                      e(function (e) {
                        if (e) {
                          if ('function' != typeof (n = Cr('cordova.plugins.browsertab.openUrl', s)))
                            throw new C('invalid-cordova-configuration');
                          n(h);
                        } else {
                          if ('function' != typeof (n = Cr('cordova.InAppBrowser.open', s)))
                            throw new C('invalid-cordova-configuration');
                          (e = Er()),
                            (t.a = n(
                              h,
                              e.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || e.match(/(iPad|iPhone|iPod).*OS 8_\d/i)
                                ? '_blank'
                                : '_system',
                              'location=yes'
                            ));
                        }
                      });
                    });
                })(i, t, e, n, r);
              })
              .then(function () {
                return new be(function (t, e) {
                  (u = function () {
                    var e = Cr('cordova.plugins.browsertab.close', s);
                    return (
                      t(),
                      'function' == typeof e && e(),
                      i.a && 'function' == typeof i.a.close && (i.a.close(), (i.a = null)),
                      !1
                    );
                  }),
                    i.Ca(u),
                    (l = function () {
                      Lr() && c();
                    }),
                    o.addEventListener(
                      'resume',
                      (c = function () {
                        a ||
                          (a = En(2e3).then(function () {
                            e(new C('redirect-cancelled-by-user'));
                          }));
                      }),
                      !1
                    ),
                    Er()
                      .toLowerCase()
                      .match(/android/) || o.addEventListener('visibilitychange', l, !1);
                }).o(function (t) {
                  return hc(i).then(function () {
                    throw t;
                  });
                });
              })
              .ma(function () {
                c && o.removeEventListener('resume', c, !1),
                  l && o.removeEventListener('visibilitychange', l, !1),
                  a && a.cancel(),
                  u && i.Qa(u),
                  (i.c = null);
              }));
          }),
          (t.Ca = function (t) {
            this.b.push(t),
              lc(this).o(function (e) {
                'auth/invalid-cordova-configuration' === e.code &&
                  ((e = new Do('unknown', null, null, null, new C('no-auth-event'))), t(e));
              });
          }),
          (t.Qa = function (t) {
            K(this.b, function (e) {
              return e == t;
            });
          });
        var fc = { name: 'pendingRedirect', F: 'session' };
        function pc(t) {
          return $u(t.b, fc, t.a);
        }
        function gc(t, e, n) {
          (this.i = {}),
            (this.w = 0),
            (this.D = t),
            (this.u = e),
            (this.m = n),
            (this.h = []),
            (this.f = !1),
            (this.l = w(this.s, this)),
            (this.b = new Oc()),
            (this.B = new Dc()),
            (this.g = new dc(this.u + ':' + this.m)),
            (this.c = {}),
            (this.c.unknown = this.b),
            (this.c.signInViaRedirect = this.b),
            (this.c.linkViaRedirect = this.b),
            (this.c.reauthViaRedirect = this.b),
            (this.c.signInViaPopup = this.B),
            (this.c.linkViaPopup = this.B),
            (this.c.reauthViaPopup = this.B),
            (this.a = mc(this.D, this.u, this.m, T));
        }
        function mc(t, e, n, r) {
          var i = y.a.SDK_VERSION || null;
          return pr() ? new ac(t, e, n, i, r) : new nu(t, e, n, i, r);
        }
        function vc(t) {
          t.f || ((t.f = !0), t.a.Ca(t.l));
          var e = t.a;
          return t.a.ka().o(function (n) {
            throw (t.a == e && t.reset(), n);
          });
        }
        function bc(t) {
          t.a.Ub() &&
            vc(t).o(function (e) {
              var n = new Do('unknown', null, null, null, new C('operation-not-supported-in-this-environment'));
              Cc(e) && t.s(n);
            }),
            t.a.Qb() || Ac(t.b);
        }
        function yc(t, e) {
          W(t.h, e) || t.h.push(e),
            t.f ||
              (function (t) {
                return t.b.get(fc, t.a).then(function (t) {
                  return 'pending' == t;
                });
              })(t.g)
                .then(function (e) {
                  e
                    ? pc(t.g).then(function () {
                        vc(t).o(function (e) {
                          var n = new Do(
                            'unknown',
                            null,
                            null,
                            null,
                            new C('operation-not-supported-in-this-environment')
                          );
                          Cc(e) && t.s(n);
                        });
                      })
                    : bc(t);
                })
                .o(function () {
                  bc(t);
                });
        }
        function wc(t, e) {
          K(t.h, function (t) {
            return t == e;
          });
        }
        (gc.prototype.reset = function () {
          (this.f = !1), this.a.Qa(this.l), (this.a = mc(this.D, this.u, this.m)), (this.i = {});
        }),
          (gc.prototype.s = function (t) {
            if (!t) throw new C('invalid-auth-event');
            if (
              (6e5 <= S() - this.w && ((this.i = {}), (this.w = 0)),
              t && t.getUid() && this.i.hasOwnProperty(t.getUid()))
            )
              return !1;
            for (var e = !1, n = 0; n < this.h.length; n++) {
              var r = this.h[n];
              if (r.Cb(t.c, t.b)) {
                (e = this.c[t.c]) && (e.h(t, r), t && (t.f || t.b) && ((this.i[t.getUid()] = !0), (this.w = S()))),
                  (e = !0);
                break;
              }
            }
            return Ac(this.b), e;
          });
        var _c = new Mr(2e3, 1e4),
          Sc = new Mr(3e4, 6e4);
        function Ec(t, e, n, r, i, o, s) {
          return t.a.Jb(
            e,
            n,
            r,
            function () {
              t.f || ((t.f = !0), t.a.Ca(t.l));
            },
            function () {
              t.reset();
            },
            i,
            o,
            s
          );
        }
        function Cc(t) {
          return !(!t || 'auth/cordova-not-ready' != t.code);
        }
        function Ic(t, e, n, r, i) {
          var o;
          return (function (t) {
            return t.b.set(fc, 'pending', t.a);
          })(t.g).then(function () {
            return t.a
              .Kb(e, n, r, i)
              .o(function (e) {
                if (Cc(e)) throw new C('operation-not-supported-in-this-environment');
                return (
                  (o = e),
                  pc(t.g).then(function () {
                    throw o;
                  })
                );
              })
              .then(function () {
                return t.a.Xb()
                  ? new be(function () {})
                  : pc(t.g)
                      .then(function () {
                        return t.pa();
                      })
                      .then(function () {})
                      .o(function () {});
              });
          });
        }
        function Tc(t, e, n, r, i) {
          return t.a.Lb(
            r,
            function (t) {
              e.la(n, null, t, i);
            },
            _c.get()
          );
        }
        gc.prototype.pa = function () {
          return this.b.pa();
        };
        var xc = {};
        function kc(t, e, n) {
          var r = e + ':' + n;
          return xc[r] || (xc[r] = new gc(t, e, n)), xc[r];
        }
        function Oc() {
          (this.b = null), (this.f = []), (this.c = []), (this.a = null), (this.i = this.g = !1);
        }
        function Ac(t) {
          t.g || ((t.g = !0), Pc(t, !1, null, null));
        }
        function Nc(t) {
          t.g && !t.i && Pc(t, !1, null, null);
        }
        function Rc(t, e) {
          if (
            ((t.b = function () {
              return Ie(e);
            }),
            t.f.length)
          )
            for (var n = 0; n < t.f.length; n++) t.f[n](e);
        }
        function Pc(t, e, n, r) {
          e
            ? r
              ? (function (t, e) {
                  if (
                    ((t.b = function () {
                      return Te(e);
                    }),
                    t.c.length)
                  )
                    for (var n = 0; n < t.c.length; n++) t.c[n](e);
                })(t, r)
              : Rc(t, n)
            : Rc(t, { user: null }),
            (t.f = []),
            (t.c = []);
        }
        function Dc() {}
        function jc() {
          (this.Bb = !1),
            Object.defineProperty(this, 'appVerificationDisabled', {
              get: function () {
                return this.Bb;
              },
              set: function (t) {
                this.Bb = t;
              },
              enumerable: !1
            });
        }
        function Mc(t, e) {
          (this.a = e), $r(this, 'verificationId', t);
        }
        function Lc(t, e, n, r) {
          return new Ao(t).cb(e, n).then(function (t) {
            return new Mc(t, r);
          });
        }
        function Uc(t) {
          var e = Ui(t);
          if (!(e && e.exp && e.auth_time && e.iat))
            throw new C(
              'internal-error',
              'An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.'
            );
          qr(this, {
            token: t,
            expirationTime: Ur(1e3 * e.exp),
            authTime: Ur(1e3 * e.auth_time),
            issuedAtTime: Ur(1e3 * e.iat),
            signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null,
            signInSecondFactor:
              e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null,
            claims: e
          });
        }
        function Vc(t, e, n) {
          var r = e && e[zc];
          if (!r) throw new C('argument-error', 'Internal assert: Invalid MultiFactorResolver');
          (this.a = t), (this.f = ft(e)), (this.g = n), (this.c = new Qi(null, r)), (this.b = []);
          var i = this;
          H(e[Fc] || [], function (t) {
            (t = Yr(t)) && i.b.push(t);
          }),
            $r(this, 'auth', this.a),
            $r(this, 'session', this.c),
            $r(this, 'hints', this.b);
        }
        (Oc.prototype.reset = function () {
          (this.b = null), this.a && (this.a.cancel(), (this.a = null));
        }),
          (Oc.prototype.h = function (t, e) {
            if (t) {
              this.reset(), (this.g = !0);
              var n = t.c,
                r = t.b,
                i = t.a && 'auth/web-storage-unsupported' == t.a.code,
                o = t.a && 'auth/operation-not-supported-in-this-environment' == t.a.code;
              (this.i = !(!i && !o)),
                'unknown' != n || i || o
                  ? t.a
                    ? (Pc(this, !0, null, t.a), Ie())
                    : e.Da(n, r)
                    ? (function (t, e, n) {
                        n = n.Da(e.c, e.b);
                        var r = e.g,
                          i = e.f,
                          o = e.i,
                          s = e.S(),
                          a = !!e.c.match(/Redirect$/);
                        n(r, i, s, o)
                          .then(function (e) {
                            Pc(t, a, e, null);
                          })
                          .o(function (e) {
                            Pc(t, a, null, e);
                          });
                      })(this, t, e)
                    : Te(new C('invalid-auth-event'))
                  : (Pc(this, !1, null, null), Ie());
            } else Te(new C('invalid-auth-event'));
          }),
          (Oc.prototype.pa = function () {
            var t = this;
            return new be(function (e, n) {
              t.b
                ? t.b().then(e, n)
                : (t.f.push(e),
                  t.c.push(n),
                  (function (t) {
                    var e = new C('timeout');
                    t.a && t.a.cancel(),
                      (t.a = En(Sc.get()).then(function () {
                        t.b || ((t.g = !0), Pc(t, !0, null, e));
                      }));
                  })(t));
            });
          }),
          (Dc.prototype.h = function (t, e) {
            if (t) {
              var n = t.c,
                r = t.b;
              t.a
                ? (e.la(t.c, null, t.a, t.b), Ie())
                : e.Da(n, r)
                ? (function (t, e) {
                    var n = t.b,
                      r = t.c;
                    e.Da(r, n)(t.g, t.f, t.S(), t.i)
                      .then(function (t) {
                        e.la(r, t, null, n);
                      })
                      .o(function (t) {
                        e.la(r, null, t, n);
                      });
                  })(t, e)
                : Te(new C('invalid-auth-event'));
            } else Te(new C('invalid-auth-event'));
          }),
          (Mc.prototype.confirm = function (t) {
            return (t = No(this.verificationId, t)), this.a(t);
          });
        var Fc = 'mfaInfo',
          zc = 'mfaPendingCredential';
        function Hc(t, e, n, r) {
          C.call(this, 'multi-factor-auth-required', r, e), (this.b = new Vc(t, e, n)), $r(this, 'resolver', this.b);
        }
        function Bc(t, e, n) {
          if (t && f(t.serverResponse) && 'auth/multi-factor-auth-required' === t.code)
            try {
              return new Hc(e, t.serverResponse, n, t.message);
            } catch (r) {}
          return null;
        }
        function $c() {}
        function qc(t) {
          $r(this, 'factorId', t.ea), (this.a = t);
        }
        function Wc(t) {
          if ((qc.call(this, t), this.a.ea != Ao.PROVIDER_ID))
            throw new C(
              'argument-error',
              'firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential'
            );
        }
        function Gc(t, e) {
          for (var n in (Ge.call(this, t), e)) this[n] = e[n];
        }
        function Kc(t, e) {
          (this.a = t), (this.b = []), (this.c = w(this.wc, this)), sn(this.a, 'userReloaded', this.c);
          var n = [];
          e &&
            e.multiFactor &&
            e.multiFactor.enrolledFactors &&
            H(e.multiFactor.enrolledFactors, function (t) {
              var e = null,
                r = {};
              if (t) {
                t.uid && (r[Xr] = t.uid),
                  t.displayName && (r[Jr] = t.displayName),
                  t.enrollmentTime && (r[Zr] = new Date(t.enrollmentTime).toISOString()),
                  t.phoneNumber && (r[Qr] = t.phoneNumber);
                try {
                  e = new ti(r);
                } catch (i) {}
                t = e;
              } else t = null;
              t && n.push(t);
            }),
            Yc(this, n);
        }
        function Yc(t, e) {
          (t.b = e), $r(t, 'enrolledFactors', e);
        }
        function Jc(t, e, n) {
          if (
            ((this.h = t),
            (this.i = e),
            (this.g = n),
            (this.c = 3e4),
            (this.f = 96e4),
            (this.b = null),
            (this.a = this.c),
            this.f < this.c)
          )
            throw Error('Proactive refresh lower bound greater than upper bound!');
        }
        function Zc(t) {
          (this.c = t), (this.b = this.a = null);
        }
        function Xc(t) {
          return (t.b && 1e3 * t.b.c) || 0;
        }
        function Qc(t, e) {
          var n = e.refreshToken;
          (t.b = Li(e[Bs] || '')), (t.a = n);
        }
        function tl(t, e) {
          (this.a = t || null),
            (this.b = e || null),
            qr(this, { lastSignInTime: Ur(e || null), creationTime: Ur(t || null) });
        }
        function el(t, e, n, r, i, o) {
          qr(this, {
            uid: t,
            displayName: r || null,
            photoURL: i || null,
            email: n || null,
            phoneNumber: o || null,
            providerId: e
          });
        }
        function nl(t, e, n) {
          (this.N = []),
            (this.l = t.apiKey),
            (this.m = t.appName),
            (this.s = t.authDomain || null),
            (t = y.a.SDK_VERSION ? Sr(y.a.SDK_VERSION) : null),
            (this.a = new zs(this.l, A(T), t)),
            (this.b = new Zc(this.a)),
            cl(this, e[Bs]),
            Qc(this.b, e),
            $r(this, 'refreshToken', this.b.a),
            dl(this, n || {}),
            bn.call(this),
            (this.P = !1),
            this.s && Tr() && (this.i = kc(this.s, this.l, this.m)),
            (this.R = []),
            (this.h = null),
            (this.B = (function (t) {
              return new Jc(
                function () {
                  return t.I(!0);
                },
                function (t) {
                  return !(!t || 'auth/network-request-failed' != t.code);
                },
                function () {
                  var e = Xc(t.b) - S() - 3e5;
                  return 0 < e ? e : 0;
                }
              );
            })(this)),
            (this.Z = w(this.Ma, this));
          var r = this;
          (this.oa = null),
            (this.za = function (t) {
              r.va(t.g);
            }),
            (this.aa = null),
            (this.W = []),
            (this.ya = function (t) {
              il(r, t.c);
            }),
            (this.$ = null),
            (this.O = new Kc(this, n)),
            $r(this, 'multiFactor', this.O);
        }
        function rl(t, e) {
          t.aa && cn(t.aa, 'languageCodeChanged', t.za), (t.aa = e) && sn(e, 'languageCodeChanged', t.za);
        }
        function il(t, e) {
          (t.W = e), Ys(t.a, y.a.SDK_VERSION ? Sr(y.a.SDK_VERSION, t.W) : null);
        }
        function ol(t, e) {
          t.$ && cn(t.$, 'frameworkChanged', t.ya), (t.$ = e) && sn(e, 'frameworkChanged', t.ya);
        }
        function sl(t) {
          try {
            return y.a.app(t.m).auth();
          } catch (e) {
            throw new C(
              'internal-error',
              "No firebase.auth.Auth instance is available for the Firebase App '" + t.m + "'!"
            );
          }
        }
        function al(t) {
          t.D || t.B.b || (t.B.start(), cn(t, 'tokenChanged', t.Z), sn(t, 'tokenChanged', t.Z));
        }
        function ul(t) {
          cn(t, 'tokenChanged', t.Z), t.B.stop();
        }
        function cl(t, e) {
          (t.xa = e), $r(t, '_lat', e);
        }
        function ll(t) {
          for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t));
          return ke(e).then(function () {
            return t;
          });
        }
        function hl(t) {
          t.i && !t.P && ((t.P = !0), yc(t.i, t));
        }
        function dl(t, e) {
          qr(t, {
            uid: e.uid,
            displayName: e.displayName || null,
            photoURL: e.photoURL || null,
            email: e.email || null,
            emailVerified: e.emailVerified || !1,
            phoneNumber: e.phoneNumber || null,
            isAnonymous: e.isAnonymous || !1,
            tenantId: e.tenantId || null,
            metadata: new tl(e.createdAt, e.lastLoginAt),
            providerData: []
          }),
            (t.a.b = t.tenantId);
        }
        function fl() {}
        function pl(t) {
          return Ie().then(function () {
            if (t.D) throw new C('app-deleted');
          });
        }
        function gl(t) {
          return $(t.providerData, function (t) {
            return t.providerId;
          });
        }
        function ml(t, e) {
          e && (vl(t, e.providerId), t.providerData.push(e));
        }
        function vl(t, e) {
          K(t.providerData, function (t) {
            return t.providerId == e;
          });
        }
        function bl(t, e, n) {
          ('uid' != e || n) && t.hasOwnProperty(e) && $r(t, e, n);
        }
        function yl(t, e) {
          t != e &&
            (qr(t, {
              uid: e.uid,
              displayName: e.displayName,
              photoURL: e.photoURL,
              email: e.email,
              emailVerified: e.emailVerified,
              phoneNumber: e.phoneNumber,
              isAnonymous: e.isAnonymous,
              tenantId: e.tenantId,
              providerData: []
            }),
            $r(
              t,
              'metadata',
              e.metadata
                ? (function (t) {
                    return new tl(t.a, t.b);
                  })(e.metadata)
                : new tl()
            ),
            H(e.providerData, function (e) {
              ml(t, e);
            }),
            (function (t, e) {
              (t.b = e.b), (t.a = e.a);
            })(t.b, e.b),
            $r(t, 'refreshToken', t.b.a),
            Yc(t.O, e.O.b));
        }
        function wl(t) {
          return t.I().then(function (e) {
            var n = t.isAnonymous;
            return (function (t, e) {
              return qa(t.a, Sa, { idToken: e }).then(w(t.Ic, t));
            })(t, e).then(function () {
              return n || bl(t, 'isAnonymous', !1), e;
            });
          });
        }
        function _l(t, e) {
          e[Bs] &&
            t.xa != e[Bs] &&
            (Qc(t.b, e), t.dispatchEvent(new Gc('tokenChanged')), cl(t, e[Bs]), bl(t, 'refreshToken', t.b.a));
        }
        function Sl(t, e) {
          return wl(t).then(function () {
            if (W(gl(t), e))
              return ll(t).then(function () {
                throw new C('provider-already-linked');
              });
          });
        }
        function El(t, e, n) {
          return Wr({ user: t, credential: Ro(e), additionalUserInfo: (e = Bi(e)), operationType: n });
        }
        function Cl(t, e) {
          return (
            _l(t, e),
            t.reload().then(function () {
              return t;
            })
          );
        }
        function Il(t, e, n, r, i) {
          if (!Tr()) return Te(new C('operation-not-supported-in-this-environment'));
          if (t.h && !i) return Te(t.h);
          var o = Hi(n.providerId),
            s = Pr(t.uid + ':::'),
            a = null;
          (!Or() || gr()) &&
            t.s &&
            n.isOAuthProvider &&
            (a = su(t.s, t.l, t.m, e, n, null, s, y.a.SDK_VERSION || null, null, null, t.tenantId));
          var u = lr(a, o && o.ta, o && o.sa);
          return (
            (r = r()
              .then(function () {
                if ((xl(t), !i)) return t.I().then(function () {});
              })
              .then(function () {
                return Ec(t.i, u, e, n, s, !!a, t.tenantId);
              })
              .then(function () {
                return new be(function (n, r) {
                  t.la(e, null, new C('cancelled-popup-request'), t.g || null),
                    (t.f = n),
                    (t.w = r),
                    (t.g = s),
                    (t.c = Tc(t.i, t, e, u, s));
                });
              })
              .then(function (t) {
                return u && cr(u), t ? Wr(t) : null;
              })
              .o(function (t) {
                throw (u && cr(u), t);
              })),
            kl(t, r, i)
          );
        }
        function Tl(t, e, n, r, i) {
          if (!Tr()) return Te(new C('operation-not-supported-in-this-environment'));
          if (t.h && !i) return Te(t.h);
          var o = null,
            s = Pr(t.uid + ':::');
          return (
            (r = r()
              .then(function () {
                if ((xl(t), !i)) return t.I().then(function () {});
              })
              .then(function () {
                return (t.fa = s), ll(t);
              })
              .then(function (e) {
                return t.ga && (e = (e = t.ga).b.set(Nl, t.v(), e.a)), e;
              })
              .then(function () {
                return Ic(t.i, e, n, s, t.tenantId);
              })
              .o(function (e) {
                if (((o = e), t.ga)) return Rl(t.ga);
                throw o;
              })
              .then(function () {
                if (o) throw o;
              })),
            kl(t, r, i)
          );
        }
        function xl(t) {
          if (!t.i || !t.P) {
            if (t.i && !t.P) throw new C('internal-error');
            throw new C('auth-domain-config-required');
          }
        }
        function kl(t, e, n) {
          var r = (function (t, e, n) {
            return t.h && !n
              ? (e.cancel(), Te(t.h))
              : e.o(function (e) {
                  throw (
                    (!e ||
                      ('auth/user-disabled' != e.code && 'auth/user-token-expired' != e.code) ||
                      (t.h || t.dispatchEvent(new Gc('userInvalidated')), (t.h = e)),
                    e)
                  );
                });
          })(t, e, n);
          return (
            t.N.push(r),
            r.ma(function () {
              G(t.N, r);
            }),
            r.o(function (e) {
              var n = null;
              throw (e && 'auth/multi-factor-auth-required' === e.code && (n = Bc(e.v(), sl(t), w(t.hc, t))), n || e);
            })
          );
        }
        function Ol(t) {
          if (!t.apiKey) return null;
          var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName },
            n = {};
          if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
          (n[Bs] = t.stsTokenManager.accessToken), (n.refreshToken = t.stsTokenManager.refreshToken || null);
          var r = new nl(e, n, t);
          return (
            t.providerData &&
              H(t.providerData, function (t) {
                t && ml(r, Wr(t));
              }),
            t.redirectEventId && (r.fa = t.redirectEventId),
            r
          );
        }
        function Al(t) {
          (this.a = t), (this.b = zu());
        }
        (Vc.prototype.Pc = function (t) {
          var e = this;
          return t.ob(this.a.b, this.c).then(function (t) {
            var n = ft(e.f);
            return delete n[Fc], delete n[zc], gt(n, t), e.g(n);
          });
        }),
          E(Hc, C),
          ($c.prototype.ob = function (t, e, n) {
            return e.type == to
              ? (function (t, e, n, r) {
                  return n.Fa().then(function (n) {
                    return (
                      (n = { idToken: n }),
                      void 0 !== r && (n.displayName = r),
                      gt(n, { phoneVerificationInfo: Oo(t.a) }),
                      qa(e, wa, n)
                    );
                  });
                })(this, t, e, n)
              : (function (t, e, n) {
                  return n.Fa().then(function (n) {
                    return gt((n = { mfaPendingCredential: n }), { phoneVerificationInfo: Oo(t.a) }), qa(e, _a, n);
                  });
                })(this, t, e);
          }),
          E(qc, $c),
          E(Wc, qc),
          E(Gc, Ge),
          ((t = Kc.prototype).wc = function (t) {
            Yc(
              this,
              (function (t) {
                var e = [];
                return (
                  H(t.mfaInfo || [], function (t) {
                    (t = Yr(t)) && e.push(t);
                  }),
                  e
                );
              })(t.ed)
            );
          }),
          (t.Ob = function () {
            return this.a.I().then(function (t) {
              return new Qi(t, null);
            });
          }),
          (t.dc = function (t, e) {
            var n = this,
              r = this.a.a;
            return this.Ob()
              .then(function (n) {
                return t.ob(r, n, e);
              })
              .then(function (t) {
                return _l(n.a, t), n.a.reload();
              });
          }),
          (t.$c = function (t) {
            var e = this,
              n = 'string' == typeof t ? t : t.uid,
              r = this.a.a;
            return this.a
              .I()
              .then(function (t) {
                return qa(r, $a, { idToken: t, mfaEnrollmentId: n });
              })
              .then(function (t) {
                var r = B(e.b, function (t) {
                  return t.uid != n;
                });
                return (
                  Yc(e, r),
                  _l(e.a, t),
                  e.a.reload().o(function (t) {
                    if ('auth/user-token-expired' != t.code) throw t;
                  })
                );
              });
          }),
          (t.v = function () {
            return {
              multiFactor: {
                enrolledFactors: $(this.b, function (t) {
                  return t.v();
                })
              }
            };
          }),
          (Jc.prototype.start = function () {
            (this.a = this.c),
              (function t(e, n) {
                e.stop(),
                  (e.b = En(
                    (function (t, e) {
                      return e ? ((t.a = t.c), t.g()) : ((e = t.a), (t.a *= 2), t.a > t.f && (t.a = t.f), e);
                    })(e, n)
                  )
                    .then(function () {
                      return (function () {
                        var t = s.document,
                          e = null;
                        return Lr() || !t
                          ? Ie()
                          : new be(function (n) {
                              (e = function () {
                                Lr() && (t.removeEventListener('visibilitychange', e, !1), n());
                              }),
                                t.addEventListener('visibilitychange', e, !1);
                            }).o(function (n) {
                              throw (t.removeEventListener('visibilitychange', e, !1), n);
                            });
                      })();
                    })
                    .then(function () {
                      return e.h();
                    })
                    .then(function () {
                      t(e, !0);
                    })
                    .o(function (n) {
                      e.i(n) && t(e, !1);
                    }));
              })(this, !0);
          }),
          (Jc.prototype.stop = function () {
            this.b && (this.b.cancel(), (this.b = null));
          }),
          (Zc.prototype.v = function () {
            return {
              apiKey: this.c.c,
              refreshToken: this.a,
              accessToken: this.b && this.b.toString(),
              expirationTime: Xc(this)
            };
          }),
          (Zc.prototype.getToken = function (t) {
            return (
              (t = !!t),
              this.b && !this.a
                ? Te(new C('user-token-expired'))
                : t || !this.b || S() > Xc(this) - 3e4
                ? this.a
                  ? (function (t, e) {
                      return (function (t, e) {
                        return new be(function (n, r) {
                          ('refresh_token' == e.grant_type && e.refresh_token) ||
                          ('authorization_code' == e.grant_type && e.code)
                            ? Js(
                                t,
                                t.u + '?key=' + encodeURIComponent(t.c),
                                function (t) {
                                  t
                                    ? t.error
                                      ? r(Ga(t))
                                      : t.access_token && t.refresh_token
                                      ? n(t)
                                      : r(new C('internal-error'))
                                    : r(new C('network-request-failed'));
                                },
                                'POST',
                                Kn(e).toString(),
                                t.g,
                                t.m.get()
                              )
                            : r(new C('internal-error'));
                        });
                      })(t.c, e)
                        .then(function (e) {
                          return (
                            (t.b = Li(e.access_token)),
                            (t.a = e.refresh_token),
                            { accessToken: t.b.toString(), refreshToken: t.a }
                          );
                        })
                        .o(function (e) {
                          throw ('auth/user-token-expired' == e.code && (t.a = null), e);
                        });
                    })(this, { grant_type: 'refresh_token', refresh_token: this.a })
                  : Ie(null)
                : Ie({ accessToken: this.b.toString(), refreshToken: this.a })
            );
          }),
          (tl.prototype.v = function () {
            return { lastLoginAt: this.b, createdAt: this.a };
          }),
          E(nl, bn),
          (nl.prototype.va = function (t) {
            (this.oa = t), Ks(this.a, t);
          }),
          (nl.prototype.ja = function () {
            return this.oa;
          }),
          (nl.prototype.Ea = function () {
            return J(this.W);
          }),
          (nl.prototype.Ma = function () {
            this.B.b && (this.B.stop(), this.B.start());
          }),
          $r(nl.prototype, 'providerId', 'firebase'),
          ((t = nl.prototype).reload = function () {
            var t = this;
            return kl(
              this,
              pl(this).then(function () {
                return wl(t)
                  .then(function () {
                    return ll(t);
                  })
                  .then(fl);
              })
            );
          }),
          (t.mc = function (t) {
            return this.I(t).then(function (t) {
              return new Uc(t);
            });
          }),
          (t.I = function (t) {
            var e = this;
            return kl(
              this,
              pl(this)
                .then(function () {
                  return e.b.getToken(t);
                })
                .then(function (t) {
                  if (!t) throw new C('internal-error');
                  return (
                    t.accessToken != e.xa && (cl(e, t.accessToken), e.dispatchEvent(new Gc('tokenChanged'))),
                    bl(e, 'refreshToken', t.refreshToken),
                    t.accessToken
                  );
                })
            );
          }),
          (t.Ic = function (t) {
            if (!(t = t.users) || !t.length) throw new C('internal-error');
            dl(this, {
              uid: (t = t[0]).localId,
              displayName: t.displayName,
              photoURL: t.photoUrl,
              email: t.email,
              emailVerified: !!t.emailVerified,
              phoneNumber: t.phoneNumber,
              lastLoginAt: t.lastLoginAt,
              createdAt: t.createdAt,
              tenantId: t.tenantId
            });
            for (
              var e = (function (t) {
                  return (t = t.providerUserInfo) && t.length
                    ? $(t, function (t) {
                        return new el(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber);
                      })
                    : [];
                })(t),
                n = 0;
              n < e.length;
              n++
            )
              ml(this, e[n]);
            bl(
              this,
              'isAnonymous',
              !((this.email && t.passwordHash) || (this.providerData && this.providerData.length))
            ),
              this.dispatchEvent(new Gc('userReloaded', { ed: t }));
          }),
          (t.Jc = function (t) {
            return (
              Hr(
                'firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.'
              ),
              this.pb(t)
            );
          }),
          (t.pb = function (t) {
            var e = this,
              n = null;
            return kl(
              this,
              t
                .c(this.a, this.uid)
                .then(function (t) {
                  return _l(e, t), (n = El(e, t, 'reauthenticate')), (e.h = null), e.reload();
                })
                .then(function () {
                  return n;
                }),
              !0
            );
          }),
          (t.Ac = function (t) {
            return (
              Hr(
                'firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.'
              ),
              this.mb(t)
            );
          }),
          (t.mb = function (t) {
            var e = this,
              n = null;
            return kl(
              this,
              Sl(this, t.providerId)
                .then(function () {
                  return e.I();
                })
                .then(function (n) {
                  return t.b(e.a, n);
                })
                .then(function (t) {
                  return (n = El(e, t, 'link')), Cl(e, t);
                })
                .then(function () {
                  return n;
                })
            );
          }),
          (t.Bc = function (t, e) {
            var n = this;
            return kl(
              this,
              Sl(this, 'phone').then(function () {
                return Lc(sl(n), t, e, w(n.mb, n));
              })
            );
          }),
          (t.Kc = function (t, e) {
            var n = this;
            return kl(
              this,
              Ie().then(function () {
                return Lc(sl(n), t, e, w(n.pb, n));
              }),
              !0
            );
          }),
          (t.xb = function (t) {
            var e = this;
            return kl(
              this,
              this.I()
                .then(function (n) {
                  return e.a.xb(n, t);
                })
                .then(function (t) {
                  return _l(e, t), e.reload();
                })
            );
          }),
          (t.cd = function (t) {
            var e = this;
            return kl(
              this,
              this.I()
                .then(function (n) {
                  return t.b(e.a, n);
                })
                .then(function (t) {
                  return _l(e, t), e.reload();
                })
            );
          }),
          (t.yb = function (t) {
            var e = this;
            return kl(
              this,
              this.I()
                .then(function (n) {
                  return e.a.yb(n, t);
                })
                .then(function (t) {
                  return _l(e, t), e.reload();
                })
            );
          }),
          (t.zb = function (t) {
            if (void 0 === t.displayName && void 0 === t.photoURL) return pl(this);
            var e = this;
            return kl(
              this,
              this.I()
                .then(function (n) {
                  return e.a.zb(n, { displayName: t.displayName, photoUrl: t.photoURL });
                })
                .then(function (t) {
                  return (
                    _l(e, t),
                    bl(e, 'displayName', t.displayName || null),
                    bl(e, 'photoURL', t.photoUrl || null),
                    H(e.providerData, function (t) {
                      'password' === t.providerId &&
                        ($r(t, 'displayName', e.displayName), $r(t, 'photoURL', e.photoURL));
                    }),
                    ll(e)
                  );
                })
                .then(fl)
            );
          }),
          (t.ad = function (t) {
            var e = this;
            return kl(
              this,
              wl(this).then(function (n) {
                return W(gl(e), t)
                  ? (function (t, e, n) {
                      return qa(t, va, { idToken: e, deleteProvider: n });
                    })(e.a, n, [t]).then(function (t) {
                      var n = {};
                      return (
                        H(t.providerUserInfo || [], function (t) {
                          n[t.providerId] = !0;
                        }),
                        H(gl(e), function (t) {
                          n[t] || vl(e, t);
                        }),
                        n[Ao.PROVIDER_ID] || $r(e, 'phoneNumber', null),
                        ll(e)
                      );
                    })
                  : ll(e).then(function () {
                      throw new C('no-such-provider');
                    });
              })
            );
          }),
          (t.delete = function () {
            var t = this;
            return kl(
              this,
              this.I()
                .then(function (e) {
                  return qa(t.a, ma, { idToken: e });
                })
                .then(function () {
                  t.dispatchEvent(new Gc('userDeleted'));
                })
            ).then(function () {
              for (var e = 0; e < t.N.length; e++) t.N[e].cancel('app-deleted');
              rl(t, null), ol(t, null), (t.N = []), (t.D = !0), ul(t), $r(t, 'refreshToken', null), t.i && wc(t.i, t);
            });
          }),
          (t.Cb = function (t, e) {
            return !!(
              ('linkViaPopup' == t && (this.g || null) == e && this.f) ||
              ('reauthViaPopup' == t && (this.g || null) == e && this.f) ||
              ('linkViaRedirect' == t && (this.fa || null) == e) ||
              ('reauthViaRedirect' == t && (this.fa || null) == e)
            );
          }),
          (t.la = function (t, e, n, r) {
            ('linkViaPopup' != t && 'reauthViaPopup' != t) ||
              r != (this.g || null) ||
              (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.w);
          }),
          (t.Da = function (t, e) {
            return 'linkViaPopup' == t && e == (this.g || null)
              ? w(this.Hb, this)
              : 'reauthViaPopup' == t && e == (this.g || null)
              ? w(this.Ib, this)
              : 'linkViaRedirect' == t && (this.fa || null) == e
              ? w(this.Hb, this)
              : 'reauthViaRedirect' == t && (this.fa || null) == e
              ? w(this.Ib, this)
              : null;
          }),
          (t.Cc = function (t) {
            var e = this;
            return Il(
              this,
              'linkViaPopup',
              t,
              function () {
                return Sl(e, t.providerId).then(function () {
                  return ll(e);
                });
              },
              !1
            );
          }),
          (t.Lc = function (t) {
            return Il(
              this,
              'reauthViaPopup',
              t,
              function () {
                return Ie();
              },
              !0
            );
          }),
          (t.Dc = function (t) {
            var e = this;
            return Tl(
              this,
              'linkViaRedirect',
              t,
              function () {
                return Sl(e, t.providerId);
              },
              !1
            );
          }),
          (t.Mc = function (t) {
            return Tl(
              this,
              'reauthViaRedirect',
              t,
              function () {
                return Ie();
              },
              !0
            );
          }),
          (t.Hb = function (t, e, n, r) {
            var i = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return kl(
              this,
              this.I()
                .then(function (n) {
                  return ca(i.a, { requestUri: t, postBody: r, sessionId: e, idToken: n });
                })
                .then(function (t) {
                  return (o = El(i, t, 'link')), Cl(i, t);
                })
                .then(function () {
                  return o;
                })
            );
          }),
          (t.Ib = function (t, e, n, r) {
            var i = this;
            this.c && (this.c.cancel(), (this.c = null));
            var o = null;
            return kl(
              this,
              Ie()
                .then(function () {
                  return ro(la(i.a, { requestUri: t, sessionId: e, postBody: r, tenantId: n }), i.uid);
                })
                .then(function (t) {
                  return (o = El(i, t, 'reauthenticate')), _l(i, t), (i.h = null), i.reload();
                })
                .then(function () {
                  return o;
                }),
              !0
            );
          }),
          (t.qb = function (t) {
            var e = this,
              n = null;
            return kl(
              this,
              this.I()
                .then(function (e) {
                  return (n = e), void 0 === t || dt(t) ? {} : Di(new Ci(t));
                })
                .then(function (t) {
                  return e.a.qb(n, t);
                })
                .then(function (t) {
                  if (e.email != t) return e.reload();
                })
                .then(function () {})
            );
          }),
          (t.Ab = function (t, e) {
            var n = this,
              r = null;
            return kl(
              this,
              this.I()
                .then(function (t) {
                  return (r = t), void 0 === e || dt(e) ? {} : Di(new Ci(e));
                })
                .then(function (e) {
                  return n.a.Ab(r, t, e);
                })
                .then(function (t) {
                  if (n.email != t) return n.reload();
                })
                .then(function () {})
            );
          }),
          (t.hc = function (t) {
            var e = null,
              n = this;
            return kl(
              this,
              (t = ro(Ie(t), n.uid)
                .then(function (t) {
                  return (e = El(n, t, 'reauthenticate')), _l(n, t), (n.h = null), n.reload();
                })
                .then(function () {
                  return e;
                })),
              !0
            );
          }),
          (t.toJSON = function () {
            return this.v();
          }),
          (t.v = function () {
            var t = {
              uid: this.uid,
              displayName: this.displayName,
              photoURL: this.photoURL,
              email: this.email,
              emailVerified: this.emailVerified,
              phoneNumber: this.phoneNumber,
              isAnonymous: this.isAnonymous,
              tenantId: this.tenantId,
              providerData: [],
              apiKey: this.l,
              appName: this.m,
              authDomain: this.s,
              stsTokenManager: this.b.v(),
              redirectEventId: this.fa || null
            };
            return (
              this.metadata && gt(t, this.metadata.v()),
              H(this.providerData, function (e) {
                t.providerData.push(
                  (function (t) {
                    var e,
                      n = {};
                    for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                    return n;
                  })(e)
                );
              }),
              gt(t, this.O.v()),
              t
            );
          });
        var Nl = { name: 'redirectUser', F: 'session' };
        function Rl(t) {
          return $u(t.b, Nl, t.a);
        }
        function Pl(t) {
          (this.a = t),
            (this.b = zu()),
            (this.c = null),
            (this.f = (function (t) {
              var e = Ml('local'),
                n = Ml('session'),
                r = Ml('none');
              return (function (t, e, n) {
                var r = Bu(e, n),
                  i = Hu(t, e.F);
                return t.get(e, n).then(function (o) {
                  var a = null;
                  try {
                    a = Rr(s.localStorage.getItem(r));
                  } catch (u) {}
                  if (a && !o) return s.localStorage.removeItem(r), t.set(e, a, n);
                  a && o && 'localStorage' != i.type && s.localStorage.removeItem(r);
                });
              })(t.b, e, t.a)
                .then(function () {
                  return t.b.get(n, t.a);
                })
                .then(function (i) {
                  return i
                    ? n
                    : t.b.get(r, t.a).then(function (n) {
                        return n
                          ? r
                          : t.b.get(e, t.a).then(function (n) {
                              return n
                                ? e
                                : t.b.get(jl, t.a).then(function (t) {
                                    return t ? Ml(t) : e;
                                  });
                            });
                      });
                })
                .then(function (e) {
                  return (t.c = e), Dl(t, e.F);
                })
                .o(function () {
                  t.c || (t.c = e);
                });
            })(this)),
            this.b.addListener(Ml('local'), this.a, w(this.g, this));
        }
        function Dl(t, e) {
          var n,
            r = [];
          for (n in Vu) Vu[n] !== e && r.push($u(t.b, Ml(Vu[n]), t.a));
          return (
            r.push($u(t.b, jl, t.a)),
            (function (t) {
              return new be(function (e, n) {
                var r = t.length,
                  i = [];
                if (r)
                  for (
                    var o = function (t, n) {
                        r--, (i[t] = n), 0 == r && e(i);
                      },
                      s = function (t) {
                        n(t);
                      },
                      a = 0;
                    a < t.length;
                    a++
                  )
                    xe(t[a], _(o, a), s);
                else e(i);
              });
            })(r)
          );
        }
        Pl.prototype.g = function () {
          var t = this,
            e = Ml('local');
          Fl(this, function () {
            return Ie()
              .then(function () {
                return t.c && 'local' != t.c.F ? t.b.get(e, t.a) : null;
              })
              .then(function (n) {
                if (n)
                  return Dl(t, 'local').then(function () {
                    t.c = e;
                  });
              });
          });
        };
        var jl = { name: 'persistence', F: 'session' };
        function Ml(t) {
          return { name: 'authUser', F: t };
        }
        function Ll(t, e) {
          return Fl(t, function () {
            return t.b.set(t.c, e.v(), t.a);
          });
        }
        function Ul(t) {
          return Fl(t, function () {
            return $u(t.b, t.c, t.a);
          });
        }
        function Vl(t, e) {
          return Fl(t, function () {
            return t.b.get(t.c, t.a).then(function (t) {
              return t && e && (t.authDomain = e), Ol(t || {});
            });
          });
        }
        function Fl(t, e) {
          return (t.f = t.f.then(e, e)), t.f;
        }
        function zl(t) {
          if (
            ((this.l = !1),
            $r(this, 'settings', new jc()),
            $r(this, 'app', t),
            !Kl(this).options || !Kl(this).options.apiKey)
          )
            throw new C('invalid-api-key');
          (t = y.a.SDK_VERSION ? Sr(y.a.SDK_VERSION) : null),
            (this.b = new zs(Kl(this).options && Kl(this).options.apiKey, A(T), t)),
            (this.P = []),
            (this.m = []),
            (this.O = []),
            (this.$b = y.a.INTERNAL.createSubscribe(w(this.xc, this))),
            (this.W = void 0),
            (this.ac = y.a.INTERNAL.createSubscribe(w(this.yc, this))),
            Wl(this, null),
            (this.i = new Pl(Kl(this).options.apiKey + ':' + Kl(this).name)),
            (this.B = new Al(Kl(this).options.apiKey + ':' + Kl(this).name)),
            (this.Z = Xl(
              this,
              (function (t) {
                var e = Kl(t).options.authDomain,
                  n = (function (t) {
                    var e = (function (t, e) {
                      return t.b.get(Nl, t.a).then(function (t) {
                        return t && e && (t.authDomain = e), Ol(t || {});
                      });
                    })(t.B, Kl(t).options.authDomain).then(function (e) {
                      return (t.D = e) && (e.ga = t.B), Rl(t.B);
                    });
                    return Xl(t, e);
                  })(t)
                    .then(function () {
                      return Vl(t.i, e);
                    })
                    .then(function (e) {
                      return e
                        ? ((e.ga = t.B),
                          t.D && (t.D.fa || null) == (e.fa || null)
                            ? e
                            : e
                                .reload()
                                .then(function () {
                                  return Ll(t.i, e).then(function () {
                                    return e;
                                  });
                                })
                                .o(function (n) {
                                  return 'auth/network-request-failed' == n.code ? e : Ul(t.i);
                                }))
                        : null;
                    })
                    .then(function (e) {
                      Wl(t, e || null);
                    });
                return Xl(t, n);
              })(this)
            )),
            (this.h = Xl(
              this,
              (function (t) {
                return t.Z.then(function () {
                  return ql(t);
                })
                  .o(function () {})
                  .then(function () {
                    if (!t.l) return t.oa();
                  })
                  .o(function () {})
                  .then(function () {
                    if (!t.l) {
                      t.aa = !0;
                      var e = t.i;
                      e.b.addListener(Ml('local'), e.a, t.oa);
                    }
                  });
              })(this)
            )),
            (this.aa = !1),
            (this.oa = w(this.Xc, this)),
            (this.Ma = w(this.ca, this)),
            (this.xa = w(this.jc, this)),
            (this.ya = w(this.uc, this)),
            (this.za = w(this.vc, this)),
            (this.a = null),
            (function (t) {
              var e = Kl(t).options.authDomain,
                n = Kl(t).options.apiKey;
              e &&
                Tr() &&
                (t.Zb = t.Z.then(function () {
                  if (!t.l) {
                    if (((t.a = kc(e, n, Kl(t).name)), yc(t.a, t), Yl(t) && hl(Yl(t)), t.D)) {
                      hl(t.D);
                      var r = t.D;
                      r.va(t.ja()), rl(r, t), il((r = t.D), t.N), ol(r, t), (t.D = null);
                    }
                    return t.a;
                  }
                }));
            })(this),
            (this.INTERNAL = {}),
            (this.INTERNAL.delete = w(this.delete, this)),
            (this.INTERNAL.logFramework = w(this.Ec, this)),
            (this.s = 0),
            bn.call(this),
            (function (t) {
              Object.defineProperty(t, 'lc', {
                get: function () {
                  return this.ja();
                },
                set: function (t) {
                  this.va(t);
                },
                enumerable: !1
              }),
                (t.$ = null),
                Object.defineProperty(t, 'ti', {
                  get: function () {
                    return this.S();
                  },
                  set: function (t) {
                    this.ub(t);
                  },
                  enumerable: !1
                }),
                (t.R = null);
            })(this),
            (this.N = []);
        }
        function Hl(t) {
          Ge.call(this, 'languageCodeChanged'), (this.g = t);
        }
        function Bl(t) {
          Ge.call(this, 'frameworkChanged'), (this.c = t);
        }
        function $l(t) {
          return t.Zb || Te(new C('auth-domain-config-required'));
        }
        function ql(t) {
          if (!Tr()) return Te(new C('operation-not-supported-in-this-environment'));
          var e = $l(t)
            .then(function () {
              return t.a.pa();
            })
            .then(function (t) {
              return t ? Wr(t) : null;
            });
          return Xl(t, e);
        }
        function Wl(t, e) {
          Yl(t) &&
            ((function (t, e) {
              K(t.R, function (t) {
                return t == e;
              });
            })(Yl(t), t.Ma),
            cn(Yl(t), 'tokenChanged', t.xa),
            cn(Yl(t), 'userDeleted', t.ya),
            cn(Yl(t), 'userInvalidated', t.za),
            ul(Yl(t))),
            e &&
              (e.R.push(t.Ma),
              sn(e, 'tokenChanged', t.xa),
              sn(e, 'userDeleted', t.ya),
              sn(e, 'userInvalidated', t.za),
              0 < t.s && al(e)),
            $r(t, 'currentUser', e),
            e && (e.va(t.ja()), rl(e, t), il(e, t.N), ol(e, t));
        }
        function Gl(t, e) {
          var n = null,
            r = null;
          return Xl(
            t,
            e
              .then(
                function (e) {
                  return (
                    (n = Ro(e)),
                    (r = Bi(e)),
                    (function (t, e) {
                      var n = {};
                      return (
                        (n.apiKey = Kl(t).options.apiKey),
                        (n.authDomain = Kl(t).options.authDomain),
                        (n.appName = Kl(t).name),
                        t.Z.then(function () {
                          return (function (t, e, n, r) {
                            var i = new nl(t, e);
                            return (
                              n && (i.ga = n),
                              r && il(i, r),
                              i.reload().then(function () {
                                return i;
                              })
                            );
                          })(n, e, t.B, t.Ea());
                        })
                          .then(function (e) {
                            return Yl(t) && e.uid == Yl(t).uid ? (yl(Yl(t), e), t.ca(e)) : (Wl(t, e), hl(e), t.ca(e));
                          })
                          .then(function () {
                            Zl(t);
                          })
                      );
                    })(t, e)
                  );
                },
                function (e) {
                  var n = null;
                  throw (e && 'auth/multi-factor-auth-required' === e.code && (n = Bc(e.v(), t, w(t.ic, t))), n || e);
                }
              )
              .then(function () {
                return Wr({ user: Yl(t), credential: n, additionalUserInfo: r, operationType: 'signIn' });
              })
          );
        }
        function Kl(t) {
          return t.app;
        }
        function Yl(t) {
          return t.currentUser;
        }
        function Jl(t) {
          return (Yl(t) && Yl(t)._lat) || null;
        }
        function Zl(t) {
          if (t.aa) {
            for (var e = 0; e < t.m.length; e++) t.m[e] && t.m[e](Jl(t));
            if (t.W !== t.getUid() && t.O.length)
              for (t.W = t.getUid(), e = 0; e < t.O.length; e++) t.O[e] && t.O[e](Jl(t));
          }
        }
        function Xl(t, e) {
          return (
            t.P.push(e),
            e.ma(function () {
              G(t.P, e);
            }),
            e
          );
        }
        function Ql() {}
        function th() {
          (this.a = {}), (this.b = 1e12);
        }
        (Pl.prototype.tb = function (t) {
          var e = null,
            n = this;
          return (
            (function (t) {
              var e = new C('invalid-persistence-type'),
                n = new C('unsupported-persistence-type');
              t: {
                for (r in Vu)
                  if (Vu[r] == t) {
                    var r = !0;
                    break t;
                  }
                r = !1;
              }
              if (!r || 'string' != typeof t) throw e;
              switch (vr()) {
                case 'ReactNative':
                  if ('session' === t) throw n;
                  break;
                case 'Node':
                  if ('none' !== t) throw n;
                  break;
                case 'Worker':
                  if ('session' === t || (!bu() && 'none' !== t)) throw n;
                  break;
                default:
                  if (!Ir() && 'none' !== t) throw n;
              }
            })(t),
            Fl(this, function () {
              return t != n.c.F
                ? n.b
                    .get(n.c, n.a)
                    .then(function (r) {
                      return (e = r), Dl(n, t);
                    })
                    .then(function () {
                      if (((n.c = Ml(t)), e)) return n.b.set(n.c, e, n.a);
                    })
                : Ie();
            })
          );
        }),
          E(zl, bn),
          E(Hl, Ge),
          E(Bl, Ge),
          ((t = zl.prototype).tb = function (t) {
            return Xl(this, (t = this.i.tb(t)));
          }),
          (t.va = function (t) {
            this.$ === t || this.l || ((this.$ = t), Ks(this.b, this.$), this.dispatchEvent(new Hl(this.ja())));
          }),
          (t.ja = function () {
            return this.$;
          }),
          (t.dd = function () {
            var t = s.navigator;
            this.va((t && ((t.languages && t.languages[0]) || t.language || t.userLanguage)) || null);
          }),
          (t.Ec = function (t) {
            this.N.push(t),
              Ys(this.b, y.a.SDK_VERSION ? Sr(y.a.SDK_VERSION, this.N) : null),
              this.dispatchEvent(new Bl(this.N));
          }),
          (t.Ea = function () {
            return J(this.N);
          }),
          (t.ub = function (t) {
            this.R === t || this.l || ((this.R = t), (this.b.b = this.R));
          }),
          (t.S = function () {
            return this.R;
          }),
          (t.toJSON = function () {
            return {
              apiKey: Kl(this).options.apiKey,
              authDomain: Kl(this).options.authDomain,
              appName: Kl(this).name,
              currentUser: Yl(this) && Yl(this).v()
            };
          }),
          (t.Cb = function (t, e) {
            switch (t) {
              case 'unknown':
              case 'signInViaRedirect':
                return !0;
              case 'signInViaPopup':
                return this.g == e && !!this.f;
              default:
                return !1;
            }
          }),
          (t.la = function (t, e, n, r) {
            'signInViaPopup' == t &&
              this.g == r &&
              (n && this.w ? this.w(n) : e && !n && this.f && this.f(e),
              this.c && (this.c.cancel(), (this.c = null)),
              delete this.f,
              delete this.w);
          }),
          (t.Da = function (t, e) {
            return 'signInViaRedirect' == t || ('signInViaPopup' == t && this.g == e && this.f)
              ? w(this.gc, this)
              : null;
          }),
          (t.gc = function (t, e, n, r) {
            var i = this,
              o = { requestUri: t, postBody: r, sessionId: e, tenantId: n };
            return (
              this.c && (this.c.cancel(), (this.c = null)),
              i.Z.then(function () {
                return Gl(i, ua(i.b, o));
              })
            );
          }),
          (t.Vc = function (t) {
            if (!Tr()) return Te(new C('operation-not-supported-in-this-environment'));
            var e = this,
              n = Hi(t.providerId),
              r = Pr(),
              i = null;
            (!Or() || gr()) &&
              Kl(this).options.authDomain &&
              t.isOAuthProvider &&
              (i = su(
                Kl(this).options.authDomain,
                Kl(this).options.apiKey,
                Kl(this).name,
                'signInViaPopup',
                t,
                null,
                r,
                y.a.SDK_VERSION || null,
                null,
                null,
                this.S()
              ));
            var o = lr(i, n && n.ta, n && n.sa);
            return Xl(
              this,
              (n = $l(this)
                .then(function (n) {
                  return Ec(n, o, 'signInViaPopup', t, r, !!i, e.S());
                })
                .then(function () {
                  return new be(function (t, n) {
                    e.la('signInViaPopup', null, new C('cancelled-popup-request'), e.g),
                      (e.f = t),
                      (e.w = n),
                      (e.g = r),
                      (e.c = Tc(e.a, e, 'signInViaPopup', o, r));
                  });
                })
                .then(function (t) {
                  return o && cr(o), t ? Wr(t) : null;
                })
                .o(function (t) {
                  throw (o && cr(o), t);
                }))
            );
          }),
          (t.Wc = function (t) {
            if (!Tr()) return Te(new C('operation-not-supported-in-this-environment'));
            var e = this;
            return Xl(
              this,
              $l(this)
                .then(function () {
                  return (function (t) {
                    return Fl(t, function () {
                      return t.b.set(jl, t.c.F, t.a);
                    });
                  })(e.i);
                })
                .then(function () {
                  return Ic(e.a, 'signInViaRedirect', t, void 0, e.S());
                })
            );
          }),
          (t.pa = function () {
            var t = this;
            return ql(this)
              .then(function (e) {
                return t.a && Nc(t.a.b), e;
              })
              .o(function (e) {
                throw (t.a && Nc(t.a.b), e);
              });
          }),
          (t.bd = function (t) {
            if (!t) return Te(new C('null-user'));
            if (this.R != t.tenantId) return Te(new C('tenant-id-mismatch'));
            var e = this,
              n = {};
            (n.apiKey = Kl(this).options.apiKey),
              (n.authDomain = Kl(this).options.authDomain),
              (n.appName = Kl(this).name);
            var r = (function (t, e, n, r) {
              var i = t.b,
                o = {};
              return (
                (o[Bs] = i.b && i.b.toString()),
                (o.refreshToken = i.a),
                (e = new nl(e || { apiKey: t.l, authDomain: t.s, appName: t.m }, o)),
                n && (e.ga = n),
                r && il(e, r),
                yl(e, t),
                e
              );
            })(t, n, e.B, e.Ea());
            return Xl(
              this,
              this.h
                .then(function () {
                  if (Kl(e).options.apiKey != t.l) return r.reload();
                })
                .then(function () {
                  return Yl(e) && t.uid == Yl(e).uid ? (yl(Yl(e), t), e.ca(t)) : (Wl(e, r), hl(r), e.ca(r));
                })
                .then(function () {
                  Zl(e);
                })
            );
          }),
          (t.wb = function () {
            var t = this;
            return Xl(
              this,
              this.h.then(function () {
                return (
                  t.a && Nc(t.a.b),
                  Yl(t)
                    ? (Wl(t, null),
                      Ul(t.i).then(function () {
                        Zl(t);
                      }))
                    : Ie()
                );
              })
            );
          }),
          (t.Xc = function () {
            var t = this;
            return Vl(this.i, Kl(this).options.authDomain).then(function (e) {
              if (!t.l) {
                var n;
                if ((n = Yl(t) && e)) {
                  n = Yl(t).uid;
                  var r = e.uid;
                  n = null != n && '' !== n && null != r && '' !== r && n == r;
                }
                if (n) return yl(Yl(t), e), Yl(t).I();
                (Yl(t) || e) && (Wl(t, e), e && (hl(e), (e.ga = t.B)), t.a && yc(t.a, t), Zl(t));
              }
            });
          }),
          (t.ca = function (t) {
            return Ll(this.i, t);
          }),
          (t.jc = function () {
            Zl(this), this.ca(Yl(this));
          }),
          (t.uc = function () {
            this.wb();
          }),
          (t.vc = function () {
            this.wb();
          }),
          (t.ic = function (t) {
            var e = this;
            return this.h.then(function () {
              return Gl(e, Ie(t));
            });
          }),
          (t.xc = function (t) {
            var e = this;
            this.addAuthTokenListener(function () {
              t.next(Yl(e));
            });
          }),
          (t.yc = function (t) {
            var e = this;
            !(function (t, e) {
              t.O.push(e),
                Xl(
                  t,
                  t.h.then(function () {
                    !t.l && W(t.O, e) && t.W !== t.getUid() && ((t.W = t.getUid()), e(Jl(t)));
                  })
                );
            })(this, function () {
              t.next(Yl(e));
            });
          }),
          (t.Gc = function (t, e, n) {
            var r = this;
            return (
              this.aa &&
                Promise.resolve().then(function () {
                  d(t) ? t(Yl(r)) : d(t.next) && t.next(Yl(r));
                }),
              this.$b(t, e, n)
            );
          }),
          (t.Fc = function (t, e, n) {
            var r = this;
            return (
              this.aa &&
                Promise.resolve().then(function () {
                  (r.W = r.getUid()), d(t) ? t(Yl(r)) : d(t.next) && t.next(Yl(r));
                }),
              this.ac(t, e, n)
            );
          }),
          (t.kc = function (t) {
            var e = this;
            return Xl(
              this,
              this.h.then(function () {
                return Yl(e)
                  ? Yl(e)
                      .I(t)
                      .then(function (t) {
                        return { accessToken: t };
                      })
                  : null;
              })
            );
          }),
          (t.Rc = function (t) {
            var e = this;
            return this.h
              .then(function () {
                return Gl(e, qa(e.b, Va, { token: t }));
              })
              .then(function (t) {
                var n = t.user;
                return bl(n, 'isAnonymous', !1), e.ca(n), t;
              });
          }),
          (t.Sc = function (t, e) {
            var n = this;
            return this.h.then(function () {
              return Gl(n, qa(n.b, Fa, { email: t, password: e }));
            });
          }),
          (t.cc = function (t, e) {
            var n = this;
            return this.h.then(function () {
              return Gl(n, qa(n.b, pa, { email: t, password: e }));
            });
          }),
          (t.Ya = function (t) {
            var e = this;
            return this.h.then(function () {
              return Gl(e, t.ia(e.b));
            });
          }),
          (t.Qc = function (t) {
            return (
              Hr(
                'firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.'
              ),
              this.Ya(t)
            );
          }),
          (t.vb = function () {
            var t = this;
            return this.h.then(function () {
              var e = Yl(t);
              if (e && e.isAnonymous) {
                var n = Wr({ providerId: null, isNewUser: !1 });
                return Wr({ user: e, credential: null, additionalUserInfo: n, operationType: 'signIn' });
              }
              return Gl(t, t.b.vb()).then(function (e) {
                var n = e.user;
                return bl(n, 'isAnonymous', !0), t.ca(n), e;
              });
            });
          }),
          (t.getUid = function () {
            return (Yl(this) && Yl(this).uid) || null;
          }),
          (t.bc = function (t) {
            this.addAuthTokenListener(t), this.s++, 0 < this.s && Yl(this) && al(Yl(this));
          }),
          (t.Nc = function (t) {
            var e = this;
            H(this.m, function (n) {
              n == t && e.s--;
            }),
              0 > this.s && (this.s = 0),
              0 == this.s && Yl(this) && ul(Yl(this)),
              this.removeAuthTokenListener(t);
          }),
          (t.addAuthTokenListener = function (t) {
            var e = this;
            this.m.push(t),
              Xl(
                this,
                this.h.then(function () {
                  e.l || (W(e.m, t) && t(Jl(e)));
                })
              );
          }),
          (t.removeAuthTokenListener = function (t) {
            K(this.m, function (e) {
              return e == t;
            });
          }),
          (t.delete = function () {
            this.l = !0;
            for (var t = 0; t < this.P.length; t++) this.P[t].cancel('app-deleted');
            return (
              (this.P = []),
              this.i && (t = this.i).b.removeListener(Ml('local'), t.a, this.oa),
              this.a && (wc(this.a, this), Nc(this.a.b)),
              Promise.resolve()
            );
          }),
          (t.fc = function (t) {
            return Xl(
              this,
              (function (t, e) {
                return qa(t, ga, { identifier: e, continueUri: xr() ? sr() : 'http://localhost' }).then(function (t) {
                  return t.signinMethods || [];
                });
              })(this.b, t)
            );
          }),
          (t.zc = function (t) {
            return !!To(t);
          }),
          (t.sb = function (t, e) {
            var n = this;
            return Xl(
              this,
              Ie()
                .then(function () {
                  var t = new Ci(e);
                  if (!t.c) throw new C('argument-error', xi + ' must be true when sending sign in link to email');
                  return Di(t);
                })
                .then(function (e) {
                  return n.b.sb(t, e);
                })
                .then(function () {})
            );
          }),
          (t.fd = function (t) {
            return this.Pa(t).then(function (t) {
              return t.data.email;
            });
          }),
          (t.jb = function (t, e) {
            return Xl(
              this,
              this.b.jb(t, e).then(function () {})
            );
          }),
          (t.Pa = function (t) {
            return Xl(
              this,
              this.b.Pa(t).then(function (t) {
                return new ei(t);
              })
            );
          }),
          (t.fb = function (t) {
            return Xl(
              this,
              this.b.fb(t).then(function () {})
            );
          }),
          (t.rb = function (t, e) {
            var n = this;
            return Xl(
              this,
              Ie()
                .then(function () {
                  return void 0 === e || dt(e) ? {} : Di(new Ci(e));
                })
                .then(function (e) {
                  return n.b.rb(t, e);
                })
                .then(function () {})
            );
          }),
          (t.Uc = function (t, e) {
            return Xl(this, Lc(this, t, e, w(this.Ya, this)));
          }),
          (t.Tc = function (t, e) {
            var n = this;
            return Xl(
              this,
              Ie().then(function () {
                var r = e || sr(),
                  i = Io(t, r);
                if (!(r = To(r))) throw new C('argument-error', 'Invalid email link!');
                if (r.tenantId !== n.S()) throw new C('tenant-id-mismatch');
                return n.Ya(i);
              })
            );
          }),
          (Ql.prototype.render = function () {}),
          (Ql.prototype.reset = function () {}),
          (Ql.prototype.getResponse = function () {}),
          (Ql.prototype.execute = function () {});
        var eh = null;
        function nh(t, e) {
          return ((e = rh(e)) && t.a[e]) || null;
        }
        function rh(t) {
          return (t = void 0 === t ? 1e12 : t) ? t.toString() : null;
        }
        function ih(t, e) {
          (this.g = !1),
            (this.c = e),
            (this.a = this.b = null),
            (this.h = 'invisible' !== this.c.size),
            (this.f = oe(t));
          var n = this;
          (this.i = function () {
            n.execute();
          }),
            this.h ? this.execute() : sn(this.f, 'click', this.i);
        }
        function oh(t) {
          if (t.g) throw Error('reCAPTCHA mock was already deleted!');
        }
        function sh() {}
        function ah() {}
        (th.prototype.render = function (t, e) {
          return (this.a[this.b.toString()] = new ih(t, e)), this.b++;
        }),
          (th.prototype.reset = function (t) {
            var e = nh(this, t);
            (t = rh(t)), e && t && (e.delete(), delete this.a[t]);
          }),
          (th.prototype.getResponse = function (t) {
            return (t = nh(this, t)) ? t.getResponse() : null;
          }),
          (th.prototype.execute = function (t) {
            (t = nh(this, t)) && t.execute();
          }),
          (ih.prototype.getResponse = function () {
            return oh(this), this.b;
          }),
          (ih.prototype.execute = function () {
            oh(this);
            var t = this;
            this.a ||
              (this.a = setTimeout(function () {
                t.b = (function () {
                  for (var t = 50, e = []; 0 < t; )
                    e.push(
                      '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.charAt(
                        Math.floor(62 * Math.random())
                      )
                    ),
                      t--;
                  return e.join('');
                })();
                var e = t.c.callback,
                  n = t.c['expired-callback'];
                if (e)
                  try {
                    e(t.b);
                  } catch (r) {}
                t.a = setTimeout(function () {
                  if (((t.a = null), (t.b = null), n))
                    try {
                      n();
                    } catch (r) {}
                  t.h && t.execute();
                }, 6e4);
              }, 500));
          }),
          (ih.prototype.delete = function () {
            oh(this), (this.g = !0), clearTimeout(this.a), (this.a = null), cn(this.f, 'click', this.i);
          }),
          $r(sh, 'FACTOR_ID', 'phone'),
          (ah.prototype.g = function () {
            return eh || (eh = new th()), Ie(eh);
          }),
          (ah.prototype.c = function () {});
        var uh = null;
        function ch() {
          (this.b = s.grecaptcha ? 1 / 0 : 0),
            (this.f = null),
            (this.a = '__rcb' + Math.floor(1e6 * Math.random()).toString());
        }
        var lh = new vt(wt, 'https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}'),
          hh = new Mr(3e4, 6e4);
        (ch.prototype.g = function (t) {
          var e = this;
          return new be(function (n, r) {
            var i = setTimeout(function () {
              r(new C('network-request-failed'));
            }, hh.get());
            !s.grecaptcha || (t !== e.f && !e.b)
              ? ((s[e.a] = function () {
                  if (s.grecaptcha) {
                    e.f = t;
                    var o = s.grecaptcha.render;
                    (s.grecaptcha.render = function (t, n) {
                      return (t = o(t, n)), e.b++, t;
                    }),
                      clearTimeout(i),
                      n(s.grecaptcha);
                  } else clearTimeout(i), r(new C('internal-error'));
                  delete s[e.a];
                }),
                Ie(Ds(Ct(lh, { onload: e.a, hl: t || '' }))).o(function () {
                  clearTimeout(i), r(new C('internal-error', 'Unable to load external reCAPTCHA dependencies!'));
                }))
              : (clearTimeout(i), n(s.grecaptcha));
          });
        }),
          (ch.prototype.c = function () {
            this.b--;
          });
        var dh = null;
        function fh(t, e, n, r, i, o, a) {
          if (
            ($r(this, 'type', 'recaptcha'),
            (this.c = this.f = null),
            (this.D = !1),
            (this.u = e),
            (this.g = null),
            a ? (uh || (uh = new ah()), (a = uh)) : (dh || (dh = new ch()), (a = dh)),
            (this.m = a),
            (this.a = n || { theme: 'light', type: 'image' }),
            (this.h = []),
            this.a[mh])
          )
            throw new C(
              'argument-error',
              'sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.'
            );
          if (((this.i = 'invisible' === this.a[vh]), !s.document))
            throw new C(
              'operation-not-supported-in-this-environment',
              'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.'
            );
          if (!oe(e) || (!this.i && oe(e).hasChildNodes()))
            throw new C(
              'argument-error',
              'reCAPTCHA container is either not found or already contains inner elements!'
            );
          (this.s = new zs(t, o || null, i || null)),
            (this.w =
              r ||
              function () {
                return null;
              });
          var u = this;
          this.l = [];
          var c = this.a[ph];
          this.a[ph] = function (t) {
            if ((bh(u, t), 'function' == typeof c)) c(t);
            else if ('string' == typeof c) {
              var e = Cr(c, s);
              'function' == typeof e && e(t);
            }
          };
          var l = this.a[gh];
          this.a[gh] = function () {
            if ((bh(u, null), 'function' == typeof l)) l();
            else if ('string' == typeof l) {
              var t = Cr(l, s);
              'function' == typeof t && t();
            }
          };
        }
        var ph = 'callback',
          gh = 'expired-callback',
          mh = 'sitekey',
          vh = 'size';
        function bh(t, e) {
          for (var n = 0; n < t.l.length; n++)
            try {
              t.l[n](e);
            } catch (r) {}
        }
        function yh(t, e) {
          return (
            t.h.push(e),
            e.ma(function () {
              G(t.h, e);
            }),
            e
          );
        }
        function wh(t) {
          if (t.D) throw new C('internal-error', 'RecaptchaVerifier instance has been destroyed.');
        }
        function _h(t, e, n) {
          var r = !1;
          try {
            this.b = n || y.a.app();
          } catch (s) {
            throw new C('argument-error', 'No firebase.app.App instance is currently initialized.');
          }
          if (!this.b.options || !this.b.options.apiKey) throw new C('invalid-api-key');
          n = this.b.options.apiKey;
          var i = this,
            o = null;
          try {
            o = this.b.auth().Ea();
          } catch (s) {}
          try {
            r = this.b.auth().settings.appVerificationDisabledForTesting;
          } catch (s) {}
          (o = y.a.SDK_VERSION ? Sr(y.a.SDK_VERSION, o) : null),
            fh.call(
              this,
              n,
              t,
              e,
              function () {
                try {
                  var t = i.b.auth().ja();
                } catch (e) {
                  t = null;
                }
                return t;
              },
              o,
              A(T),
              r
            );
        }
        function Sh(t, e, n, r) {
          t: {
            n = Array.prototype.slice.call(n);
            for (var i = 0, o = !1, s = 0; s < e.length; s++)
              if (e[s].optional) o = !0;
              else {
                if (o)
                  throw new C(
                    'internal-error',
                    'Argument validator encountered a required argument after an optional argument.'
                  );
                i++;
              }
            if (((o = e.length), n.length < i || o < n.length))
              r =
                'Expected ' +
                (i == o ? (1 == i ? '1 argument' : i + ' arguments') : i + '-' + o + ' arguments') +
                ' but got ' +
                n.length +
                '.';
            else {
              for (i = 0; i < n.length; i++)
                if (((o = e[i].optional && void 0 === n[i]), !e[i].K(n[i]) && !o)) {
                  if (((e = e[i]), 0 > i || i >= Eh.length))
                    throw new C('internal-error', 'Argument validator received an unsupported number of arguments.');
                  (n = Eh[i]),
                    (r = (r ? '' : n + ' argument ') + (e.name ? '"' + e.name + '" ' : '') + 'must be ' + e.J + '.');
                  break t;
                }
              r = null;
            }
          }
          if (r) throw new C('argument-error', t + ' failed: ' + r);
        }
        ((t = fh.prototype).Ga = function () {
          var t = this;
          return this.f
            ? this.f
            : (this.f = yh(
                this,
                Ie()
                  .then(function () {
                    if (xr() && !mr()) return fr();
                    throw new C(
                      'operation-not-supported-in-this-environment',
                      'RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.'
                    );
                  })
                  .then(function () {
                    return t.m.g(t.w());
                  })
                  .then(function (e) {
                    return (t.g = e), qa(t.s, ka, {});
                  })
                  .then(function (e) {
                    t.a[mh] = e.recaptchaSiteKey;
                  })
                  .o(function (e) {
                    throw ((t.f = null), e);
                  })
              ));
        }),
          (t.render = function () {
            wh(this);
            var t = this;
            return yh(
              this,
              this.Ga().then(function () {
                if (null === t.c) {
                  var e = t.u;
                  if (!t.i) {
                    var n = oe(e);
                    (e = (function (t, e, n) {
                      var r = arguments,
                        i = document,
                        o = String(r[0]),
                        s = r[1];
                      if (!ie && s && (s.name || s.type)) {
                        if (((o = ['<', o]), s.name && o.push(' name="', zt(s.name), '"'), s.type)) {
                          o.push(' type="', zt(s.type), '"');
                          var a = {};
                          gt(a, s), delete a.type, (s = a);
                        }
                        o.push('>'), (o = o.join(''));
                      }
                      return (
                        (o = he(i, o)),
                        s &&
                          ('string' == typeof s
                            ? (o.className = s)
                            : Array.isArray(s)
                            ? (o.className = s.join(' '))
                            : se(o, s)),
                        2 < r.length && le(i, o, r),
                        o
                      );
                    })('DIV')),
                      n.appendChild(e);
                  }
                  t.c = t.g.render(e, t.a);
                }
                return t.c;
              })
            );
          }),
          (t.verify = function () {
            wh(this);
            var t = this;
            return yh(
              this,
              this.render().then(function (e) {
                return new be(function (n) {
                  var r = t.g.getResponse(e);
                  if (r) n(r);
                  else {
                    var i = function (e) {
                      e &&
                        ((function (t, e) {
                          K(t.l, function (t) {
                            return t == e;
                          });
                        })(t, i),
                        n(e));
                    };
                    t.l.push(i), t.i && t.g.execute(t.c);
                  }
                });
              })
            );
          }),
          (t.reset = function () {
            wh(this), null !== this.c && this.g.reset(this.c);
          }),
          (t.clear = function () {
            wh(this), (this.D = !0), this.m.c();
            for (var t = 0; t < this.h.length; t++) this.h[t].cancel('RecaptchaVerifier instance has been destroyed.');
            if (!this.i) {
              t = oe(this.u);
              for (var e; (e = t.firstChild); ) t.removeChild(e);
            }
          }),
          E(_h, fh);
        var Eh = 'First Second Third Fourth Fifth Sixth Seventh Eighth Ninth'.split(' ');
        function Ch(t, e) {
          return {
            name: t || '',
            J: 'a valid string',
            optional: !!e,
            K: function (t) {
              return 'string' == typeof t;
            }
          };
        }
        function Ih(t, e) {
          return {
            name: t || '',
            J: 'a boolean',
            optional: !!e,
            K: function (t) {
              return 'boolean' == typeof t;
            }
          };
        }
        function Th(t, e) {
          return { name: t || '', J: 'a valid object', optional: !!e, K: f };
        }
        function xh(t, e) {
          return { name: t || '', J: 'a function', optional: !!e, K: d };
        }
        function kh(t, e) {
          return {
            name: t || '',
            J: 'null',
            optional: !!e,
            K: function (t) {
              return null === t;
            }
          };
        }
        function Oh(t) {
          return {
            name: t ? t + 'Credential' : 'credential',
            J: t ? 'a valid ' + t + ' credential' : 'a valid credential',
            optional: !1,
            K: function (e) {
              return !!e && !(!e.ia || (t && e.providerId !== t));
            }
          };
        }
        function Ah(t, e) {
          return f(t) && 'string' == typeof t.type && t.type === e && d(t.Fa);
        }
        function Nh(t) {
          return f(t) && 'string' == typeof t.uid;
        }
        function Rh() {
          return {
            name: 'applicationVerifier',
            J: 'an implementation of firebase.auth.ApplicationVerifier',
            optional: !1,
            K: function (t) {
              return !(!t || 'string' != typeof t.type || !d(t.verify));
            }
          };
        }
        function Ph(t, e, n, r) {
          return {
            name: n || '',
            J: t.J + ' or ' + e.J,
            optional: !!r,
            K: function (n) {
              return t.K(n) || e.K(n);
            }
          };
        }
        function Dh(t, e) {
          for (var n in e) {
            var r = e[n].name;
            t[r] = Lh(r, t[n], e[n].j);
          }
        }
        function jh(t, e) {
          for (var n in e) {
            var r = e[n].name;
            r !== n &&
              Object.defineProperty(t, r, {
                get: _(function (t) {
                  return this[t];
                }, n),
                set: _(
                  function (t, e, n, r) {
                    Sh(t, [n], [r], !0), (this[e] = r);
                  },
                  r,
                  n,
                  e[n].gb
                ),
                enumerable: !0
              });
          }
        }
        function Mh(t, e, n, r) {
          t[e] = Lh(e, n, r);
        }
        function Lh(t, e, n) {
          function r() {
            var t = Array.prototype.slice.call(arguments);
            return Sh(o, n, t), e.apply(this, t);
          }
          if (!n) return e;
          var i,
            o = (function (t) {
              return (t = t.split('.'))[t.length - 1];
            })(t);
          for (i in e) r[i] = e[i];
          for (i in e.prototype) r.prototype[i] = e.prototype[i];
          return r;
        }
        Dh(zl.prototype, {
          fb: { name: 'applyActionCode', j: [Ch('code')] },
          Pa: { name: 'checkActionCode', j: [Ch('code')] },
          jb: { name: 'confirmPasswordReset', j: [Ch('code'), Ch('newPassword')] },
          cc: { name: 'createUserWithEmailAndPassword', j: [Ch('email'), Ch('password')] },
          fc: { name: 'fetchSignInMethodsForEmail', j: [Ch('email')] },
          pa: { name: 'getRedirectResult', j: [] },
          zc: { name: 'isSignInWithEmailLink', j: [Ch('emailLink')] },
          Fc: {
            name: 'onAuthStateChanged',
            j: [Ph(Th(), xh(), 'nextOrObserver'), xh('opt_error', !0), xh('opt_completed', !0)]
          },
          Gc: {
            name: 'onIdTokenChanged',
            j: [Ph(Th(), xh(), 'nextOrObserver'), xh('opt_error', !0), xh('opt_completed', !0)]
          },
          rb: {
            name: 'sendPasswordResetEmail',
            j: [Ch('email'), Ph(Th('opt_actionCodeSettings', !0), kh(null, !0), 'opt_actionCodeSettings', !0)]
          },
          sb: { name: 'sendSignInLinkToEmail', j: [Ch('email'), Th('actionCodeSettings')] },
          tb: { name: 'setPersistence', j: [Ch('persistence')] },
          Qc: { name: 'signInAndRetrieveDataWithCredential', j: [Oh()] },
          vb: { name: 'signInAnonymously', j: [] },
          Ya: { name: 'signInWithCredential', j: [Oh()] },
          Rc: { name: 'signInWithCustomToken', j: [Ch('token')] },
          Sc: { name: 'signInWithEmailAndPassword', j: [Ch('email'), Ch('password')] },
          Tc: { name: 'signInWithEmailLink', j: [Ch('email'), Ch('emailLink', !0)] },
          Uc: { name: 'signInWithPhoneNumber', j: [Ch('phoneNumber'), Rh()] },
          Vc: {
            name: 'signInWithPopup',
            j: [
              {
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }
            ]
          },
          Wc: {
            name: 'signInWithRedirect',
            j: [
              {
                name: 'authProvider',
                J: 'a valid Auth provider',
                optional: !1,
                K: function (t) {
                  return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                }
              }
            ]
          },
          bd: {
            name: 'updateCurrentUser',
            j: [
              Ph(
                {
                  name: 'user',
                  J: 'an instance of Firebase User',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t instanceof nl);
                  }
                },
                kh(),
                'user'
              )
            ]
          },
          wb: { name: 'signOut', j: [] },
          toJSON: { name: 'toJSON', j: [Ch(null, !0)] },
          dd: { name: 'useDeviceLanguage', j: [] },
          fd: { name: 'verifyPasswordResetCode', j: [Ch('code')] }
        }),
          jh(zl.prototype, {
            lc: { name: 'languageCode', gb: Ph(Ch(), kh(), 'languageCode') },
            ti: { name: 'tenantId', gb: Ph(Ch(), kh(), 'tenantId') }
          }),
          ((zl.Persistence = Vu).LOCAL = 'local'),
          (zl.Persistence.SESSION = 'session'),
          (zl.Persistence.NONE = 'none'),
          Dh(nl.prototype, {
            delete: { name: 'delete', j: [] },
            mc: { name: 'getIdTokenResult', j: [Ih('opt_forceRefresh', !0)] },
            I: { name: 'getIdToken', j: [Ih('opt_forceRefresh', !0)] },
            Ac: { name: 'linkAndRetrieveDataWithCredential', j: [Oh()] },
            mb: { name: 'linkWithCredential', j: [Oh()] },
            Bc: { name: 'linkWithPhoneNumber', j: [Ch('phoneNumber'), Rh()] },
            Cc: {
              name: 'linkWithPopup',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  }
                }
              ]
            },
            Dc: {
              name: 'linkWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  }
                }
              ]
            },
            Jc: { name: 'reauthenticateAndRetrieveDataWithCredential', j: [Oh()] },
            pb: { name: 'reauthenticateWithCredential', j: [Oh()] },
            Kc: { name: 'reauthenticateWithPhoneNumber', j: [Ch('phoneNumber'), Rh()] },
            Lc: {
              name: 'reauthenticateWithPopup',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  }
                }
              ]
            },
            Mc: {
              name: 'reauthenticateWithRedirect',
              j: [
                {
                  name: 'authProvider',
                  J: 'a valid Auth provider',
                  optional: !1,
                  K: function (t) {
                    return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty('isOAuthProvider'));
                  }
                }
              ]
            },
            reload: { name: 'reload', j: [] },
            qb: {
              name: 'sendEmailVerification',
              j: [Ph(Th('opt_actionCodeSettings', !0), kh(null, !0), 'opt_actionCodeSettings', !0)]
            },
            toJSON: { name: 'toJSON', j: [Ch(null, !0)] },
            ad: { name: 'unlink', j: [Ch('provider')] },
            xb: { name: 'updateEmail', j: [Ch('email')] },
            yb: { name: 'updatePassword', j: [Ch('password')] },
            cd: { name: 'updatePhoneNumber', j: [Oh('phone')] },
            zb: { name: 'updateProfile', j: [Th('profile')] },
            Ab: {
              name: 'verifyBeforeUpdateEmail',
              j: [Ch('email'), Ph(Th('opt_actionCodeSettings', !0), kh(null, !0), 'opt_actionCodeSettings', !0)]
            }
          }),
          Dh(th.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' }
          }),
          Dh(Ql.prototype, {
            execute: { name: 'execute' },
            render: { name: 'render' },
            reset: { name: 'reset' },
            getResponse: { name: 'getResponse' }
          }),
          Dh(be.prototype, { ma: { name: 'finally' }, o: { name: 'catch' }, then: { name: 'then' } }),
          jh(jc.prototype, {
            appVerificationDisabled: {
              name: 'appVerificationDisabledForTesting',
              gb: Ih('appVerificationDisabledForTesting')
            }
          }),
          Dh(Mc.prototype, { confirm: { name: 'confirm', j: [Ch('verificationCode')] } }),
          Mh(
            no,
            'fromJSON',
            function (t) {
              t = 'string' == typeof t ? JSON.parse(t) : t;
              for (var e, n = [co, Eo, ko, so], r = 0; r < n.length; r++) if ((e = n[r](t))) return e;
              return null;
            },
            [Ph(Ch(), Th(), 'json')]
          ),
          Mh(
            Co,
            'credential',
            function (t, e) {
              return new So(t, e);
            },
            [Ch('email'), Ch('password')]
          ),
          Dh(So.prototype, { v: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(po.prototype, {
            Aa: { name: 'addScope', j: [Ch('scope')] },
            Ia: { name: 'setCustomParameters', j: [Th('customOAuthParameters')] }
          }),
          Mh(po, 'credential', go, [Ph(Ch(), Th(), 'token')]),
          Mh(Co, 'credentialWithLink', Io, [Ch('email'), Ch('emailLink')]),
          Dh(mo.prototype, {
            Aa: { name: 'addScope', j: [Ch('scope')] },
            Ia: { name: 'setCustomParameters', j: [Th('customOAuthParameters')] }
          }),
          Mh(mo, 'credential', vo, [Ph(Ch(), Th(), 'token')]),
          Dh(bo.prototype, {
            Aa: { name: 'addScope', j: [Ch('scope')] },
            Ia: { name: 'setCustomParameters', j: [Th('customOAuthParameters')] }
          }),
          Mh(bo, 'credential', yo, [Ph(Ch(), Ph(Th(), kh()), 'idToken'), Ph(Ch(), kh(), 'accessToken', !0)]),
          Dh(wo.prototype, { Ia: { name: 'setCustomParameters', j: [Th('customOAuthParameters')] } }),
          Mh(wo, 'credential', _o, [Ph(Ch(), Th(), 'token'), Ch('secret', !0)]),
          Dh(fo.prototype, {
            Aa: { name: 'addScope', j: [Ch('scope')] },
            credential: {
              name: 'credential',
              j: [Ph(Ch(), Ph(Th(), kh()), 'optionsOrIdToken'), Ph(Ch(), kh(), 'accessToken', !0)]
            },
            Ia: { name: 'setCustomParameters', j: [Th('customOAuthParameters')] }
          }),
          Dh(ao.prototype, { v: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(io.prototype, { v: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Mh(Ao, 'credential', No, [Ch('verificationId'), Ch('verificationCode')]),
          Dh(Ao.prototype, {
            cb: {
              name: 'verifyPhoneNumber',
              j: [
                Ph(
                  Ch(),
                  {
                    name: 'phoneInfoOptions',
                    J: 'valid phone info options',
                    optional: !1,
                    K: function (t) {
                      return (
                        !!t &&
                        (t.session && t.phoneNumber
                          ? Ah(t.session, to) && 'string' == typeof t.phoneNumber
                          : t.session && t.multiFactorHint
                          ? Ah(t.session, eo) && Nh(t.multiFactorHint)
                          : t.session && t.multiFactorUid
                          ? Ah(t.session, eo) && 'string' == typeof t.multiFactorUid
                          : !!t.phoneNumber && 'string' == typeof t.phoneNumber)
                      );
                    }
                  },
                  'phoneInfoOptions'
                ),
                Rh()
              ]
            }
          }),
          Dh(xo.prototype, { v: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(C.prototype, { toJSON: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(Fo.prototype, { toJSON: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(Vo.prototype, { toJSON: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(Hc.prototype, { toJSON: { name: 'toJSON', j: [Ch(null, !0)] } }),
          Dh(Vc.prototype, {
            Pc: {
              name: 'resolveSignIn',
              j: [
                {
                  name: 'multiFactorAssertion',
                  J: 'a valid multiFactorAssertion',
                  optional: !1,
                  K: function (t) {
                    return !!t && !!t.ob;
                  }
                }
              ]
            }
          }),
          Dh(Kc.prototype, {
            Ob: { name: 'getSession', j: [] },
            dc: {
              name: 'enroll',
              j: [
                {
                  name: 'multiFactorAssertion',
                  J: 'a valid multiFactorAssertion',
                  optional: !1,
                  K: function (t) {
                    return !!t && !!t.ob;
                  }
                },
                Ch('displayName', !0)
              ]
            },
            $c: {
              name: 'unenroll',
              j: [
                Ph(
                  { name: 'multiFactorInfo', J: 'a valid multiFactorInfo', optional: !1, K: Nh },
                  Ch(),
                  'multiFactorInfoIdentifier'
                )
              ]
            }
          }),
          Dh(_h.prototype, {
            clear: { name: 'clear', j: [] },
            render: { name: 'render', j: [] },
            verify: { name: 'verify', j: [] }
          }),
          Mh(gi, 'parseLink', Ei, [Ch('link')]),
          Mh(
            sh,
            'assertion',
            function (t) {
              return new Wc(t);
            },
            [Oh('phone')]
          ),
          (function () {
            if (void 0 === y.a || !y.a.INTERNAL || !y.a.INTERNAL.registerComponent)
              throw Error(
                'Cannot find the firebase namespace; be sure to include firebase-app.js before this library.'
              );
            var t = {
              ActionCodeInfo: {
                Operation: {
                  EMAIL_SIGNIN: ri,
                  PASSWORD_RESET: 'PASSWORD_RESET',
                  RECOVER_EMAIL: 'RECOVER_EMAIL',
                  REVERT_SECOND_FACTOR_ADDITION: ni,
                  VERIFY_AND_CHANGE_EMAIL: ii,
                  VERIFY_EMAIL: 'VERIFY_EMAIL'
                }
              },
              Auth: zl,
              AuthCredential: no,
              Error: C
            };
            Mh(t, 'EmailAuthProvider', Co, []),
              Mh(t, 'FacebookAuthProvider', po, []),
              Mh(t, 'GithubAuthProvider', mo, []),
              Mh(t, 'GoogleAuthProvider', bo, []),
              Mh(t, 'TwitterAuthProvider', wo, []),
              Mh(t, 'OAuthProvider', fo, [Ch('providerId')]),
              Mh(t, 'SAMLAuthProvider', ho, [Ch('providerId')]),
              Mh(t, 'PhoneAuthProvider', Ao, [
                {
                  name: 'auth',
                  J: 'an instance of Firebase Auth',
                  optional: !0,
                  K: function (t) {
                    return !!(t && t instanceof zl);
                  }
                }
              ]),
              Mh(t, 'RecaptchaVerifier', _h, [
                Ph(
                  Ch(),
                  {
                    name: '',
                    J: 'an HTML element',
                    optional: !1,
                    K: function (t) {
                      return !!(t && t instanceof Element);
                    }
                  },
                  'recaptchaContainer'
                ),
                Th('recaptchaParameters', !0),
                {
                  name: 'app',
                  J: 'an instance of Firebase App',
                  optional: !0,
                  K: function (t) {
                    return !!(t && t instanceof y.a.app.App);
                  }
                }
              ]),
              Mh(t, 'ActionCodeURL', gi, []),
              Mh(t, 'PhoneMultiFactorGenerator', sh, []),
              y.a.INTERNAL.registerComponent({
                name: 'auth',
                instanceFactory: function (t) {
                  return new zl((t = t.getProvider('app').getImmediate()));
                },
                multipleInstances: !1,
                serviceProps: t,
                instantiationMode: 'LAZY',
                type: 'PUBLIC'
              }),
              y.a.INTERNAL.registerComponent({
                name: 'auth-internal',
                instanceFactory: function (t) {
                  return {
                    getUid: w((t = t.getProvider('auth').getImmediate()).getUid, t),
                    getToken: w(t.kc, t),
                    addAuthTokenListener: w(t.bc, t),
                    removeAuthTokenListener: w(t.Nc, t)
                  };
                },
                multipleInstances: !1,
                instantiationMode: 'LAZY',
                type: 'PRIVATE'
              }),
              y.a.registerVersion('@firebase/auth', '0.14.5'),
              y.a.INTERNAL.extendNamespace({ User: nl });
          })();
      }.apply(
        'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
          ? window
          : {}
      ));
      let w = class {};
      const _ = () =>
          n
            .e(6)
            .then(n.bind(null, 'J+gu'))
            .then((t) => t.ReportersDashboardModuleNgFactory),
        S = () =>
          n
            .e(5)
            .then(n.bind(null, 'cAcB'))
            .then((t) => t.AuthModuleNgFactory);
      class E {}
      var C = n('3bS2'),
        I = n('Nv++'),
        T = n('PCNd'),
        x = n('6epW'),
        k = n('Yj9t'),
        O = r.mb(i, [o], function (t) {
          return r.yb([
            r.zb(512, r.j, r.X, [[8, [s.a, a.b, a.a, u.a, f]], [3, r.j], r.v]),
            r.zb(5120, r.s, r.jb, [[3, r.s]]),
            r.zb(4608, p.l, p.k, [r.s, [2, p.t]]),
            r.zb(5120, r.fb, r.kb, [r.x]),
            r.zb(5120, r.c, r.gb, []),
            r.zb(5120, r.q, r.hb, []),
            r.zb(5120, r.r, r.ib, []),
            r.zb(4608, g.b, g.k, [p.c]),
            r.zb(6144, r.E, null, [g.b]),
            r.zb(4608, g.e, g.g, []),
            r.zb(
              5120,
              g.c,
              function (t, e, n, r, i, o, s, a) {
                return [new g.i(t, e, n), new g.n(r), new g.m(i, o, s, a)];
              },
              [p.c, r.x, r.z, p.c, p.c, g.e, r.Y, [2, g.f]]
            ),
            r.zb(4608, g.d, g.d, [g.c, r.x]),
            r.zb(135680, g.l, g.l, [p.c]),
            r.zb(4608, g.j, g.j, [g.d, g.l, r.c]),
            r.zb(6144, r.C, null, [g.j]),
            r.zb(6144, g.o, null, [g.l]),
            r.zb(4608, r.K, r.K, [r.x]),
            r.zb(5120, c.a, c.w, [c.k]),
            r.zb(4608, c.d, c.d, []),
            r.zb(6144, c.f, null, [c.d]),
            r.zb(135680, c.n, c.n, [c.k, r.u, r.i, r.p, c.f]),
            r.zb(4608, c.e, c.e, []),
            r.zb(5120, c.B, c.s, [c.k, p.o, c.g]),
            r.zb(5120, c.h, c.z, [c.x]),
            r.zb(
              5120,
              r.b,
              function (t) {
                return [t];
              },
              [c.h]
            ),
            r.zb(5120, m.b, m.e, [m.d, [2, m.c]]),
            r.zb(4608, v.a, v.a, [m.d, [2, m.c], r.z, r.x]),
            r.zb(1073742336, p.b, p.b, []),
            r.zb(1024, r.l, g.p, []),
            r.zb(
              1024,
              r.w,
              function () {
                return [c.r()];
              },
              []
            ),
            r.zb(512, c.x, c.x, [r.p]),
            r.zb(
              1024,
              r.d,
              function (t, e) {
                return [g.q(t), c.y(e)];
              },
              [[2, r.w], c.x]
            ),
            r.zb(512, r.e, r.e, [[2, r.d]]),
            r.zb(131584, r.g, r.g, [r.x, r.Y, r.p, r.l, r.j, r.e]),
            r.zb(1073742336, r.f, r.f, [r.g]),
            r.zb(1073742336, g.a, g.a, [[3, g.a]]),
            r.zb(1024, c.q, c.u, [[3, c.k]]),
            r.zb(512, c.p, c.c, []),
            r.zb(512, c.b, c.b, []),
            r.zb(256, c.g, {}, []),
            r.zb(1024, p.g, c.t, [p.n, [2, p.a], c.g]),
            r.zb(512, p.f, p.f, [p.g, p.n]),
            r.zb(512, r.i, r.i, []),
            r.zb(512, r.u, r.H, [r.i, [2, r.I]]),
            r.zb(
              1024,
              c.i,
              function () {
                return [
                  [
                    { path: 'report-dashboard', loadChildren: _ },
                    { path: 'auth', loadChildren: S },
                    { path: '', redirectTo: 'auth/reporter-login', pathMatch: 'full' }
                  ],
                  [{ path: 'reporter-login', component: C.a }]
                ];
              },
              []
            ),
            r.zb(1024, c.k, c.v, [r.g, c.p, c.b, p.f, r.p, r.u, r.i, c.i, c.g, [2, c.o], [2, c.j]]),
            r.zb(1073742336, c.l, c.l, [
              [2, c.q],
              [2, c.k]
            ]),
            r.zb(1073742336, E, E, []),
            r.zb(1073742336, I.j, I.j, []),
            r.zb(1073742336, T.a, T.a, []),
            r.zb(1073742336, x.a, x.a, []),
            r.zb(1073742336, k.a, k.a, []),
            r.zb(1073742336, m.a, m.a, []),
            r.zb(1073742336, w, w, []),
            r.zb(1073742336, i, i, []),
            r.zb(256, r.W, !0, []),
            r.zb(
              256,
              m.d,
              {
                apiKey: 'AIzaSyAxnNLTRFKj24MRu8inExGc5QZvequedDI',
                authDomain: 'team-006.firebaseapp.com',
                databaseURL: 'https://team-006.firebaseio.com',
                projectId: 'team-006',
                storageBucket: 'team-006.appspot.com',
                messagingSenderId: '1069222813158',
                appId: '1:1069222813158:web:4e3884d5d83af0647d4a27'
              },
              []
            ),
            r.zb(256, m.c, void 0, [])
          ]);
        });
      Object(r.Q)(),
        g
          .h()
          .bootstrapModuleFactory(O)
          .catch((t) => console.error(t));
    },
    zVF4: function (t, e, n) {
      'use strict';
      Object.defineProperty(e, '__esModule', { value: !0 });
      var r = n('mrSG'),
        i = { NODE_CLIENT: !1, NODE_ADMIN: !1, SDK_VERSION: '${JSCORE_VERSION}' },
        o = function (t, e) {
          if (!t) throw s(e);
        },
        s = function (t) {
          return new Error('Firebase Database (' + i.SDK_VERSION + ') INTERNAL ASSERT FAILED: ' + t);
        },
        a = function (t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r);
            i < 128
              ? (e[n++] = i)
              : i < 2048
              ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
              : 55296 == (64512 & i) && r + 1 < t.length && 56320 == (64512 & t.charCodeAt(r + 1))
              ? ((i = 65536 + ((1023 & i) << 10) + (1023 & t.charCodeAt(++r))),
                (e[n++] = (i >> 18) | 240),
                (e[n++] = ((i >> 12) & 63) | 128),
                (e[n++] = ((i >> 6) & 63) | 128),
                (e[n++] = (63 & i) | 128))
              : ((e[n++] = (i >> 12) | 224), (e[n++] = ((i >> 6) & 63) | 128), (e[n++] = (63 & i) | 128));
          }
          return e;
        },
        u = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + '+/=';
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + '-_.';
          },
          HAS_NATIVE_SUPPORT: 'function' == typeof atob,
          encodeByteArray: function (t, e) {
            if (!Array.isArray(t)) throw Error('encodeByteArray takes an array as a parameter');
            this.init_();
            for (var n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < t.length; i += 3) {
              var o = t[i],
                s = i + 1 < t.length,
                a = s ? t[i + 1] : 0,
                u = i + 2 < t.length,
                c = u ? t[i + 2] : 0,
                l = ((15 & a) << 2) | (c >> 6),
                h = 63 & c;
              u || ((h = 64), s || (l = 64)), r.push(n[o >> 2], n[((3 & o) << 4) | (a >> 4)], n[l], n[h]);
            }
            return r.join('');
          },
          encodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e ? btoa(t) : this.encodeByteArray(a(t), e);
          },
          decodeString: function (t, e) {
            return this.HAS_NATIVE_SUPPORT && !e
              ? atob(t)
              : (function (t) {
                  for (var e = [], n = 0, r = 0; n < t.length; ) {
                    var i = t[n++];
                    if (i < 128) e[r++] = String.fromCharCode(i);
                    else if (i > 191 && i < 224) {
                      var o = t[n++];
                      e[r++] = String.fromCharCode(((31 & i) << 6) | (63 & o));
                    } else if (i > 239 && i < 365) {
                      var s =
                        (((7 & i) << 18) | ((63 & (o = t[n++])) << 12) | ((63 & (a = t[n++])) << 6) | (63 & t[n++])) -
                        65536;
                      (e[r++] = String.fromCharCode(55296 + (s >> 10))),
                        (e[r++] = String.fromCharCode(56320 + (1023 & s)));
                    } else {
                      o = t[n++];
                      var a = t[n++];
                      e[r++] = String.fromCharCode(((15 & i) << 12) | ((63 & o) << 6) | (63 & a));
                    }
                  }
                  return e.join('');
                })(this.decodeStringToByteArray(t, e));
          },
          decodeStringToByteArray: function (t, e) {
            this.init_();
            for (var n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < t.length; ) {
              var o = n[t.charAt(i++)],
                s = i < t.length ? n[t.charAt(i)] : 0,
                a = ++i < t.length ? n[t.charAt(i)] : 64,
                u = ++i < t.length ? n[t.charAt(i)] : 64;
              if ((++i, null == o || null == s || null == a || null == u)) throw Error();
              r.push((o << 2) | (s >> 4)),
                64 !== a && (r.push(((s << 4) & 240) | (a >> 2)), 64 !== u && r.push(((a << 6) & 192) | u));
            }
            return r;
          },
          init_: function () {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (var t = 0; t < this.ENCODED_VALS.length; t++)
                (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
                  (this.charToByteMap_[this.byteToCharMap_[t]] = t),
                  (this.byteToCharMapWebSafe_[t] = this.ENCODED_VALS_WEBSAFE.charAt(t)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
                  t >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
            }
          }
        },
        c = function (t) {
          try {
            return u.decodeString(t, !0);
          } catch (e) {
            console.error('base64Decode failed: ', e);
          }
          return null;
        };
      function l(t, e) {
        if (!(e instanceof Object)) return e;
        switch (e.constructor) {
          case Date:
            return new Date(e.getTime());
          case Object:
            void 0 === t && (t = {});
            break;
          case Array:
            t = [];
            break;
          default:
            return e;
        }
        for (var n in e) e.hasOwnProperty(n) && (t[n] = l(t[n], e[n]));
        return t;
      }
      var h = (function () {
        function t() {
          var t = this;
          (this.reject = function () {}),
            (this.resolve = function () {}),
            (this.promise = new Promise(function (e, n) {
              (t.resolve = e), (t.reject = n);
            }));
        }
        return (
          (t.prototype.wrapCallback = function (t) {
            var e = this;
            return function (n, r) {
              n ? e.reject(n) : e.resolve(r),
                'function' == typeof t && (e.promise.catch(function () {}), 1 === t.length ? t(n) : t(n, r));
            };
          }),
          t
        );
      })();
      function d() {
        return 'undefined' != typeof navigator && 'string' == typeof navigator.userAgent ? navigator.userAgent : '';
      }
      var f = (function (t) {
          function e(n, r) {
            var i = t.call(this, r) || this;
            return (
              (i.code = n),
              (i.name = 'FirebaseError'),
              Object.setPrototypeOf(i, e.prototype),
              Error.captureStackTrace && Error.captureStackTrace(i, p.prototype.create),
              i
            );
          }
          return r.__extends(e, t), e;
        })(Error),
        p = (function () {
          function t(t, e, n) {
            (this.service = t), (this.serviceName = e), (this.errors = n);
          }
          return (
            (t.prototype.create = function (t) {
              for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
              for (
                var r = e[0] || {},
                  i = this.service + '/' + t,
                  o = this.errors[t],
                  s = o ? g(o, r) : 'Error',
                  a = this.serviceName + ': ' + s + ' (' + i + ').',
                  u = new f(i, a),
                  c = 0,
                  l = Object.keys(r);
                c < l.length;
                c++
              ) {
                var h = l[c];
                '_' !== h.slice(-1) &&
                  (h in u &&
                    console.warn('Overwriting FirebaseError base field "' + h + '" can cause unexpected behavior.'),
                  (u[h] = r[h]));
              }
              return u;
            }),
            t
          );
        })();
      function g(t, e) {
        return t.replace(m, function (t, n) {
          var r = e[n];
          return null != r ? r.toString() : '<' + n + '?>';
        });
      }
      var m = /\{\$([^}]+)}/g;
      function v(t) {
        return JSON.parse(t);
      }
      var b = function (t) {
          var e = {},
            n = {},
            r = {},
            i = '';
          try {
            var o = t.split('.');
            (e = v(c(o[0]) || '')), (n = v(c(o[1]) || '')), (i = o[2]), (r = n.d || {}), delete n.d;
          } catch (s) {}
          return { header: e, claims: n, data: r, signature: i };
        },
        y = (function () {
          function t() {
            (this.chain_ = []),
              (this.buf_ = []),
              (this.W_ = []),
              (this.pad_ = []),
              (this.inbuf_ = 0),
              (this.total_ = 0),
              (this.blockSize = 64),
              (this.pad_[0] = 128);
            for (var t = 1; t < this.blockSize; ++t) this.pad_[t] = 0;
            this.reset();
          }
          return (
            (t.prototype.reset = function () {
              (this.chain_[0] = 1732584193),
                (this.chain_[1] = 4023233417),
                (this.chain_[2] = 2562383102),
                (this.chain_[3] = 271733878),
                (this.chain_[4] = 3285377520),
                (this.inbuf_ = 0),
                (this.total_ = 0);
            }),
            (t.prototype.compress_ = function (t, e) {
              e || (e = 0);
              var n = this.W_;
              if ('string' == typeof t)
                for (var r = 0; r < 16; r++)
                  (n[r] =
                    (t.charCodeAt(e) << 24) |
                    (t.charCodeAt(e + 1) << 16) |
                    (t.charCodeAt(e + 2) << 8) |
                    t.charCodeAt(e + 3)),
                    (e += 4);
              else
                for (r = 0; r < 16; r++)
                  (n[r] = (t[e] << 24) | (t[e + 1] << 16) | (t[e + 2] << 8) | t[e + 3]), (e += 4);
              for (r = 16; r < 80; r++)
                n[r] = 4294967295 & (((h = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16]) << 1) | (h >>> 31));
              var i,
                o,
                s = this.chain_[0],
                a = this.chain_[1],
                u = this.chain_[2],
                c = this.chain_[3],
                l = this.chain_[4];
              for (r = 0; r < 80; r++) {
                r < 40
                  ? r < 20
                    ? ((i = c ^ (a & (u ^ c))), (o = 1518500249))
                    : ((i = a ^ u ^ c), (o = 1859775393))
                  : r < 60
                  ? ((i = (a & u) | (c & (a | u))), (o = 2400959708))
                  : ((i = a ^ u ^ c), (o = 3395469782));
                var h = (((s << 5) | (s >>> 27)) + i + l + o + n[r]) & 4294967295;
                (l = c), (c = u), (u = 4294967295 & ((a << 30) | (a >>> 2))), (a = s), (s = h);
              }
              (this.chain_[0] = (this.chain_[0] + s) & 4294967295),
                (this.chain_[1] = (this.chain_[1] + a) & 4294967295),
                (this.chain_[2] = (this.chain_[2] + u) & 4294967295),
                (this.chain_[3] = (this.chain_[3] + c) & 4294967295),
                (this.chain_[4] = (this.chain_[4] + l) & 4294967295);
            }),
            (t.prototype.update = function (t, e) {
              if (null != t) {
                void 0 === e && (e = t.length);
                for (var n = e - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < e; ) {
                  if (0 === o) for (; r <= n; ) this.compress_(t, r), (r += this.blockSize);
                  if ('string' == typeof t) {
                    for (; r < e; )
                      if (((i[o] = t.charCodeAt(r)), ++r, ++o === this.blockSize)) {
                        this.compress_(i), (o = 0);
                        break;
                      }
                  } else
                    for (; r < e; )
                      if (((i[o] = t[r]), ++r, ++o === this.blockSize)) {
                        this.compress_(i), (o = 0);
                        break;
                      }
                }
                (this.inbuf_ = o), (this.total_ += e);
              }
            }),
            (t.prototype.digest = function () {
              var t = [],
                e = 8 * this.total_;
              this.update(this.pad_, this.inbuf_ < 56 ? 56 - this.inbuf_ : this.blockSize - (this.inbuf_ - 56));
              for (var n = this.blockSize - 1; n >= 56; n--) (this.buf_[n] = 255 & e), (e /= 256);
              this.compress_(this.buf_);
              var r = 0;
              for (n = 0; n < 5; n++) for (var i = 24; i >= 0; i -= 8) (t[r] = (this.chain_[n] >> i) & 255), ++r;
              return t;
            }),
            t
          );
        })(),
        w = (function () {
          function t(t, e) {
            var n = this;
            (this.observers = []),
              (this.unsubscribes = []),
              (this.observerCount = 0),
              (this.task = Promise.resolve()),
              (this.finalized = !1),
              (this.onNoObservers = e),
              this.task
                .then(function () {
                  t(n);
                })
                .catch(function (t) {
                  n.error(t);
                });
          }
          return (
            (t.prototype.next = function (t) {
              this.forEachObserver(function (e) {
                e.next(t);
              });
            }),
            (t.prototype.error = function (t) {
              this.forEachObserver(function (e) {
                e.error(t);
              }),
                this.close(t);
            }),
            (t.prototype.complete = function () {
              this.forEachObserver(function (t) {
                t.complete();
              }),
                this.close();
            }),
            (t.prototype.subscribe = function (t, e, n) {
              var r,
                i = this;
              if (void 0 === t && void 0 === e && void 0 === n) throw new Error('Missing Observer.');
              void 0 ===
                (r = (function (t, e) {
                  if ('object' != typeof t || null === t) return !1;
                  for (var n = 0, r = ['next', 'error', 'complete']; n < r.length; n++) {
                    var i = r[n];
                    if (i in t && 'function' == typeof t[i]) return !0;
                  }
                  return !1;
                })(t)
                  ? t
                  : { next: t, error: e, complete: n }).next && (r.next = _),
                void 0 === r.error && (r.error = _),
                void 0 === r.complete && (r.complete = _);
              var o = this.unsubscribeOne.bind(this, this.observers.length);
              return (
                this.finalized &&
                  this.task.then(function () {
                    try {
                      i.finalError ? r.error(i.finalError) : r.complete();
                    } catch (t) {}
                  }),
                this.observers.push(r),
                o
              );
            }),
            (t.prototype.unsubscribeOne = function (t) {
              void 0 !== this.observers &&
                void 0 !== this.observers[t] &&
                (delete this.observers[t],
                (this.observerCount -= 1),
                0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this));
            }),
            (t.prototype.forEachObserver = function (t) {
              if (!this.finalized) for (var e = 0; e < this.observers.length; e++) this.sendOne(e, t);
            }),
            (t.prototype.sendOne = function (t, e) {
              var n = this;
              this.task.then(function () {
                if (void 0 !== n.observers && void 0 !== n.observers[t])
                  try {
                    e(n.observers[t]);
                  } catch (r) {
                    'undefined' != typeof console && console.error && console.error(r);
                  }
              });
            }),
            (t.prototype.close = function (t) {
              var e = this;
              this.finalized ||
                ((this.finalized = !0),
                void 0 !== t && (this.finalError = t),
                this.task.then(function () {
                  (e.observers = void 0), (e.onNoObservers = void 0);
                }));
            }),
            t
          );
        })();
      function _() {}
      function S(t, e, n) {
        var r = '';
        switch (e) {
          case 1:
            r = n ? 'first' : 'First';
            break;
          case 2:
            r = n ? 'second' : 'Second';
            break;
          case 3:
            r = n ? 'third' : 'Third';
            break;
          case 4:
            r = n ? 'fourth' : 'Fourth';
            break;
          default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
        }
        return t + ' failed: ' + r + ' argument ';
      }
      (e.CONSTANTS = i),
        (e.Deferred = h),
        (e.ErrorFactory = p),
        (e.FirebaseError = f),
        (e.Sha1 = y),
        (e.assert = o),
        (e.assertionError = s),
        (e.async = function (t, e) {
          return function () {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            Promise.resolve(!0)
              .then(function () {
                t.apply(void 0, n);
              })
              .catch(function (t) {
                e && e(t);
              });
          };
        }),
        (e.base64 = u),
        (e.base64Decode = c),
        (e.base64Encode = function (t) {
          var e = a(t);
          return u.encodeByteArray(e, !0);
        }),
        (e.contains = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (e.createSubscribe = function (t, e) {
          var n = new w(t, e);
          return n.subscribe.bind(n);
        }),
        (e.decode = b),
        (e.deepCopy = function (t) {
          return l(void 0, t);
        }),
        (e.deepExtend = l),
        (e.errorPrefix = S),
        (e.getUA = d),
        (e.isAdmin = function (t) {
          var e = b(t).claims;
          return 'object' == typeof e && !0 === e.admin;
        }),
        (e.isBrowser = function () {
          return 'object' == typeof self && self.self === self;
        }),
        (e.isBrowserExtension = function () {
          var t = 'object' == typeof chrome ? chrome.runtime : 'object' == typeof browser ? browser.runtime : void 0;
          return 'object' == typeof t && void 0 !== t.id;
        }),
        (e.isElectron = function () {
          return d().indexOf('Electron/') >= 0;
        }),
        (e.isEmpty = function (t) {
          for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
          return !0;
        }),
        (e.isIE = function () {
          var t = d();
          return t.indexOf('MSIE ') >= 0 || t.indexOf('Trident/') >= 0;
        }),
        (e.isMobileCordova = function () {
          return (
            'undefined' != typeof window &&
            !!(window.cordova || window.phonegap || window.PhoneGap) &&
            /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())
          );
        }),
        (e.isNode = function () {
          try {
            return '[object process]' === Object.prototype.toString.call(global.process);
          } catch (t) {
            return !1;
          }
        }),
        (e.isNodeSdk = function () {
          return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN;
        }),
        (e.isReactNative = function () {
          return 'object' == typeof navigator && 'ReactNative' === navigator.product;
        }),
        (e.isUWP = function () {
          return d().indexOf('MSAppHost/') >= 0;
        }),
        (e.isValidFormat = function (t) {
          var e = b(t).claims;
          return !!e && 'object' == typeof e && e.hasOwnProperty('iat');
        }),
        (e.isValidTimestamp = function (t) {
          var e = b(t).claims,
            n = Math.floor(new Date().getTime() / 1e3),
            r = 0,
            i = 0;
          return (
            'object' == typeof e &&
              (e.hasOwnProperty('nbf') ? (r = e.nbf) : e.hasOwnProperty('iat') && (r = e.iat),
              (i = e.hasOwnProperty('exp') ? e.exp : r + 86400)),
            !!n && !!r && !!i && n >= r && n <= i
          );
        }),
        (e.issuedAtTime = function (t) {
          var e = b(t).claims;
          return 'object' == typeof e && e.hasOwnProperty('iat') ? e.iat : null;
        }),
        (e.jsonEval = v),
        (e.map = function (t, e, n) {
          var r = {};
          for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (r[i] = e.call(n, t[i], i, t));
          return r;
        }),
        (e.querystring = function (t) {
          for (
            var e = [],
              n = function (t, n) {
                Array.isArray(n)
                  ? n.forEach(function (n) {
                      e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n));
                    })
                  : e.push(encodeURIComponent(t) + '=' + encodeURIComponent(n));
              },
              r = 0,
              i = Object.entries(t);
            r < i.length;
            r++
          ) {
            var o = i[r];
            n(o[0], o[1]);
          }
          return e.length ? '&' + e.join('&') : '';
        }),
        (e.querystringDecode = function (t) {
          var e = {};
          return (
            t
              .replace(/^\?/, '')
              .split('&')
              .forEach(function (t) {
                if (t) {
                  var n = t.split('=');
                  e[n[0]] = n[1];
                }
              }),
            e
          );
        }),
        (e.safeGet = function (t, e) {
          return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0;
        }),
        (e.stringLength = function (t) {
          for (var e = 0, n = 0; n < t.length; n++) {
            var r = t.charCodeAt(n);
            r < 128 ? e++ : r < 2048 ? (e += 2) : r >= 55296 && r <= 56319 ? ((e += 4), n++) : (e += 3);
          }
          return e;
        }),
        (e.stringToByteArray = function (t) {
          for (var e = [], n = 0, r = 0; r < t.length; r++) {
            var i = t.charCodeAt(r);
            if (i >= 55296 && i <= 56319) {
              var s = i - 55296;
              r++,
                o(r < t.length, 'Surrogate pair missing trail surrogate.'),
                (i = 65536 + (s << 10) + (t.charCodeAt(r) - 56320));
            }
            i < 128
              ? (e[n++] = i)
              : i < 2048
              ? ((e[n++] = (i >> 6) | 192), (e[n++] = (63 & i) | 128))
              : i < 65536
              ? ((e[n++] = (i >> 12) | 224), (e[n++] = ((i >> 6) & 63) | 128), (e[n++] = (63 & i) | 128))
              : ((e[n++] = (i >> 18) | 240),
                (e[n++] = ((i >> 12) & 63) | 128),
                (e[n++] = ((i >> 6) & 63) | 128),
                (e[n++] = (63 & i) | 128));
          }
          return e;
        }),
        (e.stringify = function (t) {
          return JSON.stringify(t);
        }),
        (e.validateArgCount = function (t, e, n, r) {
          var i;
          if ((r < e ? (i = 'at least ' + e) : r > n && (i = 0 === n ? 'none' : 'no more than ' + n), i))
            throw new Error(
              t + ' failed: Was called with ' + r + (1 === r ? ' argument.' : ' arguments.') + ' Expects ' + i + '.'
            );
        }),
        (e.validateCallback = function (t, e, n, r) {
          if ((!r || n) && 'function' != typeof n) throw new Error(S(t, e, r) + 'must be a valid function.');
        }),
        (e.validateContextObject = function (t, e, n, r) {
          if ((!r || n) && ('object' != typeof n || null === n))
            throw new Error(S(t, e, r) + 'must be a valid context object.');
        }),
        (e.validateNamespace = function (t, e, n, r) {
          if ((!r || n) && 'string' != typeof n) throw new Error(S(t, e, r) + 'must be a valid firebase namespace.');
        });
    },
    zn8P: function (t, e) {
      function n(t) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = 'MODULE_NOT_FOUND'), e);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (t.exports = n),
        (n.id = 'zn8P');
    }
  },
  [[0, 0]]
]);

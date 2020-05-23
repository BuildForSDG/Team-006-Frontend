function _createForOfIteratorHelper(t) {
  if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
    if (Array.isArray(t) || (t = _unsupportedIterableToArray(t))) {
      var e = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return e >= t.length ? { done: !0 } : { done: !1, value: t[e++] };
        },
        e: function (t) {
          throw t;
        },
        f: n
      };
    }
    throw new TypeError(
      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
    );
  }
  var i,
    r,
    l = !0,
    o = !1;
  return {
    s: function () {
      i = t[Symbol.iterator]();
    },
    n: function () {
      var t = i.next();
      return (l = t.done), t;
    },
    e: function (t) {
      (o = !0), (r = t);
    },
    f: function () {
      try {
        l || null == i.return || i.return();
      } finally {
        if (o) throw r;
      }
    }
  };
}
function _toConsumableArray(t) {
  return _arrayWithoutHoles(t) || _iterableToArray(t) || _unsupportedIterableToArray(t) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}
function _unsupportedIterableToArray(t, e) {
  if (t) {
    if ('string' == typeof t) return _arrayLikeToArray(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    return (
      'Object' === n && t.constructor && (n = t.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(t)
        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        ? _arrayLikeToArray(t, e)
        : void 0
    );
  }
}
function _iterableToArray(t) {
  if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) return Array.from(t);
}
function _arrayWithoutHoles(t) {
  if (Array.isArray(t)) return _arrayLikeToArray(t);
}
function _arrayLikeToArray(t, e) {
  (null == e || e > t.length) && (e = t.length);
  for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
  return i;
}
function _defineProperties(t, e) {
  for (var n = 0; n < e.length; n++) {
    var i = e[n];
    (i.enumerable = i.enumerable || !1),
      (i.configurable = !0),
      'value' in i && (i.writable = !0),
      Object.defineProperty(t, i.key, i);
  }
}
function _createClass(t, e, n) {
  return e && _defineProperties(t.prototype, e), n && _defineProperties(t, n), t;
}
function _inherits(t, e) {
  if ('function' != typeof e && null !== e) throw new TypeError('Super expression must either be null or a function');
  (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })),
    e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
  return (_setPrototypeOf =
    Object.setPrototypeOf ||
    function (t, e) {
      return (t.__proto__ = e), t;
    })(t, e);
}
function _createSuper(t) {
  var e = _isNativeReflectConstruct();
  return function () {
    var n,
      i = _getPrototypeOf(t);
    if (e) {
      var r = _getPrototypeOf(this).constructor;
      n = Reflect.construct(i, arguments, r);
    } else n = i.apply(this, arguments);
    return _possibleConstructorReturn(this, n);
  };
}
function _possibleConstructorReturn(t, e) {
  return !e || ('object' != typeof e && 'function' != typeof e) ? _assertThisInitialized(t) : e;
}
function _assertThisInitialized(t) {
  if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function _isNativeReflectConstruct() {
  if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
  if (Reflect.construct.sham) return !1;
  if ('function' == typeof Proxy) return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
  } catch (t) {
    return !1;
  }
}
function _getPrototypeOf(t) {
  return (_getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function (t) {
        return t.__proto__ || Object.getPrototypeOf(t);
      })(t);
}
function _classCallCheck(t, e) {
  if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
}
(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    'J+gu': function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n('8Y7J'),
        r = function t() {
          _classCallCheck(this, t);
        },
        l = n('pMnS'),
        o = n('cUpR'),
        a = n('HDdC'),
        u = n('DH7j'),
        s = n('EY2u'),
        c = n('ZUHj'),
        h = n('l7GE'),
        d = n('lJxs'),
        f = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, i) {
            var r;
            _classCallCheck(this, n), ((r = e.call(this, t)).sources = i), (r.completed = 0), (r.haveValues = 0);
            var l = i.length;
            r.values = new Array(l);
            for (var o = 0; o < l; o++) {
              var a = i[o],
                u = Object(c.a)(_assertThisInitialized(r), a, null, o);
              u && r.add(u);
            }
            return r;
          }
          return (
            _createClass(n, [
              {
                key: 'notifyNext',
                value: function (t, e, n, i, r) {
                  (this.values[n] = e), r._hasValue || ((r._hasValue = !0), this.haveValues++);
                }
              },
              {
                key: 'notifyComplete',
                value: function (t) {
                  var e = this.destination,
                    n = this.haveValues,
                    i = this.values,
                    r = i.length;
                  t._hasValue
                    ? (this.completed++, this.completed === r && (n === r && e.next(i), e.complete()))
                    : e.complete();
                }
              }
            ]),
            n
          );
        })(h.a),
        p = n('Cfvw'),
        v = new i.o('NgValueAccessor'),
        _ = new i.o('CompositionEventMode'),
        g = (function () {
          function t(e, n, i) {
            var r;
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this._compositionMode = i),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {}),
              (this._composing = !1),
              null == this._compositionMode &&
                (this._compositionMode =
                  ((r = Object(o.r)() ? Object(o.r)().getUserAgent() : ''), !/android (\d+)/.test(r.toLowerCase())));
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  this.onChange = t;
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              },
              {
                key: '_handleInput',
                value: function (t) {
                  (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
                }
              },
              {
                key: '_compositionStart',
                value: function () {
                  this._composing = !0;
                }
              },
              {
                key: '_compositionEnd',
                value: function (t) {
                  (this._composing = !1), this._compositionMode && this.onChange(t);
                }
              }
            ]),
            t
          );
        })(),
        y = (function () {
          function t() {
            _classCallCheck(this, t);
          }
          return (
            _createClass(t, [
              {
                key: 'reset',
                value: function (t) {
                  this.control && this.control.reset(t);
                }
              },
              {
                key: 'hasError',
                value: function (t, e) {
                  return !!this.control && this.control.hasError(t, e);
                }
              },
              {
                key: 'getError',
                value: function (t, e) {
                  return this.control ? this.control.getError(t, e) : null;
                }
              },
              {
                key: 'value',
                get: function () {
                  return this.control ? this.control.value : null;
                }
              },
              {
                key: 'valid',
                get: function () {
                  return this.control ? this.control.valid : null;
                }
              },
              {
                key: 'invalid',
                get: function () {
                  return this.control ? this.control.invalid : null;
                }
              },
              {
                key: 'pending',
                get: function () {
                  return this.control ? this.control.pending : null;
                }
              },
              {
                key: 'disabled',
                get: function () {
                  return this.control ? this.control.disabled : null;
                }
              },
              {
                key: 'enabled',
                get: function () {
                  return this.control ? this.control.enabled : null;
                }
              },
              {
                key: 'errors',
                get: function () {
                  return this.control ? this.control.errors : null;
                }
              },
              {
                key: 'pristine',
                get: function () {
                  return this.control ? this.control.pristine : null;
                }
              },
              {
                key: 'dirty',
                get: function () {
                  return this.control ? this.control.dirty : null;
                }
              },
              {
                key: 'touched',
                get: function () {
                  return this.control ? this.control.touched : null;
                }
              },
              {
                key: 'status',
                get: function () {
                  return this.control ? this.control.status : null;
                }
              },
              {
                key: 'untouched',
                get: function () {
                  return this.control ? this.control.untouched : null;
                }
              },
              {
                key: 'statusChanges',
                get: function () {
                  return this.control ? this.control.statusChanges : null;
                }
              },
              {
                key: 'valueChanges',
                get: function () {
                  return this.control ? this.control.valueChanges : null;
                }
              },
              {
                key: 'path',
                get: function () {
                  return null;
                }
              }
            ]),
            t
          );
        })(),
        m = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), e.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'formDirective',
                get: function () {
                  return null;
                }
              },
              {
                key: 'path',
                get: function () {
                  return null;
                }
              }
            ]),
            n
          );
        })(y);
      function C() {
        throw new Error('unimplemented');
      }
      var k = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n() {
            var t;
            return (
              _classCallCheck(this, n),
              ((t = e.apply(this, arguments))._parent = null),
              (t.name = null),
              (t.valueAccessor = null),
              (t._rawValidators = []),
              (t._rawAsyncValidators = []),
              t
            );
          }
          return (
            _createClass(n, [
              {
                key: 'validator',
                get: function () {
                  return C();
                }
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return C();
                }
              }
            ]),
            n
          );
        })(y),
        b = (function () {
          function t(e) {
            _classCallCheck(this, t), (this._cd = e);
          }
          return (
            _createClass(t, [
              {
                key: 'ngClassUntouched',
                get: function () {
                  return !!this._cd.control && this._cd.control.untouched;
                }
              },
              {
                key: 'ngClassTouched',
                get: function () {
                  return !!this._cd.control && this._cd.control.touched;
                }
              },
              {
                key: 'ngClassPristine',
                get: function () {
                  return !!this._cd.control && this._cd.control.pristine;
                }
              },
              {
                key: 'ngClassDirty',
                get: function () {
                  return !!this._cd.control && this._cd.control.dirty;
                }
              },
              {
                key: 'ngClassValid',
                get: function () {
                  return !!this._cd.control && this._cd.control.valid;
                }
              },
              {
                key: 'ngClassInvalid',
                get: function () {
                  return !!this._cd.control && this._cd.control.invalid;
                }
              },
              {
                key: 'ngClassPending',
                get: function () {
                  return !!this._cd.control && this._cd.control.pending;
                }
              }
            ]),
            t
          );
        })(),
        V = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t) {
            return _classCallCheck(this, n), e.call(this, t);
          }
          return n;
        })(b),
        O = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t) {
            return _classCallCheck(this, n), e.call(this, t);
          }
          return n;
        })(b);
      function w(t) {
        return null == t || 0 === t.length;
      }
      var E = new i.o('NgValidators'),
        A = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        S = (function () {
          function t() {
            _classCallCheck(this, t);
          }
          return (
            _createClass(t, null, [
              {
                key: 'min',
                value: function (t) {
                  return function (e) {
                    if (w(e.value) || w(t)) return null;
                    var n = parseFloat(e.value);
                    return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
                  };
                }
              },
              {
                key: 'max',
                value: function (t) {
                  return function (e) {
                    if (w(e.value) || w(t)) return null;
                    var n = parseFloat(e.value);
                    return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
                  };
                }
              },
              {
                key: 'required',
                value: function (t) {
                  return w(t.value) ? { required: !0 } : null;
                }
              },
              {
                key: 'requiredTrue',
                value: function (t) {
                  return !0 === t.value ? null : { required: !0 };
                }
              },
              {
                key: 'email',
                value: function (t) {
                  return w(t.value) ? null : A.test(t.value) ? null : { email: !0 };
                }
              },
              {
                key: 'minLength',
                value: function (t) {
                  return function (e) {
                    if (w(e.value)) return null;
                    var n = e.value ? e.value.length : 0;
                    return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
                  };
                }
              },
              {
                key: 'maxLength',
                value: function (t) {
                  return function (e) {
                    var n = e.value ? e.value.length : 0;
                    return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
                  };
                }
              },
              {
                key: 'pattern',
                value: function (e) {
                  return e
                    ? ('string' == typeof e
                        ? ((i = ''),
                          '^' !== e.charAt(0) && (i += '^'),
                          (i += e),
                          '$' !== e.charAt(e.length - 1) && (i += '$'),
                          (n = new RegExp(i)))
                        : ((i = e.toString()), (n = e)),
                      function (t) {
                        if (w(t.value)) return null;
                        var e = t.value;
                        return n.test(e) ? null : { pattern: { requiredPattern: i, actualValue: e } };
                      })
                    : t.nullValidator;
                  var n, i;
                }
              },
              {
                key: 'nullValidator',
                value: function (t) {
                  return null;
                }
              },
              {
                key: 'compose',
                value: function (t) {
                  if (!t) return null;
                  var e = t.filter(P);
                  return 0 == e.length
                    ? null
                    : function (t) {
                        return M(
                          (function (t, e) {
                            return e.map(function (e) {
                              return e(t);
                            });
                          })(t, e)
                        );
                      };
                }
              },
              {
                key: 'composeAsync',
                value: function (t) {
                  if (!t) return null;
                  var e = t.filter(P);
                  return 0 == e.length
                    ? null
                    : function (t) {
                        return (function t() {
                          for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                          var r;
                          return (
                            'function' == typeof n[n.length - 1] && (r = n.pop()),
                            1 === n.length && Object(u.a)(n[0]) && (n = n[0]),
                            0 === n.length
                              ? s.a
                              : r
                              ? t(n).pipe(
                                  Object(d.a)(function (t) {
                                    return r.apply(void 0, _toConsumableArray(t));
                                  })
                                )
                              : new a.a(function (t) {
                                  return new f(t, n);
                                })
                          );
                        })(
                          (function (t, e) {
                            return e.map(function (e) {
                              return e(t);
                            });
                          })(t, e).map(T)
                        ).pipe(Object(d.a)(M));
                      };
                }
              }
            ]),
            t
          );
        })();
      function P(t) {
        return null != t;
      }
      function T(t) {
        var e = Object(i.wb)(t) ? Object(p.a)(t) : t;
        if (!Object(i.vb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function M(t) {
        var e = t.reduce(function (t, e) {
          return null != e ? Object.assign({}, t, e) : t;
        }, {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function D(t) {
        return t.validate
          ? function (e) {
              return t.validate(e);
            }
          : t;
      }
      function I(t) {
        return t.validate
          ? function (e) {
              return t.validate(e);
            }
          : t;
      }
      var x = (function () {
          function t() {
            _classCallCheck(this, t), (this._accessors = []);
          }
          return (
            _createClass(t, [
              {
                key: 'add',
                value: function (t, e) {
                  this._accessors.push([t, e]);
                }
              },
              {
                key: 'remove',
                value: function (t) {
                  for (var e = this._accessors.length - 1; e >= 0; --e)
                    if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
                }
              },
              {
                key: 'select',
                value: function (t) {
                  var e = this;
                  this._accessors.forEach(function (n) {
                    e._isSameGroup(n, t) && n[1] !== t && n[1].fireUncheck(t.value);
                  });
                }
              },
              {
                key: '_isSameGroup',
                value: function (t, e) {
                  return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
                }
              }
            ]),
            t
          );
        })(),
        N =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        F =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
      function j(t, e) {
        return null == t
          ? ''.concat(e)
          : (e && 'object' == typeof e && (e = 'Object'), ''.concat(t, ': ').concat(e).slice(0, 50));
      }
      var G = (function () {
        function t(e, n, i) {
          _classCallCheck(this, t),
            (this._element = e),
            (this._renderer = n),
            (this._select = i),
            this._select && (this.id = this._select._registerOption());
        }
        return (
          _createClass(t, [
            {
              key: '_setElementValue',
              value: function (t) {
                this._renderer.setProperty(this._element.nativeElement, 'value', t);
              }
            },
            {
              key: 'ngOnDestroy',
              value: function () {
                this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
              }
            },
            {
              key: 'ngValue',
              set: function (t) {
                null != this._select &&
                  (this._select._optionMap.set(this.id, t),
                  this._setElementValue(j(this.id, t)),
                  this._select.writeValue(this._select.value));
              }
            },
            {
              key: 'value',
              set: function (t) {
                this._setElementValue(t), this._select && this._select.writeValue(this._select.value);
              }
            }
          ]),
          t
        );
      })();
      function R(t, e) {
        return null == t
          ? ''.concat(e)
          : ('string' == typeof e && (e = "'".concat(e, "'")),
            e && 'object' == typeof e && (e = 'Object'),
            ''.concat(t, ': ').concat(e).slice(0, 50));
      }
      var B = (function () {
        function t(e, n, i) {
          _classCallCheck(this, t),
            (this._element = e),
            (this._renderer = n),
            (this._select = i),
            this._select && (this.id = this._select._registerOption(this));
        }
        return (
          _createClass(t, [
            {
              key: '_setElementValue',
              value: function (t) {
                this._renderer.setProperty(this._element.nativeElement, 'value', t);
              }
            },
            {
              key: '_setSelected',
              value: function (t) {
                this._renderer.setProperty(this._element.nativeElement, 'selected', t);
              }
            },
            {
              key: 'ngOnDestroy',
              value: function () {
                this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
              }
            },
            {
              key: 'ngValue',
              set: function (t) {
                null != this._select &&
                  ((this._value = t),
                  this._setElementValue(R(this.id, t)),
                  this._select.writeValue(this._select.value));
              }
            },
            {
              key: 'value',
              set: function (t) {
                this._select
                  ? ((this._value = t),
                    this._setElementValue(R(this.id, t)),
                    this._select.writeValue(this._select.value))
                  : this._setElementValue(t);
              }
            }
          ]),
          t
        );
      })();
      function U(t, e) {
        return [].concat(_toConsumableArray(e.path), [t]);
      }
      function L(t, e) {
        t || q(e, 'Cannot find control with'),
          e.valueAccessor || q(e, 'No value accessor for form control with'),
          (t.validator = S.compose([t.validator, e.validator])),
          (t.asyncValidator = S.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange(function (n) {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && z(t, e);
            });
          })(t, e),
          (function (t, e) {
            t.registerOnChange(function (t, n) {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(function () {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && z(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange(function (t) {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach(function (e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function () {
                return t.updateValueAndValidity();
              });
          }),
          e._rawAsyncValidators.forEach(function (e) {
            e.registerOnValidatorChange &&
              e.registerOnValidatorChange(function () {
                return t.updateValueAndValidity();
              });
          });
      }
      function z(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function q(t, e) {
        var n;
        throw (
          ((n =
            t.path.length > 1
              ? "path: '".concat(t.path.join(' -> '), "'")
              : t.path[0]
              ? "name: '".concat(t.path, "'")
              : 'unspecified name attribute'),
          new Error(''.concat(e, ' ').concat(n)))
        );
      }
      function W(t) {
        return null != t ? S.compose(t.map(D)) : null;
      }
      function $(t) {
        return null != t ? S.composeAsync(t.map(I)) : null;
      }
      var H = [
        (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  this.onChange = t;
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              }
            ]),
            t
          );
        })(),
        (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  this.onChange = function (e) {
                    t('' == e ? null : parseFloat(e));
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              }
            ]),
            t
          );
        })(),
        (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  this.onChange = function (e) {
                    t('' == e ? null : parseFloat(e));
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              }
            ]),
            t
          );
        })(),
        (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {}),
              (this._compareWith = i.xb);
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  this.value = t;
                  var e = this._getOptionId(t);
                  null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
                  var n = j(e, t);
                  this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  var e = this;
                  this.onChange = function (n) {
                    (e.value = e._getOptionValue(n)), t(e.value);
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              },
              {
                key: '_registerOption',
                value: function () {
                  return (this._idCounter++).toString();
                }
              },
              {
                key: '_getOptionId',
                value: function (t) {
                  for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                    var i = n[e];
                    if (this._compareWith(this._optionMap.get(i), t)) return i;
                  }
                  return null;
                }
              },
              {
                key: '_getOptionValue',
                value: function (t) {
                  var e = (function (t) {
                    return t.split(':')[0];
                  })(t);
                  return this._optionMap.has(e) ? this._optionMap.get(e) : t;
                }
              },
              {
                key: 'compareWith',
                set: function (t) {
                  if ('function' != typeof t)
                    throw new Error('compareWith must be a function, but received '.concat(JSON.stringify(t)));
                  this._compareWith = t;
                }
              }
            ]),
            t
          );
        })(),
        (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = function (t) {}),
              (this.onTouched = function () {}),
              (this._compareWith = i.xb);
          }
          return (
            _createClass(t, [
              {
                key: 'writeValue',
                value: function (t) {
                  var e,
                    n = this;
                  if (((this.value = t), Array.isArray(t))) {
                    var i = t.map(function (t) {
                      return n._getOptionId(t);
                    });
                    e = function (t, e) {
                      t._setSelected(i.indexOf(e.toString()) > -1);
                    };
                  } else
                    e = function (t, e) {
                      t._setSelected(!1);
                    };
                  this._optionMap.forEach(e);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  var e = this;
                  this.onChange = function (n) {
                    var i = [];
                    if (n.hasOwnProperty('selectedOptions'))
                      for (var r = n.selectedOptions, l = 0; l < r.length; l++) {
                        var o = r.item(l),
                          a = e._getOptionValue(o.value);
                        i.push(a);
                      }
                    else
                      for (var u = n.options, s = 0; s < u.length; s++) {
                        var c = u.item(s);
                        if (c.selected) {
                          var h = e._getOptionValue(c.value);
                          i.push(h);
                        }
                      }
                    (e.value = i), t(i);
                  };
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              },
              {
                key: '_registerOption',
                value: function (t) {
                  var e = (this._idCounter++).toString();
                  return this._optionMap.set(e, t), e;
                }
              },
              {
                key: '_getOptionId',
                value: function (t) {
                  for (var e = 0, n = Array.from(this._optionMap.keys()); e < n.length; e++) {
                    var i = n[e];
                    if (this._compareWith(this._optionMap.get(i)._value, t)) return i;
                  }
                  return null;
                }
              },
              {
                key: '_getOptionValue',
                value: function (t) {
                  var e = (function (t) {
                    return t.split(':')[0];
                  })(t);
                  return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
                }
              },
              {
                key: 'compareWith',
                set: function (t) {
                  if ('function' != typeof t)
                    throw new Error('compareWith must be a function, but received '.concat(JSON.stringify(t)));
                  this._compareWith = t;
                }
              }
            ]),
            t
          );
        })(),
        (function () {
          function t(e, n, i, r) {
            _classCallCheck(this, t),
              (this._renderer = e),
              (this._elementRef = n),
              (this._registry = i),
              (this._injector = r),
              (this.onChange = function () {}),
              (this.onTouched = function () {});
          }
          return (
            _createClass(t, [
              {
                key: 'ngOnInit',
                value: function () {
                  (this._control = this._injector.get(k)), this._checkName(), this._registry.add(this._control, this);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this._registry.remove(this);
                }
              },
              {
                key: 'writeValue',
                value: function (t) {
                  (this._state = t === this.value),
                    this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  var e = this;
                  (this._fn = t),
                    (this.onChange = function () {
                      t(e.value), e._registry.select(e);
                    });
                }
              },
              {
                key: 'fireUncheck',
                value: function (t) {
                  this.writeValue(t);
                }
              },
              {
                key: 'registerOnTouched',
                value: function (t) {
                  this.onTouched = t;
                }
              },
              {
                key: 'setDisabledState',
                value: function (t) {
                  this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
                }
              },
              {
                key: '_checkName',
                value: function () {
                  this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
                    !this.name && this.formControlName && (this.name = this.formControlName);
                }
              },
              {
                key: '_throwNameError',
                value: function () {
                  throw new Error(
                    '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
                  );
                }
              }
            ]),
            t
          );
        })()
      ];
      function J(t) {
        var e = K(t) ? t.validators : t;
        return Array.isArray(e) ? W(e) : e || null;
      }
      function Z(t, e) {
        var n = K(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? $(n) : n || null;
      }
      function K(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      var X,
        Y = (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this.validator = e),
              (this.asyncValidator = n),
              (this._onCollectionChange = function () {}),
              (this.pristine = !0),
              (this.touched = !1),
              (this._onDisabledChange = []);
          }
          return (
            _createClass(t, [
              {
                key: 'setValidators',
                value: function (t) {
                  this.validator = J(t);
                }
              },
              {
                key: 'setAsyncValidators',
                value: function (t) {
                  this.asyncValidator = Z(t);
                }
              },
              {
                key: 'clearValidators',
                value: function () {
                  this.validator = null;
                }
              },
              {
                key: 'clearAsyncValidators',
                value: function () {
                  this.asyncValidator = null;
                }
              },
              {
                key: 'markAsTouched',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
                }
              },
              {
                key: 'markAllAsTouched',
                value: function () {
                  this.markAsTouched({ onlySelf: !0 }),
                    this._forEachChild(function (t) {
                      return t.markAllAsTouched();
                    });
                }
              },
              {
                key: 'markAsUntouched',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = !1),
                    (this._pendingTouched = !1),
                    this._forEachChild(function (t) {
                      t.markAsUntouched({ onlySelf: !0 });
                    }),
                    this._parent && !t.onlySelf && this._parent._updateTouched(t);
                }
              },
              {
                key: 'markAsDirty',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
                }
              },
              {
                key: 'markAsPristine',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !0),
                    (this._pendingDirty = !1),
                    this._forEachChild(function (t) {
                      t.markAsPristine({ onlySelf: !0 });
                    }),
                    this._parent && !t.onlySelf && this._parent._updatePristine(t);
                }
              },
              {
                key: 'markAsPending',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.status = 'PENDING'),
                    !1 !== t.emitEvent && this.statusChanges.emit(this.status),
                    this._parent && !t.onlySelf && this._parent.markAsPending(t);
                }
              },
              {
                key: 'disable',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = this._parentMarkedDirty(t.onlySelf);
                  (this.status = 'DISABLED'),
                    (this.errors = null),
                    this._forEachChild(function (e) {
                      e.disable(Object.assign({}, t, { onlySelf: !0 }));
                    }),
                    this._updateValue(),
                    !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
                    this._onDisabledChange.forEach(function (t) {
                      return t(!0);
                    });
                }
              },
              {
                key: 'enable',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = this._parentMarkedDirty(t.onlySelf);
                  (this.status = 'VALID'),
                    this._forEachChild(function (e) {
                      e.enable(Object.assign({}, t, { onlySelf: !0 }));
                    }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
                    this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
                    this._onDisabledChange.forEach(function (t) {
                      return t(!1);
                    });
                }
              },
              {
                key: '_updateAncestors',
                value: function (t) {
                  this._parent &&
                    !t.onlySelf &&
                    (this._parent.updateValueAndValidity(t),
                    t.skipPristineCheck || this._parent._updatePristine(),
                    this._parent._updateTouched());
                }
              },
              {
                key: 'setParent',
                value: function (t) {
                  this._parent = t;
                }
              },
              {
                key: 'updateValueAndValidity',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  this._setInitialStatus(),
                    this._updateValue(),
                    this.enabled &&
                      (this._cancelExistingSubscription(),
                      (this.errors = this._runValidator()),
                      (this.status = this._calculateStatus()),
                      ('VALID' !== this.status && 'PENDING' !== this.status) || this._runAsyncValidator(t.emitEvent)),
                    !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
                    this._parent && !t.onlySelf && this._parent.updateValueAndValidity(t);
                }
              },
              {
                key: '_updateTreeValidity',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { emitEvent: !0 };
                  this._forEachChild(function (e) {
                    return e._updateTreeValidity(t);
                  }),
                    this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
                }
              },
              {
                key: '_setInitialStatus',
                value: function () {
                  this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
                }
              },
              {
                key: '_runValidator',
                value: function () {
                  return this.validator ? this.validator(this) : null;
                }
              },
              {
                key: '_runAsyncValidator',
                value: function (t) {
                  var e = this;
                  if (this.asyncValidator) {
                    this.status = 'PENDING';
                    var n = T(this.asyncValidator(this));
                    this._asyncValidationSubscription = n.subscribe(function (n) {
                      return e.setErrors(n, { emitEvent: t });
                    });
                  }
                }
              },
              {
                key: '_cancelExistingSubscription',
                value: function () {
                  this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
                }
              },
              {
                key: 'setErrors',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
                }
              },
              {
                key: 'get',
                value: function (t) {
                  return (function (t, e, n) {
                    return null == e
                      ? null
                      : (e instanceof Array || (e = e.split('.')),
                        e instanceof Array && 0 === e.length
                          ? null
                          : e.reduce(function (t, e) {
                              return t instanceof tt
                                ? t.controls.hasOwnProperty(e)
                                  ? t.controls[e]
                                  : null
                                : (t instanceof et && t.at(e)) || null;
                            }, t));
                  })(this, t);
                }
              },
              {
                key: 'getError',
                value: function (t, e) {
                  var n = e ? this.get(e) : this;
                  return n && n.errors ? n.errors[t] : null;
                }
              },
              {
                key: 'hasError',
                value: function (t, e) {
                  return !!this.getError(t, e);
                }
              },
              {
                key: '_updateControlsErrors',
                value: function (t) {
                  (this.status = this._calculateStatus()),
                    t && this.statusChanges.emit(this.status),
                    this._parent && this._parent._updateControlsErrors(t);
                }
              },
              {
                key: '_initObservables',
                value: function () {
                  (this.valueChanges = new i.m()), (this.statusChanges = new i.m());
                }
              },
              {
                key: '_calculateStatus',
                value: function () {
                  return this._allControlsDisabled()
                    ? 'DISABLED'
                    : this.errors
                    ? 'INVALID'
                    : this._anyControlsHaveStatus('PENDING')
                    ? 'PENDING'
                    : this._anyControlsHaveStatus('INVALID')
                    ? 'INVALID'
                    : 'VALID';
                }
              },
              {
                key: '_anyControlsHaveStatus',
                value: function (t) {
                  return this._anyControls(function (e) {
                    return e.status === t;
                  });
                }
              },
              {
                key: '_anyControlsDirty',
                value: function () {
                  return this._anyControls(function (t) {
                    return t.dirty;
                  });
                }
              },
              {
                key: '_anyControlsTouched',
                value: function () {
                  return this._anyControls(function (t) {
                    return t.touched;
                  });
                }
              },
              {
                key: '_updatePristine',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.pristine = !this._anyControlsDirty()),
                    this._parent && !t.onlySelf && this._parent._updatePristine(t);
                }
              },
              {
                key: '_updateTouched',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  (this.touched = this._anyControlsTouched()),
                    this._parent && !t.onlySelf && this._parent._updateTouched(t);
                }
              },
              {
                key: '_isBoxedValue',
                value: function (t) {
                  return (
                    'object' == typeof t && null !== t && 2 === Object.keys(t).length && 'value' in t && 'disabled' in t
                  );
                }
              },
              {
                key: '_registerOnCollectionChange',
                value: function (t) {
                  this._onCollectionChange = t;
                }
              },
              {
                key: '_setUpdateStrategy',
                value: function (t) {
                  K(t) && null != t.updateOn && (this._updateOn = t.updateOn);
                }
              },
              {
                key: '_parentMarkedDirty',
                value: function (t) {
                  return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
                }
              },
              {
                key: 'parent',
                get: function () {
                  return this._parent;
                }
              },
              {
                key: 'valid',
                get: function () {
                  return 'VALID' === this.status;
                }
              },
              {
                key: 'invalid',
                get: function () {
                  return 'INVALID' === this.status;
                }
              },
              {
                key: 'pending',
                get: function () {
                  return 'PENDING' == this.status;
                }
              },
              {
                key: 'disabled',
                get: function () {
                  return 'DISABLED' === this.status;
                }
              },
              {
                key: 'enabled',
                get: function () {
                  return 'DISABLED' !== this.status;
                }
              },
              {
                key: 'dirty',
                get: function () {
                  return !this.pristine;
                }
              },
              {
                key: 'untouched',
                get: function () {
                  return !this.touched;
                }
              },
              {
                key: 'updateOn',
                get: function () {
                  return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
                }
              },
              {
                key: 'root',
                get: function () {
                  for (var t = this; t._parent; ) t = t._parent;
                  return t;
                }
              }
            ]),
            t
          );
        })(),
        Q = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n() {
            var t,
              i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
              r = arguments.length > 1 ? arguments[1] : void 0,
              l = arguments.length > 2 ? arguments[2] : void 0;
            return (
              _classCallCheck(this, n),
              ((t = e.call(this, J(r), Z(l, r)))._onChange = []),
              t._applyFormState(i),
              t._setUpdateStrategy(r),
              t.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              t._initObservables(),
              t
            );
          }
          return (
            _createClass(n, [
              {
                key: 'setValue',
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  (this.value = this._pendingValue = t),
                    this._onChange.length &&
                      !1 !== n.emitModelToViewChange &&
                      this._onChange.forEach(function (t) {
                        return t(e.value, !1 !== n.emitViewToModelChange);
                      }),
                    this.updateValueAndValidity(n);
                }
              },
              {
                key: 'patchValue',
                value: function (t) {
                  var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.setValue(t, e);
                }
              },
              {
                key: 'reset',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._applyFormState(t),
                    this.markAsPristine(e),
                    this.markAsUntouched(e),
                    this.setValue(this.value, e),
                    (this._pendingChange = !1);
                }
              },
              { key: '_updateValue', value: function () {} },
              {
                key: '_anyControls',
                value: function (t) {
                  return !1;
                }
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  return this.disabled;
                }
              },
              {
                key: 'registerOnChange',
                value: function (t) {
                  this._onChange.push(t);
                }
              },
              {
                key: '_clearChangeFns',
                value: function () {
                  (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = function () {});
                }
              },
              {
                key: 'registerOnDisabledChange',
                value: function (t) {
                  this._onDisabledChange.push(t);
                }
              },
              { key: '_forEachChild', value: function (t) {} },
              {
                key: '_syncPendingControls',
                value: function () {
                  return !(
                    'submit' !== this.updateOn ||
                    (this._pendingDirty && this.markAsDirty(),
                    this._pendingTouched && this.markAsTouched(),
                    !this._pendingChange) ||
                    (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
                  );
                }
              },
              {
                key: '_applyFormState',
                value: function (t) {
                  this._isBoxedValue(t)
                    ? ((this.value = this._pendingValue = t.value),
                      t.disabled
                        ? this.disable({ onlySelf: !0, emitEvent: !1 })
                        : this.enable({ onlySelf: !0, emitEvent: !1 }))
                    : (this.value = this._pendingValue = t);
                }
              }
            ]),
            n
          );
        })(Y),
        tt = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, i, r) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = e.call(this, J(i), Z(r, i))).controls = t),
              l._initObservables(),
              l._setUpdateStrategy(i),
              l._setUpControls(),
              l.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: 'registerControl',
                value: function (t, e) {
                  return this.controls[t]
                    ? this.controls[t]
                    : ((this.controls[t] = e),
                      e.setParent(this),
                      e._registerOnCollectionChange(this._onCollectionChange),
                      e);
                }
              },
              {
                key: 'addControl',
                value: function (t, e) {
                  this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
                }
              },
              {
                key: 'removeControl',
                value: function (t) {
                  this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}),
                    delete this.controls[t],
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'setControl',
                value: function (t, e) {
                  this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}),
                    delete this.controls[t],
                    e && this.registerControl(t, e),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'contains',
                value: function (t) {
                  return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
                }
              },
              {
                key: 'setValue',
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(t),
                    Object.keys(t).forEach(function (i) {
                      e._throwIfControlMissing(i),
                        e.controls[i].setValue(t[i], { onlySelf: !0, emitEvent: n.emitEvent });
                    }),
                    this.updateValueAndValidity(n);
                }
              },
              {
                key: 'patchValue',
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  Object.keys(t).forEach(function (i) {
                    e.controls[i] && e.controls[i].patchValue(t[i], { onlySelf: !0, emitEvent: n.emitEvent });
                  }),
                    this.updateValueAndValidity(n);
                }
              },
              {
                key: 'reset',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function (n, i) {
                    n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
                  }),
                    this._updatePristine(e),
                    this._updateTouched(e),
                    this.updateValueAndValidity(e);
                }
              },
              {
                key: 'getRawValue',
                value: function () {
                  return this._reduceChildren({}, function (t, e, n) {
                    return (t[n] = e instanceof Q ? e.value : e.getRawValue()), t;
                  });
                }
              },
              {
                key: '_syncPendingControls',
                value: function () {
                  var t = this._reduceChildren(!1, function (t, e) {
                    return !!e._syncPendingControls() || t;
                  });
                  return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
                }
              },
              {
                key: '_throwIfControlMissing',
                value: function (t) {
                  if (!Object.keys(this.controls).length)
                    throw new Error(
                      "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.controls[t]) throw new Error('Cannot find form control with name: '.concat(t, '.'));
                }
              },
              {
                key: '_forEachChild',
                value: function (t) {
                  var e = this;
                  Object.keys(this.controls).forEach(function (n) {
                    return t(e.controls[n], n);
                  });
                }
              },
              {
                key: '_setUpControls',
                value: function () {
                  var t = this;
                  this._forEachChild(function (e) {
                    e.setParent(t), e._registerOnCollectionChange(t._onCollectionChange);
                  });
                }
              },
              {
                key: '_updateValue',
                value: function () {
                  this.value = this._reduceValue();
                }
              },
              {
                key: '_anyControls',
                value: function (t) {
                  var e = this,
                    n = !1;
                  return (
                    this._forEachChild(function (i, r) {
                      n = n || (e.contains(r) && t(i));
                    }),
                    n
                  );
                }
              },
              {
                key: '_reduceValue',
                value: function () {
                  var t = this;
                  return this._reduceChildren({}, function (e, n, i) {
                    return (n.enabled || t.disabled) && (e[i] = n.value), e;
                  });
                }
              },
              {
                key: '_reduceChildren',
                value: function (t, e) {
                  var n = t;
                  return (
                    this._forEachChild(function (t, i) {
                      n = e(n, t, i);
                    }),
                    n
                  );
                }
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  for (var t = 0, e = Object.keys(this.controls); t < e.length; t++) {
                    var n = e[t];
                    if (this.controls[n].enabled) return !1;
                  }
                  return Object.keys(this.controls).length > 0 || this.disabled;
                }
              },
              {
                key: '_checkAllValuesPresent',
                value: function (t) {
                  this._forEachChild(function (e, n) {
                    if (void 0 === t[n])
                      throw new Error("Must supply a value for form control with name: '".concat(n, "'."));
                  });
                }
              }
            ]),
            n
          );
        })(Y),
        et = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, i, r) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = e.call(this, J(i), Z(r, i))).controls = t),
              l._initObservables(),
              l._setUpdateStrategy(i),
              l._setUpControls(),
              l.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: 'at',
                value: function (t) {
                  return this.controls[t];
                }
              },
              {
                key: 'push',
                value: function (t) {
                  this.controls.push(t),
                    this._registerControl(t),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'insert',
                value: function (t, e) {
                  this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
                }
              },
              {
                key: 'removeAt',
                value: function (t) {
                  this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}),
                    this.controls.splice(t, 1),
                    this.updateValueAndValidity();
                }
              },
              {
                key: 'setControl',
                value: function (t, e) {
                  this.controls[t] && this.controls[t]._registerOnCollectionChange(function () {}),
                    this.controls.splice(t, 1),
                    e && (this.controls.splice(t, 0, e), this._registerControl(e)),
                    this.updateValueAndValidity(),
                    this._onCollectionChange();
                }
              },
              {
                key: 'setValue',
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._checkAllValuesPresent(t),
                    t.forEach(function (t, i) {
                      e._throwIfControlMissing(i), e.at(i).setValue(t, { onlySelf: !0, emitEvent: n.emitEvent });
                    }),
                    this.updateValueAndValidity(n);
                }
              },
              {
                key: 'patchValue',
                value: function (t) {
                  var e = this,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  t.forEach(function (t, i) {
                    e.at(i) && e.at(i).patchValue(t, { onlySelf: !0, emitEvent: n.emitEvent });
                  }),
                    this.updateValueAndValidity(n);
                }
              },
              {
                key: 'reset',
                value: function () {
                  var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this._forEachChild(function (n, i) {
                    n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
                  }),
                    this._updatePristine(e),
                    this._updateTouched(e),
                    this.updateValueAndValidity(e);
                }
              },
              {
                key: 'getRawValue',
                value: function () {
                  return this.controls.map(function (t) {
                    return t instanceof Q ? t.value : t.getRawValue();
                  });
                }
              },
              {
                key: 'clear',
                value: function () {
                  this.controls.length < 1 ||
                    (this._forEachChild(function (t) {
                      return t._registerOnCollectionChange(function () {});
                    }),
                    this.controls.splice(0),
                    this.updateValueAndValidity());
                }
              },
              {
                key: '_syncPendingControls',
                value: function () {
                  var t = this.controls.reduce(function (t, e) {
                    return !!e._syncPendingControls() || t;
                  }, !1);
                  return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
                }
              },
              {
                key: '_throwIfControlMissing',
                value: function (t) {
                  if (!this.controls.length)
                    throw new Error(
                      "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
                    );
                  if (!this.at(t)) throw new Error('Cannot find form control at index '.concat(t));
                }
              },
              {
                key: '_forEachChild',
                value: function (t) {
                  this.controls.forEach(function (e, n) {
                    t(e, n);
                  });
                }
              },
              {
                key: '_updateValue',
                value: function () {
                  var t = this;
                  this.value = this.controls
                    .filter(function (e) {
                      return e.enabled || t.disabled;
                    })
                    .map(function (t) {
                      return t.value;
                    });
                }
              },
              {
                key: '_anyControls',
                value: function (t) {
                  return this.controls.some(function (e) {
                    return e.enabled && t(e);
                  });
                }
              },
              {
                key: '_setUpControls',
                value: function () {
                  var t = this;
                  this._forEachChild(function (e) {
                    return t._registerControl(e);
                  });
                }
              },
              {
                key: '_checkAllValuesPresent',
                value: function (t) {
                  this._forEachChild(function (e, n) {
                    if (void 0 === t[n])
                      throw new Error('Must supply a value for form control at index: '.concat(n, '.'));
                  });
                }
              },
              {
                key: '_allControlsDisabled',
                value: function () {
                  var t,
                    e = _createForOfIteratorHelper(this.controls);
                  try {
                    for (e.s(); !(t = e.n()).done; ) {
                      if (t.value.enabled) return !1;
                    }
                  } catch (n) {
                    e.e(n);
                  } finally {
                    e.f();
                  }
                  return this.controls.length > 0 || this.disabled;
                }
              },
              {
                key: '_registerControl',
                value: function (t) {
                  t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
                }
              },
              {
                key: 'length',
                get: function () {
                  return this.controls.length;
                }
              }
            ]),
            n
          );
        })(Y),
        nt = Promise.resolve(null),
        it = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, r) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = e.call(this)).submitted = !1),
              (l._directives = []),
              (l.ngSubmit = new i.m()),
              (l.form = new tt({}, W(t), $(r))),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: 'ngAfterViewInit',
                value: function () {
                  this._setUpdateStrategy();
                }
              },
              {
                key: 'addControl',
                value: function (t) {
                  var e = this;
                  nt.then(function () {
                    var n = e._findContainer(t.path);
                    (t.control = n.registerControl(t.name, t.control)),
                      L(t.control, t),
                      t.control.updateValueAndValidity({ emitEvent: !1 }),
                      e._directives.push(t);
                  });
                }
              },
              {
                key: 'getControl',
                value: function (t) {
                  return this.form.get(t.path);
                }
              },
              {
                key: 'removeControl',
                value: function (t) {
                  var e = this;
                  nt.then(function () {
                    var n,
                      i,
                      r,
                      l = e._findContainer(t.path);
                    l && l.removeControl(t.name),
                      (n = e._directives),
                      (i = t),
                      (r = n.indexOf(i)) > -1 && n.splice(r, 1);
                  });
                }
              },
              {
                key: 'addFormGroup',
                value: function (t) {
                  var e = this;
                  nt.then(function () {
                    var n = e._findContainer(t.path),
                      i = new tt({});
                    (function (t, e) {
                      null == t && q(e, 'Cannot find control with'),
                        (t.validator = S.compose([t.validator, e.validator])),
                        (t.asyncValidator = S.composeAsync([t.asyncValidator, e.asyncValidator]));
                    })(i, t),
                      n.registerControl(t.name, i),
                      i.updateValueAndValidity({ emitEvent: !1 });
                  });
                }
              },
              {
                key: 'removeFormGroup',
                value: function (t) {
                  var e = this;
                  nt.then(function () {
                    var n = e._findContainer(t.path);
                    n && n.removeControl(t.name);
                  });
                }
              },
              {
                key: 'getFormGroup',
                value: function (t) {
                  return this.form.get(t.path);
                }
              },
              {
                key: 'updateModel',
                value: function (t, e) {
                  var n = this;
                  nt.then(function () {
                    n.form.get(t.path).setValue(e);
                  });
                }
              },
              {
                key: 'setValue',
                value: function (t) {
                  this.control.setValue(t);
                }
              },
              {
                key: 'onSubmit',
                value: function (t) {
                  return (
                    (this.submitted = !0),
                    (e = this._directives),
                    this.form._syncPendingControls(),
                    e.forEach(function (t) {
                      var e = t.control;
                      'submit' === e.updateOn &&
                        e._pendingChange &&
                        (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
                    }),
                    this.ngSubmit.emit(t),
                    !1
                  );
                  var e;
                }
              },
              {
                key: 'onReset',
                value: function () {
                  this.resetForm();
                }
              },
              {
                key: 'resetForm',
                value: function (t) {
                  this.form.reset(t), (this.submitted = !1);
                }
              },
              {
                key: '_setUpdateStrategy',
                value: function () {
                  this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
                }
              },
              {
                key: '_findContainer',
                value: function (t) {
                  return t.pop(), t.length ? this.form.get(t) : this.form;
                }
              },
              {
                key: 'formDirective',
                get: function () {
                  return this;
                }
              },
              {
                key: 'control',
                get: function () {
                  return this.form;
                }
              },
              {
                key: 'path',
                get: function () {
                  return [];
                }
              },
              {
                key: 'controls',
                get: function () {
                  return this.form.controls;
                }
              }
            ]),
            n
          );
        })(m),
        rt = (function () {
          function t() {
            _classCallCheck(this, t);
          }
          return (
            _createClass(t, null, [
              {
                key: 'modelParentException',
                value: function () {
                  throw new Error(
                    '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
                  );
                }
              },
              {
                key: 'formGroupNameException',
                value: function () {
                  throw new Error(
                    '\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      '
                      .concat(
                        N,
                        "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      "
                      )
                      .concat(F)
                  );
                }
              },
              {
                key: 'missingNameException',
                value: function () {
                  throw new Error(
                    'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
                  );
                }
              },
              {
                key: 'modelGroupParentException',
                value: function () {
                  throw new Error(
                    '\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      '
                      .concat(
                        N,
                        '\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      '
                      )
                      .concat(F)
                  );
                }
              },
              {
                key: 'ngFormWarning',
                value: function () {
                  console.warn(
                    "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
                  );
                }
              }
            ]),
            t
          );
        })(),
        lt = new i.o('NgFormSelectorWarning'),
        ot = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n() {
            return _classCallCheck(this, n), e.apply(this, arguments);
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnInit',
                value: function () {
                  this._checkParentType(), this.formDirective.addFormGroup(this);
                }
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.formDirective && this.formDirective.removeFormGroup(this);
                }
              },
              { key: '_checkParentType', value: function () {} },
              {
                key: 'control',
                get: function () {
                  return this.formDirective.getFormGroup(this);
                }
              },
              {
                key: 'path',
                get: function () {
                  return U(this.name, this._parent);
                }
              },
              {
                key: 'formDirective',
                get: function () {
                  return this._parent ? this._parent.formDirective : null;
                }
              },
              {
                key: 'validator',
                get: function () {
                  return W(this._validators);
                }
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return $(this._asyncValidators);
                }
              }
            ]),
            n
          );
        })(m),
        at = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, i, r) {
            var l;
            return (
              _classCallCheck(this, n),
              ((l = e.call(this))._parent = t),
              (l._validators = i),
              (l._asyncValidators = r),
              l
            );
          }
          return (
            _createClass(n, [
              {
                key: '_checkParentType',
                value: function () {
                  this._parent instanceof n || this._parent instanceof it || rt.modelGroupParentException();
                }
              }
            ]),
            n
          );
        })(ot),
        ut = Promise.resolve(null),
        st = (function (t) {
          _inherits(n, t);
          var e = _createSuper(n);
          function n(t, r, l, o) {
            var a;
            return (
              _classCallCheck(this, n),
              ((a = e.call(this)).control = new Q()),
              (a._registered = !1),
              (a.update = new i.m()),
              (a._parent = t),
              (a._rawValidators = r || []),
              (a._rawAsyncValidators = l || []),
              (a.valueAccessor = (function (t, e) {
                if (!e) return null;
                Array.isArray(e) || q(t, 'Value accessor was not provided as an array for form control with');
                var n = void 0,
                  i = void 0,
                  r = void 0;
                return (
                  e.forEach(function (e) {
                    var l;
                    e.constructor === g
                      ? (n = e)
                      : ((l = e),
                        H.some(function (t) {
                          return l.constructor === t;
                        })
                          ? (i && q(t, 'More than one built-in value accessor matches form control with'), (i = e))
                          : (r && q(t, 'More than one custom value accessor matches form control with'), (r = e)));
                  }),
                  r || i || n || (q(t, 'No valid value accessor for form control with'), null)
                );
              })(_assertThisInitialized(a), o)),
              a
            );
          }
          return (
            _createClass(n, [
              {
                key: 'ngOnChanges',
                value: function (t) {
                  this._checkForErrors(),
                    this._registered || this._setUpControl(),
                    'isDisabled' in t && this._updateDisabled(t),
                    (function (t, e) {
                      if (!t.hasOwnProperty('model')) return !1;
                      var n = t.model;
                      return !!n.isFirstChange() || !Object(i.xb)(e, n.currentValue);
                    })(t, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
                }
              },
              {
                key: 'ngOnDestroy',
                value: function () {
                  this.formDirective && this.formDirective.removeControl(this);
                }
              },
              {
                key: 'viewToModelUpdate',
                value: function (t) {
                  (this.viewModel = t), this.update.emit(t);
                }
              },
              {
                key: '_setUpControl',
                value: function () {
                  this._setUpdateStrategy(),
                    this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
                    (this._registered = !0);
                }
              },
              {
                key: '_setUpdateStrategy',
                value: function () {
                  this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
                }
              },
              {
                key: '_isStandalone',
                value: function () {
                  return !this._parent || !(!this.options || !this.options.standalone);
                }
              },
              {
                key: '_setUpStandalone',
                value: function () {
                  L(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 });
                }
              },
              {
                key: '_checkForErrors',
                value: function () {
                  this._isStandalone() || this._checkParentType(), this._checkName();
                }
              },
              {
                key: '_checkParentType',
                value: function () {
                  !(this._parent instanceof at) && this._parent instanceof ot
                    ? rt.formGroupNameException()
                    : this._parent instanceof at || this._parent instanceof it || rt.modelParentException();
                }
              },
              {
                key: '_checkName',
                value: function () {
                  this.options && this.options.name && (this.name = this.options.name),
                    this._isStandalone() || this.name || rt.missingNameException();
                }
              },
              {
                key: '_updateValue',
                value: function (t) {
                  var e = this;
                  ut.then(function () {
                    e.control.setValue(t, { emitViewToModelChange: !1 });
                  });
                }
              },
              {
                key: '_updateDisabled',
                value: function (t) {
                  var e = this,
                    n = t.isDisabled.currentValue,
                    i = '' === n || (n && 'false' !== n);
                  ut.then(function () {
                    i && !e.control.disabled ? e.control.disable() : !i && e.control.disabled && e.control.enable();
                  });
                }
              },
              {
                key: 'path',
                get: function () {
                  return this._parent ? U(this.name, this._parent) : [this.name];
                }
              },
              {
                key: 'formDirective',
                get: function () {
                  return this._parent ? this._parent.formDirective : null;
                }
              },
              {
                key: 'validator',
                get: function () {
                  return W(this._rawValidators);
                }
              },
              {
                key: 'asyncValidator',
                get: function () {
                  return $(this._rawAsyncValidators);
                }
              }
            ]),
            n
          );
        })(k),
        ct = function t() {
          _classCallCheck(this, t);
        },
        ht = (function () {
          function t() {
            _classCallCheck(this, t);
          }
          return (
            _createClass(t, [
              {
                key: 'validate',
                value: function (t) {
                  return this.required ? S.required(t) : null;
                }
              },
              {
                key: 'registerOnValidatorChange',
                value: function (t) {
                  this._onChange = t;
                }
              },
              {
                key: 'required',
                get: function () {
                  return this._required;
                },
                set: function (t) {
                  (this._required = null != t && !1 !== t && 'false' !== ''.concat(t)),
                    this._onChange && this._onChange();
                }
              }
            ]),
            t
          );
        })(),
        dt = function t() {
          _classCallCheck(this, t);
        },
        ft = (function () {
          function t() {
            _classCallCheck(this, t);
          }
          return (
            _createClass(t, null, [
              {
                key: 'withConfig',
                value: function (e) {
                  return { ngModule: t, providers: [{ provide: lt, useValue: e.warnOnDeprecatedNgFormSelector }] };
                }
              }
            ]),
            t
          );
        })(),
        pt = n('VTKs'),
        vt = n('EtQq'),
        _t = n('KDUW'),
        gt = n('SVse'),
        yt = n('0LF7'),
        mt = n('kBGf'),
        Ct = (function () {
          function t(e, n) {
            _classCallCheck(this, t),
              (this.reportService = e),
              (this.screenWidthService = n),
              (this.incidentComment = ''),
              (this.listOfTags = ['fire', 'accident', 'water']),
              (this.selectedTags = []);
          }
          return (
            _createClass(t, [
              {
                key: 'ngOnInit',
                value: function () {
                  this.reportService.incidentComment &&
                    ((this.incidentComment = this.reportService.incidentComment),
                    (this.selectedTags = this.reportService.selectedTags));
                }
              },
              {
                key: 'selectTag',
                value: function (t) {
                  this.selectedTags.includes(t) || (this.selectedTags.unshift(t), console.log(this.selectedTags));
                }
              },
              {
                key: 'removeTag',
                value: function (t) {
                  (this.selectedTags = this.selectedTags.filter(function (e) {
                    return e !== t;
                  })),
                    console.log(this.selectedTags);
                }
              },
              {
                key: 'submitForm',
                value: function (t) {
                  this.reportService.setInfo(t, this.selectedTags);
                }
              }
            ]),
            t
          );
        })(),
        kt =
          (((X = (function () {
            function t() {
              _classCallCheck(this, t), (this.incidentComment = ''), (this.selectedTags = []);
            }
            return (
              _createClass(t, [
                {
                  key: 'setInfo',
                  value: function (t, e) {
                    (this.incidentComment = t), (this.selectedTags = e);
                  }
                }
              ]),
              t
            );
          })()).ngInjectableDef = i.Kb({
            factory: function () {
              return new X();
            },
            token: X,
            providedIn: 'root'
          })),
          X),
        bt = n('6C7I'),
        Vt = i.nb({
          encapsulation: 0,
          styles: [
            [
              '.main[_ngcontent-%COMP%]{min-height:87%;padding:0 15px}.main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff4848;font-weight:700;margin-bottom:10px}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:10px;color:#444;display:block}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #a0a0a0;width:96%;padding:10px 0 0 10px;margin-bottom:20px}.main[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]{display:flex;list-style:none;flex-wrap:wrap;margin:0;padding:0}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:50px;background-color:#ff4848;color:#fff;padding:8px 15px;font-weight:700;margin-right:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:100px;color:#ff4848;background-color:#fff;padding:2px 7px;margin-left:10px;cursor:pointer}.main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff;font-size:16px;font-weight:700;background-color:#10d610;padding:19px;border:none;margin-top:30px}.main[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{background-color:#9e9e9e}'
            ]
          ],
          data: {}
        });
      function Ot(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
            i.ob(1, 147456, null, 0, G, [i.k, i.B, [8, null]], { value: [0, 'value'] }, null),
            i.ob(2, 147456, null, 0, B, [i.k, i.B, [8, null]], { value: [0, 'value'] }, null),
            (t()(), i.Fb(3, null, ['', '']))
          ],
          function (t, e) {
            t(e, 1, 0, i.tb(1, '', e.context.$implicit, '')), t(e, 2, 0, i.tb(1, '', e.context.$implicit, ''));
          },
          function (t, e) {
            t(e, 3, 0, e.context.$implicit);
          }
        );
      }
      function wt(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 3, 'li', [['class', 'single-tag']], null, null, null, null, null)),
            (t()(), i.Fb(1, null, ['', ' '])),
            (t()(),
            i.pb(
              2,
              0,
              null,
              null,
              1,
              'span',
              [],
              null,
              [[null, 'click']],
              function (t, e, n) {
                var i = !0;
                return 'click' === e && (i = !1 !== t.component.removeTag(t.context.$implicit) && i), i;
              },
              null,
              null
            )),
            (t()(), i.Fb(-1, null, ['\xd7']))
          ],
          null,
          function (t, e) {
            t(e, 1, 0, e.context.$implicit);
          }
        );
      }
      function Et(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 42, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(1, 0, null, null, 1, 'app-navbar', [], null, null, null, pt.b, pt.a)),
            i.ob(2, 114688, null, 0, vt.a, [_t.a], null, null),
            (t()(), i.pb(3, 0, null, null, 39, 'div', [['class', 'main']], null, null, null, null, null)),
            (t()(),
            i.pb(
              4,
              0,
              null,
              null,
              38,
              'form',
              [['novalidate', '']],
              [
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'ngSubmit'],
                [null, 'submit'],
                [null, 'reset']
              ],
              function (t, e, n) {
                var r = !0,
                  l = t.component;
                return (
                  'submit' === e && (r = !1 !== i.Bb(t, 6).onSubmit(n) && r),
                  'reset' === e && (r = !1 !== i.Bb(t, 6).onReset() && r),
                  'ngSubmit' === e && (r = !1 !== l.submitForm(i.Bb(t, 6).value) && r),
                  r
                );
              },
              null,
              null
            )),
            i.ob(5, 16384, null, 0, ct, [], null, null),
            i.ob(
              6,
              4210688,
              [['form', 4]],
              0,
              it,
              [
                [8, null],
                [8, null]
              ],
              null,
              { ngSubmit: 'ngSubmit' }
            ),
            i.Db(2048, null, m, null, [it]),
            i.ob(8, 16384, null, 0, O, [[4, m]], null, null),
            (t()(), i.pb(9, 0, null, null, 13, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(10, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), i.Fb(-1, null, ['Describe Incident'])),
            (t()(), i.pb(12, 0, null, null, 10, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(13, 0, null, null, 1, 'label', [['for', 'incident-comment']], null, null, null, null, null)),
            (t()(), i.Fb(-1, null, ['Comments about incident'])),
            (t()(),
            i.pb(
              15,
              0,
              null,
              null,
              7,
              'textarea',
              [
                ['cols', '30'],
                ['id', 'incident-comment'],
                ['name', 'incident-comment'],
                ['placeholder', 'Briefly describe the incident e.g Highway accident with 3 severe casualties.'],
                ['required', ''],
                ['rows', '10']
              ],
              [
                [1, 'required', 0],
                [2, 'ng-untouched', null],
                [2, 'ng-touched', null],
                [2, 'ng-pristine', null],
                [2, 'ng-dirty', null],
                [2, 'ng-valid', null],
                [2, 'ng-invalid', null],
                [2, 'ng-pending', null]
              ],
              [
                [null, 'ngModelChange'],
                [null, 'input'],
                [null, 'blur'],
                [null, 'compositionstart'],
                [null, 'compositionend']
              ],
              function (t, e, n) {
                var r = !0,
                  l = t.component;
                return (
                  'input' === e && (r = !1 !== i.Bb(t, 16)._handleInput(n.target.value) && r),
                  'blur' === e && (r = !1 !== i.Bb(t, 16).onTouched() && r),
                  'compositionstart' === e && (r = !1 !== i.Bb(t, 16)._compositionStart() && r),
                  'compositionend' === e && (r = !1 !== i.Bb(t, 16)._compositionEnd(n.target.value) && r),
                  'ngModelChange' === e && (r = !1 !== (l.incidentComment = n) && r),
                  r
                );
              },
              null,
              null
            )),
            i.ob(16, 16384, null, 0, g, [i.B, i.k, [2, _]], null, null),
            i.ob(17, 16384, null, 0, ht, [], { required: [0, 'required'] }, null),
            i.Db(
              1024,
              null,
              E,
              function (t) {
                return [t];
              },
              [ht]
            ),
            i.Db(
              1024,
              null,
              v,
              function (t) {
                return [t];
              },
              [g]
            ),
            i.ob(
              20,
              671744,
              [['comment', 4]],
              0,
              st,
              [
                [2, m],
                [6, E],
                [8, null],
                [6, v]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            i.Db(2048, null, k, null, [st]),
            i.ob(22, 16384, null, 0, V, [[4, k]], null, null),
            (t()(), i.pb(23, 0, null, null, 0, 'hr', [], null, null, null, null, null)),
            (t()(), i.pb(24, 0, null, null, 16, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(25, 0, null, null, 1, 'h2', [], null, null, null, null, null)),
            (t()(), i.Fb(-1, null, ['Add tags'])),
            (t()(), i.pb(27, 0, null, null, 13, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(28, 0, null, null, 1, 'span', [['class', 'tag']], null, null, null, null, null)),
            (t()(), i.Fb(-1, null, ['Tags keep responders more informed'])),
            (t()(),
            i.pb(
              30,
              0,
              null,
              null,
              6,
              'select',
              [
                ['id', 'add-tags'],
                ['name', '']
              ],
              null,
              [[null, 'change']],
              function (t, e, n) {
                var i = !0;
                return 'change' === e && (i = !1 !== t.component.selectTag(n.target.value) && i), i;
              },
              null,
              null
            )),
            (t()(),
            i.pb(
              31,
              0,
              null,
              null,
              3,
              'option',
              [
                ['disabled', ''],
                ['selected', '']
              ],
              null,
              null,
              null,
              null,
              null
            )),
            i.ob(32, 147456, null, 0, G, [i.k, i.B, [8, null]], null, null),
            i.ob(33, 147456, null, 0, B, [i.k, i.B, [8, null]], null, null),
            (t()(), i.Fb(-1, null, ['Select Tags'])),
            (t()(), i.eb(16777216, null, null, 1, null, Ot)),
            i.ob(36, 278528, null, 0, gt.i, [i.M, i.J, i.q], { ngForOf: [0, 'ngForOf'] }, null),
            (t()(), i.pb(37, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(38, 0, null, null, 2, 'ul', [['class', 'selected-tags-list']], null, null, null, null, null)),
            (t()(), i.eb(16777216, null, null, 1, null, wt)),
            i.ob(40, 278528, null, 0, gt.i, [i.M, i.J, i.q], { ngForOf: [0, 'ngForOf'] }, null),
            (t()(),
            i.pb(41, 0, null, null, 1, 'button', [['type', 'submit']], [[8, 'disabled', 0]], null, null, null, null)),
            (t()(), i.Fb(-1, null, ['Continue']))
          ],
          function (t, e) {
            var n = e.component;
            t(e, 2, 0),
              t(e, 17, 0, ''),
              t(e, 20, 0, 'incident-comment', n.incidentComment),
              t(e, 36, 0, n.listOfTags),
              t(e, 40, 0, n.selectedTags);
          },
          function (t, e) {
            t(
              e,
              4,
              0,
              i.Bb(e, 8).ngClassUntouched,
              i.Bb(e, 8).ngClassTouched,
              i.Bb(e, 8).ngClassPristine,
              i.Bb(e, 8).ngClassDirty,
              i.Bb(e, 8).ngClassValid,
              i.Bb(e, 8).ngClassInvalid,
              i.Bb(e, 8).ngClassPending
            ),
              t(
                e,
                15,
                0,
                i.Bb(e, 17).required ? '' : null,
                i.Bb(e, 22).ngClassUntouched,
                i.Bb(e, 22).ngClassTouched,
                i.Bb(e, 22).ngClassPristine,
                i.Bb(e, 22).ngClassDirty,
                i.Bb(e, 22).ngClassValid,
                i.Bb(e, 22).ngClassInvalid,
                i.Bb(e, 22).ngClassPending
              ),
              t(e, 41, 0, i.Bb(e, 20).invalid);
          }
        );
      }
      function At(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 1, 'app-large-device-error', [], null, null, null, yt.b, yt.a)),
            i.ob(1, 114688, null, 0, mt.a, [], null, null)
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      function St(t) {
        return i.Gb(
          0,
          [
            (t()(), i.eb(16777216, null, null, 1, null, Et)),
            i.ob(1, 16384, null, 0, gt.j, [i.M, i.J], { ngIf: [0, 'ngIf'] }, null),
            (t()(), i.eb(16777216, null, null, 1, null, At)),
            i.ob(3, 16384, null, 0, gt.j, [i.M, i.J], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.screenWidthService.screenWidth <= 450), t(e, 3, 0, n.screenWidthService.screenWidth > 450);
          },
          null
        );
      }
      var Pt = i.lb(
          'app-reporters-dashboard',
          Ct,
          function (t) {
            return i.Gb(
              0,
              [
                (t()(), i.pb(0, 0, null, null, 1, 'app-reporters-dashboard', [], null, null, null, St, Vt)),
                i.ob(1, 114688, null, 0, Ct, [kt, bt.a], null, null)
              ],
              function (t, e) {
                t(e, 1, 0);
              },
              null
            );
          },
          {},
          {},
          []
        ),
        Tt = n('fNgX'),
        Mt = n('iInd'),
        Dt = function t() {
          _classCallCheck(this, t);
        },
        It = n('Nv++'),
        xt = n('PCNd');
      n.d(e, 'ReportersDashboardModuleNgFactory', function () {
        return Nt;
      });
      var Nt = i.mb(r, [], function (t) {
        return i.yb([
          i.zb(512, i.j, i.X, [[8, [l.a, Pt, Tt.b, Tt.a]], [3, i.j], i.v]),
          i.zb(4608, gt.l, gt.k, [i.s, [2, gt.t]]),
          i.zb(4608, x, x, []),
          i.zb(1073742336, gt.b, gt.b, []),
          i.zb(1073742336, Mt.l, Mt.l, [
            [2, Mt.q],
            [2, Mt.k]
          ]),
          i.zb(1073742336, Dt, Dt, []),
          i.zb(1073742336, It.j, It.j, []),
          i.zb(1073742336, xt.a, xt.a, []),
          i.zb(1073742336, dt, dt, []),
          i.zb(1073742336, ft, ft, []),
          i.zb(1073742336, r, r, []),
          i.zb(
            1024,
            Mt.i,
            function () {
              return [[{ path: '', component: Ct }]];
            },
            []
          )
        ]);
      });
    }
  }
]);

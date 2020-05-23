(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    'J+gu': function (t, e, n) {
      'use strict';
      n.r(e);
      var i = n('8Y7J');
      class s {}
      var l = n('pMnS'),
        r = n('cUpR'),
        o = n('HDdC'),
        a = n('DH7j'),
        u = n('EY2u'),
        h = n('ZUHj'),
        c = n('l7GE'),
        d = n('lJxs');
      class p extends c.a {
        constructor(t, e) {
          super(t), (this.sources = e), (this.completed = 0), (this.haveValues = 0);
          const n = e.length;
          this.values = new Array(n);
          for (let i = 0; i < n; i++) {
            const t = e[i],
              n = Object(h.a)(this, t, null, i);
            n && this.add(n);
          }
        }
        notifyNext(t, e, n, i, s) {
          (this.values[n] = e), s._hasValue || ((s._hasValue = !0), this.haveValues++);
        }
        notifyComplete(t) {
          const { destination: e, haveValues: n, values: i } = this,
            s = i.length;
          t._hasValue ? (this.completed++, this.completed === s && (n === s && e.next(i), e.complete())) : e.complete();
        }
      }
      var g = n('Cfvw');
      const _ = new i.o('NgValueAccessor'),
        m = new i.o('CompositionEventMode');
      class f {
        constructor(t, e, n) {
          (this._renderer = t),
            (this._elementRef = e),
            (this._compositionMode = n),
            (this.onChange = (t) => {}),
            (this.onTouched = () => {}),
            (this._composing = !1),
            null == this._compositionMode &&
              (this._compositionMode = !(function () {
                const t = Object(r.r)() ? Object(r.r)().getUserAgent() : '';
                return /android (\d+)/.test(t.toLowerCase());
              })());
        }
        writeValue(t) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
        }
        registerOnChange(t) {
          this.onChange = t;
        }
        registerOnTouched(t) {
          this.onTouched = t;
        }
        setDisabledState(t) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
        }
        _handleInput(t) {
          (!this._compositionMode || (this._compositionMode && !this._composing)) && this.onChange(t);
        }
        _compositionStart() {
          this._composing = !0;
        }
        _compositionEnd(t) {
          (this._composing = !1), this._compositionMode && this.onChange(t);
        }
      }
      class v {
        get value() {
          return this.control ? this.control.value : null;
        }
        get valid() {
          return this.control ? this.control.valid : null;
        }
        get invalid() {
          return this.control ? this.control.invalid : null;
        }
        get pending() {
          return this.control ? this.control.pending : null;
        }
        get disabled() {
          return this.control ? this.control.disabled : null;
        }
        get enabled() {
          return this.control ? this.control.enabled : null;
        }
        get errors() {
          return this.control ? this.control.errors : null;
        }
        get pristine() {
          return this.control ? this.control.pristine : null;
        }
        get dirty() {
          return this.control ? this.control.dirty : null;
        }
        get touched() {
          return this.control ? this.control.touched : null;
        }
        get status() {
          return this.control ? this.control.status : null;
        }
        get untouched() {
          return this.control ? this.control.untouched : null;
        }
        get statusChanges() {
          return this.control ? this.control.statusChanges : null;
        }
        get valueChanges() {
          return this.control ? this.control.valueChanges : null;
        }
        get path() {
          return null;
        }
        reset(t) {
          this.control && this.control.reset(t);
        }
        hasError(t, e) {
          return !!this.control && this.control.hasError(t, e);
        }
        getError(t, e) {
          return this.control ? this.control.getError(t, e) : null;
        }
      }
      class b extends v {
        get formDirective() {
          return null;
        }
        get path() {
          return null;
        }
      }
      function C() {
        throw new Error('unimplemented');
      }
      class y extends v {
        constructor() {
          super(...arguments),
            (this._parent = null),
            (this.name = null),
            (this.valueAccessor = null),
            (this._rawValidators = []),
            (this._rawAsyncValidators = []);
        }
        get validator() {
          return C();
        }
        get asyncValidator() {
          return C();
        }
      }
      class V {
        constructor(t) {
          this._cd = t;
        }
        get ngClassUntouched() {
          return !!this._cd.control && this._cd.control.untouched;
        }
        get ngClassTouched() {
          return !!this._cd.control && this._cd.control.touched;
        }
        get ngClassPristine() {
          return !!this._cd.control && this._cd.control.pristine;
        }
        get ngClassDirty() {
          return !!this._cd.control && this._cd.control.dirty;
        }
        get ngClassValid() {
          return !!this._cd.control && this._cd.control.valid;
        }
        get ngClassInvalid() {
          return !!this._cd.control && this._cd.control.invalid;
        }
        get ngClassPending() {
          return !!this._cd.control && this._cd.control.pending;
        }
      }
      class E extends V {
        constructor(t) {
          super(t);
        }
      }
      class O extends V {
        constructor(t) {
          super(t);
        }
      }
      function w(t) {
        return null == t || 0 === t.length;
      }
      const A = new i.o('NgValidators'),
        S = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      class M {
        static min(t) {
          return (e) => {
            if (w(e.value) || w(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n < t ? { min: { min: t, actual: e.value } } : null;
          };
        }
        static max(t) {
          return (e) => {
            if (w(e.value) || w(t)) return null;
            const n = parseFloat(e.value);
            return !isNaN(n) && n > t ? { max: { max: t, actual: e.value } } : null;
          };
        }
        static required(t) {
          return w(t.value) ? { required: !0 } : null;
        }
        static requiredTrue(t) {
          return !0 === t.value ? null : { required: !0 };
        }
        static email(t) {
          return w(t.value) ? null : S.test(t.value) ? null : { email: !0 };
        }
        static minLength(t) {
          return (e) => {
            if (w(e.value)) return null;
            const n = e.value ? e.value.length : 0;
            return n < t ? { minlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static maxLength(t) {
          return (e) => {
            const n = e.value ? e.value.length : 0;
            return n > t ? { maxlength: { requiredLength: t, actualLength: n } } : null;
          };
        }
        static pattern(t) {
          if (!t) return M.nullValidator;
          let e, n;
          return (
            'string' == typeof t
              ? ((n = ''),
                '^' !== t.charAt(0) && (n += '^'),
                (n += t),
                '$' !== t.charAt(t.length - 1) && (n += '$'),
                (e = new RegExp(n)))
              : ((n = t.toString()), (e = t)),
            (t) => {
              if (w(t.value)) return null;
              const i = t.value;
              return e.test(i) ? null : { pattern: { requiredPattern: n, actualValue: i } };
            }
          );
        }
        static nullValidator(t) {
          return null;
        }
        static compose(t) {
          if (!t) return null;
          const e = t.filter(P);
          return 0 == e.length
            ? null
            : function (t) {
                return T(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e)
                );
              };
        }
        static composeAsync(t) {
          if (!t) return null;
          const e = t.filter(P);
          return 0 == e.length
            ? null
            : function (t) {
                return (function t(...e) {
                  let n;
                  return (
                    'function' == typeof e[e.length - 1] && (n = e.pop()),
                    1 === e.length && Object(a.a)(e[0]) && (e = e[0]),
                    0 === e.length ? u.a : n ? t(e).pipe(Object(d.a)((t) => n(...t))) : new o.a((t) => new p(t, e))
                  );
                })(
                  (function (t, e) {
                    return e.map((e) => e(t));
                  })(t, e).map(D)
                ).pipe(Object(d.a)(T));
              };
        }
      }
      function P(t) {
        return null != t;
      }
      function D(t) {
        const e = Object(i.wb)(t) ? Object(g.a)(t) : t;
        if (!Object(i.vb)(e)) throw new Error('Expected validator to return Promise or Observable.');
        return e;
      }
      function T(t) {
        const e = t.reduce((t, e) => (null != e ? Object.assign({}, t, e) : t), {});
        return 0 === Object.keys(e).length ? null : e;
      }
      function k(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      function x(t) {
        return t.validate ? (e) => t.validate(e) : t;
      }
      class N {
        constructor() {
          this._accessors = [];
        }
        add(t, e) {
          this._accessors.push([t, e]);
        }
        remove(t) {
          for (let e = this._accessors.length - 1; e >= 0; --e)
            if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1);
        }
        select(t) {
          this._accessors.forEach((e) => {
            this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value);
          });
        }
        _isSameGroup(t, e) {
          return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name;
        }
      }
      const I =
          '\n    <div [formGroup]="myGroup">\n       <div formGroupName="person">\n          <input formControlName="firstName">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });',
        F =
          '\n    <form>\n       <div ngModelGroup="person">\n          <input [(ngModel)]="person.name" name="firstName">\n       </div>\n    </form>';
      function G(t, e) {
        return null == t ? `${e}` : (e && 'object' == typeof e && (e = 'Object'), `${t}: ${e}`.slice(0, 50));
      }
      class j {
        constructor(t, e, n) {
          (this._element = t),
            (this._renderer = e),
            (this._select = n),
            this._select && (this.id = this._select._registerOption());
        }
        set ngValue(t) {
          null != this._select &&
            (this._select._optionMap.set(this.id, t),
            this._setElementValue(G(this.id, t)),
            this._select.writeValue(this._select.value));
        }
        set value(t) {
          this._setElementValue(t), this._select && this._select.writeValue(this._select.value);
        }
        _setElementValue(t) {
          this._renderer.setProperty(this._element.nativeElement, 'value', t);
        }
        ngOnDestroy() {
          this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
        }
      }
      function B(t, e) {
        return null == t
          ? `${e}`
          : ('string' == typeof e && (e = `'${e}'`),
            e && 'object' == typeof e && (e = 'Object'),
            `${t}: ${e}`.slice(0, 50));
      }
      class U {
        constructor(t, e, n) {
          (this._element = t),
            (this._renderer = e),
            (this._select = n),
            this._select && (this.id = this._select._registerOption(this));
        }
        set ngValue(t) {
          null != this._select &&
            ((this._value = t), this._setElementValue(B(this.id, t)), this._select.writeValue(this._select.value));
        }
        set value(t) {
          this._select
            ? ((this._value = t), this._setElementValue(B(this.id, t)), this._select.writeValue(this._select.value))
            : this._setElementValue(t);
        }
        _setElementValue(t) {
          this._renderer.setProperty(this._element.nativeElement, 'value', t);
        }
        _setSelected(t) {
          this._renderer.setProperty(this._element.nativeElement, 'selected', t);
        }
        ngOnDestroy() {
          this._select && (this._select._optionMap.delete(this.id), this._select.writeValue(this._select.value));
        }
      }
      function $(t, e) {
        return [...e.path, t];
      }
      function R(t, e) {
        t || L(e, 'Cannot find control with'),
          e.valueAccessor || L(e, 'No value accessor for form control with'),
          (t.validator = M.compose([t.validator, e.validator])),
          (t.asyncValidator = M.composeAsync([t.asyncValidator, e.asyncValidator])),
          e.valueAccessor.writeValue(t.value),
          (function (t, e) {
            e.valueAccessor.registerOnChange((n) => {
              (t._pendingValue = n),
                (t._pendingChange = !0),
                (t._pendingDirty = !0),
                'change' === t.updateOn && q(t, e);
            });
          })(t, e),
          (function (t, e) {
            t.registerOnChange((t, n) => {
              e.valueAccessor.writeValue(t), n && e.viewToModelUpdate(t);
            });
          })(t, e),
          (function (t, e) {
            e.valueAccessor.registerOnTouched(() => {
              (t._pendingTouched = !0),
                'blur' === t.updateOn && t._pendingChange && q(t, e),
                'submit' !== t.updateOn && t.markAsTouched();
            });
          })(t, e),
          e.valueAccessor.setDisabledState &&
            t.registerOnDisabledChange((t) => {
              e.valueAccessor.setDisabledState(t);
            }),
          e._rawValidators.forEach((e) => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          }),
          e._rawAsyncValidators.forEach((e) => {
            e.registerOnValidatorChange && e.registerOnValidatorChange(() => t.updateValueAndValidity());
          });
      }
      function q(t, e) {
        t._pendingDirty && t.markAsDirty(),
          t.setValue(t._pendingValue, { emitModelToViewChange: !1 }),
          e.viewToModelUpdate(t._pendingValue),
          (t._pendingChange = !1);
      }
      function L(t, e) {
        let n;
        throw (
          ((n =
            t.path.length > 1
              ? `path: '${t.path.join(' -> ')}'`
              : t.path[0]
              ? `name: '${t.path}'`
              : 'unspecified name attribute'),
          new Error(`${e} ${n}`))
        );
      }
      function z(t) {
        return null != t ? M.compose(t.map(k)) : null;
      }
      function W(t) {
        return null != t ? M.composeAsync(t.map(x)) : null;
      }
      const J = [
        class {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'checked', t);
          }
          registerOnChange(t) {
            this.onChange = t;
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', parseFloat(t));
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, e) {
            (this._renderer = t), (this._elementRef = e), (this.onChange = (t) => {}), (this.onTouched = () => {});
          }
          writeValue(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', null == t ? '' : t);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              t('' == e ? null : parseFloat(e));
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
        },
        class {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = i.xb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            this.value = t;
            const e = this._getOptionId(t);
            null == e && this._renderer.setProperty(this._elementRef.nativeElement, 'selectedIndex', -1);
            const n = G(e, t);
            this._renderer.setProperty(this._elementRef.nativeElement, 'value', n);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              (this.value = this._getOptionValue(e)), t(this.value);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption() {
            return (this._idCounter++).toString();
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e), t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e) : t;
          }
        },
        class {
          constructor(t, e) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._optionMap = new Map()),
              (this._idCounter = 0),
              (this.onChange = (t) => {}),
              (this.onTouched = () => {}),
              (this._compareWith = i.xb);
          }
          set compareWith(t) {
            if ('function' != typeof t)
              throw new Error(`compareWith must be a function, but received ${JSON.stringify(t)}`);
            this._compareWith = t;
          }
          writeValue(t) {
            let e;
            if (((this.value = t), Array.isArray(t))) {
              const n = t.map((t) => this._getOptionId(t));
              e = (t, e) => {
                t._setSelected(n.indexOf(e.toString()) > -1);
              };
            } else
              e = (t, e) => {
                t._setSelected(!1);
              };
            this._optionMap.forEach(e);
          }
          registerOnChange(t) {
            this.onChange = (e) => {
              const n = [];
              if (e.hasOwnProperty('selectedOptions')) {
                const t = e.selectedOptions;
                for (let e = 0; e < t.length; e++) {
                  const i = t.item(e),
                    s = this._getOptionValue(i.value);
                  n.push(s);
                }
              } else {
                const t = e.options;
                for (let e = 0; e < t.length; e++) {
                  const i = t.item(e);
                  if (i.selected) {
                    const t = this._getOptionValue(i.value);
                    n.push(t);
                  }
                }
              }
              (this.value = n), t(n);
            };
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _registerOption(t) {
            const e = (this._idCounter++).toString();
            return this._optionMap.set(e, t), e;
          }
          _getOptionId(t) {
            for (const e of Array.from(this._optionMap.keys()))
              if (this._compareWith(this._optionMap.get(e)._value, t)) return e;
            return null;
          }
          _getOptionValue(t) {
            const e = (function (t) {
              return t.split(':')[0];
            })(t);
            return this._optionMap.has(e) ? this._optionMap.get(e)._value : t;
          }
        },
        class {
          constructor(t, e, n, i) {
            (this._renderer = t),
              (this._elementRef = e),
              (this._registry = n),
              (this._injector = i),
              (this.onChange = () => {}),
              (this.onTouched = () => {});
          }
          ngOnInit() {
            (this._control = this._injector.get(y)), this._checkName(), this._registry.add(this._control, this);
          }
          ngOnDestroy() {
            this._registry.remove(this);
          }
          writeValue(t) {
            (this._state = t === this.value),
              this._renderer.setProperty(this._elementRef.nativeElement, 'checked', this._state);
          }
          registerOnChange(t) {
            (this._fn = t),
              (this.onChange = () => {
                t(this.value), this._registry.select(this);
              });
          }
          fireUncheck(t) {
            this.writeValue(t);
          }
          registerOnTouched(t) {
            this.onTouched = t;
          }
          setDisabledState(t) {
            this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', t);
          }
          _checkName() {
            this.name && this.formControlName && this.name !== this.formControlName && this._throwNameError(),
              !this.name && this.formControlName && (this.name = this.formControlName);
          }
          _throwNameError() {
            throw new Error(
              '\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type="radio" formControlName="food" name="food">\n    '
            );
          }
        }
      ];
      function Z(t) {
        const e = K(t) ? t.validators : t;
        return Array.isArray(e) ? z(e) : e || null;
      }
      function H(t, e) {
        const n = K(e) ? e.asyncValidators : t;
        return Array.isArray(n) ? W(n) : n || null;
      }
      function K(t) {
        return null != t && !Array.isArray(t) && 'object' == typeof t;
      }
      class X {
        constructor(t, e) {
          (this.validator = t),
            (this.asyncValidator = e),
            (this._onCollectionChange = () => {}),
            (this.pristine = !0),
            (this.touched = !1),
            (this._onDisabledChange = []);
        }
        get parent() {
          return this._parent;
        }
        get valid() {
          return 'VALID' === this.status;
        }
        get invalid() {
          return 'INVALID' === this.status;
        }
        get pending() {
          return 'PENDING' == this.status;
        }
        get disabled() {
          return 'DISABLED' === this.status;
        }
        get enabled() {
          return 'DISABLED' !== this.status;
        }
        get dirty() {
          return !this.pristine;
        }
        get untouched() {
          return !this.touched;
        }
        get updateOn() {
          return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
        }
        setValidators(t) {
          this.validator = Z(t);
        }
        setAsyncValidators(t) {
          this.asyncValidator = H(t);
        }
        clearValidators() {
          this.validator = null;
        }
        clearAsyncValidators() {
          this.asyncValidator = null;
        }
        markAsTouched(t = {}) {
          (this.touched = !0), this._parent && !t.onlySelf && this._parent.markAsTouched(t);
        }
        markAllAsTouched() {
          this.markAsTouched({ onlySelf: !0 }), this._forEachChild((t) => t.markAllAsTouched());
        }
        markAsUntouched(t = {}) {
          (this.touched = !1),
            (this._pendingTouched = !1),
            this._forEachChild((t) => {
              t.markAsUntouched({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        markAsDirty(t = {}) {
          (this.pristine = !1), this._parent && !t.onlySelf && this._parent.markAsDirty(t);
        }
        markAsPristine(t = {}) {
          (this.pristine = !0),
            (this._pendingDirty = !1),
            this._forEachChild((t) => {
              t.markAsPristine({ onlySelf: !0 });
            }),
            this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        markAsPending(t = {}) {
          (this.status = 'PENDING'),
            !1 !== t.emitEvent && this.statusChanges.emit(this.status),
            this._parent && !t.onlySelf && this._parent.markAsPending(t);
        }
        disable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'DISABLED'),
            (this.errors = null),
            this._forEachChild((e) => {
              e.disable(Object.assign({}, t, { onlySelf: !0 }));
            }),
            this._updateValue(),
            !1 !== t.emitEvent && (this.valueChanges.emit(this.value), this.statusChanges.emit(this.status)),
            this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
            this._onDisabledChange.forEach((t) => t(!0));
        }
        enable(t = {}) {
          const e = this._parentMarkedDirty(t.onlySelf);
          (this.status = 'VALID'),
            this._forEachChild((e) => {
              e.enable(Object.assign({}, t, { onlySelf: !0 }));
            }),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent }),
            this._updateAncestors(Object.assign({}, t, { skipPristineCheck: e })),
            this._onDisabledChange.forEach((t) => t(!1));
        }
        _updateAncestors(t) {
          this._parent &&
            !t.onlySelf &&
            (this._parent.updateValueAndValidity(t),
            t.skipPristineCheck || this._parent._updatePristine(),
            this._parent._updateTouched());
        }
        setParent(t) {
          this._parent = t;
        }
        updateValueAndValidity(t = {}) {
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
        _updateTreeValidity(t = { emitEvent: !0 }) {
          this._forEachChild((e) => e._updateTreeValidity(t)),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: t.emitEvent });
        }
        _setInitialStatus() {
          this.status = this._allControlsDisabled() ? 'DISABLED' : 'VALID';
        }
        _runValidator() {
          return this.validator ? this.validator(this) : null;
        }
        _runAsyncValidator(t) {
          if (this.asyncValidator) {
            this.status = 'PENDING';
            const e = D(this.asyncValidator(this));
            this._asyncValidationSubscription = e.subscribe((e) => this.setErrors(e, { emitEvent: t }));
          }
        }
        _cancelExistingSubscription() {
          this._asyncValidationSubscription && this._asyncValidationSubscription.unsubscribe();
        }
        setErrors(t, e = {}) {
          (this.errors = t), this._updateControlsErrors(!1 !== e.emitEvent);
        }
        get(t) {
          return (function (t, e, n) {
            return null == e
              ? null
              : (e instanceof Array || (e = e.split('.')),
                e instanceof Array && 0 === e.length
                  ? null
                  : e.reduce(
                      (t, e) =>
                        t instanceof Q
                          ? t.controls.hasOwnProperty(e)
                            ? t.controls[e]
                            : null
                          : (t instanceof tt && t.at(e)) || null,
                      t
                    ));
          })(this, t);
        }
        getError(t, e) {
          const n = e ? this.get(e) : this;
          return n && n.errors ? n.errors[t] : null;
        }
        hasError(t, e) {
          return !!this.getError(t, e);
        }
        get root() {
          let t = this;
          for (; t._parent; ) t = t._parent;
          return t;
        }
        _updateControlsErrors(t) {
          (this.status = this._calculateStatus()),
            t && this.statusChanges.emit(this.status),
            this._parent && this._parent._updateControlsErrors(t);
        }
        _initObservables() {
          (this.valueChanges = new i.m()), (this.statusChanges = new i.m());
        }
        _calculateStatus() {
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
        _anyControlsHaveStatus(t) {
          return this._anyControls((e) => e.status === t);
        }
        _anyControlsDirty() {
          return this._anyControls((t) => t.dirty);
        }
        _anyControlsTouched() {
          return this._anyControls((t) => t.touched);
        }
        _updatePristine(t = {}) {
          (this.pristine = !this._anyControlsDirty()), this._parent && !t.onlySelf && this._parent._updatePristine(t);
        }
        _updateTouched(t = {}) {
          (this.touched = this._anyControlsTouched()), this._parent && !t.onlySelf && this._parent._updateTouched(t);
        }
        _isBoxedValue(t) {
          return 'object' == typeof t && null !== t && 2 === Object.keys(t).length && 'value' in t && 'disabled' in t;
        }
        _registerOnCollectionChange(t) {
          this._onCollectionChange = t;
        }
        _setUpdateStrategy(t) {
          K(t) && null != t.updateOn && (this._updateOn = t.updateOn);
        }
        _parentMarkedDirty(t) {
          return !t && this._parent && this._parent.dirty && !this._parent._anyControlsDirty();
        }
      }
      class Y extends X {
        constructor(t = null, e, n) {
          super(Z(e), H(n, e)),
            (this._onChange = []),
            this._applyFormState(t),
            this._setUpdateStrategy(e),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 }),
            this._initObservables();
        }
        setValue(t, e = {}) {
          (this.value = this._pendingValue = t),
            this._onChange.length &&
              !1 !== e.emitModelToViewChange &&
              this._onChange.forEach((t) => t(this.value, !1 !== e.emitViewToModelChange)),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          this.setValue(t, e);
        }
        reset(t = null, e = {}) {
          this._applyFormState(t),
            this.markAsPristine(e),
            this.markAsUntouched(e),
            this.setValue(this.value, e),
            (this._pendingChange = !1);
        }
        _updateValue() {}
        _anyControls(t) {
          return !1;
        }
        _allControlsDisabled() {
          return this.disabled;
        }
        registerOnChange(t) {
          this._onChange.push(t);
        }
        _clearChangeFns() {
          (this._onChange = []), (this._onDisabledChange = []), (this._onCollectionChange = () => {});
        }
        registerOnDisabledChange(t) {
          this._onDisabledChange.push(t);
        }
        _forEachChild(t) {}
        _syncPendingControls() {
          return !(
            'submit' !== this.updateOn ||
            (this._pendingDirty && this.markAsDirty(),
            this._pendingTouched && this.markAsTouched(),
            !this._pendingChange) ||
            (this.setValue(this._pendingValue, { onlySelf: !0, emitModelToViewChange: !1 }), 0)
          );
        }
        _applyFormState(t) {
          this._isBoxedValue(t)
            ? ((this.value = this._pendingValue = t.value),
              t.disabled ? this.disable({ onlySelf: !0, emitEvent: !1 }) : this.enable({ onlySelf: !0, emitEvent: !1 }))
            : (this.value = this._pendingValue = t);
        }
      }
      class Q extends X {
        constructor(t, e, n) {
          super(Z(e), H(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        registerControl(t, e) {
          return this.controls[t]
            ? this.controls[t]
            : ((this.controls[t] = e), e.setParent(this), e._registerOnCollectionChange(this._onCollectionChange), e);
        }
        addControl(t, e) {
          this.registerControl(t, e), this.updateValueAndValidity(), this._onCollectionChange();
        }
        removeControl(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            delete this.controls[t],
            e && this.registerControl(t, e),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        contains(t) {
          return this.controls.hasOwnProperty(t) && this.controls[t].enabled;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            Object.keys(t).forEach((n) => {
              this._throwIfControlMissing(n), this.controls[n].setValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          Object.keys(t).forEach((n) => {
            this.controls[n] && this.controls[n].patchValue(t[n], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = {}, e = {}) {
          this._forEachChild((n, i) => {
            n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this._reduceChildren({}, (t, e, n) => ((t[n] = e instanceof Y ? e.value : e.getRawValue()), t));
        }
        _syncPendingControls() {
          let t = this._reduceChildren(!1, (t, e) => !!e._syncPendingControls() || t);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!Object.keys(this.controls).length)
            throw new Error(
              "\n        There are no form controls registered with this group yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.controls[t]) throw new Error(`Cannot find form control with name: ${t}.`);
        }
        _forEachChild(t) {
          Object.keys(this.controls).forEach((e) => t(this.controls[e], e));
        }
        _setUpControls() {
          this._forEachChild((t) => {
            t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
          });
        }
        _updateValue() {
          this.value = this._reduceValue();
        }
        _anyControls(t) {
          let e = !1;
          return (
            this._forEachChild((n, i) => {
              e = e || (this.contains(i) && t(n));
            }),
            e
          );
        }
        _reduceValue() {
          return this._reduceChildren({}, (t, e, n) => ((e.enabled || this.disabled) && (t[n] = e.value), t));
        }
        _reduceChildren(t, e) {
          let n = t;
          return (
            this._forEachChild((t, i) => {
              n = e(n, t, i);
            }),
            n
          );
        }
        _allControlsDisabled() {
          for (const t of Object.keys(this.controls)) if (this.controls[t].enabled) return !1;
          return Object.keys(this.controls).length > 0 || this.disabled;
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control with name: '${n}'.`);
          });
        }
      }
      class tt extends X {
        constructor(t, e, n) {
          super(Z(e), H(n, e)),
            (this.controls = t),
            this._initObservables(),
            this._setUpdateStrategy(e),
            this._setUpControls(),
            this.updateValueAndValidity({ onlySelf: !0, emitEvent: !1 });
        }
        at(t) {
          return this.controls[t];
        }
        push(t) {
          this.controls.push(t), this._registerControl(t), this.updateValueAndValidity(), this._onCollectionChange();
        }
        insert(t, e) {
          this.controls.splice(t, 0, e), this._registerControl(e), this.updateValueAndValidity();
        }
        removeAt(t) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            this.updateValueAndValidity();
        }
        setControl(t, e) {
          this.controls[t] && this.controls[t]._registerOnCollectionChange(() => {}),
            this.controls.splice(t, 1),
            e && (this.controls.splice(t, 0, e), this._registerControl(e)),
            this.updateValueAndValidity(),
            this._onCollectionChange();
        }
        get length() {
          return this.controls.length;
        }
        setValue(t, e = {}) {
          this._checkAllValuesPresent(t),
            t.forEach((t, n) => {
              this._throwIfControlMissing(n), this.at(n).setValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
            }),
            this.updateValueAndValidity(e);
        }
        patchValue(t, e = {}) {
          t.forEach((t, n) => {
            this.at(n) && this.at(n).patchValue(t, { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this.updateValueAndValidity(e);
        }
        reset(t = [], e = {}) {
          this._forEachChild((n, i) => {
            n.reset(t[i], { onlySelf: !0, emitEvent: e.emitEvent });
          }),
            this._updatePristine(e),
            this._updateTouched(e),
            this.updateValueAndValidity(e);
        }
        getRawValue() {
          return this.controls.map((t) => (t instanceof Y ? t.value : t.getRawValue()));
        }
        clear() {
          this.controls.length < 1 ||
            (this._forEachChild((t) => t._registerOnCollectionChange(() => {})),
            this.controls.splice(0),
            this.updateValueAndValidity());
        }
        _syncPendingControls() {
          let t = this.controls.reduce((t, e) => !!e._syncPendingControls() || t, !1);
          return t && this.updateValueAndValidity({ onlySelf: !0 }), t;
        }
        _throwIfControlMissing(t) {
          if (!this.controls.length)
            throw new Error(
              "\n        There are no form controls registered with this array yet.  If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      "
            );
          if (!this.at(t)) throw new Error(`Cannot find form control at index ${t}`);
        }
        _forEachChild(t) {
          this.controls.forEach((e, n) => {
            t(e, n);
          });
        }
        _updateValue() {
          this.value = this.controls.filter((t) => t.enabled || this.disabled).map((t) => t.value);
        }
        _anyControls(t) {
          return this.controls.some((e) => e.enabled && t(e));
        }
        _setUpControls() {
          this._forEachChild((t) => this._registerControl(t));
        }
        _checkAllValuesPresent(t) {
          this._forEachChild((e, n) => {
            if (void 0 === t[n]) throw new Error(`Must supply a value for form control at index: ${n}.`);
          });
        }
        _allControlsDisabled() {
          for (const t of this.controls) if (t.enabled) return !1;
          return this.controls.length > 0 || this.disabled;
        }
        _registerControl(t) {
          t.setParent(this), t._registerOnCollectionChange(this._onCollectionChange);
        }
      }
      const et = (() => Promise.resolve(null))();
      class nt extends b {
        constructor(t, e) {
          super(),
            (this.submitted = !1),
            (this._directives = []),
            (this.ngSubmit = new i.m()),
            (this.form = new Q({}, z(t), W(e)));
        }
        ngAfterViewInit() {
          this._setUpdateStrategy();
        }
        get formDirective() {
          return this;
        }
        get control() {
          return this.form;
        }
        get path() {
          return [];
        }
        get controls() {
          return this.form.controls;
        }
        addControl(t) {
          et.then(() => {
            const e = this._findContainer(t.path);
            (t.control = e.registerControl(t.name, t.control)),
              R(t.control, t),
              t.control.updateValueAndValidity({ emitEvent: !1 }),
              this._directives.push(t);
          });
        }
        getControl(t) {
          return this.form.get(t.path);
        }
        removeControl(t) {
          et.then(() => {
            const e = this._findContainer(t.path);
            e && e.removeControl(t.name),
              (function (t, e) {
                const n = t.indexOf(e);
                n > -1 && t.splice(n, 1);
              })(this._directives, t);
          });
        }
        addFormGroup(t) {
          et.then(() => {
            const e = this._findContainer(t.path),
              n = new Q({});
            (function (t, e) {
              null == t && L(e, 'Cannot find control with'),
                (t.validator = M.compose([t.validator, e.validator])),
                (t.asyncValidator = M.composeAsync([t.asyncValidator, e.asyncValidator]));
            })(n, t),
              e.registerControl(t.name, n),
              n.updateValueAndValidity({ emitEvent: !1 });
          });
        }
        removeFormGroup(t) {
          et.then(() => {
            const e = this._findContainer(t.path);
            e && e.removeControl(t.name);
          });
        }
        getFormGroup(t) {
          return this.form.get(t.path);
        }
        updateModel(t, e) {
          et.then(() => {
            this.form.get(t.path).setValue(e);
          });
        }
        setValue(t) {
          this.control.setValue(t);
        }
        onSubmit(t) {
          return (
            (this.submitted = !0),
            (e = this._directives),
            this.form._syncPendingControls(),
            e.forEach((t) => {
              const e = t.control;
              'submit' === e.updateOn &&
                e._pendingChange &&
                (t.viewToModelUpdate(e._pendingValue), (e._pendingChange = !1));
            }),
            this.ngSubmit.emit(t),
            !1
          );
          var e;
        }
        onReset() {
          this.resetForm();
        }
        resetForm(t) {
          this.form.reset(t), (this.submitted = !1);
        }
        _setUpdateStrategy() {
          this.options && null != this.options.updateOn && (this.form._updateOn = this.options.updateOn);
        }
        _findContainer(t) {
          return t.pop(), t.length ? this.form.get(t) : this.form;
        }
      }
      class it {
        static modelParentException() {
          throw new Error(
            '\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup\'s partner directive "formControlName" instead.  Example:\n\n      \n    <div [formGroup]="myGroup">\n      <input formControlName="firstName">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });\n\n      Or, if you\'d like to avoid registering this form control, indicate that it\'s standalone in ngModelOptions:\n\n      Example:\n\n      \n    <div [formGroup]="myGroup">\n       <input formControlName="firstName">\n       <input [(ngModel)]="showMoreControls" [ngModelOptions]="{standalone: true}">\n    </div>\n  '
          );
        }
        static formGroupNameException() {
          throw new Error(
            `\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ${I}\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ${F}`
          );
        }
        static missingNameException() {
          throw new Error(
            'If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as \'standalone\' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]="person.firstName" name="first">\n      Example 2: <input [(ngModel)]="person.firstName" [ngModelOptions]="{standalone: true}">'
          );
        }
        static modelGroupParentException() {
          throw new Error(
            `\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ${I}\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ${F}`
          );
        }
        static ngFormWarning() {
          console.warn(
            "\n    It looks like you're using 'ngForm'.\n\n    Support for using the 'ngForm' element selector has been deprecated in Angular v6 and will be removed\n    in Angular v9.\n\n    Use 'ng-form' instead.\n\n    Before:\n    <ngForm #myForm=\"ngForm\">\n\n    After:\n    <ng-form #myForm=\"ngForm\">\n    "
          );
        }
      }
      const st = new i.o('NgFormSelectorWarning');
      class lt extends b {
        ngOnInit() {
          this._checkParentType(), this.formDirective.addFormGroup(this);
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeFormGroup(this);
        }
        get control() {
          return this.formDirective.getFormGroup(this);
        }
        get path() {
          return $(this.name, this._parent);
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return z(this._validators);
        }
        get asyncValidator() {
          return W(this._asyncValidators);
        }
        _checkParentType() {}
      }
      class rt extends lt {
        constructor(t, e, n) {
          super(), (this._parent = t), (this._validators = e), (this._asyncValidators = n);
        }
        _checkParentType() {
          this._parent instanceof rt || this._parent instanceof nt || it.modelGroupParentException();
        }
      }
      const ot = (() => Promise.resolve(null))();
      class at extends y {
        constructor(t, e, n, s) {
          super(),
            (this.control = new Y()),
            (this._registered = !1),
            (this.update = new i.m()),
            (this._parent = t),
            (this._rawValidators = e || []),
            (this._rawAsyncValidators = n || []),
            (this.valueAccessor = (function (t, e) {
              if (!e) return null;
              Array.isArray(e) || L(t, 'Value accessor was not provided as an array for form control with');
              let n = void 0,
                i = void 0,
                s = void 0;
              return (
                e.forEach((e) => {
                  var l;
                  e.constructor === f
                    ? (n = e)
                    : ((l = e),
                      J.some((t) => l.constructor === t)
                        ? (i && L(t, 'More than one built-in value accessor matches form control with'), (i = e))
                        : (s && L(t, 'More than one custom value accessor matches form control with'), (s = e)));
                }),
                s || i || n || (L(t, 'No valid value accessor for form control with'), null)
              );
            })(this, s));
        }
        ngOnChanges(t) {
          this._checkForErrors(),
            this._registered || this._setUpControl(),
            'isDisabled' in t && this._updateDisabled(t),
            (function (t, e) {
              if (!t.hasOwnProperty('model')) return !1;
              const n = t.model;
              return !!n.isFirstChange() || !Object(i.xb)(e, n.currentValue);
            })(t, this.viewModel) && (this._updateValue(this.model), (this.viewModel = this.model));
        }
        ngOnDestroy() {
          this.formDirective && this.formDirective.removeControl(this);
        }
        get path() {
          return this._parent ? $(this.name, this._parent) : [this.name];
        }
        get formDirective() {
          return this._parent ? this._parent.formDirective : null;
        }
        get validator() {
          return z(this._rawValidators);
        }
        get asyncValidator() {
          return W(this._rawAsyncValidators);
        }
        viewToModelUpdate(t) {
          (this.viewModel = t), this.update.emit(t);
        }
        _setUpControl() {
          this._setUpdateStrategy(),
            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this),
            (this._registered = !0);
        }
        _setUpdateStrategy() {
          this.options && null != this.options.updateOn && (this.control._updateOn = this.options.updateOn);
        }
        _isStandalone() {
          return !this._parent || !(!this.options || !this.options.standalone);
        }
        _setUpStandalone() {
          R(this.control, this), this.control.updateValueAndValidity({ emitEvent: !1 });
        }
        _checkForErrors() {
          this._isStandalone() || this._checkParentType(), this._checkName();
        }
        _checkParentType() {
          !(this._parent instanceof rt) && this._parent instanceof lt
            ? it.formGroupNameException()
            : this._parent instanceof rt || this._parent instanceof nt || it.modelParentException();
        }
        _checkName() {
          this.options && this.options.name && (this.name = this.options.name),
            this._isStandalone() || this.name || it.missingNameException();
        }
        _updateValue(t) {
          ot.then(() => {
            this.control.setValue(t, { emitViewToModelChange: !1 });
          });
        }
        _updateDisabled(t) {
          const e = t.isDisabled.currentValue,
            n = '' === e || (e && 'false' !== e);
          ot.then(() => {
            n && !this.control.disabled ? this.control.disable() : !n && this.control.disabled && this.control.enable();
          });
        }
      }
      class ut {}
      class ht {
        get required() {
          return this._required;
        }
        set required(t) {
          (this._required = null != t && !1 !== t && 'false' !== `${t}`), this._onChange && this._onChange();
        }
        validate(t) {
          return this.required ? M.required(t) : null;
        }
        registerOnValidatorChange(t) {
          this._onChange = t;
        }
      }
      class ct {}
      class dt {
        static withConfig(t) {
          return { ngModule: dt, providers: [{ provide: st, useValue: t.warnOnDeprecatedNgFormSelector }] };
        }
      }
      var pt = n('VTKs'),
        gt = n('EtQq'),
        _t = n('KDUW'),
        mt = n('SVse'),
        ft = n('0LF7'),
        vt = n('kBGf');
      class bt {
        constructor(t, e) {
          (this.reportService = t),
            (this.screenWidthService = e),
            (this.incidentComment = ''),
            (this.listOfTags = ['fire', 'accident', 'water']),
            (this.selectedTags = []);
        }
        ngOnInit() {
          this.reportService.incidentComment &&
            ((this.incidentComment = this.reportService.incidentComment),
            (this.selectedTags = this.reportService.selectedTags));
        }
        selectTag(t) {
          this.selectedTags.includes(t) || (this.selectedTags.unshift(t), console.log(this.selectedTags));
        }
        removeTag(t) {
          (this.selectedTags = this.selectedTags.filter((e) => e !== t)), console.log(this.selectedTags);
        }
        submitForm(t) {
          this.reportService.setInfo(t, this.selectedTags);
        }
      }
      let Ct = (() => {
        class t {
          constructor() {
            (this.incidentComment = ''), (this.selectedTags = []);
          }
          setInfo(t, e) {
            (this.incidentComment = t), (this.selectedTags = e);
          }
        }
        return (
          (t.ngInjectableDef = i.Kb({
            factory: function () {
              return new t();
            },
            token: t,
            providedIn: 'root'
          })),
          t
        );
      })();
      var yt = n('6C7I'),
        Vt = i.nb({
          encapsulation: 0,
          styles: [
            [
              '.main[_ngcontent-%COMP%]{min-height:87%;padding:0 15px}.main[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#ff4848;font-weight:700;margin-bottom:10px}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700;margin-bottom:10px;color:#444;display:block}.main[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border-radius:4px;border:1px solid #a0a0a0;width:96%;padding:10px 0 0 10px;margin-bottom:20px}.main[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;padding:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]{display:flex;list-style:none;flex-wrap:wrap;margin:0;padding:0}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:50px;background-color:#ff4848;color:#fff;padding:8px 15px;font-weight:700;margin-right:10px;margin-top:15px}.main[_ngcontent-%COMP%]   ul.selected-tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border-radius:100px;color:#ff4848;background-color:#fff;padding:2px 7px;margin-left:10px;cursor:pointer}.main[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;color:#fff;font-size:16px;font-weight:700;background-color:#10d610;padding:19px;border:none;margin-top:30px}.main[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{background-color:#9e9e9e}'
            ]
          ],
          data: {}
        });
      function Et(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 3, 'option', [], null, null, null, null, null)),
            i.ob(1, 147456, null, 0, j, [i.k, i.B, [8, null]], { value: [0, 'value'] }, null),
            i.ob(2, 147456, null, 0, U, [i.k, i.B, [8, null]], { value: [0, 'value'] }, null),
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
      function Ot(t) {
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
      function wt(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 42, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(1, 0, null, null, 1, 'app-navbar', [], null, null, null, pt.b, pt.a)),
            i.ob(2, 114688, null, 0, gt.a, [_t.a], null, null),
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
                var s = !0,
                  l = t.component;
                return (
                  'submit' === e && (s = !1 !== i.Bb(t, 6).onSubmit(n) && s),
                  'reset' === e && (s = !1 !== i.Bb(t, 6).onReset() && s),
                  'ngSubmit' === e && (s = !1 !== l.submitForm(i.Bb(t, 6).value) && s),
                  s
                );
              },
              null,
              null
            )),
            i.ob(5, 16384, null, 0, ut, [], null, null),
            i.ob(
              6,
              4210688,
              [['form', 4]],
              0,
              nt,
              [
                [8, null],
                [8, null]
              ],
              null,
              { ngSubmit: 'ngSubmit' }
            ),
            i.Db(2048, null, b, null, [nt]),
            i.ob(8, 16384, null, 0, O, [[4, b]], null, null),
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
                var s = !0,
                  l = t.component;
                return (
                  'input' === e && (s = !1 !== i.Bb(t, 16)._handleInput(n.target.value) && s),
                  'blur' === e && (s = !1 !== i.Bb(t, 16).onTouched() && s),
                  'compositionstart' === e && (s = !1 !== i.Bb(t, 16)._compositionStart() && s),
                  'compositionend' === e && (s = !1 !== i.Bb(t, 16)._compositionEnd(n.target.value) && s),
                  'ngModelChange' === e && (s = !1 !== (l.incidentComment = n) && s),
                  s
                );
              },
              null,
              null
            )),
            i.ob(16, 16384, null, 0, f, [i.B, i.k, [2, m]], null, null),
            i.ob(17, 16384, null, 0, ht, [], { required: [0, 'required'] }, null),
            i.Db(
              1024,
              null,
              A,
              function (t) {
                return [t];
              },
              [ht]
            ),
            i.Db(
              1024,
              null,
              _,
              function (t) {
                return [t];
              },
              [f]
            ),
            i.ob(
              20,
              671744,
              [['comment', 4]],
              0,
              at,
              [
                [2, b],
                [6, A],
                [8, null],
                [6, _]
              ],
              { name: [0, 'name'], model: [1, 'model'] },
              { update: 'ngModelChange' }
            ),
            i.Db(2048, null, y, null, [at]),
            i.ob(22, 16384, null, 0, E, [[4, y]], null, null),
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
            i.ob(32, 147456, null, 0, j, [i.k, i.B, [8, null]], null, null),
            i.ob(33, 147456, null, 0, U, [i.k, i.B, [8, null]], null, null),
            (t()(), i.Fb(-1, null, ['Select Tags'])),
            (t()(), i.eb(16777216, null, null, 1, null, Et)),
            i.ob(36, 278528, null, 0, mt.i, [i.M, i.J, i.q], { ngForOf: [0, 'ngForOf'] }, null),
            (t()(), i.pb(37, 0, null, null, 3, 'div', [], null, null, null, null, null)),
            (t()(), i.pb(38, 0, null, null, 2, 'ul', [['class', 'selected-tags-list']], null, null, null, null, null)),
            (t()(), i.eb(16777216, null, null, 1, null, Ot)),
            i.ob(40, 278528, null, 0, mt.i, [i.M, i.J, i.q], { ngForOf: [0, 'ngForOf'] }, null),
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
            (t()(), i.pb(0, 0, null, null, 1, 'app-large-device-error', [], null, null, null, ft.b, ft.a)),
            i.ob(1, 114688, null, 0, vt.a, [], null, null)
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
            (t()(), i.eb(16777216, null, null, 1, null, wt)),
            i.ob(1, 16384, null, 0, mt.j, [i.M, i.J], { ngIf: [0, 'ngIf'] }, null),
            (t()(), i.eb(16777216, null, null, 1, null, At)),
            i.ob(3, 16384, null, 0, mt.j, [i.M, i.J], { ngIf: [0, 'ngIf'] }, null)
          ],
          function (t, e) {
            var n = e.component;
            t(e, 1, 0, n.screenWidthService.screenWidth <= 450), t(e, 3, 0, n.screenWidthService.screenWidth > 450);
          },
          null
        );
      }
      function Mt(t) {
        return i.Gb(
          0,
          [
            (t()(), i.pb(0, 0, null, null, 1, 'app-reporters-dashboard', [], null, null, null, St, Vt)),
            i.ob(1, 114688, null, 0, bt, [Ct, yt.a], null, null)
          ],
          function (t, e) {
            t(e, 1, 0);
          },
          null
        );
      }
      var Pt = i.lb('app-reporters-dashboard', bt, Mt, {}, {}, []),
        Dt = n('fNgX'),
        Tt = n('iInd');
      class kt {}
      var xt = n('Nv++'),
        Nt = n('PCNd');
      n.d(e, 'ReportersDashboardModuleNgFactory', function () {
        return It;
      });
      var It = i.mb(s, [], function (t) {
        return i.yb([
          i.zb(512, i.j, i.X, [[8, [l.a, Pt, Dt.b, Dt.a]], [3, i.j], i.v]),
          i.zb(4608, mt.l, mt.k, [i.s, [2, mt.t]]),
          i.zb(4608, N, N, []),
          i.zb(1073742336, mt.b, mt.b, []),
          i.zb(1073742336, Tt.l, Tt.l, [
            [2, Tt.q],
            [2, Tt.k]
          ]),
          i.zb(1073742336, kt, kt, []),
          i.zb(1073742336, xt.j, xt.j, []),
          i.zb(1073742336, Nt.a, Nt.a, []),
          i.zb(1073742336, ct, ct, []),
          i.zb(1073742336, dt, dt, []),
          i.zb(1073742336, s, s, []),
          i.zb(
            1024,
            Tt.i,
            function () {
              return [[{ path: '', component: bt }]];
            },
            []
          )
        ]);
      });
    }
  }
]);

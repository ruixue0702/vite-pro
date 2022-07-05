;(function (e, t) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? t(exports, require('vue'))
    : typeof define == 'function' && define.amd
    ? define(['exports', 'vue'], t)
    : ((e = typeof globalThis != 'undefined' ? globalThis : e || self),
      t((e['snow-ui'] = {}), e.Vue))
})(this, function (e, t) {
  'use strict'
  const l = {
    type: { type: String, default: 'secondary' },
    size: { type: String, default: 'medium' },
    disabled: { type: Boolean, default: !1 },
    block: { type: Boolean, default: !1 }
  }
  var u = t.defineComponent({
      name: 'SButton',
      props: l,
      setup(n, { slots: o }) {
        return () => {
          const { type: i, size: f, disabled: r, block: c } = t.toRefs(n),
            p = o.default ? o.default() : '\u6309\u94AE',
            b = c.value ? 's-btn--block' : ''
          return t.createVNode(
            'button',
            {
              disabled: r.value,
              class: `s-btn s-btn--${i.value} s-btn--${f.value} ${b}`
            },
            [p]
          )
        }
      }
    }),
    s = {
      install(n) {
        n.component(u.name, u)
      }
    }
  const a = [s]
  var d = {
    install(n) {
      a.forEach(o => n.use(o))
    }
  }
  ;(e.Button = u),
    (e.default = d),
    Object.defineProperties(e, {
      __esModule: { value: !0 },
      [Symbol.toStringTag]: { value: 'Module' }
    })
})

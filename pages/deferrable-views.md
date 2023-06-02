---
layout: section
---

# Template - Deferrable views

---
layout: quote
---

# Deferrable views can be used in component template to defer the loading of select dependencies within that template

---

# Template - Deferrable views

<v-clicks>

- lazy loading for Component

- improve Core Web Vitals score

- block declaration

- triggers

- prefetching

- defer only with standalone

</v-clicks>

---

# Template - Deferrable views

<v-click>

### blocks
</v-click>

<v-clicks>

- @defer

- @placeholder

- @loading

- @error

</v-clicks>

<v-click>

### triggers
</v-click>

<v-clicks>

- replace placeholder with lazy load content

- built-in trigger

- ignored with SSR

</v-clicks>

---

# Template - Deferrable views

<v-click>

loading example

```html
@defer {
  <large-component />
} @loading (after 100ms; minimum 1s) {
  <img alt="loading..." src="loading.gif" />
}
```

</v-click>

<v-click>

prefetching example
```html
@defer (on interaction; prefetch on idle) {
  <calendar-cmp />
} @placeholder {
  <img src="placeholder.png" />
}
```
</v-click>
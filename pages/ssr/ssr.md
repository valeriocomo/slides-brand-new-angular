---
layout: section
---

# SSR

---

# SSR

<v-clicks>

- stable in v17

- @angular/ssr

- CLI integration

</v-clicks>

<v-clicks>

for new project

```bash
ng new brand-new-angular --ssr
```

</v-clicks>

<v-clicks>

for an existing project

```bash
ng add @angular/ssr
```

</v-clicks>

---
layout: cover
---

# Hydration

---
layout: quote
---

# Hydration is the process that restores the server-side rendered application on the client.

---

# Why Hydration?

<v-clicks>

- efficient DOM update

- SEO

- improving Core Web Vitals

    - First Input Delay

    - Largest Contentful Paint

    - Cumulative Layout Shift

</v-clicks>

---

# Hydration

<v-clicks>

- stable in v17

- improving SSR performance

- *provideClientHydration()*

- *ngSkipHydration* directive

</v-clicks>

---

# Hydration - Constraints

<v-clicks>

- strict HTML validation

- direct DOM manipulation

- zone.js dep (no providing noop implementation)

- i18n missing support

</v-clicks>
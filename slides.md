---
theme: dracula
layout: intro
favicon: https://angular.dev/assets/icons/favicon.ico
background: https://unsplash.com/photos/twukN12EN7c/download?force=true&w=1920
# background: https://source.unsplash.com/collection/94734566/1920x1080
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Brand New Angular
---

<!-- # <skill-icons-angular-dark /> -->
<img src="/icon_angular_gradient.png" class="m-auto h-40" />

# Brand New Angular

An overview about Angular Renaissance

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    Let's start! <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

---
src: ./pages/about-me.md
transition: slide-up

---

---
src: ./pages/why-angular-renaissance/why-angular-renaissance.md
transition: slide-up

---
---
src: ./pages/what-s-angular-renaissance/what-s-angular-renaissance.md
transition: slide-up

---

---
src: ./pages/dx/dx.md
transition: slide-up

---

---
src: ./pages/new-features.md
transition: slide-up

---

---
src: ./pages/standalone-components/standalone-components.md
transition: slide-up

---



---
src: ./pages/signals/signals.md
transition: slide-up

---

---
src: ./pages/template-control-flow/template-control-flow.md
transition: slide-up

---

---
src: ./pages/deferrable-views.md
transition: slide-up

---

---
src: ./pages/new-dx/new-dx.md
transition: slide-up

---


---
src: ./pages/what-s-next.md
transition: slide-up

---

---
src: ./pages/thank-you.md
transition: slide-up

---
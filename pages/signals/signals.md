---
layout: section
---

# Signals

---
layout: quote
---

# Signals is a new primitive for state management, providing convinent API for asynchronous events handling and supports developers in adoptions of reactive patterns.
 
---

# Signals

<v-clicks>

- developer preview in v16

- API for state management

- easing reactivity in components

- stable in v17

- @ngrx/signals

</v-clicks>

---

# Signals 

APIs
```ts

signal() // create a new signal

computed(() => W) // react to a change of a signal

set(value: T) // set the value

update((value: T) => T) // update signal's value

effect() // handling side effect logic

```

---

# Signals

```ts
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <div>{{number()}}</div>
  <div>{{squared()}}</div>
  <button (click)="clickHandler()">Next</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly number = signal(1);
  readonly squared = computed(() => Math.pow(this.number(), 2));

  clickHandler() {
    this.number.set(this.number() + 1)
  }
}
```

<!-- ---

# Signals 

### effect function

<v-clicks>

- side effect ops

- avoid for state changes

</v-clicks> -->

---

# Signals 

### RxJS Interoperability

<v-clicks>

- toSignal

- toObservable

</v-clicks>

<v-click>
```ts
import { toSignal, toObservable } from @angular/core/rxjs-interop
```
</v-click>

---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-angular-signals-vc.png" class="m-auto h-100" />
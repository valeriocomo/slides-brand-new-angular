---
layout: section
---

# Template - Control Flow

---

# Template - Control Flow

<v-clicks>

- developer preview

- avoiding directive import (NgIf, NgFor etc) 

- better performance

- zone-less

</v-clicks>

---

# Template - Control Flow > conditionals

**@if** 

<v-click>

- replace NgIf

- conditionally displays a content when its condition is matched

</v-click>

<v-click>

```html
@if (a > b) {
  {{a}} is greater than {{b}}
} @else if (b > a) {
  {{a}} is less than {{b}}
} @else {
  {{a}} is equal to {{b}}
}
```
</v-click>

---

# Template - Control Flow > repeaters

**@for** 

<v-click>

- replace NgFor

- displays a content for each items in a collection

- track is mandatory

- better DOM manipulation algorithm

</v-click>

<v-click>

**@empty** displays when there are no items 

</v-click>

<v-click>

```html
@for (item of items; track item.name) {
  <li> {{ item.name }} </li>
} @empty {
  <li> There are no items. </li>
}
```
</v-click>

---

# Template - Control Flow > selection

**@switch** 

<v-click>

- replace NgSwitch

- it's identical to Javascript *switch* statement

- type-checking

</v-click>
<v-click>

```html
@switch (condition) {
  @case (caseA) {
    Case A.
  }
  @case (caseB) {
    Case B.
  }
  @default {
    Default case.
  }
}
```

</v-click>
---
layout: section
---

# Leaner DX

---

# Leaner DX

<v-clicks>

- inject
- function > class
- destroyRef
- takeUntilDestroyed
- router input binding

</v-clicks>

---
layout: section
---

# Leaner DX - inject

---

# Leaner DX - inject

providing without inject
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor(private readonly service: AppService)
}
```
---

# Leaner DX - inject

providing with inject
```ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService)
}
```
---

# Leaner DX - inject

available in an injection context

- constructor initialization

- class field initialization

- provider with *useFactory* function

- *InjectionToken* factory function

- *runInInjectionContext*

---

# Leaner DX - inject

```ts 
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService } from './app.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    private readonly service = inject(AppService) //class field init
    private injector: Injector;

    constructor(private readonly service: AppService) {
        this.injector = inject(Injector) //constructor init
    }

    ngOnInit() {
        runInInjectionContext(this.injector, () => {
            inject(LoggerService); //inject a service outside an injection context
        })
    }
}
```

---
layout: section
---

# Leaner DX - function > class


---
layout: statement
---

# usage of classes is deprecated for interceptors and guards


---

# Leaner DX - function > class

oo approach
```ts
import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http'

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private readonly user: User) {}
    
    intercept() {
        const accessToken = this.user.accessToken;

        if (accessToken) {
            req = req.clone({
                setHeaders: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        }

        return next(req);
    }
}
```

---

# Leaner DX - function > class

<v-click>

functional approach 

```ts
export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const accessToken = inject(User).accessToken;

  if (accessToken) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  }

  return next(req);
};
```

</v-click>

<v-click>

providing
```ts
// in app.config.ts
provideHttpClient(withInterceptors([jwtInterceptor]))
```
</v-click>

---
layout: section
---

# Leaner DX - destroyRef

---

# Leaner DX - destroyRef

<v-clicks>

- introduced in v16

- available in lifecycle related artifact

- reusable destroy logic

</v-clicks>

<v-click>

example

```ts
    inject(DestroyRef).onDestroy(() => {
      // execute destroy logic
    })
```

</v-click>

---
layout: section
---

# Leaner DX - takeUntilDestroyed

---
layout: statement
---

# it completes an observable when the context is destroyed


---

# Leaner DX - takeUntilDestroyed

example

```ts
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {
    constructor() {
        interval(1000)
        .pipe(takeUntilDestroyed()) //must be used inside an injection context
        .subscribe(console.log);
    }
}
```

---

# Leaner DX - takeUntilDestroyed

example outside an **injectionContext**

```ts
import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
        interval(1000)
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(console.log);
    }
}
```

---
layout: section
---

# Leaner DX - router input binding

---

# Leaner DX - router input binding

<v-clicks>

- binding routing information
    
    <v-click>

        - static data
        - resolved data
        - path params
        - query params
    
    </v-click>

- *withComponentInputBinding()*

</v-clicks>

---

# Leaner DX - router input binding

```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      [
        {
          path: 'user/:id',
          data: {
            breadcrumbLabel: 'User Detail'
          }
          resolve: { contactType: () => [{type: 'Email'}, {type: 'Phone'}] },
          loadComponent: () => import('./app/user/user.component'),
        }
      ],
      withComponentInputBinding()
    ),
  ],
});

```
---

# Leaner DX - router input binding

navigation to
```ts 
/user/23?q=angular
```

example
```ts
@Component({
  standalone: true,
  template: ''
})
export default class UserComponent {
    @Input() id: string; // 23
    @Input() contactType: Array<{type: string}>; // [{type: 'Email'}, {type: 'Phone'}]
    @Input() breadcrumbLabel: string; // 'User Detail'
    @Input() q: string; // angular
}
```

---

# Leaner DX - router input binding

in case of name conflict

- data

- path params

- query params


---
layout: section
---

# Standalone components

---

# Standalone components

<img src="/standalone-components.png" class="m-auto" />

---
layout: statement
---

# Why NgModule?

---

# Why NgModule?

<v-clicks>

- modularization

- declaration context

- compilation context (before Ivy adoption)

</v-clicks>

---

# Why NgModule?

<v-clicks>

### drawbacks

- misleading modularization

- new concept for newbie

</v-clicks>

<v-clicks>

### evolution

- Ivy adoption

- optional artifact

</v-clicks>

---
layout: statement
---

# Standalone components - Anatomy

--- 

# Standalone components - Anatomy

example taken from a real-world project
```ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterOutlet],
    template: '<router-outlet></router-outlet>'
})
export class AppComponent {}
```
<!-- ---

# Standalone components - Anatomy

<v-clicks>

- same SCAM pattern mental model

- standalone flag

- imports its own deps

- imported like modules

</v-clicks> -->

---
layout: statement
---

# Standalone components - Bootstrapping

---

# Standalone components - Bootstrapping

<v-click>

main.ts with NgModule
```ts
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
```
</v-click>
<v-click>

main.ts with standalone components
```ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
```

</v-click>
---

```ts
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withHashLocation, withRouterConfig } from '@angular/router';
// other imports were here
import { environment } from '../enviroments/enviroment';
import { appRoutes } from './app.routes';
// other functions/consts were here
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([...AUTH_INTERCEPTORS])),
    provideAnimations(),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: 'reload',
      }),
      withHashLocation()
    ),
    importProvidersFrom(ApiModule.forRoot(apiConfigFactory)),
    importProvidersFrom(FormlyModule.forRoot(FORMLY_CONFIG)),
    { provide: SIDEBAR_CONFIG_INJECTION_TOKEN, useValue: sidebarConfig },
    { provide: APP_NAME_INJECTOR, useValue: APP_NAME },
  ],
};
```

<!-- ---

# Standalone components - Bootstrapping

<v-clicks>

- Component as entry point

- provide* helper functions

- *importProvidersFrom*

</v-clicks> -->

---

# Standalone components - Router
loadComponent & loadChildren
```ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell').then(m => m.routes)
            }
        ]
    }
]
//in analytics-shell.routes.ts
export const routes: Routes = [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] 
```

---

# Standalone components - Router
export with default

```ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
```

---

# Standalone components - Router
providing services

```ts
export const appRoutes: Routes = [
    {
        path: '',
        loadComponent: () => import('@app/layout/main/main.layout').then(m => m.MainLayout),
        providing: [LoggerService],
        children: [
            {
                path: 'analytics',
                loadChildren: () => import('@app/analytics/analytics-shell')
            }
        ]
    }
]
//in analytics-shell.routes.ts
export default [
    {
        path: '', 
        component: AnalyticsShellComponent
    }
] satisfies Routes;
```

---
layout: center
class: "text-center"
---

Link to my blog post 👇

<img src="/qr-standalone-components-vc.png" class="m-auto h-100" />
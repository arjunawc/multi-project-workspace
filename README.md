# Angular Multiple Project Workspace

### Steps to to start an angular workspace with multiple projects in the same workspace and create libraries.

Add workspace
```
>ng new store-workspace --createApplication="false"
```

Add new applications inside workspace
```
>cd store-workspace
store-workspace> ng generate application admin
store-workspace> ng generate application client
```

Serve applications in workspace
```
store-workspace> ng serve admin
store-workspace> ng serve client
```


Create a common library that we can share code between Applications inside workspace
```
store-workspace> ng generate library store-common
```

Create a service in new library
```
store-workspace> ng generate service services/User --project store-common
```

Export newly created library service on public-api.ts
```
\store-workspace\projects\store-common\src\public-api.ts
export * from './lib/services/user.service';
```

Build library
```
store-workspace> ng build store-common
```

Install built library (this will create package inside node_modules)
```
store-workspace> npm install .\dist\store-common\
```

Using new library on clinet or admin app
```
1. In the app.module.ts import the StoreCommonModule from new library
	    import { StoreCommonModule } from 'store-common';
-add it to the @NgModule.imports array
	    imports: [ .., StoreCommonModule],
	
2. import UserService on the component where we going to use
	    import { UserService } from 'store-common';
-Inject the service and call the service methods
      constructor(private userService: UserService) {}
```

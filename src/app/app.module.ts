import { AngularMaterialModule } from "./angular-material.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "app-routing.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorComponent } from "./error/error/error.component";
import { ErrorInterceptor } from "./error-interceptor";

import { HeaderComponent } from "./header/header/header.component";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { NgModule } from "@angular/core";
import { PostsModule } from "./posts/posts.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, ErrorComponent],
  imports: [
    AuthModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule,
    PostsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorComponent]
})
export class AppModule {}

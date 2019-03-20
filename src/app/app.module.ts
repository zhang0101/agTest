import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './views/home/home.component';
import {AboutComponent} from './views/about/about.component';
import {HeaderComponent} from './components/header/header.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
// @ts-ignore
import { ShareModule } from '@share/share.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    BreadcrumbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ChildcomComponent } from './components/childcom/childcom.component';
import { WebboardComponent } from './components/webboard/webboard.component';
import { ContactusComponent } from './components/contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    FooterComponent,
    ToolbarComponent,
    ChildcomComponent,
    WebboardComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

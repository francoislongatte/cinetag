// Core

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TheaterComponent} from './theater/theater.component';
import {HeaderComponent} from './core/header/header.component';
import {DisplayTagAnimationComponent} from './theater/display-tag-animation/display-tag-animation.component';
import {ConfigDisplayComponent} from './core/config-display/config-display.component';
import {ToastContainerModule, ToastrModule} from 'ngx-toastr';
import {StoreModule} from '@ngrx/store';
import {tagReducer} from './ngrx/reducers/tag.reducers';
import {EffectsModule} from '@ngrx/effects';
import {TagEffects} from './ngrx/effects/tag.effect';
import {TaglineAdminComponent} from './tagline-admin/tagline-admin.component';
import {TaglineAddComponent} from './tagline-admin/tagline-add/tagline-add.component';
import {TaglineEditComponent} from './tagline-admin/tagline-edit/tagline-edit.component';
import {TaglineListComponent} from './tagline-admin/tagline-list/tagline-list.component';
import {SearchPipe} from './share/filter/search.pipe';
import {LocalstorageService} from './share/service/localstorage.service';

// Routing

// Component


// Toaster

// NgRx

@NgModule({
  declarations: [
    AppComponent,
    TheaterComponent,
    HeaderComponent,
    DisplayTagAnimationComponent,
    ConfigDisplayComponent,
    TaglineAdminComponent,
    TaglineAddComponent,
    TaglineEditComponent,
    TaglineListComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
    }),
    ToastContainerModule,
    StoreModule.forRoot({
      TagState: tagReducer
    }),
    EffectsModule.forRoot([
      TagEffects
    ])
  ],
  providers: [
    LocalstorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

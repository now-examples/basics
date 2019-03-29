import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import {HackernewsApiService} from './services/hackernews-api.service';
import { HnStoryItemComponent } from './components/hn-story-item/hn-story-item.component';
import { HnStoryDetailedComponent } from './components/hn-story-detailed/hn-story-detailed.component';
import { StoryCommentsComponent } from './components/story-comments/story-comments.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    HnStoryItemComponent,
    HnStoryDetailedComponent,
    StoryCommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HackernewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

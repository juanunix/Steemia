import { NgModule } from '@angular/core';
import { CommentComponent } from './comment/comment';
import { PostCardComponent } from './post-card/post-card';
import { PostRenderComponent } from './post-render/post-render';

import { MomentModule } from 'angular2-moment';
import { IonicImageLoader } from 'ionic-image-loader';
import { IonicModule } from 'ionic-angular';
import { NoDataComponent } from './no-data/no-data';
import { WalletItemComponent } from './wallet-item/wallet-item';
import { UserItemComponent } from './user-item/user-item';
import { YoutubePlayerModule } from 'ngx-youtube-player';



@NgModule({
	declarations: [
		CommentComponent,
		PostCardComponent,
		PostRenderComponent,
		NoDataComponent,
		WalletItemComponent,
    UserItemComponent
	],

	imports: [
		YoutubePlayerModule,
		IonicModule,
		MomentModule,
		IonicImageLoader
	],

	exports: [
		CommentComponent,
		PostCardComponent,
		PostRenderComponent,
		NoDataComponent,
		WalletItemComponent,
    UserItemComponent
	]
})
export class ComponentsModule { }

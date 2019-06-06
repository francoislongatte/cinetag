import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TagState} from '../../ngrx/reducers/tag.reducers';
import {Tag} from '../../share/models/tag';
import {Observable} from 'rxjs';
import {getConfig, getTags, getTagState} from '../../ngrx/selectors/tag.selector';
import {Pause, Play} from '../../ngrx/actions/tag.action';

@Component({
  selector: 'app-display-tag-animation',
  templateUrl: './display-tag-animation.component.html',
  styleUrls: ['./display-tag-animation.component.scss']
})
export class DisplayTagAnimationComponent implements OnInit {

  arrayAnimation = [
    'tracking-in-contract-bck',
    'tracking-in-expand',
    'text-focus-in',
    'bounce-in-fwd',
    'slide-in-elliptic-right-fwd'
  ];

  numberActiveMessage = 0;
  saveSetInterval: number;
  selectedAnimation: string = this.randomAnimation();
  modePlay = false;

  constructor(private store: Store<TagState>) {
  }

  ngOnInit(): void {
    this.store.select(getConfig).subscribe(config => {
      this.modePlay = config.play;
    });
    this.getState.subscribe((TagState: TagState) => {
      this.modePlay = TagState.config.play;
      if (this.modePlay) {
        if (TagState.tagLine.length > 0) {
          this.saveSetInterval = setInterval(() => {
            this.selectedAnimation = this.randomAnimation();
            const tmp = this.numberActiveMessage;
            this.numberActiveMessage = null;
            this.numberActiveMessage = tmp === TagState.tagLine.length - 1 ? 0 : tmp + 1;
          }, TagState.config.speed);
        } else {
          clearInterval(this.saveSetInterval);
        }
      } else {
        clearInterval(this.saveSetInterval);
      }
    });
  }

  get getState(): Observable<TagState> {
    return this.store.select<TagState>(getTagState);
  }

  get getListTag(): Observable<Tag[]> {
    return this.store.select<Tag[]>(getTags);
  }

  selectAnimation(number): string {
    if (this.numberActiveMessage === number) {
      return this.selectedAnimation;
    }
    return '';
  }

  randomAnimation() {
    return this.arrayAnimation[Math.floor(Math.random() * this.arrayAnimation.length)];
  }


  togglePlay() {
    if (this.modePlay) {
      this.store.dispatch(new Pause());
    } else {
      this.store.dispatch(new Play());
    }
  }


}

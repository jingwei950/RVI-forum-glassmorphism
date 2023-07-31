import { NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  signal,
  ViewChild,
} from '@angular/core';
import { PostCategoriesComponent } from 'src/shared/component/post-categories/post-categories.component';
import { SocialIconComponent } from 'src/shared/component/social-icon/social-icon.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  imports: [NgClass, NgFor, NgIf, SocialIconComponent, PostCategoriesComponent],
})
export class MainComponent {
  @ViewChild('scroll') scroll!: ElementRef;

  cards = ['a', 'b', 'c', 'd', 'e'];

  onHoverState = signal(false);
  selectedCard = signal<number | null>(null);
  swapIconState = signal(false);
  scrollSpeed = signal<number>(6);
  nav_bar_color = signal<string>('bg-none');
  scrollState = signal(false);

  post_categories = [
    {
      id: 1,
      title: 'Trending',
      subtitle: 'Find the latest update',
      icon: 'trending_icon',
    },
    {
      id: 2,
      title: 'My post',
      subtitle: 'Find your post here',
      icon: 'mypost_icon',
    },
  ];

  opportunities = [
    {
      id: 1,
      title:
        'school of alternate internet asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd asd ',
      company: 'feelers',
      location: '284 river valley road',
      month: 'feb',
      date: '7',
      imgUrl: 'https://www.feelers-feelers.com/assets/feelers/circlelogo.png',
    },
    {
      id: 2,
      title: 'Arts management internship a',
      company: 'tusitala',
      location: '284 river valley road',
      month: 'mar',
      date: '13',
      imgUrl:
        'https://www2.tusitalabooks.com/wp-content/uploads/2015/10/tusifoxLogo_300x300px.png',
    },
    {
      id: 3,
      title: 'Barista',
      company: 'The Werkx Cafe',
      location: 'River Valley Road',
      month: 'Jun',
      date: '9',
      imgUrl:
        'https://thewerkx.com/wp-content/uploads/2022/12/The-Werkx-Coffee-Shop.png',
    },
  ];

  social_media = [
    {
      title: 'Facebook',
      subtitle: 'Like us on Facebook',
      icon: 'fb_icon',
    },
    {
      title: 'Instagram',
      subtitle: 'Follow us on Instagram',
      icon: 'ig_icon',
    },
    {
      title: 'TikTok',
      subtitle: 'Follow us on TikTok',
      icon: 'tt_icon',
    },
    {
      title: 'Telegram',
      subtitle: 'Join us on Telegram',
      icon: 'tg_icon',
    },
  ];

  onScroll(e: any) {
    console.log(e.target.scrollTop);
    if (e.target.scrollTop >= 100) {
      this.nav_bar_color.set('bg-white shadow-md');
    } else if (e.target.scrollTop < 100) {
      this.nav_bar_color.set('bg-none');
    }
  }

  trackByFn(index: number) {
    return index;
  }

  onHover(i: number, textLength: number) {
    this.onHoverState.set(true);
    this.selectedCard.set(i);

    if (textLength > 27) {
      this.scrollSpeed.set(textLength / 10);
    }
  }

  removeHover() {
    this.onHoverState.set(false);
    this.selectedCard.set(null);
  }

  swapIcon() {
    this.swapIconState.set(!this.swapIconState());
  }

  @HostListener('window:scroll', ['$event']) onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      // element.classList.add('navbar-inverse');
      console.log('add class');
    } else {
      console.log('remove class');
      // element.classList.remove('navbar-inverse');
    }
  }
}

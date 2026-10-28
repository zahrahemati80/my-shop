import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-banner-slider',
  templateUrl: './bannerslider.component.html',

})
export class BannerSliderComponent {
  currentSlide=signal(0);
  banners=[
    {image:'/image/banners/shirt.png',
      alt:'پیراهن'},
    {
      image: '/image/banners/purse.png',
      alt: 'کیف و کوله پشتی',
    },
    {
      image: '/image/banners/accessory.png',
      alt: 'اکسسوری و ساعت',
    },
  ];
  next(){
    this.currentSlide.update(
      index=>(index + 1) % this.banners.length
    )
  }
  protected prev() {
this.currentSlide.update(
  index=>(index - 1) % this.banners.length
)
  }

  protected goTo(i: number) {
    this.currentSlide.set(i);

  }


}

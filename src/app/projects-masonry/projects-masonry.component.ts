import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  HostListener,
  inject
} from '@angular/core';
import {AsyncPipe, NgClass, NgStyle} from '@angular/common';
import {ReplaySubject} from 'rxjs';
import {Router} from '@angular/router';
import gsap from 'gsap';

@Component({
  selector: 'app-projects-masonry',
  imports: [
    AsyncPipe,
    NgStyle,
    NgClass
  ],
  templateUrl: './projects-masonry.component.html',
  host: {
    class: 'w-full'
  }
})
export class ProjectsMasonryComponent implements AfterViewInit, OnInit, OnDestroy {

  @Input() items?: {
    img: string;
    originalWidth: number,
    originalHeight: number,
    title?: string;
    link?: string;
    subtitle?: string
  }[];
  @Input() colLimits?: [minPixels: number, rows: number][];

  router = inject(Router);

  columnGap = 16;
  height = 0;
  hasInitialized = false;
  clickedItem?: string;
  hoveredItem?: string;
  loadedImages = new Set<string>();

  @ViewChild('resizeContainer', {static: false}) masonryContainer!: ElementRef;

  columns: ReplaySubject<{
    img: string,
    y: number,
    left: number,
    width: number,
    aspectRatio: string,
    title?: string,
    link?: string,
    subtitle?: string
  }[]> = new ReplaySubject(0);
  private resizeObserver?: ResizeObserver;

  ngOnInit() {}

  ngAfterViewInit() {
    this.resizeObserver = new ResizeObserver(() => this.updateColumns());
    this.resizeObserver.observe(this.masonryContainer.nativeElement);
  }

  ngOnDestroy() {
    this.resizeObserver?.disconnect();
  }

  private updateColumns() {
    const width = this.masonryContainer.nativeElement.offsetWidth;
    const numberOfColumns = this.colLimits?.find(([minPixels]) => width >= minPixels)?.[1] ?? 1;
    const columnWidth = (width - this.columnGap * (numberOfColumns - 1)) / numberOfColumns;
    const heights = Array(numberOfColumns).fill(0);
    if (this.items) {
      const itemsByColumn = this.items?.map(image => {
        const column = heights.indexOf(Math.min(...heights));
        const imageHeight = image.originalHeight * columnWidth / image.originalWidth;
        const y = heights[column];
        heights[column] += imageHeight + this.columnGap;
        return {
          img: image.img,
          y: y,
          left: column * (columnWidth + this.columnGap),
          width: columnWidth,
          aspectRatio: `${image.originalWidth} / ${image.originalHeight}`,
          title: image.title,
          link: image.link,
          subtitle: image.subtitle
        }
      });
      this.columns.next(itemsByColumn);
      this.height = Math.max(...heights) - this.columnGap;

      if (!this.hasInitialized) {
        this.hasInitialized = true;
        // Let Angular render the items at their final positions first,
        // then fade the whole grid in – no top-to-bottom "build" effect.
        requestAnimationFrame(() => {
          gsap.fromTo(this.masonryContainer.nativeElement,
            {opacity: 0},
            {opacity: 1, duration: 0.4, ease: 'power1.inOut'}
          );
        });
      }
    }
  }


  onImageLoad(src: string) {
    this.loadedImages = new Set([...this.loadedImages, src]);
  }

  onImageClick(item: any) {
    // For mobile devices, the hoveredItem will be undefined
    // So the link must be clicked twice to navigate
    if (this.clickedItem === item.img || this.hoveredItem === item.img) {
      if (item.link) {
          window.location.href = item.link;
      }
    } else {
      this.clickedItem = item.img;
      this.hoveredItem = undefined;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.clickedItem = undefined;
  }

  onPointerEnter(event: PointerEvent, item: any) {
    // Hovering items should only be possible with mouse
    if (event.pointerType === 'mouse') {
      this.hoveredItem = item.img;
    }
  }
}

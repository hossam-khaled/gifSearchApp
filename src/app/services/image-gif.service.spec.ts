import { TestBed } from '@angular/core/testing';

import { ImageGifService } from './image-gif.service';

describe('ImageGifService', () => {
  let service: ImageGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

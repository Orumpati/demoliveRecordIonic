import { Component } from '@angular/core';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture/ngx';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private mediaCapture: MediaCapture,
  ) {}



  liverecord() {
    const options = { limit: 1, duration: 30 };
  
    this.mediaCapture
      .captureVideo(options)
      .then(async (mediaFiles) => {

        const files = mediaFiles as MediaFile[];
        console.log(files)
        const video = files[0];

 

alert(video.fullPath)



//         console.log(video)
//         console.log(video.name)
//         const blob = new Blob([], { type: video.type });
//         alert(blob)
//         alert(JSON.stringify(blob))
//  console.log(blob)
      })
      .catch((error) => {
        console.error('Error capturing video', error);
      });
  }
}

import { Component } from '@angular/core';
const MAXRANGE = 300;

@Component({
  selector: 'app-root',
  // view
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Controller
export class AppComponent {

  // imageCount = 0;
  isVisible = true;
  imageSources = [];

  increaseImageCount(){
    const id = this.generateId();
    this.imageSources.push(
      `https://picsum.photos/id/${id}/200/150`
    )
    // this.imageCount++;
  }

  toggle(){
    this.isVisible = !this.isVisible;
  }
  
  private generateId(){
    return Math.round(Math.random() * MAXRANGE) + 1;
  }

}

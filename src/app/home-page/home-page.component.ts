import { Component } from '@angular/core';
import { Post } from '../post.model'
import { Router } from '@angular/router'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private router: Router) { }

  posts: Post[] = [
    new Post('Trump has withdrawn the U.S. from the TPP trade deal.', 'Andrew', 'Is this good?', 'Politics', 1),
    new Post('Firebird fish looks cool', 'Andrew', 'I should add a way to link gifs.', 'Gifs', 2),
    new Post('Trump Sued over foreign governments payments to his firms', 'Andrew', 'In other news, the sky is blue.', 'Politics', 3)
  ];

  goToDetailPage(clickedPost: Post) {
    this.router.navigate(['posts', clickedPost.id])
  }
}

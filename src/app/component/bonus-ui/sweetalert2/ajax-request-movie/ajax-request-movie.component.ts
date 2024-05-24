import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajax-request-movie',
  templateUrl: './ajax-request-movie.component.html',
  styleUrls: ['./ajax-request-movie.component.scss']
})
export class AjaxRequestMovieComponent {

  withAjax() {
    Swal.fire({
      text: 'Search for a movie. e.g. "Herry Poter".',
      input: 'text',
      confirmButtonText: 'Search!'
    }).then((name) => {
      if (!name) throw null;
      return fetch(
        `https://itunes.apple.com/search?term=${name.value}&entity=movie`
      );
    }).then((results) => {
      return results.json();
    }).then((json) => {
      const movie = json.results[0];
      const name = movie.trackName;
      const imageURL = movie.artworkUrl100;

      Swal.fire({
        title: "Top result:",
        text: name,
        imageUrl: imageURL,
      });
    })
      .catch((err) => {
        if (err) {
          Swal.fire("Oh noes!", "The AJAX request failed!", "error");
        } else {
          Swal.close();
        }
      });
  };


}

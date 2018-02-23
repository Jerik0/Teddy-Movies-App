/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */

const $ = require('jquery');
const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  let htmlString = '';
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
    htmlString += `<div>${title}</div>
                   <div>Rating: ${rating}/5</div>`
  });
  $('.container').html(htmlString);
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

const loadAnimate = () => {
  let loadText = $('#loading').text();
  let i = 0;
  setInterval(function() {
    if(i === 3) {
      i = 0;
      loadText = 'Loading';
    }
    loadText += '.';
    $('#loading').text(loadText);
    i++;
  }, 1000)
};

loadAnimate();
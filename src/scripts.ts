/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/extensions
// eslint-disable-next-line import/no-unresolved
import shows from './shows';

// MAP
//  Get an array of all titles
const getArrayOfAllTitles = shows.map((show) => show.title);
console.log('All titles[]', getArrayOfAllTitles);

// Get an array of ids
const getArrayOfAllIds = shows.map((show) => show.id);
console.log('All Ids[]', getArrayOfAllIds);

//  Get an array of ratings
const getArrayOfAllRatings = shows.map((show) => show.ratingDetails.rating);
console.log('All ratings[]', getArrayOfAllRatings);

//  Get an array of ratings rounded to 2 decimal places
const getArrayOfAllRatingsRoundToTwoDecimalPlaces = shows.map((show) => +show.ratingDetails.rating.toFixed(2));
console.log('All ratings rounded[]', getArrayOfAllRatingsRoundToTwoDecimalPlaces);

//  Capitalise all genres
const allGenresCapitalised = shows.map((show) => ({
  ...show, genres: show.genres.map((genre) => genre.toUpperCase()),
}));
console.log('All genres capitalised[]', allGenresCapitalised);

//  Double all ratingDetails.count
const doubleAllRatingDetailsCount = shows.map((show) => ({
  ...show,
  ratingDetails: { ...show.ratingDetails, count: show.ratingDetails.count * 2 },
}));
console.log('Double all ratingDetailsCount', doubleAllRatingDetailsCount);

//  Round all ratings to 2 decimal places
const roundRatingsToTwoDecimals = shows.map((show) => ({
  ...show,
  ratingDetails: { ...show.ratingDetails, rating: +show.ratingDetails.rating.toFixed(2) },
}));
console.log('Round all ratings to 2 decimal places', roundRatingsToTwoDecimals);

// map() each object to only have id, title, description
const onlyidtitleDescription = shows.map((show) => ({ id: show.id, title: show.title, description: show.description }));
console.log('map() each object to only have id, title, description', onlyidtitleDescription);

// If id === 1, change rating to 9.9999
const ifIdChangeRating = shows.map((show) => (show.id === 1
  ? { ...show, ratingDetails: { ...show.ratingDetails, rating: 9.9999 } }
  : show));
console.log('If id === 1, change rating to 9.9999', ifIdChangeRating);

// If id === 2, change rating to 8 and add + 1 to rating count
const idIdChangeRatingAddOne = shows.map((show) => {
  if (show.id === 2) {
    return { ...show, ratingDetails: { ...show.ratingDetails, rating: 8, count: show.ratingDetails.count + 1 } };
  }
  return show;
});
console.log('If id === 2, change rating to 8 and add + 1 to rating count', idIdChangeRatingAddOne);

// If rating > 7, change isPopular value to true
const ifRatingPopularTrue = shows.map(((show) => {
  if (show.ratingDetails.rating > 7) {
    return { ...show, isPopular: true };
  }
  return show;
}));
console.log('If rating > 7, change isPopular value to true', ifRatingPopularTrue);

// If isPopular === true, change rating to 10
const ifPopularChangeRating = shows.map(((show) => {
  if (show.isPopular) {
    return { ...show, ratingDetails: { ...show.ratingDetails, rating: 10 } };
  }
  return show;
}));
console.log('If isPopular === true, change rating to 10', ifPopularChangeRating);

// If genres include 'Science-Fiction', change available to true
const ifSciFiAvailable = shows.map(((show) => {
  if (show.genres.includes('Science-Fiction')) {
    return { ...show, available: true };
  }
  return show;
}));
console.log('If genres include "Science-Fiction", change available to true', ifSciFiAvailable);

// If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []
const popularIdArray = shows.map((show) => {
  if (show.isPopular) {
    return { ...show, episodes: show.episodes.map((episode) => episode.id) };
  }
  return { ...show, episodes: [] };
});
console.log('If isPopular === true, map() episodes, to be an array of episode ids, else make episodes an empty []', popularIdArray);

// Get an array of all possible genres (not [['', ''], ['']] but ['', '', ''])
const arrayOfGenres = shows.flatMap((show) => show.genres);
const filteredArray = [...new Set(arrayOfGenres)];
console.log('array of all possible genres', filteredArray);

// If year > 2016 and isPopular === true, add 'Documentary' to genres
const addDocumentaryToGenres = shows.map((show) => {
  if (show.year > 2016 && show.isPopular) {
    return { ...show, genres: show.genres.concat('Documentary') };
  }
  return show;
});
console.log('If year > 2016 and isPopular === true, add "Documentary" to genres', addDocumentaryToGenres);

// If id === 1 and episode id === 24, change episode releaseDate to '2022-10-12 00:00:00'
const ifIdChangeReleaseDate = shows.map((show) => {
  if (show.id === 1) {
    return {
      ...show,
      episodes: show.episodes.map(((episode) => (episode.id === 24
        ? { ...episode, released: '2022-10-12 00:00:00' } : episode))),
    };
  }
  return show;
});
console.log('If id === 1 and episode id === 24, change episode releaseDate to "2022-10-12 00:00:00"', ifIdChangeReleaseDate);

// FILTER
// Get all shows, where rating < 7
const getShowsRatingBeloveSeven = shows.filter((show) => (show.ratingDetails.rating < 7));
console.log('all shows, where rating < 7', getShowsRatingBeloveSeven);

// Get all shows, where description includes "DC"
const showsDescriptionIncludeDc = shows.filter((show) => (show.description.includes('DC')));
console.log('all shows, where description includes "DC"', showsDescriptionIncludeDc);

// Get all shows, where isPopular === true
const popularShows = shows.filter((show) => (show.isPopular));
console.log('all shows, where isPopular === true', popularShows);

// Get all shows, where genres include Drama
const dramaShows = shows.filter((show) => (show.genres.includes('Drama')));
console.log('all shows, where genres include Drama', dramaShows);

// Get all shows, where episode array length >= 2
const twoOrMoreEpisodeShow = shows.filter((show) => (show.episodes.length >= 2));
console.log('all shows, where episode array length >= 2', twoOrMoreEpisodeShow);

// Get all shows, where episode title is Wendigo
const showsWithWendigoEpisodeTiptle = shows.filter((show) => (show.episodes.find((episode) => episode.title === 'Wendigo')));
console.log('all shows, where episode title is Wendigo', showsWithWendigoEpisodeTiptle);

// Get all shows, where year is < 2019
const showsBeforeTwentyNineteen = shows.filter((show) => (show.year < 2019));
console.log('all shows, where year is < 2019', showsBeforeTwentyNineteen);

// Get all shows, where title starts with Sup
const showTitleStartWithSup = shows.filter((show) => show.title.slice(0, 3) === 'Sup');
console.log('all shows, where title starts with Sup', showTitleStartWithSup);

// Get all shows, where id === 2
const showsIdTwo = shows.filter((show) => (show.id === 2));
console.log('all shows, where id === 2', showsIdTwo);

// Get all shows, where id !== 2
const showsIdNotTwo = shows.filter((show) => (show.id !== 2));
console.log('Get all shows, where id !== 2', showsIdNotTwo);

// Get all episodes, where genres include "Drama" and rating > 7
const showsDramaRatingBelowSeven = shows.filter((show) => show.genres.includes('Drama') && show.ratingDetails.rating > 7);
console.log('all episodes, where genres include "Drama" and rating > 7', showsDramaRatingBelowSeven);

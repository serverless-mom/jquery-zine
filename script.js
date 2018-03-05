const YOUTUBE_SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback) {
  const query = {
    q: searchTerm,
    part: 'snippet',
    per_page: 5,
    key: 'AIzaSyDrIMvhk9Zgz66mf7KMASGd60Dn3xnfv8A'
  }
  $.getJSON(YOUTUBE_SEARCH_URL, query, callback);
}

function renderResult(result) {
  return `
    <div>
      <h2>
      <a class="js-result-name" href="https://www.youtube.com/watch?v=${result.id.videoId}" target="_blank">${result.snippet.title}</a></h2>
      <img src="${result.snippet.thumbnails.medium.url}" alt="whoa">
    </div>
  `;
}

function displayGitHubSearchData(data) {
  console.log(data.items[0].snippet.thumbnails.medium.url);
  const results = data.items.map((item, index) => renderResult(item));

  $('.js-search-results').html(results);
}

function watchSubmit() {
  $('.js-search-form').submit(event => {
    event.preventDefault();
    const queryTarget = $(event.currentTarget).find('.js-query');
    const query = queryTarget.val()
      // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displayGitHubSearchData);
  });
}

$(watchSubmit);

/*global*/
var Trackster = {};
var Tracks = [];
var Artists = [];
var searchKey = "none";
var sortDirection = 1;
const API_KEY = "3739c20e5c6c0d029df83011e207e7cb";

$(document).ready(function() {
  $("#search-text").select();
  $("#search-btn").click(function(event) {
    event.preventDefault();
    Trackster.searchTracksByTitle($("#search-txt").val());
  });
  $(".sortable").click(function(event) {
    switch (searchKey) {
      case "none":
      break;
      case "track":
      switch ($(this).text()) {
        case "Song":
        Trackster.columnSort("name");
        break;
        case "Artist":
        Trackster.columnSort("artist");
        break;
        case "Art.":
        Trackster.columnSort("artist");
        break;
        case "Popularity":
        Trackster.columnSort("listeners");
        break;
        case "Pop.":
        Trackster.columnSort("listeners");
        break;
      }
      break;
      case "artist":
      switch ($(this).text()) {
        case "Song":
        break;
        case "Artist":
        Trackster.columnSort("name");
        break;
        case "Art.":
        Trackster.columnSort("name");
        break;
        case "Popularity":
        Trackster.columnSort("listeners");
        break;
        case "Pop.":
        Trackster.columnSort("listeners");
        break;
      }
      break;
    }
  });
});

$(document).on("click", ".artistLink", function(event) {
  var artistSearch = ($(this).text());
  Trackster.searchByArtist(artistSearch);
});
/*
  Given an array of track data, create the HTML for a Bootstrap row for each.
  Append each "row" to the container in the body to display all tracks.
*/
Trackster.renderTracks = function(tracks) {
$("#track-list").empty();
for (var i = 0; i < tracks.length; i++) {
  var mediumAlbumArt = tracks[i].image[1]["#text"];
  var xlAlbumArt = tracks[i].image[3]["#text"];
  var popularity = numeral(tracks[i].listeners).format('0a');
  var $newTrack =
  '<div class="row track">' +
  'div class="col-xs-1 col-xs-offset-1">' +
  '<a href="' + tracks[i].url + '" target="_blank">' +
  '<i class="fa fa-play-circle-o fa-2x" aria-hidden="true"></i>' +
  '</a>' +
  '</div>' +
  '<div class="col-xs-3 hideOverFlow"></div>' +
  'div class="col-xs-2 hideOverFlow artistLink">' + tracks[i].name + '</div>' +
  '<div class="col-xs-2"><a href="#" data-featherlight="' + xlAlbumArt + '" target="_blank"><img class="AlbumArt" src="' + mediumAlbumArt + '" alt="Album Art" /></a></div>' +
  '<div class="col-xs-2">' + popularity + '</div>' +
  '</div>';
  $("#track-list").append($newTrack);
}
};

/*
  Given a search term as a string, query the LastFM API.
  Render the tracks given in the API query response.
*/
Trackster.searchTracksByTitle = function(title) {

};

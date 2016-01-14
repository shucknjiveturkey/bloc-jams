var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/imgs/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };
var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/imgs/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };
var dannyNoonan = {
     name: 'Caddyshack',
     artist: 'Bill Murray',
     label: 'Orion Pictures',
     year: '1980',
     albumArtUrl: 'http://ia.media-imdb.com/images/M/MV5BNzk2OTE2NjYxNF5BMl5BanBnXkFtZTYwMjYwNDQ5._V1._CR8,0,331,448_SY317_CR10,0,214,317_AL_.jpg',
     songs: [
         { name: 'Chevy Chase', length: '1:55' },
         { name: 'Rodney Dangerfield', length: '5:55' },
         { name: 'Ted Knight', length: '3:55'},
         { name: "Michael O'Keefe", length: '3:55' },
         { name: 'Bill Murray', length: '2:55'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
     // #1

 
     // #2
     albumTitle.firstChild.nodeValue = album.name;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
     }
 };

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     var albums = [albumPicasso,albumMarconi,dannyNoonan];
     var d = 1;
     albumImage.addEventListener("click", function(event){
        setCurrentAlbum(albums[d]);
        d++;
        if (d === albums.length){
            d = 0;
        
        }
     
     });
 };
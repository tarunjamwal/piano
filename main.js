
    $('.welcome-screen button').on('click', function() {
        var name = $('#name-input').val();
        if (name.length > 2) {
            var message = "Welcome, " + name;
            $('.main .user-name').text(message);
            $('.welcome-screen').addClass('hidden');
            $('.main').removeClass('hidden');
        } else {
            $('#name-input').addClass('error');
        }
    });
    function toggleSong() {
var song = document.querySelector('audio');
if(song.paused == true) {
console.log('Playing');
$('.play-icon').removeClass('fa-play').addClass('fa-pause');
song.play();
}
else {
console.log('Pausing');
$('.play-icon').removeClass('fa-pause').addClass('fa-play');
song.pause();
}
} 
   $('.play-icon').on('click', function() {
toggleSong();
});

$('body').on('keypress',function(event) {
    var target = event.target;
    if (event.keyCode == 32 && target.tagName !='INPUT')
    {
        toggleSong();
    }
});
function fancyTimeFormat(time)
{   
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}
function updateCurrentTime() {
    var song = document.querySelector('audio');
    var currentTime = Math.floor(song.currentTime);
    currentTime = fancyTimeFormat(currentTime);
    var duration = Math.floor(song.duration);
    duration = fancyTimeFormat(duration)
    $('.time-elapsed').text(currentTime);
    $('.song-duration').text(duration);
}


var songList = ['Senorita(Zindgi Na Milegi Dobara)',
'I Love You', 'Sadda Haq', 'Pani Da Rang']; 

var fileNames = ['song1.mp3','song2.mp3','song3.mp3','song4.mp3'];

function addSongNameClickEvent(songObj,position) {
   var songName = songObj.fileName; // New Variable
    var id = '#song' + position;
$(id).click(function() {
var audio = document.querySelector('audio');
var currentSong = audio.src;
if(currentSong.search(songName) != -1)
{
toggleSong();
}
else {
audio.src = songName;
toggleSong();
changeCurrentSongDetails(songObj);
}
});
}
// for (var i = 0; i < fileNames.length ; i++) {
//     addSongNameClickEvent(fileNames[i],i)
// }

var songs = [{
        'name': 'Senorita',
        'artist': 'Farhan Akhtar, Hrithik Roshan, Abhay Deol and María del Mar Fernández',
        'album': 'Zindgi Na Milegi Dobara',
        'duration': '3:51',
       'fileName': 'song1.mp3',
       'image' : 'song1.jpg'
    },
    {
        'name': 'I Love You',
        'artist': 'Ash King, Clinton Cerejo',
        'album': 'Bodygaurd',
        'duration': '4:18',
        'fileName': 'song2.mp3',
        'image' : 'song2.jpg'
    },
    {
        'name': 'Sadda Haq',
        'artist': 'Mohit Chauhan',
        'album': 'Rockstar',
        'duration': '6:04',
        'fileName': 'song3.mp3',
        'image' : 'song3.jpg'
    },
    {
        'name': 'Pani Da Rang',
        'artist': 'Ayushmann Khurrana',
        'album': 'Vicky Donar',
        'duration': '4:00',
        'fileName': 'song4.mp3',
        'image' : 'song4.jpg'
    }];



window.onload = function() {

changeCurrentSongDetails(songs[0]);

    for(var i =0; i < songs.length;i++) {
        var obj = songs[i];
        var name = '#song' + (i+1);
        var song = $(name);
        song.find('.song-name').text(obj.name);
        song.find('.song-artist').text(obj.artist);
        song.find('.song-album').text(obj.album);
        song.find('.song-length').text(obj.duration);
        addSongNameClickEvent(obj,i + 1);
    }

    updateCurrentTime(); 
    setInterval(function() {
    updateCurrentTime();
    },1000);

    $('#songs').DataTable({
        paging: false
    });
    
    
    
    
    var piano = Synth.createInstrument('piano');

                        $("#key_1").on('click',function(){
                            piano.play('C',3,2);
                         });
                         $('body').on('keypress',function(event){
                           if (event.keyCode == 81)
                              { piano.play('C',3,2);
                           }
                          });
    

                        $("#key_2").on('click',function(){
                            piano.play('D',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 87)
                             { piano.play('D',3,2);
                          }
                         });
    

                        $("#key_3").on('click',function(){
                            piano.play('E',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 69)
                             { piano.play('E',3,2);
                          }
                         });
    

                        $("#key_4").on('click',function(){
                            piano.play('F',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 82)
                             { piano.play('F',3,2);
                          }
                         });
    

                        $("#key_5").on('click',function(){
                            piano.play('G',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 84)
                             { piano.play('G',3,2);
                          }
                         });
    

                        $("#key_6").on('click',function(){
                           piano.play('A',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 89)
                             { piano.play('A',3,2);
                          }
                         });
    

                        $("#key_7").on('click',function(){
                          piano.play('B',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 85)
                             { piano.play('B',3,2);
                          }
                         });
    

                        $("#key_8").on('click',function(){
                          piano.play('C',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 73)
                             { piano.play('C',4,2);
                          }
                         });
    

                        $("#key_9").on('click',function(){
                          piano.play('D',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 79)
                             { piano.play('D',4,2);
                          }
                         });
    

                        $("#key_10").on('click',function(){
                          piano.play('E',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 80)
                             { piano.play('E',4,2);
                          }
                         });
    

                        $("#key_11").on('click',function(){
                          piano.play('F',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 91)
                             { piano.play('F',4,2);
                          }
                         });
    

                        $("#key_12").on('click',function(){
                          piano.play('G',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 93)
                             { piano.play('G',4,2);
                          }
                         });
    

                        $("#key_13").on('click',function(){
                          piano.play('A',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 90)
                             { piano.play('A',4,2);
                          }
                         });
    

                        $("#key_14").on('click',function(){
                          piano.play('B',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 88)
                             { piano.play('B',4,2);
                          }
                         });
    

                        $("#key_15").on('click',function(){
                          piano.play('C',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 67)
                             { piano.play('C',5,2);
                          }
                         });
    

                        $("#key_16").on('click',function(){
                          piano.play('D',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 86)
                             { piano.play('D',5,2);
                          }
                         });
    

                        $("#key_17").on('click',function(){
                          piano.play('E',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 66)
                             { piano.play('E',5,2);
                          }
                         });
    

                        $("#key_18").on('click',function(){
                          piano.play('F',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 78)
                             { piano.play('F',5,2);
                          }
                         });
    

                        $("#key_19").on('click',function(){
                          piano.play('G',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 77)
                             { piano.play('G',5,2);
                          }
                         });
    

                        $("#key_20").on('click',function(){
                          piano.play('A',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 44)
                             { piano.play('A',5,2);
                          }
                         });
    

                        $("#key_21").on('click',function(){
                          piano.play('B',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 46)
                             { piano.play('B',5,2);
                          }
                         });





                        $("#key-1").on('click',function(){
                          piano.play('C#',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 50)
                             { piano.play('C#',3,2);
                          }
                         });



                        $("#key-2").on('click',function(){
                          piano.play('D#',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 51)
                             { piano.play('D#',3,2);
                          }
                         });



                        $("#key-3").on('click',function(){
                          piano.play('F#',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 53)
                             { piano.play('F#',3,2);
                          }
                         });



                        $("#key-4").on('click',function(){
                          piano.play('G#',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 54)
                             { piano.play('G#',3,2);
                          }
                         });



                        $("#key-5").on('click',function(){
                          piano.play('A#',3,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 55)
                             { piano.play('A#',3,2);
                          }
                         });



                        $("#key-6").on('click',function(){
                          piano.play('C#',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 57)
                             { piano.play('C#',4,2);
                          }
                         });



                        $("#key-7").on('click',function(){
                          piano.play('D#',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 48)
                             { piano.play('D#',4,2);
                          }
                         });



                        $("#key-8").on('click',function(){
                          piano.play('F#',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 61)
                             { piano.play('F#',4,2);
                          }
                         });



                        $("#key-9").on('click',function(){
                          piano.play('G#',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 65)
                             { piano.play('G#',4,2);
                          }
                         });



                        $("#key-10").on('click',function(){
                          piano.play('A#',4,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 83)
                             { piano.play('A#',4,2);
                          }
                         });



                        $("#key-11").on('click',function(){
                          piano.play('C#',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 70)
                             { piano.play('C#',5,2);
                          }
                         });



                        $("#key-12").on('click',function(){
                          piano.play('D#',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 71)
                             { piano.play('D#',5,2);
                          }
                         });



                        $("#key-13").on('click',function(){
                          piano.play('F#',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 74)
                             { piano.play('F#',5,2);
                          }
                         });



                        $("#key-14").on('click',function(){
                          piano.play('G#',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 75)
                             { piano.play('G#',5,2);
                          }
                         });



                        $("#key-15").on('click',function(){
                          piano.play('A#',5,2);
                        });
                        $('body').on('keypress',function(event){
                          if (event.keyCode == 76)
                             { piano.play('A#',5,2);
                      }
                     });


}
function changeCurrentSongDetails(songObj) {
    $('.current-song-image').attr('src','img/' + songObj.image);
    $('.current-song-name').text(songObj.name);
    $('.current-song-album').text(songObj.album);
}
 $('.fa-keyboard-o').on('click', function() {
       
            $('.dataTables_wrapper').addClass('hidden');
            $('.piano-container').removeClass('hidden');
            $('.main').addClass('piano-bg');
            $('.content').addClass('piano-opacity');
            
         
    });

$('.fa-home').on('click', function() {
       
            $('.dataTables_wrapper').removeClass('hidden');
            $('.piano-container').addClass('hidden');
            $('.main').removeClass('piano-bg');
            
            
         
    });


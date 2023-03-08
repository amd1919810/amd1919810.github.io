var audios = ['1.mp3', '2.mp3', '3.mp3'];

var generateRandomAudio = function(audios) {

  var audio = new Audio(audios[Math.floor(Math.random() * audios.length)]);

  return audio;

}

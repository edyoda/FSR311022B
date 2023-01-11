$(document).ready(function(){
    var audioPlayer =  document.getElementById('audio-player')
    var playBtn = document.getElementById('play-button')
    var pauseBtn = document.getElementById('pause-button')
    var repeat = document.getElementById('repeat')
    var slowSpeed = document.getElementById('slow-speed')
    var normalSpeed = document.getElementById('normal-speed')
    var fastSpeed = document.getElementById('fast-speed')
    var increment = document.getElementById('increment')
    var decrement = document.getElementById('decrement')
    var progress = document.getElementById('progress')

    playBtn.addEventListener('click', function(){
        audioPlayer.play()
    })
    pauseBtn.addEventListener('click', function(){
        audioPlayer.pause()
    })
    repeat.addEventListener('click', function(){
        audioPlayer.currentTime = 0
    })
    slowSpeed.addEventListener('click', function(){
        audioPlayer.playbackRate = 0.5
    })
    normalSpeed.addEventListener('click', function(){
        audioPlayer.playbackRate = 1.0
    })
    fastSpeed.addEventListener('click', function(){
        audioPlayer.playbackRate = 2.0
    })
    increment.addEventListener('click', function(){
        audioPlayer.currentTime += 10
    })
    decrement.addEventListener('click', function(){
        audioPlayer.currentTime -= 10
    })
    audioPlayer.addEventListener('timeupdate', function(){
        console.log(progress.style)
        progress.style.width = (audioPlayer.currentTime/audioPlayer.duration)*100 + '%'
    })
})
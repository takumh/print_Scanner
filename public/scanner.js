const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(webcamElement, 'user', canvasElement, snapSoundElement);

window.addEventListener('load', function(){
    webcam.start()
    .then(result => {
        console.log("webcam started");
    })
    .catch(err => {
        console.log(err);
    });

}, false);

const capture = document.getElementById('captureBtn');
capture.addEventListener('click', function () {
    let picture = webcam.snap();
    localStorage.setItem("picUrl", picture);
    document.querySelector('#download-photo').href = picture;
    webcam.stop();
    document.getElementById('webcam').style.display = "none";
}, false);

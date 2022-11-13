var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak()

    var synth = window.speechSynthesis;
    Webcam.attach(camera);
setTimeout(function()
{
    img_id = "selfei";
    take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}, 5000);

function take_snapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
     if(img_id=="selfei1"){
        document.getElementById("result1").innerHTML = '<img id="selfei1" scr="'+data_yri+'"/>';
     }
     if(img_id=="selfei2"){
        document.getElementById("result2").innerHTML = '<img id="selfei2" scr="'+data_yri+'"/>';
     }
     if(img_id=="selfei3"){
        document.getElementById("result3").innerHTML = '<img id="selfei3" scr="'+data_yri+'"/>';
     }
     
    });

}
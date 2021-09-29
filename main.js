 var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);
    My_text = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = My_text;
    
    if(My_text == "take my selfie"){
        console.log("taking your selfie-------------")
        speak();
    }
  
}

camera = document.getElementById("camera")
Webcam.set({
    width : 360 , 
    height : 250,
    image_format : "jpg",
    jpg_quality : 90


})

function speak(){

    synth = window.speechSynthesis;
    speak_data = "taking your selfie in 5 seconds"
    utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this)
    Webcam.attach (camera)

    setTimeout(function(){
        take_snapshot()
       save()
       
    },
   5000 )
}

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id  = "output" src = "' +data_uri+ '">'
    })
}

function save(){
  link_var = document.getElementById("link");
  image_var = document.getElementById("output").src;
  link_var.href = image_var;
  link_var.click()
}

var img_id = "";
var img_id = "";


var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("TextBox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event)

    Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("TextBox").innerHTML = Content;
    if(Content == "take my selfie"){
    speak();
    }
}

function speak(){
    var snyth = window.speechSynthesis;

    speak_data = "Taking 3 selfies, Should be done after 28 seconds.";

    Utter_this = new SpeechSynthesisUtterance(speak_data);

    snyth.speak(Utter_this);
    Webcam.attach(box);

        
    setTimeout(function(){
        img_id = "selfie1";
        takesnap();
        speak_data = "next selfie coming in";
        var Utter_this = new SpeechSynthesisUtterance(speak_data);
        snyth.speak(Utter_this);
    
    }, 7000);
    
        setTimeout(function(){
            img_id = "selfie2";
            takesnap();
            speak_data = "next selfie coming in";
            var Utter_this = new SpeechSynthesisUtterance(speak_data);
            snyth.speak(Utter_this);
        
    }, 9000);
    
            setTimeout(function(){
                img_id = "selfie3";
                takesnap();
    }, 12000);
}

box = document.getElementById("box");

Webcam.set({
width: 360,
height: 360,
image_format: "jpg",
jpg_quality: 90
});

function takesnap(){
    console.log(img_id);

    Webcam.snap(function(data_uri){
    if(img_id == "selfie1"){
       document.getElementById("result1").innerHTML = '<img id="selfie1" onmousedown="stylek()" src="'+data_uri+'"/>';
    }

    if(img_id == "selfie2"){
        document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
    }

    if(img_id == "selfie3"){
        document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
    }

    });
}

function stylek(){
 document.getElementById("first").style.opacity = 0.5;
 console.log("figure it out");
 document.getElementById("first").style.width = 220;
 document.getElementById("first").style.height = 220;
}

function stylekoff(){
    document.getElementById("first").style.opacity = 1;
    console.log("done");
    document.getElementById("first").style.width = 250;
    document.getElementById("first").style.height = 250;
}

function stylek2(){
    document.getElementById("second").style.opacity = 0.5;
    console.log("figure it out");
    document.getElementById("second").style.width = 220;
    document.getElementById("second").style.height = 220;
}
   
   function stylekoff2(){
       document.getElementById("second").style.opacity = 1;
       console.log("done");
       document.getElementById("second").style.width = 250;
       document.getElementById("second").style.height = 250;
}

   function stylek3(){
    document.getElementById("third").style.opacity = 0.5;
    document.getElementById("third").style.width = 220;
    document.getElementById("third").style.height = 220;
    console.log("figure it out");
}
   
   function stylekoff3(){
       document.getElementById("third").style.opacity = 1;
       console.log("done");
       document.getElementById("third").style.width = 250;
       document.getElementById("third").style.height = 250;
}
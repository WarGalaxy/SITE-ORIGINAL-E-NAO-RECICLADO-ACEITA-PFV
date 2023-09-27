var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}

recognition.onresult = function(event){
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content)

    document.getElementById("textbox").innerHTML = Content;

    if(Content == "tire minha foto"){
        console.log("tirando foto... ")
        speak();
    }

}

function speak(){
    var synth = window.speechSynthesis;
    speakData = "Irei tirar 3 fotos suas e juntar elas. Tirando foto em 3 segundos";
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    Webcam.attach(camera);

    setTimeout(function(){
        imgId= "selfie1";
        take_selfie();
        speakData = "Tirando segunda foto em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 8000)

    setTimeout(function(){
        imgId= "selfie2";
        take_selfie();
        speakData = "Tirando terceira foto em 5 segundos";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 14000)

    setTimeout(function(){
        imgId= "selfie3";
        take_selfie();
        speakData = "Pronto veja o resultado";
        var utterThis = new SpeechSynthesisUtterance(speakData);
        synth.speak(utterThis);
    }, 20000)
}

camera = document.getElementById("camera");

Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_selfie (){

    console.log(imgId);

    Webcam.snap(function(data_uri){
        if(imgId=="selfie1"){
        document.getElementById("result1").innerHTML= '<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie2"){
            document.getElementById("result2").innerHTML= '<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(imgId=="selfie3"){
            document.getElementById("result3").innerHTML= '<img id="selfie3" src="'+data_uri+'"/>';
        }
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("foto_image").src;
    link.href = image;
    link.click();
}
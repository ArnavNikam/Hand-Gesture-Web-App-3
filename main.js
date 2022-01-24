Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

console.log("camera is sucessfully attached, proof: ", camera)

Webcam.attach(camera);

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src="+data_uri+"></img>";
    })

    console.log("function snapshot is working");
}

console.log("ml5 version "+ml5.version)

classifier =ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/VXAz0ahk4/model.json",modelloaded)

function modelloaded(){
    console.log("Model is Loaded!");
}

function speak(){
    var api= window.speechSynthesis;

    data1="the prediction is"+prediction1;

    tectospeech=new SpeechSynthesisUtterance(data1);

    api.speak(tectospeech);
}

function check(){
    img = document.getElementById("captured_image");

    console.log("It is taking images, proof: ", img)

    classifier.classify(img, gotResult);

    console.log("check is working");
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
        console.log("it is a error");
    } else {
        console.log(result);
        console.log("it is a result");
        document.getElementById("predic1").innerHTML = result[0].label;
        prediction1 = result[0].label;
        console.log("prediction 1 is ", prediction1);
        speak();
        if(result[0].label == "Victory "){
            document.getElementById("predic1").innerHTML = "That was a marvelious victory";
            console.log("app test a-ok");
        }
        if(result[0].label == "Yes"){
            document.getElementById("predic1").innerHTML = "All the best or yes";
            console.log("app test a-ok");
        }
        if(result[0].label == "United"){
            document.getElementById("predic1").innerHTML = "United we stand";
            console.log("app test a-ok");
        }
        if(result[0].label == "Amazing"){
            document.getElementById("predic1").innerHTML = "This looks amazing";
            console.log("app test a-ok");
        }
    }
}
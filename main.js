Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("camera");

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='whats' src='" + data_uri + "'>";
    });
    console.log("ml5 version=",ml5.version);
}

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k6nLkgkgy/model.json",indent);

function indent(){
    console.log("model loaded");
}

function identify(){
   var cap=document.getElementById("whats");
   classifier.classify(cap,getresult);
}

function getresult(error,result){
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }

    document.getElementById("oboname").innerHTML=result[0].label;
    document.getElementById("percentage").innerHTML=result[0].confidence.toFixed(3);
}
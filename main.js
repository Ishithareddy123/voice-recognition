function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/gcrR3OQGK/model.json",modelLoaded);
}
function modelLoaded(){
    console.log("model loaded");
    classifier.classify(gotResults);
}
function gotResults(error,results){
console.log(results);
}
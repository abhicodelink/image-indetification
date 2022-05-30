camera = document.getElementById("camera");

Webcam.attach('#camera');

Webcam.set({

width:350,
height:300,
image_format:'png',
png_quality:90

});



function take_snapshot(){

  Webcam.snap(function(data_uri){

    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';

  });

}
console.log('ml5 version:', ml5.version);
classfier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aN6SmgXFx/model.json', modelLoaded);
function modelLoaded(){

  console.log('Model Loaded');

};
function check(){

  img = document.getElementById('captured_image');

  classfier.classify(img , gotResult);


}
function gotResult(error,results){

  if (error){

    console.error(error);

}
else {

  console.log(results);
document.getElementById("object_name").value

}

  }









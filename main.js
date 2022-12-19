function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dikaUD8Lq/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){

if (error){
    console.error(error);
}else{
    console.log(results);
    random_number_r=Math.floor(math.random()*255)+1;
    random_number_g=Math.floor(math.random()*255)+1;
    random_number_b=Math.floor(math.random()*255)+1;
    document.getElementById("result_label").innerHTML = 'i can hear-'+
    results[0].label;
document.getElementById("result_confidence").innerHTML='accuracy-'+
(results[0].confidence*100).toFixed(2)+"%";
docucument.getElementById("result_label").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";
docucument.getElementById("result_confidence").style.color = "rgb("
+random_number_r+","+random_number_g+","+random_number_b+")";

img=document.getElementById('new ear');

if(results[0].label=='barking'){
    img.src=dogg-Copy.jpg;
   
}
else if(results[0].label=='meowing'){
    img.src=cat.jpg;

}
else if(results[0].label=='roaring'){
    img.src=lion.png;

}
else if(results[0].label=='mooing'){
    img.src=cow.jpg;

}
else{
    img.src=new ear.jpg;

}
}
}
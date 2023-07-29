ai=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ACVNsgkqW/model.json",listo)
function r(error,results){
    if(!error){
        console.log(results)
        muestrate=results[0].label
        muestrare=results[0].confidence
        muestrare=Math.round(muestrare*100)
        document.getElementById("lalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalalala").innerHTML=muestrate
        document.getElementById("address_a_d_d_r_e_double_s_address").innerHTML=muestrare+'%'
    }
}
function listo(){
    console.log("d")
}
Webcam.set({
    width:350,
    heght:300,
    image_format : "png",
    png_quality:90
});
function wasaaa(){
    Webcam.snap(function(photo){
        document.getElementById("tutorialDeQueHacerEnElDiaDelNiñoRetrasado").innerHTML='<img id="photo" src="'+photo+'">'
    })
}
Webcam.attach( "#asdfghjklñzxcvbnmqwertyuiop");
function kewjfjbhhwfnjhnerhiuurehiugbuerhgiuheurhyrehreuhiuhuheihiughsriuheriushiul(){
    ai.classify(photo, r)
}
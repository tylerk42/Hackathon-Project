var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Rollercoasters.csv"
function showSpeed(){
    document.getElementById("sliderVal").innerHTML = document.getElementById("coasterSpeed").value
}
function showHeight(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("coasterHeight").value
}
function showLength(){
    document.getElementById("sliderNum").innerHTML = document.getElementById("coasterLength").value
}


var coasterName= getColumn(url,1)
var parkName= getColumn(url,2)
var city= getColumn(url,3)
var country= getColumn(url,4)
var parkRegion= getColumn(url,5)
var constructionMaterial= getColumn(url,6)
var rawHeight= getColumn(url,7)
var rollerHeight = [];
for(var i = 0; i < rawHeight.length; i++){
    rollerHeight.push(rawHeight[i] * 3.28);
}

var rawSpeed= getColumn(url,8)
var rollerSpeed=[];
for(var j=0;j<rollerSpeed;j++){
    rollerSpeed.push(rawSpeed[j]/1.609)
}
var rawLength= getColumn(url,9)
var rollerLength=[];
for(var k = 0; k<rawLength;k++){
    rollerLength.push(rawLength*3.28)
}
var inversion=getColumn(url,10)

// function createlist(){
//     console.log(document.getElementById("coasterHeight").value)
// }
var inversionStatus=false;
function inversionTrue(){
inversionStatus="yes"
}
function inversionFalse(){
    inversionStatus="no"
}
function createlist(material, region, speed, height, length){
    document.getElementById("output").innerHTML=""
    var matchingOutputs=[];
    var infoList;
    console.log(speed);
    for(var i=0; i<coasterName.length; i++){
        if(material==constructionMaterial[i]&&region==parkRegion[i]&&Math.abs(rollerSpeed[i] - speed) < 20&&Math.abs(rollerHeight[i] - height) < 20&&Math.abs(rollerLength[i] - length) < 500&&inversion[i]==inversionStatus){
            infoList= "(Coaster Name: "+coasterName[i]+", Park Name:"+parkName[i]+", City:"+city[i]+", Country: "+country[i]+")"+"<br>"
            matchingOutputs.push(infoList)
        }
      
    }
    if(matchingOutputs="[]"){
            matchingOutputs="Sorry we couldn't find any matches"
    }
   
    document.getElementById("output").innerHTML=matchingOutputs

}

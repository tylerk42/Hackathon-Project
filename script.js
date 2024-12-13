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
var rollerHeight= getColumn(url,7)*3.28
var rollerSpeed= getColumn(url,8)*.62
var rollerLength= getColumn(url,9)*3.28
var inversion=getColumn(url,10)

// function createlist(){
//     console.log(document.getElementById("coasterHeight").value)
// }
var inversionStatus
function inversionTrue(){
inversionStatus=true
}
function inversionFalse(){
inversionStatus=false
}
function createlist(material, region, speed, height, length){
    document.getElementById("output").innerHTML=""
    var matchingOutputs=[];
    var infoList;
    var material = document.getElementById("material").value;
    var region= document.getElementById("region").value;
    var speed= document.getElementById("coasterSpeed").value;
    var height= document.getElementById("coasterHeight").value;
    var length= document.getElementById("coasterLength").value;
    var speedWork=false
    var heightWork=false
    var lengthWork=false
    for(var i=0; i<coasterName.length; i++){
        if(material==constructionMaterial[i]&&region==parkRegion[i]&&Math.abs(rollerSpeed[i] - speed) < 10&&Math.abs(rollerHeight[i] - height) < 10&&Math.abs(rollerLength[i] - length) < 100&&inversion[i]==inversionStatus){
            infoList= "(Coaster Name: "+coasterName[i]+", Park Name:"+parkName[i]+", City:"+city[i]+", Country: "+country[i]+")"
            matchingOutputs.push(infoList)
            // console.log(infoList)
            infoList=""
        }
    }
    console.log(matchingOutputs)
    speedWork=false
    heightWork=false
    lengthWork=false
    inversionStatus=false
}  

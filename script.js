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
var rollerHeight= getColumn(url,7)
var rollerSpeed= getColumn(url,8)
var rollerLength= getColumn(url,9)

// function createlist(){
//     console.log(document.getElementById("coasterHeight").value)
// }

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
        if (rollerSpeed[i]<=50&&speed<=50){
            speedWork=true
        }
        else if (rollerSpeed[i]<=100&&rollerSpeed[i]>50&&speed<=100&&speed>50){
            speedWork=true
        }
        else if (rollerSpeed[i]>100&&speed>100){
            speedWork=true
            console.log("w")
        }
        else if (rollerHeight[i]<=15&&height<=15){
            heightWork=true
        }
        else if (rollerHeight[i]<=75&&height[i]>15&&height<=75&&height>15){
            heightWork=true
        }
        else if (rollerHeight[i]>75&&speed>75){
            heightWork=true
        }
        else if (rollerLength[i]<=250&&length<=250){
            lengthWork=true
        }
        else if (rollerLength[i]<=1000&&length[i]>250&&length<=1000&&length>250){
            lengthWork=true
        }
        else if (rollerLength[i]>1000&&length>1000){
            lengthWork=true
        }
        if(material==constructionMaterial[i]&&region==parkRegion[i]&&lengthWork==true&&heightWork==true&&speedWork==true){
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
}  

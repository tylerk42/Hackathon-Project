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



function createlist(material, region, speed, height, length){
    document.getElementById("output").innerHTML=""
    var matchingOutputs=[];
    var infoList;
    var material = document.getElementById("material").value;
    var region= document.getElementById("region").value;
    var speed= document.getElementById("coasterSpeed").value;
    var height= document.getElementById("coasterHeight").value;
    var length= document.getElementById("coasterLength").value;
    for(var i=0; i<coasterName.length; i++){
        if (rollerSpeed[i]<=50&&speed<=50){
            var speedWork=true
        }
        else if (rollerSpeed[i]<=100&&rollerSpeed[i]>50&&speed<=100&&speed>50){
            var speedWork=true
        }
        else if (rollerSpeed[i]>100&&speed>100){
            var speedWork=true
        }
        else if (rollerHeight[i]<=15&&height<=15){
            var heightWork=true
        }
        else if (rollerHeight[i]<=75&&height[i]>15&&height<=75&&height>15){
            var heightWork=true
        }
        else if (rollerHeight[i]>75&&speed>75){
            var heightWork=true
        }
        else if (rollerLength[i]<=250&&length<=250){
            var lengthWork=true
        }
        else if (rollerLength[i]<=1000&&length[i]>250&&length<=1000&&length>250){
            var lengthWork=true
        }
        else if (rollerLength[i]>1000&&length>1000){
            var lengthWork=true
        }
        if(material==constructionMaterial[i]&&region==parkRegion[i]&&lengthWork==true&&heightWork==true&&speedWork==true){
            infoList[i]= "("+coasterName[i]+", "+parkName[i]+", "+city[i]+", "+country[i]+")"
            matchingOutputs.push(infoList[i])
        }
    }
    console.log(matchingOutputs)
}  
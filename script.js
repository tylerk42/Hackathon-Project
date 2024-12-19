//spreadsheet url
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/refs/heads/main/Science/Rollercoasters.csv"
//functions to show the value of the slider
function showSpeed(){
    document.getElementById("sliderVal").innerHTML = document.getElementById("coasterSpeed").value
}
function showHeight(){
    document.getElementById("sliderValue").innerHTML = document.getElementById("coasterHeight").value
}
function showLength(){
    document.getElementById("sliderNum").innerHTML = document.getElementById("coasterLength").value
}
//setting variables from spreadhsheet
var coasterName= getColumn(url,1)
var parkName= getColumn(url,2)
var city= getColumn(url,3)
var country= getColumn(url,4)
var parkRegion= getColumn(url,5)
var constructionMaterial= getColumn(url,6)
var inversion=getColumn(url,10)
//transforming height list to convert meters into yards
var rawHeight= getColumn(url,7)
var rollerHeight = [];
var l=0
while(l<rawHeight.length){
   
    rollerHeight.push(rawHeight[l] * 1.094);
    l++
}
//transforming speed list to convert km/h into mph
var rawSpeed= getColumn(url,8)
var rollerSpeed=[];
var j=0;
while(j<rawSpeed.length){
   
    rollerSpeed.push(rawSpeed[j]/1.609)
    j++
}
//transforming length list to convert meters into yards
var rawLength= getColumn(url,9)
var rollerLength=[];
var k=0;
while(k<rawLength.length){
    
    rollerLength.push(parseFloat(rawLength[k]) * 1.094);
    k++
}
//setting default inversion to no
var inversionStatus="No";
//functions to change inversion status when the button is clicked
function inversionTrue(){
    inversionStatus="Yes"
}
function inversionFalse(){
    inversionStatus="No"
}
//function that runs on find my coaster buttom
//takes parameters of all five inputs
function createlist(material, region, speed, height, length){
    //creating variables that contribute to output
    var matchingOutputs=[];
    var infoList;
    //loop to run through all the coasters
    for(var i=0; i<coasterName.length; i++){
        //checking if the coaster at i matches all of the outputs
        //for speed length and height there is a range of difference to make it work more often

       if(Math.abs(rollerSpeed[i]-speed)<27&&Math.abs(rollerLength[i]-length)<866&&Math.abs(rollerHeight[i]-height)<50&&inversionStatus==inversion[i]&&constructionMaterial[i]==material&&parkRegion[i]==region){
        //adding all the information for the coaster that works to a variable
        infoList= "Coaster Name: "+coasterName[i]+", Park Name: "+parkName[i]+", City:"+city[i]+", Country: "+country[i];
        //adding info list to the list variable
        matchingOutputs.push(infoList)
        }
    }
    //writing an error message
    if(matchingOutputs.length == 0){
            matchingOutputs=["Sorry, we couldn't find any matches"]
    }
    //adding matching outputs to the output box
    //joining matching ouputs together and adding a break between all coasters
    document.getElementById("output").innerHTML=matchingOutputs.join("<br><br>")
}

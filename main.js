alert("Service Delivery")


function callTwoOtherFunctions(){
  storeVar();
}

function storeVar() {
  
let pnr = document.getElementById('dkhl').value;

let result = pnr.toUpperCase().replace(/A/g," Alfa ").replace(/B/g," Bravo ").replace(/C/g, " Charlie ").replace(/D/g, " Delta ").replace(/E/g, " Echo ").replace(/F/g, " Foxtrot ").replace(/G/g, " Golf ").replace(/H/g, " Hotel ").replace(/I/g, " India ").replace(/J/g, " Juliette ").replace(/K/g, " Kilo ").replace(/L/g, " Lima ").replace(/M/g, " Mike ").replace(/N/g, " November ").replace(/O/g, " Oscar ").replace(/P/g, " Papa ").replace(/Q/g, " Quebec ").replace(/R/g, " Romeo ").replace(/S/g, " Sierra ").replace(/T/g, " Tango ").replace(/U/g, " Uniform ").replace(/V/g, " Victor ").replace(/W/g, " Whiskey ").replace(/X/g, " X-ray ").replace(/Y/g, " Yankee ").replace(/Z/g, " Zulu ");
  
alert("PNR value is : " + pnr.toUpperCase() +"     " + result);


let inputF = document.getElementById("dkhl");
let botona = document.getElementById("lbotona");
inputF.select().execCommand('copy');
inputF.innerHTML = "Copied! ";


};

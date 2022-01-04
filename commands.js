function commandsList(){
    
let ref = document.getElementById("ref1");
    let ref2 =document.getElementById("ref22");
    let ref3 =document.getElementById("ref3");
    let ref4 =document.getElementById("ref4444");
    let name = document.getElementById("nm1");
    let gname = document.getElementById("nm2");
    let age = document.getElementById("age1");
    let rt = document.getElementById("start1");
    let arr = document.getElementById("dest1");
    let multi1 = document.getElementById("escale1");
    let multi2 = document.getElementById("escale2");
    let departureTime = document.getElementById("time1");
    let arrivalTime = document.getElementById("time2");
    let departDate = document.getElementById("mj1");

    //Convert CCI age to Amadeus format
function caf(){
let convertCciAge = document.getElementById("cciage").value;
let chhHr = convertCciAge.slice(3,5);
let cciA = convertCciAge.slice(0,-8)+chhHr.replace("01","jan").replace("02","feb").replace("03","mar").replace("04","apr").replace("05","may").replace("06","jun").replace("07","jul").replace("08","aug").replace("09","sep").replace("10","oct").replace("11","nov").replace("12","dec") +convertCciAge.slice(8);
let mX = cciA;
return(mX);

}  
    let resultat = caf().toString().toUpperCase();
    //************************************** */

    //******************Amadeus Age */

    function amadAge(){
        let convertAmadAge = document.getElementById("amadeusAge").value;
       let resul = convertAmadAge.slice(0,5)+convertAmadAge.slice(7,9);
        return(resul);
    };
    let res = amadAge().toString().toUpperCase();
    //******************************* */
    
    let message = `${ref.value}     RT${ref.value}      PDRT/${ref.value}     RTOA/TRN/-${ref.value}  \n   PDN/-${name.value}${gname.value}\nCCL/TRN/FRR/FRR/${name.value}/${gname.value}/${resultat}${res}\n 
    Round Trip FXD : FXD${rt.value}/D${departDate.value}${arr.value} MAD/D${departureTime.value}FRA//FBA 
    `;
    function tb3 (){
        
    }
    console.log(message);
    document.getElementById("amadText").innerHTML = message ;

    
    /*///////////////
    FXDFRA/D20JULMAD/D23JULFRA//FBA 
    or 
    FXDzrh/D20JULbcn/D23JULzrh//alx/fba
    
    but when pricing a PNR with standard pricing transactions (FXB, FXP, FQP, etc.) the entry is different: e.g. FXB/SBF-1
    *////////
    
}
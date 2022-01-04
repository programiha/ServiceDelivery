let convertCciAge = document.getElementById("cciage");
let chhHr = convertCciAge.slice(3,5);
let cciA = convertCciAge.slice(0,-8)+chhHr.replace("01","jan").replace("02","feb").replace("03","mar").replace("04","apr").replace("05","may").replace("06","jun").replace("07","jul").replace("08","aug").replace("09","sep").replace("10","oct").replace("11","nov").replace("12","dec") +convertCciAge.slice(8);
let mX = cciA.value;
//alert(mX)




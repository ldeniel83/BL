// variables

var benfordArray = [];
var benfordArrayLatent =[];
var benfordArrayProcessed = [];
var resultArray = {};
var n1=0;
var n2=0;
var n3=0;
var n4=0;
var n5=0;
var n6=0;
var n7=0;
var n8=0;
var n9=0;
var calInput= document.getElementById("formula2");

//benford formula
//Math.floor(((Math.random())*((Math.random())*(Math.random()))*1000))

//functions


function randomArray() {

    for (i=0 ; i< 1000000 ; i++) {
        benfordArray[i] = eval(calInput.value);
    };
    console.log(benfordArray);


}

function truncateNumbers() {
    benfordArrayLatent = benfordArray.map(String);
    console.log(benfordArrayLatent);
    for (i=0 ; i < benfordArrayLatent.length ; i++) {
        
        benfordArrayLatent[i] = benfordArrayLatent[i].charAt(0);
        
    }
    benfordArrayProcessed = benfordArrayLatent.map(Number);
    console.log(benfordArrayProcessed);
}



function blprocess() {
    var n1=0;
    var n2=0;
    var n3=0;
    var n4=0;
    var n5=0;
    var n6=0;
    var n7=0;
    var n8=0;
    var n9=0;

    for (i = 0; i < benfordArrayProcessed.length; i++)  {
        if (benfordArrayProcessed[i] == 1) {

            n1++;

            }else if (benfordArrayProcessed[i] == 2) {

                    n2++;

                }else if (benfordArrayProcessed[i] == 3) {
                    
                        n3++;

                    }else if (benfordArrayProcessed[i] == 4) {
                    
                            n4++;

                        }else if (benfordArrayProcessed[i] == 5) {
                    
                                n5++;

                            }else if (benfordArrayProcessed[i] == 6) {
                    
                                    n6++;

                                }else if (benfordArrayProcessed[i] == 7) {
                    
                                        n7++;

                                    }else if (benfordArrayProcessed[i] == 8) {
                    
                                            n8++;

                                        }else if (benfordArrayProcessed[i] == 9) {
                    
                                                n9++;
                                            }        
    }; 
  
    nf1= (n1/benfordArrayProcessed.length)*100;
    nf2= (n2/benfordArrayProcessed.length)*100;
    nf3= (n3/benfordArrayProcessed.length)*100;
    nf4= (n4/benfordArrayProcessed.length)*100;
    nf5= (n5/benfordArrayProcessed.length)*100;
    nf6= (n6/benfordArrayProcessed.length)*100;
    nf7= (n7/benfordArrayProcessed.length)*100;
    nf8= (n8/benfordArrayProcessed.length)*100;
    nf9= (n9/benfordArrayProcessed.length)*100;
    

    resultArray= { 1: nf1+"%" , 2: nf2+"%" , 3: nf3+"%" , 4: nf4+"%" , 5: nf5+"%" , 6: nf6+"%" , 7: nf7+"%" , 8: nf8+"%" , 9: nf9+"%"}
    console.log(resultArray);

}



function returnTextPer() {
    document.getElementById("per1").innerHTML = "1: "+nf1+"%";
    document.getElementById("per2").innerHTML = "2: "+nf2+"%";
    document.getElementById("per3").innerHTML = "3: "+nf3+"%";
    document.getElementById("per4").innerHTML = "4: "+nf4+"%";
    document.getElementById("per5").innerHTML = "5: "+nf5+"%";
    document.getElementById("per6").innerHTML = "6: "+nf6+"%";
    document.getElementById("per7").innerHTML = "7: "+nf7+"%";
    document.getElementById("per8").innerHTML = "8: "+nf8+"%";
    document.getElementById("per9").innerHTML = "9: "+nf9+"%";
}

function buttonListeners() {
    document.getElementById("defaultButton").addEventListener("click", function() {
        document.getElementById("formula2").value = "Math.floor(((Math.random())*((Math.random())*(Math.random()))*1000))";
    })
    
    document.getElementById("lessAccurateButton").addEventListener("click", function() {
        document.getElementById("formula2").value = "Math.floor((((Math.random())*(Math.random()))*1000))";
    })

    document.getElementById("trueRandomButton").addEventListener("click", function(){
        document.getElementById("formula2").value = "Math.floor((Math.random())*1000)"
    })

    
}

function runBenfordLaw() {
    randomArray();
    truncateNumbers();
    blprocess();
    returnTextPer();
    buttonListeners();
}

function calEventListener() {
    document.querySelector("form.formulaForm").addEventListener('submit', function(e){
        e.preventDefault();
        runBenfordLaw();
    })
}

// executed
calEventListener();
runBenfordLaw();
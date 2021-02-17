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




            // benford formula
            // Math.floor(((Math.random())*((Math.random())*(Math.random()))*1000))

//functions


// Election simulation

    // This function will simulate an election, assigning a random number of voters to each county in the 'countiesList' array before distributing their votes between 2 candidates.
    // It then runs a benford's law analysis on the results belonging to each candidate.
function countyVoteGeneration() {

    let votingPoolSize= document.getElementById("voterNumber");
    let countiesResults1Latent=[];
    let countiesResults2Latent=[];
    let countiesResults1=[];
    let countiesResults2=[];
    let countiesResults1Processed=[];
    let countiesResults2Processed=[];
    let countiesList= [['Alcona', {candidate1 : 0, candidate2 : 0}], ['Alger', {candidate1: 0, candidate2: 0}], ['Allegan', {candidate1: 0, candidate2: 0}], ['Alpena', {candidate1: 0, candidate2: 0}], ['Antrim', {candidate1: 0, candidate2: 0}], ['Arenac', {candidate1: 0, candidate2: 0}], ['Baraga', {candidate1: 0, candidate2: 0}], ['Barry', {candidate1: 0, candidate2: 0}], ['Bay', {candidate1: 0, candidate2: 0}], ['Benzie', {candidate1: 0, candidate2: 0}], ['Berrien', {candidate1: 0, candidate2: 0}], ['Branch', {candidate1: 0, candidate2: 0}], ['Calhoun', {candidate1: 0, candidate2: 0}], ['Cass', {candidate1: 0, candidate2: 0}], ['Charlevoix', {candidate1: 0, candidate2: 0}], ['Cheboygan', {candidate1: 0, candidate2: 0}], ['Chippewa', {candidate1: 0, candidate2: 0}], ['Clare', {candidate1: 0, candidate2: 0}], ['Clinton', {candidate1: 0, candidate2: 0}], ['Crawford', {candidate1: 0, candidate2: 0}], ['Delta', {candidate1: 0, candidate2: 0}], ['Dickinson', {candidate1: 0, candidate2: 0}], ['Eaton', {candidate1: 0, candidate2: 0}], ['Emmet', {candidate1: 0, candidate2: 0}], ['Genesee', {candidate1: 0, candidate2: 0}], ['Gladwin', {candidate1: 0, candidate2: 0}], ['Gogebic', {candidate1: 0, candidate2: 0}], ['GrandTraverse', {candidate1: 0, candidate2: 0}], ['Gratiot', {candidate1: 0, candidate2: 0}], ['Hillsdale', {candidate1: 0, candidate2: 0}], ['Houghton', {candidate1: 0, candidate2: 0}], ['Huron', {candidate1: 0, candidate2: 0}], ['Ingham', {candidate1: 0, candidate2: 0}], ['Ionia', {candidate1: 0, candidate2: 0}], ['Iosco', {candidate1: 0, candidate2: 0}], ['Iron', {candidate1: 0, candidate2: 0}], ['Isabella', {candidate1: 0, candidate2: 0}], ['Jackson', {candidate1: 0, candidate2: 0}], ['Kalamazoo', {candidate1: 0, candidate2: 0}], ['Kalkaska', {candidate1: 0, candidate2: 0}], ['Kent', {candidate1: 0, candidate2: 0}], ['Keweenaw', {candidate1: 0, candidate2: 0}], ['Lake', {candidate1: 0, candidate2: 0}], ['Lapeer', {candidate1: 0, candidate2: 0}], ['Leelanau', {candidate1: 0, candidate2: 0}], ['Lenawee', {candidate1: 0, candidate2: 0}], ['Livingston', {candidate1: 0, candidate2: 0}], ['Luce', {candidate1: 0, candidate2: 0}], ['Mackinac', {candidate1: 0, candidate2: 0}], ['Macomb', {candidate1: 0, candidate2: 0}], ['Manistee', {candidate1: 0, candidate2: 0}], ['Marquette', {candidate1: 0, candidate2: 0}], ['Mason', {candidate1: 0, candidate2: 0}], ['Mecosta', {candidate1: 0, candidate2: 0}], ['Menominee', {candidate1: 0, candidate2: 0}], ['Midland', {candidate1: 0, candidate2: 0}], ['Missaukee', {candidate1: 0, candidate2: 0}], ['Monroe', {candidate1: 0, candidate2: 0}], ['Montcalm', {candidate1: 0, candidate2: 0}], ['Montmorency', {candidate1: 0, candidate2: 0}], ['Muskegon', {candidate1: 0, candidate2: 0}], ['Newaygo', {candidate1: 0, candidate2: 0}], ['Oakland', {candidate1: 0, candidate2: 0}], ['Oceana', {candidate1: 0, candidate2: 0}], ['Ogemaw', {candidate1: 0, candidate2: 0}], ['Ontonagon', {candidate1: 0, candidate2: 0}], ['Osceola', {candidate1: 0, candidate2: 0}], ['Oscoda', {candidate1: 0, candidate2: 0}], ['Otsego', {candidate1: 0, candidate2: 0}], ['Ottawa', {candidate1: 0, candidate2: 0}], ['PresqueIsle', {candidate1: 0, candidate2: 0}], ['Roscommon', {candidate1: 0, candidate2: 0}], ['Saginaw', {candidate1: 0, candidate2: 0}], ['StClair', {candidate1: 0, candidate2: 0}], ['StJoseph', {candidate1: 0, candidate2: 0}], ['Sanilac', {candidate1: 0, candidate2: 0}], ['Schoolcraft', {candidate1: 0, candidate2: 0}], ['Shiawassee', {candidate1: 0, candidate2: 0}], ['Tuscola', {candidate1: 0, candidate2: 0}], ['VanBuren', {candidate1: 0, candidate2: 0}], ['Washtenaw', {candidate1: 0, candidate2: 0}], ['Wayne', {candidate1: 0, candidate2: 0}], ['Wexford', {candidate1: 0, candidate2: 0}]];

        //This loop's purpose is to create a pool of voters for each county.

    for (i=0 ; i < countiesList.length; i++) {

        let randomPeople= Math.floor(Math.random()*votingPoolSize.value);
        
            //This Loop's purpose is to distribute the votes between two candidates, 46% for one, 54% for the other.

        for(a=0 ; a< randomPeople; a++) {
            
            let countyVoteGenFormula= Math.random();

            if (countyVoteGenFormula < 0.46) {
                countiesList[i][1].candidate1++
            } else {
                countiesList[i][1].candidate2++
            }
            
        }
        
    };
    console.log(countiesList); 

        //This loop's purpose is to gather the results of each candidate in each county, and copy it in sepparate arrays to be analysed

    for (y=0 ; y < countiesList.length ; y++){
        countiesResults1Latent.push(countiesList[y][1].candidate1);
        countiesResults2Latent.push(countiesList[y][1].candidate2);

    }
    console.log(countiesResults1Latent);
    console.log(countiesResults2Latent);

        //Now that we have both cadidate results in two arrays, we'll need to keep only the first digit of each number in these arrays

    countiesResults1Processed= countiesResults1Latent.map(String);
    countiesResults2Processed= countiesResults2Latent.map(String);

    for (x=0 ; x < countiesList.length; x++) {
        countiesResults1Processed[x]= countiesResults1Processed[x].charAt(0);
        countiesResults2Processed[x]= countiesResults2Processed[x].charAt(0);
    }
    countiesResults1= countiesResults1Processed.map(Number);
    countiesResults2= countiesResults2Processed.map(Number);
    console.log(countiesResults1)
    console.log(countiesResults2)


        //Now some crude code to return the percentage of each first digit in each array (ne1c1= "Number Election '1', Candidate 1")
    var ne1c1=0;
    var ne2c1=0;
    var ne3c1=0;
    var ne4c1=0;
    var ne5c1=0;
    var ne6c1=0;
    var ne7c1=0;
    var ne8c1=0;
    var ne9c1=0;

    for (i = 0; i < countiesList.length; i++)  {
        if (countiesResults1[i] == 1) {

            ne1c1++;

            }else if (countiesResults1[i] == 2) {

                    ne2c1++;

                }else if (countiesResults1[i] == 3) {
                    
                        ne3c1++;

                    }else if (countiesResults1[i] == 4) {
                    
                            ne4c1++;

                        }else if (countiesResults1[i] == 5) {
                    
                                ne5c1++;

                            }else if (countiesResults1[i] == 6) {
                    
                                    ne6c1++;

                                }else if (countiesResults1[i] == 7) {
                    
                                        ne7c1++;

                                    }else if (countiesResults1[i] == 8) {
                    
                                            ne8c1++;

                                        }else if (countiesResults1[i] == 9) {
                    
                                                ne9c1++;
                                            }        
        }; 
      
        // The final percentage operation (nfe1c1= number final election '1' candidate 1)

        nfe1c1= (ne1c1/countiesResults1.length)*100;
        nfe2c1= (ne2c1/countiesResults1.length)*100;
        nfe3c1= (ne3c1/countiesResults1.length)*100;
        nfe4c1= (ne4c1/countiesResults1.length)*100;
        nfe5c1= (ne5c1/countiesResults1.length)*100;
        nfe6c1= (ne6c1/countiesResults1.length)*100;
        nfe7c1= (ne7c1/countiesResults1.length)*100;
        nfe8c1= (ne8c1/countiesResults1.length)*100;
        nfe9c1= (ne9c1/countiesResults1.length)*100;
        
        document.getElementById("perC1-1").innerHTML = "1: "+nfe1c1+"%";
        document.getElementById("perC1-2").innerHTML = "2: "+nfe2c1+"%";
        document.getElementById("perC1-3").innerHTML = "3: "+nfe3c1+"%";
        document.getElementById("perC1-4").innerHTML = "4: "+nfe4c1+"%";
        document.getElementById("perC1-5").innerHTML = "5: "+nfe5c1+"%";
        document.getElementById("perC1-6").innerHTML = "6: "+nfe6c1+"%";
        document.getElementById("perC1-7").innerHTML = "7: "+nfe7c1+"%";
        document.getElementById("perC1-8").innerHTML = "8: "+nfe8c1+"%";
        document.getElementById("perC1-9").innerHTML = "9: "+nfe9c1+"%";

        // Same shit, second candidate.

    var ne1c2=0;
    var ne2c2=0;
    var ne3c2=0;
    var ne4c2=0;
    var ne5c2=0;
    var ne6c2=0;
    var ne7c2=0;
    var ne8c2=0;
    var ne9c2=0;

    for (i = 0; i < countiesList.length; i++)  {
        if (countiesResults2[i] == 1) {

            ne1c2++;

            }else if (countiesResults2[i] == 2) {

                    ne2c2++;

                }else if (countiesResults2[i] == 3) {
                    
                        ne3c2++;

                    }else if (countiesResults2[i] == 4) {
                    
                            ne4c2++;

                        }else if (countiesResults2[i] == 5) {
                    
                                ne5c2++;

                            }else if (countiesResults2[i] == 6) {
                    
                                    ne6c2++;

                                }else if (countiesResults2[i] == 7) {
                    
                                        ne7c2++;

                                    }else if (countiesResults2[i] == 8) {
                    
                                            ne8c2++;

                                        }else if (countiesResults2[i] == 9) {
                    
                                                ne9c2++;
                                            }        
         
    };  
        nfe1c2= (ne1c2/countiesResults2.length)*100;
        nfe2c2= (ne2c2/countiesResults2.length)*100;
        nfe3c2= (ne3c2/countiesResults2.length)*100;
        nfe4c2= (ne4c2/countiesResults2.length)*100;
        nfe5c2= (ne5c2/countiesResults2.length)*100;
        nfe6c2= (ne6c2/countiesResults2.length)*100;
        nfe7c2= (ne7c2/countiesResults2.length)*100;
        nfe8c2= (ne8c2/countiesResults2.length)*100;
        nfe9c2= (ne9c2/countiesResults2.length)*100;

        document.getElementById("perC2-1").innerHTML = "1: "+nfe1c2+"%";
        document.getElementById("perC2-2").innerHTML = "2: "+nfe2c2+"%";
        document.getElementById("perC2-3").innerHTML = "3: "+nfe3c2+"%";
        document.getElementById("perC2-4").innerHTML = "4: "+nfe4c2+"%";
        document.getElementById("perC2-5").innerHTML = "5: "+nfe5c2+"%";
        document.getElementById("perC2-6").innerHTML = "6: "+nfe6c2+"%";
        document.getElementById("perC2-7").innerHTML = "7: "+nfe7c2+"%";
        document.getElementById("perC2-8").innerHTML = "8: "+nfe8c2+"%";
        document.getElementById("perC2-9").innerHTML = "9: "+nfe9c2+"%";
        

    
    console.log("candidate1: "+nfe1c1+"% "+nfe2c1+"% "+nfe3c1+"% "+nfe4c1+"% "+nfe5c1+"% "+nfe6c1+"% "+nfe7c1+"% "+nfe8c1+"% "+nfe9c1+"%");
    console.log("candidate2: "+nfe1c2+"% "+nfe2c2+"% "+nfe3c2+"% "+nfe4c2+"% "+nfe5c2+"% "+nfe6c2+"% "+nfe7c2+"% "+nfe8c2+"% "+nfe9c2+"%");

    document.querySelector("form.voters").addEventListener('submit', function(e){
        e.preventDefault();
        countyVoteGeneration();
    });

        //Now to format this into an html table:

    document.getElementById("countiesResults").innerHTML = "<tr class='tableHeader'><td> Counties </td><td> Candidate 1 </td><td> Candidate 2 </td></tr>";
    for (i=0 ; i < countiesList.length; i++) {
        
        document.getElementById("countiesResults").innerHTML = document.getElementById("countiesResults").innerHTML +"<tr>"+"<td class='countyName'>"+ countiesList[i][0]+"</td>" +"<td>"+countiesList[i][1].candidate1+"</td>"+"<td>"+countiesList[i][1].candidate2+"</td>"+"</tr>";
            
    }
}




//multiplicative BL functions


    // This function creates a random array of 1 000 000 numbers, following the formula entered in an HTML form (ID 'formula2')

function randomArray() {

    for (i=0 ; i< 1000000 ; i++) {
        benfordArray[i] = eval(calInput.value);
    };
    console.log(benfordArray);


}


    // This function copies the first digit of every number in 'benfordArray' into a new array.

function truncateNumbers() {
    benfordArrayLatent = benfordArray.map(String);
    console.log(benfordArrayLatent);
    for (i=0 ; i < benfordArrayLatent.length ; i++) {
        
        benfordArrayLatent[i] = benfordArrayLatent[i].charAt(0);
        
    }
    benfordArrayProcessed = benfordArrayLatent.map(Number);
    console.log(benfordArrayProcessed);
}

    // This function returns the distribution percentage of every first digit in the array 'benfordArrayProcessed'

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


    // This function copies the percentage of every first digit in the HTML to be visualized on the web-page

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

    // This function changes the default value in the html form (ID 'formula2') on click of a few buttons. This allows to easily cycle between
    // different formulas that will impact the distribution of first digit in the array.

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

    // This function runs previously explained functions

function runBenfordLaw() {
    randomArray();
    truncateNumbers();
    blprocess();
    returnTextPer();
    buttonListeners();
}

    //This function prevents the value of the HTML form to return to its default state on submit, allowing the "buttonListeners" function to work as intended.

function calEventListener() {
    document.querySelector("form.formulaForm").addEventListener('submit', function(e){
        e.preventDefault();
        runBenfordLaw();
    });

    
}

// executed
calEventListener();
runBenfordLaw();
countyVoteGeneration();

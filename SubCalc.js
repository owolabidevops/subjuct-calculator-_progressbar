//Custom function.
function calculateScores(){

   
    
        //Store the data of the inputs.
        var s1 = parseInt(document.getElementById("s1").value);
        var s2 = parseInt(document.getElementById("s2").value);
        var s3 = parseInt(document.getElementById("s3").value);        
        var s4 = parseInt(document.getElementById("s4").value);
        var s5 = parseInt(document.getElementById("s5").value);
        var s6 = parseInt(document.getElementById("s6").value);
        

        if(s1>100 || s2>100 || s3>100 || s4>100 || s5>100 || s6>100){
            window.alert("SCORES MUST BE LESS THAN 100");
            return; //This would prevent the function from continuing.
        }
        
        //Do some math.

        var t12=s1+s2+s3+s4+s5+s6;
        

        var t0 = t12.toString();
         var t00=t12/6;
         t00 = t00.toFixed(2);
         var t000=t00.toString();
         
    
        //Display the score.
        document.getElementById("ds7").innerHTML= t0;
        document.getElementById("ds8").innerHTML= t000;
       


        var cgpa;
        var agp;
        var bgp;
        var cgp;
        var dgp;
        var egp;
        var fgp;
        
        if(s1<=39){
            agp=0*4;
        }else if(s1>=40 && s1<=59){
            agp=1*4;
        }else if(s1>=60 && s1<=69){
            agp=2*4;
        }else if(s1>=70 && s1<=79){
            agp=3*4;
        }else if(s1>=80 && s1<=89){
            agp=4*4;
        }else if(s1>=90 && s1<=100){
            agp=5*4;
        }

        if(s2<=39){
            bgp=0*2;
        }else if(s2>=40 && s2<=59){
            bgp=1*2;
        }else if(s2>=60 && s2<=69){
            bgp=2*2;
        }else if(s2>=70 && s2<=79){
            bgp=3*2;
        }else if(s2>=80 && s2<=89){
            bgp=4*2;
        }else if(s2>=90 && s2<=100){
            bgp=5*2;
        }
        
        
        if(s3<=39){
            cgp=0*5;
        }else if(s3>=40 && s3<=59){
            cgp=1*5;
        }else if(s3>=60 && s3<=69){
            cgp=2*5;
        }else if(s3>=70 && s3<=79){
            cgp=3*5;
        }else if(s3>=80 && s3<=89){
            cgp=4*5;
        }else if(s3>=90 && s3<=100){
            cgp=5*5;
        }

        if(s4<=39){
            dgp=0*5;
        }else if(s4>=40 && s4<=59){
            dgp=1*5;
        }else if(s4>=60 && s4<=69){
            dgp=2*5;
        }else if(s4>=70 && s4<=79){
            dgp=3*5;
        }else if(s4>=80 && s4<=89){
            dgp=4*5;
        }else if(s4>=90 && s4<=100){
            dgp=5*5;
        }

        if(s5<=39){
            egp=0*3;
        }else if(s5>=40 && s5<=59){
            egp=1*3;
        }else if(s5>=60 && s5<=69){
            egp=2*3;
        }else if(s5>=70 && s5<=79){
            egp=3*3;
        }else if(s5>=80 && s5<=89){
            egp=4*3;
        }else if(s5>=90 && s5<=100){
            egp=5*3;
        }

        if(s6<=39){
            fgp=0*3;
        }else if(s6>=40 && s6<=59){
            fgp=1*3;
        }else if(s6>=60 && s6<=69){
            fgp=2*3;
        }else if(s6>=70 && s6<=79){
            fgp=3*3;
        }else if(s6>=80 && s6<=89){
            fgp=4*3;
        }else if(s6>=90 && s6<=100){
            fgp=5*3;
        }

        cgpa = (agp+bgp+cgp+dgp+egp+fgp)/22;
        cgpa = cgpa.toFixed(2);
        document.getElementById("ds9").innerHTML= cgpa;
        


        
        var ag;
        var bg;
        var cg;
        var dg;
        var eg;
        var fg;

        if(s1<=39){
            ag="FAIL";
        }else if(s1>=40 && s1<=59){
            ag="SATISFACTORY";
        }else if(s1>=60 && s1<=69){
            ag="GOOD";
        }else if(s1>=70 && s1<=79){
            ag="VERY GOOD";
        }else if(s1>=80 && s1<=89){
            ag="EXCELLENT";
        }else if(s1>=90 && s1<=100){
            ag="DISTINCTION";
        }
        document.getElementById("ds1").innerHTML= ag;
 
        if(s2<=39){
            bg="FAIL";
        }else if(s2>=40 && s2<=59){
            bg="SATISFACTORY";
        }else if(s2>=60 && s2<=69){
            bg="GOOD";
        }else if(s2>=70 && s2<=79){
            bg="VERY GOOD";
        }else if(s2>=80 && s2<=89){
            bg="EXCELLENT";
        }else if(s2>=90 && s2<=100){
            bg="DISTINCTION";
        }
        document.getElementById("ds2").innerHTML= bg;
        
        
        if(s3<=39){
            cg="FAIL";
        }else if(s3>=40 && s3<=59){
            cg="SATISFACTORY";
        }else if(s3>=60 && s3<=69){
            cg="GOOD";
        }else if(s3>=70 && s3<=79){
            cg="VERY GOOD";
        }else if(s3>=80 && s3<=89){
            cg="EXCELLENT";
        }else if(s3>=90 && s3<=100){
            cg="DISTINCTION";
        }
        document.getElementById("ds3").innerHTML= cg;

        if(s4<=39){
            dg="FAIL";
        }else if(s4>=40 && s4<=59){
            dg="SATISFACTORY";
        }else if(s4>=60 && s4<=69){
            dg="GOOD";
        }else if(s4>=70 && s4<=79){
            dg="VERY GOOD";
        }else if(s4>=80 && s4<=89){
            dg="EXCELLENT";
        }else if(s4>=90 && s4<=100){
            dg="DISTINCTION";
        }
        document.getElementById("ds4").innerHTML= dg;

        if(s5<=39){
            eg="FAIL";
        }else if(s5>=40 && s5<=59){
            eg="SATISFACTORY";
        }else if(s5>=60 && s5<=69){
            eg="GOOD";
        }else if(s5>=70 && s5<=79){
            eg="VERY GOOD";
        }else if(s5>=80 && s5<=89){
            eg="EXCELLENT";
        }else if(s5>=90 && s6<=100){
            eg="DISTINCTION";
        }
        document.getElementById("ds5").innerHTML= eg;

        if(s6<=39){
            fg="FAIL";
        }else if(s6>=40 && s6<=59){
            fg="SATISFACTORY";
        }else if(s6>=60 && s6<=69){
            fg="GOOD";
        }else if(s6>=70 && s6<=79){
            fg="VERY GOOD";
        }else if(s6>=80 && s6<=89){
            fg="EXCELLENT";
        }else if(s6>=90 && s6<=100){
            fg="DISTINCTION";
        }
        document.getElementById("ds6").innerHTML= fg;


        var points = 0;

        var desc = Array();
        desc[0] = "";
        desc[1] = "FAILED";
        desc[2] = "PASSED";

        if(t00<50) points++;
        if(t00>=50) {points++; points++;}
   
        document.getElementById("password_description").innerHTML = desc [points];  
        document.getElementById("password_strength").className = "strength" + points;

        var ccc;
        var ccfg;
        if( cgpa<=2.49){
            ccc="--THIRD CLASS--";
        }else if(cgpa>=2.5 && cgpa<=3.49){
            ccc="--SECOND CLASS LOWER--";
        }else if(cgpa>=3.5 && cgpa<=4.49){
            ccc="--SECOND CLASS--";
        }else if(s6>=4.5 && cgpa<=5.5){
            ccc="--FIRST CLASS--";
        }
        document.getElementById("ds10").innerHTML= ccc;
    }

    document.getElementById("s1").onkeyup = function() { calculateScores(); };
    document.getElementById("s2").onkeyup = function() { calculateScores(); };
    document.getElementById("s3").onkeyup = function() { calculateScores(); };
    document.getElementById("s4").onkeyup = function() { calculateScores(); };
    document.getElementById("s5").onkeyup = function() { calculateScores(); };
    document.getElementById("s6").onkeyup = function() { calculateScores(); };
    
































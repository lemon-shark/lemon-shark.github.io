//document.write("<b>QUESTION 1: OVERLAP</b><br><br>");

/* You only to do 2 comparisions x4<x1 and x2<x3, if either
 case is true, the lines are not overlapping, thus very efficent:
*/
function overlap(){
    var x={};
    var invalid='Invalid Input Type, Expect Numbers';
    let a= parseInt(document.getElementById("p1").value);
    let b= parseInt(document.getElementById("p2").value);
    let c= parseInt(document.getElementById("p3").value);
    let d= parseInt(document.getElementById("p4").value);

    if(isNaN(a)||isNaN(b)||isNaN(c)||isNaN(d) ||a==null||a==""||b==null||b==""||c==null||c==""||d==null||d=="")
        return document.getElementById('demo1').innerHTML=invalid;

    if(a<b) {
        var x1=a;
        var x2=b;
    }
    else {
        var x1=b;
        var x2=a;
    }

    if(c<d) {
        var x3=c;
        var x4=d;
    }
    else {
        var x3=d;
        var x4=c;
    }

    if (x1>x4 || x3>x2) x = 'NOT OVERLAPPING' ;
    else x = 'OVERLAPPING';

    return document.getElementById('demo1').innerHTML=x;
};

/* Test cases: all positive tuples
 Expected result: false -> no overlapping
*/
//document.write(overlap([1,2],[3,4])+"<br>");
/* Test cases: all negative tuples
 Expected result: true -> overlapping
*/
//document.write(overlap([-5.5,-3],[-4,-4.5])+"<br>");
/* Test cases: negative and positive tuples
 Expected result: true -> overlapping
*/
//document.write(overlap([-7.3,0],[0,3])+"<br>");
/* Test cases: 2 identical tuples
 Expected result: true -> overlapping
*/
//document.write(overlap([0,0],[0,0])+"<br>");

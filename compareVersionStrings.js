//document.write("<b>QUESTION 2: VERSION STRING COMPARISON</b><br><br>");

function compareVersionString(){
    var y = 'No Input';
    var invalid='Invalid Input Type, Expect Version Strings';
    let v1=document.getElementById("s1").value;
    let v2= document.getElementById("s2").value;
    var z = v1+' is larger than '+v2;
    var v = v1+' is less than '+v2;
    var w = v1+' equals '+v2;

    if(v1==null||v1==""||v2==null||v2=="")
        return document.getElementById('demo2').innerHTML=y;
    var s1 = v1.split('.');
    var s2 = v2.split('.');

    const k = Math.min(s1.length,s2.length)
    for(var i=0;i<k;i++){
        s1[i] = parseInt(s1[i],10);
        s2[i] = parseInt(s2[i],10);
        if(isNaN(s1[i])||isNaN(s2[i]))
            return document.getElementById('demo2').innerHTML=invalid;

        if(s1[i]>s2[i]) return document.getElementById('demo2').innerHTML=z;
        console.log(typeof(s1[i]));
        console.log(s1[i]>s2[i]);
        if(s1[i]<s2[i]) return document.getElementById('demo2').innerHTML=v;
        console.log(s1[i]<s2[i]);
    }
    return (s1.length == s2.length)? (document.getElementById('demo2').innerHTML=w):((s1.length<s2.length)?(document.getElementById('demo2').innerHTML=v):(document.getElementById('demo2').innerHTML=z));
}

//Test cases:
//document.write(compareVersionString("2.0.0.0.1", "2")+"<br>");
//result: 2.0.0.0.1 is larger than 2
//document.write(compareVersionString("1.08", "1.8")+"<br>");
//result: 1.08 equal 1.8
//document.write(compareVersionString("1.0.5", "1.00.05")+"<br>");
//result: 1.0.5 equal 1.00.05
//document.write(compareVersionString("2.0.5", "1.0.15")+"<br>");
//result: 2.0.5 is larger than 1.0.15

function val()
{
let c1=document.getElementById("currency-1").value;
let c2=document.getElementById("currency-2").value;
// console.log("c1 : "+c1);
// console.log("c2 : "+c2);

    fetch(`https://api.exchangeratesapi.io/latest?base=${c1}`)
    .then(res=>res.json())
    .then(data=>{
        var rate=data.rates[c2];
        var ans=`1 ${c1} = ${rate} ${c2}`;
       // console.log(ans);
        document.querySelector(".para").innerHTML=ans;
        document.querySelector(".answer").style.display="block";

    });
}

function swapcur()
{
    let c1=document.getElementById("currency-1").value;
    let c2=document.getElementById("currency-2").value;
    let x=c1;
    c1=c2;
    c2=x;
   

    fetch(`https://api.exchangeratesapi.io/latest?base=${c1}`)
    .then(res=>res.json())
    .then(data=>{
       
        var rate=data.rates[c2];
       // console.log(rate);
       var ans=`1 ${c1} = ${rate} ${c2}`;
      //  console.log(ans);
        document.querySelector(".para").innerHTML=ans;
        document.querySelector(".answer").style.display="block";

    });
}



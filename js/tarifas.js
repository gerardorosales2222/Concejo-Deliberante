document.addEventListener("DOMContentLoaded", calcular(640,10));
function calcular(precio,incremento){
    let tu=precio*2;
    document.getElementById("tarifaN").innerHTML=incremento+"%";
    incremento = (incremento + 100)/100;
    document.getElementById("nafta").innerHTML=precio;
    document.getElementById("01urbana").innerHTML="$ "+Math.trunc(tu);
    document.getElementById("01urbanaN").innerHTML="$ "+Math.trunc(tu*incremento);
    document.getElementById("02mv").innerHTML="$ "+Math.trunc(tu*1.5);
    document.getElementById("02mvN").innerHTML="$ "+Math.trunc(tu*1.5*incremento);
    document.getElementById("03tal").innerHTML="$ "+Math.trunc(tu*1.9);
    document.getElementById("03talN").innerHTML="$ "+Math.trunc(tu*1.9*incremento);
    document.getElementById("04ag").innerHTML="$ "+Math.trunc(tu*2);
    document.getElementById("04agN").innerHTML="$ "+Math.trunc(tu*2*incremento);
    document.getElementById("05cap").innerHTML="$ "+Math.trunc(tu*2.25*1.5);
    document.getElementById("05capN").innerHTML="$ "+Math.trunc(tu*2.25*incremento);
    document.getElementById("06dur").innerHTML="$ "+Math.trunc(tu*2.5);
    document.getElementById("06durN").innerHTML="$ "+Math.trunc(tu*2.5*incremento);
    document.getElementById("07dur").innerHTML="$ "+Math.trunc(tu*3);
    document.getElementById("07durN").innerHTML="$ "+Math.trunc(tu*3*incremento);
    document.getElementById("08dur").innerHTML="$ "+Math.trunc(tu*3.25);
    document.getElementById("08durN").innerHTML="$ "+Math.trunc(tu*3.25*incremento);
    document.getElementById("09posta").innerHTML="$ "+Math.trunc(tu*3.5);
    document.getElementById("09postaN").innerHTML="$ "+Math.trunc(tu*3.5*incremento);
    document.getElementById("pas").innerHTML="$ "+Math.trunc(tu*3.75);
    document.getElementById("pasN").innerHTML="$ "+Math.trunc(tu*3.75*incremento);
    document.getElementById("hora").innerHTML="$ "+Math.trunc(tu*6);
    document.getElementById("horaN").innerHTML="$ "+Math.trunc(tu*6*incremento);
}
const b = document.getElementById("boton");

b.addEventListener("click", () => 
    console.log(
        calcular(document.getElementById("pns").value,10)
    )
);
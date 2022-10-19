function media(){
    let n1 = document.getElementById("n1").value
    let n2 = document.getElementById("n2").value
    let n3 = document.getElementById("n3").value
    let n4 = document.getElementById("n4").value

    let r = (Number(n1)+Number(n2)+Number(n3)+Number(n4)+Number(n5)+Number(n6))/4;
    document.getElementById("result").innerHTML = "media: "+ r;

}



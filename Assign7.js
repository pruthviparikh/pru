function myFun() {
    a1 = document.getElementById("C").getAttribute("href")
    a2 = document.getElementById("D").getAttribute("href")
    a3 = document.getElementById("E").getAttribute("href")



    if (a1 == "https://www.protek.com" ||
        a2 == "https://www.protek.com" ||
        a3 == "https://www.protek.com") {
        alert("found the link")
    } else {

        document.getElementById("Add").disabled = false;
    }
}

function add_link() {
    document.getElementById("F").innerHTML = "https://www.protek.com";
}
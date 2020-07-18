function storeValue() {
    var fname = document.getElementById("name")
    var lname = document.getElementById("lname")
    var gender = document.getElementById("male")
    var gender1 = document.getElementById("female")
    var state = document.getElementById("states")

    document.getElementById("p1").innerHTML = fname.value;
    document.getElementById("p2").innerHTML = lname.value;
    var gen = document.getElementById("p3")
    var gen1 = document.getElementById("p3")
    if (gender.checked == true) {
        gen.innerHTML = "male is checked";
    } else if (gender1.checked == true) {
        gen1.innerHTML = "female is checked";
    }
    document.getElementById("p4").innerHTML = state.value;
    document.getElementById("btn").style.display = "block"

    fname.value = " "
    lname.value = " "
    gen.checked == false;
    gen1.checked == false;
    state.value = " "

}

function edit() {

    var fname = document.getElementById("name");
    var lname = document.getElementById("lname");
    var gend = document.getElementById("male");
    var gend1 = document.getElementById("female");
    var state = document.getElementById("states");
    fname.style.display = "block";
    lname.style.display = "block";
    gend.style.display = "block";
    gend1.style.display = "block";
    state.style.display = "block";

    fname.innerHTML = fname.value;
    lname.innerHTML = lname.value;
    if (gend.checked == true) {

        gend.checked = false;
    } else if (gend1.checked == true) {

        gend1.checked = false;
    }
}
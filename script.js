var para = document.getElementsByClassName("object5")[0];

var button = document.getElementsByClassName("button")[0];



function collectNames() {

    var f1 =  document.getElementsByClassName("yourName")[0].value;
    var f2 = document.getElementsByClassName("crushName")[0].value;

    var first = f1.toLowerCase();
    var sec = f2.toLowerCase();

    name1 = first.split("");
    name2 = sec.split("");
    for (i = 0; i < name1.length; i++) {
        sec = sec.replace(name1[i], '');
    }
    for (i = 0; i < name2.length; i++) {
        first = first.replace(name2[i], "");
    }
    var final = first + sec;
    var l = final.length;

    var ar = new Array("F", "L", "A", "M", "E", "S");
    var stp = 1;

    for (var x = 6; x > 1; x--) {
        var g = ((l % x) + stp) - 1;
        if (g > x) {
            g = g % x;
        }
        if (g == 0) {
            g = ar.length;
        }
        ar.splice(g - 1, 1);
        stp = g;
        //alert(ar);
    }

    if (ar == "F") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Friends'";
        button.textContent = "New Match";

    } else if (ar == "L") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Lovers'";
        button.textContent = "New Match";
    } else if (ar == "A") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Affection'";
        button.textContent = "New Match";
    } else if (ar == "M") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Marriage'";
        button.textContent = "New Match";
    } else if (ar == "E") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Enemies'";
        button.textContent = "New Match";
    } else if (ar == "S") {
        document.getElementsByClassName("object1")[0].classList.add("invisible");
        document.getElementsByClassName("object2")[0].classList.add("invisible");
        document.getElementsByClassName("object3")[0].classList.add("invisible");
        document.getElementsByClassName("object4")[0].classList.add("invisible");
        document.getElementsByClassName("object5")[0].classList.add("invisible");
        document.getElementsByClassName("result")[0].textContent = "'Siblings'";
        button.textContent = "New Match";
    }


}

button.addEventListener("click", function () {
    if (document.getElementsByClassName("yourName")[0].value === "" || document.getElementsByClassName("crushName")[0].value === "") {
        para.classList.remove("transparent")
    } else if (button.textContent === "New Match") {
        document.getElementsByClassName("object1")[0].classList.remove("invisible");
        document.getElementsByClassName("object2")[0].classList.remove("invisible");
        document.getElementsByClassName("object3")[0].classList.remove("invisible");
        document.getElementsByClassName("object4")[0].classList.remove("invisible");
        document.getElementsByClassName("object5")[0].classList.remove("invisible");
        document.getElementsByClassName("result")[0].textContent = "";
        document.getElementsByClassName("crushName")[0].value = "";
        document.getElementsByClassName("yourName")[0].value = "";

        button.textContent = "Match";
    } else {
        collectNames();
    }
});
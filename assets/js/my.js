window.onload = addGreetingText; 
function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function addGreetingText() {
    document.getElementById("greeting_txt").innerHTML = "Hello! I am " + getAge("08/12/1999") + " years old, My nickname is Yashu.";
    document.getElementById("age").innerHTML = getAge("08/12/1999") + " years";

}
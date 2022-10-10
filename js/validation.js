// function checkNull(name, email){
    
//     if (name === ""){
//         document.getElementById('errorName').innerHTML = "(*) Name must not be blank";
//     }

//     if ( email === ""){
//         document.getElementById('errorMail').innerHTML = "(*) Email must not be blank";
//     }

//     return false;
// }

// function checkMail(email){
//     var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

//         if ( email.match(letter)){
//             return true;
//         } else {
//             document.getElementById('errorMail').innerHTML = "(*) Input Email is invalid";
//             return false;
//     }
// }

// var submit = document.getElementById('submit');
// submit.onclick = function () {
//     var name = document.getElementById('inputName').value;
//     var email = document.getElementById('inputEmail').value;

//     var check = checkNull(name, email);
//     var checkE = checkMail(email);

//     do {
//         return false;
// } while (!check || !checkE);

//     // if (!check){
//     //     return false;
//     // }

//     // if (!checkE){
//     //     return false;
//     // }
    

// }

var submit = document.getElementById('submit');
submit.onclick = function (e) {
    e.preventDefault();
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;
    var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var inValid = true;

    if (name === ""){
        document.getElementById('errorName').innerHTML = "(*) Name must not be blank";
        inValid = false;
        // return false;
    }

    if ( email === ""){
        document.getElementById('errorMail').innerHTML = "(*) Email must not be blank";
        inValid = false;

        // return false;
    } else if ( email.match(letter)){
        return true;
    } else {
        document.getElementById('errorMail').innerHTML = "(*) Input Email is invalid";
        inValid = false;
        // return false;
    }

    if (inValid = false){
        return false;
    }

}

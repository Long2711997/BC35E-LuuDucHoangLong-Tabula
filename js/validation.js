var submit = document.getElementById('submit');
submit.onclick = function () {
    var name = document.getElementById('inputName').value;
    var email = document.getElementById('inputEmail').value;

    
        kiemTraRong = function(value, divError, mess){
        if (value.trim() === ""){
        //Thong bao loi
        getEle(divError).innerHTML = mess;
        getEle(divError).style.display = "block";
        return false;
    } 
        getEle(divError).innerHTML = '';
        getEle(divError).style.display = "none";
        return true;
    }
    
        kiemTraMail = function(value, divError, mess){
            var letter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (value.match(letter)) {
                getEle(divError).innerHTML = "";
                getEle(divError).style.display = "none";
                return true;
            }
                getEle(divError).innerHTML = mess;
                getEle(divError).style.display = "block";
                return false;
        }

    var isValid = true;

    isValid &= validation.kiemTraRong(name, "errorName", "(*) Name must not be blank") && validation.kiemTraRong(email, "errorMail", "(*) Email must not be blank");
    isValid &= validation.kiemTraMail(email, "errorMail", "(*) Input Email is invalid");

}
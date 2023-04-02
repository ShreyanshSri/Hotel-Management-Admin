let btnA = document.getElementById("btn1");
let money;
dataObj = [];
btnA.addEventListener("click" , function(e)
{
    document.getElementById("form1").style.display = 'inline';
    money = 100;
})

let btnB = document.getElementById("btn2");
btnB.addEventListener("click", function(e)
{
    document.getElementById("form1").style.display = 'inline';
    money = 80;
})

let btnC = document.getElementById("btn3");
btnC.addEventListener("click" , function(e)
{
    document.getElementById("form1").style.display = 'inline';
    money = 50;
})

let submitform = document.getElementById("formSubmit");
// let myobj;
submitform.addEventListener("click" , function(e)
{
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let checkIn = document.getElementById("check-in");
    let checkOut = document.getElementById("check-out");
    
     let myobj = {
        name_val : name.value,
        email_val : email.value,
        phone_val : phone.value,
        booking : checkIn.value,
        leave: checkOut.value ,
        rate : money

    };
    dataObj.push(myobj);
    dataObj.push(myobj);
    localStorage.setItem("values", JSON.stringify(dataObj));
    let val = localStorage.getItem("values");
    console.log(val);

})

console.log(values);

// let arr = [];
// arr.push(val);
// dataObj.push(val);


// localStorage.getItem("values")
// values.forEach(element => {
//     console.log(element);
// });

let html = '';

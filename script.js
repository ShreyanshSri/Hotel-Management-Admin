let btnA = document.getElementById("btn1");
 money = 0;

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

submitform.addEventListener("click", function(e){
    let addName = document.getElementById("name");
    let addemail = document.getElementById("email");
    let addphone = document.getElementById("phone");
    let arrival_date = document.getElementById("check-in");
    let leave_date = document.getElementById("check-out");

      

    let data = {
        name: addName.value,
        email: addemail.value,
        phone: addphone.value,
        checkIn: arrival_date.value,
        checkOut: leave_date.value
    };

    
    let val = phone.value;
    localStorage.setItem(val , JSON.stringify(data));
    // console.log(valObj);
})
myObj = [];
const myarr = [];
function showInfo()
{ 
    let html = " ";
   
   for(x in localStorage)
   {
    console.log(x);
    //  element = localStorage.getItem(x);
    //  myarr.push(element);

   }

 
   myarr.forEach(function(element)
   {
    html += `
    <div class="card">
                    
    <div class="card_content">
         <h5>Name : ${element.name}</h5>
    </div>
    <div class="card_content">
        <h5>Emai : ${element.email}</h5>
   </div>
   <div class="card_content">
    <h5>Phone : ${element.phone}</h5>
   </div>
   <div class="card_content">
    <h5>Check-in : ${element.checkIn}</h5>
   </div>
   <div class="card_content">
    <h5>check-out : ${element.checkOut}</h5>
   </div>
   <div id="btn">
    <div class="btn" id=""><button>Edit</button></div>
    <div class="btn" id=""><button>Delete</button></div>
   </div>
   
</div>
    `
   })  
        
}
console.log(myarr);
showInfo();

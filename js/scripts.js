// Front- End Logic

// function myFunction() {
//     var amount, text;
  
//     // Get the value of the input field with id="numb"
//     amount= document.getElementById("numb").value;
  
//     // If x is Not a Number or less than one or greater than 10
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "amount";
//     }
//     document.getElementById("demo").innerHTML = text;
//   }////////////////////////////////////////////////////////////

  var account = function (name, balance){

    account.name = name;
    account.balance = balance;
  
    account.deposit = function (depositAmount) {
      newBalance = account.balance + depositAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
    };
  
    account.withdraw = function (withdrawAmount){
      newBalance = account.balance - withdrawAmount;
      console.log("Your balance is now " + newBalance);
      if (newBalance <= 0) {
        console.log("You have insufficient funds!!!");
      }
  
    };
  
    account.transfer = function (transferAmount){
  //got stuck here
    }
  
    console.log("Name: " + name + "; Balance: " + balance);
  }
  
  
  var AustinAccount = new account ("Austin", 500);
  var KateAccount = new account ("Kate", 10000);
  var GingerAccount = new account ("Ginger", 70000000);
  var OreoAccount = new account ("Oreo", 900000000)

  document.getElementById("balance").style.visibility = "visible";
  document.getElementById("correctNumber").innerHTML = "HERE IS YOUR CURRENT BALANCE: " + balance ;
 console.log("balance")



























// $(document).ready(function(){
//     $('#button').click(function(){
//         var antibiot = parseInt($('#amoxi:checked').val());
//         var antibiot500 = parseInt($('#amoxi500:checked').val());
//         var painKiller = parseInt($('#Ibuprofen:checked').val());
//         var painKiller500 = parseInt($('#Ibuprofen500:checked').val());
//         var AntimalarialDrugs = parseInt($('#Amodiaquine:checked').val());
//         var data = [antibiot, antibiot500, painKiller, painKiller500, AntimalarialDrugs]
//         var price = 0
//         // console.log(data);
//         data.forEach(function(item){
//             price = item + price
//             $("#correctNumber").text("HERE IS YOUR TOTAL PRICE: " + price )
//         })
        // $("#correctNumber").text("HERE IS YOUR TOTAL PRICE: " + price )
        // var price = 0;
        // if (antibiot == 0) {
        //         price += 1000;
//         // };
//     })
// })
// function check() {
//     // var antibiot = document.querySelector('#amoxi:checked').value;
//     var antibiot500 = document.querySelector('#amoxi500:checked').value;
//     console.log(antibiot500);
// //     var painKiller = document.pharmacy.painKiller.value;
// //     console.log("painKiller")
// //     var AntimalarialDrugs = document.pharmacy.AntimalarialDrugs.value;
// //     console.log("AntimalarialDrugs")
// //     var price = 0;
// //    var ad=0;

// //     if (antibiot == 0) {
// //         price = price + 1000;
// //     };
    
    
// //     if (!painKiller ==true ) {
// //         price += ad;
// //     }else{
// //   price +=400;
// //     }
// //     ;
    
// //     if (AntimalarialDrugs == 0) {
// //         price = price + 2500;
// //     }

// //     console.log("price")
// //     document.getElementById("price").style.visibility = "visible";
// //     document.getElementById("correctNumber").innerHTML = "HERE IS YOUR TOTAL PRICE: " + price ;
// //     console.log("price")

// };

// Business-Logic



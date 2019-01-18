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
    }
  var AustinAccount = new account ("Austin", 500);
  var KateAccount = new account ("Kate", 10000);
  var GingerAccount = new account ("Ginger", 70000000);
  var OreoAccount = new account ("Oreo", 900000000);
  document.getElementById("balance").style.visibility = "visible";
  document.getElementById("correctNumber").innerHTML = "Check Blance: " + balance + "";
  
 
  

// This is my hairbrained idea of what the success of a startup would look like with a quick function. 

function startup() {
  while (starupCash > 0 && startupProduct == "working" && startupTeam == "action") {
    var success == "Continue doing what you are doing no matter what it takes.";
    startup.build(success);
  }
}

// My hairbrained function of income and expenses.
function cashFlow(income, expenses) {
  this.income = income;
  this.expenses = expenses;
  if (income < expenses) {
    return "You are still in debt. Work on making money to get yourself out of debt dude!";
  } else if (income == expenses) {
    return "This is it. This is your choice. You can work to make your company make money or go into debt. Your Choice dude!";
  } else {
    return "Your company is not in debt and you are making money. Congrats. Keep doing what you are doing dude!";
  }
}

# The BankAccount class should have a balance. When a new BankAccount instance is created, if an amount is given, 
# the balance of the account should initially be set to that amount; otherwise, the balance should start at $0. 
# The account should also have an interest rate in decimal format. For example, a 1% interest rate would be saved as 0.01.
# The interest rate should be provided upon instantiation. (Hint: when using default values in parameters, 
# the order of parameters matters!)

# The class should also have the following methods:

# deposit(self, amount) - increases the account balance by the given amount
# withdraw(self, amount) - decreases the account balance by the given amount if there are sufficient funds; 
# if there is not enough money, print a message "Insufficient funds: Charging a $5 fee" and deduct $5
# display_account_info(self) - print to the console: eg. "Balance: $100"
# yield_interest(self) - increases the account balance by the current balance * 
# the interest rate (as long as the balance is positive)
class BankAccount:
    # don't forget to add some default values for these parameters!
    def __init__(self, int_rate, balance): 
        # your code here! (remember, instance attributes go here)
        self.int_rate= int_rate
        self.balance = balance
        # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        # your code here
        self.balance+=amount
        return self.balance
        
    def withdraw(self, amount):
        # your code here
        if (self.balance > amount):
            self.balance-= amount
            
        else :
            print(f"you can withdraw just {self.balance} take it ")  
            self.balance=0
        return self.balance

    def display_account_info(self):
        
        # your code here
        print(f"balance : {self.balance}")
        return self


    def yield_interest(self):
        yield_interest =0
        yield_interest = self.balance+self.balance*self.int_rate
        return yield_interest

        # your code here
user = BankAccount(0.01 , 150)
user.display_account_info()
print(user.yield_interest())
print(user.deposit(20))
print(user.withdraw(20))

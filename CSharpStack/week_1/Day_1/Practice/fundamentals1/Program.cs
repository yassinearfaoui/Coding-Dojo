// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

for(int i =1 ; i<256 ; i++){
    Console.WriteLine(i);
}

Random rand = new Random();
for(int i = 1; i < 6; i++)
{
    Console.WriteLine(rand.Next(10,20));
}

int sum = 0 ;
for(int i = 1; i < 6; i++)
{
    int ra = rand.Next(10,20) ;
    Console.WriteLine(ra);
    sum += ra ;
}
Console.WriteLine(sum);


// Create a new loop that prints all values from 1 to 100 that are divisible by 3 OR 5, but NOT both.
for(int i = 1 ;i<101 ;i++){
    if(i%3 ==0 || i%5 == 0)
    {
        Console.WriteLine(i);
    }
}

// Modify the previous loop to print "Fizz" for multiples of 3 and "Buzz" for multiples of 5.
for (int i = 1; i < 101; i++)
{
    if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }
}


// Modify the previous loop once more to now also print "FizzBuzz" for numbers that are multiples of both 3 and 5.
for (int i = 1; i < 101; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        Console.WriteLine("FizzBuzz");
    }
    else if (i % 3 == 0)
    {
        Console.WriteLine("Fizz");
    }
    else if (i % 5 == 0)
    {
        Console.WriteLine("Buzz");
    }

}
List<Drink> AllBeverages = new List<Drink>
        {
            new Soda("Coca Cola", "Brown", 4.0, false, 150),
            new Wine("Red Wine", "Red", 18.0, "Bordeaux", 2010, 120),
            new Coffee("Dark Roast", "Black", 80.0, "Dark", "Arabica", 5)
        };

foreach (var beverage in AllBeverages)
{
    beverage.ShowDrink();
    Console.WriteLine();
}
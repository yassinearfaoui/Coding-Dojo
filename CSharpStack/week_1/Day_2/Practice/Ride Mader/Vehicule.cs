public class Vehicule
{
    // Properties
    public string Name { get; set; }
    public int Number { get; set; }
    public string Color { get; set; }
    public bool Engine { get; set; }
    public double Miles { get; set; } = 0;

    // Constructors **
    public Vehicule(string name, int number, string color, bool engine)
    {
        Name = name;
        Number = number;
        Color = color;
        Engine = engine;
    }
    public Vehicule(string name, string color)
    {
        Name = name;
        Number = 4;
        Color = color;
        Engine = true;
        Miles = 96.50;
    }

    // Methods
    public virtual void ShowInfo()
    {
        System.Console.WriteLine($"Vehicule Name : {Name}\nPassengers : {Number}\nColor : {Color}\nEngine : {Engine}%\nMiles : {Miles}");
    }

    public virtual void Travel(double distance)
    {
     Miles +=  distance ;
     Console.WriteLine($"The vehicle has gone {distance} miles. Total miles: {Miles}");
    }

}

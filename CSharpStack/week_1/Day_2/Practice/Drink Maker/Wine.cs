public class Wine : Drink
{
    public string Region { get; set; }
    public int BottledYear { get; set; }

    // Constructor for Wine, including properties of the base class (Drink) and Wine-specific properties
    public Wine(string name, string color, double temp, string region, int bottledYear, int calories)
        : base(name, color, temp, false, calories) // Wines are not carbonated
    {
        Region = region;
        BottledYear = bottledYear;
    }

    public override void ShowDrink()
    {
        base.ShowDrink();
        Console.WriteLine($"Region: {Region}, BottledYear: {BottledYear}");
    }
}

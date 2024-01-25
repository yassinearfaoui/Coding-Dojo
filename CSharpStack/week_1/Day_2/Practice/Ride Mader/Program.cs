Vehicule vehicule1 = new Vehicule("ferrari", 4, "red", true);
Vehicule vehicule2 = new Vehicule("103", "blue");
Vehicule vehicule3 = new Vehicule("wolswagen", 4, "grey", false);
Vehicule vehicule4 = new Vehicule("206", "white");

List<Vehicule> vehicleList = new List<Vehicule>
        {
            vehicule1,
            vehicule2,
            vehicule3,
            vehicule4
        };

foreach (var vehicle in vehicleList)
{
    vehicle.ShowInfo();
    Console.WriteLine(); // Add a newline for separation
}

vehicule1.Travel(100);

Console.WriteLine("\nAfter traveling 100 miles:");
vehicule1.ShowInfo();
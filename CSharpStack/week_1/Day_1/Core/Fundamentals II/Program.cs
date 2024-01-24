// See https://aka.ms/new-console-template for more information
Console.WriteLine("Hello, World!");

// Create an integer array with the values 0 through 9 inside.
// Create a string array with the names "Tim", "Martin", "Nikki", and "Sara".
// Create a boolean array of length 10. Then fill it with alternating true/false values, starting with true. (Tip: do this using logic! Do not hard-code the values in!)
int[] array = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
string[] names = new string[] { "Tim", "Martin", "Nikki ", "Sara" };
bool[] boolean = new bool[10];
boolean[0] = true;
boolean[1] = false;
boolean[2] = true;
boolean[3] = false;
boolean[4] = true;
boolean[5] = false;

// Create a string List of ice cream flavors that holds at least 5 different flavors. (Feel free to add more than 5!)
// Output the length of the List after you added the flavors.
// Output the third flavor in the List.
// Now remove the third flavor using its index location.
// Output the length of the List again. It should now be one fewer.

List<string> iceCream = new List<string>();
iceCream.Add("Flavor1");
iceCream.Add("Flavor2");
iceCream.Add("Flavor3");
iceCream.Add("Flavor4 ");
iceCream.Add("Flavor5");
iceCream.Add("Flavor6");

Console.WriteLine(iceCream.Count);
Console.WriteLine(iceCream[2]);
iceCream.RemoveAt(2);
Console.WriteLine(iceCream.Count);


// Create a dictionary that will store string keys and string values.
// Add key/value pairs to the dictionary where:
// Each key is a name from your names array (this can be done by hand or using logic)
// Each value is a randomly selected flavor from your flavors List (remember Random from earlier?)
// Loop through the dictionary and print out each user's name and their associated ice cream flavor.

Dictionary<string, string> Disc = new Dictionary<string, string>();


Random random = new Random();
foreach (string name in names)
{
    int randomIndex = random.Next(iceCream.Count);
    string randomFlavor = iceCream[randomIndex];
    Disc[name] = randomFlavor;
}

// Loop through the dictionary and print each user's name and associated ice cream flavor
foreach (var pair in Disc)
{
    Console.WriteLine($"{pair.Key}'s favorite ice cream flavor is {pair.Value}.");
}
// // Given a List of strings, iterate through the List and print out all the values. Bonus: How many different 
// // ways can you find to print out
// //  the contents of a List? (There are at least 3! Check Google!)
// static void PrintList(List<string> MyList)
// {
//     foreach (var item in MyList)
//     {
//         System.Console.WriteLine(item);
//     }
// }
// List<string> TestStringList = new List<string>() {"Harry", "Steve", "Carla", "Jeanne"};
// PrintList(TestStringList);



// // 2. Print Sum
// // Given a List of integers, calculate and print the sum of the values
// static void SumOfNumbers(List<int> IntList)
// {
//     int sum = 0 ;
//     foreach (var item in IntList)
//     {
//         sum += item ;
//     }
//     System.Console.WriteLine(sum);
// }
// List<int> TestIntList = new List<int>() {2,7,12,9,3};
// // You should get back 33 in this example
// SumOfNumbers(TestIntList);


// // 3. Find Max
// // Given a List of integers, find and return the largest value in the List.

// static int FindMax(List<int> IntList)
// {
//     int max = IntList[0]; // Assume the first element is the maximum

//     // Iterate through the list starting from the second element
//     for (int i = 1; i < IntList.Count; i++)
//     {
//         // Update max if the current element is greater
//         if (IntList[i] > max)
//         {
//             max = IntList[i];
//         }
//     }
//     System.Console.WriteLine(max);
//     return max;
// }
// List<int> TestIntList2 = new List<int>() { -9, 12, 10, 3, 17, 5 };
// // You should get back 17 in this example
// FindMax(TestIntList2);


// // 4. Square the Values
// // Given a List of integers, return the List with all the values squared.

// List<int> TestIntList3 = new List<int>() { 1, 2, 3, 4, 5 };
// List<int> squaredList = SquareValues(TestIntList3);

// Console.Write("Original List: ");
// PrintList(TestIntList3);

// Console.Write("Squared List: ");
// PrintList(squaredList);


// static List<int> SquareValues(List<int> IntList)
// {
//     List<int> squaredList = new List<int>();

//     foreach (int value in IntList)
//     {
//         // Square each value and add it to the new list
//         squaredList.Add(value * value);
//     }

//     return squaredList;
// }

// static void PrintList(List<int> list)
// {
//     // Helper method to print the contents of a list
//     Console.Write("[");
//     for (int i = 0; i < list.Count; i++)
//     {
//         Console.Write(list[i]);
//         if (i < list.Count - 1)
//         {
//             Console.Write(", ");
//         }
//     }
//     Console.WriteLine("]");
// }


// // 5. Replace Negative Numbers with 0
// // Given an array of integers, return the array with all values below 0 replaced with 0.

// int[] TestIntArray = new int[] { -1, 2, 3, -4, 5 };
// int[] resultArray = NonNegatives(TestIntArray);

// Console.Write("Original Array: ");
// PrintArray(TestIntArray);

// Console.Write("Modified Array: ");
// PrintArray(resultArray);

// static int[] NonNegatives(int[] IntArray)
// {
//     int[] NonNegativesArray = new int[IntArray.Length];

//     for (int i = 0; i < IntArray.Length; i++)
//     {
//         // Replace negative numbers with 0
//         NonNegativesArray[i] = Math.Max(0, IntArray[i]);
//     }

//     return NonNegativesArray;
// }

// static void PrintArray(int[] array)
// {
//     // Helper method to print the contents of an array
//     Console.Write("[");
//     for (int i = 0; i < array.Length; i++)
//     {
//         Console.Write(array[i]);
//         if (i < array.Length - 1)
//         {
//             Console.Write(", ");
//         }
//     }
//     Console.WriteLine("]");
// }

// // 6. Print Dictionary
// // Given a dictionary, print the contents of the said dictionary.

// static void PrintDictionary(Dictionary<string, string> MyDictionary)
// {
//     foreach (var kvp in MyDictionary)
//     {
//         Console.WriteLine($"{kvp.Key}: {kvp.Value}");
//     }
// }
// Dictionary<string, string> TestDict = new Dictionary<string, string>();
// TestDict.Add("HeroName", "Iron Man");
// TestDict.Add("RealName", "Tony Stark");
// TestDict.Add("Powers", "Money and intelligence");
// PrintDictionary(TestDict);

// // 7. Find Key
// // Given a search term, return true or false whether the given term is a key in a dictionary. (Hint: figuring this one out may require some research!)

// Dictionary<string, string> TestDict = new Dictionary<string, string>();
// TestDict.Add("HeroName", "Iron Man");
// TestDict.Add("RealName", "Tony Stark");
// TestDict.Add("Powers", "Money and intelligence");

// // This should print true
// Console.WriteLine(FindKey(TestDict, "RealName"));
// // This should print false
// Console.WriteLine(FindKey(TestDict, "Name"));

// static bool FindKey(Dictionary<string, string> MyDictionary, string SearchTerm)
// {
//     // Use the ContainsKey method to check if the search term exists as a key
//     return MyDictionary.ContainsKey(SearchTerm);
// }


// 8. Generate a Dictionary
// Given a List of names and a List of integers, create a dictionary where the key is a name from the List of names and the value is a number from the List of numbers. Assume that the two Lists will be of the same length. Don't forget to print your results to make sure it worked.

List<string> testNames = new List<string> { "Julie", "Harold", "James", "Monica" };
List<int> testNumbers = new List<int> { 6, 12, 7, 10 };

Dictionary<string, int> resultDict = GenerateDictionary(testNames, testNumbers);

// Print the results to verify it worked
Console.WriteLine("Generated Dictionary:");
PrintDictionary(resultDict);


static Dictionary<string, int> GenerateDictionary(List<string> Names, List<int> Numbers)
{
    Dictionary<string, int> resultDict = new Dictionary<string, int>();

    // Assume both lists are of the same length
    for (int i = 0; i < Names.Count; i++)
    {
        resultDict.Add(Names[i], Numbers[i]);
    }

    return resultDict;
}

static void PrintDictionary(Dictionary<string, int> MyDictionary)
{
    foreach (var kvp in MyDictionary)
    {
        Console.WriteLine($"{kvp.Key}: {kvp.Value}");
    }
}



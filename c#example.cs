//This is how you set up a public class in C#, allowing any other part of the code to access it.
public class Animal
{
    //Properties are things that describe our class.
    public string Species { get; set; }
    public string Type { get; set; }
    public string Habitat { get; set; }
    public string Name { get; set; }
    public int Age { get; set; }
    //In a zoo app, we'd need more properties.

    //This is how a constructor is set up in C#.
    public Animal(string species, string type, string habitat, string name, int age)
    {
        //Take the property and set it equal to the variable passed through the constructor.
        Species = species;
        Type = type;
        Habitat = habitat;
        Name = name;
        Age = age;
    }

    //Void means that the method doesn't return a value.
    public void Eat()
    {
        Console.WriteLine($"The animal eats.");
    }

    public void MakeSound()
    {
        Console.WriteLine($"Sound made by {Name}");
    }
}

//Let's imagine we have the functions set up to run a C# program.
Animal Lion = new Animal("Feline", "mammal", "savannah", "Leo", 5);
Lion.Eat();
Lion.MakeSound();p
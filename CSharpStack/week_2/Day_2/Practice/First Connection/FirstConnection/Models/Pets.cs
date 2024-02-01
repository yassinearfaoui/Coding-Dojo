#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace FirstConnection.Models;
public class Pet
{
    [Key]
    public int PetId {get;set;}
    public string Name { get; set; } 
    public int Type { get; set; }
    public string Age { get; set; }

    public bool ItHasFur {get;set;}

}
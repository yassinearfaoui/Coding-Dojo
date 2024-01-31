#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models;

public class User
{
    [Required]
    [MinLength(2)]
    public string name { get; set; }
    [Required]
    [EmailAddress()]
    public string email { get; set; }
    [Required]
    [CustomDateValidation]
    public string date { get; set; }
    [Required]
    [MinLength(8)]
    public string password { get; set; }
    [Required]
  [oddNumber(ErrorMessage = "The property must be an odd number.")]
    public int oddNumber {get ;set;}

}
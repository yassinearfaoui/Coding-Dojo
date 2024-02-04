#pragma  warning disable CS8618
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LogRegApp.Models;

public class User
{
    [Key]
    public int UserId { get; set; }


    [Required(ErrorMessage = "Please enter your name")]
    [MinLength(3, ErrorMessage = "please enter a valid name")]
    public string Username { get; set; }


    [Required(ErrorMessage = "please enter your email ")]
    [EmailAddress(ErrorMessage = "please enter a valid email Adress")] // ! regex pattern email validation
    public string Email { get; set; }

    [Required(ErrorMessage = "Please enter your password")]
    [MinLength(6, ErrorMessage = "please enter a valid password")]
     [DataType(DataType.Password)]
    public string Password { get; set; }


    [NotMapped] 
    [Required(ErrorMessage = "Please enter your password")]
    [MinLength(6, ErrorMessage = "please enter a valid password")]
    [Compare("Password", ErrorMessage = "password must match")]
     [DataType(DataType.Password)]
    public string ConfirmPW { get; set; }


    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}

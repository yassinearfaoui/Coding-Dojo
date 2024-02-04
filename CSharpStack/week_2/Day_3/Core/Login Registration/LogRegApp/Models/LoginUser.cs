#pragma warning disable CS8618 
using System.ComponentModel.DataAnnotations ;

namespace LogRegApp.Models ;
public class LoginUser
{
   
     [Required(ErrorMessage = "please enter your email ")]
    [EmailAddress(ErrorMessage = "please enter a valid email Adress")] 
    public string LoginEmail { get; set; }

    [Required(ErrorMessage = "Please enter your password")]
    [MinLength(6, ErrorMessage = "please enter a valid password")]
    [DataType(DataType.Password)]
    public string LoginPassword { get; set; }
}

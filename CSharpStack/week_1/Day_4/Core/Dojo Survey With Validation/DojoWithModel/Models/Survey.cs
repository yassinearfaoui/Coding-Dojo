#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;

namespace DojoWithModel.Models;

public class Survey
{
    [Required(ErrorMessage = "Please enter a valid title.")]
    [MinLength(2)]
    public string name { get; set; }
    [Required]
    public string location { get; set; }
    [Required]
    public string language { get; set; }
    [Required]
        [MinLength(20)]
    public string comment { get; set; } 
}
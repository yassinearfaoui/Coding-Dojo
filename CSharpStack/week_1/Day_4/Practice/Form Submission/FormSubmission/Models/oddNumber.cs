using System.ComponentModel.DataAnnotations ;


public class oddNumber : ValidationAttribute
{
    protected override ValidationResult  IsValid (object value , ValidationContext validationContext)
    {
         int number;

        if (value == null || !int.TryParse(value.ToString(), out number))
        {
            // Validation failed for non-integer values
            return new ValidationResult("Invalid number format or value.");
        }

        if (number % 2 != 1)
        {
            return new ValidationResult("The number must be an odd number.");
        }

        // Validation passed
        return ValidationResult.Success;
    }
    }
using Microsoft.AspNetCore.Mvc;

namespace FirstWebApp.Controllers;  
public class DojoController : Controller   
{      
    [HttpGet("")]
    public ViewResult Index()
    {
        return View("Index");
    }

    [HttpPost("process")]
    public IActionResult Process(string name, string location , string language , string comment)
    {
        ViewBag.name = name;
        ViewBag.location = location;
        ViewBag.language = language;
        ViewBag.comment = comment ;

        return View("View");
    }
}
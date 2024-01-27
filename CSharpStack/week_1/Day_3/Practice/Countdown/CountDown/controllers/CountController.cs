using Microsoft.AspNetCore.Mvc;

namespace FirstWebApp.Controllers;  
public class CountController : Controller   
{      
    [HttpGet("")]
    public ViewResult Index()
    {
        return View("Index");
    }
  

}

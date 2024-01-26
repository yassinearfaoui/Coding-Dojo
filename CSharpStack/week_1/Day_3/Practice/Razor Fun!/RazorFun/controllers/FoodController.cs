using Microsoft.AspNetCore.Mvc;

namespace YourNamespace.Controllers;

public class FoodController : Controller
{
    [HttpGet]
    [Route("")]
    public ViewResult Index()
    {
        // will attempt to serve 
        // Views/Hello/Index.cshtml
        // or if that file isn't there:
        // Views/Shared/Index.cshtml
        return View("Index");
    }
}


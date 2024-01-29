using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using ViewModelFun.Models;

namespace ViewModelFun.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        var hamza = "Hello Guys i love you" ;
        return View("Index",hamza);
    }

    public IActionResult Privacy()
    {
        int[] numbers = new int[]{1 ,89 , 45 , 12 ,12} ;
        return View( numbers);
    }
    
    public  IActionResult User()
    {
        var user = "Yassine Arfaoui" ;
        return View("User",user);
    }

    public  IActionResult Users()
    {
        List<string> users = new List<string>{"Yassine" , "Ahmed " , "ibrahim" , "Hamza" , "belghasem jarna" } ;
        return View("Users",users);
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}

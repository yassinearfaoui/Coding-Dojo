using Microsoft.AspNetCore.Mvc;

namespace FirstWebApp.Controllers;  
public class FirstController : Controller   
{      
    [HttpGet("")]
    public ViewResult Index()
    {
        return View("Index");
    }

      [HttpGet("projects")]    
    public ViewResult Projects()        
    {            
    	return View("Projects");        
    }    

    [HttpGet("contact")] 
    public ViewResult Contact()        
    {            
    	return View("Contact");        
    }   
   
}
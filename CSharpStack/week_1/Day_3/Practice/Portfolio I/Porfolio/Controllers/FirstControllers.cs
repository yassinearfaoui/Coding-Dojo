using Microsoft.AspNetCore.Mvc;

namespace FirstWebApp.Controllers;  
public class FirstController : Controller   
{      
    [HttpGet] // We will go over this in more detail on the next page    
    [Route("")] // We will go over this in more detail on the next page
    public string Index()        
    {            
    	return "This is my index";        
    }    

      [HttpGet] // We will go over this in more detail on the next page    
    [Route("projects")] // We will go over this in more detail on the next page
    public string projects()        
    {            
    	return "These are  My projects ✔✔✔";        
    }    

    [HttpGet] // We will go over this in more detail on the next page    
    [Route("contact")] // We will go over this in more detail on the next page
    public string Contact()        
    {            
    	return "This is my Contact ✔✔✔";        
    }   
}
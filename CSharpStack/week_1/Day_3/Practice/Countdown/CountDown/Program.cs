var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllersWithViews();
var app = builder.Build();
app.UseStaticFiles();
app.UseRouting();
app.UseAuthorization();
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

      DateTime now = DateTime.Now;

        // Format the date and time using a custom format string
        string formattedDateTime = now.ToString("yyyy-MM-dd HH:mm:ss");

        // Display the formatted date and time
        Console.WriteLine("Formatted Date and Time: " + formattedDateTime);
app.Run();


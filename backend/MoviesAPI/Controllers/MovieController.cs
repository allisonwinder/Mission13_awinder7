using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MoviesAPI.Data;

namespace MoviesAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private MoviesDbContext context;

        public MovieController(MoviesDbContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            return context.Movies
                .Where(x => x.Edited != "")
                .OrderBy(x => x.Title)
                .ToArray();
        }
    }
}

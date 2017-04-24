using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class QuestionsController : ControllerBase
    {
        // GET api/questions
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "q1", "q2" };
        }
    }
}

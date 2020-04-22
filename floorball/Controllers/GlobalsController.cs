using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using floorball.Models;
using floorball.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace floorball.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class GlobalsController : ControllerBase
    {

        [HttpGet]
        public string Globals()
        {
            var data = new Globals();
            return JsonConvert.SerializeObject(data);
        }

        [HttpGet]
        [Route("log")]

        public IEnumerable<CrashLog> Log()
        {
            using (TeamContext context = new TeamContext())
            {
                return context.CrashLogs.ToList();
            }
        }

        [HttpPost]
        [Route("log")]
        public IActionResult Post([FromBody] CrashLog newLog)
        {
            using (TeamContext context = new TeamContext())
            {
                context.CrashLogs.Add(newLog);
                context.SaveChanges();
            }
            return Created("/User", Log());
        }


    }
}
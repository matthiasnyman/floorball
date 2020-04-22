using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using floorball.Models;
using floorball.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;


namespace floorball.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TeamController : ControllerBase
    {

        private readonly ILogger<TeamController> _logger;

        public TeamController(ILogger<TeamController> logger)
        {
            _logger = logger;
        }


        // DI context

        [HttpGet("{id}")]
        public IEnumerable<TeamViewModel> List( int id = 0 )
        {
            IList<TeamViewModel> result = new List<TeamViewModel>();
            using (TeamContext context = new TeamContext())
            {
                foreach(var team in GetTeam(context, id))
                {
                    var uim = new TeamViewModel(team);
                    result.Add(uim);
                }
                
            }
            return result;
        }

        [HttpPost]

        public IEnumerable<Team> Create([FromBody] Team newTeam)
        {
            using (TeamContext context = new TeamContext())
            {
                context.Teams.Add(newTeam);
                context.SaveChanges();

                return GetTeam(context);
            }
        }



        [HttpDelete("{id}")]

        public IEnumerable<Team> Delete(int id)
        {
            using (TeamContext context = new TeamContext())
            {
                Team toRemove = context.Teams.Find(id);

                if (toRemove != null)
                {
                    context.Teams.Remove(toRemove);
                    context.SaveChanges();

                }


                return GetTeam(context);
            }

        }



        private IList<Team> GetTeam(TeamContext context, int id = 0)
        {
            IQueryable<Team> query = context.Teams;

            if (id != 0)
            {
                query = query.Where(team => team.Nationality == id);
            }

            return query.ToList();
        }

    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using floorball.Models;
using floorball.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace floorball.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class PlayerController : ControllerBase
    {

        /*
        [HttpGet]
        public IEnumerable<PlayerViewModel> List()
        {
            IList<PlayerViewModel> result = new List<PlayerViewModel>();

            using (TeamContext context = new TeamContext())
            {

                foreach (var player in GetPlayers(context))
                {
                    var pim = new PlayerViewModel(player);
                    result.Add(pim);
                }
            }
            return result;

        }

    */

        [HttpGet("{id}")]
        public IEnumerable<PlayerViewModel> List(int id)
        {
            IList<PlayerViewModel> result = new List<PlayerViewModel>();

            using (TeamContext context = new TeamContext())
            {

                foreach (var player in GetPlayers(context, id))
                {
                    var pim = new PlayerViewModel(player);
                    result.Add(pim);
                }
            }
            return result;
        }

        [HttpPost]

        public IEnumerable<Player> Create([FromBody] Player newPlayer)
        {
            using (TeamContext context = new TeamContext())
            {
                context.Players.Add(newPlayer);
                context.SaveChanges();

                return GetPlayers(context);
            }
        }


        [HttpPut("{id}")]

        public IEnumerable<Player> Update(int id, [FromBody] Player updatePlayer)
        {
            using (TeamContext context = new TeamContext())
            {
                Player toUpdate = context.Players.Find(id);
                //kontrollera om null
                if(toUpdate != null)
                {

                    toUpdate.Image = updatePlayer.Image;
                    toUpdate.Name = updatePlayer.Name;
                    toUpdate.Age = updatePlayer.Age;
                    toUpdate.Handed = updatePlayer.Handed;
                    toUpdate.TeamId = updatePlayer.TeamId;
                

                    context.SaveChanges();
                }

                return GetPlayers(context, updatePlayer.TeamId);
            }
        }

        [HttpDelete("{id}")]

        public IEnumerable<Player> Delete(int id)
        {
            using (TeamContext context = new TeamContext())
            {
                Player toRemove = context.Players.Find(id);

                if (toRemove != null)
                {
                    context.Players.Remove(toRemove);
                    context.SaveChanges();

                }


                return GetPlayers(context);
            }

        }

       

        private IList<Player> GetPlayers(TeamContext context, int team = 0)
        {
            IQueryable<Player> query = context.Players;
               
            if(team != 0 )
            {
                query = query.Where(player => player.TeamId == team);
            }

            return query.ToList();
        }

    }
}
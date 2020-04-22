using floorball.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace floorball.ViewModels
{
    public class TeamViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Nationality { get; set; }

        public TeamViewModel(Team team)
        {
            this.Id = team.Id;
            this.Name = team.Name;
            this.Nationality = Team.NatAsString(team.Nationality);
        }

    }
}

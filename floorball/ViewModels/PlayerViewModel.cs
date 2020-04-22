using floorball.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace floorball.ViewModels
{
    public class PlayerViewModel
    {
        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Handed { get; set; }
        public int TeamId { get; set; }



        public PlayerViewModel(Player player)
        {
            this.Id = player.Id;
            this.Image = player.Image;
            this.Name = player.Name;
            this.Age = player.Age;
            this.TeamId = player.TeamId;
            this.Handed = Player.HandedsString(player.Handed);
        }

    }
}

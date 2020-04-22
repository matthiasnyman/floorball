using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using floorball.Models;

namespace floorball.ViewModels
{
    public class Globals
    {
        public class Country
        {
            public string Text  { get; set; }
            public int Value { get; set; }
        }
      
        public class Handed
        {
            public int Value { get; set; }
            public string Text { get; set; }

        }


        public IList<Country> countriesList;
        public IList<Handed> HandedList;

         public Globals()
        {
            IList<int> nats = Team.GetAllNats();
            countriesList = new List<Country>(nats.Count);
            foreach(var n in nats)
            {
                countriesList.Add(new Country { Text = Team.NatAsString(n), Value = n });
            }


            IList<int> hand = Player.GetAllStyles();

            HandedList = new List<Handed>(hand.Count);
            foreach(var h in hand)
            {
                HandedList.Add(new Handed { Text = Player.HandedsString(h), Value = h });
            }
          
        }



    }
}

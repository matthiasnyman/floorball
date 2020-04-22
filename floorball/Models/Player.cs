using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace floorball.Models
{
    public class Player
    {
        public const int HANDED_LEFT = 50;
        public const string STR_HANDED_LEFT = "Vänster";

        public const int HANDED_RIGHT = 51;
        public const string STR_HANDED_RIGHT = "Höger";


        public int Id { get; set; }
        public string Image { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public int Handed { get; set; }
        public int TeamId { get; set; }
        [JsonIgnore]
        public Team Team { get; set; }



        public static string HandedsString(int h)
        {
            if (h == HANDED_LEFT) return STR_HANDED_LEFT;
            if (h == HANDED_RIGHT) return STR_HANDED_RIGHT;



            return "";
        }

        public static IList<int> GetAllStyles()
        {
            List<int> list = new List<int>();
            list.Add(HANDED_LEFT);
            list.Add(HANDED_RIGHT);

            return list;
        }
    }
}

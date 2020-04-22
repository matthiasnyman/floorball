using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace floorball.Models
{
    public class Team
    {
        public const int NAT_SWEDEN = 60;
        public const string STR_NAT_SWEDEN = "Sverige";

        public const int NAT_FINLAND = 61;
        public const string STR_NAT_FINLAND = "Finland";

        public const int NAT_NORWAY = 62;
        public const string STR_NAT_NORWAY = "Norge";

        public const int NAT_DENMARK = 63;
        public const string STR_NAT_DENMARK = "Danmark";

        public int Id { get; set; }
        public string Name { get; set; }
        public int Nationality { get; set; }

        //Behövs inte längre?
        public List<Player> Player { get; set; }

        public static string NatAsString(int nat)
        {
            if (nat == NAT_SWEDEN) return STR_NAT_SWEDEN;
            if (nat == NAT_FINLAND) return STR_NAT_FINLAND;
            if (nat == NAT_NORWAY) return STR_NAT_NORWAY;
            if (nat == NAT_DENMARK) return STR_NAT_DENMARK;


            return "";
        }

        public static IList<int> GetAllNats()
        {
            List<int> list = new List<int>();
            list.Add(NAT_SWEDEN);
            list.Add(NAT_FINLAND);
            list.Add(NAT_NORWAY);
            list.Add(NAT_DENMARK);

            return list;
        }
    }
}

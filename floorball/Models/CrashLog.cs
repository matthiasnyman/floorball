using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace floorball.Models
{
    public class CrashLog
    {
        public int Id { get; set; }
        public string Date { get; set; }
        public int DebugMode { get; set; }
        public string Info { get; set; }
        public string File { get; set; }
        public int Line { get; set; }

    }
}

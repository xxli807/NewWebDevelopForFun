using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTypescript.Persistence.DBContext
{
    public class Signer
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public Document Document { get; set; }

        public string Email { get; set; }

        public string Name { get; set; }

        public string Status { get; set; }

        public int? SignOrder { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreateAt { get; set; }

        public DateTime? LastUpdateAt { get; set; }



    }
}

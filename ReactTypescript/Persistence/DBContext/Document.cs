using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ReactTypescript.Persistence.DBContext
{
    public class Document
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
          
        public string Status { get; set; }

        public string EnvelopeId { get; set; }

        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreateAt { get; set; }

        public string Reference { get; set; }

        public Template Template { get; set; }

        public ICollection<Signer> Signers { get; set; }

        public ICollection<Attachment> Attachments { get; set; }
    }
}

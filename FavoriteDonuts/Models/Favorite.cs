using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper.Contrib.Extensions;

namespace FavoriteDonuts.Models
{
	[Table("favorite")]
	public class Favorite
	{
		[Key]
		public int id { get; set; }
		public string username { get; set; }
		public int donut { get; set; }
	}

}

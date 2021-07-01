using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using Dapper.Contrib.Extensions;

namespace FavoriteDonuts.Models
{
	public class DAL
	{
		public static IDbConnection db;
		// Favorite table operations

		// AddUserFavorite("jeffcogs","jellydonut");
		// AddUserFavorite("jeffcogs","jellydonut");
		public static Favorite AddUserFavorite(string newUsername, int newDonut)
		{
			// Make sure the favorite doesn't already exist for the user
			// Technically we should be careful and only call this function when
			// we know we have it right. Checking that a favorite already exists
			// would border on "paranoid programming."
			// Make sure the donut they add actually exists: Call the Donut API
			// Technically we should do that. If this were a production app that
			// we have two months to build, we would want to cover all our bases.
			Favorite fav = new Favorite() { username = newUsername, donut = newDonut };
			db.Insert(fav);
			return fav;
		}

		// Get all favorites for a particular user

		public static List<Favorite> GetFavsByUser(string username)
		{
			// Don't use the following line; it's subject to sql injection
			// db.Query($"select * from favorite where username = '{username}'");
			// We're going to make a temporary "anonymous" object that looks, for example, like this:
			//    {
			//        uname: "fred"
			//    }
			// So it will build a SQL statement that looks like this:
			//    select * from favorite where username = 'fred';
			//
			return db.Query<Favorite>(
				"select * from favorite where username = @uname",
				new { uname = username }).ToList();
		}

		// Find out if a donut has been favorited by a particular user
		// Not sure if we need this yet. We'll add it if/when we do.

		// Add and remove favorites
		// These method names will describe in terms of how it's used, NOT in terms of database tables
		// For example, not "insertFavorite" and "deleteFavorite" but rather "AddUserFavorite" and 
		// "RemoveUserFavorite"

		public static void RemoveUserFavorite(int theid)
		{
			Favorite fav = new Favorite() { id = theid };
			db.Delete(fav);
		}

		public static bool IsFavorite(string username, int donut)
		{
			List<Favorite> results = db.Query<Favorite>(
				"select * from favorite where username = @uname and donut = @did",
				new { uname = username, did = donut }
				).ToList();
			if (results.Count == 0)
			{
				return false;
			}
			else
			{
				return true;
			}
		}


	}
}

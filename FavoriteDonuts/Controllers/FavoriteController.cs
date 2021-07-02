using FavoriteDonuts.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FavoriteDonuts.Controllers
{
	[Route("favorite")]
	[ApiController]
	public class FavoriteController : ControllerBase
	{
		// Reminder: These are using database calls,
		// which are not "async". So we don't need to
		// wrap our return types in Task<...>

		// Add User Favorite
		// Username will be in the URL; however!!!!!
		// In a real program we would extract the username
		// from an encrypted "token" that was stored in a cookie.
		// That way one user can't add a favorite for another user.
		// URL Format:
		//       /favorite/add?username=jeffcogs&donut=5 <-- this one
		//       /favorite/add/jeffcogs/5
		//       /favorite/add/jeffcogs&donut=5 <-- mixing parameter types, probably not best
		[HttpPost("add")]
		public bool AddUserFavorite(string username, int donut)
		{
			DAL.AddUserFavorite(username, donut);
			return true;
		}

		// Get favorites by user
		//    /favorite/getfavs/add
		[HttpGet("getfavs/{username}")]
		public List<Favorite> GetFavsByUser(string username)
		{
			return DAL.GetFavsByUser(username);
		}

		// Remove user favorite
		// For this we will remove by ID. HOWEVER: In a real
		// app, we also need to make sure that the logged in user
		// (which we get from the encrypted cookie token) matches
		// the one we're trying to delete, and that it's not somebody
		// deleting someone else's favorite.
		// WHEN WE'RE WRITING CODE, although we are not security
		// experts, still, security should be on our mind CONSTANTLY.
		[HttpDelete("remove/{id}")]
		public bool RemoveUserFavorite(int id) {
			DAL.RemoveUserFavorite(id);
			return true;
		}

		[HttpDelete("remove/{username}/{donut}")]
		public bool RemoveUserFavorite(string username, int donut)
		{
			DAL.RemoveUserFavorite(username, donut);
			return true;
		}

		[HttpGet("isfav/{username}/{donut}")]
		public bool IsFavorite(string username, int donut)
		{
			return DAL.IsFavorite(username, donut);
		}
	}
}

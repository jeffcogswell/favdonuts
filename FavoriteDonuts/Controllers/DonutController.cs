using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace FavoriteDonuts.Controllers
{
	[Route("donut")]
	[ApiController]
	public class DonutController : ControllerBase
	{
		// Get All Donuts
		// Our route: GET localhost:12345/donut
		// https://grandcircusco.github.io/demo-apis/donuts.json
		[HttpGet]
		public async Task<string> GetAll()
		{
			HttpClient client = new HttpClient();
			client.BaseAddress = new Uri("https://grandcircusco.github.io");
			var response = await client.GetAsync("/demo-apis/donuts.json");
			string json = await response.Content.ReadAsStringAsync();
			return json;
		}

		// Get Specific Donut
		// Our route: GET localhost:12345/donut/3
		//https://grandcircusco.github.io/demo-apis/donuts/2.json
		[HttpGet("{id}")]
		public async Task<string> GetOne(int id)
		{
			HttpClient client = new HttpClient();
			client.BaseAddress = new Uri("https://grandcircusco.github.io");
			var response = await client.GetAsync($"/demo-apis/donuts/{id}.json");
			string json = await response.Content.ReadAsStringAsync();
			return json;
		}

		[HttpGet("test")]
		public string test()
		{
			return "Hello";
		}

	}
}

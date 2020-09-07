const puppeteer = require("puppeteer");

(async	() 	=>	{

	//Here we just declare the web url
	let webUrl = "https://diagnal.com/";

	//If we want to see the dataa with open browder then pass { headless: false } in launch function.
	let browser = await puppeteer.launch();

	let page = await browser.newPage();

	await page.goto(webUrl);

	//console.log("webUrl", webUrl);

	let data = await page.evaluate( () => {

		let title = document.querySelector("meta[property='og:title']").getAttribute('content');
		let description = document.querySelector("meta[property='og:description']").getAttribute('content');
		
		return{ title, description }
	});

	console.log(data);

	//For closing the browser.
	await browser.close();

})();
const puppeteer = require('puppeteer');

// testing scrapping with puppeteer

// browse the SP gov site and 
// log the total vacinated in SP and 
// output a screenshot and a pdf of the latest news
(async () => {
  const url = `https://www.saopaulo.sp.gov.br/`;
  const browser = await puppeteer.launch({ 
    // headless: false,
    // slowMo: 200
  });

  const page = await browser.newPage();

  await page.goto(url, {
    waitUntil: 'networkidle2',
  });

  const totalVaxSP = await page.$eval('.pane', element => element.innerText);
  console.log('vacinação total em SP: ', totalVaxSP);
  
 // type on input
 // await page.type('selector', 'value');

  // enter in the first new
  await page.click('.main-news__border');

  // wait article load
  await page.waitForSelector('.article-main', { visible: true });
  
  // remove aside element
  await page.$eval('.sidebar', el => el.style.display = 'none');
  
  // take a screenshot and generate pdf
  await page.pdf({ path: 'pdf/news.pdf', format: 'A4' });
  await page.screenshot({ path: 'prints/news.jpg', fullPage: true });

  await browser.close();
})();
const functions = require('@google-cloud/functions-framework');
const puppeteer = require('puppeteer');

// min 1GB ram 0.5 vCPU

functions.http('helloHttp', async (req, res) => {
    try {
        const data = req.body;

        const browser = await puppeteer.launch({ headless: 'new', args: ["--no-sandbox", "--disable-setuid-sandbox"] });
        const page = await browser.newPage();

        // do stuff

        await browser.close();
        res.status(200).send('Success');
    } catch (error) {
        console.error('Error:', error);
        res.status(400).send(`Internal Server Error: ${error.message}`);
    }
});

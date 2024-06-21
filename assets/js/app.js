const url = 'https://www.nationalgrid.com/stories/energy-explained/what-is-carbon-intensity';

async function fetchHtmlContent() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlContent = await response.text();
        console.log(htmlContent); // This will log the HTML content of the page
    } catch (error) {
        console.error('Error fetching HTML content:', error);
    }
}

const apiKey = 'https://admin.thegreenwebfoundation.org/api-docs/';
const url = 'https://admin.thegreenwebfoundation.org/api/v1/greencheckmulti';

async function fetchGreenWebData() {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}` // If the API requires authentication
            },
            body: JSON.stringify({
                urls: ["example.com", "anotherexample.com"]
            })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchGreenWebData();


fetchHtmlContent();

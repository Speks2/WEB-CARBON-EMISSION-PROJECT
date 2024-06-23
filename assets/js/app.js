fetch('https://admin.thegreenwebfoundation.org/api/v3/batch/greencheck', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ urls: ['example.com'] }) // Replace with your own URLs
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById('result').innerText = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error('Error:', error));
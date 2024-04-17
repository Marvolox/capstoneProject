const apiKey = '215797270cfa4a2cbe0fca2e533f6704';
const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}&pageSize=20`;

async function fetchNews() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.articles && data.articles.length > 0) {
            const newsContainer = document.getElementById('news-container');
            newsContainer.innerHTML = '';

            data.articles.forEach(article => {
                const newsElement = document.createElement('div');
                newsElement.classList.add('news-item');
                newsElement.innerHTML = `
                    <img src="${article.urlToImage}" alt="${article.title}" class="news-image">
                    <div class="news-content">
                        <h3>${article.title}</h3>
                        <p>${article.description}</p>
                        <a href="${article.url}" target="_blank">Read More</a>
                    </div>
                `;
                newsContainer.appendChild(newsElement);
            });
        } else {
            console.error('No articles found.');
        }
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchNews);



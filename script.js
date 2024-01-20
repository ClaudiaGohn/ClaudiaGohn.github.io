fetch('content.json')
  .then(response => response.json())
  .then(data => {
    data.articles.forEach((article, index) => {
      document.getElementById("")
    })
    
    document.getElementById('article1').textContent = data.articleName1;
    document.getElementById('article2').textContent = data.articleName2;
    document.getElementById('article3').textContent = data.articleName3;
  });
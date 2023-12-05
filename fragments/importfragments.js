fetch('/fragments/nav/nav.html')
.then(response => response.text())
.then(html => {
    document.getElementById('importnav').innerHTML = html;
})
.catch(error => console.error('Error fetching nav.html:', error));


fetch('/fragments/footer/footer.html')
.then(response => response.text())
.then(html => {
    document.getElementById('importfooter').innerHTML = html;
})
.catch(error => console.error('Error fetching nav.html:', error));



console.log("search");

document.querySelector('#searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      window.location.href = "charity_list.html";
    }
});

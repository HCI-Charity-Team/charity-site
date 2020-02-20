console.log("search");

document.querySelector('#searchBox').addEventListener('keypress', function (e) {
    inputValue = document.getElementById('searchBox').value;
    if (e.key === 'Enter') {
      window.location.href = `charity_list.html?search=${inputValue}`;
    }
});


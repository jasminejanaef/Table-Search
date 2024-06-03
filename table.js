document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchBtn').addEventListener('click', function() {
        // Clear previous search results
        document.querySelectorAll('.select').forEach(function(row) {
            row.classList.remove('select');
        });

        // Get the search term
        var searchTerm = document.getElementById('searchField').value.toLowerCase();
        var tableRows = document.querySelectorAll('.container tbody tr');

        // Search for the term in the table rows
        tableRows.forEach(function(row) {
            row.classList.remove('select'); // Remove previous selections
            var cells = row.getElementsByTagName('td');
            for (var i = 0; i < cells.length; i++) {
                if (cells[i].textContent.toLowerCase().indexOf(searchTerm) !== -1) {
                    row.classList.add('select');
                    break;
                }
            }
        });

        // Clear the search field
        document.getElementById('searchField').value = '';
    });
});


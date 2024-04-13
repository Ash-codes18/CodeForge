const searchInput = document.getElementById('searchInput');
const hackathons = document.querySelectorAll('.card-container');
const noProfileDiv = document.getElementById('noResults'); // Select the element for displaying "No matching results found"

searchInput.addEventListener('input', filterHackathons);

function filterHackathons() {
    const query = searchInput.value.toLowerCase();
    let hasMatchingHackathon = false;
    hackathons.forEach((hackathon) => {
        const name = hackathon.querySelector('.name').textContent.toLowerCase();
        const skills = hackathon.querySelector('.skills').textContent.toLowerCase();
        if (name.includes(query) || skills.includes(query)) {
          hasMatchingHackathon = true;
          hackathon.style.display = 'block'; // Show matching profiles
        } else {
            hackathon.style.display = 'none'; // Hide non-matching profiles
        }
    });
    // Show/hide "No matching results found" message based on whether there are matching hackathons
    if (hasMatchingHackathon) {
      noProfileDiv.style.display = 'none'; // Hide the message
    } else {
      noProfileDiv.style.display = 'block'; // Show the message
    }
}

async function searchDestinations() {
  const keyword = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();
  const resultsContainer = document.getElementById("results");

    try {
  const response = await fetch("travel_recommendation_api.json");
  const data = await response.json();
      if (!data[`${keyword}`]) {
        resultsContainer.innerHTML = "<p>No results found for that keyword.</p>";
        return;
      }

      const recommendations = data[keyword].slice(0, 2);

      recommendations.forEach((item) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="card-content">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
            </div>
  //         `;

        resultsContainer.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching JSON:", error);
      resultsContainer.innerHTML = "<p>Failed to load recommendations.</p>";
    }
}
function clearSearch() {
    document.getElementById("searchInput").value = "";
  document.getElementById("results").innerHTML = "";
    
}

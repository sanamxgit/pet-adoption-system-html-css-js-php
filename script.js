function searchProduct() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var products = [
      "Japanese Spitz",
      "German Shepherd",
      "Labrador Retriever",
      "Golden Retriever",
      "Poodle",
      "Beagle"
    ];

    var matchingProducts = products.filter(function(product) {
      return product.toLowerCase().includes(searchInput);
    });

    displaySearchResults(matchingProducts);
  }

  function displaySearchResults(results) {
    var searchResultsContainer = document.getElementById("searchResults");
    searchResultsContainer.innerHTML = ""; 

    if (results.length === 0) {
      searchResultsContainer.innerHTML = "No matching products found.";
    } else {
      var resultList = document.createElement("ul");
      results.forEach(function(result) {
        var listItem = document.createElement("li");
        listItem.textContent = result;
        resultList.appendChild(listItem);
      });
      searchResultsContainer.appendChild(resultList);
    }
  }

  document.getElementById("shelter").addEventListener("click", function() {
    window.location.href = "admin.html";
  });

  document.getElementById("dog").addEventListener("click", function() {
    window.location.href = "buy.html";
  });

  document.getElementById("adoptMe").addEventListener("click", function() {
    window.location.href = "order.html";
  });
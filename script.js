      // Define an array of image URLs
      var imageUrls = [
        "./public/beautifulpetportraitdog@2x.png",
        "./public/closeup-shot-cute-husky-green-field.jpg",
        "./public/joe-caione-qO-PIF84Vxg-unsplash.jpg"
      ];
      
      var currentIndex = 0; // Initialize the index of the current image
      
      // Function to change the image source
      function changeImage() {
        // Get the img element by its class name
        var imageElement = document.querySelector(".beautiful-pet-portrait-dog-icon");
        
        // Set the src attribute of the img element to the current image URL
        imageElement.src = imageUrls[currentIndex];
        
        // Increment the index to display the next image in the array
        currentIndex = (currentIndex + 1) % imageUrls.length;
      }
      
      // Call the changeImage function every 3 seconds (3000 milliseconds)
      setInterval(changeImage, 3000);


      document.addEventListener("DOMContentLoaded", function() {
        // Get the login and register buttons
        var loginButton = document.getElementById("login");
        var registerButton = document.querySelector(".register-wrapper");
    
        // Add event listener for hover effect on login button
        loginButton.addEventListener("mouseover", function() {
            loginButton.style.backgroundColor = "lightgrey";
        });
    
        loginButton.addEventListener("mouseout", function() {
            loginButton.style.backgroundColor = "";
        });
    
        // Add event listener for click on login button
        loginButton.addEventListener("click", function() {
            window.location.href = "login.html"; // Replace with your login page URL
        });
    
        // Add event listener for hover effect on register button
        registerButton.addEventListener("mouseover", function() {
            registerButton.style.backgroundColor = "lightgrey";
        });
    
        registerButton.addEventListener("mouseout", function() {
            registerButton.style.backgroundColor = "";
        });
    
        // Add event listener for click on register button
        registerButton.addEventListener("click", function() {
            window.location.href = "register.html"; // Replace with your register page URL
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        // Get the elements for location, pet type, breed, gender, and age
        var locationInput = document.querySelector(".herald-college-kathmandu");
        var petTypeDropdown = document.querySelector(".pet-type1");
        var breedDropdown = document.querySelector(".breed1");
        var genderDropdown = document.querySelector(".gender1");
        var ageDropdown = document.querySelector(".age1");
    
        // Location Getter Functionality
        locationInput.addEventListener("click", function() {
            // Create an input field for location
            var inputLocation = document.createElement("input");
            inputLocation.setAttribute("type", "text");
            inputLocation.setAttribute("placeholder", "Enter your location");
            // Replace the text content with input field
            locationInput.textContent = '';
            locationInput.appendChild(inputLocation);
    
            // Focus on the input field
            inputLocation.focus();
    
            // Handle Enter key press to set the location
            inputLocation.addEventListener("keyup", function(event) {
                if (event.keyCode === 13) { // Enter key
                    var location = inputLocation.value.trim();
                    if (location !== "") {
                        locationInput.textContent = location;
                    }
                }
            });
    
            // Handle click outside the input field to cancel
            document.addEventListener("click", function(event) {
                if (!locationInput.contains(event.target)) {
                    // Remove input field if clicked outside
                    locationInput.removeChild(inputLocation);
                    // Revert back to original text if input was empty
                    if (inputLocation.value.trim() === "") {
                        locationInput.textContent = "Herald College Kathmandu";
                    }
                }
            });
        });
    
        // Pet Type Dropdown Functionality
        petTypeDropdown.addEventListener("click", function() {
            // Toggle visibility of dropdown options
            var options = petTypeDropdown.querySelector(".options");
            options.classList.toggle("visible");
        });
    
        // Breed Dropdown Functionality
        breedDropdown.addEventListener("click", function() {
            // Toggle visibility of dropdown options
            var options = breedDropdown.querySelector(".options");
            options.classList.toggle("visible");
        });
    
        // Gender Dropdown Functionality
        genderDropdown.addEventListener("click", function() {
            // Toggle visibility of dropdown options
            var options = genderDropdown.querySelector(".options");
            options.classList.toggle("visible");
        });
    
        // Age Dropdown Functionality
        ageDropdown.addEventListener("click", function() {
            // Toggle visibility of dropdown options
            var options = ageDropdown.querySelector(".options");
            options.classList.toggle("visible");
        });
    
        // Add event listener to handle selection of dropdown options
        document.addEventListener("click", function(event) {
            var target = event.target;
            if (target.classList.contains("option")) {
                var dropdown = target.closest(".dropdown");
                var selectedValue = target.textContent;
                dropdown.querySelector(".selected").textContent = selectedValue;
                dropdown.querySelector(".options").classList.remove("visible");
            }
        });
    }); 
    
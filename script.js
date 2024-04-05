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
    
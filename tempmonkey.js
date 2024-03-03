



// ==UserScript==
// @name         Auto Login for Specified Site
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically log in to a specified site when the URL matches
// @author       You
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to perform the login action
    function autoLogin() {
        const usernameField = document.querySelector('#email');
        const passwordField = document.querySelector('#password');
        const loginButton = document.querySelector('input[type="submit"]');

        if (usernameField && passwordField && loginButton) {
            usernameField.value = 't38365570@gmail.com'; // Replace with your email
            passwordField.value = 'Sachin@12345'; // Replace with your password

            // You can use loginButton.click() if the site logs in with a button click
            // Or use the form's submit method if that's more appropriate
            loginButton.click();
        }
    }

    // Check if the current URL matches the login page of the site
    if (window.location.href.includes('www.turnitin.com/login_page.asp')) {
        // Delay the auto login to allow page elements to fully load
        setTimeout(autoLogin, 1);
    }
})();

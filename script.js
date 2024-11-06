function validateForm()
    {
        //Get the values of each field.
        var firstName = document.getElementById("fName").value;
        var lastName = document.getElementById("lname").value;
        var zipCode = document.getElementById("zip").value;

        //Combine first and last names into a full name.
        var fullName = firstName + " " + lastName;

        //Print everything to the console.
        console.log("first name = " + firstName);
        console.log("last name = " + lastName);
        console.log("zip code = " + zipCode);
        console.log("full name = " + fullName);

        if (fullName.length > 20 || fullName.length == 1)
        {
            //Ensure a valid name is entered.
            document.getElementById("loginStatus").innerHTML = "Please enter a valid name. Name must be 20 characters or less.";
        }
        else if (zipCode.length != 5)
        {
            //Ensure a valid ZIP code is entered.
            document.getElementById("loginStatus").innerHTML = "Please enter a valid 5-digit ZIP code.";
        }
        else
        {
            //Print a string if all conditions are met.
            document.getElementById("loginStatus").innerHTML = "Welcome, " + fullName + ". The secret word is validation.";
        }

        //Ensure that nothing is saved to the server; not ready for that yet.
        return false;
    }
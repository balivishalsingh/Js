function loginuser(x)
{
    console.log("user logged in");
    x();
}

function displayUser()
{
    console.log("Welcome Shivam");
}

loginuser(displayUser);
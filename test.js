class student
{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullname()
{
    console.log(this.firstName + " " + this.lastName);
}
}


const m1 = new student("Akash","Singh");
const m2 = new student("Akansha","Raput");
m1.displayFullname();
m2.displayFullname();


class student
{
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullname()
{
    return (this.firstName + " " + this.lastName);
}
}


const m1 = new student("Akash","Singh");
const m2 = new student("Akansha","Raput");
const name1 = m1.displayFullname();
const name2 = m2.displayFullname();
console.log(name1);
console.log(name2);



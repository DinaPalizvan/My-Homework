// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.
 
// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];

/** WRITE YOUR CODE BELOW DOWN */
const addMember= (arr)=>{
    arr.forEach(async (user)=>{
        const res=await fetch("https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "content-type": "application/json",
            },
        })
        const data=await res.json()
        console.log(data);
    })
}
addMember(users)



//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */
const form=document.querySelector("form")
const fName=document.querySelector("#fName")
const lName=document.querySelector("#lName")
const btn=document.querySelector("button")
const phone=document.createElement("input")
const lable=document.createElement("lable")
lable.textContent="Phone Number:"
lable.setAttribute("for","phone")
phone.setAttribute("id", "phone")
form.append(lable, phone)
 

form.addEventListener("submit",async(e)=>{
    e.preventDefault();
    const person={
        firstName: fName.value,
        lastName: lName.value,
        phoneNumber: phone.value
    }
    const res=await fetch("https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user", {
        method: "POST",
        body: JSON.stringify(person),
        headers:{
            "content-type": "application/json",
        },
    })
    const data=await res.json()
    console.log(data);
    fName.value=""
    lName.value=""
    phone.value=""
    //this is fun. I'm enjoying it :)
})
//*To be continue...

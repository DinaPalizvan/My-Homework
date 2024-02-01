//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
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

    const edit= async()=>{
        const newData={
            firstName: "Lufy",
            lastName: "monkey. D",
            phoneNumber: "(945)635-3854"
        }
        const res= await fetch("https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user/1", {
            method: "PUT",
            body: JSON.stringify(newData),
            headers:{
                "content-type": "application/json"
            }
        })
        const data= await res.json()
        console.log(data);
    }
    edit()



//*To be continue...
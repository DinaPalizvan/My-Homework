//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */
    const getData= async()=>{
        const res= await fetch("https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user")
        const data=await res.json()
        console.log(data);
        data.forEach(element => {
            if(element.lastName==="Dalton"){
                fetch(`https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user/${element.id}`, {method: "DELETE"})
            }
        });
    }
    getData()
//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
const deleteEvenIds=async()=>{
    
    const res=await fetch("https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user")
    const data=res.json()
    data.forEach(element=>{
        if(Number(element.id)%2==0){
            fetch(`https://65ba6fb4b4d53c066552e7b4.mockapi.io/member/user/${element.id}`, {method: "DELETE"})
        }
    })
}
deleteEvenIds()

//*End of story :)


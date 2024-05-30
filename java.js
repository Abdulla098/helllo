let URL = "https://cat-fact.herokuapp.com/facts"

const getFact = async() => {
    console.log("Getting data......");
    let response = await   fetch(URL);
    let data = await response.json()
    console.log(data[0].text);

    let p = document.createElement("p");
p.innerText = data[0].text
document.body.appendChild(p)
}
getFact()


// function getFact(){
//     fetch(URL).then(mamun => {
//         console.log(mamun);
//         return mamun.json()
//     }).then(abdulla=>{
//         console.log(abdulla[0].text)
//     })
// }

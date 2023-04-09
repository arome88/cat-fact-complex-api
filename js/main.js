function getCatFact() {

    const url = `https://cat-fact.herokuapp.com/facts`
    fetch (url)
    .then(res => res.json())
    .then(data => {
    console.log(data)

            document.getElementById('facts').innerText = data[0].text


            let picCats = `https://api.unsplash.com/search/photos?client_id=pwGnh8_ylwrNwdbBl0pTpzghSc2zVksDutcNMKmt9vs&page=1&query=${data[0].type}&per_page=1&order_by=relevant`

            fetch(picCats)
            .then(res => res.json())
            .then(data2 => {
                console.log(data2)
                document.querySelector("img").src = data2.results[0].urls.regular
            })
        }
    )
}
document.querySelector('button').addEventListener('click' , getCatFact)
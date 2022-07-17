
const url = "https://swapi.py4e.com/api/people/"

const urls = [
    url + "1/",
    url + "2/",
    url + "3/",
    url + "4/"
]

const list = document.getElementById("list");

const fetchData = async () => {
    try {
        const data = await Promise.allSettled(urls.map(async url => {
            const resp = await fetch(url)
            return resp.json();

        }));

        data[0].value.img = "./assets/luke-skywalker";
        data[1].value.img = "./assets/c-3po";
        data[2].value.img = "./assets/r2-d2";
        data[3].value.img = "./assets/darth-vader";

        renderData(data);

    } catch (error) {
        console.log("Oooops", error);
    }
}

function renderData(data) {

    for (obj of data) {

        let div = document.createElement("div");

        div.innerHTML = `
            <img src=${obj.value.img} class="img">
            <p class="character-name"> ${obj.value.name} </p>
        `;
        
        div.className = "box";

        list.appendChild(div);
    }

}

fetchData();

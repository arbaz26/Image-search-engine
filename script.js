const accessKey = "oDqz6ufk13C26Zkf2of4eswoG2NNX2HRpsJl-swXzaQ"
// secret key:- zI9JpBQSui8ArQUdf4b2aRqCWBCOxJRSIVrgF3Uqa5o
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

const defaultImg = [
    "https://images.unsplash.com/photo-1666919643134-d97687c1826c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MXwxfHNlYXJjaHwxfHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400" ,
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHwyfHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHwzfHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHw0fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHw1fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1542282088-fe8426682b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHw2fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHw3fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MXwxfHNlYXJjaHw4fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHw5fHxjYXJ8ZW58MHx8fHwxNjk2MDE5MTM5fDA&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1489824904134-891ab64532f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHwxMHx8Y2FyfGVufDB8fHx8MTY5NjAxOTEzOXww&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1494905998402-395d579af36f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHwxMXx8Y2FyfGVufDB8fHx8MTY5NjAxOTEzOXww&ixlib=rb-4.0.3&q=80&w=400",
    "https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDk0NDN8MHwxfHNlYXJjaHwxMnx8Y2FyfGVufDB8fHx8MTY5NjAxOTEzOXww&ixlib=rb-4.0.3&q=80&w=400"
]


// for(let i=0 ; i<defaultImg.length; i++){
//     const ima = document.createElement("img");
//     ima.src = defaultImg[i];
//     searchResult.appendChild(ima);
// }

defaultImg.forEach((item) =>{
    const ima = document.createElement("img");
    ima.src = item;
    searchResult.appendChild(ima);
})


let keyword = "";
let page = 1;
async function searchImages(){
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    if(page === 1){
        searchResult.innerHTML = "";
    }

    const results = data.results;
    results.map((result) =>{
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image);
        searchResult.appendChild(imageLink);
        
    })

    showMoreBtn.style.display = "block";
}

searchForm.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page =1;
    searchImages();
});

showMoreBtn.addEventListener("click" ,() =>{
    page++;
    searchImages();
})
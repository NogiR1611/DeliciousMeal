const keyword = document.getElementById("searchItems").value;

class SearchData{
    static SearchMeal(keyword){
        return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(res =>{
            return res.json();
        })
        .then(resJson =>{
            if(resJson.meals){
                return Promise.resolve(resJson.meals);
            }
            else{
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        });
    }
}

/*
const renderAllMeal = (meals) =>{
    const listDataElement = document.querySelector("#listData");
    listDataElement.innerHTML = "";

    meals.forEach(meal => {
        listDataElement.innerHTML += `
        <div class="card col-md-3" style="text-align:center; margin:10px 10px;">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
                <h5>${meal.strArea}</h5>
            </div>
        </div>
        `;
    });
};

const showResponseMessage = (message="Silahkan cek lagi koneksi anda") => {
    alert(message);
};
*/
const clickEvent = () => {
    const keyword = document.getElementById("searchItems").value;

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(res =>{
            return res.json();
        })
        .then(resJson =>{
            if(resJson.meals){
                return renderMeals(resJson.meals);
            }
            else{
                return showResponMessage(keyword);
            }
        })
        .catch( err => {
            showResponMessage(err);
        });
}

const renderMeals = (meals) => {
    const listMealElement = document.querySelector("#listMeal");

    listMealElement.innerHTML = "";

    meals.forEach(meal => {
        listMealElement.innerHTML += `
            <div class="meal-info">
                <h2>${meal.strMeal}</h2>
                <img src=${meal.strMealThumb} alt="">
                <b><p>Ingredients:</p></b>
                <ul>
                    <li>${meal.strIngredient1} ${meal.strMeasure1}</li>
                    <li>${meal.strIngredient2} ${meal.strMeasure2}</li>
                    <li>${meal.strIngredient3} ${meal.strMeasure3}</li>
                    <li>${meal.strIngredient4} ${meal.strMeasure4}</li>
                    <li>${meal.strIngredient5} ${meal.strMeasure5}</li>
                    <li>${meal.strIngredient6} ${meal.strMeasure6}</li>
                    <li>${meal.strIngredient7} ${meal.strMeasure7}</li>
                    <li>${meal.strIngredient8} ${meal.strMeasure8}</li>
                    <li>${meal.strIngredient9} ${meal.strMeasure9}</li>
                    <li>${meal.strIngredient10} ${meal.strMeasure10}</li>
                    <li>${meal.strIngredient11} ${meal.strMeasure11}</li>
                    <li>${meal.strIngredient12} ${meal.strMeasure12}</li>
                    <li>${meal.strIngredient13} ${meal.strMeasure13}</li>
                    <li>${meal.strIngredient14} ${meal.strMeasure14}</li>
                    <li>${meal.strIngredient15} ${meal.strMeasure15}</li>
                </ul>
                <b><p>Instructions:</p></b>
                <p>${meal.strInstructions}</p>
            </div>
        `;
    });
}

const showResponMessage = (keyword) => {
    const listMealElement = document.querySelector("#listMeal");

    listMealElement.innerHTML = `
        <div class="box-respon">
            <p>~~sorry,${keyword} not found~~</p>
        </div>    
    `;
}

document.getElementById("buttonSearch").addEventListener("click",clickEvent);
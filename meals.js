const mealList = document.getElementById('meal-list');
const mealSelect = document.getElementById('meal-select');

const meals = ['Fettuccine', 'Chicken Alfredo Primavera', 'Chilli prawn linguine', 'Mediterranean Pasta Salad', 'Spaghetti Bolognese', 'Pizza Express Margherita'];

meals.forEach(mealName => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then(response => response.json())
    .then(data => {
      const meal = data.meals[0];
      const option = document.createElement('option');
      option.value = meal.strMeal;
      option.text = meal.strMeal;
      mealSelect.appendChild(option);
    });
});

mealSelect.addEventListener('change', () => {
  const selectedMeal = mealSelect.value;

  mealList.innerHTML = '';

  meals.forEach(mealName => {
    if (mealName === selectedMeal) {
      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
        .then(response => response.json())
        .then(data => {
          const meal = data.meals[0];
          const listItem = document.createElement('li');
          listItem.innerHTML = `
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>Ingredients:</h3>
            <ul>
              <li>${meal.strIngredient1}</li>
              <li>${meal.strIngredient2}</li>
              <li>${meal.strIngredient3}</li>
              <li>${meal.strIngredient4}</li>
              <li>${meal.strIngredient5}</li>
              <li>${meal.strIngredient6}</li>
            </ul>
          `;
          mealList.appendChild(listItem);
          mealSelect.style.display = 'none'; // hide select element
        });
    }
  });
});

// Show the select element again when clicking the "back" button
const backButton = document.getElementById('back-button');
backButton.addEventListener('click', () => {
  mealSelect.style.display = 'block';
  mealList.innerHTML = '';
});

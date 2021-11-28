import axios from 'axios';

const healthAPI = process.env.REACT_APP_HEALTH_API;

const matchRecipesToDailyCalories = async (targetCalories, timeFrame) => {
    try {
        const response = await axios.get(`${healthAPI}mealplans/generate`, {
            params: {
                targetCalories: targetCalories,
                timeFrame: timeFrame
            },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': 'db42bd4e2cmsh79e67a7437d6e45p1b9c09jsn8de802a6c63e'
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error.response);
    }
};

//console.log(matchRecipesToDailyCalories(20000,'day'));

const api = {
    matchRecipesToDailyCalories,
}
export default api; 
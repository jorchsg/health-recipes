import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL
const token = localStorage.getItem('token');

const addMeal = async meals => {
    try {
        const response = await axios.post(`${url}my_meals/createMeal`, meals, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        //return response.data.meals;
        console.log('Posted', response.data);
    } catch (error) {
        console.error('Noooo', error);
    }
};

const deleteMealById = async id => {
    try {
        const response = await axios.delete(`${url}my_meals/deleteMeal/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        //return response.data.meals;
        console.log('Deleted', response.data);
    } catch (error) {
        console.error('Noooo', error);
    }
};

const apiBack = {
    addMeal,
    deleteMealById
}

export default apiBack;

import axios from 'axios';

const url = process.env.REACT_APP_BACKEND_URL

const addMeal = async meals => {
    const token = localStorage.getItem('token');
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

const apiBack = {
    addMeal
}

export default apiBack;

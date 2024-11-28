import axios from 'axios';

import IForm from '../interfaces/IForm';

export const searchRideEstimate = async (data:IForm | null) => {
    const response = await axios.post('http://localhost:8080/ride/estimate', { ...data } )
    return response.data;
}
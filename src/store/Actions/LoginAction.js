import { userLogin } from '../../services/ShipmentService';
import { LOGIN_SUCCESS } from './ActionConstants';

export function doUserLogin(payLoad) {
    return (dispatch) => {
        return userLogin(payLoad).then(resp => {
            localStorage.setItem("myUser", JSON.stringify(resp.data));
            console.log(resp.data);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: resp.data
            });
        })

            .catch(error => {
                alert("Username or Password is invalid")
            });
    }
}

export function doUserLoginSuccess(data) {

    return {
        type: LOGIN_SUCCESS,
        payLoad: data
    }
}
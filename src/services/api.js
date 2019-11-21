const apiUrl = 'https://newsapi.org/v2'; 
const token = 'apiKey=a72a32bc7852464b921d24d2327431a9';

export default {
    Get(Path){
        return fetch(apiUrl + Path + token, {
            method: 'GET',
            headers: {
                Accept:'application/json'
            }
        }).then((response) => {
            return response.json();
        }).then((responseJSON) => {
            return responseJSON;
        }).catch(error => {
            return error;
        })
    }
}
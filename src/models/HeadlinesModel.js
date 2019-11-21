import httpServices from '../services/API';
import * as Path from '../config/APIPath';

export default{
    TopHeadlines(callback){
        try {
            httpServices.Get(Path.TopHeadlines).then((data)=>{
                callback(data)
            })
        } catch (error) {
            console.log(error)
        }
    }
}
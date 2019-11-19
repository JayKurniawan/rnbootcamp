import httpServices from '../services/api';
import * as Path from '../config/api_path';

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
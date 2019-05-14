
import moment from 'moment';
import transformWeather from './transformWeather';
import 'moment/locale/es'; //para traducir el dia a español. 
const transformForecast = data =>(
    //list es propiedad de la libreria moment
    data.list.filter(item=>
        (   
            //este codigo es siguiendo la transformacón  con la documentación.
           /*
            moment.unix(item.dt).utc().hour()=== 6 ||
            moment.unix(item.dt).utc().hour()=== 12 ||
            moment.unix(item.dt).utc().hour()=== 18 ||
            */

            moment.unix(item.dt).hour()=== 6 ||
            moment.unix(item.dt).hour()=== 12 ||
            moment.unix(item.dt).hour()=== 18
            
    )
        
    ).map(item=>({

        weekDay: moment.unix(item.dt).format('ddd'),
        hour: moment.unix(item.dt).hour(),
        data:transformWeather(item)
    }))
);

export default transformForecast;
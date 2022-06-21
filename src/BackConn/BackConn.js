import axios from 'axios';

var url='http://127.0.0.1:8000'
class Backconn{
    async addUser(data){
        return await (axios({
            method: 'POST',
            url: url+'/users/',
            
            headers: {'Content-Type': 'application/json',
      },
            data:data
          },[]));
    }
}
export default Backconn
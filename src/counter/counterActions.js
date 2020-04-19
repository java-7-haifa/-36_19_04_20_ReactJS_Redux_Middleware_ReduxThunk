import axios from 'axios';

const api = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/'
});

export function addCount(){
    return (dispatch,getState) => {
        dispatch({type:'INC'});
        setTimeout(()=>{
            console.log('state',getState());
            dispatch({
                type:'INC'
            });
        },3000);
    }
}

export function decCount(){
    return {
        type:'DEC'
    }
}

export function getRequest(){
    return (disptach) => {
        // axios({
        //     method:'get',
        //     url:'https://jsonplaceholder.typicode.com/todosss/1'
        // })
        // .then(response => {
        //     console.log(response);
        // }).catch(error => {
        //     console.log(error.response);
        // });

        // axios.get('https://jsonplaceholder.typicode.com/todos/1')
        // .then(response => console.log(response));
        
        api.get('todos/1').then(r=>console.log(r));
    }
}
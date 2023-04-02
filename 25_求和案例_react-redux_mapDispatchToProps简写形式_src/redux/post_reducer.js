
const initState={json_data:{}}
export default function postReducer(preState=initState,action){
    console.log('Post_deducer中的prestate,action',preState,action);
    let {type,data}=action
    data=data||{}
    const {json_data:pre_json_data}=preState
    const {json_data:cur_json_data}=data
    console.log('cur_json_data',cur_json_data);
    switch (type) {
        case 'LOAD_POSTS':
            return {json_data:cur_json_data}
        default:
            return preState
    }
}
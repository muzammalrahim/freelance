

const nameReducer = (state="taimoor", action)=>

{
    console.log("action:",action)
    if(action.type === 'CHANGE_NAME')
    {
        console.log("t")
        return action.payload
                
    }

    return  state;
}


export default nameReducer;
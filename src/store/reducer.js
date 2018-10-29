const initialstate={
   userName:''
}

const reducer=(state=initialstate,action)=>{

    if(action.type==='LOGIN')
    console.log("=="+action.loginName)
    return {
        userName:action.loginName
    };
}

export default reducer;
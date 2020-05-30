
export const updateObject = (oldObject , updateObject) =>{
    return{
        ...oldObject,
        ...updateObject
    }
}

export default updateObject
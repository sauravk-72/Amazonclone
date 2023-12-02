//dispatch:it is function which will trigger this valuehich will be called inside reducer
// we will call getproducts function in whuchever component we required products data directly...if we wouldnt used redux the we have to do props drilling 
export const getProducts =()=>async(dispatch)=>{
    try {
        const data =await fetch("https://amazonclonefrontbysk.onrender.com/getproducts",{
            method :"GET",
            headers:{
                "Content-type":"application/json"
            }
        });
        const res=await data.json();
        console.log(res)
        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}
//action- to get data
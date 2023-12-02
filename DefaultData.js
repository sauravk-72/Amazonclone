const Products=require("./models/Productsschema");
const Productsdata=require("./constant/Productsdata");

const DefaultData = async()=>{
    try {
//whenever we will use app data will be added once more therefore to delete extra data we will use dletemany
        await Products.deleteMany({});

        const storeData = await Products.insertMany(Productsdata);
        //console.log(storeData);
    } catch (error) {
        console.log("error"+ error.message);
    }
};


module.exports = DefaultData;
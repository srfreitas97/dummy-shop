module.exports.shop = (req,res,next) => {

    try{
        res.status(200).send('shop')
    }
    catch(error){
        next(error)
    }

}
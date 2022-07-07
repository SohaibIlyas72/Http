function apikey(req ,resolve, next){
    const api_key = '123456';
    console.log(req.query.api_key)
    if(req.query.api_key&&(req.query.api_key===api_key)){
    next();
    } else   {
        res.json({ message: 'not allowed'});
        console.log('done');
    }
    
}
module.exports = apikey;
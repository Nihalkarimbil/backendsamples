function validation(req, res, next) {
    if (req.token) {
        console.log('token approved')
        next()
        return;
    }
    console.log('no auth');
    res.send('no auth')


}
module.exports= validation
function TOKEN(req, res, next) {
    console.log('creating token')
    req.token = true
    next()

}
module.exports=TOKEN
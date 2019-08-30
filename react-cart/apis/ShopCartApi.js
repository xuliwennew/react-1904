
const BASEURL = "http://106.13.112.129:3000"
const CARTAPI = `${BASEURL}/api/cartinfo`

export default {

    getCartInfo(cb){
        fetch(CARTAPI).then(res=>{
            res.json().then(data=>{
                cb(data)
            })
        })
    }
}

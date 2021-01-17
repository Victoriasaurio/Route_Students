function newStudent(body) {
    let isOk = false
    let ok = validate(body)
    if(ok) {
        isOk = true
    }
    return isOk
}

function validate(body) {
    let ok = false
    if(body && typeof body === 'object' && Object.keys(body).length> 0 ){
        if(body.hasOwnProperty('name') && body.name !== '' && body.name.length > 3){
            if(body.hasOwnProperty('password') && body.password !== '' && body.password.length > 7) {
                if(body.hasOwnProperty('email') && body.email !== '' && body.email.length > 15) {
                    ok = true
                }
            }
        }
    }
    return ok
}

module.exports = {
    newStudent
}
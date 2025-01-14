const { mojang, microsoft } = require('minecraft-java-core');

module.exports.loginMojang = function(username, password){
    return new Promise((resolve, reject) => {
        mojang.getAuth(username, password).then(user => {
            module.exports.user = user
            return resolve(user);
        }).catch(error => {
            return reject (error);
        })
    })
}

module.exports.loginMicrosoft = function(id){
    const Microsoft = new microsoft(id);
    return new Promise((resolve, reject) => {
        Microsoft.getAuth().then(user => {
            module.exports.user = user
            return resolve(user);
        }).catch(error => {
            return reject (error);
        })
    })
}

module.exports.getUser = function(id){
    let Users = Object.entries(id)
    let user = []
    if(Users.length === undefined || Users.length === 0){
        return user = null
    }
    for(let [uuid, value] of Users){
        let users = {}
        users = value
        users.uuid = uuid
        user.push(users);
    }
    return user
}

module.exports.refreshAuth = function(acc){
    let access_token = acc.access_token;
    let client_token = acc.client_token;
    return new Promise((resolve, reject) => {
        mojang.refreshAuth(access_token, client_token).then(user => {
            return resolve(user);
        }).catch(error => {
            return reject (error);
        })
    })
}


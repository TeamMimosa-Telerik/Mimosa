function signOut() {
    var promise = new Parse.Promise();

    localStorage.removeItem("badge");
    Parse.User.logOut()
        .then(function (user) {
            promise.resolve(user);
        }, function (error) {
            promise.reject(error);
        });
    return promise;

}

export default {signOut};
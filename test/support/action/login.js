module.exports = function (name, password, done) {
    this.browser
        .setValue ({
            name: name,
            password: password
        })
        .call(done);
};

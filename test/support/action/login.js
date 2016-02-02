module.exports = function (name, password, done) {
    this.browser
        .clik('baseurl'.login1button)
        .set ({
            name: name,
            password: password
        })
        
        
        .click('baseurl'.login2button)
        .call(done);
};

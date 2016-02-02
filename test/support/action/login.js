module.exports = function (name, password, done) {
    this.browser
        .setValue ({
            name: name,
            password: password
        })
        
        
        .click('baseurl'.loginbutton)
        .call(done);
};

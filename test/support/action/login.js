module.exports = function (name, password, done) {
    this.browser
        .set ({
            name: name,
            password: password
        })
        
        
        .click('baseurl'.loginbutton)
        .call(done);
};

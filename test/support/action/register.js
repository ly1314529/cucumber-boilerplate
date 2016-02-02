module.exports = function (name, password,againword,phone,code, done) {
    this.browser
        .set('baseurl'.name.name)
       .set('baseurl'.password.password)
       .set('baseurl'.againword.againword)
       .set('baseurl'.phone.phone)
       .set('baseurl'.code.code)
       .click('baseurl'.registerbutton)
        .call(done);
};

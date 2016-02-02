module.exports = function (name, password,againword,phone,code, done) {
    this.browser
        
       .click('baseurl'.register1button) 
        .setValue('baseurl'.name.name)
       .setValue('baseurl'.password.password)
       .setValue('baseurl'.againword.againword)
       .setValue('baseurl'.phone.phone)
       .setValue('baseurl'.code.code)
       .click('baseurl'.register2button)
        .call(done);
};

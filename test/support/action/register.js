module.exports = function (name, password,againword,phone,code, done) {
    this.browser
        .setValue('url'.name.name)
       .setValue('url'.password.password)
       .setValue('url'.againword.againword)
       .setValue('url'.phone.phone)
       .setValue('url'.code.code)
       
        .call(done);
};

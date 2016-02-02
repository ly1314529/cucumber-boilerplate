

module.exprots = function (login,password,done){
  return this.browser
       .pause(5000)
       .click(lishengghuoPage.signInButton)
       .setValue('baseurl'.loginInput,login)
       .setValue('baseurl'.passwordInput,password)
       .click('baseurl'.signIn2Button)
       .call(done);
 };


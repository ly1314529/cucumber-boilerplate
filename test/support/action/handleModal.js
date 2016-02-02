

module.exprots = function (login,password,done){
  return this.browser
       .pause(5000)
       .click(lishengghuoPage.signInButton)
       .setValue(lishenghuoPage.loginInput,login)
       .setValue(lishenghuoPage.passwordInput,password)
       .click(lishenghuoPage.signIn2Button)
       .call(done);
 };


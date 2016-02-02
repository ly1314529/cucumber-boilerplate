

module.exprots = function (name,password,done){
  return this.browser
       
       .click(lishengghuoPage.signInButton)
       .setValue('baseurl'.loginInput,name)
       .setValue('baseurl'.passwordInput,password)
       .click('baseurl'.signIn2Button)
       .call(done);
 };


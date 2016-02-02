/**
 * check title
 */

module.exports = function (falseCase, name, done) {
    this.browser
        .getTitle()
        .then(function (title) {
            if (falseCase) {
                title.should.not.equal(name );
            } else {
                title.should.equal( name);
            }
        })
        .call(done);
};

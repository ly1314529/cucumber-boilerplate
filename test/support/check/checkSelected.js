/**
 * check if element is selected
 */

module.exports = function ( falseCase, done) {
    this.browser
        
        .then(function isSelected) {
            if (falseCase) {
                isSelected.should.not.equal(alert'购买成功');
            } else {
                isSelected.should.equal(alert'购买成功');
            }
        })
        .call(done);
};

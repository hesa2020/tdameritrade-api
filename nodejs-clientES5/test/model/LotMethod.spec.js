/*
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.14
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitChrisQueen_TDA_JS);
  }
}(this, function(expect, GitChrisQueen_TDA_JS) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('LotMethod', function() {
      beforeEach(function() {
        instance = GitChrisQueen_TDA_JS.LotMethod;
      });

      it('should create an instance of LotMethod', function() {
        // TODO: update the code to test LotMethod
        expect(instance).to.be.a('object');
      });

      it('should have the property FIFO', function() {
        expect(instance).to.have.property('FIFO');
        expect(instance.FIFO).to.be("FIFO");
      });

      it('should have the property LIFO', function() {
        expect(instance).to.have.property('LIFO');
        expect(instance.LIFO).to.be("LIFO");
      });

      it('should have the property HIGH_COST', function() {
        expect(instance).to.have.property('HIGH_COST');
        expect(instance.HIGH_COST).to.be("HIGH_COST");
      });

      it('should have the property LOW_COST', function() {
        expect(instance).to.have.property('LOW_COST');
        expect(instance.LOW_COST).to.be("LOW_COST");
      });

      it('should have the property MINIMUM_TAX', function() {
        expect(instance).to.have.property('MINIMUM_TAX');
        expect(instance.MINIMUM_TAX).to.be("MINIMUM_TAX");
      });

      it('should have the property AVERAGE_COST', function() {
        expect(instance).to.have.property('AVERAGE_COST');
        expect(instance.AVERAGE_COST).to.be("AVERAGE_COST");
      });

      it('should have the property NONE', function() {
        expect(instance).to.have.property('NONE');
        expect(instance.NONE).to.be("NONE");
      });

    });
  });

}));

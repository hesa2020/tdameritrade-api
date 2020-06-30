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
    describe('OptionChainUnderlying', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.OptionChainUnderlying();
      });

      it('should create an instance of OptionChainUnderlying', function() {
        // TODO: update the code to test OptionChainUnderlying
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.OptionChainUnderlying);
      });

      it('should have the property schema (base name: "schema")', function() {
        // TODO: update the code to test the property schema
        expect(instance).to.have.property('schema');
        // expect(instance.schema).to.be(expectedValueLiteral);
      });

    });
  });

}));

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
    describe('PostAccessBody', function() {
      beforeEach(function() {
        instance = new GitChrisQueen_TDA_JS.PostAccessBody();
      });

      it('should create an instance of PostAccessBody', function() {
        // TODO: update the code to test PostAccessBody
        expect(instance).to.be.a(GitChrisQueen_TDA_JS.PostAccessBody);
      });

      it('should have the property access_type (base name: "access_type")', function() {
        // TODO: update the code to test the property access_type
        expect(instance).to.have.property('access_type');
        // expect(instance.access_type).to.be(expectedValueLiteral);
      });

      it('should have the property client_id (base name: "client_id")', function() {
        // TODO: update the code to test the property client_id
        expect(instance).to.have.property('client_id');
        // expect(instance.client_id).to.be(expectedValueLiteral);
      });

      it('should have the property code (base name: "code")', function() {
        // TODO: update the code to test the property code
        expect(instance).to.have.property('code');
        // expect(instance.code).to.be(expectedValueLiteral);
      });

      it('should have the property grant_type (base name: "grant_type")', function() {
        // TODO: update the code to test the property grant_type
        expect(instance).to.have.property('grant_type');
        // expect(instance.grant_type).to.be(expectedValueLiteral);
      });

      it('should have the property redirect_uri (base name: "redirect_uri")', function() {
        // TODO: update the code to test the property redirect_uri
        expect(instance).to.have.property('redirect_uri');
        // expect(instance.redirect_uri).to.be(expectedValueLiteral);
      });

      it('should have the property refresh_token (base name: "refresh_token")', function() {
        // TODO: update the code to test the property refresh_token
        expect(instance).to.have.property('refresh_token');
        // expect(instance.refresh_token).to.be(expectedValueLiteral);
      });

    });
  });

}));

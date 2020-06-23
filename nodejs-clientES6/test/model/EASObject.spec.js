/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
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

  beforeEach(function() {
    instance = new GitChrisQueen_TDA_JS.EASObject();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EASObject', function() {
    it('should create an instance of EASObject', function() {
      // uncomment below and update the code to test EASObject
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.EASObject);
    });

    it('should have the property AccessToken (base name: "access_token")', function() {
      // uncomment below and update the code to test the property AccessToken
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property RefreshToken (base name: "refresh_token")', function() {
      // uncomment below and update the code to test the property RefreshToken
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property TokenType (base name: "token_type")', function() {
      // uncomment below and update the code to test the property TokenType
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property ExpiresIn (base name: "expires_in")', function() {
      // uncomment below and update the code to test the property ExpiresIn
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property Scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property Scope
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

    it('should have the property RefreshTokenExpiresIn (base name: "refresh_token_expires_in")', function() {
      // uncomment below and update the code to test the property RefreshTokenExpiresIn
      //var instane = new GitChrisQueen_TDA_JS.EASObject();
      //expect(instance).to.be();
    });

  });

}));

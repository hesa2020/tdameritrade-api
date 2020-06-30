/**
 * TD Ameritrade API - OAuth2
 * This is replication of the TD Ameritrade API.
 *
 * OpenAPI spec version: 0.1.4
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
    instance = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
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

  describe('UserPrincipalStreamerInfo', function() {
    it('should create an instance of UserPrincipalStreamerInfo', function() {
      // uncomment below and update the code to test UserPrincipalStreamerInfo
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be.a(GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo);
    });

    it('should have the property streamerBinaryUrl (base name: "streamerBinaryUrl")', function() {
      // uncomment below and update the code to test the property streamerBinaryUrl
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property streamerSocketUrl (base name: "streamerSocketUrl")', function() {
      // uncomment below and update the code to test the property streamerSocketUrl
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property tokenTimestamp (base name: "tokenTimestamp")', function() {
      // uncomment below and update the code to test the property tokenTimestamp
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property userGroup (base name: "userGroup")', function() {
      // uncomment below and update the code to test the property userGroup
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property accessLevel (base name: "accessLevel")', function() {
      // uncomment below and update the code to test the property accessLevel
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property acl (base name: "acl")', function() {
      // uncomment below and update the code to test the property acl
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

    it('should have the property appId (base name: "appId")', function() {
      // uncomment below and update the code to test the property appId
      //var instane = new GitChrisQueen_TDA_JS.UserPrincipalStreamerInfo();
      //expect(instance).to.be();
    });

  });

}));

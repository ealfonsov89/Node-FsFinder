// Generated by CoffeeScript 1.6.3
(function() {
  var Helpers, expect;

  expect = require('chai').expect;

  Helpers = require('../../lib/Helpers');

  describe('Helpers', function() {
    describe('#parseDirectory()', function() {
      return it('should return object with directory and mask from path to find* methods', function() {
        expect(Helpers.parseDirectory("/one")).to.be.eql({
          directory: "/one",
          mask: null
        });
        expect(Helpers.parseDirectory("<(five|three)*>")).to.be.eql({
          directory: '',
          mask: '<(five|three)*>'
        });
        return expect(Helpers.parseDirectory("*<e$>")).to.be.eql({
          directory: '',
          mask: '*<e$>'
        });
      });
    });
    return describe('#expandPath()', function() {
      return it('should return array with expanded paths', function() {
        return expect(Helpers.expandPath('/var/www/web/project/about-me/www/index.php', true)).to.be.eql(['/var/www/web/project/about-me/www', '/var/www/web/project/about-me', '/var/www/web/project', '/var/www/web', '/var/www', '/var', '/']);
      });
    });
  });

}).call(this);

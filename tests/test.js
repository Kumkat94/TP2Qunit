var paire = require ("../js/paire");
var bjr = require ("../js/bonjour");
var secu = require ("../js/secu");
var assert = require("assert");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Paire', function() {
    it('should return true, 2 is pair', function() {
        assert.equal(paire(2),true);
      });

    it('should return false, 3 is not pair', function() {
        assert.equal(paire(3),false);
    });
    it('should return true, -2 is pair', function() {
        assert.equal(paire(-2),true);
    });
    it('should return true, 0 is pair', function() {
        assert.equal(paire(0),true);
    });
    it('should return true, "a" is not a integer', function() {
        assert.equal(paire("a"),false);
    });
    it('should return true, 45456 is pair', function() {
        assert.equal(paire(45456),true);
    });
      
});

describe('Bonjour', function() {
    it('should return "Bonjour Charlotte" ', function() {
        assert.strictEqual(bjr("Charlotte"),"Bonjour Charlotte");
    });

    it('should return "Bonjour Jean" ', function() {
        assert.strictEqual(bjr("Jean"),"Bonjour Jean");
    });

});

describe('Secu', function() {
    
    it('should return true, good number ', function() {
        assert.strictEqual(secu("294115439535147"),true);
    });
    it('should return false, fake number ', function() {
        assert.strictEqual(secu("198115439535147"),false);
    });
    
});



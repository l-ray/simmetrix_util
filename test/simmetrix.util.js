var util = require('../lib/simmetrix.util.js')
var expect = require('expect.js');

describe('Simmetrix.Util', function(){
  describe('#similarity()', function(){
    it('should return a reduced String', function(){
      expect(util.returnCompareString("Star-ship-troopers")).to.be.equal('star ship troopers');
    })
    it('should return a reduced Summary of multiple strings', function(){
      expect(util.reducedSummary("alte welle","welle reiter").split(" ")).to.have.length(3);
      expect(util.reducedSummary("alte welle","welle reiter")).to.contain('alte');
      expect(util.reducedSummary("alte welle","welle reiter")).to.contain('welle');
      expect(util.reducedSummary("alte welle","welle reiter")).to.contain('reiter');
    })
  })
})

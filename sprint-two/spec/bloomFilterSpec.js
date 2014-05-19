var assert = chai.assert;

describe("bloomFilter", function() {
  var bf;

  beforeEach(function() {
    bf = new BloomFilter();
  });

  it("should return true for items in the filter", function() {
    bf.add('bob');
    bf.add('jimbo');
    bf.add('carl');
    bf.add('diego');

    var bob = bf.query('bob');
    var jimbo = bf.query('jimbo');
    expect(bob).to.equal(true);
    expect(jimbo).to.equal(true);
  });
});

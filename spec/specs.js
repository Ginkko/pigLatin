describe('pigLatinVowel', function() {
  it("will add 'ay' to the end of the word", function() {
    expect(pigLatinVowel('apple')).to.equal('appleay');
  });
});

describe('pigLatinConsonant', function() {
  it("will put the first letter to the end of the word and add 'ay'", function() {
    expect(pigLatinConsonant('ball')).to.equal('allbay');
  });
  it("handles words starting with two consonants", function() {
    expect(pigLatinConsonant('bland')).to.equal('andblay');
  });
  it("handles words starting with three consonants", function() {
    expect(pigLatinConsonant('strong')).to.equal('ongstray');
  })
});

describe('pigLatin', function () {
  it("it returns the pig latin translation of a word that starts with a vowel", function() {
    expect(pigLatin('elephant')).to.equal('elephantay');
  });
  it("handles words that start with y", function () {
    expect(pigLatin('yellow')).to.equal('ellowyay');
  });
  it("handles unlikey words that start with y and consonants", function (){
    expect(pigLatin('yssellow')).to.equal('ellowyssay')
  });
});

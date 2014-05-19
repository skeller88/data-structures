//Hack Reactor hash helper 
var generateHr = function(str, size){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash<<5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % size;
};

var generateMurmurHash3 = function(str, size){
    //do I need to seed the hash? 
    var h = murmurHash3.x86.hash32(str);
    return h % size;
};

//fnv32a hash https://gist.github.com/vaiorabbit/5657561
var generateFnv32a = function(str, size){
    var h = fnv32a(str);
    return h % size;
};

var BloomFilter = function(m, k) {
    this.m = m || 18;
    this.k = k || 3;
    this.setBits();
    this.createHashers();
};

BloomFilter.prototype = {
    setBits: function(hashes){
        var hashes = hashes || [];
        this._storage = [];
        for(var i = 0; i < this.m; i++){
            if(hashes[i]){
                this._storage[i] = 1;
            }else{
                this._storage[i] = 0;
            }
        }
    },
    createHashers: function(){
        this.hashers = [generateHr, generateMurmurHash3, generateFnv32a];
    },
    add: function(val){
        var hashes = this.generateHashes(val);

        for(var i = 0; i < hashes.length; i++){
            this._storage[hashes[i]] = 1;
        }
    },
    query: function(val){
        var hashes = this.generateHashes(val);

        for(var i = 0; i < hashes.length; i++){
            if(!this._storage[hashes[i]]) return false;
        }
        return true;
    },
    generateHashes: function(val){
        var hashes = [];
        for(var i = 0; i < this.hashers.length; i++){
            hashes.push(this.hashers[i](val, this.m));
        }
        return hashes;
    }
}

BloomFilter.prototype.constructor = BloomFilter;

var testErrorRate = function(numTrials){
    var numTrials = numTrials || 1000;
    var errors = 0;
    var numTrialWords = 5;
    var db = ['version','section','own','found','sports','house','related','security','both','g','county','american','photo','game','members','power','while','care','network','down','computer','systems','three','total','place','end','following','download','h','him','without','per','access','think','north','resources','current','posts','big','media','law','control','water','history','pictures','size','art','personal','since'];


    for(var i = 0; i < numTrials; i++){
        var bf = new BloomFilter();
        var trialWords = [];

        for(var k = 0; k < numTrialWords; k++) {
            var rand = Math.floor(Math.random()*db.length);
            var randWord = db[rand];
            trialWords[randWord] = true;
            bf.add(randWord);

        }

        for(var k = 0; k < db.length; k++){
            var word = db[k];
            if(bf.query(word) && !trialWords[word]){
                errors++;
            }
        }
    }

    return "The false positive rate is: " + (errors/(numTrials*numTrialWords)) + '%';
}

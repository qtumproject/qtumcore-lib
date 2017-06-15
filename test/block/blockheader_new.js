var should = require('chai').should();
var bitcore = require('../..');
var BufferUtil = bitcore.util.buffer;
var BlockHeader = bitcore.BlockHeader;
var dataPow = require('../data/qtum/block-pow');
var dataPos = require('../data/qtum/block-pos');
var bhhexPow = dataPow.blockheaderhex;
var hashPow = dataPow.hash;
var bhhexPos = dataPos.blockheaderhex;
var hashPos = dataPos.hash;
var bhbufPow = new Buffer(bhhexPow, 'hex');
var bhbufPos = new Buffer(bhhexPos, 'hex');

describe('BlockHeader', function() {

    it('should make a new blockheader POW', function() {
        BlockHeader(bhbufPow).toBuffer().toString('hex').should.equal(bhhexPow);
    });

    it('should make a new blockheader POS', function() {
        BlockHeader(bhbufPos).toBuffer().toString('hex').should.equal(bhhexPos);
    });

    it('hash blockheader POW', function() {
        BufferUtil.reverse(BlockHeader(bhbufPow)._getHash()).toString('hex').should.equal(hashPow);
    });

    it('hash blockheader POS', function() {
        BufferUtil.reverse(BlockHeader(bhbufPos)._getHash()).toString('hex').should.equal(hashPos);
    });

    it('should not make an empty block', function() {
        (function() {
            BlockHeader();
        }).should.throw('Unrecognized argument for BlockHeader');
    });

    describe('#constructor', function() {


    });


});
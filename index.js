#!/usr/bin/env node

var program = require('commander');
var AESdecrypt = require('./crypto-util/aes-util').decrypt;
var AESencrypt = require('./crypto-util/aes-util').encrypt;

var ElasticUtil = require('./elastic-util/elastic-util');

program
	.command('encrypt')
	.description('encrypt files')
	.option("-s, --source <sourcefile>", "path to the source file")
	.option("-d, --destination  <outputfile>", "path to output the decrypted file")
	.option("-p, --password <password>", "password used")
	.action(function(options){
		if (options.source && options.destination && options.password) {
			try {
				AESencrypt(options.source, options.destination, options.password);
			} catch(err) {
				console.log(err);
			}
		}
	});

program
	.command('decrypt')
	.description('decrypt files')
	.option("-s, --source <sourcefile>", "path to the source file")
	.option("-d, --destination  <outputfile>", "path to output the decrypted file")
	.option("-p, --password <password>", "password used")
	.action(function(options){
		if (options.source && options.destination && options.password) {
			try {
				AESdecrypt(options.source, options.destination, options.password);
			} catch(err) {
				console.log(err);
			}
		}
	});

program
	.command('elastic-dump')
	.description('dump/import elasticsearch data')
	.option("-s, --source <sourcefile>", "source url of the index to be dumped")
	.option("-d, --destination  <outputfile>", "path to output the dumped data (json format)")
	.option("-t, --type  <type>", "the type of data to be dumped, one of 'data', 'mapping', 'analyzer'")
	.action(function(options){
		if (options.source && options.destination && options.type) {
			try {
				ElasticUtil.dump(options.source, options.destination, options.type);
			} catch(err) {
				console.log(err);
			}
		}
	});

program.parse(process.argv);

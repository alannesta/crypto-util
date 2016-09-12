#!/usr/bin/env node

var program = require('commander');
var AESdecrypt = require('./crypto-util/aes-util').decrypt;
var AESencrypt = require('./crypto-util/aes-util').encrypt;

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
		console.log(options.source);
		console.log(options.destination);
		console.log(options.password);
		if (options.source && options.destination && options.password) {
			try {
				AESdecrypt(options.source, options.destination, options.password);
			} catch(err) {
				console.log(err);
			}
		}
	});

program.parse(process.argv);

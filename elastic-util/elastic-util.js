var elasticsearch = require('elasticsearch');
var exec = require('child_process').exec;
var path = require('path');

module.exports = {

	dump: function elasticDump(source, dest, type) {
		// global installation of elasticdump is not required
		var dumpCommand = `${path.resolve(__dirname, '../node_modules/elasticdump/bin/elasticdump')} \
			--input=${source} \
			--output=${dest} --type=${type}`;

		console.log('executing: ' + dumpCommand);

		var dumpProcess = exec(dumpCommand, function(err, stdout, stderr) {
			if (err) {
				console.log(err);
			} else {
				console.log('elastic dump done');
			}
		});
	}
};


/*
	Elastic quick workflow...
 */

// var client = new elasticsearch.Client({
// 	host: 'localhost:9200',
// 	log: 'info'
// });

// var client = new elasticsearch.Client({
// 	host: 'localhost:9201',
// 	log: 'trace'
// });

// function createSimpleIndex() {
// 	client.indices.create({
// 		index: '91trend'
// 	}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log(result);
// 	});
// }
//
//
// function createIKIndex() {
// 	client.indices.create({
// 		index: '91trend-reindex',
// 		body: {
// 			"mappings": {
// 				"video": {
// 					"properties": {
// 						"title": {
// 							"type": "string",
// 							"index": "analyzed",
// 							"analyzer": "ik_smart",
// 							"search_analyzer": "ik_smart"
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log(result);
// 	});
// }
//
// function createSmartCNIndex() {
// 	client.indices.create({
// 		index: '91trend-cnindex',
// 		body: {
// 			"mappings": {
// 				"video": {
// 					"properties": {
// 						"title": {
// 							"type": "string",
// 							"index": "analyzed",
// 							"analyzer": "smartcn",
// 							"search_analyzer": "smartcn"
// 						}
// 					}
// 				}
// 			}
// 		}
// 	}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log(result);
// 	});
// }
//
// function reindex() {
// 	client.reindex({
// 		refresh: true,
// 		waitForCompletion: true,
// 		body: {
// 			"source": {
// 				"index": "91trend"
// 			},
// 			"dest": {
// 				"index": "91trend-reindex"
// 			}
// 		}
// 	}, function(err, result) {
// 		if (err) {
// 			console.log(err);
// 		}
// 		console.log(result);
// 	});
// }
//
// function analyze(index, text) {
// 	client.indices.analyze({
// 		index: index,
// 		body: {
// 			"field": "title",
// 			// "analyzer": "ik_max",
// 			"text": text
// 		}
// 	})
// }
//
// function search(index, query) {
// 	client.search({
// 		index: index,
// 		type: 'video',
// 		size: 10,
// 		body: {
// 			query: {
// 				filtered: {
// 					query: {
// 						match: {
// 							title: query
// 						}
// 					}
// 				}
//
// 			},
// 			sort: [
// 				{_score: {order: "desc"}},
// 				{trend: {order: "desc"}}
// 			]
// 		}
// 	}, function(err, resp) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log(resp.hits.hits.map(function(hit) {
// 				return hit._source.title;
// 			}));
// 		}
// 	});
// }
//
// function elasticDump(index, type) {
// 	var dump = `${path.resolve(__dirname, '../node_modules/elasticdump/bin/elasticdump')} \
// 	--input=http://localhost:9200/${index} \
// 	--output=${path.resolve(__dirname, '../data/')}${'/' + index + '-' + type + '.json'} --type=${type}`;
//
// 	console.log(dump);
//
// 	var dumpProcess = exec(dump, function(err, stdout, stderr) {
// 		if (err) {
// 			console.log(err);
// 		} else {
// 			console.log('done');
// 		}
// 	});
// }

// elasticDump('91trend', 'mapping');
// elasticDump('../data/91trend-data.json', 'http://localhost:9201/91trend', 'data');

// createIKIndex();
// createSmartCNIndex();

// reindex();

// analyze('91trend', '武累错失单刀,上海上港惨败');
// analyze('91trend-reindex', '武累错失单刀,上海上港惨败');
// analyze('91trend-cnindex', '武累错失单刀,上海上港惨败');

// search('91trend', '1');
// search('91trend-reindex', '2');
// search('91trend-cnindex', '3');


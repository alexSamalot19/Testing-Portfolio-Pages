// var markdownIt = require('markdown-it');
// var fs = require('fs');

// md = new markDownIt;
// var markDownFile = fs.readFile('TestMATLAB.md');
// var result = md.render(markDownFile);
// $("#markdownDiv").html(result);

var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');
$("#markdownDiv").html(result);
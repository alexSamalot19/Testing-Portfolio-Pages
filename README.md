You are going to use jQuery to manipulate a div somewhere you want to display the markdown content. Once you get the *result* from md.render(), that will be actual HTML that you can just append to the DOM.

var MarkdownIt = require('markdown-it'),
var fs = require('fs')
md = new MarkdownIt();
var markdownFile = fs.readFile('alexs-markdown-file')
var result = md.render(markdownFile);
$(#markdownDiv).html(result);

Kindof Pseduo Coded it a bit but just base it off these steps above. If you need some more to go on or have any other questions about it shoot them my way.
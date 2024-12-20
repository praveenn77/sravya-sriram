const fs = require('fs');
const { minify } = require('html-minifier');

// Function to JSON escape a string
function jsonEscape(str) {
  return str.replace(/\\/g, '\\\\')
            .replace(/"/g, '\\"')
            .replace(/\n/g, '\\n')
            .replace(/\r/g, '\\r')
            .replace(/\t/g, '\\t');
}

// Read the HTML file
fs.readFile('rsvpform.html', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Minify the HTML
  const minifiedHtml = minify(data, {
    removeAttributeQuotes: true,
    collapseWhitespace: true,
    removeComments: true,
  });

  // JSON escape the minified HTML
  const escapedHtml = jsonEscape(minifiedHtml);

  // Write the result to another file
  replaceInIndex(escapedHtml);
 
});


function replaceInIndex(newValue){
    let dataJs = fs.readFileSync('./js/data.js', 'utf8');
    const oldValue = fs.readFileSync('oldValue', 'utf8');
   
    dataJs = dataJs.replace(oldValue, newValue);
    fs.writeFileSync('./js/data.js', dataJs);
    fs.writeFileSync('oldValue', newValue); 
}
const fs = require('fs');

let quoteData;
try {
  // Read the contents of 'quotes.json' file.
  quoteData = fs.readFileSync('quotes.json');
  console.log("✅ Successfully read 'quotes.json'")
} catch {
  console.error("⚠️  Could not read 'quotes.json'")
}

// Parse it from JSON string to JS Object
const quotes = JSON.parse(quoteData ?? '[]');

module.exports = quotes;
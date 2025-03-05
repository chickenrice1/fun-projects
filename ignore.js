EXAMPLE_NAME=I9JU23NF394R6HH

npm install dotenv
require('dotenv').config();
const exampleName = process.env.EXAMPLE_NAME;
console.log(exampleName);

# .gitignore
.env

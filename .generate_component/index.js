const fs = require('fs');
const { component, styles} = require('./component_templates.js');

// grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) throw new Error('You must include a component name.');

const dir = `./components/${name}/`;

const fileName = dir.split('/').reverse()[1]


// throw an error if the file already exists
if (fs.existsSync(dir)) throw new Error('A component with that name already exists.'); 

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${fileName}.tsx`, component(fileName), writeFileErrorHandler);
// component.scss
fs.writeFile(`${dir}/${fileName}.module.scss`, styles(fileName), writeFileErrorHandler);
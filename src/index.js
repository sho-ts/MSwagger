const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const getComponent = require('./lib/getComponent');

try {
  const doc = yaml.load(fs.readFileSync(path.resolve(__dirname, 'mock', 'swagger.yml'), 'utf8'));
  const paths = doc.paths;
  const put = paths['/pet']['put'];
  const responseRef = put.responses['200'].content['application/json'].schema.$ref;
  const component = getComponent(doc, responseRef);
} catch (e) {
  throw e;
}
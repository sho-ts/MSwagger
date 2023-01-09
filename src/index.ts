import yaml from 'js-yaml';
import fs from 'fs'
import path from 'path'
import getComponent from './lib/getComponent';

try {
  const doc = yaml.load(
    fs.readFileSync(
      path.resolve(__dirname, 'mock', 'swagger.yml'),
      'utf8'
    )
  ) as any;
  const paths = doc.paths;
  const put = paths['/pet']['put'];
  const responseRef =
    put.responses['200'].content['application/json'].schema
      .$ref;

  const component = getComponent(doc, responseRef);
  console.log(component);
} catch (e) {
  throw e;
}

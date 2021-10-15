const execa = require('execa');
const config = require('./open-api-sources.json');

(async () => {
  config.forEach(async (controler) => {
    try {
      await execa.command(`npx @openapitools/openapi-generator-cli generate -i ${controler.url} -g typescript-axios -o src/api/${controler.name} --skip-validate-spec  --package-name ${controler.name}  --skip-operation-example`)
    } catch (error) {
      console.log(error);
    }
  });
})();

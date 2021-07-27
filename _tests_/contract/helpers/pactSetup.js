const path = require("path")
const Pact = require("@pact-foundation/pact")

global.portal=8081
global.provider = new Pact({
    port: global.port,
    log: path.resolve(preocess.cwd(),"_tests_/contract/logs","logs-pact.log"),
    dir: path.resolve(process.cwd(),"_tests_/contract/pacts"),
    spec: 2,
    logLevel: 'INFO',
    pactfileWriteMode: "overwrite",
    consumer: "Frontend",
    provider: "ClientsService"

})
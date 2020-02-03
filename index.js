const {Apis, ChainStore} = require('peerplaysjs-lib');
const chalk = require('chalk');

Apis.instance("wss://ppyws.roelandp.nl/ws", true).init_promise.then((res) => {
    console.log(chalk.green("connected to:"));
    Apis.instance().db_api().exec( "get_dynamic_global_properties", [] ).then(w => console.log(w));
});

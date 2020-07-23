#!/usr/bin/env node
// transpile:main

import yargs from 'yargs';
import { asyncify } from 'asyncbox';
import { startServer } from './lib/server';
import { WindowsDriver } from './lib/driver';
import { commonCapConstraints } from './lib/desired-caps';

const DEFAULT_HOST = "localhost";
const DEFAULT_PORT = 4723;

async function main() {
    let port = yargs.argv.port || DEFAULT_PORT;
    let host = yargs.argv.host || DEFAULT_HOST;
    return startServer(port, host);
}

if (require.main === module) {
  asyncify(main);
}

export { WindowsDriver,  commonCapConstraints };

export default WindowsDriver;


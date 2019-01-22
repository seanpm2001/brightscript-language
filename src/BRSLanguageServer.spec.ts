import * as path from 'path';
import * as sinonImport from 'sinon';

import { BRSLanguageServer } from './BRSLanguageServer';
import { expect, assert } from 'chai';
import * as util from './util';

let sinon = sinonImport.createSandbox();

beforeEach(() => {
});
afterEach(() => {
    sinon.restore();
});

describe('BRSLanguageServer', () => {
    let server: BRSLanguageServer;
    let s: any;
    let vfs = {};
    let vfsStub;
    let rootConfigPath = path.join(process.cwd(), 'brsconfig.json');
    let rootConfigDir = path.dirname(rootConfigPath);
    beforeEach(() => {
        server = new BRSLanguageServer();
        s = server;
        vfs = {};
        vfsStub = sinon.stub(util, 'getFileContents').callsFake((filePath) => {
            if (vfs[filePath]) {
                return vfs[filePath];
            } else {
                throw new Error('Cannot find file ' + filePath);
            }
        });
    })
});
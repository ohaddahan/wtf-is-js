import ANCHOR_PROGRAM from './errors/errors_anchor.js';
import NFT_CANDY_MACHINE from './errors/errors_nft_candy_machine.js';
import TOKEN_METADATA from './errors/errors_token_metadata.js';

const errorsLookUp = {
    "anchor": ANCHOR_PROGRAM,
    "candy": NFT_CANDY_MACHINE,
    "token": TOKEN_METADATA
}

function findError(hexString) {
    let outputs = []
    let code = hexString.replace(/^0x/, "").toUpperCase();

    for (let name in errorsLookUp) {
        let lookup = errorsLookUp[name];
        if (lookup.hasOwnProperty(code)) {
            outputs.push(`Found '${hexString}' in '${name}' value is : '${lookup[code]}'`);
        }
    }
    return outputs;
}

export default findError;
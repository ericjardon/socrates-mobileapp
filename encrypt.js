/* Module for the encryption of a ballot */
const openpgp = require('openpgp');
// Use PGP with a hidden, public key of ours
const pubKey = `-----BEGIN PGP PUBLIC KEY BLOCK-----

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
f9c0lARzpXLVMdfZS7x8rx69typiPq9YQ9J7YQ==
=QdXx
-----END PGP PUBLIC KEY BLOCK-----
`;

const privKey = `-----BEGIN PGP PRIVATE KEY BLOCK-----

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
19lLvHyvHr23KmI+r1hD0nth
=OZ+9
-----END PGP PRIVATE KEY BLOCK-----
`;

(async () => {
    const publicKey = await openpgp.readKey({ armoredKey: pubKey });
    const privateKey = await openpgp.readKey({ armoredKey: privKey })

    let msg = "Hello, World!";
    console.log("Original: ", msg);

    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: msg }),
        publicKeys: publicKey,
    });
    console.log(encrypted);

    const original = await openpgp.readMessage({ armoredMessage: encrypted });

    const { data: decrypted, signatures } = await openpgp.decrypt({
        message: original,
        privateKeys: privateKey,
    });
    console.log("After decrypting...");
    console.log(decrypted);
    console.log(signatures);
    return;
})();
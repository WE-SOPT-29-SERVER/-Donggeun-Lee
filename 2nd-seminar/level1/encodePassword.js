const fs = require('fs');
const crypto = require('crypto');

const password = fs.readFileSync('password.txt', { encoding: 'utf-8' });
const salt = crypto.randomBytes(32).toString('hex');
const iterations = 100000;
const keylen = 64;
const digest = 'sha512';
const callback = (err, derivedKey) => {
  if (err) throw err;
  const uglyPassword = derivedKey.toString('hex');
  fs.writeFileSync('hashed.txt', uglyPassword);
};

crypto.pbkdf2(password, salt, iterations, keylen, digest, callback);

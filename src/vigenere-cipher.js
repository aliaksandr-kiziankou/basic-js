const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!this.isDirect) {
      message = message.split('').reverse().join('');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (const char of message) {
      if (char >= 'A' && char <= 'Z') {
        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = key.charCodeAt(keyIndex % key.length) - 65;

        result += String.fromCharCode((messageCode + keyCode) % 26 + 65);
        keyIndex++;
      } else {
        result += char;
      }
    }

    return result;
  }

  decrypt(message, key) {
    if (!this.isDirect) {
      message = message.split('').reverse().join('');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (const char of message) {
      if (char >= 'A' && char <= 'Z') {
        const messageCode = char.charCodeAt(0) - 65;
        const keyCode = key.charCodeAt(keyIndex % key.length) - 65;

        result += String.fromCharCode(
          (messageCode - keyCode + 26) % 26 + 65
        );
        keyIndex++;
      } else {
        result += char;
      }
    }

    if (!this.isDirect) {
      result = result.split('').reverse().join('');
    }

    return result;
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

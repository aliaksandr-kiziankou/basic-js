const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return 0;
    }

    return 1 + Math.max(
      0,
      ...arr
        .filter(Array.isArray)
        .map((item) => this.calculateDepth(item)),
    );
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};

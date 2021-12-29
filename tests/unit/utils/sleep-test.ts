import sleep from 'charlesfries/utils/sleep';
import { module, test } from 'qunit';

module('Unit | Utility | sleep', function () {
  test('it works', function (assert) {
    const result = sleep(1000);
    assert.ok(result);
  });
});

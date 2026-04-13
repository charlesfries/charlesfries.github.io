import { module, test } from 'qunit';
import { setupTest } from 'charlesfries/tests/helpers';

module('Unit | Controller | index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    const controller = this.owner.lookup('controller:index');
    assert.ok(controller);
  });
});

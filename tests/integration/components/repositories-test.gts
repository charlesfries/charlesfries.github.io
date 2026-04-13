import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Repositories from 'charlesfries/components/repositories';
import { array } from '@ember/helper';

module('Integration | Component | repositories', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template><Repositories @repositories={{(array)}} /></template>,
    );

    assert.dom('.row').exists();
  });
});

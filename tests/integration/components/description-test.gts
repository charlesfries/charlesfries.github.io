import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Description from 'charlesfries/components/description';

module('Integration | Component | description', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Description /></template>);

    assert.dom('p').exists();
  });
});

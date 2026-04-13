import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Theme from 'charlesfries/components/theme';

module('Integration | Component | theme', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Theme /></template>);

    assert.dom().hasText('');
  });
});

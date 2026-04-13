import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Subheading from 'charlesfries/components/subheading';

module('Integration | Component | subheading', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Subheading /></template>);

    assert.dom('h2').exists();
  });
});

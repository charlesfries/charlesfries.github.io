import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Heading from 'charlesfries/components/heading';

module('Integration | Component | heading', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Heading /></template>);

    assert.dom('h1').exists();
  });
});

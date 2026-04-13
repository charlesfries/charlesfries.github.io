import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Contact from 'charlesfries/components/contact';

module('Integration | Component | contact', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Contact /></template>);

    assert.dom('a').exists({ count: 5 });
  });
});

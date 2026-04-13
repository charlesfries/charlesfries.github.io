import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Socials from 'charlesfries/components/socials';

module('Integration | Component | socials', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(<template><Socials /></template>);

    assert.dom('a').exists({ count: 6 });
  });
});

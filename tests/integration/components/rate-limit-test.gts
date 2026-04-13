import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import RateLimit from 'charlesfries/components/rate-limit';

module('Integration | Component | rate-limit', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    await render(
      <template>
        <RateLimit @remaining={{null}} @max={{null}} @resetAt={{null}} />
      </template>,
    );

    assert.dom().hasText('');
  });
});

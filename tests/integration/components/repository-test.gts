import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Repository from 'charlesfries/components/repository';
import type { GitHubRepository } from 'charlesfries/utils/github-types';

module('Integration | Component | repository', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const repository = {} as GitHubRepository;

    await render(
      <template><Repository @repository={{repository}} /></template>,
    );

    assert.dom().hasText('No Description Updated Invalid Date NaN');
  });
});

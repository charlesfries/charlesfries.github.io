import { module, test } from 'qunit';
import { setupRenderingTest } from 'charlesfries/tests/helpers';
import { render } from '@ember/test-helpers';
import Repository from 'charlesfries/components/repository';
import type { GitHubRepository } from 'charlesfries/utils/github-types';

module('Integration | Component | repository', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    const repository = {
      description: 'This is a description.',
      pushed_at: new Date(2026, 0, 1).toISOString(),
      stargazers_count: 1,
      forks_count: 2,
    } as GitHubRepository;

    await render(
      <template><Repository @repository={{repository}} /></template>,
    );

    assert.dom().hasText('This is a description. 1 2 Updated on January 2026');
  });
});

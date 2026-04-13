import type { TOC } from '@ember/component/template-only';
import type { GitHubRepository } from 'charlesfries/utils/github';
import Repository from './repository';

export interface RepositoriesSignature {
  repositories: GitHubRepository[];
}

<template>
  <div class="row row-cols-md-3 row-cols-sm-2 row-cols-1 g-3 mb-3">
    {{#each @repositories as |repository|}}
      <div class="col">
        <div class="card clickable">
          <div class="card-body">
            <Repository @repository={{repository}} />
          </div>
        </div>
      </div>
    {{/each}}
  </div>
</template> satisfies TOC<RepositoriesSignature>;

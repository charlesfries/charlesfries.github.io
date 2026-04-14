import Component from '@glimmer/component';
import Grid from 'charlesfries/components/grid';
import RateLimit from 'charlesfries/components/rate-limit';
import Repository from 'charlesfries/components/repository';
import type IndexController from 'charlesfries/controllers/index';
import type { GitHubRepository } from 'charlesfries/utils/github-types';

interface IndexSignature {
  Args: {
    model: {
      repositories: GitHubRepository[];
      remainingRequests: number | null;
      maxRequests: number | null;
      resetAt: Date | null;
    };
    controller: IndexController;
  };
}

export default class Index extends Component<IndexSignature> {
  get repositories() {
    const { repositories } = this.args.model;
    return repositories.filter(({ isFork }) => {
      if (this.args.controller._type) {
        return isFork === ('forks' === this.args.controller._type);
      }
      return true;
    });
  }

  <template>
    <RateLimit
      @remaining={{@model.remainingRequests}}
      @max={{@model.maxRequests}}
      @resetAt={{@model.resetAt}}
    />
    <Grid>
      {{#each this.repositories as |repository|}}
        <div>
          <Repository @repository={{repository}} />
        </div>
      {{/each}}
    </Grid>
  </template>
}

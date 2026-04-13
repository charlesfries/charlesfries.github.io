import Component from '@glimmer/component';
import RateLimit from 'charlesfries/components/rate-limit';
import Repositories from 'charlesfries/components/repositories';
import type IndexController from 'charlesfries/controllers/index';
import type { GitHubRepository } from 'charlesfries/utils/github-types';

interface IndexSignature {
  Args: {
    model: {
      repositories: GitHubRepository[];
      remainingRequests: number;
      maxRequests: number;
      resetAt: string;
    };
    controller: IndexController;
  };
}

export default class Index extends Component<IndexSignature> {
  get repositories(): GitHubRepository[] {
    const { repositories } = this.args.model;
    return repositories.filter(({ fork }) => {
      if (this.args.controller.type) {
        return fork === ('forks' === this.args.controller.type);
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
    <Repositories @repositories={{this.repositories}} />
  </template>
}

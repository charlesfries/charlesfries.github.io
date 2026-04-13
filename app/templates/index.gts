import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import Component from '@glimmer/component';
import Repositories from 'charlesfries/components/repositories';
import Subheading from 'charlesfries/components/subheading';
import Toolbar from 'charlesfries/components/toolbar';
import type IndexController from 'charlesfries/controllers/index';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import { t } from 'ember-intl';

interface IndexSignature {
  Args: {
    model: GitHubRepository[];
    controller: IndexController;
  };
}

export default class Index extends Component<IndexSignature> {
  @service declare router: RouterService;

  get repositories(): GitHubRepository[] {
    return this.args.model.filter(({ fork }) => {
      if (this.args.controller.type) {
        return fork === ('forks' === this.args.controller.type);
      }
      return true;
    });
  }

  refresh = () => {
    this.router.refresh();
  };

  <template>
    <Subheading />
    <Toolbar @sort={{@controller.sort}} @onRefresh={{this.refresh}} />
    <Repositories @repositories={{this.repositories}} />
    <a
      class="btn btn-outline-primary"
      href="https://github.com/charlesfries"
      role="button"
    >
      {{t "more"}}
    </a>
  </template>
}

import type RouterService from '@ember/routing/router-service';
import { service } from '@ember/service';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { Tooltip } from 'bootstrap';
import Repositories from 'charlesfries/components/repositories';
import Subheading from 'charlesfries/components/subheading';
import Toolbar from 'charlesfries/components/toolbar';
import type IndexController from 'charlesfries/controllers/index';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import { t } from 'ember-intl';
import { modifier } from 'ember-modifier';

const tooltip = modifier((element) => {
  new Tooltip(element);
});

interface IndexSignature {
  Args: {
    model: {
      repositories: GitHubRepository[];
      remainingRequests: string | null;
      maxRequests: string | null;
      resetAt: string;
    };
    controller: IndexController;
  };
}

export default class Index extends Component<IndexSignature> {
  @service declare router: RouterService;

  get repositories(): GitHubRepository[] {
    const { repositories } = this.args.model;
    return repositories.filter(({ fork }) => {
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
    <div class="d-flex align-items-center gap-2 mb-3">
      <Toolbar @sort={{@controller.sort}} @onRefresh={{this.refresh}} />
      <FaIcon
        @icon={{faInfoCircle}}
        data-bs-toggle="tooltip"
        data-bs-title="{{@model.remainingRequests}}/{{@model.maxRequests}} requests remaining (resets at {{@model.resetAt}})"
        class="text-secondary"
        {{tooltip}}
      />
    </div>
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

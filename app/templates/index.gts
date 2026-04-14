import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import Grid from 'charlesfries/components/grid';
import RateLimit from 'charlesfries/components/rate-limit';
import Repository from 'charlesfries/components/repository';
import type IndexController from 'charlesfries/controllers/index';
import type { Repository as _Repository } from 'charlesfries/services/store';
import { t } from 'ember-intl';

const MoreButton = <template>
  <a
    class="bg-blue-700 hover:bg-blue-900 text-white font-semibold px-3 py-2 rounded-lg"
    href="https://github.com/charlesfries"
    role="button"
  >
    <FaIcon
      @icon={{faArrowUpRightFromSquare}}
      class="mr-1"
      role="presentation"
    />
    {{t "more"}}
  </a>
</template>;

interface IndexSignature {
  Args: {
    model: {
      repositories: _Repository[];
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
    <div class="flex justify-center pt-10">
      <MoreButton />
    </div>
  </template>
}

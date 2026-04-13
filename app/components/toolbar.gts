import { fn, hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faRedo,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type { Sort } from 'charlesfries/routes/index';
import { t } from 'ember-intl';
import { eq } from 'ember-truth-helpers';

interface ToolbarSignature {
  sort: Sort;
  onRefresh?: () => void;
}

export default class Toolbar extends Component<ToolbarSignature> {
  @tracked xyz?: string;

  <template>
    <div class="btn-toolbar gap-2 mb-3" role="toolbar">
      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn btn-dark {{unless @onRefresh 'disabled'}}"
          aria-label="Refresh"
          tabindex={{unless @onRefresh "-1"}}
          {{on "click" (if @onRefresh @onRefresh (fn (mut this.xyz)))}}
        >
          <FaIcon @icon={{faRedo}} role="presentation" />
        </button>
      </div>
      <div class="btn-group" role="group">
        <button
          type="button"
          class="btn btn-dark dropdown-toggle {{unless @onRefresh 'disabled'}}"
          data-bs-toggle="dropdown"
          tabindex={{unless @onRefresh "-1"}}
        >
          {{#if (eq "created" @sort)}}
            {{t "sort.created"}}
          {{else if (eq "updated" @sort)}}
            {{t "sort.updated"}}
          {{else if (eq "pushed" @sort)}}
            {{t "sort.pushed"}}
          {{else if (eq "full_name" @sort)}}
            {{t "sort.name"}}
          {{/if}}
        </button>
        <div class="dropdown-menu">
          <LinkTo @query={{hash sort="created"}} class="dropdown-item">
            {{t "sort.created"}}
          </LinkTo>
          <LinkTo @query={{hash sort="updated"}} class="dropdown-item">
            {{t "sort.updated"}}
          </LinkTo>
          <LinkTo @query={{hash sort="pushed"}} class="dropdown-item">
            {{t "sort.pushed"}}
          </LinkTo>
          <LinkTo @query={{hash sort="full_name"}} class="dropdown-item">
            {{t "sort.name"}}
          </LinkTo>
        </div>
      </div>
      <div class="btn-group" role="group">
        <LinkTo
          @query={{hash direction="desc"}}
          class="btn btn-outline-dark {{unless @onRefresh 'disabled'}}"
          role="button"
          aria-label="Sort descending"
          tabindex={{unless @onRefresh "-1"}}
        >
          <FaIcon @icon={{faSortAmountDown}} role="presentation" />
        </LinkTo>
        <LinkTo
          @query={{hash direction="asc"}}
          class="btn btn-outline-dark {{unless @onRefresh 'disabled'}}"
          role="button"
          aria-label="Sort ascending"
          tabindex={{unless @onRefresh "-1"}}
        >
          <FaIcon @icon={{faSortAmountUp}} role="presentation" />
        </LinkTo>
      </div>
      <div class="btn-group" role="group">
        <LinkTo
          @query={{hash type=undefined}}
          class="btn btn-outline-dark {{unless @onRefresh 'disabled'}}"
          role="button"
          tabindex={{unless @onRefresh "-1"}}
        >
          {{t "type.all"}}
        </LinkTo>
        <LinkTo
          @query={{hash type="sources"}}
          class="btn btn-outline-dark {{unless @onRefresh 'disabled'}}"
          role="button"
          tabindex={{unless @onRefresh "-1"}}
        >
          {{t "type.sources"}}
        </LinkTo>
        <LinkTo
          @query={{hash type="forks"}}
          class="btn btn-outline-dark {{unless @onRefresh 'disabled'}}"
          role="button"
          tabindex={{unless @onRefresh "-1"}}
        >
          {{t "type.forks"}}
        </LinkTo>
      </div>
    </div>
  </template>
}

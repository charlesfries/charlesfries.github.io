import type { TOC } from '@ember/component/template-only';
import { hash } from '@ember/helper';
import { on } from '@ember/modifier';
import { LinkTo } from '@ember/routing';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faRedo,
  faSortAmountDown,
  faSortAmountUp,
} from '@fortawesome/free-solid-svg-icons';
import type { Sort } from 'charlesfries/routes/index';
import { t } from 'ember-intl';

export interface ToolbarSignature {
  sort: Sort;
  onRefresh: () => void;
}

<template>
  <div class="flex gap-2 mb-6" role="toolbar">
    <button
      type="button"
      class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-lg cursor-pointer"
      aria-label={{t "refresh"}}
      {{on "click" @onRefresh}}
    >
      <FaIcon @icon={{faRedo}} />
    </button>
    <div class="flex">
      <LinkTo
        @query={{hash sort="created"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-l-lg"
      >
        {{t "sort.created"}}
      </LinkTo>
      <LinkTo
        @query={{hash sort="updated"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2"
      >
        {{t "sort.updated"}}
      </LinkTo>
      <LinkTo
        @query={{hash sort="pushed"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2"
      >
        {{t "sort.pushed"}}
      </LinkTo>
      <LinkTo
        @query={{hash sort="full_name"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-r-lg"
      >
        {{t "sort.name"}}
      </LinkTo>
    </div>
    <div class="flex">
      <LinkTo
        @query={{hash direction="desc"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-l-lg"
        role="button"
        aria-label={{t "sortDescending"}}
      >
        <FaIcon @icon={{faSortAmountDown}} role="presentation" />
      </LinkTo>
      <LinkTo
        @query={{hash direction="asc"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-r-lg"
        role="button"
        aria-label={{t "sortAscending"}}
      >
        <FaIcon @icon={{faSortAmountUp}} role="presentation" />
      </LinkTo>
    </div>
    <div class="flex">
      <LinkTo
        @query={{hash _type=undefined}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-l-lg"
        role="button"
      >
        {{t "type.all"}}
      </LinkTo>
      <LinkTo
        @query={{hash _type="sources"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2"
        role="button"
      >
        {{t "type.sources"}}
      </LinkTo>
      <LinkTo
        @query={{hash _type="forks"}}
        class="bg-gray-200 hover:bg-gray-300 [&.active]:bg-gray-300 active:bg-gray-400 font-semibold px-3 py-2 rounded-r-lg"
        role="button"
      >
        {{t "type.forks"}}
      </LinkTo>
    </div>
  </div>
</template> satisfies TOC<ToolbarSignature>;

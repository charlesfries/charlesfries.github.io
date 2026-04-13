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
import { t } from 'ember-intl';

export const BUTTON_CLASS_NAME =
  'bg-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 [&.active]:bg-gray-200 active:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:[&.active]:bg-gray-600 dark:active:bg-gray-500 font-semibold px-4 py-2';

export interface ToolbarSignature {
  onRefresh: () => void;
}

<template>
  <div class="flex flex-wrap gap-2 mb-6" role="toolbar">
    <button
      type="button"
      class="{{BUTTON_CLASS_NAME}} rounded-lg cursor-pointer"
      aria-label={{t "refresh"}}
      {{on "click" @onRefresh}}
    >
      <FaIcon @icon={{faRedo}} />
    </button>
    <div class="flex">
      <LinkTo
        @query={{hash sort="created"}}
        class="{{BUTTON_CLASS_NAME}} rounded-l-lg -mr-1"
      >
        {{t "sort.created"}}
      </LinkTo>
      <LinkTo
        @query={{hash sort="updated"}}
        class="{{BUTTON_CLASS_NAME}} -mr-1"
      >
        {{t "sort.updated"}}
      </LinkTo>
      <LinkTo @query={{hash sort="pushed"}} class="{{BUTTON_CLASS_NAME}} -mr-1">
        {{t "sort.pushed"}}
      </LinkTo>
      <LinkTo
        @query={{hash sort="full_name"}}
        class="{{BUTTON_CLASS_NAME}} rounded-r-lg"
      >
        {{t "sort.name"}}
      </LinkTo>
    </div>
    <div class="flex">
      <LinkTo
        @query={{hash direction="desc"}}
        class="{{BUTTON_CLASS_NAME}} rounded-l-lg -mr-1"
        role="button"
        aria-label={{t "sortDescending"}}
      >
        <FaIcon @icon={{faSortAmountDown}} role="presentation" />
      </LinkTo>
      <LinkTo
        @query={{hash direction="asc"}}
        class="{{BUTTON_CLASS_NAME}} rounded-r-lg"
        role="button"
        aria-label={{t "sortAscending"}}
      >
        <FaIcon @icon={{faSortAmountUp}} role="presentation" />
      </LinkTo>
    </div>
    <div class="flex">
      <LinkTo
        @query={{hash _type=undefined}}
        class="{{BUTTON_CLASS_NAME}} rounded-l-lg -mr-1"
        role="button"
      >
        {{t "type.all"}}
      </LinkTo>
      <LinkTo
        @query={{hash _type="sources"}}
        class="{{BUTTON_CLASS_NAME}} -mr-1"
        role="button"
      >
        {{t "type.sources"}}
      </LinkTo>
      <LinkTo
        @query={{hash _type="forks"}}
        class="{{BUTTON_CLASS_NAME}} rounded-r-lg"
        role="button"
      >
        {{t "type.forks"}}
      </LinkTo>
    </div>
  </div>
</template> satisfies TOC<ToolbarSignature>;

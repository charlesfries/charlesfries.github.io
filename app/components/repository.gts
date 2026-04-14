import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import type { Repository } from 'charlesfries/services/store';
import { formatDate, t } from 'ember-intl';

export const CARD_CLASS_NAME =
  'bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-700 rounded-xl p-4';

export interface RepositorySignature {
  repository: Repository;
}

<template>
  <div
    class="{{CARD_CLASS_NAME}}
      relative hover:border-blue-500 hover:shadow transition-all duration-300"
  >
    <a
      href={{@repository.url}}
      class="text-blue-500 underline after:absolute after:inset-0"
    >
      {{@repository.name}}</a>
    {{#if @repository.isFork}}
      <FaIcon @icon={{faCodeFork}} class="text-gray-300" />
    {{/if}}
    <div class="mt-1">
      {{#if @repository.description}}
        {{@repository.description}}
      {{else}}
        <i>{{t "noDescription"}}</i>
      {{/if}}
    </div>
    <div class="mt-1">
      {{#if @repository.primaryLanguage.name}}
        <strong class="text-green-700">
          {{@repository.primaryLanguage.name}}
        </strong>
      {{/if}}
      <FaIcon @icon={{faStar}} class="text-yellow-400" />
      <span class="text-gray-500">{{@repository.stargazerCount}}</span>
      <FaIcon @icon={{faCodeFork}} class="text-gray-300" />
      <span class="text-gray-500">{{@repository.forkCount}}</span>
    </div>
    <p class="text-sm text-gray-400 mt-2">
      {{t "updated"}}
      {{formatDate @repository.pushedAt year="numeric" month="long"}}
    </p>
  </div>
</template> satisfies TOC<RepositorySignature>;

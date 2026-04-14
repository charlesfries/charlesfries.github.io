import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import { formatDate, t } from 'ember-intl';

export interface RepositorySignature {
  repository: GitHubRepository;
}

<template>
  <div
    class="relative bg-white dark:bg-black border border-gray-300 dark:border-gray-700 rounded-xl p-4 hover:border-blue-500 hover:shadow transition-all duration-300"
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

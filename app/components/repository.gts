import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import { faCodeFork, faStar } from '@fortawesome/free-solid-svg-icons';
import timestamp from 'charlesfries/helpers/timestamp';
import type { GitHubRepository } from 'charlesfries/utils/github-types';
import { t } from 'ember-intl';

export interface RepositorySignature {
  repository: GitHubRepository;
}

<template>
  <div
    class="bg-white dark:bg-black relative border border-gray-300 rounded-xl p-4 hover:border-blue-500 hover:shadow transition-all duration-300"
  >
    <a
      href={{@repository.html_url}}
      class="text-blue-500 underline after:absolute after:inset-0"
    >
      {{@repository.name}}</a>
    <FaIcon @icon={{faStar}} class="text-yellow-400" />
    {{@repository.stargazers_count}}
    {{#if @repository.fork}}
      <FaIcon @icon={{faCodeFork}} class="text-gray-400" />
    {{/if}}
    <br />
    {{#if @repository.language}}
      <strong class="text-green-700">
        {{@repository.language}}
      </strong>
    {{/if}}
    {{#if @repository.description}}
      {{@repository.description}}
    {{else}}
      <i>{{t "noDescription"}}</i>
    {{/if}}
    <p class="text-sm text-gray-400 mt-2">
      {{t "updated"}}
      {{timestamp @repository.pushed_at}}
    </p>
  </div>
</template> satisfies TOC<RepositorySignature>;

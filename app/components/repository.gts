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
  <a href={{@repository.html_url}} class="stretched-link">
    {{@repository.name}}</a>
  <FaIcon @icon={{faStar}} class="text-warning" />
  {{@repository.stargazers_count}}
  {{#if @repository.fork}}
    <FaIcon @icon={{faCodeFork}} class="text-secondary" />
  {{/if}}
  <br />
  {{#if @repository.language}}
    <strong class="text-success">
      {{@repository.language}}
    </strong>
  {{/if}}
  {{#if @repository.description}}
    {{@repository.description}}
  {{else}}
    <i>{{t "noDescription"}}</i>
  {{/if}}
  <p class="card-text">
    <small class="text-muted">
      {{t "updated"}}
      {{timestamp @repository.pushed_at}}
    </small>
  </p>
</template> satisfies TOC<RepositorySignature>;

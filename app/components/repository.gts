import type { TOC } from '@ember/component/template-only';
import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import timestamp from 'charlesfries/helpers/timestamp';
import type { Repository } from 'charlesfries/routes/index';
import { t } from 'ember-intl';

export interface RepositorySignature {
  repository: Repository;
}

<template>
  <a href={{@repository.html_url}} class="stretched-link">
    {{@repository.name}}</a>
  <FaIcon @icon="star" class="text-warning" />
  {{@repository.stargazers_count}}
  {{#if @repository.fork}}
    <FaIcon @icon="code-fork" class="text-secondary" />
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

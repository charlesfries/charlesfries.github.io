import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

<template>
  <div class="d-flex gap-2 mb-4">
    <a
      href="https://github.com/charlesfries"
      class="link-dark"
      aria-label={{t "contact.github"}}
    >
      <FaIcon @icon={{faGithub}} @size="xl" />
    </a>
    <a
      href="https://www.linkedin.com/in/charlesfries"
      class="link-dark"
      aria-label={{t "contact.linkedIn"}}
    >
      <FaIcon @icon={{faLinkedin}} @size="xl" />
    </a>
    <a
      href="https://twitter.com/charlesfries"
      class="link-dark"
      aria-label={{t "contact.x"}}
    >
      <FaIcon @icon={{faTwitter}} @size="xl" />
    </a>
    <a
      href="https://www.instagram.com/charlesfries"
      class="link-dark"
      aria-label={{t "contact.instagram"}}
    >
      <FaIcon @icon={{faInstagram}} @size="xl" />
    </a>
    <a
      href="mailto:me@me@charlesfries.com"
      class="link-dark"
      aria-label={{t "contact.email"}}
    >
      <FaIcon @icon={{faEnvelope}} @size="xl" />
    </a>
  </div>
</template>

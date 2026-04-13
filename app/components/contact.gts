import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faBluesky,
  faGithub,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { t } from 'ember-intl';

<template>
  <div class="text-2xl flex gap-3 mb-6">
    <a href="https://github.com/charlesfries" aria-label={{t "contact.github"}}>
      <FaIcon @icon={{faGithub}} />
    </a>
    <a
      href="https://www.linkedin.com/in/charlesfries"
      aria-label={{t "contact.linkedIn"}}
    >
      <FaIcon @icon={{faLinkedin}} />
    </a>
    <a href="https://twitter.com/charlesfries" aria-label={{t "contact.x"}}>
      <FaIcon @icon={{faXTwitter}} />
    </a>
    <a
      href="https://bsky.app/profile/charlesfries.com"
      aria-label={{t "contact.bluesky"}}
    >
      <FaIcon @icon={{faBluesky}} />
    </a>
    <a
      href="https://www.instagram.com/charlesfries"
      aria-label={{t "contact.instagram"}}
    >
      <FaIcon @icon={{faInstagram}} />
    </a>
    <a href="mailto:me@me@charlesfries.com" aria-label={{t "contact.email"}}>
      <FaIcon @icon={{faEnvelope}} />
    </a>
  </div>
</template>

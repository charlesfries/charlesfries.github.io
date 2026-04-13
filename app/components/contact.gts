import FaIcon from '@fortawesome/ember-fontawesome/components/fa-icon';
import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

<template>
  <div class="d-flex gap-3 mb-4">
    <a
      href="https://github.com/charlesfries"
      class="link-dark"
      aria-label="GitHub"
    >
      <FaIcon @icon={{faGithub}} @size="xl" />
    </a>
    <a
      href="https://www.linkedin.com/in/charlesfries"
      class="link-dark"
      aria-label="LinkedIn"
    >
      <FaIcon @icon={{faLinkedin}} @size="xl" />
    </a>
    <a
      href="https://twitter.com/charlesfries"
      class="link-dark"
      aria-label="Twitter"
    >
      <FaIcon @icon={{faTwitter}} @size="xl" />
    </a>
    <a
      href="https://www.instagram.com/charlesfries"
      class="link-dark"
      aria-label="Instagram"
    >
      <FaIcon @icon={{faInstagram}} @size="xl" />
    </a>
    <a
      href="mailto:me@me@charlesfries.com"
      class="link-dark"
      aria-label="Email"
    >
      <FaIcon @icon={{faEnvelope}} @size="xl" />
    </a>
  </div>
</template>

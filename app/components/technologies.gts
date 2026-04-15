/**
 * https://shields.io/
 * https://simpleicons.org/
 */

interface Technology {
  name: string;
  color: string;
  logo: string;
  isDark?: boolean;
}

const technologies: Technology[] = [
  { name: 'Ember.js', color: 'e04e39', logo: 'emberdotjs' },
  { name: 'React', color: '61dafb', logo: 'react', isDark: true },
  { name: 'Next.js', color: '000000', logo: 'nextdotjs' },
  { name: 'HTML5', color: 'e34f26', logo: 'html5' },
  { name: 'Express', color: '000000', logo: 'express' },
  { name: 'Node.js', color: '5fa04e', logo: 'nodedotjs' },
  { name: 'JavaScript', color: 'f7df1e', logo: 'javascript', isDark: true },
  { name: 'TypeScript', color: '3178c6', logo: 'typescript' },
  { name: 'Go', color: '00add8', logo: 'go' },
  { name: 'Swift', color: 'f05138', logo: 'swift' },
  { name: 'TailwindCSS', color: '06b6d4', logo: 'tailwindcss' },
  { name: 'CSS', color: '663399', logo: 'css' },
  { name: 'Git', color: 'f05032', logo: 'git' },
  { name: 'GitHub', color: '181717', logo: 'github' },
  { name: 'GitHub Actions', color: '2088ff', logo: 'githubactions' },
  { name: 'Netlify', color: '00c7b7', logo: 'netlify' },
  { name: 'Vercel', color: '000000', logo: 'vercel' },
  { name: 'Google Cloud', color: '4285f4', logo: 'googlecloud' },
  { name: 'Firebase', color: 'dd2c00', logo: 'firebase' },
  { name: 'Supabase', color: '3fcf8e', logo: 'supabase' },
  { name: 'Terraform', color: '844fba', logo: 'terraform' },
  { name: 'Cloudflare', color: 'f38020', logo: 'cloudflare' },
  { name: 'Docker', color: '2496ed', logo: 'docker' },
  { name: 'nvm', color: 'f4dd4b', logo: 'nvm', isDark: true },
  { name: 'NGINX', color: '009639', logo: 'nginx' },
  { name: 'Prisma', color: '2d3748', logo: 'prisma' },
  { name: 'GraphQL', color: 'e10098', logo: 'graphql' },
  { name: 'PostgreSQL', color: '4169e1', logo: 'postgresql' },
  { name: 'Claude', color: 'd97757', logo: 'claude' },
  { name: 'Vite', color: '9135ff', logo: 'vite' },
  { name: 'Vitest', color: '00ff74', logo: 'vitest' },
  { name: 'Babel', color: 'f9dc3e', logo: 'babel', isDark: true },
  { name: 'ESLint', color: '4b32c3', logo: 'eslint' },
  { name: 'Prettier', color: 'f7b93e', logo: 'prettier', isDark: true },
  { name: 'Stylelint', color: '263238', logo: 'stylelint' },
  { name: 'pnpm', color: 'f69220', logo: 'pnpm' },
  { name: 'npm', color: 'cb3837', logo: 'npm' },
  { name: 'Homebrew', color: 'fbb040', logo: 'homebrew' },
  { name: 'Sentry', color: '362d59', logo: 'sentry' },
  { name: 'Percy', color: '9e66bf', logo: 'percy' },
  { name: 'Mixpanel', color: '7856ff', logo: 'mixpanel' },
  { name: 'Algolia', color: '5468ff', logo: 'algolia' },
  { name: 'Stripe', color: '645cff', logo: 'stripe' },
  { name: 'Mailgun', color: 'f06b66', logo: 'mailgun' },
  { name: 'Font Awesome', color: '538dd7', logo: 'fontawesome' },
  { name: 'Neovim', color: '57a143', logo: 'neovim' },
  { name: 'Xcode', color: '147efb', logo: 'xcode' },
  { name: 'Insomnia', color: '4000bf', logo: 'insomnia' },
  { name: 'Brave', color: 'fb542b', logo: 'brave' },
  { name: 'iOS', color: '000000', logo: 'ios' },
  { name: 'macOS', color: '000000', logo: 'macos' },
  { name: 'Ubuntu', color: 'e95420', logo: 'ubuntu' },
  { name: 'Raspberry Pi', color: 'a22846', logo: 'raspberrypi' },
  { name: 'Arduino', color: '00878f', logo: 'arduino' },
  { name: 'Ubiquiti', color: '0559c9', logo: 'ubiquiti' },
];

<template>
  <div class="flex flex-wrap justify-center gap-2">
    {{#each technologies as |technology|}}
      <img
        alt={{technology.name}}
        src="https://img.shields.io/badge/{{technology.name}}-{{technology.color}}?style=flat-square&logo={{technology.logo}}&logoColor={{if
          technology.isDark
          'black'
          'white'
        }}"
      />
    {{/each}}
  </div>
</template>

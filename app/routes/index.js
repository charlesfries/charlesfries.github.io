import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(null);
        }, milliseconds);
      });
    };

    await sleep(1000);

    return [
      {
        id: 441004259,
        node_id: 'R_kgDOGkkw4w',
        name: 'ember-hammer',
        full_name: 'charlesfries/ember-hammer',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-hammer',
        description:
          'ember-hammer is a neat interface for defining Hammer.js gestural behaviour in your Ember.js Views.',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-hammer',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/ember-hammer/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-hammer/deployments',
        created_at: '2021-12-22T22:57:58Z',
        updated_at: '2021-12-22T23:30:33Z',
        pushed_at: '2021-12-22T23:30:30Z',
        git_url: 'git://github.com/charlesfries/ember-hammer.git',
        ssh_url: 'git@github.com:charlesfries/ember-hammer.git',
        clone_url: 'https://github.com/charlesfries/ember-hammer.git',
        svn_url: 'https://github.com/charlesfries/ember-hammer',
        homepage: 'https://github.com/chriswessels/ember-hammer',
        size: 466,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 440985087,
        node_id: 'R_kgDOGkjl_w',
        name: 'ember-yeti-table',
        full_name: 'charlesfries/ember-yeti-table',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-yeti-table',
        description: 'Yeti Table',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-yeti-table',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-yeti-table/deployments',
        created_at: '2021-12-22T21:09:47Z',
        updated_at: '2021-12-22T21:09:49Z',
        pushed_at: '2021-12-22T21:10:55Z',
        git_url: 'git://github.com/charlesfries/ember-yeti-table.git',
        ssh_url: 'git@github.com:charlesfries/ember-yeti-table.git',
        clone_url: 'https://github.com/charlesfries/ember-yeti-table.git',
        svn_url: 'https://github.com/charlesfries/ember-yeti-table',
        homepage: 'https://miguelcobain.github.io/ember-yeti-table',
        size: 20441,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 402926681,
        node_id: 'MDEwOlJlcG9zaXRvcnk0MDI5MjY2ODE=',
        name: 'ember-model-validator',
        full_name: 'charlesfries/ember-model-validator',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-model-validator',
        description:
          'ember-cli addon adds validation support to your Ember-Data models.',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-model-validator',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-model-validator/deployments',
        created_at: '2021-09-04T00:17:44Z',
        updated_at: '2021-12-21T18:29:16Z',
        pushed_at: '2021-12-21T18:29:13Z',
        git_url: 'git://github.com/charlesfries/ember-model-validator.git',
        ssh_url: 'git@github.com:charlesfries/ember-model-validator.git',
        clone_url: 'https://github.com/charlesfries/ember-model-validator.git',
        svn_url: 'https://github.com/charlesfries/ember-model-validator',
        homepage: 'http://esbanarango.github.io/ember-model-validator/',
        size: 12525,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 438413651,
        node_id: 'R_kgDOGiGpUw',
        name: 'ember-supabase',
        full_name: 'charlesfries/ember-supabase',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-supabase',
        description: null,
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-supabase',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-supabase/deployments',
        created_at: '2021-12-14T22:05:25Z',
        updated_at: '2021-12-14T22:05:26Z',
        pushed_at: '2021-12-15T22:28:40Z',
        git_url: 'git://github.com/charlesfries/ember-supabase.git',
        ssh_url: 'git@github.com:charlesfries/ember-supabase.git',
        clone_url: 'https://github.com/charlesfries/ember-supabase.git',
        svn_url: 'https://github.com/charlesfries/ember-supabase',
        homepage: null,
        size: 914,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 429270347,
        node_id: 'R_kgDOGZYlSw',
        name: 'ecfa-repro',
        full_name: 'charlesfries/ecfa-repro',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ecfa-repro',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/ecfa-repro',
        forks_url: 'https://api.github.com/repos/charlesfries/ecfa-repro/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/charlesfries/ecfa-repro/teams',
        hooks_url: 'https://api.github.com/repos/charlesfries/ecfa-repro/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/ecfa-repro/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ecfa-repro/deployments',
        created_at: '2021-11-18T02:32:02Z',
        updated_at: '2021-12-10T20:37:47Z',
        pushed_at: '2021-12-10T20:37:44Z',
        git_url: 'git://github.com/charlesfries/ecfa-repro.git',
        ssh_url: 'git@github.com:charlesfries/ecfa-repro.git',
        clone_url: 'https://github.com/charlesfries/ecfa-repro.git',
        svn_url: 'https://github.com/charlesfries/ecfa-repro',
        homepage: null,
        size: 379,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 436394137,
        node_id: 'R_kgDOGgLYmQ',
        name: 'ember-basic-dropdown',
        full_name: 'charlesfries/ember-basic-dropdown',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-basic-dropdown',
        description: 'The basic dropdown you ember app needs',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-basic-dropdown',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-basic-dropdown/deployments',
        created_at: '2021-12-08T21:16:25Z',
        updated_at: '2021-12-10T00:27:09Z',
        pushed_at: '2021-12-10T00:27:06Z',
        git_url: 'git://github.com/charlesfries/ember-basic-dropdown.git',
        ssh_url: 'git@github.com:charlesfries/ember-basic-dropdown.git',
        clone_url: 'https://github.com/charlesfries/ember-basic-dropdown.git',
        svn_url: 'https://github.com/charlesfries/ember-basic-dropdown',
        homepage: 'http://www.ember-basic-dropdown.com',
        size: 6175,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 396998159,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTY5OTgxNTk=',
        name: 'ember-cloud-firestore-adapter-pagination',
        full_name: 'charlesfries/ember-cloud-firestore-adapter-pagination',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter-pagination',
        description:
          'Get Cloud Firestore pagination data automatically via the DS.PromiseArray#meta object returned by store.query()',
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter-pagination/deployments',
        created_at: '2021-08-16T22:36:29Z',
        updated_at: '2021-12-08T18:18:42Z',
        pushed_at: '2021-12-08T18:18:48Z',
        git_url:
          'git://github.com/charlesfries/ember-cloud-firestore-adapter-pagination.git',
        ssh_url:
          'git@github.com:charlesfries/ember-cloud-firestore-adapter-pagination.git',
        clone_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter-pagination.git',
        svn_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter-pagination',
        homepage: '',
        size: 550,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [
          'cloud-firestore',
          'ember',
          'ember-addon',
          'ember-data',
          'firebase',
          'pagination',
        ],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 432278869,
        node_id: 'R_kgDOGcQNVQ',
        name: 'ember-cloud-firestore-adapter',
        full_name: 'charlesfries/ember-cloud-firestore-adapter',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter',
        description:
          'Unofficial Ember Data Adapter and Serializer for Cloud Firestore',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-cloud-firestore-adapter/deployments',
        created_at: '2021-11-26T19:14:39Z',
        updated_at: '2021-11-26T19:19:17Z',
        pushed_at: '2021-12-27T17:54:19Z',
        git_url:
          'git://github.com/charlesfries/ember-cloud-firestore-adapter.git',
        ssh_url:
          'git@github.com:charlesfries/ember-cloud-firestore-adapter.git',
        clone_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter.git',
        svn_url:
          'https://github.com/charlesfries/ember-cloud-firestore-adapter',
        homepage: '',
        size: 7622,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'TypeScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 432259305,
        node_id: 'R_kgDOGcPA6Q',
        name: 'ember-cli-flash',
        full_name: 'charlesfries/ember-cli-flash',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-cli-flash',
        description: 'Simple, highly configurable flash messages for ember-cli',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-cli-flash',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-cli-flash/deployments',
        created_at: '2021-11-26T17:45:45Z',
        updated_at: '2021-11-26T17:49:10Z',
        pushed_at: '2021-11-26T17:49:07Z',
        git_url: 'git://github.com/charlesfries/ember-cli-flash.git',
        ssh_url: 'git@github.com:charlesfries/ember-cli-flash.git',
        clone_url: 'https://github.com/charlesfries/ember-cli-flash.git',
        svn_url: 'https://github.com/charlesfries/ember-cli-flash',
        homepage: 'https://www.npmjs.com/package/ember-cli-flash',
        size: 1120,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 276272431,
        node_id: 'MDEwOlJlcG9zaXRvcnkyNzYyNzI0MzE=',
        name: 'ruqqus-ios',
        full_name: 'charlesfries/ruqqus-ios',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ruqqus-ios',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/ruqqus-ios',
        forks_url: 'https://api.github.com/repos/charlesfries/ruqqus-ios/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/charlesfries/ruqqus-ios/teams',
        hooks_url: 'https://api.github.com/repos/charlesfries/ruqqus-ios/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/ruqqus-ios/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ruqqus-ios/deployments',
        created_at: '2020-07-01T04:00:00Z',
        updated_at: '2021-11-24T04:19:59Z',
        pushed_at: '2020-07-07T04:43:53Z',
        git_url: 'git://github.com/charlesfries/ruqqus-ios.git',
        ssh_url: 'git@github.com:charlesfries/ruqqus-ios.git',
        clone_url: 'https://github.com/charlesfries/ruqqus-ios.git',
        svn_url: 'https://github.com/charlesfries/ruqqus-ios',
        homepage: 'https://ruqqus.com/',
        size: 92,
        stargazers_count: 2,
        watchers_count: 2,
        language: 'Swift',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 2,
        default_branch: 'master',
      },
      {
        id: 395783260,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTU3ODMyNjA=',
        name: 'built-with-ember',
        full_name: 'charlesfries/built-with-ember',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/built-with-ember',
        description:
          'An up to date list of publicly available Ember applications',
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/built-with-ember',
        forks_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/built-with-ember/deployments',
        created_at: '2021-08-13T20:13:28Z',
        updated_at: '2021-11-22T19:43:59Z',
        pushed_at: '2021-11-22T19:43:56Z',
        git_url: 'git://github.com/charlesfries/built-with-ember.git',
        ssh_url: 'git@github.com:charlesfries/built-with-ember.git',
        clone_url: 'https://github.com/charlesfries/built-with-ember.git',
        svn_url: 'https://github.com/charlesfries/built-with-ember',
        homepage: '',
        size: 45,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 1,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        topics: ['ember'],
        visibility: 'public',
        forks: 1,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 392077556,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTIwNzc1NTY=',
        name: 'ember-text-highlight',
        full_name: 'charlesfries/ember-text-highlight',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-text-highlight',
        description:
          'Simple, performant Ember.Helper that highlights matching parts of a text.',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-text-highlight',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-text-highlight/deployments',
        created_at: '2021-08-02T19:57:15Z',
        updated_at: '2021-11-19T18:36:22Z',
        pushed_at: '2021-11-19T18:36:27Z',
        git_url: 'git://github.com/charlesfries/ember-text-highlight.git',
        ssh_url: 'git@github.com:charlesfries/ember-text-highlight.git',
        clone_url: 'https://github.com/charlesfries/ember-text-highlight.git',
        svn_url: 'https://github.com/charlesfries/ember-text-highlight',
        homepage: '',
        size: 3714,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 429882938,
        node_id: 'R_kgDOGZ9-Og',
        name: 'ember-addon-output',
        full_name: 'charlesfries/ember-addon-output',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-addon-output',
        description: 'Change history of new Ember-CLI addons',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-addon-output',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-addon-output/deployments',
        created_at: '2021-11-19T17:33:00Z',
        updated_at: '2021-11-19T17:33:02Z',
        pushed_at: '2021-11-10T21:19:53Z',
        git_url: 'git://github.com/charlesfries/ember-addon-output.git',
        ssh_url: 'git@github.com:charlesfries/ember-addon-output.git',
        clone_url: 'https://github.com/charlesfries/ember-addon-output.git',
        svn_url: 'https://github.com/charlesfries/ember-addon-output',
        homepage: '',
        size: 196,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 429563809,
        node_id: 'R_kgDOGZqfoQ',
        name: 'ember-pell',
        full_name: 'charlesfries/ember-pell',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-pell',
        description:
          'Ember addon for simplest and smallest (1kB) WYSIWYG text editor for web, with no dependencies',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-pell',
        forks_url: 'https://api.github.com/repos/charlesfries/ember-pell/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-pell/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-pell/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/charlesfries/ember-pell/teams',
        hooks_url: 'https://api.github.com/repos/charlesfries/ember-pell/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-pell/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-pell/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-pell/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-pell/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/ember-pell/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-pell/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-pell/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-pell/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-pell/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-pell/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-pell/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-pell/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-pell/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-pell/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-pell/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-pell/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-pell/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-pell/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-pell/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-pell/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-pell/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-pell/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-pell/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-pell/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-pell/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-pell/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-pell/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-pell/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-pell/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-pell/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-pell/deployments',
        created_at: '2021-11-18T20:03:02Z',
        updated_at: '2021-11-18T20:24:48Z',
        pushed_at: '2021-11-18T20:24:45Z',
        git_url: 'git://github.com/charlesfries/ember-pell.git',
        ssh_url: 'git@github.com:charlesfries/ember-pell.git',
        clone_url: 'https://github.com/charlesfries/ember-pell.git',
        svn_url: 'https://github.com/charlesfries/ember-pell',
        homepage: '',
        size: 3008,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 409386448,
        node_id: 'R_kgDOGGa90A',
        name: 'ember-metrics',
        full_name: 'charlesfries/ember-metrics',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-metrics',
        description:
          'Send data to multiple analytics integrations without re-implementing new API',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-metrics',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-metrics/deployments',
        created_at: '2021-09-22T23:36:10Z',
        updated_at: '2021-11-18T17:59:37Z',
        pushed_at: '2021-12-20T23:21:59Z',
        git_url: 'git://github.com/charlesfries/ember-metrics.git',
        ssh_url: 'git@github.com:charlesfries/ember-metrics.git',
        clone_url: 'https://github.com/charlesfries/ember-metrics.git',
        svn_url: 'https://github.com/charlesfries/ember-metrics',
        homepage: '',
        size: 2240,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 10,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 10,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 427157135,
        node_id: 'R_kgDOGXXmjw',
        name: 'ember-composable-helpers',
        full_name: 'charlesfries/ember-composable-helpers',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-composable-helpers',
        description: 'Composable helpers for declarative templating in Ember',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-composable-helpers',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-composable-helpers/deployments',
        created_at: '2021-11-11T22:08:47Z',
        updated_at: '2021-11-11T22:21:02Z',
        pushed_at: '2021-11-11T22:20:59Z',
        git_url: 'git://github.com/charlesfries/ember-composable-helpers.git',
        ssh_url: 'git@github.com:charlesfries/ember-composable-helpers.git',
        clone_url:
          'https://github.com/charlesfries/ember-composable-helpers.git',
        svn_url: 'https://github.com/charlesfries/ember-composable-helpers',
        homepage: '',
        size: 3727,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'other',
          name: 'Other',
          spdx_id: 'NOASSERTION',
          url: null,
          node_id: 'MDc6TGljZW5zZTA=',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 426791767,
        node_id: 'R_kgDOGXBTVw',
        name: 'ember-stripe-elements',
        full_name: 'charlesfries/ember-stripe-elements',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-stripe-elements',
        description: 'A simple Ember wrapper for Stripe Elements',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-stripe-elements',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-stripe-elements/deployments',
        created_at: '2021-11-10T22:05:57Z',
        updated_at: '2021-11-10T22:05:58Z',
        pushed_at: '2021-08-26T20:07:39Z',
        git_url: 'git://github.com/charlesfries/ember-stripe-elements.git',
        ssh_url: 'git@github.com:charlesfries/ember-stripe-elements.git',
        clone_url: 'https://github.com/charlesfries/ember-stripe-elements.git',
        svn_url: 'https://github.com/charlesfries/ember-stripe-elements',
        homepage: 'https://ember-stripe-elements.netlify.com',
        size: 788,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 426765819,
        node_id: 'R_kgDOGW_t-w',
        name: 'ember-cli-typescript',
        full_name: 'charlesfries/ember-cli-typescript',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-cli-typescript',
        description: ' Use TypeScript in your Ember.js apps!',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-cli-typescript',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-cli-typescript/deployments',
        created_at: '2021-11-10T20:23:56Z',
        updated_at: '2021-11-10T20:23:57Z',
        pushed_at: '2021-10-02T02:15:22Z',
        git_url: 'git://github.com/charlesfries/ember-cli-typescript.git',
        ssh_url: 'git@github.com:charlesfries/ember-cli-typescript.git',
        clone_url: 'https://github.com/charlesfries/ember-cli-typescript.git',
        svn_url: 'https://github.com/charlesfries/ember-cli-typescript',
        homepage: 'https://docs.ember-cli-typescript.com',
        size: 22709,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 426356907,
        node_id: 'R_kgDOGWmwqw',
        name: 'ember-bootstrap',
        full_name: 'charlesfries/ember-bootstrap',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-bootstrap',
        description:
          'Ember-cli addon for using Bootstrap as native Ember components.',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-bootstrap',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-bootstrap/deployments',
        created_at: '2021-11-09T19:18:27Z',
        updated_at: '2021-11-09T19:18:29Z',
        pushed_at: '2021-11-09T13:43:06Z',
        git_url: 'git://github.com/charlesfries/ember-bootstrap.git',
        ssh_url: 'git@github.com:charlesfries/ember-bootstrap.git',
        clone_url: 'https://github.com/charlesfries/ember-bootstrap.git',
        svn_url: 'https://github.com/charlesfries/ember-bootstrap',
        homepage: 'https://www.ember-bootstrap.com',
        size: 40472,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 392083354,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTIwODMzNTQ=',
        name: 'ember-sortable',
        full_name: 'charlesfries/ember-sortable',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-sortable',
        description: 'Sortable UI primitives for Ember.js',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-sortable',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-sortable/deployments',
        created_at: '2021-08-02T20:19:58Z',
        updated_at: '2021-11-08T19:35:02Z',
        pushed_at: '2021-11-08T19:35:00Z',
        git_url: 'git://github.com/charlesfries/ember-sortable.git',
        ssh_url: 'git@github.com:charlesfries/ember-sortable.git',
        clone_url: 'https://github.com/charlesfries/ember-sortable.git',
        svn_url: 'https://github.com/charlesfries/ember-sortable',
        homepage: 'https://adopted-ember-addons.github.io/ember-sortable/',
        size: 6107,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 425350464,
        node_id: 'R_kgDOGVpVQA',
        name: 'ember-intl',
        full_name: 'charlesfries/ember-intl',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-intl',
        description: 'Localization library for any Ember Application or Addon',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-intl',
        forks_url: 'https://api.github.com/repos/charlesfries/ember-intl/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-intl/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-intl/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/charlesfries/ember-intl/teams',
        hooks_url: 'https://api.github.com/repos/charlesfries/ember-intl/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-intl/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-intl/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-intl/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-intl/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/ember-intl/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-intl/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-intl/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-intl/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-intl/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-intl/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-intl/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-intl/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-intl/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-intl/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-intl/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-intl/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-intl/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-intl/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-intl/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-intl/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-intl/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-intl/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-intl/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-intl/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-intl/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-intl/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-intl/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-intl/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-intl/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-intl/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-intl/deployments',
        created_at: '2021-11-06T21:17:42Z',
        updated_at: '2021-11-06T21:20:05Z',
        pushed_at: '2021-12-07T23:39:46Z',
        git_url: 'git://github.com/charlesfries/ember-intl.git',
        ssh_url: 'git@github.com:charlesfries/ember-intl.git',
        clone_url: 'https://github.com/charlesfries/ember-intl.git',
        svn_url: 'https://github.com/charlesfries/ember-intl',
        homepage: 'https://ember-intl.github.io',
        size: 35591,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 290333482,
        node_id: 'MDEwOlJlcG9zaXRvcnkyOTAzMzM0ODI=',
        name: 'charlesfries',
        full_name: 'charlesfries/charlesfries',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/charlesfries',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/charlesfries',
        forks_url:
          'https://api.github.com/repos/charlesfries/charlesfries/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/charlesfries/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/charlesfries/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/charlesfries/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/charlesfries/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/charlesfries/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/charlesfries/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/charlesfries/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/charlesfries/branches{/branch}',
        tags_url: 'https://api.github.com/repos/charlesfries/charlesfries/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/charlesfries/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/charlesfries/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/charlesfries/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/charlesfries/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/charlesfries/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/charlesfries/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/charlesfries/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/charlesfries/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/charlesfries/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/charlesfries/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/charlesfries/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/charlesfries/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/charlesfries/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/charlesfries/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/charlesfries/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/charlesfries/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/charlesfries/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/charlesfries/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/charlesfries/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/charlesfries/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/charlesfries/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/charlesfries/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/charlesfries/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/charlesfries/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/charlesfries/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/charlesfries/deployments',
        created_at: '2020-08-25T22:05:14Z',
        updated_at: '2021-11-03T20:45:31Z',
        pushed_at: '2021-11-03T20:45:28Z',
        git_url: 'git://github.com/charlesfries/charlesfries.git',
        ssh_url: 'git@github.com:charlesfries/charlesfries.git',
        clone_url: 'https://github.com/charlesfries/charlesfries.git',
        svn_url: 'https://github.com/charlesfries/charlesfries',
        homepage: null,
        size: 17,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: null,
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 424303862,
        node_id: 'R_kgDOGUpc9g',
        name: 'sentry-javascript',
        full_name: 'charlesfries/sentry-javascript',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/sentry-javascript',
        description: 'Official Sentry SDKs for JavaScript',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/sentry-javascript',
        forks_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/sentry-javascript/deployments',
        created_at: '2021-11-03T16:38:33Z',
        updated_at: '2021-11-03T16:38:35Z',
        pushed_at: '2021-11-03T15:57:43Z',
        git_url: 'git://github.com/charlesfries/sentry-javascript.git',
        ssh_url: 'git@github.com:charlesfries/sentry-javascript.git',
        clone_url: 'https://github.com/charlesfries/sentry-javascript.git',
        svn_url: 'https://github.com/charlesfries/sentry-javascript',
        homepage: 'https://sentry.io',
        size: 30961,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: false,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'bsd-3-clause',
          name: 'BSD 3-Clause "New" or "Revised" License',
          spdx_id: 'BSD-3-Clause',
          url: 'https://api.github.com/licenses/bsd-3-clause',
          node_id: 'MDc6TGljZW5zZTU=',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 423722633,
        node_id: 'R_kgDOGUF-iQ',
        name: 'test-codespace',
        full_name: 'charlesfries/test-codespace',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/test-codespace',
        description: null,
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/test-codespace',
        forks_url:
          'https://api.github.com/repos/charlesfries/test-codespace/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/test-codespace/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/test-codespace/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/test-codespace/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/test-codespace/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/test-codespace/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/test-codespace/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/test-codespace/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/test-codespace/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/test-codespace/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/test-codespace/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/test-codespace/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/test-codespace/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/test-codespace/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/test-codespace/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/test-codespace/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/test-codespace/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/test-codespace/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/test-codespace/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/test-codespace/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/test-codespace/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/test-codespace/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/test-codespace/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/test-codespace/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/test-codespace/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/test-codespace/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/test-codespace/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/test-codespace/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/test-codespace/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/test-codespace/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/test-codespace/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/test-codespace/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/test-codespace/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/test-codespace/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/test-codespace/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/test-codespace/deployments',
        created_at: '2021-11-02T05:52:35Z',
        updated_at: '2021-11-02T05:52:40Z',
        pushed_at: '2021-11-02T05:52:37Z',
        git_url: 'git://github.com/charlesfries/test-codespace.git',
        ssh_url: 'git@github.com:charlesfries/test-codespace.git',
        clone_url: 'https://github.com/charlesfries/test-codespace.git',
        svn_url: 'https://github.com/charlesfries/test-codespace',
        homepage: null,
        size: 241,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'EJS',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'main',
      },
      {
        id: 423214678,
        node_id: 'R_kgDOGTm-Vg',
        name: 'ember-buffered-proxy',
        full_name: 'charlesfries/ember-buffered-proxy',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-buffered-proxy',
        description: 'An Ember Proxy the enables change buffering',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-buffered-proxy',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-buffered-proxy/deployments',
        created_at: '2021-10-31T17:27:05Z',
        updated_at: '2021-10-31T17:44:42Z',
        pushed_at: '2021-10-31T17:44:39Z',
        git_url: 'git://github.com/charlesfries/ember-buffered-proxy.git',
        ssh_url: 'git@github.com:charlesfries/ember-buffered-proxy.git',
        clone_url: 'https://github.com/charlesfries/ember-buffered-proxy.git',
        svn_url: 'https://github.com/charlesfries/ember-buffered-proxy',
        homepage: '',
        size: 3663,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 394403679,
        node_id: 'MDEwOlJlcG9zaXRvcnkzOTQ0MDM2Nzk=',
        name: 'ember-simple-bootstrap',
        full_name: 'charlesfries/ember-simple-bootstrap',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-simple-bootstrap',
        description: 'Ember components for Bootstrap 5',
        fork: false,
        url: 'https://api.github.com/repos/charlesfries/ember-simple-bootstrap',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-simple-bootstrap/deployments',
        created_at: '2021-08-09T18:46:55Z',
        updated_at: '2021-10-30T22:16:52Z',
        pushed_at: '2021-12-02T21:43:12Z',
        git_url: 'git://github.com/charlesfries/ember-simple-bootstrap.git',
        ssh_url: 'git@github.com:charlesfries/ember-simple-bootstrap.git',
        clone_url: 'https://github.com/charlesfries/ember-simple-bootstrap.git',
        svn_url: 'https://github.com/charlesfries/ember-simple-bootstrap',
        homepage: 'https://ember-simple-bootstrap.netlify.app/',
        size: 5329,
        stargazers_count: 1,
        watchers_count: 1,
        language: 'TypeScript',
        has_issues: true,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: ['bootstrap', 'bootstrap5', 'ember', 'ember-addon'],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 1,
        default_branch: 'master',
      },
      {
        id: 421971763,
        node_id: 'R_kgDOGSbHMw',
        name: 'ember-highcharts',
        full_name: 'charlesfries/ember-highcharts',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-highcharts',
        description:
          'A Highcharts, HighStock and HighMaps component for ember cli',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-highcharts',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-highcharts/deployments',
        created_at: '2021-10-27T20:58:11Z',
        updated_at: '2021-10-27T20:58:12Z',
        pushed_at: '2021-10-27T02:11:15Z',
        git_url: 'git://github.com/charlesfries/ember-highcharts.git',
        ssh_url: 'git@github.com:charlesfries/ember-highcharts.git',
        clone_url: 'https://github.com/charlesfries/ember-highcharts.git',
        svn_url: 'https://github.com/charlesfries/ember-highcharts',
        homepage: 'https://ahmadsoe.github.io/ember-highcharts/',
        size: 10922,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 421601252,
        node_id: 'R_kgDOGSEf5A',
        name: 'ember-osf-web',
        full_name: 'charlesfries/ember-osf-web',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-osf-web',
        description: 'Ember front-end for the Open Science Framework',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-osf-web',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-osf-web/deployments',
        created_at: '2021-10-26T22:23:30Z',
        updated_at: '2021-10-26T22:23:31Z',
        pushed_at: '2021-10-26T20:39:19Z',
        git_url: 'git://github.com/charlesfries/ember-osf-web.git',
        ssh_url: 'git@github.com:charlesfries/ember-osf-web.git',
        clone_url: 'https://github.com/charlesfries/ember-osf-web.git',
        svn_url: 'https://github.com/charlesfries/ember-osf-web',
        homepage: 'https://osf.io',
        size: 46174,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'apache-2.0',
          name: 'Apache License 2.0',
          spdx_id: 'Apache-2.0',
          url: 'https://api.github.com/licenses/apache-2.0',
          node_id: 'MDc6TGljZW5zZTI=',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'develop',
      },
      {
        id: 421219972,
        node_id: 'R_kgDOGRtOhA',
        name: 'ember-service-worker-update-notify',
        full_name: 'charlesfries/ember-service-worker-update-notify',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url:
          'https://github.com/charlesfries/ember-service-worker-update-notify',
        description: 'Update notification for service workers',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-service-worker-update-notify/deployments',
        created_at: '2021-10-25T23:55:06Z',
        updated_at: '2021-10-25T23:55:07Z',
        pushed_at: '2021-09-21T04:59:56Z',
        git_url:
          'git://github.com/charlesfries/ember-service-worker-update-notify.git',
        ssh_url:
          'git@github.com:charlesfries/ember-service-worker-update-notify.git',
        clone_url:
          'https://github.com/charlesfries/ember-service-worker-update-notify.git',
        svn_url:
          'https://github.com/charlesfries/ember-service-worker-update-notify',
        homepage: null,
        size: 2182,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
      {
        id: 420232193,
        node_id: 'R_kgDOGQw8AQ',
        name: 'ember-inline-edit',
        full_name: 'charlesfries/ember-inline-edit',
        private: false,
        owner: {
          login: 'charlesfries',
          id: 2275005,
          node_id: 'MDQ6VXNlcjIyNzUwMDU=',
          avatar_url: 'https://avatars.githubusercontent.com/u/2275005?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/charlesfries',
          html_url: 'https://github.com/charlesfries',
          followers_url: 'https://api.github.com/users/charlesfries/followers',
          following_url:
            'https://api.github.com/users/charlesfries/following{/other_user}',
          gists_url:
            'https://api.github.com/users/charlesfries/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/charlesfries/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/charlesfries/subscriptions',
          organizations_url: 'https://api.github.com/users/charlesfries/orgs',
          repos_url: 'https://api.github.com/users/charlesfries/repos',
          events_url:
            'https://api.github.com/users/charlesfries/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/charlesfries/received_events',
          type: 'User',
          site_admin: false,
        },
        html_url: 'https://github.com/charlesfries/ember-inline-edit',
        description: 'Inline editing component for ember.js',
        fork: true,
        url: 'https://api.github.com/repos/charlesfries/ember-inline-edit',
        forks_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/forks',
        keys_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/collaborators{/collaborator}',
        teams_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/teams',
        hooks_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/hooks',
        issue_events_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/issues/events{/number}',
        events_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/events',
        assignees_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/branches{/branch}',
        tags_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/tags',
        blobs_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/statuses/{sha}',
        languages_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/languages',
        stargazers_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/stargazers',
        contributors_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/contributors',
        subscribers_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/subscribers',
        subscription_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/subscription',
        commits_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/compare/{base}...{head}',
        merges_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/merges',
        archive_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/{archive_format}{/ref}',
        downloads_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/downloads',
        issues_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/labels{/name}',
        releases_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/charlesfries/ember-inline-edit/deployments',
        created_at: '2021-10-22T20:23:07Z',
        updated_at: '2021-10-22T20:25:07Z',
        pushed_at: '2021-10-22T20:25:04Z',
        git_url: 'git://github.com/charlesfries/ember-inline-edit.git',
        ssh_url: 'git@github.com:charlesfries/ember-inline-edit.git',
        clone_url: 'https://github.com/charlesfries/ember-inline-edit.git',
        svn_url: 'https://github.com/charlesfries/ember-inline-edit',
        homepage: 'http://kindlyops.github.io/ember-inline-edit/',
        size: 923,
        stargazers_count: 0,
        watchers_count: 0,
        language: 'JavaScript',
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        disabled: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
          node_id: 'MDc6TGljZW5zZTEz',
        },
        allow_forking: true,
        is_template: false,
        topics: [],
        visibility: 'public',
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
      },
    ];

    return this.store.query('repository', {
      sort: 'updated',
    });
  }
}

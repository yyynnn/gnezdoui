/* eslint-disable no-template-curly-in-string */
module.exports = {
  repositoryUrl: 'https://github.com/yyynnn/gneznoui.git',
  branch: 'release',
  verifyConditions: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ],
    '@semantic-release/github',
    '@qiwi/semantic-release-gh-pages-plugin'
  ],
  analyzeCommits: ['@semantic-release/commit-analyzer'],
  generateNotes: ['@semantic-release/release-notes-generator'],
  prepare: [
    '@semantic-release/changelog',
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
      }
    ]
  ],
  publish: [
    '@semantic-release/npm',
    '@semantic-release/github',
    {
      path: '@qiwi/semantic-release-gh-pages-plugin',
      msg: 'DOCZ updated',
      branch: 'gh-pages'
    }
  ]
}

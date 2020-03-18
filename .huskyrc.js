module.exports = {
  hooks: {
    'pre-commit': 'npm run lint && npm run test:unit && npm run todos',
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS'
  }
}

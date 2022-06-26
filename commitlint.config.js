module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能feature
        'fix', // 修复bug
        'refactor', //重构
        'test', // 测试
        'revert', // 回退
      ],
    ],
    'subject-case': [0],
  },
};

module.exports = {
    root: true, // 此项是用来告诉eslint找当前配置文件不能往父级查找
    env: {
      node: true, // 此项指定环境的全局变量，下面的配置指定为node环境
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
    parserOptions: {
      parser: 'babel-eslint',
      parser: 'babel-eslint',
      ecmaVersion: 7,
      sourceType: 'module',
      ecmaFeatures: {
        // 添加ES特性支持，使之能够识别ES6语法
        jsx: true,
      },
    },
    overrides: [],
  };
  
  
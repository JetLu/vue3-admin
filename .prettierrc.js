module.exports = {
  printWidth: 120, // 行的字符数，如果超过会进行换行
  tabWidth: 2, // 制表符tab的宽度，默认值是2
  useTabs: false, // 缩进使用tab
  semi: true, // 句尾添加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 字符串是否使用单引号，默认为false，使用双引号
  quoteProps: 'preserve', // 对象属性的引号使用:as-needed 按需添加,consistent一致原则，即对象中若有一个属性添加了引号，其他所有属性都添加,preserve 保留用户输入的情况
  bracketSpacing: true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  trailingComma: 'none', // 是否使用尾逗号，有三个可选值"<none|es5|all>"
  jsxBracketSameLine: false,
  jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
  arrowParens: 'avoid', // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'never',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf', // 结尾是 \n \r \n\r auto
  rangeStart: 0
};

/**
 * コンポーネントまでのパスが、文字列の場合は配列に変換する
 * 文字列の場合は#components/foo/barのような想定
 * @param {string|string[]} ref
 * @return {string[]|null}
 * */
const parseComponentRef = (ref) => {
  return typeof ref === 'string' ?
    ref.split('/').filter((_, i) => i > 0) :
    ref instanceof Array ? ref :
      null;
}

module.exports = parseComponentRef;
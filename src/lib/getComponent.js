const parseComponentRef = require('./parseComponentRef');

/**
 * パスを元にcomponentを取得する
 * @param {Object} schema
 * @param {string[]|string} baseRef
 * @returns {Object}
 * */
const getComponent = (schema, baseRef) => {
  /**
   * コンポーネントまでのパスが、文字列の場合は配列に変換する
   * 文字列の場合は#components/foo/barのような想定
   * */
  const ref = parseComponentRef(baseRef);

  if (!ref || ref.length < 1) return null;

  /** 配列が空になるまで再起的に実行 */
  const reducedRef = ref.filter(((_, i) => i > 0));
  if (reducedRef.length > 0) {
    return getComponent(schema[ref[0]], reducedRef)
  }

  /** 配列が空の場合はcomponentが返却される */
  return schema[ref[0]]
}

module.exports = getComponent;
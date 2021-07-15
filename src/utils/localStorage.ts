class LocalStorageUtil {
  /**
   * @description 依据key添加值到localStorage中
   * @author luzhaojian
   * @date 2021-06-29
   * @param {string} key 键值
   * @param {*} value 值
   * @memberof LocalStorageUtil
   */
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @description 依据key获取localStorage中的值
   * @author luzhaojian
   * @date 2021-06-29
   * @param {string} key 键值
   * @returns {*}
   * @memberof LocalStorageUtil
   */
  getItem(key: string) {
    const item: any = localStorage.getItem(key);
    return JSON.parse(item);
  }

  /**
   * @description 依据key移除localStorage中的值
   * @author luzhaojian
   * @date 2021-06-29
   * @param {string} key 键值
   * @memberof LocalStorageUtil
   */
  removeItem(key: string) {
    localStorage.removeItem(key);
  }

  /**
   * @description 清空localStorage
   * @author luzhaojian
   * @date 2021-06-29
   * @memberof LocalStorageUtil
   */
  clear() {
    localStorage.clear();
  }

  /**
   * @description localStorage中加密存储用户信息
   * @author luzhaojian
   * @date 2021-06-29
   * @param {*} data
   * @memberof LocalStorageUtil
   */
  setUserInfo(data: any) {
    this.setItem('userInfo', data);
  }

  /**
   * @description 获取localStorage中的用户信息
   * @author luzhaojian
   * @date 2021-06-29
   * @returns
   * @memberof LocalStorageUtil
   */
  getUserInfo() {
    return this.getItem('userInfo');
  }
}

export default new LocalStorageUtil();

/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Feb 15 2017 10:33:45 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/collapse
 */

class CollapseItemController {
  constructor() {
    this.name = 'collapse';
    Object.assign(this, {
      title: this.data.title,
      content: this.data.content,
      open: false
    })
  }
  change(){
    this.open = !(this.open);
  }

}

export default CollapseItemController;

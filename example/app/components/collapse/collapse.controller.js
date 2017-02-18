/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Feb 15 2017 10:33:45 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/collapse
 */

import Base from '../../base';
export default class CollapseController extends Base{
  constructor($state,$translate) {
    'ngInject';
    super($state,$translate);
    this.data = [
      {title: '标题1', content: '内容1'},
      {title: '标题2', content: '内容2'},
      {title: '标题3', content: '内容3'},
      {title: '标题4', content: '内容4'},
      {title: '标题5', content: '内容5'}

    ]
  }
  selectItem(index){

  }
}
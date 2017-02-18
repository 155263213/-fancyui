/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Feb 15 2017 10:33:45 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/collapse
 */
'use strict';

class CollapseController {
  constructor() {
    this.name = 'collapse';
  }
  change(key){
    angular.forEach(this.data, (item, index) => {
        if(index == key){
          item.open = !item.open;
        }else{
          item.open = false;
        }
      }
    );
  }

  $onInit(){
    angular.forEach(this.data, (item) =>{
      item.open = false;
    })
  }
}

export default CollapseController;

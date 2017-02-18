/**
 * @description xxxx
 *
 * @author XXXXX@wandan.cn
 * @date Wed Feb 15 2017 10:33:45 GMT+0800 (中国标准时间)
 * @example: http://www.fancyui.org/#/zh-cn/component/collapse
 */

import collapseComponent from './collapse.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'angular-animate';

let collapseModule = angular.module('f-collapse', [
  'ngAnimate'
])

.component('fCollapse', collapseComponent);

export default collapseModule;

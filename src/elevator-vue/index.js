/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

'use strict';

import Vue from 'vue/dist/vue.common';

import {ConfiguratorComponent} from './configurator.component';
import {FormDimensionsComponent} from './form-dimensions.component';
import {FormCapacityComponent} from './form-capacity.component';
import {SummaryComponent} from './summary.component';

Vue.component('wt-configurator', ConfiguratorComponent);
Vue.component('wt-form-capacity', FormCapacityComponent);
Vue.component('wt-form-dimensions', FormDimensionsComponent);
Vue.component('wt-summary', SummaryComponent);

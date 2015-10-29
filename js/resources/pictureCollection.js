import Backbone from 'backbone';
import {APP_URL} from '../parse_data';
import PictureModel from './pictureModel';

export default Backbone.Collection.extend({

  url: APP_URL,

  model: PictureModel,

  parse: function(data) {
    return data.results;
  }

});
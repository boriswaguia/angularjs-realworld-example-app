export default class Tags {
  static $inject = ['JWT', 'AppConstants', '$http', '$q'];
  _AppConstants: any;
  _$http: any;
  constructor(JWT, AppConstants, $http, $q) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;


  }

  getAll() {

    return this._$http({
      url: this._AppConstants.api + '/tags',
      method: 'GET',
    }).then((res) => res.data.tags);

  }


}

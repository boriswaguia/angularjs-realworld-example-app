class AuthCtrl {
  static $inject = ['User', '$state'];
  _User: any;
  _$state: any;
  title: any;
  authType: any;
  isSubmitting: boolean;
  errors: any;
  constructor(User, $state) {
    'ngInject';

    this._User = User;
    this._$state = $state;

    this.title = $state.current.title;
    this.authType = $state.current.name.replace('app.', '');

  }

  submitForm() {
    this.isSubmitting = true;

    this._User.attemptAuth(this.authType, this.formData).then(
      (res) => {
        this._$state.go('app.home');
      },
      (err) => {
        this.isSubmitting = false;
        this.errors = err.data.errors;
      }
    )
  }
  formData(authType: any, formData: any) {
    throw new Error('Method not implemented.');
  }
}

export default AuthCtrl;

class ProfileCtrl {
  static $inject = ['profile', 'User'];
  profile: any;
  isUser: boolean;
  constructor(profile, User) {
    'ngInject';

    this.profile = profile;

    if (User.current) {
      console.log(this.profile)
      this.isUser = (User.current.username === this.profile.username);
    } else {
      this.isUser = false;
    }

  }
}


export default ProfileCtrl;

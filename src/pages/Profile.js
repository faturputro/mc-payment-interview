import View from "../helper/View";

export default class Profile extends View {
  constructor() {
    super()
    this.setTitle('Profile')
  }
  async render() {
    return 'Profile'
  }
}

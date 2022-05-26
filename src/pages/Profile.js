import View from "../helper/View";

export default class Profile extends View {
  constructor() {
    super()
    this.setTitle('Profile')
  }
  async render() {
    return `
      <div class="container card">
        <h1 class="my-1 mt-2">Profile</h1>
        <p class="sub-heading">Edit your profile</p>
      </div>
    `
  }
}

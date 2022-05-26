import View from "../helper/View";

export default class Home extends View {
  constructor() {
    super()
    this.setTitle('Home')
  }
  async render() {
    return 'HOME'
  }
}

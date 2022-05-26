import View from "../helper/View";

export default class Home extends View {
  constructor() {
    super()
    this.setTitle('Home')
  }
  async render() {
    return `
      <div class="container card">
        <h1 class="my-1 mt-2">Dashboard</h1>
        <p class="sub-heading">Monitor your income and expenses</p>
      </div>
    `
  }
}

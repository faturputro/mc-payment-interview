import View from "../helper/View";

export default class Transactions extends View {
  constructor() {
    super()
    this.setTitle('Transactions')
  }
  async render() {
    return 'Transactions'
  }
}

// module.exports = Transactions

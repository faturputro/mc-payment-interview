import View from "../helper/View";
import { items } from "../repository/mock";

export default class Transactions extends View {
  constructor() {
    super()
    this.setTitle('Transactions')
    this.transactionLists = items
    this.init()
    this.searchVal = ''
  }
  init() {
    window.addEventListener('DOMContentLoaded', () => {
      console.log('loaded')
      document.querySelector('#filterInput').addEventListener('input', this.filterItems.bind(this))
    })
  }
  async render() {
    return `
      <div class="container card">
        <h1 class="my-1 mt-2">Transaction</h1>
        <p class="sub-heading">Here's all of your recent transactions.</p>
        <input id="filterInput" type="text" class="input-field" placeholder="Search transaction" />
        <ul>
          ${
            this.transactionLists.map((item) => {
              return `
                <li class="">${item.item}</li>
              `
            })
          }
        </ul>
      </div>
    `
  }
  filterItems(e) {
    if (e.target.value !== '') {
      this.searchVal = e.target.value
      const filtered = items.filter((item) => this.searchVal.toLowerCase().includes(item.item.toLowerCase()))
      this.transactionLists = filtered
      this.render()
      console.log(filtered)
    }
  }
}
// module.exports = Transactions

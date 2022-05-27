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
      console.log(this.transactionLists)
      document.querySelector('#filterInput').addEventListener('input', this.onSearchInput.bind(this))
      document.querySelector('button').addEventListener('click', this.filterLists.bind(this))
    })
  }
  async render() {
    return `
      <div class="container card">
        <h1 class="my-1 mt-2">Transaction</h1>
        <p class="sub-heading">Here's all of your recent transactions.</p>
        <div class="w-full flex">
          <input id="filterInput" type="text" class="input-field mr-1" placeholder="Search transaction" />
          <button type="button" class="btn btn-md">Search</button>
        </div>
        <ul class="transaction-list">
          ${await this.renderListItems()}
        </ul>
      </div>
    `
  }
  async renderListItems() {
    return await this.transactionLists.map(({ item, logo, price }) => {
      return `
        <li class="flex items-center">
          <div class="img-rounded--container">
            <img src="${logo}" alt="${item}" />
          </div>
          <p class="">${item}</p>
        </li>
      `
    })
  }
  async onSearchInput(e) {
    if (e.target.value !== '') {
      this.searchVal = e.target.value
      const filtered = items.filter((item) => this.searchVal.toLowerCase().includes(item.item.toLowerCase()))
      this.transactionLists = filtered
    } else {
      this.transactionLists = items
    }
    document.querySelector('.transaction-list').innerHTML = await this.renderListItems()
  }
  async filterLists() {
    const filtered = items.filter((item) => this.searchVal.toLowerCase().includes(item.item.toLowerCase()))
    this.transactionLists = filtered
    document.querySelector('.transaction-list').innerHTML = await this.renderListItems()
  }
}

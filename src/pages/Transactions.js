import View from "../helper/View";
import { items } from "../repository/mock";
import { formatNumber } from "../helper/formatNumber";

export default class Transactions extends View {
  constructor() {
    super()
    this.setTitle('Transactions')
    this.transactionLists = []
    this.init()
    this.parser = new DOMParser()
    this.searchVal = ''
  }
  init() {
    this.transactionLists = items.map((item) => ({
      ...item,
      isExpense: item.price % 2 === 0,
    }))
    window.addEventListener('DOMContentLoaded', () => {
      document.querySelector('#filterInput').addEventListener('input', this.onSearchInput.bind(this))
      document.querySelector('button').addEventListener('click', this.filterLists.bind(this))
    })
  }
  get totalBalance() {
    return this.totalIncome - this.totalExpense
  }
  get totalExpense() {
    const filtered = items.filter((item) => item.price % 2 === 0)
    return filtered.reduce((acc, curr) => acc + curr.price, 0)
  }
  get totalIncome() {
    const filtered = items.filter((item) => item.price % 2 === 1)
    return filtered.reduce((acc, curr) => acc + curr.price, 0)
  }
  async render() {
    const str = `
      <div class="container card">
        <h1 class="my-1 mt-2">Transaction</h1>
        <p class="sub-heading">Here's all of your recent transactions.</p>
        <div class="w-full flex justify-around my-2">
          <div class="flex justify-center items-center flex-col">
            <small class="sub-heading mt-0 mb-1">Total Income</small>
            <p class="price-total my-0 price-green">Rp.${formatNumber(this.totalIncome)}</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <small class="sub-heading mt-0 mb-1">Total Expense</small>
            <p class="price-total my-0 price-red">Rp.${formatNumber(this.totalExpense)}</p>
          </div>
          <div class="flex justify-center items-center flex-col">
            <small class="sub-heading mt-0 mb-1">Total Balance</small>
            <p class="price-total my-0">Rp.${formatNumber(this.totalBalance)}</p>
          </div>
        </div>
        <div class="w-full flex mt-2">
          <input id="filterInput" type="text" class="input-field mr-1" placeholder="Search transaction" />
          <button type="button" class="btn btn-md">Search</button>
        </div>
        <ul class="transaction-list">
          ${await this.renderListItems()}
        </ul>
      </div>
    `
    return this.parseString(str)
  }
  renderListItems() {
    return this.transactionLists.map(({ item, logo, price, isExpense }) => {
      if (this.transactionLists.length > 0) {
        const htmlStr = `
          <li class="flex items-center">
            <div class="img-rounded--container mr-2">
              <img src="${logo}" alt="${item}" />
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="transaction-item--title">${item}</p>
              <p class="transaction-item--price ${isExpense ? 'price-green' : 'price-red'}">Rp. ${formatNumber(price)}</p>
            </div>
          </li>
          <hr />
        `
        return this.parseString(htmlStr)
      }
      return `
        <li class="flex items-center">
          <p class="">No data found.</p>
        </li>
      `
    })
  }
  onSearchInput(e) {
    if (e.target.value !== '') {
      this.searchVal = e.target.value
      const filtered = items.filter((item) => this.searchVal.toLowerCase().includes(item.item.toLowerCase()))
      this.transactionLists = filtered
    } else {
      this.transactionLists = items
    }
    document.querySelector('.transaction-list').innerHTML = this.renderListItems()
  }
  filterLists() {
    const filtered = items.filter((item) => this.searchVal.toLowerCase().includes(item.item.toLowerCase()))
    this.transactionLists = filtered
    document.querySelector('.transaction-list').innerHTML = this.renderListItems()
  }
}

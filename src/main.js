// const Home = require('./pages/Home')
// const Profile = require('./pages/Profile')
// const Transactions = require('./pages/Transactions')
import Home from "./pages/Home";
import Profile from './pages/Profile';
import Transactions from './pages/Transactions';

const navigate = path => {
  history.pushState(null, null, path);
  router();
}
const router = async () => {
  const routes = [
    {
      path: '/',
      title: 'Home',
      component: Home,
    },
    {
      path: '/profile',
      title: 'Profile',
      component: Profile,
    },
    {
      path: '/transactions',
      title: 'Transactions',
      component: Transactions,
    },
  ];
  
  const matchPaths = routes.map((route) => ({
    ...route,
    isMatch: route.path === location.pathname
  }))
  const match = matchPaths.find((path) => path.isMatch)
  const component = new match.component()
  document.querySelector('#app').innerHTML = await component.render()
}
window.addEventListener('popstate', router)
document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-router-link]')) {
      event.preventDefault()
      navigate(event.target.href)
    }
  })
  router()
})

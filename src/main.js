const navigate = path => {
  history.pushState(null, null, path);
  router();
}
const router = () => {
  const routes = [
    {
      path: '/',
      title: 'Home',
      component: () => console.log('HOME')
    },
    {
      path: '/profile',
      title: 'Profile',
      component: () => console.log('PROFILE')
    },
    {
      path: '/transactions',
      title: 'Transactions',
      component: () => console.log('Transactions')
    },
  ];
  
  const matchPaths = routes.map((route) => ({
    ...route,
    isMatch: route.path === location.pathname
  }))
  const match = matchPaths.find((path) => path.isMatch)
}

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('[data-router-link]')) {
      event.preventDefault()
      navigate(event.target.href)
    }
  })
  router()
})

export const formatNumber = (e) => {
  if (e !== '' || e !== undefined || e !== 0 || e !== '0' || e != null) {
    return e?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  } else {
    return e
  }
}
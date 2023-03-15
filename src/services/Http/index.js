export const enhancedFetch = ( method ,url, data ) => {
  return fetch(url)
  .then(response => {
    return response.json()
  })
}
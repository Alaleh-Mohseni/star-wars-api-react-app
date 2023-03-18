export const enhancedFetch = (method, url) => {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json()
      }
    })
}
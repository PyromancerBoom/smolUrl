import React from 'react'

const form = () => {
  return (
    <div>
        <form action='/shortUrls' method='POST'>
            <label for="fullUrl">Url</label>
            <input type="url" name="fullUrl" id = "fullUrl"></input>
            <button type="submit">Shrink</button>
        </form>
    </div>
  )
}

export default form
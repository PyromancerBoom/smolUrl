import React from 'react'

const Table = () => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Full URL</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href='#'>#</a></td>
                    <td><a href='#'>Short url link</a></td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Table
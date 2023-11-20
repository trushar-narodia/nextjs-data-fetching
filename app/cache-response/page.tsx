
"use client"
import moment from 'moment'
import { use, useEffect, useState } from 'react'

export default function Page() {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' }).then(res => res.json()).then(data => {
      setData(data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link active" href="/pre-fetch">Pre-Fetch</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/cache-response">Cache Response</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/revalidate">Pre-fetch with Revalidate</a>
            </li>
          </ul>
        </div>
        <div className="col-12">
          <h1>Cache Response</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {
                data && data.map((item: any) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

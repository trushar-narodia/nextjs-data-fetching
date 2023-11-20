
import moment from 'moment'

export default async function Page() {
  const { data, fetchAt } = await getData()
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
          <h1>Pre-Fetch at {moment(fetchAt).format('YYYY-MM-DD hh:mm:ss A')}</h1>
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

async function getData() {
  // fetch the data from API only when we build the app.
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return {
    data: await res.json(),
    fetchAt: Date.now(),
  }
}
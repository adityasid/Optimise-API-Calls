import React from 'react'
import axios from 'axios'

function App() {

  const onType = async (e) => {
    let cancelToken; // we can use state
    const search = e.target.value;

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Canceling the previous req")
    }

    cancelToken = axios.CancelToken.source();


    // https://api.github.com/repos/vmg/redcarpet/issues?state=closed
    // https://api.github.com/users/
    const result = await axios.get(
      `https://api.github.com/repos/vmg/redcarpet/issues?state=${search}`,
      { cancelToken: cancelToken.token }
    )

    console.table(result.data);

  }

  return (
    <div style={{ marginTop: "4em", textAlign: "center" }}>
      <input
        type="text"
        placeholder="Enter search"
        onChange={onType}
      />
    </div>
  )
}

export default App

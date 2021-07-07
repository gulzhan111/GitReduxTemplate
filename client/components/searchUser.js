import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

const SearchUser = ({ userName }) => {
  const [userLogin, setUserLogin] = useState('')
  const history = useHistory()
  return (
    <div>
      {!!userName || (
        <div className=" shadow-sm w-full h-screen flex items-center justify-center">
          <input
            type="text"
            name="price"
            value={userLogin}
            onKeyPress={(e) => e.key === 'Enter' && history.push(`/${userLogin}`)}
            className=" w-1/4 border-blue-500 border-2 rounded-md p-1"
            placeholder="please enter user name"
            onChange={(e) => setUserLogin(e.target.value)}
          />
          <Link to={`/${userLogin}`} className="bg-blue-300  p-1 text-white rounded-md ">
            {' '}
            Search{' '}
          </Link>
        </div>
      )}
    </div>
  )
}

export default SearchUser

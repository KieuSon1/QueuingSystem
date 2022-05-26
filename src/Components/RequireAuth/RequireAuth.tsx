import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const RequireAuth: React.FC<{children: JSX.Element}> = ({children}) => {
    // const user = useSelector(state: Root => state.user)
    useEffect(() => {

    }, [])


  return children
}

export default RequireAuth
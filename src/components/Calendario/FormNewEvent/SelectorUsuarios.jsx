import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../context/AuthContext'
import { getUserList } from '../../../fireBase/usersCollection'


export const SelectorUsuarios = ({ dataUp }) => {
  const [users, setUsers] = useState([])
  const [selectedUsers, setSelectedUsers] = useState([])
  const { user } = useAuth()

  const handleCheckbox = e => {
    let selected = selectedUsers
    !selected.includes(e.target.value) ? selected.push(e.target.value) : selected = selected.filter(item => item !== e.target.value)
    setSelectedUsers(selected)
    console.log(selectedUsers)
    dataUp(selectedUsers)
  }

  useEffect(() => {
    const getUsers = async () => {
      const aux = await getUserList()
      const selected = selectedUsers
      setUsers(aux)
      !selected.includes(user.email) && selected.push(user.email)
      setSelectedUsers(selected)
      dataUp(selectedUsers)
    }
    getUsers();
  }, [])

  return (
    <div>
      {users.length > 0 && users.map((item, index) => (
        item.email !== user.email &&
        <>
          <input type="checkbox" id={`user-checkbox-${index}`} value={item.email} name={item.email} onChange={handleCheckbox} checked={selectedUsers.includes(item.email)} />
          <label>{item.displayName}</label>
        </>
      ))}
    </div >
  )
}

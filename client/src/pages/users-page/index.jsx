import { Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import { Button, ButtonGroup } from '@chakra-ui/react'

const UsersPage = () => {

  const [users, setUsers] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:8080/users')
    .then(res => setUsers(res.data))
  }, [users])

  const deleteUser = (id) => {
      axios.delete(`http://localhost:8080/users/${id}`)
  }

  return (
    <div id='users'>
      <div style={{display: "flex", justifyContent: 'center', marginBottom: "20px"}}>
        <Link to={'/add-user'}>Add New User</Link>
      </div>
      <TableContainer margin={10}>
          <Table variant='simple'>
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>First Name</Th>
                <Th>LastName</Th>
                <Th>Birth Date</Th>
                <Th>Email</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
                {users && users.map(user => 
                <Tr key={user._id}>
                  <Td> {user._id} </Td>
                  <Td> {user.firstName} </Td>
                  <Td> {user.lastName} </Td>
                  <Td> {user.birthDate} </Td>
                  <Td> {user.email} </Td>
                  <Td> <Button colorScheme='red' onClick={() => deleteUser(user._id)}>Delete</Button></Td>
                </Tr>)}
            </Tbody>
          </Table>
    </TableContainer>
    </div>
  )
}

export default UsersPage
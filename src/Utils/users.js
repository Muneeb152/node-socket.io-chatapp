const users = []


const addUser = ({ id, username, room }) => {
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    //validate the data
    if (!username || !room) {
        return { error: 'User name and room are required!' }
    }
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })
    if (existingUser) {
        return {
            error: 'User name is in use'
        }
    }
    const user = { id, username, room }
    users.push(user)
    return { user }
}
const removeUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if (index !== -1) {
        return users.splice(index, 1)[0]
    }
}
const getUser = (id) => {
    return users.find((user) => user.id === id)
    
}
const getUsersInRoom = (room) => {
    room=room.trim().toLowerCase()
    return users.filter((user) => user.room === room)
}

module.exports={
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}


// addUser(
//     {
//         id: 22,
//         username: 'Andrew ',
//         room: 'South Philly'
//     }
// )
// addUser(
//     {
//         id: 42,
//         username: 'Mike',
//         room: 'South Philly'
//     }
// )
// addUser(
//     {
//         id: 32,
//         username: 'Andrew',
//         room: 'Center City'
//     }
// )
// console.log(users)

// const user=getUser(42)
// console.log("User is:"+JSON.stringify(user))

// const userList=getUsersInRoom('south philly')

// console.log("List is:"+JSON.stringify(userList));
// const removedUser = removeUser(22);
// console.log(removedUser);
// console.log(users)
// const res = addUser({
//     id: 33,
//     username: '',
//     room: '',
// })
// console.log(res)



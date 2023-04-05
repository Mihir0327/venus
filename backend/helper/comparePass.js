
import bcrypt from 'bcrypt'

const comparePass = (password,hashedPassword) => {
    try {
     const cmp = bcrypt.compare(password,hashedPassword)
     console.log("compare pass",cmp)
     return cmp
    } catch (error) {
     console.log(error)
    }
 }
 export default comparePass
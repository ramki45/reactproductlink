import React from 'react'

const Useredit = () => {
    return (
        <div>
            <table class= 'table table-bordered'>
                <thead>
                <tbody>
                    <tr>
                        <th>User Name</th>
                        <th>Place</th>
                        <th>Food Product</th>
                        <th>Action</th>
                        <th>Alert</th>
                    </tr>
                   
                        <tr>
                           
                            <td>User1</td>
                            <td>Pandian Nagar</td>
                            <td>Mutton</td>
                            <td><button class = 'btn btn-primary'>Edit</button></td>
                            <td><button class = 'btn btn-danger'>Delete</button></td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default Useredit

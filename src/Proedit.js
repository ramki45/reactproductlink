import React from 'react'

const Proedit = () => {
    return (
        <div>
            <table className='table table-bordered'>
                
                <thead>
                <tbody>
                    <tr>
                        <th>Product Name</th>
                        <th>Origin</th>
                        <th>Ingredient</th>
                        <th>Action</th>
                        <th>Alert</th>
                    </tr>
                
                        <tr>
                            <td>
                            Gopi Manchurian
                            </td>
                            <td>India</td>
                            <td>Gopi</td>
                            <td><button class = 'btn btn-primary'>Edit</button></td>
                            <td><button class = 'btn btn-danger'>Delete</button></td>
                        </tr>
                    </tbody>
                </thead>
            </table>
        </div>
    )
}

export default Proedit

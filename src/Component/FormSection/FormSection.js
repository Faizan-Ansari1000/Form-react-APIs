import axios from "axios"
import { useState } from "react"

//#region 

function FormSection() {

    const [model, setModel] = useState({})
    const [list, setList] = useState([])

    const postApiData = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', model)
            .then((res) => {
                console.log(res, 'send')
                alert('Send')
                setList([...list, model])
            })
            .catch((err) => {
                console.log(err, 'no send')
            })
    }

    return (
        // <div className="justify-center mt-52">
        //     <div>
        //         <input placeholder="First Name" onChange={(e) => setModel({ ...model, firstName: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Last Name" onChange={(e) => setModel({ ...model, lastName: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Age" onChange={(e) => setModel({ ...model, age: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Email" onChange={(e) => setModel({ ...model, email: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Cnic" onChange={(e) => setModel({ ...model, cnic: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Contact" onChange={(e) => setModel({ ...model, contact: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Address" onChange={(e) => setModel({ ...model, address: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Faculty" onChange={(e) => setModel({ ...model, faculty: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Gender" onChange={(e) => setModel({ ...model, gender: e.target.value })} />
        //     </div>
        //     <div>
        //         <input placeholder="Education" onChange={(e) => setModel({ ...model, education: e.target.value })} />
        //     </div>
        //     <div>
        //         <button onClick={postApiData} className="p-3 border rounded-md shadow-md">Send</button>
        //     </div>
        //     <div>
        //         <div>
        //             <table>
        //                 <thead>
        //                     <th>Name:</th>
        //                     <th>LastName:</th>
        //                     <th>Age:</th>
        //                     <th>Email:</th>
        //                     <th>Cnic:</th>
        //                     <th>Contact:</th>
        //                     <th>Address:</th>
        //                     <th>Faculty:</th>
        //                     <th>Gender:</th>
        //                     <th>Education:</th>
        //                 </thead>
        //                 <tbody>
        //                     {list.map((x,i) => (
        //                         <tr key={i}>
        //                             <td>{x.firstName}</td>
        //                             <td>{x.lastName}</td>
        //                             <td>{x.age}</td>
        //                             <td>{x.email}</td>
        //                             <td>{x.cnic}</td>
        //                             <td>{x.contact}</td>
        //                             <td>{x.address}</td>
        //                             <td>{x.faculty}</td>
        //                             <td>{x.gender}</td>
        //                             <td>{x.education}</td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>

        <div className="flex flex-col items-center mt-10 px-4">
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">User Information</h2>
        <div className="space-y-4">
            <div>
                <input
                    placeholder="First Name"
                    onChange={(e) => setModel({ ...model, firstName: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Last Name"
                    onChange={(e) => setModel({ ...model, lastName: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Age"
                    onChange={(e) => setModel({ ...model, age: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Email"
                    onChange={(e) => setModel({ ...model, email: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Cnic"
                    onChange={(e) => setModel({ ...model, cnic: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Contact"
                    onChange={(e) => setModel({ ...model, contact: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Address"
                    onChange={(e) => setModel({ ...model, address: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Faculty"
                    onChange={(e) => setModel({ ...model, faculty: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Gender"
                    onChange={(e) => setModel({ ...model, gender: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <input
                    placeholder="Education"
                    onChange={(e) => setModel({ ...model, education: e.target.value })}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
            </div>
            <div>
                <button
                    onClick={postApiData}
                    className=" p-3 outline-none border text-black rounded-md shadow-xl hover:text-white hover:bg-black w-full"
                >
                    Send
                </button>
            </div>
        </div>
    </div>

    <div className="mt-8 w-full max-w-4xl px-2 overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-gray-200 p-3 m-4">
                <tr  className="text-left border-b border-gray-300 h-11">
                    <td>Name</td>
                    <td>LastName</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Cnic</td>
                    <td>Contact</td>
                    <td>Address</td>
                    <td>Faculty</td>
                    <td>Gender</td>
                    <td>Education</td>
                </tr>
            </thead>
            <tbody>
                {list.map((x, i) => (
                    <tr key={i} className="hover:bg-gray-100">
                        <td className="p-2 border-b border-gray-300">{x.firstName}</td>
                        <td className="p-2 border-b border-gray-300">{x.lastName}</td>
                        <td className="p-2 border-b border-gray-300">{x.age}</td>
                        <td className="p-2 border-b border-gray-300">{x.email}</td>
                        <td className="p-2 border-b border-gray-300">{x.cnic}</td>
                        <td className="p-2 border-b border-gray-300">{x.contact}</td>
                        <td className="p-2 border-b border-gray-300">{x.address}</td>
                        <td className="p-2 border-b border-gray-300">{x.faculty}</td>
                        <td className="p-2 border-b border-gray-300">{x.gender}</td>
                        <td className="p-2 border-b border-gray-300">{x.education}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>


    )
}

//#endregion


export default FormSection;
 import {
    addDoc,
    getDocs,
    collection,
    deleteDoc,
    doc 
} from 'firebase/firestore';
import { useState } from 'react';
import { database } from './firebaseConfig';
export default function Form() {

    const [Lastname, setLastname] = useState('');
    const [Firstname, setFirstname] = useState('');
    const [Phone, setPhone] = useState('');
    const [Skill, setSkill] = useState('');
    const [Email, setEmail] = useState('');
    const databaseReference = collection(database, 'Visitor Data');

    const [fireData, setFireData] = useState([]);

    const getData = async () => {
        await getDocs(databaseReference)
        .then((response) => {
            setFireData(response.docs.map((data) => {
                return {...data.data(), id: data.id}
            }))
        })
    }

    const addData = () => {
        addDoc(databaseReference, {
            Lastname: Lastname,
            Firstname: Firstname,
            Phone: Phone,
            Skill: Skill,
            Email: Email
        })
    }

    const updateField = (id) => {

        let fieldToEdit = doc(database, 'Visitor Data', id);
        updateDoc(fieldToEdit, {
            Lastname: Lastname,
            Firstname: Firstname,
            Phone: Phone,
            Skill: Skill,
            Email: Email
        })
          .then(() => {
            alert('Personal information was updated successfully.')
            clearInputFields()
          })
          .catch((err) => {
            console.log(err)
          })
      }

    const deleteDocument = async (id) => {
        const reference = doc(database, 'Visitor Data', id)
    await deleteDoc(reference)
        .then(() => {
          alert('Record successfully deleted.')
        })
        .catch((err) => {
          alert('Record cannot be deleted.')
        })
      }

    const Print = () => {
        window.print(); 
    }

    return (
        <div className='flex flex-col justify-center place-items-center min-h-screen py-2 relative'>
            <form className='absolute max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-white left-7'>
                <div>
                <h1 className='text-white mb-5 text-center'>STUDENT FORM</h1>
                </div>
            <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow-50 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" placeholder=" " required  onChange={(event) => setLastname(event.target.value)}
                value={Lastname}/>
            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last Name</label>
      
            </div>
            <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow-50 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" placeholder=" " required   onChange={(event) => setFirstname(event.target.value)}
                value={Firstname}/>
            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First Name</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
            <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow-50 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" placeholder=" " required   onChange={(event) => setEmail(event.target.value)}
                value={Email}/>
            <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-6 group">
            <input type="texr" name="floating_skill" id="floating_skill" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow-50 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" placeholder=" " required onChange={(event) => setSkill(event.target.value)}
                value={Skill}/>
            <label for="floating_Skill" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Skill/Framework</label>
            </div>
            <div class="relative z-0 w-full mb-6 group">
            <input type="text" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-yellow-50 dark:border-gray-600 dark:focus:border-emerald-100 focus:outline-none focus:ring-0 focus:border-emerald-200 peer" placeholder=" " required   onChange={(event) => setPhone(event.target.value)}
                value={Phone}/>
            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
            </div>
            </div>
          

            <button type="button" class="absolute text-gray-700 bg-emerald-900 hover:bg-yellow-50 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-neutral-400 dark:hover:bg-yellow-50 dark:focus:ring-neutral-200 print:hidden right-8" onClick={addData}>SUBMIT</button>
            <button class=" text-gray-600 bg-emerald-900 hover:bg-yellow-50 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-neutral-400 dark:hover:bg-yellow-50 dark:focus:ring-neutral-200 print:hidden" type="button" onClick={getData}>VIEW</button>
            <button type="print" class=" text-gray-700 bg-emerald-900 hover:bg-yellow-50 focus:ring-4 focus:outline-none focus:ring-emerald-200 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center dark:bg-neutral-400 dark:hover:bg-yellow-50 dark:focus:ring-neutral-200 print:hidden ml-2" onClick={Print}>PRINT</button>
           
            
           
        </form>
        {fireData.map((data) => {
                                        return (

<  div class="relative overflow-x-auto shadow-md sm:rounded-lg ml-9">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                   ID
                </th>
                <th scope="col" class="px-6 py-3">
                   Lastname
                </th>
                <th scope="col" class="px-6 py-3">
                    Firstname
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
                <th scope="col" class="px-6 py-3">
                    Phone
                </th>
                <th scope="col" class="px-6 py-3">
                    Skills
                </th>
                <th scope="col" class="px-6 py-3 print:hidden">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   {data.id}
                </th>
                <td class="px-6 py-4">
                    {data.Lastname}
                </td>
                <td class="px-6 py-4">
                    {data.Firstname}
                </td>
                <td class="px-6 py-4">
                    {data.Email}
                </td>
                <td class="px-6 py-4">
                    {data.Phone}
                </td>
                <td class="px-6 py-4">
                    {data.Skill}
                </td>
                <td class="px-6 py-4">
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline print:hidden px-4" type='button'  onClick={() => getID(data.id, data.Lastname, data.Firstname, data.Email, data.Phone, data.Skill)}>Update</button>
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline print:hidden px-4" onClick={() => deleteDocument(data.id)}>Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>


                                        )
                                    })}

    </div>

    )
}
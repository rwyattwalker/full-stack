import React from "react"
import {useState} from "react"

type Props = {
  link: String | String[] | undefined
}
type formResType = {
  success: boolean
}

const JobApplicationForm = ({link}:Props) => {
  const [resume, setResume] = useState<null|File>(null);
  const [cover, setCover] = useState<null|File>(null);
  const [formState, setFormState] = useState({
    name:'',
    email:'',
    resume:resume,
    coverLetter:cover
  })
  const handleFileUpload = (value:any, file:File) => {
    let current:any = formState;
    current[value] = file;
    setFormState(current);
    console.log(formState);
  }
  
  const [formRes, setFormRes] = useState<formResType|null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleChange = (e:any, value:any) => {
    let current:any = formState;
    current[value] = e.target.value;
    setFormState(current);
    console.log(formState);
  }
  async function handleSubmit(e:any) {
    e.preventDefault();
    setLoading(true)
    const response = await fetch("/api/applicationForm", {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(formState)
    });
    const json = await response.json();
    setLoading(false)
    setFormRes(json)
  }
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg middle mt-20 sm:mt-0" onSubmit={handleSubmit}>
      <div className="mb-4">
        <h1 className="font-semibold text-lg text-center">Application for Sales Executive</h1>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Full Name"
          onChange={(e)=>handleChange(e,"name")} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Email Address"
          onChange={(e)=>handleChange(e,"email")} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resume">
          Resume
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="resume"
          type="file"
          onChange={(e)=>handleFileUpload("resume",e.target.files[0])} 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover-letter">
          Cover Letter
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cover-letter"
          type="file"
          onChange={(e)=>handleChange(e,"coverLetter")} 
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-amber-500 rounded hover:bg-amber-700 focus:outline-none focus:shadow-outline-blue active:bg-amber-800  text-white font-bold py-2 px-4 focus:shadow-outline"
          type="submit"
        >
          Apply
        </button>
      </div>
    </form>
  );
};

export default JobApplicationForm;
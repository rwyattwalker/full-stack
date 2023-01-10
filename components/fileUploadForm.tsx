import Image from "next/image";
import { ChangeEvent, MouseEvent, useState } from "react";

const SingleFileUploadForm = () => {
  const [file, setFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [formState, setFormState] = useState({
    name:'',
    email:'',
    coverLetter: ''
  })
  const handleChange = (e:any, value:any) => {
    let current:any = formState;
    current[value] = e.target.value;
    setFormState(current);
    console.log(formState);
  }

  const onFileUploadChange = (e: ChangeEvent<HTMLInputElement>) => {
    const fileInput = e.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    if (!fileInput.files || fileInput.files.length === 0) {
      alert("Files list is empty");
      return;
    }

    const file = fileInput.files[0];

    /** File validation */
    // if (!file.type.startsWith("image")) {
    //   alert("Please select a valide image");
    //   return;
    // }

    /** Setting file state */
    setFile(file); // we will use the file state, to send it later to the server
    setPreviewUrl(URL.createObjectURL(file)); // we will use this to show the preview of the image

    /** Reset file input */
    // e.currentTarget.type = "text";
    // e.currentTarget.type = "file";
  };

  const onCancelFile = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!previewUrl && !file) {
      return;
    }
    setFile(null);
    setPreviewUrl(null);
  };

  const onUploadFile = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!file) {
      return;
    }

    try {
      var formData = new FormData();
      formData.append("media", file);
      formData.append("name", formState.name)
      formData.append("email", formState.email)
      formData.append("coverLetter", formState.coverLetter)

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      });

      const {
        data,
        error,
      }: {
        data: {
          url: string | string[];
        } | null;
        error: string | null;
      } = await res.json();

      if (error || !data) {
        alert(error || "Sorry! something went wrong.");
        return;
      }

      console.log("File was uploaded successfully:", data);
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong.");
    }
  };

  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-lg middle mt-20 sm:mt-0" onSubmit={(e)=>e.preventDefault}>
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
        onChange={onFileUploadChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cover-letter">
        Cover Letter
      </label>
      <textarea
        rows={6}
        cols={4}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="cover-letter"
        onChange={(e)=>handleChange(e, "coverLetter")} 
      />
    </div>
    <div className="flex items-center justify-between">
      <button
        className="bg-amber-500 rounded hover:bg-amber-700 focus:outline-none focus:shadow-outline-blue active:bg-amber-800  text-white font-bold py-2 px-4 focus:shadow-outline"
        type="button"
        onClick={onUploadFile}
      >
        Apply
      </button>
    </div>
  </form>
  );
};

export default SingleFileUploadForm;
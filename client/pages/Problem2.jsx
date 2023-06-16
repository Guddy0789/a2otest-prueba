import { useEffect,useState } from "react"
import { useForm } from "react-hook-form"
// import { sendString } from "../api/problems"
import axios from 'axios'


export const Problem2 = () => {
  const {register,handleSubmit, formState:{errors}} = useForm()
  const [answer, setAnswer] = useState('')
  const onSubmit = handleSubmit(async chain =>{
    // const res = await sendString(data);
    //  await axios.post('http://localhost:8000/a2o/backend/apis/',chain )
     await axios.post('http://localhost:8000/a2o/backend/apis/',chain )
     .then(response => {
      console.log("responseeee:"+JSON.stringify(response.data))
      setAnswer(response.data);
     })
     .catch(error => {
       console.error(error);
     });
  })
  useEffect(() => {
    console.log("eheheh")
    }, [])

    return (
      <div className="container">
        <h3>Problem 2: String value</h3>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="input-2" className="form-label">Enter a string</label>
          <textarea 
          type="text" 
          placeholder="String t"  
          className="form-control" 
          id="input-2" 
          {...register("chain",{required:true, maxLength: 10000, shouldTrim: true,validate: {
                 matchPattern: (v) =>/^[a-z]+$/i.test(v),
          },})}
          
          />
          {errors.chain && errors.chain.type === "required" && (
              <span className="text-danger">This field is required</span>
          )}
          {errors.chain && errors.chain.type === "maxLength" && (
              <span className="text-danger">Max length exceeded</span>
          )}
           {errors.chain?.type === "matchPattern" && (
     <span className="text-danger">Only alphabetic characters - Spaces are not allowed</span>
  )}
        </div>
        <div className="mb-3">
          <label htmlFor="input-1" className="form-label">Solution</label>
          <pre type="text" placeholder="Output"  className="form-control" id="output-2" >{answer}</pre>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
  </div>
    )
}

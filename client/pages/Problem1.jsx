import { useEffect } from "react"




export const Problem1 = () => {

useEffect(() => {
console.log("eheheh")
}, [])

  return (
    <div className="container">
      <h3>Problem 1: Chess</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="input-1" className="form-label">Enter a string</label>
        <textarea type="text" placeholder="String t"  className="form-control" id="input-1" ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="input-1" className="form-label">Solution</label>
        <textarea type="text" placeholder="Output"  className="form-control" id="output-1" ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>
  )
}

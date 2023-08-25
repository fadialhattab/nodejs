import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import Axios from "axios";
function App() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [author, setAuthor] = useState('mario')
  const [blogList, setBloglist] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [addMessage, setAddMessage] = useState('');
  
  const addBlog = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/create", {
      title: title,
      author: author,
      body: body,
    })
    setAddMessage('record inserted')
    setTimeout(() => {
      setAddMessage('')
      setTitle('')
      setBody('')
    }, 1000);
    }

    const getBlogs = () => {
      Axios.get("http://localhost:3001/blogs").then((response) => {
        //console.log(response.data)
      setBloglist(response.data);
    }
  )}
  
    
   
  


    const updateBlog = (id) => {
      Axios.put("http://localhost:3001/update", { title: newTitle, id: id }).then(
        (response) => {
        getBlogs()
        }
      );
   
    };

    const deleteBlog = (id) => {
      Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
        getBlogs()
      });
    };
  return (
    <div className="App">

     <form  onSubmit={addBlog} className="d-flex mx-auto flex-column align-items-center w-75">
        
        <label className="mt-3 h5">Blog title</label>
        <input className="w-50 form-control-lg"  type="text"  
        required  value={title} onChange={(e) => setTitle(e.target.value)}/>

        <label className="mt-3 h5">Blog body</label>
        <textarea rows="5" className="w-50 form-control-lg" required 
        value={body} onChange={(e) => setBody(e.target.value)}></textarea>

        <label className="mt-3 h5">Blog author</label>
        <select className="w-50 form-control-lg" value={author}
        onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button className="btn btn-success btn-lg w-50 mt-5" >Add Blog</button>
       <p className='h5'>{addMessage}</p>
        <button type='button' onClick={getBlogs}  className="btn btn-success btn-lg w-50 mt-5 mx-auto" >show data</button>   
     </form>
     <hr/> 
  
   
     {blogList.map((val) => {
          return (
           <div className='border border-primary p-5 blog-details w-75 m-5'>
              <div className="">
                <h5>id: {val.id}</h5>
                <h5>Title: {val.title}</h5>
                <h5>Author: {val.author}</h5>
                <h5>body: {val.body}</h5>
              </div>
              <div className="d-flex">
                <input  type="text" placeholder="enter new title here"
                  onChange={(event) => {setNewTitle(event.target.value)}}/>
                <button onClick={() => {updateBlog(val.id);}}>Update</button>
                <button onClick={() => {deleteBlog(val.id)}}>Delete</button>
              </div>
        </div>
          );
        })}
    </div>
  );
}

export default App;

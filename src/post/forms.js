import React, {useState} from 'react';
export const PostForm = () => {
  const [formValue, setFormValue] = useState({
    title:'',
    content:''
  })
  const handleInput = (e) =>{
    const value = e.target.value;
    const name = e.target.name;
    
    setFormValue({...formValue, [name]: value});
  }
  const onSubmit = (e) => {
   e.preventDefault(); 
   if(formValue.title === ''){
     alert('Title is required')
     return;
   }
   console.log(formValue)
   setFormValue({title:'', content:''})
  }
  return(

    <form onSubmit={onSubmit}>
      <label>Title</label>
      <input onChange={handleInput} value={formValue.title} name="title" />
      <label>Content</label>
      <textarea onChange={handleInput} value={formValue.content} name="content"/>
      <input type ="submit"/>
    </form>
  )
}
import React, {useState} from 'react';

const Form = props =>{
    const [squadMember, setSquadMember] = useState({name: "", role: "", email: ""});

    const handleChanges = evt=>{
        console.log (squadMember);
        setSquadMember({...squadMember, [evt.target.id]: evt.target.value});      
    }
    
    const handleSubmit = evt =>{
        evt.preventDefault();
        const newSquadMember ={
            ...squadMember, id:Date.now()
        }
        props.addMemberFn(newSquadMember);
        setSquadMember ({name:"", role: "", email: ""});
    }

    return (
        <form onSubmit = {handleSubmit}>
            <div className="data-field">
                <label htmlFor="name">Name </label>
                <input id="name" 
                type="text" 
                value={squadMember.name} 
                onChange={handleChanges}/>
            </div>
            <div className="data-field">
                <label htmlFor="role">Role </label>
                <input id="role" 
                type="text" 
                value={squadMember.role} 
                onChange={handleChanges}/>
            </div>
            <div className="data-field">
                <label htmlFor="email">Email </label>
                <input id="email" 
                type="text" 
                value={squadMember.email} 
                onChange={handleChanges}/>
            </div>
            <button type="submit">Add Squad Member</button>
        </form>
    )

}

export default Form

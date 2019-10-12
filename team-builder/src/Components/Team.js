import React from 'react';

const MySquad = props =>{
    return (
        <div className = "card-container">
            {props.squadMembers.map(squadMember=>(
                <div className = "squad-member" key = {squadMember.id}>
                    <h3>{squadMember.name}</h3>
                    <h5>{squadMember.role}</h5>
                    <p>{squadMember.email}</p>
                    
                </div>    
            ))}
        </div>
    )
}

export default MySquad;
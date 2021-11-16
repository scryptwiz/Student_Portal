import React from 'react';
class Delete extends React.Component {
    render() { 
        return <>
             <button className="btn btn-danger" onClick={()=> this.props.delete(this.props.inde)}>Delete Student</button>
        </>;
    }
}
 
export default Delete;
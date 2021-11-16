import React from 'react';
import Delete from './Delete';
import {Button, Modal} from 'react-bootstrap'
class Display extends React.Component {
    state  = {show:false, editIndex:0, editObj: {}};
    handleClose  = () =>{
        this.setState(
            { show: false  }
        )
    }
    handleShow  = (e, i) =>{
        this.setState(
            { show: true, editIndex:i , editObj:e }
        )
    }
    changer = (e)=> {
        let {editObj} = this.state
        this.setState({
            editObj: {...editObj, [e.target.name]: e.target.value},
        })
    }
    update=()=> {
        let {editIndex, editObj} = this.state
        let {studentList} = this.props
        let updatedList = studentList.map((each, i)=>i===editIndex ? editObj : each);
        this.handleClose();
        this.props.edit(updatedList)
    }
  
    render() { 
        return <>
            {this.props.studentList.map((e,i)=>(
            <div key={i} className="container col-lg-7 col-sm-12 col-md-7 bg-dark text-white rounded mt-3 mb-3 p-3">
              <h3 className="text-center">Student {i+1}</h3>
              <div className="d-flex justify-content-between">
                <p>Student Name: </p>
                <p>{e.name}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Student School: </p>
                <p>{e.school}</p>
              </div>
              <div className="d-flex justify-content-between">
                <p>Student Department: </p>
                <p>{e.dept}</p>
              </div>
              <div className="d-flex justify-content-between">
                <Button variant="secondary" onClick={()=>this.handleShow(e, i)}>
                   Edit Profile
                </Button>

                <Delete inde={i} delete={this.props.delete}/>
              </div>
            </div>
          ))}
        

        <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
                <Modal.Title>Edit {this.props.studentList[this.state.editIndex] ? this.props.studentList[this.state.editIndex].name : ''}'s Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body className="d-flex flex-column align-items-center">
            <input className="form-control col-8 mb-3" value={this.state.editObj.name} name="name" onChange={this.changer} placeholder="Edit Name"/>
            <input className="form-control col-8 mb-3" value={this.state.editObj.school} name="school" onChange={this.changer} placeholder="Edit School"/>
            <input className="form-control col-8" value={this.state.editObj.dept} name="dept" onChange={this.changer} placeholder="Edit Depatartment"/>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
                Close
            </Button>
            <Button variant="success" onClick={this.update}>Update</Button>
            </Modal.Footer>
        </Modal>

          </>
    }
}
 
export default Display;
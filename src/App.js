import React from 'react';
import Display from './component/Display';
class App extends React.Component {
  state={studentList:[], name:"", dept:"", school:""}
  change=(e)=> {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  add=()=>{
    let {name, dept, school, studentList} = this.state
    this.setState({
      studentList: [...studentList, {name, dept, school}]
    })
  }

  delete=index=>{
    let {studentList} = this.state
    this.setState({studentList: studentList.filter((e,i)=>i!==index)})
  }

  edit=(update)=>{
    this.setState({
      studentList: update
    })
  }
  render() { 
    return <div className="container m-0 p-0 d-flex flex-column justify-content-center align-items-center">
      <h2 className="text-center">Student Portal</h2>
      <input className="form-control col-lg-7 col-md-7 mb-4" name="name" onChange={this.change} placeholder="Name"/>
      <input className="form-control col-lg-7 col-md-7 mb-4" name="school" onChange={this.change} placeholder="School"/>
      <input className="form-control col-lg-7 col-md-7 mb-4" name="dept" onChange={this.change} placeholder="Department"/>
      <button className="btn btn-success" onClick={this.add}>Add Student</button>
      <Display edit={this.edit} delete={this.delete} studentList={this.state.studentList}/>
    </div>;
    }
  }
export default App;
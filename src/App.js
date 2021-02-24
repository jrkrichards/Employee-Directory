import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
import SortButton from './components/Buttons/index';
import API from './utils/API'

export default class App extends React.Component {
  state = {
    result: []
  };

  componentDidMount() {
    API.start()
      .then(res => {
        const results = res.data.results;
        this.setState({result: results})
      })
      .catch(err => console.log(err))
  }

  sortAscending = () => {
    console.log('sort clicked')
    let result = this.state.result
    let employees = result.sort((a,b) => a.dob.age - b.dob.age)
    this.setState({
      result:employees
    }) 
  };

  genderFilterMale = () => {
    console.log('male filter clicked')
    let maleEmp = this.state.result.filter(employee => employee.gender === "male")
    this.setState({
      result:maleEmp
    }) 
  };
  
  genderFilterFemale = () => {
    console.log('female filter clicked')
    let femaleEmp = this.state.result.filter(employee => employee.gender === "female")
    this.setState({
      result:femaleEmp
    }) 
  };

  render() {
    console.log(this.state.result)
    return (
      <Wrapper>
      <Title>Employee Directory:</Title>
      <SortButton
        sort={this.sortAscending}
        filterMale={this.genderFilterMale}
        filterFemale={this.genderFilterFemale}
      />
      <div className='row'>
        {this.state.result.map((employee) => (
          <EmployeeCard
            id={employee.id.value}
            firstName={employee.name.first}
            lastName={employee.name.last}
            image={employee.picture.large}
            location={employee.location.state}
            age={employee.dob.age}
            email={employee.email}
            gender={employee.gender}
          />
        ))}
      </div>
    </Wrapper>
    )
  }
}

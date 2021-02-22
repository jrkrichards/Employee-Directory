import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import Title from './components/Title';
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
        console.log(results)
      })
      .catch(err => console.log(err))
  }

  // removeFriend = id => {
  //   console.log(`clicked ${id}`)
  //   const friends = this.state.friends.filter(friend => friend.id !== id)
  //   this.setState({
  //     friends
  //   }) 
  // };
  
  render() {
    console.log(this.state.result)
    return (
      <Wrapper>
      <Title>Employee Directory:</Title>
      {this.state.result.map((employee) => (
        <EmployeeCard
          // removeFriend={this.removeFriend}
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
    </Wrapper>
    )
  }
}

import React, { Component } from 'react';

class User extends Component {
  constructor (props) {
    super (props);

    this.state = {
      user: {
        firstname: '',
        lastname: ''
      },
      users: []
    };
  }

  onInputTypesChange = (event) => {
    // this.setState({[event.target.name]: event.target.value})
    
  }

  render () {
    return (
      <div>
        <div>
          <form>
            <div>
              <input type="text" name="firstname" onChange={this.onInputTypesChange}></input>
            </div>
            <div>
              <input type="text" name="lastname" onChange={this.onInputTypesChange}></input>
            </div>
            <button type="submit">submit</button>
          </form>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>firstname</th>
                <th>lastname</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.firstname}</td>
                <td>{this.state.lastname}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default User;
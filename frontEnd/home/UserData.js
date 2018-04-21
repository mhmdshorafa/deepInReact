import { Card, Icon } from 'semantic-ui-react';
import React, { Component } from 'react';
import { getStatistics } from '../actions/statisticsActions'

class UserData extends Component {

  constructor(props) {
    super(props);
    this.state = { statistics: []}
  }

  componentDidMount () {
    getStatistics()
    .then((result) => {
      this.setState({ statistics: result.data.statistics });
    })
  }

  render() {
    if (!this.state.statistics.length)
    return <div>loading ...</div>;
    const users = this.state.statistics.filter((data) => data.page_id !== null)
    .map((data) => data.page.user).map((user, i) => {
        return (
          <Card key = {i}>
            <Card.Content>
              <Icon name='book' />
              <Card.Header>
                {user.user_data.user_data.country}
              </Card.Header>
              <Card.Meta>
                {user.user_data.user_data.as}
              </Card.Meta>
              <Card.Description>
                {user.user_data.user_data.user_agent}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <ul>
                <li>
                  <div>
                    <label>visit date </label>
                    <span>{user.user_data.user_data.createdAt}</span>
                  </div>
                  <div>
                    <label> location: </label>
                    <span>{user.user_data.user_data.city}</span>
                  </div>
                </li>
              </ul>
            </Card.Content>
          </Card>
        );
    });
    return (
      <Card.Group>
        {users}
      </Card.Group>
    );

  }

};

export default UserData;

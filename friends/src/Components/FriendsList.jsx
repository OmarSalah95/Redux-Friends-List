import React from 'react'
import { getData } from '../Actions'
import { connect } from 'react-redux'

class FriendsList extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() { 
        console.log('friendList', this.props);
        return ( !this.props.fetchingFriends && this.props.friends.length
           ? this.props.friends.map(friend => <p key={friend.id} >{friend.name}</p>)
           : <h2>Collecting Data</h2>
        );
    }
}

 const mapStateToProps = (state) => ({
     friends: state.friends,
     fetchingFriends: state.fetchingFriends
 })
 
export default connect(mapStateToProps, { getData } )(FriendsList);
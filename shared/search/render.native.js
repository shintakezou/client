// @flow
import React, {Component} from 'react'
import UserSearch from './user-search/render'
import UserGroup from './user-search/user-group'
import type {Props} from './render'

class SearchRender extends Component<void, Props, void> {
  render () {
    if (this.props.showUserGroup) {
      return (
        <UserGroup
          selectedUsers={this.props.selectedUsers}
          userForInfoPane={this.props.userForInfoPane}
          onAddUser={this.props.onAddAnotherUserToGroup}
          onRemoveUserFromGroup={this.props.onRemoveUserFromGroup}
          onClickUserInGroup={this.props.onClickUserInGroup}
          onOpenPrivateGroupFolder={this.props.onOpenPrivateGroupFolder}
          onOpenPublicGroupFolder={this.props.onOpenPublicGroupFolder}
          onGroupChat={this.props.onGroupChat} />
      )
    } else {
      return (
        <UserSearch {...this.props} />
      )
    }
  }
}

export default SearchRender

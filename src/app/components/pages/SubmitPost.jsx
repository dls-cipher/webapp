import React from 'react';
import {browserHistory} from 'react-router';
import ReplyEditor from '../elements/ReplyEditor'

const formId = 'submitStory';
// const richTextEditor = process.env.BROWSER ? require('react-rte-image').default : null;
// const SubmitReplyEditor = ReplyEditor(formId, richTextEditor);
const SubmitReplyEditor = ReplyEditor(formId);

class SubmitPost extends React.Component {
  // static propTypes = {
  //     routeParams: React.PropTypes.object.isRequired,
  // }
  constructor() {
    super()
    this.success = (/*operation*/) => {
      // const { category } = operation
      localStorage.removeItem('replyEditorData-' + formId)
      browserHistory.push('/created')//'/category/' + category)
    }
  }

  render() {
    const {success} = this
    return (
      <div className="SubmitPost">
        <div className="row">
          <p>Please remember to read our community <a href="https://docs.smoke.io/#/contentguidelines" target="_blank"><u>content guidelines</u></a> before posting content. Copying and pasting content from other sites without crediting the author is a form of plagiarism which will be penalized by the community. To earn more Smoke create original content. </p>
        </div>
        <SubmitReplyEditor type="submit_story" successCallback={success}/>
      </div>
    );
  }
}

module.exports = {
  path: 'post',
  component: SubmitPost // connect(state => ({ global: state.global }))(SubmitPost)
};

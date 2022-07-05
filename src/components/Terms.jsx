import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import termsPath from '../assets/terms_and_conditions.md'
import privacyPath from '../assets/privacy_policy.md'
import { Button } from 'semantic-ui-react'


class Terms extends React.Component {
  constructor(props) {
    super(props)
    this.state = { terms: null }

  }

  // filePath = 

  componentWillMount() {
    const isTerms = this.props.isTerms;
    const filePath = isTerms ? termsPath : privacyPath
    
    fetch(filePath).then((response) => response.text()).then((text) => {
      this.setState({ terms: text })
    })
  }

  render() {
    return (
      <div className="content">
        <div><ReactMarkdown children={this.state.terms} /></div>
        <div>
          <Button onClick= {this.props.onClick}>Close Terms</Button>
        </div>
      </div>
    )
  }
}

export default Terms
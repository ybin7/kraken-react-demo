import React from "react";
import {
  Wrap,
  Header
} from './styles'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.goMine = this.goMine.bind(this)
    
  }

  goMine() {
    console.log('go')
  }

  render() {
    return <div>
      <Header> 首页 </Header>
      <Wrap>
        <div onClick={() => this.goMine()}>
          <div>
            nihao
          </div>
          <div>hhhh</div>
        </div>
      </Wrap>
    </div>
  }
}

export default Home

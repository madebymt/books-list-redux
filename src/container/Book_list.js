import React,{ Component } from 'react'
import { connect } from 'react-redux'

class BookList extends Component {
  renderList(){
    return this.props.books.map((books) =>{
      return (
        <li key={books.title} className='list-group-item'>{books.title}</li>
      )
    })
  }
  render(){
    return(
      <ul className='list-group col-sm-4'>
      {this.renderList()}

      </ul>
    )
  }
}

//
function mapStateToProps(state) {
  // whatever return will show as propss
return{
  books:state.books
}
}

// connect from react-dedux grab function and components produce it
// to container, <--- know the state contain by redux

export default connect(mapStateToProps)(BookList);

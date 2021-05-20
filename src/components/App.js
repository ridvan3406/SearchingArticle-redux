
import React from 'react'
import { connect } from 'react-redux'
import Search from './Search'
import Article from './Article'

export const App = (props) => {
  return (
    <div>
      <h1>REDUX ARTICLE LIST SEARCH APP</h1>
      <Search onSearch={props.onSearch}/>
      <Article articles={props.articles} searchTerm={props.searchTerm}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  articles: state.articleListReducer.articles,
  searchTerm: state.searchReducer.searchTerm,

})

const mapDispatchToProps = dispatch => ({
  onSearch: searchTerm => dispatch({ type: 'SEARCH_SET', searchTerm }),
});


export default connect(mapStateToProps, mapDispatchToProps)(App)

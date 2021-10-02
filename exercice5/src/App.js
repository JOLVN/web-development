import React from 'react';
import SearchView from './components/SearchView';
import SearchBar from './components/SearchBar';
import AdminView from './components/AdminView';
import axios from 'axios';


class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      productSearchString: "",
      adminModeActive: false,
    }
  }


  componentDidMount() {
    axios.get('http://localhost:7000/products')
      .then(response => {
        console.log(response);
        this.setState({ items: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidUpdate() {
    axios.get('http://localhost:7000/products')
      .then(response => {
        this.setState({ items: response.data })
      })
      .catch(err => {
        console.log(err);
      })
  }

  onSearchFieldChange = (event) => {
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, author, type, price, image) => {
    
    axios.post('http://localhost:7000/products', {
      id: 10,
      name: name,
      author: author,
      type: type,
      price: price,
      image: image
    })
    .then(response => {
      console.log(response);

      })
      .catch(err => {
        console.log(err);
      })
  }

  // deleteItem = itemId => this.setState({ items: this.state.items.filter(item => item.id !== itemId) })
  deleteItem = itemId => axios.delete(`http://localhost:7000/products/${itemId}`)
      .then(response => {
        console.log(response);
        // this.setState({ items: this.state.items.filter(item => item.id !== itemId) })
      })
      .catch(err => {
        console.log(err);
      })

  render()
  {
    let output =
      <>
        
        <SearchBar
          onSearchFieldChange={this.onSearchFieldChange} productSearchString={this.state.productSearchString}
        />
        
        
        <SearchView
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
        />
        
        <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        
      </>


    if(this.state.adminModeActive) {
      output = <AdminView
                  disableAdminMode={() => this.setState({adminModeActive: false}) }
                  addNewItem={ this.addNewItem }
                  items={ this.state.items }
                  deleteItem={ this.deleteItem }
               />;
    }



    return (
      <>
        { output }
      </>
    )
  }
}

export default App;
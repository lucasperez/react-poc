var React = require('react')
var GitHubUser = require('../services/GitHubUser')

var SearchUser = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var self = this;
    GitHubUser.getByUsername(this.refs.username.value).then(function(response){
      console.log(response)
      self.props.updateUser(response.data)
    })

    GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
      console.log(response)
      self.props.updateRepos(response.data)
    })
  },
  render: function() {
    return (
      <div className="jumbotron">
        <h1>GitHub Info</h1>
        <div className="row">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                ref="username" 
                type="text"
                className="form-control"
                placeholder="Ex: lucasperez"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary">Buscar
            </button>
          </form>
        </div>
      </div>
    );
  }
})

module.exports = SearchUser;
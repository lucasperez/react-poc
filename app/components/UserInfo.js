var React = require('react')

var UserInfo = React.createClass({
  render: function() {
    if(this.props.user && this.props.repos) {
      var repositories = [];
      for (var i = 0; i < this.props.repos.length; i++) {
        repositories.push(
          <tr key={i}>
            <td>{this.props.repos[i].name}</td>
            <td>{this.props.repos[i].clone_url}</td>
          </tr>
        )

      }
      return (
        <div className="row">
          <div className="col-lg-4">
            <img className="img-circle" src={this.props.user.avatar_url} alt="avatar" width="140" height="140" />
            <h2>{this.props.user.login}</h2>
            <p>{this.props.user.name}</p>
            <p>Followers: {this.props.user.followers} / Following: {this.props.user.following}</p>
            <p><a className="btn btn-default" href={this.props.user.html_url} role="button">View Details</a></p>
          </div>
          <div className="col-lg-8">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Url</th>
                </tr>
              </thead>
              <tbody>
                {repositories}
              </tbody>
            </table>
          </div>
        </div>
      )  
    }
    return(null)
  }
})

module.exports = UserInfo
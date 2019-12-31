import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {

      @Prop() theuser: String;
      @State() blogs: Array<any>;

      componentWillLoad() {
          console.log(this)
          fetch('https://warm-anchorage-88191.herokuapp.com/',{
              method: 'POST',
              headers: {"Content-Type": "application/json"},
              body: JSON.stringify({
                  query: `query{
                             user(username: "alexmerced"){
                                 blog{
                                     title
                                 }
                            }
                      }`
              })
          })
          .then(res => res.json())
          .then(json => {
              console.log(json)
              this.blogs = json.data.user.blog
          })

      }



  render() {
    return (
      <div class='app-home'>
      <h1>Blogs</h1>
      {this.blogs.map(blog => <h2>{blog.title}</h2>)}
      </div>
    );
  }
}

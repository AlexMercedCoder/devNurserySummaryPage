import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
    @Prop() theuser: String;
    @State() todos: Array<any>;

    componentWillLoad() {
        console.log(this)
        fetch('https://warm-anchorage-88191.herokuapp.com/',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                query: `query{
                           user(username: "alexmerced"){
                               todos{
                                   entry
                               }
                          }
                    }`
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            this.todos = json.data.user.todos
        })

    }



  render() {
  return (
    <div class='app-home'>
    <h1>Todos</h1>
    {this.todos.map(blog => <h2>{blog.entry}</h2>)}
    </div>
  );
  }
}

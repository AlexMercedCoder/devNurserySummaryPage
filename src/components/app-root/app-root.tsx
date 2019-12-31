import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  @State() username: String;

  componentWillLoad() {
      const userInfo = JSON.parse(window.localStorage.getItem('devNursery'));
      this.username = userInfo.username;
      console.log(this.username);

  }



  render() {
    return (
      <div>
        <header>
          <h1 class="logo"><span>dev</span>Nursery</h1>
          <h2>User Summary Page</h2>
        </header>

        <main>

        <app-home theuser="alexmerced"/>
        <app-profile theuser="alexmerced"/>

        </main>

        <h4>Application made by Alex Merced of AlexMercedCoder.com using GraphQL/ApolloServer/StencilJS</h4>
      </div>
    );
  }
}

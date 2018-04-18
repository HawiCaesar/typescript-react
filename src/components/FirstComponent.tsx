import * as React from 'react';

let Logo ='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-461264.png';

export class FirstComponent extends React.Component <{}> {
  render() {
    return (
        <div>
            {/* React components must have a wrapper node/element */}
            <h1>A Simple React Component Example with Typescript</h1>
            <div>
                <img width={1200} height={600} src={Logo} />
            </div>
            <p>
              This is a old and new component which shows the logrocket
              logo. For more info on Logrocket, please visit Https://logrocket.com
            </p>
        </div>
    );
  }
}

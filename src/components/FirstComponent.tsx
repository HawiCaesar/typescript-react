import * as React from 'react';

let Logo ='https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-461264.png';

export class FirstComponent extends React.Component <{}> {
  render() {
    return (
        <div>
            {/* React components must have a wrapper node/element */}
            <h1 style={{textAlign: 'center'}}>
              A Simple React Component Example with Typescript
            </h1>
            <div>
                <img
                    style={{marginLeft: '8%'}}
                    width={1200}
                    height={600}
                    src={Logo}
                />
            </div>
        </div>
    );
  }
}

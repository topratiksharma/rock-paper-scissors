
import * as React from 'react';
import Button from '@material-ui/core/Button';

interface Props {
   name:string
}

class App extends React.Component<Props> {
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Initial Commit
        </h1>
      </>
    );
  }
}

export default App;

import { useState } from 'react';

import { useToggle } from 'hooks/useToggle';
import { Button } from 'ui-elements/Button';

function App() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div className="app">
      <Button text="Click me" onClick={() => toggleVisible()} />
      {isVisible && <p>Visible</p>}
    </div>
  );
}

export default App;

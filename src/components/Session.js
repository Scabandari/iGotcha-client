import React, { useEffect, useState } from 'react';
import { Card, Icon, Button } from 'semantic-ui-react';

const Session = latestSession => {
  //   const [latestSession, setSession] = useState({});
  //   const [auth, email] = useProtectedRoute();

  return (
    <div>
      <h1>Latest Session</h1>
      <Card
        header={latestSession.title}
        description="You can leave some feedback on your latest session."
        extra={extra}
      >
        <Card.Content extra>
          <a>
            <Icon name="user" />
            22 Friends
          </a>
        </Card.Content>
      </Card>
    </div>
  );
};

export default Session;

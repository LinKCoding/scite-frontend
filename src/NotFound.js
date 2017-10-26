import React from 'react'
import { Grid, Segment, Image } from 'semantic-ui-react'

const NotFound = () => {
  return (
    <Grid>
      <Grid.Column width={1}>
      </Grid.Column>
      <Grid.Column width={14}>
        <Grid.Row>
          <Grid centered columns={2}>
            <Image src="/Scite-icon.png" position="center"/>
          </Grid>
        </Grid.Row>
        <Grid.Row>
          <Segment>
            "Sorry, can't find your page, are you sure that's what you wanted?"
          </Segment>
        </Grid.Row>
      </Grid.Column>
      <Grid.Column width={1}>
      </Grid.Column>
    </Grid>
  )
}

export default NotFound

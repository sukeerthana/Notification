import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';

export default class SnackbarExampleSimple extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openDialog:false,
      card:false
    };
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
    alert('request closed');
  };
  

  handleClose = () => {
    this.setState({openDialog: false});
  };
handleActionTouchTap=()=>{
   
this.setState({openDialog: true});
this.setState({open: false});

  
}
  render() {
    const actions = [
   
      <RaisedButton
        label="Cancel "
       
        onTouchTap={this.handleClose}
      />,
     
    ];
    return (
      <div>
        <RaisedButton
          onTouchTap={this.handleTouchTap}
          label="Notifiication"
        />
        <Snackbar
          open={this.state.open}
          message="Request from suki"
           action="See the request"
            onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />
        <Dialog className='pull-center'
          title="Request Information"

          actions={actions}
          modal={false}
          open={this.state.openDialog}
          onRequestClose={this.handleClose}
        >
          <Paper zDepth={3}>
          <Card >
    <CardHeader
      title="Request from suki to play a game"
      
      // actAsExpander={true}
      showExpandableButton={true}
      >
      
    </CardHeader>
   
    <CardText expandable={true}>
      Players are suki,yazi,sam,jeevan<br/>
      topic is current affairs
    </CardText>
    <CardActions>
    <RaisedButton label="Accept" primary={true}/>
      <RaisedButton label="Reject" />
    </CardActions>
  </Card></Paper>
  <Paper zDepth={5}>
   <Card >
    <CardHeader
      title="Request from yazi to play a game"
      
      // actAsExpander={true}
      showExpandableButton={true}
    />
   
    <CardText expandable={true}>
      Players are suki,yazi,sam,jeevan<br/>
      topic is current affairs
    </CardText>
     <CardActions>
      <RaisedButton label="Accept" primary={true}/>
      <RaisedButton label="Reject" />
    </CardActions>
  </Card></Paper>
        </Dialog>
         
       
      </div>
    );
  }
}
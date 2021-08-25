import { Container, Grid, Paper, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Button, TextField } from '@material-ui/core'
import { useState } from 'react'

function all() {
    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')
    
   
    
    const handleSubmit=(e)=>{
        e.preventDefault()


 



        if (title) {
            console.log(title)
        }
        
        if (detail) {
            console.log(detail)
        }
    }

    return (
        <>
           <Container maxWidth>
           <Grid container spacing={0} style={{marginTop: 10}} className='info'>

<Grid item xs='12'>
<Grid container>
<Grid item xs='4'>
<Paper style={{boxShadow: 'none'}}>
<span className='headingtag'>Welcome back Sharon!</span>
</Paper>
<Typography>Have Any Questions Drop them here!</Typography>
</Grid>
<Grid item xs='4'>
<Paper  style={{boxShadow: 'none'}}>
<NotificationsIcon className='notify'/>
</Paper>
</Grid>
<Grid item xs='4'>
<Paper style={{height:'200px',display: 'flex',justifyContent: 'flex-end',boxShadow: 'none'}}>
<Avatar src='/Bleach.jpg' className='avatar'/>
    Angella
</Paper>
</Grid>
</Grid>

<Grid container>

<Grid item xs='4'>
  
    <img src='/Bleach.jpg' className='imageicon'/>
 
   
</Grid>

<Grid item xs='8'>
<span>Sharon</span>
<Paper style={{height:'130px', backgroundColor: '#d9e0e8', textAlign: 'center', verticalAlign: 'middle',boxShadow:'none', marginTop: '5px'}}>
<form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
label='Description'
variant='outlined'
color='primary'
fullWidth
multiline
rows={4}
onChange={(e)=> setTitle(e.target.value)}
                />
                <Button
                type='text'
               color='primary'
                variant='contained'
                id='btntext'
               >
                    Submit
                </Button>
            </form>
   
    </Paper>
</Grid>


<Grid item xs='4' style={{marginTop: '80px'}} >
    <Paper style={{boxShadow: 'none'}}>
    <img src='/mk.jpg' className='imageicon'/>
    
    </Paper>
</Grid>


<Grid item xs='8' style={{marginTop: '80px'}}>

<span >Mathew</span>
<Paper style={{height:'130px', backgroundColor: '#10bc65', textAlign: 'center', verticalAlign: 'middle',boxShadow: 'none', marginTop: '5px'}}>
<form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <TextField 
label='Description'
variant='outlined'
color='primary'
fullWidth
multiline
rows={4}

onChange={(e)=> setDetail(e.target.value)}
gutterBottom
                />
                <Button
                type='text'
               
                variant='contained'
                id='btntext2'
               >
                    Submit
                </Button>
            </form>

    
    </Paper>
</Grid>

</Grid>

   
</Grid>







</Grid>
           </Container> 
        </>
    )
}

export default all

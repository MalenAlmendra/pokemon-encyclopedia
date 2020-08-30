
import { createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    spacing: 4,
    palette:{
        common:{
            black:'#222224',
            white:'#f0f0f0'
        },
        primary:{
            main:"#003A70",
            light:'#FFCB05',
            dark:'#ee1515',
            contrastText:'#3D7DCA'
        }
    }
  }) 

export default theme
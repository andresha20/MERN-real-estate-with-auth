import { TextField, Grid, InputAdornment, IconButton} from "@material-ui/core"
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

const Input = ({ handleChange, showPassword, name, half, label, autoFocus, type }) => {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField 
                name={name}
                onChange={handleChange}
                label={label}
                type={type}
                autoFocus={autoFocus}
                variant='outlined'
                required
                fullWidth
                InputProps={name === 'password' ? {
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton onClick={showPassword}>{type !== 'password' ? <Visibility/> : <VisibilityOff/>}</IconButton>
                        </InputAdornment>
                    )} : null}
            />
        </Grid>
    )
}

export default Input;
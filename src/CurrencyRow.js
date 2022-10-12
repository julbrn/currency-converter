import React from 'react';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';

const InputLabel2 = styled(InputLabel) `
  &.MuiInputLabel-root {
    color: rgba(208, 128, 214, .4) ;
  }
  &.Mui-focused {
    color: #dc9fdf ;
  }`;

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #dc9fdf',
        fontSize: 16,
        color: '#5A5A5A',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            'Quicksand',
            'sans-serif',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#ffcf87',
            boxShadow: '0 0 0 0.2rem #fce6c0 ',
        },
    },
}));

export default function CurrencyRow() {
    const [currency, setCurrency] = React.useState('');
    const handleChange = (event) => {
        setCurrency(event.target.value);
    };
    return (
        <div>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel2 htmlFor="demo-customized-textbox">Sum</InputLabel2>
                <BootstrapInput id="demo-customized-textbox" />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="standard">
                <InputLabel2 htmlFor="demo-customized-select-native">Currency</InputLabel2>
                <NativeSelect
                    id="demo-customized-select-native"
                    value={currency}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                >
                    <option aria-label="None" value="" />
                    <option value={10}>RUB</option>
                    <option value={20}>EUR</option>
                    <option value={30}>USD</option>
                </NativeSelect>
            </FormControl>
        </div>
    );
}
import React, { useState } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 20,
    }
}));

const AddProduct = ({ addProduct }) => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [onSale, setOnSale] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const classes = useStyles();

    return (
        <form className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="center"
                className={classes.root}
            >
                <FormControl>
                    <InputLabel htmlFor='name'>Product Name: </InputLabel>
                    <Input 
                        id='name' 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="img">Image Link: </InputLabel>
                    <Input 
                        id='img'
                        value={img}
                        onChange={(e) => {setImg(e.target.value)}}
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='price'>Price: </InputLabel>
                    <Input 
                        id='price'
                        value={price}
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </FormControl>
                <FormControl>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={onSale}
                                onChange={(e)=>{setOnSale(!onSale)}}
                                name='onSale'
                                color='primary'
                            />
                        }
                        label='On Sale'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='quantity'>Quantity: </InputLabel>
                    <Input
                        id='quantity'
                        value={quantity}
                        onChange={(e)=>{setQuantity(e.target.value)}}
                    />
                </FormControl>
            </Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                className={classes.root}
            >
                <TextField
                    id='description'
                    label='Description: '
                    style={{ margin: 10, width: "60%" }}
                    placeholder="Description"
                    margin="normal"
                    InputLabelProps={{ shrink: true, }}
                    multiline={true}
                    rows="5"
                    value={description}
                    onChange={(e)=>{setDescription(e.target.value)}}
                />
            </Grid>
            <Grid
                container
                direction="row"
                justify="center"
                className={classes.root}
            >
                <Button 
                    onClick={() => {
                        addProduct(name, img, price, description, onSale, quantity);
                        setName('');
                        setPrice(0);
                        setDescription('');
                        setQuantity(0);
                        setOnSale(false);
                        setImg('');
                    }}
                    variant="outlined"
                    color="secondary"
                >
                    Add Product
                </Button>
            </Grid>
        </form>
    )
}

export default AddProduct

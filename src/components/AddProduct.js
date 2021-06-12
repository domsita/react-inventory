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
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 75,
        padding: 20,
    },
    input: {
        margin: 20,
    }
}));

const AddProduct = ({ product, addProduct, editProduct }) => {
    const [name, setName] = useState(product[0] ? product[0].name : "");
    const [img, setImg] = useState(product[0] ? product[0].img : "");
    const [price, setPrice] = useState(product[0] ? product[0].price : 0);
    const [description, setDescription] = useState(product[0] ? product[0].description : "");
    const [onSale, setOnSale] = useState(product[0] ? product[0].onSale : false);
    const [quantity, setQuantity] = useState(product[0] ? product[0].quantity : 0);
    const [category, setCategory] = useState(product[0] ? product[0].category : "");

    const classes = useStyles();

    let history = useHistory();

    const handleClick = () => {
        if (product[0]) {
            editProduct(product[0].id, name, img, price, description, onSale, quantity, category);
        } else {
            addProduct(name, img, price, description, onSale, quantity, category);
        }
        setName('');
        setPrice(0);
        setDescription('');
        setQuantity(0);
        setOnSale(false);
        setImg('');
        setCategory('');
        history.push("/products");   
    }

    return (
        <form className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="center"
                className={classes.root}
            >
                <FormControl className={classes.input}>
                    <InputLabel htmlFor='name'>Product Name: </InputLabel>
                    <Input 
                        id='name' 
                        value={name} 
                        onChange={(e)=>{setName(e.target.value)}} 
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor="img">Image Link: </InputLabel>
                    <Input 
                        id='img'
                        value={img}
                        onChange={(e) => {setImg(e.target.value)}}
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor='price'>Price: </InputLabel>
                    <Input 
                        id='price'
                        value={price}
                        onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </FormControl>
                <FormControl className={classes.input}>
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
                <FormControl className={classes.input}>
                    <InputLabel htmlFor='quantity'>Quantity: </InputLabel>
                    <Input
                        id='quantity'
                        value={quantity}
                        onChange={(e)=>{setQuantity(e.target.value)}}
                    />
                </FormControl>
                <FormControl className={classes.input}>
                    <InputLabel htmlFor='category'>Category: </InputLabel>
                    <Input
                        id='category'
                        value={category}
                        onChange={(e)=>{setCategory(e.target.value)}}
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
                    className={classes.input}
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
                    onClick={handleClick}
                    variant="outlined"
                    color="secondary"
                >
                    {product[0] ? "Edit Product" : "Add Product"}
                </Button>
            </Grid>
        </form>
    )
}

export default AddProduct

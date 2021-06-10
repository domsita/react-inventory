import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 75,
    }
}));

const Products = ({ products, removeProduct }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {products.map((product) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <Product product={product} removeProduct={removeProduct} />
                        </Grid>
                        )
                    })}
            </Grid>
        </div>
    )
}

export default Products

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Product from './Product';
import QuickView from './QuickView';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 75,
    },
    categories: {
        margin: 10
    }
}));

const Products = ({ inputData, products, removeProduct, filterByCategory }) => {
    const classes = useStyles();
    const [quickView, setQuickView] = useState(false);

    const getProductCategories = () => {
        let categories = new Set();
        inputData.forEach((product) => {
            categories.add(product.category);
        });
        return [...categories];
    }
    
    const categories = getProductCategories();

    return (
        <div className={classes.root}>
            <Button
                onClick={() => {
                    setQuickView(!quickView);
                }}
                variant="contained"
                color="secondary"
            >
                {quickView ? "Hide Quick View" : "Show Quick View"}
            </Button>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Typography variant="h5">Categories: </Typography>
                {categories.map((category) => {
                    return (
                        <Button
                            className={classes.categories}
                            onClick={() => {
                                filterByCategory(category)
                            }}
                            variant="contained"
                            color="primary"
                        >
                            {category}
                        </Button>
                    )
                })}
                <Button 
                    className={classes.categories}
                    onClick={() => {
                        filterByCategory("all")
                    }}
                    variant="contained"
                    color="primary"
                >
                    All
                </Button>
            </Grid>
            <Grid 
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {products.map((product) => {
                    if (quickView) {
                        return (
                            <QuickView product={product} removeProduct={removeProduct} />
                        )
                    }

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

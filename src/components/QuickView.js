import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    containerGrid: {
        margin: 10,
        padding: 10,
    },
    btn: {
        width: '100%',
        margin: 5,
    }
}));

const QuickView = ({ product, removeProduct }) => {
    const classes = useStyles();
    return (
        <Grid className={classes.containerGrid}>
            <Card>
                <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body1">QTY: {product.quantity}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                    <Typography variant='body2'>On Sale: {product.onSale ? "yes" : "no"}</Typography>
                    <Typography variant="body2">Category: {product.category}</Typography>
                    <Grid container>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to={`/edit-product/${product.id}`}
                            className={classes.btn}
                        >
                            Edit Product
                        </Button>
                    </Grid>
                    <Grid container>
                        <Button
                            variant="contained"
                            color="secondary"
                            onClick={()=>{removeProduct(product.id)}}
                            className={classes.btn}
                        >
                            Remove Product
                        </Button>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default QuickView

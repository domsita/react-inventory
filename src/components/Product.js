import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 75,

    },
    onSale: {
        color: 'red',
        padding: 20,
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    card: {
        margin: 10,
    },
    price: {
        float: 'right',
    },
    productHeading: {
        padding: 20,
    },
    accordionHeading: {
        margin: 10,
    },
    removeButton: {
        marginTop: 10, 
        width: '100%',
    }
}));

const Product = ( { product, removeProduct } ) => {
    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardContent>                   
                    <CardMedia
                        className={classes.media}
                        image={product.img} 
                        title={product.name} 
                    />
                    <Typography 
                        variant='h5' 
                        className={product.onSale ? classes.onSale : classes.productHeading}
                    >
                        {product.name} {product.onSale ? '- On Sale' : ''}
                    </Typography>
                    <Typography 
                        variant='h6' 
                        color='textSecondary'
                        className={classes.price}
                    >
                        {product.price}
                    </Typography>
                    <Typography 
                        variant='h6' 
                        color='textSecondary'
                    >
                        QTY: {product.quantity}
                    </Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className={classes.accordionHeading}
                        >
                            <Typography variant='body2'>
                                Read Description
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant='body2'>
                                {product.description}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => {removeProduct(product.id)}}
                        className={classes.removeButton}
                    >
                        Remove Product
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}

export default Product

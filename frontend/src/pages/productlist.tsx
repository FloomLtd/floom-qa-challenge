import React, { ReactNode } from 'react';
import { PageProps } from 'gatsby';
import '../css/app.css'

import {
  Container,
  Grid,
  Button,
  Card
} from '@material-ui/core';

import ProductService from '@/services/product.service';
import Title from '@/components/Title';
import Loader from '@/components/Loader';

interface state {
  products?: any,
  isLoaded: boolean
};

interface props {};

class ProductList extends React.Component<props, state> {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      isLoaded: false,
    };
  }

  async componentDidMount(): Promise<void> {
    const productService = new ProductService();
    const products = await productService.getProducts();

    this.setState({
      products,
      isLoaded: true,
    });

    console.log(products);
  }

  showDetails(id: string): void {
    let path = `/productdetail?i=${id}`;
    window.open(path, "_self");
  }

  _renderProducts() {
    return this.state.products.map(el => {
      return (
        <Grid container item xs>
          <Card>
            <div><b>{el.name}</b></div>
            <Button onClick={() => this.showDetails(el.id)}>go to details</Button>
          </Card>
        </Grid>
      );
    })
  }

  render(): ReactNode {
    let loader: ReactNode;

    if (!this.state.isLoaded) {
      loader = <Loader text="loading" />;
    } else {
      loader = null;
    }

    return (
      <Container>
        <Title title="Product List" />
        {loader}
        <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
        {this._renderProducts()}
        </Grid>
      </Container>

    );
  }

}

export default ProductList;

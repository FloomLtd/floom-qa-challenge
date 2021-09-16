import React, { ReactNode } from 'react';
import { PageProps } from 'gatsby';
import '../css/app.css'

import {
  Container,
  Grid,
  Button,
  Card,
  Paper
} from '@material-ui/core';

import ProductService from '@/services/product.service';
import Title from '@/components/Title';
import Loader from '@/components/Loader';

interface state {
  product?: any,
  isLoaded: boolean
};

interface props {
  location?: {
    search?: string
  }
};

class ProductList extends React.Component<props, state> {

  constructor(props) {
    super(props);

    this.state = {
      product: null,
      isLoaded: false,
    };
  }

  async componentDidMount(): Promise<void> {
    const productService = new ProductService();

    console.log(this.props);
    const query = new URLSearchParams(this.props?.location?.search);
    const product = await productService.getProductById(query.get("i"));

    this.setState({
      product,
      isLoaded: true,
    });

    console.log(product);
  }

  _renderProduct() {

    if (this.state.product) {
      const product = this.state.product;
      return (
        <Paper>
          <h3>{product.name}</h3>
          <p>id: {product.name}</p>
          <p>createdAt: {product.createdAt}</p>
        </Paper>
      );
    }
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
        <Title title="Product Details" />
        <a className="back" href="/productlist">BACK</a>
        {loader}
        { this._renderProduct() }
      </Container>
    );
  }

}

export default ProductList;

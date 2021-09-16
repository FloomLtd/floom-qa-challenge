import axios from 'axios';

export default class ProductService {

  private baseUrl: string = '';

  constructor() {
    this.baseUrl = 'http://localhost:8080';
  }

  public async getProducts(): Promise<any> {
    return axios
      .get(`${this.baseUrl}/products`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }

  public async getProductById(itemId): Promise<any> {
    if (!itemId) {
      throw new Error('"id" is a required property');
    }
    return axios
      .get(`${this.baseUrl}/products/${itemId}`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(err);
      });
  }
}

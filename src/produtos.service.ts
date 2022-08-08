import { Body, Injectable, Param } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductsService{
    constructor(
        @InjectModel(Product)
        private ProductsModel: typeof Product
    ){}

    async getAll(): Promise<Product[]> {
        return this.ProductsModel.findAll();
    };

    async getOne(id: number): Promise<Product> {
        return this.ProductsModel.findByPk(id);
    };

    async create(product: Product) {
        this.ProductsModel.create(product)
    };

    async update(product: Product): Promise<[number]> {
        return this.ProductsModel.update(product, {
            where: {
                id: product.id
            }
        });
    }

    async delete(id: number){
        const product: Product = await this.getOne(id);
        if(product != null){
            product.destroy();
        }
        
    };
}
import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./produtos.service";

@Controller('produtos')
export class ProdutosController{
    constructor(private ProductsService: ProductsService){

    }

    @Get()
    async getAll(): Promise<Product[]> {
        return this.ProductsService.getAll();
    }

    @Get(':id')
    async getOne(@Param() params): Promise<Product> {
        return this.ProductsService.getOne(params.id);
    }

    @Post()
    async create(@Body() produto: Promise<Product>) {
        this.ProductsService.create(await produto)
    }

    @Put()
    async update(@Body() product: Product){
        this.ProductsService.update(await product)
    }

    @Delete(':id')
    async delete(@Param() params){
        this.ProductsService.delete(params.id)
    }
}
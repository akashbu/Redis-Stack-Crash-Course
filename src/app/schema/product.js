import {client} from '../_lib/redis'

import {Repository, Schema} from 'redis-om'

const productSchema = new Schema('product', {
    title : {type:'text', sortable: true},
    price : {type:'number', sortable: true},
    count : {type:'number'},
    colors : {type:'string[]'},
    size : {type:'string'},
    img : {type:'string'}
})

const productRepository = new Repository(productSchema, client)

productRepository.createIndex()

export { productRepository }
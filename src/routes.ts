import { Router }                    from 'express'
import multer                        from 'multer'
import { CreateUserController }      from './controllers/User/CreateUserController'
import { AuthUserController }        from './controllers/User/AuthUserController'
import { DetailUserController }      from './controllers/User/DetailUserController'
import { isAuth }                    from './middlewares/isAuth' 
import { CreateCategoryController }  from './controllers/Category/CreateCategoryController'
import { ListAllCategoryController } from './controllers/Category/ListAllCategoryController'
import { CreateProductController }   from './controllers/Product/CreateProductController'
import { ListAllProductController }  from './controllers/Product/ListAllProductController'
import { DeleteProductController }   from './controllers/Product/DeleteProductController'
import { ListByCategoryController }  from './controllers/Product/ListByCategoryController'
import { CreateOrderController }     from './controllers/Order/CreateOrderController'
import { SendOrderController }       from './controllers/Order/SendOrderController'
import { DeleteOrderController }     from './controllers/Order/DeleteOrderController'
import { ListOrderController }       from './controllers/Order/ListOrderController'
import { DetailOrderController }     from './controllers/Order/DetailOrderController'
import { FinishOrderController }     from './controllers/Order/FinishOrderController'
import { AddItemOrderController }    from './controllers/Order/AddItemOrderController'
import { DeleteItemController }      from './controllers/Order/DeleteItemController'
import config                        from './config/multer'

const router = Router();

const upload = multer(config.uploadConfig("./tmp"))

// -- USERS --
router.post('/users',           new CreateUserController().handle)
router.post('/session',         new AuthUserController().handle)
router.get('/userInfo',         isAuth, new DetailUserController().handle)

// -- CATEGORY --
router.post('/category',        isAuth, new CreateCategoryController().handle)
router.get('/categoryInfo',     isAuth, new ListAllCategoryController().handle)

// -- PRODUCT --
router.post('/product',         isAuth, upload.single('file'), new CreateProductController().handle)
router.delete('/product/:id',   isAuth, new DeleteProductController().handle)
router.get('/productInfo',      isAuth, new ListAllProductController().handle)
router.get('/product/category', isAuth, new ListByCategoryController().handle)

// -- ORDER --
router.post('/order',           isAuth, new CreateOrderController().handle)
router.put('/order/send',       isAuth, new SendOrderController().handle)
router.delete('/order',         isAuth, new DeleteOrderController().handle)
router.get('/order',            isAuth, new ListOrderController().handle)
router.get('/order/detail',     isAuth, new DetailOrderController().handle)
router.put('/order/finish',     isAuth, new FinishOrderController().handle)
router.post('/item',            isAuth, new AddItemOrderController().handle)
router.delete('/item',          isAuth, new DeleteItemController().handle)

export {router};
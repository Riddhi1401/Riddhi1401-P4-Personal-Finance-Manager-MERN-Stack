import express from 'express';
import { loginControllers, registerControllers } from '../controllers/userController.js';
import {saveFinanceProfile} from '../controllers/financeController.js';
import {addTransactionController, getAllTransactionController, deleteTransactionController, updateTransactionController} from '../controllers/transactionController.js';
const router = express.Router();

router.route("/register").post(registerControllers);

router.route("/login").post(loginControllers);

router.route("/Finance").port(saveFinanceProfile);

router.route("/home").port(addTransactionController);

router.route("/home").port(getAllTransactionController);

router.route("/home").port(deleteTransactionController);

router.route("/home").port(updateTransactionController);
export default router;
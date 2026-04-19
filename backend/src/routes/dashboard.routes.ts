import express from "express";
import { getSummary, getCategoryStats, getMonthlyTrends, getRecentRecords } from "../controllers/dashboard.controllers.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Dashboard
 *   description: Dashboard summary and analytics
 */

/**
 * @swagger
 * /api/dashboard/summary:
 *   get:
 *     summary: Get total income, total expense and net balance
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Summary data
 *         content:
 *           application/json:
 *             example:
 *               totalIncome: 15000
 *               totalExpense: 5000
 *               netBalance: 10000
 */
router.get("/summary", protect, authorize("admin", "analyst"), getSummary);

/**
 * @swagger
 * /api/dashboard/category:
 *   get:
 *     summary: Get category-wise totals
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Category stats
 *         content:
 *           application/json:
 *             example:
 *               - _id: salary
 *                 total: 10000
 *               - _id: freelance
 *                 total: 5000
 */
router.get("/category", protect, authorize("admin", "analyst"), getCategoryStats);

/**
 * @swagger
 * /api/dashboard/trends:
 *   get:
 *     summary: Get monthly income/expense trends
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Monthly trends
 *         content:
 *           application/json:
 *             example:
 *               - _id:
 *                   year: 2026
 *                   month: 4
 *                 total: 12000
 *               - _id:
 *                   year: 2026
 *                   month: 5
 *                 total: 8000
 */
router.get("/trends", protect, authorize("admin", "analyst"), getMonthlyTrends);

/**
 * @swagger
 * /api/dashboard/recent:
 *   get:
 *     summary: Get recent 5 financial records
 *     tags: [Dashboard]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Recent records
 *         content:
 *           application/json:
 *             example:
 *               - _id: 69d134f55c3df92eb8864c43
 *                 amount: 5000
 *                 type: income
 *                 category: salary
 *                 date: 2026-04-05T00:00:00.000Z
 *                 note: Freelance work
 */
router.get("/recent", protect, authorize("admin", "analyst", "viewer"), getRecentRecords);

export default router;
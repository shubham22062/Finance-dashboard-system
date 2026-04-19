import express from "express";
import { createRecord, getRecords, getRecordById, updateRecord, deleteRecord } from "../controllers/record.controllers.js";
import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Records
 *   description: Financial Records management
 */

/**
 * @swagger
 * /api/records:
 *   post:
 *     summary: Create a new record
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - amount
 *               - type
 *               - category
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 5000
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *                 example: income
 *               category:
 *                 type: string
 *                 example: salary
 *               date:
 *                 type: string
 *                 example: 2026-04-05
 *               note:
 *                 type: string
 *                 example: Freelance work
 *     responses:
 *       201:
 *         description: Record created successfully
 */
router.post("/", protect, authorize("admin"), createRecord);

/**
 * @swagger
 * /api/records:
 *   get:
 *     summary: Get all records
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Filter by type (income/expense)
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of records per page
 *     responses:
 *       200:
 *         description: List of records
 */
router.get("/", protect, authorize("admin", "analyst", "viewer"), getRecords);

/**
 * @swagger
 * /api/records/{id}:
 *   get:
 *     summary: Get a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Record ID
 *     responses:
 *       200:
 *         description: Record found
 *       404:
 *         description: Record not found
 */
router.get("/:id", protect, authorize("admin", "analyst", "viewer"), getRecordById);

/**
 * @swagger
 * /api/records/{id}:
 *   patch:
 *     summary: Update a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *                 example: 6000
 *               type:
 *                 type: string
 *                 enum: [income, expense]
 *                 example: income
 *               category:
 *                 type: string
 *                 example: bonus
 *               note:
 *                 type: string
 *                 example: Updated note
 *     responses:
 *       200:
 *         description: Record updated
 *       404:
 *         description: Record not found
 */
router.patch("/:id", protect, authorize("admin"), updateRecord);

/**
 * @swagger
 * /api/records/{id}:
 *   delete:
 *     summary: Soft delete a record by ID
 *     tags: [Records]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Record ID
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 */
router.delete("/:id", protect, authorize("admin"), deleteRecord);

export default router;
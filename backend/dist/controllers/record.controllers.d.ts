import type { Response } from "express";
import type { AuthRequest } from "../middleware/auth.middleware.js";
export declare const createRecord: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getRecords: (req: AuthRequest, res: Response) => Promise<void>;
export declare const getRecordById: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateRecord: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteRecord: (req: AuthRequest, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=record.controllers.d.ts.map
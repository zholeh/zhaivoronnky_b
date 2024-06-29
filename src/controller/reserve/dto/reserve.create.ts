import { OmitType } from "@nestjs/swagger";
import { ReserveCreateSchema } from "../../../schema";
import { ReserveModel } from "./reserve.model";

export class ReserveCreate extends OmitType(ReserveModel, ["id", "createdAt", "deletedAt", "updatedAt"]) implements ReserveCreateSchema {
}
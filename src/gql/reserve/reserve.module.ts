import { Module } from "@nestjs/common";
import { ReserveFieldResolver } from "./resolver/field.resolver";
import { ReserveMutationResolver } from "./resolver/mutation.resolver";
import { ReserveQueryResolver } from "./resolver/query.resolver";
import { StoreModule } from "../../store/store.module";

@Module({
  imports: [StoreModule],
  providers: [ReserveQueryResolver, ReserveFieldResolver, ReserveMutationResolver],
})
export class ReserveModule {}
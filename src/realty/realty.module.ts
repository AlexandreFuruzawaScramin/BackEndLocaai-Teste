import { Module } from '@nestjs/common';
import { RealtyEntity } from 'src/db/entities/realty.entity';
import { RealtyController } from './realty.controller';
import { RealtyService } from './realty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';

@Module({
  controllers: [RealtyController],
  imports: [TypeOrmModule.forFeature([RealtyEntity, UserEntity])],
  providers: [RealtyService],
})
export class RealtyModule {}

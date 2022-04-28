import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { configuration } from '@core/index'

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: false, load: [configuration] })],
})
export class AppModule {}

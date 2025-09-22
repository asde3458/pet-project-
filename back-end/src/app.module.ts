import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SinhVienModule } from './SinhVien/SinhVien.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://khavinhthuan114:mle5zI4MPN8L8RHg@cluster0.i1pnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    ),
    AuthModule,
    SinhVienModule,
  ],
})
export class AppModule {}

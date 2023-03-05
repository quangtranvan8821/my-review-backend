import { Module } from '@nestjs/common'
import { configureDb } from '../config/typeorm.config'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'

// import Module
import { TasksModule } from './tasks/tasks.module'
import { UserModule } from './user/user.module'
import { MediaModule } from './media/media.module'
import { CategoryModule } from './category/category.module'
import { CommentModule } from './comment/comment.module'
import { GroupModule } from './group/group.module'
import { HastagModule } from './hastag/hastag.module'
import { PostModule } from './post/post.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(configureDb()),
    TasksModule,
    UserModule,
    MediaModule,
    CategoryModule,
    CommentModule,
    GroupModule,
    HastagModule,
    PostModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

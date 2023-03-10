import { Category } from 'src/category/entities'
import { Hastag } from 'src/hastag/entities'
import { Media } from 'src/media/entities'
import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: 'name' })
  name: string

  @Column({ name: 'content', type: 'longtext' })
  content?: string

  @Column({name: 'created_by_id'})
  created_by_id?: number

  @ManyToOne(() => Category, (category) => category.posts)
  category: Category

  @ManyToMany(() => Media)
  @JoinTable({name: 'post_medias'})
  medias: Media[]

  @ManyToMany(() => Hastag)
  @JoinTable({name: 'post_hastags'})
  hastags: Hastag[]

  @CreateDateColumn()
  created_at?: Date | string

  @UpdateDateColumn()
  updated_at?: Date | string
}

import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne } from 'typeorm'

import { Responsavel } from './Responsavel'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('despesas')
class Despesas {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'id_responsavel'})
  //tipo do relacionamento:
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;

  @Column()
  id_responsavel: string;

  @Column()
  data_da_compra: Date;

  @Column()
  local_da_compra: string;

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Despesas }
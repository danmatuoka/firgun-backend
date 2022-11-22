import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  surname: string;

  @Column({ length: 40 })
  email: string;

  @Column()
  telephone: string;

  @Column()
  celphone: string;

  @Column()
  birth_date: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column({ length: 40 })
  city: string;

  @Column({ length: 40 })
  street: string;

  @Column({ length: 40 })
  district: string;

  @Column({ unique: true })
  cpf_cnpj: string;

  @Column({ length: 300 })
  meet_firgun: string;

  @Column({ length: 300 })
  motive: string;

  @Column({ default: false })
  is_adm: boolean;
}

export { User };

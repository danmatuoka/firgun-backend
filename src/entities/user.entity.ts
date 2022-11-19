import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 40 })
  name: string;

  @Column({ length: 40 })
  surname: string;

  @Column({ length: 40, unique: true })
  email: string;

  @Column()
  telephone: string;

  @Column({ unique: true })
  celphone: string;

  @Column()
  birth_date: string;

  @Column()
  cep: string;

  @Column()
  state: string;

  @Column()
  city: string;

  @Column()
  street: string;

  @Column()
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

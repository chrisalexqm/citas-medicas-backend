import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MedAppointment {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ name: 'patient_name' })
  patientName: string;

  @Column()
  patientPhone: string;

  @Column()
  email: string;

  @Column()
  date: string;

  @Column()
  time: string;

  @Column()
  site: string;
}
